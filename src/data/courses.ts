import { Course, Lesson } from "./types";
import { iotCourse } from "./courses/iot";
import { networkCourse } from "./courses/network";
import { webdevCourse } from "./courses/webdev";
import { databaseCourse } from "./courses/database";
import { mobileCourse } from "./courses/mobile";
import { gamedevCourse } from "./courses/gamedev";
import { cybersecurityCourse } from "./courses/cybersecurity";

export const courses: Course[] = [
  iotCourse,
  networkCourse,
  webdevCourse,
  databaseCourse,
  mobileCourse,
  gamedevCourse,
  cybersecurityCourse,
];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getLesson(courseId: string, lessonId: string): Lesson | undefined {
  const course = getCourse(courseId);
  if (!course) return undefined;
  return course.lessons.find((l) => l.id === lessonId);
}
