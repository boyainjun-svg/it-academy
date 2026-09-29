import { Course } from "../types";

export const mobileCourse: Course = {
  id: "mobile",
  title: "Mobile App Development",
  description: "พัฒนาแอปพลิเคชันมือถือข้ามแพลตฟอร์ม Android & iOS ด้วย Flutter Framework และภาษา Dart",
  longDescription: "หลักสูตรพัฒนาแอปพลิเคชันมือถือระดับมืออาชีพด้วย Flutter SDK และภาษา Dart ที่ช่วยให้คุณเขียนโค้ดชุดเดียว (Single Codebase) แต่สามารถคอมไพล์เป็นแอปเนทีฟทำงานได้ทั้งบน Android และ iPhone ได้อย่างลื่นไหล 60-120 FPS ครอบคลุมตั้งแต่การออกแบบ Widget, การจัดการ State, การติดต่อ REST API, ระบบฐานข้อมูลในเครื่อง, ไปจนถึงการ Build ไฟล์ APK/AAB เพื่อเตรียมขึ้น Store",
  icon: "📱",
  color: "cyan",
  gradient: "from-cyan-500 to-teal-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Flutter", "Dart", "Android", "iOS", "Cross-Platform", "State Management", "Mobile"],
  recommendedTools: [
    {
      name: "Android Studio",
      icon: "🤖",
      badge: "Official Android IDE",
      description: "IDE มาตรฐานอย่างเป็นทางการจาก Google สำหรับพัฒนา Android และรัน Android Virtual Device (Emulator) จำลองมือถือบนคอมพิวเตอร์",
      downloadUrl: "https://developer.android.com/studio",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง Android Studio\n2. ติดตั้ง Android SDK Command-line Tools และ Virtual Device (เช่น Pixel 7)\n3. ติดตั้งปลั๊กอิน Flutter และ Dart ผ่านแท็บ Plugins"
    },
    {
      name: "Flutter SDK",
      icon: "🎯",
      badge: "UI Toolkit",
      description: "ชุดพัฒนาซอฟต์แวร์แบบโอเพนซอร์สจาก Google สำหรับสร้างแอปที่คอมไพล์เป็นเนทีฟ มีคำสั่ง flutter create, flutter run, flutter doctor",
      downloadUrl: "https://flutter.dev/docs/get-started/install",
      setupGuide: "1. ดาวน์โหลด Flutter SDK แตกไฟล์ไว้ที่ C:\\src\\flutter\n2. เพิ่มโฟลเดอร์ bin เข้าไปใน Environment Variables (Path) ของ Windows\n3. เปิด Command Prompt พิมพ์: flutter doctor เพื่อตรวจสอบความพร้อม"
    },
    {
      name: "VS Code + Flutter Extension",
      icon: "⚡",
      badge: "Lightweight Editor",
      description: "เครื่องมือเขียนโค้ดที่รวดเร็วและใช้แรมเครื่องน้อยกว่า Android Studio เหมาะมากสำหรับการเขียนโค้ด Flutter พร้อมฟีเจอร์ Hot Reload",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. เปิด VS Code ไปที่ Extensions (Ctrl+Shift+X)\n2. ค้นหาและติดตั้ง 'Flutter' (จะติดตั้ง Dart ให้อัตโนมัติ)\n3. กด Ctrl+Shift+P พิมพ์ 'Flutter: New Project' เพื่อเริ่มสร้างแอปแรก"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "mob-1",
      title: "สถาปัตยกรรม Mobile App และทำความรู้จัก Flutter Framework",
      description: "เปรียบเทียบ Native vs Hybrid vs Cross-Platform และทำความเข้าใจเบื้องหลังเครื่องมือเรนเดอร์ Skia / Impeller ของ Flutter",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมแอปพลิเคชันมือถือยุคใหม่

ในอดีต หากต้องการพัฒนาแอปมือถือให้รองรับทั้ง Android และ iOS ต้องใช้นักพัฒนาสองทีมที่เขียนคนละภาษา (Kotlin/Java สำหรับ Android และ Swift สำหรับ iOS) ซึ่งมีต้นทุนสูงมาก

## วิวัฒนาการสู่ Flutter
Flutter พัฒนาโดย Google แตกต่างจาก Cross-Platform ตัวอื่น (เช่น React Native) ตรงที่ **Flutter ไม่ได้แปลงเป็น Web View หรือใช้ JavaScript Bridge**
- Flutter บรรจุ **Rendering Engine ของตัวเอง (Impeller / Skia)** วาดทุกพิกเซลลงบนหน้าจอตรงๆ
- ทำงานด้วยความเร็วสูงระดับ Native (60 FPS ถึง 120 FPS)
- มีฟีเจอร์ **Stateful Hot Reload** แก้โค้ดแล้วผลลัพธ์บนจอมือถือเปลี่ยนทันทีในเสี้ยววินาทีโดยไม่ต้องเริ่มแอปใหม่`,
      codeExample: {
        language: "bash",
        code: `# คำสั่งตรวจสอบความพร้อมของระบบในการพัฒนา Flutter
flutter doctor

# สร้างโปรเจกต์ใหม่
flutter create it_academy_app

# รันแอปพลิเคชันบน Emulator หรือมือถือจริง
cd it_academy_app
flutter run`,
        description: "คำสั่ง CLI เริ่มต้นสำหรับการตรวจสอบและสร้างโปรเจกต์ Flutter"
      },
      quiz: [
        { id: "mob-1-q1", question: "ฟีเจอร์ใดของ Flutter ที่ช่วยให้นักพัฒนาเห็นผลลัพธ์บนจอมือถือทันทีหลังจากกดบันทึกโค้ดโดยไม่ต้องคอมไพล์แอปใหม่?", options: ["Fast Compile", "Stateful Hot Reload", "Quick Restart", "Auto Build"], correctAnswer: 1, explanation: "Stateful Hot Reload นำโค้ดที่แก้ไขเข้าไปฉีดใน Dart VM ที่กำลังทำงานอยู่ทันทีโดยไม่สูญเสียค่า State เดิม" }
      ]
    },
    {
      id: "mob-2",
      title: "ภาษา Dart ขั้นพื้นฐานและระบบ Sound Null Safety",
      description: "เจาะลึกไวยากรณ์ภาษา Dart, การประกาศตัวแปร, ฟังก์ชัน, คลาสเชิงวัตถุ (OOP), และระบบป้องกัน Null Error",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# ภาษา Dart: ภาษาเบื้องหลังของ Flutter

Dart เป็นภาษาโปรแกรมเชิงวัตถุ (Object-Oriented) ที่มีระบบ Type-safe สมบูรณ์แบบ พัฒนามาเพื่อตอบโจทย์ UI Framework โดยเฉพาะ

## 1. ระบบ Sound Null Safety (ปลอดภัยจาก Null Crash)
ในภาษา Dart ตัวแปรทุกตัวโดยค่าเริ่มต้น **ห้ามเป็น null (Non-nullable)**
- \`String name = "สมชาย";\` (เป็น null ไม่ได้)
- หากต้องการให้มีโอกาสเป็น null ได้ ต้องใส่เครื่องหมายคำถาม \`?\` กำกับ: \`String? nickname;\`
- เมื่อต้องการเรียกใช้งานตัวแปรที่เป็นไปได้ว่าจะว่าง: \`nickname?.length\` หรือ \`nickname ?? "ไม่มีชื่อเล่น"\``,
      codeExample: {
        language: "dart",
        code: `// โมเดลข้อมูลนักเรียนในภาษา Dart
class Student {
  final String id;
  final String name;
  double? gpa; // ค่า GPA อาจจะยังไม่ออก จึงยอมให้เป็น null ได้

  Student({required this.id, required this.name, this.gpa});

  void displayInfo() {
    print('รหัสนักศึกษา: $id | ชื่อ: $name | เกรด: \${gpa ?? "อยู่ระหว่างประมวลผล"}');
  }
}

void main() {
  final student1 = Student(id: '6730901', name: 'สมคิด เรียนดี', gpa: 3.80);
  final student2 = Student(id: '6730902', name: 'สมศักดิ์ มานะ');

  student1.displayInfo();
  student2.displayInfo();
}`,
        description: "การประกาศคลาส Constructor แบบ Named Parameters และการใช้ Null Safety ในภาษา Dart"
      },
      quiz: [
        { id: "mob-2-q1", question: "ในภาษา Dart หากต้องการให้ตัวแปรประเภท int สามารถเก็บค่า null ได้ ต้องประกาศอย่างไร?", options: ["int? age;", "null int age;", "int age = null;", "nullable int age;"], correctAnswer: 0, explanation: "ใส่เครื่องหมาย ? ท้ายชื่อ Type (เช่น int?) เพื่อระบุว่าเป็น Nullable Type" }
      ]
    },
    {
      id: "mob-3",
      title: "Widgets พื้นฐานและการจัด Layout หน้าจอมือถือ",
      description: "ทำความเข้าใจว่า 'Everything is a Widget', Scaffold, AppBar, Column, Row, ListView, และ Container ตกแต่งสไตล์",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# Everything is a Widget ใน Flutter

ใน Flutter ทุกองค์ประกอบบนหน้าจอ ตั้งแต่โครงสร้างหน้า, ข้อความ, ปุ่ม, ช่องว่าง, ไปจนถึงการจัดวางตำแหน่ง ทั้งหมดล้วนเป็น **Widget**

## วิดเจ็ตแกนหลักสำหรับโครงสร้างหน้าจอ
- \`MaterialApp\`: วิดเจ็ตครอบทั้งแอป กำหนดธีมและระบบนำทาง
- \`Scaffold\`: โครงสร้างหน้าจอสไตล์ Material Design (มีที่วาง AppBar, Body, BottomNavigationBar, FloatingActionButton)
- \`Column\` & \`Row\`: จัดวางสิ่งของในแนวตั้งและแนวนอน
- \`ListView\`: แสดงรายการยาวๆ พร้อมรองรับการเลื่อนหน้าจอ (Scrolling) อัตโนมัติ`,
      codeExample: {
        language: "dart",
        code: `import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('IT Academy Mobile'),
          backgroundColor: Colors.indigo,
          foregroundColor: Colors.white,
        ),
        body: ListView(
          padding: const EdgeInsets.all(16),
          children: const [
            Card(
              child: ListTile(
                leading: Icon(Icons.wifi, color: Colors.blue),
                title: Text('IoT & Embedded Systems'),
                subtitle: Text('Arduino, ESP32, Raspberry Pi'),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
            Card(
              child: ListTile(
                leading: Icon(Icons.router, color: Colors.green),
                title: Text('Network & Cisco'),
                subtitle: Text('Packet Tracer, VLAN, Routing'),
                trailing: Icon(Icons.arrow_forward_ios),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
        description: "โครงสร้างแอปพลิเคชัน Flutter พื้นฐานแสดงรายการหลักสูตรด้วย ListView และ Card"
      },
      quiz: [
        { id: "mob-3-q1", question: "วิดเจ็ตใดใน Flutter ที่ทำหน้าที่เป็นโครงสร้างหลักของหน้าจอ จัดเตรียมพื้นที่สำหรับ AppBar และ Body ให้พร้อมใช้งาน?", options: ["Container", "Scaffold", "Column", "MaterialApp"], correctAnswer: 1, explanation: "Scaffold เป็นวิดเจ็ตมาตรฐานที่จัดเตรียมโครงสร้างหน้าจอตามแนวทาง Material Design" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "mob-4",
      title: "การจัดการสถานะ (State Management): StatefulWidget และ Provider",
      description: "ทำความเข้าใจความแตกต่างของ StatelessWidget และ StatefulWidget, ปัญหา Props Drilling และการใช้ Provider สำหรับ Global State",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การจัดการสถานะใน Flutter (State Management)

เมื่อข้อมูลในแอปพลิเคชันต้องเปลี่ยนแปลงตามการกระทำของผู้ใช้ (เช่น กดไลก์, นับเลข, เพิ่มสินค้าใส่ตะกร้า) เราต้องเข้าใจเรื่อง **State**

## 1. Ephemeral State (Local State)
ใช้ **StatefulWidget** ร่วมกับคำสั่ง \`setState(() { ... })\` เหมาะกับข้อมูลที่ส่งผลเฉพาะในหน้าจอเดียว เช่น การเปิด-ปิดสวิตช์

## 2. App State (Global State)
ข้อมูลที่ต้องแชร์ข้ามหลายๆ หน้าจอ (เช่น ข้อมูลโปรไฟล์ผู้ใช้ล็อกอิน, สินค้าในตะกร้า) แนะนำให้ใช้แพ็กเกจยอดนิยมอย่าง **Provider** หรือ **Riverpod**`,
      codeExample: {
        language: "dart",
        code: `import 'package:flutter/material.dart';

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int _counter = 0;

  void _increment() {
    setState(() {
      _counter++; // บอก Flutter ให้ Rebuild UI เฉพาะจุดนี้ใหม่
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('คุณกดปุ่มไปแล้ว: $_counter ครั้ง', style: const TextStyle(fontSize: 22)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _increment,
        child: const Icon(Icons.add),
      ),
    );
  }
}`,
        description: "การสร้าง StatefulWidget และการเรียกใช้ setState เพื่ออัปเดตหน้าจอ"
      },
      quiz: [
        { id: "mob-4-q1", question: "คำสั่งใดใช้แจ้งเตือน Flutter Framework ว่าข้อมูลภายใน StatefulWidget มีการเปลี่ยนแปลง และจำเป็นต้องวาด UI ใหม่?", options: ["rebuild()", "setState()", "update()", "refresh()"], correctAnswer: 1, explanation: "setState() เป็นคำสั่งแจ้ง Framework ว่าค่าตัวแปรเปลี่ยนไป ให้เรียกเมธอด build() ใหม่" }
      ]
    },
    {
      id: "mob-5",
      title: "การนำทางหลายหน้าจอ (Navigation & Routing)",
      description: "เปลี่ยนหน้าจอด้วย Navigator.push, Navigator.pop, การส่งข้อมูลไปยังหน้าถัดไป และการใช้งาน Named Routes / GoRouter",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# ระบบนำทางใน Flutter (Navigation & Routing)

การสลับหน้าจอใน Flutter ทำงานในรูปแบบของ **Stack (กองซ้อน)**
- **Push:** นำหน้าจอใหม่มาซ้อนทับด้านบน (เปิดหน้าใหม่)
- **Pop:** ดึงหน้าจอด้านบนสุดออกไป (กดย้อนกลับ)`,
      codeExample: {
        language: "dart",
        code: `// การเปลี่ยนหน้าพร้อมส่งข้อมูล Parameter
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => CourseDetailPage(courseId: 'iot'),
  ),
);

// การกดย้อนกลับไปยังหน้าจอก่อนหน้า
Navigator.pop(context);`,
        description: "การใช้คำสั่ง Navigator.push และ pop ในการสลับหน้าจอ"
      },
      quiz: [
        { id: "mob-5-q1", question: "คำสั่งใดใช้สำหรับปิดหน้าจอปัจจุบันและย้อนกลับไปยังหน้าจอเดิม?", options: ["Navigator.back(context)", "Navigator.pop(context)", "Navigator.remove(context)", "Navigator.exit(context)"], correctAnswer: 1, explanation: "Navigator.pop() จะนำหน้าจอด้านบนสุดออกจาก Stack เสมือนการกดย้อนกลับ" }
      ]
    },
    {
      id: "mob-6",
      title: "การเชื่อมต่อ REST API ผ่านแพ็กเกจ HTTP และ JSON Serialization",
      description: "ยิงคำสั่ง GET/POST ผ่านแพ็กเกจ http, แปลงข้อมูล JSON เป็น Model Class ด้วย factory constructor, และแสดงผลด้วย FutureBuilder",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# การดึงข้อมูลจากอินเทอร์เน็ตผ่าน REST API

แอปพลิเคชันส่วนใหญ่ต้องดึงข้อมูลจาก Cloud Server มาแสดงผล เช่น ข้อมูลเกรดนักเรียน ข่าวประชาสัมพันธ์

## 3 ขั้นตอนการดึงข้อมูลใน Flutter
1. ยิง HTTP Request ผ่านแพ็กเกจ \`http\`
2. แปลงผลลัพธ์ JSON String ให้อยู่ในรูปของ **Dart Model Class**
3. ใช้วิดเจ็ต \`FutureBuilder\` จัดการสถานะ Loading (กำลังโหลด), Error (เน็ตหลุด), และ Data (สำเร็จ)`,
      codeExample: {
        language: "dart",
        code: `import 'dart:convert';
import 'package:http/http.dart' as http;

class NewsItem {
  final int id;
  final String title;

  NewsItem({required this.id, required this.title});

  factory NewsItem.fromJson(Map<String, dynamic> json) {
    return NewsItem(
      id: json['id'],
      title: json['title'],
    );
  }
}

Future<List<NewsItem>> fetchNews() async {
  final res = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/posts?_limit=5'));
  if (res.statusCode == 200) {
    List data = jsonDecode(res.body);
    return data.map((item) => NewsItem.fromJson(item)).toList();
  } else {
    throw Exception('ไม่สามารถดึงข้อมูลข่าวสารได้');
  }
}`,
        description: "การเขียนฟังก์ชัน Asynchronous ดึงข้อมูล REST API และแปลงเป็น List ของ Model Class"
      },
      quiz: [
        { id: "mob-6-q1", question: "วิดเจ็ตใดใน Flutter ที่ออกแบบมาสำหรับสร้าง UI จากข้อมูลแบบ Asynchronous (Future) โดยแสดงตัวหมุนโหลดขณะกำลังรอข้อมูลได้อัตโนมัติ?", options: ["FutureBuilder", "AsyncWidget", "StreamBuilder", "WaitBuilder"], correctAnswer: 0, explanation: "FutureBuilder ฟังผลลัพธ์จาก Future และสลับแสดงผลระหว่างสถานะ ConnectionState.waiting และสำเร็จได้อย่างง่ายดาย" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "mob-7",
      title: "การจัดเก็บข้อมูลออฟไลน์ในเครื่องด้วย SQLite (sqflite)",
      description: "สร้างฐานข้อมูลในเครื่องมือถือด้วย sqflite เพื่อให้แอปทำงานได้แม้อยู่ในโหมด Offline ไม่มีสัญญาณเน็ต",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# ฐานข้อมูลในเครื่อง (Offline-First Mobile Architecture)

แอปพลิเคชันระดับมืออาชีพต้องสามารถเปิดดูข้อมูลและทำงานเบื้องต้นได้แม้ผู้ใช้งานจะอยู่ในพื้นที่ไม่มีสัญญาณอินเทอร์เน็ต

## ฐานข้อมูลยอดนิยมใน Flutter
- **sqflite:** ฐานข้อมูลเชิงสัมพันธ์ SQLite ในตัว รองรับคำสั่ง SQL เต็มรูปแบบ เหมาะกับข้อมูลซับซ้อน เช่น ข้อมูลการลงทะเบียนเรียน
- **Hive / Isar:** ฐานข้อมูล NoSQL แบบ Key-Value ที่มีความเร็วสูงมาก`,
      codeExample: {
        language: "dart",
        code: `import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

class LocalDatabase {
  static Database? _db;

  static Future<Database> get database async {
    if (_db != null) return _db!;
    _db = await openDatabase(
      join(await getDatabasesPath(), 'school_cache.db'),
      onCreate: (db, version) {
        return db.execute(
          'CREATE TABLE offline_tasks(id INTEGER PRIMARY KEY, title TEXT, is_done INTEGER)',
        );
      },
      version: 1,
    );
    return _db!;
  }
}`,
        description: "การเขียน Singleton Class เพื่อเปิดใช้งานฐานข้อมูล SQLite ภายในเครื่องมือถือ"
      },
      quiz: [
        { id: "mob-7-q1", question: "ข้อดีหลักของแนวคิดการออกแบบแอปพลิเคชันแบบ Offline-First คือข้อใด?", options: ["ทำให้แอปมีขนาดเล็กลงมาก", "ผู้ใช้สามารถเข้าถึงข้อมูลและบันทึกงานต่อได้ทันทีแม้เน็ตหลุด และจะซิงค์ขึ้น Cloud เมื่อต่อเน็ตได้อีกครั้ง", "ไม่ต้องใช้ฐานข้อมูลภายนอกเลย", "ไม่มีความจำเป็น"], correctAnswer: 1, explanation: "Offline-First มุ่งเน้นประสบการณ์ใช้งานที่ราบรื่น โดยแคชข้อมูลไว้ในเครื่องและทำงานได้เสมอแม้อินเทอร์เน็ตขัดข้อง" }
      ]
    },
    {
      id: "mob-8",
      title: "การเชื่อมต่อฮาร์ดแวร์มือถือ: Camera, GPS Geolocation & Notifications",
      description: "ขอ Permission กล้องถ่ายรูป, อ่านพิกัดละติจูด/ลองจิจูดจากชิป GPS, และส่ง Local Push Notification",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# การควบคุมฟังก์ชันฮาร์ดแวร์ของสมาร์ทโฟน

Flutter ช่วยให้เราสามารถเข้าถึงฮาร์ดแวร์จริงของมือถือผ่าน **Platform Channels** และปลั๊กอินมาตรฐาน

## ปลั๊กอินสำคัญในงานพัฒนาระบบ
- \`geolocator\`: ดึงพิกัดตำแหน่งปัจจุบันจากดาวเทียม GPS เพื่อทำระบบเช็กชื่อเข้าเรียนตามพิกัดอาคาร
- \`image_picker\`: เปิดกล้องถ่ายภาพใบหน้าหรือเลือกรูปภาพจากคลัง
- \`flutter_local_notifications\`: ยิงการแจ้งเตือนเตือนความจำบนแถบ Notification Bar`,
      codeExample: {
        language: "dart",
        code: `import 'package:geolocator/geolocator.dart';

// ฟังก์ชันดึงพิกัด GPS ปัจจุบันของนักเรียน
Future<Position> getCurrentLocation() async {
  bool serviceEnabled = await Geolocator.isLocationServiceEnabled();
  if (!serviceEnabled) {
    throw Exception('กรุณาเปิดบริการระบุตำแหน่ง GPS');
  }

  LocationPermission permission = await Geolocator.checkPermission();
  if (permission == LocationPermission.denied) {
    permission = await Geolocator.requestPermission();
  }

  return await Geolocator.getCurrentPosition(
    desiredAccuracy: LocationAccuracy.high,
  );
}`,
        description: "การขอ Permission และอ่านพิกัดตำแหน่ง GPS แบบแม่นยำสูง"
      },
      quiz: [
        { id: "mob-8-q1", question: "ก่อนที่แอปพลิเคชันจะเข้าถึงตำแหน่งพิกัด GPS หรือเปิดกล้องบนมือถือของผู้ใช้ จำเป็นต้องทำสิ่งใดก่อนเสมอ?", options: ["ต้องรีสตาร์ตเครื่อง", "ต้องขออนุญาต (Permission) จากผู้ใช้งาน และประกาศใน AndroidManifest.xml / Info.plist", "ต้องจ่ายค่าธรรมเนียม", "ไม่ต้องทำอะไรเลย"], correctAnswer: 1, explanation: "ระบบความปลอดภัยของทั้ง iOS และ Android บังคับให้ต้องขอสิทธิ์ Runtime Permission จากผู้ใช้งานก่อนเข้าถึงข้อมูลส่วนตัว" }
      ]
    },
    {
      id: "mob-9",
      title: "โปรเจกต์ใหญ่: Full-Featured Student Portal Mobile App",
      description: "พัฒนาแอปพลิเคชันพอร์ทัลนักเรียนครบวงจร: ล็อกอิน ดูเกรด ตารางเรียน เช็กชื่อผ่าน GPS และการ Build ไฟล์ Release",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# สร้างแอปพลิเคชันพอร์ทัลนักเรียนระดับมืออาชีพ

ในโปรเจกต์สุดท้ายนี้ คุณจะได้รวมความรู้ทั้งหมดเพื่อสร้างแอปพลิเคชัน **IT Student Portal** ที่นักศึกษาและอาจารย์ใช้งานได้จริงในชีวิตประจำวัน

## ฟีเจอร์ของแอปพลิเคชัน
1. **ระบบยืนยันตัวตน:** ล็อกอินด้วยรหัสนักศึกษาและรหัสผ่าน พร้อมจำลอง Token
2. **หน้าแดชบอร์ด:** แสดงผลการเรียนเฉลี่ย (GPAX), กราฟพัฒนาการผลการเรียน
3. **ตารางเรียน:** แสดงวิชาที่ต้องเรียนในแต่ละวันตามเวลา
4. **ระบบเช็กชื่อ:** ตรวจสอบพิกัด GPS ว่าอยู่ภายในรัศมี 100 เมตรของวิทยาลัยหรือไม่ ก่อนอนุญาตให้กดปุ่มเช็กชื่อเข้าเรียน
5. **การสร้างไฟล์ติดตั้ง:** รันคำสั่ง \`flutter build apk --release\` สำหรับ Android`,
      codeExample: {
        language: "bash",
        code: `# คำสั่งคอมไพล์แอปพลิเคชันเพื่อนำไปติดตั้งจริง
# สำหรับ Android (ได้ไฟล์ .apk ติดตั้งในเครื่อง)
flutter build apk --split-per-abi

# สำหรับส่งขึ้น Google Play Store (ได้ไฟล์ .aab)
flutter build appbundle

# สำหรับ iOS (ต้องทำบน macOS ร่วมกับ Xcode)
flutter build ipa`,
        description: "คำสั่งคอมไพล์โค้ดเป็นไฟล์ Production Release พร้อมติดตั้งบนเครื่องจริง"
      },
      quiz: [
        { id: "mob-9-q1", question: "ไฟล์ผลลัพธ์ประเภทใดที่ Google Play Store บังคับให้ใช้ในการอัปโหลดแอปพลิเคชันขึ้นสโตร์ในปัจจุบัน?", options: [".apk", ".exe", ".aab (Android App Bundle)", ".ipa"], correctAnswer: 2, explanation: "ปัจจุบัน Google Play บังคับให้ใช้ฟอร์แมต Android App Bundle (.aab) เพื่อให้เซิร์ฟเวอร์แยกไฟล์ย่อยตามสเปกของมือถือแต่ละเครื่อง" }
      ]
    }
  ]
};
