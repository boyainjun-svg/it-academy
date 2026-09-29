import { NextRequest, NextResponse } from "next/server";
import { validateAdminSession, DbUser } from "./server-db";

export type SafeAdminUser = Omit<DbUser, "passwordHash" | "salt">;

/**
 * Verifies that the incoming request is authenticated as an Admin or Instructor.
 * Checks both 'Authorization: Bearer <token>' header and 'it_academy_admin_token' cookie.
 * Returns 401 Unauthorized NextResponse if invalid or missing.
 */
export async function verifyAdminAuth(req: NextRequest): Promise<
  | { authenticated: true; admin: SafeAdminUser; token: string }
  | { authenticated: false; response: NextResponse }
> {
  try {
    const authHeader = req.headers.get("authorization");
    let token = authHeader?.replace(/^Bearer\s+/i, "").trim();

    if (!token) {
      token = req.cookies.get("it_academy_admin_token")?.value?.trim();
    }

    if (!token) {
      return {
        authenticated: false,
        response: NextResponse.json(
          {
            success: false,
            error: "UNAUTHORIZED",
            message: "ไม่มีสิทธิ์เข้าถึง (ต้องเข้าสู่ระบบในฐานะผู้ดูแลระบบ Admin Authentication Required)",
          },
          { status: 401 }
        ),
      };
    }

    const admin = await validateAdminSession(token);
    if (!admin) {
      return {
        authenticated: false,
        response: NextResponse.json(
          {
            success: false,
            error: "INVALID_OR_EXPIRED_SESSION",
            message: "เซสชันผู้ดูแลระบบหมดอายุหรือไม่ถูกต้อง กรุณาเข้าสู่ระบบใหม่",
          },
          { status: 401 }
        ),
      };
    }

    return {
      authenticated: true,
      admin,
      token,
    };
  } catch (error) {
    console.error("[Admin Auth] Verification error:", error);
    return {
      authenticated: false,
      response: NextResponse.json(
        {
          success: false,
          error: "AUTH_VERIFICATION_ERROR",
          message: "เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์ผู้ดูแลระบบ",
        },
        { status: 500 }
      ),
    };
  }
}
