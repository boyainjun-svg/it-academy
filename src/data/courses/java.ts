import { Course } from "../types";

export const javaCourse: Course = {
  id: "java",
  title: "Java 21 LTS & Spring Boot 3 Enterprise Engineering",
  description: "พัฒนาซอฟต์แวร์ระดับองค์กรด้วย Modern Java 21 LTS ตั้งแต่โครงสร้าง JVM, Records, Streams API, Virtual Threads จนถึง Spring Boot 3 และ Spring Data JPA",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาซอฟต์แวร์ระดับองค์กรด้วยภาษา Java 21 (Long-Term Support) และ Spring Boot 3 Framework ครอบคลุมตั้งแต่สถาปัตยกรรมภายในของ Java Virtual Machine (JVM), การทำงานของ ClassLoader และ Just-In-Time (JIT) Compiler, ไวยากรณ์สมัยใหม่ของ Java (Records, Pattern Matching for switch, Sealed Classes, Text Blocks), การประมวลผลข้อมูลด้วย Collections และ Functional Streams API, การบริหารจัดการหน่วยความจำและ Garbage Collector (G1GC, ZGC), การรองรับ Concurrency มหาศาลด้วย Virtual Threads (Project Loom), การพัฒนา REST API ด้วย Spring Boot 3, การเชื่อมต่อฐานข้อมูลระดับ Enterprise ด้วย Spring Data JPA และ Hibernate",
  icon: "☕",
  color: "red",
  gradient: "from-red-600 via-orange-600 to-amber-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Java 21", "Spring Boot 3", "JVM", "Spring Data JPA", "Virtual Threads", "OOP", "Microservices"],
  recommendedTools: [
    {
      name: "OpenJDK 21 LTS (Eclipse Temurin)",
      icon: "☕",
      badge: "Official JDK",
      description: "ชุดพัฒนาซอฟต์แวร์ Java เวอร์ชัน 21 LTS มาตรฐานระดับสากล พร้อมเครื่องมือ jshell, javac, และ java",
      downloadUrl: "https://adoptium.net/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง OpenJDK 21 จาก Adoptium\n2. ตรวจสอบใน Terminal: java -version และ javac -version"
    },
    {
      name: "IntelliJ IDEA / VS Code with Java Extension Pack",
      icon: "💻",
      badge: "Industry Standard IDE",
      description: "Integrated Development Environment อันดับ 1 สำหรับ Java และ Spring Boot พร้อมระบบตรวจจับโค้ดอัตโนมัติ",
      downloadUrl: "https://www.jetbrains.com/idea/",
      setupGuide: "1. ติดตั้ง IntelliJ IDEA Community หรือ VS Code\n2. ติดตั้งส่วนขยาย Extension Pack for Java และ Spring Boot Extension Pack"
    }
  ],
  lessons: [
    {
      id: "java-1",
      title: "สถาปัตยกรรม Modern Java 21 LTS: JVM Internals, ClassLoader และ JIT",
      description: "ทำความเข้าใจ Java Virtual Machine (JVM), Bytecode (.class), ClassLoader Subsystem, Execution Engine (JIT Compiler & Garbage Collector)",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม Java Virtual Machine (JVM) และ Java 21 LTS

ปรัชญาดั้งเดิมของ Java คือ **"Write Once, Run Anywhere" (WORA)** ซึ่งขับเคลื่อนด้วย **Java Virtual Machine (JVM)** สภาพแวดล้อมเสมือนที่แปลง Java Bytecode ให้เป็นคำสั่งเครื่องของแต่ละระบบปฏิบัติการ

---

## 1. ส่วนประกอบสำคัญของ JVM

1. **ClassLoader Subsystem:** ทำหน้าที่โหลดไฟล์ \`.class\` เข้าสู่หน่วยความจำ (Loading, Linking, Initialization)
2. **JVM Memory (Runtime Data Areas):**
   - **Method Area / Metaspace:** เก็บข้อมูลคลาสและค่าคงที่
   - **Heap Memory:** เก็บออบเจกต์ทั้งหมด (Managed by GC)
   - **JVM Stack:** เก็บเฟรมการเรียกฟังก์ชันและ Local Variables
3. **Execution Engine:**
   - **Interpreter:** อ่านและรันไบต์โค้ดทีละคำสั่ง
   - **JIT Compiler (C1 / C2):** คอมไพล์โค้ดที่ถูกเรียกบ่อย (Hotspot) เป็นคำสั่ง Native เครื่องโดยตรง`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Java 21 Standard Application: สรุปผลการประเมินนักศึกษา
// =================================================================

import java.util.List;

public class StudentEvaluationApp {
    public static void main(String[] args) {
        System.out.println("=== IT Academy Java 21 LTS Runtime ===");

        String studentName = "พงศกร เมืองประเทศ";
        String studentId = "STD-670101";
        List<Double> scores = List.of(88.0, 92.5, 79.0, 95.0, 85.5);

        double total = 0.0;
        for (double s : scores) {
            total += s;
        }
        double average = total / scores.size();

        String status = average >= 75.0 ? "เกียรตินิยม (Honors)" : "ปกติ (Standard)";

        System.out.println("รหัสนักศึกษา: " + studentId);
        System.out.println("ชื่อ-สกุล: " + studentName);
        System.out.printf("คะแนนเฉลี่ย: %.2f / 100\n", average);
        System.out.println("สถานะวิชาการ: " + status);
    }
}`,
        description: "โครงสร้างโปรแกรม Java 21 มาตรฐานพร้อมการคำนวณคะแนนเฉลี่ย"
      },
      quiz: [
        {
          id: "java-q1",
          question: "ส่วนประกอบใดใน JVM ทำหน้าที่คอมไพล์ Hotspot Bytecode ให้เป็น Native Machine Code ตอนรันไทม์?",
          options: ["ClassLoader", "JIT Compiler", "Metaspace", "Garbage Collector"],
          correctAnswer: 1,
          explanation: "Just-In-Time (JIT) Compiler ทำหน้าที่ตรวจสอบและคอมไพล์โค้ดส่วนที่ถูกเรียกซ้ำๆ ให้เป็นคำสั่งเครื่องโดยตรงเพื่อเพิ่มความเร็วสูงสุด"
        }
      ]
    },
    {
      id: "java-2",
      title: "Modern Java Syntax: Records, Pattern Matching, Sealed Classes และ Text Blocks",
      description: "ลดความซ้ำซ้อนด้วย Records (Data Carrier), Pattern Matching for switch, การควบคุมลำดับชั้นด้วย Sealed Classes, และสตริงหลายบรรทัด Text Blocks",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# Modern Java Syntax ใน Java 17 และ Java 21

ลบภาพจำของ Java ที่ต้องเขียน Getter, Setter, \`equals()\`, \`hashCode()\` นับร้อยบรรทัด ด้วยฟีเจอร์ระดับปฏิวัติใน Java ยุคใหม่:
- **Records:** คลาสข้อมูลแบบ Immutable ที่สร้างคอนสตรักเตอร์และ Methods พื้นฐานให้อัตโนมัติ
- **Pattern Matching for switch:** ตรวจสอบ Type และแยกกรณีด้วยไวยากรณ์ที่ปลอดภัย
- **Sealed Classes:** กำหนดคลาสที่ได้รับอนุญาตให้สืบทอดได้อย่างชัดเจน`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Java 21 Records, Sealed Interfaces และ Pattern Matching
// =================================================================

sealed interface AcademicDegree permits Bachelor, Master {}

record Bachelor(String major, int creditsCompleted) implements AcademicDegree {}
record Master(String thesisTitle, boolean isPublished) implements AcademicDegree {}

public class ModernJavaDemo {
    public static String inspectDegree(AcademicDegree degree) {
        return switch (degree) {
            case Bachelor b -> "ปริญญาตรี สาขา " + b.major() + " (หน่วยกิตสะสม: " + b.creditsCompleted() + ")";
            case Master m -> "ปริญญาโท หัวข้อวิทยานิพนธ์: '" + m.thesisTitle() + "' (ตีพิมพ์: " + m.isPublished() + ")";
        };
    }

    public static void main(String[] args) {
        AcademicDegree student1 = new Bachelor("เทคโนโลยีสารสนเทศ", 120);
        AcademicDegree student2 = new Master("สถาปัตยกรรม IoT ความปลอดภัยสูง", true);

        System.out.println("• " + inspectDegree(student1));
        System.out.println("• " + inspectDegree(student2));
    }
}`,
        description: "การใช้งาน Java 21 Records และ Pattern Matching for Switch"
      }
    },
    {
      id: "java-3",
      title: "Java Collections Framework และ Functional Streams API (map, filter, reduce)",
      description: "ทำความเข้าใจ List, Set, Map ภายใน Collections Framework, การประมวลผลข้อมูลแบบ Declarative ด้วย Streams API, Lambda Expressions, และ Method References",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Java Collections Framework และ Streams API

**Streams API** นำแนวคิด Functional Programming เข้ามาสู่ Java ช่วยให้นักพัฒนาสามารถกรองข้อมูล แปลงข้อมูล และจัดกลุ่มข้อมูลได้อย่างมีประสิทธิภาพสูงโดยไม่ต้องเขียน Loop เอง`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// การประมวลผลข้อมูลด้วย Java Streams API
// =================================================================

import java.util.List;

record Course(String code, String title, int students, double rating) {}

public class StreamDemo {
    public static void main(String[] args) {
        List<Course> courses = List.of(
            new Course("CS-101", "Web Engineering", 45, 4.8),
            new Course("CS-102", "Cloud Computing", 12, 4.5),
            new Course("CS-103", "Cybersecurity", 38, 4.9),
            new Course("CS-104", "Database Architecture", 50, 4.7)
        );

        // คัดกรองคอร์สยอดนิยม (นักศึกษา >= 30 คน) และเรียงลำดับตาม Rating
        List<String> topCourses = courses.stream()
            .filter(c -> c.students() >= 30)
            .sorted((a, b) -> Double.compare(b.rating(), a.rating()))
            .map(c -> String.format("%s - %s (นักศึกษา %d คน, คะแนน %.1f)", c.code(), c.title(), c.students(), c.rating()))
            .toList();

        System.out.println("🌟 หลักสูตรยอดนิยม (High Enrollment):");
        topCourses.forEach(System.out::println);
    }
}`,
        description: "การใช้ Java Stream filter, sorted, map, และ toList"
      }
    },
    {
      id: "java-4",
      title: "การจัดการหน่วยความจำและ Garbage Collection (G1GC vs ZGC)",
      description: "เจาะลึกโครงสร้าง Heap (Eden, Survivor, Old Gen), การทำงานของ G1GC (Garbage-First GC) และ ZGC (Sub-millisecond Pause Time GC) ใน Java 21",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# JVM Garbage Collection: G1GC และ ZGC

ใน Java 21 ตัว **ZGC (Z Garbage Collector)** ได้รับการปรับปรุงเป็น Generational ZGC ซึ่งสามารถจัดการ Heap ขนาดใหญ่ระดับหลาย Terabytes โดยมี Pause Time ต่ำกว่า **1 มิลลิวินาที** (Ultra-low Latency)`,
      codeExample: {
        language: "java",
        code: `public class MemoryStatusDemo {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();

        long maxMemory = runtime.maxMemory() / (1024 * 1024);
        long totalMemory = runtime.totalMemory() / (1024 * 1024);
        long freeMemory = runtime.freeMemory() / (1024 * 1024);

        System.out.println("📊 สถานะ JVM Memory ในปัจจุบัน:");
        System.out.println("• Max Memory ที่จัดสรรได้: " + maxMemory + " MB");
        System.out.println("• Total Memory ที่ระบบกำลังใช้: " + totalMemory + " MB");
        System.out.println("• Free Memory คงเหลือใน Heap: " + freeMemory + " MB");
    }
}`,
        description: "การอ่านค่าสถิติหน่วยความจำของ JVM Runtime"
      }
    },
    {
      id: "java-5",
      title: "Concurrency ยุคใหม่: Virtual Threads (Project Loom) ใน Java 21",
      description: "ทำความเข้าใจความแตกต่างระหว่าง Platform Threads (OS Threads) และ Virtual Threads (User-mode Threads), การสร้าง Throughput มหาศาลโดยไม่เปลืองทรัพยากร",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Virtual Threads ใน Java 21 (Project Loom)

ในอดีต Java ใช้ **Platform Threads** ซึ่งผูก 1 Java Thread เข้ากับ 1 OS Thread หากเปิดเกิน 5,000 เธรด ระบบจะเริ่มช้าและกินแรมมหาศาล **Virtual Threads** ใน Java 21 เข้ามาปลดล็อกขีดจำกัดนี้ โดยสามารถสร้างได้นับล้านเธรดบน JVM`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// การใช้งาน Virtual Threads ใน Java 21
// =================================================================

import java.util.concurrent.Executors;
import java.util.stream.IntStream;

public class VirtualThreadDemo {
    public static void main(String[] args) {
        System.out.println("🚀 จำลองการปล่อยงาน 10 งานผ่าน Java 21 Virtual Threads:");

        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            IntStream.range(1, 11).forEach(i -> {
                executor.submit(() -> {
                    System.out.println("✓ [Virtual Thread " + i + "] รันงานบน Carrier Thread: " + Thread.currentThread());
                    return i;
                });
            });
        } // รอจนทุกเธรดทำงานเสร็จสิ้นอัตโนมัติ

        System.out.println("🎉 ทุกงานประมวลผลเสร็จสมบูรณ์!");
    }
}`,
        description: "การสร้าง Virtual Thread ต่อ Task ผ่าน newVirtualThreadPerTaskExecutor"
      }
    },
    {
      id: "java-6",
      title: "สถาปัตยกรรม Spring Boot 3 Framework: IoC Container และ Dependency Injection",
      description: "สร้าง Enterprise Application ด้วย Spring Boot 3: ทำความเข้าใจ ApplicationContext, @Component, @Service, @Repository, @Autowired, และการคอนฟิก application.yml",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Spring Boot 3 Framework

**Spring Boot 3** เป็นเฟรมเวิร์กมาตรฐานอันดับ 1 ของโลกสำหรับ Java Enterprise Application ขับเคลื่อนด้วยระบบ **Inversion of Control (IoC)** และ **Dependency Injection (DI)** ที่ทรงประสิทธิภาพ`,
      codeExample: {
        language: "java",
        code: `// จำลองสถาปัตยกรรม Service และ Controller ใน Spring Boot 3

interface StudentService {
    String getStudentProfile(String id);
}

class StudentServiceImpl implements StudentService {
    @Override
    public String getStudentProfile(String id) {
        return "นักศึกษา: สมชาย ใจดี (รหัส: " + id + ") | สถานะ: ปกติ";
    }
}

class StudentController {
    private final StudentService service;

    // Constructor Injection
    public StudentController(StudentService service) {
        this.service = service;
    }

    public void handleRequest(String id) {
        System.out.println("[HTTP 200 OK Response]: " + service.getStudentProfile(id));
    }
}

public class SpringSimulation {
    public static void main(String[] args) {
        StudentService svc = new StudentServiceImpl();
        StudentController controller = new StudentController(svc);
        controller.handleRequest("STD-670101");
    }
}`,
        description: "การจำลอง Dependency Injection Pattern ของ Spring Boot 3"
      }
    },
    {
      id: "java-7",
      title: "Data Access ด้วย Spring Data JPA และ Hibernate ORM",
      description: "เชื่อมต่อฐานข้อมูลอย่างเป็นระบบ: Entity Mapping, JpaRepository, Derived Query Methods, JPQL, การจัดการ Transaction (@Transactional), และการป้องกัน N+1 Problem",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Spring Data JPA และ Hibernate

**Spring Data JPA** ช่วยลดการเขียนคำสั่ง SQL ดิบ โดยสร้าง Implementations ของคำสั่ง CRUD (Create, Read, Update, Delete) ให้อัตโนมัติ เพียงแค่ประกาศ Method ใน Interface`,
      codeExample: {
        language: "java",
        code: `public class JpaRepositorySimulation {
    public static void main(String[] args) {
        System.out.println("✓ จำลองคำสั่ง Spring Data JPA Repository:");
        System.out.println("• Method: findByDepartmentAndGpaGreaterThanEqual('IT', 3.50)");
        System.out.println("• Generated SQL: SELECT * FROM students s WHERE s.department = ? AND s.gpa >= ? ORDER BY s.id ASC");
        System.out.println("• Hibernate Session: Transaction Commited successfully!");
    }
}`,
        description: "หลักการทำงานของ Derived Queries ใน Spring Data JPA"
      }
    },
    {
      id: "java-8",
      title: "ความปลอดภัยระดับ Enterprise ด้วย Spring Security 6 และ JWT Tokens",
      description: "ปกป้อง API ด้วย Spring Security 6: SecurityFilterChain, Password Encoding ด้วย BCrypt, การออกและการตรวจสอบสิทธิ์ด้วย Stateless JWT Tokens, และ Role-based Access Control",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การรักษาความปลอดภัยด้วย Spring Security 6

ในสถาปัตยกรรม Microservices การรักษาความปลอดภัยต้องเป็นแบบ **Stateless Authentication** ผ่าน **JSON Web Token (JWT)** โดยใช้ Security Filter Chain ในการสกัดกั้นและตรวจสอบ Request ทุกรายการ`,
      codeExample: {
        language: "java",
        code: `public class SecuritySimulation {
    public static void main(String[] args) {
        System.out.println("🛡️ จำลอง Spring Security 6 Filter Chain:");
        System.out.println("1. JwtAuthenticationFilter: สกัดกั้น Header 'Authorization: Bearer <token>'");
        System.out.println("2. Token Validation: ตรวจสอบลายมือชื่อดิจิทัลและวันหมดอายุ (HMAC-SHA256) -> Valid");
        System.out.println("3. SecurityContextHolder: ผูกข้อมูล UserDetails (Username: 'thanakorn', Roles: ['ADMIN'])");
        System.out.println("4. FilterChain: อนุญาตให้ผ่านเข้าถึง Endpoint /api/admin/system-status");
    }
}`,
        description: "ขั้นตอนการทำงานของ Spring Security Filter Chain"
      }
    },
    {
      id: "java-9",
      title: "โปรเจกต์ Enterprise Banking & Academic Transaction API ด้วย Spring Boot 3",
      description: "โปรเจกต์รวบยอด: สร้าง REST API ระบบธุรกรรมการศึกษาและชำระค่าธรรมเนียม พร้อม Exception Handling, Validation, และ OpenAPI Swagger Documentation",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise Java: Academic Transaction API

ผสานรวมฟีเจอร์ทั้งหมดของ Modern Java 21, Records, Spring Boot 3, Dependency Injection, และ Type Safety สร้างระบบธุรกรรมทางการศึกษาที่พร้อม Deploy บน Kubernetes Container`,
      codeExample: {
        language: "java",
        code: `import java.util.UUID;

record PaymentRequest(String studentId, double amount, String paymentChannel) {}

record PaymentReceipt(String receiptId, String studentId, double amount, String status) {}

public class BankingApiSimulation {
    public static PaymentReceipt processPayment(PaymentRequest req) {
        if (req.amount() <= 0) {
            throw new IllegalArgumentException("ยอดชำระต้องมากกว่า 0 บาท");
        }

        String receiptId = "RCP-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
        return new PaymentReceipt(receiptId, req.studentId(), req.amount(), "COMPLETED");
    }

    public static void main(String[] args) {
        PaymentRequest request = new PaymentRequest("STD-670101", 15000.00, "PROMPTPAY");
        PaymentReceipt receipt = processPayment(request);

        System.out.println("✓ ชำระค่าธรรมเนียมการศึกษาสำเร็จ:");
        System.out.println("• หมายเลขใบเสร็จ: " + receipt.receiptId());
        System.out.println("• รหัสนักศึกษา: " + receipt.studentId());
        System.out.println("• ยอดเงิน: " + receipt.amount() + " THB");
        System.out.println("• สถานะธุรกรรม: " + receipt.status());
    }
}`,
        description: "สถาปัตยกรรมระบบชำระเงินและออกใบเสร็จด้วย Java 21"
      }
    }
  ]
};
