import { createUser, findUserByEmail } from "@/lib/server-db";
import { sendOtpEmail } from "@/lib/mailer";
import { checkRateLimit } from "@/lib/rate-limiter";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    
    // Rate Limiting: 10 registrations per hour per IP
    const limit = checkRateLimit(`register:${clientIp}`, 10, 60 * 60 * 1000);
    if (!limit.allowed) {
      return Response.json(
        { success: false, message: `มีการลงทะเบียนมากเกินไปจาก IP นี้ กรุณารออีก ${limit.resetInSeconds} วินาที` },
        { status: 429, headers: { "Retry-After": String(limit.resetInSeconds) } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { name, email, password, institution, department, educationLevel } = body;

    if (!name || !email || !password || typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      return Response.json(
        { success: false, message: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วนและถูกต้อง" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();

    if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > 254) {
      return Response.json(
        { success: false, message: "รูปแบบที่อยู่อีเมลไม่ถูกต้อง" },
        { status: 400 }
      );
    }

    if (cleanName.length < 2 || cleanName.length > 100) {
      return Response.json(
        { success: false, message: "ชื่อ-นามสกุลต้องมีความยาวระหว่าง 2 - 100 ตัวอักษร" },
        { status: 400 }
      );
    }

    if (password.length < 6 || password.length > 128) {
      return Response.json(
        { success: false, message: "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ถึง 128 ตัวอักษร" },
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
