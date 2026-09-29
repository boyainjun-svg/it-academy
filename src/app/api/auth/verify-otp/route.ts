import { verifyUserOtp } from "@/lib/server-db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, code } = body;

    if (!email || !code) {
      return Response.json(
        { success: false, message: "กรุณาระบุอีเมลและรหัส OTP 6 หลัก" },
        { status: 400 }
      );
    }

    const result = await verifyUserOtp(email, code);

    if (!result.success) {
      return Response.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

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
