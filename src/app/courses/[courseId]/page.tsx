"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getCourse } from "@/data/courses";
import {
  BookOpen,
  Clock,
  BarChart,
  ChevronRight,
  PlayCircle,
  CheckCircle2,
  Download,
  ExternalLink,
  Wrench,
  Sparkles,
  Lock,
} from "lucide-react";
import { getLessonProgress, getUser } from "@/lib/progress";
import AuthRequiredModal from "@/components/auth/AuthRequiredModal";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const course = getCourse(courseId);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>("ทั้งหมด");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [targetRedirectUrl, setTargetRedirectUrl] = useState("");

  const handleStartLearning = (targetUrl: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const user = getUser();
    if (!user) {
      setTargetRedirectUrl(targetUrl);
      setShowAuthModal(true);
      return;
    }
    router.push(targetUrl);
  };

  useEffect(() => {
    setCompletedLessons(getLessonProgress(courseId));
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-dark-950 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">404</h1>
          <p className="dark:text-gray-400 text-gray-600 mb-8">ไม่พบหลักสูตรที่ต้องการ</p>
          <Link href="/courses" className="text-primary-500 hover:underline">
            กลับไปหน้าหลักสูตร
          </Link>
        </div>
      </div>
    );
  }

  const filteredLessons = course.lessons.filter((lesson) => {
    if (selectedLevel === "ทั้งหมด") return true;
    return lesson.level === selectedLevel;
  });

  const progressPercentage =
    course.lessons.length > 0
      ? Math.round((completedLessons.length / course.lessons.length) * 100)
      : 0;

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "เริ่มต้น":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800";
      case "ปานกลาง":
        return "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-300 dark:border-amber-800";
      case "ขั้นสูง":
        return "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-300 dark:border-rose-800";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 transition-colors duration-300">
      {/* Hero Section */}
      <div
        className={`pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${course.gradient} text-white`}
      >
        <div className="max-w-5xl mx-auto mt-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium text-sm"
          >
            <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
            กลับไปหน้าหลักสูตรทั้งหมด
          </Link>
          <div className="text-6xl mb-4">{course.icon}</div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md">
            {course.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            {course.longDescription}
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-sm">
            <div className="flex items-center bg-black/25 backdrop-blur-md px-4 py-2 rounded-xl">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>{course.lessons.length} บทเรียนครอบคลุมทุกระดับ</span>
            </div>
            <div className="flex items-center bg-black/25 backdrop-blur-md px-4 py-2 rounded-xl">
              <BarChart className="w-4 h-4 mr-2" />
              <span>3 ระดับ: เริ่มต้น / ปานกลาง / ขั้นสูง</span>
            </div>
            <div className="flex items-center bg-black/25 backdrop-blur-md px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 mr-2" />
              <span>~{course.lessons.length * 35} นาที</span>
            </div>
          </div>

          <button
            onClick={(e) => handleStartLearning(`/courses/${course.id}/${course.lessons[0]?.id}`, e)}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl cursor-pointer"
          >
            <PlayCircle className="w-6 h-6 mr-2 text-primary-600" />
            {completedLessons.length > 0 ? "เรียนต่อจากที่ค้างไว้" : "เริ่มเรียนบทแรก"}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Progress Section */}
        <div className="bg-white dark:bg-dark-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-end mb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                ความคืบหน้าของบทเรียน
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                เรียนจบแล้ว {completedLessons.length} จาก {course.lessons.length} บทเรียน
              </p>
            </div>
            <span className="text-3xl font-black text-primary-500">
              {progressPercentage}%
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-dark-800 rounded-full h-3.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-3.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Recommended Professional Tools Section */}
        {course.recommendedTools && course.recommendedTools.length > 0 && (
          <div className="bg-white dark:bg-dark-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary-500" />
                โปรแกรมและเครื่องมือเฉพาะทางที่แนะนำสำหรับหลักสูตรนี้
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                เครื่องมือมาตรฐานระดับอุตสาหกรรมที่ใช้งานจริงในการปฏิบัติงานและทำแล็บ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.recommendedTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-dark-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between hover:border-primary-500/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{tool.icon}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300">
                        {tool.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60">
                    <a
                      href={tool.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full py-2 px-3 text-xs font-semibold rounded-xl bg-white dark:bg-dark-900 hover:bg-slate-100 dark:hover:bg-dark-700 text-primary-600 dark:text-primary-400 border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      ดาวน์โหลดโปรแกรม
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lessons List Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                สารบัญบทเรียนทั้งหมด
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                เรียงลำดับจากระดับเริ่มต้น ปานกลาง ไปจนถึงระดับขั้นสูง
              </p>
            </div>

            {/* Level Filter Tabs */}
            <div className="flex gap-2 p-1.5 bg-slate-200/60 dark:bg-dark-800 rounded-2xl text-xs font-semibold overflow-x-auto hide-scrollbar">
              {["ทั้งหมด", "เริ่มต้น", "ปานกลาง", "ขั้นสูง"].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                    selectedLevel === lvl
                      ? "bg-white dark:bg-dark-900 text-primary-600 dark:text-primary-400 shadow-sm"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {lvl === "เริ่มต้น" && "🌱 "}
                  {lvl === "ปานกลาง" && "⚡ "}
                  {lvl === "ขั้นสูง" && "🔥 "}
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredLessons.map((lesson, index) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  onClick={(e) => handleStartLearning(`/courses/${course.id}/${lesson.id}`, e)}
                  className="block cursor-pointer"
                >
                  <div
                    className={`group flex items-start p-5 rounded-2xl border transition-all duration-200 ${
                      isCompleted
                        ? "bg-slate-50 border-slate-200 dark:bg-dark-800/40 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-dark-800"
                        : "bg-white border-slate-200 dark:bg-dark-900 dark:border-slate-800 hover:shadow-lg hover:border-primary-500/50 dark:hover:border-primary-500/50 transform hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex-shrink-0 mr-4 flex flex-col items-center">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-base transition-colors ${
                          isCompleted
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-slate-100 text-slate-600 dark:bg-dark-800 dark:text-slate-300 group-hover:bg-primary-500 group-hover:text-white"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          index + 1
                        )}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${getLevelBadgeColor(
                            lesson.level
                          )}`}
                        >
                          {lesson.level === "เริ่มต้น" && "🌱 "}
                          {lesson.level === "ปานกลาง" && "⚡ "}
                          {lesson.level === "ขั้นสูง" && "🔥 "}
                          ระดับ{lesson.level}
                        </span>
                        <h3
                          className={`text-lg font-bold ${
                            isCompleted
                              ? "text-slate-700 dark:text-slate-300"
                              : "text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors"
                          }`}
                        >
                          {lesson.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                        {lesson.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <div className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          {lesson.duration}
                        </div>
                        {lesson.labGuide && (
                          <div className="flex items-center text-primary-500 dark:text-primary-400 font-semibold">
                            <Wrench className="w-3.5 h-3.5 mr-1" />
                            มีแล็บทดลอง: {lesson.labGuide.toolName}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-5 h-5 text-primary-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AuthRequiredModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        redirectUrl={targetRedirectUrl}
        courseTitle={course.title}
      />
    </div>
  );
}
