import { Course } from "../types";

export const mobileCourse: Course = {
  id: "mobile",
  title: "Mobile App Development with Flutter & Dart 3",
  description: "พัฒนาแอปพลิเคชันมือถือข้ามแพลตฟอร์ม Android & iOS สถาปัตยกรรม Impeller Engine, Dart 3 Sound Null Safety, State Management, GoRouter, SQLite และ GPS Geofencing",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาแอปพลิเคชันบนอุปกรณ์เคลื่อนที่ (Mobile Application Engineering) ระดับสากลด้วย Flutter SDK และภาษา Dart 3 เจาะลึกตั้งแต่สถาปัตยกรรมเครื่องยนต์เรนเดอร์กราฟิก Impeller และระบบ Three Trees (Widget, Element, RenderObject), การเขียนภาษา Dart 3 ยุคใหม่ด้วย Sound Null Safety, Records และ Pattern Matching, การจัดเลย์เอาต์หน้าจอด้วย Slivers และ Animations, สถาปัตยกรรมการจัดการสถานะขั้นสูง (Riverpod & BLoC Pattern), ระบบนำทาง Declarative Routing ด้วย GoRouter และ Deep Linking, การเชื่อมต่อเครือข่ายระดับองค์กรด้วย Dio Interceptors และระบบหมุนเวียน Token (Refresh Token Rotation), การออกแบบระบบ Offline-First ด้วย SQLite (sqflite), การเข้าถึงฮาร์ดแวร์พิกัดดาวเทียม GPS คำนวณระยะด้วยสูตร Haversine สำหรับระบบเช็กชื่อเข้าเรียน, ไปจนถึงการลงลายมือชื่อดิจิทัลและคอมไพล์ไฟล์ Production Release (.aab, .apk, .ipa) เพื่อส่งขึ้น Store",
  icon: "📱",
  color: "cyan",
  gradient: "from-cyan-500 to-teal-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Mobile", "Flutter", "Dart 3", "Android", "iOS", "Riverpod", "GoRouter", "SQLite", "GPS"],
  recommendedTools: [
    {
      name: "Flutter SDK 3.x",
      icon: "🎯",
      badge: "Official Framework SDK",
      description: "ชุดเครื่องมือพัฒนาซอฟต์แวร์ UI ข้ามแพลตฟอร์มระดับโลกจาก Google คอมไพล์ซอร์สโค้ดเป็น Machine Code เนทีฟ (ARM64/x86) ทำงานบนสมาร์ตโฟนด้วยความเร็ว 60-120 FPS",
      downloadUrl: "https://flutter.dev/docs/get-started/install",
      setupGuide: "1. ดาวน์โหลด Flutter SDK แตกไฟล์ไว้ที่ C:\\src\\flutter\n2. เพิ่มโฟลเดอร์ C:\\src\\flutter\\bin เข้าไปใน Environment Variables (Path)\n3. เปิด Terminal หรือ PowerShell พิมพ์คำสั่ง: flutter doctor -v เพื่อตรวจสอบเครื่องมือทั้งหมด"
    },
    {
      name: "Android Studio & Android SDK",
      icon: "🤖",
      badge: "Official Android Toolchain",
      description: "สภาพแวดล้อมการพัฒนาแอปพลิเคชัน Android อย่างเป็นทางการ พร้อม Android SDK Platform-Tools และ Android Virtual Device (AVD Emulator) สำหรับจำลองการทำงานของมือถือ",
      downloadUrl: "https://developer.android.com/studio",
      setupGuide: "1. ติดตั้ง Android Studio\n2. ไปที่ More Actions > SDK Manager ติดตั้ง Android SDK Command-line Tools\n3. ไปที่ Virtual Device Manager สร้าง Emulator จำลองโทรศัพท์ (เช่น Pixel 7 Pro)\n4. รันคำสั่ง: flutter doctor --android-licenses เพื่อกดยอมรับสัญญาอนุญาต"
    },
    {
      name: "VS Code + Flutter & Dart Extensions",
      icon: "⚡",
      badge: "Lightweight Pro Editor",
      description: "โปรแกรมแก้ไขโค้ดที่นักพัฒนา Flutter นิยมที่สุด โหลดเร็ว กินแรมน้อย รองรับ Hot Reload ในเสี้ยววินาที และการดีบั๊กผ่าน Flutter DevTools",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. เปิด VS Code กด Ctrl+Shift+X ติดตั้ง Extension: 'Flutter' และ 'Dart'\n2. กดปุ่ม F5 เพื่อเริ่มต้นดีบั๊กแอปพลิเคชัน\n3. ใช้คีย์ลัด 'r' สำหรับ Hot Reload และ 'R' สำหรับ Hot Restart"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "mob-1",
      title: "สถาปัตยกรรม Mobile App ยุคใหม่ และการทำงานภายในของ Flutter Impeller Engine",
      description: "เปรียบเทียบ Native vs Hybrid vs Cross-Platform, การทำงานของเอนจินกราฟิก Impeller (Vulkan/Metal) แทนที่ Skia, กลไก Three Trees (Widget, Element, RenderObject) และ Stateful Hot Reload",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมแอปพลิเคชันมือถือและโครงสร้างภายในของ Flutter

ในอดีต การพัฒนาแอปพลิเคชันบนสมาร์ตโฟนต้องเลือกระหว่าง **Native Code (Kotlin/Swift)** ซึ่งมีประสิทธิภาพสูงสุดแต่ต้นทุนสูงเพราะต้องเขียนโค้ดสองชุด หรือ **Hybrid Webview (Cordova/Capacitor)** ซึ่งเขียนง่ายแต่ทำงานช้าและกระตุก

---

## 1. เปรียบเทียบสถาปัตยกรรมโมบายล์หลัก 3 ยุค

\`\`\`
1. Web-View / Hybrid (Cordova / Ionic)
   [ Web App (HTML/JS) ] ── (ผ่าน Webview Browser) ──► Native Mobile OS (ช้า, กินแรม)

2. Reactive Bridge (React Native)
   [ JavaScript Thread ] ◄── (JSON Bridge คอขวด!) ──► [ Native Views (OEM Widgets) ]

3. Self-Rendered Engine (Flutter)
   [ Dart Application Code ]
              │
              ▼
   [ Flutter Framework (Material / Cupertino Widgets) ]
              │
              ▼
   [ Impeller Rendering Engine (Metal on iOS / Vulkan on Android) ]
              │
              ▼
   [ Screen Framebuffer: วาดทุกพิกเซลลงบนหน้าจอตรงๆ ไม่ผ่าน Bridge! ] (60-120 FPS)
\`\`\`

---

## 2. ทำไม Impeller Engine จึงเหนือกว่า Skia?

ใน Flutter เวอร์ชันเก่า ปัญหาใหญ่คือ **Shader Compilation Jank** (อาการแอปสะดุดครั้งแรกที่มีการเล่นแอนิเมชันใหม่ เนื่องจากเอนจิน Skia เพิ่งคอมไพล์โค้ด Shader ในขณะรันไทม์)
**Impeller Engine (เอนจินกราฟิกยุคใหม่ของ Google):**
- ทำการ **Pre-compile Shaders ล่วงหน้าทั้งหมด** ตั้งแต่ขั้นตอนการ Build แอปพลิเคชัน
- ใช้ API กราฟิกระดับต่ำสมัยใหม่: **Metal บน Apple iOS** และ **Vulkan บน Google Android**
- กำจัดอาการ Jank อย่างสิ้นเชิง ให้ความสม่ำเสมอของเฟรมเรตที่นิ่งสนิท

---

## 3. สถาปัตยกรรม Three Trees: เบื้องหลังความเร็วสูงของ Flutter

Flutter ไม่ได้สร้าง UI ขึ้นมาใหม่ทั้งหมดทุกครั้ง แต่บริหารจัดการผ่านต้นไม้ 3 ชั้น (Three Trees):

| ชนิดของ Tree | หน้าที่และคุณสมบัติทางสถาปัตยกรรม | วงจรชีวิตและความเร็ว |
|---|---|---|
| **1. Widget Tree** | พิมพ์เขียวโครงสร้างคอนฟิก (Configuration Blueprints) เป็นออบเจกต์แบบ **Immutable (ห้ามเปลี่ยนแปลงค่า)** | ถูกสร้างและทำลายทิ้งได้เร็วมากระดับไมโครวินาที กินแรมต่ำ |
| **2. Element Tree** | ผู้ประสานงานโครงสร้างและวงจรชีวิต (Lifecycle Coordinator) เชื่อมระหว่าง Widget และ RenderObject | คงอยู่ยาวนาน ทำหน้าที่ Diffing และตัดสินใจว่าจะ Re-render หรือไม่ |
| **3. RenderObject Tree** | วัตถุทางกายภาพที่ดูแลการคำนวณขนาด (**Layout / Constraints**), การระบายสี (**Paint**), และการรับสัมผัส (**Hit Testing**) | มีขนาดใหญ่และกินทรัพยากรสูง จะถูกอัปเดตเฉพาะเมื่อขนาดหรือสีเปลี่ยนจริง |`,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// โครงสร้างจุดเริ่มต้นของแอปพลิเคชัน Flutter (main.dart)
// ออกแบบตามมาตรฐาน Material Design 3 พร้อมการดักจับข้อผิดพลาดระดับเฟรมเวิร์ก
// =================================================================

import 'package:flutter/material.dart';

void main() {
  // บังคับให้การผูกเอนจินของ Flutter Engine เริ่มต้นสมบูรณ์ก่อนเรียกใช้โค้ดอื่น
  WidgetsFlutterBinding.ensureInitialized();

  // กำหนดหน้าจอแจ้งเตือนข้อผิดพลาดที่สวยงาม แทนหน้าจอสีแดงของระบบ (Red Screen of Death)
  ErrorWidget.builder = (FlutterErrorDetails details) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.error_outline, color: Colors.redAccent, size: 64),
              const SizedBox(height: 16),
              const Text(
                'เกิดข้อผิดพลาดในการแสดงผล',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 8),
              Text(
                details.exceptionAsString(),
                textAlign: TextAlign.center,
                style: const TextStyle(color: Colors.grey, fontSize: 12),
              ),
            ],
          ),
        ),
      ),
    );
  };

  runApp(const ITAcademyApp());
}

class ITAcademyApp extends StatelessWidget {
  const ITAcademyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'IT Academy Mobile',
      debugShowCheckedModeBanner: false,
      // เปิดใช้งานสเปกการออกแบบล่าสุด Material Design 3
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF0284C7),
          brightness: Brightness.light,
        ),
        fontFamily: 'SukhumvitSet', // หรือฟอนต์ภาษาไทยมาตรฐาน
      ),
      darkTheme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF0284C7),
          brightness: Brightness.dark,
        ),
      ),
      themeMode: ThemeMode.system, // สลับธีมสว่าง/มืดตามระบบปฏิบัติการ
      home: const WelcomeScreen(),
    );
  }
}

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('IT Academy Mobile'),
        elevation: 2,
      ),
      body: const Center(
        child: Text(
          'ยินดีต้อนรับสู่ระบบการเรียนรู้วิศวกรรมไอที',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}`,
        description: "สถาปัตยกรรมเริ่มต้นของ Flutter 3 รองรับ Material Design 3, ErrorWidget ดักจับแครช และระบบ Dynamic Theme"
      },
      quiz: [
        {
          id: "mob-1-q1",
          question: "เอนจินกราฟิกยุคใหม่ 'Impeller' ใน Flutter ถูกออกแบบมาเพื่อแก้ไขปัญหาใหญ่ใดที่เคยเกิดขึ้นในเอนจินรุ่นเก่า Skia?",
          options: [
            "แก้ไขปัญหาไฟล์ติดตั้งมีขนาดใหญ่เกิน 1GB",
            "แก้ไขปัญหาอาการสะดุดของหน้าจอ (Shader Compilation Jank) ในการรันครั้งแรก โดยเปลี่ยนมาคอมไพล์ Shaders ล่วงหน้าตั้งแต่ขั้นตอน Build",
            "ทำให้แอปใช้งานได้โดยไม่ต้องมีหน้าจอ",
            "แปลงโค้ด Dart ให้กลายเป็นภาษา HTML อัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "Skia ทำการคอมไพล์ Shader ในขณะที่ผู้ใช้กำลังเปิดแอนิเมชันครั้งแรก ทำให้เฟรมเรตตกวูบ (Jank) ส่วน Impeller ทำการ AOT Pre-compilation สำหรับ Shaders ทั้งหมดไว้ล่วงหน้า ทำให้การวาดภาพบน Vulkan และ Metal ลื่นไหลสม่ำเสมอ 60-120 FPS"
        },
        {
          id: "mob-1-q2",
          question: "ในสถาปัตยกรรม Three Trees ของ Flutter วัตถุในโครงสร้างใดทำหน้าที่คำนวณขนาดที่แท้จริง (Layout Constraints) และทำการระบายสีพิกเซล (Paint) ลงสู่หน้าจอ?",
          options: [
            "Widget Tree",
            "Element Tree",
            "RenderObject Tree",
            "Stateful Tree"
          ],
          correctAnswer: 2,
          explanation: "Widget Tree เป็นเพียงพิมพ์เขียวคอนฟิก (Blueprint), Element Tree เป็นตัวประสานงานโครงร่าง (Coordinator), ส่วน RenderObject Tree คือวัตถุทางกายภาพที่คำนวณ Layout Box Constraints และสั่งวาด Paint ลงสู่กราฟิกการ์ดจริง"
        }
      ],
      labGuide: {
        title: "แล็บตรวจสอบความพร้อมของระบบและรัน Flutter Doctor",
        toolName: "Flutter CLI & Terminal",
        downloadUrl: "https://flutter.dev/docs/get-started/install",
        objective: "ติดตั้ง Flutter SDK ตรวจสอบตัวแปร PATH และรันคำสั่งตรวจสอบสภาพแวดล้อมระบบ พร้อมวิเคราะห์ผลลัพธ์ Toolchain",
        steps: [
          {
            title: "เปิด Command Prompt หรือ PowerShell",
            detail: "เปิดหน้าต่างคำสั่งขึ้นมาและตรวจสอบว่าสามารถเรียกคำสั่ง flutter ได้หรือไม่"
          },
          {
            title: "รันคำสั่ง Flutter Doctor",
            detail: "พิมพ์คำสั่ง: flutter doctor -v แล้วกด Enter เพื่อให้ระบบสแกนตรวจสอบซอฟต์แวร์ทั้งหมดในเครื่อง"
          },
          {
            title: "วิเคราะห์รายการเครื่องหมายถูก",
            detail: "ตรวจสอบว่ามีเครื่องหมาย [✓] สีเขียวครบถ้วนในหมวด Flutter, Android toolchain, Chrome, และ VS Code"
          },
          {
            title: "ยอมรับสัญญาอนุญาต Android (ถ้าจำเป็น)",
            detail: "หากพบข้อความเตือนเกี่ยวกับ License ให้รันคำสั่ง: flutter doctor --android-licenses และกด 'y' ยอมรับทุกข้อ"
          }
        ],
        verification: "ข้อความสรุปด้านล่างสุดของคำสั่ง flutter doctor ต้องรายงานว่า '• No issues found!' แสดงถึงความพร้อมสมบูรณ์ในการพัฒนาแอปพลิเคชัน"
      }
    },

    {
      id: "mob-2",
      title: "ภาษา Dart 3 เชิงลึก: Sound Null Safety, Records & Pattern Matching และ Class Modifiers",
      description: "ทำความเข้าใจระบบ Type System ของ Dart 3, กลไก Sound Null Safety (Nullable vs Non-nullable, Late initialization), ฟีเจอร์ใหม่ Records (Tuple multi-return), Exhaustive Switch Expressions และ Class Modifiers (sealed, final, base)",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา Dart 3: พลังความปลอดภัยระดับคอมไพล์ไทม์

**Dart 3** เป็นภาษาโปรแกรมยุคใหม่ที่เน้น **Type-safety 100%** โดยตัดระบบที่ไม่ปลอดภัยในอดีตออกทั้งหมด และเพิ่มความสามารถในการเขียนโค้ดเชิงฟังก์ชัน (Functional Programming) เข้ามาอย่างเต็มรูปแบบ

---

## 1. กลไก Sound Null Safety (ปลอดภัยจาก Null Crash อย่างแท้จริง)

คำว่า **"Sound"** ในวิทยาการคอมพิวเตอร์หมายความว่า: หากระบบ Type System บอกว่าตัวแปรนี้ไม่มีทางเป็น \`null\` **มันจะไม่มีทางเป็น null ได้เลยอย่างแน่นอน 100% ทั้งในตอนคอมไพล์และตอนรันจริง** ซีพียูจึงสามารถ Optimize โค้ดได้เร็วและมีขนาดไบนารีที่เล็กลง

\`\`\`
Type Hierarchy ใน Dart 3:
               Object?  (รวมทุกอย่าง ทั้งที่มีค่าและเป็น null)
              /       \\
           Object      Null (มีสมาชิกค่าเดียวคือ null)
          /  │  \\
     String int bool
\`\`\`

- **Non-nullable (ค่าเริ่มต้น):** \`String studentName = "สมชาย";\` (ห้ามใส่ null เด็ดขาด)
- **Nullable:** \`String? nickname;\` (สามารถเป็น String หรือเป็น null ก็ได้)
- **Null-Aware Operators:**
  - \`nickname?.length\` (ถ้า nickname ไม่ใช่ null ให้หาความยาว, ถ้าใช่ null ให้คืน null)
  - \`nickname ?? "ไม่ระบุชื่อเล่น"\` (กำหนดค่าทางเลือกสำรองเมื่อตัวแปรเป็น null)
  - \`late final String configData;\` (สัญญาว่าจะกำหนดค่าก่อนถูกเรียกใช้แน่นอนในอนาคต)

---

## 2. ฟีเจอร์ปฏิวัติวงการของ Dart 3: Records และ Pattern Matching

### 2.1 Records (การส่งคืนข้อมูลหลายตัวพร้อมกันโดยไม่ต้องสร้างคลาสชั่วคราว)
\`\`\`dart
// ฟังก์ชันส่งคืนข้อมูลเป็น Record ประกอบด้วยชื่อ (String) และเกรด (double)
(String name, double gpa) getStudentProfile() {
  return ('สมคิด', 3.85);
}

// แตกตัวแปรออกมาใช้งานได้ทันที (Destructuring)
final (name, gpa) = getStudentProfile();
\`\`\`

### 2.2 Exhaustive Pattern Matching ด้วย Switch Expression
คอมไพเลอร์ของ Dart 3 จะตรวจสอบความครบถ้วน (Exhaustiveness) หากเราจัดการเงื่อนไขไม่ครบทุกกรณี โค้ดจะไม่ยอมคอมไพล์:
\`\`\`dart
sealed class NetworkState {}
class Success extends NetworkState { final String data; Success(this.data); }
class Failure extends NetworkState { final String error; Failure(this.error); }
class Loading extends NetworkState {}

// Switch Expression สั้นกระชับ คืนค่าผลลัพธ์เป็น Widget ได้ทันที
Widget buildUI(NetworkState state) => switch (state) {
  Success(data: var d) => Text('ข้อมูล: $d'),
  Failure(error: var e) => Text('ข้อผิดพลาด: $e', style: TextStyle(color: Colors.red)),
  Loading() => CircularProgressIndicator(),
};
\`\`\``,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// สถาปัตยกรรมโดเมนโมเดลใน Dart 3 ด้วย Sealed Classes และ Pattern Matching
// ปลอดภัยจากข้อผิดพลาด 100% พร้อมการจำลอง Result Pattern
// =================================================================

// 1. กำหนดสถานะผลลัพธ์ด้วย Sealed Class (คอมไพเลอร์บังคับเช็คครบทุกเคส)
sealed class Result<T> {}

class Ok<T> extends Result<T> {
  final T value;
  Ok(this.value);
}

class Err<T> extends Result<T> {
  final String errorMessage;
  final int errorCode;
  Err(this.errorMessage, {this.errorCode = 500});
}

// 2. โดเมนโมเดลนักศึกษา
class Student {
  final String citizenId;
  final String fullName;
  final double? gpa; // Nullable: สำหรับนักศึกษาเข้าใหม่ที่ยังไม่มีเกรด

  const Student({
    required this.citizenId,
    required this.fullName,
    this.gpa,
  });

  // การใช้ Dart 3 Records ในการส่งคืนข้อมูลสถิติ
  ({int creditTotal, double calculatedGpa}) getAcademicSummary() {
    return (creditTotal: 45, calculatedGpa: gpa ?? 0.0);
  }
}

// 3. ฟังก์ชันจำลองการดึงข้อมูลที่ส่งคืน Result Type
Result<Student> fetchStudentById(String id) {
  if (id == "6730901") {
    return Ok(const Student(
      citizenId: "1103700000001",
      fullName: "สมชาย สายโค้ด",
      gpa: 3.92,
    ));
  } else if (id == "6730902") {
    return Ok(const Student(
      citizenId: "1103700000002",
      fullName: "สมหญิง นักวิจัย",
      gpa: null, // ยังไม่มีเกรด
    ));
  } else {
    return Err("ไม่พบรหัสนักศึกษาในฐานข้อมูลวิทยาลัย", errorCode: 404);
  }
}

void main() {
  final queryIds = ["6730901", "6730902", "9999999"];

  for (final id in queryIds) {
    final result = fetchStudentById(id);

    // 4. การใช้ Switch Expression และ Pattern Matching ในการแยกแยะเคส
    final outputMessage = switch (result) {
      Ok(value: final student) => 
        "✅ พบข้อมูล: \${student.fullName} | เกรด: \${student.gpa?.toStringAsFixed(2) ?? 'ยังไม่มีผลการเรียน'}",
      Err(errorMessage: final msg, errorCode: final code) => 
        "❌ ผิดพลาด [Code $code]: $msg",
    };

    print(outputMessage);
  }
}`,
        description: "การประยุกต์ใช้ฟีเจอร์ Dart 3: Sealed Class Hierarchy, Result Type, Records และ Exhaustive Pattern Matching"
      },
      quiz: [
        {
          id: "mob-2-q1",
          question: "ในภาษา Dart 3 คลาสที่ประกาศด้วยคีย์เวิร์ด sealed class มีคุณสมบัติพิเศษอย่างไรที่มีผลต่อสถาปัตยกรรมของโปรแกรม?",
          options: [
            "ทำให้คลาสนั้นไม่สามารถมีเมธอดได้",
            "บังคับให้คลาสลูกทั้งหมดต้องถูกประกาศอยู่ภายในไฟล์เดียวกันเท่านั้น และทำให้คำสั่ง switch expression สามารถตรวจสอบความครบถ้วนของทุกเคส (Exhaustiveness Checking) ได้อย่างแม่นยำในขั้นตอนคอมไพล์",
            "ทำให้คลาสนั้นกินแรมเป็นศูนย์",
            "ห้ามสืบทอดคลาสโดยเด็ดขาด"
          ],
          correctAnswer: 1,
          explanation: "sealed class ใน Dart 3 ทำหน้าที่คล้าย Enum ขั้นสูง คอมไพเลอร์จะรู้จำนวนคลาสลูกที่เป็นไปได้ทั้งหมด หากใน switch ขาดเคสใดเคสหนึ่งไป คอมไพเลอร์จะแจ้งเตือน Error ทันทีโดยไม่ต้องมีเคส default"
        },
        {
          id: "mob-2-q2",
          question: "ตัวดำเนินการ Null-aware '??' ในภาษา Dart มีการทำงานอย่างไร?",
          options: [
            "ใช้คูณตัวเลขทศนิยมสองตัว",
            "ส่งคืนค่านิพจน์ฝั่งซ้ายหากไม่เป็น null แต่ถ้าฝั่งซ้ายมีค่าเป็น null จะส่งคืนค่านิพจน์ฝั่งขวาแทน",
            "สั่งให้ระบบหยุดทำงานทันที",
            "ตรวจสอบว่าตัวแปรสองตัวเท่ากันหรือไม่"
          ],
          correctAnswer: 1,
          explanation: "ตัวดำเนินการ If-Null (??) เช่น `value ?? fallback` จะตรวจสอบว่าหากค่าตัวแปร value ทางซ้ายไม่เป็น null จะใช้ค่านั้น แต่หากทางซ้ายเป็น null จะสลับไปใช้ค่าสำรอง fallback ทางขวาทันที"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบไวยากรณ์ Dart 3 บน DartPad Online",
        toolName: "DartPad (Dart 3 Online Environment)",
        downloadUrl: "https://dartpad.dev/",
        objective: "เขียนโค้ดภาษา Dart 3 ทดสอบคุณสมบัติ Sound Null Safety, Records และ Switch Expression บนเบราว์เซอร์โดยไม่ต้องติดตั้งโปรแกรม",
        steps: [
          {
            title: "เปิดเว็บไซต์ DartPad",
            detail: "เปิดเบราว์เซอร์ไปที่ https://dartpad.dev/ และตรวจสอบว่ามุมขวาล่างเลือกใช้ Dart 3.x"
          },
          {
            title: "คัดลอกโค้ดตัวอย่างโดเมนโมเดล",
            detail: "วางโค้ด C++ หรือ Dart จากตัวอย่างในบทเรียนลงในหน้าต่างด้านซ้าย"
          },
          {
            title: "ทดลองลบเคส Err ออกจาก switch",
            detail: "ทดลองลบบรรทัด 'Err(...) => ...' ออกจาก switch สังเกตว่า Dart Analyzer จะขีดเส้นแดงแจ้งเตือนว่า 'The type Result is not exhaustively matched'"
          },
          {
            title: "กดปุ่ม Run",
            detail: "กดปุ่ม 'Run' เพื่อสังเกตผลการทำงานในหน้าต่าง Console ด้านขวา"
          }
        ],
        verification: "ในหน้าต่าง Console ต้องแสดงผลข้อความ '✅ พบข้อมูล: สมชาย สายโค้ด...' และแสดงข้อความแจ้งเตือนสีแดงเมื่อไม่พบรหัสตามตรรกะ Pattern Matching"
      }
    },

    {
      id: "mob-3",
      title: "การออกแบบ UI ระดับแอดวานซ์: BoxConstraints, Slivers และ Material Design 3",
      description: "ทำความเข้าใจกฎเหล็กการคำนวณเลย์เอาต์ 'Constraints go down, Sizes go up, Parent sets position', การแก้ปัญหา Layout Overflow, การสร้างหน้าจอยืดหดด้วย CustomScrollView และ Slivers, และระบบสี Dynamic Color Scheme",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# กฎเหล็กแห่งการจัดเลย์เอาต์ใน Flutter: Constraints, Sizes, Positions

ความเข้าใจผิดอันดับหนึ่งของผู้เริ่มต้นเขียน Flutter คือคิดว่า Widget เป็นตัวกำหนดขนาดของตัวเอง แต่ในความเป็นจริง ขนาดของทุกอย่างถูกควบคุมโดย **RenderBox Constraints** ตามกฎ 3 ข้อ:

\`\`\`
1. Constraints go down:  วิดเจ็ตแม่ ส่ง 'ข้อจำกัดขนาด' (Min/Max Width, Min/Max Height) ลงไปให้วิดเจ็ตลูก
2. Sizes go up:         วิดเจ็ตลูก ตัดสินใจเลือก 'ขนาดจริง' ของตัวเองภายใต้ข้อจำกัดนั้น แล้วส่งขนาดกลับไปบอกแม่
3. Parent sets position: วิดเจ็ตแม่ เป็นผู้ตัดสินใจว่า จะนำลูกไป 'วางไว้ที่ตำแหน่งพิกัดใด' (X, Y) บนหน้าจอ
\`\`\`

---

## 1. บั๊กคลาสสิก: Unbounded Height Error ใน Column และ ListView

เมื่อเราวาง \`ListView\` (ซึ่งต้องการความสูงไม่จำกัด Infinity) ไว้ใน \`Column\` (ซึ่งปล่อยให้ลูกมีความสูงไม่จำกัด) จะเกิดข้อผิดพลาดสีเหลือง-ดำยอดฮิต:
**\`Vertical viewport was given unbounded height\`**
- **วิธีแก้ไขที่ถูกต้อง:** ต้องครอบ \`ListView\` ด้วยวิดเจ็ต **\`Expanded\`** หรือ **\`Flexible\`** เสมอ เพื่อให้แม่ (Column) ส่ง Tight Constraints ขนาดพื้นที่ที่เหลืออยู่ลงไปให้ลูก

---

## 2. สถาปัตยกรรม Slivers: การเลื่อนหน้าจอขั้นสูง (Advanced Scrolling)

วิดเจ็ตปกติอย่าง \`ListView\` มีข้อจำกัดในการทำแอนิเมชันหัวข้อพับเก็บได้
**Slivers** คือส่วนย่อยของพื้นที่ Viewport ที่สามารถปรับเปลี่ยนรูปร่าง ขนาด และการแสดงผลตามระยะการเลื่อนหน้าจอ (Scroll Offset) ของผู้ใช้ได้อย่างราบรื่น:
- **\`CustomScrollView\`:** คอนเทนเนอร์หลักสำหรับรวม Slivers หลากหลายรูปแบบ
- **\`SliverAppBar\`:** แถบหัวข้อด้านบนที่สามารถขยายใหญ่ (Expanded Height), ย่อส่วนเมื่อเลื่อนลง, และตรึงค้างไว้ (Pinned)
- **\`SliverList\` & \`SliverGrid\`:** วาดเฉพาะไอเท็มที่กำลังปรากฏบนหน้าจอเพื่อประหยัดหน่วยความจำ (Lazy Loading)`,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// การสร้างหน้าจอแคตตาล็อกหลักสูตรขั้นสูงด้วย CustomScrollView และ Slivers
// มี SliverAppBar ยืดหดได้ พร้อมภาพพื้นหลัง และ SliverGrid สวยงาม
// =================================================================

import 'package:flutter/material.dart';

class CourseCatalogScreen extends StatelessWidget {
  const CourseCatalogScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        physics: const BouncingScrollPhysics(), // สไตล์การเด้งนุ่มนวลแบบ iOS
        slivers: [
          // 1. SliverAppBar แบบขยายได้และพับเก็บเมื่อเลื่อนหน้าจอ
          SliverAppBar(
            expandedHeight: 220.0,
            floating: false,
            pinned: true, // ตรึงแถบ Appbar ไว้ด้านบนเสมอเมื่อเลื่อนสุด
            flexibleSpace: FlexibleSpaceBar(
              title: const Text(
                'หลักสูตรไอที 2568',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  shadows: [Shadow(color: Colors.black54, blurRadius: 4)],
                ),
              ),
              centerTitle: false,
              background: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Color(0xFF0F172A), Color(0xFF0284C7)],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
                child: const Center(
                  child: Icon(Icons.school, size: 80, color: Colors.white24),
                ),
              ),
            ),
            actions: [
              IconButton(
                icon: const Icon(Icons.search),
                onPressed: () {},
              ),
            ],
          ),

          // 2. ส่วนหัวข้อคั่นกลางแบบ SliverToBoxAdapter
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'สาขาวิชาที่เปิดสอน',
                    style: Theme.of(context).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  Text(
                    'ทั้งหมด 7 หลักสูตร',
                    style: Theme.of(context).textTheme.bodySmall,
                  ),
                ],
              ),
            ),
          ),

          // 3. แสดงผลตาราง 2 คอลัมน์แบบมี Lazy Loading ด้วย SliverGrid
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            sliver: SliverGrid(
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                mainAxisSpacing: 12.0,
                crossAxisSpacing: 12.0,
                childAspectRatio: 0.85,
              ),
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  return Card(
                    elevation: 3,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: Colors.blue.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: const Icon(Icons.code, color: Colors.blue),
                          ),
                          const Spacer(),
                          Text(
                            'หลักสูตรที่ \${index + 1}',
                            style: const TextStyle(fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 4),
                          const Text(
                            'มาตรฐานวิชาชีพ สอศ.',
                            style: TextStyle(fontSize: 11, color: Colors.grey),
                          ),
                        ],
                      ),
                    ),
                  );
                },
                childCount: 6,
              ),
            ),
          ),

          // เว้นระยะด้านล่าง
          const SliverToBoxAdapter(child: SizedBox(height: 40)),
        ],
      ),
    );
  }
}`,
        description: "สถาปัตยกรรม UI ชั้นสูงด้วย CustomScrollView, SliverAppBar แบบยืดหด และ SliverGrid จัดการหน่วยความจำอัตโนมัติ"
      },
      quiz: [
        {
          id: "mob-3-q1",
          question: "ตามกฎแห่งการจัดเลย์เอาต์ของ Flutter (Flutter Layout Rule) กระบวนการตัดสินใจเรื่องขนาดและตำแหน่งเกิดขึ้นตามลำดับอย่างไร?",
          options: [
            "ลูกเลือกขนาด -> แม่ปรับตาม -> วาดทันที",
            "แม่ส่งข้อจำกัดลงไป (Constraints go down) -> ลูกเลือกขนาดส่งกลับขึ้นมา (Sizes go up) -> แม่ตัดสินใจวางตำแหน่งพิกัด (Parent sets position)",
            "ทุกอย่างกำหนดจากพิกัดตายตัวบนหน้าจอ (Absolute Positioning)",
            "ขึ้นอยู่กับความเร็วของการ์ดจอเท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "นี่คือกฎเหล็กสามข้อของ Flutter: 1. Constraints go down 2. Sizes go up 3. Parent sets position หากลูกพยายามมีขนาดเกินกว่าข้อจำกัดที่แม่กำหนด จะเกิดปัญหา RenderFlex Overflow ทันที"
        },
        {
          id: "mob-3-q2",
          question: "หากต้องการสร้างหน้าจอที่มีหัวข้อรูปภาพด้านบนยุบตัวพับเก็บได้เมื่อผู้ใช้เลื่อนหน้าจอลงมา ควรเลือกใช้วิดเจ็ตกลุ่มใด?",
          options: [
            "SliverAppBar ภายใน CustomScrollView",
            "Column ภายใน SingleChildScrollView",
            "Container ธรรมดา",
            "DataTable"
          ],
          correctAnswer: 0,
          explanation: "CustomScrollView ร่วมกับ SliverAppBar ถูกสร้างขึ้นมาสำหรับงานแอนิเมชันเลื่อนหน้าจอโดยเฉพาะ โดยสามารถกำหนด expandedHeight, pinned: true, และ flexibleSpace เพื่อสร้างลูกเล่นการพับหัวข้ออย่างลื่นไหล"
        }
      ],
      labGuide: {
        title: "แล็บแก้ปัญหา RenderFlex Overflow และสร้าง SliverAppBar",
        toolName: "Android Emulator / Flutter Simulator",
        downloadUrl: "https://flutter.dev/",
        objective: "ทดลองสร้างหน้าจอ CustomScrollView ตรวจจับและแก้ไขปัญหา Overflow บนหน้าจอมือถือ และทดสอบการพับเก็บของ SliverAppBar",
        steps: [
          {
            title: "สร้างไฟล์หน้าจอแคตตาล็อก",
            detail: "สร้างไฟล์ lib/screens/catalog_screen.dart และวางโค้ด CustomScrollView จากบทเรียน"
          },
          {
            title: "เชื่อมเข้ากับหน้าหลัก",
            detail: "ในไฟล์ main.dart กำหนด home: const CourseCatalogScreen()"
          },
          {
            title: "รันแอปบน Emulator",
            detail: "กดปุ่ม F5 หรือพิมพ์ flutter run เลือกรันบน Android Emulator"
          },
          {
            title: "ทดสอบการเลื่อนหน้าจอ (Scroll Interaction)",
            detail: "ใช้เมาส์ลากเลื่อนหน้าจอขึ้น-ลง สังเกตภาพไอคอนและหัวข้อด้านบนจะหดตัวลงกลายเป็น AppBar ขนาดปกติอย่างนุ่มนวล"
          }
        ],
        verification: "หน้าจอแอปพลิเคชันต้องเลื่อนขึ้นลงได้อย่างลื่นไหล หัวข้อพับเก็บได้อย่างถูกต้อง และไม่มีแถบขีดสีเหลือง-ดำแจ้งเตือน Layout Overflow ปรากฏบนหน้าจอ"
      }
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "mob-4",
      title: "สถาปัตยกรรมการจัดการสถานะ (State Management): จาก setState สู่ Riverpod และ BLoC Pattern",
      description: "วิเคราะห์ข้อจำกัดของ setState และ Props Drilling, สถาปัตยกรรม Reactive State Management ด้วย Riverpod 2.0 (StateNotifierProvider, AsyncValue), และ BLoC Pattern (Business Logic Component) สำหรับระบบระดับ Enterprise",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมการจัดการสถานะ (State Management Architecture)

เมื่อแอปพลิเคชันมีขนาดใหญ่ขึ้น การพึ่งพา \`setState()\` จะทำให้เกิดปัญหาโค้ดปนเปื้อน (UI ปนกับ Business Logic), ปัญหา **Props Drilling** (ต้องส่งข้อมูลข้ามหลายสิบชั้น), และ **Unnecessary Re-builds** (คอมโพเนนต์ทั้งหน้าถูกวาดใหม่โดยไม่จำเป็น)

---

## 1. เปรียบเทียบสถาปัตยกรรม State Management ยอดนิยม

\`\`\`
1. setState (ระดับเริ่มต้น - Local State)
   - ใช้ได้เฉพาะภายใน StatefulWidget ตัวเดิม
   - ไม่สามารถแชร์ข้อมูลข้ามหน้าง่ายๆ

2. Riverpod 2.0 (ระดับสากล - แนะนำสูงสุดสำหรับแอปยุคใหม่)
   - Compile-Safe: ไม่พึ่งพา BuildContext
   - มีระบบ AsyncValue จัดการสถานะ Loading/Error/Data ในตัวอัตโนมัติ
   - ทดสอบ Unit Test ง่ายมากโดยไม่ต้องจำลองหน้าจอ

3. BLoC / Cubit (ระดับ Enterprise - องค์กรขนาดใหญ่)
   - สถาปัตยกรรม Stream-Based แยก Event และ State ชัดเจน 100%
   - ตรวจสอบย้อนหลังได้ทุกการกระทำ (Time-travel Debugging / Auditing)
\`\`\`

---

## 2. เจาะลึก Riverpod: สถาปัตยกรรม Dependency Injection & State

Riverpod พัฒนาโดย Rémi Rousselet เป็นการปฏิวัติระบบ Provider เดิม โดยตัดการผูกติดกับ Widget Tree ออก ทำให้สามารถอ่านและเปลี่ยนแปลงข้อมูลได้จากทุกที่อย่างปลอดภัย

\`\`\`
[ UI Layer (ConsumerWidget) ]
       │
       │ ref.watch(studentListProvider)
       ▼
[ StateNotifier / AsyncNotifier ] ── (ดึงข้อมูลจาก API / SQLite)
       │
       ▼ (ส่งข้อมูลสถานะกลับมาในรูป AsyncValue)
  - AsyncLoading : แสดงตัวหมุนรอ CircularProgressIndicator
  - AsyncData    : แสดงรายการข้อมูลนักศึกษา
  - AsyncError   : แสดงกล่องข้อความสีแดงพร้อมปุ่มกดลองใหม่
\`\`\``,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// ตัวอย่างสถาปัตยกรรม Reactive State Management ด้วย Riverpod 2.0
// จัดการสถานะรายการนักศึกษา รองรับ Loading, Error, และ Data อัตโนมัติ
// =================================================================

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

// 1. โมเดลข้อมูล
class StudentItem {
  final int id;
  final String name;
  final double gpa;
  StudentItem({required this.id, required this.name, required this.gpa});
}

// 2. StateNotifier จัดการตรรกะทางธุรกิจ (Business Logic Layer)
class StudentListNotifier extends AsyncNotifier<List<StudentItem>> {
  @override
  Future<List<StudentItem>> build() async {
    // โหลดข้อมูลเริ่มต้นเมื่อ Provider ถูกสร้าง
    return _fetchStudentsFromApi();
  }

  Future<List<StudentItem>> _fetchStudentsFromApi() async {
    await Future.delayed(const Duration(milliseconds: 1200)); // จำลองดีเลย์เน็ต
    return [
      StudentItem(id: 1, name: "สมชาย สายโค้ด", gpa: 3.85),
      StudentItem(id: 2, name: "วิภาดา ปัญญาดี", gpa: 3.90),
    ];
  }

  // ฟังก์ชันเพิ่มนักศึกษาใหม่
  Future<void> addStudent(String name, double gpa) async {
    state = const AsyncLoading(); // ปรับสถานะเป็นกำลังโหลด
    state = await AsyncValue.guard(() async {
      final currentList = state.value ?? [];
      final newItem = StudentItem(id: currentList.length + 1, name: name, gpa: gpa);
      return [...currentList, newItem];
    });
  }
}

// 3. ประกาศ Provider ส่วนกลางระดับ Global
final studentListProvider =
    AsyncNotifierProvider<StudentListNotifier, List<StudentItem>>(() {
  return StudentListNotifier();
});

// 4. หน้าจอ UI ที่สืบทอดจาก ConsumerWidget (UI Layer)
class StudentManagementScreen extends ConsumerWidget {
  const StudentManagementScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // ติดตามสถานะของ Provider (Auto-rebuild เฉพาะเมื่อข้อมูลเปลี่ยน)
    final studentsAsync = ref.watch(studentListProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('จัดการข้อมูลนักศึกษา (Riverpod)')),
      body: studentsAsync.when(
        loading: () => const Center(child: CircularProgressIndicator()),
        error: (err, stack) => Center(child: Text('เกิดข้อผิดพลาด: $err')),
        data: (students) => ListView.builder(
          itemCount: students.length,
          itemBuilder: (context, index) {
            final student = students[index];
            return ListTile(
              leading: CircleAvatar(child: Text('\${student.id}')),
              title: Text(student.name),
              trailing: Text('GPA: \${student.gpa.toStringAsFixed(2)}'),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // เรียกใช้งานเมธอดใน Notifier โดยไม่เฝ้าดู Rebuild (ref.read)
          ref.read(studentListProvider.notifier).addStudent("นักศึกษาใหม่", 3.50);
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}`,
        description: "สถาปัตยกรรม Riverpod 2.0 AsyncNotifier แยก UI และ Business Logic ออกจากกันพร้อมจัดการ AsyncValue"
      },
      quiz: [
        {
          id: "mob-4-q1",
          question: "ใน Flutter Riverpod ออบเจกต์ประเภท AsyncValue มีประโยชน์สำคัญอย่างไรต่อการเขียนโค้ด UI?",
          options: [
            "ช่วยเพิ่มความจุของแบตเตอรี่มือถือ",
            "ช่วยจัดการและแยกแยะสถานะการดึงข้อมูล 3 สภาวะ (loading, error, data) ออกจากกันอย่างเป็นระเบียบผ่านคำสั่ง .when() โดยไม่ต้องเขียน if-else ดักเงื่อนไขเอง",
            "ใช้สำหรับแปลงโค้ดเป็นภาษา C++",
            "ทำให้แอปเล่นวิดีโอได้เร็วขึ้น"
          ],
          correctAnswer: 1,
          explanation: "AsyncValue ถูกออกแบบมาเพื่อแก้ปัญหา Callback Hell และ Boilerplate code ในงาน Asynchronous โดยเตรียมเมธอด pattern matching .when(loading: ..., error: ..., data: ...) ที่บังคับให้จัดการทุกสถานะอย่างรัดกุม"
        },
        {
          id: "mob-4-q2",
          question: "เมื่อต้องการสั่งงานฟังก์ชันทางธุรกิจ (เช่น กดปุ่มเพิ่มข้อมูล) โดย **ไม่ต้องการให้คอมโพเนนต์นั้น Re-build ใหม่ตามการเปลี่ยนแปลงของข้อมูล** ควรใช้คำสั่งใดของ WidgetRef?",
          options: [
            "ref.watch()",
            "ref.read()",
            "ref.listen()",
            "ref.refresh()"
          ],
          correctAnswer: 1,
          explanation: "ref.watch() ใช้สำหรับดักฟังและสั่งให้คอมโพเนนต์ build ใหม่เมื่อข้อมูลเปลี่ยน ส่วน ref.read() ใช้สำหรับอ่านค่าครั้งเดียวหรือเรียกใช้งานฟังก์ชันใน Notifier ภายใน Callback ของปุ่มกดโดยไม่สร้างการติดตาม Re-build"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบจัดการสถานะด้วย Riverpod 2.0",
        toolName: "Flutter Framework & flutter_riverpod",
        downloadUrl: "https://pub.dev/packages/flutter_riverpod",
        objective: "ติดตั้งแพ็กเกจ flutter_riverpod ครอบ ProviderScope ที่จุดเริ่มต้นแอป และสร้าง ConsumerWidget แสดงผลข้อมูลแบบ Reactive",
        steps: [
          {
            title: "ติดตั้งแพ็กเกจ",
            detail: "เปิดเทอร์มินัลในโปรเจกต์ รันคำสั่ง: flutter pub add flutter_riverpod"
          },
          {
            title: "ครอบ ProviderScope",
            detail: "ในไฟล์ main.dart ครอบวิดเจ็ตหลักด้วย ProviderScope: runApp(const ProviderScope(child: MyApp()))"
          },
          {
            title: "สร้าง Notifier และหน้าจอ",
            detail: "นำโค้ดตัวอย่าง StudentManagementScreen ไปวางและเชื่อมต่อเข้ากับระบบนำทาง"
          },
          {
            title: "ทดสอบการทำงาน Reactive",
            detail: "กดปุ่ม FloatingActionButton '+' และสังเกตการเพิ่มขึ้นของแถวนักศึกษาบนหน้าจอในทันที"
          }
        ],
        verification: "เมื่อกดปุ่มเพิ่มนักศึกษา หน้าจอจะต้องอัปเดตแถวข้อมูลใหม่อัตโนมัติโดยไม่มีการรีเฟรชทั้งหน้าจอ และจัดการสถานะ Loading แสดงผลได้อย่างราบรื่น"
      }
    },

    {
      id: "mob-5",
      title: "ระบบนำทางขั้นสูง (Declarative Routing) ด้วย GoRouter และ Deep Linking",
      description: "ทำความเข้าใจความแตกต่างของ Imperative (Navigator 1.0) vs Declarative Routing (GoRouter), การส่งพารามิเตอร์ Path & Query, ระบบป้องกันหน้าจอด้วย Auth Guards (Redirect), และ ShellRoute สำหรับ Navigation Bar",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมระบบนำทางยุคใหม่ด้วย GoRouter

ในแอปพลิเคชันยุคใหม่ การใช้คำสั่งดั้งเดิมอย่าง \`Navigator.push()\` (Imperative) มีข้อจำกัดร้ายแรง: ไม่รองรับการเปิดจากลิงก์ภายนอก (**Deep Linking เช่นคลิกลิงก์จาก LINE แล้วเปิดไปที่หน้าสินค้านั้นทันที**) และไม่รองรับประวัติ URL บนเว็บเบราว์เซอร์
Google จึงแนะนำให้ใช้ **GoRouter** ซึ่งเป็นระบบ **Declarative Routing** ที่ขับเคลื่อนด้วย URL และ State

---

## 1. ผังสถาปัตยกรรม GoRouter

\`\`\`
URL Path: /courses/iot?tab=curriculum
                 │
                 ▼
┌──────────────────────────────────────────────┐
│                  GoRouter                    │
│  - Path Parameters: :courseId -> 'iot'       │
│  - Query Parameters: tab -> 'curriculum'     │
│  - Auth Guard Redirect: เช็คสิทธิ์ก่อนเข้า   │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ StatefulShellRoute: รักษาแถบ Bottom Navigation │
│   ├─ Tab 1: หน้าแรก                          │
│   ├─ Tab 2: หลักสูตร (CourseDetailScreen)    │
│   └─ Tab 3: โปรไฟล์นักศึกษา                  │
└──────────────────────────────────────────────┘
\`\`\`

---

## 2. การสร้างระบบป้องกันหน้าจออัตโนมัติ (Auth Guards / Redirection)

GoRouter มีคุณสมบัติ \`redirect\` ซึ่งจะถูกประมวลผลทุกครั้งที่ผู้ใช้พยายามเปลี่ยนหน้าจอ หากผู้ใช้ยังไม่ได้ล็อกอินและพยายามเข้าหน้าที่มีความลับ (เช่น \`/grades\` หรือ \`/profile\`) ระบบจะดีดกลับไปหน้า \`/login\` ทันทีอย่างปลอดภัย!`,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// สถาปัตยกรรม GoRouter ระดับโปรดักชันพร้อม Auth Guard Redirect
// และการส่งผ่าน Dynamic Path Parameters (/courses/:id)
// =================================================================

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

// จำลองระบบตรวจสอบสถานะการล็อกอิน
class AuthService {
  static bool isAuthenticated = false;
}

// 1. กำหนดค่า GoRouter Configuration
final GoRouter appRouter = GoRouter(
  initialLocation: '/',
  // ระบบ Auth Guard: ตรวจสอบสิทธิ์ทุกครั้งที่มีการเปลี่ยน URL
  redirect: (BuildContext context, GoRouterState state) {
    final bool loggedIn = AuthService.isAuthenticated;
    final bool goingToLogin = state.matchedLocation == '/login';

    // ถ้ายังไม่ล็อกอิน และพยายามเข้าหน้าที่ไม่ใช่ /login ให้ดีดไป /login ทันที
    if (!loggedIn && !goingToLogin) {
      return '/login';
    }

    // ถ้าล็อกอินแล้วและพยายามเข้าหน้า /login ให้ดีดเข้าหน้าหลัก /
    if (loggedIn && goingToLogin) {
      return '/';
    }

    return null; // อนุญาตให้เดินทางไปยังเส้นทางเป้าหมายได้ตามปกติ
  },
  routes: [
    GoRoute(
      path: '/',
      name: 'home',
      builder: (context, state) => const HomeScreen(),
      routes: [
        // เส้นทางย่อยที่มี Path Parameter: /courses/:courseId
        GoRoute(
          path: 'courses/:courseId',
          name: 'course-detail',
          builder: (context, state) {
            final courseId = state.pathParameters['courseId'] ?? '';
            final refSource = state.uri.queryParameters['from'] ?? 'direct';
            return CourseDetailScreen(courseId: courseId, source: refSource);
          },
        ),
      ],
    ),
    GoRoute(
      path: '/login',
      name: 'login',
      builder: (context, state) => const LoginScreen(),
    ),
  ],
);

// 2. ตัวอย่างการเรียกใช้งานในแอป
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('IT Academy Hub')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // เดินทางแบบ Declarative พร้อมส่ง Path Parameter และ Query String
            context.go('/courses/iot?from=banner');
          },
          child: const Text('ดูรายละเอียดหลักสูตร IoT'),
        ),
      ),
    );
  }
}

class CourseDetailScreen extends StatelessWidget {
  final String courseId;
  final String source;

  const CourseDetailScreen({
    super.key,
    required this.courseId,
    required this.source,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('หลักสูตร: $courseId')),
      body: Center(
        child: Text('รหัสวิชา: $courseId | แหล่งที่มา: $source'),
      ),
    );
  }
}

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});
  @override
  Widget build(BuildContext context) => const Scaffold(body: Center(child: Text('หน้าล็อกอิน')));
}`,
        description: "สถาปัตยกรรม GoRouter รองรับ Declarative Navigation, Dynamic Parameters และ Auth Redirection"
      },
      quiz: [
        {
          id: "mob-5-q1",
          question: "เหตุใดระบบนำทางแบบ Declarative (เช่น GoRouter) จึงมีความจำเป็นอย่างยิ่งสำหรับการพัฒนาแอปพลิเคชันยุคใหม่เมื่อเทียบกับ Navigator.push แบบเดิม?",
          options: [
            "เพราะทำให้แอปพลิเคชันไม่จำเป็นต้องต่ออินเทอร์เน็ต",
            "เพราะขับเคลื่อนด้วย URL ทำให้รองรับระบบ Deep Linking (เปิดแอปเข้าสู่หน้าที่ต้องการได้ทันทีจากลิงก์ภายนอก) และรองรับการทำงานบน Web Browser ได้อย่างไร้รอยต่อ",
            "เพราะเขียนโค้ดสั้นกว่าครึ่งหนึ่งเสมอ",
            "เพราะช่วยลดขนาดไฟล์รูปภาพ"
          ],
          correctAnswer: 1,
          explanation: "GoRouter แมปเส้นทางของหน้าจอกับโครงสร้าง URL ทำให้เมื่อผู้ใช้คลิกลิงก์บนเว็บ โซเชียล หรือเปิด Push Notification ระบบจะสามารถวิเคราะห์ Path และเปิดหน้าจอนั้นขึ้นมาได้ทันทีอย่างสมบูรณ์แบบ"
        },
        {
          id: "mob-5-q2",
          question: "ใน GoRouter คุณสมบัติ 'redirect' มักถูกนำมาประยุกต์ใช้กับงานประเภทใดในแอปพลิเคชันจริง?",
          options: [
            "การคำนวณภาษี",
            "การทำ Authentication Guard ตรวจสอบสถานะการเข้าสู่ระบบ หากผู้ใช้ยังไม่ได้ล็อกอินจะดีดไปยังหน้า /login ทันทีเพื่อความปลอดภัย",
            "การดาวน์โหลดฟอนต์ภาษาไทย",
            "การปรับความสว่างของหน้าจอ"
          ],
          correctAnswer: 1,
          explanation: "redirect ทำงานเป็นเกตเวย์คัดกรองเส้นทาง โดยจะตรวจสอบเงื่อนไขความปลอดภัยก่อนให้ผู้ใช้เข้าถึงหน้านั้นๆ เสมือนเป็น Middleware ของระบบนำทาง"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบ Deep Linking และ Navigation Guard ด้วย GoRouter",
        toolName: "Flutter SDK & go_router",
        downloadUrl: "https://pub.dev/packages/go_router",
        objective: "ติดตั้ง go_router คอนฟิกเส้นทางแบบ Declarative และทดสอบการส่งพารามิเตอร์ผ่าน URL ในการเปลี่ยนหน้าจอ",
        steps: [
          {
            title: "เพิ่มแพ็กเกจ",
            detail: "เปิดเทอร์มินัลรันคำสั่ง: flutter pub add go_router"
          },
          {
            title: "คอนฟิก MaterialApp.router",
            detail: "ใน main.dart เปลี่ยน MaterialApp ปกติให้เป็น MaterialApp.router(routerConfig: appRouter)"
          },
          {
            title: "ทดสอบการเปิดหน้า Course Detail",
            detail: "กดปุ่มเพื่อสั่ง context.go('/courses/network?from=test') และสังเกตการเปิดหน้าจอปลายทาง"
          },
          {
            title: "ทดสอบ Auth Redirect",
            detail: "ลองเปลี่ยนค่า AuthService.isAuthenticated เป็น false แล้วกดเปลี่ยนหน้า สังเกตว่าระบบจะดีดกลับไปหน้าล็อกอินอัตโนมัติ"
          }
        ],
        verification: "หน้าจอปลายทางต้องสามารถแสดงผลรหัสวิชา 'network' และแหล่งที่มา 'test' ที่สกัดออกมาจากพารามิเตอร์ได้อย่างแม่นยำ และระบบ Guard สามารถสกัดกั้นผู้ใช้ที่ไม่ล็อกอินได้จริง"
      }
    },

    {
      id: "mob-6",
      title: "การเชื่อมต่อเครือข่ายระดับองค์กร: Dio, Interceptors, Auto Refresh Token และ JSON Modeling",
      description: "ทำไมแอปองค์กรจึงใช้ Dio แทน http, การใช้งาน Interceptors ในการแทรก Bearer Token, กลไกตรวจจับ HTTP 401 เพื่อขอ Refresh Token หมุนเวียนอัตโนมัติ, และการแปลง JSON เป็น Model ป้องกัน Type Error",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมการเชื่อมต่อเครือข่ายระดับองค์กรด้วย Dio

ในแอปพลิเคชันระดับ Production แพ็กเกจพื้นฐานอย่าง \`http\` ไม่เพียงพอต่อการใช้งานจริง เนื่องจากขาดระบบ **Interceptors**, ขาดระบบจัดการ **Timeout**, และไม่สามารถดักจับการหมดอายุของ Token กลางอากาศได้
สถาปัตยกรรมระดับสากลจึงเลือกใช้ **Dio (Powerful HTTP Client for Dart)**

---

## 1. วงจรชีวิตของ Dio Interceptors

\`\`\`
[ แอปพลิเคชันส่งคำขอ API Request ]
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  onRequest Interceptor                       │
│  -> แอบแทรก Header: 'Authorization: Bearer ' │
│  -> บันทึก Log การส่งคำขอเพื่อการดีบั๊ก      │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
             [ Cloud REST Server ]
                       │
         ┌─────────────┴─────────────┐
         ▼ (HTTP 200 OK)             ▼ (HTTP 401 Unauthorized - โทเคนหมดอายุ!)
┌─────────────────────────┐  ┌──────────────────────────────────────────┐
│  onResponse Interceptor │  │  onError Interceptor (กู้ชีพเซสชันอัตโนมัติ!) │
│  -> แปลงข้อมูล JSON     │  │  1. พักคิวคำขอเดิมไว้ชั่วคราว               │
└─────────────────────────┘  │  2. ยิง Refresh Token ไปขอ Access Token ใหม่ │
                             │  3. นำคำขอเดิมมาสวมโทเคนใหม่แล้วยิงซ้ำ!    │
                             │  * ผู้ใช้งานไม่รู้สึกตัวว่าหลุดจากระบบ!     │
                             └──────────────────────────────────────────┘
\`\`\`

---

## 2. กลยุทธ์การแปลงข้อมูล JSON ป้องกันการแครช (Safe JSON Deserialization)

ข้อผิดพลาดที่พบบ่อยที่สุดในแอปมือถือคือ: **\`type 'Null' is not a subtype of type 'String' in type cast\`** เกิดจากข้อมูลหลังบ้านส่งค่า null มาในจุดที่ไม่คาดคิด
**แนวทางป้องกัน:**
- กำหนดค่าเริ่มต้นเสมอ (Default Values)
- ใช้ \`num.tryParse\` สำหรับตัวเลข
- ใช้ไลบรารีโค้ดเจนเนอเรเตอร์ เช่น \`json_serializable\` หรือ \`freezed\``,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// สถาปัตยกรรม Dio Client ระดับองค์กรพร้อมระบบ Auto Refresh Token
// จัดการ Authentication Interceptor และการยิงคำขอซ้ำเมื่อเกิด HTTP 401
// =================================================================

import 'package:dio/dio.dart';

class ApiService {
  late final Dio _dio;
  String? _accessToken = "expired_mock_token_123";
  final String _refreshToken = "valid_refresh_token_999";

  ApiService() {
    _dio = Dio(BaseOptions(
      baseUrl: "https://api.itacademy.ac.th/v1",
      connectTimeout: const Duration(seconds: 8),
      receiveTimeout: const Duration(seconds: 8),
      headers: {'Accept': 'application/json'},
    ));

    // ติดตั้ง Interceptors สำหรับจัดการความปลอดภัยและการหมุนเวียน Token
    _dio.interceptors.add(InterceptorsWrapper(
      // 1. ก่อนส่งคำขอ: แทรก Access Token ลงใน Header เสมอ
      onRequest: (options, handler) {
        if (_accessToken != null) {
          options.headers['Authorization'] = 'Bearer $_accessToken';
        }
        print('[DIO REQ] กำลังส่งคำขอไปยัง: \${options.path}');
        return handler.next(options);
      },

      // 2. เมื่อเกิดข้อผิดพลาด: ตรวจจับ HTTP 401 (Token หมดอายุ)
      onError: (DioException error, handler) async {
        if (error.response?.statusCode == 401) {
          print('[DIO AUTH] ตรวจพบ Token หมดอายุ (401)! เริ่มกระบวนการ Refresh Token...');

          try {
            // ยิงขอ Token ใหม่ผ่าน Client ตัวแยกพิเศษ (เพื่อไม่ให้ลูปชนกัน)
            final refreshDio = Dio();
            final response = await refreshDio.post(
              "https://api.itacademy.ac.th/v1/auth/refresh",
              data: {'refresh_token': _refreshToken},
            );

            // ได้ Access Token ตัวใหม่มาแล้ว
            _accessToken = response.data['new_access_token'];
            print('[DIO AUTH] ได้รับ Token ใหม่เรียบร้อย ทำการยิงคำขอเดิมซ้ำ...');

            // ปรับปรุง Header ของคำขอเดิมด้วย Token ตัวใหม่
            error.requestOptions.headers['Authorization'] = 'Bearer $_accessToken';

            // ยิงคำขอเดิมซ้ำ (Retry Failed Request)
            final clonedRequest = await _dio.fetch(error.requestOptions);
            return handler.resolve(clonedRequest);

          } catch (refreshErr) {
            print('[DIO AUTH] Refresh Token ล้มเหลวหรือหมดอายุ บังคับล็อกเอาต์');
            // นำผู้ใช้กลับสู่หน้า Login
            return handler.next(error);
          }
        }
        return handler.next(error);
      },
    ));
  }

  // ตัวอย่างฟังก์ชันดึงเกรดเฉลี่ย
  Future<Map<String, dynamic>> getStudentGrades() async {
    final response = await _dio.get('/grades');
    return response.data;
  }
}`,
        description: "สถาปัตยกรรม Dio HTTP Client ระดับ Enterprise พร้อมระบบตรวจจับ HTTP 401 และ Refresh Token อัตโนมัติ"
      },
      quiz: [
        {
          id: "mob-6-q1",
          question: "ในสถาปัตยกรรมการเชื่อมต่อเครือข่ายของแอปพลิเคชันมือถือ ฟังก์ชัน Interceptor ของ Dio มีหน้าที่สำคัญอย่างไร?",
          options: [
            "บีบอัดไฟล์วิดีโอให้เล็กลง",
            "ทำหน้าที่เป็นตัวกลางดักจับคำขอ (Request), คำตอบกลับ (Response), หรือข้อผิดพลาด (Error) เพื่อแทรกข้อมูลความปลอดภัย (เช่น Bearer Token) หรือกู้ชีพเซสชันที่หมดอายุโดยอัตโนมัติ",
            "ใช้แทนโปรแกรมแอนตี้ไวรัส",
            "สร้างหน้าจอ UI อัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "Interceptor อนุญาตให้นักพัฒนาเขียนโค้ดดักตรงกลางก่อนที่คำขอจะหลุดออกจากเครื่อง และก่อนที่คำตอบจะส่งถึงโค้ด UI เหมาะอย่างยิ่งสำหรับการแทรก Authorization Header, การบันทึก Network Logs, และการกู้ชีพ Token ยามหมดอายุ"
        },
        {
          id: "mob-6-q2",
          question: "เมื่อเซิร์ฟเวอร์ส่งรหัสสถานะ HTTP 401 Unauthorized กลับมายังแอปพลิเคชัน สถาปัตยกรรมระบบความปลอดภัยที่ดีควรดำเนินการอย่างไร?",
          options: [
            "ปิดแอปพลิเคชันทิ้งทันที",
            "ใช้ Refresh Token ที่เก็บรักษาไว้อย่างปลอดภัยไปขอ Access Token ชุดใหม่จากเซิร์ฟเวอร์ และนำคำขอเดิมที่เคยล้มเหลวมายิงซ้ำโดยที่ผู้ใช้ไม่ต้องกรอกรหัสผ่านใหม่",
            "ลบฐานข้อมูลในเครื่องทิ้ง",
            "เปลี่ยนรหัสผ่านของผู้ใช้เป็นค่าว่าง"
          ],
          correctAnswer: 1,
          explanation: "กระบวนการ Refresh Token Rotation ช่วยสร้างประสบการณ์ใช้งานที่ราบรื่น (Seamless UX) ผู้ใช้ไม่ต้องคอยกรอกรหัสผ่านใหม่ทุกครั้งที่ Access Token อายุสั้นหมดอายุ ตัวแอปจะสลับขอโทเคนใหม่หลังบ้านให้อัตโนมัติ"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบ Network Interceptor และการดักจับข้อผิดพลาดด้วย Dio",
        toolName: "Flutter & Dio Package",
        downloadUrl: "https://pub.dev/packages/dio",
        objective: "ติดตั้ง Dio เขียน Interceptor พิมพ์ข้อความ Log ทราฟฟิกเครือข่าย และทดสอบส่งคำขอผ่าน Mock API",
        steps: [
          {
            title: "ติดตั้ง Dio",
            detail: "เปิดเทอร์มินัลรันคำสั่ง: flutter pub add dio"
          },
          {
            title: "สร้างคลาส ApiService",
            detail: "นำโค้ดตัวอย่างจากบทเรียนไปสร้างในโฟลเดอร์ lib/services/api_service.dart"
          },
          {
            title: "เพิ่ม LogInterceptor",
            detail: "เพิ่มคำสั่ง _dio.interceptors.add(LogInterceptor(responseBody: true)) เพื่อดูทราฟฟิกแบบละเอียด"
          },
          {
            title: "ทดลองยิงคำขอ",
            detail: "ทดสอบเรียกใช้งานในแอป สังเกตข้อความ Request Headers และ Response Data ในหน้าต่าง Debug Console"
          }
        ],
        verification: "ในหน้าต่าง Debug Console จะต้องแสดงรายการแพ็กเก็ต HTTP Method, Request Path, Headers ที่มี Bearer Token และโครงสร้าง JSON ที่ได้รับกลับมาจากเซิร์ฟเวอร์อย่างชัดเจน"
      }
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "mob-7",
      title: "สถาปัตยกรรมข้อมูลออฟไลน์ (Offline-First Architecture) ด้วย SQLite (sqflite) และการ Sync ข้อมูล",
      description: "ทำความเข้าใจสถาปัตยกรรม Single Source of Truth (SSOT), การจัดเก็บฐานข้อมูลเชิงสัมพันธ์ SQLite ในเครื่องมือถือ, การรัน Migration เวอร์ชันฐานข้อมูล, และกลยุทธ์การ Sync ข้อมูลเมื่อเชื่อมต่ออินเทอร์เน็ตได้",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Offline-First Mobile Application ด้วย SQLite

แอปพลิเคชันระดับมืออาชีพที่ใช้งานในโรงเรียนหรือโรงงานอุตสาหกรรมต้องสามารถทำงานได้ **100% แม้อยู่ในโหมด Offline** ไม่มีสัญญาณอินเทอร์เน็ต เมื่อมีสัญญาณเน็ตกลับมา ข้อมูลที่ถูกบันทึกไว้ในเครื่องจะทำการ **Re-synchronize** ขึ้นสู่ Cloud Server โดยอัตโนมัติ

---

## 1. หลักการ Single Source of Truth (SSOT)

\`\`\`
[ หน้าจอ UI (Widgets) ]
         ▲
         │ (UI ดึงข้อมูลจาก Local Database เท่านั้น! ไม่ดึงตรงจาก Cloud)
         ▼
[ ฐานข้อมูลในเครื่อง (SQLite / sqflite) - Single Source of Truth ]
         ▲
         │ (กระบวนการ Synchronization ทำงานเบื้องหลังเงียบๆ)
         ▼
[ Cloud REST API (PostgreSQL / MongoDB) ]
\`\`\`

- **ข้อดี:** หน้าจอเปิดขึ้นมาปุ๊บ ข้อมูลแสดงผลทันทีภายใน 0.05 วินาทีโดยไม่ต้องรอโหลดหมุนติ้ว และเปิดใช้งานได้ทุกที่แม้ในลิฟต์หรือกลางทุ่งนา

---

## 2. สถาปัตยกรรมฐานข้อมูล SQLite บนอุปกรณ์เคลื่อนที่ (sqflite)

- **ACID Compliant:** รองรับ Transactions เต็มรูปแบบ ข้อมูลไม่เสียหายหากแบตเตอรี่หมดกะทันหัน
- **Database Migration:** เมื่ออัปเดตเวอร์ชันแอป สามารถเขียนคำสั่ง \`onUpgrade\` เพิ่มคอลัมน์ใหม่โดยข้อมูลเก่ายังคงอยู่ครบถ้วน
- **ธงสถานะการซิงค์ (Sync Flags):**
  - \`is_synced = 1\`: ข้อมูลตรงกับคลาวด์แล้ว
  - \`is_synced = 0\`: ข้อมูลเพิ่งถูกสร้าง/แก้ไขในเครื่อง รอคิวส่งขึ้นคลาวด์เมื่อมีสัญญาณเน็ต`,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// สถาปัตยกรรม Offline Database Helper ด้วย SQLite (sqflite)
// รองรับ Database Migration, Batch Insert และธงสถานะ Synchronization
// =================================================================

import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class LocalDatabaseHelper {
  static final LocalDatabaseHelper instance = LocalDatabaseHelper._init();
  static Database? _database;

  LocalDatabaseHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('it_academy_offline.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    // เปิดฐานข้อมูลพร้อมระบบบริหารเวอร์ชันและการทำ Migration
    return await openDatabase(
      path,
      version: 2, // เวอร์ชันฐานข้อมูล
      onCreate: _createDB,
      onUpgrade: _upgradeDB,
    );
  }

  // สร้างตารางครั้งแรก (Schema V1)
  Future<void> _createDB(Database db, int version) async {
    await db.execute('''
      CREATE TABLE student_attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        is_synced INTEGER NOT NULL DEFAULT 0
      )
    ''');

    // สร้าง Index เพื่อเร่งความเร็วในการค้นหาแถวที่ยังไม่ได้ซิงค์
    await db.execute('''
      CREATE INDEX idx_sync ON student_attendance (is_synced)
    ''');
  }

  // อัปเกรดโครงสร้างตารางเมื่อแอปเปลี่ยนเวอร์ชัน (Schema Migration V1 -> V2)
  Future<void> _upgradeDB(Database db, int oldVersion, int newVersion) async {
    if (oldVersion < 2) {
      // ตัวอย่าง: เวอร์ชัน 2 มีการเพิ่มคอลัมน์หมายเหตุ
      await db.execute('ALTER TABLE student_attendance ADD COLUMN remark TEXT;');
    }
  }

  // บันทึกการเช็กชื่อแบบออฟไลน์
  Future<int> recordAttendanceOffline({
    required String studentId,
    required double lat,
    required double lng,
  }) async {
    final db = await instance.database;
    final id = await db.insert('student_attendance', {
      'student_id': studentId,
      'timestamp': DateTime.now().toIso8601String(),
      'latitude': lat,
      'longitude': lng,
      'is_synced': 0, // กำหนดเป็น 0 เพื่อรอการซิงค์
    });
    print('[DB] บันทึกการเช็กชื่อลงฐานข้อมูลในเครื่องสำเร็จ ID: $id');
    return id;
  }

  // ดึงรายการที่ค้างซิงค์เพื่อส่งขึ้น Cloud
  Future<List<Map<String, dynamic>>> getPendingSyncRecords() async {
    final db = await instance.database;
    return await db.query(
      'student_attendance',
      where: 'is_synced = ?',
      whereArgs: [0],
      limit: 50, // ทยอยส่งทีละ 50 รายการ
    );
  }

  // อัปเดตสถานะเป็นซิงค์สำเร็จแล้ว
  Future<void> markAsSynced(List<int> ids) async {
    final db = await instance.database;
    await db.transaction((txn) async {
      final batch = txn.batch();
      for (final id in ids) {
        batch.update(
          'student_attendance',
          {'is_synced': 1},
          where: 'id = ?',
          whereArgs: [id],
        );
      }
      await batch.commit(noResult: true);
    });
  }
}`,
        description: "สถาปัตยกรรม SQLite Helper สำหรับระบบ Offline-First พร้อม Database Migration และ Sync Flags"
      },
      quiz: [
        {
          id: "mob-7-q1",
          question: "ในสถาปัตยกรรมการออกแบบแอปพลิเคชันแบบ Single Source of Truth (SSOT) หน้าจอ UI ควรดึงข้อมูลจากแหล่งใดมาแสดงผลเป็นหลัก?",
          options: [
            "ดึงตรงจาก Cloud Server เสมอ",
            "ดึงจากฐานข้อมูลภายในเครื่อง (Local Database) เพียงจุดเดียว โดยมีระบบเบื้องหลังคอยทำหน้าที่ Sync ข้อมูลกับ Cloud",
            "ดึงจากไฟล์รูปภาพ",
            "ดึงจากคลิปบอร์ดของเครื่อง"
          ],
          correctAnswer: 1,
          explanation: "หลักการ SSOT กำหนดให้ฐานข้อมูลในเครื่องเป็นแหล่งข้อมูลความจริงหนึ่งเดียวของหน้าจอ UI ทำให้แอปเปิดได้รวดเร็วทันทีโดยไม่ต้องรอเน็ตเวิร์ก และระบบ Sync เบื้องหลังจะคอยอัปเดตฐานข้อมูลในเครื่องเมื่อได้รับข้อมูลใหม่จาก Cloud"
        },
        {
          id: "mob-7-q2",
          question: "เหตุใดในระบบฐานข้อมูล SQLite บนมือถือ จึงควรใช้คำสั่ง Batch ในการอัปเดตข้อมูลจำนวนมากพร้อมกัน?",
          options: [
            "เพราะทำให้ตัวอักษรเปลี่ยนสีได้",
            "เพราะการรันคำสั่งทีละบรรทัดจะทำให้เกิด Disk I/O ซ้ำๆ หลายรอบ การใช้ Batch จะรวมคำสั่งทั้งหมดไปเขียนลงฮาร์ดดิสก์ในการเปิดรอบ Disk Transaction เพียงครั้งเดียว จึงเร็วกว่าเดิมหลายร้อยเท่า",
            "เพราะคำสั่ง Batch ช่วยลดอุณหภูมิของเครื่อง",
            "เพราะ SQLite บังคับให้ใช้ Batch เสมอ"
          ],
          correctAnswer: 1,
          explanation: "Disk I/O บนสมาร์ตโฟนมีต้นทุนสูง การใช้ batch.commit() ภายใต้ Transaction เดียว จะรวมการเขียนข้อมูลนับพันรายการลงหน่วยความจำ Flash ในการเข้าถึงครั้งเดียว เกิดประสิทธิภาพสูงสุด"
        }
      ],
      labGuide: {
        title: "แล็บสร้างฐานข้อมูล SQLite ในเครื่องมือถือและทดสอบโหมดออฟไลน์",
        toolName: "Flutter & sqflite Package",
        downloadUrl: "https://pub.dev/packages/sqflite",
        objective: "ติดตั้ง sqflite และ path_provider เขียนข้อมูลลงตารางในเครื่อง เปิดโหมด Airplane Mode และพิสูจน์ว่าแอปยังคงทำงานและอ่านข้อมูลได้ปกติ",
        steps: [
          {
            title: "ติดตั้งแพ็กเกจ",
            detail: "เปิดเทอร์มินัลรันคำสั่ง: flutter pub add sqflite path"
          },
          {
            title: "สร้างไฟล์ LocalDatabaseHelper",
            detail: "สร้างไฟล์ lib/db/database_helper.dart และวางโค้ดจากบทเรียน"
          },
          {
            title: "ทดสอบบันทึกข้อมูล",
            detail: "เขียนโค้ดเรียก LocalDatabaseHelper.instance.recordAttendanceOffline() บันทึกข้อมูลทดสอบ 3 รายการ"
          },
          {
            title: "ตัดสัญญาณอินเทอร์เน็ต",
            detail: "เปิดโหมด Airplane Mode บน Emulator หรือตัด Wi-Fi/เน็ตมือถือ แล้วปิดแอปและเปิดใหม่"
          }
        ],
        verification: "แม้จะไม่มีสัญญาณอินเทอร์เน็ต แอปพลิเคชันยังคงสามารถเปิดอ่านข้อมูลที่บันทึกไว้ขึ้นมาแสดงผลบนหน้าจอได้อย่างสมบูรณ์ 100% โดยไม่มีข้อความแครช"
      }
    },

    {
      id: "mob-8",
      title: "การเข้าถึงฮาร์ดแวร์และเซนเซอร์: GPS Geofencing, กล้อง Camera และ Platform Channels",
      description: "ทำความเข้าใจสถาปัตยกรรม Platform Channels (MethodChannel/EventChannel), การขอ Runtime Permissions บน Android 14 และ iOS 17, การคำนวณระยะทางทางภูมิศาสตร์ด้วยสูตร Haversine สำหรับ Geofencing ตรวจสอบตำแหน่งเช็กชื่อเข้าเรียน",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# การควบคุมฮาร์ดแวร์ เซนเซอร์ และระบบพิกัดดาวเทียม GPS

Flutter ช่วยให้นักพัฒนาสามารถควบคุมฮาร์ดแวร์จริงของสมาร์ตโฟนผ่าน **Platform Channels (MethodChannel)** ซึ่งส่งผ่านข้อความแบบ Binary ไปยังภาษาเฉพาะของระบบปฏิบัติการ (Kotlin บน Android และ Swift บน iOS)

---

## 1. สถาปัตยกรรม Platform Channels

\`\`\`
[ Flutter Framework (Dart) ]
             ▲
             │ (MethodChannel.invokeMethod('getBatteryLevel'))
             ▼
[ Flutter Engine (C++) Binary Messenger ]
             ▲
             │ (Platform Method Call)
             ▼
┌──────────────────────────────────────────────┐
│ Platform Native Implementation               │
│   - Android: MainActivity.kt (Kotlin)        │
│   - iOS:     AppDelegate.swift (Swift)       │
└──────────────────────────────────────────────┘
\`\`\`

---

## 2. การคำนวณระยะทางภูมิศาสตร์ด้วยสูตร Haversine Formula

ในการทำระบบเช็กชื่อเข้าเรียนหรือลงเวลาปฏิบัติงาน เราจำเป็นต้องตรวจสอบว่า **"พิกัด GPS ของนักศึกษา อยู่ภายในรัศมี 100 เมตรของอาคารเรียนหรือไม่"**
เนื่องจากโลกเป็นทรงกลม การหาระยะทางแบบเส้นตรง $(\\Delta x^2 + \\Delta y^2)$ จะเกิดความคลาดเคลื่อนสูงมาก ต้องใช้ **สูตรฮาเวอร์ซีน (Haversine Formula)**:

$$a = \\sin^2\\left(\\frac{\\Delta \\varphi}{2}\\right) + \\cos(\\varphi_1) \\cdot \\cos(\\varphi_2) \\cdot \\sin^2\\left(\\frac{\\Delta \\lambda}{2}\\right)$$
$$c = 2 \\cdot \\text{atan2}\\left(\\sqrt{a}, \\sqrt{1-a}\\right)$$
$$d = R \\cdot c$$
โดยที่:
- $\\varphi$ คือละติจูด (Latitude ในหน่วยเรเดียน)
- $\\lambda$ คือลองจิจูด (Longitude ในหน่วยเรเดียน)
- $R$ คือรัศมีเฉลี่ยของโลก ($R \\approx 6,371,000\\text{ เมตร}$)
- $d$ คือระยะห่างจริงบนผิวโลกในหน่วยเมตร`,
      codeExample: {
        language: "dart",
        code: `// =================================================================
// บริการตรวจสอบพิกัด Geofencing ด้วยคณิตศาสตร์ Haversine
// และการขอสิทธิ์ Runtime Permissions บนระบบ Android/iOS
// =================================================================

import 'dart:math' as math;
import 'package:geolocator/geolocator.dart';

class GeofenceService {
  // พิกัดเสาธงของวิทยาลัย (ตัวอย่าง: ละติจูด, ลองจิจูด)
  static const double CAMPUS_LATITUDE = 13.7563;
  static const double CAMPUS_LONGITUDE = 100.5018;
  static const double ALLOWED_RADIUS_METERS = 100.0; // อนุญาตไม่เกิน 100 เมตร

  // 1. ฟังก์ชันคำนวณระยะห่างด้วยสูตร Haversine (คืนค่าเป็นเมตร)
  static double calculateDistanceMeters(
    double lat1, double lon1,
    double lat2, double lon2,
  ) {
    const double earthRadius = 6371000; // รัศมีโลกเฉลี่ยในหน่วยเมตร

    // แปลงองศาเป็นเรเดียน
    final dLat = _toRadians(lat2 - lat1);
    final dLon = _toRadians(lon2 - lon1);

    final a = math.sin(dLat / 2) * math.sin(dLat / 2) +
        math.cos(_toRadians(lat1)) *
            math.cos(_toRadians(lat2)) *
            math.sin(dLon / 2) *
            math.sin(dLon / 2);

    final c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a));
    return earthRadius * c;
  }

  static double _toRadians(double degree) => degree * (math.pi / 180.0);

  // 2. ฟังก์ชันตรวจสอบสิทธิ์และดึงพิกัดปัจจุบัน
  static Future<Position> getVerifiedPosition() async {
    bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      throw Exception("กรุณาเปิดบริการระบุตำแหน่ง (GPS) บนสมาร์ตโฟน");
    }

    LocationPermission permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        throw Exception("ผู้ใช้งานปฏิเสธสิทธิ์การเข้าถึงตำแหน่ง GPS");
      }
    }

    if (permission == LocationPermission.deniedForever) {
      throw Exception("สิทธิ์ GPS ถูกปิดถาวร กรุณาไปเปิดในการตั้งค่าของระบบ");
    }

    // ดึงพิกัดที่มีความแม่นยำสูง
    return await Geolocator.getCurrentPosition(
      desiredAccuracy: LocationAccuracy.high,
      timeLimit: const Duration(seconds: 10),
    );
  }

  // 3. ฟังก์ชันตรวจสอบว่านักเรียนอยู่ในพื้นที่เช็กชื่อหรือไม่
  static Future<({bool isInside, double currentDistance})> checkAttendanceEligibility() async {
    final position = await getVerifiedPosition();
    final distance = calculateDistanceMeters(
      CAMPUS_LATITUDE,
      CAMPUS_LONGITUDE,
      position.latitude,
      position.longitude,
    );

    return (
      isInside: distance <= ALLOWED_RADIUS_METERS,
      currentDistance: distance,
    );
  }
}`,
        description: "บริการตรวจสอบพิกัด Geofencing เช็กชื่อเข้าเรียนด้วยสูตร Haversine และการจัดการ GPS Runtime Permission"
      },
      quiz: [
        {
          id: "mob-8-q1",
          question: "เหตุใดในการคำนวณระยะห่างระหว่างจุดพิกัด GPS สองจุดบนพื้นโลก จึงต้องใช้สูตร Haversine Formula แทนการคำนวณระยะทางแบบพีทาโกรัสตรงๆ?",
          options: [
            "เพราะสูตรพีทาโกรัสใช้ได้เฉพาะกับสามเหลี่ยมบนระนาบแบนราบ 2 มิติ แต่พื้นผิวโลกมีความโค้งเป็นทรงกลม การใช้ Haversine จะคำนวณส่วนโค้งตามวงกลมใหญ่ (Great-Circle Distance) ทำให้ได้ระยะทางจริงที่แม่นยำ",
            "เพราะสูตร Haversine กินแบตเตอรี่น้อยกว่า",
            "เพราะดาวเทียม GPS ส่งข้อมูลมาเป็นตัวหนังสือ",
            "เพราะระบบ Android ไม่รองรับทฤษฎีพีทาโกรัส"
          ],
          correctAnswer: 0,
          explanation: "โลกมีสัณฐานเป็นทรงกลม (Oblate Spheroid) การคำนวณแบบระนาบเรียบจะเกิดความคลาดเคลื่อนสูงมาก สูตร Haversine จะคำนวณระยะทางตามแนวระนาบส่วนโค้งของทรงกลมโลก ทำให้ระยะห่างในระดับเมตรมีความถูกต้องสูงสุด"
        },
        {
          id: "mob-8-q2",
          question: "หากผู้ใช้งานเคยกดปฏิเสธสิทธิ์การเข้าถึงพิกัดแบบ 'Don't ask again' (deniedForever) ตัวแอปพลิเคชันจะสามารถขอสิทธิ์นั้นใหม่ด้วยคำสั่งปกติได้หรือไม่?",
          options: [
            "ได้เสมอ โดยระบบจะเด้งหน้าต่างถามซ้ำ",
            "ไม่ได้ แอปพลิเคชันต้องแจ้งเตือนให้ผู้ใช้เปิดหน้าต่างตั้งค่าของโทรศัพท์ (App Settings) เพื่อเปิดสิทธิ์ด้วยตนเองเท่านั้น",
            "ได้ โดยการปิดและเปิดเครื่องใหม่",
            "ได้ โดยการลบแอปทิ้ง"
          ],
          correctAnswer: 1,
          explanation: "ระบบความปลอดภัยของ Android และ iOS จะไม่อนุญาตให้แอปแสดงป๊อปอัปถามซ้ำเมื่อผู้ใช้เลือกบล็อกถาวร นักพัฒนาต้องใช้คำสั่ง Geolocator.openAppSettings() เพื่อนำทางผู้ใช้ไปเปิดสิทธิ์ด้วยตนเองในการตั้งค่าของระบบ"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบระบบเช็กชื่อเข้าเรียนด้วย GPS Geofencing",
        toolName: "Android Emulator Location Controls",
        downloadUrl: "https://pub.dev/packages/geolocator",
        objective: "เขียนระบบเช็กชื่อเข้าเรียน จำลองการเปลี่ยนพิกัด GPS บนแถบควบคุมของ Android Emulator และทดสอบการคำนวณระยะทางแบบเรียลไทม์",
        steps: [
          {
            title: "ติดตั้งปลั๊กอิน geolocator",
            detail: "เปิดเทอร์มินัลรันคำสั่ง: flutter pub add geolocator"
          },
          {
            title: "เพิ่ม Permission ใน AndroidManifest.xml",
            detail: "เปิด android/app/src/main/AndroidManifest.xml เพิ่ม: <uses-permission android:name=\"android.permission.ACCESS_FINE_LOCATION\" />"
          },
          {
            title: "จำลองพิกัดบน Emulator",
            detail: "คลิกจุดสามจุด (...) แถบข้างของ Android Emulator เลือกหัวข้อ Location ใส่พิกัด 13.7563, 100.5018 (จุดศูนย์กลาง)"
          },
          {
            title: "ทดสอบกดปุ่มเช็กชื่อ",
            detail: "กดปุ่มในแอป สังเกตว่าระบบรายงานระยะ 0 เมตร และอนุญาตให้เช็กชื่อ จากนั้นลองเปลี่ยนพิกัดให้ห่างออกไป 500 เมตรแล้วกดใหม่"
          }
        ],
        verification: "เมื่ออยู่ในรัศมี 100 เมตร ปุ่มเช็กชื่อจะขึ้นสถานะสำเร็จสีเขียว และเมื่อจำลองพิกัดเกิน 100 เมตร ระบบจะปฏิเสธการลงเวลาและแจ้งเตือนว่าอยู่นอกพื้นที่พร้อมระบุระยะทางจริง"
      }
    },

    {
      id: "mob-9",
      title: "โปรเจกต์จบ: พัฒนาแอปพลิเคชันพอร์ทัลนักศึกษา (IT Student Portal) และการคอมไพล์ Production Release",
      description: "รวมทุกองค์ประกอบสู่ระบบระดับมืออาชีพ: หน้าล็อกอิน, แดชบอร์ดผลการเรียน, ระบบตารางเรียน, การเช็กชื่อด้วย GPS Geofencing, ฐานข้อมูลแคชออฟไลน์ และขั้นตอนการเซ็นสัญญากุญแจ (Keystore) สร้างไฟล์ .aab และ .apk",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# สร้างแอปพลิเคชันพอร์ทัลนักศึกษาระดับโปรดักชันและเตรียมขึ้น Store

ในโปรเจกต์สุดท้ายนี้ คุณจะได้รวบรวมองค์ความรู้ทั้งหมด ทั้งสถาปัตยกรรม UI, การจัดการ State ด้วย Riverpod, การนำทางด้วย GoRouter, ฐานข้อมูลในเครื่อง SQLite, และระบบพิกัด GPS เพื่อสร้างแอปพลิเคชัน **IT Student Portal** ที่สมบูรณ์แบบพร้อมเผยแพร่สู่ผู้ใช้งานจริง

---

## 1. ผังสถาปัตยกรรมระบบรวมของแอปพลิเคชัน

\`\`\`
┌───────────────────────────────────────────────────────────┐
│                 Presentation Layer (UI)                   │
│   - Welcome / Login Screen                                │
│   - Student Dashboard (GPA, กราฟสรุปผลการเรียน)          │
│   - GPS Attendance Check-in Widget (ตรวจจับรัศมี 100m)     │
├───────────────────────────────────────────────────────────┤
│            State & Business Logic Layer (Riverpod)        │
│   - AuthNotifier: ดูแลสถานะ Session ล็อกอิน              │
│   - AttendanceNotifier: ควบคุมตรรกะเช็กชื่อ               │
├───────────────────────────────────────────────────────────┤
│             Data & Infrastructure Layer                   │
│   - Remote API (Dio HTTP Client + Auto Refresh Token)     │
│   - Local Database (SQLite sqflite Offline-First Cache)   │
│   - Hardware Services (Geolocator GPS + Device Info)      │
└───────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. ขั้นตอนการลงลายมือชื่อดิจิทัลและคอมไพล์ Production Release

ก่อนจะอัปโหลดแอปพลิเคชันขึ้นสู่ Google Play Store โค้ดจะต้องถูกคอมไพล์เป็น Machine Code ที่ผ่านการเข้ารหัสและลงลายมือชื่อ (Cryptographic Signing):

### ขั้นตอนการสร้าง Upload Keystore:
\`\`\`bash
keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
\`\`\`

สร้างไฟล์คอนฟิกลับ \`android/key.properties\`:
\`\`\`properties
storePassword=YourSecretStorePassword
keyPassword=YourSecretKeyPassword
keyAlias=upload
storeFile=../upload-keystore.jks
\`\`\`

### คำสั่งสร้างไฟล์ผลลัพธ์เพื่อส่งมอบ:
- **สร้าง Android App Bundle (\`.aab\`) สำหรับ Google Play Store:**
  \`flutter build appbundle --release\`
  *(ระบบ Play Store จะนำไฟล์นี้ไปสร้าง APK ที่เหมาะสมกับสเปก CPU และภาษาของมือถือแต่ละเครื่องอัตโนมัติ ทำให้ขนาดดาวน์โหลดเล็กลง 50%)*
- **สร้าง Universal APK (\`.apk\`) สำหรับติดตั้งในเครื่องโดยตรง (Sideloading / องค์กร):**
  \`flutter build apk --split-per-abi\`
  *(แยกไฟล์ตามสถาปัตยกรรมชิป: armeabi-v7a, arm64-v8a, x86_64)*`,
      codeExample: {
        language: "bash",
        code: `#!/usr/bin/env bash
# =================================================================
# สคริปต์อัตโนมัติสำหรับการ Build ไฟล์ Production Release ของ Flutter
# รันการตรวจสอบ Static Analysis, รัน Unit Tests, และคอมไพล์ไฟล์ .aab
# =================================================================

set -euo pipefail

echo "========================================================"
echo "    เริ่มต้นกระบวนการ Build Production Release (CI/CD)   "
echo "========================================================"

# 1. ตรวจสอบคุณภาพโค้ดด้วย Static Analysis
echo "[1/4] ตรวจสอบความถูกต้องของโค้ดด้วย dart analyze..."
flutter analyze

# 2. รันชุดการทดสอบระบบ Unit & Widget Tests
echo "[2/4] รันชุดการทดสอบทั้งหมดในโปรเจกต์..."
flutter test

# 3. ล้างไฟล์ขยะและแคชเก่า
echo "[3/4] ล้างไฟล์คอมไพล์เก่า (Clean Build)..."
flutter clean
flutter pub get

# 4. คอมไพล์ไฟล์ Android App Bundle พร้อมเปิดใช้งาน Code Shrinking (R8/ProGuard)
echo "[4/4] เริ่มต้นคอมไพล์ไฟล์ Android App Bundle (.aab)..."
flutter build appbundle --release --obfuscate --split-debug-info=./build/debug_symbols

echo "========================================================"
echo " [SUCCESS] คอมไพล์สำเร็จสมบูรณ์!"
echo " ตำแหน่งไฟล์: build/app/outputs/bundle/release/app-release.aab"
echo "========================================================"`,
        description: "สคริปต์ Bash ระดับมืออาชีพสำหรับการทดสอบความถูกต้องและการคอมไพล์ Production Release ของ Flutter"
      },
      quiz: [
        {
          id: "mob-9-q1",
          question: "เหตุใด Google Play Store จึงบังคับให้นักพัฒนาส่งไฟล์ในรูปแบบ Android App Bundle (.aab) แทนที่จะเป็นไฟล์ .apk แบบดั้งเดิม?",
          options: [
            "เพราะไฟล์ .aab ไม่สามารถถูกแฮกได้เลย",
            "เพราะ .aab ช่วยให้เซิร์ฟเวอร์ของ Google Play สามารถสร้างและแยกส่งเฉพาะไฟล์ APK ย่อย (Split APKs) ที่ตรงกับภาษา ความละเอียดหน้าจอ และสถาปัตยกรรม CPU ของมือถือผู้ใช้แต่ละราย ทำให้ขนาดดาวน์โหลดเล็กลงอย่างมาก",
            "เพราะ .aab ไม่ต้องเขียนโค้ด",
            "เพราะ .apk ใช้งานกับภาษา Dart ไม่ได้"
          ],
          correctAnswer: 1,
          explanation: "Dynamic Delivery ของ Android App Bundle (.aab) ช่วยตัดทรัพยากรที่ไม่เกี่ยวข้องออกสำหรับมือถือแต่ละเครื่อง เช่น เครื่องจอ 1080p จะไม่ดาวน์โหลดรูปของจอ 4K และเครื่อง ARM64 จะไม่ดาวน์โหลดไบนารีของ x86 ส่งผลให้ผู้ใช้งานดาวน์โหลดและติดตั้งได้เร็วขึ้นมาก"
        },
        {
          id: "mob-9-q2",
          question: "การใช้พารามิเตอร์ '--obfuscate' และ '--split-debug-info' ในคำสั่ง flutter build release มีประโยชน์หลักอย่างไรในเชิงวิศวกรรมความปลอดภัย?",
          options: [
            "ช่วยเพิ่มความเร็วในการเชื่อมต่อ Wi-Fi",
            "ทำการอำพรางโค้ด (Code Obfuscation) เปลี่ยนชื่อคลาสและฟังก์ชันเป็นตัวอักษรสุ่ม เพื่อป้องกันการถูกวิศวกรรมย้อนกลับ (Reverse Engineering / Decompile) และตัด Debug Symbol ออกจากไฟล์ไบนารี",
            "ทำให้แอปเปลี่ยนสีได้ตามเวลา",
            "บังคับให้แอปใช้งานได้เฉพาะภาษาไทย"
          ],
          correctAnswer: 1,
          explanation: "การ Obfuscate จะทำให้แฮกเกอร์ที่พยายามนำไฟล์ APK/AAB ไป Decompile ดูซอร์สโค้ดมองเห็นเพียงชื่อฟังก์ชัน a, b, c ที่ไม่สามารถทำความเข้าใจตรรกะได้ เป็นมาตรฐานความปลอดภัยที่จำเป็นสำหรับแอปพลิเคชันการเงินและการศึกษา"
        }
      ],
      labGuide: {
        title: "แล็บการสร้าง Keystore และคอมไพล์ไฟล์ Release APK / AAB",
        toolName: "Java Keytool & Flutter Build CLI",
        downloadUrl: "https://flutter.dev/",
        objective: "สร้างไฟล์กุญแจดิจิทัล Upload Keystore ด้วย keytool คอนฟิกไฟล์ key.properties และสั่งคอมไพล์ไฟล์ .aab สำหรับส่งขึ้น Google Play Store",
        steps: [
          {
            title: "สร้างไฟล์ Keystore ลับ",
            detail: "เปิดเทอร์มินัลพิมพ์คำสั่ง: keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload กำหนดรหัสผ่านให้เรียบร้อย"
          },
          {
            title: "ตั้งค่า android/key.properties",
            detail: "สร้างไฟล์ android/key.properties ระบุ storePassword, keyPassword, keyAlias, และ storeFile"
          },
          {
            title: "เชื่อมต่อใน build.gradle",
            detail: "ตรวจสอบไฟล์ android/app/build.gradle ว่ามีการโหลด signingConfigs.release จากไฟล์ key.properties"
          },
          {
            title: "รันคำสั่งคอมไพล์ Release",
            detail: "พิมพ์คำสั่ง: flutter build appbundle --release แล้วรอให้กระบวนการ R8 Code Shrinker ทำงานจนเสร็จ"
          }
        ],
        verification: "ในโฟลเดอร์ build/app/outputs/bundle/release/ จะต้องปรากฏไฟล์ app-release.aab ที่ผ่านการเซ็นสัญญากุญแจดิจิทัลอย่างถูกต้อง พร้อมสำหรับการส่งขึ้น Google Play Console"
      }
    }
  ]
};
