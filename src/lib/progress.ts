export interface User {
  id: string;
  name: string;
  email: string;
  institution?: string;
  department?: string;
  educationLevel?: string;
  isVerified?: boolean;
  role?: string;
}

export interface UserProgress {
  [courseId: string]: {
    completedLessons: string[];
    startedAt: string;
    lastAccessedAt: string;
  };
}

const isClient = typeof window !== "undefined";

export function getProgress(): UserProgress {
  if (!isClient) return {};
  const data = localStorage.getItem("progress");
  let progress: UserProgress = data ? JSON.parse(data) : {};

  // Sync with any course_progress_* keys
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("course_progress_")) {
        const courseId = key.replace("course_progress_", "");
        const raw = localStorage.getItem(key);
        if (raw) {
          const list: string[] = JSON.parse(raw);
          if (!progress[courseId]) {
            progress[courseId] = {
              completedLessons: list,
              startedAt: new Date().toISOString(),
              lastAccessedAt: new Date().toISOString(),
            };
          } else {
            progress[courseId].completedLessons = Array.from(
              new Set([...progress[courseId].completedLessons, ...list])
            );
          }
        }
      }
    }
  } catch (e) {
    console.error(e);
  }

  return progress;
}

export function getLessonProgress(courseId: string): string[] {
  const progress = getProgress();
  const fromProgress = progress[courseId]?.completedLessons || [];
  if (isClient) {
    const raw = localStorage.getItem(`course_progress_${courseId}`);
    if (raw) {
      try {
        const rawArr = JSON.parse(raw);
        if (Array.isArray(rawArr)) {
          return Array.from(new Set([...fromProgress, ...rawArr]));
        }
      } catch (e) {}
    }
  }
  return fromProgress;
}

export function markLessonComplete(courseId: string, lessonId: string): void {
  if (!isClient) return;
  const progress = getProgress();

  if (!progress[courseId]) {
    progress[courseId] = {
      completedLessons: [],
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString(),
    };
  }

  if (!progress[courseId].completedLessons.includes(lessonId)) {
    progress[courseId].completedLessons.push(lessonId);
  }
  progress[courseId].lastAccessedAt = new Date().toISOString();

  localStorage.setItem("progress", JSON.stringify(progress));

  // Also sync course_progress_${courseId}
  try {
    const key = `course_progress_${courseId}`;
    const stored = localStorage.getItem(key);
    let rawArr: string[] = stored ? JSON.parse(stored) : [];
    if (!rawArr.includes(lessonId)) {
      rawArr.push(lessonId);
      localStorage.setItem(key, JSON.stringify(rawArr));
    }
  } catch (e) {
    console.error(e);
  }
}

export function getCourseProgress(
  courseId: string,
  totalLessons: number
): number {
  if (totalLessons === 0) return 0;
  const completed = getLessonProgress(courseId).length;
  return Math.round((completed / totalLessons) * 100);
}

export function isLessonComplete(
  courseId: string,
  lessonId: string
): boolean {
  return getLessonProgress(courseId).includes(lessonId);
}

export function getUser(): User | null {
  if (!isClient) return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function setUser(user: User): void {
  if (!isClient) return;
  localStorage.setItem("user", JSON.stringify(user));
}

export function logout(): void {
  if (!isClient) return;
  localStorage.removeItem("user");
}
