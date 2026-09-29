import { NextRequest, NextResponse } from "next/server";
import { updateUser, deleteUser, findUserById } from "@/lib/server-db";
import { verifyAdminAuth } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    const { id } = params;
    const body = await req.json();

    const existing = await findUserById(id);
    if (!existing) {
      return NextResponse.json(
        { success: false, message: "ไม่พบผู้ใช้งานนี้ในระบบ" },
        { status: 404 }
      );
    }

    // Protection: Prevent demoting or de-verifying Super Admin
    if (id === "usr_kitsvcadmin" && (body.role && body.role !== "admin")) {
      return NextResponse.json(
        { success: false, message: "ไม่อนุญาตให้ลดระดับสิทธิ์ของบัญชี Super Admin" },
        { status: 403 }
      );
    }

    const updated = await updateUser(id, body);
    if (!updated) {
      return NextResponse.json(
        { success: false, message: "ไม่สามารถอัปเดตข้อมูลผู้ใช้ได้" },
        { status: 500 }
      );
    }

    const { passwordHash, salt, ...safeUser } = updated;

    return NextResponse.json({
      success: true,
      message: "อัปเดตข้อมูลผู้ใช้งานเรียบร้อย",
      user: safeUser,
    });
  } catch (error) {
    console.error("Admin update user error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูล" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    const { id } = params;

    // Protection: Prevent deleting Super Admin
    if (id === "usr_kitsvcadmin") {
      return NextResponse.json(
        { success: false, message: "ไม่อนุญาตให้ลบบัญชี Super Admin ของระบบ" },
        { status: 403 }
      );
    }

    // Protection: Prevent deleting own active session account
    if (id === auth.admin.id) {
      return NextResponse.json(
        { success: false, message: "ไม่สามารถลบบัญชีผู้ดูแลระบบของตนเองในขณะที่กำลังใช้งานอยู่ได้" },
        { status: 400 }
      );
    }

    const success = await deleteUser(id);
    if (!success) {
      return NextResponse.json(
        { success: false, message: "ไม่พบผู้ใช้หรือลบไม่สำเร็จ" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "ลบผู้ใช้งานและเคลียร์ข้อมูลเซสชันเรียบร้อย",
    });
  } catch (error) {
    console.error("Admin delete user error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการลบผู้ใช้งาน" },
      { status: 500 }
    );
  }
}
