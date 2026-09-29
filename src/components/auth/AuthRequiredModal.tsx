"use client";

import React from "react";
import Link from "next/link";
import { Lock, GraduationCap, ArrowRight, CheckCircle2, X } from "lucide-react";

interface AuthRequiredModalProps {
  isOpen: boolean;
  onClose?: () => void;
  redirectUrl?: string;
  courseTitle?: string;
}

export default function AuthRequiredModal({
  isOpen,
  onClose,
  redirectUrl = "/courses",
  courseTitle,
}: AuthRequiredModalProps) {
  if (!isOpen) return null;

  const encodedRedirect = encodeURIComponent(redirectUrl);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-center">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
          <Lock className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-wider inline-block mb-3">
          🎓 จำเป็นต้องเข้าสู่ระบบก่อนเริ่มเรียน
        </span>

        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
          {courseTitle ? `พร้อมเรียนรู้ ${courseTitle} หรือยัง?` : "ยินดีต้อนรับสู่ IT Academy"}
        </h2>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          กรุณาสมัครสมาชิกหรือเข้าสู่ระบบ เพื่อเริ่มเรียน ปฏิบัติการในห้องแล็บจำลอง และบันทึกผลการเรียนลงฐานข้อมูล
        </p>

        {/* Benefits list */}
        <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 text-left space-y-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>เข้าถึงเนื้อหาบทเรียนครบทั้ง 7 สาขา และห้องแล็บจำลองฟรี 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>บันทึกความก้าวหน้า เชื่อมโยงกับสถาบัน/วิทยาลัยของคุณ</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>ทำแบบทดสอบประจำบทเรียนและรับใบประกาศนียบัตรเมื่อเรียนจบ</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link
            href={`/auth/register?redirect=${encodedRedirect}`}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01]"
          >
            <span>สมัครสมาชิกนักศึกษา (ฟรี)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={`/auth/login?redirect=${encodedRedirect}`}
            className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 transition-colors"
          >
            <span>เข้าสู่ระบบ (มีบัญชีแล้ว)</span>
          </Link>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="mt-4 text-xs text-slate-400 hover:text-slate-300"
          >
            กลับไปดูข้อมูลหลักสูตร
          </button>
        )}
      </div>
    </div>
  );
}
