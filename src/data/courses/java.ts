import { Course } from "../types";

export const javaCourse: Course = {
  id: "java",
  title: "Java 21 LTS & Spring Boot 3 Enterprise Engineering",
  description: "พัฒนาซอฟต์แวร์ระดับองค์กรด้วย Modern Java 21 LTS ตั้งแต่โครงสร้าง JVM, Records, Streams API, Virtual Threads จนถึง Spring Boot 3 และ Spring Data JPA",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาซอฟต์แวร์ระดับองค์กรด้วยภาษา Java 21 (Long-Term Support) และ Spring Boot 3 Framework ครอบคลุมตั้งแต่สถาปัตยกรรมภายในของ Java Virtual Machine (JVM), การทำงานของ ClassLoader และ Just-In-Time (JIT) Compiler, ไวยากรณ์สมัยใหม่ของ Java (Records, Pattern Matching for switch, Sealed Classes, Text Blocks, Sequenced Collections), การประมวลผลข้อมูลด้วย Collections และ Functional Streams API, การบริหารจัดการหน่วยความจำและ Garbage Collector (G1GC, ZGC), การรองรับ Concurrency มหาศาลด้วย Virtual Threads (Project Loom JEP 444), การพัฒนา REST API ด้วย Spring Boot 3, การเชื่อมต่อฐานข้อมูลระดับ Enterprise ด้วย Spring Data JPA และ Hibernate, การรักษาความปลอดภัยด้วย Spring Security 6, และการสร้างสถาปัตยกรรม Production Microservices",
  icon: "☕",
  color: "red",
  gradient: "from-red-600 via-orange-600 to-amber-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Java 21", "Spring Boot 3", "JVM", "Spring Data JPA", "Virtual Threads", "OOP", "Microservices"],
  recommendedTools: [
    {
      name: "OpenJDK 21 LTS (Eclipse Temurin / Amazon Corretto)",
      icon: "☕",
      badge: "Official JDK",
      description: "ชุดพัฒนาซอฟต์แวร์ Java เวอร์ชัน 21 LTS มาตรฐานระดับสากล พร้อมเครื่องมือ jshell, javac, และ java",
      downloadUrl: "https://adoptium.net/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง OpenJDK 21 จาก Adoptium (Eclipse Temurin)\n2. กำหนด JAVA_HOME ใน System Environment Variables\n3. ตรวจสอบใน Terminal: java -version และ javac -version"
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
      description: "เจาะลึกการทำงานภายในของ JVM, Bytecode verification, ClassLoader Subsystem (Bootstrap/Platform/Application), Execution Engine (Interpreter, C1/C2 JIT Compiler) และ HotSpot Optimization",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม Java Virtual Machine (JVM) และ Modern Java 21 LTS

ปรัชญาดั้งเดิมของ Java คือ **"Write Once, Run Anywhere" (WORA)** ซึ่งขับเคลื่อนด้วย **Java Virtual Machine (JVM)** หัวใจสำคัญที่แปลง Java Bytecode (.class) ให้กลายเป็น Machine Code ที่ทำงานด้วยความเร็วสูงสุดบนฮาร์ดแวร์ทุกสถาปัตยกรรม (x86_64, ARM64/AArch64, RISC-V)

---

## 1. วงจรชีวิตของโค้ด Java (Compilation & Execution Pipeline)
เมื่อโปรแกรมเมอร์เขียนไฟล์ \`App.java\`:
1. **Frontend Compiler (\`javac\`):** ทำหน้าที่ตรวจสอบ Syntax, Type Checking และแปลงซอร์สโค้ดเป็น **Java Bytecode** ที่เป็นกลางทางสถาปัตยกรรม บันทึกเป็นไฟล์ \`App.class\`
2. **ClassLoader Subsystem:** ทำหน้าที่โหลดไฟล์ไบต์โค้ดเข้าสู่หน่วยความจำของ JVM
3. **Bytecode Verifier:** ตรวจสอบความปลอดภัย เช่น ป้องกัน Stack Overflow, ตรวจสอบการแปลง Type ที่ผิดกฎหมาย, และป้องกันการเข้าถึง Memory นอกเหนือขอบเขต
4. **Execution Engine:** ทำหน้าที่รันไบต์โค้ดผ่าน **Interpreter** และคอมไพล์ส่วนที่รันบ่อยด้วย **Just-In-Time (JIT) Compiler**

---

## 2. โครงสร้างหน่วยความจำ JVM (Runtime Data Areas)
ตามสเปกของ JVM Specification หน่วยความจำถูกแบ่งออกเป็น 5 ส่วนหลัก:

\`\`\`text
+-------------------------------------------------------------------------+
|                         JVM Runtime Data Areas                          |
+------------------------------------+------------------------------------+
|         Shared across Threads       |        Per-Thread (Private)        |
+------------------------------------+------------------------------------+
| 1. Heap Memory                     | 3. JVM Stack (Stack Frames)        |
|    - Young Gen (Eden, S0, S1)      |    - Local Variables Array         |
|    - Old (Tenured) Generation      |    - Operand Stack                 |
|                                    |    - Frame Data (Constant Pool Ref)|
| 2. Metaspace (Native Memory)       | 4. Program Counter (PC) Register   |
|    - Class Metadata, Method Data   | 5. Native Method Stack (JNI / C)   |
|    - Runtime Constant Pool         |                                    |
+------------------------------------+------------------------------------+
\`\`\`

- **Heap Memory:** พื้นที่หน่วยความจำส่วนกลางที่อ็อบเจกต์ (\`new Object()\`) ทั้งหมดอาศัยอยู่ จัดการโดย Garbage Collector (GC)
- **Metaspace (แทนที่ PermGen ตั้งแต่ Java 8):** ใช้ Native Memory ของเครื่องโฮสต์ เก็บโครงสร้างคลาส, เมธอด, และ Bytecode definitions โดยขยายตัวตามความต้องการจริงของ OS
- **JVM Stack:** แต่ละเธรดจะมี Stack ส่วนตัว เมื่อมีการเรียกเมธอดจะเกิด **Stack Frame** ซึ่งเก็บตัวแปรโลคัล (Primitive types และ Object References) เมื่อเมธอดทำงานเสร็จ Frame จะถูก Pop ออกทันทีด้วยต้นทุน O(1)

---

## 3. ClassLoader Subsystem 3 ลำดับชั้น (Delegation-Hierarchy)
JVM ใช้กลไก **Delegation Hierarchy Principle** โดยจะส่งคำขอโหลดคลาสขึ้นไปยัง Parent ClassLoader ก่อนเสมอ:
1. **Bootstrap ClassLoader:** เขียนด้วย C/C++ เป็นรากฐานของ JVM โหลดคลาสพื้นฐานของระบบ (\`java.base\`, \`java.lang.*\`, \`java.util.*\`)
2. **Platform ClassLoader (ชื่อเดิม Extension ClassLoader):** โหลดโมดูลส่วนขยายและแพลตฟอร์มมาตรฐาน
3. **Application (System) ClassLoader:** โหลดคลาสที่อยู่ใน Classpath หรือ Modulepath ของแอปพลิเคชันที่เราเขียนขึ้น

---

## 4. HotSpot Tiered Compilation: Interpreter, C1, และ C2 JIT
ทำไม Java จึงทำงานได้เร็วเทียบเคียง C++? คำตอบคือเทคโนโลยี **Tiered Compilation**:
- **Level 0 (Interpreter):** เมื่อแอปพลิเคชันเริ่มสตาร์ท จะรันด้วย Interpreter ทันทีเพื่อให้เริ่มทำงานได้เร็วที่สุดโดยไม่ต้องรอคอมไพล์
- **Level 1-3 (C1 Client Compiler):** JVM นับความถี่ในการเรียกเมธอด (Invocation Counter) หากเมธอดใดถูกเรียกบ่อยจนเข้าข่าย "Warm" ตัว C1 จะคอมไพล์เป็น Machine Code แบบ Basic Optimization
- **Level 4 (C2 Server Compiler):** หากโค้ดส่วนนั้นถูกเรียกซ้ำๆ มหาศาล ("Hot Spot") C2 จะนำไปวิเคราะห์เชิงลึกด้วย **Profiling Data** และทำ Optimization ขั้นสูง เช่น:
  - **Method Inlining:** ดึงโค้ดของเมธอดขนาดเล็กมาวางแทนจุดที่เรียกโดยตรงเพื่อลด Overhead ของการสร้าง Stack Frame
  - **Escape Analysis:** ตรวจสอบว่าอ็อบเจกต์หลุดรอดออกนอกเมธอดหรือไม่ หากไม่หลุด JVM จะยุบอ็อบเจกต์แล้วจัดสรรลงใน **Stack (Scalar Replacement)** แทนที่จะจองบน Heap ทำให้ไม่ต้องรอ GC เก็บกวาด!
  - **Loop Unrolling:** คลี่ลูปเพื่อลดจำนวนรอบการเช็คเงื่อนไขและใช้ประโยชน์จาก CPU Vector Instructions (AVX-512)`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Java 21 LTS: การตรวจสอบข้อมูลสถาปัตยกรรม JVM และหน่วยความจำ Runtime
// =================================================================

import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.lang.management.MemoryMXBean;

public class JvmArchitectureDemo {

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("   IT Academy Java 21 LTS JVM Diagnostics Runtime ");
        System.out.println("==================================================");

        // 1. ดึงข้อมูล Java Runtime และ VM Spec
        RuntimeMXBean runtimeBean = ManagementFactory.getRuntimeMXBean();
        System.out.println("Java Version        : " + System.getProperty("java.version"));
        System.out.println("JVM Implementation  : " + runtimeBean.getVmName() + " (" + runtimeBean.getVmVersion() + ")");
        System.out.println("JVM Vendor          : " + runtimeBean.getVmVendor());
        System.out.println("JVM Uptime (ms)     : " + runtimeBean.getUptime());

        // 2. ตรวจสอบหน่วยความจำ Heap และ Non-Heap (Metaspace)
        Runtime runtime = Runtime.getRuntime();
        long maxMemoryMB = runtime.maxMemory() / (1024 * 1024);
        long totalMemoryMB = runtime.totalMemory() / (1024 * 1024);
        long freeMemoryMB = runtime.freeMemory() / (1024 * 1024);
        long usedMemoryMB = totalMemoryMB - freeMemoryMB;

        System.out.println("\n--- Memory Allocation Profile ---");
        System.out.println("Available CPU Cores : " + runtime.availableProcessors());
        System.out.println("Max Heap Limit (-Xmx): " + maxMemoryMB + " MB");
        System.out.println("Allocated Heap (-Xms): " + totalMemoryMB + " MB");
        System.out.println("Used Heap Memory    : " + usedMemoryMB + " MB");
        System.out.println("Free Heap Remaining : " + freeMemoryMB + " MB");

        // 3. ตรวจสอบ ClassLoader Hierarchy
        System.out.println("\n--- ClassLoader Hierarchy Inspection ---");
        ClassLoader appClassLoader = JvmArchitectureDemo.class.getClassLoader();
        System.out.println("Current App ClassLoader  : " + appClassLoader);
        
        ClassLoader platformClassLoader = appClassLoader.getParent();
        System.out.println("Parent ClassLoader       : " + platformClassLoader);
        
        ClassLoader bootstrapClassLoader = platformClassLoader.getParent();
        System.out.println("Root Bootstrap ClassLoader: " + bootstrapClassLoader + " (null represents native C++ core)");
    }
}`,
        description: "สคริปต์ตรวจสอบสถาปัตยกรรมภายใน JVM, Memory Profile และ ClassLoader Hierarchy ใน Java 21"
      },
      challenge: {
        description: "เขียนโปรแกรมคำนวณและแสดงผลร้อยละของ Heap Memory ที่ถูกใช้งานจริง (Used Memory Percentage) เทียบกับ Max Memory ทั้งหมดของ JVM",
        startingCode: `public class HeapUsageChallenge {
    public static void main(String[] args) {
        Runtime rt = Runtime.getRuntime();
        
        // TODO: คำนวณ usedMemory และ maxMemory
        // แล้วพิมพ์ค่าเป็นเปอร์เซ็นต์ (ทศนิยม 2 ตำแหน่ง)
    }
}`,
        solution: `public class HeapUsageChallenge {
    public static void main(String[] args) {
        Runtime rt = Runtime.getRuntime();
        long total = rt.totalMemory();
        long free = rt.freeMemory();
        long max = rt.maxMemory();
        long used = total - free;

        double percentage = ((double) used / max) * 100.0;
        System.out.printf("Used Heap Memory: %.2f%%\n", percentage);
    }
}`
      },
      quiz: [
        {
          id: "java-q1-1",
          question: "หน่วยความจำประเภท Metaspace ในสถาปัตยกรรม Java ยุคใหม่ถูกจัดสรรไว้ที่ใด?",
          options: [
            "จัดสรรอยู่ภายใน JVM Heap Memory ร่วมกับ Object instances",
            "จัดสรรอยู่บน Native Memory ของระบบปฏิบัติการโฮสต์ โดยขยายขนาดอัตโนมัติตามต้องการ",
            "จัดสรรอยู่ภายใน CPU L1 Cache เท่านั้น",
            "จัดสรรลงใน Hard Disk Page File เสมอ"
          ],
          correctAnswer: 1,
          explanation: "ตั้งแต่ Java 8 เป็นต้นมา Metaspace เข้ามาแทนที่ PermGen เดิม โดยย้ายข้อมูลคลาสและเมทาดาต้าไปอยู่บน Native Memory ของเครื่องโฮสต์ ทำให้ไม่เกิดข้อผิดพลาด java.lang.OutOfMemoryError: PermGen space อีกต่อไป"
        },
        {
          id: "java-q1-2",
          question: "การทำ Escape Analysis ของ C2 JIT Compiler มีประโยชน์สำคัญสูงสุดอย่างไรต่อประสิทธิภาพ?",
          options: [
            "ช่วยเพิ่มความเร็วในการดาวน์โหลดไฟล์ JAR ผ่านเครือข่าย",
            "หากอ็อบเจกต์ไม่หลุดออกนอกเมธอด JVM สามารถแปลงอ็อบเจกต์เป็นตัวแปรแบบ Primitive บน Stack (Scalar Replacement) ทำให้ไม่ต้องจองบน Heap และลดภาระ Garbage Collection",
            "เข้ารหัส Bytecode ด้วยอัลกอริทึม AES-256",
            "ปิดการทำงานของ Multithreading ชั่วคราวเพื่อประหยัดพลังงาน"
          ],
          correctAnswer: 1,
          explanation: "Escape Analysis ตรวจสอบการส่งต่อ Object References หากพบว่า Object ใช้งานเฉพาะใน Scope ของเมธอด JVM จะทำ Scalar Replacement จัดสรรลง Stack Frame ทันที เมื่อจบฟังก์ชันหน่วยความจำจะคืนทันทีโดยไม่ต้องรอ GC"
        },
        {
          id: "java-q1-3",
          question: "หลักการ Delegation Hierarchy ของ ClassLoader Subsystem ใน Java มีวัตถุประสงค์หลักเพื่ออะไร?",
          options: [
            "เพื่อความปลอดภัย ป้องกันไม่ให้แอปพลิเคชันโหลดคลาสแปลกปลอมมาทับคลาสหลักของระบบ เช่น java.lang.String",
            "เพื่อให้โปรแกรมรันได้ช้าลงเพื่อความเสถียร",
            "เพื่อแปลงคลาสทุกตัวให้เป็น JSON โดยอัตโนมัติ",
            "เพื่อบังคับให้ทุกไฟล์ .class ต้องมีขนาดเท่ากัน"
          ],
          correctAnswer: 0,
          explanation: "การส่งต่อให้ Parent ClassLoader (เช่น Bootstrap) ตรวจสอบก่อน จะรับประกันว่าคลาสรากฐานของ Java เช่น java.lang.Object หรือ java.lang.String จะถูกโหลดจากแกนกลางที่เชื่อถือได้เสมอ ป้องกันผู้ไม่หวังดีสร้างคลาสหลอกลวงขึ้นมาแทนที่"
        }
      ]
    },
    {
      id: "java-2",
      title: "Modern Java Syntax: Records, Pattern Matching, Sealed Classes และ Sequenced Collections",
      description: "อัปเกรดยุคใหม่ของ Java: การสร้าง Immutable Data Carriers ด้วย Records, การแยกแยะประเภทและแกะค่าด้วย Record Patterns และ Pattern Matching for switch, Sealed Classes สำหรับจัดหมวดหมู่คลาส และ Sequenced Collections (JEP 431)",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# Modern Java Syntax: Records, Pattern Matching และ Sealed Classes

Java 17 ถึง Java 21 มีการปฏิวัติไวยากรณ์ครั้งใหญ่ที่สุดในประวัติศาสตร์ โดยลดการเขียนโค้ด Boilerplate (Getters, Setters, equals, hashCode, toString) และเพิ่มความสามารถเชิง Functional Programming เต็มรูปแบบ

---

## 1. Java Records: Immutable Data Carriers
ในอดีต การสร้าง DTO (Data Transfer Object) หรือ Value Object หนึ่งตัวต้องเขียนโค้ดยาวนับร้อยบรรทัด ใน Modern Java เราใช้ **Record**:

\`\`\`java
// คอมไพเลอร์จะสร้าง private final fields, Canonical Constructor,
// getters (ตามชื่อฟิลด์ เช่น customerId()), equals(), hashCode(), และ toString() ให้อัตโนมัติ!
public record Order(
    String orderId,
    String customerId,
    double totalAmount,
    OrderStatus status
) {
    // Compact Constructor: ใช้ตรวจสอบความถูกต้อง (Validation) ได้สะอาดตา
    public Order {
        if (totalAmount < 0) {
            throw new IllegalArgumentException("ยอดคำสั่งซื้อต้องไม่ติดลบ");
        }
    }
}
\`\`\`

---

## 2. Pattern Matching for \`instanceof\` และ Record Patterns (JEP 440)
บอกลาการแคสต์ประเภทข้อมูลแบบเดิมที่ซ้ำซ้อนและเสี่ยงต่อ \`ClassCastException\`:

\`\`\`java
// แบบดั้งเดิม:
if (obj instanceof Order) {
    Order o = (Order) obj; // ต้อง Explicit Cast
    System.out.println(o.orderId());
}

// แบบ Modern Java (Pattern Matching):
if (obj instanceof Order o) {
    System.out.println(o.orderId()); // ตัวแปร o ใช้งานได้ทันที
}

// Record Patterns (Deconstruction): แกะไส้ในของ Record ออกมาเป็นตัวแปรย่อยได้ทันที!
if (obj instanceof Order(String id, String customer, double amount, OrderStatus status)) {
    System.out.printf("Order #%s by Customer: %s (Total: $%.2f)\n", id, customer, amount);
}
\`\`\`

---

## 3. Pattern Matching for \`switch\` (JEP 441)
การใช้ \`switch\` แบบใหม่ไม่เพียงแต่ส่งคืนค่าได้แบบ Expression แต่ยังรองรับ Type Patterns และเงื่อนไขย่อย (\`when\` clause):

\`\`\`java
public static String evaluateDiscount(Object customer) {
    return switch (customer) {
        case CorporateClient c when c.annualSpend() > 1_000_000 -> "ส่วนลดองค์กรพิเศษ 25%";
        case CorporateClient c -> "ส่วนลดองค์กรมาตรฐาน 15%";
        case VIPCustomer vip when vip.points() >= 5000 -> "ส่วนลด VIP สูงสุด 20%";
        case VIPCustomer vip -> "ส่วนลด VIP 10%";
        case RegularCustomer r -> "ส่วนลดทั่วไป 5%";
        case null -> "ไม่มีข้อมูลลูกค้า";
        default -> "ไม่มีส่วนลด";
    };
}
\`\`\`

---

## 4. Sealed Classes and Interfaces (JEP 409)
การจำกัดว่าคลาสหรืออินเทอร์เฟซใดบ้างที่มีสิทธิ์สืบทอด (\`permits\`) ช่วยสร้าง Domain Modeling แบบ Algebraic Data Types (ADT) ที่ปลอดภัย และทำให้คอมไพเลอร์ตรวจสอบความครบถ้วนของกรณีใน \`switch\` ได้โดยไม่ต้องมี \`default\`:

\`\`\`java
// ประกาศ Sealed Interface อนุญาตเฉพาะ 3 คลาสนี้เท่านั้น
public sealed interface PaymentMethod permits CreditCard, PromptPay, CryptoWallet {}

public record CreditCard(String cardNumber, String expiry) implements PaymentMethod {}
public record PromptPay(String citizenIdOrPhone) implements PaymentMethod {}
public record CryptoWallet(String walletAddress, String network) implements PaymentMethod {}

// เมื่อ switch กับ Sealed Interface คอมไพเลอร์จะรู้ว่าครอบคลุมครบทุกกรณีแล้ว!
String processPayment(PaymentMethod method) {
    return switch (method) {
        case CreditCard c -> "Processing Visa/Mastercard: " + c.cardNumber();
        case PromptPay p -> "Processing National PromptPay: " + p.citizenIdOrPhone();
        case CryptoWallet w -> "Processing Web3 Transfer on: " + w.network();
    }; // ไม่ต้องใส่ default: หากเพิ่มคลาสใหม่ คอมไพเลอร์จะเตือนทันที!
}
\`\`\`

---

## 5. Sequenced Collections (JEP 431 ใน Java 21)
Java 21 ได้จัดระเบียบลำดับของ Collections ใหม่ทั้งหมดด้วย Interface \`SequencedCollection\` มีเมธอด \`getFirst()\`, \`getLast()\`, \`addFirst()\`, \`addLast()\`, และ \`reversed()\` ที่เป็นมาตรฐานเดียวกันทั้ง List, Deque, และ SortedSet`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Modern Java 21: Records, Sealed Hierarchy และ Switch Pattern Matching
// =================================================================

public class ModernJavaSyntaxDemo {

    // 1. กำหนด Sealed Hierarchy สำหรับผลการดำเนินธุรกรรมการเงิน
    public sealed interface TransactionResult 
        permits TransactionResult.Success, TransactionResult.Declined, TransactionResult.Blocked {
        
        record Success(String txId, double amount, String authCode) implements TransactionResult {}
        record Declined(String txId, String reasonCode, String description) implements TransactionResult {}
        record Blocked(String txId, String riskLevel, String fraudRuleset) implements TransactionResult {}
    }

    // 2. ฟังก์ชันวิเคราะห์ผลลัพธ์ด้วย Switch Expression & Deconstruction Pattern
    public static String handleTransaction(TransactionResult result) {
        return switch (result) {
            case TransactionResult.Success(String id, double amt, String auth) when amt >= 100_000 ->
                String.format("[ALERT] ธุรกรรมวงเงินสูง #%s อนุมัติสำเร็จ ยอด: $%,.2f (Auth: %s)", id, amt, auth);

            case TransactionResult.Success(String id, double amt, String auth) ->
                String.format("[OK] ธุรกรรม #%s อนุมัติสำเร็จ ยอด: $%,.2f (Auth: %s)", id, amt, auth);

            case TransactionResult.Declined(String id, String code, String desc) ->
                String.format("[DECLINED] ธุรกรรม #%s ถูกปฏิเสธ (รหัส: %s, เหตุผล: %s)", id, code, desc);

            case TransactionResult.Blocked(String id, String risk, String rule) ->
                String.format("[SECURITY BLOCK] ธุรกรรม #%s ตรวจพบความเสี่ยงระดับ %s โดยกฎ: %s", id, risk, rule);
        };
    }

    public static void main(String[] args) {
        TransactionResult tx1 = new TransactionResult.Success("TX-9901", 1250000.0, "AUTH-88219");
        TransactionResult tx2 = new TransactionResult.Declined("TX-9902", "ERR_INSUFFICIENT_FUNDS", "ยอดเงินคงเหลือไม่เพียงพอ");
        TransactionResult tx3 = new TransactionResult.Blocked("TX-9903", "CRITICAL", "GEO_LOCATION_VELOCITY_CHECK");

        System.out.println(handleTransaction(tx1));
        System.out.println(handleTransaction(tx2));
        System.out.println(handleTransaction(tx3));
    }
}`,
        description: "ตัวอย่างการประยุกต์ใช้ Records, Sealed Classes และ Pattern Matching ในงานระบบชำระเงิน"
      },
      challenge: {
        description: "จงสร้าง Record ชื่อ StudentGrade ที่รับฟิลด์ studentId (String), score (double) โดยใน Compact Constructor หาก score น้อยกว่า 0 หรือมากกว่า 100 ให้โยน IllegalArgumentException",
        startingCode: `public class RecordChallenge {
    // TODO: ประกาศ public record StudentGrade(...)
    
    public static void main(String[] args) {
        StudentGrade valid = new StudentGrade("STD001", 85.5);
        System.out.println("Student: " + valid.studentId() + " Score: " + valid.score());
    }
}`,
        solution: `public class RecordChallenge {
    public record StudentGrade(String studentId, double score) {
        public StudentGrade {
            if (score < 0.0 || score > 100.0) {
                throw new IllegalArgumentException("คะแนนต้องอยู่ระหว่าง 0 ถึง 100");
            }
        }
    }
    
    public static void main(String[] args) {
        StudentGrade valid = new StudentGrade("STD001", 85.5);
        System.out.println("Student: " + valid.studentId() + " Score: " + valid.score());
    }
}`
      },
      quiz: [
        {
          id: "java-q2-1",
          question: "Java Record มีคุณลักษณะพื้นฐานตามสเปกอย่างไร?",
          options: [
            "เป็น Mutable Class ที่สามารถเปลี่ยนค่าฟิลด์ได้ตลอดเวลาผ่าน Setters",
            "เป็น Immutable Data Carrier ที่ฟิลด์ทั้งหมดเป็น private final โดยสร้าง Constructor, Getters, equals, hashCode และ toString ให้อัตโนมัติ",
            "เป็น Interface ที่ไม่มี Method Body เลย",
            "รันเฉพาะบนระบบ Android เท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "Java Record ถูกออกแบบมาเพื่อทำหน้าที่เป็น Immutable Data Carriers ข้อมูลทุกตัวเป็น final และคอมไพเลอร์จะสร้าง Component Accessors, Canonical Constructor, equals, hashCode และ toString ให้อัตโนมัติ"
        },
        {
          id: "java-q2-2",
          question: "ประโยชน์สำคัญที่สุดของการใช้งาน Sealed Classes ร่วมกับ Switch Pattern Matching คืออะไร?",
          options: [
            "ทำให้โปรแกรมรันโดยไม่ต้องใช้ CPU",
            "คอมไพเลอร์สามารถตรวจสอบความครบถ้วนของทุกเคส (Exhaustiveness Checking) ได้อย่างสมบูรณ์ ทำให้ไม่ต้องใส่ default branch และหากมีคลาสใหม่เพิ่มเข้ามาจะแจ้งเตือนทันที",
            "แปลงข้อมูลทั้งหมดให้เป็นภาษา C อัตโนมัติ",
            "ลดขนาดของไฟล์ JAR ลง 90%"
          ],
          correctAnswer: 1,
          explanation: "เนื่องจาก Sealed Class ระบุผู้สืบทอดไว้อย่างชัดเจนในคำสั่ง permits คอมไพเลอร์จึงทราบทุกกรณีที่เป็นไปได้ ทำให้สวิตช์สามารถเช็ค Exhaustiveness ได้โดยไม่ต้องมี default clause หากในอนาคตมี subclass เพิ่มขึ้น คอมไพเลอร์จะบังคับให้เขียนเคสรองรับทันที"
        },
        {
          id: "java-q2-3",
          question: "เมธอดใดต่อไปนี้ถูกนำเข้ามาใน Java 21 ภายใต้ Sequenced Collections API เพื่อดึงสมาชิกตัวแรกและตัวสุดท้ายอย่างเป็นมาตรฐาน?",
          options: [
            "fetchHead() และ fetchTail()",
            "getFirst() และ getLast()",
            "pollBegin() และ pollEnd()",
            "selectFirstRow() และ selectLastRow()"
          ],
          correctAnswer: 1,
          explanation: "JEP 431 (Sequenced Collections) ใน Java 21 ได้เพิ่มอินเทอร์เฟซ SequencedCollection พร้อมเมธอดมาตรฐาน getFirst() และ getLast() ให้กับ List, Deque และ SortedSet"
        }
      ]
    },
    {
      id: "java-3",
      title: "Java Collections Framework และ Functional Streams API (map, filter, reduce)",
      description: "ทำความเข้าใจความแตกต่างของโครงสร้างข้อมูล ArrayList, LinkedList, HashMap, ConcurrentHashMap, เทคนิค Streams Pipeline, Lazy Evaluation, Parallel Streams และ Collectors",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Java Collections Framework และ Functional Streams API

การประมวลผลชุดข้อมูลขนาดใหญ่ในระดับ Production ต้องอาศัยความเข้าใจที่ลึกซึ้งในโครงสร้างข้อมูลของ **Collections Framework** และพลังแห่งการประมวลผลเชิงฟังก์ชันด้วย **Stream API**

---

## 1. การเลือกโครงสร้างข้อมูล Collections ให้เหมาะกับงาน
| โครงสร้าง | พฤติกรรมภายใน | การค้นหา (Lookup) | การแทรก/ลบ (Insert/Delete) | การใช้งานที่เหมาะสม |
|---|---|---|---|---|
| **\`ArrayList\`** | Dynamic Resizable Array | O(1) by Index | O(n) เลื่อนตำแหน่ง | อ่านข้อมูลบ่อย (Read-heavy) เข้าถึงด้วยดัชนี |
| **\`LinkedList\`** | Doubly Linked Nodes | O(n) ท่องตามโหนด | O(1) หัว/ท้าย | คิวงานเข้าออกเร็ว (Queue/Deque) |
| **\`HashSet\` / \`HashMap\`** | Hash Table + Chaining (Red-Black Tree) | O(1) เฉลี่ย | O(1) เฉลี่ย | ข้อมูล Key-Value ไม่ซ้ำ ไม่เรียงลำดับ |
| **\`TreeMap\` / \`TreeSet\`** | Self-Balancing Red-Black Tree | O(log n) | O(log n) | ต้องการให้เรียงลำดับ Key ตลอดเวลา |
| **\`ConcurrentHashMap\`** | Segmented Lock-Free CAS (Compare-And-Swap) | O(1) Thread-safe | O(1) Thread-safe | ระบบงาน Concurrency สูง หลายเธรดอ่านเขียนพร้อมกัน |

> **เจาะลึก HashMap ภายใน (Treeification):**  
> ใน Java 8+ เมื่อมี Hash Collision ใน Bucket เดียวกันเกิน 8 ตัว (\`TREEIFY_THRESHOLD\`) JVM จะแปลง LinkedList ใน Bucket นั้นให้กลายเป็น **Red-Black Tree** โดยอัตโนมัติ ทำให้เวลาค้นหากรณีแย่ที่สุดลดจาก O(n) เหลือเพียง O(log n) ป้องกันปัญหา Hash DoS Attack!

---

## 2. ปรัชญาของ Java Stream API
Stream ไม่ใช่โครงสร้างข้อมูล (ไม่ใช่ Data Structure) แต่เป็น **การคำนวณทางท่อส่งข้อมูล (Computational Pipeline)**:
1. **Source:** มาจาก Collection, Array หรือ I/O Channel
2. **Intermediate Operations (ประมวลผลกลางทาง):** เป็น **Lazy Evaluation** (ยังไม่ทำงานจนกว่าจะมีคำสั่งปิดท้าย) เช่น \`filter()\`, \`map()\`, \`flatMap()\`, \`sorted()\`, \`distinct()\`
3. **Terminal Operations (ประมวลผลผลลัพธ์):** ทริกเกอร์ให้ Stream ทำงานจริง และปิดการทำงานของ Stream เช่น \`collect()\`, \`reduce()\`, \`forEach()\`, \`count()\`, \`findFirst()\`

\`\`\`java
List<String> topPerformers = employees.stream()
    .filter(e -> e.department().equals("Engineering")) // กรองเฉพาะวิศวกร
    .filter(e -> e.performanceRating() >= 4.5)         // เรตติ้งดีเยี่ยม
    .sorted(Comparator.comparingDouble(Employee::salary).reversed()) // เรียงเงินเดือนมากไปน้อย
    .map(Employee::fullName)                           // สกัดเอาเฉพาะชื่อ
    .limit(5)                                          // เอาแค่ Top 5
    .toList();                                         // Terminal Operation (Java 16+)
\`\`\`

---

## 3. Advanced Grouping ด้วย \`Collectors.groupingBy\`
หนึ่งในความสามารถที่ทรงพลังที่สุดในการวิเคราะห์ข้อมูลธุรกิจ (Data Analytics) คือการจัดกลุ่มข้อมูล:

\`\`\`java
// จัดกลุ่มยอดขายตามประเทศ พร้อมคำนวณยอดขายรวมของแต่ละประเทศ
Map<String, Double> revenueByCountry = transactions.stream()
    .collect(Collectors.groupingBy(
        Transaction::countryCode,
        Collectors.summingDouble(Transaction::amount)
    ));
\`\`\`

---

## 4. Parallel Streams: เมื่อใดควรใช้ และข้อควรระวัง
การเรียก \`.parallelStream()\` จะแบ่งข้อมูลไปประมวลผลบนหลาย CPU Core โดยใช้ **ForkJoinPool.commonPool()**:
- **ควรใช้เมื่อ:** ข้อมูลมีขนาดใหญ่มาก (N * Q > 10,000 โดย N คือจำนวนข้อมูล และ Q คือความซับซ้อนของฟังก์ชันต่อตัว) และแต่ละ Operation เป็นอิสระต่อกันโดยสิ้นเชิง (Stateless & Non-interfering)
- **ห้ามใช้เมื่อ:** มีการแก้ตัวแปรภายนอก (Shared Mutable State) หรือมี I/O Blocking (เช่น ต่อ Database) เพราะจะทำให้ ForkJoinPool ส่วนกลางของ JVM ค้างทั้งหมด!`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Java 21: การประมวลผลข้อมูลเกรดองค์กรด้วย Streams Pipeline & Collectors
// =================================================================

import java.util.*;
import java.util.stream.Collectors;

public class StreamAnalyticsDemo {

    public record Student(
        String id,
        String name,
        String faculty,
        double gpa,
        int creditsCompleted
    ) {}

    public static void main(String[] args) {
        List<Student> students = List.of(
            new Student("STD01", "สมชาย ช่างคิด", "วิศวกรรมคอมพิวเตอร์", 3.85, 120),
            new Student("STD02", "กานดา สุขสม", "เทคโนโลยีสารสนเทศ", 3.92, 115),
            new Student("STD03", "ธนากร วิริยะ", "วิศวกรรมคอมพิวเตอร์", 3.40, 110),
            new Student("STD04", "พิมชนก รัตน", "วิทยาการข้อมูล", 3.78, 125),
            new Student("STD05", "ณัฐพล มั่งคั่ง", "เทคโนโลยีสารสนเทศ", 2.95, 95),
            new Student("STD06", "วรัญญา ศิลป์", "วิทยาการข้อมูล", 3.98, 130)
        );

        System.out.println("=== 1. นักศึกษาเกียรตินิยม (GPA >= 3.75) เรียงตาม GPA สูงสุด ===");
        List<String> honorRoll = students.stream()
            .filter(s -> s.gpa() >= 3.75)
            .sorted(Comparator.comparingDouble(Student::gpa).reversed())
            .map(s -> String.format("%s (%s) - GPA: %.2f", s.name(), s.faculty(), s.gpa()))
            .toList();
        
        honorRoll.forEach(System.out::println);

        System.out.println("\n=== 2. สรุปค่าเฉลี่ย GPA แยกตามคณะ (Grouping & Averaging) ===");
        Map<String, Double> avgGpaByFaculty = students.stream()
            .collect(Collectors.groupingBy(
                Student::faculty,
                Collectors.averagingDouble(Student::gpa)
            ));

        avgGpaByFaculty.forEach((faculty, avgGpa) -> 
            System.out.printf("คณะ: %-25s | เกรดเฉลี่ย: %.2f\n", faculty, avgGpa)
        );

        System.out.println("\n=== 3. การคำนวณหน่วยกิตสะสมรวมทั้งมหาวิทยาลัย (Reduce) ===");
        int totalCredits = students.stream()
            .mapToInt(Student::creditsCompleted)
            .sum();
        System.out.println("หน่วยกิตสะสมรวม: " + totalCredits + " หน่วยกิต");
    }
}`,
        description: "สคริปต์สาธิตการใช้งาน Stream Pipeline, Sorting, Grouping By, และ Aggregation ใน Java 21"
      },
      challenge: {
        description: "จงใช้ Stream API เพื่อกรองเฉพาะตัวเลขคู่จาก List<Integer> ยกกำลังสอง และหาผลรวมทั้งหมด (Sum) โดยส่งคืนเป็นจำนวนเต็ม int",
        startingCode: `import java.util.List;

public class StreamChallenge {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // TODO: ใช้ Stream กรองเลขคู่ -> ยกกำลังสอง -> หาผลรวม
        int sumOfEvenSquares = 0;

        System.out.println("Result: " + sumOfEvenSquares);
    }
}`,
        solution: `import java.util.List;

public class StreamChallenge {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        int sumOfEvenSquares = numbers.stream()
            .filter(n -> n % 2 == 0)
            .mapToInt(n -> n * n)
            .sum();

        System.out.println("Result: " + sumOfEvenSquares); // 2^2 + 4^2 + 6^2 + 8^2 + 10^2 = 4+16+36+64+100 = 220
    }
}`
      },
      quiz: [
        {
          id: "java-q3-1",
          question: "เหตุใด Stream API จึงถูกเรียกว่าทำงานแบบ Lazy Evaluation?",
          options: [
            "เพราะทำงานช้ากว่าลูป for แบบเดิมเสมอ",
            "เพราะ Intermediate Operations (เช่น filter, map) จะยังไม่ทำงานจริงจนกว่าจะมีการเรียก Terminal Operation (เช่น collect, sum)",
            "เพราะ Stream จะทำงานเฉพาะตอนที่เครื่องคอมพิวเตอร์อยู่ในโหมดสลีป",
            "เพราะ Stream ไม่สามารถคืนค่าผลลัพธ์เป็นตัวเลขได้"
          ],
          correctAnswer: 1,
          explanation: "Lazy Evaluation หมายถึงการเตรียมขั้นตอนการคำนวณไว้ใน Pipeline แต่จะเริ่มดึงข้อมูลและประมวลผลทีละชิ้นจริงเมื่อพบคำสั่ง Terminal Operation ช่วยประหยัดเวลาและหน่วยความจำ เช่น หากมี limit(5) จะหยุดทำงานทันทีเมื่อครบ 5 ตัว"
        },
        {
          id: "java-q3-2",
          question: "ใน Java 8 ขึ้นไป หากเกิด Hash Collision ใน HashMap Bucket เดียวกันเกิน 8 ตัว โครงสร้างจะเปลี่ยนเป็นอะไร?",
          options: [
            "เปลี่ยนเป็น ArrayList ขนาดสองเท่า",
            "โยนข้อผิดพลาด StackOverflowError",
            "เปลี่ยนจาก LinkedList เป็น Red-Black Tree เพื่อลดเวลาค้นหากรณีแย่ที่สุดจาก O(n) เหลือ O(log n)",
            "ลบข้อมูลเก่าทิ้งทั้งหมด"
          ],
          correctAnswer: 2,
          explanation: "กลไก Treeification จะเปลี่ยน Bucket ที่มีความยาวชนกันเกินเกณฑ์ (TREEIFY_THRESHOLD = 8) ให้กลายเป็น Red-Black Tree ซึ่งค้นหาด้วยเวลา O(log n) ช่วยป้องกันการโจมตีแบบ Hash Collision Denial of Service"
        },
        {
          id: "java-q3-3",
          question: "กรณีใดต่อไปนี้ที่ไม่ควรนำ Parallel Streams (.parallelStream()) มาใช้งาน?",
          options: [
            "การประมวลผลตัวเลขนับล้านตัวที่เป็นอิสระต่อกัน",
            "งานที่มีการแก้ไขตัวแปรส่วนกลาง (Shared Mutable State) หรือมี I/O Blocking เช่น เชื่อมต่อฐานข้อมูลหรือรอการตอบกลับจากเครือข่าย",
            "งานที่ทำบน CPU แบบ Multi-core",
            "การคำนวณทางคณิตศาสตร์แบบ Functional บริสุทธิ์"
          ],
          correctAnswer: 1,
          explanation: "Parallel Streams ใช้ ForkJoinPool.commonPool() ซึ่งแชร์ร่วมกันทั้งแอปพลิเคชัน หากมีงานใดเกิด I/O Blocking หรือแก้ไข Shared State จะทำให้เธรดพูลกลางติดขัดและเกิดปัญหา Race Condition ได้ทันที"
        }
      ]
    },
    {
      id: "java-4",
      title: "การจัดการหน่วยความจำและ Garbage Collection (G1GC vs ZGC)",
      description: "เจาะลึกโครงสร้าง Heap Generation (Eden, Survivor, Tenured), การทำงานของ Card Table, TLAB และเปรียบเทียบ Garbage Collectors ระดับ Production: G1GC (Throughput) ปะทะ ZGC (Ultra-Low Latency Sub-millisecond Pause)",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การจัดการหน่วยความจำและ Garbage Collection (G1GC vs ZGC)

ในระบบ Enterprise Software สเกลใหญ่ ประสิทธิภาพของระบบมักถูกชี้วัดด้วยความสามารถในการควบคุม **Latency Spikes** ซึ่งสาเหตุหลักอันดับหนึ่งในภาษา Java มาจากการหยุดชะงักของ Garbage Collection (**Stop-The-World (STW) Pauses**)

---

## 1. สมมติฐานความอ่อนวัยของข้อมูล (Weak Generational Hypothesis)
การออกแบบ Garbage Collector ใน Java ตั้งอยู่บนข้อเท็จจริงทางสถิติ 2 ประการ:
1. **อ็อบเจกต์ส่วนใหญ่ที่ถูกสร้างขึ้นจะตาย (กลายเป็นขยะ) ภายในระยะเวลาสั้นๆ** (เช่น ตัวแปรในเมธอด, DTO ชั่วคราว)
2. **อ็อบเจกต์ที่มีอายุยืนยาวจะไม่ค่อยอ้างอิงกลับไปยังอ็อบเจกต์ที่เพิ่งสร้างใหม่**

ด้วยเหตุนี้ Heap Memory จึงถูกแบ่งออกเป็น:
- **Young Generation:**
  - **Eden Space:** จุดกำเนิดของอ็อบเจกต์ใหม่เกือบทุกตัว
  - **Survivor Spaces (S0 / S1):** อ็อบเจกต์ที่รอดจากการเก็บกวาดรอบ Minor GC จะถูกสลับย้ายไปมาระหว่าง S0 และ S1 พร้อมบวกค่าอายุ (Age counter)
- **Old (Tenured) Generation:** หากอ็อบเจกต์รอดชีวิตจนครบอายุเกณฑ์ (\`MaxTenuringThreshold\` ปริยายคือ 15 รอบ) จะถูกย้าย (Promoted) มาอยู่ใน Old Gen

---

## 2. TLAB: Thread-Local Allocation Buffer
เพื่อหลีกเลี่ยงไม่ให้หลายๆ เธรดต้องแย่ง Lock กันเมื่อเรียกคำสั่ง \`new Object()\` บน Heap ส่วนกลาง:
JVM จัดสรร **TLAB** ให้แต่ละเธรดเป็นชิ้นส่วนเล็กๆ บน Eden Space แต่ละเธรดจะจองแรมบน TLAB ของตัวเองด้วยการขยับ Pointer (Bump-the-pointer) โดยไม่ต้องใช้ Lock ใดๆ ทำให้การสร้างอ็อบเจกต์ใน Java ทำได้รวดเร็วเทียบเท่าการจัดสรรบน Stack

---

## 3. G1GC (Garbage-First Collector) - Default Collector ของ Java
G1GC เข้ามาแทนที่ CMS (Concurrent Mark Sweep) โดยไม่แบ่ง Heap เป็นก้อนตายตัว แต่ซอย Heap ทั้งหมดออกเป็น **Regions** ขนาดเท่าๆ กัน (1MB ถึง 32MB) ประมาณ 2,048 Regions:
- แต่ละ Region สามารถเป็น Eden, Survivor หรือ Old สลับไปมาได้อย่างยืดหยุ่น
- **หลักการทำงาน:** G1 จะติดตามปริมาณขยะในแต่ละ Region และเลือกกวาด Region ที่ **"มีขยะเยอะที่สุดก่อน (Garbage-First)"** เพื่อคืนหน่วยความจำให้ได้มากที่สุดภายในระยะเวลาหยุดชะงักเป้าหมาย
- กำหนดเวลาหยุดเป้าหมายได้ผ่านแฟล็ก: \`-XX:MaxGCPauseMillis=200\`

---

## 4. Generational ZGC: อภิมหา GC ระดับ Sub-millisecond (Java 21)
ZGC (Z Garbage Collector) คือการปฏิวัติครั้งยิ่งใหญ่ของ OpenJDK สำหรับระบบที่ต้องการความหน่วงต่ำระดับขีดสุด:
- **Sub-millisecond Pause Times:** ระยะเวลา Stop-The-World ต่ำกว่า **1 มิลลิวินาทีเสมอ** ไม่ว่า Heap จะมีขนาด 16 GB หรือมหาศาลถึง **16 Terabytes**!
- **Colored Pointers & Load Barriers:** ZGC ฝังข้อมูลสถานะของอ็อบเจกต์ลงใน 4 บิตบนของ Memory Address (Reference Pointer) โดยตรง เมื่อเธรดของแอปพลิเคชันพยายามเข้าถึงอ็อบเจกต์ที่กำลังถูกย้าย Load Barrier จะแก้ไข Pointer ให้ทันทีในระดับฮาร์ดแวร์โดยไม่ต้องหยุดแอปพลิเคชัน
- **Generational ZGC ใน Java 21 (JEP 439):** รวมพลังระหว่างอัลกอริทึม Concurrent ของ ZGC เข้ากับสมมติฐาน Generational ทำให้ประหยัดพลังงาน CPU และรองรับ Throughput ได้สูงขึ้นมหาศาล

### ตารางเปรียบเทียบการเลือก GC ในงาน Production:
| คุณสมบัติ | G1GC | Generational ZGC |
|---|---|---|
| **เป้าหมายหลัก** | Balanced Throughput & Latency | Ultra-Low Latency (Real-time) |
| **STW Pause Time** | 50ms – 200ms (ตั้งค่าได้) | **< 1ms เสมอ** (คงที่ทุกขนาด Heap) |
| **การใช้ CPU Overhead** | ต่ำถึงปานกลาง | ปานกลาง (เพราะทำ Concurrent มากกว่า) |
| **ขนาด Heap ที่เหมาะสม** | 4 GB ถึง 32 GB | 8 GB ถึง 16 Terabytes |
| **การเปิดใช้งาน** | Default (ไม่ต้องระบุ) | \`-XX:+UseZGC -XX:+ZGenerational\` |`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Java 21: การตรวจวัด Garbage Collection Metrics และพฤติกรรม Heap
// =================================================================

import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.ArrayList;
import java.util.List;

public class GarbageCollectorDiagnostics {

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("   IT Academy Java 21 GC & Memory Profiling Engine");
        System.out.println("==================================================");

        // 1. ตรวจสอบ Garbage Collectors ที่กำลังทำงานใน JVM
        List<GarbageCollectorMXBean> gcBeans = ManagementFactory.getGarbageCollectorMXBeans();
        System.out.println("Active Garbage Collectors in Runtime:");
        for (GarbageCollectorMXBean gc : gcBeans) {
            System.out.printf(" - Name: %-25s | Total Collections: %4d | Accumulated Pause Time: %d ms\n",
                gc.getName(), gc.getCollectionCount(), gc.getCollectionTime());
        }

        // 2. จำลองการสร้าง Short-lived Objects (Eden Allocation & GC Pressure)
        System.out.println("\n[SIMULATION] Allocating 1,000,000 transient objects in Eden Space...");
        long startTime = System.currentTimeMillis();

        for (int i = 0; i < 1_000_000; i++) {
            // อ็อบเจกต์เหล่านี้จะกลายเป็นขยะทันทีหลังจบลูป
            String payload = "Transient-Session-Token-" + i;
        }

        long elapsedTime = System.currentTimeMillis() - startTime;
        System.out.printf("Allocation benchmark completed in: %d ms\n", elapsedTime);

        // 3. ตรวจสอบสถิติ GC หลังรัน Benchmark
        System.out.println("\n--- Post-Execution GC Telemetry ---");
        for (GarbageCollectorMXBean gc : gcBeans) {
            System.out.printf(" - %-25s | Collections: %4d | Total STW Pause: %d ms\n",
                gc.getName(), gc.getCollectionCount(), gc.getCollectionTime());
        }

        System.out.println("\nRecommendation for Production Flags:");
        System.out.println(" > For General Enterprise API : -XX:+UseG1GC -XX:MaxGCPauseMillis=100");
        System.out.println(" > For Low-Latency FinTech API: -XX:+UseZGC -XX:+ZGenerational");
    }
}`,
        description: "สคริปต์ตรวจวัดข้อมูล telemetry ของ Garbage Collector ใน JVM แบบเรียลไทม์"
      },
      challenge: {
        description: "เขียนคำสั่ง Java ตรวจสอบรายชื่อ Garbage Collector ทั้งหมดในระบบจาก ManagementFactory แล้วพิมพ์เฉพาะชื่อ GC ที่มีคำว่า 'ZGC' หรือ 'G1'",
        startingCode: `import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;

public class GcFilterChallenge {
    public static void main(String[] args) {
        // TODO: วนลูปอ่าน GC Beans และพิมพ์เฉพาะตัวที่เป็น G1 หรือ ZGC
    }
}`,
        solution: `import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;

public class GcFilterChallenge {
    public static void main(String[] args) {
        ManagementFactory.getGarbageCollectorMXBeans().stream()
            .map(GarbageCollectorMXBean::getName)
            .filter(name -> name.contains("G1") || name.contains("ZGC"))
            .forEach(name -> System.out.println("Found Target GC: " + name));
    }
}`
      },
      quiz: [
        {
          id: "java-q4-1",
          question: "สมมติฐาน Weak Generational Hypothesis กล่าวถึงพฤติกรรมของอ็อบเจกต์ในภาษา Java ไว้อย่างไร?",
          options: [
            "อ็อบเจกต์ทุกตัวมีอายุการใช้งานเฉลี่ย 1 ชั่วโมงเท่ากันทั้งหมด",
            "อ็อบเจกต์ส่วนใหญ่จะหมดอายุขัย (กลายเป็นขยะ) อย่างรวดเร็วหลังถูกสร้างขึ้น และอ็อบเจกต์ที่มีอายุยืนยาวจะไม่ค่อยชี้กลับไปหาอ็อบเจกต์รุ่นใหม่",
            "อ็อบเจกต์ใน Java จะไม่มีวันตายจนกว่าจะปิดเครื่อง",
            "อ็อบเจกต์ในภาษา Java ทั้งหมดจัดสรรอยู่บน CPU Register เท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "Weak Generational Hypothesis ระบุว่าอ็อบเจกต์ส่วนใหญ่ที่แอปพลิเคชันสร้างขึ้นมีอายุสั้นมาก (เช่น ตัวแปรชั่วคราวในฟังก์ชัน) จึงคุ้มค่ามากที่จะแบ่งหน่วยความจำเป็น Young Gen เพื่อเก็บกวาดอ็อบเจกต์ใหม่โดยไม่ต้องสแกนทั้ง Heap"
        },
        {
          id: "java-q4-2",
          question: "จุดเด่นที่สำคัญที่สุดของ ZGC (Z Garbage Collector) ใน Java 21 คือข้อใด?",
          options: [
            "ลดขนาดไฟล์ซอร์สโค้ดให้เหลือ 1 บรรทัด",
            "ควบคุม Stop-The-World (STW) Pause Times ให้น้อยกว่า 1 มิลลิวินาทีเสมอ ไม่ว่า Heap จะมีขนาดใหญ่เพียงใด (สูงสุด 16 TB)",
            "บังคับให้แอปพลิเคชันทำงานแบบ Single-thread เสมอ",
            "ยกเลิกการใช้ RAM และเปลี่ยนไปใช้ Harddisk ทั้งหมด"
          ],
          correctAnswer: 1,
          explanation: "ZGC ใช้เทคโนโลยี Colored Pointers และ Load Barriers ทำให้การย้ายตำแหน่งหน่วยความจำทำไปพร้อมกับที่แอปพลิเคชันทำงาน (Concurrent Phase) ส่งผลให้ STW Pause สั้นกว่า 1 มิลลิวินาที แม้กับ Heap ระดับหลายเทราไบต์"
        },
        {
          id: "java-q4-3",
          question: "กลไก TLAB (Thread-Local Allocation Buffer) ใน JVM ช่วยเพิ่มประสิทธิภาพในการสร้างอ็อบเจกต์ (new) อย่างไร?",
          options: [
            "ช่วยดาวน์โหลดคลาสผ่านเครือข่ายเร็วขึ้น",
            "จัดสรรพื้นที่บัฟเฟอร์ส่วนตัวบน Eden Space ให้แต่ละเธรด ทำให้จองแรมด้วยการเลื่อน Pointer ได้ทันทีโดยไม่ต้องแย่ง Lock กับเธรดอื่น",
            "บีบอัดภาพหน้าจอของแอปพลิเคชัน",
            "ป้องกันไม่ให้เธรดทำงานพร้อมกันเกิน 2 เธรด"
          ],
          correctAnswer: 1,
          explanation: "หากไม่มี TLAB ทุกครั้งที่เธรดสร้าง Object จะต้องแย่ง Lock เพื่อจองพื้นที่บน Heap ส่วนกลาง TLAB จึงมอบพื้นที่เฉพาะตัวบน Eden ให้แต่ละเธรด ทำให้จองหน่วยความจำได้แบบ Lock-free (Bump-the-pointer) ที่รวดเร็วเทียบเท่าการจัดสรรบน Stack"
        }
      ]
    },
    {
      id: "java-5",
      title: "Concurrency ยุคใหม่: Virtual Threads (Project Loom JEP 444) ใน Java 21",
      description: "บอกลาปัญหา Reactive Complexity และ Thread Pool Exhaustion: ทำความเข้าใจ Platform Threads (OS Threads) ปะทะ Virtual Threads (M:N User-mode Scheduling), Continuation Mechanism, Pinning Pitfalls (synchronized vs ReentrantLock)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Concurrency ยุคใหม่: Virtual Threads (Project Loom) ใน Java 21

นวัตกรรมที่ยิ่งใหญ่ที่สุดของ Java 21 ในรอบ 20 ปี คือ **Virtual Threads (JEP 444)** ภายใต้โครงการ Project Loom ซึ่งเปลี่ยนกระบวนทัศน์การพัฒนาซอฟต์แวร์ Concurrency ขนาดใหญ่ไปตลอดกาล

---

## 1. ปัญหาของ Platform Threads (OS Threads แบบดั้งเดิม)
ใน Java ดั้งเดิม:
- **1 Java Thread = 1 Operating System Thread (ความสัมพันธ์แบบ 1:1)**
- **ข้อจำกัดรุนแรง:**
  - OS Thread กินเนื้อที่ Stack ในหน่วยความจำสูงมาก (~1 MB ต่อเธรด)
  - เซิร์ฟเวอร์ขนาดใหญ่สามารถรัน Platform Threads ได้จำกัดเพียง **2,000 – 5,000 เธรด** หากสร้างมากกว่านั้นหน่วยความจำจะเต็ม (\`OutOfMemoryError: unable to create native thread\`)
  - **I/O Blocking Waste:** เมื่อเธรดส่งคำสั่ง Query Database หรือรอคำตอบจาก Microservice ตัว OS Thread จะถูกระงับการทำงาน (Blocked) ทำให้นั่งกินแรมไปเปล่าๆ โดยไม่ได้ใช้ประโยชน์จาก CPU

---

## 2. อัศวินขี่ม้าขาว: Virtual Threads (ความสัมพันธ์แบบ M:N)
Virtual Threads คือ **Lightweight User-mode Threads** ที่จัดการโดย JVM Runtime โดยตรง ไม่ได้ผูกติดกับ OS Thread:
- กินหน่วยความจำเริ่มต้นเพียง **ไม่กี่ร้อยไบต์ (Bytes)**
- สามารถสร้างขึ้นมาได้นับ **หลักล้านเธรด (Millions of Threads)** พร้อมกันบนเครื่องแล็ปท็อปธรรมดา!
- **Non-blocking Magic:** เมื่อ Virtual Thread ทำงานที่ต้องรอ I/O (เช่น \`socket.read()\`, \`Thread.sleep()\`) JVM จะทำการ **Unmount** สภาพแวดล้อมของเธรดนั้น (Continuation) ออกจาก OS Carrier Thread ทันที แล้วนำ Carrier Thread ไปรันงานอื่น เมื่อข้อมูล I/O ตอบกลับมา JVM จะนำ Virtual Thread นั้นกลับมา **Mount** ทำงานต่ออัตโนมัติ

\`\`\`text
+--------------------------------------------------------------------------+
|  Millions of Virtual Threads (Task-per-Request Pattern)                 |
|  [ VT 1 ]  [ VT 2 ]  [ VT 3 ]  [ VT 4 ] ... [ VT 1,000,000 ]             |
+--------------------------------------------------------------------------+
                                     |
                          M:N Scheduler (ForkJoinPool)
                                     |
+--------------------------------------------------------------------------+
|  Few OS Carrier Threads (เท่ากับจำนวน CPU Cores เช่น 8 หรือ 16 Cores)       |
|  [ Carrier Thread 1 ]   [ Carrier Thread 2 ]   [ Carrier Thread 3 ]      |
+--------------------------------------------------------------------------+
\`\`\`

---

## 3. รูปแบบการเขียนโค้ด: Simple Synchronous Code
บอกลารูปแบบโค้ดที่ซับซ้อนและอ่านยากของ Reactive Programming (Mono, Flux, CompletableFuture Chaining) เราสามารถกลับมาเขียนโค้ดแบบเส้นตรงเรียบง่าย (Sequential & Blocking Style) แต่ได้ Throughput สูงเท่ากับ Reactive:

\`\`\`java
// สร้าง Executor ที่สร้าง Virtual Thread ใหม่ 1 ตัวต่อ 1 Request
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 100_000).forEach(i -> {
        executor.submit(() -> {
            // โค้ด Blocking ปกติ แต่วงการไม่พังและไม่กิน OS Thread!
            Thread.sleep(Duration.ofSeconds(1));
            return fetchUserDataFromDatabase(i);
        });
    });
} // try-with-resources จะรอให้ทั้ง 100,000 tasks ทำงานเสร็จสมบูรณ์อัตโนมัติ
\`\`\`

---

## 4. กับดักที่ต้องระวัง: Thread Pinning!
แม้ Virtual Threads จะทรงพลัง แต่มีข้อควรระวังสำคัญคือ **Pinning**:
- **Pinning คืออะไร:** ภาวะที่ Virtual Thread ไม่สามารถ Unmount ตัวเองออกจาก OS Carrier Thread ได้เมื่อเจอ I/O Blocking ทำให้ Carrier Thread นั้นค้างไปด้วย
- **สาเหตุของ Pinning:**
  1. การรันโค้ด Blocking ภายในบล็อก \`synchronized\` (เช่น \`synchronized(lock) { Thread.sleep(1000); }\`)
  2. การเรียกใช้ Native Methods (JNI)
- **แนวทางแก้ไข (Best Practice):**  
  เปลี่ยนจากการใช้คีย์เวิร์ด \`synchronized\` มาเป็น **\`java.util.concurrent.locks.ReentrantLock\`** ซึ่งรองรับการ Unmount ของ Virtual Threads ได้ 100%!`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Java 21: เปรียบเทียบประสิทธิภาพ Platform Threads ปะทะ Virtual Threads
// =================================================================

import java.time.Duration;
import java.time.Instant;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;

public class VirtualThreadPerformanceDemo {

    public static void main(String[] args) throws InterruptedException {
        System.out.println("==================================================");
        System.out.println("   IT Academy Java 21 Virtual Threads (Loom) Demo ");
        System.out.println("==================================================");

        final int TASK_COUNT = 10_000;
        final AtomicInteger completedCounter = new AtomicInteger(0);

        System.out.printf("[BENCHMARK] Spawning %,d concurrent tasks with Virtual Threads...\n", TASK_COUNT);
        Instant start = Instant.now();

        // 1. ใช้งาน newVirtualThreadPerTaskExecutor()
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 0; i < TASK_COUNT; i++) {
                final int taskId = i;
                executor.submit(() -> {
                    try {
                        // จำลอง Network I/O Latency เช่น การเรียก REST API 100ms
                        Thread.sleep(Duration.ofMillis(100));
                        completedCounter.incrementAndGet();
                        
                        if (taskId == 0 || taskId == TASK_COUNT - 1) {
                            System.out.printf(" - Task #%d completed on: %s\n", 
                                taskId, Thread.currentThread());
                        }
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
            }
        } // executor.close() จะบล็อกรอจนกว่า Virtual Threads ทั้ง 10,000 ตัวจะทำงานเสร็จ

        Instant finish = Instant.now();
        long totalDurationMs = Duration.between(start, finish).toMillis();

        System.out.println("\n--- Benchmark Telemetry Results ---");
        System.out.printf("Total Concurrent Tasks : %,d tasks\n", completedCounter.get());
        System.out.printf("Total Elapsed Execution: %,d ms\n", totalDurationMs);
        System.out.println("Throughput Efficiency   : รันงาน 10,000 งานพร้อมกันสำเร็จในเวลาเพียงเสี้ยววินาที!");
    }
}`,
        description: "สคริปต์สาธิตการรัน 10,000 Concurrent Tasks พร้อมกันด้วย Virtual Threads ใน Java 21"
      },
      challenge: {
        description: "เขียนคำสั่ง Java สร้าง Virtual Thread เดี่ยวด้วยคำสั่ง Thread.ofVirtual().start(...) เพื่อพิมพ์ข้อความชื่อของเธรดปัจจุบันออกมา",
        startingCode: `public class SingleVirtualThreadChallenge {
    public static void main(String[] args) throws InterruptedException {
        // TODO: สร้างและรัน Virtual Thread
        
        Thread.sleep(100);
    }
}`,
        solution: `public class SingleVirtualThreadChallenge {
    public static void main(String[] args) throws InterruptedException {
        Thread vt = Thread.ofVirtual().name("worker-vt-1").start(() -> {
            System.out.println("Running inside: " + Thread.currentThread());
        });
        vt.join();
    }
}`
      },
      quiz: [
        {
          id: "java-q5-1",
          question: "Virtual Threads ใน Java 21 แตกต่างจาก Platform Threads เดิมอย่างไร?",
          options: [
            "Virtual Threads เป็นเธรดเสมือนน้ำหนักเบา (User-mode) ที่จัดการโดย JVM กินแรมไม่กี่ร้อยไบต์ ทำให้สร้างได้นับล้านตัวพร้อมกันโดยไม่ผูกมัดกับ 1 OS Thread ตลอดเวลา",
            "Virtual Threads ทำงานได้เฉพาะบน CPU แบบ 32-bit เท่านั้น",
            "Virtual Threads ไม่อนุญาตให้เขียนคำสั่ง if-else",
            "Virtual Threads ทำให้โปรแกรมรันช้าลง 10 เท่าเพื่อประหยัดไฟ"
          ],
          correctAnswer: 0,
          explanation: "Virtual Threads เป็น Lightweight Threads ที่จัดการโดย JVM Runtime (M:N Scheduler) เมื่อเกิด I/O Blocking เธรดจะ Unmount ออกจาก Carrier Thread ทำให้เซิร์ฟเวอร์สามารถสร้าง Virtual Threads ได้หลายล้านตัวโดยไม่เปลืองหน่วยความจำ OS"
        },
        {
          id: "java-q5-2",
          question: "ปรากฏการณ์ 'Thread Pinning' ในการใช้งาน Virtual Threads เกิดจากสาเหตุใด?",
          options: [
            "เกิดจากการรันโปรแกรมบน Linux",
            "เกิดจากการเรียกคำสั่ง Blocking I/O ภายในบล็อก synchronized หรือ Native Methods (JNI) ทำให้ Virtual Thread ไม่สามารถ Unmount ออกจาก OS Carrier Thread ได้",
            "เกิดจากการใช้หน่วยความจำเกิน 100 GB",
            "เกิดจากการตั้งชื่อเธรดด้วยภาษาไทย"
          ],
          correctAnswer: 1,
          explanation: "Thread Pinning เกิดขึ้นเมื่อ Virtual Thread ถือครอง Monitor Lock (synchronized) หรืออยู่ใน Native Call ซึ่ง JVM จะไม่สามารถดึงเธรดออกจาก OS Carrier Thread ได้ วิธีแก้ปัญหามาตรฐานคือเปลี่ยนไปใช้ ReentrantLock แทน synchronized"
        },
        {
          id: "java-q5-3",
          question: "กระบวนทัศน์การเขียนโค้ดแบบใดที่ Virtual Threads สนับสนุนให้โปรแกรมเมอร์นำกลับมาใช้เพื่อทดแทน Reactive Code ที่ซับซ้อน?",
          options: [
            "Simple Synchronous Blocking Code (Thread-per-Request)",
            "Callback Hell",
            "Assembly Instruction Mixing",
            "Goto Statement Pattern"
          ],
          correctAnswer: 0,
          explanation: "Virtual Threads ช่วยให้เราสามารถเขียนโค้ดแบบ Synchronous เรียบง่าย ตรงไปตรงมา (Blocking style) บรรทัดต่อบรรทัด โดยได้ Throughput มหาศาลระดับเดียวกับ Reactive Programming โดยไม่ต้องทนทุกข์กับความซับซ้อนของ Reactive APIs"
        }
      ]
    },
    {
      id: "java-6",
      title: "สถาปัตยกรรม Spring Boot 3 Framework: IoC Container และ Dependency Injection",
      description: "รากฐานของ Enterprise Java Web: การทำงานของ ApplicationContext, Dependency Injection (@Autowired, Constructor Injection), Component Scanning, Bean Lifecycle และ Auto-configuration ภายใต้ Spring Boot 3 & Jakarta EE",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม Spring Boot 3 Framework: IoC และ Dependency Injection

**Spring Boot 3** (ขับเคลื่อนบน Spring Framework 6 และ Java 17/21) คือเฟรมเวิร์กมาตรฐานอันดับ 1 ของโลกสำหรับการสร้าง Enterprise Backend และ Cloud-Native Microservices

---

## 1. ปรัชญา Inversion of Control (IoC) และ Dependency Injection (DI)
- **Traditional Approach (ควบคุมเอง):** คลาส \`OrderService\` ต้องเป็นผู้สร้าง \`PaymentGateway\` ด้วยคำสั่ง \`new PaypalPaymentGateway()\` ส่งผลให้คลาสผูกมัดกันแน่น (Tight Coupling) ทดสอบ Unit Test ยาก
- **IoC Approach (ส่งมอบการควบคุม):** คลาส \`OrderService\` เพียงแค่ประกาศว่าตนเองต้องการ \`PaymentGateway\` (Interface) แล้วปล่อยให้ **Spring IoC Container** เป็นผู้ฉีด (Inject) อ็อบเจกต์ที่พร้อมใช้งานเข้ามาให้เอง (Loose Coupling)

\`\`\`java
// สถาปัตยกรรม Modern Spring Boot: ใช้ Constructor Injection เสมอ!
@Service
public class OrderService {

    private final PaymentGateway paymentGateway;
    private final NotificationService notificationService;

    // Spring Boot 3 จะฉีด Dependencies ผ่าน Constructor ให้อัตโนมัติ (ไม่ต้องใส่ @Autowired)
    public OrderService(PaymentGateway paymentGateway, NotificationService notificationService) {
        this.paymentGateway = paymentGateway;
        this.notificationService = notificationService;
    }

    public void checkout(Order order) {
        paymentGateway.charge(order.totalAmount());
        notificationService.sendReceipt(order.customerEmail());
    }
}
\`\`\`

---

## 2. Spring Bean Lifecycle และ Scope
อ็อบเจกต์ทุกตัวที่บริหารจัดการโดย Spring เรียกว่า **Spring Bean**:
- **Bean Scopes ยอดนิยม:**
  - **\`singleton\` (Default):** มีเพียง 1 Instance เดียวตลอดทั้ง ApplicationContext (Stateless Service แนะนำ)
  - **\`prototype\`:** สร้าง Instance ใหม่ทุกครั้งที่มีการเรียกขอ (Injection)
  - **\`request\` / \`session\`:** สำหรับ Web Application (สร้างตาม HTTP Request หรือ Session)

### วงจรชีวิตของ Bean (Lifecycle Callback):
\`\`\`text
1. Instantiate Bean Instance (Constructor)
2. Populate Properties (Dependency Injection)
3. BeanNameAware / ApplicationContextAware
4. @PostConstruct Method (Initialization Logic)
5. Bean Ready for Service
6. @PreDestroy Method (Cleanup Logic on Shutdown)
\`\`\`

---

## 3. Spring Boot Auto-Configuration เบื้องหลังความมหัศจรรย์
ทำไมเพียงแค่แปะ \`@SpringBootApplication\` แอปพลิเคชันจึงมี Embedded Tomcat Server, JSON Serializer, และ Database Connection Pool พร้อมทำงานทันที?
- คำตอบคือ **Conditional Configuration** เช่น \`@ConditionalOnClass\`, \`@ConditionalOnMissingBean\`
- เมื่อ Spring Boot ตรวจพบ Library ใน Classpath (เช่น \`spring-boot-starter-web\`) ระบบจะทำการตั้งค่าคอนฟิกพื้นฐานระดับ Production ให้อัตโนมัติ โดยโปรแกรมเมอร์สามารถเขียน Bean ทับ (Override) ได้อย่างอิสระ`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Spring Boot 3: โครงสร้าง IoC, Dependency Injection และ REST Controller
// =================================================================

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import java.util.*;

@SpringBootApplication
public class EnterpriseApplication {

    public static void main(String[] args) {
        System.out.println("Bootstrapping Spring Boot 3 Enterprise Context...");
        // ใน Production รันด้วย: SpringApplication.run(EnterpriseApplication.class, args);
    }
}

// 1. Data Model (Java 21 Record DTO)
record CourseRegistration(String studentId, String courseCode, String status) {}

// 2. Business Service Interface & Implementation (Loose Coupling)
interface RegistrationService {
    CourseRegistration register(String studentId, String courseCode);
}

@Service
class RegistrationServiceImpl implements RegistrationService {
    
    @Override
    public CourseRegistration register(String studentId, String courseCode) {
        // Business logic validation
        return new CourseRegistration(studentId, courseCode, "CONFIRMED_SUCCESS");
    }
}

// 3. REST Controller (Constructor Injection Pattern)
@RestController
@RequestMapping("/api/v1/registrations")
class RegistrationController {

    private final RegistrationService registrationService;

    // Best Practice: Constructor Injection แทน Field Injection (@Autowired)
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public ResponseEntity<CourseRegistration> createRegistration(
            @RequestParam String studentId, 
            @RequestParam String courseCode) {
        
        CourseRegistration result = registrationService.register(studentId, courseCode);
        return ResponseEntity.ok(result);
    }
}`,
        description: "โครงสร้างมาตรฐานของ Spring Boot 3: Controller, Service และ Record DTO ด้วย Constructor Injection"
      },
      challenge: {
        description: "เขียนคลาส PaymentService ที่มีเมธอด pay(double amount) พร้อมระบุ Annotation @Service ของ Spring Framework",
        startingCode: `// TODO: กำหนดคลาส PaymentService เป็น Spring Service Bean
public class PaymentService {
    public boolean pay(double amount) {
        return amount > 0;
    }
}`,
        solution: `import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    public boolean pay(double amount) {
        return amount > 0;
    }
}`
      },
      quiz: [
        {
          id: "java-q6-1",
          question: "เพราะเหตุใดวิศวกรซอฟต์แวร์จึงแนะนำให้ใช้ Constructor Injection แทน Field Injection (@Autowired บนตัวแปรโดยตรง) ใน Spring Boot?",
          options: [
            "เพราะ Constructor Injection ทำให้ตัวแปรสามารถประกาศเป็น final ได้ ส่งผลให้เป็น Immutable, ป้องกัน NullPointerException และทำให้ทำ Unit Test ได้ง่ายโดยไม่ต้องพึ่งพา Spring IoC Container",
            "เพราะ Field Injection ทำให้คอมพิวเตอร์เสียพื้นที่ฮาร์ดดิสก์เพิ่มขึ้น 50%",
            "เพราะ Constructor Injection ใช้หน่วยความจำน้อยกว่า 100 เท่า",
            "เพราะ Spring Boot 3 สั่งลบ Annotation @Autowired ทิ้งทั้งหมดแล้ว"
          ],
          correctAnswer: 0,
          explanation: "Constructor Injection เป็น Best Practice สูงสุดในอุตสาหกรรม เพราะช่วยให้ Dependencies เป็น final (ไม่สามารถเปลี่ยนแปลงได้หลังสร้างเสร็จ), บังคับให้ส่ง Dependencies ครบตั้งแต่ตอนสร้าง, และสามารถ Mock dependencies ในการเขียน Unit Test ด้วย new Service(mockDep) ได้โดยไม่ต้องเปิด Spring Context"
        },
        {
          id: "java-q6-2",
          question: "Bean Scope เริ่มต้น (Default Scope) ของ Spring Framework คือข้อใด?",
          options: [
            "prototype (สร้างตัวใหม่ทุกครั้ง)",
            "singleton (มี Instance เดียวตลอดทั้ง ApplicationContext)",
            "session (สร้าง 1 ตัวต่อ 1 ผู้ใช้งานเว็บ)",
            "thread (สร้าง 1 ตัวต่อ 1 CPU Core)"
          ],
          correctAnswer: 1,
          explanation: "Default Scope ของ Spring Bean คือ singleton โดย Spring IoC Container จะสร้างและเก็บอ็อบเจกต์ไว้เพียง 1 instance เดียวตลอดอายุของแอปพลิเคชัน เพื่อความประหยัดหน่วยความจำและประสิทธิภาพสูงสุด (จึงควรออกแบบ Service ให้เป็น Stateless)"
        },
        {
          id: "java-q6-3",
          question: "Annotation ใดใน Spring Framework ที่ใช้ระบุเมธอดที่ต้องการให้ทำงานทันทีหลัง Dependency Injection เสร็จสมบูรณ์ (Initialization Callback)?",
          options: [
            "@PostConstruct",
            "@PreDestroy",
            "@OnStart",
            "@ExecuteFirst"
          ],
          correctAnswer: 0,
          explanation: "@PostConstruct (จาก Jakarta Annotations) ใช้ระบุเมธอดที่ต้องการให้ Spring เรียกทำงานทันทีหลังจาก Bean ถูกสร้างและฉีด Dependencies ครบถ้วนแล้ว เหมาะสำหรับงานเตรียมความพร้อมเบื้องต้น เช่น โหลดข้อมูลแคช"
        }
      ]
    },
    {
      id: "java-7",
      title: "Data Access ด้วย Spring Data JPA และ Hibernate ORM",
      description: "การเชื่อมต่อฐานข้อมูลระดับองค์กร: สถาปัตยกรรม Object-Relational Mapping (ORM), Entity Mapping, Spring Data Repositories, Query Methods, JPQL, DTO Projections และการป้องกันปัญหา N+1 Query Problem",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Data Access ด้วย Spring Data JPA และ Hibernate ORM

ในงานพัฒนาระบบ Backend ระดับ Enterprise การจัดการข้อมูลในฐานข้อมูลเชิงสัมพันธ์ (Relational Database) ต้องอาศัย **Spring Data JPA** ซึ่งครอบทับ **Hibernate ORM** เพื่อลดการเขียน SQL boilerplate และการแปลงข้อมูลระหว่าง Object กับ Database Tables

---

## 1. สถาปัตยกรรม Spring Data JPA
\`\`\`text
+-------------------------------------------------------------+
|                     Spring Data JPA                         |
|     (JpaRepository<T, ID>, CrudRepository, Query Methods)   |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                      Hibernate ORM                          |
|         (EntityManager, Session, Persistence Context)       |
+-------------------------------------------------------------+
                              |
+-------------------------------------------------------------+
|                     JDBC Driver                             |
|          (HikariCP Connection Pool -> PostgreSQL / MySQL)   |
+-------------------------------------------------------------+
\`\`\`

---

## 2. การสร้าง Entity และความสัมพันธ์ (Relationships)
\`\`\`java
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 20)
    private String studentCode;

    @Column(nullable = false, length = 100)
    private String fullName;

    // ความสัมพันธ์ One-to-Many: 1 นักเรียนมีหลายใบเสร็จ
    // Best Practice: ใช้ FetchType.LAZY เสมอเพื่อประสิทธิภาพ!
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Enrollment> enrollments = new ArrayList<>();

    // Constructors, Getters, Setters...
}
\`\`\`

---

## 3. มหาอำนาจของ Spring Data Repositories
เพียงแค่ประกาศ Interface สืบทอดจาก \`JpaRepository\` Spring Data จะสร้างคำสั่ง SQL ให้โดยอัตโนมัติ:

\`\`\`java
public interface StudentRepository extends JpaRepository<Student, Long> {

    // Derived Query Method: Spring จะแปลงชื่อเมธอดเป็น SQL อัตโนมัติ!
    List<Student> findByFullNameContainingIgnoreCase(String name);

    Optional<Student> findByStudentCode(String studentCode);

    // Custom JPQL Query
    @Query("SELECT s FROM Student s WHERE s.gpa >= :minGpa ORDER BY s.gpa DESC")
    List<Student> findTopHonorStudents(@Param("minGpa") double minGpa);
}
\`\`\`

---

## 4. ปัญหาคลาสสิก N+1 Query Problem และวิธีพิฆาต
**ปัญหา N+1 คืออะไร:**  
เมื่อต้องการดึงนักเรียน 100 คน (\`SELECT * FROM students\` -> 1 Query) แต่เมื่อโค้ดวนลูปอ่าน \`student.getEnrollments()\` ที่เป็น LAZY โค้ดจะยิงคำสั่ง SQL ย่อยไปหาตาราง enrollments อีก 100 ครั้ง (\`N Queries\`) รวมเป็น **1 + 100 = 101 Queries!** ทำให้ Database Server รับโหลดมหาศาลจนระบบล่ม

**ทางออกระดับมืออาชีพ:**
1. **JOIN FETCH ใน JPQL:**
   \`\`\`java
   @Query("SELECT s FROM Student s LEFT JOIN FETCH s.enrollments")
   List<Student> findAllWithEnrollments();
   \`\`\`
2. **\`@EntityGraph\`:**  
   ระบุความสัมพันธ์ที่ต้องการให้ Eager Load เฉพาะใน Query นั้นๆ โดยไม่ต้องแก้ Entity หลัก`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Spring Data JPA: Entity, Repository และ DTO Projection
// =================================================================

import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Entity
@Table(name = "academic_courses")
class AcademicCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String courseCode;

    @Column(nullable = false)
    private String title;

    private int creditUnits;

    // Default Constructor required by JPA
    protected AcademicCourse() {}

    public AcademicCourse(String courseCode, String title, int creditUnits) {
        this.courseCode = courseCode;
        this.title = title;
        this.creditUnits = creditUnits;
    }

    public String getCourseCode() { return courseCode; }
    public String getTitle() { return title; }
    public int getCreditUnits() { return creditUnits; }
}

// DTO Projection สำหรับดึงเฉพาะคอลัมน์ที่ต้องการ (ประหยัด Memory และ Network)
record CourseSummaryDTO(String courseCode, String title) {}

@Repository
interface AcademicCourseRepository extends JpaRepository<AcademicCourse, Long> {

    // 1. Derived Query Method
    List<AcademicCourse> findByCreditUnitsGreaterThan(int credits);

    // 2. High-performance DTO Projection Query
    @Query("SELECT new CourseSummaryDTO(c.courseCode, c.title) FROM AcademicCourse c WHERE c.creditUnits >= 3")
    List<CourseSummaryDTO> findCoreCurriculumSummaries();
}`,
        description: "ตัวอย่างการสร้าง JPA Entity, DTO Projection และ Repository Query ใน Spring Data JPA"
      },
      challenge: {
        description: "เขียน Interface UserRepository ที่สืบทอดจาก JpaRepository<User, Long> พร้อมเพิ่ม Derived Query Method ค้นหาตามฟิลด์ email (findByEmail)",
        startingCode: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// TODO: กำหนด UserRepository
public interface UserRepository {
    // เพิ่มเมธอด findByEmail
}`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}`
      },
      quiz: [
        {
          id: "java-q7-1",
          question: "ปัญหา N+1 Query Problem ใน JPA / Hibernate เกิดจากสาเหตุใด?",
          options: [
            "การคำนวณสูตรคณิตศาสตร์ N+1 ใน Java ผิดพลาด",
            "เกิดจากการดึงข้อมูลหลัก 1 ครั้ง (1 Query) แต่เมื่อเข้าถึงข้อมูลความสัมพันธ์แบบ Lazy ใน Loop ระบบจะยิงคำสั่ง SQL แยกไปดึงทีละรายการอีก N ครั้ง ส่งผลให้เกิด Query มหาศาล",
            "เกิดจากสาย LAN ชำรุด",
            "เกิดจากการสร้างตารางฐานข้อมูลเกิน 10 ตาราง"
          ],
          correctAnswer: 1,
          explanation: "N+1 Problem เกิดขึ้นเมื่อแอปพลิเคชันยิง 1 Query เพื่อดึงข้อมูลแม่ (Parent) แต่เมื่อโค้ดวนลูปเข้าถึงความสัมพันธ์ Lazy Loading ระบบต้องยิง SQL ย่อยอีก N ครั้งเพื่อดึงลูกของแต่ละรายการ แก้ไขได้ด้วยการใช้ JOIN FETCH หรือ @EntityGraph"
        },
        {
          id: "java-q7-2",
          question: "ทำไมใน JPA จึงแนะนำให้ตั้งค่า FetchType.LAZY ในความสัมพันธ์แบบ @OneToMany หรือ @ManyToMany เสมอ?",
          options: [
            "เพื่อให้ Hibernate ปฏิเสธการบันทึกข้อมูล",
            "เพื่อป้องกันไม่ให้ระบบดึงข้อมูลลูกทั้งหมดขึ้นมาเก็บใน RAM โดยไม่จำเป็น ซึ่งจะทำให้ระบบช้าและหน่วยความจำล้น",
            "เพื่อให้ข้อมูลเข้ารหัสด้วย MD5",
            "เพื่อสั่งให้ฐานข้อมูลปิดระบบอัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "FetchType.LAZY จะโหลดข้อมูลเฉพาะเมื่อถูกเรียกใช้งานจริง (On-demand) ซึ่งช่วยป้องกันไม่ให้การดึงข้อมูล Entity หลักเผลอไปลากข้อมูลสัมพันธ์ที่อาจมีหลายหมื่นเรคคอร์ดขึ้นมาจองบน Heap Memory โดยไม่จำเป็น"
        },
        {
          id: "java-q7-3",
          question: "DTO Projection ใน Spring Data JPA มีประโยชน์เด่นอย่างไรเมื่อเทียบกับการดึง Entity เต็มรูปแบบ?",
          options: [
            "ทำให้ฐานข้อมูลเปลี่ยนเป็น NoSQL",
            "สกัดเฉพาะคอลัมน์ที่จำเป็นตรงจากฐานข้อมูลเข้าสู่ DTO โดยไม่ต้องโหลด Entity เข้า Persistence Context ทำให้ประหยัด RAM และทำงานเร็วกว่าอย่างมาก",
            "ช่วยเพิ่มสีสันให้กับ Terminal คอนโซล",
            "ป้องกันไม่ให้ผู้ใช้ลบข้อมูลได้"
          ],
          correctAnswer: 1,
          explanation: "DTO Projection (เช่น การใช้ Record หรือ Interface) จะสร้าง SQL ดึงเฉพาะฟิลด์ที่ต้องการโดยตรง (SELECT col1, col2...) และข้ามกระบวนการ Entity Lifecycle / Dirty Checking ของ Hibernate ทำให้ได้ประสิทธิภาพสูงสุดในงาน Read-only"
        }
      ]
    },
    {
      id: "java-8",
      title: "ความปลอดภัยระดับ Enterprise ด้วย Spring Security 6 และ JWT Tokens",
      description: "สถาปัตยกรรมความปลอดภัยสมัยใหม่: SecurityFilterChain, AuthenticationManager, Stateless Session Management, JWT Token Verification, Password Hashing ด้วย BCrypt และ Method Security (@PreAuthorize)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# ความปลอดภัยระดับ Enterprise ด้วย Spring Security 6 และ JWT Tokens

ใน **Spring Security 6** สถาปัตยกรรมความปลอดภัยถูกปรับปรุงใหม่หมดจด โดยยกเลิกคลาส \`WebSecurityConfigurerAdapter\` และเปลี่ยนมาใช้ **SecurityFilterChain Component Pattern** ควบคู่กับระบบยืนยันตัวตนแบบ **Stateless JWT (JSON Web Tokens)**

---

## 1. สถาปัตยกรรม Servlet Filter Chain
เมื่อมี HTTP Request ส่งเข้ามายังแอปพลิเคชัน:
คำขอจะต้องเดินทางผ่าน **DelegatingFilterProxy** และชุดของ **Security Filters** ตามลำดับ:
1. \`CorsFilter\` และ \`CsrfFilter\`
2. \`JwtAuthenticationFilter\` (ตัวกรองที่เราสร้างขึ้นเพื่อดึง Header \`Authorization: Bearer <token>\`)
3. \`UsernamePasswordAuthenticationFilter\`
4. \`AuthorizationFilter\` (ตรวจสอบว่ามี Role / Authority เพียงพอในการเข้าถึง Endpoint นั้นหรือไม่)

---

## 2. การสร้าง SecurityFilterChain ยุคใหม่ (Spring Boot 3)
\`\`\`java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity // เปิดใช้งาน @PreAuthorize บนระดับฟังก์ชัน
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable) // ปิด CSRF เพราะใช้ Stateless JWT
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/swagger-ui/**").permitAll() // เปิดให้สาธารณะเข้าถึง
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")              // เฉพาะ ADMIN
                .anyRequest().authenticated()                                     // ที่เหลือต้องล็อกอิน
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12); // แฮชรหัสผ่านด้วย BCrypt (Work factor = 12)
    }
}
\`\`\`

---

## 3. โครงสร้างและการตรวจสอบ JWT Token
JWT ประกอบด้วย 3 ส่วนที่คั่นด้วยจุด (\`.\`):
- **Header:** อัลกอริทึมการเข้ารหัส เช่น \`{"alg": "HS256", "typ": "JWT"}\`
- **Payload (Claims):** ข้อมูลระบุตัวตน เช่น \`sub\` (User ID), \`roles\`, \`exp\` (วันหมดอายุ)
- **Signature:** ลายเซ็นดิจิทัลที่ถูกเข้ารหัสด้วย Secret Key ของ Server ป้องกันการปลอมแปลง

\`\`\`java
@Component
public class JwtService {

    private final SecretKey signingKey = Keys.hmacShaKeyFor("MY_ULTRA_SECURE_SECRET_KEY_MINIMUM_256_BITS".getBytes());

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
            .subject(userDetails.getUsername())
            .claim("roles", userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList())
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 ชั่วโมง
            .signWith(signingKey)
            .compact();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
\`\`\`

---

## 4. ป้องกันระดับเมธอดด้วย \`@PreAuthorize\`
เพื่อความปลอดภัยแบบ Defense-in-depth เราสามารถล็อกสิทธิ์การเรียกเมธอดเฉพาะบุคคลที่มีสิทธิ์:

\`\`\`java
@Service
public class SalaryService {

    @PreAuthorize("hasRole('HR_MANAGER') or #employeeId == authentication.principal.id")
    public SalarySlip getSalarySlip(Long employeeId) {
        return salaryRepository.findByEmployeeId(employeeId);
    }
}
\`\`\``,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Spring Security 6: JWT Authentication Filter & Password Encryption
// =================================================================

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.List;

public class SecurityDemonstration {

    public static void main(String[] args) {
        System.out.println("=== Spring Security 6 Architecture & Cryptography ===");

        // 1. ทดสอบการเข้ารหัสรหัสผ่านด้วย BCrypt (Salted Hash)
        PasswordEncoder encoder = new BCryptPasswordEncoder(10);
        String rawPassword = "SuperSecretPassword123!";
        
        String hashedPassword1 = encoder.encode(rawPassword);
        String hashedPassword2 = encoder.encode(rawPassword);

        System.out.println("Raw Password       : " + rawPassword);
        System.out.println("BCrypt Hash Run 1  : " + hashedPassword1);
        System.out.println("BCrypt Hash Run 2  : " + hashedPassword2);
        System.out.println("สังเกต: ค่า Hash ทั้งสองรอบต่างกันเพราะสุ่ม Salt ใหม่เสมอ แต่ตรวจสอบผ่านทั้งคู่!");

        boolean matches = encoder.matches(rawPassword, hashedPassword1);
        System.out.println("Password Match Valid: " + matches);

        // 2. จำลองการเซ็ต Authentication เข้าสู่ SecurityContext
        var authorities = List.of(new SimpleGrantedAuthority("ROLE_ADMIN"));
        var authToken = new UsernamePasswordAuthenticationToken("somchai_admin", null, authorities);
        
        SecurityContextHolder.getContext().setAuthentication(authToken);
        
        var currentAuth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("\nAuthenticated Principal: " + currentAuth.getName());
        System.out.println("Assigned Authorities   : " + currentAuth.getAuthorities());
    }
}`,
        description: "ตัวอย่างการทำงานของ BCrypt Password Encoder และ SecurityContextHolder ใน Spring Security 6"
      },
      challenge: {
        description: "เขียนคำสั่ง Java ในการสร้างอ็อบเจกต์ BCryptPasswordEncoder และเข้ารหัสรหัสผ่านข้อความ 'Dev2026!'",
        startingCode: `import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordChallenge {
    public static void main(String[] args) {
        String rawPass = "Dev2026!";
        // TODO: เข้ารหัส rawPass ด้วย BCryptPasswordEncoder
        String hashed = "";
        
        System.out.println("Hashed: " + hashed);
    }
}`,
        solution: `import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordChallenge {
    public static void main(String[] args) {
        String rawPass = "Dev2026!";
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hashed = encoder.encode(rawPass);
        
        System.out.println("Hashed: " + hashed);
    }
}`
      },
      quiz: [
        {
          id: "java-q8-1",
          question: "ทำไมระบบเว็บที่ใช้ JWT Token ในการยืนยันตัวตนจึงนิยมตั้งค่า SessionCreationPolicy.STATELESS?",
          options: [
            "เพื่อให้ Server ไม่ต้องจองหน่วยความจำเก็บ HTTP Session State ของผู้ใช้ เพราะข้อมูลสิทธิ์และตัวตนถูกส่งมาพร้อม Token ในทุกๆ Request ทำให้ระบบ Scale แนวนอนข้ามหลายเซิร์ฟเวอร์ได้ง่าย",
            "เพื่อให้ฐานข้อมูลหยุดทำงาน",
            "เพื่อให้เบราว์เซอร์ไม่สามารถบันทึกคุกกี้ได้",
            "เพื่อลบข้อมูลผู้ใช้ออกจากระบบทุกครั้งที่กด Refresh"
          ],
          correctAnswer: 0,
          explanation: "Stateless Session Management ทำให้เซิร์ฟเวอร์ไม่ต้องแบกรับภาระการเก็บ Session ในหน่วยความจำ เมื่อแอปพลิเคชันขยายเป็นร้อยโหนดหลัง Load Balancer โหนดใดๆ ก็สามารถตรวจสอบ JWT Token ได้ทันทีโดยไม่ต้องแชร์ Session ข้ามเครื่อง"
        },
        {
          id: "java-q8-2",
          question: "เพราะเหตุใด BCrypt Password Encoder จึงสร้างแฮชที่หน้าตาไม่เหมือนกันทุกครั้ง แม้จะเข้ารหัสรหัสผ่านคำเดียวกัน?",
          options: [
            "เพราะฮาร์ดดิสก์เกิด Bad Sector",
            "เพราะ BCrypt มีการสุ่มค่า Salt ใหม่ในทุกครั้งของการเข้ารหัส ป้องกันการโจมตีด้วย Rainbow Tables",
            "เพราะ Spring Security ส่งรหัสผ่านไปสุ่มบน Cloud",
            "เพราะคำสั่ง encode ทำงานผิดพลาด"
          ],
          correctAnswer: 1,
          explanation: "BCrypt ฝัง Cryptographic Salt ที่สุ่มขึ้นใหม่ไว้ในตัว Hash เสมอ ทำให้รหัสผ่านที่เหมือนกันจะได้ Hash ที่ต่างกัน ป้องกันไม่ให้แฮกเกอร์ใช้ตารางแฮชสำเร็จรูป (Rainbow Table) ในการย้อนหารหัสผ่านต้นฉบับได้"
        },
        {
          id: "java-q8-3",
          question: "Annotation @PreAuthorize(\"hasRole('ADMIN')\") ใน Spring Security มีหน้าที่อะไร?",
          options: [
            "อนุญาตให้ผู้ใช้ทุกคนเข้าถึงเมธอดได้โดยไม่ต้องล็อกอิน",
            "ตรวจสอบสิทธิ์ของผู้ใช้งานในระดับเมธอดก่อนจะเริ่มประมวลผล หากผู้ใช้ไม่ได้ถือ Role ADMIN ระบบจะปฏิเสธการเข้าถึงและส่งคืน AccessDeniedException (HTTP 403 Forbidden)",
            "ลบฐานข้อมูลทิ้งเมื่อพบผู้ใช้ทั่วไป",
            "สร้างผู้ดูแลระบบคนใหม่ขึ้นมาอัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "@PreAuthorize ทำงานในระดับ Method Security โดยอาศัย Spring AOP ตัดหน้าก่อนเข้าสู่เมธอด หาก SecurityContextHolder ไม่มี Authority ตามเงื่อนไข จะปฏิเสธการทำงานทันทีเพื่อความปลอดภัยสูงสุด"
        }
      ]
    },
    {
      id: "java-9",
      title: "โปรเจกต์ Enterprise Banking & Academic Transaction API ด้วย Spring Boot 3",
      description: "สร้างสถาปัตยกรรมระดับ Production: ระบบโอนเงินธนาคารและชำระค่าธรรมเนียมการศึกษาแบบ ACID Transactional, Optimistic Locking (@Version) ป้องกัน Race Condition, OpenAPI / Swagger Documentation และ Actuator Metrics",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise Banking & Academic Transaction API

ในบทเรียนสุดท้าย เราจะรวบรวมทุกศาสตร์ของ Modern Java 21 และ Spring Boot 3 มาประกอบเป็นระบบโอนเงินและชำระค่าธรรมเนียมการศึกษาระดับ Enterprise ที่การันตีความปลอดภัยและถูกต้องระดับ 100%

---

## 1. การบริหารจัดการ Transaction ด้วย \`@Transactional\` (ACID Guarantee)
ในระบบการเงิน ข้อผิดพลาดแม้แต่บาทเดียวเป็นสิ่งที่ยอมรับไม่ได้:
- **Atomicity (ความแบ่งแยกไม่ได้):** "ตัดเงินจากบัญชีต้นทางสำเร็จ แต่ระบบพังก่อนเพิ่มเงินให้บัญชีปลายทาง" ต้องถูก **Rollback** ทั้งหมดเสมือนไม่มีอะไรเกิดขึ้น
- ใน Spring Boot เราใช้ \`@Transactional(isolation = Isolation.READ_COMMITTED, rollbackFor = Exception.class)\`

\`\`\`java
@Service
public class BankTransferService {

    private final AccountRepository accountRepo;
    private final AuditLogRepository auditRepo;

    @Transactional(rollbackFor = Exception.class)
    public TransferReceipt transferFunds(Long fromId, Long toId, BigDecimal amount) {
        Account source = accountRepo.findByIdWithLock(fromId)
            .orElseThrow(() -> new AccountNotFoundException("ไม่พบบัญชีต้นทาง"));
            
        Account target = accountRepo.findById(toId)
            .orElseThrow(() -> new AccountNotFoundException("ไม่พบบัญชีปลายทาง"));

        source.debit(amount);
        target.credit(amount);

        accountRepo.save(source);
        accountRepo.save(target);

        auditRepo.log(new AuditEntry("TRANSFER", fromId, toId, amount));
        return new TransferReceipt(UUID.randomUUID().toString(), amount, "COMPLETED");
    }
}
\`\`\`

---

## 2. ป้องกัน Race Condition ด้วย Optimistic Locking (\`@Version\`)
เมื่อมี 2 คำขอพยายามตัดเงินจากบัญชีเดียวกันในเวลาเสี้ยววินาทีเดียวกัน (เช่น กดปุ่มชำระเงินรัวๆ หรือยิง API ขนาน):
หากไม่มีระบบป้องกัน จะเกิดบั๊ก **Lost Update**:
- Spring Data JPA รองรับ **Optimistic Locking** ผ่าน Annotation \`@Version\`:
- เมื่อบันทึกข้อมูล JPA จะตรวจสอบว่าหมายเลข Version ตรงกับตอนที่อ่านขึ้นมาหรือไม่ (\`UPDATE account SET balance=?, version=version+1 WHERE id=? AND version=?\`)
- หากมีเธรดอื่นแก้ไขไปก่อนหน้า จะเกิดข้อยกเว้น **\`OptimisticLockingFailureException\`** ทันที ทำให้ระบบปลอดภัย 100% โดยไม่ต้องล็อกตารางฐานข้อมูลให้ช้า

---

## 3. Production Readiness: Spring Boot Actuator & Health Checks
ระบบโปรดักชันในระดับ Cloud / Kubernetes ต้องการตัววัดสุขภาพ:
- เพิ่ม Dependency \`spring-boot-starter-actuator\`
- ตรวจสอบความพร้อมผ่าน Endpoints:
  - \`/actuator/health\` -> ตรวจสถานะ Database, Disk Space, Liveness/Readiness Probes
  - \`/actuator/metrics\` -> ดู Throughput, JVM Heap, Garbage Collection, และ Virtual Threads Count
  - \`/actuator/prometheus\` -> ส่ง Metrics ไปยัง Grafana Dashboard`,
      codeExample: {
        language: "java",
        code: `// =================================================================
// Enterprise Project: Transaction Management & Optimistic Locking
// =================================================================

import java.math.BigDecimal;
import java.util.UUID;

public class EnterpriseBankingDemo {

    // 1. Entity จำลองที่มีระบบ Optimistic Locking (@Version)
    public static class BankAccount {
        private final String accountNumber;
        private BigDecimal balance;
        private long version; // ฟิลด์ตรวจสอบการแก้ไขชนกัน (@Version)

        public BankAccount(String accountNumber, BigDecimal initialBalance) {
            this.accountNumber = accountNumber;
            this.balance = initialBalance;
            this.version = 0;
        }

        public synchronized void debit(BigDecimal amount) {
            if (balance.compareTo(amount) < 0) {
                throw new IllegalStateException("ยอดเงินคงเหลือไม่เพียงพอ (Insufficient Funds)");
            }
            this.balance = this.balance.subtract(amount);
            this.version++;
        }

        public synchronized void credit(BigDecimal amount) {
            this.balance = this.balance.add(amount);
            this.version++;
        }

        public String getAccountNumber() { return accountNumber; }
        public BigDecimal getBalance() { return balance; }
        public long getVersion() { return version; }
    }

    // 2. ผลลัพธ์ใบเสร็จการทำธุรกรรม (Java 21 Record)
    public record TransferReceipt(
        String receiptId,
        String sourceAccount,
        String destinationAccount,
        BigDecimal amount,
        String status
    ) {}

    // 3. จำลองการโอนเงินที่ปลอดภัย
    public static TransferReceipt executeTransfer(
            BankAccount from, 
            BankAccount to, 
            BigDecimal amount) {
        
        System.out.printf("Initiating atomic transfer of $%,.2f from [%s] to [%s]...\n",
            amount, from.getAccountNumber(), to.getAccountNumber());

        // หักเงินและเพิ่มเงินแบบป้องกันข้อผิดพลาด
        from.debit(amount);
        to.credit(amount);

        return new TransferReceipt(
            "TXN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase(),
            from.getAccountNumber(),
            to.getAccountNumber(),
            amount,
            "SUCCESS_SETTLED"
        );
    }

    public static void main(String[] args) {
        BankAccount source = new BankAccount("ACC-6701-001", new BigDecimal("50000.00"));
        BankAccount tuitionOffice = new BankAccount("ACC-UNIV-999", new BigDecimal("1200000.00"));

        System.out.printf("ก่อนโอนเงิน: บัญชีนักศึกษาคงเหลือ: $%,.2f | บัญชีมหาวิทยาลัย: $%,.2f\n",
            source.getBalance(), tuitionOffice.getBalance());

        TransferReceipt receipt = executeTransfer(source, tuitionOffice, new BigDecimal("18500.00"));

        System.out.println("\n--- ใบเสร็จการชำระเงินดิจิทัล (Digital Receipt) ---");
        System.out.println("Receipt Reference : " + receipt.receiptId());
        System.out.println("From Account      : " + receipt.sourceAccount());
        System.out.println("To Account        : " + receipt.destinationAccount());
        System.out.println("Amount Paid       : $" + receipt.amount());
        System.out.println("Transaction Status: " + receipt.status());

        System.out.printf("\nหลังโอนเงิน: บัญชีนักศึกษาคงเหลือ: $%,.2f (Version: %d) | บัญชีมหาวิทยาลัย: $%,.2f (Version: %d)\n",
            source.getBalance(), source.getVersion(), tuitionOffice.getBalance(), tuitionOffice.getVersion());
    }
}`,
        description: "โปรเจกต์จำลองการทำธุรกรรมการเงินและชำระค่าธรรมเนียมแบบ ACID และ Optimistic Versioning"
      },
      challenge: {
        description: "จงเพิ่ม Annotation @Transactional ให้กับเมธอด transferTuition เพื่อให้ครอบคลุมการทำงานแบบ Atomic Rollback เมื่อเกิดข้อผิดพลาด",
        startingCode: `import org.springframework.transaction.annotation.Transactional;

public class TuitionService {
    // TODO: กำหนด Annotation @Transactional
    public void transferTuition(String studentId, double amount) {
        System.out.println("Transferring tuition for: " + studentId);
    }
}`,
        solution: `import org.springframework.transaction.annotation.Transactional;

public class TuitionService {
    @Transactional(rollbackFor = Exception.class)
    public void transferTuition(String studentId, double amount) {
        System.out.println("Transferring tuition for: " + studentId);
    }
}`
      },
      quiz: [
        {
          id: "java-q9-1",
          question: "Annotation @Version ใน JPA Entity มีบทบาทสำคัญอย่างไรในการจัดการ Concurrency?",
          options: [
            "ใช้ระบุเวอร์ชันของภาษา Java",
            "ใช้ทำ Optimistic Locking เพื่อตรวจจับและป้องกันข้อผิดพลาด Lost Update เมื่อมีสองเธรดพยายามอัปเดตข้อมูลแถวเดียวกันพร้อมกัน",
            "ใช้แปลงข้อมูลเป็นไฟล์ PDF อัตโนมัติ",
            "ใช้ลบข้อมูลเก่าทิ้งเมื่อเวลาผ่านไป 1 ปี"
          ],
          correctAnswer: 1,
          explanation: "Optimistic Locking ทำงานโดยตรวจสอบคอลัมน์ version ในคำสั่ง UPDATE หากมีเธรดอื่นอัปเดตตัดหน้าไปก่อน ค่า version จะไม่ตรงกัน ทำให้ JPA โยน OptimisticLockingFailureException ช่วยปกป้องความถูกต้องของยอดเงินได้โดยไม่ต้อง Lock ตาราง"
        },
        {
          id: "java-q9-2",
          question: "คุณสมบัติ Atomicity ในระบบธุรกรรม ACID ของคำสั่ง @Transactional มีความหมายว่าอย่างไร?",
          options: [
            "การทำงานต้องทำได้เร็วกว่าความเร็วแสง",
            "การกระทำทั้งหมดใน Transaction ต้องสำเร็จครบทุกขั้นตอน หากมีขั้นตอนใดล้มเหลวแม้แต่จุดเดียว ระบบจะ Rollback คืนค่าข้อมูลทั้งหมดกลับสู่สภาพเดิมเสมือนไม่เคยมีอะไรเกิดขึ้น (All or Nothing)",
            "การแยกข้อมูลเป็นอะตอมในระดับควอนตัม",
            "การบันทึกข้อมูลเฉพาะวันที่ 1 ของเดือนเท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "Atomicity ยึดหลัก All or Nothing กล่าวคือ หากตัดเงินต้นทางสำเร็จแต่เติมเงินปลายทางพ้มเหลว ระบบจะทำการย้อนกลับ (Rollback) ข้อมูลทั้งหมด เพื่อไม่ให้เกิดปัญหายอดเงินสูญหายกลางอากาศ"
        },
        {
          id: "java-q9-3",
          question: "เครื่องมือใดใน Spring Boot Ecosystem ที่ใช้สำหรับตรวจสอบสถานะสุขภาพ (Health Checks), ปริมาณหน่วยความจำ และเมตริกส์เพื่อนำไปต่อยอดกับ Kubernetes และ Prometheus/Grafana?",
          options: [
            "Spring Boot Actuator",
            "Spring Boot Initializr",
            "Spring Boot DevTools",
            "Spring Boot CLI"
          ],
          correctAnswer: 0,
          explanation: "Spring Boot Actuator มอบ Endpoints ระดับโปรดักชัน เช่น /actuator/health, /actuator/metrics และ /actuator/prometheus เพื่อให้ระบบภายนอกอย่าง Kubernetes (Liveness/Readiness probes) และ Grafana สามารถมอนิเตอร์สุขภาพของแอปพลิเคชันได้แบบเรียลไทม์"
        }
      ]
    }
  ]
};
