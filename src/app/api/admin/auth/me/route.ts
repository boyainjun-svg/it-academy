import { NextRequest, NextResponse } from "next/server";
import { validateAdminSession } from "@/lib/server-db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    let token = authHeader?.replace("Bearer ", "").trim();

    if (!token) {
      token = req.cookies.get("it_academy_admin_token")?.value;
    }

    if (!token) {
      return NextResponse.json(
        { success: false, message: "ไม่มีสิทธิ์เข้าถึง (ต้องเข้าสู่ระบบแอดมิน)" },
        { status: 401 }
      );
    }

    const admin = await validateAdminSession(token);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "เซสชันแอดมินหมดอายุหรือไม่ถูกต้อง" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      admin,
    });
  } catch (error) {
    console.error("Admin me API error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์แอดมิน" },
      { status: 500 }
    );
  }
}
