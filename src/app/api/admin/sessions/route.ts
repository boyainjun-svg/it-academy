import { NextRequest, NextResponse } from "next/server";
import { getAllSessions, deleteSession, getAllOtps } from "@/lib/server-db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sessions = await getAllSessions();
    const otps = await getAllOtps();
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
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { success: false, message: "กรุณาระบุ token ที่ต้องการยกเลิก" },
        { status: 400 }
      );
    }

    const deleted = await deleteSession(token);
    return NextResponse.json({
      success: deleted,
      message: deleted ? "ยกเลิกเซสชันสำเร็จ" : "ไม่พบเซสชันดังกล่าว",
    });
  } catch (error) {
    console.error("Admin delete session error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการลบเซสชัน" },
      { status: 500 }
    );
  }
}
