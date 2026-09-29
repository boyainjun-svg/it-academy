import { Course } from "../types";

export const rustCourse: Course = {
  id: "rust",
  title: "Rust Systems Programming & Memory Safety",
  description: "เรียนรู้ภาษา Rust ตั้งแต่ Ownership, Borrow Checker, Lifetimes, Traits, Smart Pointers จนถึง Fearless Concurrency และ Asynchronous ด้วย Tokio",
  longDescription: "หลักสูตรวิศวกรรมระบบด้วยภาษา Rust สมัยใหม่ (Modern Rust Systems Engineering) ภาษาที่ได้รับโหวตให้เป็นที่รักของนักพัฒนามากที่สุดในโลกติดต่อกันหลายปี ครอบคลุมตั้งแต่การขจัดปัญหาหน่วยความจำ (Memory Leaks, Use-After-Free, Data Races) โดยไม่ต้องพึ่งพา Garbage Collector ผ่านระบบ Ownership และ Borrow Checker, การจัดการข้อผิดพลาดอย่างปลอดภัยด้วย Result และ Option, การออกแบบระบบด้วย Structs, Enums และ Traits, การบริหารจัดการหน่วยความจำผ่าน Smart Pointers (Box, Rc, Arc, RefCell), การประมวลผลแบบมัลติเธรดอย่างปลอดภัยไร้ Data Race (Fearless Concurrency), การสร้างระบบเครือข่ายความเร็วสูงด้วย Asynchronous Tokio Runtime, จนถึง Unsafe Rust และ Foreign Function Interface (FFI) สำหรับเชื่อมต่อกับระบบปฏิบัติการ",
  icon: "🦀",
  color: "amber",
  gradient: "from-amber-600 via-orange-600 to-stone-900",
  category: "language",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: ["Rust", "Systems Programming", "Ownership", "Memory Safety", "Tokio", "Concurrency", "WebAssembly", "Zero-Cost"],
  recommendedTools: [
    {
      name: "Rust Toolchain (rustup & cargo)",
      icon: "🦀",
      badge: "Official Toolchain",
      description: "เครื่องมือจัดการคอมไพเลอร์ rustc, ตัวจัดการแพ็กเกจ cargo, และ linter clippy",
      downloadUrl: "https://www.rust-lang.org/",
      setupGuide: "1. ติดตั้ง rustup (curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh)\n2. ตรวจสอบใน Terminal: rustc --version และ cargo --version\n3. สร้างโปรเจกต์ใหม่: cargo new my_project && cd my_project && cargo run"
    },
    {
      name: "VS Code with rust-analyzer",
      icon: "💻",
      badge: "Rust IDE",
      description: "ส่วนขยายระดับทางการที่ให้ Type Inlay Hints, Compiler Diagnostics แบบเรียลไทม์ และ Refactoring",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้งส่วนขยาย 'rust-analyzer' โดย The Rust Programming Language ใน VS Code\n2. ติดตั้ง 'CodeLLDB' สำหรับการดีบักโค้ด Rust"
    }
  ],
  lessons: [
    {
      id: "rust-1",
      title: "ปรัชญาภาษา Rust, Cargo Toolchain และระบบกรรมสิทธิ์ (Ownership & Move)",
      description: "ทำความเข้าใจว่าทำไม Rust จึงปลอดภัยเทียบเท่าภาษาที่มี Garbage Collector แต่เร็วเทียบเท่า C/C++ ด้วยกฎ 3 ข้อของ Ownership และ Move Semantics",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# ปรัชญาภาษา Rust และระบบ Ownership

ภาษา Rust ถูกสร้างขึ้นเพื่อแก้ไขวิกฤตความปลอดภัยของระบบ (กว่า 70% ของช่องโหว่ความปลอดภัยใน Windows, Chrome, และ Linux เกิดจาก Memory Safety Bugs เช่น Buffer Overflow, Use-After-Free) โดย Rust ทำการตรวจสอบความปลอดภัยเหล่านี้ตั้งแต่ **Compile-time**

## 1. กฎ 3 ข้อของระบบกรรมสิทธิ์ (Ownership Rules)
1. ข้อมูลแต่ละค่าในหน่วยความจำ จะมีตัวแปรที่เป็น **เจ้าของ (Owner)** เพียงตัวเดียวในเวลาหนึ่งๆ
2. เมื่อตัวแปรที่เป็นเจ้าของหลุดออกจากขอบเขต (Scope) ข้อมูลนั้นจะถูกคืนหน่วยความจำทันทีโดยอัตโนมัติ (Drop)
3. ค่าของข้อมูลสามารถเปลี่ยนมือเจ้าของได้ เรียกว่า **Move**

\`\`\`rust
{
    let s1 = String::from("hello"); // s1 จองหน่วยความจำบน Heap
    let s2 = s1; // เกิดการ Move! ตอนนี้ s2 เป็นเจ้าของ s1 ถูกทำให้ใช้การไม่ได้ทันที

    // println!("{}", s1); // ❌ คอมไพล์ไม่ผ่าน! (borrow of moved value)
    println!("{}", s2); // ✅ hello
} // s2 หลุด Scope -> ฟังก์ชัน drop() ถูกเรียกอัตโนมัติ คืนหน่วยความจำใน Heap ทันที
\`\`\`

## 2. Copy vs Move Types
- **Copy Types:** ประเภทข้อมูลที่มีขนาดแน่นอนและเก็บอยู่บน Stack (เช่น \`i32\`, \`f64\`, \`bool\`, \`char\`) จะทำการคัดลอกค่า (Bitwise Copy) โดยไม่เกิดการ Move
- **Move Types:** ประเภทข้อมูลที่จองหน่วยความจำบน Heap (เช่น \`String\`, \`Vec<T>\`) จะเกิดการ Move กรรมสิทธิ์เสมอหากไม่ได้สั่ง \`.clone()\` โดยชัดแจ้ง`,
      codeExample: `// การสาธิตระบบ Ownership และ Move Semantics ในภาษา Rust
fn main() {
    println!("=== 1. Stack Data (Copy Semantics) ===");
    let num_a = 42;
    let num_b = num_a; // ทำการ Copy ค่า 42 บน Stack
    println!("num_a: {}, num_b: {} (ทั้งคู่ยังคงใช้งานได้)", num_a, num_b);

    println!("\n=== 2. Heap Data (Move Semantics) ===");
    let original_owner = String::from("Rust Systems Engineering");
    println!("สร้างสตริงต้นฉบับ: {}", original_owner);

    // ย้ายกรรมสิทธิ์ไปยัง new_owner
    let new_owner = original_owner;
    println!("ย้ายกรรมสิทธิ์สำเร็จ! เจ้าของใหม่: {}", new_owner);
    // หากพยายามเรียก original_owner คอมไพเลอร์ Rust จะไม่อนุญาตให้ผ่าน

    println!("\n=== 3. การโคลนข้อมูลแบบชัดเจน (.clone()) ===");
    let cloned_copy = new_owner.clone(); // จอง Heap ใหม่ชุดที่ 2
    println!("เจ้าของเดิม: {}", new_owner);
    println!("ข้อมูลที่โคลนแยกอิสระ: {}", cloned_copy);
}`,
      challenge: "เขียนฟังก์ชัน takes_ownership(s: String) และ make_copy(x: i32) แล้วสังเกตว่าตัวแปรใดที่ยังสามารถเรียกใช้ต่อได้ในฟังก์ชัน main",
      quiz: [
        {
          question: "ข้อใดคือกฎข้อแรกของระบบ Ownership ในภาษา Rust?",
          options: [
            "ข้อมูลแต่ละค่าใน Rust จะมีตัวแปรที่เป็นเจ้าของ (Owner) เพียงตัวเดียวในเวลาหนึ่งๆ",
            "ข้อมูลทุกตัวต้องถูกเก็บไว้ในฐานข้อมูล",
            "ตัวแปรทุกตัวต้องเป็นตัวเลขจำนวนเต็ม",
            "หน่วยความจำจะถูกเคลียร์ทุกๆ 5 นาที"
          ],
          correctAnswer: 0,
          explanation: "กฎข้อแรกของ Ownership ระบุว่าข้อมูลแต่ละชิ้นในหน่วยความจำจะต้องมีตัวแปรที่เป็นเจ้าของเพียงหนึ่งเดียวเสมอ เพื่อป้องกันปัญหาการเข้าถึงซ้ำซ้อนหรือการคืนหน่วยความจำซ้ำ (Double Free)"
        },
        {
          question: "เมื่อสั่ง let s2 = s1; โดยที่ s1 เป็นประเภท String ในหน่วยความจำจะเกิดอะไรขึ้น?",
          options: [
            "เกิดการ Move กรรมสิทธิ์ไปยัง s2 ทำให้ s1 หมดสภาพการใช้งานทันทีเพื่อป้องกัน Double Free",
            "ทำการคัดลอกข้อความทั้งหมดขึ้นมาใหม่อัตโนมัติ",
            "เกิด Error ขณะรันไทม์",
            "หน่วยความจำรั่วไหลทันที"
          ],
          correctAnswer: 0,
          explanation: "Rust จะทำการ Move Pointer, Length, และ Capacity จาก s1 ไปยัง s2 และยกเลิกการใช้งาน s1 ทันที ทำให้เมื่อสิ้นสุด Scope จะมีเพียง s2 เท่านั้นที่คืนหน่วยความจำ ไม่เกิด Double Free"
        },
        {
          question: "ประเภทข้อมูลข้อใดต่อไปนี้ที่ใช้พฤติกรรม Copy Semantics (ไม่เกิดการ Move)?",
          options: ["i32 (จำนวนเต็ม 32 บิต)", "String", "Vec<i32>", "Box<i32>"],
          correctAnswer: 0,
          explanation: "i32 เป็นประเภทข้อมูลพื้นฐานที่มีขนาดคงที่และเก็บอยู่บน Stack จึงสืบทอด Trait Copy ทำให้เกิดการคัดลอกบิตโดยไม่เกิดการ Move"
        }
      ]
    },
    {
      id: "rust-2",
      title: "การยืมหน่วยความจำ (Borrowing) และตัวตรวจสอบ (Borrow Checker)",
      description: "ทำความเข้าใจกฎเหล็กของการยืม: Immutable References (&T) ได้หลายตัว หรือ Mutable Reference (&mut T) ได้ตัวเดียวในเวลาเดียวกัน ป้องกัน Data Race 100%",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# การยืมหน่วยความจำ (Borrowing) และกลไก Borrow Checker

หากทุกครั้งที่เรียกฟังก์ชันต้องโอนกรรมสิทธิ์ (Move) การเขียนโปรแกรมจะยุ่งยากมาก Rust จึงมีระบบ **Borrowing (การยืม)** ผ่านการใช้ **References (\`&\`)**

## 1. กฎเหล็ก 2 ข้อของ Borrowing (The Aliasing XOR Mutability Rule)
ในจุดใดจุดหนึ่งของโค้ด คุณสามารถเลือกได้เพียงอย่างใดอย่างหนึ่งระหว่าง:
1. มี **Immutable References (\`&T\`)** กี่ตัวก็ได้ (อ่านอย่างเดียวได้พร้อมกันหลายคน)
2. มี **Mutable Reference (\`&mut T\`)** ได้ **เพียงตัวเดียวเท่านั้น** ในเวลาเดียวกัน

\`\`\`rust
let mut s = String::from("hello");

let r1 = &s; // ✅ ยืมอ่านได้
let r2 = &s; // ✅ ยืมอ่านคนที่ 2 ได้
// let r3 = &mut s; // ❌ คอมไพล์ไม่ผ่าน! ห้ามมีคนแก้ตอนที่มีคนกำลังอ่าน!

println!("{} and {}", r1, r2);
// หลังจาก r1 และ r2 ไม่ถูกใช้งานแล้ว (Non-Lexical Lifetimes)

let r3 = &mut s; // ✅ ตอนนี้ยืมแบบแก้ไขได้แล้ว เพราะไม่มีใครอ่านค้างอยู่
r3.push_str(", world");
\`\`\`

## 2. ทำไมกฎนี้จึงขจัด Data Race ได้ 100%?
Data Race เกิดขึ้นเมื่อมี 3 สภาวะนี้พร้อมกัน:
1. ตัวแปรชี้ไปยังหน่วยความจำเดียวกัน
2. มีอย่างน้อย 1 ตัวแปรที่กำลังเขียนข้อมูล
3. ไม่มีการซิงโครไนซ์

กฎของ Rust ทำให้ข้อ 1 และข้อ 2 เกิดพร้อมกันไม่ได้ตั้งแต่ขั้นตอนคอมไพล์ จึงเป็นไปไม่ได้เลยที่จะเกิด Data Race!`,
      codeExample: `// การสาธิต Borrowing และ Borrow Checker ในภาษา Rust
fn calculate_length(text: &String) -> usize {
    // text เป็น Immutable Reference อ่านได้อย่างเดียว
    // text.push_str("!"); // ❌ เกิดข้อผิดพลาด cannot borrow as mutable
    text.len()
}

fn append_signature(buffer: &mut String) {
    // buffer เป็น Mutable Reference แก้ไขข้อมูลได้
    buffer.push_str("\n-- Sign: IT Academy Security Certified");
}

fn main() {
    let mut document = String::from("ใบรับรองการผ่านหลักสูตรภาษา Rust");

    // 1. ส่งการยืมแบบอ่าน (Immutable Borrow)
    let length = calculate_length(&document);
    println!("ความยาวข้อความ: {} ตัวอักษร", length);
    println!("เอกสารต้นฉบับยังคงอยู่: {}", document);

    // 2. ส่งการยืมแบบแก้ไข (Mutable Borrow)
    append_signature(&mut document);
    println!("\nเอกสารหลังเพิ่มลายเซ็น:");
    println!("{}", document);
}`,
      challenge: "สร้างฟังก์ชัน swap_elements(arr: &mut [i32], i: usize, j: usize) ที่รับ slice แบบ mutable และสลับค่าของสมาชิกตำแหน่งที่ i และ j",
      quiz: [
        {
          question: "ตามกฎของ Borrow Checker ในขณะใดขณะหนึ่งเราสามารถสร้าง Mutable Reference (&mut T) ได้กี่ตัวพร้อมกัน?",
          options: [
            "เพียง 1 ตัวเท่านั้น และต้องไม่มี Immutable Reference (&T) ใช้งานร่วมอยู่ด้วย",
            "ได้ไม่จำกัดจำนวน",
            "ได้ 2 ตัวสำหรับอ่านและเขียน",
            "ได้เท่ากับจำนวน CPU Cores"
          ],
          correctAnswer: 0,
          explanation: "กฎ Aliasing XOR Mutability ระบุว่าสามารถมี &mut T ได้เพียง 1 ตัวเท่านั้น และห้ามมี &T อื่นๆ ทำงานค้างอยู่พร้อมกัน เพื่อการันตีความปลอดภัยต่อ Data Race โดยสมบูรณ์"
        },
        {
          question: "Dangling Reference (ตัวชี้ไปยังหน่วยความจำที่ถูกทำลายไปแล้ว) ป้องกันได้อย่างไรใน Rust?",
          options: [
            "คอมไพเลอร์ Rust จะไม่อนุญาตให้ฟังก์ชันส่ง Reference ของตัวแปรท้องถิ่น (Local Variable) กลับออกไป (Compile Error)",
            "ใช้ Garbage Collector ตรวจสอบทุกๆ วินาที",
            "ใช้ฮาร์ดแวร์พิเศษป้องกัน",
            "แปลงตัวแปรให้เป็นค่าคงที่อัตโนมัติ"
          ],
          correctAnswer: 0,
          explanation: "Borrow Checker จะตรวจสอบ Lifetime ของตัวแปร หากพบการ return Reference ของตัวแปรที่กำลังจะถูก drop เมื่อจบฟังก์ชัน คอมไพเลอร์จะปฏิเสธการคอมไพล์ทันที"
        },
        {
          question: "สัญลักษณ์ &mut ในภาษา Rust มีความหมายว่าอย่างไร?",
          options: [
            "Mutable Reference (การยืมแบบสามารถแก้ไขข้อมูลได้)",
            "การคูณตัวแปรเข้าด้วยกัน",
            "Bitwise AND",
            "การสร้าง Thread ใหม่"
          ],
          correctAnswer: 0,
          explanation: "&mut หมายถึงการยืมข้อมูลแบบ Mutable Reference ซึ่งอนุญาตให้แก้ไขข้อมูลปลายทางได้ภายใต้ข้อจำกัดว่าต้องไม่มีผู้อื่นยืมซ้อนในจังหวะนั้น"
        }
      ]
    },
    {
      id: "rust-3",
      title: "โครงสร้างข้อมูล Structs, Enums และการจัดการ Error ด้วย Result และ Option",
      description: "บอกลา NULL และ Exception ด้วย Algebraic Data Types: คลาส Struct, Enum พร้อม Associated Data, Pattern Matching (match, if let) และ Operator ?",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# Structs, Enums, Option<T> และ Result<T, E>

Rust ไม่มีคำว่า \`NULL\` และไม่มี \`Exception\` แต่ใช้ **Enum** ร่วมกับ **Pattern Matching** ที่บังคับให้นักพัฒนาต้องจัดการทุกกรณีที่เป็นไปได้อย่างปลอดภัย

## 1. Option<T>: ทางออกของค่าว่าง
\`\`\`rust
enum Option<T> {
    Some(T), // มีข้อมูล
    None,    // ไม่มีข้อมูล
}
\`\`\`

## 2. Result<T, E>: การจัดการข้อผิดพลาดระดับแกนกลาง
\`\`\`rust
enum Result<T, E> {
    Ok(T),  // ทำงานสำเร็จ ส่งผลลัพธ์ T ออกมา
    Err(E), // เกิดข้อผิดพลาด ส่ง Error E ออกมา
}
\`\`\`

## 3. The Question Mark Operator (\`?\`)
เครื่องมือที่ทรงพลังที่สุดในการส่งต่อ Error (Error Propagation):
\`\`\`rust
fn read_username_from_file() -> Result<String, io::Error> {
    let mut username = String::new();
    // ถ้าสำเร็จ ดึงค่าออกมา ถ้าพัง return Err(...) ออกจากฟังก์ชันทันที!
    File::open("username.txt")?.read_to_string(&mut username)?;
    Ok(username)
}
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Structs, Enums, Option และ Result ใน Rust
#[derive(Debug)]
enum ServerStatus {
    Online(String), // เก็บ IP Address
    Offline { reason: String, code: u32 },
    Maintenance,
}

#[derive(Debug)]
struct ServerNode {
    id: u32,
    hostname: String,
    status: ServerStatus,
}

fn divide_bandwidth(total_gbps: f64, node_count: u32) -> Result<f64, String> {
    if node_count == 0 {
        Err(String::from("ไม่สามารถหารด้วย 0 ได้ (node_count = 0)"))
    } else {
        Ok(total_gbps / node_count as f64)
    }
}

fn main() {
    let node = ServerNode {
        id: 101,
        hostname: String::from("bkk-edge-01"),
        status: ServerStatus::Online(String::from("192.168.10.50")),
    };

    println!("ข้อมูลโหนด: {:?}", node);

    // ตรวจสอบสถานะด้วย Pattern Matching
    match &node.status {
        ServerStatus::Online(ip) => println!("✓ เซิร์ฟเวอร์ออนไลน์ที่ IP: {}", ip),
        ServerStatus::Offline { reason, code } => println!("✗ เซิร์ฟเวอร์ออฟไลน์: {} (Code: {})", reason, code),
        ServerStatus::Maintenance => println!("⚠️ เซิร์ฟเวอร์อยู่ระหว่างการปรับปรุง"),
    }

    println("\n=== ทดสอบ Result<T, E> Error Handling ===");
    match divide_bandwidth(100.0, 4) {
        Ok(bandwidth) => println!("✓ แบนด์วิดท์ต่อโหนด: {} Gbps", bandwidth),
        Err(e) => println!("✗ เกิดข้อผิดพลาด: {}", e),
    }

    match divide_bandwidth(100.0, 0) {
        Ok(bandwidth) => println!("✓ แบนด์วิดท์: {}", bandwidth),
        Err(e) => println!("✗ ตรวจจับข้อผิดพลาดสำเร็จ: {}", e),
    }
}`,
      challenge: "เขียนฟังก์ชัน parse_percentage(input: &str) -> Result<u8, String> ที่แปลงข้อความเป็นตัวเลข 0-100 หากเกินช่วงหรือแปลงไม่ได้ให้คืนค่า Err พร้อมข้อความอธิบาย",
      quiz: [
        {
          question: "เหตุใดภาษา Rust จึงไม่มีค่า null เหมือนภาษาอื่นๆ?",
          options: [
            "Rust ใช้ Enum Option<T> (ที่มีสถานะ Some หรือ None) บังคับให้ตรวจสอบค่าตั้งแต่ตอนคอมไพล์ ป้องกัน Null Pointer Exception 100%",
            "เพราะผู้สร้างภาษาลืมใส่เข้ามา",
            "เพราะ Rust ทำงานบนฮาร์ดดิสก์เท่านั้น",
            "เพราะคอมไพเลอร์ไม่อนุญาตให้ใช้ตัวอักษรสี่ตัว N-U-L-L"
          ],
          correctAnswer: 0,
          explanation: "Rust แทนที่ null ด้วย Option<T> ทำให้นักพัฒนาต้องใช้ match หรือ if let เพื่อแกะค่า Some(T) เสมอ ทำให้ไม่มีทางเกิด Null Pointer Exception ขณะรันไทม์"
        },
        {
          question: "เครื่องหมาย ? (Question Mark Operator) ในภาษา Rust ทำหน้าที่อะไรเมื่อใช้งานกับ Result<T, E>?",
          options: [
            "หากเป็น Ok(val) จะแกะค่า val ออกมา แต่หากเป็น Err(e) จะส่ง Err(e) คืนออกจากฟังก์ชันทันที (Early Return)",
            "สั่งให้โปรแกรมสุ่มค่าตัวเลข",
            "ทำการปริ้นท์ค่าออกทางหน้าจอ",
            "ปิดการทำงานของ Borrow Checker ชั่วคราว"
          ],
          correctAnswer: 0,
          explanation: "เครื่องหมาย ? เป็นไวยากรณ์ย่อสำหรับ Error Propagation ถ้าได้ Ok จะคลี่ค่าออกมาให้ทำงานต่อ แต่ถ้าได้ Err จะทำการ return Err ออกจากฟังก์ชันนั้นทันที"
        },
        {
          question: "คำสั่ง match ในภาษา Rust มีคุณสมบัติเด่นในข้อใดเมื่อเทียบกับ switch-case ในภาษาอื่น?",
          options: [
            "คอมไพเลอร์บังคับให้ต้องดักจับทุกกรณีที่เป็นไปได้ (Exhaustiveness) มิฉะนั้นจะไม่ยอมให้คอมไพล์ผ่าน",
            "ทำงานช้ากว่า if-else 100 เท่า",
            "ใช้ได้เฉพาะกับตัวเลข 1 ถึง 10",
            "ไม่สามารถคืนค่าเป็น Expression ได้"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง match ใน Rust มีคุณสมบัติ Exhaustive บังคับให้นักพัฒนาต้องครอบคลุมทุกแขนงของ Enum ป้องกันไม่ให้เกิดกรณีตกหล่นที่อาจนำไปสู่บั๊กในระบบ"
        }
      ]
    },
    {
      id: "rust-4",
      title: "ระบบ Traits, Generics และ Zero-Cost Abstractions",
      description: "สร้าง Interfaces ในแบบฉบับของ Rust ด้วย Traits: Trait Bounds, Associated Types, Default Implementations, และ Static vs Dynamic Dispatch (dyn Trait)",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Traits และ Zero-Cost Abstractions

ในภาษา Rust ไม่มีคีย์เวิร์ด \`class\` และไม่มีการสืบทอด (Inheritance) แต่แชร์พฤติกรรมผ่าน **Traits** (เทียบได้กับ Interfaces ในภาษาอื่น แต่มีความยืดหยุ่นสูงกว่ามาก)

## 1. การสร้างและใช้งาน Trait
\`\`\`rust
pub trait Summary {
    fn summarize(&self) -> String; // เมธอดที่ต้องทำตาม
    
    // Default implementation (มีค่าเริ่มต้นให้)
    fn preview(&self) -> String {
        format!("(อ่านต่อ...)")
    }
}
\`\`\`

## 2. Trait Bounds บน Generics
จำกัดว่าฟังก์ชัน Generic จะรับเฉพาะ Type ที่สืบทอด Trait ที่กำหนดเท่านั้น:
\`\`\`rust
fn notify<T: Summary>(item: &T) {
    println!("ข่าวด่วน: {}", item.summarize());
}
// หรือใช้ไวยากรณ์ where clause ที่อ่านง่าย:
fn process<T, U>(t: &T, u: &U) -> i32
where
    T: Summary + Clone,
    U: std::fmt::Debug,
{
    // ...
}
\`\`\`

## 3. Static Dispatch vs Dynamic Dispatch
- **Static Dispatch (\`impl Trait\` / Generics):** คอมไพเลอร์จะสร้างสำเนาโค้ดเฉพาะสำหรับแต่ละประเภทข้อมูลขึ้นมาตอนคอมไพล์ (Monomorphization) **ไม่มี Overhead ขณะรันไทม์ (Zero-Cost Abstraction)**
- **Dynamic Dispatch (\`Box<dyn Trait>\`):** ค้นหา Method ผ่าน vtable ขณะรันไทม์ เหมาะเมื่อต้องการรวม Object ต่างชนิดกันไว้ใน \`Vec\` เดียวกัน`,
      codeExample: `// การประยุกต์ใช้ Traits และ Generics ในภาษา Rust
trait Encryptable {
    fn encrypt(&self) -> String;
}

struct ApiToken(String);
struct DatabasePassword(String);

impl Encryptable for ApiToken {
    fn encrypt(&self) -> String {
        format!("TOKEN_SHA256[{}]", self.0.chars().rev().collect::<String>())
    }
}

impl Encryptable for DatabasePassword {
    fn encrypt(&self) -> String {
        format!("ARGON2_HASH[{}]", self.0.len() * 128)
    }
}

// Static Dispatch (Zero-Cost Abstraction ผ่าน Monomorphization)
fn secure_store<T: Encryptable>(secret: &T) {
    println!("🔐 บันทึกลง Key Vault สำเร็จ: {}", secret.encrypt());
}

fn main() {
    let token = ApiToken(String::from("secret_live_key_999"));
    let db_pass = DatabasePassword(String::from("SuperStrongPass123!"));

    println!("=== การทำงานของ Static Dispatch Traits ===");
    secure_store(&token);
    secure_store(&db_pass);
}`,
      challenge: "สร้าง Trait ชื่อ Serializable ที่มีเมธอด to_json(&self) -> String และนำไป implement ให้กับ Struct สองตัวที่มีข้อมูลต่างกัน",
      quiz: [
        {
          question: "Monomorphization ในกระบวนการคอมไพล์ Generics ของ Rust หมายถึงอะไร?",
          options: [
            "คอมไพเลอร์สร้างสำเนาฟังก์ชันเฉพาะสำหรับแต่ละประเภทข้อมูลที่ถูกเรียกใช้จริง ทำให้ได้ความเร็วเทียบเท่าการเขียนโค้ดแยกเอง (Zero-cost)",
            "การลบข้อมูลทิ้งทั้งหมดเพื่อประหยัดพื้นที่",
            "การแปลงโค้ดให้เป็นภาษา Java",
            "การสุ่มชื่อตัวแปรใหม่"
          ],
          correctAnswer: 0,
          explanation: "Monomorphization คือการที่คอมไพเลอร์แกะ Generic ออกเป็นฟังก์ชันที่เป็นรูปธรรมเฉพาะแต่ละ Type ตอนคอมไพล์ ทำให้ตอนรันไม่มี Overhead จากการตรวจสอบ Type เลย"
        },
        {
          question: "หากต้องการเก็บอ็อบเจกต์ต่างประเภทกันแต่สืบทอด Trait เดียวกันไว้ใน Vec เดียวกัน จะต้องใช้เทคนิคใด?",
          options: [
            "Dynamic Dispatch ด้วย Trait Object เช่น Vec<Box<dyn MyTrait>>",
            "Generics ธรรมดา Vec<T>",
            "Enum ธรรมดาที่ไม่มีข้อมูล",
            "ไม่สามารถทำได้ในภาษา Rust"
          ],
          correctAnswer: 0,
          explanation: "เนื่องจาก Vec ต้องการทราบขนาดที่แน่นอนของสมาชิกแต่ละตัวในหน่วยความจำตอนคอมไพล์ จึงต้องใช้ Trait Object ภายใต้ตัวชี้ เช่น Box<dyn MyTrait> (Dynamic Dispatch)"
        },
        {
          question: "คีย์เวิร์ด where ในการประกาศฟังก์ชัน Generic ของ Rust มีไว้เพื่ออะไร?",
          options: [
            "จัดระเบียบ Trait Bounds ให้แยกออกมาอยู่นอกวงเล็บพารามิเตอร์ ทำให้อ่านโค้ดง่ายขึ้น",
            "ค้นหาข้อมูลในตาราง SQL",
            "ตรวจสอบเงื่อนไข if-else",
            "ระบุตำแหน่งไฟล์ในฮาร์ดดิสก์"
          ],
          correctAnswer: 0,
          explanation: "where clause ช่วยให้การระบุข้อกำหนด Trait Bounds ที่ซับซ้อนและมีตัวแปร Generic หลายตัวมีความชัดเจน เป็นระเบียบ และอ่านง่ายกว่าการเขียนติดใน <T: ...>"
        }
      ]
    },
    {
      id: "rust-5",
      title: "Smart Pointers และการจัดการหน่วยความจำขั้นสูง (Box, Rc, Arc, RefCell)",
      description: "ทำความเข้าใจตัวชี้อัจฉริยะ: Box<T> สำหรับ Heap Allocation, Rc<T> / Arc<T> สำหรับ Reference Counting, และ RefCell<T> สำหรับ Interior Mutability",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Smart Pointers ในภาษา Rust

ใน Rust ข้อมูลปกติจะเก็บอยู่บน Stack แต่เมื่อเราต้องการจัดการหน่วยความจำที่ยืดหยุ่น เราจะใช้ **Smart Pointers** ซึ่งเป็น Struct ที่ทำหน้าที่เหมือน Pointer แต่มีคุณสมบัติเพิ่มเติม (เช่น ดักจับตอนหลุด Scope ผ่าน \`Deref\` และ \`Drop\` traits)

## 1. Box<T> (การจัดสรรหน่วยความจำบน Heap)
ใช้เก็บข้อมูลขนาดใหญ่ หรือคลาสที่มีขนาดไม่แน่นอนในตอนคอมไพล์ (Recursive Types เช่น Linked List / Tree):
\`\`\`rust
let b = Box::new(5); // เลข 5 ถูกเก็บไว้ใน Heap โดยมี b บน Stack ชี้ไป
\`\`\`

## 2. Rc<T> vs Arc<T> (Multiple Ownership ด้วย Reference Counting)
เมื่อต้องการให้อ็อบเจกต์ชิ้นเดียวกันมีเจ้าของพร้อมกันได้หลายคน:
- **\`Rc<T>\` (Reference Counted):** ใช้เฉพาะใน **Single-threaded** เท่านั้น (เร็วและเบาเพราะใช้ตัวนับธรรมดา)
- **\`Arc<T>\` (Atomically Reference Counted):** ใช้ข้าม **Multi-threaded** ได้อย่างปลอดภัย (ใช้ Atomic Operations ในการนับ ไม่เกิด Data Race)

## 3. RefCell<T> (Interior Mutability)
บางครั้งเราต้องการแก้ไขข้อมูลภายในอ็อบเจกต์ที่ถูกมองเป็น Immutable จากภายนอก \`RefCell<T>\` จะ **เลื่อนการตรวจสอบกฎ Borrow Checker จาก Compile-time ไปตรวจสอบตอน Runtime แทน** (หากทำผิดกฎจะเกิด panic ทันที)`,
      codeExample: `// การประยุกต์ใช้ Smart Pointers: Arc และ Mutex สำหรับแชร์ข้อมูลข้าม Threads
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    println("=== 1. Box<T> บน Heap ===");
    let heap_value = Box::new(1024);
    println!("ค่าที่เก็บใน Box (Heap): {}", *heap_value);

    println("\n=== 2. Arc<T> + Mutex<T> ข้าม Threads ===");
    // สร้างตัวนับที่แชร์ข้ามเธรดอย่างปลอดภัย
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for id in 1..=5 {
        let counter_clone = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            // ล็อก Mutex เพื่อเข้าถึงข้อมูล
            let mut num = counter_clone.lock().unwrap();
            *num += 1;
            println!("เธรด #{} ทำการเพิ่มค่านับเป็น: {}", id, *num);
        });
        handles.push(handle);
    }

    // รอให้ทุกเธรดทำงานเสร็จสิ้น
    for handle in handles {
        handle.join().unwrap();
    }

    println!("\n✓ ผลลัพธ์สุดท้ายของ Counter: {}", *counter.lock().unwrap());
}`,
      challenge: "สร้างโครงสร้างข้อมูล Binary Search Tree แบบเรียกตัวเองซ้ำ (Recursive Data Structure) โดยใช้ Box<Option<Node>>",
      quiz: [
        {
          question: "ความแตกต่างสำคัญระหว่าง Rc<T> และ Arc<T> คืออะไร?",
          options: [
            "Arc<T> ใช้ Atomic Operations ทำให้ปลอดภัยสำหรับการแชร์ข้าม Multi-threaded ส่วน Rc<T> ใช้ได้เฉพาะ Single-thread",
            "Rc<T> ทำงานบนการ์ดจอ ส่วน Arc<T> ทำงานบนซีพียู",
            "Arc<T> ไม่สามารถคืนหน่วยความจำได้",
            "ทั้งคู่เป็นสิ่งเดียวกัน 100%"
          ],
          correctAnswer: 0,
          explanation: "Arc ย่อมาจาก Atomic Reference Counting ซึ่งเพิ่มกลไก Thread-safety ผ่านการทำงานระดับ Atomic จึงใช้ข้ามเธรดได้ ส่วน Rc มี overhead น้อยกว่าแต่จำกัดเฉพาะในเธรดเดียว"
        },
        {
          question: "เหตุใดเราจึงต้องใช้ Box<T> เมื่อสร้างโครงสร้างข้อมูลแบบ Recursive เช่น Cons List หรือ Tree ใน Rust?",
          options: [
            "เพราะคอมไพเลอร์ Rust ต้องทราบขนาดที่แน่นอนของ Type ตอนคอมไพล์ ซึ่ง Box มีขนาดคงที่เท่ากับขนาดของ Pointer เสมอ",
            "เพราะ Box ช่วยเข้ารหัสข้อมูล",
            "เพราะ Box บังคับให้โปรแกรมเร็วขึ้น 10 เท่า",
            "เพราะ Rust ไม่อนุญาตให้สร้าง Struct"
          ],
          correctAnswer: 0,
          explanation: "Recursive Type ที่เรียกตัวเองซ้ำจะมีขนาดเป็นอนันต์ในตอนคำนวณขนาด Stack การใช้ Box<T> จะทำให้ Type นั้นมีขนาดคงที่เท่ากับตัว Pointer (8 ไบต์บน 64-bit) และย้ายข้อมูลจริงไปไว้ใน Heap"
        },
        {
          question: "แนวคิด Interior Mutability ของ RefCell<T> หมายถึงอะไร?",
          options: [
            "ความสามารถในการแก้ไขข้อมูลภายในอ็อบเจกต์ได้ แม้ว่าตัวแปรภายนอกจะเป็น Immutable โดยเลื่อนการตรวจสอบการยืมไปทำตอน Runtime",
            "การแก้ไขการทำงานของฮาร์ดแวร์",
            "การเปลี่ยนตัวแปร private ให้เป็น public",
            "การปิดระบบความปลอดภัยทั้งหมดของภาษา"
          ],
          correctAnswer: 0,
          explanation: "Interior Mutability เป็นแพทเทิร์นการออกแบบใน Rust ที่ยอมให้แก้ไขข้อมูลได้ผ่าน &T โดย RefCell จะตรวจนับการยืมระหว่างรันไทม์ และจะ panic ทันทีหากตรวจพบการยืมแบบ mutable ซ้ำซ้อน"
        }
      ]
    },
    {
      id: "rust-6",
      title: "Fearless Concurrency: Threads, Channels และ Mutex",
      description: "เขียนโปรแกรมคู่ขนานโดยปราศจากความกลัว: Send และ Sync Traits, Message Passing ผ่าน mpsc channels, และ Shared State Concurrency ด้วย Mutex",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Fearless Concurrency (การประมวลผลคู่ขนานแบบไร้กังวล)

คำว่า **Fearless Concurrency** หมายถึงการที่นักพัฒนาสามารถเขียนโปรแกรม Multithreaded ที่ซับซ้อนได้โดยมั่นใจ 100% ว่าถ้าโค้ดคอมไพล์ผ่าน **จะไม่มีทางเกิด Data Race หรือการเข้าถึงหน่วยความจำข้ามเธรดโดยมิชอบเลย**

## 1. ปรัชญา Message Passing (CSP Model)
> *"Do not communicate by sharing memory; instead, share memory by communicating."*
> (อย่าติดต่อสื่อสารด้วยการแชร์หน่วยความจำ แต่จงแชร์หน่วยความจำด้วยการสื่อสารกัน)

Rust มีไลบรารี \`mpsc\` (Multiple Producer, Single Consumer):
\`\`\`rust
use std::sync::mpsc;
use std::thread;

let (tx, rx) = mpsc::channel();

thread::spawn(move || {
    let msg = String::from("ข้อมูลจาก Worker Thread");
    tx.send(msg).unwrap(); // ส่งข้อมูลและโอนย้าย Ownership ไปยังตัวรับทันที!
    // println!("{}", msg); // ❌ ทำไม่ได้! msg ถูก move ข้ามเธรดไปแล้ว ปลอดภัย 100%
});

let received = rx.recv().unwrap();
println!("ได้รับข้อมูล: {}", received);
\`\`\`

## 2. หัวใจความปลอดภัย: Send และ Sync Traits
- **\`Send\`:** การันตีว่าประเภทข้อมูลนี้สามารถโอนย้าย Ownership ข้าม Thread ได้อย่างปลอดภัย
- **\`Sync\`:** การันตีว่าประเภทข้อมูลนี้สามารถส่ง Reference (\`&T\`) ไปให้หลาย Thread ใช้งานพร้อมกันได้อย่างปลอดภัย (\`T\` เป็น Sync ก็ต่อเมื่อ \`&T\` เป็น Send)`,
      codeExample: `// การสร้าง Producer-Consumer Pipeline ด้วย mpsc channels
use std::sync::mpsc;
use std::thread;
use std::time::Duration;

fn main() {
    println("=== เริ่มต้น Multi-producer Single-consumer (mpsc) ===");
    let (tx, rx) = mpsc::channel();

    // สร้าง Producer ตัวที่ 1
    let tx1 = tx.clone();
    thread::spawn(move || {
        let sensor_readings = vec!["28.4 °C", "28.5 °C", "28.6 °C"];
        for val in sensor_readings {
            tx1.send(format!("[Sensor A]: {}", val)).unwrap();
            thread::sleep(Duration::from_millis(50));
        }
    });

    // สร้าง Producer ตัวที่ 2
    thread::spawn(move || {
        let alert_logs = vec!["Volt OK", "Fan Active"];
        for val in alert_logs {
            tx.send(format!("[System B]: {}", val)).unwrap();
            thread::sleep(Duration::from_millis(70));
        }
    });

    // Consumer รับข้อมูลจากทุก Producer บน Main Thread
    for received in rx {
        println!("📩 ได้รับข้อความ: {}", received);
    }
    println("✓ ทุกเธรดส่งข้อมูลครบถ้วนและปิด Channel สำเร็จ");
}`,
      challenge: "สร้าง Thread Pool ขนาดเล็กที่มี Worker Threads 4 ตัว และรับงานผ่าน mpsc channel เพื่อประมวลผลงานแบบคู่ขนาน",
      quiz: [
        {
          question: "เหตุใดการส่งข้อความผ่าน mpsc::channel ใน Rust จึงปลอดภัยจาก Data Race อย่างแท้จริง?",
          options: [
            "เพราะคำสั่ง send() จะโอนย้าย Ownership ของตัวแปรไปยัง Thread ผู้รับทันที ทำให้ Thread ผู้ส่งไม่สามารถเข้าถึงตัวแปรนั้นได้อีกต่อไป",
            "เพราะช่องทาง Channel เข้ารหัสระดับ 1024-bit",
            "เพราะ Channel ทำงานเฉพาะบน Thread เดียวกันเท่านั้น",
            "เพราะ Channel ทำการลบข้อมูลทิ้งทั้งหมด"
          ],
          correctAnswer: 0,
          explanation: "ด้วยระบบ Ownership ของ Rust เมื่อส่งค่าผ่าน channel กรรมสิทธิ์จะถูก move ไปยัง thread ผู้รับทันที ทำให้ thread ผู้ส่งไม่สามารถอ่านหรือแก้ไขตัวแปรเดิมได้อีก จึงเป็นไปไม่ได้ที่จะเกิด Data Race"
        },
        {
          question: "Trait Sync ในภาษา Rust มีความหมายว่าอย่างไร?",
          options: [
            "ประเภทข้อมูลนั้นปลอดภัยที่จะให้หลายๆ Thread เข้าถึงผ่าน Reference (&T) พร้อมกัน",
            "ประเภทข้อมูลนั้นสามารถแปลงเป็นไฟล์ภาพได้",
            "การบังคับให้โปรแกรมทำงานเรียงลำดับทีละบรรทัด",
            "การซิงค์ข้อมูลขึ้น Google Drive"
          ],
          correctAnswer: 0,
          explanation: "Trait Sync หมายถึงประเภทข้อมูลที่มีความปลอดภัยในการเข้าถึงพร้อมกันจากหลายๆ เธรดผ่าน Immutable References (ถ้า T เป็น Sync หมายถึง &T สามารถส่งข้ามเธรดแบบ Send ได้)"
        },
        {
          question: "อักษรย่อ mpsc ในไลบรารี std::sync::mpsc ย่อมาจากอะไร?",
          options: [
            "Multiple Producer, Single Consumer",
            "Main Process, Sub Channel",
            "Memory Protection System Core",
            "Multi Platform Software Controller"
          ],
          correctAnswer: 0,
          explanation: "mpsc ย่อมาจาก Multiple Producer, Single Consumer ซึ่งหมายถึงสถาปัตยกรรมที่สามารถมีตัวส่ง (tx) ได้หลายตัว แต่มีตัวรับข้อมูล (rx) ได้เพียงตัวเดียว"
        }
      ]
    },
    {
      id: "rust-7",
      title: "การเขียนโปรแกรม Asynchronous ด้วย Tokio Runtime และ Futures",
      description: "สร้าง Network Services รองรับ Concurrent Connections ระดับล้านงานด้วย Tokio: async/await, Future State Machine, Tasks (tokio::spawn), และ Select Macro",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Asynchronous Programming ด้วย Tokio Runtime

ภาษา Rust ไม่ได้ฝัง Asynchronous Runtime ไว้ในตัวภาษาโดยตรง แต่ให้เฉพาะไวยากรณ์ **\`Future\`** และ **\`async/await\`** เพื่อให้นักพัฒนาสามารถเลือก Runtime ที่ตอบโจทย์ที่สุดได้ โดยมาตรฐานอุตสาหกรรมในปัจจุบันคือ **Tokio**

## 1. ปรัชญาของ Rust Futures: Poll-based (Pull model)
แตกต่างจาก JavaScript หรือ C# ที่ Future เป็นแบบ Push-based (ทำงานทันทีที่สร้าง)
ใน Rust **Future เป็นแบบ Lazy: มันจะไม่ทำงานเลยแม้แต่นิดเดียวจนกว่าจะถูกเรียกใช้งานด้วย \`.await\` หรือถูกสั่ง \`poll\` โดย Executor!**

\`\`\`rust
// โค้ดนี้จะไม่ทำอะไรเลยจนกว่าจะมี .await
let future_task = async {
    println!("รันงานอะซิงโครนัส");
};
\`\`\`

## 2. Tokio Runtime และ \`tokio::spawn\`
Tokio มี Multi-threaded Work-stealing Scheduler ที่มีประสิทธิภาพระดับหัวแถวของโลก:
\`\`\`rust
#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        // ทำงานใน Task แยกอิสระบน Thread Pool ของ Tokio
        reqwest::get("https://api.github.com").await
    });

    let response = handle.await.unwrap();
}
\`\`\`

## 3. \`tokio::select!\` (แข่งกันทำงาน - Race Pattern)
รอผลลัพธ์แรกที่เสร็จสิ้นจากหลายๆ Futures:
\`\`\`rust
tokio::select! {
    val = fetch_data() => println!("ดึงข้อมูลสำเร็จ: {:?}", val),
    _ = tokio::time::sleep(Duration::from_secs(3)) => println!("Timeout 3 วินาที!"),
}
\`\`\``,
      codeExample: `// การจำลองการทำงานของ Asynchronous Engine ใน Rust
use std::time::Duration;

async fn mock_api_call(service_name: &str, delay_ms: u64) -> String {
    println!("⏳ [REQ]: กำลังเชื่อมต่อ {}...", service_name);
    // จำลอง non-blocking delay
    tokio::time::sleep(Duration::from_millis(delay_ms)).await;
    format!("{} Data Payload (OK)", service_name)
}

#[tokio::main]
async fn main() {
    println("=== เริ่มต้น Tokio Asynchronous Runtime ===");
    let start_time = std::time::Instant::now();

    // รันงานพร้อมกัน 2 งานด้วย tokio::join!
    let (auth_res, billing_res) = tokio::join!(
        mock_api_call("Auth Service", 100),
        mock_api_call("Billing Service", 150)
    );

    println!("✓ ผลลัพธ์ 1: {}", auth_res);
    println!("✓ ผลลัพธ์ 2: {}", billing_res);
    println!("เวลารวมทั้งหมด: {:?}", start_time.elapsed());
    println!("(เวลาที่ใช้เท่ากับตัวที่ช้าที่สุด ไม่ใช่ผลรวมของสองตัว เพราะทำงานแบบ Concurrent)");
}`,
      challenge: "เขียนฟังก์ชัน fetch_with_retry ที่ใช้ tokio::select! เพื่อรอรับข้อมูลจากเซิร์ฟเวอร์ โดยตั้งเวลา Timeout ไว้ที่ 2 วินาที หากเกินเวลาให้ลองใหม่อีก 3 รอบ",
      quiz: [
        {
          question: "เหตุใด Rust Futures จึงถูกเรียกว่าเป็นแบบ Lazy (Poll-based)?",
          options: [
            "เพราะบล็อกโค้ดใน async จะไม่เริ่มทำงานเลยจนกว่าจะถูกเรียกใช้งานด้วย .await หรือสั่ง poll",
            "เพราะทำงานช้ากว่าภาษาอื่น",
            "เพราะรันได้เฉพาะตอนคอมพิวเตอร์อยู่ในโหมด Sleep",
            "เพราะไม่สามารถเชื่อมต่อเครือข่ายได้"
          ],
          correctAnswer: 0,
          explanation: "ใน Rust นั้น Future จะไม่ทำอะไรเลยจนกว่าจะมี Executor นำมันไป poll (Zero-cost async) ต่างจากภาษาอื่นที่มักจะเริ่มรันใน Background ทันทีที่ถูกสร้าง"
        },
        {
          question: "มาโคร tokio::select! มีประโยชน์อย่างไรในการเขียนโปรแกรมแบบ Asynchronous?",
          options: [
            "รอให้ Future ตัวใดตัวหนึ่งทำงานเสร็จก่อน (Multiplexing) แล้วยกเลิกตัวที่เหลือทันที เช่น การทำ Timeout",
            "เลือกฐานข้อมูลที่เร็วที่สุดให้อัตโนมัติ",
            "จัดเรียงไฟล์ในโฟลเดอร์",
            "แปลงข้อความเป็นตัวเลข"
          ],
          correctAnswer: 0,
          explanation: "tokio::select! จะรอฟิวเจอร์หลายๆ ตัวพร้อมกัน เมื่อตัวแรกทำงานสำเร็จ บล็อกนั้นจะถูกประมวลผลทันที และฟิวเจอร์ตัวอื่นๆ ใน select จะถูก drop ทิ้งอย่างปลอดภัย"
        },
        {
          question: "ฟังก์ชัน tokio::spawn ใน Tokio มีบทบาทเทียบเท่ากับสิ่งใดในระบบปฏิบัติการ?",
          options: [
            "การสร้าง Green Thread / Asynchronous Task ขนาดเบาที่ถูกจัดสรรลงบน Work-stealing Thread Pool",
            "การเปิดไฟล์ใหม่บนฮาร์ดดิสก์",
            "การรีสตาร์ตเครื่องเซิร์ฟเวอร์",
            "การสร้างโปรเซสใหม่ของ OS โดยตรง"
          ],
          correctAnswer: 0,
          explanation: "tokio::spawn จะสร้าง Task น้ำหนักเบาที่จัดการโดย Tokio Runtime และกระจายงานไปยัง Thread Pool ช่วยให้รองรับการเชื่อมต่อนับแสนงานพร้อมกันได้สบาย"
        }
      ]
    },
    {
      id: "rust-8",
      title: "Unsafe Rust, Raw Pointers และการเชื่อมต่อข้ามภาษา (FFI)",
      description: "เรียนรู้ว่าเมื่อไหร่ที่ต้องก้าวข้าม Borrow Checker: 5 ขุมพลังของ Unsafe Rust, Dereferencing Raw Pointers, และการเรียกใช้งาน C Libraries ผ่าน Foreign Function Interface (FFI)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Unsafe Rust และ Foreign Function Interface (FFI)

แม้ Rust จะเน้นความปลอดภัยเป็นอันดับหนึ่ง แต่คอมพิวเตอร์และระบบปฏิบัติการในโลกความเป็นจริงสร้างด้วยภาษา C และ Assembly ซึ่งทำงานกับ Hardware โดยตรง ในบางสถานการณ์เราจึงต้องใช้ **Unsafe Rust**

## 1. ขุมพลัง 5 ประการของ Unsafe Rust
เมื่ออยู่ในบล็อก \`unsafe { ... }\` คุณจะได้รับความสามารถพิเศษเพิ่มขึ้น 5 อย่าง:
1. การ Dereference **Raw Pointers** (\`*const T\` และ \`*mut T\`)
2. การเรียกใช้ฟังก์ชันหรือเมธอดที่เป็น \`unsafe\`
3. การเข้าถึงหรือแก้ไขตัวแปร **Mutable Static Variable**
4. การสร้าง **Unsafe Trait**
5. การเข้าถึงฟิลด์ของ \`union\`

> **ข้อสำคัญ:** Unsafe ไม่ได้ปิดตัวตรวจจับ Type Safety หรือปิด Borrow Checker ของตัวแปรปกติ มันเพียงแค่อนุญาตให้ทำ 5 สิ่งข้างต้นได้เท่านั้น

## 2. Foreign Function Interface (FFI) เชื่อมต่อภาษา C
เรียกใช้ฟังก์ชันจาก C Standard Library โดยตรง:
\`\`\`rust
extern "C" {
    fn abs(input: i32) -> i32;
    fn puts(s: *const u8) -> i32;
}

fn main() {
    let result = unsafe { abs(-42) };
    println!("ผลลัพธ์จาก C Library: {}", result); // 42
}
\`\`\``,
      codeExample: `// การประยุกต์ใช้ Unsafe Rust และ Raw Pointers
fn main() {
    println("=== 1. การสร้างและ Dereference Raw Pointers ===");
    let mut original_number = 100;

    // สร้าง Raw Pointers จาก Reference ปกติ (ไม่ต้องใช้ unsafe)
    let raw_ptr_immutable: *const i32 = &original_number;
    let raw_ptr_mutable: *mut i32 = &mut original_number;

    // การอ่านและแก้ไขค่าผ่าน Raw Pointers ต้องทำใน unsafe block เสมอ
    unsafe {
        println!("อ่านค่าผ่าน Raw Pointer: {}", *raw_ptr_immutable);
        *raw_ptr_mutable += 250;
        println!("ค่าหลังแก้ไขผ่าน Raw Pointer: {}", *raw_ptr_mutable);
    }

    println!("ค่าในตัวแปรดั้งเดิม: {}", original_number);
    println!("\n=== 2. สรุปบทบาทของ Unsafe ===");
    println!("Unsafe เป็นเครื่องมือให้ระบบสร้าง Low-level Abstraction เช่น Vec, Box, และ OS Drivers ได้");
}`,
      challenge: "เขียนฟังก์ชัน split_at_mut จำลองที่รับ mutable slice และแบ่งออกเป็นสองส่วนย่อยแบบ mutable โดยใช้ Unsafe Pointer Arithmetic ภายใน",
      quiz: [
        {
          question: "ข้อใดคือการกระทำที่อนุญาตให้ทำได้เฉพาะภายในบล็อก unsafe ในภาษา Rust?",
          options: [
            "การ Dereference ตัวแปรประเภท Raw Pointer (*const T หรือ *mut T)",
            "การเขียนคำสั่ง if-else",
            "การสร้างตัวแปรตัวเลขจำนวนเต็ม",
            "การใช้คำสั่ง println!"
          ],
          correctAnswer: 0,
          explanation: "การ Dereference Raw Pointer เป็นหนึ่งใน 5 ขุมพลังพิเศษที่อนุญาตเฉพาะใน unsafe block เพราะคอมไพเลอร์ไม่สามารถการันตีได้ว่าที่อยู่หน่วยความจำนั้นยังถูกต้องอยู่หรือไม่"
        },
        {
          question: "Foreign Function Interface (FFI) ในภาษา Rust มีจุดประสงค์หลักเพื่ออะไร?",
          options: [
            "เพื่อเชื่อมต่อและเรียกใช้งานฟังก์ชันที่เขียนด้วยภาษา C หรือส่งออกฟังก์ชัน Rust ให้ภาษาอื่นเรียกใช้",
            "เพื่อเพิ่มขนาดหน้าจอคอมพิวเตอร์",
            "เพื่อเร่งความเร็วพัดลมระบายความร้อน",
            "เพื่อลบโค้ดที่ไม่ใช้งานทิ้ง"
          ],
          correctAnswer: 0,
          explanation: "FFI เป็นมาตรฐานที่อนุญาตให้โค้ด Rust สามารถเรียกใช้งานฟังก์ชันของภาษา C (หรือภาษาอื่นๆ) และคอมไพล์โค้ด Rust เป็น C-compatible Shared Library ให้โปรแกรมอื่นเรียกใช้ได้"
        },
        {
          question: "การใช้คีย์เวิร์ด unsafe หมายความว่าอย่างไรต่อผู้เขียนโค้ด?",
          options: [
            "ผู้เขียนโค้ดกำลังบอกคอมไพเลอร์ว่า 'ฉันได้ตรวจสอบความปลอดภัยของหน่วยความจำส่วนนี้ด้วยตนเองแล้ว และขอรับผิดชอบความปลอดภัยนี้'",
            "โปรแกรมจะเกิดข้อผิดพลาดแน่นอน 100%",
            "โค้ดนี้จะถูกปฏิเสธโดยคอมไพเลอร์",
            "โปรแกรมจะไม่สามารถรันบนระบบ 64-bit ได้"
          ],
          correctAnswer: 0,
          explanation: "unsafe ไม่ได้แปลว่าโค้ดนั้นอันตรายหรือผิดพลาด แต่เป็นการประกาศอย่างชัดเจนว่าระบบคอมไพเลอร์อัตโนมัติไม่สามารถตรวจสอบจุดนี้ได้ และโปรแกรมเมอร์ได้ยืนยันความถูกต้องของหน่วยความจำด้วยตนเองแล้ว"
        }
      ]
    },
    {
      id: "rust-9",
      title: "วิศวกรรมระบบระดับ Production: Cargo Workspaces, Testing และ Benchmarking",
      description: "ยกระดับโปรเจกต์ Rust สู่ระดับองค์กร: การแบ่งโมดูลด้วย Cargo Workspaces, Unit/Integration Tests, การวัดความเร็วระดับนาโนวินาทีด้วย Criterion, และ Profiling",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# วิศวกรรมระบบระดับ Production ในภาษา Rust

การพัฒนาโปรเจกต์ขนาดใหญ่ในภาษา Rust อาศัยเครื่องมือที่ทรงพลังที่สุดตัวหนึ่งในวงการพัฒนาซอฟต์แวร์นั่นคือ **Cargo Ecosystem**

## 1. สถาปัตยกรรม Cargo Workspaces
จัดการโปรเจกต์ระดับ Monorepo ที่ประกอบด้วยหลายๆ Microservices และ Crate กลาง:
\`\`\`toml
# Cargo.toml (Root Workspace)
[workspace]
members = [
    "crates/core-engine",
    "crates/api-server",
    "crates/crypto-utils"
]
resolver = "2"
\`\`\`

## 2. การทดสอบซอฟต์แวร์ (Unit Tests & Integration Tests)
- **Unit Tests:** เขียนรวมอยู่ในไฟล์เดียวกันกับโค้ดจริงในโมดูล \`#[cfg(test)]\` เพื่อให้เข้าถึง Private Functions ได้
- **Integration Tests:** แยกไว้ในโฟลเดอร์ \`tests/\` ทดสอบในมุมมองของผู้ใช้งานภายนอก (Public API only)

\`\`\`rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_calculates_correctly() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    #[should_panic(expected = "divide by zero")]
    fn it_panics_on_zero() {
        divide(10, 0);
    }
}
\`\`\`

## 3. Benchmarking ด้วย Criterion.rs
วัดความเร็วการทำงานระดับนาโนวินาทีพร้อมวิเคราะห์ความแปรปรวนทางสถิติ (Statistical Analysis) ป้องกันปัญหา Performance Regression ใน CI/CD`,
      codeExample: `// ตัวอย่างโครงสร้าง Unit Testing และโมดูลในภาษา Rust
pub fn normalize_username(raw: &str) -> Result<String, &'static str> {
    let trimmed = raw.trim();
    if trimmed.is_empty() {
        return Err("ชื่อผู้ใช้ต้องไม่ว่างเปล่า");
    }
    if trimmed.len() < 3 {
        return Err("ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร");
    }
    Ok(trimmed.to_lowercase())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_valid_username() {
        let result = normalize_username("  SomchaiDev  ");
        assert_eq!(result, Ok(String::from("somchaidev")));
    }

    #[test]
    fn test_short_username_fails() {
        let result = normalize_username("ab");
        assert!(result.is_err());
        assert_eq!(result.unwrap_err(), "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร");
    }
}

fn main() {
    println("=== ทดสอบฟังก์ชัน normalize_username ===");
    match normalize_username("  Somchai_Rust_Engineer  ") {
        Ok(valid_name) => println!("✓ ชื่อผู้ใช้ที่ผ่านเกณฑ์: '{}'", valid_name),
        Err(err) => println!("✗ ไม่ผ่านเกณฑ์: {}", err),
    }
    println("\nรันชุดทดสอบด้วยคำสั่ง: cargo test");
}`,
      challenge: "เขียนชุดทดสอบ Unit Test ที่ทดสอบว่าฟังก์ชัน binary_search ทำงานถูกต้องทั้งในกรณีที่พบข้อมูล และกรณีที่ไม่พบข้อมูลใน Array",
      quiz: [
        {
          question: "แอตทริบิวต์ #[cfg(test)] ในภาษา Rust มีประโยชน์อย่างไร?",
          options: [
            "สั่งให้คอมไพเลอร์คอมไพล์โค้ดในโมดูลนั้นเฉพาะตอนรันคำสั่ง cargo test เท่านั้น ไม่นำไปรวมใน Production Binary ช่วยลดขนาดไฟล์",
            "บังคับให้โปรแกรมทำการรีสตาร์ต",
            "ใช้ลบข้อมูลในดาต้าเบส",
            "แปลงโค้ดให้เป็นภาษา C"
          ],
          correctAnswer: 0,
          explanation: "#[cfg(test)] ทำหน้าที่เป็น Conditional Compilation บ่งบอกว่าบล็อกนี้มีไว้สำหรับการทดสอบเท่านั้น และจะไม่ถูกรวมเข้าไปในไฟล์ executable จริงตอนสั่ง cargo build --release"
        },
        {
          question: "โฟลเดอร์ใดในโปรเจกต์ Cargo ที่ใช้สำหรับวางชุดทดสอบ Integration Tests แบบแยกอิสระจาก Source Code หลัก?",
          options: ["tests/", "src/tests/", "integration/", "spec/"],
          correctAnswer: 0,
          explanation: "ตามข้อตกลงของ Cargo ไฟล์ที่อยู่ในโฟลเดอร์ tests/ ที่ root ของโปรเจกต์จะถูกคอมไพล์เป็น Integration Test แยกอิสระเพื่อทดสอบ Public Interface ของ Crate"
        },
        {
          question: "เครื่องมือ Criterion.rs ในระบบนิเวศของ Rust นิยมนำมาใช้ทำอะไร?",
          options: [
            "การทำ Benchmarking วัดประสิทธิภาพและความเร็วระดับนาโนวินาทีพร้อมสร้างกราฟรายงานสถิติ",
            "การตรวจจับไวรัส",
            "การส่งอีเมลแจ้งเตือน",
            "การเขียน UI ของเว็บไซต์"
          ],
          correctAnswer: 0,
          explanation: "Criterion.rs เป็นเฟรมเวิร์กมาตรฐานสำหรับวัดความเร็วของโค้ด (Benchmarking) ที่มีความแม่นยำสูง มีการคำนวณทางสถิติเพื่อกำจัดผลกระทบจากสัญญาณรบกวนของ CPU และระบบปฏิบัติการ"
        }
      ]
    }
  ]
};
