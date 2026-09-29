import { Course } from "../types";

export const kotlinCourse: Course = {
  id: "kotlin",
  title: "Modern Kotlin & Enterprise/Android Architecture",
  description: "เรียนรู้ภาษา Kotlin ยุคใหม่ตั้งแต่ Sound Null Safety, Data Classes, Extension Functions, Coroutines, Reactive Flow จนถึง Backend ด้วย Ktor และ Kotlin Multiplatform (KMP)",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาซอฟต์แวร์ด้วยภาษา Kotlin ยุคใหม่ (Modern Kotlin Systems Engineering) จาก JetBrains และ Google ออกแบบมาเพื่อยกระดับทักษะการเขียนโปรแกรมทั้งบนฝั่ง Mobile (Android) และ Backend Server ครอบคลุมตั้งแต่การแก้ปัญหาล้านดอลลาร์ NullPointerException ด้วย Sound Null Safety, สถาปัตยกรรม Sealed Classes และ Pattern Matching, การเขียน Functional Programming ร่วมกับ Scope Functions (let, apply, run, also, with), การสร้าง Extension Functions เพื่อเพิ่มความสามารถให้คลาสเดิมโดยไม่ต้องแก้โค้ด, การประมวลผลอะซิงโครนัสระดับล้านงานด้วย Kotlin Coroutines และ Structured Concurrency, การจัดการข้อมูลสตรีมมิ่งด้วย Kotlin Flow, การสร้าง High-Performance Microservices ด้วย Ktor Framework, ตลอดจนการพัฒนาแอปพลิเคชันแบบข้ามแพลตฟอร์มด้วย Kotlin Multiplatform (KMP)",
  icon: "🟣",
  color: "purple",
  gradient: "from-purple-600 via-indigo-600 to-pink-600",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Kotlin", "Coroutines", "Android", "Ktor", "Flow", "KMP", "JVM", "Null Safety"],
  recommendedTools: [
    {
      name: "IntelliJ IDEA / Android Studio",
      icon: "💻",
      badge: "Official IDE",
      description: "สภาพแวดล้อมการพัฒนาภาษา Kotlin ที่สมบูรณ์แบบที่สุดจากผู้สร้างภาษา JetBrains พร้อมระบบตรวจจับ Type และ Coroutine Debugger",
      downloadUrl: "https://www.jetbrains.com/idea/",
      setupGuide: "1. ติดตั้ง IntelliJ IDEA Community หรือ Ultimate\n2. ติดตั้ง JDK 17 หรือ 21 (Temurin / Corretto)\n3. สร้างโปรเจกต์ใหม่: New Project -> Kotlin -> Console Application"
    },
    {
      name: "Kotlin CLI & Gradle",
      icon: "🟣",
      badge: "Build Toolchain",
      description: "เครื่องมือคอมไพล์เดี่ยว kotlinc และระบบ Build Automation สมัยใหม่ด้วย Gradle Kotlin DSL (.gradle.kts)",
      downloadUrl: "https://kotlinlang.org/",
      setupGuide: "1. ติดตั้งผ่าน SDKMAN: sdk install kotlin\n2. ตรวจสอบเวอร์ชัน: kotlinc -version\n3. รันโค้ดทันที: kotlinc script.kt -include-runtime -d app.jar && java -jar app.jar"
    }
  ],
  lessons: [
    {
      id: "kotlin-1",
      title: "ปรัชญาภาษา Kotlin และระบบความปลอดภัยต่อค่าว่าง (Sound Null Safety)",
      description: "กำจัดข้อผิดพลาด NullPointerException (The Billion-Dollar Mistake) ด้วย Non-nullable Types, Safe Call (?.), Elvis Operator (?:), และ Not-null Assertion (!!)",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# ปรัชญาภาษา Kotlin และระบบ Sound Null Safety

Sir Tony Hoare ผู้คิดค้น Null Reference ในปี 1965 เคยกล่าวไว้ว่ามันคือ **"ความผิดพลาดมูลค่าพันล้านดอลลาร์ (The Billion-Dollar Mistake)"** ที่นำไปสู่ข้อผิดพลาดและช่องโหว่ซอฟต์แวร์นับไม่ถ้วน ภาษา Kotlin จึงถูกออกแบบให้มี **Null Safety ระดับ Type System ของตัวคอมไพเลอร์**

## 1. Non-nullable vs Nullable Types
ใน Kotlin ตัวแปรทุกตัวจะไม่สามารถเป็น \`null\` ได้ตามค่าเริ่มต้น (Non-nullable):
\`\`\`kotlin
var name: String = "Somchai"
// name = null // ❌ คอมไพเลอร์ปฏิเสธทันที (Compile-time Error!)

var nullableName: String? = "Kanda"
nullableName = null // ✅ ใส่เครื่องหมาย ? เพื่อบอกว่าเป็น Nullable
\`\`\`

## 2. ตัวดำเนินการจัดการค่าว่าง
1. **Safe Call Operator (\`?.\`):** เรียกใช้งาน Method เฉพาะเมื่อตัวแปรไม่เป็น null (หากเป็น null จะคืนค่า null โดยไม่พัง)
2. **Elvis Operator (\`?:\`):** กำหนดค่าเริ่มต้นสำรอง (Fallback) หากค่าฝั่งซ้ายเป็น null
3. **Safe Cast (\`as?\`):** แปลงประเภทข้อมูลอย่างปลอดภัย หากแปลงไม่ได้จะคืนค่า null แทนการพังด้วย ClassCastException
4. **Not-null Assertion (\`!!\`):** บังคับให้คอมไพเลอร์เชื่อว่าตัวแปรไม่เป็น null (ควรหลีกเลี่ยง เพราะอาจทำให้เกิด NPE หากมี null จริง)

\`\`\`kotlin
val length: Int = nullableName?.length ?: 0 // ถ้าเป็น null ให้ใช้ 0
\`\`\``,
      codeExample: `// การสาธิต Sound Null Safety ในภาษา Kotlin
fun main() {
    println("=== 1. Non-nullable vs Nullable Types ===")
    val regularString: String = "IT Academy"
    var optionalString: String? = null

    println("Regular String: \$regularString (Length: \${regularString.length})")
    println("Optional String: \$optionalString")

    println("\n=== 2. Safe Call (?.) และ Elvis Operator (?:) ===")
    val measuredLength: Int = optionalString?.length ?: -1
    println("ความยาวของ optionalString (ใช้ค่าสำรองเมื่อเป็น null): \$measuredLength")

    optionalString = "Kotlin Modern Engineering"
    val updatedLength: Int = optionalString?.length ?: 0
    println("ความยาวหลังกำหนดค่า: \$updatedLength")

    println("\n=== 3. ฟังก์ชัน let สำหรับประมวลผลเมื่อไม่เป็น null ===")
    val username: String? = "somchai_dev"
    username?.let { safeValue ->
        println("พบชื่อผู้ใช้ที่ถูกต้อง: \${safeValue.uppercase()}")
    }
}`,
      challenge: "สร้างฟังก์ชัน calculateTotal(price: Double?, discountPercent: Double?) ที่คืนค่ายอดเงินสุทธิอย่างปลอดภัย หากมีค่าใดค่าหนึ่งเป็น null ให้ใช้ค่า 0.0 เสมอ",
      quiz: [
        {
          question: "ตัวดำเนินการ Elvis Operator (?:) ในภาษา Kotlin ทำหน้าที่อะไร?",
          options: [
            "คืนค่าสำรองทางฝั่งขวาหากนิพจน์ทางฝั่งซ้ายประเมินค่าออกมาเป็น null",
            "ตรวจสอบว่าตัวแปรเป็นจำนวนคู่หรือไม่",
            "สั่งบังคับปิดโปรแกรมทันที",
            "แปลงข้อความตัวพิมพ์เล็กเป็นพิมพ์ใหญ่"
          ],
          correctAnswer: 0,
          explanation: "Elvis Operator (?:) จะตรวจสอบค่าฝั่งซ้าย หากไม่ใช่ null จะใช้ค่านั้น แต่ถ้าเป็น null จะเลือกใช้ค่าทางฝั่งขวาเป็นค่าเริ่มต้นสำรอง"
        },
        {
          question: "ใน Kotlin หากต้องการประกาศตัวแปร String ที่สามารถเก็บค่า null ได้ จะต้องเขียนอย่างไร?",
          options: ["var str: String? = null", "var str: String = null", "var str: Nullable<String>", "var str: Option[String]"],
          correctAnswer: 0,
          explanation: "ใน Kotlin ต้องใส่เครื่องหมายคำถาม (?) ต่อท้ายชื่อ Type เช่น String? เพื่อระบุอย่างชัดเจนว่าตัวแปรนั้นอนุญาตให้มีค่าเป็น null ได้"
        },
        {
          question: "เหตุใดจึงควรหลีกเลี่ยงการใช้ Not-null Assertion Operator (!!) ในโค้ดระดับ Production?",
          options: [
            "เพราะหากตัวแปรนั้นมีค่าเป็น null จริง โปรแกรมจะพังทันทีด้วย NullPointerException (NPE)",
            "เพราะทำให้คอมไพเลอร์ทำงานช้าลง 10 เท่า",
            "เพราะใช้งานได้เฉพาะกับภาษา Java เท่านั้น",
            "เพราะคำสั่งนี้จะลบตัวแปรออกจากหน่วยความจำ"
          ],
          correctAnswer: 0,
          explanation: "เครื่องหมาย !! จะสั่งปิดระบบตรวจจับ Null Safety ของคอมไพเลอร์ หากจังหวะนั้นมีค่าเป็น null จริง จะเกิด NullPointerException ขึ้นขณะรันไทม์"
        }
      ]
    },
    {
      id: "kotlin-2",
      title: "Data Classes, Sealed Classes, Pattern Matching และ Smart Casting",
      description: "ออกแบบโมเดลข้อมูลด้วย Data Classes (copy, destructuring), จัดการสถานะระบบแบบ Exhaustive ด้วย Sealed Classes / Interfaces และนิพจน์ when",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# Data Classes, Sealed Classes และ Smart Casting

Kotlin ปฏิวัติการสร้าง Data Models บน JVM ให้เหลือเพียง 1 บรรทัด และแก้ปัญหาการจัดการสถานะของระบบด้วย **Algebraic Data Types (ADTs)**

## 1. Data Classes (โมเดลข้อมูลสำเร็จรูป)
เมื่อใส่คีย์เวิร์ด \`data\` หน้า Class คอมไพเลอร์จะสร้าง Method เหล่านี้ให้ทันที:
- \`equals()\` และ \`hashCode()\` (เปรียบเทียบค่าข้อมูล ไม่ใช่ตำแหน่ง RAM)
- \`toString()\` ในรูปแบบที่อ่านเข้าใจง่าย
- \`copy()\` สำหรับการสร้างอ็อบเจกต์ใหม่พร้อมแก้ไขบางฟิลด์ (Immutability Pattern)
- \`componentN()\` รองรับ Destructuring Declarations

\`\`\`kotlin
data class User(val id: Long, val name: String, val email: String)

val user1 = User(1, "Somchai", "somchai@gmail.com")
val user2 = user1.copy(email = "new_email@gmail.com") // Immutability
val (id, name) = user1 // Destructuring
\`\`\`

## 2. Sealed Classes / Sealed Interfaces (การจำกัดวงศ์ของคลาส)
Sealed Class คือคลาสแม่ที่จำกัดคลาสลูกไว้ในขอบเขตที่คอมไพเลอร์รู้ล่วงหน้าทั้งหมด เหมาะอย่างยิ่งสำหรับการทำ **State Management** (เช่น Lce: Loading, Content, Error):

\`\`\`kotlin
sealed interface UiState {
    data object Loading : UiState
    data class Success(val data: List<String>) : UiState
    data class Error(val exception: Throwable) : UiState
}
\`\`\`

## 3. Pattern Matching ด้วย \`when\` และ Smart Cast
คอมไพเลอร์ Kotlin จะฉลาดพอที่จะรู้ว่าไม่ต้องใส่ \`else\` หากดักสถานะของ Sealed Class ครบถ้วนแล้ว (Exhaustive \`when\`):
\`\`\`kotlin
fun render(state: UiState) = when (state) {
    is UiState.Loading -> println("กำลังโหลด...")
    is UiState.Success -> println("ข้อมูล: \${state.data.size} รายการ") // Smart Cast อัตโนมัติ!
    is UiState.Error   -> println("ข้อผิดพลาด: \${state.exception.message}")
}
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Data Classes, Sealed Interfaces และ Smart Casts
sealed interface NetworkResult<out T> {
    data class Success<T>(val data: T, val statusCode: Int = 200) : NetworkResult<T>
    data class Failure(val errorMessage: String, val errorCode: Int) : NetworkResult<Nothing>
    data object InProgress : NetworkResult<Nothing>
}

data class Product(val id: Int, val name: String, val price: Double)

fun handleResponse(result: NetworkResult<Product>) {
    // when expression ใน Kotlin มีคุณสมบัติ Exhaustive
    when (result) {
        is NetworkResult.InProgress -> {
            println("⏳ [CONNECTING]: กำลังเชื่อมต่อ API...")
        }
        is NetworkResult.Success -> {
            // Smart Cast: result ถูกแคสต์เป็น NetworkResult.Success<Product> อัตโนมัติ
            val product = result.data
            println("✓ [SUCCESS \${result.statusCode}]: สินค้า '\${product.name}' ราคา \${product.price} บาท")
        }
        is NetworkResult.Failure -> {
            println("✗ [ERROR \${result.errorCode}]: \${result.errorMessage}")
        }
    }
}

fun main() {
    val p1 = Product(101, "Ergonomic Chair", 8500.0)
    val p2 = p1.copy(price = 7990.0) // ทดสอบ .copy()

    println("ข้อมูลเดิม: \$p1")
    println("ข้อมูลใหม่หลังลดราคา: \$p2")

    println("\n=== ทดสอบ NetworkResult State Management ===")
    handleResponse(NetworkResult.InProgress)
    handleResponse(NetworkResult.Success(p2))
    handleResponse(NetworkResult.Failure("ไม่พบทรัพยากรบนเซิร์ฟเวอร์", 404))
}`,
      challenge: "สร้าง Sealed Interface ชื่อ PaymentMethod ที่มีคลาสลูก CreditCard, BankTransfer, และ PromptPay พร้อมเขียนฟังก์ชัน processPayment ที่ใช้คำสั่ง when เพื่อประมวลผล",
      quiz: [
        {
          question: "ข้อดีหลักของ Sealed Class เมื่อนำมาใช้งานร่วมกับนิพจน์ when คืออะไร?",
          options: [
            "คอมไพเลอร์ตรวจสอบได้ครบถ้วน (Exhaustive Check) ทำให้ไม่ต้องเขียนบล็อก else หากดักคลาสลูกครบทุกกรณีแล้ว",
            "ทำให้การเขียนโปรแกรมทำงานช้าลงเพื่อความปลอดภัย",
            "บังคับให้คลาสมีขนาดเท่ากันในหน่วยความจำ",
            "แปลงโค้ดให้กลายเป็นภาษา C++"
          ],
          correctAnswer: 0,
          explanation: "เนื่องจาก Sealed Class มีลำดับชั้นของคลาสลูกที่แน่นอน คอมไพเลอร์จึงรู้ทุกกรณีที่เป็นไปได้ เมื่อเขียนคำสั่ง when จึงไม่จำเป็นต้องมี else และจะแจ้งเตือนทันทีหากเพิ่มคลาสลูกใหม่แล้วลืมดักจับ"
        },
        {
          question: "Method copy() ที่คอมไพเลอร์สร้างให้ใน Data Class มีประโยชน์อย่างไร?",
          options: [
            "ช่วยสร้างอ็อบเจกต์ตัวใหม่โดยคัดลอกค่าเดิมทั้งหมด และอนุญาตให้แก้ไขเฉพาะบางฟิลด์ที่ต้องการ (Immutability Pattern)",
            "ลบอ็อบเจกต์เดิมออกจากหน่วยความจำทันที",
            "คัดลอกไฟล์โปรเจกต์ไปยังโฟลเดอร์อื่น",
            "แปลงคลาสให้กลายเป็น JSON อัตโนมัติ"
          ],
          correctAnswer: 0,
          explanation: "Method copy() เป็นหัวใจของการเขียนโค้ดแบบ Immutable โดยจะโคลนอ็อบเจกต์เดิมออกมาพร้อมปรับเปลี่ยนเฉพาะฟิลด์ที่ระบุค่าใหม่"
        },
        {
          question: "Smart Casting ใน Kotlin หมายถึงความสามารถใดของคอมไพเลอร์?",
          options: [
            "การแคสต์ประเภทข้อมูลให้อัตโนมัติหลังจากตรวจสอบเงื่อนไข is สำเร็จ โดยไม่ต้องพิมพ์แคสต์ซ้ำเอง",
            "การแปลงตัวเลขจำนวนเต็มเป็นทศนิยมอัตโนมัติ",
            "การสลับค่าระหว่าง 2 ตัวแปร",
            "การบีบอัดไฟล์ JAR ให้เล็กลง"
          ],
          correctAnswer: 0,
          explanation: "เมื่อตรวจสอบ if (obj is String) คอมไพเลอร์จะแคสต์ obj เป็นประเภท String ภายในบล็อกนั้นให้ทันทีโดยอัตโนมัติ ไม่ต้องสั่ง (String) obj ซ้ำซ้อน"
        }
      ]
    },
    {
      id: "kotlin-3",
      title: "Functional Kotlin, Extension Functions และ Scope Functions",
      description: "ยกระดับความสะอาดของโค้ดด้วย Extension Functions, Higher-Order Functions, Lambdas with Receiver, และ Scope Functions (let, apply, run, also, with)",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Extension Functions และ Scope Functions ในภาษา Kotlin

Kotlin ผสมผสานความเป็น Object-Oriented และ Functional Programming ได้อย่างลงตัว โดยหนึ่งในฟีเจอร์ที่ได้รับความนิยมสูงสุดคือ **Extension Functions**

## 1. Extension Functions (การขยายความสามารถคลาส)
เราสามารถเพิ่ม Method ให้กับคลาสใดก็ได้ (แม้กระทั่งคลาสใน Standard Library ที่เราไม่มี Source Code) โดยไม่ต้องใช้การสืบทอด (Inheritance):
\`\`\`kotlin
// เพิ่มฟังก์ชัน isEmailValid ให้กับคลาส String ในระบบ
fun String.isEmailValid(): Boolean {
    return this.contains("@") && this.contains(".")
}

val email = "somchai@gmail.com"
println(email.isEmailValid()) // true
\`\`\`

## 2. Scope Functions ทั้ง 5 ตัว (ตารางตัดสินใจเลือกใช้งาน)
Scope Functions ช่วยรันบล็อกโค้ดภายใต้บริบท (Context) ของอ็อบเจกต์:

| Function | Context Object | Return Value | กรณีการใช้งานที่แนะนำ |
| :--- | :---: | :---: | :--- |
| **\`let\`** | \`it\` | Lambda Result | ตรวจสอบ null (\`obj?.let\`) หรือแปลงค่าตัวแปร |
| **\`apply\`** | \`this\` | Context Object | กำหนดค่าเริ่มต้นให้อ็อบเจกต์ (Object Configuration) |
| **\`run\`** | \`this\` | Lambda Result | คำนวณค่าจากอ็อบเจกต์ หรือรันกลุ่มโค้ด |
| **\`also\`** | \`it\` | Context Object | ทำงานเสริม (Side-effects) เช่น Logging |
| **\`with\`** | \`this\` | Lambda Result | เรียกหลาย Method บนอ็อบเจกต์เดียวกันโดยไม่ต้องพิมพ์ชื่อซ้ำ |`,
      codeExample: `// การประยุกต์ใช้ Extension Functions และ Scope Functions
data class ServerConfig(
    var host: String = "localhost",
    var port: Int = 8080,
    var timeoutMs: Long = 5000,
    var isSsl: Boolean = false
)

// 1. สร้าง Extension Function ขยายความสามารถคลาส Double
fun Double.formatCurrency(symbol: String = "THB"): String {
    return String.format("%,.2f %s", this, symbol)
}

fun main() {
    println("=== 1. ทดสอบ Extension Function ===")
    val productPrice = 145900.50
    println("ราคาจัดแสดง: \${productPrice.formatCurrency()}")

    println("\n=== 2. ทดสอบ Scope Functions (apply และ also) ===")
    // apply: กำหนดค่าอ็อบเจกต์แล้วคืนค่าอ็อบเจกต์นั้นกลับมา
    val config = ServerConfig().apply {
        host = "api.itacademy.ac.th"
        port = 443
        isSsl = true
        timeoutMs = 10000
    }.also {
        println("📝 [LOG]: บันทึกการสร้างคอนฟิกสำหรับ Host: \${it.host}:\${it.port} (SSL: \${it.isSsl})")
    }

    println("\n=== 3. ทดสอบ let สำหรับ Transformation ===")
    val rawInput: String? = "  kotlin developer  "
    val processed = rawInput?.let { text ->
        text.trim().uppercase()
    }
    println("ผลลัพธ์จาก let: '\$processed'")
}`,
      challenge: "สร้าง Extension Function ให้กับ List<Int> ชื่อ secondLargest() ที่คืนค่าตัวเลขที่มีค่ามากเป็นอันดับสอง (หรือ null หากมีสมาชิกน้อยกว่า 2 ตัว)",
      quiz: [
        {
          question: "Scope Function ใดที่นิยมใช้มากที่สุดสำหรับการกำหนดค่าเริ่มต้นให้กับ Property ของอ็อบเจกต์ (Object Configuration) และคืนค่าอ็อบเจกต์นั้นกลับออกมา?",
          options: ["apply", "let", "run", "also"],
          correctAnswer: 0,
          explanation: "apply จะใช้ this เป็น context object และคืนค่า context object นั้นกลับออกมาเสมอ จึงเหมาะที่สุดสำหรับการสร้างและ initialize ค่าให้อ็อบเจกต์"
        },
        {
          question: "Extension Function ในภาษา Kotlin ถูกคอมไพล์ลงบน JVM Bytecode ในรูปแบบใดเบื้องหลัง?",
          options: [
            "Static Method ปกติที่รับอ็อบเจกต์ผู้เรียก (Receiver) เป็น Parameter ตัวแรก",
            "การแก้ไข Source Code ของคลาสแม่โดยตรง",
            "การสร้าง Dynamic Proxy ที่กินหน่วยความจำสูง",
            "การทำ Class Loading แบบ Reflection"
          ],
          correctAnswer: 0,
          explanation: "เบื้องหลัง Extension Function จะถูกคอมไพล์เป็น Static Method ธรรมดาที่รับ Receiver Object เข้าไปเป็นอาร์กิวเมนต์แรก จึงไม่มีค่าใช้จ่ายด้าน Performance (Zero-overhead)"
        },
        {
          question: "ความแตกต่างสำคัญระหว่าง let และ also คืออะไร?",
          options: [
            "let คืนค่าผลลัพธ์ของ Lambda ส่วน also คืนค่า Context Object เดิมกลับมา",
            "let ใช้ได้เฉพาะกับตัวเลข ส่วน also ใช้ได้เฉพาะกับข้อความ",
            "also เร็วกว่า let 10 เท่า",
            "ทั้งคู่คืนค่าเดิมเหมือนกันทุกประการ"
          ],
          correctAnswer: 0,
          explanation: "let จะส่งค่าผลลัพธ์บรรทัดสุดท้ายของ Lambda ออกมา เหมาะกับการแปลงค่า ส่วน also จะคืนค่าอ็อบเจกต์ตั้งต้นเดิมออกมา เหมาะกับการทำ Side-effect เช่น logging"
        }
      ]
    },
    {
      id: "kotlin-4",
      title: "Collections, Sequences และ Operator Overloading",
      description: "เพิ่มประสิทธิภาพการประมวลผลข้อมูลมหาศาลด้วย Lazy Evaluation บน Sequences และการกำหนดความหมายใหม่ให้สัญลักษณ์ด้วย Operator Overloading",
      duration: "35 นาที",
      level: "ปานกลาง",
      content: `# Collections, Sequences และ Operator Overloading

## 1. Eager Collections vs Lazy Sequences
- **List / Set / Map (Eager Evaluation):** เมื่อเราต่อ Method Chaining เช่น \`.filter().map().take(2)\` ข้อมูลในแต่ละขั้นตอนจะถูกสร้างเป็น List ชั่วคราวขึ้นมาใหม่ทันที (กิน RAM มากหากข้อมูลมีนับแสนแถว)
- **Sequence (Lazy Evaluation):** ข้อมูลจะถูกประมวลผลแบบทีละชิ้น (Element by Element) ตั้งแต่ต้นจนจบ Chain และจะทำงานเมื่อมีคำสั่งสุดท้าย (Terminal Operation เช่น \`.toList()\` หรือ \`.first()\`) เท่านั้น

\`\`\`kotlin
// ❌ Eager: ประมวลผลล้านตัวเลขทันที
val result1 = (1..1_000_000).filter { it % 2 == 0 }.map { it * 2 }.take(2)

// ✅ Lazy Sequence: ประมวลผลเฉพาะตัวที่จำเป็นจนกว่าจะได้ 2 ตัวแรก
val result2 = (1..1_000_000).asSequence()
    .filter { it % 2 == 0 }
    .map { it * 2 }
    .take(2)
    .toList()
\`\`\`

## 2. Operator Overloading
Kotlin อนุญาตให้นักพัฒนากำหนดความหมายให้กับเครื่องหมายทางคณิตศาสตร์ (\`+\`, \`-\`, \`*\`, \`[]\`) ผ่านคีย์เวิร์ด \`operator\`:
\`\`\`kotlin
data class Vector2D(val x: Int, val y: Int) {
    operator fun plus(other: Vector2D): Vector2D {
        return Vector2D(this.x + other.x, this.y + other.y)
    }
}

val v1 = Vector2D(10, 20)
val v2 = Vector2D(5, 15)
val v3 = v1 + v2 // เรียกใช้ v1.plus(v2) อัตโนมัติ ได้ Vector2D(15, 35)
\`\`\``,
      codeExample: `// การเปรียบเทียบประสิทธิภาพ Sequence และการใช้ Operator Overloading
data class Money(val amount: Double, val currency: String = "THB") {
    operator fun plus(other: Money): Money {
        require(this.currency == other.currency) { "ไม่สามารถรวมเงินต่างสกุลได้" }
        return Money(this.amount + other.amount, this.currency)
    }

    operator fun times(multiplier: Int): Money {
        return Money(this.amount * multiplier, this.currency)
    }
}

fun main() {
    println("=== 1. Operator Overloading ===")
    val wallet1 = Money(1500.0)
    val wallet2 = Money(3200.0)
    val totalWallet = wallet1 + wallet2 // เรียก .plus()
    val bonusTrip = totalWallet * 2     // เรียก .times()

    println("รวมกระเป๋า: \${totalWallet.amount} \${totalWallet.currency}")
    println("โบนัส 2 เท่า: \${bonusTrip.amount} \${bonusTrip.currency}")

    println("\n=== 2. Lazy Sequence Demonstration ===")
    var operationCount = 0
    val firstTwoSquares = (1..1000).asSequence()
        .filter { 
            operationCount++
            it % 2 == 0 
        }
        .map { it * it }
        .take(2)
        .toList()

    println("ผลลัพธ์ 2 ตัวแรก: \$firstTwoSquares")
    println("จำนวนรอบที่คำนวณจริง: \$operationCount รอบ (ประหยัดกว่าการรัน 1,000 รอบอย่างมหาศาล)")
}`,
      challenge: "สร้างคลาส Matrix2x2 พร้อมทำ Operator Overloading สำหรับเครื่องหมาย + (บวกเมทริกซ์) และเครื่องหมาย * (คูณเมทริกซ์)",
      quiz: [
        {
          question: "เหตุใด Kotlin Sequence จึงมีประสิทธิภาพสูงกว่า Collection ปกติเมื่อจัดการกับชุดข้อมูลขนาดใหญ่ที่มีการทำ Method Chaining หลายชั้น?",
          options: [
            "เพราะ Sequence ทำงานแบบ Lazy Evaluation โดยประมวลผลข้อมูลทีละชิ้นและไม่สร้าง Collection ชั่วคราวขึ้นมาใน RAM ระหว่างทาง",
            "เพราะ Sequence รันบน GPU",
            "เพราะ Sequence ไม่ใช้หน่วยความจำเลยแม้แต่ไบต์เดียว",
            "เพราะ Sequence ทำการลบข้อมูลทั้งหมดทิ้งก่อนคำนวณ"
          ],
          correctAnswer: 0,
          explanation: "Sequence จะดึงข้อมูลทีละตัวแล้วส่งผ่าน pipeline ทั้งหมดทีละรายการ ไม่สร้าง intermediate collection ในหน่วยความจำ และหยุดทันทีเมื่อได้ข้อมูลครบตาม Terminal Operation เช่น .take(n)"
        },
        {
          question: "คีย์เวิร์ดใดที่ต้องใส่หน้า Method เพื่ออนุญาตให้ฟังก์ชันนั้นทำ Operator Overloading เช่น plus, minus ใน Kotlin?",
          options: ["operator", "override", "custom", "infix"],
          correctAnswer: 0,
          explanation: "ใน Kotlin ต้องระบุคีย์เวิร์ด operator หน้า Method ที่มีชื่อตรงตามข้อกำหนดของระบบ (เช่น plus, minus, times, get) เพื่อให้สามารถใช้สัญลักษณ์ทางคณิตศาสตร์ได้"
        },
        {
          question: "คำสั่งใดใช้เปลี่ยน Collection ธรรมดาใน Kotlin ให้กลายเป็น Lazy Sequence?",
          options: [".asSequence()", ".toLazy()", ".makeSequence()", ".stream()"],
          correctAnswer: 0,
          explanation: "คำสั่ง .asSequence() ใช้แปลง Collection ใดๆ (เช่น List หรือ Set) ให้กลายเป็น Sequence เพื่อเข้าสู่โหมด Lazy Evaluation"
        }
      ]
    },
    {
      id: "kotlin-5",
      title: "Kotlin Coroutines และ Structured Concurrency",
      description: "เจาะลึก Light-weight Threads: Suspend Functions, Coroutine Builders (launch, async), Dispatchers (Default, IO, Main), และการป้องกัน Coroutine Leaks",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Kotlin Coroutines และ Structured Concurrency

**Coroutines** คือ Light-weight Threads ของ Kotlin ที่ช่วยให้เราเขียนโค้ด Asynchronous/Non-blocking ให้อ่านง่ายเหมือนโค้ด Sequential ปกติ โดย 1 Process สามารถเปิด Coroutines พร้อมกันได้นับแสนตัวโดยไม่เปลือง RAM

## 1. Suspend Function และ State Machine
ฟังก์ชันที่ขึ้นต้นด้วยคีย์เวิร์ด \`suspend\` สามารถถูกหยุดพัก (Suspend) และกลับมาทำงานต่อ (Resume) ได้โดย **ไม่บล็อก Thread หลักของระบบปฏิบัติการ**:
\`\`\`kotlin
suspend fun fetchUserProfile(userId: Int): User {
    delay(1000) // พัก Coroutine โดยไม่กิน CPU หรือบล็อก Thread
    return User(userId, "Somchai", "somchai@gmail.com")
}
\`\`\`

## 2. Coroutine Builders: \`launch\` vs \`async\`
- **\`launch\`:** สร้าง Coroutine แบบ "Fire and Forget" คืนค่าเป็น \`Job\` (ไม่ส่งค่าผลลัพธ์กลับมา)
- **\`async\`:** สร้าง Coroutine ที่ทำงานคู่ขนานและส่งค่าผลลัพธ์กลับมาในรูปแบบ \`Deferred<T>\` โดยดึงค่าด้วยคำสั่ง \`.await()\`

## 3. Coroutine Dispatchers
- **\`Dispatchers.Main\`:** รันบน Main/UI Thread (ใช้ใน Android)
- **\`Dispatchers.IO\`:** รันบน Thread Pool ที่เหมาะสำหรับงาน Disk & Network I/O
- **\`Dispatchers.Default\`:** รันบน Thread Pool ที่เท่ากับจำนวน CPU Cores เหมาะสำหรับงานคำนวณหนัก (CPU-bound)

## 4. Structured Concurrency (สถาปัตยกรรมโครงสร้างพร้อมกัน)
Coroutines ของ Kotlin ยึดหลัก Structured Concurrency กล่าวคือ Coroutine ลูกทุกตัวจะผูกติดกับ Scope ของแม่ หาก Scope ของแม่ถูกกดยกเลิก (Cancelled) Coroutine ลูกทั้งหมดจะถูกทำลายอัตโนมัติ ป้องกันปัญหา Memory Leaks และ Zombie Tasks โดยเด็ดขาด`,
      codeExample: `// ตัวอย่างการจำลองการทำงานของ Kotlin Coroutines และ async/await
import kotlinx.coroutines.*
import kotlin.system.measureTimeMillis

suspend fun fetchWeatherApi(): String {
    delay(100) // จำลอง Network I/O
    return "28.5 °C (Sunny)"
}

suspend fun fetchTrafficApi(): String {
    delay(120) // จำลอง Network I/O
    return "Traffic Normal (Green)"
}

fun main() = runBlocking {
    println("=== เริ่มต้นประมวลผลข้อมูลคู่ขนานด้วย async/await ===")
    val executionTime = measureTimeMillis {
        // ยิงคำสั่งดึงข้อมูล 2 แหล่งพร้อมกัน
        val weatherDeferred: Deferred<String> = async(Dispatchers.Default) { fetchWeatherApi() }
        val trafficDeferred: Deferred<String> = async(Dispatchers.Default) { fetchTrafficApi() }

        println("กำลังรอข้อมูลจากเซิร์ฟเวอร์...")
        val weather = weatherDeferred.await()
        val traffic = trafficDeferred.await()

        println("✓ ข้อมูลสภาพอากาศ: \$weather")
        println("✓ ข้อมูลการจราจร: \$traffic")
    }
    println("ประมวลผลเสร็จสิ้นใน: \$executionTime ms (เร็วขึ้นเพราะรันแบบคู่ขนาน)")
}`,
      challenge: "เขียนฟังก์ชัน coroutineScope ที่รันงาน async 3 งานพร้อมกัน หากงานใดงานหนึ่งเกิด Exception ต้องยกเลิกงานที่เหลือทันที",
      quiz: [
        {
          question: "ความแตกต่างระหว่าง Thread ของระบบปฏิบัติการ และ Coroutine ของ Kotlin คือข้อใด?",
          options: [
            "Coroutine เป็น Light-weight Thread ที่รันอยู่บน Thread Pool สามารถสร้างได้นับแสนตัวโดยกิน RAM น้อยมาก และคำสั่ง suspend จะไม่บล็อก Thread",
            "Coroutine กินหน่วยความจำมากกว่า Thread 1,000 เท่า",
            "Thread รันได้เฉพาะบนเซิร์ฟเวอร์ ส่วน Coroutine รันได้เฉพาะบนเบราว์เซอร์",
            "ทั้งคู่เป็นสิ่งเดียวกันทุกประการ"
          ],
          correctAnswer: 0,
          explanation: "Coroutine ถูกจัดการในระดับ User Space บน JVM ทำให้ประหยัดหน่วยความจำอย่างมหาศาล (กิน RAM ไม่กี่ร้อยไบต์ต่อตัว เทียบกับ Thread ของ OS ที่กินประมาณ 1MB) และสามารถสลับการทำงานได้โดยไม่เกิด Context Switch ที่มีค่าใช้จ่ายสูง"
        },
        {
          question: "หากต้องการดึงข้อมูล API 2 เส้นพร้อมกัน แล้วนำผลลัพธ์มารวมกัน ควรใช้ Coroutine Builder ใด?",
          options: ["async ร่วมกับ .await()", "launch", "runBlocking", "yield"],
          correctAnswer: 0,
          explanation: "async จะคืนค่าเป็น Deferred<T> ซึ่งอนุญาตให้เรารันงานพร้อมกันในเบื้องหลัง และดึงผลลัพธ์กลับมาเมื่อต้องการด้วยคำสั่ง .await()"
        },
        {
          question: "หลักการ Structured Concurrency ใน Kotlin Coroutines มีประโยชน์สูงสุดในเรื่องใด?",
          options: [
            "ป้องกันปัญหา Coroutine รั่วไหล (Coroutine Leaks) โดยการันตีว่า Coroutine ลูกจะถูกยกเลิกอัตโนมัติหาก Scope แม่ถูกยกเลิกหรือเกิด Error",
            "เพิ่มความเร็วของอินเทอร์เน็ต",
            "ทำให้โปรแกรมไม่ต้องใช้ฐานข้อมูล",
            "แปลงโค้ด Kotlin ให้เป็นไฟล์ HTML"
          ],
          correctAnswer: 0,
          explanation: "Structured Concurrency ผูกความสัมพันธ์ของ Coroutines เป็นลำดับชั้น (Parent-Child) ทำให้การจัดการ Lifecycle, การส่งต่อ Error, และการยกเลิกงานทำได้อย่างปลอดภัย ไม่ปล่อยให้มีงานค้างทำงานอยู่เบื้องหลังอย่างไร้ประโยชน์"
        }
      ]
    },
    {
      id: "kotlin-6",
      title: "Reactive Asynchronous Streams ด้วย Kotlin Flow",
      description: "จัดการข้อมูลต่อเนื่องแบบเรียลไทม์ด้วย Flow API: Cold Streams vs Hot Streams, StateFlow, SharedFlow, และการจัดการ Backpressure",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Reactive Asynchronous Streams ด้วย Kotlin Flow

หาก Coroutine ฟังก์ชันคืนค่าได้เพียงค่าเดียว (\`Single Value\`) แล้วถ้าเราต้องการส่งข้อมูลแบบต่อเนื่องล่ะ? คำตอบคือ **Kotlin Flow** ซึ่งเป็นมาตรฐาน Reactive Streams ยุคใหม่ที่ทำงานร่วมกับ Coroutines ได้ 100%

## 1. Cold Streams vs Hot Streams
- **Cold Flow (\`flow { ... }\`):** เป็น Cold Stream กล่าวคือโค้ดภายในบล็อกจะไม่เริ่มรันจนกว่าจะมีคนมาดักฟัง (\`collect\`) และผู้ฟังแต่ละคนจะได้รับข้อมูลแยกอิสระจากกันตั้งแต่ต้น
- **Hot Streams (\`StateFlow\` / \`SharedFlow\`):** ปล่อยข้อมูลอย่างต่อเนื่องตลอดเวลาแม้จะไม่มีคนฟัง (Broadcast Pattern) เหมาะมากสำหรับการทำ UI State ใน Android และ Real-time WebSocket

## 2. StateFlow vs SharedFlow
- **\`StateFlow\`:** เก็บสถานะปัจจุบัน 1 ค่าเสมอ (มี \`.value\`) มีคุณสมบัติ Conflation (ถ้าค่าไม่เปลี่ยนจะไม่ยิงซ้ำ) เหมาะสำหรับ UI State
- **\`SharedFlow\`:** ส่งเหตุการณ์ (Events) ไปยังผู้ฟังทุกคน เช่น แสดง Snackbar, นำทางหน้าจอ (Navigation Events)

\`\`\`kotlin
fun timerFlow(): Flow<Int> = flow {
    var count = 0
    while (true) {
        delay(1000)
        emit(count++) // ปล่อยค่าข้อมูล
    }
}
\`\`\``,
      codeExample: `// การจำลองการทำงานของ Kotlin Flow และ StateFlow
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

// สร้าง Cold Flow ปล่อยราคาหุ้นแบบเรียลไทม์
fun stockTickerFlow(symbol: String): Flow<Double> = flow {
    var price = 150.0
    for (i in 1..4) {
        delay(80) // จำลองข้อมูลเข้ามาทุกๆ 80ms
        price += (-2..2).random() + 0.5
        emit(price) // ปล่อยข้อมูลสู่สตรีม
    }
}

fun main() = runBlocking {
    println("=== เริ่มต้นติดตามสตรีมข้อมูลด้วย Kotlin Flow ===")
    val btcFlow = stockTickerFlow("BTC")

    // แปลงข้อมูลด้วย Flow Operators (map, filter) แล้ว collect
    btcFlow
        .map { price -> String.format("%.2f THB", price) }
        .collect { formattedPrice ->
            println("📈 [TICKER UPDATE]: ราคาล่าสุด -> \$formattedPrice")
        }

    println("✓ สตรีมข้อมูลทำงานเสร็จสมบูรณ์")
}`,
      challenge: "สร้าง Flow ที่ emit เลข 1 ถึง 20 จากนั้นใช้ operator filter (เลือกเฉพาะเลขคู่) และ transform เพื่อคูณด้วย 10 ก่อนทำการ collect",
      quiz: [
        {
          question: "คุณสมบัติสำคัญของ Cold Stream ใน Kotlin Flow คือข้อใด?",
          options: [
            "บล็อกโค้ดภายใน Flow จะไม่ทำงานเลยจนกระทั่งมีคำสั่ง Terminal Operator เช่น .collect() มาดักฟัง",
            "ข้อมูลจะถูกส่งออกมาเรื่อยๆ แม้ไม่มีใครฟัง",
            "ใช้ได้เฉพาะกับอุปกรณ์ที่มีระบบระบายความร้อนเท่านั้น",
            "ไม่สามารถทำงานร่วมกับ Coroutines ได้"
          ],
          correctAnswer: 0,
          explanation: "Cold Flow เป็น On-demand Stream จะเริ่มประมวลผลก็ต่อเมื่อมีผู้เรียกใช้งานคำสั่ง .collect() เท่านั้น และผู้ฟังแต่ละคนจะได้รับกระแสข้อมูลแยกจากกันตั้งแต่เริ่มต้น"
        },
        {
          question: "StateFlow เหมาะสำหรับการใช้งานประเภทใดมากที่สุด?",
          options: [
            "การจัดการสถานะปัจจุบันของระบบหรือ UI State ที่ต้องการอ่านค่าล่าสุดได้ตลอดเวลาผ่าน .value",
            "การคำนวณกราฟิก 3 มิติ",
            "การแทนที่ระบบไฟล์ทั้งหมดของเครื่อง",
            "การส่งข้อมูลผ่านดาวเทียม"
          ],
          correctAnswer: 0,
          explanation: "StateFlow ออกแบบมาสำหรับเก็บสถานะ (State Holder) มีค่าปัจจุบันอยู่ใน .value เสมอ และจะแจ้งเตือนผู้ฟังเมื่อสถานะมีการเปลี่ยนแปลง"
        },
        {
          question: "คำสั่งใดที่ใช้ภายในบล็อก flow { ... } เพื่อส่งข้อมูลตัวถัดไปออกไปยังสตรีม?",
          options: ["emit(value)", "send(value)", "push(value)", "yield(value)"],
          correctAnswer: 0,
          explanation: "ใน Kotlin Flow เราใช้คำสั่ง emit(value) เพื่อปล่อยข้อมูลชิ้นใหม่ออกสู่กระแสสตรีมให้ผู้ที่กำลัง collect ได้รับไปประมวลผล"
        }
      ]
    },
    {
      id: "kotlin-7",
      title: "การพัฒนา Backend Microservices ด้วย Ktor และ Spring Boot 3",
      description: "สร้าง REST API ประสิทธิภาพสูงด้วย Ktor (Asynchronous Web Framework by JetBrains), Routing, Content Negotiation (Kotlinx Serialization), และ Dependency Injection",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การพัฒนา Modern Backend ด้วย Ktor Framework

**Ktor** คือเฟรมเวิร์กสร้างเว็บแอปพลิเคชันและ Microservices ที่สร้างขึ้นด้วยภาษา Kotlin 100% โดยทีมงาน JetBrains มีจุดเด่นด้านความเบา ไม่ใช้ Reflection และขับเคลื่อนด้วย Coroutines ล้วนๆ

## 1. สถาปัตยกรรม Ktor Application
Ktor ประกอบด้วย **Routing** และ **Plugins** (Features):
\`\`\`kotlin
fun Application.module() {
    // 1. ติดตั้ง Content Negotiation สำหรับแปลง JSON อัตโนมัติ
    install(ContentNegotiation) {
        json()
    }

    // 2. กำหนดเส้นทาง RESTful Routing
    routing {
        get("/") {
            call.respondText("ยินดีต้อนรับสู่ IT Academy Ktor Backend")
        }

        route("/api/v1/students") {
            get {
                val students = listOf(Student(1, "Somchai"), Student(2, "Kanda"))
                call.respond(students) // แปลงเป็น JSON ทันที
            }

            post {
                val request = call.receive<CreateStudentRequest>()
                call.respond(HttpStatusCode.Created, request)
            }
        }
    }
}
\`\`\`

## 2. Kotlin ร่วมกับ Spring Boot 3
ในองค์กรขนาดใหญ่ Kotlin ถูกนำมาใช้เขียนร่วมกับ Spring Boot 3 โดยมีข้อดีเหนือภาษา Java:
- ใช้ Data Classes สำหรับ DTO / Entities
- ไม่ต้องเขียน Boilerplate Code หรือติดตั้ง Lombok
- รองรับ Spring WebFlux และ Coroutines ร่วมกันได้อย่างไร้รอยต่อ`,
      codeExample: `// ตัวอย่างโครงสร้าง Ktor REST API Routing ในภาษา Kotlin
data class ApiResponse<T>(val success: Boolean, val data: T, val timestamp: Long = System.currentTimeMillis())
data class CourseDto(val code: String, val title: String, val credits: Int)

class MockKtorCall {
    fun respondJson(statusCode: Int, payload: Any) {
        println("[HTTP \$statusCode OK]: Response Header: Content-Type: application/json")
        println("Payload Body: \$payload")
    }
}

fun main() {
    println("=== จำลองการทำงานของ Ktor Asynchronous Server Engine ===")
    val mockCall = MockKtorCall()

    // จำลอง Router ทำงาน
    val availableCourses = listOf(
        CourseDto("IT-101", "Kotlin Systems Architecture", 3),
        CourseDto("IT-102", "Cloud Microservices with Ktor", 3)
    )

    val response = ApiResponse(success = true, data = availableCourses)
    mockCall.respondJson(200, response)
    println("✓ Ktor Dispatcher ประมวลผล Non-blocking Request สำเร็จ")
}`,
      challenge: "เขียนโมเดล DTO สำหรับระบบจองตั๋วภาพยนตร์ด้วย Kotlin Data Class พร้อมติดตั้ง Serialization Annotation (@Serializable)",
      quiz: [
        {
          question: "จุดเด่นหลักของ Ktor Framework เมื่อเทียบกับ Java Framework ดั้งเดิมคือข้อใด?",
          options: [
            "สร้างด้วย Kotlin และ Coroutines 100% มีโครงสร้างเบา (Light-weight) ติดตั้งเฉพาะ Plugins ที่ต้องการ และไม่พึ่งพา Reflection",
            "รันได้เฉพาะบนโทรศัพท์มือถือเท่านั้น",
            "ไม่รองรับการเชื่อมต่ออินเทอร์เน็ต",
            "บังคับให้ใช้ฐานข้อมูล SQLite เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "Ktor เป็น Asynchronous Framework แท้จริงที่ขับเคลื่อนด้วย Kotlin Coroutines มีความยืดหยุ่นสูง ใช้หน่วยความจำน้อยมาก และไม่มี overhead จาก reflection เหมือนเฟรมเวิร์กยุคเก่า"
        },
        {
          question: "Plugin ใดใน Ktor ที่ทำหน้าที่แปลง Request/Response ระหว่าง Object ในโค้ดกับข้อมูล JSON อัตโนมัติ?",
          options: ["ContentNegotiation", "CallLogging", "CORS", "Authentication"],
          correctAnswer: 0,
          explanation: "ContentNegotiation เป็นปลั๊กอินมาตรฐานใน Ktor สำหรับจัดการ Content-Type และทำ Serialization/Deserialization ข้อมูล (เช่น JSON ผ่าน kotlinx.serialization)"
        },
        {
          question: "ข้อดีของการนำ Kotlin มาใช้พัฒนา Backend ร่วมกับ Spring Boot 3 คือข้อใด?",
          options: [
            "ลดโค้ดซ้ำซากด้วย Data Classes, มี Null Safety ในระดับตัวภาษา, และรองรับ Coroutines กับ WebFlux ได้อย่างเป็นธรรมชาติ",
            "ทำให้โปรแกรมรันได้โดยไม่ต้องมีแรม",
            "ทำให้ไม่ต้องมีเซิร์ฟเวอร์",
            "เปลี่ยนระบบให้กลายเป็นภาษา C"
          ],
          correctAnswer: 0,
          explanation: "Kotlin มีความเข้ากันได้กับระบบนิเวศของ Java และ Spring 100% ช่วยลดโค้ดลงได้กว่า 40% และขจัดปัญหา NullPointerException จาก DTO ได้อย่างหมดจด"
        }
      ]
    },
    {
      id: "kotlin-8",
      title: "Kotlin Multiplatform (KMP) และการแชร์โค้ดข้ามแพลตฟอร์ม",
      description: "แชร์โค้ด Business Logic ชุดเดียวข้าม Android, iOS, Desktop และ Web ด้วย KMP, expect/actual mechanism, และ Compose Multiplatform",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Kotlin Multiplatform (KMP)

**Kotlin Multiplatform (KMP)** เป็นเทคโนโลยีที่ได้รับการยอมรับจากบริษัทระดับโลกอย่าง Google, Netflix, McDonald's และ Forbes โดยไม่ได้มุ่งเน้นการสร้าง UI แบบ Cross-platform เพียงอย่างเดียว แต่มุ่งเน้น **การแชร์ Business Logic, Data Layer, และ Network Layer** ข้ามทุกระบบปฏิบัติการ

## 1. ปรัชญาของ KMP vs Flutter / React Native
- **Flutter / React Native:** พยายามวาด UI ข้ามแพลตฟอร์มด้วย Canvas เดียวกัน มักเจอปัญหา Native UX หรือข้อจำกัดด้าน Hardware APIs
- **KMP:** แชร์เฉพาะ Business Logic, Networking, Database และ State Management เป็น Native Binary โดยเปิดโอกาสให้นักพัฒนาเขียน UI ฝั่ง Native แท้ๆ (SwiftUI บน iOS และ Jetpack Compose บน Android) หรือใช้ **Compose Multiplatform** ร่วมกันได้

## 2. กลไก \`expect\` และ \`actual\`
เมื่อโค้ดส่วนกลาง (commonMain) ต้องการเรียกใช้ฟังก์ชันเฉพาะของ OS:
\`\`\`kotlin
// ใน commonMain (โค้ดส่วนกลางที่แชร์กัน)
expect fun getPlatformName(): String

// ใน androidMain (ฝั่ง Android)
actual fun getPlatformName(): String = "Android \${android.os.Build.VERSION.SDK_INT}"

// ใน iosMain (ฝั่ง iOS)
actual fun getPlatformName(): String = "iOS \${UIDevice.currentDevice.systemVersion}"
\`\`\``,
      codeExample: `// การจำลองสถาปัตยกรรม Kotlin Multiplatform (KMP) expect/actual
interface CommonRepository {
    fun getDeviceInfo(): String
}

// จำลอง expect class
abstract class BasePlatform {
    abstract val osName: String
    abstract val isMobile: Boolean
}

// จำลอง actual implementation บน Android
class AndroidPlatform : BasePlatform() {
    override val osName = "Google Android 14 (API 34)"
    override val isMobile = true
}

// จำลอง actual implementation บน iOS
class IosPlatform : BasePlatform() {
    override val osName = "Apple iOS 17.4 (Darwin Kernel)"
    override val isMobile = true
}

fun main() {
    println("=== สถาปัตยกรรม Kotlin Multiplatform (KMP) ===")
    val android = AndroidPlatform()
    val ios = IosPlatform()

    println("✓ คอมไพล์เป็น AAR สำหรับ: \${android.osName}")
    println("✓ คอมไพล์เป็น Framework / XCFramework สำหรับ: \${ios.osName}")
    println("ประโยชน์ของ KMP: เขียนโค้ดคำนวณและดึงข้อมูลครั้งเดียว แชร์ให้ทั้งทีม iOS และ Android 100%")
}`,
      challenge: "จงอธิบายกลไก expect และ actual ใน KMP ว่าทำงานประสานกันอย่างไรระหว่าง commonMain และ platform-specific source sets",
      quiz: [
        {
          question: "ความแตกต่างสำคัญระหว่าง Kotlin Multiplatform (KMP) กับ Flutter ในการพัฒนาโมบายแอปคืออะไร?",
          options: [
            "KMP มุ่งเน้นการแชร์ Business Logic และคอมไพล์เป็น Native Binary แท้ๆ ให้แต่ละแพลตฟอร์มโดยไม่บังคับให้ทิ้ง Native UI",
            "KMP ทำงานได้เฉพาะบนสมาร์ตวอตช์เท่านั้น",
            "Flutter รันได้เร็วกว่า C++ 10 เท่า",
            "KMP ใช้ภาษา HTML เป็นหลัก"
          ],
          correctAnswer: 0,
          explanation: "KMP อนุญาตให้ทีมแชร์โค้ดตรรกะทางธุรกิจร่วมกัน แต่ยังคงมอบประสบการณ์ Native แท้จริง 100% (สามารถใช้ Jetpack Compose บน Android และ SwiftUI บน iOS ได้อย่างอิสระ)"
        },
        {
          question: "คีย์เวิร์ดคู่ใดที่ใช้ใน KMP สำหรับการประกาศสัญญาในโค้ดส่วนกลางและสร้างการทำงานจริงบนแต่ละแพลตฟอร์ม?",
          options: ["expect และ actual", "interface และ implement", "abstract และ concrete", "declare และ define"],
          correctAnswer: 0,
          explanation: "ใน KMP เราใช้คีย์เวิร์ด expect ใน source set commonMain เพื่อประกาศฟังก์ชันที่ต้องการ และใช้คีย์เวิร์ด actual ใน androidMain หรือ iosMain เพื่อเขียนการทำงานจริงตามแพลตฟอร์มนั้นๆ"
        },
        {
          question: "KMP คอมไพล์โค้ดสำหรับฝั่ง iOS ออกมาเป็นอาร์ติแฟกต์รูปแบบใด?",
          options: ["XCFramework (Native Objective-C/Swift Compatible Binary)", "ไฟล์ .exe", "ไฟล์ .apk", "JavaScript Bundle"],
          correctAnswer: 0,
          explanation: "Kotlin/Native จะคอมไพล์โค้ด KMP ฝั่ง iOS ให้กลายเป็น Native XCFramework ซึ่งสามารถนำไป import และเรียกใช้ในโปรเจกต์ Xcode ของภาษา Swift ได้โดยตรง"
        }
      ]
    },
    {
      id: "kotlin-9",
      title: "ประสิทธิภาพระดับ JVM Bytecode, Inline Functions และ Value Classes",
      description: "เจาะลึกเบื้องหลังคอมไพเลอร์: inline functions, noinline, crossinline, reified type parameters, และ Value Classes เพื่อขจัด Overhead หน่วยความจำ",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# ประสิทธิภาพระดับ JVM Bytecode และ Zero-Cost Abstractions

ในการสร้างระบบที่มี Throughput สูง นักพัฒนา Kotlin ต้องเข้าใจว่าโค้ดระดับสูงจะถูกแปลเป็น **JVM Bytecode** อย่างไร

## 1. Inline Functions และการกำจัด Lambda Allocation
ปกติเมื่อเราส่ง Lambda เข้าไปในฟังก์ชัน JVM จะต้องสร้าง Anonymous Class Instance ขึ้นมาใน Heap ทำให้เกิด Memory Allocation และภาระแก่ Garbage Collector
เมื่อใส่คีย์เวิร์ด \`inline\` คอมไพเลอร์จะนำโค้ดในฟังก์ชันและโค้ดใน Lambda **ไปแปะลง ณ จุดเรียกใช้งานโดยตรง (Inlining)** ขจัด Overhead ทั้งหมด:

\`\`\`kotlin
inline fun <T> measureExecutionTime(block: () -> T): T {
    val start = System.nanoTime()
    val result = block()
    println("Time: \${System.nanoTime() - start} ns")
    return result
}
\`\`\`

## 2. Reified Type Parameters (ทะลวงข้อจำกัด Type Erasure ของ Java)
ใน Java และ JVM ทั่วไป Generic Types จะถูกลบทิ้งตอนรันไทม์ (Type Erasure) ทำให้ไม่สามารถเขียน \`T::class.java\` ได้
แต่ด้วย \`inline\` ร่วมกับ \`reified\` คอมไพเลอร์จะแทนที่ \`T\` ด้วยประเภทข้อมูลจริงตอนคอมไพล์:

\`\`\`kotlin
inline fun <reified T> printType() {
    println("ประเภทข้อมูลที่แท้จริงคือ: \${T::class.simpleName}")
}

printType<String>() // พิมพ์: String ได้อย่างถูกต้อง!
\`\`\`

## 3. Value Classes (\`@JvmInline value class\`)
สร้าง Type Safety โดยไม่เสียหน่วยความจำเพิ่ม (Zero-Cost Wrapper):
\`\`\`kotlin
@JvmInline
value class UserId(val id: Long) // เบื้องหลังถูกคอมไพล์เป็น long ดั้งเดิม ไร้ Object Overhead!
\`\`\``,
      codeExample: `// ตัวอย่างการใช้งาน Value Classes และ Reified Type Parameters
@JvmInline
value class StudentId(val rawId: String)

@JvmInline
value class ThaiBaht(val amount: Double) {
    operator fun plus(other: ThaiBaht): ThaiBaht = ThaiBaht(this.amount + other.amount)
}

// ฟังก์ชัน Reified Generic ตรวจสอบประเภทข้อมูล
inline fun <reified T> inspectTypeInfo(value: Any?) {
    if (value is T) {
        println("✓ วัตถุเป็นประเภท \${T::class.qualifiedName} ถูกต้อง")
    } else {
        println("✗ วัตถุไม่ใช่ประเภท \${T::class.qualifiedName}")
    }
}

fun main() {
    println("=== 1. Zero-Cost Value Classes ===")
    val price1 = ThaiBaht(500.0)
    val price2 = ThaiBaht(1200.0)
    val total = price1 + price2

    println("ยอดรวมเงิน: \${total.amount} THB")
    println("(เบื้องหลังบน JVM Bytecode ตัวแปร total จะมีสถานะเป็น double ดั้งเดิม ไม่มีการสร้างอ็อบเจกต์ใน Heap)")

    println("\n=== 2. Reified Type Parameters ===")
    val sampleName: Any = "Somchai Senior Software Engineer"
    inspectTypeInfo<String>(sampleName)
    inspectTypeInfo<Int>(sampleName)
}`,
      challenge: "สร้างฟังก์ชัน inline ที่ใช้ reified type parameter เพื่อกรองข้อมูลใน List ให้เหลือเฉพาะสมาชิกที่เป็นประเภทข้อมูลที่กำหนด (เช่น list.filterIsInstance<String>())",
      quiz: [
        {
          question: "ประโยชน์สูงสุดของคีย์เวิร์ด inline หน้าฟังก์ชันที่มีพารามิเตอร์เป็น Lambda คืออะไร?",
          options: [
            "คอมไพเลอร์จะนำโค้ดไปวางแทนที่จุดเรียกโดยตรง ทำให้ไม่ต้องจองหน่วยความจำสร้าง Function Object ใน Heap (ลดภาระ GC)",
            "ทำให้ฟังก์ชันทำงานช้าลงเพื่อประหยัดไฟ",
            "แปลงฟังก์ชันให้กลายเป็น SQL",
            "ห้ามไม่ให้ฟังก์ชันส่งค่ากลับ"
          ],
          correctAnswer: 0,
          explanation: "การทำ inlining ช่วยขจัดค่าใช้จ่ายในการจอง Function Object ของ Lambda บน Heap และลด overhead ในการกระโดดเรียก method (Virtual Call)"
        },
        {
          question: "คีย์เวิร์ด reified ใน Kotlin ทำงานร่วมกับสิ่งใด และมีประโยชน์อย่างไร?",
          options: [
            "ทำงานร่วมกับ inline functions เพื่อให้สามารถเข้าถึง Class Type ของ Generic T ในช่วง Runtime ได้ (แก้ปัญหา Type Erasure ของ JVM)",
            "ทำงานร่วมกับ Loop เพื่อให้หมุนเร็วขึ้น",
            "ใช้สำหรับลบไฟล์ที่ไม่จำเป็น",
            "ใช้แทนคำสั่ง return"
          ],
          correctAnswer: 0,
          explanation: "reified ต้องใช้คู่กับ inline function เสมอ โดยจะอนุญาตให้เราตรวจสอบ T::class หรือ type check is T ได้ขณะรันไทม์ ซึ่งทำไม่ได้ในภาษา Java ปกติเนื่องจากติดข้อจำกัด Type Erasure"
        },
        {
          question: "@JvmInline value class ในภาษา Kotlin มีประโยชน์อย่างไรต่อประสิทธิภาพของระบบ?",
          options: [
            "ให้ Type Safety ในระดับโค้ด แต่ถูกคอมไพล์เป็น Primitive Type ดั้งเดิมบน JVM จึงไม่มี Object Allocation Overhead เลย",
            "เพิ่มขนาดไฟล์ APK 2 เท่า",
            "ทำให้โปรแกรมรันได้เฉพาะบนอินเทอร์เน็ตความเร็วสูง",
            "บังคับให้ตัวแปรมีค่าเป็น String เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "Value Class ช่วยให้เราสร้าง Domain Types เช่น UserId(val id: Long) ได้โดยในระดับ Bytecode จะถูกแทนที่ด้วย long ดั้งเดิม ทำให้ได้ความปลอดภัยระดับ Type โดยไร้ต้นทุนหน่วยความจำ (Zero-cost abstraction)"
        }
      ]
    }
  ]
};
