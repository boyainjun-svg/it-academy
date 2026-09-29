import { createUser, findUserByEmail } from "@/lib/server-db";
import { sendOtpEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, institution, department, educationLevel } = body;

    if (!name || !email || !password) {
      return Response.json(
        { success: false, message: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { success: false, message: "รูปแบบอีเมลไม่ถูกต้อง" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { success: false, message: "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร" },
        { status: 400 }
      );
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return Response.json(
        { success: false, message: "อีเมลนี้มีผู้ใช้งานในระบบแล้ว" },
        { status: 409 }
      );
    }

    const { user, otpCode } = await createUser({
      name,
      email,
      password,
      institution: institution || "วิทยาลัยเทคนิค / สถาบันการศึกษา",
      department: department || "แผนกเทคโนโลยีสารสนเทศ",
      educationLevel: educationLevel || "ปวช.",
    });

    // Send real OTP email to user
    await sendOtpEmail({
      toEmail: email,
      recipientName: name,
      otpCode,
    });

    return Response.json({
      success: true,
      message: `ลงทะเบียนสำเร็จ! ระบบได้ส่งรหัส OTP 6 หลักไปยังอีเมล ${email} เรียบร้อยแล้ว`,
      email: user.email,
    });
  } catch (error: any) {
    console.error("Register API error:", error);
    return Response.json(
      { success: false, message: "เกิดข้อผิดพลาดในการประมวลผลเซิร์ฟเวอร์" },
      { status: 500 }
    );
  }
}
