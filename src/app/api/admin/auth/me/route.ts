import { NextRequest, NextResponse } from "next/server";
import { verifyAdminAuth } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    return NextResponse.json({
      success: true,
      admin: auth.admin,
    });
  } catch (error) {
    console.error("Admin me API error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์แอดมิน" },
      { status: 500 }
    );
  }
}
