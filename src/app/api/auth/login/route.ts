import { loginUser } from "@/lib/server-db";
import { sendOtpEmail } from "@/lib/mailer";
import { checkRateLimit, resetRateLimit } from "@/lib/rate-limiter";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, password } = body;

    if (!email || !password || typeof email !== "string" || typeof password !== "string") {
      return Response.json(
        { success: false, message: "กรุณาระบุอีเมลและรหัสผ่านให้ถูกต้อง" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail.length > 254 || password.length > 128) {
      return Response.json(
        { success: false, message: "ข้อมูลที่ส่งมีขนาดยาวเกินกำหนด" },
        { status: 400 }
      );
    }

    // Rate Limiting: 5 attempts per 15 minutes per email
    const limit = checkRateLimit(`login:${cleanEmail}`, 5, 15 * 60 * 1000);
    if (!limit.allowed) {
      return Response.json(
        {
          success: false,
          message: `คุณพยายามเข้าสู่ระบบถี่เกินไป กรุณารออีก ${limit.resetInSeconds} วินาทีแล้วลองใหม่`,
        },
        {
          status: 429,
          headers: { "Retry-After": String(limit.resetInSeconds) },
        }
      );
    }

    const result = await loginUser(cleanEmail, password);

    if (result.isUnverified) {
      if (result.otpCode) {
        await sendOtpEmail({
          toEmail: result.user?.email || email,
          recipientName: result.user?.name,
          otpCode: result.otpCode,
        });
      }

      return Response.json(
        {
          success: false,
          isUnverified: true,
          email: result.user?.email,
          message: "บัญชีของคุณยังไม่ได้ยืนยันอีเมล ระบบได้ส่งรหัส OTP 6 หลักไปยังอีเมลของคุณแล้ว",
        },
        { status: 403 }
      );
    }

    if (!result.success || !result.user) {
      return Response.json(
        { success: false, message: result.message },
        { status: 401 }
      );
    }

    const safeUser = {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email,
      institution: result.user.institution,
      department: result.user.department,
      educationLevel: result.user.educationLevel,
      isVerified: result.user.isVerified,
      role: result.user.role,
    };

    // Reset rate limiter on successful authentication
    resetRateLimit(`login:${cleanEmail}`);

    return Response.json({
      success: true,
      message: result.message,
      user: safeUser,
      sessionToken: result.sessionToken,
    });
  } catch (error: any) {
    console.error("Login API error:", error);
    return Response.json(
      { success: false, message: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ" },
      { status: 500 }
    );
  }
}
