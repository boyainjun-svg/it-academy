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
      description: "ทำความเข้าใจ Structural Typing System, สถาปัตยกรรมคอมไพเลอร์ tsc (Scanner, Parser, Binder, Checker, Emitter), การอนุมาน Type อัตโนมัติ (Type Inference) และการคอนฟิก tsconfig.json ระดับองค์กร",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม TypeScript 5 และ Structural Typing System

**TypeScript** พัฒนาขึ้นโดย Anders Hejlsberg สถาปนิกผู้ออกแบบ C# และ Turbo Pascal โดยวางตำแหน่งเป็น **Typed Superset ของ JavaScript** ที่คอมไพล์แล้วได้ JavaScript บริสุทธิ์ (Clean, Idiomatic JavaScript) ที่สามารถทำงานบนรันไทม์ใดๆ ก็ได้ เช่น V8 (Node.js, Chrome), JavaScriptCore (Safari, Bun), หรือ SpiderMonkey (Firefox)

---

## 1. ปรัชญาการออกแบบของ TypeScript (Design Goals & Trade-offs)
TypeScript ไม่ได้พยายามเปลี่ยน JavaScript ให้กลายเป็น Java หรือ C# แต่มีเป้าหมายที่ชัดเจน:
1. **Type Erasure (ไร้รอยต่อตอนรันไทม์):** ประเภทข้อมูลทั้งหมดจะถูกลบออก (Erased) ในขั้นตอนการคอมไพล์ รหัส JavaScript ไฟล์สุดท้ายจะไม่มี Type Annotation เหลืออยู่เลย ส่งผลให้ไม่มี Performance Overhead ใดๆ เพิ่มเติมตอนรันไทม์
2. **Structural Typing (Duck Typing ในระดับสถิต):** ต่างจาก Java/C# ที่เป็น *Nominal Typing* (ความเข้ากันได้ขึ้นกับชื่อคลาสที่สืบทอด), TypeScript ใช้ *Structural Typing* ซึ่งตัดสินความเข้ากันได้จาก "รูปร่าง" (Shape) ของข้อมูล หาก Object มี Property และ Method ตรงตามที่กำหนด ก็ถือว่าสอดคล้องกันทันที
3. **Soundness vs Productivity:** TypeScript จงใจเลือกที่จะไม่เป็น "100% Sound Type System" ในบางจุด เพื่อให้รองรับพฤติกรรมพลวัต (Dynamic Nature) ของ JavaScript ในโลกจริงได้อย่างยืดหยุ่น

---

## 2. ขั้นตอนการทำงานภายในของ TypeScript Compiler (tsc Pipeline)

\`\`\`text
+-------------------------------------------------------------------------+
|                  TypeScript Compiler Architecture (tsc)                 |
+-------------------------------------------------------------------------+
|  Source Code (.ts)                                                      |
|        |                                                                |
|        v                                                                |
|  1. Scanner (Lexical Analysis)  --> แปลงโค้ดเป็น Token Stream           |
|        |                                                                |
|        v                                                                |
|  2. Parser (Syntax Analysis)    --> สร้าง Abstract Syntax Tree (AST)   |
|        |                                                                |
|        v                                                                |
|  3. Binder                      --> สร้าง Symbols และผูก Scopes         |
|        |                                                                |
|        v                                                                |
|  4. Type Checker                --> ตรวจสอบ Type Rules & Diagnostics   |
|        |                                                                |
|        v                                                                |
|  5. Emitter                     --> สร้าง JavaScript (.js) + .d.ts      |
+-------------------------------------------------------------------------+
\`\`\`

1. **Scanner:** สแกนข้อความตัวอักษรแล้วตัดแบ่งเป็น Tokens
2. **Parser:** นำ Token มาเรียงร้อยเป็นโครงสร้างต้นไม้ Abstract Syntax Tree (AST)
3. **Binder:** สร้าง Symbol Table เชื่อมโยงการประกาศตัวแปรกับขอบเขต (Scope)
4. **Type Checker:** ส่วนที่มีความซับซ้อนและขนาดใหญ่ที่สุด ตรวจสอบความถูกต้องของประเภทข้อมูล กฎการอนุมาน (Type Inference) และรายงาน Compile Errors
5. **Emitter:** แปลง AST ออกมาเป็นไฟล์ JavaScript (.js), Type Declaration (.d.ts) และ Source Maps (.js.map)

---

## 3. Structural Typing vs Nominal Typing เชิงลึก

\`\`\`typescript
// ในภาษา Nominal (เช่น Java): Point2D กับ Vector2D เป็นคนละคลาสกัน ใช้งานแทนกันไม่ได้
// ในภาษา Structural (TypeScript): ทั้งคู่มีรูปร่าง { x: number, y: number } เหมือนกัน ถือเป็น Type เดียวกัน!
interface Point2D { x: number; y: number; }
interface Vector2D { x: number; y: number; }

let p: Point2D = { x: 10, y: 20 };
let v: Vector2D = p; // ผ่านฉลุย 100%!
\`\`\`

### ข้อพึงระวัง: Excess Property Checks
เมื่อส่ง Object Literal ให้ตัวแปรหรือพารามิเตอร์โดยตรง TypeScript จะเปิดโหมด **Excess Property Checking** เพื่อป้องกันการพิมพ์ชื่อฟิลด์ผิด:
\`\`\`typescript
function printPoint(p: Point2D) { console.log(p.x, p.y); }

// Error: Object literal may only specify known properties, and 'z' does not exist in type 'Point2D'
printPoint({ x: 1, y: 2, z: 3 });

// แต่ถ้าผ่านตัวแปรก่อน จะไม่เกิด Error (เพราะเป็น Subtyping ตามปกติ)
const raw = { x: 1, y: 2, z: 3 };
printPoint(raw); // ผ่าน!
\`\`\`

---

## 4. การตั้งค่า \`tsconfig.json\` ระดับโปรดักชัน
การเปิด Strict Mode เป็นสิ่งจำเป็นอย่างยิ่งในการพัฒนาซอฟต์แวร์ระดับองค์กร:
- \`"strict": true\` — เปิดใช้งานฟังก์ชันความปลอดภัยทั้งหมด (รวมถึง \`noImplicitAny\`, \`strictNullChecks\`)
- \`"target": "ES2022"\` — กำหนดเวอร์ชัน JavaScript ที่ต้องการส่งออก
- \`"moduleResolution": "NodeNext"\` — รองรับระบบ ECMAScript Modules (ESM) ยุคใหม่
- \`"exactOptionalPropertyTypes": true\` — ห้ามส่ง \`undefined\` เข้าฟิลด์ที่เป็น Optional เว้นแต่จะระบุชัดเจน`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// TypeScript 5: Structural Subtyping & Type Inference Engine
// =================================================================

interface UserIdentity {
  readonly id: string;
  name: string;
  email: string;
}

interface AuthenticatedSession {
  id: string;
  name: string;
  email: string;
  token: string;
  roles: readonly string[];
}

// ฟังก์ชันรับเฉพาะ UserIdentity
function displayUserProfile(user: UserIdentity): void {
  console.log(\`👤 User: \${user.name} (\${user.email}) [ID: \${user.id}]\`);
}

// 1. ตรวจสอบพฤติกรรม Structural Subtyping
const session: AuthenticatedSession = {
  id: "usr_9921",
  name: "ดร. กฤษณะ วงศ์สวัสดิ์",
  email: "kritsana.w@academy.edu",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  roles: ["SUPER_ADMIN", "INSTRUCTOR"]
};

// ส่ง session ที่มี properties มากกว่า เข้าฟังก์ชันที่ต้องการเฉพาะ UserIdentity ได้อย่างปลอดภัย
displayUserProfile(session);

// 2. Type Inference และ Contextual Typing
const scores = [88, 92, 79, 95] as const; // Inferred as readonly [88, 92, 79, 95]
const total = scores.reduce((acc, curr) => acc + curr, 0); // acc, curr inferred as number
console.log(\`📊 คะแนนรวมจากการอนุมาน: \${total}\`);`,
        description: "การตรวจสอบคุณสมบัติ Structural Subtyping และการทำงานของ Type Inference ใน TypeScript 5"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `validateEntity` ที่รับ Interface `Entity { id: string; createdAt: Date; }` แล้วตรวจสอบว่า Object ใดๆ ที่ส่งเข้ามามีฟิลด์ครบถ้วนตามหลัก Structural Typing หรือไม่",
        startingCode: `interface Entity {
  id: string;
  createdAt: Date;
}

function validateEntity(item: Entity): string {
  // TODO: ส่งคืนข้อความระบุ id และเวลาที่สร้างของ Entity
  return "";
}

const product = { id: "PROD-101", name: "Keyboard", price: 1500, createdAt: new Date() };
console.log(validateEntity(product));`,
        solution: `interface Entity {
  id: string;
  createdAt: Date;
}

function validateEntity(item: Entity): string {
  return \`Entity ID: \${item.id}, Created At: \${item.createdAt.toISOString()}\`;
}

const product = { id: "PROD-101", name: "Keyboard", price: 1500, createdAt: new Date() };
console.log(validateEntity(product));`
      },
      quiz: [
        {
          id: "ts-1-q1",
          question: "อะไรเกิดขึ้นกับ Type Annotations ในไฟล์ TypeScript เมื่อถูกคอมไพล์เป็น JavaScript ผ่านคำสั่ง tsc?",
          options: [
            "ถูกแปลงเป็น Object ตรวจสอบความถูกต้องในหน่วยความจำตอนรันไทม์",
            "ถูกลบออกทั้งหมด (Type Erasure) ทำให้ไฟล์ JavaScript สุดท้ายไม่มี Overhead",
            "ถูกแปลงเป็นคอมเมนต์ JSDoc เพื่อให้เบราว์เซอร์อ่านค่า",
            "ถูกเข้ารหัสเป็น WebAssembly Module แยกต่างหาก"
          ],
          correctAnswer: 1,
          explanation: "TypeScript ใช้ปรัชญา Type Erasure โดยขั้นตอน Emitter จะตัดไวยากรณ์ Type ทั้งหมดทิ้ง เหลือเพียงโค้ด JavaScript บริสุทธิ์ ทำให้ไม่มีผลกระทบต่อความเร็วตอนรันไทม์"
        },
        {
          id: "ts-1-q2",
          question: "ระบบประเภทข้อมูลแบบ Structural Typing ใน TypeScript พิจารณาความเท่าเทียมของ Type จากสิ่งใด?",
          options: [
            "ชื่อของ Interface หรือชื่อ Class ที่อ็อบเจกต์นั้นประกาศสร้างขึ้นมา",
            "ตำแหน่งของหน่วยความจำ Heap Pointer ที่อ็อบเจกต์นั้นถูกจัดสรร",
            "รูปร่าง สมาชิกตัวแปร และเมธอด (Shape/Structure) ที่อ็อบเจกต์นั้นครอบครอง",
            "ลำดับการ import ไฟล์โมดูลในระบบ"
          ],
          correctAnswer: 2,
          explanation: "Structural Typing (Duck Typing เชิงสถิต) พิจารณาจากโครงสร้าง (Shape) ของข้อมูล หากอ็อบเจกต์มี Property ครบตามที่ Type ปลายทางต้องการ ก็ถือว่าเข้ากันได้ทันที โดยไม่ต้องสืบทอดหรือใช้ชื่อเดียวกัน"
        },
        {
          id: "ts-1-q3",
          question: "เหตุใดโค้ด `const p: { x: number } = { x: 1, y: 2 };` จึงเกิด Compile Error แต่ `const obj = { x: 1, y: 2 }; const p: { x: number } = obj;` จึงผ่านฉลุย?",
          options: [
            "เพราะ TypeScript มีบั๊กในตัวคอมไพเลอร์รุ่นเก่า",
            "เพราะการส่ง Object Literal ตรงๆ จะถูกตรวจสอบด้วย Excess Property Checks เพื่อกันการพิมพ์ผิด",
            "เพราะตัวแปร obj มีการแปลงสภาพเป็น any โดยอัตโนมัติ",
            "เพราะคำสั่ง const บังคับให้ object ห้ามมีคุณสมบัติเกินกว่า 1 ตัวแปร"
          ],
          correctAnswer: 1,
          explanation: "เมื่อเขียน Object Literal ส่งให้ตัวแปรโดยตรง TypeScript จะเรียกใช้ Excess Property Checking ทันทีเพื่อดักจับข้อผิดพลาด แต่เมื่อกำหนดผ่านตัวแปรตัวกลาง จะกลับสู่กฎ Structural Subtyping มาตรฐาน"
        }
      ]
    },
    {
      id: "ts-2",
      title: "Union Types, Intersection Types, Type Narrowing และ Discriminated Unions",
      description: "ผสาน Type ด้วย Union (|) และ Intersection (&), เข้าใจ Control Flow Analysis (CFA), เทคนิค Type Narrowing ด้วย typeof/instanceof/in/Custom Type Guards, และสถาปัตยกรรม Discriminated Unions ร่วมกับ Exhaustiveness Checking",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# Union, Intersection และ Discriminated Unions ใน TypeScript

ในระบบการเขียนโปรแกรมเชิงฟังก์ชันและเชิงวัตถุยุคใหม่ การสร้างแบบจำลองสถานะข้อมูลที่ไม่มีวันเกิดข้อผิดพลาด (Making Impossible States Impossible) คือหัวใจของความเสถียร TypeScript ให้เครื่องมืออันทรงพลังผ่าน **Set Theory of Types**

---

## 1. ทฤษฎีเซตของประเภทข้อมูล (Type as Sets of Values)
- **Union Types (\`A | B\`):** หมายถึงค่าที่เป็นสมาชิกของเซต A หรือเซต B (หรือทั้งสองอย่าง) เปรียบเหมือนตรรกะ OR
- **Intersection Types (\`A & B\`):** หมายถึงค่าที่ต้องมีคุณสมบัติครบถ้วนตามเซต A และเซต B พร้อมกัน เปรียบเหมือนตรรกะ AND

\`\`\`typescript
type Admin = { privileges: string[] };
type Employee = { id: number; name: string };

type SuperUser = Admin & Employee; // ต้องมีทั้ง privileges, id, และ name!
\`\`\`

---

## 2. Control Flow Analysis (CFA) และ Type Narrowing
TypeScript คอมไพเลอร์มีสมองกลวิเคราะห์ทิศทางการไหลของโค้ด (Control Flow Analysis) เมื่อเราใส่เงื่อนไขตรวจสอบ ตัวคอมไพเลอร์จะ "บีบแคบ" (Narrow) ชนิดข้อมูลให้เจาะจงลงโดยอัตโนมัติ:

\`\`\`text
                 +-----------------------+
                 |  Value: string | null  |
                 +-----------+-----------+
                             |
                   if (value !== null)
                             |
              +--------------+--------------+
              |                             |
            [TRUE]                       [FALSE]
              v                             v
     Type: string (Narrowed!)           Type: null
\`\`\`

### เครื่องมือ Narrowing มาตรฐาน:
1. **\`typeof\` Guard:** สำหรับข้อมูล Primitive (\`"string"\`, \`"number"\`, \`"boolean"\`, \`"symbol"\`, \`"bigint"\`)
2. **\`instanceof\` Guard:** สำหรับ Class Instance และ Error Types
3. **\`in\` Operator Guard:** ตรวจสอบการมีอยู่ของ Property ภายใน Object
4. **Custom Type Guard (User-Defined Type Guard):** ฟังก์ชันที่คืนค่าเป็น \`param is TargetType\`

\`\`\`typescript
function isString(val: unknown): val is string {
  return typeof val === "string";
}
\`\`\`

---

## 3. Discriminated Unions (Tagged Unions)
คือแบบแผนสถาปัตยกรรมที่สำคัญที่สุดในการออกแบบ Domain Modeling, Redux Reducers, และ API Response Handling โดยทุก Variant ของ Union จะแชร์ฟิลด์ Literal ตัวเดียวกันที่เรียกว่า **Discriminant (Tag)** เช่น \`status\`, \`type\`, หรือ \`kind\`

\`\`\`typescript
type PaymentState =
  | { status: "IDLE" }
  | { status: "PROCESSING"; transactionId: string }
  | { status: "SUCCESS"; receiptUrl: string; amount: number }
  | { status: "FAILED"; errorCode: number; errorMessage: string };
\`\`\`

---

## 4. Exhaustiveness Checking ด้วย Type \`never\`
เมื่อใช้ \`switch-case\` ตรวจสอบ Discriminated Unions เราสามารถรับประกันว่าไม่มี Case ใดตกหล่นได้ โดยการกำหนดตัวแปรให้เป็น \`never\` ในส่วนของ \`default\`:

\`\`\`typescript
function handlePayment(state: PaymentState) {
  switch (state.status) {
    case "IDLE": return "รอเริ่มทำรายการ";
    case "PROCESSING": return \`กำลังประมวลผล \${state.transactionId}\`;
    case "SUCCESS": return \`สำเร็จ ยอดเงิน: \${state.amount}\`;
    case "FAILED": return \`ล้มเหลว: \${state.errorMessage}\`;
    default: {
      // หากในอนาคตมีใครเพิ่มสถานะใหม่เข้าไปใน PaymentState แต่ลืมเพิ่ม case ใน switch
      // TypeScript จะแจ้ง Compile Error ตรงบรรทัดนี้ทันที!
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
}
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Discriminated Unions & Exhaustiveness Checking System
// =================================================================

type NetworkResponse<T> =
  | { status: "loading" }
  | { status: "success"; data: T; timestamp: number }
  | { status: "error"; error: Error; retryCount: number };

interface StudentGrade {
  studentId: string;
  course: string;
  score: number;
}

function renderResponse(res: NetworkResponse<StudentGrade>): string {
  switch (res.status) {
    case "loading":
      return "⏳ กำลังดึงข้อมูลผลการเรียนจากเซิร์ฟเวอร์...";
      
    case "success":
      return \`✅ สำเร็จ: นศ. \${res.data.studentId} วิชา \${res.data.course} ได้คะแนน \${res.data.score}\`;
      
    case "error":
      return \`❌ ผิดพลาด: \${res.error.message} (พยายามใหม่แล้ว \${res.retryCount} ครั้ง)\`;
      
    default: {
      // รับประกันความครอบคลุม 100% ด้วย Exhaustiveness Checking
      const _unreachable: never = res;
      throw new Error(\`Unhandled state: \${JSON.stringify(_unreachable)}\`);
    }
  }
}

// ทดสอบรันการทำงาน
const successPayload: NetworkResponse<StudentGrade> = {
  status: "success",
  data: { studentId: "STD-6701", course: "Advanced TypeScript", score: 98 },
  timestamp: Date.now()
};

console.log(renderResponse(successPayload));`,
        description: "การออกแบบ Discriminated Unions พร้อม Exhaustiveness Checking ผ่าน never type"
      },
      challenge: {
        description: "สร้าง Discriminated Union ชื่อ `Shape` ประกอบด้วย Circle (radius), Rectangle (width, height), และ Triangle (base, height) พร้อมเขียนฟังก์ชัน `calculateArea(shape: Shape): number` โดยมี Exhaustiveness Checking",
        startingCode: `type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function calculateArea(s: Shape): number {
  // TODO: คำนวณพื้นที่ตามชนิดรูปทรง
  return 0;
}`,
        solution: `type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function calculateArea(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius * s.radius;
    case "rectangle":
      return s.width * s.height;
    case "triangle":
      return 0.5 * s.base * s.height;
    default: {
      const _exhaustiveCheck: never = s;
      throw new Error("Unknown shape");
    }
  }
}`
      },
      quiz: [
        {
          id: "ts-2-q1",
          question: "หัวใจสำคัญของ Discriminated Union ใน TypeScript คืออะไร?",
          options: [
            "การสืบทอดคลาสเดียวกันผ่านคีย์เวิร์ด extends",
            "การมี Property ตัวใดตัวหนึ่งที่มี Literal Type ร่วมกันในทุกสมาชิก เพื่อใช้เป็น Tag ในการแยกแยะ",
            "การแปลง Object ทั้งหมดให้กลายเป็น JSON String",
            "การใช้คำสั่ง eval() ในการตรวจสอบค่าตอนรันไทม์"
          ],
          correctAnswer: 1,
          explanation: "Discriminated Union ต้องมี Property ร่วมกัน (เช่น kind, status) ที่เก็บค่าแบบ Literal Type แตกต่างกัน เพื่อให้คอมไพเลอร์ใช้ตรรกะ Control Flow Analysis แยกแยะ Type ย่อยได้อย่างแม่นยำ"
        },
        {
          id: "ts-2-q2",
          question: "การใช้เทคนิค `const _check: never = variable;` ใน switch block มีประโยชน์สูงสุดในด้านใด?",
          options: [
            "ช่วยเพิ่มความเร็วในการรันโค้ดระดับ CPU Register",
            "ทำหน้าที่เป็น Exhaustiveness Checking เพื่อบังคับว่าหากมีการเพิ่ม Case ใหม่ใน Union จะเกิด Compile Error ทันทีถ้าจัดการไม่ครบ",
            "เป็นการบังคับปิดโปรแกรมเมื่อเกิด Error",
            "ช่วยบีบอัดขนาดของไฟล์ JavaScript ผลลัพธ์"
          ],
          correctAnswer: 1,
          explanation: "เนื่องจาก never คือ Empty Set (ไม่มีค่าใดตกเป็นสมาชิกได้) หากมี Case ใน Union หลุดรอดมาถึงบรรทัดนี้ TypeScript จะฟ้อง Error ตอนคอมไพล์ทันทีว่าค่านั้นไม่สามารถ assign ให้ never ได้"
        },
        {
          id: "ts-2-q3",
          question: "ฟังก์ชันประเภท Custom Type Guard ต้องมี Return Type Annotation ในรูปแบบใด?",
          options: [
            "boolean",
            "arg is TargetType",
            "Promise<boolean>",
            "asserts boolean"
          ],
          correctAnswer: 1,
          explanation: "Custom Type Guard ใช้ Type Predicate ในรูปแบบ `parameterName is SpecificType` เพื่อบอก Type Checker ว่าหากฟังก์ชันนี้คืนค่า true ให้ถือว่าตัวแปรนั้นมี Type เป็น SpecificType ทันที"
        }
      ]
    },
    {
      id: "ts-3",
      title: "Generic Programming เชิงลึก: Constraints (extends), keyof และ Variance",
      description: "เจาะลึกการเขียนโค้ดแบบ Reusable & Type-Safe ด้วย Generics (<T>), การจำกัดขอบเขต Generic Constraints (extends), การเข้าถึงคีย์ด้วย keyof และ Indexed Access, ตลอดจนทำความเข้าใจ Covariance และ Contravariance",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Generic Programming เชิงลึกใน TypeScript

**Generics** เป็นกลไกที่ทำให้เราสามารถเขียนโค้ด ฟังก์ชัน อินเทอร์เฟซ และคลาสที่ทำงานกับประเภทข้อมูลใดๆ ก็ได้ โดยยังคงรักษา **Type Safety ไว้อย่างสมบูรณ์ 100%** โดยไม่ต้องลดทอนไปใช้ \`any\`

---

## 1. โครงสร้างพื้นฐานของ Generic Parameters
เมื่อเราประกาศ \`<T>\` ตัวอักษร T จะทำหน้าที่เป็น Type Placeholder ที่จะถูกแทนที่ด้วย Type จริงเมื่อมีการเรียกใช้งาน:

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

const str = identity("Hello"); // T ถูกอนุมานเป็น "Hello" (string literal)
const num = identity(42);      // T ถูกอนุมานเป็น 42 (number literal)
\`\`\`

---

## 2. Generic Constraints ด้วยคีย์เวิร์ด \`extends\`
ในโลกจริง เรามักไม่ต้องการให้ T รับอะไรก็ได้ แต่ต้องการ "จำกัดขอบเขต" ว่า T ต้องมีคุณสมบัติขั้นต่ำบางประการ:

\`\`\`typescript
interface HasId {
  id: string | number;
}

// T ต้องมีฟิลด์ id เป็นอย่างน้อย
function printEntityId<T extends HasId>(entity: T): void {
  console.log("Entity ID is:", entity.id);
}
\`\`\`

---

## 3. การผสาน Generics ร่วมกับ \`keyof\` และ Indexed Access Types (\`T[K]\`)
การดึงค่าจาก Object อย่างปลอดภัย ไม่ให้เกิดข้อผิดพลาดในการสะกดชื่อ Property:

\`\`\`text
T = { name: string; age: number; role: string; }
keyof T = "name" | "age" | "role"
K extends keyof T  --> K ถูกจำกัดให้เป็นเฉพาะชื่อคีย์ที่มีอยู่จริง
T[K]               --> ชนิดข้อมูลที่แท้จริงของคีย์นั้นๆ
\`\`\`

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "สมชาย", age: 30 };
const name = getProperty(user, "name"); // Inferred type: string
// getProperty(user, "salary"); // Error: Argument of type '"salary"' is not assignable to '"name" | "age"'
\`\`\`

---

## 4. ความแปรผันของประเภทข้อมูล (Type Variance)
ทำไมฟังก์ชันรับพารามิเตอร์บางอย่างถึงยอมรับ Subtype ได้ แต่บางอย่างไม่ได้?
- **Covariance (แปรผันตาม):** เกิดขึ้นกับ Output/Return Type เช่น \`() => Dog\` สามารถส่งให้กับตัวแปรประเภท \`() => Animal\` ได้
- **Contravariance (แปรผันผกผัน):** เกิดขึ้นกับ Function Parameter Types เมื่อเปิด \`strictFunctionTypes: true\` เช่น ฟังก์ชันรับ \`(a: Animal) => void\` สามารถส่งให้กับที่ต้องการ \`(d: Dog) => void\` ได้ (เพราะ Animal สามารถจัดการ Dog ได้เสมอ)
- **Invariance (คงที่):** ไม่สามารถสลับแทนกันได้ เกิดขึ้นกับ Mutable Data Structures`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Advanced Generic Repository & Type-Safe Event Bus
// =================================================================

interface BaseRecord {
  id: string;
  createdAt: Date;
}

// 1. Generic Repository พร้อมการจำกัด Type Constraint
class InMemoryRepository<T extends BaseRecord> {
  private storage = new Map<string, T>();

  public save(item: T): void {
    this.storage.set(item.id, item);
    console.log(\`💾 [REPO] บันทึก Entity ID: \${item.id} สำเร็จ\`);
  }

  public findById(id: string): T | undefined {
    return this.storage.get(id);
  }

  public updateProperty<K extends keyof T>(id: string, key: K, value: T[K]): boolean {
    const existing = this.storage.get(id);
    if (!existing) return false;

    existing[key] = value;
    return true;
  }
}

// 2. ใช้งานจริงกับ Domain Model
interface UserEntity extends BaseRecord {
  username: string;
  email: string;
  isActive: boolean;
}

const userRepo = new InMemoryRepository<UserEntity>();

userRepo.save({
  id: "usr_1001",
  username: "somchai.dev",
  email: "somchai@itacademy.io",
  isActive: true,
  createdAt: new Date()
});

// อัปเดต Property อย่างปลอดภัย 100% ผ่าน Generic Constraint K extends keyof T
userRepo.updateProperty("usr_1001", "isActive", false);
// userRepo.updateProperty("usr_1001", "nonExistentKey", 123); // Compiler Error ทันที!

const retrieved = userRepo.findById("usr_1001");
console.log("✓ สถานะล่าสุดของผู้ใช้:", retrieved?.username, "Active:", retrieved?.isActive);`,
        description: "การสร้าง Generic Repository ร่วมกับ Type Constraints และ Indexed Access Types"
      },
      challenge: {
        description: "เขียนฟังก์ชัน Generic ชื่อ `pluck<T, K extends keyof T>(items: T[], key: K): T[K][]` ที่ดึงค่าเฉพาะคีย์ K จาก Array ของ Object ออกมาเป็น Array ใหม่",
        startingCode: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  // TODO: คืนค่า Array ที่มีเฉพาะค่าของ Property [key]
  return [];
}`,
        solution: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}`
      },
      quiz: [
        {
          id: "ts-3-q1",
          question: "การใช้ `K extends keyof T` ในฟังก์ชัน TypeScript มีจุดประสงค์หลักเพื่ออะไร?",
          options: [
            "เพื่อแปลงคีย์ของอ็อบเจกต์ให้เป็นตัวพิมพ์ใหญ่ทั้งหมด",
            "เพื่อจำกัดให้พารามิเตอร์ K ต้องเป็นชื่อ Property ที่มีอยู่จริงใน Type T เท่านั้น",
            "เพื่อสร้าง Class สืบทอดจาก Prototype ดั้งเดิมของ JavaScript",
            "เพื่อแปลง Object ให้กลายเป็น Array ของ Strings"
          ],
          correctAnswer: 1,
          explanation: "keyof T จะดึง Union ของชื่อคีย์ทั้งหมดใน T ออกมา และ K extends keyof T จะบังคับให้ค่าของ K ต้องเป็นหนึ่งในชื่อคีย์เหล่านั้น ป้องกันข้อผิดพลาดจากการพิมพ์ชื่อผิดได้อย่างสมบูรณ์"
        },
        {
          id: "ts-3-q2",
          question: "หากเปิดออปชัน `strictFunctionTypes: true` ใน tsconfig.json พารามิเตอร์ของฟังก์ชันจะมีพฤติกรรมความแปรผันแบบใด?",
          options: [
            "Covariant (แปรผันตาม)",
            "Contravariant (แปรผันผกผัน)",
            "Bivariant (แปรผันสองทาง)",
            "Invariant (ไม่ยอมรับการเปลี่ยนแปลงใดๆ)"
          ],
          correctAnswer: 1,
          explanation: "ภายใต้ strictFunctionTypes พารามิเตอร์ของฟังก์ชันจะเป็น Contravariant (แปรผันผกผัน) ซึ่งปลอดภัยต่อระบบประเภทข้อมูลมากกว่า เพราะฟังก์ชันที่รับประเภทกว้างกว่า (Supertype) ย่อมสามารถประมวลผล Subtype ได้เสมอ"
        },
        {
          id: "ts-3-q3",
          question: "เมื่อใช้ Indexed Access Type ในรูปแบบ `T[K]` ผลลัพธ์ที่ได้คืออะไร?",
          options: [
            "ค่าความยาวของสตริงชื่อคีย์ K",
            "ชนิดข้อมูล (Type) ของค่าที่เก็บอยู่ภายใต้ Property ชื่อ K ใน Type T",
            "ค่า Boolean ที่บอกว่ามีคีย์ K ใน Object หรือไม่",
            "การสร้าง Object ตัวใหม่ที่มีเฉพาะคีย์ K"
          ],
          correctAnswer: 1,
          explanation: "Indexed Access Type (หรือ Lookup Type) T[K] ทำหน้าที่ค้นหาและคืนค่าชนิดข้อมูล (Type) ที่ตรงกับคีย์ K ภายใน Type T"
        }
      ]
    },
    {
      id: "ts-4",
      title: "Advanced Utility Types, Mapped Types และ Template Literal Types",
      description: "ทำความเข้าใจเบื้องหลัง Built-in Utility Types (Partial, Required, Pick, Omit, Record), เรียนรู้การสร้าง Mapped Types ด้วยการ Remapping (as), และการสร้าง Domain Specific Types ด้วย Template Literal Types",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Utility Types, Mapped Types และ Template Literals

TypeScript มอบเครื่องมือแปลงสภาพ Type เดิมให้กลายเป็น Type ใหม่อย่างยืดหยุ่น โดยไม่ต้องเขียนโครงสร้างเดิมซ้ำสองรอบ (DRY Principle)

---

## 1. สถาปัตยกรรมของ Built-in Utility Types
Utility Types ส่วนใหญ่สร้างขึ้นมาจาก **Mapped Types** และ **Conditional Types**:

| Utility Type | คำจำกัดความเบื้องหลัง | หน้าที่ |
| :--- | :--- | :--- |
| \`Partial<T>\` | \`{ [P in keyof T]?: T[P]; }\` | ปรับทุกฟิลด์ให้เป็น Optional (\`?\`) |
| \`Required<T>\` | \`{ [P in keyof T]-?: T[P]; }\` | ลบเครื่องหมาย \`?\` บังคับต้องมีทุกฟิลด์ |
| \`Readonly<T>\` | \`{ readonly [P in keyof T]: T[P]; }\` | ป้องกันการแก้ไขค่าทุกฟิลด์ |
| \`Pick<T, K>\` | \`{ [P in K]: T[P]; }\` | เลือกเฉพาะฟิลด์ K ที่ต้องการ |
| \`Omit<T, K>\` | \`Pick<T, Exclude<keyof T, K>>\` | ตัดฟิลด์ K ที่ไม่ต้องการทิ้ง |
| \`Record<K, T>\` | \`{ [P in K]: T; }\` | สร้าง Dictionary ที่มีคีย์เป็น K และค่าเป็น T |

---

## 2. การสร้าง Custom Mapped Types และ Key Remapping (\`as\`)
ตั้งแต่ TypeScript 4.1 เราสามารถใช้คีย์เวิร์ด \`as\` เพื่อเปลี่ยนชื่อคีย์ (Key Remapping) ขณะทำการ Map ได้:

\`\`\`typescript
// สร้าง Type Getters อัตโนมัติจากทุกฟิลด์ใน Object
type CreateGetters<T> = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P];
};

interface User {
  name: string;
  age: number;
}

// Result: { getName: () => string; getAge: () => number; }
type UserGetters = CreateGetters<User>;
\`\`\`

---

## 3. Template Literal Types (Type-Level String Manipulation)
TypeScript นำไวยากรณ์ Backtick (\`\`) มาใช้ในระดับ Type System ช่วยให้เราสร้างสตริงที่มีรูปแบบจำเพาะ เช่น CSS Classnames, API Routes, หรือ Event Names:

\`\`\`typescript
type Direction = "top" | "bottom" | "left" | "right";
type MarginClass = \`margin-\${Direction}\`; 
// "margin-top" | "margin-bottom" | "margin-left" | "margin-right"

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute = "/users" | "/courses" | "/auth";
type Endpoint = \`\${HttpMethod} \${ApiRoute}\`;
// "GET /users" | "POST /users" | "GET /courses" ...
\`\`\`

---

## 4. Deep Mapped Types: การทำ Recursive Transformation
หากต้องการแปลงอ็อบเจกต์ที่มีหลายชั้นซ้อนกัน (Nested Objects) ให้อ่านได้อย่างเดียวทั้งหมด เราสามารถเขียน Recursive Mapped Type:

\`\`\`typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Advanced Mapped Types & Event Router with Template Literals
// =================================================================

type EntityName = "student" | "course" | "enrollment";
type CrudAction = "created" | "updated" | "deleted";

// 1. Template Literal Types ผสมข้ามกัน
type AuditEventName = \`\${EntityName}:\${CrudAction}\`;

interface EventPayloads {
  "student:created": { studentId: string; name: string };
  "student:updated": { studentId: string; changes: Record<string, unknown> };
  "student:deleted": { studentId: string; reason: string };
  "course:created": { courseId: string; title: string };
  "course:updated": { courseId: string; title: string };
  "course:deleted": { courseId: string };
  "enrollment:created": { studentId: string; courseId: string };
  "enrollment:updated": { enrollmentId: string; status: string };
  "enrollment:deleted": { enrollmentId: string };
}

// 2. Type-Safe Event Dispatcher
class StrictEventBus {
  public emit<E extends AuditEventName>(event: E, payload: EventPayloads[E]): void {
    console.log(\`📢 [AUDIT DISPATCH] Event: "\${event}"\`, payload);
  }
}

const bus = new StrictEventBus();

// Type Checked สมบูรณ์แบบ Payload จะถูกผูกกับ Event Name อัตโนมัติ
bus.emit("student:created", {
  studentId: "STD-9002",
  name: "วรัญญา ศรีสมุทร"
});

bus.emit("course:created", {
  courseId: "COURSE-TS5",
  title: "Advanced TypeScript Engineering"
});`,
        description: "การประยุกต์ใช้ Template Literal Types และ Mapped Types ในการสร้าง Type-Safe Event Dispatcher"
      },
      challenge: {
        description: "เขียน Mapped Type ชื่อ `Nullable<T>` ที่แปลงทุกฟิลด์ใน Object T ให้ยอมรับค่า `null` ได้เพิ่มเติม",
        startingCode: `type Nullable<T> = {
  // TODO: แปลงทุก Property ใน T ให้เป็น T[P] | null
};`,
        solution: `type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};`
      },
      quiz: [
        {
          id: "ts-4-q1",
          question: "เครื่องหมาย `-?` ใน Mapped Type `{ [P in keyof T]-?: T[P] }` ทำหน้าที่อะไร?",
          options: [
            "ลบ Property นั้นออกจากอ็อบเจกต์",
            "ลบความเป็น Optional ออก ส่งผลให้ทุกฟิลด์กลายเป็น Required",
            "เปลี่ยนค่าของ Property ให้เป็นค่าติดลบ",
            "แปลง Type ให้เป็น never"
          ],
          correctAnswer: 1,
          explanation: "เครื่องหมาย prefix '-' หน้าเครื่องหมาย '?' หรือ 'readonly' เป็นการถอด Modifier นั้นออก ดังนั้น '-?' จึงเป็นการเอา Optional ออก ทำให้ทุกฟิลด์ถูกบังคับกรอก (เป็นพฤติกรรมเดียวกับ Required<T>)"
        },
        {
          id: "ts-4-q2",
          question: "หากต้องการสร้าง Type สตริงที่เป็นไปได้ทั้งหมดจากการรวม Event Prefix เช่น 'on' กับชื่อ Event เช่น 'Click' | 'Hover' เราควรใช้ฟีเจอร์ใด?",
          options: [
            "Tuple Types",
            "Template Literal Types",
            "Enum Declaration",
            "Dynamic Prototype Binding"
          ],
          correctAnswer: 1,
          explanation: "Template Literal Types ช่วยให้สามารถนำ Type สตริงมายำรวมกันแบบ Cross-product ผ่านไวยากรณ์ `${Prefix}${Event}` ได้อย่างแม่นยำ"
        },
        {
          id: "ts-4-q3",
          question: "ความแตกต่างสำคัญระหว่าง `Pick<T, K>` และ `Omit<T, K>` คือข้อใด?",
          options: [
            "Pick เลือกเฉพาะคีย์ที่ระบุไว้ใน K ส่วน Omit คัดลอกทุกคีย์ยกเว้นคีย์ที่ระบุไว้ใน K",
            "Pick ใช้กับ Primitive types ส่วน Omit ใช้กับ Class instances",
            "Pick ทำงานตอนรันไทม์ ส่วน Omit ทำงานตอนคอมไพล์",
            "ทั้งคู่ทำงานเหมือนกันทุกประการ ต่างกันแค่ไวยากรณ์"
          ],
          correctAnswer: 0,
          explanation: "Pick<T, K> จะเลือกดึงเฉพาะ Properties ใน K มาสร้าง Type ใหม่ ส่วน Omit<T, K> จะตัด Properties ที่ตรงกับ K ทิ้งไป แล้วนำส่วนที่เหลือมาสร้าง Type ใหม่"
        }
      ]
    },
    {
      id: "ts-5",
      title: "Conditional Types และคีย์เวิร์ด infer: การสร้าง Dynamic Type Transformation",
      description: "ทำความเข้าใจตรรกะระดับ Type System ด้วย Conditional Types (T extends U ? X : Y), Distributive Conditional Types, การแกะ Type ย่อยด้วยคีย์เวิร์ด infer และการเขียน Recursive Type Level Functions",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# Conditional Types และคีย์เวิร์ด infer

**Conditional Types** นำตรรกะการตัดสินใจแบบ \`if-else\` เข้ามาสู่ระบบประเภทข้อมูลของ TypeScript ในรูปแบบ:

\`\`\`typescript
T extends U ? TrueType : FalseType
\`\`\`

เมื่อผสานเข้ากับคีย์เวิร์ด **\`infer\`** ทำให้ระบบ Type ของ TypeScript ก้าวข้ามสู่ความสามารถระดับ **Turing Complete** ที่สามารถประมวลผลคำนวณโครงสร้างข้อมูลที่ซับซ้อนได้อย่างน่าทึ่ง

---

## 1. Distributive Conditional Types (การกระจายตัวของ Type)
เมื่อ Conditional Type ทำงานกับ Naked Type Parameter ที่เป็น Union Type มันจะทำการกระจายตัว (Distribute) ไปยังสมาชิกแต่ละตัวของ Union โดยอัตโนมัติ:

\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;

// การกระจายตัว: ToArray<string | number>
// => (string extends any ? string[] : never) | (number extends any ? number[] : never)
// => string[] | number[]
type Result = ToArray<string | number>;
\`\`\`

> **เคล็ดลับป้องกันการกระจายตัว:** หากไม่ต้องการให้กระจาย ให้ห่อหุ้ม Type Parameter ด้วย Square Brackets: \`[T] extends [any] ? T[] : never\`

---

## 2. การแกะ Type ย่อยด้วยคีย์เวิร์ด \`infer\`
คีย์เวิร์ด \`infer\` ทำหน้าที่เป็น **Type Pattern Matching Engine** ที่ให้เราประกาศตัวแปร Type ชั่วคราวภายในเงื่อนไข \`extends\` เพื่อสกัดค่าออกมาใช้งาน:

\`\`\`text
                  T extends Promise<infer U> ? U : T
                                       ^
                                 แกะเอา Type U 
                              ที่อยู่ข้างใน Promise ออกมา!
\`\`\`

### ตัวอย่างการสร้าง \`UnwrapPromise\` หรือ \`Awaited<T>\`:
\`\`\`typescript
type MyAwaited<T> = T extends Promise<infer Inner> 
  ? MyAwaited<Inner> // ทำงานแบบ Recursive เพื่อรองรับ Nested Promises
  : T;

type RawData = MyAwaited<Promise<Promise<string>>>; // string
\`\`\`

---

## 3. การดึง Return Type และ Parameters ของฟังก์ชัน
นี่คือเบื้องหลังของ Built-in Utilities ยอดฮิตอย่าง \`ReturnType<T>\` และ \`Parameters<T>\`:

\`\`\`typescript
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type CustomParameters<T> = T extends (...args: infer P) => any ? P : never;

function calculateScore(name: string, rawScore: number): { passed: boolean; grade: string } {
  return { passed: rawScore >= 50, grade: rawScore >= 80 ? "A" : "B" };
}

type ScoreOutput = CustomReturnType<typeof calculateScore>; 
// { passed: boolean; grade: string; }

type ScoreArgs = CustomParameters<typeof calculateScore>; 
// [name: string, rawScore: number]
\`\`\`

---

## 4. Recursive Conditional Types
TypeScript 4.1+ รองรับการเรียกซ้ำ (Recursion) ในระดับ Type System ช่วยให้เราสามารถคลี่ Array หรือแกะโครงสร้าง Object ลึกกี่ชั้นก็ได้:

\`\`\`typescript
type Flatten<T> = T extends Array<infer Element> ? Flatten<Element> : T;
type DeepNumbers = Flatten<number[][][][]>; // Inferred as: number!
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Advanced Conditional Types with infer Pattern Matching
// =================================================================

// 1. แกะ Type ของฟังก์ชันที่เป็น Async API Handler
type UnwrapApiHandler<T> = T extends (req: any) => Promise<infer ResponseData>
  ? ResponseData
  : never;

// จำลอง Controller Function
async function getCourseAnalytics(req: { courseId: string }) {
  return {
    courseId: req.courseId,
    activeLearners: 1420,
    completionRate: 0.87,
    metrics: { avgQuizScore: 91.5, satisfactionScore: 4.9 }
  };
}

// แกะ Type ของ Response Data ออกมาใช้งานได้โดยตรงแบบ Single Source of Truth
type CourseAnalyticsData = UnwrapApiHandler<typeof getCourseAnalytics>;

// 2. Tuple Element Extractor ด้วย infer
type FirstElement<T extends any[]> = T extends [infer First, ...any[]] ? First : never;
type LastElement<T extends any[]> = T extends [...any[], infer Last] ? Last : never;

type SampleTuple = [boolean, number, string];
type Head = FirstElement<SampleTuple>; // boolean
type Tail = LastElement<SampleTuple>;  // string

const analyticsResult: CourseAnalyticsData = {
  courseId: "TS-501",
  activeLearners: 1420,
  completionRate: 0.87,
  metrics: { avgQuizScore: 91.5, satisfactionScore: 4.9 }
};

console.log("✓ Type Inferred สำเร็จ:", analyticsResult.courseId, "Learners:", analyticsResult.activeLearners);`,
        description: "การสร้าง Type Utility เพื่อแกะ Return Type ของ Async Function และ Tuple ด้วยคีย์เวิร์ด infer"
      },
      challenge: {
        description: "เขียน Conditional Type ชื่อ `NonEmptyArray<T>` ร่วมกับ `infer` เพื่อตรวจสอบว่า Array มีสมาชิกอย่างน้อย 1 ตัวหรือไม่ ถ้ามีให้คืนค่า `T` ถ้าไม่มี (เป็น Array ว่าง `[]`) ให้คืนค่า `never`",
        startingCode: `type NonEmptyArray<T extends any[]> = 
  // TODO: ตรวจสอบโครงสร้างว่ามีอย่างน้อย 1 ตัวแปรหรือไม่
  any;`,
        solution: `type NonEmptyArray<T extends any[]> = T extends [infer First, ...infer Rest] ? T : never;`
      },
      quiz: [
        {
          id: "ts-5-q1",
          question: "คีย์เวิร์ด `infer` ใน Conditional Type สามารถใช้งานได้ที่ตำแหน่งใด?",
          options: [
            "สามารถใช้ได้ทุกที่ในโปรแกรมเหมือนกับคำสั่ง var",
            "ใช้ได้เฉพาะภายในส่วนเงื่อนไข 'extends' ของ Conditional Type เท่านั้น",
            "ใช้แทนชื่อฟังก์ชันเพื่อบอกว่าเป็น Private Method",
            "ใช้ประกาศตัวแปรค่าคงที่ในหน่วยความจำ Heap"
          ],
          correctAnswer: 1,
          explanation: "คีย์เวิร์ด infer มีไว้สำหรับทำ Type Inference ภายในส่วนเงื่อนไข 'extends' ของ Conditional Types เท่านั้น โดยทำหน้าที่จับคู่ Pattern และสกัด Type ย่อยออกมาเป็นตัวแปรใหม่"
        },
        {
          id: "ts-5-q2",
          question: "พฤติกรรม Distributive Conditional Type จะเกิดขึ้นเมื่อใด?",
          options: [
            "เมื่อ Type Parameter ที่ส่งเข้ามาเป็น Naked Type Parameter และเป็น Union Type",
            "เมื่อฟังก์ชันถูกประกาศเป็น async",
            "เมื่อมีการใช้งานร่วมกับ Web Workers",
            "เมื่อค่าใน Array มีจำนวนมากกว่า 1,000 สมาชิก"
          ],
          correctAnswer: 0,
          explanation: "Distributive Conditional Types จะเกิดขึ้นเมื่อ Type Parameter T เป็นตัวแปรเดี่ยวๆ (Naked Type Parameter) และส่งค่าที่เป็น Union Type เข้ามา ส่งผลให้เงื่อนไขถูกกระจายไปประเมินกับสมาชิกทุกตัวใน Union ทีละตัว"
        },
        {
          id: "ts-5-q3",
          question: "หากต้องการป้องกันไม่ให้ Conditional Type ทำการกระจายตัว (Distribute) สมาชิกของ Union Type เราต้องทำอย่างไร?",
          options: [
            "ใส่เครื่องหมาย Square Brackets ครอบทั้งสองฝั่ง เช่น `[T] extends [U]`",
            "ใส่คีย์เวิร์ด readonly นำหน้า",
            "เปลี่ยนไปใช้ enum แทน",
            "ปิดแฟล็ก strict ใน tsconfig.json"
          ],
          correctAnswer: 0,
          explanation: "การนำ Square Brackets มาครอบ `[T] extends [U]` จะเป็นการบอกคอมไพเลอร์ว่าไม่ต้องมอง T เป็นสมาชิกเดี่ยวๆ แต่ให้มองเป็น Tuple ทั้งก้อน ทำให้การกระจายตัวของ Union ไม่เกิดขึ้น"
        }
      ]
    },
    {
      id: "ts-6",
      title: "End-to-End Type Safety ด้วย Zod Schema Validation และ Inferred Types",
      description: "ผสานโลกของ Compile-Time Types และ Runtime Data เข้าด้วยกันด้วย Zod: การออกแบบ Schemas, การใช้ parse vs safeParse, การสร้าง Types อัตโนมัติด้วย z.infer, การทำ Custom Refinements และ Transformations",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Runtime Validation ด้วย Zod และ Inferred Types

จุดอ่อนที่สุดของ TypeScript ในโปรดักชันคือ **"ขอบเขตของระบบ (System Boundaries)"** เช่น ข้อมูล JSON ที่รับมาจากผู้ใช้ผ่าน Web Form, ผลลัพธ์จากการยิง API ภายนอก, หรือ Environment Variables เพราะ TypeScript ตรวจสอบ Type ได้เฉพาะตอนคอมไพล์ เมื่อแอปพลิเคชันเริ่มรัน ข้อมูลดิบอาจมีโครงสร้างที่ผิดเพี้ยนไปจาก Interface ที่เราประกาศไว้

**Zod** เป็น TypeScript-first Schema Declaration และ Validation Library ที่เข้ามาแก้ไขปัญหานี้อย่างเด็ดขาด โดยสร้าง **Single Source of Truth** ที่ให้ทั้ง Runtime Validation และ Static TypeScript Type ในคำสั่งเดียว

---

## 1. ปรัชญา Parse, Don't Validate
แทนที่จะใช้ฟังก์ชันตรวจสอบที่คืนค่า boolean (เช่น \`isValid(data)\`) Zod ใช้ปรัชญา **"Parse, Don't Validate"**:
1. ข้อมูลดิบ (\`unknown\`) เข้ามาในระบบ
2. Zod ทำการตรวจสอบรูปร่าง ประเภท และข้อจำกัด
3. หากถูกต้อง Zod จะส่งมอบข้อมูลที่ถูก Sanitized และ Typed อย่างสมบูรณ์ออกมาใช้งาน หากผิดพลาดจะส่ง \`ZodError\` ที่ระบุฟิลด์และเหตุผลอย่างละเอียด

\`\`\`text
[Raw Input: unknown] ---> [ Zod Schema.safeParse() ]
                                 |
         +-----------------------+-----------------------+
         |                                               |
     [Success]                                       [Failure]
         v                                               v
 { success: true, data: T }              { success: false, error: ZodError }
\`\`\`

---

## 2. การสร้าง Schema และ Type Extraction ด้วย \`z.infer\`

\`\`\`typescript
import { z } from "zod";

// ประกาศ Runtime Schema
export const StudentRegistrationSchema = z.object({
  id: z.string().uuid("รหัสนักศึกษาต้องเป็น UUID"),
  name: z.string().min(3, "ชื่อต้องมีความยาวอย่างน้อย 3 ตัวอักษร"),
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  age: z.number().int().min(15).max(80),
  courses: z.array(z.string()).nonempty("ต้องลงทะเบียนอย่างน้อย 1 วิชา"),
  status: z.enum(["active", "pending", "suspended"]).default("pending")
});

// สกัด TypeScript Type ออกมาอัตโนมัติ โดยไม่ต้องเขียน Interface ซ้ำสอง!
export type StudentRegistrationInput = z.infer<typeof StudentRegistrationSchema>;
\`\`\`

---

## 3. การทำ Refinements และ Transformations
Zod ช่วยให้เราสามารถใส่ Business Logic ตรวจสอบเงื่อนไขระดับสูง และแปลงค่า (Transform) ได้อย่างราบรื่น:

\`\`\`typescript
const PasswordChangeSchema = z.object({
  password: z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "รหัสผ่านยืนยันไม่ตรงกัน",
  path: ["confirmPassword"] // ระบุว่า Error จะไปผูกที่ฟิลด์ใด
});

// การทำ Data Transformation (เช่น แปลง String เป็น Date อัตโนมัติ)
const DateSchema = z.string().transform(str => new Date(str));
\`\`\`

---

## 4. ป้องกัน Environment Variables แตกในโปรดักชัน
การใช้ Zod ตรวจสอบ \`process.env\` ตั้งแต่วินาทีแรกที่เซิร์ฟเวอร์เริ่มทำงาน ป้องกันปัญหา Crash กลางทางได้อย่างสิ้นเชิง:

\`\`\`typescript
const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development")
});

export const env = EnvSchema.parse(process.env);
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Enterprise Runtime Validation Architecture (Simulated Zod Pattern)
// =================================================================

// จำลองโมเดล Validation Result ตามมาตรฐาน Zod
type SafeParseResult<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string[]> };

interface UserProfile {
  id: string;
  username: string;
  email: string;
  age: number;
}

// Validator Engine เลียนแบบ Zod Object Schema
class ProfileValidator {
  public static safeParse(input: unknown): SafeParseResult<UserProfile> {
    const errors: Record<string, string[]> = {};

    if (!input || typeof input !== "object") {
      return { success: false, errors: { _global: ["ข้อมูลนำเข้าต้องเป็น Object"] } };
    }

    const data = input as Record<string, unknown>;

    // ตรวจสอบ username
    if (typeof data.username !== "string" || data.username.length < 3) {
      errors.username = ["Username ต้องเป็นสตริงและยาวอย่างน้อย 3 ตัวอักษร"];
    }

    // ตรวจสอบ email
    if (typeof data.email !== "string" || !data.email.includes("@")) {
      errors.email = ["รูปแบบอีเมลไม่ถูกต้อง"];
    }

    // ตรวจสอบ age
    if (typeof data.age !== "number" || data.age < 18) {
      errors.age = ["ผู้ใช้งานต้องมีอายุตั้งแต่ 18 ปีขึ้นไป"];
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    return {
      success: true,
      data: {
        id: (data.id as string) || "usr_generated",
        username: data.username as string,
        email: data.email as string,
        age: data.age as number
      }
    };
  }
}

// ทดสอบรับข้อมูลผิดพลาดจากภายนอก
const rawExternalData = {
  username: "al",
  email: "invalid-email-address",
  age: 16
};

const result = ProfileValidator.safeParse(rawExternalData);

if (!result.success) {
  console.log("❌ ตรวจพบข้อผิดพลาดจาก Runtime Data Boundary:");
  console.log(JSON.stringify(result.errors, null, 2));
} else {
  console.log("✅ ข้อมูลปลอดภัย นำไปใช้งานได้ 100%:", result.data.username);
}`,
        description: "การออกแบบกระบวนการ Safe Parsing และ Error Normalization สำหรับจัดการข้อมูลนอกขอบเขตระบบ"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `validateCourseInput` ที่ตรวจสอบ Payload ว่ามี title (string ยาว > 5) และ price (number >= 0) หรือไม่ โดยคืนค่าเป็น SafeParseResult",
        startingCode: `function validateCourseInput(input: any): { success: boolean; error?: string } {
  // TODO: ตรวจสอบ title และ price
  return { success: false };
}`,
        solution: `function validateCourseInput(input: any): { success: boolean; error?: string } {
  if (!input || typeof input !== "object") return { success: false, error: "Invalid payload" };
  if (typeof input.title !== "string" || input.title.length <= 5) return { success: false, error: "Title must be > 5 chars" };
  if (typeof input.price !== "number" || input.price < 0) return { success: false, error: "Price must be >= 0" };
  return { success: true };
}`
      },
      quiz: [
        {
          id: "ts-6-q1",
          question: "ทำไมการเขียน TypeScript เพียงอย่างเดียว จึงไม่สามารถรับประกันความปลอดภัยของข้อมูลที่รับมาจากภายนอก (External Data) ได้?",
          options: [
            "เพราะ TypeScript ทำงานช้าเกินไปในโปรดักชัน",
            "เพราะ TypeScript Type ตรวจสอบเฉพาะตอน Compile-time และจะถูกลบทิ้งตอนรันไทม์ ทำให้ไม่มีกลไกตรวจเช็คข้อมูลจริง",
            "เพราะ JavaScript ไม่รองรับคำสั่ง JSON.parse()",
            "เพราะเบราว์เซอร์ทุกตัวปิดกั้นระบบความปลอดภัยของ TypeScript"
          ],
          correctAnswer: 1,
          explanation: "ด้วยหลักการ Type Erasure ชนิดข้อมูลทั้งหมดจะหายไปเมื่อคอมไพล์เป็น JavaScript หากมีข้อมูลผิดเพี้ยนเข้ามาตอนรันไทม์ (Runtime) เช่น จาก API หรือ Form จึงไม่มีสิ่งใดคอยดักจับ เว้นแต่จะใช้ Runtime Validation เช่น Zod"
        },
        {
          id: "ts-6-q2",
          question: "คำสั่ง `z.infer<typeof MySchema>` ใน Zod มีประโยชน์หลักเพื่ออะไร?",
          options: [
            "แปลงโค้ด TypeScript ให้กลายเป็นไฟล์ SQL DDL Schema",
            "ดึงเอา TypeScript Static Type ออกมาจาก Zod Runtime Schema อัตโนมัติ ทำให้ไม่ต้องเขียน Interface ซ้ำสอง",
            "สั่งให้ Node.js ทำการบันทึกข้อมูลลงฐานข้อมูลโดยตรง",
            "ลบตัวแปร Schema ออกจากหน่วยความจำ"
          ],
          correctAnswer: 1,
          explanation: "z.infer ทำหน้าที่สะท้อนชนิดข้อมูล Static Type ออกมาจาก Runtime Schema ที่เรานิยามไว้ทันที ทำให้โค้ดของเราเป็น Single Source of Truth ป้องกันความผิดพลาดจากการแก้ Schema แต่ลืมแก้ Interface"
        },
        {
          id: "ts-6-q3",
          question: "ความแตกต่างระหว่างคำสั่ง `.parse()` และ `.safeParse()` ใน Zod คือข้อใด?",
          options: [
            "parse จะโยน Exception (throw ZodError) เมื่อข้อมูลไม่ถูกต้อง ส่วน safeParse จะคืนค่าเป็น Object { success, data / error }",
            "parse ทำงานเฉพาะในโหมด asynchronous ส่วน safeParse ทำงาน synchronous",
            "safeParse จะยอมให้ข้อมูลผิดพลาดผ่านได้เสมอ",
            "parse ใช้ตรวจสอบ Array ส่วน safeParse ใช้ตรวจสอบ Object"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง parse() จะโยน Error ออกมาทันทีหาก Validation ล้มเหลว ซึ่งต้องครอบด้วย try-catch ในขณะที่ safeParse() จะคืนค่าเป็น Discriminated Union Result Object ให้เราจัดการ Control Flow ได้อย่างสง่างาม"
        }
      ]
    },
    {
      id: "ts-7",
      title: "Modern Decorators (Stage 3) ใน TypeScript 5 สำหรับ Dependency Injection",
      description: "สถาปัตยกรรม Decorators ใหม่ตามมาตรฐาน ECMAScript Stage 3 ใน TypeScript 5.0+: ทำความเข้าใจความแตกต่างจาก Legacy Decorators, โครงสร้าง Class/Method/Field Decorators และการสร้าง Dependency Injection Container",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Modern Stage 3 Decorators ใน TypeScript 5

ตั้งแต่ **TypeScript 5.0** เป็นต้นมา ได้มีการยกเครื่องระบบ Decorators ทั้งหมดใหม่ เพื่อให้สอดคล้องกับมาตรฐานอย่างเป็นทางการของ **TC39 ECMAScript Stage 3** โดยไม่ต้องเปิดออปชัน \`"experimentalDecorators": true\` ใน \`tsconfig.json\` อีกต่อไป

---

## 1. ข้อแตกต่างระหว่าง Legacy vs Stage 3 Decorators

| มิติ | Legacy Decorators (TS < 5.0) | Modern Stage 3 Decorators (TS 5.0+) |
| :--- | :--- | :--- |
| **มาตรฐาน** | ข้อเสนอเก่า (Draft 2014) | TC39 Stage 3 (Standard) |
| **การตั้งค่า tsconfig** | ต้องเปิด \`experimentalDecorators: true\` | ใช้งานได้ทันทีแบบ Native |
| **พารามิเตอร์ของ Decorator** | ได้รับ \`target, propertyKey, descriptor\` | ได้รับ \`originalMethod, context\` |
| **Context Object** | ไม่มี | มีข้อมูล Scopes, Kind, Name, Accessors ชัดเจน |
| **การตกแต่ง Type** | ทำงานบน PropertyDescriptor ดั้งเดิม | สามารถส่งคืนฟังก์ชันใหม่ห่อหุ้มได้โดยตรง |

---

## 2. โครงสร้างของ Method Decorator ใน TypeScript 5
Method Decorator รับพารามิเตอร์ 2 ตัว:
1. \`target:\` ฟังก์ชันต้นฉบับ (Original Method)
2. \`context: ClassMethodDecoratorContext:\` อ็อบเจกต์ที่บอกบริบทการตกแต่ง

\`\`\`typescript
type ClassMethodDecorator = (
  target: Function,
  context: ClassMethodDecoratorContext
) => Function | void;
\`\`\`

\`\`\`typescript
function LogExecution<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(context.name);

  return function (this: This, ...args: Args): Return {
    console.log(\`⚡ [ENTER] Method: "\${methodName}" with args:\`, args);
    const start = performance.now();
    const result = target.apply(this, args);
    const duration = (performance.now() - start).toFixed(2);
    console.log(\`✅ [EXIT] Method: "\${methodName}" finished in \${duration}ms\`);
    return result;
  };
}
\`\`\`

---

## 3. สถาปัตยกรรม Dependency Injection (IoC Container)
Decorators เป็นรากฐานสำคัญของ Enterprise Frameworks อย่าง NestJS และ Angular ในการทำ **Inversion of Control (IoC)** เพื่อลดการพึ่งพากันระหว่างคลาส (Loose Coupling):

\`\`\`text
[IoC Container Registry]
       |
       +---> @Injectable() UserService
       |          |
       |          v (Injected into)
       +---> @Controller() UserController
\`\`\`

เมื่อ Class ถูกกำกับด้วย \`@Injectable()\` ตัว Container จะลงทะเบียนคลาสเข้าสู่ Service Registry และทำการ Instantiate ตัวแปรพึ่งพา (Dependencies) ส่งผ่าน Constructor ให้อัตโนมัติ`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// TypeScript 5 Modern Stage 3 Decorators Implementation
// =================================================================

// 1. สร้าง Performance Timing Decorator ตามสเปก Stage 3
function MeasureTime<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
  const methodName = String(context.name);

  return function (this: This, ...args: Args): Return {
    const t0 = Date.now();
    const result = target.apply(this, args);
    const diff = Date.now() - t0;
    console.log(\`⏱️ [METRICS] Method "\${methodName}" ใช้เวลาประมวลผล: \${diff}ms\`);
    return result;
  };
}

// 2. คลาสจำลองการประมวลผลธุรกรรมการศึกษา
class CourseService {
  @MeasureTime
  public computeGradeReports(studentCount: number): string {
    let totalScore = 0;
    for (let i = 0; i < studentCount * 100000; i++) {
      totalScore += (i % 100);
    }
    return \`ประมวลผลรายงานผลการเรียนของนักศึกษา \${studentCount} คน สำเร็จ (Score Checksum: \${totalScore})\`;
  }
}

const service = new CourseService();
const report = service.computeGradeReports(50);
console.log(report);`,
        description: "การสร้างและใช้งาน Method Decorator ตามมาตรฐาน TC39 Stage 3 ใน TypeScript 5"
      },
      challenge: {
        description: "เขียนฟังก์ชัน Method Decorator ชื่อ `ReadOnlyMethod` ที่โยน Error เมื่อมีการพยายามเขียนทับหรือตรวจสอบบริบท context.kind ว่าเป็น 'method' หรือไม่",
        startingCode: `function ReadOnlyMethod(target: any, context: ClassMethodDecoratorContext) {
  // TODO: ตรวจสอบ context.kind
  return target;
}`,
        solution: `function ReadOnlyMethod(target: any, context: ClassMethodDecoratorContext) {
  if (context.kind !== "method") {
    throw new Error("ReadOnlyMethod can only be applied to methods");
  }
  return target;
}`
      },
      quiz: [
        {
          id: "ts-7-q1",
          question: "อะไรคือข้อแตกต่างสำคัญของ Stage 3 Decorators ใน TypeScript 5 เมื่อเทียบกับ experimentalDecorators ในอดีต?",
          options: [
            "Stage 3 Decorators ต้องการ Babel ในการคอมไพล์เสมอ",
            "Stage 3 Decorators เป็นไปตามมาตรฐานสากลของ TC39 โดยรับ context object ที่มี Type Safety และไม่ต้องเปิด experimentalDecorators",
            "Stage 3 Decorators ใช้ได้เฉพาะกับแอปรันบนโทรศัพท์มือถือเท่านั้น",
            "Stage 3 Decorators อนุญาตให้ตกแต่งได้เฉพาะตัวแปร primitive เท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "Stage 3 Decorators เป็นข้อตกลงมาตรฐานของ TC39 ECMAScript ซึ่ง TypeScript 5 รองรับแบบสมบูรณ์ โดยเปลี่ยนพารามิเตอร์เป็น (target, context) ที่ระบุชนิดและบริบทของการตกแต่งได้อย่างปลอดภัย"
        },
        {
          id: "ts-7-q2",
          question: "อ็อบเจกต์ `context` ใน Stage 3 Decorator ให้ข้อมูลสิ่งใดที่เป็นประโยชน์?",
          options: [
            "IP Address ของเซิร์ฟเวอร์",
            "ชนิดของการตกแต่ง (kind: method/getter/field/class), ชื่อสมาชิก (name), และฟังก์ชันเพิ่มการเตรียมการ (addInitializer)",
            "ข้อมูลรหัสผ่านของผู้ใช้งาน",
            "เวอร์ชันของระบบปฏิบัติการ Windows/Linux"
          ],
          correctAnswer: 1,
          explanation: "context object จะส่งข้อมูลเมทาดาต้าของสมาชิกที่ถูกตกแต่ง เช่น context.kind ('class', 'method', 'field', etc.), context.name, และฟังก์ชันอำนวยความสะดวกอย่าง context.addInitializer"
        },
        {
          id: "ts-7-q3",
          question: "ในสถาปัตยกรรม Dependency Injection (DI) คอนเซ็ปต์ Inversion of Control (IoC) มีเป้าหมายสูงสุดเพื่ออะไร?",
          options: [
            "เพื่อให้คลาสสร้าง Dependency ของตนเองโดยตรงผ่านคำสั่ง new",
            "เพื่อถ่ายโอนหน้าที่การสร้างและจัดการ Lifecycle ของ Dependency ไปให้ Container ภายนอก ส่งผลให้โค้ดลดการพึ่งพากันและทดสอบง่ายขึ้น",
            "เพื่อแปลงให้แอปทำงานแบบ Multi-threaded ในระดับ Kernel",
            "เพื่อลบฐานข้อมูลทิ้งอัตโนมัติเมื่อเริ่มระบบใหม่"
          ],
          correctAnswer: 1,
          explanation: "IoC กลับทิศทางการควบคุม โดยแทนที่คลาสจะสร้างอ็อบเจกต์ที่ต้องใช้เอง (Tight Coupling) ก็ปล่อยให้ IoC Container เป็นผู้ฉีด (Inject) อ็อบเจกต์เข้ามาให้ ทำให้การทำ Unit Test และการบำรุงรักษาทำได้ง่ายมาก"
        }
      ]
    },
    {
      id: "ts-8",
      title: "Full-Stack Monorepo Type Sharing สำหรับ Next.js และ Backend Services",
      description: "ออกแบบสถาปัตยกรรม Monorepo ระดับองค์กร (Turborepo / pnpm workspaces): การแชร์ Domain Models & DTOs ระหว่าง Frontend (Next.js) และ Backend (Fastify/NestJS), การตั้งค่า tsconfig Project References และ Contract-First APIs",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Full-Stack Monorepo และ Single Source of Truth

ในการพัฒนาเว็บแอปพลิเคชันระดับองค์กร ปัญหาที่พบบ่อยที่สุดคือ **"API Drift"** — เมื่อทีม Backend แก้ไขโครงสร้างของ JSON Response แต่ทีม Frontend ไม่ทราบ นำไปสู่ข้อผิดพลาด \`Cannot read properties of undefined\` ในโปรดักชัน

การใช้ **TypeScript Monorepo** ร่วมกับเครื่องมืออย่าง **pnpm workspaces** หรือ **Turborepo** ช่วยให้เราสามารถรวมโค้ด Frontend และ Backend ไว้ในคลังเดียวกัน และแชร์ **Data Transfer Objects (DTOs)** แบบ **Single Source of Truth 100%**

---

## 1. โครงสร้างโฟลเดอร์ Enterprise Monorepo

\`\`\`text
my-enterprise-app/
├── apps/
│   ├── web/                  # Next.js App Router (Frontend)
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── api/                  # Node.js Fastify / Express (Backend)
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── contracts/            # แชร์ API Contracts & DTOs
│   │   ├── src/
│   │   │   ├── auth.dto.ts
│   │   │   ├── course.dto.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── eslint-config/        # กฎระเบียบ Linting ร่วมกัน
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
\`\`\`

---

## 2. การตั้งค่า TypeScript Project References (\`composite: true\`)
เพื่อป้องกันไม่ให้คอมไพเลอร์ต้องมานั่งคอมไพล์โค้ดทั้ง Monorepo ซ้ำไปซ้ำมา TypeScript มีฟีเจอร์ **Project References**:
- ใน \`packages/contracts/tsconfig.json\`:
\`\`\`json
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist"
  }
}
\`\`\`
- ใน \`apps/web/tsconfig.json\`:
\`\`\`json
{
  "references": [
    { "path": "../../packages/contracts" }
  ]
}
\`\`\`
เมื่อรัน \`tsc --build\` TypeScript จะทำการคอมไพล์เฉพาะแพ็กเกจที่มีการเปลี่ยนแปลง ช่วยลดเวลา Build Time จากหลายนาทีเหลือเพียงไม่กี่วินาที!

---

## 3. Contract-First API Design (Zero Drift)
การนิยามสเปก API ข้ามระบบ:

\`\`\`typescript
// packages/contracts/src/course.dto.ts
export interface CourseSummaryDTO {
  readonly id: string;
  readonly title: string;
  readonly category: "software" | "cloud" | "security";
  readonly studentCount: number;
}

export interface GetCoursesResponseDTO {
  success: boolean;
  data: CourseSummaryDTO[];
  total: number;
}
\`\`\`

ทั้ง Next.js Page และ Fastify Route Handler จะ Import \`GetCoursesResponseDTO\` ตัวเดียวกันไปใช้งาน หาก Backend เพิ่มหรือเปลี่ยนชื่อฟิลด์ โค้ดใน Next.js จะฟ้อง Compile Error ทันทีใน VS Code ก่อนที่จะ Deploy สู่ Production!`,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Shared API Contract & Type-Safe Communication Protocol
// =================================================================

// 1. นิยาม Shared DTOs (เสมือนอยู่ใน packages/contracts)
export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
  timestamp: string;
}

export interface StudentEnrollmentDTO {
  enrollmentId: string;
  studentName: string;
  courseTitle: string;
  enrolledAt: string;
}

// 2. จำลอง Backend Controller (apps/api)
class ApiServerController {
  public handleGetEnrollment(id: string): ApiResponse<StudentEnrollmentDTO> {
    return {
      success: true,
      statusCode: 200,
      data: {
        enrollmentId: id,
        studentName: "พงศกร เจริญยิ่ง",
        courseTitle: "Cloud Architecture & Kubernetes",
        enrolledAt: new Date().toISOString()
      },
      timestamp: new Date().toISOString()
    };
  }
}

// 3. จำลอง Frontend Consumer (apps/web - Next.js)
async function fetchAndRenderClient(id: string) {
  const backend = new ApiServerController();
  // ได้รับ Response ที่มี Type ถูกต้องตรงกัน 100% จาก Shared Contract
  const response: ApiResponse<StudentEnrollmentDTO> = backend.handleGetEnrollment(id);

  if (response.success) {
    console.log("🌐 [Next.js Client] แสดงผลข้อมูลการลงทะเบียน:");
    console.log(\`   • นักศึกษา: \${response.data.studentName}\`);
    console.log(\`   • หลักสูตร: \${response.data.courseTitle}\`);
    console.log(\`   • วันที่ลงทะเบียน: \${response.data.enrolledAt}\`);
  }
}

fetchAndRenderClient("ENROLL-8802");`,
        description: "การออกแบบ Shared DTOs และ Contract Protocol ข้ามระบบใน Full-Stack Monorepo"
      },
      challenge: {
        description: "ออกแบบ Interface ชื่อ `ApiErrorDTO` ที่ประกอบด้วย code (number), message (string), และ optional field `details` (Record<string, string>) สำหรับเป็น Shared Error Protocol",
        startingCode: `// TODO: ประกาศ Interface ApiErrorDTO
`,
        solution: `export interface ApiErrorDTO {
  code: number;
  message: string;
  details?: Record<string, string>;
}`
      },
      quiz: [
        {
          id: "ts-8-q1",
          question: "ประโยชน์สูงสุดของการใช้ TypeScript Monorepo ในการพัฒนา Web Application คือข้อใด?",
          options: [
            "ทำให้ขนาดของ node_modules มีขนาดใหญ่ที่สุดเท่าที่จะทำได้",
            "สามารถแชร์ Data Transfer Objects (DTOs) และ Validation Schemas ระหว่าง Frontend และ Backend ได้แบบ Single Source of Truth ป้องกันปัญหา API Drift",
            "ทำให้ไม่ต้องมีเซิร์ฟเวอร์ฐานข้อมูลในการรันระบบ",
            "บังคับให้ผู้ใช้งานทุกคนต้องใช้เบราว์เซอร์ Google Chrome เท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "การแชร์ Type DTOs ผ่านแพ็กเกจกลางใน Monorepo ช่วยกำจัดปัญหา API ไม่ตรงกัน เพราะเมื่อมีการแก้ Type ที่ Backend ตัว Frontend จะรู้ทันทีในระหว่างเขียนโค้ดและตอน Build"
        },
        {
          id: "ts-8-q2",
          question: "การเปิดคอนฟิก 'composite: true' ใน tsconfig.json ของ TypeScript มีความสำคัญอย่างไรต่อ Monorepo?",
          options: [
            "ช่วยให้รันโค้ดภาษา Python ร่วมกับ TypeScript ได้",
            "เปิดใช้งานฟีเจอร์ Project References ช่วยให้ tsc สามารถคอมไพล์โปรเจกต์ย่อยแบบ Incremental Build ได้รวดเร็ว",
            "เป็นการเข้ารหัสซอร์สโค้ดเพื่อไม่ให้ผู้อื่นมองเห็น",
            "ลบไฟล์ทั้งหมดในเครื่องเมื่อคอมไพล์ไม่ผ่าน"
          ],
          correctAnswer: 1,
          explanation: "composite: true เป็นข้อกำหนดของ Project References เพื่อให้ TypeScript สามารถติดตาม Dependency Graph ระหว่างโปรเจกต์ย่อยและทำ Incremental Builds ได้อย่างมีประสิทธิภาพ"
        },
        {
          id: "ts-8-q3",
          question: "เมื่อเกิดสถานการณ์ API Drift ในระบบที่ไม่ได้แชร์ Type ระหว่างกัน จะส่งผลเสียอย่างไร?",
          options: [
            "เซิร์ฟเวอร์จะตัดกระแสไฟฟ้าอัตโนมัติ",
            "Frontend อาจเกิดข้อผิดพลาดรันไทม์ เช่น 'TypeError: Cannot read properties of undefined' เพราะโครงสร้าง JSON จริงไม่ตรงกับที่คาดหวัง",
            "ความเร็วของอินเทอร์เน็ตผู้ใช้จะลดลง",
            "โค้ดทั้งหมดจะแปลงเป็นภาษา Assembly"
          ],
          correctAnswer: 1,
          explanation: "API Drift คือสถานะที่สเปก API ของผู้ให้บริการกับผู้บริโภคไม่ตรงกัน หากไม่มี Type Sharing คอยตรวจจับ จะทำให้เกิดข้อผิดพลาดประเภท Unhandled Runtime Exceptions บนเครื่องของผู้ใช้จริง"
        }
      ]
    },
    {
      id: "ts-9",
      title: "โปรเจกต์ Enterprise Type-Safe SDK & API Client",
      description: "โปรเจกต์วิศวกรรมซอฟต์แวร์ระดับโปรดักชัน: พัฒนา Type-Safe HTTP SDK Client สำหรับเชื่อมต่อบริการ IT Academy พร้อมระบบ Auto-completing Path Endpoints, Strict Generic Responses, Interceptors และ Error Handling",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise: Type-Safe HTTP SDK & API Client

ในบทเรียนรวบยอดนี้ เราจะนำองค์ความรู้ทั้งหมด ทั้ง **Generics, Mapped Types, Discriminated Unions, Template Literal Types, และ Custom Error Handling** มาสร้างเป็น **Enterprise Type-Safe SDK Client Library**

---

## 1. เป้าหมายสถาปัตยกรรม SDK (Design Specifications)
1. **Zero-Guesswork URL Completion:** เมื่อนักพัฒนาพิมพ์ \`client.get("/api/...")\` ตัว IDE (VS Code) จะต้องแนะนำ Path ที่มีอยู่จริงให้โดยอัตโนมัติ
2. **Auto-Inferred Response Type:** แต่ละ Endpoint จะต้องคืนค่า Response Type ที่ถูกต้องตรงเผงโดยที่นักพัฒนาไม่ต้องครอบ \`as MyType\`
3. **Type-Safe Query Parameters:** Endpoint ที่ต้องใช้ Query String จะต้องบังคับให้ส่งพารามิเตอร์ครบถ้วน
4. **Resilient Error Handling:** ส่งคืนผลลัพธ์ในรูปแบบ \`Result<T, ApiError>\` ตามแบบแผน Functional Programming ป้องกัน Unhandled Promise Rejections

---

## 2. แผนผังสถาปัตยกรรม Type-Safe SDK

\`\`\`text
[Developer Calling SDK Client]
         |
         |  client.get("/api/v1/courses")
         v
+-------------------------------------------------------------------------+
|                         Type-Safe Transport Layer                       |
|                                                                         |
|  1. Endpoint Route Table (Mapped Type Validation)                       |
|  2. Request Interceptors (Authentication Bearer Injection)             |
|  3. Fetch Execution with Timeout Controller                             |
|  4. Response Parsing & Normalization                                    |
+-------------------------------------------------------------------------+
         |
         +-----------------------+-----------------------+
         |                                               |
     [Success]                                       [Failure]
         v                                               v
 { ok: true, value: Course[] }             { ok: false, error: ApiError }
\`\`\`

---

## 3. Endpoint Route Registry Pattern
เทคนิคอันทรงพลังในการผูกเส้นทาง URL กับ Data Type:

\`\`\`typescript
interface ApiRouteCatalog {
  "/api/v1/students": {
    response: StudentSummaryDTO[];
    query?: { department?: string; limit?: number };
  };
  "/api/v1/courses": {
    response: CourseFullDTO[];
    query?: { category?: string };
  };
  "/api/v1/system/health": {
    response: { status: "HEALTHY" | "DEGRADED"; uptime: number };
  };
}
\`\`\``,
      codeExample: {
        language: "typescript",
        code: `// =================================================================
// Enterprise Project: Type-Safe SDK Client Implementation
// =================================================================

// 1. Result Pattern (Discriminated Union สำหรับ Error Handling)
export type SdkResult<T, E = Error> =
  | { readonly ok: true; readonly data: T }
  | { readonly ok: false; readonly error: E };

// 2. Endpoint Registry Table
export interface ApiEndpoints {
  "/v1/stats": {
    GET: {
      response: { totalUsers: number; activeCourses: number; serverUptime: number };
    };
  };
  "/v1/students": {
    GET: {
      response: Array<{ id: string; name: string; gpa: number }>;
    };
    POST: {
      payload: { name: string; email: string; gpa: number };
      response: { id: string; status: "CREATED" };
    };
  };
}

// 3. Core Type-Safe SDK Client
export class ItAcademyApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(config: { baseUrl: string; apiKey: string }) {
    this.baseUrl = config.baseUrl.replace(/\\/$/, "");
    this.apiKey = config.apiKey;
  }

  // Type-Safe GET Method
  public async get<Path extends keyof ApiEndpoints>(
    path: Path
  ): Promise<SdkResult<ApiEndpoints[Path]["GET"]["response"]>> {
    const fullUrl = \`\${this.baseUrl}\${path}\`;
    console.log(\`🌐 [SDK GET] Fetching: \${fullUrl}\`);

    try {
      // จำลองการเชื่อมต่อ Network และคืนค่า Mock Data ตาม Type
      if (path === "/v1/stats") {
        const mockStats = {
          totalUsers: 4850,
          activeCourses: 28,
          serverUptime: 99.98
        };
        return { ok: true, data: mockStats as ApiEndpoints[Path]["GET"]["response"] };
      }

      const mockStudents = [
        { id: "STD-01", name: "กานดา สุขเกษม", gpa: 3.95 },
        { id: "STD-02", name: "พงศกร เจริญยิ่ง", gpa: 3.80 }
      ];
      return { ok: true, data: mockStudents as ApiEndpoints[Path]["GET"]["response"] };
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err : new Error(String(err)) };
    }
  }
}

// 4. ทดสอบเรียกใช้งาน SDK
async function bootstrapSdk() {
  const client = new ItAcademyApiClient({
    baseUrl: "https://api.itacademy.dev",
    apiKey: "sec_token_enterprise_99"
  });

  // เรียก /v1/stats โดย IDE จะแนะนำ Path และ Inferred Result ให้อัตโนมัติ
  const statsRes = await client.get("/v1/stats");
  if (statsRes.ok) {
    console.log("📊 สถิติจาก SDK Client:");
    console.log(\`   ผู้ใช้งานทั้งหมด: \${statsRes.data.totalUsers} คน\`);
    console.log(\`   คอร์สที่เปิดสอน: \${statsRes.data.activeCourses} หลักสูตร\`);
    console.log(\`   ความเสถียรของระบบ: \${statsRes.data.serverUptime}%\`);
  }

  const studentsRes = await client.get("/v1/students");
  if (studentsRes.ok) {
    console.log(\`👥 รายชื่อนักศึกษา (\${studentsRes.data.length} รายการ):\`);
    studentsRes.data.forEach(s => console.log(\`   • [\${s.id}] \${s.name} (GPA: \${s.gpa})\`));
  }
}

bootstrapSdk();`,
        description: "สถาปัตยกรรม Type-Safe HTTP SDK Client พร้อม Auto Route Completion และ Result Pattern"
      },
      challenge: {
        description: "ขยาย Class `ItAcademyApiClient` ให้มี Method `post<Path extends keyof ApiEndpoints>(path: Path, body: ApiEndpoints[Path]['POST']['payload'])` เพื่อรองรับคำสั่ง POST แบบ Type-Safe",
        startingCode: `// TODO: เขียน post method ลงใน SDK Client
`,
        solution: `// Solution:
// async post<Path extends keyof ApiEndpoints>(path: Path, body: any): Promise<any> {
//   return { ok: true, data: { id: "STD-NEW", status: "CREATED" } };
// }`
      },
      quiz: [
        {
          id: "ts-9-q1",
          question: "การใช้ Endpoint Registry Table เช่น `Path extends keyof ApiEndpoints` ใน SDK Method มีประโยชน์สูงสุดอย่างไรต่อผู้ใช้งาน?",
          options: [
            "ทำให้ส่งข้อมูลผ่าน HTTP ได้เร็วขึ้น 10 เท่า",
            "ตัว IDE จะสามารถ Auto-complete เส้นทาง URL ให้โดยอัตโนมัติ และรู้ Type ของ Response ที่จะได้กลับมาโดยไม่ต้องพิมพ์ Type Casting",
            "ช่วยประหยัดแบตเตอรี่ของเครื่องคอมพิวเตอร์",
            "ลบคำขอที่ซ้ำซ้อนทิ้งก่อนส่งไปยังเซิร์ฟเวอร์"
          ],
          correctAnswer: 1,
          explanation: "การใช้ Path extends keyof ApiEndpoints ช่วยให้ IDE สามารถทำ Code Completion แนะนำ URL Path ที่มีอยู่จริงได้ทันที และผูก Return Type ตามตาราง ApiEndpoints[Path] ทำให้นักพัฒนาไม่ต้องเดา Type เอง"
        },
        {
          id: "ts-9-q2",
          question: "แบบแผน Result Pattern `{ ok: true, data: T } | { ok: false, error: E }` ใน SDK มีจุดเด่นเหนือการ throw Error ทั่วไปอย่างไร?",
          options: [
            "ทำให้ไม่เปลืองพื้นที่หน่วยความจำ RAM",
            "บังคับให้นักพัฒนาต้องตรวจสอบผลลัพธ์ผ่าน Control Flow Analysis (if (res.ok)) ก่อนเข้าถึง data ป้องกัน Unhandled Rejections",
            "แปลงข้อความ Error ให้เป็นภาษาไทยโดยอัตโนมัติ",
            "ทำให้คำขอนั้นไม่มีวันล้มเหลวไม่ว่าจะเกิดอะไรขึ้น"
          ],
          correctAnswer: 1,
          explanation: "Result Pattern เป็นแบบแผนจากภาษาเชิงฟังก์ชันที่แปลง Error ให้กลายเป็นค่าในระบบข้อมูล บังคับให้นักพัฒนาต้องตรวจสอบ if (res.ok) เพื่อแยกกรณีสำเร็จหรือล้มเหลวก่อนเข้าถึงข้อมูลอย่างปลอดภัย"
        },
        {
          id: "ts-9-q3",
          question: "หากต้องการแจกจ่าย SDK ให้รองรับทั้ง CommonJS (Node.js ยุคเก่า) และ ESM (Modern Node.js & Bundlers) ควรตั้งค่าฟิลด์ใดใน package.json?",
          options: [
            "scripts.start",
            "exports map ที่กำหนด 'import' สำหรับ ESM (.mjs) และ 'require' สำหรับ CJS (.cjs)",
            "gitRemote",
            "private: true"
          ],
          correctAnswer: 1,
          explanation: "Package Exports Map (`\"exports\": { \".\": { \"import\": \"./dist/index.mjs\", \"require\": \"./dist/index.cjs\", \"types\": \"./dist/index.d.ts\" } }`) เป็นมาตรฐานสากลในการทำ Dual Package สำหรับแจกจ่ายไลบรารี"
        }
      ]
    }
  ]
};
