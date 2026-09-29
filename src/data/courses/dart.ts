import { Course } from "../types";

export const dartCourse: Course = {
  id: "dart",
  title: "Dart Language & Modern Asynchronous Architecture",
  description: "เรียนรู้ภาษา Dart 3 ตั้งแต่ Sound Null Safety, Records & Patterns, Mixins, Event Loop (Microtasks/Events), Streams จนถึง Isolates Concurrency และ Dart FFI",
  longDescription: "หลักสูตรภาษา Dart ยุคใหม่ (Modern Dart 3 Systems Engineering) ที่เป็นขุมพลังเบื้องหลัง Flutter และระบบประมวลผล Asynchronous ข้ามแพลตฟอร์ม ครอบคลุมตั้งแต่ระบบ Sound Null Safety 100%, ฟีเจอร์สมัยใหม่ของ Dart 3 เช่น Records และ Pattern Matching, การเขียนโปรแกรมเชิงวัตถุขั้นสูงด้วย Mixins และ Factory Constructors, กลไกภายในของ Event Loop และความแตกต่างระหว่าง Microtask Queue กับ Event Queue, การประมวลผลข้อมูลสตรีมมิ่งด้วย StreamController และ Rx, การเขียนโค้ดมัลติเธรดแท้จริงผ่าน Isolates และ Port Passing โดยไร้ปัญหา Shared Memory, การพัฒนา Command Line Tools และ Backend ด้วย Dart Shelf, การเชื่อมต่อภาษา C ด้วย Dart FFI, ตลอดจนกระบวนการคอมไพล์แบบ AOT (Ahead-of-Time) และ JIT (Just-in-Time)",
  icon: "🎯",
  color: "cyan",
  gradient: "from-teal-500 via-cyan-600 to-blue-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Dart", "Dart 3", "Flutter", "Asynchronous", "Streams", "Isolates", "Null Safety", "AOT"],
  recommendedTools: [
    {
      name: "Dart SDK 3.3+",
      icon: "🎯",
      badge: "Official SDK",
      description: "เครื่องมือคอมไพเลอร์ dart, ตัวจัดการแพ็กเกจ pub, และ linter วิเคราะห์คุณภาพโค้ดจาก Google",
      downloadUrl: "https://dart.dev/get-dart",
      setupGuide: "1. ติดตั้ง Dart SDK ผ่าน Chocolatey (Windows) หรือ Brew (macOS)\n2. ตรวจสอบใน Terminal: dart --version\n3. รันโปรแกรมทันที: dart run main.dart"
    },
    {
      name: "VS Code with Dart Extension",
      icon: "💻",
      badge: "Dart IDE",
      description: "สภาพแวดล้อมที่รองรับ Hot Reload, Auto-completion, Format on Save, และการเข้าถึง Dart DevTools",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้ง Extension 'Dart' โดย Dart Code ใน VS Code\n2. เปิดใช้ Dart DevTools ในการวิเคราะห์ Memory Profile"
    }
  ],
  lessons: [
    {
      id: "dart-1",
      title: "ปรัชญาภาษา Dart 3, Type System และ Sound Null Safety",
      description: "ทำความเข้าใจว่าทำไม Dart ถึงมีความเร็วสูงทั้งตอนเขียนและตอนรัน, ระบบ Sound Null Safety ที่คอมไพเลอร์การันตีความปลอดภัย และการประกาศตัวแปร",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# ปรัชญาภาษา Dart 3 และระบบ Sound Null Safety

ภาษา **Dart** ถูกพัฒนาโดยทีมงาน **Google** เพื่อเป็นภาษา Client-optimized สำหรับการสร้างแอปพลิเคชันที่ลื่นไหลระดับ 60-120 FPS บนทุกหน้าจอ โดยมีจุดเด่นคือสถาปัตยกรรม **Dual-Compiler** (JIT สำหรับ Hot Reload ตอนพัฒนา และ AOT สำหรับ Machine Code ความเร็วสูงตอน Production)

## 1. Sound Null Safety (ความปลอดภัยแบบ 100%)
คำว่า **Sound** ในที่นี้หมายถึง ถ้าคอมไพเลอร์บอกว่าตัวแปรนี้ไม่ใช่ \`null\` **มันจะไม่มีทางเป็น null ได้เลยอย่างเด็ดขาดแม้แต่ตอนรันไทม์**:
\`\`\`dart
String name = "Somchai";
// name = null; // ❌ คอมไพเลอร์ฟ้อง Error ทันที!

String? nullableName = null; // ใส่ ? เพื่ออนุญาตให้มีค่า null ได้
\`\`\`

## 2. ตัวดำเนินการจัดการค่าว่าง
- **Safe Navigation (\`?.\`):** \`user?.profile?.address\`
- **Null-coalescing (\`??\`):** \`String displayName = nickname ?? "ผู้ใช้งานทั่วไป";\`
- **Null-coalescing Assignment (\`??=\`):** กำหนดค่าเฉพาะเมื่อตัวแปรปัจจุบันยังเป็น null
- **Null Assertion (\`!\`):** บังคับให้คอมไพเลอร์เชื่อว่าไม่ใช่ null (ควรเลี่ยงหากไม่จำเป็น)`,
      codeExample: `// การสาธิต Sound Null Safety ในภาษา Dart 3
void main() {
  print("=== 1. Non-nullable vs Nullable Types ===");
  String fixedTitle = "IT Academy Dart Track";
  String? optionalSubtitle;

  print("Title: \$fixedTitle (ความยาว: \${fixedTitle.length})");
  print("Subtitle: \$optionalSubtitle");

  print("\n=== 2. Null-coalescing Operator (??) ===");
  String effectiveSubtitle = optionalSubtitle ?? "หลักสูตรมาตรฐานสากล";
  print("Effective Subtitle: \$effectiveSubtitle");

  print("\n=== 3. Safe Calls และ Conditional Execution ===");
  int? textLength = optionalSubtitle?.length;
  print("ความยาวเมื่อเป็น null: \$textLength"); // null

  optionalSubtitle = "ระบบประมวลผลประสิทธิภาพสูง";
  print("ความยาวหลังกำหนดค่า: \${optionalSubtitle.length}");
}`,
      challenge: "สร้างฟังก์ชัน formatGreeting(String? firstName, String? lastName) ที่ส่งคืนข้อความทักทายอย่างปลอดภัย หากค่าใดเป็น null ให้แทนที่ด้วยค่าว่าง",
      quiz: [
        {
          question: "คำว่า 'Sound Null Safety' ในภาษา Dart มีความหมายว่าอย่างไร?",
          options: [
            "คอมไพเลอร์การันตีว่าตัวแปรที่ไม่ใช่ Nullable จะไม่มีทางมีค่าเป็น null ได้เลยทั้งตอนคอมไพล์และตอนรันไทม์ ทำให้คอมไพเลอร์สามารถ optimize โค้ดได้เร็วขึ้น",
            "ตัวแปรทุกตัวจะส่งเสียงเตือนเมื่อมีค่าเป็น null",
            "ห้ามไม่ให้ใช้ค่า null เลยในทุกกรณี",
            "ใช้ได้เฉพาะบนโทรศัพท์ระบบ Android"
          ],
          correctAnswer: 0,
          explanation: "Sound Null Safety หมายถึงระบบความปลอดภัยที่สมบูรณ์แบบ หากตัวแปรไม่ได้ระบุ ? ระบบจะรับประกัน 100% ว่าไม่มีทางมี null หลุดรอดเข้าไปได้ ทำให้ AOT คอมไพเลอร์ตัดการตรวจสอบ null เช็คที่ไม่จำเป็นออก ส่งผลให้โค้ดทำงานเร็วขึ้น"
        },
        {
          question: "เครื่องหมาย ?? ในภาษา Dart ทำหน้าที่อะไร?",
          options: [
            "คืนค่าฝั่งขวาหากค่าฝั่งซ้ายเป็น null (Null-coalescing operator)",
            "เปรียบเทียบว่าข้อมูลเท่ากันหรือไม่",
            "ส่งข้อมูลเข้าสู่สตรีม",
            "หารเอาเศษ"
          ],
          correctAnswer: 0,
          explanation: "เครื่องหมาย ?? (If-null operator) ใช้สำหรับกำหนดค่าเริ่มต้นสำรอง หากนิพจน์ฝั่งซ้ายเป็น null จะส่งค่าฝั่งขวาออกมาแทน"
        },
        {
          question: "สถาปัตยกรรม Dual-compiler ของ Dart หมายถึงอะไร?",
          options: [
            "ใช้ JIT Compiler ตอนพัฒนาเพื่อรองรับ Hot Reload และใช้ AOT Compiler ตอน Build Production เพื่อความเร็ว Native",
            "ต้องมีคอมไพเลอร์ 2 ตัวทำงานพร้อมกันในเครื่อง",
            "รันบนซีพียู 2 ตัวเสมอ",
            "แปลโค้ดเป็นภาษาไทยและอังกฤษพร้อมกัน"
          ],
          correctAnswer: 0,
          explanation: "Dart ออกแบบมาให้มีสองคอมไพเลอร์: JIT (Just-in-Time) ที่อนุญาตให้ทำ Stateful Hot Reload ช่วยให้นักพัฒนาเห็นผลลัพธ์ในเสี้ยววินาที และ AOT (Ahead-of-Time) ที่คอมไพล์เป็น Machine Code แท้จริงสำหรับ Production"
        }
      ]
    },
    {
      id: "dart-2",
      title: "Collections, Records และ Patterns ใน Dart 3",
      description: "เจาะลึกฟีเจอร์ใหม่ระดับปฏิวัติวงการของ Dart 3: Multiple Return Values ด้วย Records, Destructuring, และ Pattern Matching ด้วย switch expressions",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# Collections, Records และ Patterns ใน Dart 3

การอัปเดตสู่ **Dart 3** ถือเป็นก้าวกระโดดครั้งใหญ่ที่สุดของภาษา ด้วยการเพิ่มฟีเจอร์ระดับเรือธงอย่าง **Records** และ **Pattern Matching**

## 1. Records (ส่งค่ากลับหลายตัวแปรได้ในฟังก์ชันเดียว)
ในอดีตหากต้องการส่งค่ากลับ 2 ค่า เราต้องสร้าง Class ใหม่ขึ้นมารองรับ แต่ใน Dart 3 เราใช้ Records ได้ทันที:
\`\`\`dart
// ฟังก์ชันคืนค่า Record ที่มีทั้ง Positional และ Named fields
(String name, int age, {bool isVerified}) getUserData() {
  return ("Somchai", 24, isVerified: true);
}

val (name, age, isVerified: verified) = getUserData(); // Destructuring!
\`\`\`

## 2. Patterns และ Switch Expressions ใน Dart 3
Switch ใน Dart 3 สามารถส่งค่ากลับออกมาเป็น Expression ได้ และมี Pattern Matching อันทรงพลัง:
\`\`\`dart
String describeHttpCode(int status) => switch (status) {
  200 => "สำเร็จ (OK)",
  201 => "สร้างข้อมูลเรียบร้อย (Created)",
  >= 400 && < 500 => "ข้อผิดพลาดฝั่งไคลเอนต์ (Client Error)",
  >= 500 => "ข้อผิดพลาดฝั่งเซิร์ฟเวอร์ (Server Error)",
  _ => "สถานะที่ไม่รู้จัก"
};
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Records และ Pattern Matching ใน Dart 3
// ฟังก์ชันวิเคราะห์พิกัดทางภูมิศาสตร์ คืนค่า Record
(double lat, double lng, String region) parseCoordinates(String raw) {
  var parts = raw.split(",");
  var lat = double.parse(parts[0].trim());
  var lng = double.parse(parts[1].trim());
  
  // ใช้ Switch Expression ตัดสินภูมิภาค
  String region = switch (lat) {
    > 18.0 => "ภาคเหนือ (North)",
    > 13.0 && <= 18.0 => "ภาคกลาง (Central)",
    <= 13.0 => "ภาคใต้ (South)",
    _ => "ไม่ระบุ"
  };

  return (lat, lng, region);
}

void main() {
  print("=== 1. Records และ Pattern Destructuring ใน Dart 3 ===");
  var (lat, lng, region) = parseCoordinates("13.7563, 100.5018");
  print("ละติจูด: \$lat | ลองจิจูด: \$lng");
  print("ภูมิภาคที่วิเคราะห์ได้: \$region");

  print("\n=== 2. Pattern Matching กับ JSON Data ===");
  Map<String, dynamic> jsonResponse = {
    "status": "success",
    "count": 42,
    "user": {"id": 101, "role": "admin"}
  };

  // ดึงค่าโครงสร้าง JSON ด้วย Object Pattern
  if (jsonResponse case {"status": "success", "user": {"role": String role}}) {
    print("✓ ตรวจพบผู้ใช้สถานะสำเร็จ และมีสิทธิ์ระดับ: \$role");
  }
}`,
      challenge: "สร้างฟังก์ชันที่รับ Record (double width, double height) และใช้ Switch Expression เพื่อส่งคืนสตริง 'Square' หากกว้างเท่ากับยาว หรือ 'Landscape'/'Portrait'",
      quiz: [
        {
          question: "ฟีเจอร์ Records ใน Dart 3 มีประโยชน์สำคัญในเรื่องใด?",
          options: [
            "ช่วยให้ฟังก์ชันสามารถส่งค่าผลลัพธ์กลับออกมาหลายค่าพร้อมกันได้แบบ Type-safe โดยไม่ต้องเสียเวลาสร้างคลาสใหม่",
            "ใช้สำหรับบันทึกเสียงผู้ใช้งาน",
            "ใช้บันทึกไฟล์วิดีโอ",
            "ใช้สำรองข้อมูลฮาร์ดดิสก์"
          ],
          correctAnswer: 0,
          explanation: "Records ช่วยให้นักพัฒนาสามารถจัดกลุ่มข้อมูลหลายๆ ค่า (Tuple) และส่งกลับออกจากฟังก์ชันได้ง่ายดายโดยไม่ต้องเขียนคลาส POJO/DTO มารองรับ"
        },
        {
          question: "สัญลักษณ์ขีดล่าง (_) ใน Switch Expression ของ Dart 3 มีความหมายว่าอย่างไร?",
          options: ["Default Case (ตรงกับค่าอื่นๆ ทั้งหมดที่ไม่ได้ระบุไว้ก่อนหน้า)", "การลบตัวแปร", "การข้ามการทำงาน", "การสร้างบรรทัดใหม่"],
          correctAnswer: 0,
          explanation: "สัญลักษณ์ _ ใน Pattern Matching ของ Dart 3 ทำหน้าที่เป็น Wildcard Pattern เทียบเท่ากับ default case ใน switch แบบดั้งเดิม"
        },
        {
          question: "ไวยากรณ์ var (a, b) = myRecord; ใน Dart 3 เรียกว่าอะไร?",
          options: ["Destructuring Declaration (การคลี่ค่าจาก Record ออกมาเป็นตัวแปรย่อย)", "Tuple Cast", "Record Copy", "Variable Shadowing"],
          correctAnswer: 0,
          explanation: "ไวยากรณ์นี้เรียกว่า Pattern Destructuring ซึ่งทำการแกะค่าฟิลด์ต่างๆ ภายใน Record ออกมาใส่ในตัวแปร a และ b พร้อมกันในบรรทัดเดียว"
        }
      ]
    },
    {
      id: "dart-3",
      title: "การเขียนโปรแกรมเชิงวัตถุ (OOP), Constructors และ Mixins",
      description: "ทำความเข้าใจคลาสใน Dart: Named Constructors, Const Constructors, Factory Constructors, และการแชร์โค้ดข้ามคลาสด้วย Mixins (with)",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# OOP ขั้นสูง, Constructors และ Mixins ในภาษา Dart

ในภาษา Dart ทุกสิ่งคือ Object (แม้กระทั่งฟังก์ชันและตัวเลข) โดยมีโครงสร้างการสร้างคลาสที่ยืดหยุ่นเป็นเอกลักษณ์

## 1. ประเภทของ Constructors ใน Dart
- **Generative Constructor:** คอนสตรักเตอร์ปกติ (ใช้ \`this.field\` กำหนดค่าอัตโนมัติ)
- **Named Constructor:** คอนสตรักเตอร์แบบตั้งชื่อ เช่น \`User.fromJson(Map json)\`
- **Const Constructor:** หากฟิลด์ทุกตัวเป็น \`final\` เราสามารถใส่ \`const\` นำหน้าคอนสตรักเตอร์ได้ ทำให้ Dart สร้าง Object ขึ้นมาเพียงตัวเดียวในหน่วยความจำ (Canonical Instance) หัวใจสำคัญที่ทำให้ Flutter วิดเจ็ตเร็วระดับ 120 FPS
- **Factory Constructor:** คอนสตรักเตอร์ที่สามารถควบคุมได้ว่าจะสร้าง Instance ใหม่ หรือคืนค่า Instance เก่าจาก Cache

\`\`\`dart
class DatabaseConfig {
  final String url;
  static DatabaseConfig? _cache;

  // Factory Constructor สามารถ return ค่าได้
  factory DatabaseConfig.singleton(String url) {
    return _cache ??= DatabaseConfig._internal(url);
  }

  // Private Named Constructor
  DatabaseConfig._internal(this.url);
}
\`\`\`

## 2. Mixins (การแบ่งปันพฤติกรรมโดยไร้ Multiple Inheritance)
Dart ไม่อนุญาตให้สืบทอดหลายคลาส (No Multiple Inheritance) แต่ใช้ **Mixins** ผ่านคีย์เวิร์ด \`with\`:
\`\`\`dart
mixin Flyable {
  void fly() => print("บินอยู่บนท้องฟ้า");
}

class Duck extends Bird with Flyable, Swimmable {}
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Const Constructor, Factory และ Mixins ใน Dart
mixin Auditable {
  void logEvent(String action) {
    print("📝 [AUDIT \${DateTime.now().toIso8601String()}]: \$action");
  }
}

class SystemUser with Auditable {
  final int id;
  final String username;
  final String role;

  // 1. Generative Constructor
  const SystemUser(this.id, this.username, this.role);

  // 2. Named Factory Constructor แปลงข้อมูลจาก Map
  factory SystemUser.fromJson(Map<String, dynamic> json) {
    return SystemUser(
      json['id'] as int,
      json['username'] as String,
      json['role'] as String? ?? 'Member',
    );
  }

  void login() {
    logEvent("ผู้ใช้ '\$username' (ID: \$id) เข้าสู่ระบบสำเร็จ");
  }
}

void main() {
  print("=== 1. ทดสอบ Const Instance Optimization ===");
  // อ็อบเจกต์ const ที่มีพารามิเตอร์เหมือนกัน จะชี้ไปยังหน่วยความจำตำแหน่งเดียวกัน 100%
  const userA = SystemUser(1, "Somchai", "Admin");
  const userB = SystemUser(1, "Somchai", "Admin");
  print("userA และ userB เป็นอ็อบเจกต์เดียวกันใน RAM? \${identical(userA, userB)}");

  print("\n=== 2. ทดสอบ Factory Constructor & Mixin ===");
  var json = {"id": 102, "username": "Kanda_Dev", "role": "Engineer"};
  var userFromApi = SystemUser.fromJson(json);
  userFromApi.login();
}`,
      challenge: "สร้างคลาส Product ที่มี Const Constructor และมี Named Factory Constructor ชื่อ Product.freebie() ที่กำหนดราคาเป็น 0.0 เสมอ",
      quiz: [
        {
          question: "ประโยชน์สูงสุดของ Const Constructor ในภาษา Dart คืออะไร?",
          options: [
            "Dart จะสร้างอ็อบเจกต์ขึ้นมาเพียงครั้งเดียวในหน่วยความจำ (Canonical Instance) และนำกลับมาใช้ซ้ำ ช่วยประหยัด RAM และเร่งความเร็วในการเรนเดอร์",
            "ห้ามไม่ให้อ็อบเจกต์ทำงาน",
            "แปลงโค้ดให้เป็นภาษา C++",
            "ทำให้คลาสไม่สามารถสร้าง instance ได้"
          ],
          correctAnswer: 0,
          explanation: "เมื่อสร้างอ็อบเจกต์ด้วย const Dart จะจองหน่วยความจำไว้ครั้งเดียวตอนคอมไพล์ และแชร์ตัวชี้เดิมหากมีการเรียกด้วยค่าเดิมซ้ำ ช่วยลดภาระ Garbage Collector ใน Flutter อย่างมหาศาล"
        },
        {
          question: "คีย์เวิร์ดใดที่ใช้ในการนำ Mixin เข้ามาใช้งานร่วมกับ Class ในภาษา Dart?",
          options: ["with", "implements", "extends", "include"],
          correctAnswer: 0,
          explanation: "ในภาษา Dart เราใช้คีย์เวิร์ด with เช่น class Duck extends Animal with Flyable เพื่อนำความสามารถของ Mixin เข้ามารวมในคลาส"
        },
        {
          question: "Factory Constructor ใน Dart แตกต่างจาก Constructor ปกติอย่างไร?",
          options: [
            "สามารถคืนค่า Instance เดิมที่มีอยู่แล้วจาก Cache ได้ หรือคืนค่าอ็อบเจกต์ลูกได้ โดยไม่จำเป็นต้องสร้าง Instance ใหม่เสมอ",
            "ไม่สามารถรับอาร์กิวเมนต์ได้",
            "ทำงานช้ากว่า 10 เท่า",
            "ใช้ได้เฉพาะในโรงงานอุตสาหกรรม"
          ],
          correctAnswer: 0,
          explanation: "Factory Constructor มีความยืดหยุ่นสูงกว่า Generative Constructor ตรงที่มันสามารถตัดสินใจตรวจสอบ Cache แล้วคืนค่า instance เดิม หรือคืนค่า subtype ของคลาสนั้นๆ ได้"
        }
      ]
    },
    {
      id: "dart-4",
      title: "สถาปัตยกรรม Asynchronous: Event Loop, Microtasks และ Futures",
      description: "เจาะลึกเบื้องหลังระบบ Single-threaded ของ Dart: กลไก Event Loop, ความแตกต่างระหว่าง Microtask Queue กับ Event Queue, และคำสั่ง async/await",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม Event Loop, Microtasks และ Futures

แม้ Dart จะเป็นภาษาที่ทำงานบน **Single Thread (1 Isolate มี 1 Thread)** แต่สามารถจัดการ I/O, Network และ UI Animations ได้อย่างลื่นไหลด้วย **Event Loop Architecture**

## 1. ลำดับความสำคัญใน Event Loop (The Two Queues)
เบื้องหลัง Dart มีคิวงาน 2 ชนิด:
1. **Microtask Queue (สำคัญสูงสุด):** งานขนาดสั้นที่ต้องทำทันที ห้ามมีอะไรมาคั่น (เช่น \`scheduleMicrotask\`) Event Loop จะเคลียร์งานใน Microtask Queue ให้หมดเกลี้ยงก่อนเสมอ
2. **Event Queue:** งานทั่วไป เช่น I/O, User Click, Timer, และ **Future**

\`\`\`
          ┌──────────────────────────┐
          │     Dart Event Loop      │
          └─────────────┬────────────┘
                        │
                        ▼
           Is Microtask Queue empty?
           ├─── NO  ──> รันงานใน Microtask Queue ต่อไป
           │
           └─── YES ──> รันงานถัดไปใน Event Queue (Timer/Future)
\`\`\`

## 2. Futures และคำสั่ง async/await
\`Future<T>\` แสดงถึงค่าที่จะได้รับในอนาคต:
\`\`\`dart
Future<String> fetchUserData() async {
  // เมื่อเจอ await การทำงานจะถูกพักไว้ และส่งการควบคุมกลับคืนสู่ Event Loop
  await Future.delayed(Duration(seconds: 1));
  return "Somchai Data";
}
\`\`\``,
      codeExample: `// การสาธิตลำดับการทำงานของ Dart Event Loop (Microtask vs Event Queue)
import 'dart:async';

void main() {
  print("1. [MAIN SYNC]: คำสั่งแบบ Synchronous ลำดับที่ 1");

  // 1. ส่งงานเข้า Event Queue (Future ธรรมดา)
  Future(() {
    print("5. [EVENT QUEUE]: Future #1 ทำงานสำเร็จ");
  });

  // 2. ส่งงานเข้า Microtask Queue (ความสำคัญสูงกว่า Event Queue)
  scheduleMicrotask(() {
    print("3. [MICROTASK]: งานใน Microtask Queue ทำงานก่อน Event Queue เสมอ");
  });

  // 3. ส่งงานแบบมี Timer เข้า Event Queue
  Future.delayed(Duration(milliseconds: 50), () {
    print("6. [TIMER EVENT]: Timer 50ms ทำงานเสร็จสิ้น");
  });

  // 4. ส่งอีกหนึ่ง Microtask
  scheduleMicrotask(() {
    print("4. [MICROTASK]: งานใน Microtask Queue ชิ้นที่ 2");
  });

  print("2. [MAIN SYNC]: คำสั่งแบบ Synchronous ลำดับที่ 2 (จบฟังก์ชัน main)");
}`,
      challenge: "สร้างฟังก์ชัน retryFuture<T>(Future<T> Function() task, int maxRetries) ที่ลองรันงานใหม่หากเกิดข้อผิดพลาดจนครบจำนวนรอบที่กำหนด",
      quiz: [
        {
          question: "ในสถาปัตยกรรม Event Loop ของ Dart คิวใดจะถูกประมวลผลก่อนเสมอระหว่าง Microtask Queue และ Event Queue?",
          options: [
            "Microtask Queue จะถูกประมวลผลให้หมดสิ้นก่อนเสมอ ก่อนที่จะไปดึงงานใน Event Queue",
            "Event Queue ทำงานก่อนเสมอ",
            "ทั้งสองคิวทำงานพร้อมกันแบบสุ่ม",
            "คิวที่สร้างขึ้นทีหลังจะทำงานก่อน"
          ],
          correctAnswer: 0,
          explanation: "Event Loop ของ Dart จะตรวจสอบ Microtask Queue ก่อนเสมอ หากมีงานใน Microtask Queue มันจะรันงานนั้นจนหมดเกลี้ยง ก่อนที่จะยอมสลับไปประมวลผลงานถัดไปใน Event Queue"
        },
        {
          question: "เมื่อคำสั่งโปรแกรมเจอบรรทัดที่มีคีย์เวิร์ด await เกิดอะไรขึ้นกับ Thread หลัก?",
          options: [
            "ฟังก์ชัน async นั้นจะถูกหยุดพักชั่วคราว และคืน Thread หลักกลับไปให้ Event Loop นำไปประมวลผลงานอื่นต่อทันทีโดยไม่เกิดการบล็อก",
            "Thread จะค้างและหยุดการทำงานทั้งหมดจนกว่า Future จะเสร็จ",
            "โปรแกรมจะเปิด Thread ใหม่ขึ้นมาในระบบปฏิบัติการ",
            "คอมพิวเตอร์จะส่งเสียงร้องเตือน"
          ],
          correctAnswer: 0,
          explanation: "await ใน Dart เป็น Non-blocking มันจะระงับการทำงานเฉพาะฟังก์ชันนั้นไว้ และคืนเวลาของ CPU ให้ Event Loop นำไปวาดหน้าจอหรือรันงานอื่นๆ ต่อไปได้อย่างราบรื่น"
        },
        {
          question: "ฟังก์ชัน scheduleMicrotask() ในภาษา Dart นิยมใช้ในสถานการณ์ใด?",
          options: [
            "เมื่อต้องการให้บล็อกโค้ดนั้นทำงานทันทีหลังจากโค้ด Synchronous ปัจจุบันทำงานจบ โดยต้องทำก่อนที่เหตุการณ์ใน Event Queue อื่นๆ จะแทรกเข้ามา",
            "เมื่อต้องการตั้งเวลานาฬิกาปลุก",
            "เมื่อต้องการดาวน์โหลดไฟล์ขนาดใหญ่ข้ามวัน",
            "ใช้แทนคำสั่ง print"
          ],
          correctAnswer: 0,
          explanation: "scheduleMicrotask ใช้สำหรับการทำงานที่ต้องการความสำคัญเร่งด่วน โดยต้องรันทันทีที่จบงาน Synchronous ก่อนที่ Event Queue อื่นๆ จะถูกประมวลผล"
        }
      ]
    },
    {
      id: "dart-5",
      title: "Reactive Streams: Stream API, StreamController และ Rx",
      description: "จัดการกระแสข้อมูลอะซิงโครนัสต่อเนื่องด้วย Stream: Single-subscription vs Broadcast, StreamTransformer, และ StreamController",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Reactive Streams ในภาษา Dart

หาก \`Future\` คือตัวแทนของข้อมูล 1 ชิ้นในอนาคต **\`Stream\`** ก็คือท่อส่งข้อมูลที่สามารถปล่อยข้อมูลออกมาได้หลายๆ ชิ้นอย่างต่อเนื่องตลอดเวลา (เช่น สัญญาณ Bluetooth, ข้อมูล WebSocket, การคลิกของผู้ใช้)

## 1. ประเภทของ Streams ใน Dart
1. **Single-Subscription Stream (ค่าเริ่มต้น):** อนุญาตให้มีผู้ดักฟัง (\`listen\`) ได้เพียงคนเดียวตลอดอายุของสตรีม หากมีคนมาดักฟังซ้ำจะเกิด StateError (เหมาะสำหรับอ่านไฟล์)
2. **Broadcast Stream:** อนุญาตให้มีผู้ดักฟังได้พร้อมกันหลายคน (\`stream.asBroadcastStream()\`) เหมาะสำหรับเหตุการณ์ของ UI หรือการกระจายข้อความ

## 2. StreamController
เครื่องมือสำหรับสร้างและควบคุมท่อส่งข้อมูลด้วยตนเอง:
\`\`\`dart
final controller = StreamController<int>();

// ฝั่งส่ง (Sink)
controller.sink.add(100);

// ฝั่งรับ (Stream)
controller.stream.listen((data) {
  print("ได้รับข้อมูล: \$data");
});
\`\`\`

## 3. Asynchronous Generators (\`async*\` และ \`yield\`)
สร้าง Stream ได้ง่ายๆ เหมือนฟังก์ชันปกติ:
\`\`\`dart
Stream<int> countStream(int max) async* {
  for (int i = 1; i <= max; i++) {
    await Future.delayed(Duration(milliseconds: 500));
    yield i; // ส่งค่าข้อมูลเข้าสู่ Stream
  }
}
\`\`\``,
      codeExample: `// การสร้างและประมวลผล Reactive Stream ใน Dart
import 'dart:async';

// ฟังก์ชันสร้าง Stream ปล่อยอุณหภูมิเซ็นเซอร์แบบเรียลไทม์
Stream<double> sensorTelemetryStream() async* {
  List<double> readings = [28.4, 28.6, 29.1, 29.8, 30.5];
  for (var temp in readings) {
    await Future.delayed(Duration(milliseconds: 60));
    yield temp; // ส่งข้อมูลออกทาง Stream
  }
}

void main() async {
  print("=== เริ่มต้นติดตามข้อมูลผ่าน Stream Pipeline ===");

  var stream = sensorTelemetryStream();

  // แปลงข้อมูลผ่าน Operators (where, map)
  await stream
      .where((temp) => temp > 28.5) // กรองเฉพาะอุณหภูมิสูง
      .map((temp) => "🔥 เตือนภัย: อุณหภูมิสูงเกินเกณฑ์ -> \${temp} °C")
      .forEach((alertMsg) {
        print(alertMsg);
      });

  print("✓ สตรีมข้อมูลทำงานเสร็จสิ้นสมบูรณ์");
}`,
      challenge: "สร้าง StreamController แบบ Broadcast และมีผู้รับฟัง 2 คน โดยคนแรกพิมพ์ข้อมูลปกติ และคนที่สองพิมพ์เฉพาะข้อมูลที่เป็นเลขคู่",
      quiz: [
        {
          question: "ความแตกต่างระหว่าง Single-subscription Stream และ Broadcast Stream ในภาษา Dart คืออะไร?",
          options: [
            "Single-subscription มีผู้ดักฟังได้เพียง 1 คนเท่านั้น ส่วน Broadcast Stream มีผู้ดักฟังพร้อมกันได้หลายคน",
            "Single-subscription รันบนวิทยุ ส่วน Broadcast รันบนโทรทัศน์",
            "Broadcast Stream ส่งข้อมูลได้เฉพาะข้อความเท่านั้น",
            "ทั้งคู่เป็นสิ่งเดียวกันทุกประการ"
          ],
          correctAnswer: 0,
          explanation: "Single-subscription Stream ออกแบบมาให้มีผู้ฟังคนเดียวและรักษาลำดับข้อมูลไว้อย่างเหนียวแน่น ส่วน Broadcast Stream ยอมให้มีผู้ฟังหลายคนเข้ามาดักฟังและยกเลิกการฟังเมื่อไหร่ก็ได้"
        },
        {
          question: "คีย์เวิร์ดใดที่ใช้คู่กับ async* ภายในฟังก์ชันเพื่อส่งข้อมูลแต่ละชิ้นออกสู่ Stream?",
          options: ["yield", "emit", "return", "send"],
          correctAnswer: 0,
          explanation: "ใน Dart ฟังก์ชันที่ประกาศด้วย async* จะใช้คำสั่ง yield ในการส่งค่าแต่ละชิ้นเข้าสู่กระแสสตรีม และใช้ yield* ในการส่งต่อสตรีมอื่นเข้ามาทั้งชุด"
        },
        {
          question: "ส่วนประกอบใดของ StreamController ที่ทำหน้าที่เป็นช่องทางเปิดรับข้อมูลเข้ามา (Input)?",
          options: ["sink", "stream", "source", "emitter"],
          correctAnswer: 0,
          explanation: "StreamController มี 2 ขั้ว: sink เป็นฝั่ง Input สำหรับรับข้อมูลเข้ามา (controller.sink.add) และ stream เป็นฝั่ง Output สำหรับให้ผู้ฟังมารับข้อมูลออกไป"
        }
      ]
    },
    {
      id: "dart-6",
      title: "Concurrency ข้ามเธรดด้วย Dart Isolates และ Port Passing",
      description: "ประมวลผลงานหนักแบบมัลติเธรดแท้จริงโดยไร้ปัญหา Shared Memory: สถาปัตยกรรม Isolate, SendPort / ReceivePort, และฟังก์ชัน Isolate.run",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Multi-threading ด้วย Dart Isolates

หาก Dart ทำงานบน Single Thread แล้วถ้าเรามีงานคำนวณขนาดใหญ่ (เช่น เข้ารหัสไฟล์, แปลงภาพขนาด 4K, คำนวณ Machine Learning) ที่กินเวลาซีพียูนานๆ ล่ะ? หากรันบน Main Thread หน้าจอจะเกิดอาการกระตุก (Jank / Dropped Frames) ทางออกของ Dart คือ **Isolates**

## 1. ทำไมถึงเรียกว่า "Isolate"?
เพราะมันเป็นหน่วยประมวลผลที่มี **หน่วยความจำแยกเป็นเอกเทศโดยสิ้นเชิง (Isolated Memory)**
- แต่ละ Isolate มี Memory Heap และ Event Loop เป็นของตนเอง
- **ไม่มีการแชร์ตัวแปรข้ามเธรดเลยแม้แต่น้อย!**
- ขจัดปัญหา Mutex, Deadlocks, และ Race Conditions ได้ 100%

## 2. การสื่อสารผ่าน Port (SendPort & ReceivePort)
Isolates สื่อสารกันผ่านการส่งข้อความข้ามช่องทาง (Message Passing):
\`\`\`dart
// การส่งข้อความจะคัดลอกข้อมูลข้าม Isolate
ReceivePort receivePort = ReceivePort();
SendPort sendPort = receivePort.sendPort;
\`\`\`

## 3. ทางลัดยุคใหม่: \`Isolate.run()\` (Dart 2.19+)
ไม่ต้องยุ่งยากกับการเปิด/ปิด Port ด้วยตนเองอีกต่อไป:
\`\`\`dart
int result = await Isolate.run(() {
  // โค้ดในบล็อกนี้จะถูกรันบน Background OS Thread แท้จริง
  return heavyFibonacci(45);
});
\`\`\``,
      codeExample: `// การใช้งาน Isolate.run เพื่อคำนวณงานหนักบน Background Thread ในภาษา Dart
import 'dart:async';

// ฟังก์ชันคำนวณทางคณิตศาสตร์ที่กิน CPU หนักหน่วง
int computeHeavyFactorial(int n) {
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result = (result * i) % 1000000007;
  }
  return result;
}

void main() async {
  print("=== 1. เริ่มต้นการประมวลผลงานบน Main Thread ===");
  print("Main Thread UI ยังคงตอบสนองได้อย่างราบรื่น (60 FPS)");

  // แตกงานหนักไปรันบน Background Thread ด้วย Isolate
  print("⏳ กำลังส่งงานคำนวณขนาดใหญ่ไปยัง Background Isolate...");
  
  // จำลองการรันงานบน Isolate
  var stopwatch = Stopwatch()..start();
  var calculationResult = computeHeavyFactorial(500000);
  stopwatch.stop();

  print("✓ คำนวณเสร็จสิ้นบน Isolate!");
  print("ผลลัพธ์: \$calculationResult");
  print("เวลาที่ใช้: \${stopwatch.elapsedMilliseconds} ms");
  print("(ประโยชน์ของ Isolate: งานคำนวณหนักไม่ส่งผลกระทบต่อ UI หรือ Event Loop ของ Main Thread)");
}`,
      challenge: "สร้างโปรแกรมจำลองการ parse ข้อมูล JSON ขนาดใหญ่ใน Isolate.run และส่งผลลัพธ์กลับมายัง Main Thread",
      quiz: [
        {
          question: "เหตุใดโมเดล Concurrency ของ Dart จึงใช้คำว่า 'Isolate' แทนที่จะเรียกว่า Thread ปกติ?",
          options: [
            "เพราะแต่ละ Isolate มีหน่วยความจำ (Memory Heap) และ Event Loop แยกขาดจากกันโดยสิ้นเชิง ไม่มีการแชร์ตัวแปรข้ามกัน",
            "เพราะทำงานได้เฉพาะบนเกาะที่ไม่มีสัญญาณอินเทอร์เน็ต",
            "เพราะรันบนฮาร์ดแวร์พิเศษเท่านั้น",
            "เพราะไม่สามารถติดต่อกับโลกภายนอกได้"
          ],
          correctAnswer: 0,
          explanation: "Isolate ได้รับการตั้งชื่อตามคุณสมบัติการแยกตัว (Isolated) โดยแต่ละ Isolate มีหน่วยความจำของตนเอง ไม่แชร์ RAM กับใคร สื่อสารกันผ่าน Message Passing เท่านั้น ทำให้ไม่มีทางเกิด Data Race"
        },
        {
          question: "คำสั่งใดใน Dart ยุคใหม่ (Dart 2.19+) ที่ช่วยให้การส่งงานไปรันบน Background Isolate ทำได้อย่างง่ายดายที่สุด?",
          options: ["Isolate.run(() => ...)", "thread.start()", "go run()", "new Task()"],
          correctAnswer: 0,
          explanation: "Isolate.run() เป็น API สมัยใหม่ที่ช่วยสร้าง Isolate ชั่วคราว รันโค้ดที่ส่งเข้าไป ส่งผลลัพธ์กลับมา และปิด Isolate นั้นทิ้งให้อัตโนมัติในคำสั่งเดียว"
        },
        {
          question: "Isolates สื่อสารส่งผ่านข้อมูลระหว่างกันด้วยกลไกใด?",
          options: [
            "SendPort และ ReceivePort ผ่านการส่งข้อความ (Message Passing)",
            "การเขียนไฟล์ทับกันบนฮาร์ดดิสก์",
            "การใช้ตัวแปร global ร่วมกัน",
            "การใช้ Bluetooth"
          ],
          correctAnswer: 0,
          explanation: "Isolates ส่งข้อมูลหากันผ่าน SendPort และ ReceivePort ซึ่งข้อมูลจะถูก serialize และส่งข้าม boundary ของหน่วยความจำอย่างปลอดภัย"
        }
      ]
    },
    {
      id: "dart-7",
      title: "การพัฒนา Backend และ CLI ด้วย Dart (Shelf & pub.dev)",
      description: "สร้าง REST API ความเร็วสูงด้วย Dart Shelf Framework, การจัดการ Command-Line Arguments ด้วย package:args, และการเผยแพร่ Package สู่ pub.dev",
      duration: "40 นาที",
      level: "ขั้นสูง",
      content: `# การพัฒนา Backend และ CLI Tools ด้วยภาษา Dart

Dart ไม่ได้จำกัดอยู่เพียงแค่โมบายแอป แต่ยังสามารถนำมาพัฒนา **CLI Tools ระดับมืออาชีพ** และ **Microservices Backend** ที่มีประสิทธิภาพสูงระดับหัวแถว

## 1. การสร้าง Web Server ด้วย Shelf Framework
\`shelf\` คือเฟรมเวิร์กมาตรฐานของ Google ในการสร้าง Web Server ด้วยสถาปัตยกรรม Middleware และ Pipeline:
\`\`\`dart
import 'package:shelf/shelf.dart';
import 'package:shelf/shelf_io.dart' as io;

Response _echoRequest(Request request) =>
    Response.ok('ยินดีต้อนรับสู่ Dart Cloud Backend: \${request.url}');

void main() async {
  var handler = const Pipeline()
      .addMiddleware(logRequests())
      .addHandler(_echoRequest);

  var server = await io.serve(handler, '0.0.0.0', 8080);
  print('เซิร์ฟเวอร์เปิดให้บริการที่ http://\${server.address.host}:\${server.port}');
}
\`\`\`

## 2. การสร้าง Command Line Application
ด้วย \`dart compile exe\` เราสามารถคอมไพล์โค้ด Dart ให้กลายเป็น **Standalone Executable (.exe)** ที่ทำงานได้ทันทีโดยที่เครื่องปลายทางไม่ต้องติดตั้ง Dart SDK เลย!`,
      codeExample: `// ตัวอย่างสถาปัตยกรรม Request/Response Pipeline ใน Dart Backend
class MockHttpRequest {
  final String method;
  final String path;
  final Map<String, String> headers;

  MockHttpRequest(this.method, this.path, {this.headers = const {}});
}

class MockHttpResponse {
  final int statusCode;
  final String body;

  MockHttpResponse(this.statusCode, this.body);

  @override
  String toString() => "[HTTP \$statusCode]: \$body";
}

// Handler ฟังก์ชันตามมาตรฐานสไตล์ Shelf
MockHttpResponse appRouter(MockHttpRequest request) {
  return switch (request.path) {
    "/api/health" => MockHttpResponse(200, '{"status": "UP", "engine": "Dart AOT"}'),
    "/api/courses" => MockHttpResponse(200, '["Dart 3", "Flutter", "Systems Engineering"]'),
    _ => MockHttpResponse(404, '{"error": "Endpoint Not Found"}')
  };
}

void main() {
  print("=== ทดสอบ Dart High-Performance Backend Routing ===");
  var req1 = MockHttpRequest("GET", "/api/health");
  var req2 = MockHttpRequest("GET", "/api/courses");
  var req3 = MockHttpRequest("GET", "/unknown");

  print(appRouter(req1));
  print(appRouter(req2));
  print(appRouter(req3));
  print("\nคำสั่งคอมไพล์เป็น Native Binary: dart compile exe bin/server.dart -o server");
}`,
      challenge: "เขียนฟังก์ชัน Middleware ในสไตล์ Shelf ที่จับเวลาการประมวลผลของ Request แต่ละตัวและพิมพ์ออกทางคอนโซล",
      quiz: [
        {
          question: "คำสั่งใดของ Dart SDK ที่ใช้สำหรับคอมไพล์โปรแกรมให้กลายเป็น Standalone Machine Code Executable ที่รันได้โดยไม่ต้องมี Dart SDK?",
          options: ["dart compile exe", "dart build native", "dart export bin", "dart package binary"],
          correctAnswer: 0,
          explanation: "คำสั่ง dart compile exe จะทำ AOT Compilation แปลง Source Code และ Core Libraries ทั้งหมดให้กลายเป็นไฟล์ Executable เดี่ยวๆ ที่เปิดรันได้ทันทีบน OS นั้น"
        },
        {
          question: "Shelf Framework ในภาษา Dart ใช้แนวคิดสถาปัตยกรรมแบบใดในการจัดการ HTTP Requests?",
          options: [
            "Pipeline และ Middlewares (ส่งผ่าน Request ต่อกันเป็นท่อเพื่อประมวลผลและตกแต่ง Response)",
            "การใช้ Global Variables",
            "การรีสตาร์ตเซิร์ฟเวอร์ทุกครั้งที่ได้รับ Request",
            "การแปลงข้อมูลเป็นไฟล์ภาพ"
          ],
          correctAnswer: 0,
          explanation: "Shelf เป็นโมดูลาร์เฟรมเวิร์กที่ใช้แนวคิด Pipeline และ Middleware ทำให้นักพัฒนาสามารถต่อเติมระบบ Authentication, Logging, และ CORS เข้าด้วยกันได้อย่างยืดหยุ่น"
        },
        {
          question: "ศูนย์กลางการเผยแพร่และดาวน์โหลดไลบรารีของภาษา Dart และ Flutter มีชื่อว่าอะไร?",
          options: ["pub.dev", "npm", "crates.io", "rubygems.org"],
          correctAnswer: 0,
          explanation: "pub.dev เป็น Package Repository อย่างเป็นทางการของ Google สำหรับนักพัฒนาภาษา Dart และ Flutter ทั่วโลก"
        }
      ]
    },
    {
      id: "dart-8",
      title: "การเชื่อมต่อข้ามภาษาระดับต่ำด้วย Dart FFI (Foreign Function Interface)",
      description: "เรียกใช้งาน Native C/C++ Libraries ได้โดยตรงด้วย package:ffi: Structs, Pointers, DynamicLibrary, และการทำ Memory Allocation นอก Dart Heap",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Native Interoperability ด้วย Dart FFI

เมื่อเราต้องการความเร็วสูงสุดระดับฮาร์ดแวร์ หรือต้องการนำไลบรารี C/C++ ที่มีอยู่แล้ว (เช่น SQLite, OpenCV, TensorFlow Lite) มาใช้งานใน Dart เราจะใช้ **Dart FFI (Foreign Function Interface)**

## 1. ปรัชญาของ Dart FFI
- **Zero-overhead:** เรียกตรงเข้าสู่ C Function Pointer ผ่าน CPU Register โดยไม่ต้องผ่าน Java JNI หรือสะพานสื่อสารข้ามกระบวนการ
- จัดสรรหน่วยความจำภายนอก (Native Heap) ด้วย \`malloc\` และ \`calloc\`

\`\`\`dart
import 'dart:ffi';
import 'package:ffi/ffi.dart';

// โหลด Dynamic Library (.dll บน Windows, .so บน Linux, .dylib บน macOS)
final DynamicLibrary nativeLib = DynamicLibrary.open('my_crypto.so');

// ผูกฟังก์ชัน C: int32_t fast_hash(const char* input);
typedef FastHashC = Int32 Function(Pointer<Utf8> input);
typedef FastHashDart = int Function(Pointer<Utf8> input);

final FastHashDart fastHash = nativeLib
    .lookup<NativeFunction<FastHashC>>('fast_hash')
    .asFunction();
\`\`\``,
      codeExample: `// การจำลองการทำงานของ Dart FFI Type System
class MockNativePointer {
  final int address;
  final int allocatedBytes;

  MockNativePointer(this.address, this.allocatedBytes);

  void free() {
    print("🗑️ [NATIVE MEMORY]: คืนหน่วยความจำตำแหน่ง 0x\${address.toRadixString(16)} (ขนาด \$allocatedBytes ไบต์)");
  }
}

void main() {
  print("=== สถาปัตยกรรม Dart FFI (Foreign Function Interface) ===");
  print("1. เชื่อมต่อ Dynamic Library (C ABI Interface)");
  
  // จำลองการจัดสรรหน่วยความจำบน C Native Heap
  var ptr = MockNativePointer(0x7ffeefbff560, 64);
  print("2. จัดสรร Native Heap สำเร็จที่แอดเดรส: 0x\${ptr.address.toRadixString(16)}");
  print("3. ส่ง Pointer เข้าสู่ฟังก์ชัน C: native_process_crypto(ptr)");
  
  // ปล่อยหน่วยความจำ (นักพัฒนาต้องรับผิดชอบการ free หน่วยความจำ C)
  ptr.free();
  print("✓ Dart FFI มอบความเร็วระดับ Native C/C++ โดยไม่มี Overhead ของ JNI Bridge");
}`,
      challenge: "จงอธิบายว่าเหตุใดการจัดสรรหน่วยความจำผ่าน Dart FFI ด้วย malloc.allocate จึงต้องสั่ง malloc.free ด้วยตนเองเสมอ และ Garbage Collector ของ Dart จะช่วยคืนหน่วยความจำส่วนนี้หรือไม่",
      quiz: [
        {
          question: "ข้อดีหลักของ Dart FFI เมื่อเทียบกับ Platform Channels แบบดั้งเดิมใน Flutter คืออะไร?",
          options: [
            "เรียกใช้งานฟังก์ชัน C/C++ ได้โดยตรงระดับ CPU Register (Zero-overhead) โดยไม่ต้องเสียเวลาแปลงข้อมูลไปมาระหว่าง Process",
            "ทำให้โปรแกรมไม่ต้องใช้แบตเตอรี่",
            "เพิ่มขนาดหน่วยความจำให้โทรศัพท์",
            "แปลงโค้ด Dart ให้เป็น JavaScript"
          ],
          correctAnswer: 0,
          explanation: "Dart FFI เรียกใช้ C function ผ่าน C ABI โดยตรงในหน่วยความจำเดียวกัน ทำให้ไม่มี serialization overhead เหมือนการส่งข้อมูลผ่าน Platform Channels"
        },
        {
          question: "หน่วยความจำที่ถูกจองผ่าน calloc หรือ malloc ใน Dart FFI จะถูกเก็บขยะโดย Dart Garbage Collector (GC) หรือไม่?",
          options: [
            "ไม่ถูกเก็บ นักพัฒนาต้องมีหน้าที่สั่ง calloc.free() ด้วยตนเองเสมอ มิฉะนั้นจะเกิด Memory Leak",
            "ถูกเก็บอัตโนมัติ 100%",
            "จะถูกลบเมื่อปิดหน้าจอโทรศัพท์",
            "ถูกเก็บโดยระบบปฏิบัติการทุกๆ 1 วินาที"
          ],
          correctAnswer: 0,
          explanation: "หน่วยความจำที่จองผ่าน FFI จะอยู่นอก Dart Heap (Native Heap) ดังนั้น Dart GC จึงมองไม่เห็นและไม่สามารถเข้าไปจัดการได้ นักพัฒนาต้องดูแลการปล่อยหน่วยความจำด้วยตนเองอย่างเคร่งครัด"
        },
        {
          question: "ไฟล์ประเภทใดที่ Dart FFI ใช้โหลดเข้าสู่ระบบตอนรันไทม์ผ่าน DynamicLibrary.open() บน Windows?",
          options: [".dll (Dynamic-Link Library)", ".exe", ".apk", ".txt"],
          correctAnswer: 0,
          explanation: "บน Windows จะเปิดไฟล์ไบนารีประเภท .dll ส่วนบน Linux จะใช้ .so และบน macOS/iOS จะใช้ .dylib หรือ Framework"
        }
      ]
    },
    {
      id: "dart-9",
      title: "การ Optimize ประสิทธิภาพ, Tree-shaking และ DevTools Profiling",
      description: "เทคนิคการรีดประสิทธิภาพขั้นสูงสุด: การทำงานของ Tree-shaking, การวิเคราะห์ Memory Leaks ด้วย Dart DevTools, CPU Profiler, และ AOT Optimization",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การ Optimize ประสิทธิภาพและ Dart DevTools

ขั้นตอนสุดท้ายในการสร้างซอฟต์แวร์ระดับ Enterprise คือการทำให้โปรแกรมมีขนาดเล็กที่สุด กิน RAM น้อยที่สุด และรันได้ลื่นไหลที่สุด

## 1. Tree-shaking และ Dead Code Elimination
เมื่อสั่งคอมไพล์โปรแกรมสำหรับ Production (\`dart compile\` หรือ \`flutter build --release\`) คอมไพเลอร์ของ Dart จะทำการวิเคราะห์โค้ดทั้งหมด (Whole-program Analysis):
- คลาส เมธอด หรือไลบรารีใดที่ไม่ได้ถูกเรียกใช้จริง จะถูก **ตัดทิ้งออกจาก Binary ทั้งหมด (Tree-shaking)**
- ช่วยลดขนาดแอปพลิเคชันจากหลายร้อยเมกะไบต์เหลือเพียงไม่กี่เมกะไบต์

## 2. การวิเคราะห์ปัญหาด้วย Dart DevTools
- **Memory Profiler:** ตรวจสอบ Snapshot ของ Heap, สังเกตตัวแปรที่มีจำนวน Instance เพิ่มขึ้นเรื่อยๆ โดยไม่ลดลง (Memory Leak)
- **CPU Profiler:** วิเคราะห์ Flame Chart เพื่อค้นหาฟังก์ชันที่กินเวลา CPU มากผิดปกติ (Hot Spots)
- **Timeline View:** ตรวจสอบเวลาที่ใช้ในการเรนเดอร์แต่ละเฟรมให้อยู่ในกรอบ 16ms (60 FPS) หรือ 8ms (120 FPS)`,
      codeExample: `// ตัวอย่างแนวคิดการเขียนโค้ดที่ช่วยให้ Dart Compiler ทำ Tree-shaking ได้อย่างมีประสิทธิภาพ
class ProductionLogger {
  // ใช้ bool.fromEnvironment เพื่อให้คอมไพเลอร์ตัดโค้ดทิ้งตอน Release Build ได้แบบ 100%
  static const bool isDebugMode = bool.fromEnvironment('DEBUG', defaultValue: false);

  static void debugLog(String message) {
    if (isDebugMode) {
      print("🐛 [DEBUG]: \$message");
    }
  }
}

void main() {
  print("=== สรุปแนวทางการ Optimize ประสิทธิภาพใน Dart 3 ===");
  ProductionLogger.debugLog("ข้อความนี้จะไม่ปรากฏบน Production");
  print("✓ 1. ใช้ const constructors เสมอเมื่อค่าไม่เปลี่ยนแปลง");
  print("✓ 2. ใช้ Isolate สำหรับงานคำนวณที่เกิน 16ms");
  print("✓ 3. ปิด StreamSubscription ทุกครั้งเมื่อไม่ใช้งาน (ป้องกัน Memory Leak)");
  print("✓ 4. ใช้ dart compile exe พร้อม AOT Optimization สำหรับระบบเซิร์ฟเวอร์");
}`,
      challenge: "จงอธิบายว่าเหตุใดการลืมเรียกคำสั่ง cancel() บน StreamSubscription จึงนำไปสู่ปัญหา Memory Leak ในแอปพลิเคชัน และมีเครื่องมือใดใน Dart DevTools ที่ช่วยตรวจจับ",
      quiz: [
        {
          question: "กระบวนการ Tree-shaking ในกระบวนการคอมไพล์ของ Dart ทำหน้าที่อะไร?",
          options: [
            "ตัดโค้ด ฟังก์ชัน หรือคลาสที่ไม่มีการเรียกใช้งานจริงทิ้งออกจากไฟล์ไบนารีสุดท้ายโดยอัตโนมัติ เพื่อลดขนาดไฟล์ให้เล็กที่สุด",
            "จัดเรียงโฟลเดอร์ของโปรเจกต์ใหม่",
            "เพิ่มภาพพื้นหลังต้นไม้ในแอป",
            "ตรวจสอบไวรัสในระบบ"
          ],
          correctAnswer: 0,
          explanation: "Tree-shaking คือเทคนิค Dead Code Elimination ระดับสูงของคอมไพเลอร์ Dart ที่จะเขย่าและตัดกิ่งก้านของโค้ดที่ไม่ได้ถูกเรียกใช้ออก ทำให้ไฟล์ผลลัพธ์มีขนาดกะทัดรัดและโหลดได้รวดเร็ว"
        },
        {
          question: "เครื่องมือใดของ Dart และ Flutter ที่ใช้วิเคราะห์การจองหน่วยความจำ (Heap Allocation) และค้นหาจุดที่เกิด Memory Leaks?",
          options: ["Dart DevTools (Memory Tab)", "Windows Task Manager", "Notepad++", "Google Chrome History"],
          correctAnswer: 0,
          explanation: "Dart DevTools มีแท็บ Memory ที่ช่วยให้นักพัฒนาสามารถถ่าย Heap Snapshot, ดู Retaining Path ของอ็อบเจกต์ และติดตามการเพิ่มขึ้นของหน่วยความจำได้อย่างแม่นยำ"
        },
        {
          question: "ในการทำแอปพลิเคชันให้ลื่นไหลระดับ 60 FPS โค้ดในแต่ละเฟรมต้องประมวลผลเสร็จสิ้นภายในเวลากี่มิลลิวินาที?",
          options: ["ไม่เกิน 16.6 มิลลิวินาที (1000ms / 60)", "1 วินาที", "100 มิลลิวินาที", "10 มิลลิวินาที"],
          correctAnswer: 0,
          explanation: "ที่อัตราการรีเฟรช 60 เฟรมต่อวินาที แต่ละเฟรมจะมีเวลาประมวลผลสูงสุดเพียง 1,000 / 60 = 16.6 มิลลิวินาที หากโค้ดทำงานเกินเวลานี้จะเกิดอาการกระตุก (Frame Drop)"
        }
      ]
    }
  ]
};
