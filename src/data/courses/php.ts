import { Course } from "../types";

export const phpCourse: Course = {
  id: "php",
  title: "Modern PHP 8.3 & Enterprise Web Architecture",
  description: "เรียนรู้ภาษา PHP ยุคใหม่ 8.3 ตั้งแต่สถาปัตยกรรม Zend Engine, JIT Compiler, Strict Types, OOP ขั้นสูง, PDO Security, Composer, PSR Standards จนถึงสถาปัตยกรรม Laravel 11",
  longDescription: "หลักสูตรภาษา PHP ยุคใหม่ (Modern PHP 8.3 Engineering) ลบภาพจำเก่าของ PHP ในอดีต แล้วก้าวสู่มาตรฐานการเขียนโค้ดระดับสากลที่มี Type Safety สูง ครอบคลุมตั้งแต่สถาปัตยกรรม JIT Compiler ภายใน Zend Engine, Strict Type Declarations, Match Expressions, การเขียน OOP ขั้นสูงด้วย Constructor Promotion, Readonly Classes, Enums และ Attributes, การรักษาความปลอดภัยฐานข้อมูลขั้นสูงด้วย PDO Prepared Statements, การจัดการแพ็กเกจด้วย Composer และมาตรฐาน PSR (PSR-4 Autoloading, PSR-7, PSR-11, PSR-12), การสร้างสถาปัตยกรรม MVC และ Front Controller Router, ตลอดจนการพัฒนา RESTful APIs พร้อมระบบ Authentication และการเพิ่มประสิทธิภาพด้วย OPcache และ Redis",
  icon: "🐘",
  color: "indigo",
  gradient: "from-indigo-500 via-purple-600 to-blue-600",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["PHP 8.3", "Composer", "PDO", "MVC", "Laravel", "REST API", "OOP", "MySQL", "Zend Engine"],
  recommendedTools: [
    {
      name: "PHP 8.3+ Runtime",
      icon: "🐘",
      badge: "Official Engine",
      description: "ตัวแปลภาษา PHP เวอร์ชันล่าสุด พร้อม JIT Compiler และการปรับปรุงประสิทธิภาพรอบด้าน",
      downloadUrl: "https://www.php.net/downloads",
      setupGuide: "1. ดาวน์โหลดติดตั้ง PHP 8.3 จาก php.net หรือผ่าน XAMPP/Homebrew\n2. เปิดใช้งาน Extensions ใน php.ini: pdo_mysql, mbstring, openssl, curl, opcache\n3. ตรวจสอบใน Terminal: php -v"
    },
    {
      name: "Composer",
      icon: "📦",
      badge: "Package Manager",
      description: "เครื่องมือจัดการ Dependency และระบบ PSR-4 Autoloading มาตรฐานอุตสาหกรรมสำหรับภาษา PHP",
      downloadUrl: "https://getcomposer.org/",
      setupGuide: "1. ติดตั้ง Composer จาก getcomposer.org\n2. ตรวจสอบเวอร์ชันด้วยคำสั่ง: composer --version\n3. สร้างโปรเจกต์ใหม่: composer init"
    }
  ],
  lessons: [
    {
      id: "php-1",
      title: "วิวัฒนาการสู่ Modern PHP 8.3: Zend Engine 4, OPcache, JIT และ Type System",
      description: "ทำความเข้าใจสถาปัตยกรรมภายในของ Zend Engine, วงจรชีวิตการทำงานของ Request ใน PHP-FPM, การทำงานของ OPcache และ JIT Compiler, การเปิดใช้งาน declare(strict_types=1), Match Expressions, Named Arguments และ Disjunctive Normal Form (DNF) Types",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# วิวัฒนาการของ Modern PHP 8.3 และ Zend Engine

ภาษา **PHP** ในปัจจุบัน (เวอร์ชัน 8.2 และ 8.3) มีความแตกต่างจาก PHP 5 หรือ PHP 7 ในอดีตอย่างสิ้นเชิง ปัจจุบัน PHP กลายเป็นภาษาที่มี **Strict Type Safety**, มี **JIT (Just-In-Time) Compiler**, มีความเร็วในการประมวลผลสูง และขับเคลื่อนเว็บไซต์ชั้นนำกว่า 77% ของโลก รวมถึง Wikipedia, Slack, และ WordPress

---

## 1. วงจรชีวิตของคำขอใน PHP (Request-Response Lifecycle)

\`\`\`text
+-------------------------------------------------------------------------+
|                  Modern PHP Request-Response Lifecycle                  |
+-------------------------------------------------------------------------+
|  HTTP Request (from Nginx / Caddy / Apache)                             |
|        │                                                                |
|        ▼ (FastCGI Protocol via Unix Socket / TCP)                       |
|  1. PHP-FPM (FastCGI Process Manager)                                   |
|        │  - จัดการ Worker Process Pool (pm.max_children)                |
|        ▼                                                                |
|  2. Zend Engine Compiler                                                |
|        ├── Lexical Analysis & Tokenizer (แปลงโค้ดเป็น Tokens)           |
|        ├── Parser (สร้าง Abstract Syntax Tree - AST)                    |
|        └── Compilation (แปลง AST เป็น Zend Opcodes)                     |
|        │                                                                |
|        ▼                                                                |
|  3. OPcache (Shared Memory Accelerator)                                 |
|        ├── แคช Opcodes ไว้ใน Shared Memory (ข้ามขั้นตอน Parse รอบถัดไป) |
|        └── JIT Compiler (แปลง Hot Opcodes เป็น x86_64 Machine Code)     |
|        │                                                                |
|        ▼                                                                |
|  4. Zend VM Executor (ประมวลผลคำสั่ง Opcodes และคืนผลลัพธ์)             |
|        │                                                                |
|        ▼ (Shared-Nothing: คืนหน่วยความจำทั้งหมดทันที)                    |
|  HTTP Response sent back to Client                                      |
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. OPcache และ Just-In-Time (JIT) Compiler
- **OPcache:** ในอดีต PHP ต้องอ่านไฟล์ \`.php\` มา Parse และคอมไพล์เป็น Opcodes ใหม่ทุกครั้งที่มีคำขอเข้ามา แต่ OPcache จะเก็บ Opcodes ไว้ใน Shared Memory (RAM) ทำให้คำขอครั้งต่อๆ ไปสามารถรัน Opcodes ได้ทันทีโดยไม่ต้องอ่านดิสก์
- **JIT Compiler (PHP 8.0+):** นำ Opcodes ส่วนที่ถูกเรียกซ้ำๆ ("Hot Code") มาคอมไพล์เป็น **Native Machine Code** โดยตรงด้วยสถาปัตยกรรม DynASM ส่งผลให้งานประเภท CPU-intensive (เช่น การคำนวณคณิตศาสตร์, ประมวลผลภาพ, หรือ Data Analytics) เร็วขึ้นหลายเท่าตัว

---

## 3. Strict Type Declarations: กฎเหล็กของ Modern PHP
PHP โดยดั้งเดิมมีพฤติกรรม Type Coercion (แปลง Type อัตโนมัติ เช่น \`"10" + 20\` ได้ \`30\`) ซึ่งเสี่ยงต่อการเกิดบั๊กเงียบในระบบการเงิน

เพื่อเปิดใช้งานการตรวจสอบ Type อย่างเข้มงวด ต้องระบุบรรทัดแรกสุดของไฟล์เสมอ:
\`\`\`php
<?php
declare(strict_types=1);

function transferFunds(int $accountId, float $amount): bool {
    // หากส่ง "100" ที่เป็นสตริงเข้ามา PHP จะโยน TypeError ทันที!
    return true;
}
\`\`\`

---

## 4. Modern Type System & Match Expressions
PHP 8.2 และ 8.3 นำเสนอความสามารถระดับสูง:
- **Union Types (\`int|float\`):** รับได้หลายชนิดข้อมูล
- **Intersection Types (\`Countable&Iterator\`):** ต้องมีคุณสมบัติครบทั้งสอง Interface
- **DNF Types (\`(HasTitle&HasPrice)|null\`):** ผสาน Union และ Intersection เข้าด้วยกัน
- **Match Expression:** แทนที่ \`switch\` แบบเดิม ทำงานแบบ Strict Comparison (\`===\`), คืนค่าได้ทันที และป้องกันปัญหาลืมใส่ \`break\``,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Modern PHP 8.3: Type System, Match Expressions & DNF Types
// =================================================================

interface HasIdentifier {
    public function getId(): string;
}

interface HasAuditTrail {
    public function getCreatedAt(): DateTimeImmutable;
}

// 1. คลาสที่ Implement ทั้งสอง Interface
class AcademicRecord implements HasIdentifier, HasAuditTrail {
    public function __construct(
        private string $id,
        private float $gpa,
        private DateTimeImmutable $createdAt
    ) {}

    public function getId(): string { return $this->id; }
    public function getGpa(): float { return $this->gpa; }
    public function getCreatedAt(): DateTimeImmutable { return $this->createdAt; }
}

// 2. ฟังก์ชันที่ใช้ Match Expression และ Type Annotations
function evaluateHonorRoll(float $gpa): string {
    return match (true) {
        $gpa >= 3.85 => "🏆 เกียรตินิยมอันดับหนึ่งเหรียญทอง (First Class Honors - Gold)",
        $gpa >= 3.60 => "🥈 เกียรตินิยมอันดับหนึ่ง (First Class Honors)",
        $gpa >= 3.25 => "🥉 เกียรตินิยมอันดับสอง (Second Class Honors)",
        $gpa >= 2.00 => "✅ สำเร็จการศึกษาตามเกณฑ์มาตรฐาน (Satisfactory)",
        default      => "⚠️ อยู่ในภาวะวิทยาทัณฑ์ (Academic Probation)"
    };
}

// 3. ฟังก์ชันรับ Disjunctive Normal Form (DNF) Type
function auditStudentScore((HasIdentifier&HasAuditTrail)|null $record, float $gpa): void {
    if ($record === null) {
        echo "❌ ไม่พบประวัติการศึกษาในระบบ\n";
        return;
    }

    $honorTitle = evaluateHonorRoll($gpa);
    echo "========================================================\n";
    echo "   สถาบันเทคโนโลยีสารสนเทศ IT Academy (PHP 8.3 Runtime)\n";
    echo "========================================================\n";
    echo "• รหัสประจำตัว : " . $record->getId() . "\n";
    echo "• เกรดเฉลี่ยสะสม : " . number_format($gpa, 2) . "\n";
    echo "• การประเมินผล : " . $honorTitle . "\n";
    echo "• วันที่ตรวจสอบ : " . $record->getCreatedAt()->format("Y-m-d H:i:s") . "\n";
}

// ทดสอบรัน
$stdRecord = new AcademicRecord(
    id: "STD-670109",
    gpa: 3.92,
    createdAt: new DateTimeImmutable()
);

auditStudentScore($stdRecord, 3.92);`,
        description: "การใช้งาน Strict Types, Match Expression และ DNF Types ใน Modern PHP 8.3"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `calculateFee(string $plan): int` โดยใช้คำสั่ง `match` คืนค่า 0 สำหรับ 'free', 490 สำหรับ 'basic', และ 1290 สำหรับ 'premium' หากเป็นค่าอื่นให้โยน InvalidArgumentException",
        startingCode: `<?php
declare(strict_types=1);

function calculateFee(string $plan): int {
    // TODO: ใช้ match expression
    return 0;
}`,
        solution: `<?php
declare(strict_types=1);

function calculateFee(string $plan): int {
    return match ($plan) {
        'free' => 0,
        'basic' => 490,
        'premium' => 1290,
        default => throw new InvalidArgumentException("Unknown plan: {$plan}")
    };
}`
      },
      quiz: [
        {
          id: "php-1-q1",
          question: "คำสั่ง `declare(strict_types=1);` ในภาษา PHP มีขอบเขตและผลกระทบอย่างไร?",
          options: [
            "มีผลกับทั้งเซิร์ฟเวอร์และทุกไฟล์ในโปรเจกต์อัตโนมัติ",
            "มีผลเฉพาะกับไฟล์ที่มีการระบุคำสั่งนี้ไว้ที่บรรทัดแรกสุด โดยบังคับให้การส่งค่าพารามิเตอร์และ Return Type ตรงตาม Type Hints 100%",
            "ทำให้ PHP แปลงโค้ดเป็นภาษา C++ ทันที",
            "ปิดการทำงานของฐานข้อมูลเพื่อความปลอดภัย"
          ],
          correctAnswer: 1,
          explanation: "declare(strict_types=1) มีผลแบบ per-file scope สำหรับไฟล์ที่มีการระบุไว้ โดยจะสั่งให้ Zend Engine เลิกทำ Implicit Type Coercion ในการเรียกฟังก์ชัน และโยน TypeError ทันทีหากชนิดข้อมูลไม่ตรงเป๊ะ"
        },
        {
          id: "php-1-q2",
          question: "อะไรคือข้อได้เปรียบสำคัญของ `match` expression เมื่อเทียบกับคำสั่ง `switch` แบบดั้งเดิมใน PHP?",
          options: [
            "match ใช้การเปรียบเทียบแบบ Strict Equality (===), คืนค่าออกมาเป็น Expression ได้ทันที และไม่ต้องเขียน break เพื่อป้องกันการ fall-through",
            "match สามารถทำงานได้โดยไม่ต้องมีตัวแปร",
            "match ทำงานเฉพาะในโหมด asynchronous เท่านั้น",
            "switch ทำงานเร็วกว่า match เสมอ 10 เท่า"
          ],
          correctAnswer: 0,
          explanation: "match expression ปรับปรุงข้อผิดพลาดของ switch: ใช้การตรวจสอบแบบเข้มงวด `===` (switch ใช้ `==` ซึ่งอาจเกิด Type Juggling), มีค่าส่งกลับโดยตรง, ไม่ต้องใช้คำสั่ง break เพราะไม่มีปัญหา fall-through และจะโยน UnhandledMatchError หากไม่มีเคสที่ตรงกัน"
        },
        {
          id: "php-1-q3",
          question: "กลไก OPcache ช่วยเพิ่มความเร็วให้แก่เว็บแอปพลิเคชัน PHP ได้อย่างไร?",
          options: [
            "ลบรูปภาพทั้งหมดในเว็บให้มีขนาดเล็กลง",
            "แคช Opcodes ที่คอมไพล์แล้วไว้ในหน่วยความจำ RAM (Shared Memory) ทำให้คำขอถัดไปไม่ต้องเสียเวลาอ่านดิสก์และ Parse โค้ดซ้ำ",
            "เปลี่ยนระบบปฏิบัติการให้เป็น Linux",
            "ปิดการเชื่อมต่ออินเทอร์เน็ตที่ไม่จำเป็น"
          ],
          correctAnswer: 1,
          explanation: "OPcache ช่วยขจัดขั้นตอน Lexing, Parsing และ Compilation ในทุก Request โดยการบันทึก Zend Opcodes ที่คอมไพล์แล้วไว้ในหน่วยความจำส่วนกลาง ทำให้เซิร์ฟเวอร์สามารถรันคำสั่ง Opcodes ได้ทันที ลดเวลาตอบสนองลงอย่างมหาศาล"
        }
      ]
    },
    {
      id: "php-2",
      title: "OOP ขั้นสูง: Constructor Property Promotion, Readonly Classes, Enums และ Attributes",
      description: "เขียนโค้ด OOP ที่กระชับและปลอดภัยด้วย Constructor Promotion, การสร้าง Immutable Value Objects ด้วย Readonly Classes, การใช้งาน Backed Enums และการประยุกต์ใช้ PHP 8 Attributes ในการทำ Metadata Annotation",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การเขียนโปรแกรมเชิงวัตถุ (OOP) ขั้นสูงใน PHP 8.3

ในยุค PHP 8 สถาปัตยกรรมเชิงวัตถุได้รับการยกระดับให้เทียบเคียงภาษาชั้นนำอย่าง C#, Java และ TypeScript ช่วยลดการเขียนโค้ดซ้ำซ้อน (Boilerplate) และส่งเสริมการออกแบบตามแนวคิด **Domain-Driven Design (DDD)**

---

## 1. Constructor Property Promotion
ใน PHP รุ่นก่อน เราต้องประกาศ Property กำหนด Type และเขียนโค้ดกำหนดค่าใน \`__construct\` ซ้ำซ้อน 3 รอบ ปัจจุบัน PHP 8 รวบขั้นตอนทั้งหมดไว้ในพารามิเตอร์ของ Constructor:

\`\`\`php
// แบบเก่า (PHP 7): 12 บรรทัด
// แบบใหม่ (PHP 8.3): สั้นกระชับ สะอาดตา และปลอดภัย
final class Student {
    public function __construct(
        public readonly string $id,
        public string $name,
        public float $gpa = 0.0,
        private string $passwordHash = ""
    ) {}
}
\`\`\`

---

## 2. Readonly Classes และ Immutability
การสร้าง **Value Object** ที่ไม่สามารถเปลี่ยนแปลงค่าได้หลังจาก Instantiate ช่วยป้องกันปัญหา Side-Effects ในระบบขนาดใหญ่:

\`\`\`php
// การประกาศ readonly ที่ระดับคลาส จะทำให้ทุก Property ในคลาสเป็น readonly โดยอัตโนมัติ
readonly class Money {
    public function __construct(
        public float $amount,
        public string $currency = "THB"
    ) {
        if ($amount < 0) {
            throw new InvalidArgumentException("ยอดเงินต้องไม่ติดลบ");
        }
    }
}
\`\`\`

---

## 3. Backed Enums พร้อม Methods & Interfaces
Enum ใน PHP 8.1+ ไม่ได้เป็นแค่ค่าคงที่ธรรมดา แต่เป็น Type-Safe Object ที่สามารถผูกค่าพื้นฐาน (Backed: string หรือ int) และเพิ่มเมธอดหรือสืบทอด Interface ได้:

\`\`\`php
enum CourseStatus: string {
    case Draft = "DRAFT";
    case Published = "PUBLISHED";
    case Archived = "ARCHIVED";

    public function badgeColor(): string {
        return match ($this) {
            self::Draft => "gray",
            self::Published => "green",
            self::Archived => "red",
        };
    }
}
\`\`\`

---

## 4. PHP 8 Attributes (Native Metadata Annotations)
Attributes มาแทนที่ Docblock Annotations (\`/** @Route(...) */\`) ในอดีต โดยเป็นโครงสร้างภาษาระดับเฟิร์สคลาสที่สามารถสืบค้นได้ผ่าน **Reflection API**:

\`\`\`php
#[Attribute(Attribute::TARGET_METHOD)]
class Route {
    public function __construct(public string $path, public string $method = "GET") {}
}

class ApiController {
    #[Route(path: "/api/students", method: "GET")]
    public function listStudents(): array {
        return [];
    }
}
\`\`\``,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Advanced OOP: Readonly Classes, Backed Enums & Attributes
// =================================================================

// 1. กำหนด Custom Attribute สำหรับตรวจสอบสิทธิ์
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class RequiresRole {
    public function __construct(public string $role) {}
}

// 2. Backed Enum สำหรับบทบาทผู้ใช้งาน
enum UserRole: string {
    case Admin = "ROLE_ADMIN";
    case Instructor = "ROLE_INSTRUCTOR";
    case Student = "ROLE_STUDENT";

    public function canManageCourses(): bool {
        return $this === self::Admin || $this === self::Instructor;
    }
}

// 3. Immutable Value Object ด้วย Readonly Class
readonly class UserProfile {
    public function __construct(
        public string $userId,
        public string $fullName,
        public string $email,
        public UserRole $role,
        public DateTimeImmutable $enrolledAt
    ) {}
}

// 4. Controller Class ที่ใช้ Attributes
#[RequiresRole("ROLE_ADMIN")]
class AdminCourseController {
    public function publishCourse(UserProfile $user, string $courseId): void {
        if (!$user->role->canManageCourses()) {
            throw new RuntimeException("ปฏิเสธการเข้าถึง: ผู้ใช้ไม่มีสิทธิ์จัดการหลักสูตร");
        }

        echo "📢 [AUDIT] ผู้ใช้งาน: {$user->fullName} ({$user->role->value}) ได้ทำการเผยแพร่คอร์ส {$courseId}\n";
    }
}

// ทดสอบการทำงาน
$adminUser = new UserProfile(
    userId: "USR-001",
    fullName: "ดร. อานนท์ วงศ์วิศาล",
    email: "arnon.w@itacademy.ac.th",
    role: UserRole::Admin,
    enrolledAt: new DateTimeImmutable("2024-01-15")
);

$controller = new AdminCourseController();
$controller->publishCourse($adminUser, "COURSE-PHP8-ENTERPRISE");`,
        description: "การออกแบบระบบด้วย Readonly Classes, Backed Enums และ PHP 8 Attributes"
      },
      challenge: {
        description: "สร้าง Backed Enum ชื่อ `OrderStatus: string` ประกอบด้วย Pending = 'pending', Paid = 'paid', Cancelled = 'cancelled' พร้อมเมธอด `isFinal(): bool` ที่คืนค่า true เมื่อเป็น Paid หรือ Cancelled",
        startingCode: `<?php
declare(strict_types=1);

// TODO: สร้าง OrderStatus Enum
`,
        solution: `<?php
declare(strict_types=1);

enum OrderStatus: string {
    case Pending = "pending";
    case Paid = "paid";
    case Cancelled = "cancelled";

    public function isFinal(): bool {
        return $this === self::Paid || $this === self::Cancelled;
    }
}`
      },
      quiz: [
        {
          id: "php-2-q1",
          question: "การประกาศคลาสเป็น `readonly class` ใน PHP 8.2 มีผลอย่างไรต่อคุณสมบัติภายในคลาส?",
          options: [
            "ทำให้คลาสไม่สามารถสร้าง instance ใหม่ได้",
            "ทุก Property ภายในคลาสจะถูกกำหนดให้เป็น readonly โดยอัตโนมัติ และไม่สามารถแก้ไขค่าได้หลังจาก Constructor ทำงานเสร็จ",
            "ทำให้ไฟล์ PHP ไม่สามารถเปิดอ่านในโปรแกรมแก้ไขข้อความได้",
            "บังคับให้ทุกฟังก์ชันในคลาสต้องเป็น private"
          ],
          correctAnswer: 1,
          explanation: "การใช้คีย์เวิร์ด readonly class ช่วยอำนวยความสะดวกในการสร้าง Immutable Object โดย Properties ทั้งหมดจะกลายเป็น readonly ทันที ป้องกันการเปลี่ยนแปลงสถานะ (State Mutation) หลังการสร้างอ็อบเจกต์"
        },
        {
          id: "php-2-q2",
          question: "ประโยชน์ของ Constructor Property Promotion ใน PHP 8 คืออะไร?",
          options: [
            "ช่วยเพิ่มความเร็วในการคำนวณเลขทศนิยม",
            "ช่วยลด Boilerplate Code โดยสามารถประกาศการเข้าถึง (Visibility), Type, และชื่อของ Property ไว้ในพารามิเตอร์ของ Constructor ในคราวเดียว",
            "ทำให้ Constructor สามารถส่งคืนค่า String ได้",
            "ลบตัวแปรออกจากหน่วยความจำทันทีที่สร้างเสร็จ"
          ],
          correctAnswer: 1,
          explanation: "Constructor Property Promotion ช่วยรวมขั้นตอนการประกาศ Property, กำหนด Visibility (public/protected/private) และการกำหนดค่า `$this->x = $x` ไว้ที่จุดเดียวในพารามิเตอร์ของ __construct()"
        },
        {
          id: "php-2-q3",
          question: "ใน PHP Backed Enum เมธอด `from(value)` และ `tryFrom(value)` มีความแตกต่างกันอย่างไร?",
          options: [
            "from() ใช้กับสตริง ส่วน tryFrom() ใช้กับตัวเลข",
            "from() จะโยน ValueError Exception หากไม่พบค่าที่ตรงกัน ในขณะที่ tryFrom() จะคืนค่า null อย่างปลอดภัย",
            "ทั้งคู่ทำงานเหมือนกันทุกประการ",
            "tryFrom() จะทำการสร้าง Enum ตัวใหม่ขึ้นมาอัตโนมัติเมื่อค้นหาไม่พบ"
          ],
          correctAnswer: 1,
          explanation: "เมื่อทำการแปลงค่าดิบ (เช่น ค่าที่ได้จากฐานข้อมูลหรือ JSON) กลับเป็น Enum: `Enum::from($val)` จะโยน ValueError ทันทีหากไม่มีค่านั้น ส่วน `Enum::tryFrom($val)` จะคืนค่า null ทำให้เราใช้ตรวจสอบด้วย Nullable Handling ได้อย่างสะดวก"
        }
      ]
    },
    {
      id: "php-3",
      title: "ความปลอดภัยระดับองค์กร: PDO Prepared Statements, SQL Injection และ Data Security",
      description: "เจาะลึกสถาปัตยกรรมความปลอดภัยของ PHP: กลไกการเกิด SQL Injection, สถาปัตยกรรม PDO (PHP Data Objects), Native vs Emulated Prepared Statements, การแฮชรหัสผ่านด้วย Argon2id/Bcrypt, การป้องกัน CSRF, XSS และ Session Security",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# ความปลอดภัยระดับองค์กรใน PHP และการป้องกัน SQL Injection

ความปลอดภัยคือหัวใจสูงสุดของการพัฒนาเว็บแอปพลิเคชัน ในอดีต PHP มักถูกโจมตีผ่านช่องโหว่ **SQL Injection (SQLi)** ซึ่งติดอันดับ Top 3 ในรายงาน OWASP Top 10 มาโดยตลอด

---

## 1. กายวิภาคของช่องโหว่ SQL Injection
SQL Injection เกิดขึ้นเมื่อโปรแกรมเมอร์นำ Input จากผู้ใช้ไปเชื่อมต่อสตริง (Concatenate) ในคำสั่ง SQL โดยตรง:

\`\`\`php
// โค้ดที่อันตรายถึงชีวิต (Vulnerable Code!):
$sql = "SELECT * FROM users WHERE email = '" . $_POST['email'] . "'";

// หากผู้ไม่หวังดีป้อน: admin@it.com' OR '1'='1
// คำสั่งที่ฐานข้อมูลได้รับจะกลายเป็น:
// SELECT * FROM users WHERE email = 'admin@it.com' OR '1'='1'
// ส่งผลให้ผู้โจมตี Bypass ระบบล็อกอินและดึงข้อมูลทั้งฐานข้อมูลออกมาได้ทันที!
\`\`\`

---

## 2. ทำไม PDO Prepared Statements ถึงป้องกันได้ 100%?
กลไกของ Prepared Statements แบ่งขั้นตอนการทำงานออกเป็น 2 เฟสที่แยกขาดจากกัน:

\`\`\`text
Phase 1: Prepare (ส่งเฉพาะโครงสร้างคำสั่ง SQL)
[ PHP App ] ─── "SELECT * FROM users WHERE email = :email" ───> [ MySQL Engine ]
                                                                     │
                                                       (Compile & Cache Execution Plan)
                                                                     │
Phase 2: Execute (ส่งเฉพาะก้อนข้อมูล Parameters)                      │
[ PHP App ] ───────── [ :email = "attacker' OR '1'='1" ] ─────────> [ MySQL Engine ]
                                                                     │
           (ฐานข้อมูลมองข้อมูลเป็น Literal Value 100% ไม่มีวันตีความกลายเป็นคำสั่ง SQL ได้!)
\`\`\`

---

## 3. การตั้งค่า PDO สำหรับสภาพแวดล้อมโปรดักชัน
\`\`\`php
$options = [
    // โยน PDOException ทันทีเมื่อ Query ผิดพลาด (ห้ามเงียบ!)
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    // คืนผลลัพธ์เป็น Associative Array เป็นค่าเริ่มต้น
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    // บังคับให้ฐานข้อมูลใช้ Native Prepared Statements จริง ปิดการ Emulate
    PDO::ATTR_EMULATE_PREPARES => false,
    // บังคับการเชื่อมต่อแบบ UTF-8 ป้องกันช่องโหว่ Encoding Bypass
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
];
\`\`\`

---

## 4. มาตรฐานความปลอดภัยข้อมูลขั้นสูงใน PHP
- **Password Hashing:** เลิกใช้ \`md5\` หรือ \`sha1\` เด็ดขาด ให้ใช้ฟังก์ชันมาตรฐาน \`password_hash($pass, PASSWORD_ARGON2ID)\` หรือ \`PASSWORD_BCRYPT\` ที่มีการสุ่ม Salt และตั้งค่า Work Factor ให้เหมาะสม
- **XSS Defense:** ทำการ Sanitize Output ก่อนแสดงบน HTML ด้วย \`htmlspecialchars($data, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')\`
- **Session Security:** ป้องกัน Session Hijacking ด้วยการตั้งค่า \`session.cookie_httponly = 1\`, \`session.cookie_secure = 1\`, และเรียก \`session_regenerate_id(true)\` ทุกครั้งที่มีการเปลี่ยนแปลงระดับสิทธิ์`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Enterprise PDO Database Wrapper & Security Vault
// =================================================================

class DatabaseSecurityDemo {
    // 1. การแฮชและตรวจสอบรหัสผ่านตามมาตรฐานสากล
    public static function demonstratePasswordHashing(string $rawPassword): void {
        echo "🔐 [PASSWORD SECURITY]\n";
        // ใช้งาน Argon2id (หรือ Bcrypt เป็น Fallback)
        $hash = password_hash($rawPassword, PASSWORD_ARGON2ID, [
            'memory_cost' => 65536, // 64MB
            'time_cost'   => 4,     // 4 iterations
            'threads'     => 1
        ]);

        echo "• รหัสผ่านดิบ   : {$rawPassword}\n";
        echo "• Argon2id Hash : {$hash}\n";

        // ตรวจสอบความถูกต้อง
        $isValid = password_verify($rawPassword, $hash);
        echo "• ผลการตรวจสอบ : " . ($isValid ? "✅ ผ่านการยืนยันถูกต้อง" : "❌ รหัสผ่านไม่ถูกต้อง") . "\n\n";
    }

    // 2. การจำลอง Native Prepared Statements
    public static function secureQuerySimulation(string $untrustedInput): void {
        echo "🛡️ [SQL INJECTION DEFENSE SIMULATION]\n";
        $sqlTemplate = "SELECT id, username, email, role FROM users WHERE email = :email AND status = :status";
        
        // จำลองการ Binding parameters
        $parameters = [
            ":email" => $untrustedInput,
            ":status" => "ACTIVE"
        ];

        echo "• โครงสร้าง SQL : {$sqlTemplate}\n";
        echo "• Untrusted Data: {$untrustedInput}\n";
        echo "• สถานะการ Bind : ข้อมูลถูกส่งแยกแชนแนลผ่าน Binary Protocol\n";
        echo "✓ ผลลัพธ์: คำสั่ง SQL ไม่ถูกบิดเบือน แม้ข้อมูลจะมีเครื่องหมาย ' OR 1=1 ก็ตาม!\n";
    }
}

// ทดสอบความปลอดภัย
DatabaseSecurityDemo::demonstratePasswordHashing("SuperSecretP@ssw0rd!2026");
DatabaseSecurityDemo::secureQuerySimulation("admin@academy.dev' OR '1'='1");`,
        description: "การใช้งาน Argon2id Password Hashing และหลักการป้องกัน SQL Injection ของ PDO"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `hashUserPassword(string $password): string` ที่คืนค่าแฮชรหัสผ่านด้วยอัลกอริทึม PASSWORD_BCRYPT พร้อมตั้งค่า cost เป็น 12",
        startingCode: `<?php
declare(strict_types=1);

function hashUserPassword(string $password): string {
    // TODO: แฮชด้วย PASSWORD_BCRYPT และ cost = 12
    return "";
}`,
        solution: `<?php
declare(strict_types=1);

function hashUserPassword(string $password): string {
    return password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
}`
      },
      quiz: [
        {
          id: "php-3-q1",
          question: "ทำไมการตั้งค่า `PDO::ATTR_EMULATE_PREPARES => false` จึงเป็นสิ่งจำเป็นต่อความปลอดภัยสูงสุดใน PHP?",
          options: [
            "เพื่อให้แอปพลิเคชันทำงานได้โดยไม่ต้องมีฐานข้อมูล",
            "เพื่อปิดการจำลอง Prepared Statements ที่ระดับ PHP และบังคับให้ส่งไปยังเอนจินของฐานข้อมูลจริง (Native Prepares) เพื่อความปลอดภัยสูงสุดและป้องกันช่องโหว่ Encoding Bypass",
            "เพื่อแปลงคำสั่ง SQL ทั้งหมดให้เป็นภาษาอังกฤษ",
            "เพื่อจำกัดจำนวนผู้ใช้งานให้อยู่ที่ 100 คน"
          ],
          correctAnswer: 1,
          explanation: "เมื่อ ATTR_EMULATE_PREPARES เป็น true ตัวไดรเวอร์ PDO จะทำการแทนที่สตริงในฝั่ง PHP ก่อนส่ง ซึ่งในบางกรณีของการจัดเก็บ Charset แปลกๆ อาจถูกเจาะได้ การปิด emulate (ตั้งเป็น false) จะบังคับให้ใช้ Native Server-Side Prepared Statements ของฐานข้อมูลอย่างแท้จริง"
        },
        {
          id: "php-3-q2",
          question: "เหตุใดการใช้ฟังก์ชัน `md5()` หรือ `sha1()` ในการจัดเก็บรหัสผ่านผู้ใช้งานจึงถือเป็นข้อผิดพลาดร้ายแรง?",
          options: [
            "เพราะ MD5 และ SHA1 เป็น Fast Cryptographic Hashes ที่ออกแบบมาเพื่อความเร็ว ทำให้คอมพิวเตอร์ปัจจุบันสามารถคำนวณถอดรหัสผ่าน Rainbow Tables และ GPU Brute-Force ได้นับพันล้านรอบต่อวินาที",
            "เพราะ MD5 สามารถเก็บรหัสผ่านได้ยาวไม่เกิน 5 ตัวอักษร",
            "เพราะฟังก์ชัน MD5 จะถูกลบออกจาก PHP 9",
            "เพราะทำให้ขนาดของไฟล์ฐานข้อมูลเพิ่มขึ้น 100 เท่า"
          ],
          correctAnswer: 0,
          explanation: "MD5/SHA1 เร็วเกินไปสำหรับการเก็บรหัสผ่าน มาตรฐานสากลกำหนดให้ใช้อัลกอริทึมประเภท Slow Hashes เช่น Argon2id หรือ Bcrypt ที่มีตัวแปรควบคุมความช้า (Work Factor / Cost) และการใช้หน่วยความจำ เพื่อต้านทานการโจมตีแบบ Brute-Force ผ่านฮาร์ดแวร์ GPU/ASIC"
        },
        {
          id: "php-3-q3",
          question: "คำสั่ง `session_regenerate_id(true)` มีประโยชน์สำคัญที่สุดในการป้องกันการโจมตีประเภทใด?",
          options: [
            "SQL Injection",
            "Session Fixation Attack (การสวมรอยเซสชันเดิมหลังจากผู้ใช้ล็อกอินสำเร็จ)",
            "DDoS Attack",
            "Cross-Site Scripting (XSS)"
          ],
          correctAnswer: 1,
          explanation: "Session Fixation คือการที่ผู้โจมตีหลอกให้เหยื่อใช้ Session ID ที่ตนสร้างขึ้น เมื่อเหยื่อล็อกอินสำเร็จ ผู้โจมตีจะเข้าถึงสิทธิ์นั้นได้ทันที การเรียก session_regenerate_id(true) หลังผ่านการตรวจสอบสิทธิ์จะลบ Session ID เก่าทิ้งและสร้าง ID สุ่มใหม่ขึ้นมา ป้องกันการโจมตีนี้ได้อย่างสมบูรณ์"
        }
      ]
    },
    {
      id: "php-4",
      title: "Composer, PSR Standards (PHP-FIG) และ Modern Autoloading",
      description: "เรียนรู้ระบบนิเวศแพ็กเกจของ PHP: สถาปัตยกรรม Composer (composer.json vs composer.lock), Semantic Versioning, การทำ PSR-4 Autoloading แบบ Zero-Overhead, และมาตรฐานของกลุ่ม PHP-FIG (PSR-1, PSR-4, PSR-7, PSR-11, PSR-12)",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Composer และมาตรฐาน PSR ของกลุ่ม PHP-FIG

ก่อนปี 2012 ภาษา PHP ประสบปัญหาการจัดการไลบรารีอย่างรุนแรง โปรแกรมเมอร์ต้องดาวน์โหลดไฟล์ \`.zip\` มาแตกใส่โฟลเดอร์ และเขียน \`require_once\` ซ้ำไปซ้ำมาหลายสิบบรรทัด

การถือกำเนิดของ **Composer** (Dependency Manager) และการรวมตัวของกลุ่มผู้นำชุมชนในนาม **PHP-FIG (PHP Framework Interop Group)** เพื่อสร้างมาตรฐาน **PSR (PHP Standards Recommendations)** ได้ปฏิวัติวงการ PHP สู่มาตรฐานวิศวกรรมซอฟต์แวร์สากล

---

## 1. มาตรฐาน PSR สำคัญที่วิศวกรซอฟต์แวร์ทุกคนต้องรู้

| มาตรฐาน | ชื่อเต็ม | สาระสำคัญ |
| :--- | :--- | :--- |
| **PSR-1 & PSR-12** | Coding Style Guide | กฎการตั้งชื่อคลาส (StudlyCaps), เมธอด (camelCase), และการเว้นวรรค |
| **PSR-4** | Autoloading Standard | กฎการแมป Namespace เข้ากับโครงสร้างไดเรกทอรีของไฟล์ |
| **PSR-7 & PSR-15** | HTTP Message & Middlewares | นิยาม Interface สำหรับ Request, Response, และ HTTP Handlers |
| **PSR-11** | Container Interface | มาตรฐานกลางสำหรับ Dependency Injection Containers |
| **PSR-14** | Event Dispatcher | มาตรฐานการส่งและดักจับเหตุการณ์ (Event-Driven Architecture) |

---

## 2. กลไกการทำงานของ PSR-4 Autoloading
PSR-4 กำหนดให้ Namespace สอดคล้องกับโฟลเดอร์ในระบบไฟล์:

\`\`\`text
Namespace:  App \ Services \ PaymentService
               │       │             │
               │       ▼             ▼
Mapping:       │   /Services/  PaymentService.php
               ▼
Root Dir:    src/
               │
ผลลัพธ์ไฟล์จริง: src/Services/PaymentService.php
\`\`\`

ใน \`composer.json\`:
\`\`\`json
{
  "autoload": {
    "psr-4": {
      "App\\\\": "src/"
    }
  }
}
\`\`\`

---

## 3. ความแตกต่างระหว่าง \`composer.json\` และ \`composer.lock\`
- **\`composer.json\`:** กำหนดความต้องการแพ็กเกจและช่วงเวอร์ชันแบบยืดหยุ่น เช่น \`"guzzlehttp/guzzle": "^7.8"\` (หมายถึงเวอร์ชัน 7.8 ขึ้นไปแต่ต่ำกว่า 8.0)
- **\`composer.lock\`:** บันทึกเวอร์ชันที่แท้จริงของทุกแพ็กเกจที่ติดตั้งลงในเครื่องแบบเจาะจงระดับ Commit Hash **ต้อง Commit ไฟล์นี้เข้า Git เสมอ** เพื่อให้เพื่อนร่วมทีมและเซิร์ฟเวอร์ Production รันโค้ดบนเวอร์ชันที่เหมือนกัน 100%

---

## 4. การปรับแต่ง Autoloader เพื่อ Production
ในระหว่างการพัฒนา Composer จะค้นหาไฟล์ในดิสก์แบบ Dynamic แต่บนเซิร์ฟเวอร์ Production ให้รันคำสั่ง:
\`\`\`bash
composer dump-autoload --optimize --no-dev --classmap-authoritative
\`\`\`
คำสั่งนี้จะแปลงการค้นหาทั้งหมดเป็น **Static PHP Array (Classmap)** ทำให้การโหลดคลาสเกิดขึ้นในหน่วยความจำ RAM ทันทีโดยไม่ต้องค้นหาระบบไฟล์ดิสก์แม้แต่ครั้งเดียว`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// PSR-4 Autoloader Mechanics Simulation
// =================================================================

class Psr4ClassLoader {
    private array $prefixes = [];

    // ลงทะเบียน Prefix และโฟลเดอร์ฐาน
    public function addNamespace(string $prefix, string $baseDir): void {
        $prefix = trim($prefix, '\\') . '\\';
        $baseDir = rtrim($baseDir, DIRECTORY_SEPARATOR) . '/';
        $this->prefixes[$prefix] = $baseDir;
    }

    // เมธอดค้นหาและแปลงคลาสเป็นเส้นทางไฟล์จริง
    public function loadClass(string $className): ?string {
        foreach ($this->prefixes as $prefix => $baseDir) {
            $len = strlen($prefix);
            if (strncmp($prefix, $className, $len) !== 0) {
                continue;
            }

            // ตัด prefix ออก แล้วแปลง namespace separator (\) เป็น directory separator (/)
            $relativeClass = substr($className, $len);
            $filePath = $baseDir . str_replace('\\', '/', $relativeClass) . '.php';

            return $filePath;
        }
        return null;
    }
}

// ทดสอบการทำงานของ Autoloader
$loader = new Psr4ClassLoader();
$loader->addNamespace("App\\", "/var/www/academy/src");
$loader->addNamespace("App\\Contracts\\", "/var/www/academy/contracts");

$classesToTest = [
    "App\\Services\\StudentEnrollmentService",
    "App\\Repositories\\DatabaseUserRepository",
    "App\\Contracts\\NotificationInterface"
];

echo "=== IT Academy PSR-4 Autoloader Engine Simulation ===\n";
foreach ($classesToTest as $targetClass) {
    $resolvedPath = $loader->loadClass($targetClass);
    echo "• Resolving: {$targetClass}\n";
    echo "  -> File Path: {$resolvedPath}\n";
}
echo "✓ การแมปปิ้ง Namespace สู่โครงสร้างไฟล์สมบูรณ์ตามมาตรฐาน PSR-4\n";`,
        description: "การจำลองตรรกะการแปลง Namespace สู่เส้นทางไฟล์ตามสเปก PSR-4 Autoloading"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `resolveClassFile(string $prefix, string $baseDir, string $fullClassName): string` ที่แปลง Namespace ให้เป็น Path ไฟล์ตามหลัก PSR-4",
        startingCode: `<?php
declare(strict_types=1);

function resolveClassFile(string $prefix, string $baseDir, string $fullClassName): string {
    // TODO: ตัด prefix ออกแล้วนำ baseDir มาต่อกับ relative path + .php
    return "";
}`,
        solution: `<?php
declare(strict_types=1);

function resolveClassFile(string $prefix, string $baseDir, string $fullClassName): string {
    $relative = substr($fullClassName, strlen($prefix));
    return rtrim($baseDir, '/') . '/' . str_replace('\\', '/', $relative) . '.php';
}`
      },
      quiz: [
        {
          id: "php-4-q1",
          question: "ทำไมไฟล์ `composer.lock` จึงต้องถูกบันทึกลงในระบบ Git Version Control เสมอ?",
          options: [
            "เพื่อสำรองไฟล์ทั้งหมดในคอมพิวเตอร์",
            "เพื่อให้แน่ใจว่าทุกคนในทีมและเซิร์ฟเวอร์ทุกเครื่อง (Staging/Production) จะติดตั้ง Dependencies ทุกแพ็กเกจด้วยเวอร์ชันที่ตรงกัน 100% ป้องกันปัญหา 'Works on my machine'",
            "เพื่อป้องกันไม่ให้ผู้อื่นแก้ไขโค้ดได้",
            "เป็นข้อบังคับทางกฎหมายของสหภาพยุโรป"
          ],
          correctAnswer: 1,
          explanation: "composer.lock จะล็อกเวอร์ชันที่แท้จริงของทุกแพ็กเกจพร้อม Hash ที่ถูกทดสอบแล้ว หากไม่ commit ไฟล์นี้ เมื่อเซิร์ฟเวอร์รัน `composer install` อาจได้แพ็กเกจเวอร์ชันใหม่กว่าที่มีการเปลี่ยนแปลงจนโค้ดพังได้"
        },
        {
          id: "php-4-q2",
          question: "มาตรฐาน PSR-4 ของกลุ่ม PHP-FIG มีหน้าที่กำหนดสิ่งใดเป็นสำคัญ?",
          options: [
            "มาตรฐานการเข้ารหัสผ่านผู้ใช้",
            "มาตรฐานการจัดโครงสร้าง Namespace และการแมปเข้ากับไดเรกทอรีไฟล์ เพื่อให้ระบบ Autoloading สามารถค้นหาไฟล์คลาสได้อัตโนมัติ",
            "มาตรฐานการออกแบบหน้าตา UI ของเว็บไซต์",
            "มาตรฐานการเชื่อมต่อสายเคเบิลอินเทอร์เน็ต"
          ],
          correctAnswer: 1,
          explanation: "PSR-4 กำหนดข้อตกลงในการจับคู่ Fully Qualified Class Name (Namespace) เข้ากับโครงสร้างโฟลเดอร์ของไฟล์ .php บนระบบไฟล์ ทำให้คอมไพเลอร์และ Composer ทราบว่าจะโหลดไฟล์จากที่ใดเมื่อมีการเรียกใช้คลาส"
        },
        {
          id: "php-4-q3",
          question: "คำสั่ง `composer dump-autoload -o` (--optimize) มีบทบาทสำคัญอย่างไรเมื่อนำแอปพลิเคชันขึ้นสู่ Production?",
          options: [
            "ลบไฟล์ที่ไม่มีการใช้งานทิ้ง",
            "สร้าง Classmap แบบคงที่ (Static Classmap Array) ล่วงหน้า ทำให้ PHP ไม่ต้องเสียเวลาค้นหาไดเรกทอรีในไฟล์ซิสเต็ม ช่วยเพิ่มความเร็วในการโหลดคลาสอย่างมาก",
            "บีบอัดไฟล์ภาพทั้งหมดในเซิร์ฟเวอร์",
            "เปลี่ยนชื่อตัวแปรทั้งหมดให้เป็นตัวย่อ"
          ],
          correctAnswer: 1,
          explanation: "การเปิด optimize autoloader (-o) จะสั่งให้ Composer สแกนไฟล์ทั้งหมดแล้วสร้างไฟล์ PHP Array ที่ระบุตำแหน่งแน่นอนของทุก Class ไว้อย่างชัดเจน ทำให้ขั้นตอนการ autoload เป็นการค้นหาใน Memory ทันทีโดยไม่ต้องใช้ I/O ตรวจสอบไฟล์ในฮาร์ดดิสก์"
        }
      ]
    },
    {
      id: "php-5",
      title: "สถาปัตยกรรม MVC, Front Controller Pattern และ Custom Router",
      description: "ทำความเข้าใจสถาปัตยกรรม MVC (Model-View-Controller) ยุคใหม่, การสร้าง Front Controller ผ่าน .htaccess และ Nginx try_files, การออกแบบ Request Router ที่รองรับ Dynamic Parameters และ Middleware Pipeline",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม MVC และ Front Controller Pattern

เว็บเฟรมเวิร์กสมัยใหม่อย่าง **Laravel**, **Symfony**, และ **Yii** ล้วนมีรากฐานมาจากสถาปัตยกรรม **Front Controller** และ **MVC (Model-View-Controller)**

---

## 1. Front Controller Pattern (Single Entry Point)
ในอดีต เว็บไซต์ PHP มักเข้าถึงไฟล์แยกกันโดยตรง เช่น \`/about.php\`, \`/contact.php\` ซึ่งทำให้ยากต่อการจัดการความปลอดภัย การตรวจสอบ Session และการทำ Routing

ปัจจุบัน เว็บเซิร์ฟเวอร์ (Nginx / Apache) จะถูกตั้งค่าให้ส่งทุก Request วิ่งเข้าหา **\`public/index.php\`** เพียงไฟล์เดียว:

\`\`\`text
[ User Browser ] ─── GET /api/courses/42 ───> [ Nginx Web Server ]
                                                      │
                                           (rewrite all to index.php)
                                                      ▼
                                            [ public/index.php ] (Front Controller)
                                                      │
                                                      ├── 1. โหลด Composer Autoloader
                                                      ├── 2. โหลด Environment (.env)
                                                      ├── 3. ประมวลผล Middlewares
                                                      └── 4. Router Dispatcher
                                                              │
                                                              ▼
                                                   [ CourseController::show(42) ]
\`\`\`

- **Nginx Configuration:**
\`\`\`nginx
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
\`\`\`

---

## 2. องค์ประกอบของ MVC Architecture
- **Model:** จัดการข้อมูล, Business Logic, การเชื่อมต่อฐานข้อมูล (เช่น Eloquent หรือ PDO Repository) ไม่สนใจว่าข้อมูลจะถูกแสดงผลอย่างไร
- **View:** หน้าที่เดียวคือการนำเสนอข้อมูล (Presentation) เป็น HTML หรือแปลงเป็น JSON Payload
- **Controller:** ทำหน้าที่เป็น "วาทยกร (Orchestrator)" รับคำขอจากผู้ใช้ ตรวจสอบ Input เรียกใช้ Model และส่งผลลัพธ์ต่อไปยัง View

---

## 3. การสร้าง Regex Router ที่รองรับ Dynamic URL Parameters
การแปลงเส้นทางเช่น \`/students/{id}\` ให้กลายเป็น Regular Expression \`#^/students/(?P<id>[^/]+)$#\` เพื่อสกัดพารามิเตอร์ส่งให้ Controller Action`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Front Controller Pattern & Dynamic Regex Router
// =================================================================

class Router {
    private array $routes = [];

    // ลงทะเบียน Route
    public function addRoute(string $method, string $path, callable|array $handler): void {
        // แปลง {param} เป็น Named Regex Group: (?P<param>[^/]+)
        $pattern = preg_replace('/\{([a-zA-Z0-9_]+)\}/', '(?P<$1>[^/]+)', $path);
        $pattern = "#^" . $pattern . "$#";

        $this->routes[] = [
            'method'  => strtoupper($method),
            'pattern' => $pattern,
            'handler' => $handler
        ];
    }

    // ประมวลผลและส่งต่อคำขอ (Dispatch)
    public function dispatch(string $requestMethod, string $requestUri): void {
        $path = parse_url($requestUri, PHP_URL_PATH);

        foreach ($this->routes as $route) {
            if ($route['method'] !== strtoupper($requestMethod)) {
                continue;
            }

            if (preg_match($route['pattern'], $path, $matches)) {
                // กรองเฉพาะค่าพารามิเตอร์ที่เป็นสตริงคีย์ (ตัด index ตัวเลขทิ้ง)
                $params = array_filter($matches, fn($k) => is_string($k), ARRAY_FILTER_USE_KEY);
                
                // สั่งรัน Handler
                call_user_func($route['handler'], $params);
                return;
            }
        }

        // กรณีไม่พบ Route
        http_response_code(404);
        echo json_encode(["error" => "404 Not Found", "uri" => $path], JSON_PRETTY_PRINT);
    }
}

// ใช้งาน Router
$router = new Router();

$router->addRoute('GET', '/api/courses/{courseId}/students/{studentId}', function(array $params) {
    echo "🎯 [DISPATCHED] Controller Action Invoked!\n";
    echo "  • คอร์สเป้าหมาย   : " . $params['courseId'] . "\n";
    echo "  • รหัสนักศึกษา     : " . $params['studentId'] . "\n";
});

// จำลองการเรียก Request ผ่าน Front Controller
echo "=== IT Academy Modern Router Dispatcher ===\n";
$router->dispatch('GET', '/api/courses/PHP-801/students/STD-670101');`,
        description: "การออกแบบ Request Router ที่รองรับ Dynamic Path Parameters ด้วย Regex Matching"
      },
      challenge: {
        description: "เขียน Router method `post(string $path, callable $handler)` ที่ลงทะเบียน HTTP POST เข้าสู่ระบบ",
        startingCode: `<?php
declare(strict_types=1);

// TODO: เพิ่มเมธอด post ในคลาส Router
`,
        solution: `public function post(string $path, callable $handler): void {
    $this->addRoute('POST', $path, $handler);
}`
      },
      quiz: [
        {
          id: "php-5-q1",
          question: "หัวใจสำคัญของ Front Controller Pattern ในเว็บแอปพลิเคชัน PHP คือข้อใด?",
          options: [
            "การให้ผู้ใช้เข้าถึงไฟล์ .php ทุกไฟล์ในระบบได้โดยตรงผ่าน URL",
            "การกำหนดให้ทุก HTTP Request วิ่งผ่านไฟล์ศูนย์กลางเพียงไฟล์เดียว (เช่น index.php) เพื่อรวมศูนย์การจัดการ Routing, Security, และ Middleware",
            "การติดตั้งตัวตรวจจับสัญญาณ Wi-Fi ที่ฝั่งไคลเอนต์",
            "การบันทึกภาพหน้าจอของผู้ใช้ทุกครั้งที่กดปุ่ม"
          ],
          correctAnswer: 1,
          explanation: "Front Controller Pattern ใช้ `index.php` เป็นทางเข้าหลักทางเดียวของทั้งระบบ ช่วยให้เราสามารถดักจับและควบคุม Request, ทำ Authentication, จัดการ Error, และแจกจ่ายงานผ่าน Router ได้อย่างเป็นระเบียบและปลอดภัย"
        },
        {
          id: "php-5-q2",
          question: "ในสถาปัตยกรรม MVC หน้าที่หลักของ Controller คืออะไร?",
          options: [
            "จัดเก็บข้อมูลลงดิสก์โดยตรงโดยไม่ผ่าน Model",
            "เป็นตัวกลางรับคำขอจากผู้ใช้ ประสานงานกับ Model เพื่อดึงหรือจัดการข้อมูล แล้วส่งต่อข้อมูลให้ View นำไปเรนเดอร์",
            "ตกแต่งสีสันและเลย์เอาต์ของหน้าเว็บ",
            "ทำหน้าที่เป็นฮาร์ดแวร์เร้าเตอร์ของระบบเครือข่าย"
          ],
          correctAnswer: 1,
          explanation: "Controller ทำหน้าที่เป็น Orchestrator หรือตัวประสานงาน รับคำสั่ง ตรวจสอบความถูกต้อง ส่งต่อให้ Business Logic (Model) ประมวลผล และเลือกผลลัพธ์ (View) ที่เหมาะสมส่งกลับไปให้ไคลเอนต์"
        },
        {
          id: "php-5-q3",
          question: "การตั้งค่า Nginx ด้วยคำสั่ง `try_files $uri $uri/ /index.php?$query_string;` มีจุดประสงค์เพื่ออะไร?",
          options: [
            "เพื่อลบไฟล์ที่ไม่จำเป็นออกจากเครื่องเซิร์ฟเวอร์",
            "เพื่อตรวจสอบว่า URL นั้นมีไฟล์ Static จริงอยู่หรือไม่ (เช่น .css, .js) หากไม่มี ให้ส่งคำขอไปยัง index.php ของ Front Controller",
            "เพื่อปิดการใช้งาน PHP ชั่วคราว",
            "เพื่อเปลี่ยนพอร์ตของ Nginx ให้เป็น 443 อัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "try_files จะเช็คว่ามีไฟล์ ($uri) หรือโฟลเดอร์ ($uri/) ที่มีอยู่จริงบนเซิร์ฟเวอร์หรือไม่ หากมีก็ส่งไฟล์นั้นตรงๆ (เช่น ภาพหรือสคริปต์) หากไม่มีจะทำการ Rewrite คำขอทั้งหมดไปยัง index.php เพื่อให้ Router ของ PHP จัดการต่อ"
        }
      ]
    },
    {
      id: "php-6",
      title: "สถาปัตยกรรม Laravel 11: Service Container, Service Providers และ Eloquent ORM",
      description: "เจาะลึกโครงสร้างภายในของ Laravel 11 Framework: Inversion of Control (IoC) Service Container, Automatic Constructor Injection ผ่าน PHP Reflection, วงจรชีวิต Service Providers และการใช้งาน Eloquent ORM พร้อมแก้ปัญหา N+1 Query",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Laravel 11 Framework เชิงลึก

**Laravel** เป็นเว็บเฟรมเวิร์กภาษา PHP ที่ได้รับความนิยมสูงสุดในระดับสากล นำเสนอสถาปัตยกรรมที่สง่างาม ยืดหยุ่น และมีเครื่องมือระดับองค์กรที่สมบูรณ์แบบ

---

## 1. หัวใจของ Laravel: Inversion of Control (IoC) Service Container
Service Container เป็นสมองกลศูนย์กลางของ Laravel ที่ทำหน้าที่ **Dependency Injection (DI)** แบบอัตโนมัติ โดยใช้ **PHP Reflection API** ในการวิเคราะห์ Type Hint ของ Constructor และสร้างอ็อบเจกต์ที่จำเป็นส่งเข้ามาให้โดยอัตโนมัติ (Zero Configuration Injection)

\`\`\`text
+-------------------------------------------------------------------------+
|                  Laravel IoC Service Container Engine                   |
+-------------------------------------------------------------------------+
|  Request: ต้องการสร้าง PaymentController                                 |
|        │                                                                |
|        ▼ (Reflection Class Inspector)                                   |
|  ตรวจพบ: Constructor ต้องการ PaymentGatewayInterface                     |
|        │                                                                |
|        ▼ (Container Bindings Lookup)                                    |
|  ค้นพบ Bind: PaymentGatewayInterface => StripePaymentGateway            |
|        │                                                                |
|        ▼                                                                |
|  Instantiate: new StripePaymentGateway(apiKey: env('STRIPE_KEY'))       |
|        │                                                                |
|        ▼                                                                |
|  Inject: new PaymentController($stripeGatewayInstance)                  |
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. วงจรชีวิตของ Service Providers
Service Providers เป็นจุดเชื่อมต่อการบูตโมดูลทั้งหมดใน Laravel ประกอบด้วย 2 เมธอดหลัก:
1. **\`register()\`:** ลงทะเบียน Binding เข้าสู่ Service Container (ห้ามเรียกใช้ Service ตัวอื่นในนี้ เพราะอาจยังบูตไม่เสร็จ)
2. **\`boot()\`:** เมธอดนี้จะถูกเรียกหลังจาก Service Providers ทุกตัวผ่านขั้นตอน register เรียบร้อยแล้ว จึงสามารถเข้าถึง Service อื่นๆ ได้อย่างปลอดภัย

---

## 3. Eloquent ORM และการกำจัดปัญหา N+1 Query Problem
Eloquent ใช้รูปแบบ **Active Record Pattern** โดยแต่ละ Model จะเป็นตัวแทนของหนึ่งแถวข้อมูลในตาราง

### ข้อผิดพลาดร้ายแรง: N+1 Query Problem
\`\`\`php
// โค้ดที่ทำให้เกิด N+1 Query (ดึงวิชา 1 ครั้ง + ดึงชื่ออาจารย์แยก 100 ครั้ง = 101 Queries!)
$courses = Course::all();
foreach ($courses as $c) {
    echo $c->instructor->name; // รัน SELECT * FROM instructors WHERE id = ? ซ้ำ 100 รอบ!
}

// วิธีแก้ไข: Eager Loading ด้วย with() (รันเพียง 2 Queries เท่านั้น!)
$courses = Course::with('instructor')->get();
// Query 1: SELECT * FROM courses;
// Query 2: SELECT * FROM instructors WHERE id IN (1, 2, 3, ...);
\`\`\``,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Simulated Laravel IoC Service Container & Reflection Injection
// =================================================================

interface PaymentGateway {
    public function charge(float $amount): string;
}

class StripeGateway implements PaymentGateway {
    public function charge(float $amount): string {
        return "💳 [STRIPE] ตัดยอดเงินสำเร็จ: " . number_format($amount, 2) . " THB";
    }
}

// Service Container ขั้นต่ำ
class SimpleContainer {
    private array $bindings = [];

    public function bind(string $abstract, callable|string $concrete): void {
        $this->bindings[$abstract] = $concrete;
    }

    // แก้ไข Dependencies อัตโนมัติด้วย PHP Reflection
    public function make(string $class): object {
        $reflector = new ReflectionClass($class);
        $constructor = $reflector->getConstructor();

        if ($constructor === null) {
            return new $class();
        }

        $parameters = $constructor->getParameters();
        $dependencies = [];

        foreach ($parameters as $param) {
            $type = $param->getType();
            if ($type instanceof ReflectionNamedType && !$type->isBuiltin()) {
                $typeName = $type->getName();
                // ตรวจสอบว่ามีการ Bind ไว้หรือไม่
                if (isset($this->bindings[$typeName])) {
                    $concrete = $this->bindings[$typeName];
                    $dependencies[] = is_callable($concrete) ? $concrete($this) : $this->make($concrete);
                } else {
                    $dependencies[] = $this->make($typeName);
                }
            }
        }

        return $reflector->newInstanceArgs($dependencies);
    }
}

// Controller ที่ต้องการ Dependency
class CheckoutController {
    public function __construct(private PaymentGateway $gateway) {}

    public function processCheckout(float $amount): void {
        echo "🛒 สรุปรายการคำสั่งซื้อ:\n";
        echo "  " . $this->gateway->charge($amount) . "\n";
    }
}

// ทดสอบระบบ Dependency Injection
$container = new SimpleContainer();
$container->bind(PaymentGateway::class, StripeGateway::class);

// IoC Container สร้าง CheckoutController พร้อมฉีด StripeGateway ให้อัตโนมัติ!
$checkout = $container->make(CheckoutController::class);
$checkout->processCheckout(2490.00);`,
        description: "การจำลองกลไกการทำงานของ Inversion of Control (IoC) Container ด้วย Reflection ใน Laravel"
      },
      challenge: {
        description: "เขียนโค้ด Eloquent Query ที่ดึงข้อมูล Model `Student` พร้อม Eager Load ความสัมพันธ์ 'courses' และ 'grades' โดยคัดกรองเฉพาะสถานะ status = 'ACTIVE'",
        startingCode: `// TODO: เขียน Eloquent query พร้อม Eager Loading
`,
        solution: `// Solution:
// $students = Student::with(['courses', 'grades'])
//     ->where('status', 'ACTIVE')
//     ->get();`
      },
      quiz: [
        {
          id: "php-6-q1",
          question: "กลไก Inversion of Control (IoC) Service Container ใน Laravel ทำงานแก้ไข Dependency อัตโนมัติได้อย่างไร?",
          options: [
            "สุ่มเดาชนิดข้อมูลจากชื่อตัวแปร",
            "ใช้ PHP Reflection API ตรวจสอบ Type Hints ใน Constructor ของคลาส แล้วดึงอ็อบเจกต์ที่สอดคล้องกันจาก Container มาฉีด (Inject) ให้อัตโนมัติ",
            "ต้องประกาศตัวแปรเป็น global เสมอ",
            "อ่านข้อมูลจากคุกกี้ของผู้ใช้งาน"
          ],
          correctAnswer: 1,
          explanation: "Laravel ใช้ PHP Reflection API เพื่อตรวจสอบ Signature ของ Constructor หากพารามิเตอร์ต้องการ Interface หรือ Class ใด ตัว Container จะค้นหาว่ามี Binding หรือสามารถสร้าง Class นั้นได้หรือไม่ แล้วส่ง Instance เข้ามาให้โดยอัตโนมัติ"
        },
        {
          id: "php-6-q2",
          question: "ปัญหา N+1 Query Problem ใน Eloquent ORM เกิดขึ้นจากสาเหตุใด และแก้ไขได้อย่างไร?",
          options: [
            "เกิดจากฮาร์ดดิสก์เต็ม แก้ไขโดยการซื้อแรมเพิ่ม",
            "เกิดจากการวนลูปอ่านความสัมพันธ์แบบ Lazy Loading ทำให้ต้องส่ง Query ไปยังฐานข้อมูล N ครั้ง แก้ไขโดยการทำ Eager Loading ด้วยคำสั่ง with()",
            "เกิดจากการเขียนชื่อคลาสผิด แก้ไขโดยการเปลี่ยนชื่อตาราง",
            "เกิดจากการปิดเครื่องเซิร์ฟเวอร์ขณะทำงาน"
          ],
          correctAnswer: 1,
          explanation: "Lazy Loading จะส่ง Query เพิ่มอีก 1 ครั้งต่อแถวข้อมูลทุกแถวในลูป (N ครั้ง) เมื่อรวมกับ Query หลัก 1 ครั้งจึงกลายเป็น N+1 Queries การใช้ Eager Loading ด้วย `with('relation')` จะรวบรวม Foreign Keys ทั้งหมดแล้วส่งคำสั่ง `WHERE IN (...)` เพียงครั้งเดียว ทำให้เหลือเพียง 2 Queries"
        },
        {
          id: "php-6-q3",
          question: "ใน Service Provider ของ Laravel ความแตกต่างระหว่างเมธอด `register()` และ `boot()` คือข้อใด?",
          options: [
            "register() ทำงานหลังสุด ส่วน boot() ทำงานก่อนสุด",
            "register() ใช้เฉพาะสำหรับผูก Dependency เข้ากับ Container ส่วน boot() จะถูกเรียกหลังจาก Providers ทุกตัวลงทะเบียนเสร็จสิ้นแล้ว จึงปลอดภัยสำหรับการเรียกใช้ Service อื่น",
            "register() ใช้สำหรับลงทะเบียนผู้ใช้งานใหม่ ส่วน boot() ใช้เปิดเครื่องคอมพิวเตอร์",
            "ทั้งคู่ทำงานสลับกันแบบสุ่ม"
          ],
          correctAnswer: 1,
          explanation: "กฎของ Laravel คือ ใน register() ห้ามเรียกใช้ Service หรือ Event อื่น เพราะ Service Providers ตัวอื่นอาจยังไม่ได้ register แต่ใน boot() ระบบได้รับประกันว่าทุก Service ถูก bind เรียบร้อยแล้ว จึงสามารถผูก Event Listeners หรือเรียกใช้ Service ใดๆ ได้อย่างปลอดภัย"
        }
      ]
    },
    {
      id: "php-7",
      title: "Enterprise RESTful API Development: JSON Resources และ Token Authentication",
      description: "ออกแบบ RESTful API มาตรฐานสากล: การจัดการ HTTP Status Codes อย่างถูกต้อง (200, 201, 204, 400, 401, 403, 404, 422), การแปลงข้อมูลด้วย API Resource Transformers, และการรักษาความปลอดภัยด้วย Stateless Bearer Tokens",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# การพัฒนา Enterprise RESTful API ในภาษา PHP

การพัฒนา API ระดับองค์กรต้องการมากกว่าแค่การส่งออก \`json_encode()\` แต่ต้องมี **สัญญาระหว่างระบบ (API Contract)** ที่ชัดเจน ปฏิบัติตามมาตรฐาน **REST Constraints** และมีระบบ **Stateless Authentication**

---

## 1. มาตรฐาน HTTP Status Codes ที่ต้องใช้อย่างถูกต้อง

| Status Code | ความหมาย | กรณีการใช้งานที่ถูกต้อง |
| :--- | :--- | :--- |
| **200 OK** | สำเร็จ | คืนผลลัพธ์การสืบค้น (GET) หรืออัปเดตข้อมูล (PUT/PATCH) |
| **201 Created** | สร้างทรัพยากรใหม่สำเร็จ | สร้างข้อมูลใหม่สำเร็จ (POST) ควรมี Header \`Location\` |
| **204 No Content** | สำเร็จโดยไม่มีเนื้อหาตอบกลับ | ลบข้อมูลสำเร็จ (DELETE) |
| **400 Bad Request** | คำขอมีรูปแบบไม่ถูกต้อง | โครงสร้าง JSON เสียหาย หรือ Syntax ผิด |
| **401 Unauthorized** | ไม่พบข้อมูลยืนยันตัวตน | ไม่ได้ส่ง Token หรือ Token หมดอายุ |
| **403 Forbidden** | มีตัวตนแต่ไม่มีสิทธิ์เข้าถึง | นักศึกษาพยายามเข้าถึง API ของผู้ดูแลระบบ |
| **404 Not Found** | ไม่พบทรัพยากร | ID ข้อมูลที่ระบุไม่มีอยู่ในระบบ |
| **422 Unprocessable Content** | ข้อมูลผิดกฎ Validation | ข้อมูล JSON ถูกต้องแต่อีเมลซ้ำ หรือรหัสผ่านสั้นเกินไป |

---

## 2. API Resource Transformer Pattern
ห้ามส่งข้อมูลจาก Database Model ออกไปหา Client โดยตรงเด็ดขาด เพราะอาจทำให้ฟิลด์ที่เป็นความลับ (เช่น \`password_hash\`, \`internal_note\`) หลุดรอดออกไปได้

การใช้ **API Resource** ทำหน้าที่เป็นตัวแปลงข้อมูล (Data Transformation Layer):
\`\`\`php
class StudentResource {
    public function __construct(private Student $student) {}

    public function toArray(): array {
        return [
            'id' => $this->student->id,
            'full_name' => $this->student->name,
            'gpa' => number_format($this->student->gpa, 2),
            'links' => [
                'self' => "/api/v1/students/{$this->student->id}"
            ]
        ];
    }
}
\`\`\`

---

## 3. Stateless Token Authentication (Bearer Token)
ในสถาปัตยกรรม REST API เซิร์ฟเวอร์ต้องเป็น **Stateless** (ไม่มี PHP Session เก็บที่เซิร์ฟเวอร์):
1. ผู้ใช้ส่ง Username/Password ขอรับ Token
2. เซิร์ฟเวอร์สร้าง Token แบบสุ่มที่มีการเข้ารหัส (เช่น Personal Access Token หรือ JWT) แล้วบันทึก Hash ลงฐานข้อมูล
3. ทุก Request ถัดไป ไคลเอนต์ต้องส่ง Header: \`Authorization: Bearer <token>\``,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// RESTful API Response Normalizer & Token Authenticator
// =================================================================

class ApiResponse {
    public static function send(int $status, string $message, mixed $data = null, array $errors = []): void {
        http_response_code($status);
        header('Content-Type: application/json; charset=utf-8');

        $payload = [
            'success'   => $status >= 200 && $status < 300,
            'code'      => $status,
            'message'   => $message,
            'data'      => $data,
            'errors'    => empty($errors) ? null : $errors,
            'timestamp' => time()
        ];

        echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
    }
}

// จำลองการตรวจสอบ Bearer Token ใน HTTP Header
function authenticateBearerToken(string $authHeader): ?array {
    if (!str_starts_with($authHeader, 'Bearer ')) {
        return null;
    }

    $token = substr($authHeader, 7);

    // จำลองการค้นหา Token ใน Database Vault
    if ($token === "itacademy_sec_token_998822") {
        return [
            'user_id' => "USR-101",
            'username' => "somchai.dev",
            'role' => "STUDENT"
        ];
    }

    return null;
}

// ทดสอบจำลองคำขอ API
echo "=== IT Academy RESTful API Engine Demo ===\n\n";

// 1. กรณีสำเร็จ
$mockHeader = "Bearer itacademy_sec_token_998822";
$currentUser = authenticateBearerToken($mockHeader);

if ($currentUser !== null) {
    ApiResponse::send(
        status: 200,
        message: "ดึงข้อมูลส่วนตัวสำเร็จ",
        data: [
            'student_id' => $currentUser['user_id'],
            'name'       => "สมชาย ใจดี",
            'role'       => $currentUser['role'],
            'courses'    => ["PHP-801", "GOLANG-901"]
        ]
    );
}

// 2. กรณีข้อมูลไม่ถูกต้อง (Validation Error 422)
echo "\n--- จำลองกรณี Validation Error ---\n";
ApiResponse::send(
    status: 422,
    message: "ข้อมูลที่ส่งมาไม่ถูกต้องตามเงื่อนไข",
    errors: [
        'email' => ["รูปแบบอีเมลไม่ถูกต้องตามมาตรฐาน RFC 5322"],
        'password' => ["รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร"]
    ]
);`,
        description: "สถาปัตยกรรม RESTful API Response Wrapper และการตรวจสอบสิทธิ์ Bearer Token"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `responseCreated(mixed $data): void` โดยใช้ `ApiResponse::send` เพื่อส่งสถานะ HTTP 201 Created พร้อมข้อความ 'Resource created successfully'",
        startingCode: `function responseCreated(mixed $data): void {
    // TODO: ส่งค่า 201 Created
}`,
        solution: `function responseCreated(mixed $data): void {
    ApiResponse::send(201, "Resource created successfully", $data);
}`
      },
      quiz: [
        {
          id: "php-7-q1",
          question: "เมื่อเกิดข้อผิดพลาดในการตรวจสอบข้อมูลนำเข้าจากผู้ใช้ (Validation Error เช่น ลืมกรอกชื่อหรืออีเมลซ้ำ) ตามมาตรฐาน RESTful API ควรตอบกลับด้วย HTTP Status Code ใด?",
          options: [
            "200 OK",
            "404 Not Found",
            "422 Unprocessable Content (หรือ 400 Bad Request)",
            "500 Internal Server Error"
          ],
          correctAnswer: 2,
          explanation: "HTTP Status 422 Unprocessable Content เป็นมาตรฐานที่ใช้ระบุว่าคำขอนั้นมีไวยากรณ์ถูกต้อง (ส่งเป็น JSON ถูกต้อง) แต่ข้อมูลภายในไม่ผ่านกฎเงื่อนไขทางธุรกิจ (Validation Failure)"
        },
        {
          id: "php-7-q2",
          question: "เหตุใดในสถาปัตยกรรม RESTful API จึงไม่ควรใช้ PHP Native Session (`$_SESSION`) ในการยืนยันตัวตน?",
          options: [
            "เพราะ REST API ยึดหลักการ Stateless Constraint โดยเซิร์ฟเวอร์ต้องไม่เก็บสถานะของไคลเอนต์ไว้ในหน่วยความจำ เพื่อให้สามารถขยายระบบแบบ Horizontal Scaling ได้อย่างอิสระ",
            "เพราะ $_SESSION ทำให้ขนาดของไฟล์ฐานข้อมูลเสียหาย",
            "เพราะเบราว์เซอร์ไม่รองรับ $_SESSION",
            "เพราะทำให้เครื่องคอมพิวเตอร์ร้อนเกินไป"
          ],
          correctAnswer: 0,
          explanation: "ข้อกำหนดสำคัญของ REST คือ 'Stateless' เซิร์ฟเวอร์ต้องไม่เก็บ Session ไคลเอนต์ต้องส่ง Token มาในทุกคำขอ (เช่น ผ่าน Authorization Header) ทำให้เซิร์ฟเวอร์ฝั่ง Backend สามารถเพิ่มจำนวนเป็นร้อยเครื่องผ่าน Load Balancer ได้โดยไม่ต้องแชร์ Session Memory ระหว่างกัน"
        },
        {
          id: "php-7-q3",
          question: "จุดประสงค์หลักของการใช้ API Resource Transformer (เช่น JsonResource ใน Laravel) คืออะไร?",
          options: [
            "แปลงโค้ด PHP ให้เป็นภาษา Assembly",
            "ทำหน้าที่เป็นชั้นคัดกรองและจัดรูปแบบข้อมูล เพื่อแยกโครงสร้างของตารางฐานข้อมูลออกจากข้อมูลที่เปิดเผยสู่ภายนอก และป้องกันข้อมูลลับรั่วไหล",
            "ช่วยเพิ่มความเร็วอินเทอร์เน็ตของเครื่องผู้ใช้",
            "ลบรูปภาพทั้งหมดในเซิร์ฟเวอร์ทิ้ง"
          ],
          correctAnswer: 1,
          explanation: "Data Transformer ทำหน้าที่ตัดขาดความผูกพันระหว่าง Database Schema กับ API Contract ทำให้เราสามารถเปลี่ยนชื่อคอลัมน์ใน DB ได้โดยไม่กระทบ API ภายนอก และป้องกันข้อมูลที่เป็นความลับ เช่น password_hash ไม่ให้หลุดรอดออกไปใน JSON"
        }
      ]
    },
    {
      id: "php-8",
      title: "การเพิ่มประสิทธิภาพระดับสูง: OPcache Preloading, Redis Caching และ Asynchronous Queues",
      description: "ปลดล็อกความเร็วสูงสุดของ PHP: สถาปัตยกรรม Shared-Nothing, การปรับแต่ง OPcache และ OPcache Preloading ใน PHP 8+, การทำ Cache-Aside ด้วย Redis, การจัดการงานหนักเบื้องหลังด้วย Background Queues และวิวัฒนาการสู่ Persistent Runtimes (Swoole / RoadRunner)",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# การปรับแต่งประสิทธิภาพระดับสูงใน PHP

ปรัชญาดั้งเดิมของ PHP คือ **Shared-Nothing Architecture** — ในแต่ละ Request รันไทม์จะเริ่มต้นใหม่ จองหน่วยความจำ ประมวลผลคำขอ ส่งผลลัพธ์ แล้วทำลายหน่วยความจำทิ้งทั้งหมด (Zero Memory Leak across Requests)

แม้สถาปัตยกรรมนี้จะทำให้ PHP มีความเสถียรสูงมาก แต่ก็มีค่าใช้จ่ายในการบูตระบบซ้ำๆ ในบทเรียนนี้ เราจะเรียนรู้เทคนิคการเพิ่มประสิทธิภาพระดับวิศวกรรมขั้นสูง

---

## 1. OPcache Preloading (PHP 7.4+)
แทนที่จะต้องรอให้ Request แรกเข้ามาอ่านไฟล์ **OPcache Preloading** อนุญาตให้เรากำหนดสคริปต์บูตระบบ (เช่น \`preload.php\`) ที่จะคอมไพล์ Framework, Routing, และ Core Classes ทั้งหมดเข้าสู่หน่วยความจำของเซิร์ฟเวอร์ล่วงหน้าตั้งแต่ตอนที่ **PHP-FPM เริ่มสตาร์ท**:

\`\`\`ini
; php.ini configuration for Production
opcache.enable=1
opcache.memory_consumption=256
opcache.max_accelerated_files=20000
opcache.validate_timestamps=0 ; ปิดการตรวจเช็คไฟล์ซ้ำในโปรดักชัน
opcache.preload=/var/www/academy/preload.php
opcache.preload_user=www-data
\`\`\`

---

## 2. In-Memory Caching ด้วย Redis (Cache-Aside Pattern)
ลดภาระงานของฐานข้อมูลด้วยการเก็บข้อมูลที่มีการอ่านซ้ำบ่อยใน Redis:

\`\`\`text
App Request ──> ค้นหาใน Redis In-Memory Cache
                     │
         ┌───────────┴───────────┐
         ▼ [Cache Hit]           ▼ [Cache Miss]
     คืนข้อมูลทันที             Query จาก MySQL ──> บันทึกลง Redis พร้อม TTL
\`\`\`

---

## 3. Asynchronous Background Jobs และ Queue Workers
งานใดก็ตามที่ใช้เวลาเกิน 100 มิลลิวินาที (เช่น การส่งอีเมลยืนยัน, การสร้างไฟล์ PDF รายงาน, การส่ง Webhook) **ห้ามรันใน HTTP Request โดยตรงเด็ดขาด!**

ให้ผลักงานนั้นเข้าสู่ **Message Queue (Redis / RabbitMQ / Amazon SQS)** แล้วส่ง HTTP 202 Accepted กลับไปให้ผู้ใช้ทันที จากนั้นให้มี **Background Queue Worker** ดึงงานไปรันในเบื้องหลัง

---

## 4. ยุคใหม่ของ Persistent PHP: RoadRunner และ Swoole
เฟรมเวิร์กสมัยใหม่กำลังก้าวข้าม PHP-FPM แบบเดิม ไปสู่ **Event-Driven Coroutine Runtimes** (เช่น RoadRunner ที่เขียนด้วย Go หรือ Swoole ที่เขียนด้วย C++):
- รัน Worker ค้างไว้ในหน่วยความจำ RAM ตลอดเวลาเหมือน Node.js หรือ Go
- บูต Framework เพียงครั้งเดียวตอนเริ่ม Process
- สามารถรองรับโหลดระดับ **100,000+ Requests ต่อวินาที** ได้อย่างสบาย!`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Cache-Aside Pattern with Redis & Background Job Dispatcher
// =================================================================

class RedisCacheManager {
    private static array $inMemoryStore = [];

    // ดึงข้อมูลจากแคช หากไม่มีจะเรียก Callback ไปดึงจากฐานข้อมูล
    public static function remember(string $key, int $ttlSeconds, callable $dataRetriever): mixed {
        if (isset(self::$inMemoryStore[$key])) {
            $entry = self::$inMemoryStore[$key];
            if (time() < $entry['expires_at']) {
                echo "⚡ [REDIS CACHE HIT] โหลดข้อมูลจาก In-Memory ทันที (Key: '{$key}')\n";
                return $entry['value'];
            }
        }

        echo "⏳ [CACHE MISS] ดึงข้อมูลจากฐานข้อมูลหลัก และบันทึกลง Redis...\n";
        $freshData = $dataRetriever();

        self::$inMemoryStore[$key] = [
            'value' => $freshData,
            'expires_at' => time() + $ttlSeconds
        ];

        return $freshData;
    }
}

// จำลองการผลักงานเข้า Background Queue
class QueueDispatcher {
    public static function dispatch(string $jobName, array $payload): void {
        echo "🚀 [QUEUE DISPATCH] ส่งงาน '{$jobName}' เข้าสู่ Redis Queue เรียบร้อย (Non-blocking)\n";
        echo "   -> Payload: " . json_encode($payload, JSON_UNESCAPED_UNICODE) . "\n";
    }
}

// ทดสอบรันการทำงาน
echo "=== IT Academy High-Performance Optimization Engine ===\n\n";

// 1. ทดสอบ Cache Aside
$fetchDashboard = function() {
    // จำลองคำสั่ง SQL ที่กินเวลา
    usleep(50000); // 50ms
    return ["total_active_students" => 3840, "total_revenue" => 4850000];
};

$data1 = RedisCacheManager::remember("dashboard_metrics", 60, $fetchDashboard);
$data2 = RedisCacheManager::remember("dashboard_metrics", 60, $fetchDashboard);

// 2. ทดสอบการส่งงานเบื้องหลัง
echo "\n--- การจัดการงานที่ใช้เวลานานด้วย Asynchronous Queue ---\n";
QueueDispatcher::dispatch("GenerateAcademicTranscriptPdf", [
    'student_id' => "STD-670101",
    'target_email' => "student@academy.edu",
    'format' => "PDF_A3"
]);

echo "✅ เซิร์ฟเวอร์ตอบกลับผู้ใช้ทันทีในเวลาไม่กี่มิลลิวินาที โดยไม่ต้องรอสร้าง PDF เสร็จ!\n";`,
        description: "การประยุกต์ใช้ Cache-Aside Pattern ร่วมกับ Redis และการกระจายงานด้วย Background Queues"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `dispatchEmailJob(string $to, string $subject)` ที่จำลองการส่งข้อมูลงานเข้าคิวโดยพิมพ์ข้อความ 'Queued email to: [email]'",
        startingCode: `function dispatchEmailJob(string $to, string $subject): void {
    // TODO: ส่งงานเข้าคิว
}`,
        solution: `function dispatchEmailJob(string $to, string $subject): void {
    echo "Queued email to: " . $to;
}`
      },
      quiz: [
        {
          id: "php-8-q1",
          question: "ฟีเจอร์ OPcache Preloading ใน PHP มีการทำงานอย่างไรที่ช่วยเพิ่มประสิทธิภาพของระบบ?",
          options: [
            "ทำการดาวน์โหลดรูปภาพทั้งหมดในอินเทอร์เน็ตมาเก็บไว้ในเครื่อง",
            "คอมไพล์ซอร์สโค้ดของ Framework และคลาสหลักทั้งหมดเข้าสู่หน่วยความจำของเซิร์ฟเวอร์ล่วงหน้าตั้งแต่ตอนบูตเครื่อง ทำให้ทุก Request ไม่ต้องคอมไพล์โค้ดเหล่านั้นซ้ำอีกเลย",
            "ลบฐานข้อมูลที่ไม่จำเป็นออกไป",
            "ส่งข้อความแจ้งเตือนเข้าสมาร์ตโฟนของผู้ดูแลระบบ"
          ],
          correctAnswer: 1,
          explanation: "OPcache Preloading จะรันสคริปต์ที่กำหนดไว้เมื่อ PHP-FPM เริ่มสตาร์ท โดยจะโหลด Class, Interface, Trait ต่างๆ เข้าสู่หน่วยความจำถาวรของ Process ทำให้พร้อมใช้งานสำหรับทุก Request ในทันที ลดเวลาการรันโค้ดลงอย่างมีนัยสำคัญ"
        },
        {
          id: "php-8-q2",
          question: "ทำไมงานประเภทการส่งอีเมลหรือการออกรายงาน PDF ขนาดใหญ่ จึงไม่ควรประมวลผลภายใน HTTP Request Cycle โดยตรง?",
          options: [
            "เพราะจะทำให้เซิร์ฟเวอร์เกิดไฟฟ้าลัดวงจร",
            "เพราะงานเหล่านี้ใช้เวลาประมวลผลนาน (I/O-heavy) จะทำให้ผู้ใช้ต้องรอหน้าเว็บโหลดนาน และอาจทำให้ PHP Worker เต็มจนไม่สามารถรับผู้ใช้คนอื่นได้ ควรส่งเข้า Background Queue แทน",
            "เพราะ PHP ไม่สามารถส่งอีเมลได้",
            "เพราะโปรโตคอล HTTP ห้ามส่งข้อมูลเกิน 10 ตัวอักษร"
          ],
          correctAnswer: 1,
          explanation: "HTTP Request ควรตอบกลับให้เร็วที่สุด (ต่ำกว่า 100-200ms) หากรันงานหนักใน Request จะบล็อก Worker Process นั้นไว้ ทำให้ระบบไม่สามารถรองรับ Concurrent Requests อื่นๆ ได้ การผลักงานลง Message Queue ช่วยรักษาความเร็วของเว็บได้ดีที่สุด"
        },
        {
          id: "php-8-q3",
          question: "เทคโนโลยีอย่าง RoadRunner หรือ Swoole เข้ามาปฏิวัติวงการรันไทม์ของ PHP อย่างไร?",
          options: [
            "เปลี่ยนให้ PHP รันในแบบ Persistent Long-Running Process ที่ค้างอยู่ในหน่วยความจำตลอดเวลา คล้ายกับ Node.js หรือ Go ข้ามขั้นตอนการบูตและทำลาย Process ทิ้งในทุก Request",
            "บังคับให้ทุกแอปพลิเคชันต้องเขียนด้วยภาษา Python",
            "ปิดการใช้งานแรมแล้วหันไปใช้ดิสก์แทน",
            "ลบไฟล์คอนฟิก php.ini ออกจากระบบ"
          ],
          correctAnswer: 0,
          explanation: "RoadRunner และ Swoole เปลี่ยน PHP จากแบบเดิม (บูตแล้วตายในทุก Request) ให้กลายเป็น Persistent Application Process ที่บูต Framework เพียงครั้งเดียวแล้วรันรองรับ Request นับหมื่นรอบผ่าน Coroutines / Worker Threads ทำให้มีความเร็วเทียบเคียง Go และ Node.js"
        }
      ]
    },
    {
      id: "php-9",
      title: "โปรเจกต์ Enterprise Student Management RESTful API ด้วย PHP 8.3 & MySQL",
      description: "โปรเจกต์รวบยอดระดับโปรดักชัน: พัฒนา RESTful Micro-Framework และ Student Management API ครบวงจรด้วย PHP 8.3: Clean Architecture, PDO Connection Wrapper, Custom Validation Engine, Global Exception Handler และ RFC 7807 Problem Details Specification",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise PHP: Student Academic Management API

ในบทเรียนสุดท้ายนี้ เราจะผสานองค์ความรู้ทั้งหมด ทั้ง **PHP 8.3 Strict Types, OOP ขั้นสูง, Readonly Classes, Enums, PDO Prepared Statements, Error Handling, และ RESTful Architecture** มาสร้างเป็น **Enterprise Academic Management API**

---

## 1. ผังสถาปัตยกรรมระดับองค์กร (Architecture Topology)

\`\`\`text
[ Client HTTP Request ]
          │
          ▼
[ public/index.php ] (Front Controller)
          │
          ├── [ Exception Handling Middleware (RFC 7807 Problem Details) ]
          │
          ▼
[ AcademicController ]
          │
          ├── [ DTO Validator Engine ] ──> ตรวจสอบ Format และความถูกต้อง
          │
          ▼
[ StudentRepository ] ──(PDO Native Prepared Statements)──> [ MySQL Database ]
\`\`\`

---

## 2. มาตรฐาน RFC 7807 (Problem Details for HTTP APIs)
ระบบ API ระดับสากลจะไม่ส่ง Error Message แบบตามใจชอบ แต่จะใช้มาตรฐาน **RFC 7807 (Problem Details)**:
\`\`\`json
{
  "type": "https://api.itacademy.dev/errors/validation-failed",
  "title": "Unprocessable Entity",
  "status": 422,
  "detail": "รหัสนักศึกษาหรืออีเมลไม่ถูกต้องตามเกณฑ์",
  "instance": "/api/v1/students",
  "invalid_params": [
    { "name": "email", "reason": "รูปแบบอีเมลไม่ถูกต้อง" }
  ]
}
\`\`\``,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Enterprise Project: Student Academic Management API Engine
// =================================================================

// 1. Backed Enum สำหรับสถานะทางวิชาการ
enum StudentStatus: string {
    case Active = "ACTIVE";
    case Graduated = "GRADUATED";
    case Suspended = "SUSPENDED";
}

// 2. Data Transfer Object (DTO) แบบ Readonly Class
readonly class CreateStudentDTO {
    public function __construct(
        public string $fullName,
        public string $email,
        public string $department,
        public float $gpa
    ) {
        if (mb_strlen($fullName) < 3) {
            throw new InvalidArgumentException("ชื่อ-สกุลต้องมีความยาวอย่างน้อย 3 ตัวอักษร");
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException("รูปแบบอีเมลไม่ถูกต้องตามมาตรฐาน");
        }
        if ($gpa < 0.0 || $gpa > 4.0) {
            throw new InvalidArgumentException("เกรดเฉลี่ยต้องอยู่ระหว่าง 0.00 ถึง 4.00");
        }
    }
}

// 3. Service Layer
class AcademicManagementService {
    public function registerNewStudent(CreateStudentDTO $dto): array {
        // สร้างรหัสนักศึกษาตามปี พ.ศ. ปัจจุบัน
        $generatedId = "STD-" . date("y") . rand(1000, 9999);

        // จำลองการบันทึกข้อมูลลงฐานข้อมูลผ่าน PDO Prepared Statements
        $record = [
            'id'          => $generatedId,
            'name'        => htmlspecialchars($dto->fullName, ENT_QUOTES, 'UTF-8'),
            'email'       => $dto->email,
            'department'  => $dto->department,
            'gpa'         => number_format($dto->gpa, 2),
            'status'      => StudentStatus::Active->value,
            'created_at'  => (new DateTimeImmutable())->format("Y-m-d H:i:s")
        ];

        return $record;
    }
}

// 4. Controller Layer
class ApiStudentController {
    public function __construct(private AcademicManagementService $service) {}

    public function handleRegistration(array $requestBody): void {
        header('Content-Type: application/json; charset=utf-8');

        try {
            $dto = new CreateStudentDTO(
                fullName: (string)($requestBody['name'] ?? ''),
                email: (string)($requestBody['email'] ?? ''),
                department: (string)($requestBody['department'] ?? 'Information Technology'),
                gpa: (float)($requestBody['gpa'] ?? 0.0)
            );

            $result = $this->service->registerNewStudent($dto);

            http_response_code(201);
            echo json_encode([
                'success' => true,
                'status'  => 201,
                'message' => "ลงทะเบียนนักศึกษาใหม่เรียบร้อยแล้ว",
                'data'    => $result
            ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";

        } catch (InvalidArgumentException $e) {
            // ส่งออก Error ตามมาตรฐาน RFC 7807
            http_response_code(422);
            echo json_encode([
                'type'    => "https://itacademy.dev/errors/validation-failed",
                'title'   => "Validation Failed",
                'status'  => 422,
                'detail'  => $e->getMessage()
            ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "\n";
        }
    }
}

// ทดสอบรันโปรเจกต์
echo "=== IT Academy Enterprise RESTful API Execution ===\n\n";

$service = new AcademicManagementService();
$controller = new ApiStudentController($service);

// กรณีที่ 1: ข้อมูลถูกต้องสมบูรณ์ (201 Created)
echo "--- ทดสอบกรณีที่ 1: บันทึกข้อมูลถูกต้อง ---\n";
$controller->handleRegistration([
    'name'       => "กานดา สุขเกษม",
    'email'      => "kanda.s@academy.edu",
    'department' => "Computer Science & Engineering",
    'gpa'        => 3.92
]);

// กรณีที่ 2: ข้อมูลไม่ผ่านเกณฑ์ (422 Validation Error)
echo "\n--- ทดสอบกรณีที่ 2: ข้อมูลผิดพลาด ---\n";
$controller->handleRegistration([
    'name'       => "ก",
    'email'      => "invalid-email-format",
    'gpa'        => 5.50
]);`,
        description: "สถาปัตยกรรม RESTful API บริหารงานทะเบียนนักศึกษาด้วย PHP 8.3 ระดับองค์กร"
      },
      challenge: {
        description: "ขยาย Class `AcademicManagementService` ให้มีเมธอด `updateStatus(string $studentId, StudentStatus $newStatus): bool` สำหรับอัปเดตสถานะนักศึกษา",
        startingCode: `// TODO: เขียนเมธอด updateStatus
`,
        solution: `// Solution:
// public function updateStatus(string $studentId, StudentStatus $newStatus): bool {
//     // จำลองการอัปเดตสถานะ
//     return true;
// }`
      },
      quiz: [
        {
          id: "php-9-q1",
          question: "มาตรฐาน RFC 7807 (Problem Details for HTTP APIs) มีบทบาทสำคัญอย่างไรต่อการพัฒนา API ระดับองค์กร?",
          options: [
            "บังคับให้ทุก API ต้องเขียนด้วยภาษา PHP เท่านั้น",
            "กำหนดโครงสร้างมาตรฐานที่เป็นสากลสำหรับส่งรายงานข้อผิดพลาด (เช่น type, title, status, detail) ทำให้ Client ต่างภาษาและต่างระบบสามารถ Parse และจัดการ Error ได้อย่างถูกต้องตรงกัน",
            "ใช้สำหรับบีบอัดข้อมูลรูปภาพ",
            "ปิดการทำงานของระบบความปลอดภัยทั้งหมด"
          ],
          correctAnswer: 1,
          explanation: "RFC 7807 กำหนดฟอร์แมต JSON มาตรฐานสำหรับส่งข้อมูลปัญหา (Problem Details) เช่น status code, คำอธิบายปัญหา, URI ชนิดของปัญหา เพื่อให้ผู้ใช้งาน API สามารถเขียนโปรแกรมดักจับและแก้ไขข้อผิดพลาดได้อย่างมีมาตรฐานเดียวกัน"
        },
        {
          id: "php-9-q2",
          question: "การใช้ Data Transfer Object (DTO) ที่เป็น Readonly Class ในการรับข้อมูลจาก Controller ช่วยส่งเสริมระบบอย่างไร?",
          options: [
            "ทำให้โปรแกรมรันได้โดยไม่ต้องใช้ระบบปฏิบัติการ",
            "รวบรวมการตรวจสอบ Validation ขั้นต้น (Type & Constraint Checks) ไว้ตั้งแต่การสร้างอ็อบเจกต์ และรับประกันความมั่นคงของข้อมูล (Immutability) ไม่ให้ถูกแก้ไขระหว่างส่งต่อไปยัง Service Layer",
            "ช่วยเพิ่มความเร็วอินเทอร์เน็ต",
            "ลดขนาดของฐานข้อมูลลง 50%"
          ],
          correctAnswer: 1,
          explanation: "Readonly DTO บังคับให้ข้อมูลที่ผ่านเข้ามาต้องถูกต้องตาม Type และ Business Constraints ตั้งแต่วินาทีแรกที่สร้างอ็อบเจกต์ (Fail Fast) และไม่สามารถถูกแก้ไขค่าระหว่างทางได้ ทำให้โค้ดมีความปลอดภัยและคาดเดาพฤติกรรมได้ง่าย"
        },
        {
          id: "php-9-q3",
          question: "ในสถาปัตยกรรม Clean Architecture / Layered Architecture หน้าที่ของ Repository Layer คืออะไร?",
          options: [
            "สร้างหน้าตาเว็บไซต์ HTML",
            "ทำหน้าที่เป็นตัวกลางในการเข้าถึงและจัดเก็บข้อมูล (Data Access) โดยแยกตรรกะของ SQL หรือฐานข้อมูลออกจาก Business Logic ของ Service Layer",
            "ทำหน้าที่แทนเราเตอร์ของระบบเครือข่าย",
            "ส่งข้อความเตือนไปยังผู้ดูแลระบบ"
          ],
          correctAnswer: 1,
          explanation: "Repository Layer ทำหน้าที่เป็นตัวคั่นกลางระหว่าง Business Logic และ Database ซึ่งซ่อนคำสั่ง SQL หรือกลไกการจัดเก็บข้อมูลไว้ข้างหลัง หากในอนาคตต้องการเปลี่ยนจาก MySQL เป็น PostgreSQL หรือ MongoDB ก็แก้เฉพาะ Repository โดยไม่ต้องแก้ Business Logic ใน Service"
        }
      ]
    }
  ]
};
