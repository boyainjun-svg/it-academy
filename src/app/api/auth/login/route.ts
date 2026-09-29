import { loginUser } from "@/lib/server-db";
import { sendOtpEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { success: false, message: "กรุณาระบุอีเมลและรหัสผ่าน" },
        { status: 400 }
      );
    }

    const result = await loginUser(email, password);

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
