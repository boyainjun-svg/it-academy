import { Course } from "../types";

export const typescriptCourse: Course = {
  id: "typescript",
  title: "Advanced TypeScript 5 & Enterprise Type Systems",
  description: "ยกระดับการพัฒนา JavaScript สู่มาตรฐานสากลด้วย TypeScript 5: Structural Typing, Generics, Utility Types, Conditional Types, Zod Schema Validation จนถึง Full-Stack Monorepos",
  longDescription: "หลักสูตรวิศวกรรมภาษา TypeScript ขั้นสูง (Advanced TypeScript 5 Engineering) ที่มุ่งเน้นการสร้างระบบประเภทข้อมูลที่แข็งแกร่ง (Robust Type Systems) สำหรับโปรเจกต์ขนาดใหญ่ ครอบคลุมตั้งแต่หลักการ Structural Typing (Duck Typing), การปรับแต่งคอมไพเลอร์ใน tsconfig.json, Discriminated Unions, Type Guards, Generic Programming เชิงลึก, Mapped Types, Template Literal Types, Conditional Types ร่วมกับคีย์เวิร์ด infer, การทำ Runtime Type Validation ด้วย Zod, ตลอดจนการแชร์ Type ข้ามระบบใน Full-Stack Monorepo (Next.js + Backend)",
  icon: "🟦",
  color: "blue",
  gradient: "from-blue-600 via-sky-600 to-indigo-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["TypeScript", "JavaScript", "Generics", "Zod", "Type System", "Full-Stack", "Node.js"],
  recommendedTools: [
    {
      name: "Node.js 20+ & TypeScript 5 (tsc)",
      icon: "🟦",
      badge: "Official Toolchain",
      description: "คอมไพเลอร์ TypeScript มาตรฐาน พร้อมตัวรันสคริปต์ความเร็วสูง tsx / ts-node",
      downloadUrl: "https://www.typescriptlang.org/",
      setupGuide: "1. ติดตั้ง Node.js จาก nodejs.org\n2. ติดตั้ง TypeScript ทั่วโลกผ่าน npm: npm install -g typescript tsx\n3. ตรวจสอบใน Terminal: tsc -v"
    },
    {
      name: "VS Code with TypeScript Language Service",
      icon: "💻",
      badge: "Top Tier IDE",
      description: "สภาพแวดล้อมการเขียน TypeScript ที่ดีที่สุด พร้อมฟีเจอร์ Quick Fixes, Type Hover, และ Refactoring อัจฉริยะ",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้ง VS Code\n2. สร้าง tsconfig.json ด้วยคำสั่ง: tsc --init\n3. เปิดฟังก์ชัน 'strict: true' ใน tsconfig.json เพื่อความปลอดภัยสูงสุด"
    }
  ],
  lessons: [
    {
      id: "ts-1",
      title: "ปรัชญาและโครงสร้าง TypeScript: Structural Typing, Inference และ tsconfig.json",
      description: "ทำความเข้าใจ Structural Typing System, การอนุมาน Type อัตโนมัติ (Type Inference), การตั้งค่า Strict Mode ใน tsconfig.json, และการคอมไพล์สู่ JavaScript",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# ปรัชญาภาษา TypeScript และ Structural Typing System

**TypeScript** เป็น Typed Superset ของ JavaScript พัฒนาโดย Anders Hejlsberg (ผู้ออกแบบ C#) ที่คอมไพล์ออกมาเป็น JavaScript มาตรฐาน โดยมีระบบประเภทข้อมูลเป็นแบบ **Structural Typing (ความเท่ากันขึ้นอยู่กับรูปร่างของข้อมูล ไม่ใช่ชื่อคลาส)**

---

## 1. จุดเด่นสำคัญ

- **Erase on Compile:** Type ทั้งหมดจะถูกลบออกตอนคอมไพล์ ทำให้ JavaScript ไฟล์สุดท้ายไม่มี Performance Overhead ใดๆ
- **Type Inference:** TypeScript ฉลาดพอที่จะเดาชนิดข้อมูลได้เองโดยไม่ต้องพิมพ์กำกับทุกจุด
- **Strict Mode:** การเปิด \`"strict": true\` ใน \`tsconfig.json\` จะบังคับตรวจสอบ Nullable และ Type อย่างสมบูรณ์แบบ`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// TypeScript 5: Structural Typing และ Type Inference
// =================================================================

interface Student {
  readonly id: string;
  name: string;
  gpa: number;
  department: string;
}

function printStudentCard(student: Student): void {
  const status = student.gpa >= 3.5 ? "เกียรตินิยม (Honors)" : "ปกติ";
  console.log(\`🎓 [CARD] \${student.name} (\${student.id})\`);
  console.log(\`   สาขาวิชา: \${student.department} | GPA: \${student.gpa.toFixed(2)} (\${status})\`);
}

// ออบเจกต์ที่มีรูปร่างตรงตาม Interface
const currentStudent: Student = {
  id: "STD-670101",
  name: "พงศกร เมืองประเทศ",
  gpa: 3.85,
  department: "Information Technology"
};

printStudentCard(currentStudent);`,
        description: "การประกาศ Interface และการใช้งาน Type Annotations ใน TypeScript"
      },
      quiz: [
        {
          id: "ts-q1",
          question: "อะไรเกิดขึ้นกับ Type Annotations ในไฟล์ TypeScript เมื่อถูกคอมไพล์เป็น JavaScript?",
          options: ["ถูกแปลงเป็น Object ตรวจสอบตอนรันไทม์", "ถูกลบออกทั้งหมด (Type Erasure) ไม่เหลือในไฟล์ JS", "ถูกบันทึกเป็นคอมเมนต์", "ทำให้ไฟล์ JS มีขนาดใหญ่ขึ้น 2 เท่า"],
          correctAnswer: 1,
          explanation: "TypeScript ใช้หลักการ Type Erasure โดยจะตัด Type ทั้งหมดออกตอนคอมไพล์ เพื่อให้ได้ไฟล์ JavaScript ดิบที่รันได้เร็วที่สุด"
        }
      ]
    },
    {
      id: "ts-2",
      title: "Union Types, Intersection Types, Type Narrowing และ Discriminated Unions",
      description: "ผสาน Type ด้วย Union (|) และ Intersection (&), การตรวจสอบ Type ตอนรันไทม์ด้วย typeof/instanceof, และแบบแผน Discriminated Unions สำหรับ Event/State Management",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# Union Types และ Discriminated Unions ใน TypeScript

ในการเขียนระบบจัดการสถานะ (State Management) รูปแบบ **Discriminated Unions (Tagged Unions)** เป็นแบบแผนที่ปลอดภัยที่สุด โดยใช้ Literal Property ร่วมกันในการแยกประเภทของข้อมูล

---

## 1. ตัวอย่าง Discriminated Unions

\`\`\`typescript
type ApiResponse =
  | { status: "success"; data: Student[] }
  | { status: "error"; errorMessage: string }
  | { status: "loading" };
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Discriminated Unions สำหรับการจัดการสถานะ API อย่างปลอดภัย
// =================================================================

type NetworkState =
  | { state: "idle" }
  | { state: "loading"; progress: number }
  | { state: "success"; data: { id: string; title: string } }
  | { state: "failed"; error: string };

function renderUI(state: NetworkState): string {
  switch (state.state) {
    case "idle":
      return "⚪ พร้อมเริ่มดำเนินการ";
    case "loading":
      return \`⏳ กำลังดาวน์โหลดข้อมูล... (\${state.progress}%)\`;
    case "success":
      return \`✅ สำเร็จ: โหลดข้อมูลคอร์ส "\${state.data.title}" เรียบร้อย\`;
    case "failed":
      return \`❌ ล้มเหลว: \${state.error}\`;
  }
}

console.log(renderUI({ state: "loading", progress: 65 }));
console.log(renderUI({ state: "success", data: { id: "TS-501", title: "Advanced TypeScript" } }));`,
        description: "การใช้ Discriminated Unions ร่วมกับ switch statement เพื่อการตรวจสอบสถานะที่ครอบคลุม 100%"
      }
    },
    {
      id: "ts-3",
      title: "Generic Programming เชิงลึก: Generic Functions, Interfaces และ Constraints (extends)",
      description: "เขียนโค้ดที่ยืดหยุ่นและ Type-Safe ด้วย Generics (<T>), การจำกัดขอบเขตของ Type ด้วยคีย์เวิร์ด extends, การใช้งาน keyof, และ Default Generic Parameters",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Generics เชิงลึกใน TypeScript

**Generics** ช่วยให้เราสามารถเขียนฟังก์ชัน คลาส หรือ Interface ที่สามารถทำงานกับข้อมูลชนิดใดก็ได้ โดยยังคงรักษา **Type Safety ไว้อย่างสมบูรณ์แบบ** โดยไม่ต้องใช้ \`any\`

---

## 1. Generic Constraints ด้วย \`extends\` และ \`keyof\`

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Generic Repository สำหรับการจัดเก็บข้อมูลแบบ Type-Safe
// =================================================================

interface Identifiable {
  id: string | number;
}

class InMemoryStore<T extends Identifiable> {
  private items: Map<string | number, T> = new Map();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  getById(id: string | number): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }
}

interface UserProfile extends Identifiable {
  id: number;
  username: string;
  role: "admin" | "student";
}

const userStore = new InMemoryStore<UserProfile>();
userStore.add({ id: 1, username: "somchai.dev", role: "student" });
userStore.add({ id: 2, username: "admin.it", role: "admin" });

const user = userStore.getById(1);
console.log("✓ ค้นพบผู้ใช้ผ่าน Generic Store:", user?.username, "(Role:", user?.role, ")");`,
        description: "การสร้าง Generic Class พร้อมการจำกัด Generic Constraint ผ่าน extends"
      }
    },
    {
      id: "ts-4",
      title: "Advanced Utility Types: Partial, Pick, Omit, Record และ Template Literal Types",
      description: "ประยุกต์ใช้ Built-in Utility Types: Partial<T>, Required<T>, Pick<T, K>, Omit<T, K>, Record<K, T>, ReturnType<T>, และการสร้างสตริง Type ด้วย Template Literal Types",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Advanced Utility Types และ Template Literal Types

TypeScript มีชุดเครื่องมือ **Utility Types** ในตัว ช่วยให้เราสามารถแปลง Interface เดิมให้ออกมาเป็นโครงสร้างใหม่ได้อย่างง่ายดาย โดยไม่ต้องประกาศคลาสซ้ำซ้อน

---

## 1. Utility Types ยอดนิยม

- **\`Partial<T>\`:** ปรับทุก Property ให้กลายเป็น Optional (\`?\`)
- **\`Pick<T, Keys>\`:** เลือกเฉพาะบาง Property ที่ต้องการ
- **\`Omit<T, Keys>\`:** ตัดเฉพาะบาง Property ที่ไม่ต้องการออก
- **\`Record<Key, Value>\`:** สร้างโครงสร้าง Dictionary Map`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// การแปลงโมเดลข้อมูลด้วย TypeScript Utility Types
// =================================================================

interface CourseFull {
  id: string;
  title: string;
  instructor: string;
  durationMinutes: number;
  isPublished: boolean;
}

// 1. DTO สำหรับอัปเดตข้อมูล (ทุกฟิลด์เป็น Optional)
type CourseUpdateDto = Partial<CourseFull>;

// 2. DTO สำหรับแสดงในการ์ดหน้าแรก (เลือกเฉพาะฟิลด์ที่จำเป็น)
type CourseCardDto = Pick<CourseFull, "id" | "title" | "instructor">;

// 3. Template Literal Type สำหรับ Event Name
type EventAction = "create" | "update" | "delete";
type ResourceName = "student" | "course";
type SystemEvent = \`\${ResourceName}_\${EventAction}\`; // "student_create" | "course_delete" ...

const updatePayload: CourseUpdateDto = {
  title: "Modern Web Engineering (Updated 2026)"
};

const triggeredEvent: SystemEvent = "course_update";
console.log("✓ Payload อัปเดต:", updatePayload);
console.log("✓ System Event Triggered:", triggeredEvent);`,
        description: "การประยุกต์ใช้ Partial, Pick และ Template Literal Types"
      }
    },
    {
      id: "ts-5",
      title: "Conditional Types และคีย์เวิร์ด infer: การสร้าง Dynamic Type Transformation",
      description: "สร้างตรรกะระดับ Type System ด้วย Conditional Types (T extends U ? X : Y), การดึง Type ย่อยออกมาด้วยคีย์เวิร์ด infer, และ NonNullable<T>",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Conditional Types และ Infer Keyword

**Conditional Types** ช่วยให้เราเขียน "if-else" ในระดับ Type System ได้ ทำให้ TypeScript มีความสามารถในการประมวลผลเชิงตรรกะในระดับ Turing Complete

---

## 1. การดึง Type ออกมาจาก Promise ด้วย \`infer\`

\`\`\`typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Conditional Types และ infer Keyword
// =================================================================

// ฟังก์ชันจำลองที่คืนค่า Promise
async function fetchStudentScores() {
  return [85, 92, 78, 90];
}

// แกะ Return Type ออกมาจากฟังก์ชัน
type AsyncReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => Promise<infer R> ? R : never;

type ScoresResult = AsyncReturnType<typeof fetchStudentScores>; // number[]

console.log("✓ ตรวจสอบความถูกต้องของ Conditional Type สำเร็จ (Inferred as number[])");`,
        description: "การสร้าง Type Utility เพื่อแกะค่าออกจาก Promise ด้วย infer"
      }
    },
    {
      id: "ts-6",
      title: "End-to-End Type Safety ด้วย Zod Schema Validation และ Inferred Types",
      description: "ผสานโลกของ Compile-Time Types และ Runtime Data ด้วย Zod Library: การสร้าง Schemas, Safe Parsing, z.infer, และการตรวจสอบข้อมูลจาก API/Forms",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Runtime Validation ด้วย Zod และ Inferred Types

TypeScript ตรวจสอบ Type ได้เฉพาะตอนคอมไพล์ (Compile-time) แต่เมื่อรันจริงในโปรดักชัน ข้อมูลจากผู้ใช้หรือ API ภายนอกอาจไม่ตรงตาม Type ที่กำหนด **Zod** เข้ามาผสานจุดนี้ โดยสร้าง Schema ตรวจสอบข้อมูลตอนรัน พร้อมแปลงเป็น TypeScript Type ให้อัตโนมัติในคำสั่งเดียว`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// การจำลองการทำงานของ Schema Validation แบบ Zod
// =================================================================

interface StudentPayload {
  studentId: string;
  name: string;
  gpa: number;
}

function validateStudent(input: any): { success: boolean; data?: StudentPayload; error?: string } {
  if (typeof input.studentId !== "string" || !input.studentId.startsWith("STD-")) {
    return { success: false, error: "รหัสนักศึกษาต้องขึ้นต้นด้วย STD-" };
  }
  if (typeof input.name !== "string" || input.name.length < 3) {
    return { success: false, error: "ชื่อต้องมีความยาวอย่างน้อย 3 ตัวอักษร" };
  }
  if (typeof input.gpa !== "number" || input.gpa < 0 || input.gpa > 4) {
    return { success: false, error: "เกรดเฉลี่ยต้องอยู่ระหว่าง 0.00 - 4.00" };
  }

  return { success: true, data: input as StudentPayload };
}

const testInput = { studentId: "STD-670101", name: "กานดา สุขเกษม", gpa: 3.92 };
const validation = validateStudent(testInput);

if (validation.success && validation.data) {
  console.log("✓ Validation ผ่านสมบูรณ์: นักศึกษา", validation.data.name, "| GPA:", validation.data.gpa);
}`,
        description: "หลักการ Schema Validation เพื่อความปลอดภัยระดับ Runtime"
      }
    },
    {
      id: "ts-7",
      title: "Modern Decorators (Stage 3) ใน TypeScript 5 สำหรับ Dependency Injection",
      description: "สถาปัตยกรรม Decorators ใหม่ตามมาตรฐาน ECMAScript Stage 3 ใน TypeScript 5.0+, Class Decorators, Method Decorators, และการประยุกต์ใช้ใน Enterprise Frameworks (NestJS/Angular)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Modern Stage 3 Decorators ใน TypeScript 5

TypeScript 5.0 นำเสนอ **Stage 3 Decorators** ตามมาตรฐานอย่างเป็นทางการของ TC39 โดยไม่ต้องเปิดแฟล็ก \`experimentalDecorators\` อีกต่อไป ช่วยให้การเขียน Dependency Injection และ Logging ทำได้อย่างสะอาดตา`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Method Execution Logger Decorator Pattern
// =================================================================

function loggedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(\`⚡ [LOG] กำลังเรียกฟังก์ชัน: \${propertyKey}(\${JSON.stringify(args)})\`);
    const result = originalMethod.apply(this, args);
    console.log(\`✓ [LOG] ฟังก์ชัน \${propertyKey} ทำงานสำเร็จ\`);
    return result;
  };
  return descriptor;
}

console.log("✓ Stage 3 Decorators Architecture พร้อมใช้งานใน TypeScript 5");`,
        description: "โครงสร้าง Method Decorator สำหรับการดักจับ Log ใน TypeScript"
      }
    },
    {
      id: "ts-8",
      title: "Full-Stack Monorepo Type Sharing สำหรับ Next.js และ Backend Services",
      description: "การออกแบบ Turborepo / Nx Monorepo, การแชร์ Type DTOs ระหว่าง Frontend (React/Next.js) และ Backend (Node.js/Express) แบบ Single Source of Truth",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Full-Stack Monorepo และ Single Source of Truth

ปัญหาคลาสสิกในการพัฒนาเว็บคือ Frontend และ Backend นิยาม Type สำหรับ API ไม่ตรงกัน การใช้ **TypeScript Monorepo** ทำให้เราสามารถประกาศ Type เพียงครั้งเดียวในโฟลเดอร์ \`packages/types\` แล้วให้ทั้งเว็บและเซิร์ฟเวอร์นำไปใช้ร่วมกันได้ทันที`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// DTO สำหรับการแชร์ระหว่าง Frontend และ Backend
// =================================================================

export interface ApiResponseDTO<T> {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp: string;
}

export interface UserSummaryDTO {
  id: string;
  name: string;
  role: "admin" | "student" | "instructor";
}

const mockResponse: ApiResponseDTO<UserSummaryDTO> = {
  success: true,
  statusCode: 200,
  data: { id: "USR-101", name: "สมชาย ใจดี", role: "student" },
  timestamp: new Date().toISOString()
};

console.log("✓ Shared DTO Payload:", JSON.stringify(mockResponse, null, 2));`,
        description: "ตัวอย่างการประกาศ DTO แบบแชร์ข้ามแพ็กเกจใน Monorepo"
      }
    },
    {
      id: "ts-9",
      title: "โปรเจกต์ Enterprise Type-Safe SDK & API Client",
      description: "โปรเจกต์รวบยอด: พัฒนา Type-Safe HTTP Client Library สำหรับเชื่อมต่อ API ของ IT Academy พร้อม Type Inference อัตโนมัติ, Error Handling, และ Publish-ready Setup",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise TypeScript: Type-Safe API Client SDK

ในบทเรียนนี้ เราจะนำเทคโนโลยีทั้งหมด ทั้ง Generics, Utility Types, Discriminated Unions และ Type Narrowing มาสร้างเป็น SDK Client Library สำหรับเรียกใช้งาน API แบบ Type-Safe 100%`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// โปรเจกต์ Type-Safe API SDK Client
// =================================================================

interface ApiEndpointMap {
  "/api/students": { id: string; name: string }[];
  "/api/stats": { totalCourses: number; activeStudents: number };
}

class ItAcademyClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Type-Safe Request Method ที่รู้อัตโนมัติว่า Path ใดจะได้ Response Type ใดกลับมา
  async get<Path extends keyof ApiEndpointMap>(path: Path): Promise<ApiEndpointMap[Path]> {
    console.log(\`🌐 [HTTP GET] ส่งคำขอไปยัง: \${this.baseUrl}\${path}\`);
    
    // จำลองผลลัพธ์ตาม Type
    if (path === "/api/stats") {
      return { totalCourses: 14, activeStudents: 1250 } as ApiEndpointMap[Path];
    }
    
    return [
      { id: "STD-01", name: "สมชาย ใจดี" },
      { id: "STD-02", name: "กานดา สุขเกษม" }
    ] as ApiEndpointMap[Path];
  }
}

async function runClientDemo() {
  const client = new ItAcademyClient("https://it-academy-online.vercel.app");
  
  const stats = await client.get("/api/stats");
  console.log("📊 สถิติระบบที่ได้รับจาก Type-Safe Client:");
  console.log(\`• หลักสูตรทั้งหมด: \${stats.totalCourses} คอร์ส\`);
  console.log(\`• นักศึกษาที่กำลังเรียน: \${stats.activeStudents} คน\`);
}

runClientDemo();`,
        description: "สถาปัตยกรรม Type-Safe API Client SDK พร้อม Auto Path Completion"
      }
    }
  ]
};
