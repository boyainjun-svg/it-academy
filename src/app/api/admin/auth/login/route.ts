import { NextRequest, NextResponse } from "next/server";
import { loginAdmin } from "@/lib/server-db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "กรุณากรอกชื่อผู้ใช้และรหัสผ่านสำหรับแอดมิน" },
        { status: 400 }
      );
    }

    const result = await loginAdmin(username, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: result.message,
      adminUser: result.adminUser,
      token: result.token,
    });

    // Set secure admin cookie with httpOnly to prevent XSS cookie theft
    response.cookies.set("it_academy_admin_token", result.token || "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Admin login API error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์แอดมิน" },
      { status: 500 }
    );
  }
}
