"use client";

import React, { useState } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { Search, BookOpen, Tag, ArrowRight } from "lucide-react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("ทั้งหมด");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      filterDifficulty === "ทั้งหมด" || course.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "เริ่มต้น":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "ปานกลาง":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "ขั้นสูง":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold gradient-text mb-4">
            หลักสูตรทั้งหมด
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            เลือกหลักสูตรที่สนใจแล้วเริ่มเรียนได้เลย ตั้งแต่พื้นฐานจนถึงขั้นสูง
            พัฒนาทักษะ IT ของคุณวันนี้
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between items-center bg-white dark:bg-dark-900 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="ค้นหาหลักสูตร..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-700 rounded-xl leading-5 bg-transparent text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {["ทั้งหมด", "เริ่มต้น", "ปานกลาง", "ขั้นสูง"].map((diff) => (
              <button
                key={diff}
                onClick={() => setFilterDifficulty(diff)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  filterDifficulty === diff
                    ? "bg-primary-500 text-white shadow-md shadow-primary-500/30"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-dark-800 dark:text-slate-300 dark:hover:bg-dark-700"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link href={`/courses/${course.id}`} key={course.id}>
                <div className="group h-full bg-white dark:bg-dark-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-500/10 border border-slate-200 dark:border-slate-800 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                  <div
                    className={`h-32 bg-gradient-to-r ${course.gradient} relative overflow-hidden shrink-0`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                    <div className="absolute bottom-4 left-6 flex items-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-3xl">
                        {course.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                        {course.title}
                      </h2>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-md ${getDifficultyColor(
                          course.difficulty
                        )}`}
                      >
                        {course.difficulty}
                      </span>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs font-medium">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {course.lessons.length} บทเรียน
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                      {course.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="flex items-center text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-dark-800 px-2 py-1 rounded-md"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-dark-800 mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">
              ไม่พบหลักสูตรที่ค้นหา
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
