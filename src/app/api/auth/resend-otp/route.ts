import { resendOtpForEmail } from "@/lib/server-db";
import { sendOtpEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { success: false, message: "กรุณาระบุอีเมล" },
        { status: 400 }
      );
    }

    const result = await resendOtpForEmail(email);

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
