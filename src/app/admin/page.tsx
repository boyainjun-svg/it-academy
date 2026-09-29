"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Shield,
  Server,
  Database,
  Activity,
  CheckCircle,
  Clock,
  Search,
  Plus,
  Trash2,
  Edit3,
  Download,
  RefreshCw,
  FileText,
  Lock,
  School,
  Cpu,
  Layers,
  AlertTriangle,
  X,
  Check,
  Award,
  BookOpen,
  LogOut,
  UserCheck,
} from "lucide-react";
import { VOCATIONAL_INSTITUTIONS } from "@/data/institutions";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  institution: string;
  department: string;
  educationLevel: string;
  isVerified: boolean;
  role: "student" | "instructor" | "admin";
  createdAt: string;
  updatedAt: string;
}

interface AdminTelemetry {
  status: string;
  dbStatus: string;
  dbType: string;
  dbPath: string;
  dbFileSizeKb: number;
  uptimeSeconds: number;
  nodeVersion: string;
  platform: string;
  arch: string;
  heapUsedMb: number;
  heapTotalMb: number;
  rssMb: number;
  timestamp: string;
}

interface AdminStats {
  totalUsers: number;
  verifiedUsers: number;
  unverifiedUsers: number;
  roles: {
    students: number;
    instructors: number;
    admins: number;
  };
  activeSessions: number;
  activeOtps: number;
  institutions: { name: string; count: number }[];
  departments: { name: string; count: number }[];
  educationLevels: { name: string; count: number }[];
  telemetry: AdminTelemetry;
}

interface SessionItem {
  id?: string;
  token: string;
  tokenMasked?: string;
  userId: string;
  expiresAt: number;
  user?: {
    name: string;
    email: string;
    institution: string;
  };
}

interface OtpItem {
  email: string;
  code: string;
  expiresAt: number;
  createdAt: number;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [currentAdmin, setCurrentAdmin] = useState<{
    id: string;
    name: string;
    email: string;
    role: string;
    institution?: string;
  } | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const [activeTab, setActiveTab] = useState<
    "overview" | "users" | "colleges" | "security" | "raw"
  >("overview");

  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [sessions, setSessions] = useState<SessionItem[]>([]);
  const [otps, setOtps] = useState<OtpItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [verifiedFilter, setVerifiedFilter] = useState("all");

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [deleteConfirmUser, setDeleteConfirmUser] = useState<AdminUser | null>(null);
  const [actionSuccessMessage, setActionSuccessMessage] = useState("");

  // Add User Form State
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    institution: "วิทยาลัยเทคนิคเชียงใหม่",
    department: "เทคโนโลยีสารสนเทศ",
    educationLevel: "ปวช. 1",
    role: "student" as "student" | "instructor" | "admin",
    isVerified: true,
  });

  const fetchData = async () => {
    setIsRefreshing(true);
    try {
      const token = localStorage.getItem("it_academy_admin_token") || "";
      const authHeaders = { Authorization: `Bearer ${token}` };

      // 1. Fetch Stats
      const statsRes = await fetch("/api/admin/stats", { headers: authHeaders });
      const statsJson = await statsRes.json();
      if (statsJson.success) {
        setStats(statsJson.data);
      }

      // 2. Fetch Users
      const usersRes = await fetch("/api/admin/users", { headers: authHeaders });
      const usersJson = await usersRes.json();
      if (usersJson.success) {
        setUsers(usersJson.users);
      }

      // 3. Fetch Sessions
      const sessRes = await fetch("/api/admin/sessions", { headers: authHeaders });
      const sessJson = await sessRes.json();
      if (sessJson.success) {
        setSessions(sessJson.sessions || []);
        setOtps(sessJson.otps || []);
      }
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const checkAdminAuth = async () => {
      try {
        const token = localStorage.getItem("it_academy_admin_token");
        if (!token) {
          router.push("/admin/login");
          return;
        }

        const res = await fetch("/api/admin/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (data.success && data.admin) {
          setCurrentAdmin(data.admin);
          setIsAuthChecking(false);
          fetchData();
        } else {
          localStorage.removeItem("it_academy_admin_token");
          router.push("/admin/login");
        }
      } catch (e) {
        router.push("/admin/login");
      }
    };

    checkAdminAuth();
  }, [router]);

  const handleAdminLogout = async () => {
    try {
      const token = localStorage.getItem("it_academy_admin_token");
      await fetch("/api/admin/auth/logout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (e) {}
    localStorage.removeItem("it_academy_admin_token");
    localStorage.removeItem("it_academy_admin_user");
    router.push("/admin/login");
  };

  const showBanner = (msg: string) => {
    setActionSuccessMessage(msg);
    setTimeout(() => setActionSuccessMessage(""), 3500);
  };

  const getAdminJsonHeaders = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("it_academy_admin_token") || "" : "";
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  const getAdminAuthHeaders = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("it_academy_admin_token") || "" : "";
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  // User Actions
  const handleToggleVerify = async (user: AdminUser) => {
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: "PATCH",
        headers: getAdminJsonHeaders(),
        body: JSON.stringify({ isVerified: !user.isVerified }),
      });
      const data = await res.json();
      if (data.success) {
        showBanner(`เปลี่ยนสถานะยืนยันของ ${user.name} สำเร็จ`);
        fetchData();
      } else {
        alert(data.message || "เกิดข้อผิดพลาดในการเปลี่ยนสถานะ");
      }
    } catch (e) {
      alert("เกิดข้อผิดพลาดในการเปลี่ยนสถานะ");
    }
  };

  const handleChangeRole = async (user: AdminUser, newRole: "student" | "instructor" | "admin") => {
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: "PATCH",
        headers: getAdminJsonHeaders(),
        body: JSON.stringify({ role: newRole }),
      });
      const data = await res.json();
      if (data.success) {
        showBanner(`เปลี่ยนสิทธิ์ ${user.name} เป็น ${newRole} สำเร็จ`);
        fetchData();
      } else {
        alert(data.message || "เกิดข้อผิดพลาดในการเปลี่ยนบทบาท");
      }
    } catch (e) {
      alert("เกิดข้อผิดพลาดในการเปลี่ยนบทบาท");
    }
  };

  const handleDeleteUser = async (user: AdminUser) => {
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: "DELETE",
        headers: getAdminAuthHeaders(),
      });
      const data = await res.json();
      if (data.success) {
        showBanner(`ลบผู้ใช้ ${user.name} เรียบร้อยแล้ว`);
        setDeleteConfirmUser(null);
        fetchData();
      } else {
        alert(data.message || "ไม่สามารถลบผู้ใช้งานได้");
      }
    } catch (e) {
      alert("ไม่สามารถลบผู้ใช้งานได้");
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserData.name || !newUserData.email) {
      alert("กรุณากรอกชื่อและอีเมล");
      return;
    }

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: getAdminJsonHeaders(),
        body: JSON.stringify(newUserData),
      });
      const data = await res.json();
      if (data.success) {
        showBanner(`สร้างผู้ใช้ใหม่ ${newUserData.name} สำเร็จ`);
        setShowAddModal(false);
        setNewUserData({
          name: "",
          email: "",
          password: "",
          institution: "วิทยาลัยเทคนิคเชียงใหม่",
          department: "เทคโนโลยีสารสนเทศ",
          educationLevel: "ปวช. 1",
          role: "student",
          isVerified: true,
        });
        fetchData();
      } else {
        alert(data.message || "เกิดข้อผิดพลาด");
      }
    } catch (e) {
      alert("ไม่สามารถสร้างผู้ใช้ได้");
    }
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      const res = await fetch(`/api/admin/users/${selectedUser.id}`, {
        method: "PATCH",
        headers: getAdminJsonHeaders(),
        body: JSON.stringify({
          name: selectedUser.name,
          institution: selectedUser.institution,
          department: selectedUser.department,
          educationLevel: selectedUser.educationLevel,
          role: selectedUser.role,
          isVerified: selectedUser.isVerified,
        }),
      });
      const data = await res.json();
      if (data.success) {
        showBanner(`อัปเดตข้อมูล ${selectedUser.name} สำเร็จ`);
        setShowEditModal(false);
        setSelectedUser(null);
        fetchData();
      } else {
        alert(data.message || "ไม่สามารถอัปเดตข้อมูลได้");
      }
    } catch (e) {
      alert("ไม่สามารถอัปเดตข้อมูลได้");
    }
  };

  const handleTerminateSession = async (token: string) => {
    try {
      const res = await fetch(`/api/admin/sessions?token=${encodeURIComponent(token)}`, {
        method: "DELETE",
        headers: getAdminAuthHeaders(),
      });
      const data = await res.json();
      if (data.success) {
        showBanner("ยกเลิกเซสชันสำเร็จ");
        fetchData();
      } else {
        alert(data.message || "ไม่สามารถยกเลิกเซสชันได้");
      }
    } catch (e) {
      alert("ไม่สามารถยกเลิกเซสชันได้");
    }
  };

  // Export User List as CSV
  const exportUsersCsv = () => {
    if (!users.length) return;
    const headers = [
      "User ID",
      "Full Name",
      "Email",
      "Institution / College",
      "Department",
      "Education Level",
      "Role",
      "Is Verified",
      "Created At",
    ];
    const rows = users.map((u) => [
      `"${u.id}"`,
      `"${u.name}"`,
      `"${u.email}"`,
      `"${u.institution}"`,
      `"${u.department}"`,
      `"${u.educationLevel}"`,
      `"${u.role}"`,
      `"${u.isVerified ? "Yes" : "No"}"`,
      `"${u.createdAt}"`,
    ]);

    const csvContent =
      "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `it_academy_users_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Users
  const filteredUsers = users.filter((u) => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      u.name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.institution.toLowerCase().includes(q) ||
      u.department.toLowerCase().includes(q);

    const matchRole = roleFilter === "all" || u.role === roleFilter;
    const matchVerified =
      verifiedFilter === "all" ||
      (verifiedFilter === "verified" ? u.isVerified : !u.isVerified);

    return matchSearch && matchRole && matchVerified;
  });

  const formatUptime = (sec: number) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${hours} ชม. ${minutes} นาที ${seconds} วินาที`;
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4 animate-pulse">
          <Shield className="w-8 h-8 text-blue-400" />
        </div>
        <p className="text-slate-300 font-semibold text-sm">กำลังตรวจสอบสิทธิ์ผู้ดูแลระบบ...</p>
        <p className="text-slate-500 text-xs mt-1">IT Academy Admin Security Gateway</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Action Success Toast Banner */}
      {actionSuccessMessage && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-emerald-400 animate-bounce">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span className="font-bold text-sm">{actionSuccessMessage}</span>
        </div>
      )}

      {/* Top Admin Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold text-white tracking-tight">
                  IT Academy Admin Backoffice
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  ระบบหลังบ้าน
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  เซิร์ฟเวอร์ออนไลน์
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                ศูนย์จัดการข้อมูลนักเรียน วิทยาลัย คอร์สเรียน และสถานะระบบแบบ Realtime
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-400">ผู้ดูแล:</span>
              <span className="font-bold text-white font-mono">{currentAdmin?.name || "kitsvcadmin"}</span>
            </div>
            <button
              onClick={fetchData}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
              รีเฟรชข้อมูล
            </button>
            <button
              onClick={handleAdminLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-bold rounded-xl transition-all shadow-md shadow-rose-600/10"
            >
              <LogOut className="w-3.5 h-3.5" />
              ออกจากระบบแอดมิน
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto flex gap-2 mt-4 overflow-x-auto hide-scrollbar pt-2 border-t border-slate-800/80">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === "overview"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Activity className="w-4 h-4" />
            ภาพรวมระบบ & สถานะเซิร์ฟเวอร์
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === "users"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Users className="w-4 h-4" />
            จัดการผู้ใช้ในฐานข้อมูล ({users.length})
          </button>
          <button
            onClick={() => setActiveTab("colleges")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === "colleges"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <School className="w-4 h-4" />
            สถิติตามวิทยาลัย ({stats?.institutions.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === "security"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Lock className="w-4 h-4" />
            เซสชันออนไลน์ & OTP Queue
          </button>
          <button
            onClick={() => setActiveTab("raw")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === "raw"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Database className="w-4 h-4" />
            ตรวจสอบฐานข้อมูลดิบ (JSON DB)
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* ======================================================== */}
        {/* TAB 1: OVERVIEW & SERVER TELEMETRY */}
        {/* ======================================================== */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    ผู้ใช้ทั้งหมดในระบบ
                  </span>
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mt-3">
                  {stats?.totalUsers || 0}
                  <span className="text-sm font-normal text-slate-400 ml-2">คน</span>
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                  <span className="text-emerald-400 font-bold">
                    นักเรียน {stats?.roles.students || 0}
                  </span>
                  <span>•</span>
                  <span className="text-purple-400 font-bold">
                    อาจารย์ {stats?.roles.instructors || 0}
                  </span>
                  <span>•</span>
                  <span className="text-amber-400 font-bold">
                    แอดมิน {stats?.roles.admins || 0}
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    ยืนยันตัวตนสำเร็จ (OTP Verified)
                  </span>
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mt-3">
                  {stats?.verifiedUsers || 0}
                  <span className="text-sm font-normal text-slate-400 ml-2">บัญชี</span>
                </div>
                <div className="mt-3 text-xs text-slate-400 flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">
                    {stats?.totalUsers
                      ? Math.round(((stats.verifiedUsers || 0) / stats.totalUsers) * 100)
                      : 100}
                    %
                  </span>
                  <span>ผ่านการยืนยันอีเมลแล้ว</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    วิทยาลัย / สถาบันที่เข้าร่วม
                  </span>
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <School className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mt-3">
                  {stats?.institutions.length || 0}
                  <span className="text-sm font-normal text-slate-400 ml-2">แห่ง</span>
                </div>
                <p className="mt-3 text-xs text-slate-400 truncate">
                  ครอบคลุมอาชีวศึกษาทั่วประเทศ
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl relative overflow-hidden shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    เซสชันที่ออนไลน์อยู่
                  </span>
                  <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl">
                    <Activity className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mt-3">
                  {stats?.activeSessions || 0}
                  <span className="text-sm font-normal text-slate-400 ml-2">เซสชัน</span>
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  รหัส OTP ในคิว: {stats?.activeOtps || 0} รายการ
                </p>
              </div>
            </div>

            {/* Server Health & Database Status Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Database Status */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        สถานะฐานข้อมูล (JSON Database Engine)
                      </h3>
                      <p className="text-xs text-slate-400">
                        ระบบจัดเก็บข้อมูลแบบ ACID Persistent Stream
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    เชื่อมต่อสมบูรณ์
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">ตำแหน่งไฟล์ฐานข้อมูล</span>
                    <span className="text-xs font-mono font-bold text-slate-200 truncate block mt-1">
                      {stats?.telemetry.dbPath}
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">ขนาดไฟล์บนดิสก์</span>
                    <span className="text-sm font-bold text-white block mt-1">
                      {stats?.telemetry.dbFileSizeKb || 0} KB
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">โครงสร้างตารางข้อมูล</span>
                    <span className="text-xs font-bold text-slate-300 block mt-1">
                      users, otps, sessions
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">กลไกความปลอดภัยรหัสผ่าน</span>
                    <span className="text-xs font-bold text-emerald-400 block mt-1">
                      PBKDF2-SHA512 + Salt
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    อัปเดตล่าสุด: {new Date(stats?.telemetry.timestamp || "").toLocaleTimeString()}
                  </span>
                  <button
                    onClick={() => setActiveTab("raw")}
                    className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
                  >
                    ดูเนื้อหาไฟล์ JSON ➔
                  </button>
                </div>
              </div>

              {/* Node.js & Server Telemetry */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        ทรัพยากรและการประมวลผล (Server Telemetry)
                      </h3>
                      <p className="text-xs text-slate-400">
                        Node.js Runtime & OS Host Status
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Next.js 14 Standalone
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">เวอร์ชัน Node.js</span>
                    <span className="text-sm font-mono font-bold text-white block mt-1">
                      {stats?.telemetry.nodeVersion}
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">ระบบปฏิบัติการ (OS)</span>
                    <span className="text-sm font-bold text-white block mt-1">
                      {stats?.telemetry.platform} ({stats?.telemetry.arch})
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">หน่วยความจำ Heap Used</span>
                    <span className="text-sm font-bold text-white block mt-1">
                      {stats?.telemetry.heapUsedMb} MB / {stats?.telemetry.heapTotalMb} MB
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">ระยะเวลาทำงาน (Uptime)</span>
                    <span className="text-xs font-bold text-emerald-400 block mt-1">
                      {formatUptime(stats?.telemetry.uptimeSeconds || 0)}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    RSS Memory: {stats?.telemetry.rssMb} MB
                  </span>
                  <span className="text-xs text-slate-400">
                    สถานะการทำงาน: ปกติ (Green)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                คำสั่งการจัดการเร่งด่วน (Quick Administrator Operations)
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-600/20 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  เพิ่มผู้ใช้ใหม่ (Add User)
                </button>
                <button
                  onClick={exportUsersCsv}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition-all"
                >
                  <Download className="w-4 h-4" />
                  ส่งออกรายงานนักเรียนเป็น CSV
                </button>
                <button
                  onClick={() => setActiveTab("users")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition-all"
                >
                  <Users className="w-4 h-4" />
                  จัดการสิทธิ์ & ผู้ใช้งาน ({users.length})
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: USER DATABASE MANAGEMENT */}
        {/* ======================================================== */}
        {activeTab === "users" && (
          <div className="space-y-6">
            {/* Control Bar: Search & Filters */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="ค้นหาตามชื่อ, อีเมล, วิทยาลัย, แผนก..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Filters & Add Button */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-xs rounded-xl px-3 py-2 text-slate-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">บทบาททั้งหมด</option>
                  <option value="student">นักเรียน (Student)</option>
                  <option value="instructor">อาจารย์ (Instructor)</option>
                  <option value="admin">แอดมิน (Admin)</option>
                </select>

                <select
                  value={verifiedFilter}
                  onChange={(e) => setVerifiedFilter(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-xs rounded-xl px-3 py-2 text-slate-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="all">สถานะยืนยันทั้งหมด</option>
                  <option value="verified">ยืนยันแล้ว</option>
                  <option value="unverified">รอยืนยัน OTP</option>
                </select>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20"
                >
                  <Plus className="w-3.5 h-3.5" />
                  เพิ่มผู้ใช้ใหม่
                </button>

                <button
                  onClick={exportUsersCsv}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
                  title="ดาวน์โหลดเป็นไฟล์ CSV"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* User Data Table */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm">
                  <thead className="bg-slate-900 text-slate-400 font-bold border-b border-slate-800 text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-3.5">ผู้ใช้งาน</th>
                      <th className="px-5 py-3.5">วิทยาลัย / สถาบัน</th>
                      <th className="px-5 py-3.5">แผนก / ระดับชั้น</th>
                      <th className="px-5 py-3.5">สถานะ OTP</th>
                      <th className="px-5 py-3.5">บทบาท (Role)</th>
                      <th className="px-5 py-3.5 text-right">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="text-center py-10 text-slate-500">
                          ไม่พบข้อมูลผู้ใช้งานตามเงื่อนไขที่ค้นหา
                        </td>
                      </tr>
                    ) : (
                      filteredUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-slate-900/50 transition-colors"
                        >
                          {/* User info */}
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                                  user.role === "admin"
                                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                                    : user.role === "instructor"
                                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                    : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                }`}
                              >
                                {user.name ? user.name.charAt(0) : "U"}
                              </div>
                              <div>
                                <span className="font-bold text-white block">
                                  {user.name}
                                </span>
                                <span className="text-xs text-slate-400 font-mono block">
                                  {user.email}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Institution */}
                          <td className="px-5 py-4">
                            <span className="font-medium text-slate-200 block truncate max-w-[200px]">
                              {user.institution}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              ID: {user.id.slice(0, 10)}...
                            </span>
                          </td>

                          {/* Department & Level */}
                          <td className="px-5 py-4">
                            <span className="text-slate-200 block">
                              {user.department}
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {user.educationLevel}
                            </span>
                          </td>

                          {/* Verification Status */}
                          <td className="px-5 py-4">
                            {user.isVerified ? (
                              <button
                                onClick={() => handleToggleVerify(user)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
                                title="คลิกเพื่อยกเลิกการยืนยัน"
                              >
                                <CheckCircle className="w-3.5 h-3.5" />
                                ยืนยันแล้ว
                              </button>
                            ) : (
                              <button
                                onClick={() => handleToggleVerify(user)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors"
                                title="คลิกเพื่อบังคับยืนยันทันที"
                              >
                                <Clock className="w-3.5 h-3.5" />
                                รอยืนยัน (คลิกเพื่อยืนยัน)
                              </button>
                            )}
                          </td>

                          {/* Role Selector */}
                          <td className="px-5 py-4">
                            <select
                              value={user.role}
                              onChange={(e) =>
                                handleChangeRole(
                                  user,
                                  e.target.value as "student" | "instructor" | "admin"
                                )
                              }
                              className={`text-xs font-bold rounded-lg px-2 py-1 border transition-colors focus:outline-none ${
                                user.role === "admin"
                                  ? "bg-amber-950/40 text-amber-300 border-amber-600/40"
                                  : user.role === "instructor"
                                  ? "bg-purple-950/40 text-purple-300 border-purple-600/40"
                                  : "bg-slate-900 text-blue-300 border-slate-700"
                              }`}
                            >
                              <option value="student">Student</option>
                              <option value="instructor">Instructor</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>

                          {/* Actions */}
                          <td className="px-5 py-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => {
                                  setSelectedUser(user);
                                  setShowEditModal(true);
                                }}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                                title="แก้ไขข้อมูล"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => setDeleteConfirmUser(user)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition-colors"
                                title="ลบผู้ใช้"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>
                  แสดงผล <strong>{filteredUsers.length}</strong> จาก{" "}
                  <strong>{users.length}</strong> รายการ
                </span>
                <span>ฐานข้อมูล: src/data/db.json</span>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: COLLEGES & ANALYTICS */}
        {/* ======================================================== */}
        {activeTab === "colleges" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Colleges Breakdown */}
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <School className="w-5 h-5 text-indigo-400" />
                  การกระจายตัวของนักเรียนตามวิทยาลัย / สถาบัน
                </h3>
                <div className="space-y-4">
                  {stats?.institutions.map((item, idx) => {
                    const percent = stats.totalUsers
                      ? Math.round((item.count / stats.totalUsers) * 100)
                      : 0;
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold text-slate-200">
                            {idx + 1}. {item.name}
                          </span>
                          <span className="text-slate-400 font-mono">
                            {item.count} คน ({percent}%)
                          </span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Departments & Education Levels */}
              <div className="space-y-6">
                {/* Department breakdown */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    แผนกวิชาที่ลงทะเบียนเรียน
                  </h3>
                  <div className="space-y-3">
                    {stats?.departments.map((dept, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800"
                      >
                        <span className="font-medium text-xs text-slate-200">
                          {dept.name}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300">
                          {dept.count} คน
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level breakdown */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    ระดับชั้นการศึกษา
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {stats?.educationLevels.map((lvl, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-center flex-1 min-w-[120px]"
                      >
                        <span className="text-xs text-slate-400 block">{lvl.name}</span>
                        <span className="text-xl font-extrabold text-white mt-1 block">
                          {lvl.count} คน
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: SESSIONS & SECURITY */}
        {/* ======================================================== */}
        {activeTab === "security" && (
          <div className="space-y-6">
            {/* Active Sessions */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    เซสชันที่กำลังออนไลน์ (Active Sessions)
                  </h3>
                  <p className="text-xs text-slate-400">
                    รายการโทเค็นที่ยืนยันตัวตนแล้วและมีอายุการใช้งาน 30 วัน
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">
                  {sessions.length} เซสชัน
                </span>
              </div>

              {sessions.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-sm">
                  ไม่มีเซสชันที่ออนไลน์อยู่ในขณะนี้
                </div>
              ) : (
                <div className="space-y-3">
                  {sessions.map((sess, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">
                            {sess.user?.name || "ไม่ทราบชื่อ"}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            ({sess.user?.email || sess.userId})
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                          <span>สถาบัน: {sess.user?.institution || "ไม่ระบุ"}</span>
                          <span>•</span>
                          <span className="font-mono">
                            Session: {sess.tokenMasked || (sess.token.length > 12 ? sess.token.slice(0, 8) + "..." + sess.token.slice(-4) : "******")}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400">
                          หมดอายุ: {new Date(sess.expiresAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleTerminateSession(sess.token)}
                          className="px-3 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-bold transition-colors"
                        >
                          ยกเลิกเซสชัน
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pending OTP Queue */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Lock className="w-5 h-5 text-amber-400" />
                    คิวรหัส OTP ยืนยันอีเมล (Pending OTP Queue)
                  </h3>
                  <p className="text-xs text-slate-400">
                    รหัส OTP 6 หลักที่กำลังรอการยืนยันจากผู้สมัคร (อายุ 10 นาที)
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">
                  {otps.length} รายการ
                </span>
              </div>

              {otps.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-sm">
                  ไม่มีรหัส OTP ที่ค้างอยู่ในคิว
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {otps.map((otp, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <span className="font-mono text-xs text-slate-300 block">
                          {otp.email}
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">
                          สร้างเมื่อ: {new Date(otp.createdAt).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-mono font-extrabold text-amber-400 bg-amber-950/40 px-3 py-1 rounded-lg border border-amber-600/30">
                          {otp.code}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-1">
                          หมดอายุใน{" "}
                          {Math.max(
                            0,
                            Math.floor((otp.expiresAt - Date.now()) / 1000 / 60)
                          )}{" "}
                          นาที
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: RAW JSON DATABASE INSPECTOR */}
        {/* ======================================================== */}
        {activeTab === "raw" && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  ตรวจสอบไฟล์ฐานข้อมูลสด (Live JSON Inspector)
                </h3>
                <p className="text-xs text-slate-400">
                  ไฟล์ src/data/db.json ขนาด {stats?.telemetry.dbFileSizeKb || 0} KB
                </p>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    JSON.stringify({ users, sessions, otps }, null, 2)
                  );
                  showBanner("คัดลอก JSON ฐานข้อมูลเรียบร้อยแล้ว");
                }}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/20"
              >
                คัดลอก JSON ทั้งหมด
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 overflow-x-auto max-h-[600px] text-xs font-mono text-emerald-400 hide-scrollbar">
              <pre>{JSON.stringify({ users, sessions, otps }, null, 2)}</pre>
            </div>
          </div>
        )}
      </main>

      {/* ======================================================== */}
      {/* MODAL: ADD USER */}
      {/* ======================================================== */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-extrabold text-white mb-1">
              เพิ่มผู้ใช้งานใหม่ลงฐานข้อมูล
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              สร้างบัญชีนักเรียนหรือผู้สอนโดยแอดมินโดยตรง
            </p>

            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  ชื่อ-นามสกุล *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น นายกานต์ธิดา รัตนวารี"
                  value={newUserData.name}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, name: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  อีเมล *
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@technic.ac.th"
                  value={newUserData.email}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, email: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  รหัสผ่านเริ่มต้น (Default: 123456)
                </label>
                <input
                  type="password"
                  placeholder="เว้นว่างไว้เพื่อใช้ 123456"
                  value={newUserData.password}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, password: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    วิทยาลัย / สถาบัน
                  </label>
                  <input
                    type="text"
                    list="admin-institutions-list"
                    value={newUserData.institution}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, institution: e.target.value })
                    }
                    placeholder="พิมพ์หรือเลือกวิทยาลัยอาชีวะ..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    แผนกวิชา
                  </label>
                  <input
                    type="text"
                    value={newUserData.department}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, department: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    ระดับชั้น
                  </label>
                  <select
                    value={newUserData.educationLevel}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, educationLevel: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="ปวช. 1">ปวช. 1</option>
                    <option value="ปวช. 2">ปวช. 2</option>
                    <option value="ปวช. 3">ปวช. 3</option>
                    <option value="ปวส. 1">ปวส. 1</option>
                    <option value="ปวส. 2">ปวส. 2</option>
                    <option value="ปริญญาตรี">ปริญญาตรี</option>
                    <option value="อาจารย์ผู้สอน">อาจารย์ผู้สอน</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    บทบาท (Role)
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) =>
                      setNewUserData({
                        ...newUserData,
                        role: e.target.value as "student" | "instructor" | "admin",
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="student">Student (นักเรียน)</option>
                    <option value="instructor">Instructor (อาจารย์)</option>
                    <option value="admin">Admin (ผู้ดูแลระบบ)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="autoVerify"
                  checked={newUserData.isVerified}
                  onChange={(e) =>
                    setNewUserData({ ...newUserData, isVerified: e.target.checked })
                  }
                  className="rounded border-slate-800 bg-slate-900 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="autoVerify" className="text-xs text-slate-300">
                  ยืนยันอีเมลทันที (ไม่ต้องรอให้ผู้ใช้ยืนยัน OTP)
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  บันทึกลงฐานข้อมูล
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: EDIT USER */}
      {/* ======================================================== */}
      {showEditModal && selectedUser && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-extrabold text-white mb-1">
              แก้ไขข้อมูลผู้ใช้
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              อีเมล: {selectedUser.email} (ID: {selectedUser.id})
            </p>

            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  ชื่อ-นามสกุล
                </label>
                <input
                  type="text"
                  required
                  value={selectedUser.name}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, name: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    วิทยาลัย / สถาบัน
                  </label>
                  <input
                    type="text"
                    list="admin-institutions-list"
                    value={selectedUser.institution}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        institution: e.target.value,
                      })
                    }
                    placeholder="พิมพ์หรือเลือกวิทยาลัยอาชีวะ..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    แผนกวิชา
                  </label>
                  <input
                    type="text"
                    value={selectedUser.department}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, department: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    ระดับชั้น
                  </label>
                  <input
                    type="text"
                    value={selectedUser.educationLevel}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        educationLevel: e.target.value,
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    บทบาท
                  </label>
                  <select
                    value={selectedUser.role}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        role: e.target.value as "student" | "instructor" | "admin",
                      })
                    }
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="editVerify"
                  checked={selectedUser.isVerified}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      isVerified: e.target.checked,
                    })
                  }
                  className="rounded border-slate-800 bg-slate-900 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="editVerify" className="text-xs text-slate-300">
                  ยืนยันตัวตนแล้ว (Verified Status)
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20"
                >
                  บันทึกการแก้ไข
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: DELETE CONFIRMATION */}
      {/* ======================================================== */}
      {deleteConfirmUser && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-rose-900/60 rounded-3xl max-w-md w-full p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-4 border border-rose-500/30">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-extrabold text-white mb-2">
              ยืนยันการลบผู้ใช้งาน?
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              คุณต้องการลบ <strong>{deleteConfirmUser.name}</strong> (
              {deleteConfirmUser.email}) หรือไม่? การลบนี้จะยกเลิกเซสชันและลบรหัส OTP
              ที่เกี่ยวข้องทั้งหมดโดยไม่สามารถกู้คืนได้
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setDeleteConfirmUser(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
              >
                ยกเลิก
              </button>
              <button
                onClick={() => handleDeleteUser(deleteConfirmUser)}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all"
              >
                ยืนยันการลบ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Nationwide Vocational Institutions Datalist */}
      <datalist id="admin-institutions-list">
        {VOCATIONAL_INSTITUTIONS.map((inst, idx) => (
          <option key={`${inst.name}-${idx}`} value={inst.name}>
            {inst.region} {inst.province ? `(${inst.province})` : ""}
          </option>
        ))}
      </datalist>
    </div>
  );
}
