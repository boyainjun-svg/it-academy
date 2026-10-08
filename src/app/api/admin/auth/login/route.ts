import { NextRequest, NextResponse } from "next/server";
import { loginAdmin } from "@/lib/server-db";
import { checkRateLimit, resetRateLimit } from "@/lib/rate-limiter";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { username, password } = body;

    if (!username || !password || typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json(
        { success: false, message: "กรุณากรอกชื่อผู้ใช้และรหัสผ่านสำหรับแอดมินให้ถูกต้อง" },
        { status: 400 }
      );
    }

    const cleanUsername = username.trim().toLowerCase();
    if (cleanUsername.length > 100 || password.length > 128) {
      return NextResponse.json(
        { success: false, message: "ข้อมูลที่ส่งมีขนาดยาวเกินกำหนด" },
        { status: 400 }
      );
    }

    // Rate Limiting: 5 attempts per 15 minutes for admin portal
    const limit = checkRateLimit(`admin-login:${cleanUsername}`, 5, 15 * 60 * 1000);
    if (!limit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: `คุณพยายามเข้าสู่ระบบแอดมินถี่เกินไป กรุณารออีก ${limit.resetInSeconds} วินาที`,
        },
        { status: 429, headers: { "Retry-After": String(limit.resetInSeconds) } }
      );
    }

    const result = await loginAdmin(cleanUsername, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 401 }
      );
    }

    // Reset rate limiter on successful admin authentication
    resetRateLimit(`admin-login:${cleanUsername}`);

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
