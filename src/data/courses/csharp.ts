import { Course } from "../types";

export const csharpCourse: Course = {
  id: "csharp",
  title: "C# & Modern .NET 8 Enterprise Architecture",
  description: "พัฒนาซอฟต์แวร์ระดับองค์กรด้วยภาษา C# 12 และ .NET 8 ตั้งแต่พื้นฐาน CLR, Type Safety, LINQ, Async/Await, ASP.NET Core Web API จนถึง Entity Framework Core 8",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาซอฟต์แวร์ด้วยภาษา C# และแพลตฟอร์ม .NET 8 ครอบคลุมตั้งแต่สถาปัตยกรรมระดับแกนกลางของ Common Language Runtime (CLR), โมเดลหน่วยความจำและการจัดการ Stack/Heap ร่วมกับ Garbage Collection ยุคใหม่, ฟีเจอร์สมัยใหม่ของ C# 12 (Primary Constructors, Collection Expressions, Records, Pattern Matching), การประมวลผลข้อมูลขั้นสูงด้วย LINQ, การเขียนโปรแกรม Asynchronous เชิงลึกด้วย Task Parallel Library (TPL), การพัฒนา High-Performance Microservices ด้วย ASP.NET Core Minimal APIs, การเชื่อมต่อฐานข้อมูลระดับองค์กรด้วย Entity Framework Core 8, ตลอดจนการออกแบบระบบตามหลัก Clean Architecture และ Dependency Injection",
  icon: "🔷",
  color: "purple",
  gradient: "from-purple-600 via-indigo-600 to-blue-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["C#", ".NET 8", "ASP.NET Core", "LINQ", "EF Core", "OOP", "Microservices", "Clean Architecture"],
  recommendedTools: [
    {
      name: ".NET 8 SDK (LTS)",
      icon: "⚡",
      badge: "Official SDK",
      description: "Software Development Kit เวอร์ชัน Long-Term Support สำหรับคอมไพล์ รัน และจัดการแพ็กเกจ NuGet ของ C# และ .NET",
      downloadUrl: "https://dotnet.microsoft.com/download/dotnet/8.0",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง .NET 8 SDK จาก Microsoft\n2. เปิด Terminal ตรวจสอบด้วยคำสั่ง: dotnet --version และ dotnet --info"
    },
    {
      name: "Visual Studio 2022 / VS Code with C# Dev Kit",
      icon: "💻",
      badge: "Enterprise IDE",
      description: "สภาพแวดล้อมการพัฒนา C# ระดับแนวหน้า รองรับ IntelliSense อัจฉริยะ, ตัววิเคราะห์ประสิทธิภาพ Roslyn, และ Visual Debugger",
      downloadUrl: "https://visualstudio.microsoft.com/",
      setupGuide: "1. ติดตั้ง VS Code\n2. ติดตั้ง Extension: 'C# Dev Kit' โดย Microsoft\n3. สร้างโปรเจกต์ใหม่ผ่านคำสั่ง: dotnet new webapi -n MyEnterpriseApi"
    }
  ],
  lessons: [
    {
      id: "cs-1",
      title: "สถาปัตยกรรม .NET 8 Runtime, CLR, C# 12 Syntax และ Top-Level Statements",
      description: "ทำความเข้าใจ Common Language Runtime (CLR), Just-In-Time (JIT) Compilation, Intermediate Language (IL), และการเขียน C# สมัยใหม่ด้วย Top-Level Statements",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม .NET 8 และ Common Language Runtime (CLR)

ภาษา **C#** เป็นภาษาโปรแกรมประเภท Type-Safe เชิงวัตถุที่ทรงพลัง ออกแบบโดย Microsoft และพัฒนาอย่างต่อเนื่องจนถึง **C# 12** บน **.NET 8 (LTS)** โดยมีจุดเด่นด้านประสิทธิภาพ ความปลอดภัยของหน่วยความจำ และความเร็วระดับแนวหน้าของโลก

---

## 1. กระบวนการคอมไพล์ของ .NET (Compilation Pipeline)

\`\`\`
[ C# Source Code (.cs) ] ──> [ Roslyn Compiler ] ──> [ Common Intermediate Language (CIL) ]
                                                                      │
                                                                      ▼
[ Native Machine Code (x64/ARM64) ] <── [ RyuJIT (Just-In-Time) ] <── [ CLR Runtime Engine ]
\`\`\`

---

## 2. ตารางเปรียบเทียบชนิดข้อมูลพื้นฐานใน C#

| ชนิดข้อมูล (Type) | ขนาด (Size) | ช่วงข้อมูล (Range) | หมวดหมู่ (Category) |
|:---|:---:|:---|:---:|
| \`int\` / \`long\` | 4 / 8 bytes | จำนวนเต็ม 32 / 64 บิต | Value Type (Stack) |
| \`float\` / \`double\` | 4 / 8 bytes | ทศนิยม Single / Double Precision | Value Type (Stack) |
| \`decimal\` | 16 bytes | ทศนิยม 28-29 หลัก เหมาะกับระบบการเงิน | Value Type (Stack) |
| \`bool\` | 1 byte | \`true\` หรือ \`false\` | Value Type (Stack) |
| \`string\` | Dynamic | สตริงอักขระ Unicode แบบ Immutable | Reference Type (Heap) |
| \`object\` | Pointer | รากฐานของทุก Type ใน .NET Type System | Reference Type (Heap) |`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// C# 12 Top-Level Statements และการคำนวณเกรดนักศึกษาตามมาตรฐาน .NET 8
// =================================================================

using System;
using System.Collections.Generic;

Console.WriteLine("=== ระบบประมวลผลวิชาการ IT Academy Online (.NET 8) ===");

string studentName = "พงศกร เมืองประเทศ";
string studentId = "STD-670101";
List<double> examScores = [88.5, 92.0, 79.5, 95.0, 84.0];

double totalScore = 0;
foreach (var score in examScores)
{
    totalScore += score;
}

double averageScore = Math.Round(totalScore / examScores.Count, 2);
string gradeLetter = averageScore switch
{
    >= 80.0 => "A (ยอดเยี่ยม)",
    >= 70.0 => "B (ดีมาก)",
    >= 60.0 => "C (ผ่านเกณฑ์)",
    _ => "F (ต้องลงทะเบียนเรียนซ้ำ)"
};

Console.WriteLine($"รหัสนักศึกษา: {studentId}");
Console.WriteLine($"ชื่อ-สกุล: {studentName}");
Console.WriteLine($"คะแนนเฉลี่ย: {averageScore} / 100");
Console.WriteLine($"ผลการประเมิน: {gradeLetter}");`,
        description: "การใช้ C# 12 Top-Level Statements และ Pattern Matching Switch Expression"
      },
      quiz: [
        {
          id: "cs-q1",
          question: "ส่วนประกอบใดใน .NET ทำหน้าที่แปลง Common Intermediate Language (CIL) ให้เป็นคำสั่งเครื่องของ CPU?",
          options: ["Roslyn Compiler", "RyuJIT (Just-In-Time Compiler)", "NuGet Package Manager", "Visual Studio"],
          correctAnswer: 1,
          explanation: "RyuJIT ภายใน CLR ทำหน้าที่คอมไพล์โค้ดภาษากลาง CIL ให้เป็น Native Machine Code ตอนรันไทม์"
        }
      ]
    },
    {
      id: "cs-2",
      title: "Type Safety, Nullable Reference Types, Records และ Pattern Matching",
      description: "กำจัดข้อผิดพลาด NullReferenceException ด้วย Nullable Annotations, การสร้าง Data Object ด้วย Records (with expressions), และ Pattern Matching ขั้นสูง",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# การเขียน C# แบบสมัยใหม่: Type Safety และ Records

หนึ่งในข้อผิดพลาดที่พบบ่อยที่สุดในประวัติศาสตร์ซอฟต์แวร์คือ **NullReferenceException** (Billion-Dollar Mistake) C# จัดการเรื่องนี้อย่างเด็ดขาดด้วย **Nullable Reference Types**

---

## 1. Records: Immutable Data Carriers

\`record\` ใน C# มีคุณสมบัติเด่นคือ **Value-based Equality** (เปรียบเทียบข้อมูลภายใน ไม่ใช่เปรียบเทียบที่อยู่ Memory) และรองรับการทำ Non-destructive mutation ด้วยคีย์เวิร์ด \`with\`:

\`\`\`csharp
public record StudentProfile(string Id, string FullName, double Gpa);

var student1 = new StudentProfile("S01", "สมชาย", 3.8);
var student2 = student1 with { Gpa = 4.0 }; // สร้างสำเนาใหม่โดยเปลี่ยนเฉพาะ Gpa
\`\`\``,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// การใช้งาน Records, Nullable Reference Types และ Pattern Matching
// =================================================================

using System;

public record DeviceTelemetry(string DeviceId, double? Temperature, double? Humidity, bool IsActive);

public class TelemetryAnalyzer
{
    public static string AnalyzeStatus(DeviceTelemetry telemetry) => telemetry switch
    {
        { IsActive: false } => "⚪ อุปกรณ์ปิดการทำงาน (Offline)",
        { Temperature: > 45.0, Humidity: > 80.0 } => "🚨 วิกฤต: ความร้อนและความชื้นสูงผิดปกติ!",
        { Temperature: > 40.0 } => "⚠️ คำเตือน: อุณหภูมิสูงเกินเกณฑ์",
        { Temperature: not null, Humidity: not null } => "✅ สภาพแวดล้อมปกติ (Normal)",
        _ => "❓ ข้อมูลเซนเซอร์ไม่สมบูรณ์"
    };
}

var sensor1 = new DeviceTelemetry("ESP32-SERVER-ROOM", 46.5, 85.0, true);
var sensor2 = new DeviceTelemetry("ESP32-LAB-ROOM", 26.5, 60.0, true);

Console.WriteLine($"[{sensor1.DeviceId}]: {TelemetryAnalyzer.AnalyzeStatus(sensor1)}");
Console.WriteLine($"[{sensor2.DeviceId}]: {TelemetryAnalyzer.AnalyzeStatus(sensor2)}");`,
        description: "การวิเคราะห์สถานะเซนเซอร์ด้วย Pattern Matching และ Record Type"
      }
    },
    {
      id: "cs-3",
      title: "การจัดการหน่วยความจำ: Value Types vs Reference Types, Stack vs Heap และ GC",
      description: "เจาะลึกโครงสร้างหน่วยความจำใน .NET, การทำงานของ Stack และ Heap, Boxing/Unboxing Overhead, และสถาปัตยกรรม Garbage Collector Gen 0, Gen 1, Gen 2",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมหน่วยความจำใน .NET: Stack, Managed Heap และ Garbage Collector

การเข้าใจว่าข้อมูลใดถูกจัดเก็บบน **Stack** หรือ **Heap** เป็นสิ่งสำคัญที่สุดในการเขียนโปรแกรมระดับ Enterprise ที่ต้องการความเร็วสูงและ Garbage Collection Overhead ต่ำ

---

## 1. ตารางเปรียบเทียบ Stack และ Managed Heap

| คุณลักษณะ | Stack Memory | Managed Heap Memory |
|:---|:---|:---|
| **โครงสร้าง** | LIFO (Last In First Out) เรียงชิดติดกัน | Dynamic Allocated Memory Pool |
| **ความเร็ว** | เร็วมาก (เพียงแค่ขยับ Stack Pointer) | ต้องค้นหาพื้นที่ว่างและอ้างอิง Pointer |
| **ชนิดข้อมูล** | Primitive Types, \`struct\`, \`Span<T>\` | \`class\`, \`string\`, \`array\`, \`record\` |
| **การคืนหน่วยความจำ** | คืนทันทีเมื่อ Function Call จบ | คืนโดย Garbage Collector แบบเป็นรอบ |

---

## 2. ลำดับชั้น Garbage Collection Generations (Gen 0, 1, 2)

- **Generation 0:** ออบเจกต์ที่เพิ่งสร้างใหม่ มีอายุสั้น (Short-lived) GC จะเก็บกวาดบ่อยและเร็วที่สุด
- **Generation 1:** ออบเจกต์ที่รอดจากการเก็บกวาดของ Gen 0
- **Generation 2 (รวม LOH - Large Object Heap):** ออบเจกต์ที่มีอายุยืนยาว เช่น Singletons, Database Connections`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// การวิเคราะห์ Garbage Collection Generations ใน .NET 8
// =================================================================

using System;

public class CacheItem
{
    public byte[] Data { get; set; } = new byte[1024]; // 1 KB
}

Console.WriteLine($"[GC Info] หน่วยความจำเริ่มต้น: {GC.GetTotalMemory(false) / 1024} KB");

var item = new CacheItem();
Console.WriteLine($"[Gen Check] วัตถุถูกจัดสรรอยู่ใน: Generation {GC.GetGeneration(item)}");

// กระตุ้นให้ GC ทำงาน
GC.Collect(0);
Console.WriteLine($"[Gen Check] หลังผ่าน Gen 0 Collection: Generation {GC.GetGeneration(item)}");

GC.Collect(1);
Console.WriteLine($"[Gen Check] หลังผ่าน Gen 1 Collection: Generation {GC.GetGeneration(item)} (Promoted)");`,
        description: "การตรวจสอบตำแหน่ง Generation ของ Managed Object ใน .NET"
      }
    },
    {
      id: "cs-4",
      title: "การประมวลผลข้อมูลขั้นสูงด้วย LINQ (Language Integrated Query)",
      description: "สืบค้นและแปลงข้อมูลด้วย LINQ Method Syntax และ Query Syntax, การทำงานของ Deferred Execution (IEnumerable vs IQueryable), และการเพิ่มประสิทธิภาพ",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# ภาษาการสืบค้นข้อมูล LINQ (Language Integrated Query)

**LINQ** เป็นหนึ่งในฟีเจอร์ที่ยอดเยี่ยมที่สุดของภาษา C# ช่วยให้นักพัฒนาสามารถกรอง เรียงลำดับ จัดกลุ่ม และแปลงข้อมูลได้ด้วยไวยากรณ์ที่กระชับและ Type-Safe 100%

---

## 1. Deferred Execution vs Immediate Execution

- **Deferred Execution:** คำสั่ง LINQ เช่น \`Where()\`, \`Select()\` จะ **ยังไม่ประมวลผลจริง** จนกว่าจะมีการวนลูป \`foreach\` หรือเรียกคำสั่ง Materialization
- **Immediate Execution:** คำสั่งที่บังคับประมวลผลทันที เช่น \`ToList()\`, \`ToArray()\`, \`Count()\`, \`First()\``,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// การประมวลผลข้อมูลด้วย LINQ Method Chaining
// =================================================================

using System;
using System.Collections.Generic;
using System.Linq;

public record Student(string Id, string Name, string Major, double Gpa);

List<Student> students = [
    new("S01", "สมชาย ใจดี", "IT", 3.85),
    new("S02", "กานดา สุขเกษม", "IT", 3.92),
    new("S03", "ธนากร วิเศษศิลป์", "CS", 3.75),
    new("S04", "พิมชนก รัตนชัย", "BC", 3.60),
    new("S05", "ณัฐพล มั่งคั่ง", "IT", 3.70)
];

// 1. คัดกรองนักศึกษาแผนก IT ที่มี GPA >= 3.70 และเรียงลำดับจากมากไปน้อย
var honorStudents = students
    .Where(s => s.Major == "IT" && s.Gpa >= 3.70)
    .OrderByDescending(s => s.Gpa)
    .Select(s => new { s.Name, s.Gpa, Status = "เกียรตินิยม" })
    .ToList();

Console.WriteLine("🏆 รายชื่อนักศึกษาเกียรตินิยมสาขา IT:");
foreach (var s in honorStudents)
{
    Console.WriteLine($"• {s.Name} - GPA: {s.Gpa} ({s.Status})");
}

// 2. คำนวณสถิติภาพรวม
double averageGpa = students.Where(s => s.Major == "IT").Average(s => s.Gpa);
Console.WriteLine($"\nคะแนนเฉลี่ยสาขา IT: {Math.Round(averageGpa, 2)}");`,
        description: "ตัวอย่างการใช้ LINQ Where, OrderByDescending, Select, และ Average"
      }
    },
    {
      id: "cs-5",
      title: "การเขียนโปรแกรม Asynchronous ด้วย async/await, TPL และ CancellationToken",
      description: "สถาปัตยกรรม Non-blocking Asynchronous ใน C#: Task, Task<T>, SynchronizationContext, การยกเลิกงานด้วย CancellationToken, และ Task.WhenAll",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Asynchronous Programming ใน C#: Task Parallel Library (TPL)

ในระบบ Enterprise Web API การเรียกใช้ \`Thread.Sleep()\` หรือคำสั่งแบบ Blocking จะทำให้ Thread Pool หมดลง (Thread Starvation) ส่งผลให้ระบบไม่สามารถรับคำขอใหม่ได้

---

## 1. กฎทองของ Async/Await ใน C#

1. **Async All the Way:** ใช้คำสั่งแบบ Async ตั้งแต่ Controller/Endpoint ลงไปจนถึง Database Driver
2. **ห้ามใช้ \`.Result\` หรือ \`.Wait()\`:** เพราะจะบล็อกเธรดและอาจเกิด **Deadlock**
3. **ส่งต่อ CancellationToken เสมอ:** เพื่อให้เซิร์ฟเวอร์สามารถยกเลิกการประมวลผลทันทีเมื่อผู้ใช้งานกดยกเลิกคำขอ`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// การทำงานแบบ Concurrency ด้วย Task.WhenAll และ CancellationToken
// =================================================================

using System;
using System.Threading;
using System.Threading.Tasks;

public class PaymentGatewayService
{
    public static async Task<string> ProcessTransactionAsync(string bankName, int delayMs, CancellationToken ct)
    {
        Console.WriteLine($"⏳ [PAYMENT] เริ่มต้นเชื่อมต่อเกตเวย์: {bankName}...");
        await Task.Delay(delayMs, ct); // Non-blocking delay
        return $"✓ {bankName}: ชำระเงินสำเร็จ (รหัสอ้างอิง: TXN-{Guid.NewGuid().ToString()[..8]})";
    }
}

using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2)); // Timeout 2s

try
{
    Console.WriteLine("🚀 เริ่มประมวลผลคำสั่งจ่ายเงินพร้อมกัน 3 ธนาคาร...");
    var task1 = PaymentGatewayService.ProcessTransactionAsync("SCB Easy", 400, cts.Token);
    var task2 = PaymentGatewayService.ProcessTransactionAsync("K PLUS", 600, cts.Token);
    var task3 = PaymentGatewayService.ProcessTransactionAsync("Krungthai NEXT", 300, cts.Token);

    string[] results = await Task.WhenAll(task1, task2, task3);

    Console.WriteLine("\n--- สรุปผลการตัดยอดเงิน ---");
    foreach (var res in results)
    {
        Console.WriteLine(res);
    }
}
catch (OperationCanceledException)
{
    Console.WriteLine("❌ การประมวลผลถูกยกเลิกเนื่องจาก Timeout เกิน 2 วินาที");
}`,
        description: "การประมวลผลธุรกรรมทางการเงินพร้อมกันด้วย Task.WhenAll และ CancellationToken"
      }
    },
    {
      id: "cs-6",
      title: "การพัฒนา High-Performance Web API ด้วย ASP.NET Core Minimal APIs",
      description: "สร้าง REST API น้ำหนักเบา ประสิทธิภาพสูงพิเศษ ด้วย Minimal APIs ใน .NET 8, Route Handlers, Model Binding, TypedResults, และ OpenAPI (Swagger)",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# ASP.NET Core Minimal APIs ใน .NET 8

**Minimal APIs** เป็นสถาปัตยกรรมการสร้าง HTTP APIs ที่ตัดทอนความซับซ้อนของ Controller แบบดั้งเดิมออกไป ทำให้แอปพลิเคชันมีขนาดเล็ก เริ่มต้นทำงานได้อย่างรวดเร็ว และประมวลผลได้หลายแสน Request ต่อวินาที

---

## 1. จุดเด่นของ Minimal APIs

- **Zero Overhead:** ประสิทธิภาพสูงกว่า Controller-based API แบบดั้งเดิม
- **Clean Syntax:** ประกาศ Endpoint ได้โดยตรงใน \`Program.cs\`
- **Type-Safe Results:** ใช้ \`TypedResults.Ok()\`, \`TypedResults.NotFound()\` ช่วยให้ Swagger แสดงผล Response Type อย่างถูกต้องแม่นยำ`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// สถาปัตยกรรม ASP.NET Core Minimal API (C# 12 / .NET 8)
// =================================================================

using System;
using System.Collections.Generic;

// โครงสร้างโมเดลข้อมูล
public record CourseDto(string Id, string Title, string Instructor, int Hours);

// จำลองฐานข้อมูลแบบ In-Memory
public class CourseRepository
{
    private static readonly List<CourseDto> _courses = [
        new("CS-801", "C# & .NET 8 Enterprise Architecture", "ผศ.ดร.วิชาการ", 45),
        new("PY-501", "Python for AI & Modern Backend", "อ.สมคิด", 40),
        new("GO-301", "Go Microservices Engineering", "อ.ธนากร", 35)
    ];

    public static List<CourseDto> GetAll() => _courses;
    public static CourseDto? GetById(string id) => _courses.Find(c => c.Id == id);
}

// จำลองการเรียก API Endpoint GET /api/courses/{id}
string requestedId = "CS-801";
var foundCourse = CourseRepository.GetById(requestedId);

if (foundCourse is not null)
{
    Console.WriteLine($"[HTTP 200 OK] พบหลักสูตร:");
    Console.WriteLine($"• รหัส: {foundCourse.Id}");
    Console.WriteLine($"• ชื่อวิชา: {foundCourse.Title}");
    Console.WriteLine($"• อาจารย์ผู้สอน: {foundCourse.Instructor}");
}
else
{
    Console.WriteLine($"[HTTP 404 NotFound] ไม่พบหลักสูตร '{requestedId}'");
}`,
        description: "ตัวอย่างสถาปัตยกรรม Minimal API Endpoint สำหรับการสืบค้นข้อมูล"
      }
    },
    {
      id: "cs-7",
      title: "ฐานข้อมูลระดับองค์กรด้วย Entity Framework Core 8, Migrations และ Connection Resiliency",
      description: "เชื่อมต่อฐานข้อมูล SQL Server/PostgreSQL ด้วย EF Core 8, DbContext, Fluent API, Change Tracker, AsNoTracking เพื่อความเร็วสูง, และการจัดการ Migration",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Entity Framework Core 8: Enterprise Object-Relational Mapper (ORM)

**EF Core 8** เป็น ORM สมัยใหม่ของ .NET ที่แปลงโค้ด C# LINQ ให้เป็นคำสั่ง SQL ที่มีประสิทธิภาพสูงโดยอัตโนมัติ พร้อมรองรับ JSON Columns, Raw SQL Queries และ Bulk Operations

---

## 1. เคล็ดลับประสิทธิภาพใน EF Core

- **\`AsNoTracking()\`:** ปิดการทำงานของ Change Tracker ในการ Query ข้อมูลแบบอ่านอย่างเดียว ช่วยลดการใช้แรมและเพิ่มความเร็วขึ้น 2 เท่า
- **Connection Resiliency:** รองรับการเชื่อมต่อใหม่อัตโนมัติเมื่อเครือข่ายหลุดชั่วคราว (Transient Fault Handling)
- **Split Queries:** ป้องกันปัญหา Cartesian Explosion เมื่อดึงข้อมูลตารางที่เชื่อมต่อกันหลายระดับ`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// ตัวอย่างการจำลอง DbContext และ Entity Definition ด้วย EF Core 8
// =================================================================

using System;
using System.Collections.Generic;

public class StudentEntity
{
    public int Id { get; set; }
    public string StudentCode { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public decimal Balance { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// จำลองการบันทึกข้อมูลและตรวจสอบการทำงาน
var newStudent = new StudentEntity
{
    Id = 101,
    StudentCode = "STD-670101",
    FullName = "สมชาย ใจดี",
    Balance = 15000.00m
};

Console.WriteLine("✓ จำลอง Entity Framework Core 8 Context:");
Console.WriteLine($"SQL Insert Prepared: INSERT INTO Students (StudentCode, FullName, Balance) VALUES ('{newStudent.StudentCode}', '{newStudent.FullName}', {newStudent.Balance});");
Console.WriteLine($"สถานะ Entity ใน Change Tracker: [Added] -> พร้อมส่งมอบคำสั่งผ่าน SaveChangesAsync()");`,
        description: "การจำลอง Entity Configuration และ Change Tracker ใน EF Core 8"
      }
    },
    {
      id: "cs-8",
      title: "Dependency Injection (DI Lifetimes), Logging (Serilog) และ Middleware Pipeline",
      description: "ทำความเข้าใจ Service Lifetimes ใน .NET: Transient, Scoped, และ Singleton, การเขียน Custom Middleware, และ Structured Logging ระดับองค์กร",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Dependency Injection และ Middleware ใน .NET 8

สถาปัตยกรรม .NET ถูกสร้างขึ้นบนพื้นฐานของ **Inversion of Control (IoC)** และ **Dependency Injection (DI)** ที่มีประสิทธิภาพสูงในตัว โดยไม่ต้องพึ่งพาไลบรารีภายนอก

---

## 1. ตารางเปรียบเทียบ Service Lifetimes ใน .NET

| Lifetime | วงจรชีวิตของ Object | เหมาะสำหรับ |
|:---|:---|:---|
| **Transient (\`AddTransient\`)** | สร้างอินสแตนซ์ใหม่ทุกครั้งที่มีการเรียกขอ | Service น้ำหนักเบา ไร้สถานะ (Stateless) |
| **Scoped (\`AddScoped\`)** | สร้าง 1 อินสแตนซ์ต่อ 1 HTTP Request | Database Context (\`DbContext\`), Unit of Work |
| **Singleton (\`AddSingleton\`)** | สร้างครั้งเดียวตลอดอายุการทำงานของแอปพลิเคชัน | In-Memory Cache, Metric Collectors |`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// การจำลอง Dependency Injection Container และ Service Resolution
// =================================================================

using System;

public interface ITokenService
{
    string GenerateToken(string username);
}

public class JwtTokenService : ITokenService
{
    public string GenerateToken(string username) => 
        $"header.payload-{username}-{Guid.NewGuid().ToString()[..6]}.signature";
}

// Service ที่ต้องพึ่งพา ITokenService ผ่าน Constructor Injection
public class AuthenticationHandler(ITokenService tokenService)
{
    public void Login(string username)
    {
        string token = tokenService.GenerateToken(username);
        Console.WriteLine($"✓ ผู้ใช้ '{username}' เข้าสู่ระบบสำเร็จ");
        Console.WriteLine($"🔑 Access Token: {token}");
    }
}

// ทดสอบรัน
ITokenService tokenSvc = new JwtTokenService();
var authHandler = new AuthenticationHandler(tokenSvc);
authHandler.Login("somchai.dev");`,
        description: "การทำ Constructor Dependency Injection ด้วย C# 12 Primary Constructor"
      }
    },
    {
      id: "cs-9",
      title: "โปรเจกต์ E-Commerce Microservice API พร้อม JWT และ Clean Architecture",
      description: "โปรเจกต์รวบยอด: สร้าง RESTful Microservice สั่งซื้อสินค้า, ระบบตรวจสอบสิทธิ์ด้วย JWT Token, Structured Exception Handling, และ Health Checks",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise C#: Clean Architecture Microservice

ในบทเรียนนี้ เราจะผสานแนวคิดทั้งหมดของ .NET 8, C# 12, Minimal APIs, Type Safety และ Asynchronous Programming เพื่อสร้าง Microservice สำหรับระบบจัดซื้อที่พร้อม Deploy บน Docker Container

---

## โครงสร้างสถาปัตยกรรม Clean Architecture

\`\`\`
[ Presentation Layer: Minimal APIs Endpoints ]
                     │
                     ▼
[ Application Layer: Commands, Queries, DTOs ]
                     │
                     ▼
[ Domain Layer: Entities, Business Rules, Value Objects ]
                     ▲
                     │
[ Infrastructure Layer: EF Core, Repositories, External APIs ]
\`\`\``,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// โปรเจกต์ E-Commerce Order Processing API (.NET 8 Clean Architecture)
// =================================================================

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

public record OrderItem(string Sku, int Quantity, decimal UnitPrice);

public record OrderRequest(string CustomerId, List<OrderItem> Items);

public class OrderProcessor
{
    public static async Task<string> ProcessOrderAsync(OrderRequest request)
    {
        if (request.Items.Count == 0)
            throw new ArgumentException("รายการสินค้าต้องไม่ว่างเปล่า");

        decimal total = 0;
        foreach (var item in request.Items)
        {
            total += item.Quantity * item.UnitPrice;
        }

        await Task.Delay(100); // จำลองการบันทึกฐานข้อมูลและการเรียก Payment Gateway

        string orderNumber = $"ORD-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..6].ToUpper()}";
        return $"✓ ออกคำสั่งซื้อสำเร็จ: หมายเลข {orderNumber} | ยอดรวมทั้งสิ้น: {total:C2} THB";
    }
}

var sampleOrder = new OrderRequest(
    CustomerId: "CUST-9921",
    Items: [
        new("DELL-LAPTOP-XPS", 1, 45900.00m),
        new("LOGITECH-MX-MOUSE", 2, 3500.00m)
    ]
);

Console.WriteLine("📦 กำลังส่งคำสั่งซื้อเข้าระบบ...");
string confirmation = await OrderProcessor.ProcessOrderAsync(sampleOrder);
Console.WriteLine(confirmation);`,
        description: "สถาปัตยกรรมสั่งซื้อสินค้าและคำนวณยอดเงินรวมด้วย .NET 8"
      }
    }
  ]
};
