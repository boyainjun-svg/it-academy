import { Course } from "../types";

export const csharpCourse: Course = {
  id: "csharp",
  title: "C# & Modern .NET 8 Enterprise Architecture",
  description: "พัฒนาซอฟต์แวร์ระดับองค์กรด้วยภาษา C# 12 และ .NET 8 ตั้งแต่พื้นฐาน CLR, Type Safety, LINQ, Async/Await, ASP.NET Core Minimal APIs จนถึง Entity Framework Core 8",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาซอฟต์แวร์ด้วยภาษา C# 12 และแพลตฟอร์ม .NET 8 ครอบคลุมตั้งแต่สถาปัตยกรรมระดับแกนกลางของ Common Language Runtime (CLR), โมเดลหน่วยความจำและการจัดการ Stack/Heap, Boxing/Unboxing, Span<T>, Garbage Collection ยุคใหม่ (Gen 0, 1, 2, LOH, POH), ฟีเจอร์สมัยใหม่ของ C# 12 (Primary Constructors, Collection Expressions, Records, Pattern Matching), การประมวลผลข้อมูลขั้นสูงด้วย LINQ และ Expression Trees, การเขียนโปรแกรม Asynchronous เชิงลึกด้วย Task Parallel Library (TPL), การพัฒนา High-Performance Microservices ด้วย ASP.NET Core Minimal APIs, การเชื่อมต่อฐานข้อมูลระดับองค์กรด้วย Entity Framework Core 8, ตลอดจนการออกแบบระบบตามหลัก Clean Architecture, CQRS และ Dependency Injection",
  icon: "🔷",
  color: "purple",
  gradient: "from-purple-600 via-indigo-600 to-blue-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["C#", ".NET 8", "ASP.NET Core", "LINQ", "EF Core", "OOP", "Microservices", "Clean Architecture", "CLR"],
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
      title: "สถาปัตยกรรม .NET 8 Runtime, CLR, Roslyn Compiler และ C# 12 Syntax",
      description: "ทำความเข้าใจ Common Language Runtime (CLR), Roslyn Compiler, Common Intermediate Language (CIL), RyuJIT Compiler, Dynamic Profile-Guided Optimization (PGO) และฟีเจอร์ C# 12 (Primary Constructors, Collection Expressions, Top-Level Statements)",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม .NET 8 และ Common Language Runtime (CLR)

ภาษา **C#** เป็นภาษาโปรแกรมประเภท Type-Safe เชิงวัตถุระดับสูง ออกแบบโดย Anders Hejlsberg ที่ Microsoft และพัฒนาอย่างต่อเนื่องจนถึง **C# 12** บนแพลตฟอร์ม **.NET 8 (LTS)** โดยได้รับการยกย่องว่าเป็นหนึ่งในรันไทม์ที่เร็ว เสถียร และมีเครื่องมือพัฒนาดีที่สุดในโลก

---

## 1. กระบวนการคอมไพล์และรันไทม์ของ .NET (Compilation & Execution Pipeline)

\`\`\`text
+-------------------------------------------------------------------------+
|                  .NET 8 Compilation & Execution Pipeline                |
+-------------------------------------------------------------------------+
|  C# Source Code (.cs)                                                   |
|        │                                                                |
|        ▼ (Roslyn Frontend Compiler)                                     |
|  Common Intermediate Language (CIL / MSIL Bytecode) + Metadata          |
|        │                                                                |
|        ▼ (Packed into Assembly: .dll / .exe)                            |
|  CLR (Common Language Runtime Engine)                                   |
|        ├── Class Loader & Type Safety Verifier                          |
|        ├── Tiered JIT Compilation (RyuJIT)                              |
|        │     ├── Tier 0: Quick JIT (เริ่มทำงานได้ทันที ไม่ Optimize)    |
|        │     └── Tier 1: Dynamic PGO (วิเคราะห์โค้ดที่รันบ่อยด้วย AVX)  |
|        └── Native Machine Code (x86-64 / ARM64 Instructions)            |
+-------------------------------------------------------------------------+
\`\`\`

1. **Roslyn Compiler:** ทำหน้าที่แปลงซอร์สโค้ด C# ให้กลายเป็น **Common Intermediate Language (CIL)** ที่เป็นมาตรฐานเปิดสากล (ECMA-335)
2. **Assembly (.dll):** ไบต์โค้ด CIL จะถูกบรรจุอยู่ในไฟล์ Assembly พร้อมกับข้อมูล Metadata อย่างครบถ้วน
3. **RyuJIT (Just-In-Time Compiler):** เมื่อโปรแกรมเริ่มรัน CLR จะนำ CIL มาแปลงเป็น Machine Code ของฮาร์ดแวร์นั้นๆ แบบ Just-In-Time
4. **Dynamic PGO (Profile-Guided Optimization):** จุดเด่นของ .NET 8 ที่ติดตามพฤติกรรมของโค้ดในรันไทม์จริง แล้วทำการ Re-JIT คอมไพล์ใหม่ให้มีประสิทธิภาพสูงสุดเทียบเท่าภาษา C++

---

## 2. ฟีเจอร์สมัยใหม่ของ C# 12
C# 12 ช่วยลด Boilerplate Code อย่างมีนัยสำคัญ:
- **Top-Level Statements:** ไม่ต้องเขียน \`class Program\` หรือ \`static void Main()\` ซ้ำซาก
- **Primary Constructors ใน Classes/Structs:** ประกาศพารามิเตอร์ต่อท้ายชื่อคลาสได้โดยตรง
- **Collection Expressions (\`[1, 2, 3]\`):** ไวยากรณ์รวมการสร้าง Array, List, Span ให้เป็นมาตรฐานเดียวกัน

\`\`\`csharp
// C# 12 Primary Constructor
public class StudentService(IStudentRepository repository, ILogger logger)
{
    public void Register(string name) => repository.Save(name);
}
\`\`\``,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// C# 12 / .NET 8: Primary Constructors, Collections & Pattern Matching
// =================================================================

using System;
using System.Collections.Generic;

Console.WriteLine("==========================================================");
Console.WriteLine("  IT Academy .NET 8 Runtime & C# 12 Architecture Engine   ");
Console.WriteLine("==========================================================");

// 1. C# 12 Primary Constructor สำหรับคลาสโมเดล
public class StudentGradeReport(string studentId, string name, List<double> scores)
{
    public string StudentId => studentId;
    public string Name => name;
    public IReadOnlyList<double> Scores => scores;

    public double CalculateAverage()
    {
        if (scores.Count == 0) return 0.0;
        double total = 0;
        foreach (var s in scores) total += s;
        return Math.Round(total / scores.Count, 2);
    }

    public string GetHonorStatus() => CalculateAverage() switch
    {
        >= 90.0 => "🏆 เกียรตินิยมยอดเยี่ยม (Summa Cum Laude)",
        >= 80.0 => "🥇 เกียรตินิยม (Magna Cum Laude)",
        >= 70.0 => "🥈 ผ่านเกณฑ์ระดับดี (Good Standing)",
        >= 60.0 => "🥉 ผ่านเกณฑ์มาตรฐาน (Satisfactory)",
        _       => "⚠️ ภาคทัณฑ์ (Academic Probation)"
    };
}

// 2. C# 12 Collection Expressions [ ... ]
List<double> stdScores = [88.5, 94.0, 78.5, 92.0, 85.0];

var report = new StudentGradeReport("STD-670101", "พงศกร เมืองประเทศ", stdScores);

Console.WriteLine($"• รหัสนักศึกษา  : {report.StudentId}");
Console.WriteLine($"• ชื่อ-สกุล      : {report.Name}");
Console.WriteLine($"• คะแนนเฉลี่ย    : {report.CalculateAverage()} / 100");
Console.WriteLine($"• ผลการประเมิน   : {report.GetHonorStatus()}");`,
        description: "การใช้ C# 12 Primary Constructor, Collection Expressions และ Pattern Matching บน .NET 8"
      },
      challenge: {
        description: "เขียนคลาส `CourseItem(string code, string name, int credit)` โดยใช้ไวยากรณ์ C# 12 Primary Constructor พร้อม Property สำหรับอ่านค่าทั้ง 3 ฟิลด์",
        startingCode: `// TODO: เขียนคลาส CourseItem ด้วย Primary Constructor
`,
        solution: `public class CourseItem(string code, string name, int credit)
{
    public string Code => code;
    public string Name => name;
    public int Credit => credit;
}`
      },
      quiz: [
        {
          id: "cs-1-q1",
          question: "ในสถาปัตยกรรม .NET คอมไพเลอร์ Roslyn ทำหน้าที่ส่งออกผลลัพธ์เป็นสิ่งใด?",
          options: [
            "Native Machine Code สำหรับ CPU โดยตรง",
            "Common Intermediate Language (CIL / MSIL Bytecode) พร้อม Metadata",
            "ซอร์สโค้ดภาษา JavaScript",
            "ไฟล์รูปภาพไอคอนของแอปพลิเคชัน"
          ],
          correctAnswer: 1,
          explanation: "Roslyn ทำหน้าที่เป็น Frontend Compiler ที่ตรวจสอบ Syntax และคอมไพล์โค้ด C# ให้กลายเป็น Common Intermediate Language (CIL) บรรจุลงในไฟล์ .dll ซึ่งจากนั้น RyuJIT ภายใน CLR จึงจะนำไปคอมไพล์เป็น Machine Code จริง"
        },
        {
          id: "cs-1-q2",
          question: "ฟีเจอร์ Dynamic Profile-Guided Optimization (Dynamic PGO) ใน .NET 8 มีจุดเด่นสำคัญอย่างไร?",
          options: [
            "ลบโค้ดที่ไม่ทำงานทิ้งจากฮาร์ดดิสก์",
            "สังเกตและบันทึกพฤติกรรมการเรียกใช้งานฟังก์ชันในระหว่างที่แอปพลิเคชันรันจริง แล้วสั่งให้ RyuJIT คอมไพล์ Hot Path ใหม่ด้วย Machine Code ที่มีประสิทธิภาพสูงสุด",
            "เพิ่มขนาดหน่วยความจำ RAM ของเครื่องเซิร์ฟเวอร์",
            "ปิดการทำงานของระบบเครือข่ายเมื่อพบ Error"
          ],
          correctAnswer: 1,
          explanation: "Dynamic PGO ใน .NET 8 เป็นเทคโนโลยีที่คอยตรวจสอบประเภทข้อมูลจริงและเส้นทางการรันของโปรแกรม จากนั้น RyuJIT จะปรับแต่งโครงสร้าง Assembly และ Machine Code ใหม่ เช่น ทำ Devirtualization และ Inlining ทำให้ความเร็วสูงขึ้นอย่างก้าวกระโดด"
        },
        {
          id: "cs-1-q3",
          question: "ฟีเจอร์ Primary Constructors ใน C# 12 สำหรับ Classes ช่วยอำนวยความสะดวกแก่นักพัฒนาอย่างไร?",
          options: [
            "ทำให้ไม่จำเป็นต้องเขียนคำสั่ง using",
            "สามารถประกาศพารามิเตอร์ของ Constructor ไว้ที่วงเล็บต่อท้ายชื่อคลาสได้โดยตรง และพารามิเตอร์เหล่านั้นสามารถเข้าถึงได้ทั่วทั้งคลาส",
            "บังคับให้ทุกคลาสต้องสร้างอ็อบเจกต์ได้เพียงตัวเดียว (Singleton)",
            "แปลง Class ให้กลายเป็น Struct อัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "Primary Constructors ใน C# 12 ช่วยลด Boilerplate Code อย่างมาก โดยอนุญาตให้ระบุพารามิเตอร์ต่อท้ายชื่อคลาสได้เลย ทำให้สะดวกอย่างยิ่งในการทำ Dependency Injection ผ่าน Constructor"
        }
      ]
    },
    {
      id: "cs-2",
      title: "Type Safety, Nullable Reference Types, Records และ Advanced Pattern Matching",
      description: "กำจัดข้อผิดพลาด Billion-Dollar Mistake ด้วย Nullable Reference Types, การสร้าง Immutable Data Objects ด้วย Records (with expressions), Value-based Equality และ Pattern Matching ขั้นสูงใน C# 12 (Property, Relational, List Patterns)",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# Type Safety, Records และ Pattern Matching ใน C# 12

Sir Tony Hoare ผู้ประดิษฐ์ Null Reference ในปี 1965 เคยกล่าวไว้ว่ามันคือ **"The Billion-Dollar Mistake"** เพราะทำให้เกิดข้อผิดพลาดรันไทม์ \`NullReferenceException\` มหาศาลในประวัติศาสตร์ซอฟต์แวร์ C# จัดการเรื่องนี้อย่างเบ็ดเสร็จด้วย **Nullable Reference Types**

---

## 1. Nullable Reference Types (NRT)
ตั้งแต่ C# 8 เป็นต้นมา เมื่อเปิด \`<Nullable>enable</Nullable>\` คอมไพเลอร์จะถือว่า Reference Types ทั้งหมด **ห้ามเป็น null** เป็นค่าเริ่มต้น:

\`\`\`csharp
string nonNullName = "Somchai"; // ห้ามเป็น null เด็ดขาด!
// nonNullName = null; // Warning / Compile Error!

string? nullableEmail = null;   // อนุญาตให้เป็น null ได้เมื่อใส่เครื่องหมาย ?
\`\`\`

- **Static Flow Analysis:** คอมไพเลอร์ C# จะวิเคราะห์โค้ด หากเราตรวจสอบ \`if (nullableEmail != null)\` ภายในบล็อกนั้น ชนิดข้อมูลจะถูก Narrow ให้เป็น \`string\` (ไม่ใช่ nullable) โดยอัตโนมัติ

---

## 2. Records: Immutable Data Carriers และ Value Equality
ในภาษาเชิงวัตถุดั้งเดิม \`class\` สองตัวที่มีข้อมูลภายในเหมือนกันทุกฟิลด์ เมื่อเทียบด้วย \`==\` จะได้ \`false\` เพราะเป็นการเทียบตำแหน่งที่อยู่บนหน่วยความจำ (Reference Equality)

**\`record\`** แก้ไขปัญหานี้ด้วย **Value-based Equality**:
\`\`\`csharp
public record StudentProfile(string Id, string Name, double Gpa);

var s1 = new StudentProfile("STD-01", "สมชาย", 3.8);
var s2 = new StudentProfile("STD-01", "สมชาย", 3.8);

Console.WriteLine(s1 == s2); // ได้ค่า TRUE! (เทียบค่าภายใน ไม่ใช่ที่อยู่แรม)
\`\`\`

### Non-destructive Mutation ด้วยคีย์เวิร์ด \`with\`:
\`\`\`csharp
// สร้างสำเนาใหม่โดยเปลี่ยนแปลงเฉพาะค่า GPA
var s3 = s1 with { Gpa = 4.0 };
\`\`\`

---

## 3. Pattern Matching ยุคใหม่ใน C# 12
C# มีระบบ Pattern Matching ที่ทรงพลังที่สุดภาษาหนึ่งในโลก:
- **Property Patterns:** ตรวจสอบคุณสมบัติภายในของ Object
- **Relational & Logical Patterns (\`and\`, \`or\`, \`not\`, \`>\`, \`<=\`):** ตรวจสอบช่วงเงื่อนไข
- **List Patterns (\`[first, .., last]\`):** ตรวจสอบโครงสร้างของ Array / List`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// Advanced Pattern Matching & Record Mutability in C# 12
// =================================================================

using System;

// 1. นิยาม Record ชนิดต่างๆ
public record SensorReading(string DeviceId, double Temperature, double Humidity, bool IsActive);

public class TelemetryGuard
{
    // 2. Pattern Matching แบบละเอียดขั้นสูง
    public static string EvaluateEnvironmentalRisk(SensorReading reading) => reading switch
    {
        { IsActive: false } => "⚪ อุปกรณ์ปิดการทำงาน (Offline)",
        
        // Relational + Logical Patterns
        { Temperature: >= 45.0, Humidity: >= 85.0 } => "🚨 วิกฤตระดับสูง: อุณหภูมิและความชื้นสูงเกินเกณฑ์ความปลอดภัย!",
        { Temperature: >= 40.0 }                    => "⚠️ คำเตือน: อุณหภูมิห้องเซิร์ฟเวอร์เริ่มร้อนผิดปกติ",
        { Humidity: <= 20.0 }                       => "⚠️ คำเตือน: ความชื้นต่ำเกินไป เสี่ยงต่อการเกิดไฟฟ้าสถิต (ESD)",
        
        // Property Pattern แบบปกติ
        { Temperature: >= 18.0 and <= 25.0, Humidity: >= 40.0 and <= 60.0 } => "✅ สภาพแวดล้อมห้องเซิร์ฟเวอร์เหมาะสมสมบูรณ์แบบ (Optimal)",
        
        _ => "📊 สภาพแวดล้อมอยู่ในเกณฑ์ที่ยอมรับได้"
    };
}

// 3. ทดสอบการเปรียบเทียบ Record และ Non-destructive Mutation
var deviceA = new SensorReading("ESP32-SERVER-A", 48.5, 88.0, true);
var deviceB = deviceA with { Temperature = 22.0, Humidity = 50.0 }; // Non-destructive mutation

Console.WriteLine($"[Device A]: {TelemetryGuard.EvaluateEnvironmentalRisk(deviceA)}");
Console.WriteLine($"[Device B]: {TelemetryGuard.EvaluateEnvironmentalRisk(deviceB)}");

// ตรวจสอบ Value-based Equality
var deviceACopy = new SensorReading("ESP32-SERVER-A", 48.5, 88.0, true);
Console.WriteLine($"✓ ตรวจสอบ Value Equality (deviceA == deviceACopy): {deviceA == deviceACopy}");`,
        description: "การใช้ Records, Non-destructive mutation และ Advanced Pattern Matching ใน C# 12"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `ClassifyScore(double? score): string` โดยใช้ switch expression หาก score เป็น null ให้คืนค่า 'N/A', หาก >= 50 ให้คืนค่า 'PASS', นอกนั้นให้คืนค่า 'FAIL'",
        startingCode: `public static string ClassifyScore(double? score)
{
    // TODO: ใช้ Pattern Matching ตรวจสอบคะแนน
    return "";
}`,
        solution: `public static string ClassifyScore(double? score) => score switch
{
    null => "N/A",
    >= 50.0 => "PASS",
    _ => "FAIL"
};`
      },
      quiz: [
        {
          id: "cs-2-q1",
          question: "อะไรคือข้อแตกต่างหลักระหว่าง `record` และ `class` ทั่วไปใน C# เมื่อทำการเปรียบเทียบด้วยเครื่องหมาย `==`?",
          options: [
            "record จะเปรียบเทียบค่าข้อมูลที่อยู่ภายใน (Value-based Equality) ส่วน class จะเปรียบเทียบตำแหน่ง Memory Address",
            "record ทำงานได้เฉพาะกับตัวเลขเท่านั้น",
            "class เร็วกว่า record เสมอ 10 เท่า",
            "record ไม่สามารถมีเมธอดได้"
          ],
          correctAnswer: 0,
          explanation: "คลาส Record ใน C# จะสร้างฟังก์ชัน Equals() และ GetHashCode() ให้โดยอัตโนมัติตามค่าของ Property ภายใน ทำให้เมื่อเทียบด้วย `==` จะเปรียบเทียบเนื้อหาของข้อมูล (Value Equality) แตกต่างจาก Class ปกติที่เทียบความเท่ากันของพอยน์เตอร์ในหน่วยความจำ (Reference Equality)"
        },
        {
          id: "cs-2-q2",
          question: "ไวยากรณ์ `var copy = original with { Name = \"ใหม่\" };` ใน C# เรียกว่าอะไรและทำงานอย่างไร?",
          options: [
            "เป็นการลบข้อมูลเดิมทิ้งและสร้างตัวแปรใหม่",
            "เรียกว่า Non-destructive Mutation ซึ่งจะสร้างสำเนาตัวใหม่ของ Record โดยคัดลอกค่าเดิมทั้งหมดและแก้ไขเฉพาะฟิลด์ที่ระบุ",
            "เป็นการแก้ไขข้อมูลใน Database โดยอัตโนมัติ",
            "เป็นการแปลง Record ให้กลายเป็น JSON"
          ],
          correctAnswer: 1,
          explanation: "นิพจน์ `with` (With-expression) ใช้สำหรับทำ Non-destructive Mutation บน Record โดยจะโคลนอ็อบเจกต์ตัวใหม่ขึ้นมาและอัปเดตเฉพาะฟิลด์ที่กำหนด ทำให้คงคุณสมบัติความไม่แปรเปลี่ยน (Immutability) ของอ็อบเจกต์เดิมไว้ได้"
        },
        {
          id: "cs-2-q3",
          question: "เครื่องหมาย Null-forgiving Operator (`!`) ใน C# มีจุดประสงค์เพื่อสิ่งใด?",
          options: [
            "เพื่อแปลงค่า boolean ให้เป็นค่าตรงกันข้าม",
            "เพื่อบอก Roslyn Compiler ว่าโปรแกรมเมอร์มั่นใจว่าตัวแปรนี้ไม่มีทางเป็น null ณ จุดนี้อย่างแน่นอน เพื่อระงับคำเตือน Nullable Warning",
            "เพื่อบังคับให้ตัวแปรนั้นกลายเป็น null ทันที",
            "เพื่อเพิ่มความเร็วในการวนลูป"
          ],
          correctAnswer: 1,
          explanation: "Null-forgiving operator (หรือ Null-suppression operator `!`) ใช้ต่อท้ายตัวแปร เช่น `name!.Trim()` เพื่อบอกคอมไพเลอร์ให้ระงับการแจ้งเตือน Null Warning ในกรณีที่โปรแกรมเมอร์มีบริบทที่รับประกันว่าค่าไม่เป็น null อย่างแน่นอน"
        }
      ]
    },
    {
      id: "cs-3",
      title: "การจัดการหน่วยความจำระดับลึก: Stack, Heap, Boxing/Unboxing และ Garbage Collector",
      description: "เจาะลึกสถาปัตยกรรมหน่วยความจำ .NET: ความแตกต่างระหว่าง Value Types และ Reference Types, ต้นทุนของ Boxing/Unboxing, การเขียนโค้ด Zero-Allocation ด้วย Span<T> และ Memory<T>, โครงสร้าง Garbage Collector Generations (Gen 0, Gen 1, Gen 2, LOH, POH)",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมหน่วยความจำใน .NET 8 และ Garbage Collector

การเข้าใจว่าข้อมูลใดถูกจัดเก็บบน **Stack** หรือ **Managed Heap** เป็นสิ่งสำคัญที่สุดในการพัฒนาระบบซอฟต์แวร์ระดับองค์กรที่ต้องรองรับปริมาณงานสูง (High-Throughput / Low-Latency)

---

## 1. Stack vs Managed Heap
- **Stack Memory:** เป็นหน่วยความจำที่มีโครงสร้าง LIFO (Last-In-First-Out) ที่จัดสรรตาม **Stack Frame** ของแต่ละเธรด การจองและคืนพื้นที่เกิดขึ้นด้วยการขยับ CPU Stack Pointer เพียงคำสั่งเดียว ต้นทุน O(1) ไร้ภาระ GC
- **Managed Heap:** พื้นที่จัดเก็บอ็อบเจกต์ที่มีอายุขัยไม่แน่นอน จัดการโดย **Garbage Collector (GC)**

| มิติการเปรียบเทียบ | Value Types (\`struct\`, \`int\`, \`enum\`) | Reference Types (\`class\`, \`string\`, \`array\`) |
| :--- | :--- | :--- |
| **ตำแหน่งที่อยู่** | บน Stack (หรือฝังใน Heap หากเป็นฟิลด์ของ Class) | บน Managed Heap เสมอ (มีตัวชี้ Pointer อยู่บน Stack) |
| **การส่งค่าพารามิเตอร์** | Copy by Value (คัดลอกค่าทั้งก้อน) | Copy by Reference (คัดลอกเฉพาะ Memory Address 8 bytes) |
| **การคืนหน่วยความจำ** | คืนทันทีเมื่อออกจาก Scope ฟังก์ชัน | ต้องรอรอบการเก็บกวาดของ Garbage Collector |

---

## 2. กับดักประสิทธิภาพ: Boxing และ Unboxing
**Boxing** คือกระบวนการแปลง Value Type ให้กลายเป็น Reference Type (\`object\` หรือ Interface):
\`\`\`csharp
int val = 42;
object boxed = val; // เกิด Boxing! -> มีการจองพื้นที่บน Heap 24-32 bytes ทันที!
int unboxed = (int)boxed; // เกิด Unboxing! -> มีการตรวจสอบ Type Check ตอนรันไทม์
\`\`\`
> **ข้อควรระวัง:** การเกิด Boxing ซ้ำๆ นับล้านครั้งในลูปจะทำให้ Heap เต็มอย่างรวดเร็วและกระตุ้นให้ Garbage Collector ทำงานจนระบบกระตุก (GC Stutter)

---

## 3. สถาปัตยกรรม Garbage Collector ใน .NET 8
.NET GC เป็นแบบ **Generational Mark-and-Sweep**:

\`\`\`text
+-------------------------------------------------------------------------+
|                        .NET Managed Heap Layout                         |
+------------------------------------+------------------------------------+
|  Small Object Heap (SOH)           |  Specialized Heaps                 |
+------------------------------------+------------------------------------+
|  Gen 0: อ็อบเจกต์เกิดใหม่ (อายุสั้น) |  Large Object Heap (LOH):          |
|         เก็บกวาดบ่อยมาก (< 1ms)     |  อ็อบเจกต์ที่มีขนาด >= 85,000 ไบต์  |
|                                    |  (ไม่มีการ Compact ค่าเริ่มต้น)    |
|  Gen 1: สะพานคั่นระหว่าง Gen 0 และ 2|                                    |
|                                    |  Pinned Object Heap (POH):         |
|  Gen 2: อ็อบเจกต์อายุยืน (Singletons,|  อ็อบเจกต์ที่ถูกปักหมุดไม่ให้ย้ายที่|
|         DbConnection, Static Caches)|  สำหรับส่งให้ C/Native Interop     |
+------------------------------------+------------------------------------+
\`\`\`

---

## 4. โค้ดประสิทธิภาพสูงระดับ Zero-Allocation ด้วย \`Span<T>\`
\`Span<T>\` เป็น \`ref struct\` ชนิดพิเศษที่อนุญาตให้เราตัดแบ่งชิ้นข้อมูล (Slice) จาก Array, Native Pointer หรือ String ได้โดย **ไม่มีการจัดสรรหน่วยความจำบน Heap แม้แต่ไบต์เดียว!**`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// .NET 8 Memory Architecture: Span<T> Zero-Allocation Slicing
// =================================================================

using System;

Console.WriteLine("=== การเปรียบเทียบการตัดสตริง: Substring vs ReadOnlySpan ===");

string rawTelemetryPacket = "SENSOR:ESP32_TEMP:28.75:STATUS_OK";

// 1. วิธีดั้งเดิม (สร้าง String Object ใหม่บน Heap ทุกรอบ -> เปลืองแรมและกระตุ้น GC)
string tempTraditional = rawTelemetryPacket.Substring(18, 5);
Console.WriteLine($"[Traditional Substring] ค่าที่ได้: '{tempTraditional}' (จอง String ใหม่บน Heap)");

// 2. วิธีขั้นสูงด้วย ReadOnlySpan<char> (Zero-Allocation บน Stack)
ReadOnlySpan<char> spanView = rawTelemetryPacket.AsSpan();
ReadOnlySpan<char> tempSpan = spanView.Slice(18, 5);

// แปลงค่าเป็นตัวเลขได้โดยตรงจาก Span โดยไม่ต้องสร้างสตริงกลางคัน
if (double.TryParse(tempSpan, out double temperatureValue))
{
    Console.WriteLine($"[Zero-Allocation Span]  ค่าที่แปลงได้: {temperatureValue}°C (ไร้ภาระ GC 100%!)");
}

// 3. ตรวจสอบข้อมูล Garbage Collector ปัจจุบัน
Console.WriteLine("\n[GC Diagnostic Info]");
Console.WriteLine($"• หน่วยความจำ Managed Heap: {GC.GetTotalMemory(false) / 1024} KB");
Console.WriteLine($"• รอบการเก็บกวาด Gen 0: {GC.CollectionCount(0)} ครั้ง");
Console.WriteLine($"• รอบการเก็บกวาด Gen 1: {GC.CollectionCount(1)} ครั้ง");
Console.WriteLine($"• รอบการเก็บกวาด Gen 2: {GC.CollectionCount(2)} ครั้ง");`,
        description: "การวิเคราะห์การจัดการหน่วยความจำและการตัดข้อมูลแบบ Zero-Allocation ด้วย Span<T>"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `ExtractYear(ReadOnlySpan<char> dateSpan): int` ที่รับ Span วันที่ในรูปแบบ 'YYYY-MM-DD' แล้วใช้ `Slice` ดึงเฉพาะ 4 ตัวแรกมาแปลงเป็นตัวเลข int",
        startingCode: `public static int ExtractYear(ReadOnlySpan<char> dateSpan)
{
    // TODO: ใช้ Slice และ int.Parse บน Span
    return 0;
}`,
        solution: `public static int ExtractYear(ReadOnlySpan<char> dateSpan)
{
    return int.Parse(dateSpan.Slice(0, 4));
}`
      },
      quiz: [
        {
          id: "cs-3-q1",
          question: "กระบวนการ Boxing ในภาษา C# คืออะไร และส่งผลเสียต่อประสิทธิภาพอย่างไร?",
          options: [
            "คือการบีบอัดไฟล์ซอร์สโค้ดให้เล็กลง",
            "คือการแปลงข้อมูลจาก Value Type ให้กลายเป็น Reference Type ซึ่งบังคับให้ต้องมีการจัดสรรหน่วยความจำก้อนใหม่ลงบน Managed Heap และเพิ่มภาระงานให้แก่ Garbage Collector",
            "คือการแปลงโค้ด C# ให้กลายเป็น WebAssembly",
            "คือการเชื่อมต่อคอมพิวเตอร์เข้ากับเครือข่ายบล็อกเชน"
          ],
          correctAnswer: 1,
          explanation: "Boxing คือการนำข้อมูลจาก Stack ไปห่อหุ้มใน Object เพื่อเก็บไว้บน Managed Heap ซึ่งมีต้นทุน Memory Allocation และการก๊อปปี้ข้อมูล หากเกิดในจุดที่มีการทำงานถี่ๆ (Hot Path) จะทำให้ระบบช้าลงอย่างมาก"
        },
        {
          id: "cs-3-q2",
          question: "อ็อบเจกต์ใน Large Object Heap (LOH) ของ .NET มีเกณฑ์ขนาดขั้นต่ำเท่าใด?",
          options: [
            "1,024 ไบต์ (1 KB)",
            "85,000 ไบต์ขึ้นไป",
            "10 เมกะไบต์",
            "1 จิกะไบต์"
          ],
          correctAnswer: 1,
          explanation: "ใน .NET อ็อบเจกต์ที่มีขนาดตั้งแต่ 85,000 ไบต์ขึ้นไป (เช่น อาเรย์ขนาดใหญ่) จะถูกจัดสรรลงใน Large Object Heap (LOH) โดยตรง ซึ่งจะไม่ผ่านรอบการเก็บกวาดของ Gen 0/1 แต่จะถูกเก็บกวาดเฉพาะใน Gen 2 เพื่อลดต้นทุนในการเคลื่อนย้ายหน่วยความจำ"
        },
        {
          id: "cs-3-q3",
          question: "ทำไม `Span<T>` ถึงช่วยให้การประมวลผลข้อมูล (เช่น การตัดข้อความ Parsing) มีประสิทธิภาพสูงกว่าฟังก์ชันทั่วไป?",
          options: [
            "เพราะ Span<T> เชื่อมต่อตรงกับการ์ดจอ GPU",
            "เพราะ Span<T> เป็น ref struct ที่ทำงานบน Stack เท่านั้น ช่วยให้สามารถชี้และตัดส่วนของหน่วยความจำต่อเนื่องได้โดยตรงแบบ Zero-Allocation โดยไม่ต้องสร้างอ็อบเจกต์ใหม่บน Heap",
            "เพราะ Span<T> แปลงตัวอักษรเป็นตัวเลขได้ทันทีโดยไม่ต้องตรวจสอบ",
            "เพราะ Span<T> ลบข้อมูลที่ซ้ำกันทิ้งอัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "Span<T> เป็น Representation ของหน่วยความจำที่ติดกัน (Contiguous Memory) สามารถทำ Slice เพื่อดูข้อมูลเฉพาะส่วนได้โดยไม่มีการจัดสรร Memory ก้อนใหม่บน Heap ทำให้ไม่มีการจองแรมเพิ่มและไม่มีภาระงานตกค้างให้ GC"
        }
      ]
    },
    {
      id: "cs-4",
      title: "การประมวลผลข้อมูลขั้นสูงด้วย LINQ (Language Integrated Query) และ Expressions",
      description: "ทำความเข้าใจสถาปัตยกรรม LINQ: ความแตกต่างระหว่าง Deferred (Lazy) Execution และ Immediate Execution, การเปรียบเทียบ IEnumerable<T> และ IQueryable<T>, Expression Trees และการแปลคำสั่ง LINQ สู่ SQL",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# ภาษาการสืบค้นข้อมูล LINQ (Language Integrated Query)

**LINQ** ถือเป็นหนึ่งในนวัตกรรมทางภาษาที่ยอดเยี่ยมที่สุดของ C# ช่วยให้นักพัฒนาสามารถสืบค้น คัดกรอง จัดกลุ่ม และแปลงข้อมูลจากหลากหลายแหล่ง (In-Memory Collections, XML, ฐานข้อมูล SQL) ได้ด้วยไวยากรณ์ที่มี **Type Safety 100%**

---

## 1. Deferred Execution vs Immediate Execution
การทำงานของ LINQ แบ่งออกเป็น 2 พฤติกรรมที่ต้องเข้าใจอย่างลึกซึ้ง:
1. **Deferred (Lazy) Execution:** คำสั่งอย่าง \`Where()\`, \`Select()\`, \`OrderBy()\` จะ **ยังไม่ทำการประมวลผลจริง** ในตอนที่ประกาศ แต่จะสร้าง Enumerator เตรียมไว้ และจะเริ่มประมวลผลก็ต่อเมื่อมีการวนลูป \`foreach\` หรือดึงข้อมูลเท่านั้น
2. **Immediate Execution:** คำสั่งที่บังคับประมวลผลทันทีและส่งผลลัพธ์ออกมาเป็นก้อนข้อมูล เช่น \`ToList()\`, \`ToArray()\`, \`Count()\`, \`First()\`, \`Sum()\`

\`\`\`csharp
// ยังไม่มีการวนลูปหรือประมวลผลในบรรทัดนี้ (Zero Overhead)
var query = students.Where(s => s.Gpa >= 3.5);

// ข้อมูลถูกประมวลผลจริงในบรรทัดนี้!
foreach (var s in query) { /* ... */ }
\`\`\`

---

## 2. \`IEnumerable<T>\` vs \`IQueryable<T>\` (หัวใจของความเร็วฐานข้อมูล)

\`\`\`text
+-------------------------------------------------------------------------+
|                  IEnumerable<T> vs IQueryable<T>                        |
+------------------------------------+------------------------------------+
|  IEnumerable<T> (In-Memory)        |  IQueryable<T> (Out-of-Process)    |
+------------------------------------+------------------------------------+
|  • รับ Func<T, bool> (Delegates)   |  • รับ Expression<Func<T, bool>>   |
|  • โค้ดถูกคอมไพล์เป็น CIL แล้ว     |  • ส่งโครงสร้างเป็น Expression Tree|
|  • ดึงข้อมูลทั้งหมดจาก DB เข้า RAM |  • Provider (EF Core) แปลงเป็น SQL |
|    แล้วจึงคัดกรองในหน่วยความจำ      |    ส่งไปรันที่เซิร์ฟเวอร์ฐานข้อมูล |
+------------------------------------+------------------------------------+
\`\`\`

> **ข้อผิดพลาดคลาสสิก:** การเรียก \`.ToList()\` ก่อนคำสั่ง \`.Where()\` ใน Entity Framework จะทำให้แอปพลิเคชันดูดข้อมูลทั้งตาราง (เช่น 1,000,000 แถว) มาคัดกรองใน RAM ของเครื่องเซิร์ฟเวอร์จนเมมโมรี่เต็ม!`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// Advanced LINQ Operations & Performance Diagnostics
// =================================================================

using System;
using System.Collections.Generic;
using System.Linq;

public record CourseEnrollment(string StudentId, string CourseCode, double Score, string Department);

List<CourseEnrollment> enrollments = [
    new("STD-01", "CS-801", 92.5, "Computer Science"),
    new("STD-02", "CS-801", 84.0, "Computer Science"),
    new("STD-03", "IT-501", 76.0, "Information Technology"),
    new("STD-04", "CS-801", 95.0, "Computer Science"),
    new("STD-05", "IT-501", 88.5, "Information Technology"),
    new("STD-06", "BC-201", 62.0, "Business Computing")
];

Console.WriteLine("=== การวิเคราะห์ข้อมูลขั้นสูงด้วย LINQ Pipeline ===");

// 1. จัดกลุ่มตามแผนกวิชา และคำนวณสถิติคะแนน
var departmentSummary = enrollments
    .GroupBy(e => e.Department)
    .Select(g => new
    {
        Department = g.Key,
        TotalStudents = g.Count(),
        AverageScore = Math.Round(g.Average(e => e.Score), 2),
        TopScore = g.Max(e => e.Score)
    })
    .OrderByDescending(d => d.AverageScore)
    .ToList(); // Immediate execution

foreach (var dept in departmentSummary)
{
    Console.WriteLine($"🏛️ แผนกวิชา: {dept.Department}");
    Console.WriteLine($"   • จำนวนนักศึกษา : {dept.TotalStudents} คน");
    Console.WriteLine($"   • คะแนนเฉลี่ย   : {dept.AverageScore}");
    Console.WriteLine($"   • คะแนนสูงสุด   : {dept.TopScore}\n");
}

// 2. LINQ Method Chaining: ค้นหานักศึกษาที่มีคะแนนสูงสุดของแต่ละหลักสูตร
var topStudentPerCourse = enrollments
    .GroupBy(e => e.CourseCode)
    .Select(g => g.MaxBy(e => e.Score)) // ฟีเจอร์ใหม่ .NET 6+
    .ToList();

Console.WriteLine("🏆 นักศึกษาคะแนนสูงสุดประจำแต่ละวิชา (MaxBy):");
foreach (var top in topStudentPerCourse)
{
    if (top is not null)
    {
        Console.WriteLine($"• วิชา {top.CourseCode}: นศ. {top.StudentId} ได้คะแนน {top.Score}");
    }
}`,
        description: "การใช้ LINQ GroupBy, Aggregations และตัวดำเนินการ MaxBy ใน .NET 8"
      },
      challenge: {
        description: "เขียนคำสั่ง LINQ ที่กรองเฉพาะตัวเลขที่เป็นจำนวนคู่จาก List<int> เรียงจากน้อยไปมาก และคืนค่าผลลัพธ์เป็น List<int>",
        startingCode: `public static List<int> FilterEvenNumbers(List<int> numbers)
{
    // TODO: เขียนคำสั่ง LINQ กรองเลขคู่และเรียงลำดับ
    return [];
}`,
        solution: `public static List<int> FilterEvenNumbers(List<int> numbers)
{
    return numbers.Where(n => n % 2 == 0).OrderBy(n => n).ToList();
}`
      },
      quiz: [
        {
          id: "cs-4-q1",
          question: "พฤติกรรมแบบ Deferred (Lazy) Execution ในคำสั่ง LINQ มีลักษณะการทำงานอย่างไร?",
          options: [
            "คำสั่งจะหยุดทำงานถาวรจนกว่าจะรีสตาร์ทเครื่อง",
            "คำสั่งจะไม่ถูกประมวลผลทันทีที่ประกาศ แต่จะรอจนกว่าจะมีการวนลูปเข้าถึงข้อมูลจริง หรือมีการเรียกคำสั่ง Materialization เช่น ToList()",
            "คำสั่งจะทำงานเฉพาะในเวลากลางคืน",
            "เป็นการส่งข้อมูลไปยังเซิร์ฟเวอร์คลาวด์ทันที"
          ],
          correctAnswer: 1,
          explanation: "Deferred Execution หมายถึงคำสั่ง Query จะถูกจัดเตรียมไว้ในรูปของ Iterator/Expression และจะยังไม่ดึงข้อมูลหรือวนลูปจนกว่าโปรแกรมจะต้องการข้อมูลตัวแรกจริงๆ เช่น เมื่อเจอ foreach หรือคำสั่ง ToList()"
        },
        {
          id: "cs-4-q2",
          question: "อะไรคือความแตกต่างที่สำคัญที่สุดระหว่าง `IEnumerable<T>` และ `IQueryable<T>` ในการทำงานกับฐานข้อมูล?",
          options: [
            "IEnumerable<T> ใช้กับตัวเลข ส่วน IQueryable<T> ใช้กับตัวอักษร",
            "IQueryable<T> รับพารามิเตอร์เป็น Expression Tree ซึ่งถูกแปลงเป็นคำสั่ง SQL ไปประมวลผลที่ฐานข้อมูล ส่วน IEnumerable<T> จะดึงข้อมูลทั้งหมดเข้ามาในหน่วยความจำ RAM ของแอปก่อนแล้วจึงกรอง",
            "IEnumerable<T> สามารถเชื่อมต่อฐานข้อมูลได้เร็วกว่า 100 เท่า",
            "ไม่มีความแตกต่างกัน เป็นชื่อพ้องความหมาย"
          ],
          correctAnswer: 1,
          explanation: "IQueryable เก็บคำสั่งในรูปของ Expression Trees ซึ่งตัวแปลภาษาของ ORM (เช่น EF Core) สามารถนำไปแปลงเป็นคำสั่ง SQL WHERE/ORDER BY ให้ฐานข้อมูลทำงานและส่งเฉพาะผลลัพธ์ที่ต้องการกลับมา ต่างจาก IEnumerable ที่ดึงทุกอย่างเข้าแรมก่อนแล้วจึงประมวลผลด้วย CIL"
        },
        {
          id: "cs-4-q3",
          question: "คำสั่งใดใน LINQ จัดเป็น Immediate Execution ที่บังคับให้ประมวลผลข้อมูลและคืนผลลัพธ์ทันที?",
          options: [
            "Where()",
            "Select()",
            "OrderBy()",
            "ToList() หรือ Count()"
          ],
          correctAnswer: 3,
          explanation: "คำสั่งอย่าง Where, Select, Take เป็น Deferred Execution ในขณะที่คำสั่ง ToList, ToArray, Count, First, Sum เป็น Immediate Execution ที่จะทำการวนลูปประมวลผลข้อมูลในทันทีและส่งผลลัพธ์ออกมาเป็นก้อนข้อมูลจริง"
        }
      ]
    },
    {
      id: "cs-5",
      title: "การเขียนโปรแกรม Asynchronous: async/await, Task Parallel Library และ CancellationToken",
      description: "สถาปัตยกรรม Non-blocking Asynchronous ใน C#: การทำงานภายในของ Roslyn Async State Machine, ความแตกต่างระหว่าง Task และ ValueTask, การป้องกันปัญหา Deadlock ด้วย ConfigureAwait(false), Cooperative Cancellation ด้วย CancellationToken และการทำงานแบบคู่ขนานด้วย Task.WhenAll",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# Asynchronous Programming ใน C#: Task Parallel Library (TPL)

ในระบบ Enterprise Web API การเรียกใช้คำสั่งแบบ Synchronous Blocking (เช่น \`Thread.Sleep()\` หรือคำสั่งอ่านดิสก์/ฐานข้อมูลแบบรอผล) จะทำให้ **Thread Pool หมดลง (Thread Starvation)** ส่งผลให้เซิร์ฟเวอร์ไม่สามารถตอบรับคำขอใหม่ได้

---

## 1. กลไก I/O Completion Ports (IOCP) vs OS Threads
คำสั่ง \`await\` ใน C# ไม่ได้ทำการจองเธรดไว้รอ!
- เมื่อโปรแกรมสั่ง \`await httpClient.GetStringAsync(...)\` ตัวเธรดจะถูกปล่อยคืนกลับสู่ **CLR Thread Pool** เพื่อไปให้บริการคำขอของผู้ใช้คนอื่นทันที
- การรอคอยข้อมูลจากเครือข่ายจะถูกส่งต่อไปยังฮาร์ดแวร์ OS ผ่านกลไก **I/O Completion Ports (IOCP)** โดยไม่กิน CPU หรือเธรดแม้แต่ตัวเดียว
- เมื่องาน I/O เสร็จสิ้น OS จะส่ง Interrupt แจ้ง CLR เพื่อหยิบเธรดว่างจาก Pool มารันโค้ดส่วนที่เหลือต่อ

---

## 2. Roslyn Compiler Async State Machine
เบื้องหลังคำสั่ง \`async/await\` คอมไพเลอร์ Roslyn จะทำการแปลงฟังก์ชันนั้นให้กลายเป็น **State Machine Struct** ที่ Implement \`IAsyncStateMachine\`:

\`\`\`text
[ Method Call: FetchDataAsync() ]
               │
               ▼
[ State 0: เริ่มคำขอ I/O ] ──(ยืมเธรดคืนสู่ Thread Pool)──> [ เธรดว่างรับงานอื่น ]
               │
          (I/O สำเร็จ)
               ▼
[ State 1: ปลุก State Machine ให้ทำงานต่อ ]
               │
               ▼
[ State -1: สำเร็จและส่งมอบผลลัพธ์ Task ]
\`\`\`

---

## 3. กฎทอง 4 ข้อของวิศวกรซอฟต์แวร์ C#
1. **Async All the Way:** ใช้คำสั่ง Async ตลอดทั้งสาย ตั้งแต่ Controller จนถึงชั้น Database
2. **ห้ามใช้ \`.Result\` หรือ \`.Wait()\`:** การบล็อก Task แบบ Synchronous เสี่ยงต่อการเกิด **Deadlock** ในระบบที่มี SynchronizationContext
3. **ใช้ \`ValueTask<T>\` เมื่อฟังก์ชันมักส่งคืนผลลัพธ์ทันที:** เพื่อหลีกเลี่ยงการจัดสรรอ็อบเจกต์ Task ลงบน Heap
4. **ส่งต่อ \`CancellationToken\` เสมอ:** เพื่อให้เซิร์ฟเวอร์สามารถยกเลิกงานได้ทันทีเมื่อผู้ใช้กดยกเลิกหรือเกิด Timeout`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// Production-Grade Async Programming with CancellationToken & TPL
// =================================================================

using System;
using System.Threading;
using System.Threading.Tasks;

public class PaymentProcessingEngine
{
    // จำลองการเรียก API ธนาคารภายนอกด้วย Non-blocking I/O
    public static async Task<string> ProcessBankGatewayAsync(string bankCode, int latencyMs, CancellationToken ct)
    {
        Console.WriteLine($"⏳ [INIT] กำลังส่งสัญญาณเชื่อมต่อเกตเวย์: {bankCode}...");

        // ตรวจสอบสถานะการยกเลิกก่อนทำงาน
        ct.ThrowIfCancellationRequested();

        // จำลอง Non-blocking I/O Delay (คืนเธรดกลับสู่ Thread Pool)
        await Task.Delay(latencyMs, ct);

        return $"✅ ธนาคาร [{bankCode}]: ชำระเงินสำเร็จ (Transaction Ref: TXN-{Guid.NewGuid().ToString()[..8]})";
    }
}

// ใช้งาน CancellationTokenSource ร่วมกับ Timeout Controller
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2.5)); // กำหนด Timeout รวม 2.5 วินาที

try
{
    Console.WriteLine("🚀 เริ่มประมวลผลคำสั่งตัดยอดเงินพร้อมกัน 3 ช่องทาง (Parallel Concurrency):");

    var taskSCB = PaymentProcessingEngine.ProcessBankGatewayAsync("SCB Easy", 400, cts.Token);
    var taskKBANK = PaymentProcessingEngine.ProcessBankGatewayAsync("K PLUS", 600, cts.Token);
    var taskBBL = PaymentProcessingEngine.ProcessBankGatewayAsync("Bualuang mBangking", 500, cts.Token);

    // ประมวลผลพร้อมกันและรอคอยให้ทุกงานเสร็จสิ้นด้วย Task.WhenAll
    string[] results = await Task.WhenAll(taskSCB, taskKBANK, taskBBL);

    Console.WriteLine("\n--- ผลสรุปการทำรายการผ่านระบบ TPL ---");
    foreach (var res in results)
    {
        Console.WriteLine(res);
    }
}
catch (OperationCanceledException)
{
    Console.WriteLine("❌ การประมวลผลถูกยกเลิกเนื่องจากหมดเวลา (Timeout Exceeded)");
}`,
        description: "การประมวลผล Asynchronous พร้อมกันด้วย Task.WhenAll และการยกเลิกงานด้วย CancellationToken"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `FetchDataWithTimeoutAsync(int delayMs, int timeoutMs)` ที่ใช้ `CancellationTokenSource` ยกเลิกงานหาก `Task.Delay(delayMs)` ใช้เวลานานกว่า `timeoutMs`",
        startingCode: `public static async Task FetchDataWithTimeoutAsync(int delayMs, int timeoutMs)
{
    // TODO: สร้าง CancellationTokenSource พร้อม timeout
}`,
        solution: `public static async Task FetchDataWithTimeoutAsync(int delayMs, int timeoutMs)
{
    using var cts = new CancellationTokenSource(TimeSpan.FromMilliseconds(timeoutMs));
    await Task.Delay(delayMs, cts.Token);
}`
      },
      quiz: [
        {
          id: "cs-5-q1",
          question: "เมื่อโค้ดพบคำสั่ง `await Task.Delay(1000)` เกิดอะไรขึ้นกับ OS Thread ที่กำลังรันโค้ดนั้น?",
          options: [
            "เธรดจะหยุดนิ่งและกิน CPU 100% เป็นเวลา 1 วินาที",
            "เธรดจะถูกปล่อยคืนกลับสู่ Thread Pool เพื่อไปประมวลผลงานอื่นได้อย่างอิสระ โดยไม่มีการบล็อกเธรด",
            "เธรดจะถูกทำลายทิ้งทันทีและต้องสร้างใหม่",
            "คอมพิวเตอร์จะส่งสัญญาณเสียงเตือน"
          ],
          correctAnswer: 1,
          explanation: "หัวใจของ Non-blocking Asynchronous I/O ใน C# คือการคืนเธรดกลับเข้า Thread Pool ในระหว่างที่รอคอย I/O ทำให้อุปกรณ์ฮาร์ดแวร์ทำงานได้เต็มประสิทธิภาพโดยไม่สูญเสียเธรดไปกับการนั่งรอเฉยๆ"
        },
        {
          id: "cs-5-q2",
          question: "เหตุใดจึงควรหลีกเลี่ยงการใช้ `.Result` หรือ `.Wait()` บน Task ใน C#?",
          options: [
            "เพราะทำให้ตัวอักษรในเทอร์มินัลกลายเป็นตัวเอียง",
            "เพราะเป็นการบังคับเปลี่ยนการทำงานแบบ Async ให้เป็น Synchronous Blocking ซึ่งอาจทำให้เกิด Thread Starvation หรือเกิด Deadlock ในสภาพแวดล้อมที่มี SynchronizationContext",
            "เพราะคำสั่งนี้ถูกยกเลิกไปแล้วใน .NET 8",
            "เพราะทำให้ขนาดของไฟล์ .dll ใหญ่ขึ้น 10 เท่า"
          ],
          correctAnswer: 1,
          explanation: "การเรียก .Result หรือ .Wait() จะทำการบล็อกเธรดปัจจุบันเพื่อรอให้ Task ทำงานเสร็จ หาก Task นั้นต้องการเธรดเดิมในการกลับมาทำงานต่อ (ผ่าน SynchronizationContext) จะเกิดปัญหา Deadlock ที่ทำให้โปรแกรมค้างสนิท"
        },
        {
          id: "cs-5-q3",
          question: "บทบาทของ `CancellationToken` ในการพัฒนา Asynchronous Applications ใน .NET คืออะไร?",
          options: [
            "ใช้สำหรับตรวจสอบรหัสผ่านของผู้ดูแลระบบ",
            "ทำหน้าที่เป็นกลไกยกเลิกงานแบบประสานงาน (Cooperative Cancellation) เพื่อส่งสัญญาณให้เมธอดหยุดการทำงานทันทีเมื่อผู้ใช้กดยกเลิกคำขอหรือเมื่อเกิด Timeout ช่วยประหยัดทรัพยากรเซิร์ฟเวอร์",
            "ใช้สำหรับสร้างตัวเลขสุ่ม",
            "ใช้ในการเข้ารหัสข้อมูลฮาร์ดดิสก์"
          ],
          correctAnswer: 1,
          explanation: "CancellationToken เป็นกลไกมาตรฐานของ .NET ที่ใช้แจ้งเตือนไปยังงานเบื้องหลังหรือคำสั่งสืบค้นฐานข้อมูลว่าไม่ต้องทำงานต่อแล้ว (เช่น ผู้ใช้งานปิดแท็บเบราว์เซอร์ไปแล้ว) ทำให้เซิร์ฟเวอร์สามารถยกเลิกงานและคืนทรัพยากรได้ทันที"
        }
      ]
    },
    {
      id: "cs-6",
      title: "High-Performance Web APIs ด้วย ASP.NET Core Minimal APIs และ Kestrel",
      description: "พัฒนา Microservices ความเร็วสูงด้วย ASP.NET Core: สถาปัตยกรรม Kestrel Web Server, Minimal APIs route handlers, Model Binding, Type-Safe TypedResults, OpenAPI / Swagger Documentation, และการทำ Native AOT Compilation ใน .NET 8",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# ASP.NET Core Minimal APIs และ Kestrel Web Server

**ASP.NET Core** ได้รับการจัดอันดับโดย TechEmpower Benchmarks ให้เป็นหนึ่งใน Web Framework ที่เร็วที่สุดในโลก สามารถประมวลผลคำขอระดับ **ล้าน Requests ต่อวินาที** บนฮาร์ดแวร์ทั่วไป

---

## 1. สถาปัตยกรรม Kestrel Web Server
Kestrel เป็นเว็บเซิร์ฟเวอร์ระดับแกนกลางที่เขียนด้วย C# ทั้งหมด:
- ทำงานบน **Socket-based Transport Layer** และรองรับโปรโตคอล HTTP/1.1, HTTP/2 และ HTTP/3 (QUIC)
- ใช้ **Pipelines (\`System.IO.Pipelines\`)** และ **ArrayPool** ในการจัดการ Network I/O แบบ Zero-Copy

---

## 2. Minimal APIs ใน .NET 8 (Zero-Overhead Routing)
ในอดีต Controller-based API มี Overhead สูงจากการใช้ Reflection ในการค้นหา Action และการสร้าง Controller Instance ใหม่ในทุก Request

**Minimal APIs** นำเสนอแนวคิด Endpoint-Centric:
- ประกาศ Route และ Handler ได้โดยตรงใน \`Program.cs\`
- ใช้ **Source Generators** ตอนคอมไพล์เพื่อแมป Route และ Model Binding โดยไม่ต้องพึ่งพา Reflection ตอนรันไทม์
- เริ่มต้นทำงานได้ในเวลาเพียงไม่กี่มิลลิวินาที

\`\`\`csharp
var app = WebApplication.Create(args);

app.MapGet("/api/courses/{id}", (string id, ICourseService service) =>
{
    var course = service.GetById(id);
    return course is not null ? TypedResults.Ok(course) : TypedResults.NotFound();
});

app.Run();
\`\`\`

---

## 3. Native AOT (Ahead-of-Time Compilation) ใน .NET 8
.NET 8 รองรับการคอมไพล์แอปพลิเคชัน ASP.NET Core Minimal APIs ออกมาเป็น **Native Machine Code Binary แบบสมบูรณ์ (Native AOT)**:
- ไม่ต้องมี .NET Runtime หรือ JIT Compiler ในเซิร์ฟเวอร์ปลายทาง
- **Startup Time เหลือเพียง 5-10 มิลลิวินาที** (เหมาะสำหรับ Serverless / AWS Lambda)
- ขนาดของ Docker Container เหลือเพียง **15-30 MB** และกินแรมน้อยลงกว่า 70%`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// ASP.NET Core Minimal API Architecture & TypedResults Pattern
// =================================================================

using System;
using System.Collections.Generic;

// 1. Data Transfer Objects (DTOs)
public record CourseDto(string Id, string Title, string Category, decimal Price);
public record CreateCourseRequest(string Title, string Category, decimal Price);

// 2. จำลอง Service Handler
public class CourseEndpointHandler
{
    private static readonly Dictionary<string, CourseDto> _db = new()
    {
        ["CS-801"] = new("CS-801", "Advanced C# & .NET 8 Enterprise Architecture", "Software Engineering", 4500.00m),
        ["GO-301"] = new("GO-301", "Go Microservices & High-Concurrency Systems", "Cloud Systems", 3900.00m)
    };

    // จำลอง GET /api/v1/courses/{id}
    public static void HandleGetCourse(string id)
    {
        if (_db.TryGetValue(id, out var course))
        {
            Console.WriteLine($"[HTTP 200 OK] พบข้อมูลหลักสูตร:");
            Console.WriteLine($"  • ID       : {course.Id}");
            Console.WriteLine($"  • หลักสูตร : {course.Title}");
            Console.WriteLine($"  • ราคา     : {course.Price:C2} THB");
        }
        else
        {
            Console.WriteLine($"[HTTP 404 NotFound] ไม่พบหลักสูตร ID: '{id}' ในระบบ");
        }
    }

    // จำลอง POST /api/v1/courses
    public static void HandleCreateCourse(CreateCourseRequest req)
    {
        string newId = $"CRS-{Guid.NewGuid().ToString()[..6].ToUpper()}";
        var newCourse = new CourseDto(newId, req.Title, req.Category, req.Price);
        _db[newId] = newCourse;

        Console.WriteLine($"[HTTP 201 Created] เพิ่มหลักสูตรใหม่สำเร็จ:");
        Console.WriteLine($"  • รหัสหลักสูตรใหม่ : {newCourse.Id}");
        Console.WriteLine($"  • Location Header : /api/v1/courses/{newCourse.Id}");
    }
}

Console.WriteLine("=== IT Academy ASP.NET Core Minimal API Engine ===");
CourseEndpointHandler.HandleGetCourse("CS-801");
Console.WriteLine();
CourseEndpointHandler.HandleCreateCourse(new CreateCourseRequest(
    Title: "Modern Full-Stack Rust & WebAssembly",
    Category: "Systems Programming",
    Price: 4900.00m
));`,
        description: "สถาปัตยกรรม Minimal API Route Handlers และ TypedResults Pattern"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `ValidateCoursePrice(decimal price): bool` ที่ตรวจสอบว่าราคาหลักสูตรต้องมากกว่า 0 และไม่เกิน 50,000 บาท",
        startingCode: `public static bool ValidateCoursePrice(decimal price)
{
    // TODO: ตรวจสอบช่วงราคา
    return false;
}`,
        solution: `public static bool ValidateCoursePrice(decimal price)
{
    return price > 0 && price <= 50000m;
}`
      },
      quiz: [
        {
          id: "cs-6-q1",
          question: "เหตุใดสถาปัตยกรรม Minimal APIs ใน .NET 8 จึงมีประสิทธิภาพและความเร็วในการตอบสนองสูงกว่า Controller-based API แบบดั้งเดิม?",
          options: [
            "เพราะ Minimal APIs ไม่รองรับคำสั่ง if-else",
            "เพราะตัด Overhead ของ Reflection ในการค้นหา Controller และ Action ทิ้ง โดยใช้ Source Generators แมปปิ้ง Route ตั้งแต่ตอนคอมไพล์ ทำให้ใช้หน่วยความจำน้อยลงและเริ่มทำงานได้ทันที",
            "เพราะ Minimal APIs ทำงานเฉพาะบนเครื่อง Mac เท่านั้น",
            "เพราะไม่มีการตรวจสอบความปลอดภัยของข้อมูล"
          ],
          correctAnswer: 1,
          explanation: "Minimal APIs ตัดทอนความซับซ้อนของ Controller Factory และ Reflection Middleware ออกไป การจับคู่เส้นทาง URL และการแปลงข้อมูลถูกสร้างล่วงหน้าตั้งแต่ตอนคอมไพล์ (Compile-time Source Generation) ทำให้ประมวลผลคำขอได้รวดเร็วและกินแรมน้อยมาก"
        },
        {
          id: "cs-6-q2",
          question: "การใช้ `TypedResults` (เช่น `TypedResults.Ok(data)`, `TypedResults.NotFound()`) ใน Minimal APIs มีประโยชน์เหนือกว่า `Results.Ok()` อย่างไร?",
          options: [
            "ช่วยเพิ่มความเร็วอินเทอร์เน็ตของเซิร์ฟเวอร์",
            "ให้ Type Safety ในระดับคอมไพล์ (Compile-time Type Checking) ช่วยให้การทำ Unit Test ทำได้ง่ายโดยไม่ต้อง Cast Object และช่วยให้ OpenAPI (Swagger) แสดงเอกสาร Response Type ได้แม่นยำ 100%",
            "ลบรูปภาพที่ซ้ำซ้อนใน API",
            "ทำให้แอปพลิเคชันไม่จำเป็นต้องต่อฐานข้อมูล"
          ],
          correctAnswer: 1,
          explanation: "TypedResults คืนค่าเป็น Concrete Type (เช่น Ok<T>, NotFound) ซึ่งทำให้ Swagger/OpenAPI สามารถตรวจสอบ Metadata ของ Response Type ได้อย่างสมบูรณ์โดยไม่ต้องใส่ Attribute กำกับ และช่วยให้การเขียน Unit Test สามารถดึงค่า data ออกมาตรวจสอบได้โดยตรง"
        },
        {
          id: "cs-6-q3",
          question: "จุดเด่นที่สุดของการคอมไพล์แอปพลิเคชัน .NET 8 ในรูปแบบ Native AOT (Ahead-of-Time) คืออะไร?",
          options: [
            "ทำให้โปรแกรมสามารถขุดเหรียญคริปโตได้",
            "คอมไพล์แอปพลิเคชันเป็น Machine Code ที่สามารถรันได้ทันทีโดยไม่ต้องติดตั้ง .NET Runtime ทำให้เวลาในการบูตระบบเหลือเพียงไม่กี่มิลลิวินาที และลดขนาด Container เหลือเพียงไม่กี่เมกะไบต์",
            "บังคับให้ทุกตัวแปรต้องมีขนาด 64 ไบต์",
            "เปลี่ยนหน้าจอของผู้ใช้เป็นสีฟ้า"
          ],
          correctAnswer: 1,
          explanation: "Native AOT ทำการคอมไพล์ซอร์สโค้ดและไลบรารีที่จำเป็นทั้งหมดให้กลายเป็น Single Native Executable สำหรับระบบปฏิบัติการนั้นๆ โดยตัด JIT Compiler ออกไป ส่งผลให้แอปพลิเคชันเปิดทำงานได้ทันที (Instant Startup) และกินหน่วยความจำต่ำมาก เหมาะสำหรับสถาปัตยกรรม Serverless และ Containerization"
        }
      ]
    },
    {
      id: "cs-7",
      title: "ฐานข้อมูลระดับองค์กรด้วย Entity Framework Core 8, Change Tracking และ Connection Resiliency",
      description: "เชื่อมต่อฐานข้อมูล SQL Server และ PostgreSQL ระดับองค์กร: การทำงานภายในของ DbContext, Change Tracker State Machine, การเพิ่มความเร็วด้วย AsNoTracking(), การกำจัดปัญหา N+1 ด้วย Eager Loading (Include/ThenInclude), Split Queries และ Connection Resiliency",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Entity Framework Core 8: Enterprise Object-Relational Mapper (ORM)

**EF Core 8** เป็น ORM สมัยใหม่ของ .NET ที่แปลงโค้ด C# LINQ ให้เป็นคำสั่ง SQL ที่มีประสิทธิภาพสูงโดยอัตโนมัติ พร้อมรองรับ JSON Columns, Raw SQL Queries และ Bulk Operations

---

## 1. วงจรชีวิตของ \`DbContext\` และ Change Tracker
หัวใจของ EF Core คือ **Change Tracker** ซึ่งคอยบันทึกสถานะของทุก Entity ที่ถูกดึงเข้ามาในหน่วยความจำ:

\`\`\`text
+-------------------------------------------------------------------------+
|                  EF Core Change Tracker State Machine                   |
+-------------------------------------------------------------------------+
|  [ Detached ] ──> (ดึงข้อมูลจาก DB ผ่าน DbContext)                      |
|        │                                                                |
|        ▼                                                                |
|  [ Unchanged ] ──> (แก้ไขค่า Property เช่น student.Gpa = 3.9)           |
|        │                                                                |
|        ▼                                                                |
|  [ Modified ] ──> (คำนวณเฉพาะฟิลด์ที่มีการเปลี่ยนแปลงเมื่อ SaveChanges)   |
|        │                                                                |
|        ▼                                                                |
|  SQL Generated: UPDATE Students SET Gpa = 3.9 WHERE Id = 1;             |
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. เคล็ดลับความเร็วสูงสุด: \`AsNoTracking()\`
เมื่อใดก็ตามที่ต้องการดึงข้อมูลมาเพื่อ **"อ่านอย่างเดียว (Read-Only)"** เช่น การแสดงผลหน้าเว็บ หรือการส่งออกรายงาน API **ต้องใส่ \`.AsNoTracking()\` เสมอ!**:
- ปิดการทำงานของ Change Tracker โดยสิ้นเชิง
- ประหยัดหน่วยความจำ RAM ลงกว่า 50%
- เพิ่มความเร็วในการสืบค้นข้อมูลขึ้น 2 ถึง 3 เท่าตัว!

---

## 3. การกำจัดปัญหา N+1 Query Problem ด้วย Eager Loading
\`\`\`csharp
// ห้ามเขียนแบบนี้เด็ดขาด! (ทำให้เกิด 101 Queries วิ่งไปฐานข้อมูล)
var courses = await db.Courses.ToListAsync();
foreach (var c in courses) {
    Console.WriteLine(c.Instructor.Name); // ยิง SELECT ซ้ำ 100 รอบ!
}

// วิธีแก้ไขที่ถูกต้อง: Eager Loading ด้วย Include()
var courses = await db.Courses
    .Include(c => c.Instructor) // ดึงข้อมูลอาจารย์มาพร้อมกันใน Query เดียวผ่าน JOIN
    .AsNoTracking()
    .ToListAsync();
\`\`\`

---

## 4. Connection Resiliency (Transient Fault Handling)
ระบบคลาวด์มักเกิดปัญหาเครือข่ายหลุดชั่วคราว (Network Flaps) EF Core มีระบบลองใหม่อัตโนมัติ:
\`\`\`csharp
options.UseSqlServer(connectionString, sqlOptions =>
{
    sqlOptions.EnableRetryOnFailure(
        maxRetryCount: 5,
        maxRetryDelay: TimeSpan.FromSeconds(30),
        errorNumbersToAdd: null);
});
\`\`\``,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// EF Core 8 Enterprise Pattern & Change Tracker Simulation
// =================================================================

using System;
using System.Collections.Generic;

// 1. Entity Definition
public class StudentEntity
{
    public int Id { get; set; }
    public string StudentCode { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public decimal Balance { get; set; }
    public string Department { get; set; } = string.Empty;
}

// 2. จำลองการทำงานของ DbContext และ Change Tracking
public class MockDbContext
{
    public enum EntityState { Detached, Unchanged, Added, Modified, Deleted }

    public record TrackedEntry(StudentEntity Entity, EntityState State);

    private readonly List<TrackedEntry> _tracker = [];

    public void Add(StudentEntity student)
    {
        _tracker.Add(new TrackedEntry(student, EntityState.Added));
        Console.WriteLine($"[TRACKER] ทำการ Attach Entity '{student.FullName}' ในสถานะ: Added");
    }

    public void Update(StudentEntity student)
    {
        _tracker.Add(new TrackedEntry(student, EntityState.Modified));
        Console.WriteLine($"[TRACKER] ทำการตรวจพบการแก้ไข Entity '{student.FullName}' ในสถานะ: Modified");
    }

    public void SaveChanges()
    {
        Console.WriteLine("\n💾 [DATABASE TRANSACTION] เริ่มต้นบันทึกข้อมูลผ่าน SaveChanges():");
        foreach (var entry in _tracker)
        {
            switch (entry.State)
            {
                case EntityState.Added:
                    Console.WriteLine($"  -> EXECUTE SQL: INSERT INTO Students (Code, Name, Balance) VALUES ('{entry.Entity.StudentCode}', '{entry.Entity.FullName}', {entry.Entity.Balance});");
                    break;
                case EntityState.Modified:
                    Console.WriteLine($"  -> EXECUTE SQL: UPDATE Students SET Balance = {entry.Entity.Balance} WHERE Id = {entry.Entity.Id};");
                    break;
            }
        }
        _tracker.Clear();
        Console.WriteLine("✓ ธุรกรรม ACID ในฐานข้อมูลเสร็จสมบูรณ์ 100%\n");
    }
}

// ทดสอบรัน
Console.WriteLine("=== IT Academy Entity Framework Core 8 Architecture ===");
var db = new MockDbContext();

var std1 = new StudentEntity { Id = 101, StudentCode = "STD-6701", FullName = "กานดา สุขเกษม", Balance = 12500m };
db.Add(std1);

var std2 = new StudentEntity { Id = 102, StudentCode = "STD-6702", FullName = "สมชาย ใจดี", Balance = 9500m };
db.Update(std2);

db.SaveChanges();`,
        description: "การจำลองการทำงานของ Change Tracker และการสร้างคำสั่ง SQL ใน EF Core 8"
      },
      challenge: {
        description: "เขียนคำสั่ง LINQ ด้วย EF Core ที่ดึงข้อมูล `Courses` พร้อมเชื่อมโยง `Instructor` โดยใช้ `AsNoTracking()` และคัดกรองเฉพาะคอร์สที่เปิดสอน (IsActive == true)",
        startingCode: `// TODO: เขียน LINQ Query ด้วย AsNoTracking() และ Include()
`,
        solution: `// Solution:
// var activeCourses = await db.Courses
//     .AsNoTracking()
//     .Include(c => c.Instructor)
//     .Where(c => c.IsActive)
//     .ToListAsync();`
      },
      quiz: [
        {
          id: "cs-7-q1",
          question: "การใช้คำสั่ง `.AsNoTracking()` ในการ Query ข้อมูลผ่าน EF Core มีประโยชน์สูงสุดในด้านใด?",
          options: [
            "ช่วยเพิ่มความเร็วและลดการใช้หน่วยความจำ RAM อย่างมากในการสืบค้นข้อมูลแบบอ่านอย่างเดียว (Read-Only) เพราะ EF Core จะไม่ต้องสร้าง Snapshot สำหรับ Change Tracker",
            "ลบข้อมูลในตารางทิ้งหลังจากอ่านเสร็จ",
            "เปลี่ยนฐานข้อมูลเป็นระบบ NoSQL ทันที",
            "ปิดการเข้ารหัส SSL ของฐานข้อมูล"
          ],
          correctAnswer: 0,
          explanation: "เมื่อใช้ AsNoTracking() ตัว EF Core จะข้ามขั้นตอนการบันทึกสถานะลงใน Change Tracker ทำให้ประหยัดแรมและประมวลผลได้เร็วขึ้น 2-3 เท่า จึงเป็นกฎเหล็กสำหรับคำสั่ง SELECT ข้อมูลเพื่อแสดงผลที่ไม่ต้องการแก้ไขและบันทึกกลับ"
        },
        {
          id: "cs-7-q2",
          question: "ปัญหา Cartesian Explosion ใน EF Core มักเกิดขึ้นเมื่อใด และแก้ไขได้อย่างไร?",
          options: [
            "เกิดขึ้นเมื่อฮาร์ดดิสก์เกิด Bad Sector แก้ไขโดยการเปลี่ยนเครื่องใหม่",
            "เกิดขึ้นเมื่อใช้คำสั่ง Include() เชื่อมโยงหลายตาราง Collection พร้อมกัน ทำให้ฐานข้อมูลส่งแถวข้อมูลที่ซ้ำซ้อนออกมามหาศาล แก้ไขโดยการใช้คำสั่ง AsSplitQuery()",
            "เกิดขึ้นเมื่อตั้งชื่อตัวแปรเป็นภาษาไทย",
            "เกิดขึ้นเมื่อรันบนระบบปฏิบัติการ Linux"
          ],
          correctAnswer: 1,
          explanation: "เมื่อ Include ข้อมูล Collection หลายตารางใน Query เดียว SQL JOIN จะสร้างแถวผลลัพธ์แบบผลคูณคาร์ทีเซียน (Cartesian Product) ทำให้ข้อมูลซ้ำซ้อนและมีขนาดใหญ่มาก การใช้ `.AsSplitQuery()` จะบอกให้ EF Core แยกคำสั่ง SQL เป็นหลายรอบที่สะอาดและมีประสิทธิภาพสูงกว่า"
        },
        {
          id: "cs-7-q3",
          question: "ฟังก์ชัน `EnableRetryOnFailure()` ในการตั้งค่า DbContext ช่วยแก้ปัญหาใดในสภาพแวดล้อมคลาวด์?",
          options: [
            "ช่วยกู้คืนรหัสผ่านของผู้ใช้เมื่อลืม",
            "จัดการกับ Transient Faults (ความผิดพลาดชั่วขณะ เช่น เครือข่ายคลาวด์สะดุดในระดับมิลลิวินาที) โดยจะทำการลองเชื่อมต่อฐานข้อมูลใหม่โดยอัตโนมัติตามนโยบาย Exponential Backoff",
            "ลบคำสั่ง Query ที่ทำงานช้าทิ้งไป",
            "ส่งข้อความแจ้งเตือนไปยังแอดมิน"
          ],
          correctAnswer: 1,
          explanation: "ในระบบคลาวด์ (เช่น Azure SQL หรือ AWS RDS) มักเกิดปัญหา Transient Network Drops ชั่วคราว การเปิด EnableRetryOnFailure ช่วยให้ EF Core ลองส่งคำขอใหม่ให้อัตโนมัติ ป้องกันไม่ให้แอปพลิเคชันโยน Exception ใส่ผู้ใช้งาน"
        }
      ]
    },
    {
      id: "cs-8",
      title: "Dependency Injection (DI Lifetimes), Logging (Serilog) และ Middleware Pipeline",
      description: "สถาปัตยกรรม Dependency Injection ใน .NET: วงจรชีวิต Service Lifetimes (Transient, Scoped, Singleton), การป้องกันข้อผิดพลาด Captive Dependencies, สถาปัตยกรรม Middleware Pipeline (Russian Doll Model) และ Structured Logging ด้วย Serilog",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Dependency Injection และ Middleware ใน .NET 8

สถาปัตยกรรม .NET ถูกสร้างขึ้นบนพื้นฐานของ **Inversion of Control (IoC)** และ **Dependency Injection (DI)** ที่มีประสิทธิภาพสูงในตัว โดยไม่ต้องพึ่งพาไลบรารีภายนอก

---

## 1. ตารางเปรียบเทียบ Service Lifetimes ใน .NET

| Lifetime | เมธอดลงทะเบียน | วงจรชีวิตของ Object | เหมาะสำหรับ |
| :--- | :--- | :--- | :--- |
| **Transient** | \`AddTransient<T>()\` | สร้างใหม่อินสแตนซ์ใหม่ทุกครั้งที่มีการร้องขอ | Service ไร้สถานะ น้ำหนักเบา (Stateless) |
| **Scoped** | \`AddScoped<T>()\` | สร้าง 1 อินสแตนซ์ต่อ 1 HTTP Request Cycle | Database Context (\`DbContext\`), Unit of Work |
| **Singleton** | \`AddSingleton<T>()\` | สร้างครั้งเดียวตลอดอายุการทำงานของแอปพลิเคชัน | In-Memory Cache, Metric Engine |

---

## 2. กับดักอันตราย: Captive Dependency Anti-Pattern
**Captive Dependency** เกิดขึ้นเมื่อเราทำการฉีด (Inject) Service ที่มีอายุสั้นกว่า (เช่น **Scoped**) เข้าไปใน Service ที่มีอายุยาวนานกว่า (เช่น **Singleton**):
- Service แบบ Scoped ตัวนั้นจะถูก "กักขัง" ไว้ใน Singleton ทำให้มันไม่เคยถูกทำลายทิ้งหลังจบ HTTP Request!
- หาก Service นั้นเป็น \`DbContext\` จะทำให้ข้อมูลใน Change Tracker สะสมไปเรื่อยๆ จนแรมเต็ม และเกิดปัญหา Concurrency Crash เมื่อมีหลายคำขอเข้าถึง \`DbContext\` พร้อมกัน!

> **โชคดี:** .NET Runtime ในโหมด Development จะเปิดใช้งาน \`ValidateScopes = true\` ซึ่งจะโยน \`InvalidOperationException\` เตือนทันทีหากเกิด Captive Dependency

---

## 3. สถาปัตยกรรม Middleware Pipeline (Russian Doll Model)
คำขอ HTTP ใน ASP.NET Core จะเดินทางผ่านชั้น Middleware ซ้อนกันคล้ายตุ๊กตาแม่ลูกดก:

\`\`\`text
HTTP Request
     │
     ▼
[ 1. Exception Handler Middleware ]  (ดักจับ Error ระดับ Global)
     │   ▲
     ▼   │
[ 2. Authentication Middleware ]     (ตรวจสอบ JWT Token)
     │   ▲
     ▼   │
[ 3. Authorization Middleware ]      (ตรวจสอบสิทธิ์ Role / Policies)
     │   ▲
     ▼   │
[ 4. Endpoint Execution Handler ]    (Controller / Minimal API)
\`\`\``,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// Dependency Injection Lifetimes & Custom Middleware Simulation
// =================================================================

using System;
using System.Threading.Tasks;

// 1. นิยาม Interfaces สำหรับแต่ละ Lifetime
public interface ITransientOperation { string Id { get; } }
public interface IScopedOperation { string Id { get; } }
public interface ISingletonOperation { string Id { get; } }

public class OperationTracker : ITransientOperation, IScopedOperation, ISingletonOperation
{
    public string Id { get; } = Guid.NewGuid().ToString()[..6];
}

// 2. จำลอง Custom Performance Timing Middleware
public class RequestTimingMiddleware
{
    public static async Task InvokeAsync(string path, Func<Task> next)
    {
        Console.WriteLine($"⚡ [PIPELINE ENTER] กำลังประมวลผลคำขอ: {path}");
        var start = DateTime.UtcNow;

        await next(); // ส่งต่อให้ Middleware ถัดไปหรือ Endpoint หลัก

        var duration = (DateTime.UtcNow - start).TotalMilliseconds;
        Console.WriteLine($"✅ [PIPELINE EXIT] คำขอ {path} สำเร็จในเวลา {duration:F2}ms\n");
    }
}

// 3. จำลอง Service ที่ใช้งาน DI
public class StudentRegistrationHandler(ITransientOperation trans, IScopedOperation scoped, ISingletonOperation single)
{
    public void DisplayDiagnosics()
    {
        Console.WriteLine($"• Transient ID : {trans.Id} (สร้างใหม่เสมอ)");
        Console.WriteLine($"• Scoped ID    : {scoped.Id} (คงที่ตลอด 1 Request)");
        Console.WriteLine($"• Singleton ID : {single.Id} (ตัวเดิมตลอดกาล)");
    }
}

Console.WriteLine("=== IT Academy .NET 8 DI & Middleware Architecture ===");

// จำลอง Singleton Instance
ISingletonOperation appSingleton = new OperationTracker();

// จำลอง HTTP Request ที่ 1
await RequestTimingMiddleware.InvokeAsync("/api/v1/students/register", async () =>
{
    IScopedOperation request1Scope = new OperationTracker();
    var handler1 = new StudentRegistrationHandler(new OperationTracker(), request1Scope, appSingleton);
    handler1.DisplayDiagnosics();
    await Task.Delay(10);
});

// จำลอง HTTP Request ที่ 2
await RequestTimingMiddleware.InvokeAsync("/api/v1/courses/enroll", async () =>
{
    IScopedOperation request2Scope = new OperationTracker(); // Scoped ใหม่ใน Request 2
    var handler2 = new StudentRegistrationHandler(new OperationTracker(), request2Scope, appSingleton);
    handler2.DisplayDiagnosics();
    await Task.Delay(10);
});`,
        description: "การจำลองวงจรชีวิตของ Dependency Injection และสถาปัตยกรรม Middleware Pipeline"
      },
      challenge: {
        description: "เขียน Middleware Function `LogRequestMiddleware(string method, string url)` ที่พิมพ์ข้อความ '[HTTP] Method URL' ก่อนเริ่มประมวลผล",
        startingCode: `public static void LogRequestMiddleware(string method, string url)
{
    // TODO: พิมพ์ Log
}`,
        solution: `public static void LogRequestMiddleware(string method, string url)
{
    Console.WriteLine($"[HTTP] {method} {url}");
}`
      },
      quiz: [
        {
          id: "cs-8-q1",
          question: "เหตุใดการลงทะเบียน Database Context (เช่น `DbContext` ใน EF Core) จึงต้องใช้ Lifetime แบบ `Scoped`?",
          options: [
            "เพื่อให้แอปพลิเคชันไม่ต้องใช้รหัสผ่านในการต่อฐานข้อมูล",
            "เพื่อให้มีการสร้าง DbContext 1 ตัวสำหรับรองรับการทำงานในแต่ละ 1 HTTP Request ทำให้ Change Tracker ทำงานแยกขาดจากกันในแต่ละผู้ใช้ และถูกคืนหน่วยความจำอย่างปลอดภัยเมื่อจบ Request",
            "เพราะเป็นข้อกำหนดของการ์ดจอ",
            "เพื่อลบข้อมูลในฐานข้อมูลทิ้งทุก 5 นาที"
          ],
          correctAnswer: 1,
          explanation: "DbContext ถูกออกแบบมาให้เป็น Unit of Work สำหรับ 1 การทำงาน การตั้งค่าเป็น Scoped รับประกันว่าผู้ใช้แต่ละคนจะมี Change Tracker ของตนเอง ไม่ปะปนกับผู้อื่น และเมื่อ HTTP Request สิ้นสุดลง ตัว DbContext จะถูก Dispose คืน Connection กลับสู่ Pool อย่างถูกต้อง"
        },
        {
          id: "cs-8-q2",
          question: "ปัญหา 'Captive Dependency' ใน Dependency Injection หมายถึงสถานการณ์ใด?",
          options: [
            "การลืมเชื่อมต่อสายแลน",
            "การที่ Service ที่มีอายุยืนยาว (เช่น Singleton) ทำการ Inject Service ที่มีอายุสั้นกว่า (เช่น Scoped) ทำให้ Scoped Service นั้นถูกกักขังและมีอายุยืนยาวเท่ากับ Singleton จนอาจเกิด Memory Leak หรือ Concurrency Bugs",
            "การประกาศตัวแปรที่มีชื่อซ้ำกัน",
            "การติดตั้งแพ็กเกจ NuGet ผิดเวอร์ชัน"
          ],
          correctAnswer: 1,
          explanation: "Captive Dependency เป็นข้อผิดพลาดสถาปัตยกรรมร้ายแรง เมื่อ Singleton ดึง Scoped Service (เช่น DbContext) ไปเก็บไว้ในฟิลด์ของตน ตัว Scoped Service นั้นจะไม่เคยถูก Dispose เลย ส่งผลให้หน่วยความจำบวมขึ้นเรื่อยๆ และพังเมื่อมีหลายเธรดเรียกใช้พร้อมกัน"
        },
        {
          id: "cs-8-q3",
          question: "ในสถาปัตยกรรม Middleware ของ ASP.NET Core คำสั่ง `await next()` มีหน้าที่สำคัญอย่างไร?",
          options: [
            "ยกเลิกคำขอของผู้ใช้ทันที",
            "ส่งต่อคำขอ (Request) ไปยัง Middleware ตัวถัดไปใน Pipeline และสามารถเขียนโค้ดหลัง await เพื่อดักจับผลลัพธ์ (Response) ขากลับได้",
            "ปิดเครื่องเซิร์ฟเวอร์",
            "ล้างแคชทั้งหมดในระบบ"
          ],
          correctAnswer: 1,
          explanation: "Middleware ใน .NET ทำงานแบบ Russian Doll หรือ Onion Architecture คำสั่ง await next() จะส่งผ่าน Context ไปให้ Middleware ลำดับถัดไปทำงานจนถึง Endpoint และเมื่อ Endpoint ตอบกลับมา โค้ดที่อยู่หลัง await next() จะทำงานเป็นลำดับสุดท้ายก่อนส่งผลลัพธ์กลับสู่ไคลเอนต์"
        }
      ]
    },
    {
      id: "cs-9",
      title: "โปรเจกต์ E-Commerce Microservice API พร้อม JWT, Clean Architecture และ CQRS",
      description: "โปรเจกต์วิศวกรรมระบบระดับโปรดักชัน: พัฒนา E-Commerce Order Processing Microservice ด้วย .NET 8: สถาปัตยกรรม Clean Architecture, รูปแบบ CQRS (Command Query Responsibility Segregation), การตรวจสอบสิทธิ์ด้วย Stateless JWT Tokens, RFC 7807 Problem Details และ Docker Containerization",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise .NET 8: E-Commerce Microservice API

ในบทเรียนรวบยอดนี้ เราจะนำองค์ความรู้ระดับวิศวกรรมทั้งหมดของ C# 12 และ .NET 8 ตั้งแต่ **Clean Architecture, Minimal APIs, Records, Pattern Matching, Async/Await, EF Core, Dependency Injection, และ Stateless Security** มาสร้างเป็น **E-Commerce Order Processing Microservice**

---

## 1. โครงสร้างสถาปัตยกรรม Clean Architecture

\`\`\`text
+-------------------------------------------------------------------------+
|                  Clean Architecture Layer Topology                      |
+-------------------------------------------------------------------------+
|  1. Presentation Layer (Minimal APIs Endpoints, Swagger, Middlewares)   |
|        │                                                                |
|        ▼ (พึ่งพาเฉพาะ Application Layer)                                |
|  2. Application Layer (Commands, Queries, DTOs, Business Rules)         |
|        │                                                                |
|        ▼ (พึ่งพาเฉพาะ Domain Layer)                                     |
|  3. Domain Layer (Enterprise Entities, Value Objects, Domain Events)    |
|        ▲                                                                |
|        │ (Inversion of Control - กลับทิศทางการพึ่งพา)                   |
|  4. Infrastructure Layer (EF Core DbContext, Repositories, Stripe SDK)  |
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. CQRS Pattern (Command Query Responsibility Segregation)
แยกการเขียนข้อมูล (Commands: แก้ไขสถานะ ไม่คืนข้อมูลมาก) ออกจากการอ่านข้อมูล (Queries: ดึงข้อมูลอ่านอย่างเดียว รวดเร็วสูง):
- **Command:** \`CreateOrderCommand\`, \`CancelOrderCommand\`
- **Query:** \`GetOrderByIdQuery\`, \`ListCustomerOrdersQuery\`

---

## 3. มาตรฐานความปลอดภัยด้วย Stateless JWT Bearer Tokens
การยืนยันตัวตนในระดับ Microservice:
- Header: \`{"alg": "HS256", "typ": "JWT"}\`
- Payload: \`{"sub": "usr_9901", "name": "Somchai", "role": "Customer"}\`
- Signature: ตรวจสอบความถูกต้องด้วยกุญแจลับ Symmetric Secret Key`,
      codeExample: {
        language: "csharp",
        code: `// =================================================================
// Enterprise Project: Clean Architecture Order Microservice (.NET 8)
// =================================================================

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// 1. Domain Layer: Value Objects & Entities
public record OrderItem(string ProductSku, int Quantity, decimal UnitPrice)
{
    public decimal LineTotal => Quantity * UnitPrice;
}

public class OrderAggregate
{
    public string OrderId { get; private set; }
    public string CustomerId { get; private set; }
    public List<OrderItem> Items { get; private set; } = [];
    public decimal TotalAmount { get; private set; }
    public string Status { get; private set; } = "PENDING";
    public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;

    public OrderAggregate(string orderId, string customerId, List<OrderItem> items)
    {
        if (items.Count == 0) throw new ArgumentException("คำสั่งซื้อต้องมีสินค้าอย่างน้อย 1 รายการ");

        OrderId = orderId;
        CustomerId = customerId;
        Items = items;

        decimal total = 0;
        foreach (var item in items) total += item.LineTotal;
        TotalAmount = total;
    }

    public void MarkAsPaid() => Status = "PAID";
}

// 2. Application Layer: DTO & Command Handler
public record CreateOrderCommand(string CustomerId, List<OrderItem> Items);

public class OrderApplicationService
{
    public async Task<OrderAggregate> HandleCreateOrderAsync(CreateOrderCommand cmd)
    {
        string newOrderId = $"ORD-{DateTime.UtcNow:yyyyMMdd}-{Guid.NewGuid().ToString()[..6].ToUpper()}";
        
        // สร้าง Domain Entity พร้อมตรวจสอบกฎความถูกต้องทางธุรกิจ
        var order = new OrderAggregate(newOrderId, cmd.CustomerId, cmd.Items);

        // จำลองการบันทึกฐานข้อมูลผ่าน EF Core แบบ Asynchronous
        await Task.Delay(150);

        order.MarkAsPaid();
        return order;
    }
}

// 3. Presentation Layer: Minimal API Execution Simulation
Console.WriteLine("=== IT Academy Enterprise E-Commerce Microservice API ===");

var appService = new OrderApplicationService();

var sampleCommand = new CreateOrderCommand(
    CustomerId: "CUST-9921",
    Items: [
        new("DELL-XPS-15", 1, 65900.00m),
        new("LOGITECH-MX-MASTER-3S", 2, 3890.00m),
        new("KEYCHRON-Q1-PRO", 1, 7200.00m)
    ]
);

Console.WriteLine($"📦 [API INGEST] ได้รับคำสั่งซื้อจากลูกค้า: {sampleCommand.CustomerId}");
var createdOrder = await appService.HandleCreateOrderAsync(sampleCommand);

Console.WriteLine($"\n✅ [201 CREATED] ออกคำสั่งซื้อสำเร็จ:");
Console.WriteLine($"• หมายเลขคำสั่งซื้อ : {createdOrder.OrderId}");
Console.WriteLine($"• สถานะการชำระเงิน  : {createdOrder.Status}");
Console.WriteLine($"• ยอดรวมทั้งสิ้น    : {createdOrder.TotalAmount:C2} THB");
Console.WriteLine($"• รายการสินค้า ({createdOrder.Items.Count} รายการ):");
foreach (var item in createdOrder.Items)
{
    Console.WriteLine($"   - [{item.ProductSku}] x{item.Quantity} @ {item.UnitPrice:C2} = {item.LineTotal:C2} THB");
}`,
        description: "สถาปัตยกรรม Microservice สั่งซื้อสินค้าตามหลัก Clean Architecture และ CQRS บน .NET 8"
      },
      challenge: {
        description: "ขยาย Class `OrderAggregate` ให้มีเมธอด `CancelOrder(string reason)` ที่เปลี่ยนสถานะ Status เป็น 'CANCELLED' และบันทึกเหตุผล",
        startingCode: `// TODO: เพิ่มเมธอด CancelOrder
`,
        solution: `// Solution:
// public void CancelOrder(string reason)
// {
//     if (Status == "SHIPPED") throw new InvalidOperationException("Cannot cancel shipped order");
//     Status = "CANCELLED";
// }`
      },
      quiz: [
        {
          id: "cs-9-q1",
          question: "ตามหลักการของ Clean Architecture กฎการพึ่งพา (The Dependency Rule) กำหนดไว้อย่างไร?",
          options: [
            "ชั้นในสุด (Domain Layer) ต้องพึ่งพาเทคโนโลยีของชั้นนอกสุด (ฐานข้อมูลและ UI)",
            "ทิศทางการพึ่งพาของซอร์สโค้ดต้องชี้เข้าสู่ด้านในเสมอ โดย Domain Layer จะต้องเป็นอิสระและไม่พึ่งพา Framework หรือฐานข้อมูลภายนอกใดๆ ทั้งสิ้น",
            "ทุกเลเยอร์ต้องมีขนาดไฟล์เท่ากัน",
            "ห้ามใช้คำสั่ง class ในการเขียนโค้ด"
          ],
          correctAnswer: 1,
          explanation: "หัวใจสำคัญของ Clean Architecture คือ The Dependency Rule ซึ่งระบุว่าทิศทางการพึ่งพาต้องชี้เข้าสู่ศูนย์กลางเสมอ Domain และ Business Logic จะต้องไม่รู้จัก UI, Web Framework, หรือ Database ORM ทำให้ระบบมีความยืดหยุ่นและทดสอบได้ง่ายสูงสุด"
        },
        {
          id: "cs-9-q2",
          question: "รูปแบบสถาปัตยกรรม CQRS (Command Query Responsibility Segregation) ให้ประโยชน์อย่างไรแก่ระบบที่มีผู้ใช้งานสูง?",
          options: [
            "บังคับให้คอมไพเลอร์สร้างไฟล์ .exe เท่านั้น",
            "แยกเส้นทางการประมวลผลระหว่างการแก้ไขข้อมูล (Commands: Write/Update) ออกจากการอ่านข้อมูล (Queries: Read) ทำให้สามารถปรับแต่งประสิทธิภาพและขยายระบบ (Scaling) ของแต่ละฝั่งได้อย่างอิสระ",
            "ทำให้โปรแกรมรันได้โดยไม่ต้องใช้ไฟฟ้า",
            "ลดจำนวนบรรทัดของโค้ดให้เหลือ 1 บรรทัด"
          ],
          correctAnswer: 1,
          explanation: "CQRS แยกโมเดลการเขียน (Write Model ที่เน้นความถูกต้องของ Business Rules และ ACID) ออกจากโมเดลการอ่าน (Read Model ที่เน้นความเร็ว เช่น การใช้ In-Memory Cache หรือ Denormalized Views) ช่วยให้รองรับโหลดระดับสูงได้อย่างมีประสิทธิภาพ"
        },
        {
          id: "cs-9-q3",
          question: "ในสถาปัตยกรรม Microservices ทำไมการยืนยันตัวตนด้วย Stateless JWT Token จึงเป็นที่นิยมมากกว่า State-based Session ในฐานข้อมูล?",
          options: [
            "เพราะ JWT สามารถบรรจุ Claims (เช่น UserID, Roles) และถูกเซ็นรับรองด้วยกุญแจลับ ทำให้ Microservices แต่ละตัวสามารถตรวจสอบความถูกต้องของ Token ได้ด้วยตนเองทันที โดยไม่ต้องส่ง Network Request กลับไปถามฐานข้อมูลกลางในทุกๆ คำขอ",
            "เพราะ JWT เป็นภาษาโปรแกรมรุ่นใหม่",
            "เพราะ JWT ช่วยลดขนาดของรูปภาพในเว็บไซต์",
            "เพราะเบราว์เซอร์บังคับให้ใช้เฉพาะ JWT เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "Stateless JWT บรรจุข้อมูลสิทธิ์ (Claims) และลายเซ็นดิจิทัล (Signature) ไว้ในตัวโทเคน ทำให้ Microservice แต่ละบริการสามารถถอดรหัสและยืนยันสิทธิ์ได้ในเครื่องของตนเองทันที (Decentralized Verification) โดยไม่ต้องยิงคำขอไปถาม Auth Server ซ้ำซาก ช่วยลดคอขวดและเพิ่มความเร็วของระบบอย่างมหาศาล"
        }
      ]
    }
  ]
};
