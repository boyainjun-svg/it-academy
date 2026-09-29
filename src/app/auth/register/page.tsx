"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setUser } from "@/lib/progress";
import {
  UserPlus,
  Building2,
  BookOpen,
  GraduationCap,
  Mail,
  Lock,
  User,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import { VOCATIONAL_INSTITUTIONS } from "@/data/institutions";

const SUGGESTED_DEPTS = [
  "แผนกวิชาเทคโนโลยีสารสนเทศ (IT)",
  "แผนกวิชาช่างเทคนิคคอมพิวเตอร์",
  "แผนกวิชาคอมพิวเตอร์ธุรกิจ / เทคโนโลยีดิจิทัล",
  "แผนกวิชาอิเล็กทรอนิกส์และโทรคมนาคม",
  "สาขาวิชาวิทยาการคอมพิวเตอร์",
  "สาขาวิชาวิศวกรรมคอมพิวเตอร์",
];

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const [department, setDepartment] = useState("");
  const [educationLevel, setEducationLevel] = useState("ปวส.");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("/dashboard");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const redir = params.get("redirect");
      if (redir) setRedirectUrl(redir);
    }
  }, []);

  // OTP Verification Modal State
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
  const [demoOtp, setDemoOtp] = useState<string | null>(null);
  const [otpError, setOtpError] = useState("");
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for OTP
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showOtpModal && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, timer]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword || !institution || !department) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วนทุกช่อง");
      return;
    }
    if (!email.includes("@")) {
      setError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }
    if (password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }
    if (password !== confirmPassword) {
      setError("รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          institution,
          department,
          educationLevel,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "การลงทะเบียนไม่สำเร็จ");
        setLoading(false);
        return;
      }

      // Registration OK -> Show OTP Verification Modal
      setDemoOtp(data.demoOtp || null);
      setShowOtpModal(true);
      setTimer(60);
      setCanResend(false);
      setLoading(false);

      // Focus first input in next tick
      setTimeout(() => {
        otpInputsRef.current[0]?.focus();
      }, 200);
    } catch (err: any) {
      console.error(err);
      setError("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง");
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, val: string) => {
    const char = val.slice(-1); // Take last typed char
    if (val && !/^\d+$/.test(char)) return; // Only allow digits

    const newValues = [...otpValues];
    newValues[index] = char;
    setOtpValues(newValues);

    // Auto-advance to next input
    if (char && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  const handlePasteOtp = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      const digits = pasteData.split("");
      setOtpValues(digits);
      otpInputsRef.current[5]?.focus();
    }
  };

  const fillDemoOtp = () => {
    if (demoOtp && demoOtp.length === 6) {
      setOtpValues(demoOtp.split(""));
      otpInputsRef.current[5]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const fullOtp = otpValues.join("");
    if (fullOtp.length !== 6) {
      setOtpError("กรุณากรอกรหัส OTP ให้ครบ 6 หลัก");
      return;
    }

    setVerifyingOtp(true);
    setOtpError("");

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          code: fullOtp,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setOtpError(data.message || "รหัส OTP ไม่ถูกต้อง");
        setVerifyingOtp(false);
        return;
      }

      // Success
      setVerifiedSuccess(true);
      if (data.sessionToken) {
        localStorage.setItem("sessionToken", data.sessionToken);
      }
      if (data.user) {
        setUser(data.user);
      }

      setTimeout(() => {
        router.push(redirectUrl);
      }, 1500);
    } catch (err: any) {
      setOtpError("เกิดข้อผิดพลาดในการตรวจสอบ OTP");
      setVerifyingOtp(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    setOtpError("");

    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setDemoOtp(data.demoOtp || null);
        setTimer(60);
        setCanResend(false);
        setOtpValues(["", "", "", "", "", ""]);
        otpInputsRef.current[0]?.focus();
      } else {
        setOtpError(data.message || "ไม่สามารถส่งรหัสใหม่ได้");
      }
    } catch (e) {
      setOtpError("เกิดข้อผิดพลาดในการส่งรหัสใหม่");
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center dark:bg-slate-950 bg-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-900 dark:to-slate-950 from-blue-50 to-white">
      <div className="w-full max-w-2xl dark:bg-slate-900/90 bg-white backdrop-blur-xl border dark:border-slate-800 border-slate-200 p-8 md:p-10 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-blue-500/20 text-white">
            <UserPlus className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            สมัครสมาชิกนักศึกษา IT Academy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            บันทึกข้อมูลการศึกษา บัญชีผู้ใช้ และระบบยืนยันตัวตนผ่านอีเมลจริง
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 dark:text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          {/* ข้อมูลส่วนตัว */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-500" /> ชื่อ-นามสกุล
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                placeholder="เช่น ธนกฤต ชัยชนะ"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" /> อีเมล (สำหรับรับรหัส OTP)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                placeholder="เช่น student@vec.ac.th หรือ gmail.com"
                required
              />
            </div>
          </div>

          {/* ข้อมูลสถาบันการศึกษา (หัวใจหลักที่ผู้ใช้ขอ) */}
          <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-slate-950/60 border border-blue-100 dark:border-slate-800/80 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              ข้อมูลสถานศึกษา / วิทยาลัยที่กำลังศึกษา
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  วิทยาลัย / โรงเรียน / มหาวิทยาลัย
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  list="colleges-list"
                  className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                  placeholder="เช่น วิทยาลัยเทคนิคเชียงใหม่"
                  required
                />
                <datalist id="colleges-list">
                  {VOCATIONAL_INSTITUTIONS.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.province} - {c.region})
                    </option>
                  ))}
                </datalist>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  ระดับชั้นการศึกษา
                </label>
                <select
                  value={educationLevel}
                  onChange={(e) => setEducationLevel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                >
                  <option value="ปวช. 1">ปวช. 1 (ประกาศนียบัตรวิชาชีพ ปี 1)</option>
                  <option value="ปวช. 2">ปวช. 2 (ประกาศนียบัตรวิชาชีพ ปี 2)</option>
                  <option value="ปวช. 3">ปวช. 3 (ประกาศนียบัตรวิชาชีพ ปี 3)</option>
                  <option value="ปวส. 1">ปวส. 1 (ประกาศนียบัตรวิชาชีพชั้นสูง ปี 1)</option>
                  <option value="ปวส. 2">ปวส. 2 (ประกาศนียบัตรวิชาชีพชั้นสูง ปี 2)</option>
                  <option value="ปริญญาตรี">ระดับปริญญาตรี (ปี 1 - 4)</option>
                  <option value="อาจารย์/ผู้สอน">อาจารย์ / ผู้สอน / บุคลากร</option>
                  <option value="บุคคลทั่วไป">บุคคลทั่วไป / ทำงานสายไอที</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-500" /> แผนกวิชา / สาขางาน
              </label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                list="depts-list"
                className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                placeholder="เช่น แผนกวิชาเทคโนโลยีสารสนเทศ หรือ ช่างเทคนิคคอมพิวเตอร์"
                required
              />
              <datalist id="depts-list">
                {SUGGESTED_DEPTS.map((d, i) => (
                  <option key={i} value={d} />
                ))}
              </datalist>
            </div>
          </div>

          {/* รหัสผ่าน */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-blue-500" /> รหัสผ่าน
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                placeholder="อย่างน้อย 6 ตัวอักษร"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> ยืนยันรหัสผ่าน
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
                placeholder="กรอกรหัสผ่านซ้ำอีกครั้ง"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 mt-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm transition-all transform hover:scale-[1.01] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" /> กำลังสร้างบัญชีและส่งรหัส OTP...
              </>
            ) : (
              <>
                <span>สมัครสมาชิกและรับรหัสยืนยันอีเมล</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center dark:text-slate-400 text-slate-600 text-sm">
          มีบัญชีนักศึกษาแล้ว?{" "}
          <Link
            href={`/auth/login${redirectUrl !== "/dashboard" ? `?redirect=${encodeURIComponent(redirectUrl)}` : ""}`}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            เข้าสู่ระบบที่นี่
          </Link>
        </p>
      </div>

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 text-center animate-in fade-in zoom-in-95 duration-200">
            {verifiedSuccess ? (
              <div className="py-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-500/20 text-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  ยืนยันอีเมลสำเร็จ!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  กำลังนำท่านเข้าสู่แดชบอร์ดการเรียนรู้...
                </p>
              </div>
            ) : (
              <>
                <div className="w-14 h-14 mx-auto bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  ยืนยันรหัส OTP ทางอีเมล
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  ระบบได้ส่งรหัสผ่านใช้ครั้งเดียว (OTP 6 หลัก) ไปยังอีเมล:
                  <br />
                  <strong className="text-blue-600 dark:text-blue-400">{email}</strong>
                </p>

                {otpError && (
                  <div className="mb-4 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                    {otpError}
                  </div>
                )}

                {/* 6 Digit Inputs */}
                <div className="flex justify-center gap-2 my-6">
                  {otpValues.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => {
                        otpInputsRef.current[idx] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      onPaste={idx === 0 ? handlePasteOtp : undefined}
                      className="w-12 h-14 text-center text-xl font-mono font-bold rounded-xl border-2 dark:border-slate-700 border-slate-300 dark:bg-slate-950 bg-slate-50 dark:text-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all shadow-sm"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  {timer > 0 ? (
                    <span>รหัสจะหมดอายุใน {timer} วินาที</span>
                  ) : (
                    <span className="text-red-500">รหัสหมดอายุแล้ว</span>
                  )}
                  {canResend && (
                    <button
                      onClick={handleResendOtp}
                      type="button"
                      className="ml-2 font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      ส่งรหัสใหม่
                    </button>
                  )}
                </div>

                <div className="space-y-2">
                  <button
                    onClick={handleVerifyOtp}
                    disabled={verifyingOtp || otpValues.join("").length !== 6}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    {verifyingOtp ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> กำลังตรวจสอบรหัส...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> ยืนยันรหัส OTP
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setShowOtpModal(false)}
                    className="w-full py-2.5 rounded-xl text-slate-400 hover:text-slate-200 text-xs font-semibold"
                  >
                    ย้อนกลับไปแก้ไขข้อมูล
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
