import { resendOtpForEmail } from "@/lib/server-db";
import { sendOtpEmail } from "@/lib/mailer";
import { checkRateLimit } from "@/lib/rate-limiter";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email } = body;

    if (!email || typeof email !== "string") {
      return Response.json(
        { success: false, message: "กรุณาระบุอีเมลที่ถูกต้อง" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail.length > 254) {
      return Response.json(
        { success: false, message: "อีเมลมีความยาวเกินกำหนด" },
        { status: 400 }
      );
    }

    // Rate Limiting: 3 resend attempts per 5 minutes
    const limit = checkRateLimit(`resend-otp:${cleanEmail}`, 3, 5 * 60 * 1000);
    if (!limit.allowed) {
      return Response.json(
        {
          success: false,
          message: `คุณขอรหัส OTP ถี่เกินไป กรุณารออีก ${limit.resetInSeconds} วินาที`,
        },
        { status: 429, headers: { "Retry-After": String(limit.resetInSeconds) } }
      );
    }

    const result = await resendOtpForEmail(cleanEmail);

    if (!result.success || !result.otpCode) {
      return Response.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    // Send real OTP email
    await sendOtpEmail({
      toEmail: email,
      otpCode: result.otpCode,
    });

    return Response.json({
      success: true,
      message: `ส่งรหัส OTP ใหม่ไปยังอีเมล ${email} เรียบร้อยแล้ว`,
    });
  } catch (error: any) {
    console.error("Resend OTP API error:", error);
    return Response.json(
      { success: false, message: "ไม่สามารถส่งรหัส OTP ได้ในขณะนี้" },
      { status: 500 }
    );
  }
}
