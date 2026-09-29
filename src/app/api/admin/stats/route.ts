import { NextRequest, NextResponse } from "next/server";
import { getAdminStats } from "@/lib/server-db";
import { verifyAdminAuth } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

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
