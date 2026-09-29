import { NextRequest, NextResponse } from "next/server";
import { getAllUsers, adminCreateUser, findUserByEmail } from "@/lib/server-db";
import { verifyAdminAuth } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase().trim() || "";
    const role = searchParams.get("role") || "";
    const verified = searchParams.get("verified");

    let rawUsers = await getAllUsers();

    // Defense-in-depth: Ensure NO credential fields (hashes/salts) ever leak
    let users = rawUsers.map((u: any) => {
      const { passwordHash, salt, ...safeUser } = u;
      return safeUser;
    });

    if (search) {
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(search) ||
          u.email.toLowerCase().includes(search) ||
          u.institution.toLowerCase().includes(search) ||
          u.department.toLowerCase().includes(search)
      );
    }

    if (role && role !== "all") {
      users = users.filter((u) => u.role === role);
    }

    if (verified !== null && verified !== undefined && verified !== "all") {
      const isVer = verified === "true";
      users = users.filter((u) => u.isVerified === isVer);
    }

    // Sort by latest createdAt descending
    users.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      success: true,
      users,
      total: users.length,
    });
  } catch (error) {
    console.error("Admin get users error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้งาน" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Mandatory Admin Authentication Gate
    const auth = await verifyAdminAuth(req);
    if (!auth.authenticated) {
      return auth.response;
    }

    const body = await req.json();
    const { name, email, password, institution, department, educationLevel, role, isVerified } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "กรุณาระบุชื่อและอีเมล" },
        { status: 400 }
      );
    }

    const existing = await findUserByEmail(email);
    if (existing) {
      return NextResponse.json(
        { success: false, message: "อีเมลนี้มีอยู่ในระบบแล้ว" },
        { status: 400 }
      );
    }

    const newUser = await adminCreateUser({
      name,
      email,
      password: password || "123456",
      institution: institution || "ไม่ระบุสถาบัน",
      department: department || "เทคโนโลยีสารสนเทศ",
      educationLevel: educationLevel || "ปวช. 1",
      role: role || "student",
      isVerified: isVerified !== undefined ? isVerified : true,
    });

    const { passwordHash, salt, ...safeUser } = newUser;

    return NextResponse.json({
      success: true,
      message: "สร้างผู้ใช้งานสำเร็จ",
      user: safeUser,
    });
  } catch (error) {
    console.error("Admin create user error:", error);
    return NextResponse.json(
      { success: false, message: "เกิดข้อผิดพลาดในการสร้างผู้ใช้งาน" },
      { status: 500 }
    );
  }
}
