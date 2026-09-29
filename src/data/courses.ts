import { Course, Lesson } from "./types";
import { iotCourse } from "./courses/iot";
import { networkCourse } from "./courses/network";
import { webdevCourse } from "./courses/webdev";
import { databaseCourse } from "./courses/database";
import { mobileCourse } from "./courses/mobile";
import { gamedevCourse } from "./courses/gamedev";
import { cybersecurityCourse } from "./courses/cybersecurity";

// Programming Language Courses
import { pythonCourse } from "./courses/python";
import { csharpCourse } from "./courses/csharp";
import { phpCourse } from "./courses/php";
import { golangCourse } from "./courses/golang";
import { javaCourse } from "./courses/java";
import { cppCourse } from "./courses/cpp";
import { typescriptCourse } from "./courses/typescript";

export const coreCourses: Course[] = [
  iotCourse,
  networkCourse,
  webdevCourse,
  databaseCourse,
  mobileCourse,
  gamedevCourse,
  cybersecurityCourse,
];

export const languageCourses: Course[] = [
  pythonCourse,
  csharpCourse,
  phpCourse,
  golangCourse,
  javaCourse,
  cppCourse,
  typescriptCourse,
];

export const courses: Course[] = [
  ...coreCourses,
  ...languageCourses,
];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesByCategory(category: "core" | "language"): Course[] {
  return courses.filter((c) => c.category === category);
}

export function getLesson(courseId: string, lessonId: string): Lesson | undefined {
  const course = getCourse(courseId);
  if (!course) return undefined;
  return course.lessons.find((l) => l.id === lessonId);
}
