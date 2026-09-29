import { validateSession } from "@/lib/server-db";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return Response.json(
        { success: false, message: "ไม่มี Session Token" },
        { status: 401 }
      );
    }

    const user = await validateSession(token);
    if (!user) {
      return Response.json(
        { success: false, message: "Session หมดอายุหรือไม่ถูกต้อง" },
        { status: 401 }
      );
    }

    return Response.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        institution: user.institution,
        department: user.department,
        educationLevel: user.educationLevel,
        isVerified: user.isVerified,
        role: user.role,
      },
    });
  } catch (error: any) {
    return Response.json(
      { success: false, message: "เกิดข้อผิดพลาดในการตรวจสอบเซสชัน" },
      { status: 500 }
    );
  }
}
