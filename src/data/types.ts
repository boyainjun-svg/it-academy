export interface CodeChallenge {
  id?: string;
  title?: string;
  description: string;
  initialCode?: string;
  startingCode?: string;
  solution?: string;
  expectedOutput?: string;
  hint?: string;
  language?: string;
}

export interface QuizQuestion {
  id?: string;
  question: string;
  options: string[];
  correctAnswer?: number;
  correctOption?: number;
  explanation: string;
}

export interface LabStep {
  title: string;
  detail: string;
  codeOrCommand?: string;
  tip?: string;
}

export interface LabGuide {
  title: string;
  toolName: string;
  toolIcon?: string;
  downloadUrl?: string;
  objective: string;
  prerequisites?: string[];
  steps: LabStep[];
  verification: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "เริ่มต้น" | "ปานกลาง" | "ขั้นสูง";
  content: string;
  codeExample?:
    | string
    | {
        language: string;
        code: string;
        description: string;
      };
  challenge?: string | CodeChallenge;
  quiz?: QuizQuestion[];
  quizzes?: QuizQuestion[];
  labGuide?: LabGuide;
}

export interface RecommendedTool {
  name: string;
  icon: string;
  badge: string;
  description: string;
  downloadUrl: string;
  setupGuide: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  gradient: string;
  totalLessons: number;
  difficulty: "เริ่มต้น" | "ปานกลาง" | "ขั้นสูง";
  tags: string[];
  recommendedTools: RecommendedTool[];
  lessons: Lesson[];
  category?: "core" | "language";
}
