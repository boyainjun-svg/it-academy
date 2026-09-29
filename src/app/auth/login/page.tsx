"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setUser } from "@/lib/progress";
import {
  LogIn,
  Mail,
  Lock,
  RefreshCw,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Building2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // OTP Modal (if user is unverified)
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
  const [demoOtp, setDemoOtp] = useState<string | null>(null);
  const [otpError, setOtpError] = useState("");
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);
  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }
    if (password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 403 && data.isUnverified) {
        // Needs OTP Verification
        setShowOtpModal(true);
        setLoading(false);
        setTimer(60);
        setCanResend(false);
        // Request fresh OTP code
        const resendRes = await fetch("/api/auth/resend-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const resendData = await resendRes.json();
        if (resendData.demoOtp) {
          setDemoOtp(resendData.demoOtp);
        }
        return;
      }

      if (!res.ok || !data.success) {
        setError(data.message || "อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        setLoading(false);
        return;
      }

      if (data.sessionToken) {
        localStorage.setItem("sessionToken", data.sessionToken);
      }
      if (data.user) {
        setUser(data.user);
      }

      router.push(redirectUrl);
    } catch (err) {
      console.error(err);
      setError("ไม่สามารถเชื่อมต่อระบบล็อกอินได้ กรุณาลองใหม่");
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, val: string) => {
    const char = val.slice(-1);
    if (val && !/^\d+$/.test(char)) return;

    const newValues = [...otpValues];
    newValues[index] = char;
    setOtpValues(newValues);

    if (char && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
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
        body: JSON.stringify({ email, code: fullOtp }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setOtpError(data.message || "รหัส OTP ไม่ถูกต้อง");
        setVerifyingOtp(false);
        return;
      }

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
    } catch (e) {
      setOtpError("เกิดข้อผิดพลาดในการตรวจสอบ OTP");
      setVerifyingOtp(false);
    }
  };

  const useQuickLogin = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center dark:bg-slate-950 bg-slate-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-900 dark:to-slate-950 from-blue-50 to-white">
      <div className="w-full max-w-md dark:bg-slate-900/90 bg-white backdrop-blur-xl border dark:border-slate-800 border-slate-200 p-8 rounded-3xl shadow-2xl">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-blue-500/20 text-white">
            <LogIn className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            เข้าสู่ระบบ IT Academy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            แพลตฟอร์มการเรียนรู้และฝึกปฏิบัติการสำหรับเด็กสาย IT
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 dark:text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-500" /> อีเมล
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
              placeholder="เช่น student@itacademy.ac.th"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-500" /> รหัสผ่าน
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl dark:bg-slate-950 bg-slate-50 border dark:border-slate-800 border-slate-300 dark:text-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm transition-all transform hover:scale-[1.01] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" /> กำลังตรวจสอบข้อมูล...
              </>
            ) : (
              <>
                <span>เข้าสู่ระบบ</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Demo Quick Logins for fast testing */}
        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> บัญชีทดสอบในระบบ (คลิกเพื่อเข้าสู่ระบบทันที):
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => useQuickLogin("student@itacademy.ac.th", "123456")}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left transition-colors cursor-pointer"
            >
              <div className="font-bold text-slate-800 dark:text-slate-200">👨‍🎓 นักเรียนสาธิต</div>
              <div className="text-[10px] text-slate-500 truncate">student@itacademy.ac.th</div>
            </button>
            <button
              type="button"
              onClick={() => useQuickLogin("teacher@itacademy.ac.th", "admin1234")}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-left transition-colors cursor-pointer"
            >
              <div className="font-bold text-slate-800 dark:text-slate-200">👨‍🏫 อาจารย์ผู้สอน</div>
              <div className="text-[10px] text-slate-500 truncate">teacher@itacademy.ac.th</div>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center dark:text-slate-400 text-slate-600 text-sm">
          ยังไม่มีบัญชีนักศึกษา?{" "}
          <Link
            href={`/auth/register${redirectUrl !== "/dashboard" ? `?redirect=${encodeURIComponent(redirectUrl)}` : ""}`}
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            สมัครสมาชิกที่นี่
          </Link>
        </p>
      </div>

      {/* OTP Verification Modal if unverified */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 text-center">
            {verifiedSuccess ? (
              <div className="py-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-500/20 text-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  ยืนยันอีเมลสำเร็จ!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  กำลังนำท่านเข้าสู่ระบบ...
                </p>
              </div>
            ) : (
              <>
                <div className="w-14 h-14 mx-auto bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  บัญชีนี้ยังไม่ได้รับการยืนยันอีเมล
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  กรุณากรอกรหัส OTP 6 หลักที่ส่งไปยัง:
                  <br />
                  <strong className="text-blue-600 dark:text-blue-400">{email}</strong>
                </p>

                {otpError && (
                  <div className="mb-4 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                    {otpError}
                  </div>
                )}

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
                </div>

                <div className="space-y-2">
                  <button
                    onClick={handleVerifyOtp}
                    disabled={verifyingOtp || otpValues.join("").length !== 6}
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-blue-600/30"
                  >
                    {verifyingOtp ? "กำลังตรวจสอบ..." : "ยืนยันรหัส OTP"}
                  </button>
                  <button
                    onClick={() => setShowOtpModal(false)}
                    className="w-full py-2.5 text-slate-400 hover:text-slate-200 text-xs"
                  >
                    ยกเลิก
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
