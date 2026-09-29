"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, getProgress, UserProgress, logout as logoutUser, User } from "@/lib/progress";
import { courses } from "@/data/courses";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Award,
  PlayCircle,
  Star,
  Flame,
  Code,
  Trophy,
  LogOut,
  Building2,
  GraduationCap,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUserState] = useState<User | null>(null);
  const [progress, setProgress] = useState<UserProgress>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentUser = getUser();
    if (!currentUser) {
      router.push("/auth/login");
    } else {
      setUserState(currentUser);
      setProgress(getProgress());
    }
  }, [router]);

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  if (!mounted || !user)
    return (
      <div className="min-h-screen dark:bg-dark-950 bg-white flex items-center justify-center dark:text-white text-gray-900">
        กำลังโหลด...
      </div>
    );

  const completedLessons = Object.values(progress).reduce(
    (acc, curr) => acc + curr.completedLessons.length,
    0
  );
  const coursesStarted = Object.keys(progress).length;
  const hoursSpent = Math.round(completedLessons * 0.5);

  const badges = [
    {
      id: "starter",
      title: "เริ่มต้นการเดินทาง",
      icon: Star,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      unlocked: completedLessons >= 1,
    },
    {
      id: "hardworker",
      title: "นักเรียนขยัน",
      icon: Flame,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      unlocked: completedLessons >= 10,
    },
    {
      id: "newbie_dev",
      title: "โปรแกรมเมอร์มือใหม่",
      icon: Code,
      color: "text-primary-400",
      bg: "bg-primary-400/10",
      unlocked: completedLessons >= 5,
    },
    {
      id: "first_course",
      title: "จบหลักสูตรแรก",
      icon: Trophy,
      color: "text-cyber-500",
      bg: "bg-cyber-500/10",
      unlocked: completedLessons >= 20,
    },
  ];

  return (
    <div className="min-h-screen dark:bg-dark-950 bg-gray-50 dark:text-white text-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8 pt-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
              {user.name ? user.name.charAt(0) : "U"}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {user.name}
                </h1>
                {user.isVerified !== false && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ยืนยันอีเมลแล้ว
                  </span>
                )}
                {user.role === "instructor" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    👨‍🏫 อาจารย์ผู้สอน
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mt-2">
                <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-200">
                  <Building2 className="w-3.5 h-3.5 text-blue-500" />
                  {user.institution || "วิทยาลัยเทคนิคเชียงใหม่"}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  {user.department || "แผนกวิชาเทคโนโลยีสารสนเทศ"}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  {user.educationLevel || "ปวส."}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {user.email}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-4 py-2.5 dark:bg-slate-800 bg-slate-100 hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-700 dark:text-slate-200 hover:text-red-500 rounded-xl transition-colors text-sm font-semibold border border-slate-200 dark:border-slate-700 cursor-pointer shrink-0"
          >
            <LogOut className="w-4 h-4" />
            ออกจากระบบ
          </button>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "หลักสูตรที่เรียน", value: coursesStarted, icon: BookOpen, color: "text-primary-400" },
            { label: "บทเรียนที่เรียนจบ", value: completedLessons, icon: CheckCircle, color: "text-accent-400" },
            { label: "เวลาที่ใช้เรียน (ชม.)", value: hoursSpent, icon: Clock, color: "text-cyber-400" },
            { label: "ใบรับรอง", value: 0, icon: Award, color: "text-yellow-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="dark:bg-dark-800/50 bg-white backdrop-blur-sm border dark:border-white/5 border-gray-200 p-6 rounded-2xl flex items-center gap-4"
            >
              <div className={`p-3 rounded-xl dark:bg-dark-900 bg-gray-100 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm dark:text-gray-400 text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-primary-400" />
            หลักสูตรที่กำลังเรียน
          </h2>
          {coursesStarted === 0 ? (
            <div className="dark:bg-dark-800/30 bg-white border dark:border-white/5 border-gray-200 p-8 rounded-2xl text-center dark:text-gray-400 text-gray-600">
              คุณยังไม่ได้เริ่มเรียนหลักสูตรใดเลย
              <br />
              <Link
                href="/courses"
                className="text-primary-500 hover:underline mt-2 inline-block"
              >
                เรียกดูหลักสูตร
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(progress).map(([cId, data]) => {
                const courseInfo = courses.find((c) => c.id === cId);
                if (!courseInfo) return null;
                const percent = Math.min(
                  100,
                  Math.round(
                    (data.completedLessons.length / courseInfo.lessons.length) *
                      100
                  )
                );

                return (
                  <div
                    key={cId}
                    className="dark:bg-dark-800/50 bg-white border dark:border-white/10 border-gray-200 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-colors group"
                  >
                    <div className={`h-2 bg-gradient-to-r ${courseInfo.gradient}`} />
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{courseInfo.icon}</span>
                        <h3 className="font-semibold truncate">
                          {courseInfo.title}
                        </h3>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="dark:text-gray-400 text-gray-600">
                            ความคืบหน้า
                          </span>
                          <span className="font-medium">{percent}%</span>
                        </div>
                        <div className="h-2 dark:bg-dark-900 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${courseInfo.gradient} transition-all duration-1000`}
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <div className="text-xs dark:text-gray-500 text-gray-400 text-right">
                          {data.completedLessons.length} /{" "}
                          {courseInfo.lessons.length} บทเรียน
                        </div>
                      </div>
                      <Link
                        href={`/courses/${cId}`}
                        className="block w-full py-2 text-center rounded-lg dark:bg-white/5 bg-gray-100 dark:hover:bg-white/10 hover:bg-gray-200 transition-colors text-sm font-medium group-hover:text-primary-500"
                      >
                        เรียนต่อ
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Badges */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            ความสำเร็จของคุณ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border ${
                  badge.unlocked
                    ? "dark:border-white/10 border-gray-200 dark:bg-dark-800/50 bg-white"
                    : "dark:border-white/5 border-gray-100 dark:bg-dark-900/50 bg-gray-50 opacity-50"
                } flex flex-col items-center text-center gap-3 transition-all ${
                  badge.unlocked
                    ? "hover:scale-105 dark:hover:bg-dark-800 hover:bg-gray-50"
                    : "grayscale"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${badge.bg} flex items-center justify-center`}
                >
                  <badge.icon className={`w-6 h-6 ${badge.color}`} />
                </div>
                <div>
                  <div className="font-medium text-sm">{badge.title}</div>
                  <div className="text-xs dark:text-gray-500 text-gray-400 mt-1">
                    {badge.unlocked ? "ปลดล็อคแล้ว" : "ยังไม่ปลดล็อค"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
