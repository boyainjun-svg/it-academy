import nodemailer from "nodemailer";

export interface SendOtpEmailParams {
  toEmail: string;
  recipientName?: string;
  otpCode: string;
}

/**
 * Dispatch real OTP verification email using SMTP (e.g. Gmail / Brevo / Custom SMTP)
 * or Resend HTTP API.
 */
export async function sendOtpEmail({
  toEmail,
  recipientName,
  otpCode,
}: SendOtpEmailParams): Promise<{ success: boolean; message: string }> {
  const cleanEmail = toEmail.trim().toLowerCase();

  // 1. Try Resend HTTP API if configured
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.SMTP_FROM || "IT Academy <onboarding@resend.dev>",
          to: [cleanEmail],
          subject: `[IT Academy] รหัสยืนยัน OTP ของคุณคือ ${otpCode}`,
          html: generateOtpHtmlEmail({ recipientName, otpCode }),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log(`[Email Dispatch - Resend] Sent OTP to ${cleanEmail}`);
        return { success: true, message: `ส่งรหัส OTP ไปยัง ${cleanEmail} สำเร็จ` };
      } else {
        console.error("[Email Dispatch - Resend] Error:", data);
      }
    } catch (e) {
      console.error("[Email Dispatch - Resend] Exception:", e);
    }
  }

  // 2. Try SMTP Transport (Gmail, Brevo, College Mail, etc.)
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for 587
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const fromAddress = process.env.SMTP_FROM || `"IT Academy" <${smtpUser}>`;

      await transporter.sendMail({
        from: fromAddress,
        to: cleanEmail,
        subject: `[IT Academy] รหัสยืนยัน OTP: ${otpCode}`,
        html: generateOtpHtmlEmail({ recipientName, otpCode }),
      });

      console.log(`[Email Dispatch - SMTP] Sent OTP to ${cleanEmail} via ${smtpHost}`);
      return { success: true, message: `ส่งรหัส OTP ไปยัง ${cleanEmail} เรียบร้อยแล้ว` };
    } catch (error: any) {
      console.error("[Email Dispatch - SMTP] Failed to send email:", error.message);
      return {
        success: false,
        message: `ไม่สามารถส่งอีเมลไปยัง ${cleanEmail} ได้ (${error.message})`,
      };
    }
  }

  // 3. Fallback when SMTP is not configured yet
  console.warn(
    `[Email Dispatch] No SMTP or Resend credentials configured. Mock sending OTP ${otpCode} to ${cleanEmail}`
  );
  return {
    success: true,
    message: `ระบบสร้างรหัส OTP เรียบร้อย (รอการตั้งค่า SMTP ใน Environment Variables เพื่อส่งเข้ากล่องจดหมายจริง)`,
  };
}

function generateOtpHtmlEmail({
  recipientName,
  otpCode,
}: {
  recipientName?: string;
  otpCode: string;
}): string {
  const displayName = recipientName ? `คุณ${recipientName}` : "นักศึกษา/อาจารย์ IT Academy";

  return `
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>รหัสยืนยัน OTP - IT Academy</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 540px; background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); border-radius: 24px; border: 1px solid #334155; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
          <!-- Header -->
          <tr>
            <td style="padding: 36px 36px 20px 36px; text-align: center;">
              <div style="display: inline-block; width: 56px; height: 56px; line-height: 56px; border-radius: 16px; background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); font-size: 28px; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);">
                🎓
              </div>
              <h1 style="margin: 16px 0 6px 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                IT Academy อาชีวศึกษา
              </h1>
              <p style="margin: 0; font-size: 13px; color: #94a3b8;">
                ศูนย์การเรียนรู้เทคโนโลยีสารสนเทศและการฝึกปฏิบัติด้านโค้ดดิ้ง
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 0 36px 30px 36px; text-align: center;">
              <p style="margin: 0 0 18px 0; font-size: 15px; color: #cbd5e1; line-height: 1.6;">
                สวัสดีครับ <strong>${displayName}</strong><br/>
                กรุณาใช้รหัสยืนยัน OTP ด้านล่างนี้เพื่อยืนยันตัวตนในระบบ IT Academy:
              </p>

              <!-- OTP Big Badge -->
              <div style="margin: 24px auto; padding: 18px 24px; background: #020617; border: 2px dashed #3b82f6; border-radius: 18px; max-width: 320px;">
                <span style="font-family: 'Courier New', Courier, monospace; font-size: 38px; font-weight: 800; letter-spacing: 10px; color: #60a5fa; display: block; margin-left: 10px;">
                  ${otpCode}
                </span>
              </div>

              <p style="margin: 0; font-size: 12px; color: #f59e0b; font-weight: 600;">
                ⏱️ รหัสนี้มีอายุการใช้งาน 10 นาที (ใช้ได้เพียงครั้งเดียว)
              </p>

              <div style="margin-top: 24px; padding: 14px; background: rgba(15, 23, 42, 0.6); border-radius: 12px; border: 1px solid #1e293b; text-align: left;">
                <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                  🔒 <strong>คำแนะนำด้านความปลอดภัย:</strong> โปรดอย่าเปิดเผยรหัส OTP นี้แก่ผู้อื่น เจ้าหน้าที่ IT Academy จะไม่มีวันขอรหัสผ่านหรือรหัส OTP ของท่านไม่ว่าในกรณีใดๆ
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 36px 30px 36px; border-top: 1px solid #1e293b; text-align: center; background-color: #090d16;">
              <p style="margin: 0 0 6px 0; font-size: 11px; color: #64748b;">
                หากท่านไม่ได้เป็นผู้ทำรายการนี้ ท่านสามารถเพิกเฉยต่ออีเมลฉบับนี้ได้อย่างปลอดภัย
              </p>
              <p style="margin: 0; font-size: 10px; color: #475569;">
                © 2026 IT Academy. All rights reserved. • ศูนย์นวัตกรรมอาชีวศึกษา
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
