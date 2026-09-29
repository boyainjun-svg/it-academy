import { NextRequest, NextResponse } from "next/server";
import { getAllSessionsSafe, deleteSession, getAllOtpsSafe } from "@/lib/server-db";
import { verifyAdminAuth } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    // 2. Safe Retrieval: Plaintext session tokens and OTP codes are masked
    const sessions = await getAllSessionsSafe();
    const otps = await getAllOtpsSafe();

    return NextResponse.json({
      success: true,
      sessions,
      otps,
    });
  } catch (error) {
    console.error("Admin sessions error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการดึงข้อมูลเซสชัน" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    const { searchParams } = new URL(req.url);
    const identifier = searchParams.get("token") || searchParams.get("id");

    if (!identifier) {
      return NextResponse.json(
        { success: false, message: "กรุณาระบุรหัสเซสชันที่ต้องการยกเลิก" },
        { status: 400 }
      );
    }

    const deleted = await deleteSession(identifier);
    return NextResponse.json({
      success: deleted,
      message: deleted ? "ยกเลิกเซสชันสำเร็จ" : "ไม่พบเซสชันดังกล่าว หรือหมดอายุแล้ว",
    });
  } catch (error) {
    console.error("Admin delete session error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการลบเซสชัน" },
      { status: 500 }
    );
  }
}
