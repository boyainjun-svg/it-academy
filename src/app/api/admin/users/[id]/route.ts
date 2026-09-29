import { NextRequest, NextResponse } from "next/server";
import { updateUser, deleteUser, findUserById } from "@/lib/server-db";

export const dynamic = "force-dynamic";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();

    const existing = await findUserById(id);
    if (!existing) {
      return NextResponse.json(
        { success: false, message: "ไม่พบผู้ใช้งานนี้ในระบบ" },
        { status: 404 }
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
    const { id } = params;
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
