"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCourseProgress } from "@/lib/progress";
import {
  Monitor,
  BookOpen,
  Trophy,
  Users,
  Code,
  Network,
  Cpu,
  Database,
  Smartphone,
  Gamepad2,
  Shield,
  ArrowRight,
  Terminal,
  Play
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: any) => {
  return (
    <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 dark:to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-cyber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-white dark:bg-dark-800/80 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="p-4 bg-primary-500/10 rounded-full text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const CourseCard = ({ course }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(getCourseProgress(course.id, course.lessons));
  }, [course.id, course.lessons]);

  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <div className="relative group rounded-2xl p-[1px] h-full transition-all duration-300 hover:scale-[1.02]">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-40 rounded-2xl group-hover:opacity-100 transition-opacity blur-sm`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
        
        <div className="relative h-full bg-white dark:bg-dark-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6 flex flex-col z-10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
          
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${course.iconBg} ${course.iconColor}`}>
            {course.emoji ? (
              <span className="text-2xl">{course.emoji}</span>
            ) : course.icon ? (
              <course.icon className="w-6 h-6" />
            ) : null}
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{course.title}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">{course.description}</p>
          
          <div className="mt-auto space-y-4">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{course.lessons} บทเรียน</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">ความคืบหน้า {progress}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-dark-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-primary-500 h-1.5 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className={`flex items-center text-sm font-semibold ${course.iconColor} group-hover:translate-x-1 transition-transform`}>
              เริ่มเรียน <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  const [homeCategory, setHomeCategory] = useState<"core" | "language">("core");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const features = [
    {
      icon: Monitor,
      title: "เรียนรู้แบบ Interactive",
      description: "เขียนโค้ดและดูผลลัพธ์ได้ทันทีในเว็บ ไม่ต้องติดตั้งโปรแกรมใดๆ"
    },
    {
      icon: BookOpen,
      title: "หลักสูตรครบวงจร",
      description: "ครอบคลุมทั้ง 7 สายงาน IT และ 7 ภาษาโปรแกรมมิ่งยอดนิยมระดับสากล"
    },
    {
      icon: Trophy,
      title: "ติดตามความก้าวหน้า",
      description: "ระบบติดตามผลการเรียน พร้อมใบรับรองเมื่อเรียนจบ"
    },
    {
      icon: Users,
      title: "เรียนได้ทุกที่ทุกเวลา",
      description: "รองรับทุกอุปกรณ์ เรียนได้ตามสะดวก"
    }
  ];

  const coreCoursesList = [
    {
      id: "iot",
      title: "IoT & Embedded Systems",
      description: "เชื่อมต่อ Arduino, ESP32 Wi-Fi, Raspberry Pi และสร้าง Smart Home",
      lessons: 9,
      icon: Cpu,
      gradient: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500"
    },
    {
      id: "network",
      title: "Network & Cisco",
      description: "ออกแบบระบบเครือข่าย Cisco Packet Tracer, VLAN, OSPF และไฟร์วอลล์ ACL",
      lessons: 9,
      icon: Network,
      gradient: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      id: "webdev",
      title: "Web Development",
      description: "สร้างเว็บไซต์ตั้งแต่ HTML/CSS/JS ถึง Full-Stack Next.js 14 และร้านค้าออนไลน์",
      lessons: 9,
      icon: Code,
      gradient: "from-orange-500 to-amber-600",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      id: "database",
      title: "ระบบฐานข้อมูล & RMS",
      description: "ออกแบบ Database ด้วย ER Diagram, SQL ขั้นสูง และพัฒนาระบบนักเรียน RMS",
      lessons: 9,
      icon: Database,
      gradient: "from-purple-500 to-violet-600",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: "mobile",
      title: "Mobile Apps (Flutter)",
      description: "พัฒนาแอป Android & iOS ด้วย Flutter, State Management และ REST API",
      lessons: 9,
      icon: Smartphone,
      gradient: "from-cyan-500 to-teal-600",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-500"
    },
    {
      id: "gamedev",
      title: "Game Development",
      description: "สร้างเกม 2D Canvas, ฟิสิกส์แรงโน้มถ่วง, Enemy AI จนถึง Godot Engine 4",
      lessons: 9,
      icon: Gamepad2,
      gradient: "from-red-500 to-rose-600",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Hacking",
      description: "ความปลอดภัยไซเบอร์ CIA Triad, สแกน Nmap, Wireshark และช่องโหว่ OWASP",
      lessons: 9,
      icon: Shield,
      gradient: "from-fuchsia-500 to-pink-600",
      iconBg: "bg-fuchsia-500/10",
      iconColor: "text-fuchsia-500"
    }
  ];

  const languageCoursesList = [
    {
      id: "python",
      title: "Python for Data & AI",
      description: "ไพทอนสมัยใหม่, OOP, AsyncIO, FastAPI จนถึง Pandas/NumPy สำหรับงานวิเคราะห์ข้อมูล",
      lessons: 9,
      emoji: "🐍",
      gradient: "from-sky-500 to-blue-600",
      iconBg: "bg-sky-500/10",
      iconColor: "text-sky-500"
    },
    {
      id: "csharp",
      title: "C# & .NET 8 Enterprise",
      description: "C# 12, .NET 8, LINQ, Task Parallel, ASP.NET Core และ Entity Framework Core 8",
      lessons: 9,
      emoji: "🔷",
      gradient: "from-purple-500 to-indigo-600",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: "php",
      title: "Modern PHP 8.3",
      description: "PHP 8.3 Strict Types, OOP, Composer, PSR, PDO Security จนถึงสถาปัตยกรรม MVC",
      lessons: 9,
      emoji: "🐘",
      gradient: "from-indigo-500 to-violet-600",
      iconBg: "bg-indigo-500/10",
      iconColor: "text-indigo-500"
    },
    {
      id: "go",
      title: "Go (Golang) Microservices",
      description: "Goroutines, Channels, Pointers, Structs, Interfaces และ Microservices ด้วย Gin",
      lessons: 9,
      emoji: "🦫",
      gradient: "from-cyan-500 to-teal-600",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-500"
    },
    {
      id: "java",
      title: "Java 21 LTS & Spring Boot 3",
      description: "Modern Java 21, JVM Internals, Records, Virtual Threads และ Spring Boot 3 Framework",
      lessons: 9,
      emoji: "☕",
      gradient: "from-red-500 to-orange-600",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500"
    },
    {
      id: "cpp",
      title: "Modern C++ (C++23) Systems",
      description: "C++ สมัยใหม่, RAII, Smart Pointers, Move Semantics, Templates และ Concurrency",
      lessons: 9,
      emoji: "⚡",
      gradient: "from-blue-600 to-slate-800",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      id: "typescript",
      title: "Advanced TypeScript 5",
      description: "Structural Typing, Generics, Utility Types, Conditional Types และ Zod Validation",
      lessons: 9,
      emoji: "🟦",
      gradient: "from-blue-500 to-sky-600",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen dark:bg-dark-950 bg-gray-50 font-sans overflow-x-hidden selection:bg-primary-500/30">
      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/15 dark:bg-primary-500/20 blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyber-500/15 dark:bg-cyber-500/20 blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-accent-500/10 blur-[100px] mix-blend-screen" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 dark:text-primary-500/20 text-primary-500/15 text-6xl font-mono animate-float">&lt;/&gt;</div>
          <div className="absolute bottom-1/3 right-12 dark:text-cyber-500/20 text-cyber-500/15 text-6xl font-mono animate-float" style={{animationDelay: '2s'}}>&#123; &#125;</div>
          <div className="absolute top-1/3 right-1/4 dark:text-accent-500/20 text-accent-500/15 text-4xl font-mono animate-float" style={{animationDelay: '4s'}}>[ ]</div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-dark-800/80 bg-primary-50 border dark:border-dark-700 border-primary-200 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-8 fade-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            พร้อมให้บริการแล้ววันนี้
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 fade-up">
            <span className="text-slate-900 dark:text-white">เรียนรู้ IT ทุกสาขา </span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 dark:from-primary-400 dark:via-accent-300 dark:to-cyber-400">
              ในที่เดียว
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 fade-up leading-relaxed">
            แพลตฟอร์มการเรียนรู้ครบวงจรสำหรับนักเรียน IT พร้อมลงมือเขียนโค้ดจริงในเว็บ เรียนง่าย เข้าใจเร็ว ประยุกต์ใช้ได้จริง
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-up">
            <Link 
              href="/courses" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-500 hover:to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              เริ่มเรียนฟรี
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/playground" 
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-dark-800/80 hover:bg-slate-50 dark:hover:bg-dark-700 text-slate-800 dark:text-white border border-slate-300 dark:border-dark-700 rounded-xl font-semibold shadow-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              ทดลอง Playground
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-200 dark:border-dark-800 fade-up">
            {[
              { label: "14 หลักสูตร", value: "ครอบคลุมสายงาน & ภาษา" },
              { label: "126 บทเรียน", value: "เนื้อหาเชิงลึกระดับสากล" },
              { label: "เขียนโค้ดได้จริง", value: "Interactive Compiler" },
              { label: "ฟรี 100%", value: "เพื่อการศึกษาไทย" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.label}</div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50/60 dark:bg-dark-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">ทำไมต้อง IT Academy?</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              ออกแบบมาเพื่อการเรียนรู้ที่มีประสิทธิภาพสูงสุด ตอบโจทย์ทุกความต้องการของนักพัฒนา
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="fade-up">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-white dark:bg-dark-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 fade-up">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 text-xs font-semibold mb-2">
                <span>เลือกเรียนได้ตามเป้าหมายของคุณ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                หลักสูตรที่เปิดสอน
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">
                ยกระดับทักษะจากศูนย์สู่มืออาชีพ ครอบคลุมทั้งสายงานวิศวกรรม IT และภาษาโปรแกรมมิ่ง
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-dark-900 border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setHomeCategory("core")}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    homeCategory === "core"
                      ? "bg-white dark:bg-dark-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  🏢 สายงาน IT (7)
                </button>
                <button
                  onClick={() => setHomeCategory("language")}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    homeCategory === "language"
                      ? "bg-white dark:bg-dark-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  💻 ภาษาโปรแกรมมิ่ง (7)
                </button>
              </div>

              <Link
                href="/courses"
                className="hidden md:flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm transition-colors"
              >
                ดูทั้งหมด 14 หลักสูตร <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(homeCategory === "core" ? coreCoursesList : languageCoursesList).map((course) => (
              <div key={course.id} className="fade-up">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Playground Preview */}
      <section className="py-24 bg-slate-50 dark:bg-dark-900/90 relative border-y border-slate-200 dark:border-dark-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-semibold mb-6">
                <Terminal className="w-4 h-4" /> Built-in Editor
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">ลงมือเขียนโค้ดได้เลย</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                ไม่ต้องสลับหน้าจอ ไม่ต้องเสียเวลาเซ็ตอัพสภาพแวดล้อม 
                ด้วย IT Academy Playground คุณสามารถเรียนรู้ ทฤษฎี และลงมือปฏิบัติได้ในหน้าเดียว 
                เห็นผลลัพธ์ทันทีแบบเรียลไทม์
              </p>
              
              <ul className="space-y-4 mb-8">
                {['รองรับ HTML, CSS, JavaScript, Python, SQL', 'Editor คุณภาพสูงระดับ VS Code (Monaco)', 'ดูผลลัพธ์แบบเรียลไทม์ ไม่ต้องรีเฟรช'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-200 font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                href="/playground" 
                className="inline-flex px-6 py-3 bg-primary-50 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-dark-700 text-primary-700 dark:text-primary-300 rounded-xl font-semibold transition-all hover:scale-105 items-center gap-2 border border-primary-200 dark:border-dark-700 shadow-sm"
              >
                เปิด Playground <Play className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="fade-up">
              <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-dark-700 bg-slate-900 shadow-2xl shadow-primary-500/10">
                <div className="flex items-center px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto text-xs text-slate-400 font-mono">index.html</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-slate-100">
                  <div className="text-slate-500">1  <span className="text-blue-400">&lt;!DOCTYPE</span> <span className="text-cyan-300">html</span><span className="text-blue-400">&gt;</span></div>
                  <div className="text-slate-500">2  <span className="text-blue-400">&lt;html</span> <span className="text-cyan-300">lang</span>=<span className="text-green-400">&quot;th&quot;</span><span className="text-blue-400">&gt;</span></div>
                  <div className="text-slate-500">3  <span className="text-blue-400">&lt;head&gt;</span></div>
                  <div className="text-slate-500">4    <span className="text-blue-400">&lt;title&gt;</span><span className="text-white">IT Academy</span><span className="text-blue-400">&lt;/title&gt;</span></div>
                  <div className="text-slate-500">5  <span className="text-blue-400">&lt;/head&gt;</span></div>
                  <div className="text-slate-500">6  <span className="text-blue-400">&lt;body&gt;</span></div>
                  <div className="text-slate-500">7    <span className="text-blue-400">&lt;h1</span> <span className="text-cyan-300">style</span>=<span className="text-green-400">&quot;color: #3b82f6&quot;</span><span className="text-blue-400">&gt;</span></div>
                  <div className="text-slate-500">8      <span className="text-white">สวัสดี IT Academy! 🚀</span></div>
                  <div className="text-slate-500">9    <span className="text-blue-400">&lt;/h1&gt;</span></div>
                  <div className="text-slate-500">10   <span className="text-blue-400">&lt;p&gt;</span><span className="text-white">เริ่มเขียนโค้ดกันเลย</span><span className="text-blue-400">&lt;/p&gt;</span></div>
                  <div className="text-slate-500">11 <span className="text-blue-400">&lt;/body&gt;</span></div>
                  <div className="text-slate-500">12 <span className="text-blue-400">&lt;/html&gt;</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-slate-950/90 to-dark-950" />
        
        <div className="container mx-auto px-6 relative z-10 text-center fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">พร้อมเริ่มต้นการเรียนรู้แล้วหรือยัง?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            เข้าถึงทุกบทเรียนและระบบฝึกปฏิบัติได้ฟรี ไม่มีค่าใช้จ่ายแอบแฝง
          </p>
          <Link 
            href="/courses" 
            className="inline-flex px-10 py-5 bg-white text-slate-900 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:bg-slate-100 shadow-xl shadow-black/20 items-center gap-2"
          >
            เริ่มเรียนตอนนี้ <ArrowRight className="w-5 h-5 text-primary-600" />
          </Link>
        </div>
      </section>
    </div>
  );
}
