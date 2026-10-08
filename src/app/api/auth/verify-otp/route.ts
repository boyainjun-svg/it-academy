import { verifyUserOtp } from "@/lib/server-db";
import { checkRateLimit, resetRateLimit } from "@/lib/rate-limiter";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, code } = body;

    if (!email || !code || typeof email !== "string" || typeof code !== "string") {
      return Response.json(
        { success: false, message: "กรุณาระบุอีเมลและรหัส OTP 6 หลักให้ถูกต้อง" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanCode = code.trim();

    if (cleanCode.length !== 6 || !/^\d{6}$/.test(cleanCode)) {
      return Response.json(
        { success: false, message: "รหัส OTP ต้องเป็นตัวเลข 6 หลัก" },
        { status: 400 }
      );
    }

    // Rate Limiting: 10 attempts per 15 minutes
    const limit = checkRateLimit(`verify-otp:${cleanEmail}`, 10, 15 * 60 * 1000);
    if (!limit.allowed) {
      return Response.json(
        {
          success: false,
          message: `คุณกรอก OTP ถี่เกินไป กรุณารออีก ${limit.resetInSeconds} วินาทีแล้วลองใหม่`,
        },
        { status: 429, headers: { "Retry-After": String(limit.resetInSeconds) } }
      );
    }

    const result = await verifyUserOtp(cleanEmail, cleanCode);

    if (!result.success) {
      return Response.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    // Reset rate limiter on successful verification
    resetRateLimit(`verify-otp:${cleanEmail}`);

    const safeUser = result.user ? {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email,
      institution: result.user.institution,
      department: result.user.department,
      educationLevel: result.user.educationLevel,
      isVerified: result.user.isVerified,
      role: result.user.role,
    } : null;

    return Response.json({
      success: true,
      message: result.message,
      user: safeUser,
      sessionToken: result.sessionToken,
    });
  } catch (error: any) {
    console.error("Verify OTP API error:", error);
    return Response.json(
      { success: false, message: "เกิดข้อผิดพลาดในการตรวจสอบ OTP" },
      { status: 500 }
    );
  }
}
