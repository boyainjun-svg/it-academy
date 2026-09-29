import { Course } from "../types";

export const scalaCourse: Course = {
  id: "scala",
  title: "Scala 3 & Modern Functional / Big Data Engineering",
  description: "เรียนรู้ภาษา Scala 3 ตั้งแต่ New Clean Syntax, Case Classes, Functional Programming, Contextual Abstractions (givens/using), Actor Model จนถึง Apache Spark สำหรับ Big Data",
  longDescription: "หลักสูตรวิศวกรรมข้อมูลและซอฟต์แวร์ขั้นสูงด้วยภาษา Scala 3 (Dotty Compiler) ซึ่งเป็นภาษาหลักที่อยู่เบื้องหลังระบบประมวลผลข้อมูลระดับโลกอย่าง Apache Spark, Apache Kafka, และ Twitter (X) ครอบคลุมตั้งแต่ไวยากรณ์ใหม่ที่กระชับและสง่างาม (Significant Indentation), การผสมผสาน OOP เข้ากับ Functional Programming บริสุทธิ์, การออกแบบโมเดลข้อมูลด้วย Case Classes และ Enums, ระบบ Contextual Abstractions ยุคใหม่ด้วย Givens และ Using Clauses, ระบบประเภทข้อมูลขั้นสูง (Union Types, Intersection Types, Opaque Types), การเขียนโปรแกรม Concurrency ด้วย Actor Model (Pekko/Akka), การประมวลผลข้อมูลมหาศาลแบบกระจายศูนย์ (Distributed Big Data) ด้วย Apache Spark, ตลอดจน Functional Effects ด้วย Cats Effect และ ZIO",
  icon: "🔴",
  color: "red",
  gradient: "from-red-600 via-rose-700 to-slate-900",
  category: "language",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: ["Scala 3", "Apache Spark", "Big Data", "Functional Programming", "JVM", "Akka", "ZIO", "Dotty"],
  recommendedTools: [
    {
      name: "Scala-CLI & Coursier (cs)",
      icon: "🔴",
      badge: "Modern Toolchain",
      description: "เครื่องมือจัดการสภาพแวดล้อมภาษา Scala ยุคใหม่ที่ติดตั้ง JVM, Scala 3, และรันสคริปต์ได้ในคำสั่งเดียว",
      downloadUrl: "https://scala-cli.virtuslab.org/",
      setupGuide: "1. ติดตั้งผ่าน Coursier: cs setup\n2. รันสคริปต์ทันที: scala-cli run script.scala\n3. สร้างโปรเจกต์ sbt: sbt new scala/scala3.g8"
    },
    {
      name: "VS Code with Metals / IntelliJ IDEA",
      icon: "💻",
      badge: "Scala IDE",
      description: "IDE ภาษา Scala ระดับมืออาชีพที่รองรับระบบ Type Inlay, Semantic Highlighting, และการดีบัก",
      downloadUrl: "https://scalameta.org/metals/",
      setupGuide: "1. ติดตั้ง Extension 'Scala (Metals)' ใน VS Code\n2. Metals จะทำการ Import sbt หรือ Scala-CLI build ให้อัตโนมัติ"
    }
  ],
  lessons: [
    {
      id: "scala-1",
      title: "สถาปัตยกรรม Scala 3 (Dotty), New Syntax และการทำงานบน JVM",
      description: "เริ่มต้นก้าวสู่ Scala 3: ไวยากรณ์แบบ Significant Indentation (ไม่ต้องง้อปีกกา), การทำงานร่วมกับ Java 100%, และโครงสร้างโปรแกรม",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม Scala 3 และ Dotty Compiler

**Scala** (Scalable Language) ถูกสร้างขึ้นโดย **Martin Odersky** ที่ EPFL เพื่อผสานโลกของ **Object-Oriented Programming (OOP)** และ **Functional Programming (FP)** ให้เป็นหนึ่งเดียวกันอย่างสมบูรณ์แบบบน Java Virtual Machine (JVM)

## 1. จุดเปลี่ยนของ Scala 3 (New Clean Syntax)
ใน Scala 3 ไวยากรณ์ได้รับการยกเครื่องใหม่ให้กระชับและสง่างาม โดยใช้การย่อหน้า (Indentation-based Syntax) เหมือน Python แต่ยังคงความปลอดภัยระดับ Statically Typed สูงสุด:
\`\`\`scala
// สไตล์ Scala 3 (Indentation-based)
def calculateDiscount(price: Double): Double =
  if price > 1000.0 then
    price * 0.10
  else
    0.0

@main def run(): Unit =
  println(s"ส่วนลด: \${calculateDiscount(1500.0)} บาท")
\`\`\`

## 2. การทำงานร่วมกับ Java แบบไร้รอยต่อ (100% Interoperability)
- โค้ด Scala สามารถเรียกใช้ไลบรารี Java ได้ทุกตัวโดยไม่ต้องมี Wrapper
- โค้ด Java สามารถเรียกใช้คลาสที่คอมไพล์จาก Scala ได้เสมือนคลาส Java ปกติ
- ขับเคลื่อนบน JVM 17 หรือ 21 ทำให้ได้รับประโยชน์จากการปรับปรุง JIT Compiler และ Garbage Collection ตลอดเวลา`,
      codeExample: `// ตัวอย่างโปรแกรม Scala 3 ด้วยไวยากรณ์ใหม่
case class Developer(name: String, role: String, yearsOfExperience: Int)

def evaluateSeniority(dev: Developer): String =
  if dev.yearsOfExperience >= 5 then
    s"ระดับอาวุโส (Senior) - ประสบการณ์ \${dev.yearsOfExperience} ปี"
  else
    s"ระดับปฏิบัติการ (Associate) - ประสบการณ์ \${dev.yearsOfExperience} ปี"

@main def main(): Unit =
  println("=== สถาปัตยกรรมภาษา Scala 3 บน JVM ===")
  val dev = Developer("Somchai", "Data Platform Engineer", 6)
  println(s"นักพัฒนา: \${dev.name}")
  println(s"ตำแหน่ง: \${dev.role}")
  println(s"การประเมิน: \${evaluateSeniority(dev)}")`,
      challenge: "เขียนฟังก์ชันใน Scala 3 ที่รับ List ของตัวเลข และใช้ if-then-else เพื่อหาผลรวมเฉพาะตัวเลขที่เป็นบวก",
      quiz: [
        {
          question: "คุณสมบัติสำคัญของไวยากรณ์ใหม่ใน Scala 3 เมื่อเทียบกับ Scala 2 คือข้อใด?",
          options: [
            "รองรับการจัดบล็อกโค้ดด้วยการย่อหน้า (Significant Indentation) โดยไม่ต้องใช้เครื่องหมายปีกกา { }",
            "ยกเลิกระบบ Type Safety ทั้งหมด",
            "ไม่สามารถรันบน JVM ได้อีกต่อไป",
            "บังคับให้ใช้ภาษาละตินในการเขียนโปรแกรม"
          ],
          correctAnswer: 0,
          explanation: "Scala 3 แนะนำไวยากรณ์แบบ Indentation-based (คล้าย Python) ซึ่งช่วยลดความรกของปีกกา {} ทำให้อ่านโค้ดได้ง่ายและสะอาดขึ้นมาก"
        },
        {
          question: "ชื่อโค้ดเนมของคอมไพเลอร์รุ่นใหม่ที่อยู่เบื้องหลัง Scala 3 คืออะไร?",
          options: ["Dotty", "Roslyn", "Babel", "V8"],
          correctAnswer: 0,
          explanation: "คอมไพเลอร์ของ Scala 3 พัฒนาขึ้นภายใต้โครงการวิจัยชื่อ Dotty ซึ่งใช้ทฤษฎี Dependent Object Types (DOT calculus)"
        },
        {
          question: "การทำงานร่วมกันระหว่าง Scala กับภาษา Java บน JVM มีลักษณะอย่างไร?",
          options: [
            "ทำงานร่วมกันได้ 100% (Seamless Interoperability) สามารถเรียกใช้ Class และ Library ของกันและกันได้โดยตรง",
            "ไม่สามารถทำงานร่วมกันได้เลย",
            "ต้องส่งข้อมูลผ่านอินเทอร์เน็ตเท่านั้น",
            "ต้องแปลงโค้ดเป็น C++ ก่อนเสมอ"
          ],
          correctAnswer: 0,
          explanation: "Scala คอมไพล์ออกมาเป็นมาตรฐาน JVM Bytecode เช่นเดียวกับ Java ทำให้ทั้งสองภาษาเรียกใช้งาน Class, Method และ Dependencies ของกันและกันได้อย่างสมบูรณ์แบบ"
        }
      ]
    },
    {
      id: "scala-2",
      title: "Immutability, Case Classes, Enums และ Pattern Matching ขั้นสูง",
      description: "สร้างโมเดลข้อมูลที่ปลอดภัยไร้ Side-effects ด้วย Case Classes, Scala 3 Enums, และเจาะลึกพลังของ Pattern Matching (Guards, Extractors)",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# Immutability, Case Classes และ Pattern Matching ใน Scala 3

ปรัชญาหลักของ Scala คือ **Immutability (ความไม่เปลี่ยนแปลงค่า)** ข้อมูลที่สร้างขึ้นมาแล้วจะไม่สามารถถูกดัดแปลงได้ ช่วยขจัดปัญหา Concurrency Bug ได้ตั้งแต่ต้นกำเนิด

## 1. Case Classes (หัวใจของ Data Modeling)
Case Class ใน Scala มีความสามารถสูงกว่า Data Class ทั่วไป:
- เป็น Immutable โดยค่าเริ่มต้น
- มี \`apply\` constructor (ไม่ต้องพิมพ์คีย์เวิร์ด \`new\`)
- รองรับ Pattern Matching ผ่าน \`unapply\` (Extractor Pattern) อัตโนมัติ

\`\`\`scala
case class Order(id: String, amount: Double, status: String)

val order1 = Order("ORD-001", 1500.0, "PENDING")
val order2 = order1.copy(status = "COMPLETED") // สร้างตัวใหม่โดยไม่แตะตัวเดิม
\`\`\`

## 2. Enums ใน Scala 3 (Algebraic Data Types)
Scala 3 มีไวยากรณ์ \`enum\` แท้จริงที่แทนที่ Sealed Traits ในอดีต:
\`\`\`scala
enum PaymentMethod:
  case CreditCard(number: String, cvv: String)
  case PromptPay(qrId: String)
  case Cash
\`\`\`

## 3. Pattern Matching ขั้นสูง (Match Expressions)
\`\`\`scala
def processPayment(method: PaymentMethod): String = method match
  case PaymentMethod.CreditCard(num, _) if num.startsWith("4") => 
    s"ชำระด้วยบัตร Visa: \${num.takeRight(4)}"
  case PaymentMethod.PromptPay(qr) => 
    s"สแกน PromptPay QR: \$qr"
  case PaymentMethod.Cash => 
    "ชำระด้วยเงินสดที่เคาน์เตอร์"
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Scala 3 Enums และ Pattern Matching
enum TransactionStatus:
  case Pending
  case Approved(transactionId: String, amount: Double)
  case Rejected(reason: String)

def auditTransaction(status: TransactionStatus): Unit = status match
  case TransactionStatus.Pending =>
    println("⏳ [AUDIT]: ธุรกรรมอยู่ระหว่างรอการอนุมัติ")
  case TransactionStatus.Approved(txId, amt) if amt >= 100000.0 =>
    println(s"🚨 [HIGH VALUE ALERT]: อนุมัติยอดเงินสูงพิเศษ \$amt บาท (TxID: \$txId)")
  case TransactionStatus.Approved(txId, amt) =>
    println(s"✓ [APPROVED]: อนุมัติยอดเงิน \$amt บาท (TxID: \$txId)")
  case TransactionStatus.Rejected(reason) =>
    println(s"✗ [REJECTED]: ปฏิเสธการทำรายการเนื่องจาก: \$reason")

@main def main(): Unit =
  println("=== ทดสอบ Scala 3 Algebraic Data Types ===")
  val tx1 = TransactionStatus.Approved("TX-9981", 450000.0)
  val tx2 = TransactionStatus.Rejected("ยอดเงินในบัญชีไม่เพียงพอ")

  auditTransaction(tx1)
  auditTransaction(tx2)`,
      challenge: "สร้าง Enum ชื่อ DeviceStatus ที่มีสถานะ Online, Offline(reason), และ BatteryLow(percent) พร้อมเขียนคำสั่ง match ที่มี Pattern Guard",
      quiz: [
        {
          question: "ข้อใดอธิบายพฤติกรรมของตัวแปร val และ var ในภาษา Scala ได้ถูกต้อง?",
          options: [
            "val คือตัวแปรแบบ Immutable (แก้ไขค่าไม่ได้) ส่วน var คือ Mutable (แก้ไขค่าได้)",
            "val คือตัวเลข ส่วน var คือข้อความ",
            "val ช้ากว่า var 100 เท่า",
            "ทั้งคู่แก้ไขค่าได้เหมือนกันทุกประการ"
          ],
          correctAnswer: 0,
          explanation: "ใน Scala เรานิยมใช้ val เป็นหลักเพื่อความปลอดภัยของข้อมูลแบบ Immutable ส่วน var จะใช้เฉพาะเมื่อมีความจำเป็นจริงๆ ที่ต้องแก้ไขค่า"
        },
        {
          question: "Pattern Guard ในคำสั่ง match ของ Scala เขียนโดยใช้คีย์เวิร์ดใด?",
          options: ["if (เช่น case Approved(amt) if amt > 1000 =>)", "when", "guard", "where"],
          correctAnswer: 0,
          explanation: "เราสามารถใส่ if ต่อท้าย case pattern เพื่อเพิ่มเงื่อนไขการตรวจสอบตรรกะ เรียกว่า Pattern Guard"
        },
        {
          question: "ฟังก์ชัน copy() ใน Case Class ของ Scala มีประโยชน์อย่างไร?",
          options: [
            "โคลนอ็อบเจกต์ใหม่ออกมาโดยคงค่าเดิมไว้ และอนุญาตให้เปลี่ยนค่าเฉพาะฟิลด์ที่กำหนด เพื่อรักษาหลักการ Immutability",
            "ลบอ็อบเจกต์ออกจากระบบ",
            "แปลงคลาสให้เป็นไฟล์รูปภาพ",
            "บันทึกข้อมูลลงฐานข้อมูลอัตโนมัติ"
          ],
          correctAnswer: 0,
          explanation: "Method copy() ช่วยให้นักพัฒนาสร้าง instance ใหม่ที่มีการเปลี่ยนแปลงเฉพาะบางฟิลด์ โดยไม่ต้องทำลายหรือไม่ต้องแก้ไขข้อมูลเดิม"
        }
      ]
    },
    {
      id: "scala-3",
      title: "Functional Programming บริสุทธิ์: Pure Functions, Currying และ Monads",
      description: "ทำความเข้าใจความงดงามของ Functional Programming: หลีกเลี่ยง Side-effects, การทำ Currying, Partial Application, และโครงสร้าง Monad (Option, Either, Try)",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Pure Functional Programming ในภาษา Scala

## 1. Pure Functions (ฟังก์ชันบริสุทธิ์)
ฟังก์ชันที่ถือเป็น **Pure Function** ต้องมีคุณสมบัติ 2 ประการ:
1. **Total Determinism:** เมื่อส่ง Input เดิมเข้ามา จะคืนค่า Output เดิมเสมอ
2. **No Side-Effects:** ไม่แอบแก้ไขตัวแปรภายนอก, ไม่ยิง I/O แอบแฝง, ไม่โยน Exception

## 2. Currying และ Partial Application
Currying คือการแปลงฟังก์ชันที่รับหลาย Parameter ให้กลายเป็นฟังก์ชันที่รับ Parameter ทีละตัวเรียงต่อกัน:
\`\`\`scala
// ฟังก์ชันแบบปกติ
def add(x: Int, y: Int): Int = x + y

// Curried Function ใน Scala
def addCurried(x: Int)(y: Int): Int = x + y

val addTen = addCurried(10) // Partial Application: ได้ฟังก์ชันใหม่ที่บวก 10 เสมอ
println(addTen(5)) // 15
\`\`\`

## 3. Monads ในชีวิตจริง: Option, Either และ Try
- **\`Option[A]\` (\`Some\` / \`None\`):** จัดการค่าว่าง
- **\`Either[Error, A]\` (\`Left\` / \`Right\`):** จัดการข้อผิดพลาด (Right คือค่าที่ถูกต้อง / Left คือ Error)
- **\`Try[A]\` (\`Success\` / \`Failure\`):** ดักจับ Java Exceptions ให้กลายเป็นข้อมูล`,
      codeExample: `// การประยุกต์ใช้ Functional Error Handling ด้วย Either และ for-comprehension
import scala.util.{Try, Success, Failure}

def parseUserId(input: String): Either[String, Int] =
  Try(input.trim.toInt) match
    case Success(id) if id > 0 => Right(id)
    case Success(_) => Left("User ID ต้องเป็นจำนวนเต็มบวก")
    case Failure(_) => Left(s"ไม่สามารถแปลง '\$input' เป็นตัวเลขได้")

def fetchUserRole(id: Int): Either[String, String] =
  if id == 101 then Right("Administrator")
  else if id == 102 then Right("Data Engineer")
  else Left(s"ไม่พบข้อมูลผู้ใช้รหัส \$id")

// For-comprehension: หัวใจของการร้อยเรียง Monads (Monadic Pipeline)
def getUserInfoPipeline(rawInput: String): Either[String, String] =
  for
    validId <- parseUserId(rawInput)
    role    <- fetchUserRole(validId)
  yield s"ผู้ใช้ ID #\$validId มีสิทธิ์: \$role"

@main def main(): Unit =
  println("=== ทดสอบ Monadic Either Pipeline ===")
  println(getUserInfoPipeline("101"))   // Right(...)
  println(getUserInfoPipeline("105"))   // Left(ไม่พบข้อมูลผู้ใช้)
  println(getUserInfoPipeline("abc"))   // Left(แปลงเป็นตัวเลขไม่ได้)`,
      challenge: "สร้างฟังก์ชัน divide(a: Double, b: Double): Either[String, Double] และนำไปใช้ใน for-comprehension เพื่อคำนวณสูตรคณิตศาสตร์",
      quiz: [
        {
          question: "ตามข้อตกลงสากลในภาษา Scala ชนิดข้อมูล Either[L, R] ฝั่งใดใช้เก็บค่าความสำเร็จ (Success Value)?",
          options: ["Right (มาจากสำนวน 'Right is right')", "Left", "Middle", "Center"],
          correctAnswer: 0,
          explanation: "ตามข้อตกลงของ Scala: Right ใช้เก็บค่าผลลัพธ์ที่ถูกต้อง (Right is right) ส่วน Left ใช้เก็บข้อความหรือวัตถุของข้อผิดพลาด (Error)"
        },
        {
          question: "For-comprehension ในภาษา Scala ถูกคอมไพล์เบื้องหลังให้กลายเป็น Method ใดต่อกัน?",
          options: [
            "flatMap, map, และ withFilter",
            "while loop และ for loop",
            "goto statements",
            "SQL queries"
          ],
          correctAnswer: 0,
          explanation: "For-comprehension เป็นเพียง Syntactic Sugar ที่คอมไพเลอร์จะแปลง (Desugar) ให้เป็นการเรียกฟังก์ชัน flatMap, map และ withFilter ต่อกันอย่างสวยงาม"
        },
        {
          question: "ประโยชน์ของการทำ Currying ในการออกแบบสถาปัตยกรรมซอฟต์แวร์คืออะไร?",
          options: [
            "ช่วยให้สามารถทำ Partial Application สร้างฟังก์ชันย่อยที่จำค่าพารามิเตอร์แรกไว้ล่วงหน้าเพื่อนำไปใช้ซ้ำได้",
            "เพิ่มขนาดความจุของฐานข้อมูล",
            "ทำให้ฟังก์ชันทำงานช้าลงเพื่อประหยัด CPU",
            "บังคับให้ตัวแปรมีค่าเป็นศูนย์"
          ],
          correctAnswer: 0,
          explanation: "Currying ช่วยแยก Parameter ออกเป็นกลุ่มๆ ทำให้นักพัฒนาสามารถส่งพารามิเตอร์บางส่วนเข้าไปก่อน (Partial Application) เพื่อสร้างฟังก์ชันเฉพาะทางตัวใหม่ไปใช้งานต่อได้ง่าย"
        }
      ]
    },
    {
      id: "scala-4",
      title: "Contextual Abstractions: Givens, Using Clauses และ Extension Methods",
      description: "ทำความเข้าใจระบบ Dependency Injection และ Type Classes ยุคใหม่ของ Scala 3 ที่มาแทนที่คำว่า implicits ในอดีต",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Contextual Abstractions ใน Scala 3

ใน Scala 2 คำว่า \`implicit\` เพียงคำเดียวถูกนำมาใช้ทำหน้าที่หลายอย่างจนสร้างความสับสน ใน **Scala 3** ผู้สร้างภาษาจึงได้ออกแบบระบบ **Contextual Abstractions** ขึ้นมาใหม่ทั้งหมด เพื่อความชัดเจนและแม่นยำ

## 1. Givens และ Using Clauses (การส่งค่าตามบริบท)
เมื่อเราต้องการส่งค่า Configuration, ExecutionContext, หรือ Database Connection เข้าไปในฟังก์ชันโดยไม่ต้องพิมพ์ส่งเองในทุกๆ จุด:
\`\`\`scala
// 1. ประกาศค่าที่พร้อมถูกนำไปใช้งานตามบริบท (Given instance)
given defaultTaxRate: Double = 0.07

// 2. ฟังก์ชันที่ขอรับค่าตามบริบทด้วย using
def calculateTotal(price: Double)(using tax: Double): Double =
  price + (price * tax)

// เรียกใช้งานโดยไม่ต้องส่งค่า tax คอมไพเลอร์จะหา given มาใส่ให้อัตโนมัติ!
println(calculateTotal(100.0)) // 107.0
\`\`\`

## 2. Extension Methods ใน Scala 3
ไวยากรณ์ใหม่ที่สร้างส่วนขยายได้ชัดเจนกว่าเดิม:
\`\`\`scala
extension (str: String)
  def shout: String = str.toUpperCase + "!!!"
  def toSlug: String = str.toLowerCase.replace(" ", "-")

println("hello scala 3".shout)  // HELLO SCALA 3!!!
println("Modern Scala 3".toSlug) // modern-scala-3
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Givens และ Extension Methods ใน Scala 3
case class Money(amount: Double, currency: String)

// 1. กำหนด Given Ordering เพื่อสอนคอมไพเลอร์ให้รู้จักการจัดเรียง Money
given moneyOrdering: Ordering[Money] with
  def compare(x: Money, y: Money): Int =
    x.amount.compareTo(y.amount)

// 2. สร้าง Extension Methods ให้กับ Money
extension (m: Money)
  def formatThai: String = s"\${m.amount} \${m.currency}"
  def +(other: Money): Money =
    require(m.currency == other.currency, "สกุลเงินไม่ตรงกัน")
    Money(m.amount + other.amount, m.currency)

@main def main(): Unit =
  println("=== ทดสอบ Extension Methods ===")
  val m1 = Money(1500.0, "THB")
  val m2 = Money(3200.0, "THB")
  val combined = m1 + m2
  println(s"รวมยอด: \${combined.formatThai}")

  println("\n=== ทดสอบ Given Ordering กับ Collections ===")
  val wallets = List(Money(5000.0, "THB"), Money(1200.0, "THB"), Money(8900.0, "THB"))
  // .sorted ต้องการ Ordering[Money] ซึ่งคอมไพเลอร์จะดึง Given มาใช้อัตโนมัติ
  val sortedWallets = wallets.sorted
  println(s"กระเป๋าเรียงจากน้อยไปมาก: \${sortedWallets.map(_.amount)}")`,
      challenge: "สร้าง Extension Method ชื่อ isEven และ isOdd ให้กับประเภทข้อมูล Int ใน Scala 3",
      quiz: [
        {
          question: "คู่คำสั่งใดใน Scala 3 ที่ถูกนำมาใช้แทนคำว่า implicit parameters ใน Scala 2?",
          options: ["given และ using", "provide และ require", "export และ import", "static และ dynamic"],
          correctAnswer: 0,
          explanation: "Scala 3 แยกความหมายของ implicits ให้ชัดเจน โดยใช้ 'given' เพื่อประกาศ instance และใช้ 'using' ในตำแหน่ง parameter เพื่อขอรับ instance ตามบริบท"
        },
        {
          question: "ไวยากรณ์ extension ใน Scala 3 มีจุดประสงค์เพื่ออะไร?",
          options: [
            "เพิ่ม Method ใหม่ให้กับประเภทข้อมูลเดิมที่มีอยู่แล้วโดยไม่ต้องเข้าไปแก้ไข Source Code หรือใช้การสืบทอด",
            "เพิ่มขนาดหน่วยความจำของคอมพิวเตอร์",
            "ขยายหน้าจอแสดงผล",
            "สร้างฐานข้อมูลตัวใหม่"
          ],
          correctAnswer: 0,
          explanation: "extension ใน Scala 3 ช่วยให้นักพัฒนาสร้าง Extension Methods ให้กับคลาสใดๆ ได้อย่างกระชับและตรงไปตรงมา โดยไม่ต้องสร้าง Implicit Class เหมือนใน Scala 2"
        },
        {
          question: "หากในขอบเขตไม่มี Given Instance ที่ตรงกับ Using Parameter ตอนคอมไพล์จะเกิดอะไรขึ้น?",
          options: [
            "คอมไพล์ไม่ผ่านทันที (No given instance found for type...)",
            "โปรแกรมจะสุ่มค่าให้เอง",
            "โปรแกรมจะหยุดทำงานตอนรันไทม์",
            "เซิร์ฟเวอร์จะปิดตัวลง"
          ],
          correctAnswer: 0,
          explanation: "ระบบ Contextual Abstraction ทำการตรวจสอบความถูกต้องตั้งแต่ขั้นตอนคอมไพล์ (Compile-time) หากคอมไพเลอร์หา given instance ที่ตรงกับ type ไม่เจอ จะแจ้งข้อผิดพลาดทันที"
        }
      ]
    },
    {
      id: "scala-5",
      title: "ระบบ Type System ขั้นสูง (Union, Intersection และ Opaque Types)",
      description: "เจาะลึกระบบประเภทข้อมูลระดับโลก: Union Types (A | B), Intersection Types (A & B), และ Opaque Type Aliases เพื่อประสิทธิภาพ Zero-overhead",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Advanced Type System ใน Scala 3

Scala 3 ได้รับการยอมรับว่ามี **Type System ที่ทรงพลังที่สุดตัวหนึ่งในวงการวิทยาการคอมพิวเตอร์** โดยถูกอ้างอิงบนรากฐานทางคณิตศาสตร์ DOT Calculus

## 1. Union Types (\`A | B\`)
ตัวแปรสามารถเป็นประเภท \`A\` หรือ \`B\` ก็ได้ โดยไม่ต้องสร้าง Enum หรือ Wrapper คลาสมาครอบ:
\`\`\`scala
def parseInput(raw: String): Int | String =
  raw.toIntOption match
    case Some(num) => num
    case None => s"ข้อมูลไม่ใช่ตัวเลข: \$raw"
\`\`\`

## 2. Intersection Types (\`A & B\`)
วัตถุที่ต้องมีคุณสมบัติครบทั้ง \`A\` และ \`B\` พร้อมกัน:
\`\`\`scala
trait Resetable:
  def reset(): Unit

trait Printable:
  def print(): Unit

def maintain(device: Resetable & Printable): Unit =
  device.reset()
  device.print()
\`\`\`

## 3. Opaque Type Aliases (Zero-Cost Domain Modeling)
สร้าง Type Safety ป้องกันการสลับตัวแปรผิด โดยไม่มี Memory Allocation Overhead ตอนรันไทม์:
\`\`\`scala
object Types:
  opaque type UserId = Long
  object UserId:
    def apply(id: Long): UserId = id
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Union Types และ Opaque Types ใน Scala 3
object DomainTypes:
  // Opaque type: ภายนอกมองเป็นประเภท AccountId แต่ข้างในรันเป็น Long แท้ๆ ไร้ Object Overhead
  opaque type AccountId = Long
  object AccountId:
    def apply(id: Long): AccountId = id

import DomainTypes.*

// ฟังก์ชันที่คืนค่าเป็น Union Type (String | Double)
def calculateFee(accountType: String, amount: Double): String | Double =
  if amount <= 0 then
    "จำนวนเงินต้องมากกว่า 0"
  else if accountType == "VIP" then
    0.0 // ฟรีค่าธรรมเนียม
  else
    amount * 0.015

@main def main(): Unit =
  println("=== ทดสอบ Union Types (A | B) ===")
  val fee1 = calculateFee("REGULAR", 1000.0)
  val fee2 = calculateFee("VIP", 5000.0)
  val fee3 = calculateFee("REGULAR", -50.0)

  println(s"ผลลัพธ์ 1: \$fee1")
  println(s"ผลลัพธ์ 2: \$fee2")
  println(s"ผลลัพธ์ 3 (Error): \$fee3")`,
      challenge: "สร้าง Union Type สำหรับระบบการแจ้งเตือนที่รับได้ทั้ง EmailAddress | PhoneNumber และเขียน Pattern Matching แสดงผล",
      quiz: [
        {
          question: "เครื่องหมายใดใช้ประกาศ Union Type ใน Scala 3 (เช่น ค่าเป็น Int หรือ String ก็ได้)?",
          options: ["A | B", "A & B", "A || B", "Union[A, B]"],
          correctAnswer: 0,
          explanation: "Scala 3 ใช้เครื่องหมาย Pipe (A | B) สำหรับประกาศ Union Types ซึ่งหมายถึงค่าที่สามารถเป็น Type A หรือ Type B ก็ได้"
        },
        {
          question: "ประโยชน์สูงสุดของ Opaque Type Aliases ใน Scala 3 คืออะไร?",
          options: [
            "สร้าง Type Safety ป้องกันการส่งสลับตัวแปร เช่น UserId กับ OrderId แต่เมื่อคอมไพล์ลง Bytecode จะไม่มีค่าใช้จ่ายหน่วยความจำเพิ่มเลย (Zero-overhead)",
            "เพิ่มความเร็วอินเทอร์เน็ต",
            "ลบไฟล์ขยะในระบบ",
            "ทำให้โปรแกรมรันได้เฉพาะตอนกลางคืน"
          ],
          correctAnswer: 0,
          explanation: "Opaque Types ช่วยให้นักพัฒนาสร้าง Domain Type ที่ปลอดภัยได้โดยไม่ต้องสร้างคลาส wrapper ครอบใน Heap ตอนรันไทม์จึงมีความเร็วเท่ากับ Primitive Type ดั้งเดิม"
        },
        {
          question: "Intersection Type (A & B) หมายถึงอะไรในระบบของ Scala 3?",
          options: [
            "วัตถุนั้นต้องเป็นทั้ง Type A และ Type B พร้อมกัน (มีสมาชิกของทั้งสอง Type ครบถ้วน)",
            "วัตถุนั้นต้องเป็นค่าว่างเสมอ",
            "วัตถุนั้นสามารถมีค่าเป็นอะไรก็ได้ในโลก",
            "การหารค่าตัวเลขสองจำนวน"
          ],
          correctAnswer: 0,
          explanation: "Intersection Type A & B บ่งชี้ว่าค่านั้นมีคุณสมบัติของทั้งสอง Trait หรือ Type ควบคู่กันไปพร้อมกัน"
        }
      ]
    },
    {
      id: "scala-6",
      title: "Concurrency ด้วย Actor Model (Apache Pekko / Akka)",
      description: "สถาปัตยกรรม Concurrency ปราศจากการล็อก (Lock-Free): ทำความเข้าใจ Actor Model, Message Queues (Mailboxes), และ Fault Tolerance (Supervision)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Concurrency ด้วย Actor Model (Apache Pekko / Akka)

การเขียน Multithreaded ด้วยการใช้ Mutex Lock และ Synchronized มักนำไปสู่ปัญหา Deadlocks และความซับซ้อนที่ควบคุมยาก **Actor Model** จึงเป็นทางออกระดับอุตสาหกรรมที่ใช้ในระบบสายการบิน โทรคมนาคม และระบบการเงิน

## 1. ปรัชญาของ Actor Model
ใน Actor Model:
- **Actor** คือหน่วยประมวลผลพื้นฐานที่มีสถานะ (State) เป็นของตัวเอง
- Actor **ไม่แชร์หน่วยความจำกัน** อย่างเด็ดขาด
- สื่อสารกันผ่าน **Asynchronous Message Passing** เท่านั้น
- แต่ละ Actor จะมีกล่องจดหมาย (**Mailbox**) และประมวลผลข้อความทีละข้อความตามลำดับ ทำให้ **ไม่ต้องใช้ Lock เลยแม้แต่น้อย (Lock-free)**

## 2. Let It Crash (ปรัชญาการกู้คืนความเสียหาย)
แทนที่จะพยายามดักจับ Error ในทุกบรรทัด Actor Model ใช้ระบบ **Supervision Strategy** โดย Actor พ่อแม่จะคอยเฝ้าดู Actor ลูก หากลูกพังหรือเกิด Exception แม่สามารถสั่ง:
- \`Restart\`: รีสตาร์ต Actor ตัวนั้นใหม่พร้อมคืนสถานะเริ่มต้น
- \`Resume\`: ละเว้นข้อผิดพลาดแล้วประมวลผลข้อความถัดไป
- \`Stop\`: สั่งยุติการทำงาน
- \`Escalate\`: ส่งต่อข้อผิดพลาดขึ้นไปยังผู้บริหารระดับสูงขึ้นไป`,
      codeExample: `// การจำลองการทำงานของ Actor Model ในภาษา Scala
sealed trait BankMessage
case class Deposit(amount: Double) extends BankMessage
case class Withdraw(amount: Double) extends BankMessage
case object GetBalance extends BankMessage

class SimulatedBankActor:
  // สถานะภายในถูกปกป้อง ไม่ต้องใช้ Lock
  private var balance: Double = 0.0

  def receive(message: BankMessage): Unit = message match
    case Deposit(amt) =>
      balance += amt
      println(s"📥 [ACTOR]: ฝากเงิน \$amt บาท สำเร็จ (ยอดคงเหลือ: \$balance บาท)")
    case Withdraw(amt) if amt <= balance =>
      balance -= amt
      println(s"📤 [ACTOR]: ถอนเงิน \$amt บาท สำเร็จ (ยอดคงเหลือ: \$balance บาท)")
    case Withdraw(amt) =>
      println(s"⚠️ [ACTOR]: ถอนเงิน \$amt บาท ล้มเหลว! (ยอดเงินมีเพียง \$balance บาท)")
    case GetBalance =>
      println(s"💰 [ACTOR]: สอบถามยอดคงเหลือปัจจุบัน: \$balance บาท")

@main def main(): Unit =
  println("=== จำลองการประมวลผลข้อความตามลำดับของ Actor Mailbox ===")
  val accountActor = SimulatedBankActor()

  accountActor.receive(Deposit(5000.0))
  accountActor.receive(Withdraw(1500.0))
  accountActor.receive(Withdraw(4000.0))
  accountActor.receive(GetBalance)`,
      challenge: "จงอธิบายความแตกต่างระหว่าง ask pattern (?) และ tell pattern (!) ใน Akka / Apache Pekko",
      quiz: [
        {
          question: "เหตุใด Actor ใน Actor Model จึงไม่จำเป็นต้องใช้ Mutex Lock ในการป้องกันข้อมูลภายในตัวมันเอง?",
          options: [
            "เพราะแต่ละ Actor ประมวลผลข้อความจาก Mailbox ของตนเองทีละข้อความตามลำดับ (Sequential Message Processing)",
            "เพราะ Actor ทำงานเฉพาะตอนคอมพิวเตอร์ออฟไลน์",
            "เพราะภาษา Scala ไม่อนุญาตให้ใช้ตัวเลข",
            "เพราะระบบจะล็อกซีพียูไว้ทั้งตัว"
          ],
          correctAnswer: 0,
          explanation: "Actor Model กำหนดให้แต่ละ Actor อ่านข้อความจาก Mailbox มาทำงานทีละข้อความแบบ Single-threaded Execution ภายในตัวมันเอง จึงไม่มีทางที่สองเธรดจะเข้ามาแก้ไข State พร้อมกันได้"
        },
        {
          question: "ปรัชญา 'Let It Crash' ในสถาปัตยกรรม Actor Model มีแนวคิดหลักอย่างไร?",
          options: [
            "ปล่อยให้ Actor ที่เกิดข้อผิดพลาดพังไป แล้วให้ Actor แม่ (Supervisor) ตัดสินใจกู้คืนสถานะหรือ Restart ให้ใหม่",
            "ปล่อยให้ระบบคอมพิวเตอร์พังถาวร",
            "การลบโค้ดโปรเจกต์ทิ้งเมื่อเกิดบั๊ก",
            "การไม่เขียนการตรวจสอบใดๆ เลยในระบบ"
          ],
          correctAnswer: 0,
          explanation: "Let It Crash ยอมรับว่าความผิดพลาดเกิดขึ้นได้เสมอ การแยก Actor ออกเป็นส่วนย่อยๆ ทำให้เมื่อส่วนหนึ่งพังจะไม่กระทบส่วนอื่น และมี Supervisor Strategy คอยกู้คืนระบบให้ทำงานต่อได้อัตโนมัติ"
        },
        {
          question: "โครงการ Open-Source ใดที่ได้รับการฟอร์กออกมาจาก Akka เพื่อเป็นมาตรฐานอิสระภายใต้ Apache Software Foundation?",
          options: ["Apache Pekko", "Apache Spark", "Apache Kafka", "Apache Flink"],
          correctAnswer: 0,
          explanation: "Apache Pekko เป็นโครงการที่ฟอร์กมาจาก Akka (เวอร์ชัน 2.6.x) ภายใต้องค์กร Apache เพื่อรักษามาตรฐาน Open Source ของ Actor Model บน JVM ต่อไป"
        }
      ]
    },
    {
      id: "scala-7",
      title: "วิศวกรรม Big Data ด้วย Apache Spark และ Scala",
      description: "ขุมพลังเบื้องหลัง Data Platform ระดับโลก: สถาปัตยกรรม Distributed Computing, RDDs, DataFrames, Datasets, Spark SQL และการ Optimize Spark Jobs",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# วิศวกรรม Big Data ด้วย Apache Spark และ Scala

**Apache Spark** ถูกเขียนขึ้นด้วยภาษา Scala เป็นหลัก และ Scala คือภาษาที่มอบประสิทธิภาพสูงสุดเมื่อต้องประมวลผลข้อมูลขนาดหลายสิบ Terabytes หรือ Petabytes ข้ามคลัสเตอร์เครื่องเซิร์ฟเวอร์นับร้อยเครื่อง

## 1. สถาปัตยกรรม Distributed Data: RDD vs DataFrame vs Dataset
- **RDD (Resilient Distributed Dataset):** โครงสร้างข้อมูลระดับต่ำสุดของ Spark ที่กระจายอยู่ตาม Worker Nodes รองรับ Fault-tolerance เต็มรูปแบบ
- **DataFrame:** ข้อมูลที่ถูกจัดเป็นคอลัมน์เหมือนตาราง SQL ทำงานร่วมกับ Catalyst Optimizer
- **Dataset[T]:** รวมข้อดีของทั้งสองฝั่ง: **Type-safety ระดับ Compile-time ของ Scala Case Class** + ความเร็วและ Memory Optimization จาก **Tungsten Engine** ของ Spark

\`\`\`scala
case class WebClick(userId: String, url: String, responseTimeMs: Long)

// Spark Dataset ใน Scala มี Type Safety สูงสุด
val clicksDs: Dataset[WebClick] = spark.read.json("s3://logs/clicks.json").as[WebClick]

val slowPages = clicksDs
  .filter(_.responseTimeMs > 2000)
  .groupByKey(_.url)
  .count()
\`\`\`

## 2. Transformations (Lazy) vs Actions (Eager)
- **Transformations (เช่น \`map\`, \`filter\`, \`groupBy\`):** เป็นแบบ Lazy จะยังไม่คำนวณจริง แต่จะสร้างแผนผัง Directed Acyclic Graph (DAG) ขึ้นมา
- **Actions (เช่น \`count\`, \`collect\`, \`saveAsParquet\`):** เป็นตัวจุดชนวนให้ Spark เริ่มประมวลผลจริงข้ามคลัสเตอร์`,
      codeExample: `// การจำลองการทำงานของ Apache Spark Transformations และ Action ใน Scala
case class StudentLog(id: String, course: String, score: Double)

def simulateSparkPipeline(logs: List[StudentLog]): Unit =
  println("=== 1. สร้าง Spark Directed Acyclic Graph (DAG) ===")
  println("Stage 1: สแกนข้อมูลและ Partition ข้ามคลัสเตอร์")
  println("Stage 2: Filter (คะแนน >= 50) -> Transformation (Lazy)")
  println("Stage 3: GroupByKey (ตามรายวิชา) -> Shuffle")

  // จำลองการคำนวณ Action (.collect)
  println("\n=== 2. จุดชนวน Action คำนวณค่าเฉลี่ยจริง ===")
  val passing = logs.filter(_.score >= 50.0)
  val byCourse = passing.groupBy(_.course)

  byCourse.foreach { (courseName, list) =>
    val avgScore = list.map(_.score).sum / list.size
    println(s"📊 วิชา: \$courseName | นักเรียนผ่าน: \${list.size} คน | คะแนนเฉลี่ย: \${avgScore.round}")
  }

@main def main(): Unit =
  val dataset = List(
    StudentLog("STD-01", "Scala 3 Architecture", 88.0),
    StudentLog("STD-02", "Big Data Engineering", 45.0),
    StudentLog("STD-03", "Scala 3 Architecture", 92.0),
    StudentLog("STD-04", "Big Data Engineering", 78.0)
  )
  simulateSparkPipeline(dataset)`,
      challenge: "จงอธิบายความแตกต่างระหว่าง Narrow Transformation (เช่น map/filter) และ Wide Transformation (เช่น groupByKey/join) ใน Apache Spark",
      quiz: [
        {
          question: "เหตุใดภาษา Scala จึงเป็นตัวเลือกที่ได้รับความนิยมสูงสุดในการเขียน Apache Spark บนระบบ Big Data?",
          options: [
            "เพราะ Apache Spark ถูกเขียนด้วย Scala และรองรับ Spark Dataset ที่ให้ Type Safety 100% พร้อมประสิทธิภาพระดับ Native JVM",
            "เพราะภาษาอื่นไม่สามารถรันบนระบบคลาวด์ได้",
            "เพราะ Scala ไม่ต้องใช้พื้นที่ฮาร์ดดิสก์",
            "เพราะ Scala บังคับให้ประมวลผลข้อมูลได้เฉพาะตัวเลขเท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "Apache Spark ถูกพัฒนาด้วยภาษา Scala ทำให้ Scala ได้รับฟีเจอร์ใหม่ก่อนภาษาอื่นเสมอ และสามารถใช้ประโยชน์จาก Spark Dataset[T] ที่ตรวจจับประเภทข้อมูลตั้งแต่ตอนคอมไพล์ได้อย่างเต็มประสิทธิภาพ"
        },
        {
          question: "คำสั่งใดต่อไปนี้ใน Apache Spark จัดเป็นคำสั่งประเภท Action ที่ทำให้ระบบเริ่มประมวลผล DAG ข้ามคลัสเตอร์จริง?",
          options: ["count()", "map()", "filter()", "select()"],
          correctAnswer: 0,
          explanation: "count() เป็น Action ซึ่งจะกระตุ้นให้ Spark เริ่มต้นการคำนวณจริงข้ามเครื่อง Worker Nodes ต่างจาก map, filter หรือ select ที่เป็นเพียงการสร้างแผนการทำงาน (Lazy Transformation)"
        },
        {
          question: "ปัญหา Data Skew ใน Apache Spark ส่งผลเสียต่อการประมวลผลบนคลัสเตอร์อย่างไร?",
          options: [
            "ข้อมูลในบาง Partition มีปริมาณมากกว่า Partition อื่นอย่างมหาศาล ทำให้ Worker Node เครื่องใดเครื่องหนึ่งทำงานหนักอยู่เครื่องเดียวจนงานทั้ง Job ช้าลง",
            "ข้อมูลจะถูกลบทิ้งอัตโนมัติ",
            "เซิร์ฟเวอร์จะแปลงข้อมูลเป็นภาษา C",
            "ไม่ส่งผลเสียใดๆ"
          ],
          correctAnswer: 0,
          explanation: "Data Skew เกิดขึ้นเมื่อ Key ในการจัดกลุ่มกระจายตัวไม่เท่ากัน ทำให้มี Worker ตัวหนึ่งต้องรับภาระข้อมูลมหาศาล (Straggler) ส่งผลให้คลัสเตอร์ทั้งหมดต้องรอเครื่องนั้นทำงานเสร็จ"
        }
      ]
    },
    {
      id: "scala-8",
      title: "Functional Effects และ Asynchronous Systems ด้วย ZIO และ Cats Effect",
      description: "สร้างระบบที่ไม่มีวันแฮงก์ด้วย Functional Effect Systems: Data Types as Programs, Fiber Concurrency, Resource Management, และ Dependency Injection ด้วย ZLayer",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Functional Effect Systems: Cats Effect และ ZIO

ในโลกวิศวกรรมซอฟต์แวร์ระดับ Mission-critical (เช่น ตลาดหลักทรัพย์, ระบบควบคุมดาวเทียม) โปรแกรมเมอร์ต้องการความมั่นใจสูงสุดว่าระบบจะไม่เกิด Unhandled Exception หรือ Resource Leak จึงเกิดแนวคิด **Functional Effects**

## 1. ปรัชญา Effect System: โค้ดคือแผนผัง (Code as Data)
ปกติเมื่อเราสั่ง \`println("hello")\` มันจะส่งผลข้างเคียง (Side-effect) ทันที
แต่ในระบบอย่าง **ZIO** หรือ **Cats Effect**:
- โค้ดไม่ได้สั่งทำงานทันที แต่มันเป็นเพียง **ค่าของข้อมูล (A Description of a Workflow)** ที่บรรยายขั้นตอนการทำงาน
- การทำงานจริงจะเกิดขึ้นเฉพาะที่ **End of the World (จุดรันโปรแกรมสุดท้าย)** เท่านั้น

## 2. โมเดล ZIO[R, E, A]
ZIO มีโครงสร้างประเภทข้อมูลที่บอกเจตจำนงของโปรแกรมอย่างแม่นยำ:
- \`R\` (Environment Requirement): ระบบนี้ต้องการ Dependencies อะไรบ้าง
- \`E\` (Error): ระบบนี้อาจล้มเหลวด้วย Error ชนิดใด
- \`A\` (Value): หากทำงานสำเร็จ จะคืนค่าผลลัพธ์เป็นอะไร

\`\`\`scala
// สัญญาที่ชัดเจน: ต้องการ DatabaseConfig อาจล้มเหลวด้วย DbError หรือได้ User กลับมา
val getUser: ZIO[DatabaseConfig, DbError, User] = ???
\`\`\``,
      codeExample: `// การจำลองแนวคิด Functional Effects (Programs as Values) ใน Scala 3
sealed trait Effect[+A]:
  def run(): A
  def map[B](f: A => B): Effect[B] = Effect.Pure(f(this.run()))
  def flatMap[B](f: A => Effect[B]): Effect[B] = f(this.run())

object Effect:
  case class Pure[A](value: A) extends Effect[A]:
    def run(): A = value

  case class Delay[A](computation: () => A) extends Effect[A]:
    def run(): A = computation()

@main def main(): Unit =
  println("=== จำลอง Functional Effects Pipeline ===")
  // สร้างขั้นตอนการทำงาน แต่ยังไม่ได้รันจริง (Blueprint)
  val pipeline: Effect[String] = for
    step1 <- Effect.Delay(() => "เชื่อมต่อฐานข้อมูล")
    step2 <- Effect.Delay(() => s"\$step1 -> ดึงข้อมูลลูกค้าสำเร็จ")
  yield s"\$step2 -> บันทึก Log เรียบร้อย"

  println("1. สร้างพิมพ์เขียวการทำงานสำเร็จ (ยังไม่มีการประมวลผล I/O)")
  println("2. เริ่มต้นรัน Effect ณ จุด End of the World...")
  val result = pipeline.run() // รันการทำงานจริง
  println(s"ผลลัพธ์การรัน: \$result")`,
      challenge: "จงอธิบายความแตกต่างระหว่างการใช้ Future ดั้งเดิมใน Scala กับการใช้ IO ใน Cats Effect หรือ ZIO ในแง่ของ Referential Transparency",
      quiz: [
        {
          question: "แนวคิด 'Programs as Values' ในระบบ Functional Effect (เช่น ZIO หรือ Cats Effect) หมายถึงอะไร?",
          options: [
            "การเขียนโค้ดเพื่อสร้างเป็นพิมพ์เขียวของขั้นตอนการทำงาน (Description) โดยยังไม่ทำการรัน Side-effects จริงจนกว่าจะถึงจุดสุดท้ายของโปรแกรม",
            "การขายโปรแกรมเป็นสินค้า",
            "การทำให้โปรแกรมใช้เฉพาะตัวเลข",
            "การปิดไม่ให้โปรแกรมส่งผลลัพธ์ออกจอภาพ"
          ],
          correctAnswer: 0,
          explanation: "Effect Systems มองโค้ดเป็นค่าของข้อมูลที่บรรยายขั้นตอนการทำงานอย่างเป็นระเบียบ ทำให้สามารถควบคุมการ Retry, Timeout, และจัดการความปลอดภัยของทรัพยากรได้อย่างสมบูรณ์แบบ"
        },
        {
          question: "ในสเปกของ ZIO[R, E, A] ตัวอักษร E หมายถึงอะไร?",
          options: [
            "ประเภทของข้อผิดพลาดที่โปรแกรมนี้อาจจะโยนออกมา (Expected Error Type)",
            "Environment ที่ต้องการ",
            "ความเร็วของการประมวลผล",
            "จำนวนตัวแปรทั้งหมด"
          ],
          correctAnswer: 0,
          explanation: "ใน ZIO: R คือ Environment (สิ่งที่ต้องใช้), E คือ Error (ข้อผิดพลาดที่อาจเกิดขึ้น), และ A คือความสำเร็จ (ค่าที่ส่งกลับเมื่อสำเร็จ)"
        },
        {
          question: "เหตุใด Scala Future จึงไม่ถือว่ามีคุณสมบัติ Referential Transparency?",
          options: [
            "เพราะ Future เริ่มต้นทำงานทันทีที่ถูกประกาศ (Eager Evaluation) และทำการ Cache ค่าผลลัพธ์ไว้ ทำให้การเขียนชื่อตัวแปรซ้ำไม่เหมือนกับการรันโค้ดนั้นใหม่",
            "เพราะ Future ทำงานช้าเกินไป",
            "เพราะ Future ใช้ได้เฉพาะในภาษา Python",
            "เพราะ Future ไม่รองรับระบบคลาวด์"
          ],
          correctAnswer: 0,
          explanation: "Scala Future ทำงานแบบ Eager ทันทีที่ถูก instantiate ทำให้สูญเสียคุณสมบัติ Referential Transparency ในขณะที่ IO/ZIO เป็นแบบ Lazy Blueprint ที่สามารถนำไปประเมินค่าใหม่กี่ครั้งก็ได้ผลเหมือนเดิม"
        }
      ]
    },
    {
      id: "scala-9",
      title: "การพัฒนา Production Microservices และการ Optimize ระบบ Build ด้วย sbt",
      description: "ประกอบร่างโปรเจกต์ระดับองค์กร: การจัดการ sbt build tool, Continuous Integration, Multi-project Builds, และการจูน JVM Heap/GC สำหรับ Scala Services",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การพัฒนา Production Microservices และการ Optimize sbt

ขั้นตอนสุดท้ายของการเป็นวิศวกรซอฟต์แวร์ภาษา Scala ระดับมืออาชีพ คือการนำระบบขึ้นสู่สภาวะแวดล้อม Production อย่างมีประสิทธิภาพ

## 1. โครงสร้างไฟล์ sbt (Simple Build Tool)
\`build.sbt\` ใช้ภาษา Scala ในการเขียนคอนฟิกของระบบ Build:
\`\`\`scala
ThisBuild / scalaVersion := "3.4.1"
ThisBuild / organization := "ac.th.itacademy"

lazy val root = (project in file("."))
  .settings(
    name := "it-academy-engine",
    version := "1.0.0",
    libraryDependencies ++= Seq(
      "org.apache.pekko" %% "pekko-actor-typed" % "1.0.2",
      "org.playframework" %% "play-json" % "3.0.2",
      "org.scalatest" %% "scalatest" % "3.2.18" % Test
    )
  )
\`\`\`

## 2. JVM Tuning สำหรับงาน Scala Services
- **Garbage Collector แนะนำ:**
  - \`-XX:+UseG1GC\` สำหรับระบบทั่วไป
  - \`-XX:+UseZGC\` สำหรับระบบที่ต้องการ Latency ต่ำพิเศษ (Microsecond Pause Time)
- **การปิด ClassLoader Overhead ใน Container:** ใช้งาน GraalVM Native Image เพื่อคอมไพล์ Scala 3 ให้กลายเป็น Standalone Native Binary ที่เปิดเครื่องได้ใน 0.01 วินาที!`,
      codeExample: `// โครงสร้างมาตรฐานของ Microservice Health Check ใน Scala 3
case class SystemMetrics(
    serviceName: String,
    status: String,
    uptimeSeconds: Long,
    jvmFreeMemoryMb: Long
)

object HealthService:
  private val startTime = System.currentTimeMillis()

  def getHealthStatus(): SystemMetrics =
    val runtime = Runtime.getRuntime()
    val freeMemMb = runtime.freeMemory() / (1024 * 1024)
    val uptime = (System.currentTimeMillis() - startTime) / 1000

    SystemMetrics(
      serviceName = "IT-Academy-Scala-Core",
      status = "HEALTHY",
      uptimeSeconds = uptime,
      jvmFreeMemoryMb = freeMemMb
    )

@main def main(): Unit =
  println("=== ทดสอบ Microservice Health Check Monitor ===")
  val health = HealthService.getHealthStatus()
  println(s"บริการ: \${health.serviceName}")
  println(s"สถานะ: \${health.status}")
  println(s"หน่วยความจำ JVM ที่ว่าง: \${health.jvmFreeMemoryMb} MB")
  println("✓ เซอร์วิสพร้อมรับทราฟฟิก Production 100%")`,
      challenge: "สร้างไฟล์ build.sbt จำลองที่กำหนด dependency ของ Apache Pekko และ ScalaTest พร้อมตั้งค่า Compiler Flags ให้เปิดโหมด Warning แบบเข้มงวด",
      quiz: [
        {
          question: "เครื่องหมาย %% ในการประกาศ libraryDependencies ของ sbt (เช่น 'org.playframework' %% 'play-json' % '3.0.2') มีความหมายอย่างไร?",
          options: [
            "สั่งให้ sbt เติมเวอร์ชันของ Scala ต่อท้ายชื่อ Artifact อัตโนมัติ (เช่น play-json_3) เพื่อป้องกันปัญหาเวอร์ชันไม่ตรงกัน",
            "เป็นการคำนวณเปอร์เซ็นต์ส่วนลดของไลบรารี",
            "สั่งให้ดาวน์โหลดเฉพาะไฟล์ภาพ",
            "เป็นการระบุว่าไลบรารีนี้ฟรี"
          ],
          correctAnswer: 0,
          explanation: "เครื่องหมาย %% เป็นฟีเจอร์สำคัญของ sbt ที่จะผนวกเวอร์ชันของ Scala Binary (เช่น _3 หรือ _2.13) เข้ากับชื่อ Artifact โดยอัตโนมัติ เพื่อให้ดึงไฟล์ไบนารีที่คอมไพล์ด้วยเวอร์ชัน Scala ที่ตรงกัน"
        },
        {
          question: "Garbage Collector ใดของ JVM ที่เหมาะที่สุดสำหรับระบบ Microservices ยุคใหม่ที่ต้องการเวลาหยุดของโปรแกรม (Pause Time) ต่ำกว่าระดับมิลลิวินาที?",
          options: ["ZGC (Z Garbage Collector)", "Serial GC", "Classic Stop-The-World GC", "Parallel GC"],
          correctAnswer: 0,
          explanation: "ZGC เป็น Low-latency Garbage Collector รุ่นใหม่บน JVM ที่ออกแบบมาเพื่อให้เวลาหยุดทำงาน (Pause Time) อยู่ในระดับต่ำกว่า 1 มิลลิวินาที แม้กับหน่วยความจำขนาดใหญ่ระดับ Terabytes"
        },
        {
          question: "GraalVM Native Image ช่วยยกระดับการทำงานของบริการ Scala Microservices บน Kubernetes อย่างไร?",
          options: [
            "คอมไพล์โค้ดและ JVM ทั้งหมดให้กลายเป็น Standalone Executable Binary ล่วงหน้า ทำให้บูตระบบได้ในเสี้ยววินาทีและกิน RAM ลดลงมหาศาล",
            "เพิ่มขนาดหน่วยความจำเซิร์ฟเวอร์",
            "ลดความเร็วของโปรแกรมเพื่อประหยัดไฟ",
            "ทำการเปลี่ยนภาษาเป็น Python"
          ],
          correctAnswer: 0,
          explanation: "GraalVM Native Image ทำการคอมไพล์แบบ Ahead-of-Time (AOT) ทำให้ไม่ต้องรัน JVM แบบดั้งเดิม ส่งผลให้ Container สามารถเปิดทำงานได้ในหลักเสี้ยววินาที (Instant Startup) และใช้ RAM น้อยมาก"
        }
      ]
    }
  ]
};
