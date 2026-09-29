import { Course } from "../types";

export const phpCourse: Course = {
  id: "php",
  title: "Modern PHP 8.3 & Enterprise Web Architecture",
  description: "เรียนรู้ภาษา PHP ยุคใหม่ 8.3 ตั้งแต่ Strict Types, OOP, ความปลอดภัย PDO, PSR Standards, Composer, สถาปัตยกรรม MVC จนถึงการสร้าง REST API และสถาปัตยกรรม Laravel",
  longDescription: "หลักสูตรภาษา PHP ยุคใหม่ (Modern PHP 8.3 Engineering) ลบภาพจำเก่าของ PHP ในอดีต แล้วก้าวสู่มาตรฐานการเขียนโค้ดระดับสากลที่มี Type Safety สูง ครอบคลุมตั้งแต่สถาปัตยกรรม JIT Compiler ภายใน Zend Engine, Strict Type Declarations, Match Expressions, การเขียน OOP ขั้นสูงด้วย Constructor Promotion และ Enums, การรักษาความปลอดภัยฐานข้อมูลขั้นสูงด้วย PDO Prepared Statements, การจัดการแพ็กเกจด้วย Composer และมาตรฐาน PSR (PSR-4 Autoloading, PSR-7, PSR-12), การสร้างสถาปัตยกรรม MVC และ Router, ตลอดจนการพัฒนา RESTful APIs พร้อมระบบ Authentication ด้วย JWT/Sanctum",
  icon: "🐘",
  color: "indigo",
  gradient: "from-indigo-500 via-purple-600 to-blue-600",
  category: "language",
  totalLessons: 9,
  difficulty: "เริ่มต้น",
  tags: ["PHP 8.3", "Composer", "PDO", "MVC", "Laravel", "REST API", "OOP", "MySQL"],
  recommendedTools: [
    {
      name: "PHP 8.3+ Runtime",
      icon: "🐘",
      badge: "Official Engine",
      description: "ตัวแปลภาษา PHP เวอร์ชันล่าสุด พร้อม JIT Compiler และการปรับปรุงประสิทธิภาพรอบด้าน",
      downloadUrl: "https://www.php.net/downloads",
      setupGuide: "1. ดาวน์โหลดติดตั้ง PHP 8.3 จาก php.net หรือผ่าน XAMPP/Homebrew\n2. เปิดใช้งาน Extensions ใน php.ini: pdo_mysql, mbstring, openssl, curl\n3. ตรวจสอบใน Terminal: php -v"
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
      title: "วิวัฒนาการสู่ PHP 8.3: Type System, JIT, Match Expressions และ Nullsafe Operator",
      description: "ทำความเข้าใจ Zend Engine, การเปิดใช้งาน declare(strict_types=1), Match Expressions, Named Arguments, Union/Intersection Types และ Nullsafe Operator (?->)",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# วิวัฒนาการของ Modern PHP 8.3 และ Zend Engine

ภาษา **PHP** ในปัจจุบัน (PHP 8.2 / 8.3) มีความแตกต่างจาก PHP 5 หรือ PHP 7 ในอดีตอย่างสิ้นเชิง โดยมีระบบ **Strict Type Safety**, **JIT (Just-In-Time) Compiler**, และไวยากรณ์สมัยใหม่ที่กระชับ ปลอดภัย และรวดเร็วเทียบเคียงภาษาชั้นนำอื่นๆ

---

## 1. การเปิดใช้งาน Strict Types (\`declare(strict_types=1)\`)

ในไฟล์ PHP สมัยใหม่ บรรทัดแรกต้องประกาศคำสั่งนี้เสมอ เพื่อป้องกันไม่ให้ PHP ทำ Type Coercion (แปลงชนิดข้อมูลอัตโนมัติแบบผิดพลาด):

\`\`\`php
<?php
declare(strict_types=1);

function addScores(int $a, int $b): int {
    return $a + $b;
}
\`\`\`

---

## 2. ฟีเจอร์เด่นใน PHP 8.x

- **Match Expression:** แทนที่ \`switch\` แบบเดิม คืนค่าได้ทันที และเปรียบเทียบแบบ Strict Equality (\`===\`)
- **Nullsafe Operator (\`?->\`):** เข้าถึง Method หรือ Property ของ Object ที่อาจเป็น null ได้โดยไม่เกิด Fatal Error
- **Named Arguments:** ระบุชื่อ Parameter ตอนเรียกใช้งานฟังก์ชัน ช่วยเพิ่มความชัดเจนของโค้ด`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// =================================================================
// Modern PHP 8.3: Match Expressions, Named Arguments และ Type Safety
// =================================================================

function evaluateGrade(float $score): string {
    return match (true) {
        $score >= 80.0 => "A (เกียรตินิยมยอดเยี่ยม)",
        $score >= 70.0 => "B (ผลการเรียนดีมาก)",
        $score >= 60.0 => "C (ผ่านเกณฑ์มาตรฐาน)",
        default => "F (ต้องลงทะเบียนเรียนซ้ำ)"
    };
}

function formatStudentSummary(string $studentId, string $name, float $gpa): array {
    return [
        "id" => $studentId,
        "name" => $name,
        "gpa" => $gpa,
        "grade_evaluation" => evaluateGrade($gpa * 25), // เทียบบัญญัติไตรยางศ์
        "status" => $gpa >= 2.00 ? "PASS" : "PROBATION"
    ];
}

// เรียกใช้ฟังก์ชันด้วย Named Arguments
$student = formatStudentSummary(
    studentId: "STD-670101",
    name: "พงศกร เมืองประเทศ",
    gpa: 3.85
);

echo "สถาบัน: IT Academy Online (PHP 8.3 Runtime)\n";
echo "นักศึกษา: " . $student["name"] . " (" . $student["id"] . ")\n";
echo "เกรดเฉลี่ย: " . $student["gpa"] . " -> " . $student["grade_evaluation"] . "\n";
echo "สถานะวิชาการ: " . $student["status"] . "\n";`,
        description: "การใช้ฟีเจอร์ Modern PHP 8.3 ในการประเมินผลคะแนนนักศึกษา"
      },
      quiz: [
        {
          id: "php-q1",
          question: "คำสั่งใดใน PHP ที่ใช้บังคับให้ตัวแปรและฟังก์ชันตรวจสอบชนิดข้อมูลอย่างเข้มงวด (Strict Types)?",
          options: ["use strict;", "declare(strict_types=1);", "error_reporting(E_ALL);", "php_check_types(true);"],
          correctAnswer: 1,
          explanation: "declare(strict_types=1); ที่บรรทัดแรกสุดของไฟล์ จะสั่งให้ Zend Engine ตรวจสอบ Type Hints อย่างเข้มงวด"
        }
      ]
    },
    {
      id: "php-2",
      title: "OOP ขั้นสูง: Constructor Property Promotion, Readonly Classes และ Enums",
      description: "ลดความซ้ำซ้อนของโค้ดด้วย Constructor Promotion, การสร้าง Immutable Value Object ด้วย readonly classes, และการใช้งาน Backed Enums ใน PHP 8.1+",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# การเขียนโปรแกรมเชิงวัตถุขั้นสูงใน PHP 8.3

ใน PHP 8.x ไวยากรณ์ OOP ได้รับการปรับปรุงให้เทียบเท่าภาษา C# และ TypeScript ทำให้นักพัฒนาไม่ต้องเขียน Boilerplate Code ที่ไร้ประโยชน์

---

## 1. Constructor Property Promotion

แทนที่จะต้องประกาศ Property และกำหนดค่าใน Constructor ซ้ำซ้อน 3 จุด PHP 8 อนุญาตให้รวมการประกาศไว้ในพารามิเตอร์ของ \`__construct\` ได้ทันที:

\`\`\`php
// แบบเดิม (PHP 7): ต้องเขียน 12 บรรทัด
// แบบใหม่ (PHP 8): เขียนเพียง 3 บรรทัด!
class Student {
    public function __construct(
        public readonly string $id,
        public string $name,
        public float $gpa = 0.0
    ) {}
}
\`\`\``,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// 1. Backed Enum สำหรับสถานะการลงทะเบียน
enum EnrollmentStatus: string {
    case Pending = "รอชำระเงิน";
    case Active = "ลงทะเบียนสมบูรณ์";
    case Suspended = "พักการเรียน";
}

// 2. Readonly Class ป้องกันการเปลี่ยนแปลงข้อมูล (Immutable Object)
readonly class CourseEnrollment {
    public function __construct(
        public string $enrollmentId,
        public string $courseCode,
        public EnrollmentStatus $status,
        public DateTimeImmutable $createdAt
    ) {}
}

$enrollment = new CourseEnrollment(
    enrollmentId: "ENR-9901",
    courseCode: "IT-WEB-801",
    status: EnrollmentStatus::Active,
    createdAt: new DateTimeImmutable()
);

echo "รหัสการลงทะเบียน: " . $enrollment->enrollmentId . "\n";
echo "รหัสวิชา: " . $enrollment->courseCode . "\n";
echo "สถานะ: " . $enrollment->status->value . "\n";
echo "วันที่ลงทะเบียน: " . $enrollment->createdAt->format("Y-m-d H:i:s") . "\n";`,
        description: "การใช้งาน Backed Enums และ Readonly Class ใน PHP 8.2+"
      }
    },
    {
      id: "php-3",
      title: "ความปลอดภัยระดับสูงสุด: ป้องกัน SQL Injection ด้วย PDO Prepared Statements",
      description: "ทำความเข้าใจสาเหตุของ SQL Injection, การยกเลิกใช้ฟังก์ชัน mysqli ดั้งเดิม, การสร้างการเชื่อมต่อฐานข้อมูลที่ปลอดภัยด้วย PDO, และการจัดการ Exception (PDOException)",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การรักษาความปลอดภัยฐานข้อมูลใน PHP ด้วย PDO Prepared Statements

ช่องโหว่ **SQL Injection (SQLi)** เป็นหนึ่งในภัยคุกคามอันดับ 1 บน OWASP Top 10 เกิดจากการนำ Input ของผู้ใช้ไปต่อสตริง SQL โดยตรง (\`"SELECT * FROM users WHERE email = '$email'"\`)

---

## กฎเหล็กของความปลอดภัยฐานข้อมูล

1. **ห้ามนำ Input ไปต่อ String ใน SQL Query เด็ดขาด!**
2. **ใช้ Prepared Statements เสมอ:** ส่งโครงสร้างคำสั่ง SQL ไปคอมไพล์ที่เซิร์ฟเวอร์ฐานข้อมูลก่อน จากนั้นจึงส่งค่าตัวแปร (Parameters) ไปผูกค่า (Binding)
3. **ตั้งค่า PDO Attributes:**
   - \`PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION\`
   - \`PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC\`
   - \`PDO::ATTR_EMULATE_PREPARES => false\` (บังคับใช้ Native Prepared Statements)`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// จำลองคลาสเชื่อมต่อและสืบค้นฐานข้อมูลความปลอดภัยสูง
class SecureUserRepository {
    public static function findUserByEmail(string $inputEmail): array {
        // จำลองคำสั่ง Prepared Statements
        $sql = "SELECT id, name, email, role FROM users WHERE email = :email LIMIT 1";
        
        // Input จากภายนอก (เช่น Input แปลกปลอมที่มีเครื่องหมาย ' OR '1'='1)
        $sanitizedParam = trim($inputEmail);
        
        echo "✓ คอมไพล์โครงสร้างคำสั่ง SQL อย่างปลอดภัย:\n";
        echo "  [SQL Prepared]: " . $sql . "\n";
        echo "  [Bound Parameter]: :email => '" . htmlspecialchars($sanitizedParam) . "'\n";
        
        // จำลองผลลัพธ์ที่ค้นพบ
        return [
            "id" => 101,
            "name" => "สมชาย ใจดี",
            "email" => $sanitizedParam,
            "role" => "STUDENT"
        ];
    }
}

$user = SecureUserRepository::findUserByEmail("student@itacademy.ac.th");
echo "✓ พบผู้ใช้งาน: " . $user["name"] . " (Role: " . $user["role"] . ")\n";`,
        description: "การจำลองการทำงานของ Prepared Statements ในการป้องกัน SQL Injection"
      }
    },
    {
      id: "php-4",
      title: "การจัดการแพ็กเกจด้วย Composer, มาตรฐาน PSR-4 และ Autoloading",
      description: "เรียนรู้โครงสร้าง composer.json, ระบบจัดการ Dependency, การตั้งค่า PSR-4 Autoloading เพื่อเลิกใช้ require_once, และมาตรฐานสากล PHP-FIG (PSR-1, PSR-4, PSR-12)",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Composer และมาตรฐาน PSR ของกลุ่ม PHP-FIG

ในอดีต นักพัฒนา PHP ต้องเขียน \`require_once 'lib/Database.php';\` นับร้อยบรรทัด ปัจจุบัน **Composer** และมาตรฐาน **PSR-4** ได้ปฏิวัติการโหลดไฟล์คลาสให้เป็นระบบอัตโนมัติ 100%

---

## 1. มาตรฐาน PSR ที่สำคัญ (PHP Standards Recommendations)

- **PSR-4 (Autoloading):** กำหนดการแมป Namespace เข้ากับโครงสร้างโฟลเดอร์ เช่น \`App\\Services\\UserService\` แมปไปที่ \`src/Services/UserService.php\`
- **PSR-7 & PSR-15:** มาตรฐาน HTTP Message Interfaces และ HTTP Server Handlers
- **PSR-12:** มาตรฐานการจัดรูปแบบโค้ด (Coding Style Guide)`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// ตัวอย่างโครงสร้างการจำลองระบบ Autoloading ตามมาตรฐาน PSR-4
spl_autoload_register(function (string $class) {
    // กำหนด prefix ของ namespace
    $prefix = 'App\\\\';
    $baseDir = __DIR__ . '/src/';

    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }

    $relativeClass = substr($class, $len);
    $file = $baseDir . str_replace('\\\\', '/', $relativeClass) . '.php';

    echo "⚡ [PSR-4 Autoloader] กำลังโหลด Class: {$class} จากไฟล์ {$file}\n";
});

echo "✓ ระบบ PSR-4 Autoloader พร้อมทำงานแล้ว\n";`,
        description: "หลักการทำงานภายในของระบบ PSR-4 Autoloader"
      }
    },
    {
      id: "php-5",
      title: "สถาปัตยกรรม MVC (Model-View-Controller) และการสร้าง Front Controller Router",
      description: "ทำความเข้าใจสถาปัตยกรรม MVC, การสร้าง .htaccess และ index.php เป็น Front Controller, การสร้าง Request Router รองรับ Dynamic Route Parameters",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม MVC (Model-View-Controller) ในภาษา PHP

เฟรมเวิร์กสมัยใหม่อย่าง **Laravel**, **Symfony**, และ **CodeIgniter 4** ล้วนสร้างขึ้นบนสถาปัตยกรรม **MVC**:
- **Model:** จัดการข้อมูล Business Logic และการติดต่อฐานข้อมูล
- **View:** ส่วนแสดงผล HTML / JSON แก่ผู้ใช้
- **Controller:** ตัวกลางประสานงาน รับคำขอจากผู้ใช้ เรียก Model และส่งต่อผลลัพธ์ไปยัง View`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

class Router {
    private array $routes = [];

    public function get(string $path, callable $handler): void {
        $this->routes['GET'][$path] = $handler;
    }

    public function dispatch(string $method, string $uri): void {
        if (isset($this->routes[$method][$uri])) {
            call_user_func($this->routes[$method][$uri]);
        } else {
            http_response_code(404);
            echo "[404] ไม่พบหน้าที่ต้องการ: {$uri}\n";
        }
    }
}

$router = new Router();
$router->get('/api/health', function() {
    echo json_encode(["status" => "UP", "timestamp" => time()]);
});

// จำลองการเรียก Request
$router->dispatch('GET', '/api/health');`,
        description: "การสร้าง Simple Front Controller Router ใน PHP"
      }
    },
    {
      id: "php-6",
      title: "สถาปัตยกรรม Laravel 11 Framework: Service Container, Eloquent ORM และ Blade",
      description: "เจาะลึกโครงสร้าง Laravel 11: Dependency Injection ผ่าน Service Container, Eloquent ORM Active Record Pattern, Database Migrations, และ Blade Templating Engine",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Laravel 11 Framework

**Laravel** เป็นเว็บเฟรมเวิร์กที่ได้รับความนิยมสูงสุดในระบบนิเวศของ PHP นำเสนอการเขียนโค้ดที่สวยงาม (Elegant Syntax) พร้อมชุดเครื่องมือระดับองค์กรที่สมบูรณ์แบบในตัว

---

## 1. ฟีเจอร์หลักของ Laravel

- **Service Container & Service Providers:** หัวใจของระบบ Dependency Injection
- **Eloquent ORM:** ทำงานกับฐานข้อมูลผ่าน Object เสมือนจริง รองรับ Relationships (One-to-Many, Many-to-Many)
- **Artisan CLI:** คำสั่งอำนวยความสะดวกในการสร้างไฟล์ Migration, Controller, Seeder`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

// จำลอง Eloquent Model Pattern ใน Laravel 11
class StudentModel {
    public function __construct(
        public int $id,
        public string $name,
        public string $department,
        public float $gpa
    ) {}

    public static function where(string $column, string $operator, mixed $value): array {
        // จำลองการ Query จากฐานข้อมูล
        return [
            new self(1, "กานดา สุขเกษม", "IT", 3.92),
            new self(2, "ธนากร วิเศษศิลป์", "IT", 3.78)
        ];
    }
}

$students = StudentModel::where('department', '=', 'IT');
echo "✓ สืบค้นข้อมูลผ่าน Eloquent Model Pattern:\n";
foreach ($students as $s) {
    echo "• [{$s->id}] {$s->name} | GPA: {$s->gpa}\n";
}`,
        description: "การจำลอง Eloquent ORM Active Record Pattern ใน Laravel"
      }
    },
    {
      id: "php-7",
      title: "RESTful API Development, JSON Resources และ Sanctum Token Authentication",
      description: "พัฒนา REST API มาตรฐานสากลด้วย PHP: การกำหนด HTTP Status Codes (200, 201, 400, 401, 422), API Resource Data Transformation, และการตรวจสอบสิทธิ์ด้วย Bearer Tokens",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# RESTful API Development ใน PHP

การสร้าง API ที่ดีต้องยึดหลักการของ **REST (Representational State Transfer)** โดยใช้ HTTP Methods ให้ตรงกับวัตถุประสงค์ (GET, POST, PUT, DELETE) และส่งผลลัพธ์เป็นมาตรฐาน JSON เสมอ`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

class ApiResponse {
    public static function success(mixed $data, string $message = "OK", int $code = 200): string {
        http_response_code($code);
        return json_encode([
            "success" => true,
            "code" => $code,
            "message" => $message,
            "data" => $data
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    }
}

$output = ApiResponse::success([
    "student_id" => "STD-670101",
    "name" => "สมชาย ใจดี",
    "token" => "1|sanctum_token_sample_abc123"
], "เข้าสู่ระบบสำเร็จ", 200);

echo $output;`,
        description: "การส่งออก JSON Response ตามมาตรฐาน RESTful API"
      }
    },
    {
      id: "php-8",
      title: "การเพิ่มประสิทธิภาพด้วย Redis Caching, Queues Background Jobs และ Task Scheduling",
      description: "ลดภาระฐานข้อมูลด้วย Redis Key-Value In-Memory Caching, การส่งงานหนัก (ส่งอีเมล/ออกรายงาน) ไปประมวลผลเบื้องหลังด้วย Queue Workers, และ Cron Task Scheduling",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การปรับแต่งประสิทธิภาพและระบบคิวงานใน PHP

PHP ทำงานแบบ **Shared-Nothing Architecture** (เริ่มต้นและจบการทำงานในแต่ละ Request) เพื่อไม่ให้คำขอของผู้ใช้ต้องรอนาน เราต้องส่งงานที่ใช้เวลานาน เช่น การส่งอีเมล หรือการคำนวณสถิติ ไปรันใน **Background Queue Workers**`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

class SimpleRedisCache {
    private static array $cache = [];

    public static function remember(string $key, int $ttlSeconds, callable $callback): mixed {
        if (isset(self::$cache[$key])) {
            echo "⚡ [CACHE HIT] โหลดข้อมูลจาก In-Memory Cache ทันที: {$key}\n";
            return self::$cache[$key];
        }

        echo "⏳ [CACHE MISS] ดึงข้อมูลจากฐานข้อมูลหลัก...\n";
        $data = $callback();
        self::$cache[$key] = $data;
        return $data;
    }
}

// ทดสอบเรียกซ้ำ 2 ครั้ง
$res1 = SimpleRedisCache::remember("dashboard_stats", 60, fn() => ["total_students" => 1250]);
$res2 = SimpleRedisCache::remember("dashboard_stats", 60, fn() => ["total_students" => 1250]);`,
        description: "หลักการ Cache Aside Pattern ในการเพิ่มประสิทธิภาพระบบ PHP"
      }
    },
    {
      id: "php-9",
      title: "โปรเจกต์ Enterprise Student Management RESTful API ด้วย PHP 8.3 & MySQL",
      description: "โปรเจกต์รวบยอด: สร้างระบบทะเบียนและผลการเรียนนักศึกษาแบบ RESTful API ครบวงจร พร้อมการตรวจสอบ Input (Validation), Error Handling, และ Security Best Practices",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise PHP: Student Academic Management API

ในบทเรียนนี้ เราจะนำเทคโนโลยีทั้งหมด ทั้ง Strict Types, OOP, PDO, RESTful Response, และ Exception Handling มาสร้างระบบ API สำหรับงานทะเบียนนักศึกษาของ IT Academy`,
      codeExample: {
        language: "php",
        code: `<?php
declare(strict_types=1);

class AcademicService {
    public function registerStudent(array $payload): array {
        if (empty($payload['name']) || empty($payload['email'])) {
            throw new InvalidArgumentException("ข้อมูลชื่อและอีเมลจำเป็นต้องระบุ");
        }

        $studentId = "STD-" . date("y") . rand(1000, 9999);
        return [
            "student_id" => $studentId,
            "name" => htmlspecialchars($payload['name']),
            "email" => filter_var($payload['email'], FILTER_SANITIZE_EMAIL),
            "status" => "ACTIVE",
            "registered_at" => date("Y-m-d H:i:s")
        ];
    }
}

$service = new AcademicService();
$result = $service->registerStudent([
    "name" => "ธนากร วิเศษศิลป์",
    "email" => "thanakorn@itacademy.ac.th"
]);

echo "✓ ลงทะเบียนนักศึกษาใหม่สำเร็จ:\n";
echo "• รหัสประจำตัว: " . $result["student_id"] . "\n";
echo "• ชื่อ-สกุล: " . $result["name"] . "\n";
echo "• อีเมล: " . $result["email"] . "\n";
echo "• วันที่บันทึก: " . $result["registered_at"] . "\n";`,
        description: "สถาปัตยกรรมบริการลงทะเบียนนักศึกษาด้วย PHP 8.3 ระดับองค์กร"
      }
    }
  ]
};
