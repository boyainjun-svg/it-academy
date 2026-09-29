import { NextRequest, NextResponse } from "next/server";
import { deleteSession } from "@/lib/server-db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    let token = authHeader?.replace("Bearer ", "").trim();

    if (!token) {
      token = req.cookies.get("it_academy_admin_token")?.value;
    }

    if (token) {
      await deleteSession(token);
    }

    const response = NextResponse.json({
      success: true,
      message: "ออกจากระบบแอดมินเรียบร้อย",
    });

    response.cookies.delete("it_academy_admin_token");
    return response;
  } catch (error) {
    console.error("Admin logout error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการออกจากระบบ" },
      { status: 500 }
    );
  }
}
