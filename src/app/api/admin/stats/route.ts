import { NextResponse } from "next/server";
import { getAdminStats } from "@/lib/server-db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const stats = await getAdminStats();
    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการดึงสถิติเซิร์ฟเวอร์" },
      { status: 500 }
    );
  }
}
