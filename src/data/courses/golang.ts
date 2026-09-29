import { Course } from "../types";

export const golangCourse: Course = {
  id: "go",
  title: "Go (Golang) Microservices & Concurrent Systems",
  description: "เรียนรู้ภาษา Go (Golang) ตั้งแต่สถาปัตยกรรม GMP Scheduler, Memory Layout, Pointers, Structs, Interfaces, Concurrency ด้วย Goroutines และ Channels จนถึงการสร้าง Microservices ความเร็วสูงด้วย Gin",
  longDescription: "หลักสูตรภาษา Go เชิงวิศวกรรมระบบ (Go Systems & Cloud Engineering) ออกแบบมาเพื่อสร้างนักพัฒนา Backend และ Cloud-Native ชั้นนำ ครอบคลุมตั้งแต่ปรัชญาความเรียบง่ายของ Go, โครงสร้างหน่วยความจำ, Escape Analysis, Struct Memory Padding, การจัดการข้อผิดพลาดตามแนวคิด Explicit Error Handling, สถาปัตยกรรม Interfaces (iface/itab) และ Composition, การประมวลผลพร้อมกันระดับล้านงานด้วย Goroutines และ Channels (CSP Concurrency Model), สถาปัตยกรรม GMP Runtime Scheduler, การสร้าง High-Throughput REST APIs ด้วย Gin และ net/http, การบริหาร Database Connection Pooling, จนถึงการทดสอบ Benchmark และ Profiling หน่วยความจำด้วย pprof",
  icon: "🦫",
  color: "cyan",
  gradient: "from-cyan-500 via-teal-600 to-blue-600",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Go", "Golang", "Microservices", "Goroutines", "Channels", "Gin", "Concurrency", "Cloud-Native"],
  recommendedTools: [
    {
      name: "Go 1.22+ Toolchain",
      icon: "🦫",
      badge: "Official Compiler",
      description: "คอมไพเลอร์และเครื่องมือมาตรฐานภาษา Go พร้อมตัวจัดการโมดูล go modules และเครื่องมือทดสอบประสิทธิภาพในตัว",
      downloadUrl: "https://go.dev/dl/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Go 1.22 ขึ้นไปจาก go.dev\n2. เปิด Terminal ตรวจสอบ: go version และ go env\n3. สร้างโมดูลใหม่: go mod init my-go-project"
    },
    {
      name: "VS Code with Go Extension / GoLand",
      icon: "💻",
      badge: "Recommended IDE",
      description: "เครื่องมือเขียนโค้ดพร้อม Language Server (gopls), Auto Format (gofmt) และระบบ Debugger Delve",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้ง VS Code\n2. ติดตั้ง Extension: 'Go' โดย Go Team at Google\n3. กด Ctrl+Shift+P พิมพ์ 'Go: Install/Update Tools' และติดตั้งเครื่องมือ gopls, dlv, staticcheck"
    }
  ],
  lessons: [
    {
      id: "go-1",
      title: "ปรัชญาการออกแบบภาษา Go: Static Typing, Memory Layout, Pointers และ Escape Analysis",
      description: "ทำความเข้าใจปรัชญา Less is More ของ Go, สถาปัตยกรรมหน่วยความจำ Stack vs Heap, การวิเคราะห์ Escape Analysis (go build -gcflags=-m), การจัดเรียง Memory Padding ใน Structs และการส่งค่า Pass by Value vs Pointer Receiver",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา Go: ปรัชญาการออกแบบ และโครงสร้างหน่วยความจำ

ภาษา **Go (Golang)** ถูกประดิษฐ์ขึ้นที่ Google ในปี 2007 โดยสามวิศวกรระดับตำนาน:
- **Robert Griesemer:** ผู้มีส่วนร่วมพัฒนา V8 JavaScript Engine และ Java HotSpot VM
- **Rob Pike:** ผู้ร่วมสร้างระบบปฏิบัติการ Plan 9, UTF-8 และทีมผู้สร้าง Unix ดั้งเดิมที่ Bell Labs
- **Ken Thompson:** ผู้ร่วมสร้างระบบปฏิบัติการ Unix, ภาษา B (ต้นกำเนิดของ C), และ UTF-8 (Turing Award Winner)

---

## 1. ปรัชญา "Simplicity is Complicated" (Less is More)
ในขณะที่ภาษาอื่นแข่งขันกันเพิ่มฟีเจอร์ที่ซับซ้อน Go เลือกเส้นทางตรงข้าม:
1. **No Class / No Inheritance:** ตัดระบบการสืบทอดที่ซับซ้อนทิ้ง แล้วใช้ **Composition** ผ่าน Struct Embedding แทน
2. **No Exceptions:** ใช้ **Explicit Errors as Values** ส่งผ่าน Multiple Return Values เพื่อบังคับให้จัดการข้อผิดพลาด ณ จุดเกิดเหตุ
3. **Single Static Binary:** คอมไพล์ซอร์สโค้ดพร้อม Runtime และ Dependencies ทั้งหมดออกมาเป็นไฟล์ Binary ตัวเดียว (เช่น ELF บน Linux, PE บน Windows) นำไป Deploy บน Docker Container ขนาดเล็กเพียง 15MB ได้ทันทีโดยไม่ต้องลง Runtime แยกต่างหาก
4. **Mandatory Canonical Formatting:** จัดรูปแบบโค้ดด้วยคำสั่ง \`gofmt\` ทำให้โค้ดของ Go ทุกบรรทัดบนโลกมีหน้าตาเหมือนกัน 100%

---

## 2. โครงสร้างหน่วยความจำและ Escape Analysis
ใน Go โปรแกรมเมอร์ไม่ต้องสั่ง \`malloc()\` หรือ \`free()\` ด้วยตนเอง แต่ก็ไม่ได้โยนทุกอย่างลง Heap เหมือน Java/Python:

\`\`\`text
+-------------------------------------------------------------------------+
|                  Go Memory Allocation & Escape Analysis                 |
+-------------------------------------------------------------------------+
|  Function Scope (Stack Frame)                                           |
|  +-------------------------------------------------------------------+  |
|  |  var a int = 10;            --> อยู่บน Stack (ต้นทุนจอง O(1))     |  |
|  |  u := User{Name: "Somchai"} --> ไม่หลุดออกนอกฟังก์ชัน -> บน Stack |  |
|  +-------------------------------------------------------------------+  |
|         |                                                               |
|         | ส่ง Pointer หลุดรอดออกไปนอกฟังก์ชัน (&User)                     |
|         v                                                               |
|  Heap Memory (Garbage Collected)                                        |
|  +-------------------------------------------------------------------+  |
|  |  *User (Escaped to Heap!)   --> จัดสรรบน Heap ให้ GC ดูแล        |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
\`\`\`

- **Stack Allocation:** หากคอมไพเลอร์พิสูจน์ได้ว่าตัวแปรมีอายุขัยไม่เกินขอบเขตของฟังก์ชัน จะจัดสรรลงใน **Stack** ซึ่งเร็วระดับ CPU Register และคืนหน่วยความจำทันทีเมื่อฟังก์ชันจบลง โดยไม่ต้องรบกวน Garbage Collector
- **Escape Analysis:** หากมีการส่ง Pointer ของตัวแปรโลคัลออกไปภายนอก คอมไพเลอร์จะ "ย้าย" (Escape) ตัวแปรนั้นไปจองบน **Heap** อัตโนมัติ ตรวจสอบได้ด้วยคำสั่ง:
  \`\`\`bash
  go build -gcflags="-m -m" main.go
  \`\`\`

---

## 3. การจัดเรียง Memory Padding และ Data Alignment ใน Struct
การเรียงลำดับฟิลด์ใน Struct ส่งผลต่อขนาดหน่วยความจำและประสิทธิภาพ Cache Line ของ CPU อย่างมีนัยสำคัญ:

\`\`\`go
// โครงสร้างที่กินแรม 24 Bytes (เนื่องจาก Memory Alignment 8-byte boundary)
type BadStruct struct {
    a bool   // 1 byte + 7 bytes padding!
    b int64  // 8 bytes
    c bool   // 1 byte + 7 bytes padding!
}

// โครงสร้างที่กินแรมเพียง 16 Bytes (ประหยัดแรมลง 33%!)
type GoodStruct struct {
    b int64  // 8 bytes
    a bool   // 1 byte
    c bool   // 1 byte + 6 bytes padding
}
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"unsafe"
)

// 1. เปรียบเทียบ Memory Alignment และขนาดของ Struct
type UnalignedEntity struct {
	Active  bool    // 1 byte
	Version int64   // 8 bytes (ต้องการ 8-byte alignment)
	Flag    bool    // 1 byte
}

type AlignedEntity struct {
	Version int64   // 8 bytes
	Active  bool    // 1 byte
	Flag    bool    // 1 byte (ใช้ padding ร่วมกัน)
}

// 2. Struct และ Method Receiver
type Student struct {
	ID    string
	Name  string
	GPA   float64
}

// Value Receiver (คัดลอกค่าทั้งก้อน ไม่กระทบตัวจริง)
func (s Student) DisplaySummary() {
	fmt.Printf("🎓 [READ-ONLY] %s (%s) GPA: %.2f\n", s.Name, s.ID, s.GPA)
}

// Pointer Receiver (แก้ไขค่าตัวจริงใน Memory โดยตรงแบบ Zero-Copy)
func (s *Student) SetGPA(newGpa float64) {
	if newGpa >= 0.0 && newGpa <= 4.0 {
		s.GPA = newGpa
	}
}

func main() {
	fmt.Println("=== IT Academy Go Memory Architecture Diagnostics ===")

	// ตรวจสอบขนาด Struct ในหน่วยความจำจริง
	var unaligned UnalignedEntity
	var aligned AlignedEntity

	fmt.Printf("Memory Size Unaligned : %d bytes\n", unsafe.Sizeof(unaligned))
	fmt.Printf("Memory Size Aligned   : %d bytes (Optimized!)\n", unsafe.Sizeof(aligned))

	// ตรวจสอบการทำงานของ Pointers
	std := Student{ID: "STD-6701", Name: "ภัทรดนัย วงศ์วิจิตร", GPA: 3.20}
	std.DisplaySummary()

	// แก้ไขค่าผ่าน Pointer Receiver
	std.SetGPA(3.85)
	std.DisplaySummary()
}`,
        description: "การวิเคราะห์ Memory Size, Data Alignment และการใช้งาน Method Receiver ในภาษา Go"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `NewStudent(id, name string, gpa float64) *Student` ที่รับข้อมูลแล้วคืนค่า Pointer ของ Student ที่ถูกจัดสรรบน Heap อย่างถูกต้อง",
        startingCode: `package main

type Student struct {
	ID   string
	Name string
	GPA  float64
}

func NewStudent(id, name string, gpa float64) *Student {
	// TODO: สร้างและคืนค่า Pointer ของ Student
	return nil
}`,
        solution: `package main

type Student struct {
	ID   string
	Name string
	GPA  float64
}

func NewStudent(id, name string, gpa float64) *Student {
	return &Student{
		ID:   id,
		Name: name,
		GPA:  gpa,
	}
}`
      },
      quiz: [
        {
          id: "go-1-q1",
          question: "เครื่องมือ Escape Analysis ใน Go Compiler มีหน้าที่หลักเพื่อสิ่งใด?",
          options: [
            "ค้นหาคำสั่งที่ทำให้โปรแกรมหยุดทำงานกะทันหัน",
            "วิเคราะห์ว่าตัวแปรมีอายุขัยหลุดรอดออกนอกฟังก์ชันหรือไม่ เพื่อเลือกว่าจะจัดสรรบน Stack หรือ Heap",
            "แปลงโค้ด Go ให้เป็นภาษา Rust ก่อนคอมไพล์",
            "ตรวจสอบว่าโค้ดมีการต่ออินเทอร์เน็ตหรือไม่"
          ],
          correctAnswer: 1,
          explanation: "Escape Analysis ของ Go Compiler ทำหน้าที่วิเคราะห์ตัวแปร หากตัวแปรไม่ถูกอ้างอิงนอกขอบเขตฟังก์ชัน จะจัดสรรบน Stack เพื่อความเร็วสูงสุด แต่หากหลุดรอด (Escape) เช่น มีการส่ง Pointer ออกไป จะถูกย้ายไปจัดสรรบน Heap แทน"
        },
        {
          id: "go-1-q2",
          question: "เหตุใด Struct ที่มีชนิดข้อมูลเดียวกันแต่อยู่คนละลำดับ จึงอาจมีขนาด unsafe.Sizeof แตกต่างกัน?",
          options: [
            "เพราะ Go สุ่มจัดสรรขนาดของ Struct",
            "เพราะ CPU Architecture บังคับการจัดเรียง Memory Alignment (เช่น int64 ต้องอยู่บน 8-byte boundary) ทำให้เกิดช่องว่าง (Padding)",
            "เพราะตัวแปรแรกของ Struct จะถูกคูณขนาดด้วย 2 เสมอ",
            "เพราะชื่อตัวแปรที่มีความยาวมากจะกินแรมมากกว่า"
          ],
          correctAnswer: 1,
          explanation: "สถาปัตยกรรม CPU กำหนด Data Alignment เพื่อให้อ่านข้อมูลได้ใน 1 Memory Cycle ชนิดข้อมูลขนาด 8 ไบต์ต้องเริ่มที่แอดเดรสที่หารด้วย 8 ลงตัว หากฟิลด์ก่อนหน้าใช้ไม่เต็ม คอมไพเลอร์จะแทรก Padding Byte เข้าไป"
        },
        {
          id: "go-1-q3",
          question: "ข้อใดอธิบายความแตกต่างระหว่าง Value Receiver `func (s Student)` และ Pointer Receiver `func (s *Student)` ได้ถูกต้องที่สุด?",
          options: [
            "Value Receiver แก้ไขค่าตัวจริงได้ ส่วน Pointer Receiver แก้ไขไม่ได้",
            "Value Receiver จะคัดลอกข้อมูลทั้งก้อน (Copy by Value) ส่วน Pointer Receiver จะส่ง Memory Address ทำให้ประหยัดแรมและแก้ไขค่าต้นฉบับได้",
            "Pointer Receiver ทำงานช้ากว่า Value Receiver เสมอ",
            "ทั้งสองแบบทำงานเหมือนกันทุกประการ"
          ],
          correctAnswer: 1,
          explanation: "Value Receiver จะสร้าง Copy ของ Struct ขึ้นมาใหม่ใน Stack Frame ทำให้การแก้ไขไม่มีผลต่อต้นฉบับ ส่วน Pointer Receiver จะส่ง Pointer ไปยังอ็อบเจกต์เดิม ช่วยหลีกเลี่ยงการ Copy ข้อมูลขนาดใหญ่และแก้ไขสถานะของ Struct ได้โดยตรง"
        }
      ]
    },
    {
      id: "go-2",
      title: "การจัดการข้อผิดพลาดตามแบบฉบับ Go: Explicit Error Handling, Panic และ Recover",
      description: "ทำความเข้าใจปรัชญา Errors are Values, การจัดการ error ด้วย if err != nil, Sentinel Errors, การทำ Error Wrapping ด้วย fmt.Errorf(%w), การสืบค้นข้อผิดพลาดด้วย errors.Is และ errors.As และการกู้คืนวิกฤตด้วย panic และ recover",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# การจัดการข้อผิดพลาด (Error Handling) ตามแบบฉบับ Go

ในขณะที่ภาษาส่วนใหญ่ (เช่น Java, Python, C#) ใช้กลไก **Exception Handling (try-catch)** ซึ่งแทรกซ่อนการกระโดดของเส้นทางโปรแกรม (Hidden Control Flow) และมีค่าใช้จ่าย Stack Unwinding สูง ภาษา Go เลือกใช้แนวคิด **Explicit Error Handling**:

> *"Errors are values. Values can be programmed, and since errors are values, errors can be programmed."* — Rob Pike

---

## 1. Interface ของ Error ใน Go
ใน Go ข้อผิดพลาดคือ Type ใดๆ ก็ตามที่ Implement Interface พื้นฐาน \`error\`:

\`\`\`go
type error interface {
    Error() string
}
\`\`\`

ฟังก์ชันที่อาจเกิดข้อผิดพลาดจะส่งคืนค่าผลลัพธ์คู่กับ \`error\` ผ่าน Multiple Return Values:
\`\`\`go
func CalculateDivision(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}
\`\`\`

---

## 2. Sentinel Errors และ Error Wrapping (\`%w\`)
ตั้งแต่ Go 1.13 ได้นำเสนอกลไกการห่อหุ้มข้อผิดพลาด (Error Wrapping) เพื่อรักษาบริบท (Context) ของปัญหาที่เกิดขึ้นในแต่ละเลเยอร์:

\`\`\`text
[Original Error: sql.ErrNoRows]
       |
       v (ห่อหุ้มด้วย fmt.Errorf("find user: %w", err))
[Layer 1 Error: find user: sql: no rows in result set]
       |
       v (ห่อหุ้มด้วย fmt.Errorf("auth service: %w", err))
[Layer 2 Error: auth service: find user: sql: no rows in result set]
\`\`\`

### การตรวจสอบด้วย \`errors.Is\` และ \`errors.As\`:
- **\`errors.Is(err, target)\`:** ตรวจสอบว่าในสายการห่อหุ้ม (Error Chain) มี Sentinel Error ที่ตรงกับ target หรือไม่
- **\`errors.As(err, &targetStruct)\`:** ตรวจสอบและสกัดข้อผิดพลาดที่เป็น Custom Struct ออกมาใช้งาน

\`\`\`go
var ErrNotFound = errors.New("resource not found")

// ตรวจสอบแม้ถูกห่ออยู่หลายชั้น
if errors.Is(err, ErrNotFound) {
    // จัดการกรณีหาไม่พบ
}
\`\`\`

---

## 3. Panic, Defer, และ Recover: วิกฤตการณ์ระดับรันไทม์
- **\`panic\`:** ใช้สำหรับสถานการณ์วิกฤตที่โปรแกรมไม่สามารถทำงานต่อไปได้จริงๆ (Unrecoverable Program State) เช่น การเชื่อมต่อฐานข้อมูลหลักล้มเหลวขณะบูตระบบ หรือ Out of Memory
- **\`defer\`:** เมธอดที่ถูกจองให้ทำงานเมื่อฟังก์ชันปัจจุบันออกจากสโคป (LIFO Order)
- **\`recover\`:** ฟังก์ชันพิเศษที่ใช้ดักจับ Panic ภายในฟังก์ชันที่ถูก \`defer\` เพื่อไม่ให้กระบวนการทั้งหมดของโปรแกรมต้อง Crash`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"errors"
	"fmt"
)

// 1. นิยาม Sentinel Errors
var (
	ErrAccountBlocked   = errors.New("บัญชีนี้ถูกระงับการใช้งานชั่วคราว")
	ErrInsufficientFund = errors.New("ยอดเงินคงเหลือไม่เพียงพอ")
)

// 2. Custom Error Struct สำหรับข้อมูลเชิงลึก
type BankingError struct {
	AccountID string
	Amount    float64
	Reason    error
}

func (e *BankingError) Error() string {
	return fmt.Sprintf("ธุรกรรมบัญชี %s ล้มเหลว (จำนวน: %.2f บาท): %v", e.AccountID, e.Amount, e.Reason)
}

func (e *BankingError) Unwrap() error {
	return e.Reason
}

// 3. ฟังก์ชันจำลองการถอนเงิน
func ProcessWithdrawal(accountID string, balance, requestAmount float64) (float64, error) {
	if accountID == "ACC-LOCKED" {
		return balance, &BankingError{
			AccountID: accountID,
			Amount:    requestAmount,
			Reason:    ErrAccountBlocked,
		}
	}

	if requestAmount > balance {
		return balance, &BankingError{
			AccountID: accountID,
			Amount:    requestAmount,
			Reason:    ErrInsufficientFund,
		}
	}

	return balance - requestAmount, nil
}

func main() {
	fmt.Println("=== ระบบจัดการธุรกรรมการเงิน IT Academy ===")

	balance := 1000.00
	_, err := ProcessWithdrawal("ACC-101", balance, 1500.00)

	if err != nil {
		fmt.Println("❌ เกิดข้อผิดพลาด:", err)

		// ตรวจสอบ Sentinel Error ข้ามเลเยอร์ด้วย errors.Is
		if errors.Is(err, ErrInsufficientFund) {
			fmt.Println("👉 แนะนำผู้ใช้: กรุณาเติมเงินเข้าบัญชีก่อนทำรายการใหม่")
		}

		// ดึงโครงสร้าง Custom Error ด้วย errors.As
		var bankErr *BankingError
		if errors.As(err, &bankErr) {
			fmt.Printf("🔍 Debug Info: บัญชีเป้าหมายคือ %s ขอถอน %.2f บาท\n", bankErr.AccountID, bankErr.Amount)
		}
	}
}`,
        description: "การออกแบบ Custom Error Type พร้อมรองรับ Unwrap, errors.Is และ errors.As"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `SafeExecute(fn func()) (recoveredAny any)` ที่ใช้ defer และ recover ดักจับกรณีเกิด panic แล้วส่งคืนค่า panic ที่ดักจับได้ ถ้าไม่เกิด panic ให้คืนค่า nil",
        startingCode: `package main

func SafeExecute(fn func()) (recoveredAny any) {
	// TODO: ดักจับ panic ด้วย defer และ recover
	fn()
	return nil
}`,
        solution: `package main

func SafeExecute(fn func()) (recoveredAny any) {
	defer func() {
		if r := recover(); r != nil {
			recoveredAny = r
		}
	}()
	fn()
	return nil
}`
      },
      quiz: [
        {
          id: "go-2-q1",
          question: "ทำไมภาษา Go จึงเลือกใช้การส่งคืน error เป็น value แทนการใช้ try-catch exception?",
          options: [
            "เพราะผู้สร้าง Go ลืมพัฒนาไวยากรณ์ try-catch",
            "เพื่อให้การควบคุมการไหลของโปรแกรมมีความชัดเจน (Explicit Control Flow) บังคับให้โปรแกรมเมอร์จัดการข้อผิดพลาด ณ จุดที่เกิดเหตุ และไม่มี Overhead จาก Stack Unwinding",
            "เพื่อให้โปรแกรมของ Go ทำงานช้าลง",
            "เพราะคอมพิวเตอร์ในปัจจุบันไม่รองรับระบบ exception"
          ],
          correctAnswer: 1,
          explanation: "Go ยึดปรัชญา Explicit Error Handling เพราะ Exception มักทำให้เกิด Hidden Execution Paths ที่คาดเดายาก การส่งคืน Error เป็น Value ทำให้โค้ดอ่านง่าย ตรวจสอบง่าย และมีประสิทธิภาพสูง"
        },
        {
          id: "go-2-q2",
          question: "การใช้ verb `%w` ใน `fmt.Errorf(\"something failed: %w\", err)` มีประโยชน์พิเศษอย่างไร?",
          options: [
            "เพื่อแปลงข้อความ error ให้เป็นตัวเอียง",
            "เพื่อทำการ Wrap (ห่อหุ้ม) ข้อผิดพลาดเดิมเข้าไป ทำให้สามารถตรวจสอบรากเหง้าด้วย errors.Is และ errors.As ได้",
            "เพื่อส่งอีเมลแจ้งเตือนไปยังผู้ดูแลระบบ",
            "เพื่อลบหน่วยความจำของตัวแปร err ทิ้ง"
          ],
          correctAnswer: 1,
          explanation: "Verb `%w` ใน fmt.Errorf จะสร้างข้อผิดพลาดที่ Implement เมธอด `Unwrap() error` ทำให้ฟังก์ชัน `errors.Is()` และ `errors.As()` สามารถแกะรอยตรวจสอบ Error ต้นตอที่อยู่ข้างในห่วงโซ่ (Error Chain) ได้"
        },
        {
          id: "go-2-q3",
          question: "ฟังก์ชัน `recover()` ในภาษา Go จะทำงานได้ถูกต้องเมื่อถูกเรียกใช้งานที่ตำแหน่งใด?",
          options: [
            "เรียกใช้งานที่บรรทัดแรกสุดของฟังก์ชัน main()",
            "เรียกใช้งานภายในฟังก์ชันที่ถูกสั่ง `defer` เอาไว้เท่านั้น",
            "เรียกใช้งานใน Goroutine ตัวอื่น",
            "เรียกใช้งานในไฟล์ header แยกต่างหาก"
          ],
          correctAnswer: 1,
          explanation: "recover() จะสามารถหยุดยั้ง Panic Sequence และดึงค่าของการ Panic ออกมาได้เฉพาะเมื่อถูกเรียกใช้งานโดยตรงภายใน Deferred Function เท่านั้น"
        }
      ]
    },
    {
      id: "go-3",
      title: "Interfaces และ Composition: สถาปัตยกรรม Decoupled โดยไม่ต้องมี Inheritance",
      description: "เจาะลึกการทำงานของ Interface ใน Go Runtime (iface vs eface, itab table), การทำ Implicit Implementation (Duck Typing), ข้อควรระวังเรื่อง Interface Pollution, Struct Embedding และการออกแบบ Clean Architecture",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Interfaces และ Composition ในภาษา Go

ในภาษา Go ระบบเชิงวัตถุถูกสร้างขึ้นบนแนวคิด **"Composition over Inheritance"** โดยไม่มีคีย์เวิร์ด \`class\` และไม่มีคีย์เวิร์ด \`implements\` แม้แต่ตัวเดียว

---

## 1. Implicit Interfaces (Structural Duck Typing)
หาก Struct ใดๆ มีฟังก์ชันและพารามิเตอร์ครบตามที่ Interface กำหนดไว้ Go Compiler จะถือว่า Struct นั้น **Implement Interface นั้นโดยอัตโนมัติ**:

> *"If it walks like a duck and quacks like a duck, it's a duck."*

\`\`\`go
type Reader interface {
    Read(p []byte) (n int, err error)
}
\`\`\`
 Struct ใดก็ตามในโลกที่มีเมธอด \`Read(p []byte) (n int, err error)\` จะเข้ากันได้กับ \`Reader\` ทันที โดยที่ผู้เขียน Struct ไม่จำเป็นต้องรู้ว่ามี Interface นี้อยู่บนโลก!

---

## 2. โครงสร้างภายในของ Interface ใน Go Runtime (\`iface\` และ \`eface\`)
ในระดับ Go Runtime อ็อบเจกต์ Interface ไม่ได้เป็นแค่พอยน์เตอร์ธรรมดา แต่มีขนาด 16 ไบต์ (บนระบบ 64-bit) ประกอบด้วย 2 ฟิลด์หลัก:

\`\`\`text
+-------------------------------------------------------------------------+
|                  Go Runtime Interface Internal Layout                   |
+------------------------------------+------------------------------------+
|  Non-Empty Interface (iface)       |  Empty Interface (eface / any)     |
+------------------------------------+------------------------------------+
|  1. *itab                          |  1. *_type                         |
|     - InterType (สเปก Interface)   |     - Type Descriptor ข้อมูลเมทาดาต้า|
|     - Type (ชนิดข้อมูลจริง Concrete) |                                    |
|     - Hash (สำหรับตรวจสอบความเร็ว) |                                    |
|     - Fun[1] (ตาราง Function Ptrs) |                                    |
|  2. *data (Pointer ชี้หาค่าจริง)   |  2. *data (Pointer ชี้หาค่าจริง)   |
+------------------------------------+------------------------------------+
\`\`\`

### กับดักระดับตำนาน: Interface ที่เก็บ Nil Pointer ไม่เท่ากับ Nil!
\`\`\`go
var s *Student = nil
var i interface{} = s

// i == nil จะได้ค่า FALSE!
// เพราะ iface มี *itab ที่บอกว่าเป็น *Student แต่ *data เป็น nil
if i == nil {
    // โค้ดส่วนนี้จะไม่ทำงาน!
}
\`\`\`

---

## 3. กฎทองของการออกแบบ Interface ใน Go
1. **Accept Interfaces, Return Structs:** ฟังก์ชันควรรับพารามิเตอร์เป็น Interface เพื่อความยืดหยุ่น แต่ควรส่งคืน Concrete Struct เพื่อให้ผู้เรียกมีอิสระในการใช้งาน
2. **Keep Interfaces Small:** Interface ที่ดีมักมีเพียง 1 หรือ 2 เมธอดเท่านั้น (เช่น \`io.Reader\`, \`io.Writer\`, \`fmt.Stringer\`)
3. **Avoid Interface Pollution:** อย่าสร้าง Interface ขึ้นมาล่วงหน้าถ้ายังไม่มีการใช้งานมากกว่า 1 ชนิดข้อมูลจริง`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
)

// 1. Single-Method Interfaces
type Storage interface {
	Save(key string, data []byte) error
}

type Cache interface {
	Get(key string) ([]byte, bool)
}

// 2. Struct Embedding (Composition)
type RedisStorage struct {
	Endpoint string
}

func (r *RedisStorage) Save(key string, data []byte) error {
	fmt.Printf("🔴 [REDIS] บันทึก Key: '%s' ไปยัง Server: %s\n", key, r.Endpoint)
	return nil
}

func (r *RedisStorage) Get(key string) ([]byte, bool) {
	fmt.Printf("🔴 [REDIS] ค้นหา Key: '%s'\n", key)
	return []byte("sample-cached-data"), true
}

// 3. User Service ที่รับ Dependencies ผ่าน Interface
type UserService struct {
	storage Storage // Decoupled Dependency
}

func NewUserService(s Storage) *UserService {
	return &UserService{storage: s}
}

func (u *UserService) RegisterUser(username string) error {
	payload := []byte(fmt.Sprintf(` + "`" + `{"username": "%s"}` + "`" + `, username))
	return u.storage.Save("usr:"+username, payload)
}

func main() {
	fmt.Println("=== สถาปัตยกรรม Decoupled Interfaces ใน Go ===")

	redis := &RedisStorage{Endpoint: "redis-cluster.internal:6379"}
	service := NewUserService(redis)

	err := service.RegisterUser("kritsana.dev")
	if err == nil {
		fmt.Println("✓ ดำเนินการลงทะเบียนผู้ใช้งานสำเร็จ 100%")
	}
}`,
        description: "การออกแบบ Decoupled Architecture ผ่าน Implicit Interfaces และ Dependency Injection"
      },
      challenge: {
        description: "เขียน Interface `Calculator` ที่มีเมธอด `Calculate(a, b float64) float64` และเขียน Struct `Adder` ที่ Implement เมธอดนี้โดยคืนค่าผลบวก",
        startingCode: `package main

// TODO: สร้าง Calculator Interface และ Adder Struct
`,
        solution: `package main

type Calculator interface {
	Calculate(a, b float64) float64
}

type Adder struct{}

func (Adder) Calculate(a, b float64) float64 {
	return a + b
}`
      },
      quiz: [
        {
          id: "go-3-q1",
          question: "เหตุใดโค้ด `var s *MyStruct = nil; var i any = s; if i == nil` จึงประเมินค่าออกมาเป็น FALSE?",
          options: [
            "เพราะภาษา Go มีข้อผิดพลาดในการตรวจสอบค่า boolean",
            "เพราะ Interface (iface/eface) จะเป็น nil ก็ต่อเมื่อทั้ง Type Information (itab) และ Data Pointer เป็น nil ทั้งคู่ แต่ในกรณีนี้ Type ชี้ไปที่ *MyStruct แล้ว",
            "เพราะคำสั่ง any จะแปลง nil ให้เป็นสตริงว่าง",
            "เพราะ Struct ต้องมีขนาดมากกว่า 100 ไบต์เสมอ"
          ],
          correctAnswer: 1,
          explanation: "Interface ใน Go เป็นคู่ข้อมูล (Type, Value) การที่ Interface จะเท่ากับ nil ได้ ทั้ง Type Descriptor และ Value ต้องเป็น nil ทั้งหมด เมื่อเรากำหนด `s` ที่เป็น `*MyStruct` แม้ค่าข้างในเป็น nil แต่ Type ถูกบันทึกเป็น `*MyStruct` ทำให้ตัวแปร Interface ไม่ถือเป็น nil"
        },
        {
          id: "go-3-q2",
          question: "หลักการ 'Accept Interfaces, Return Structs' ใน Go ส่งเสริมการออกแบบระบบอย่างไร?",
          options: [
            "บังคับให้ทุกฟังก์ชันต้องเขียนด้วย Interface ตัวเดียวกัน",
            "ทำให้ฟังก์ชันมีความยืดหยุ่นในการรับ Type ใดๆ ที่มีพฤติกรรมตรงกัน ในขณะที่ผู้เรียกฟังก์ชันจะได้รับ Type ที่แท้จริงกลับไป ทำให้ไม่ต้องทำ Type Assertion",
            "ทำให้โปรแกรมรันได้โดยไม่ต้องใช้ระบบปฏิบัติการ",
            "เป็นการลดจำนวนไฟล์ซอร์สโค้ดในโปรเจกต์"
          ],
          correctAnswer: 1,
          explanation: "การรับ Interface ทำให้ฟังก์ชัน Decouple จาก Dependency ภายนอกและทำ Mocking ได้ง่าย ส่วนการส่งคืน Concrete Struct ทำให้ผู้เรียกได้ข้อมูลที่สมบูรณ์และไม่ต้องพึ่งพา Interface ที่จำกัดสิทธิ์เกินจำเป็น"
        },
        {
          id: "go-3-q3",
          question: "ความหมายของ Implicit Interface ในภาษา Go คืออะไร?",
          options: [
            "ต้องประกาศคำสั่ง implements เหมือนภาษา Java เสมอ",
            "ชนิดข้อมูลจะถือว่า Implement Interface ทันทีหากมีเมธอดครบถ้วนตามที่กำหนด โดยไม่ต้องระบุชื่อ Interface ในซอร์สโค้ดของชนิดข้อมูลนั้นเลย",
            "Interface สามารถทำงานได้เฉพาะตอนปิดเครื่อง",
            "สามารถแปลงตัวเลขเป็นตัวอักษรได้อัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "Go ใช้ระบบ Duck Typing เชิงสถิต (Implicit Interface) ผู้สร้าง Struct เพียงแค่เขียน Method ให้ตรงตาม Signature ก็ถือว่าเชื่อมโยงเข้ากับ Interface นั้นทันทีโดยไม่ต้องผูกติดทางโค้ด"
        }
      ]
    },
    {
      id: "go-4",
      title: "Goroutines และ Concurrency Model: M:N Runtime Scheduler (GMP Model)",
      description: "เจาะลึกเบื้องหลังความเร็วระดับตำนานของ Go Concurrency: ความแตกต่างระหว่าง OS Threads และ Goroutines, สถาปัตยกรรม GMP Scheduler (Goroutine, Machine, Processor), Work Stealing Algorithm, Network Poller และการซิงโครไนซ์ด้วย sync.WaitGroup / sync.Mutex",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Goroutines และสถาปัตยกรรม GMP Runtime Scheduler

ในขณะที่ภาษาดั้งเดิม (เช่น C++, Java รุ่นเก่า) ใช้ **1:1 Threading Model** (1 แอปพลิเคชันเธรด = 1 OS Kernel Thread) ซึ่งกินแรมสูงถึง **1MB - 2MB** ต่อเธรด และมีค่าใช้จ่ายสลับงาน (Context Switch) ในระดับเคอร์เนลสูงถึง 1-2 ไมโครวินาที

ภาษา Go ได้ปฏิวัติวงการด้วย **M:N Scheduler** ที่แมปปิ้ง **M Goroutines** ลงบน **N OS Threads** ทำให้ Goroutine กินแรมเริ่มต้นเพียง **2KB** และ Context Switch ใช้เวลาเพียงไม่กี่สิบนาโนวินาที!

---

## 1. องค์ประกอบหลักของ GMP Model
ระบบจัดตารางงานของ Go Runtime ขับเคลื่อนด้วยโครงสร้าง 3 เสาหลัก:

\`\`\`text
+-------------------------------------------------------------------------+
|                         Go GMP Scheduler Topology                       |
+-------------------------------------------------------------------------+
|                                                                         |
|      [ Global Run Queue (GRQ) ]  <-- รองรับ Goroutines ส่วนกลาง         |
|                   |                                                     |
|         +---------+---------+                                           |
|         |                   |                                           |
|         v                   v                                           |
|     +-------+           +-------+                                       |
|     |  P 0  |           |  P 1  |   <-- Logical Processors (= CPU Cores)|
|     +-------+           +-------+                                       |
|     | Local |           | Local |                                       |
|     | Queue |           | Queue |   <-- บรรจุได้ 256 Goroutines         |
|     | [G][G]|           | [G][G]|                                       |
|     +-------+           +-------+                                       |
|         |                   |                                           |
|         v                   v                                           |
|     +-------+           +-------+                                       |
|     |  M 0  |           |  M 1  |   <-- OS Threads (Kernel Threads)     |
|     +-------+           +-------+                                       |
|         |                   |                                           |
|         v                   v                                           |
|     +-------+           +-------+                                       |
|     | CPU 0 |           | CPU 1 |   <-- Physical CPU Cores              |
|     +-------+           +-------+                                       |
+-------------------------------------------------------------------------+
\`\`\`

- **G (Goroutine):** แทนโครงสร้างงาน ข้อมูล Stack (เริ่มต้น 2KB ขยายหดได้แบบ Segmented/Contiguous), Program Counter (PC), และสถานะ (\`_Grunnable\`, \`_Grunning\`, \`_Gwaiting\`)
- **M (Machine):** แทน OS Thread จริงที่เคอร์เนลของระบบปฏิบัติการสร้างขึ้น
- **P (Processor):** แทนสิทธิ์และทรัพยากรในการประมวลผล (Logical Context) ค่าเริ่มต้นเท่ากับจำนวน CPU Cores (\`GOMAXPROCS\`) โดยแต่ละ P จะมี **Local Run Queue** ขนาด 256 สล็อต

---

## 2. Work Stealing และ Network Poller
1. **Work Stealing Algorithm:** เมื่อ Local Run Queue ของ P ตัวใดตัวหนึ่งทำงานจนหมดเกลี้ยง P ตัวนั้นจะไม่ยอมว่างงาน แต่จะไป "ขโมยงาน" ครึ่งหนึ่งมาจาก Local Run Queue ของ P ตัวอื่น หรือดึงจาก Global Run Queue
2. **Network Poller (Non-blocking I/O):** เมื่อ Goroutine เรียกใช้ Network Socket (เช่น \`net.Dial\`, \`http.Get\`) ตัว Goroutine จะถูกถอดออกจาก M แล้วส่งไปฝากไว้กับ OS Network Poller (\`epoll\` บน Linux, \`kqueue\` บน macOS, \`IOCP\` บน Windows) ทำให้ OS Thread ตัวนั้นว่างและหยิบ Goroutine ตัวอื่นมาทำงานต่อได้ทันที!

---

## 3. การควบคุม Concurrency ด้วย \`sync.WaitGroup\` และ \`sync.Mutex\`
เมื่อหลาย Goroutine ต้องเข้าถึงข้อมูลชุดเดียวกัน (Shared Memory):
- **\`sync.WaitGroup\`:** ใช้สำหรับรอคอยให้ Goroutines กลุ่มหนึ่งทำงานเสร็จสิ้นครบถ้วน
- **\`sync.Mutex\` / \`sync.RWMutex\`:** ใช้สร้าง Critical Section ป้องกันปัญหา **Data Race**`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"sync"
	"time"
)

// โครงสร้าง Counter ที่ปลอดภัยต่อการเข้าถึงพร้อมกัน (Thread-Safe)
type ThreadSafeMetrics struct {
	mu     sync.RWMutex
	counts map[string]int
}

func NewMetrics() *ThreadSafeMetrics {
	return &ThreadSafeMetrics{
		counts: make(map[string]int),
	}
}

// Write Lock (ห้ามใครอ่านหรือเขียนขณะกำลังอัปเดต)
func (m *ThreadSafeMetrics) Increment(metricName string) {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.counts[metricName]++
}

// Read Lock (เปิดให้อ่านพร้อมกันได้หลาย Goroutines)
func (m *ThreadSafeMetrics) Get(metricName string) int {
	m.mu.RLock()
	defer m.mu.RUnlock()
	return m.counts[metricName]
}

func main() {
	fmt.Println("=== ทดสอบ Goroutines & Safe Concurrency Architecture ===")

	metrics := NewMetrics()
	var wg sync.WaitGroup

	numWorkers := 5
	requestsPerWorker := 1000

	start := time.Now()

	// ปล่อย Workers ทำงานพร้อมกันแบบขนาน
	for i := 1; i <= numWorkers; i++ {
		wg.Add(1)
		go func(workerID int) {
			defer wg.Done()
			for j := 0; j < requestsPerWorker; j++ {
				metrics.Increment("api_requests_total")
			}
		}(i)
	}

	wg.Wait() // รอจนกว่าทุก Worker จะทำงานครบ 100%
	elapsed := time.Since(start)

	total := metrics.Get("api_requests_total")
	fmt.Printf("✅ ประมวลผลเสร็จสิ้น: บันทึกข้อมูล %d รายการ ในเวลา %v\n", total, elapsed)
}`,
        description: "การใช้ sync.WaitGroup และ sync.RWMutex ในการควบคุม Concurrency ของ Goroutines"
      },
      challenge: {
        description: "เขียนโปรแกรมที่รัน 3 Goroutines โดยใช้ sync.WaitGroup เพื่อพิมพ์ตัวเลข 1, 2, 3 ออกมา และฟังก์ชัน main ต้องรอจนกระทั่งทั้ง 3 ตัวทำงานเสร็จจึงจะจบโปรแกรม",
        startingCode: `package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup
	// TODO: ปล่อย 3 Goroutines และใช้ wg.Wait()
}`,
        solution: `package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup
	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go func(n int) {
			defer wg.Done()
			fmt.Println(n)
		}(i)
	}
	wg.Wait()
}`
      },
      quiz: [
        {
          id: "go-4-q1",
          question: "ขนาดของ Stack เริ่มต้นสำหรับ 1 Goroutine ในภาษา Go มีขนาดประมาณเท่าใด?",
          options: [
            "2 เมกะไบต์ (2MB) เท่ากับ OS Thread",
            "ประมาณ 2 กิโลไบต์ (2KB) และสามารถยืดหยุ่นขยายตัวได้ตามต้องการ",
            "64 ไบต์",
            "1 จิกะไบต์ (1GB)"
          ],
          correctAnswer: 1,
          explanation: "Goroutine ถูกออกแบบมาให้เบามาก (Lightweight) โดยใช้หน่วยความจำ Stack เริ่มต้นเพียงประมาณ 2KB (เมื่อเทียบกับ 1-2MB ของ OS Thread) ทำให้เครื่องคอมพิวเตอร์ทั่วไปสามารถเปิด Goroutine นับแสนตัวพร้อมกันได้อย่างสบาย"
        },
        {
          id: "go-4-q2",
          question: "ในสถาปัตยกรรม GMP Scheduler ตัวอักษร 'P' หมายถึงสิ่งใด?",
          options: [
            "Pointer ของหน่วยความจำ",
            "Logical Processor หรือ Context สิทธิ์ในการประมวลผล ซึ่งมีจำนวนเท่ากับ GOMAXPROCS",
            "Physical Motherboard",
            "Program Counter Register"
          ],
          correctAnswer: 1,
          explanation: "P ย่อมาจาก Processor (Logical Processor) ซึ่งเป็นสะพานเชื่อมระหว่าง Goroutine (G) และ OS Thread (M) โดยเก็บ Local Run Queue ของตนเอง และปกติจะถูกตั้งค่าให้มีจำนวนเท่ากับ Core ของ CPU"
        },
        {
          id: "go-4-q3",
          question: "กลไก Work Stealing ใน Go Scheduler ช่วยเพิ่มประสิทธิภาพได้อย่างไร?",
          options: [
            "เมื่อ P ตัวใดทำงานใน Local Queue หมด จะไปดึงงานครึ่งหนึ่งจากคิวของ P ตัวอื่นมาทำ ทำให้แกน CPU ทุกตัวไม่ว่างงาน",
            "ขโมยสัญญาณอินเทอร์เน็ตจากคอมพิวเตอร์ข้างเคียง",
            "ลบงานที่ใช้เวลาประมวลผลนานทิ้งไปโดยไม่แจ้งเตือน",
            "บังคับให้ CPU เร่งสัญญาณนาฬิกา (Overclock)"
          ],
          correctAnswer: 0,
          explanation: "Work Stealing ป้องกันปัญหาการกระจายงานที่ไม่เท่ากัน เมื่อ Processor ตัวใดตัวหนึ่งประมวลผลคิวของตนเองเสร็จสิ้น มันจะไปขโมยงานครึ่งหนึ่งจากคิวของ Processor อื่น ส่งผลให้ CPU ทุกแกนถูกใช้งานอย่างคุ้มค่าสูงสุด"
        }
      ]
    },
    {
      id: "go-5",
      title: "Channels และ CSP Concurrency: Buffered Channels, Select และ Worker Pools",
      description: "ทำความเข้าใจปรัชญา Communicating Sequential Processes (CSP), โครงสร้างภายในของ hchan, ความแตกต่างระหว่าง Unbuffered และ Buffered Channels, Channel States (nil, open, closed), การ Multiplex ด้วยคำสั่ง select และการสร้าง Worker Pool Pattern ระดับโปรดักชัน",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Channels และปรัชญา CSP Concurrency

คำขวัญที่เป็นหัวใจสูงสุดของภาษา Go ที่ Rob Pike กล่าวไว้คือ:

> *"Do not communicate by sharing memory; instead, share memory by communicating."*
(อย่าสื่อสารด้วยการแชร์หน่วยความจำ แต่จงแชร์หน่วยความจำด้วยการสื่อสารผ่าน Channel)

แนวคิดนี้ต่อยอดมาจากโมเดลคณิตศาสตร์ **CSP (Communicating Sequential Processes)** คิดค้นโดย C.A.R. Hoare ในปี 1978

---

## 1. โครงสร้างภายในของ Channel (\`hchan\` struct)
Channel ใน Go ไม่ใช่แค่หลอดส่งข้อมูลลอยๆ แต่เป็น Struct ในระดับ Runtime ที่ชื่อ \`hchan\` (จองบน Heap เสมอ):

\`\`\`text
+-------------------------------------------------------------------------+
|                       Inside Go Channel (hchan)                         |
+-------------------------------------------------------------------------+
|  1. lock mutex              --> ป้องกัน Race Condition ระดับภายใน      |
|  2. qcount / dataqsiz       --> จำนวนสมาชิกปัจจุบัน / ขนาดบัฟเฟอร์รวม |
|  3. buf unsafe.Pointer      --> Circular Ring Buffer สำหรับเก็บข้อมูล |
|  4. elemsize / elemtype     --> ขนาดและชนิดของข้อมูล                    |
|  5. sendq / recvq (waitq)   --> คิว Linked List ของ Goroutines ที่รอส่ง/รับ|
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. สถานะทั้ง 3 ของ Channel (พฤติกรรมที่ต้องจำให้ขึ้นใจ!)

| สถานะของ Channel | การส่งข้อมูล (\`ch <- x\`) | การรับข้อมูล (\`<-ch\`) | การปิด (\`close(ch)\`) |
| :--- | :--- | :--- | :--- |
| **Nil** (\`var ch chan int\`) | **บล็อกตลอดกาล** (Deadlock) | **บล็อกตลอดกาล** (Deadlock) | **Panic!** |
| **Open** (\`make(chan int)\`) | ส่งสำเร็จ (หรือบล็อกถ้าเต็ม) | รับสำเร็จ (หรือบล็อกถ้าว่าง) | ปิดสำเร็จ |
| **Closed** | **Panic!** | ได้รับค่า **Zero Value** ทันที (\`, ok = false\`) | **Panic!** |

---

## 3. Unbuffered vs Buffered Channels
- **Unbuffered Channel (\`make(chan int)\`):** เป็นการนัดพบแบบตัวต่อตัว (Rendezvous) ผู้ส่งจะบล็อกจนกว่าผู้รับจะมารับ และผู้รับจะบล็อกจนกว่าผู้ส่งจะส่ง
- **Buffered Channel (\`make(chan int, N)\`):** ผู้ส่งสามารถส่งข้อมูลเข้า Circular Ring Buffer ได้ตราบใดที่คิวยังไม่เต็ม เมื่อเต็มจึงจะบล็อก

---

## 4. สถาปัตยกรรม Worker Pool Pattern
เพื่อจำกัดการใช้งานทรัพยากร (Resource Throttling) ไม่ให้เซิร์ฟเวอร์เปิด Goroutine จน RAM หมดเมื่อมี Request เข้ามามหาศาล:

\`\`\`text
[ incoming jobs ] ──> [ jobs channel ]
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
  [ Worker 1 ]        [ Worker 2 ]        [ Worker 3 ]
        │                   │                   │
        └───────────────────┼───────────────────┘
                            ▼
                  [ results channel ]
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"sync"
	"time"
)

// โครงสร้าง Job และ Result
type Job struct {
	ID        int
	TaskName  string
	Complexity int
}

type Result struct {
	JobID    int
	Output   string
	Duration time.Duration
}

// ฟังก์ชัน Worker แต่ละตัว
func worker(id int, jobs <-chan Job, results chan<- Result, wg *sync.WaitGroup) {
	defer wg.Done()

	for job := range jobs {
		start := time.Now()
		// จำลองการประมวลผลงาน
		time.Sleep(time.Duration(job.Complexity) * 50 * time.Millisecond)
		elapsed := time.Since(start)

		results <- Result{
			JobID:    job.ID,
			Output:   fmt.Sprintf("ประมวลผล '%s' สำเร็จโดย Worker-%d", job.TaskName, id),
			Duration: elapsed,
		}
	}
}

func main() {
	fmt.Println("=== IT Academy Production Worker Pool Engine ===")

	const numJobs = 6
	const numWorkers = 3

	jobs := make(chan Job, numJobs)
	results := make(chan Result, numJobs)

	var wg sync.WaitGroup

	// 1. เริ่มต้นสร้าง Worker Pool 3 ตัว
	for w := 1; w <= numWorkers; w++ {
		wg.Add(1)
		go worker(w, jobs, results, &wg)
	}

	// 2. ป้อนงานเข้าคิว
	for j := 1; j <= numJobs; j++ {
		jobs <- Job{ID: j, TaskName: fmt.Sprintf("รายงานภาษีชุดที่ #%d", j), Complexity: (j % 3) + 1}
	}
	close(jobs) // ปิด Channel เมื่อส่งงานครบ เพื่อให้ Workers หลุดออกจาก range loop

	// 3. รอให้ Workers ทุกตัวทำงานเสร็จ แล้วปิด results channel
	go func() {
		wg.Wait()
		close(results)
	}()

	// 4. ดึงผลลัพธ์ที่เสร็จสิ้นออกมาแสดงผล
	for res := range results {
		fmt.Printf("📦 [RESULT] Job #%d: %s (ใช้เวลา: %v)\n", res.JobID, res.Output, res.Duration)
	}

	fmt.Println("🎉 งานทั้งหมดในระบบประมวลผลเสร็จสิ้น 100%")
}`,
        description: "การสร้างและควบคุม Worker Pool Pattern ด้วย Buffered Channels และ sync.WaitGroup"
      },
      challenge: {
        description: "เขียนคำสั่ง `select` ที่รับข้อมูลจาก Channel `ch` แต่หากไม่มีข้อมูลส่งมาภายใน 100 มิลลิวินาที ให้พิมพ์ข้อความว่า 'timeout' แล้วออกจากฟังก์ชัน",
        startingCode: `package main

import (
	"fmt"
	"time"
)

func WaitForData(ch <-chan string) {
	// TODO: ใช้ select ร่วมกับ time.After(100 * time.Millisecond)
}`,
        solution: `package main

import (
	"fmt"
	"time"
)

func WaitForData(ch <-chan string) {
	select {
	case msg := <-ch:
		fmt.Println("Received:", msg)
	case <-time.After(100 * time.Millisecond):
		fmt.Println("timeout")
	}
}`
      },
      quiz: [
        {
          id: "go-5-q1",
          question: "อะไรจะเกิดขึ้นหาก Goroutine พยายามส่งข้อมูล (send) เข้าไปยัง Channel ที่ถูกปิด (close) ไปแล้ว?",
          options: [
            "ข้อมูลจะถูกทิ้งไปเฉยๆ โดยไม่เกิดอะไรขึ้น",
            "เกิด Runtime Panic ทันที (panic: send on closed channel)",
            "Channel จะเปิดตัวเองใหม่อัตโนมัติ",
            "ระบบจะแปลงข้อมูลนั้นให้เป็น nil"
          ],
          correctAnswer: 1,
          explanation: "ในภาษา Go การส่งข้อมูลเข้าไปใน Closed Channel ถือเป็นข้อผิดพลาดร้ายแรงและจะก่อให้เกิด Runtime Panic ทันที ในขณะที่การรับข้อมูลจาก Closed Channel จะได้รับ Zero Value อย่างปลอดภัย"
        },
        {
          id: "go-5-q2",
          question: "การอ่านข้อมูลจาก Channel ด้วยไวยากรณ์ `val, ok := <-ch` ค่าของตัวแปร `ok` ที่เป็น false หมายความว่าอย่างไร?",
          options: [
            "ข้อมูลที่ส่งมาเป็นเลข 0 หรือ false",
            "Channel ถูกปิดไปแล้วและไม่มีข้อมูลตกค้างอยู่ในบัฟเฟอร์อีกต่อไป",
            "ระบบกำลังบล็อกรอผู้ส่ง",
            "เกิดปัญหาหน่วยความจำไม่เพียงพอ"
          ],
          correctAnswer: 1,
          explanation: "ตัวแปร ok (Comma-ok idiom) จะเป็น false ก็ต่อเมื่อ Channel ถูกปิดเรียบร้อยแล้ว (Closed) และไม่มีข้อมูลค้างอยู่ในบัฟเฟอร์ ทำให้นักพัฒนาทราบว่าต้องหยุดลูปการรับข้อมูล"
        },
        {
          id: "go-5-q3",
          question: "ประโยชน์สูงสุดของการใช้ Worker Pool Pattern ในการพัฒนา Backend ด้วย Go คือข้อใด?",
          options: [
            "เพื่อหลีกเลี่ยงการเปิด Goroutines แบบไม่จำกัด (Unbounded Goroutines) ซึ่งอาจทำให้หน่วยความจำหรือ Connection ฐานข้อมูลล้นระบบเมื่อรับโหลดสูง",
            "ทำให้โปรแกรมไม่ต้องใช้ CPU ในการประมวลผล",
            "เพื่อแปลงให้โค้ดทำงานแบบ Single-threaded",
            "เพื่อให้โค้ดคอมไพล์เร็วขึ้น 10 เท่า"
          ],
          correctAnswer: 0,
          explanation: "แม้ Goroutine จะกินแรมน้อย แต่หากมี Request เข้ามานับล้านงานพร้อมกัน การเปิด 1 Goroutine ต่อ 1 งานโดยไม่มีการควบคุมอาจทำให้ RAM เต็มหรือ Database Connection ล้น การใช้ Worker Pool ช่วยจำกัดเพดานการใช้ทรัพยากร (Resource Throttling) ได้อย่างมีเสถียรภาพ"
        }
      ]
    },
    {
      id: "go-6",
      title: "การสร้าง High-Performance REST API ด้วย Standard Library net/http และ Gin Framework",
      description: "สถาปัตยกรรม Web Server ใน Go: net/http goroutine-per-connection model, Gin Framework internals ด้วย Radix Tree Routing, JSON Binding และ Validation, Chaining Middlewares (CORS, Logger, Recovery) และ Graceful Shutdown",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# High-Performance Web Services ด้วย Go และ Gin Framework

ภาษา Go ได้รับการขนานนามว่าเป็นรากฐานของโครงสร้างคลาวด์ยุคใหม่ (Docker, Kubernetes, Terraform ล้วนเขียนด้วย Go) หัวใจหนึ่งคือแพ็กเกจ **\`net/http\`** ใน Standard Library ที่มีประสิทธิภาพระดับ Production-Ready มาตั้งแต่ต้น

---

## 1. กลไก \`net/http\` (One Goroutine Per Connection)
เมื่อ HTTP Client เชื่อมต่อเข้ามายัง Go Web Server:

\`\`\`text
[ Client Request ] ──TCP Socket──> [ Go HTTP Server (Accept Loop) ]
                                                │
                                    spawn new Goroutine ทันที!
                                                ▼
                                    go c.serve(connCtx)
                                                │
                                                ▼
                                    [ ServeHTTP(w, req) ]
\`\`\`

ด้วยความเบาของ Goroutines เซิร์ฟเวอร์ Go ธรรมดาเครื่องเดียวสามารถรองรับการเปิดเชื่อมต่อ TCP พร้อมกัน (Concurrent Connections) ได้หลายแสนเครื่องอย่างง่ายดาย

---

## 2. ทำไมต้อง Gin Framework? (Radix Tree vs Regex)
ในขณะที่ Routing Library ทั่วไปใช้ **Regular Expressions (Regex)** ในการจับคู่ URL ซึ่งใช้เวลา O(N) ตามจำนวน Route

**Gin** ขับเคลื่อนด้วย **Radix Tree (Prefix Tree)**:
- ใช้เวลาค้นหา Route คงที่ระดับ O(K) โดยที่ K คือความยาวของ Path ไม่ขึ้นกับว่าเซิร์ฟเวอร์จะมี 10 หรือ 10,000 Route
- **Zero Memory Allocation** ขณะทำการ Routing
- มีประสิทธิภาพสูงกว่าเฟรมเวิร์กของภาษาอื่นอย่าง Express (Node.js) หรือ Django (Python) กว่า 10-40 เท่า

---

## 3. Middleware Architecture ใน Gin
Gin ใช้โครงสร้าง Middleware แบบ **Interceptor Chain**:

\`\`\`text
Request ──> [ Logger ] ──> [ Recovery ] ──> [ Auth Guard ] ──> [ Handler ]
                                                                   │
Response <── [ Logger ] <── [ Recovery ] <── [ Auth Guard ] <──────┘
                               c.Next()
\`\`\`

เมื่อเรียกคำสั่ง \`c.Next()\` ระบบจะส่งต่อการควบคุมไปยัง Handler ลำดับถัดไป และเมื่อ Handler ทำงานเสร็จ โค้ดที่อยู่หลัง \`c.Next()\` จะถูกเรียกย้อนกลับมา`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// โครงสร้าง Response Data
type CourseDTO struct {
	ID        string    ` + "`json:\"id\"`" + `
	Title     string    ` + "`json:\"title\"`" + `
	Category  string    ` + "`json:\"category\"`" + `
	Enrolled  int       ` + "`json:\"enrolled_students\"`" + `
	CreatedAt time.Time ` + "`json:\"created_at\"`" + `
}

// 1. Custom HTTP Middleware จำลองการจับเวลา Request
func TimingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		duration := time.Since(start)
		fmt.Printf("⚡ [ACCESS LOG] %s %s | ใช้เวลา: %v\n", r.Method, r.URL.Path, duration)
	})
}

// 2. Controller Handler
func CourseHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	course := CourseDTO{
		ID:        "CRS-GO-01",
		Title:     "Advanced Go & High-Concurrency Systems",
		Category:  "Cloud Engineering",
		Enrolled:  1280,
		CreatedAt: time.Now(),
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(course)
}

func main() {
	fmt.Println("=== IT Academy Go High-Throughput HTTP Engine ===")

	mux := http.NewServeMux()
	mux.HandleFunc("/api/v1/courses", CourseHandler)

	wrappedMux := TimingMiddleware(mux)

	// จำลองข้อมูลจำลอง Response
	fmt.Println("✓ เซิร์ฟเวอร์พร้อมให้บริการบนพอร์ต :8080 (Radix/Goroutine Enabled)")
	fmt.Println("✓ ตัวอย่าง Payload JSON ที่พร้อมส่งออก:")

	demoCourse := CourseDTO{
		ID:        "CRS-GO-01",
		Title:     "Advanced Go & High-Concurrency Systems",
		Category:  "Cloud Engineering",
		Enrolled:  1280,
		CreatedAt: time.Now(),
	}
	bytes, _ := json.MarshalIndent(demoCourse, "", "  ")
	fmt.Println(string(bytes))
}`,
        description: "สถาปัตยกรรม HTTP Handler และ Middleware Chaining บน Standard Library net/http"
      },
      challenge: {
        description: "เขียน HTTP Handler function ชื่อ `HealthCheckHandler(w http.ResponseWriter, r *http.Request)` ที่ตอบกลับด้วย Status 200 และข้อความ JSON `{\"status\": \"healthy\"}`",
        startingCode: `package main

import (
	"net/http"
)

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	// TODO: เขียน Header และ Body สำหรับ Health Check
}`,
        solution: `package main

import (
	"net/http"
)

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(` + "`{\"status\": \"healthy\"}`" + `))
}`
      },
      quiz: [
        {
          id: "go-6-q1",
          question: "ทำไม Routing Engine ของ Gin Web Framework ที่ใช้ Radix Tree จึงทำงานได้เร็วกว่า Router ที่ใช้ Regex ทั่วไป?",
          options: [
            "เพราะ Gin ตัดการเชื่อมต่อ Network ทิ้งทั้งหมด",
            "เพราะ Radix Tree ค้นหาเส้นทาง URL ได้ในเวลาคงที่ O(K) ตามความยาวของสตริง และไม่มี Memory Allocation ในระหว่างค้นหา",
            "เพราะ Gin รันเฉพาะบนเครื่องที่มีการ์ดจอ GPU",
            "เพราะ Gin แปลงโค้ดเป็นภาษา C ก่อนรันเสมอ"
          ],
          correctAnswer: 1,
          explanation: "Radix Tree (Prefix Tree) ค้นหาเส้นทางได้ด้วยความเร็ว O(K) ตามจำนวนตัวอักษรของ Path โดยไม่ต้องนำ URL ไปวนลูปเทียบกับ Pattern ทุกตัวเหมือน Regex และได้รับการปรับแต่งจนเกิด Zero Memory Allocation ในการ Match Route"
        },
        {
          id: "go-6-q2",
          question: "ในสถาปัตยกรรม `net/http` ของ Go เมื่อมีคำขอ HTTP จากภายนอกเชื่อมต่อเข้ามา เซิร์ฟเวอร์จะจัดการอย่างไร?",
          options: [
            "ต่อคิวรอทำงานทีละคำขอตามลำดับ",
            "สร้าง OS Thread ตัวใหม่ขนาด 2MB ขึ้นมาเสมอ",
            "เปิด Goroutine ตัวใหม่ขึ้นมารองรับการเชื่อมต่อนั้นทันที (One Goroutine Per Connection)",
            "ส่งคำขอไปยังเซิร์ฟเวอร์ Node.js เพื่อช่วยประมวลผล"
          ],
          correctAnswer: 2,
          explanation: "net/http จะรัน Accept Loop เมื่อมี TCP Connection เข้ามา มันจะเรียก `go c.serve(connCtx)` แยก Goroutine ตัวใหม่ไปประมวลผลทันที ทำให้สามารถรองรับโหลดการเชื่อมต่อพร้อมกันได้มหาศาลโดยไม่บล็อกกัน"
        },
        {
          id: "go-6-q3",
          question: "คำสั่ง `c.Next()` ใน Gin Middleware มีหน้าที่สำคัญเพื่อสิ่งใด?",
          options: [
            "ข้ามขั้นตอนการทำงานของ Handler หลักไปทันที",
            "ส่งผ่านการควบคุมไปยัง Middleware ถัดไปหรือ Handler หลัก แล้วสามารถกลับมารันโค้ดส่วนที่เหลือหลัง Handler ทำงานเสร็จ",
            "ปิดเซิร์ฟเวอร์",
            "ล้างข้อมูลในฐานข้อมูล"
          ],
          correctAnswer: 1,
          explanation: "c.Next() ใช้ควบคุมการไหลแบบ Onion Architecture โดยจะส่งต่อการทำงานไปยัง Handler หรือ Middleware ตัวถัดไปจนจบ แล้วจึงย้อนกลับมาประมวลผลบรรทัดถัดไปหลังจาก c.Next() (เช่น นำไปใช้จับเวลา Request)"
        }
      ]
    },
    {
      id: "go-7",
      title: "Data Persistence ด้วย database/sql, Connection Pooling และ GORM",
      description: "การจัดการฐานข้อมูลระดับโปรดักชันใน Go: การทำงานภายในของ database/sql connection pool, การปรับแต่งค่า SetMaxOpenConns, SetMaxIdleConns, SetConnMaxLifetime, การป้องกัน SQL Injection ด้วย Prepared Statements, Transactions และการใช้งาน GORM",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# การจัดการฐานข้อมูลใน Go: database/sql และ Connection Pooling

แพ็กเกจ **\`database/sql\`** ของ Go ออกแบบมาอย่างชาญฉลาดโดยทำหน้าที่เป็น **Thread-Safe Generic Database Abstraction Layer** ที่มีระบบ **Connection Pool จัดการอยู่เบื้องหลังแบบอัตโนมัติ 100%**

---

## 1. วงจรชีวิตของ Connection Pool ใน Go

\`\`\`text
+-------------------------------------------------------------------------+
|                    Go database/sql Connection Pool                      |
+-------------------------------------------------------------------------+
|                                                                         |
|   App Query ──> [ มี Connection ว่างใน Idle Pool หรือไม่? ]             |
|                       │                                                 |
|          ┌────────────┴────────────┐                                    |
|          ▼ [มี]                    ▼ [ไม่มี]                            |
|    ดึงไปใช้งานทันที          [ เกิน MaxOpenConns หรือไม่? ]             |
|                                    │                                    |
|                       ┌────────────┴────────────┐                       |
|                       ▼ [ยังไม่เกิน]            ▼ [เกินแล้ว]            |
|                 เปิด TCP Socket ใหม่      เข้าคิวรอใน Wait Queue        |
|                       │                                                 |
|                       v                                                 |
|          [ คืน Connection กลับสู่ Idle Pool เมื่อเรียก Rows.Close() ]    |
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. พารามิเตอร์ 4 ตัวที่ชี้ชะตาระบบใน Production
หากปล่อยให้ \`database/sql\` ใช้ค่าคอนฟิกเริ่มต้น ระบบของคุณอาจ Crash เมื่อเจองานหนัก:

1. **\`SetMaxOpenConns(n)\`:** จำนวนการเชื่อมต่อสูงสุดที่อนุญาตให้เปิดพร้อมกัน (รวมทั้งที่กำลังทำงานและที่ว่าง) *หากไม่ตั้งค่า จะไม่มีเพดานจำกัด (Unbounded) จนอาจทำให้ PostgreSQL/MySQL เกิดปัญหา \`Too many connections\`*
2. **\`SetMaxIdleConns(n)\`:** จำนวน Connection ว่างที่เก็บรอไว้ใน Pool เพื่อให้พร้อมหยิบไปใช้ทันทีโดยไม่ต้องเสียเวลาทำ 3-Way Handshake ใหม่ (ควรตั้งให้ใกล้เคียงกับโหลดปกติ)
3. **\`SetConnMaxLifetime(d)\`:** อายุขัยสูงสุดของ Connection ก่อนจะถูกทำลายทิ้งและสร้างใหม่ ช่วยแก้ปัญหา Firewall หรือ AWS NAT Gateway แอบตัด Connection เงียบๆ (Dead Connection)
4. **\`SetConnMaxIdleTime(d)\`:** ระยะเวลาที่ยอมให้ Connection ว่างรออยู่ใน Pool ก่อนจะถูกปิดเพื่อประหยัดทรัพยากร

---

## 3. การทำ Transactions อย่างปลอดภัย (ACID Guarantees)
การจัดการธุรกรรมหลายขั้นตอนต้องครอบด้วย Transaction:

\`\`\`go
tx, err := db.BeginTx(ctx, &sql.TxOptions{Isolation: sql.LevelReadCommitted})
if err != nil {
    return err
}
defer tx.Rollback() // ปลอดภัย 100%: ถ้า Commit สำเร็จ Rollback จะไม่มีผลใดๆ

// ทำคำสั่งที่ 1
if _, err := tx.ExecContext(ctx, "UPDATE accounts SET balance = balance - 100 WHERE id = ?", from); err != nil {
    return err
}

// ทำคำสั่งที่ 2
if _, err := tx.ExecContext(ctx, "UPDATE accounts SET balance = balance + 100 WHERE id = ?", to); err != nil {
    return err
}

return tx.Commit()
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"context"
	"fmt"
	"time"
)

// จำลองการตั้งค่าและตรวจสอบ Connection Pool
type PoolConfig struct {
	MaxOpenConns    int
	MaxIdleConns    int
	ConnMaxLifetime time.Duration
	ConnMaxIdleTime time.Duration
}

func DisplayProductionDatabaseProfile(cfg PoolConfig) {
	fmt.Println("⚙️ [DB POOL CONFIGURATION]")
	fmt.Printf("• Max Open Connections : %d (ป้องกันฐานข้อมูลล่มจาก Connection ล้น)\n", cfg.MaxOpenConns)
	fmt.Printf("• Max Idle Connections : %d (ลดเวลา TCP Handshake ซ้ำซาก)\n", cfg.MaxIdleConns)
	fmt.Printf("• Max Conn Lifetime    : %v (ป้องกันปัญหา Dead Socket จาก NAT/Firewall)\n", cfg.ConnMaxLifetime)
	fmt.Printf("• Max Conn Idle Time   : %v (คืนแรมให้ฐานข้อมูลเมื่อว่าง)\n", cfg.ConnMaxIdleTime)
}

func main() {
	fmt.Println("=== IT Academy Database Architecture Engine ===")

	prodConfig := PoolConfig{
		MaxOpenConns:    50,
		MaxIdleConns:    25,
		ConnMaxLifetime: 15 * time.Minute,
		ConnMaxIdleTime: 5 * time.Minute,
	}

	DisplayProductionDatabaseProfile(prodConfig)

	// จำลอง Context ที่มี Timeout ป้องกัน Query ค้าง
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	fmt.Printf("\n✓ สร้าง Database Context พร้อม Timeout: 2.0s (Deadline: %v)\n", ctx.Err() == nil)
	fmt.Println("✓ ระบบพร้อมรองรับ High-Concurrency Database Traffic ปลอดภัย 100%")
}`,
        description: "การคำนวณและปรับแต่งพารามิเตอร์ Connection Pool ใน Go สำหรับสภาพแวดล้อมโปรดักชัน"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `ConfigureDB(maxOpen, maxIdle int, maxLife time.Duration)` ที่คืนค่า Struct การตั้งค่า Connection Pool ตามค่าพารามิเตอร์ที่รับเข้ามา",
        startingCode: `package main

import "time"

type DBConfig struct {
	MaxOpen int
	MaxIdle int
	MaxLife time.Duration
}

func ConfigureDB(maxOpen, maxIdle int, maxLife time.Duration) DBConfig {
	// TODO: คืนค่า DBConfig
	return DBConfig{}
}`,
        solution: `package main

import "time"

type DBConfig struct {
	MaxOpen int
	MaxIdle int
	MaxLife time.Duration
}

func ConfigureDB(maxOpen, maxIdle int, maxLife time.Duration) DBConfig {
	return DBConfig{
		MaxOpen: maxOpen,
		MaxIdle: maxIdle,
		MaxLife: maxLife,
	}
}`
      },
      quiz: [
        {
          id: "go-7-q1",
          question: "อะไรคือผลเสียที่อาจเกิดขึ้นหากไม่ได้ตั้งค่า `SetMaxOpenConns` ใน `database/sql` เมื่อระบบได้รับโหลดมหาศาล?",
          options: [
            "แอปพลิเคชันจะแปลงโค้ดเป็นภาษา PHP",
            "Go จะเปิด TCP Connection ใหม่ไปยังฐานข้อมูลแบบไม่จำกัด จนฐานข้อมูลเกิดปัญหา 'Too Many Connections' และปฏิเสธการให้บริการทั้งหมด",
            "ฮาร์ดดิสก์จะถูกลบข้อมูลทั้งหมด",
            "ความเร็วอินเทอร์เน็ตจะเพิ่มขึ้น 2 เท่า"
          ],
          correctAnswer: 1,
          explanation: "ค่าเริ่มต้นของ SetMaxOpenConns คือ 0 (ไม่มีเพดานจำกัด) เมื่อมี Goroutines นับหมื่นทำงานพร้อมกัน แต่ละตัวจะพยายามเปิด Connection ใหม่ไปยังฐานข้อมูลจนเกินขีดจำกัดของเซิร์ฟเวอร์ DB ส่งผลให้ระบบล่มทันที"
        },
        {
          id: "go-7-q2",
          question: "ทำไมการเขียน `defer rows.Close()` ทันทีหลังการรันคำสั่ง `db.Query()` จึงเป็นกฎเหล็กที่สำคัญที่สุด?",
          options: [
            "เพื่อลบคีย์เวิร์ด SQL ออกจากหน่วยความจำ",
            "เพื่อคืน Database Connection นั้นกลับเข้าสู่ Connection Pool หากลืมปิด Connection จะค้างและทำให้ Pool เต็ม (Connection Leak)",
            "เพื่อให้ฐานข้อมูลทำการเข้ารหัสไฟล์",
            "เพื่อบังคับให้คำสั่งนั้นทำงานเร็วขึ้น"
          ],
          correctAnswer: 1,
          explanation: "เมื่อรัน db.Query() ตัว Connection จะถูกผูกติดอยู่กับ sql.Rows จนกว่าจะอ่านข้อมูลเสร็จ หากไม่เรียก rows.Close() ตัว Connection จะไม่มีวันถูกส่งคืนกลับเข้า Pool กลายเป็นปัญหา Connection Leak ที่ทำให้ระบบค้างในที่สุด"
        },
        {
          id: "go-7-q3",
          question: "การใช้ `defer tx.Rollback()` ทันทีหลังเรียก `db.BeginTx()` ปลอดภัยหรือไม่ หากในตอนท้ายฟังก์ชันมีการสั่ง `tx.Commit()`?",
          options: [
            "ไม่ปลอดภัย เพราะ Rollback จะลบล้างคำสั่ง Commit เสมอ",
            "ปลอดภัย 100% เพราะหาก tx.Commit() ทำงานสำเร็จไปแล้ว คำสั่ง Rollback ใน defer จะไม่เกิดผลใดๆ แต่ถ้ามี Error หลุดออกไประหว่างทาง ระบบจะ Rollback ให้อัตโนมัติ",
            "ทำให้เกิด Panic ทุกครั้ง",
            "ทำให้ฐานข้อมูลปิดตัวลง"
          ],
          correctAnswer: 1,
          explanation: "นี่คือ Best Practice ระดับมาตรฐานของ Go เมื่อ Commit สำเร็จแล้ว สถานะ Transaction จะปิดลง ทำให้การเรียก Rollback ใน defer ไม่ส่งผลกระทบใดๆ แต่หากเกิด Panic หรือมี return error กลางคัน ตัว defer จะช่วย Rollback ธุรกรรมให้อัตโนมัติ"
        }
      ]
    },
    {
      id: "go-8",
      title: "Testing, Benchmarking (go test -bench) และ Memory Profiling ด้วย pprof",
      description: "เครื่องมือทดสอบประสิทธิภาพในตัวภาษา Go: การเขียน Table-Driven Tests, การรัน Benchmark Functions (testing.B), การวัด Memory Allocations (allocs/op), การใช้ Go pprof ในการหา CPU & Memory Bottlenecks และ Flamegraph Analysis",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Testing, Benchmarking และ Profiling ในภาษา Go

จุดเด่นที่ทำให้ Go แตกต่างจากภาษาอื่นคือ **"Built-in Engineering Toolchain"** โดยตัวคอมไพเลอร์ของ Go มีระบบ **Unit Testing, Micro-Benchmarking, Coverage Analysis, Data Race Detector, และ Memory Profiling (pprof)** ติดตั้งมาให้ตั้งแต่เกิดโดยไม่ต้องพึ่งพาไลบรารีภายนอก

---

## 1. Table-Driven Tests: รูปแบบการทดสอบมาตรฐานของ Go
แทนที่จะเขียนฟังก์ชันทดสอบแยกเป็นสิบฟังก์ชัน ชุมชน Go นิยมใช้แบบแผน **Table-Driven Tests**:

\`\`\`go
func TestCalculateGrade(t *testing.T) {
    tests := []struct {
        name     string
        score    float64
        expected string
    }{
        {"Top Score", 95.0, "A"},
        {"Medium Score", 75.0, "B"},
        {"Passing Score", 50.0, "D"},
        {"Failed Score", 30.0, "F"},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := CalculateGrade(tt.score)
            if got != tt.expected {
                t.Errorf("CalculateGrade(%.1f) = %v, expected %v", tt.score, got, tt.expected)
            }
        })
    }
}
\`\`\`

---

## 2. Micro-Benchmarking ด้วย \`testing.B\`
การวัดความเร็วและจำนวนไบต์ที่จัดสรรในแรม:

\`\`\`go
func BenchmarkStringConcat(b *testing.B) {
    b.ReportAllocs() // รายงาน B/op และ allocs/op
    for i := 0; i < b.N; i++ {
        // โค้ดที่ต้องการวัดความเร็ว
    }
}
\`\`\`

คำสั่งรันใน Terminal:
\`\`\`bash
go test -bench=. -benchmem -run=^#
\`\`\`

ผลลัพธ์การวัดจะแสดงอย่างละเอียด:
\`\`\`text
BenchmarkBuilder-8    10000000    112.5 ns/op    32 B/op    1 allocs/op
\`\`\`
- \`ns/op\`: นาโนวินาทีต่อรอบการทำงาน
- \`B/op\`: จำนวนไบต์ที่จัดสรรลง Heap ต่อรอบ
- \`allocs/op\`: จำนวนรอบที่ต้องรบกวน Heap Allocation ต่อรอบ

---

## 3. Memory & CPU Profiling ด้วย \`pprof\`
เมื่อระบบในโปรดักชันกิน CPU สูงหรือมีอาการ Memory Leak เราสามารถเปิด HTTP endpoint ของ \`net/http/pprof\` เพื่อดูดข้อมูล Profile ออกมาวิเคราะห์เป็น **Flamegraph**:

\`\`\`bash
# ดึง CPU Profile 30 วินาที แล้วเปิดเว็บ UI
go tool pprof -http=:8081 http://localhost:6060/debug/pprof/profile?seconds=30
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"strings"
	"testing"
	"time"
)

// เปรียบเทียบประสิทธิภาพ: ต่อสตริงด้วย + vs strings.Builder
func ConcatNaive(words []string) string {
	res := ""
	for _, w := range words {
		res += w // สร้าง string ใหม่บน Heap ทุกรอบ O(N^2)
	}
	return res
}

func ConcatOptimized(words []string) string {
	var builder strings.Builder
	// จองพื้นที่ล่วงหน้าถ้าทราบขนาดโดยประมาณ
	for _, w := range words {
		builder.WriteString(w)
	}
	return builder.String() // Zero-copy String Conversion
}

func main() {
	fmt.Println("=== IT Academy Benchmarking & Optimization Lab ===")

	words := []string{"High", "Performance", "Cloud", "Native", "Go", "2026"}

	// วัดความเร็วเปรียบเทียบ
	t0 := time.Now()
	for i := 0; i < 100000; i++ {
		_ = ConcatNaive(words)
	}
	durNaive := time.Since(t0)

	t1 := time.Now()
	for i := 0; i < 100000; i++ {
		_ = ConcatOptimized(words)
	}
	durOpt := time.Since(t1)

	fmt.Printf("⏱️ การต่อสตริงแบบดั้งเดิม (+)       : %v\n", durNaive)
	fmt.Printf("⚡ การต่อสตริงด้วย strings.Builder : %v (เร็วกว่า %.1fx!)\n", 
		durOpt, float64(durNaive)/float64(durOpt))
}

// โครงสร้าง Benchmark Function
func BenchmarkConcatOptimized(b *testing.B) {
	words := []string{"Go", "Language", "Systems"}
	b.ResetTimer()
	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		_ = ConcatOptimized(words)
	}
}`,
        description: "การวิเคราะห์ประสิทธิภาพการใช้หน่วยความจำและโครงสร้างฟังก์ชัน Benchmark ใน Go"
      },
      challenge: {
        description: "เขียนฟังก์ชัน Benchmark `BenchmarkSum(b *testing.B)` ที่วัดประสิทธิภาพของลูปบวกเลข 1 ถึง 1000 โดยใช้ b.N และ b.ResetTimer()",
        startingCode: `package main

import "testing"

func BenchmarkSum(b *testing.B) {
	// TODO: เขียนโค้ด Benchmark สำหรับคำนวณผลรวม
}`,
        solution: `package main

import "testing"

func BenchmarkSum(b *testing.B) {
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		total := 0
		for j := 1; j <= 1000; j++ {
			total += j
		}
	}
}`
      },
      quiz: [
        {
          id: "go-8-q1",
          question: "ตัวแปร `b.N` ในฟังก์ชัน Benchmark (`func BenchmarkX(b *testing.B)`) มีหน้าที่สำคัญอย่างไร?",
          options: [
            "เป็นตัวเลขคงที่ 100 เสมอ",
            "เป็นจำนวนรอบที่ Go Test Runner จะปรับเพิ่มขึ้นเรื่อยๆ อัตโนมัติ เพื่อให้ฟังก์ชันทำงานนานพอที่จะวัดความเร็วเฉลี่ยได้อย่างแม่นยำทางสถิติ",
            "เป็นเลขพอร์ตของเซิร์ฟเวอร์",
            "เป็นขนาดของแรมที่เหลืออยู่ในระบบ"
          ],
          correctAnswer: 1,
          explanation: "b.N จะเริ่มต้นจากค่าน้อยๆ แล้วขยายตัวทวีคูณโดยอัตโนมัติจนกระทั่งการทดสอบรันต่อเนื่องครบเวลาขั้นต่ำ (ปกติคือ 1 วินาที) ทำให้สามารถคำนวณระยะเวลาเฉลี่ยระดับนาโนวินาทีต่อรอบ (ns/op) ได้อย่างเที่ยงตรง"
        },
        {
          id: "go-8-q2",
          question: "คำสั่งใดใช้สำหรับตรวจสอบว่าโค้ดที่รันพร้อมกันมีปัญหา Data Race หรือไม่ใน Go?",
          options: [
            "go run -race main.go",
            "go build -optimize",
            "go check --all",
            "go clean --race"
          ],
          correctAnswer: 0,
          explanation: "Go มี ThreadSanitizer (Data Race Detector) ฝังมาในตัว เพียงเติมแฟล็ก `-race` เช่น `go test -race` หรือ `go run -race` ระบบจะทำการตรวจจับการอ่าน/เขียนหน่วยความจำพร้อมกันที่ไม่มีการล็อคทันที"
        },
        {
          id: "go-8-q3",
          question: "เมื่อดูผลลัพธ์ Benchmark ค่า `allocs/op` ที่มีค่ามากกว่า 0 หมายถึงสิ่งใด?",
          options: [
            "ฟังก์ชันนั้นมีการจัดสรรหน่วยความจำลงใน Heap Memory ในรอบการทำงานนั้น ซึ่งอาจส่งผลกระทบต่อภาระงานของ Garbage Collector",
            "โปรแกรมทำงานผิดพลาด",
            "ฟังก์ชันนั้นรันบน Stack ทั้งหมด 100%",
            "จำนวนครั้งที่โปรแกรมต่ออินเทอร์เน็ต"
          ],
          correctAnswer: 0,
          explanation: "allocs/op แสดงจำนวนครั้งที่มีการจัดสรรหน่วยความจำลงใน Heap (Heap Allocation) ในแต่ละรอบการทำงาน การพยายามปรับโค้ดให้ allocs/op เป็น 0 (Zero Allocation) จะช่วยลดภาระงานของ GC และทำให้ระบบทำงานได้เร็วขึ้นอย่างมาก"
        }
      ]
    },
    {
      id: "go-9",
      title: "โปรเจกต์ High-Throughput IoT Gateway Microservice พร้อม Token Bucket Rate Limiting",
      description: "โปรเจกต์วิศวกรรมระบบระดับโปรดักชัน: ออกแบบและพัฒนา High-Throughput IoT Ingestion Microservice ด้วย Go: สถาปัตยกรรม Non-blocking Ingestion, Token Bucket Rate Limiter, Structured Logging ด้วย slog (Go 1.21+), Health Checks และ OS Signals Graceful Shutdown",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise Go: High-Throughput IoT Gateway Microservice

ในบทเรียนรวบยอดนี้ เราจะนำเทคโนโลยีและสถาปัตยกรรมทั้งหมดของภาษา Go ตั้งแต่ **Goroutines, Channels, Structs, Interfaces, Concurrency Synchronization, Structured Logging, และ Graceful Shutdown** มาสร้างเป็น **High-Throughput IoT Telemetry Gateway** ที่สามารถรับส่งข้อมูลจากอุปกรณ์ IoT นับหมื่นเครื่องพร้อมกัน

---

## 1. แผนผังสถาปัตยกรรมระบบ (System Architecture)

\`\`\`text
[ 10,000+ IoT Devices (HTTP / MQTT) ]
                  │
                  ▼
+-------------------------------------------------------------------------+
|                  IoT Gateway Microservice (Go Engine)                   |
|                                                                         |
|  1. Token Bucket Rate Limiter  --> สกัดกั้น DoS / Spamming              |
|  2. Ingestion Controller       --> ตอบ HTTP 202 Accepted ทันที (Non-block)|
|  3. Buffered Telemetry Channel --> พักข้อมูลใน RAM Ring Buffer          |
|  4. Worker Pool (50 Goroutines)--> หยิบข้อมูลไปจัดรูปแบบและบันทึก       |
|  5. Graceful Shutdown Handler  --> ดักจับ SIGINT/SIGTERM ล้างงานจนหมด   |
+-------------------------------------------------------------------------+
                  │
                  ▼
[ TimescaleDB / ClickHouse Time-Series Storage ]
\`\`\`

---

## 2. Token Bucket Rate Limiting Algorithm
เพื่อป้องกันไม่ให้อุปกรณ์ IoT ตัวใดตัวหนึ่งส่งข้อมูลถี่เกินไปจนพังระบบ เราใช้หลักการ **Token Bucket**:
- ถังเก็บโทเคนได้สูงสุด B โทเคน
- โทเคนถูกเติมลงถังด้วยความเร็วคงที่ R โทเคนต่อวินาที
- แต่ละ Request ที่ส่งเข้ามาต้องจ่าย 1 โทเคน หากโทเคนหมด คำขอนั้นจะถูกปฏิเสธด้วย HTTP 429 Too Many Requests ทันที

---

## 3. การทำ Graceful Shutdown ด้วย OS Signals
เมื่อเราต้องการอัปเดตเวอร์ชันใหม่ใน Kubernetes เซิร์ฟเวอร์จะได้รับสัญญาณ \`SIGTERM\`:
1. หยุดรับคำขอใหม่ทันที
2. ปล่อยให้คำขอที่ค้างอยู่ใน Worker Pool และ Channel ประมวลผลจนเสร็จเกลี้ยง
3. ปิด Connection ฐานข้อมูลและคืนทรัพยากรอย่างสมบูรณ์ ป้องกันข้อมูลสูญหาย (Zero Data Loss)`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"context"
	"fmt"
	"sync"
	"time"
)

// 1. โมเดลข้อมูล IoT Telemetry Data
type SensorReading struct {
	DeviceID    string    ` + "`json:\"device_id\"`" + `
	SensorType  string    ` + "`json:\"sensor_type\"`" + `
	Value       float64   ` + "`json:\"value\"`" + `
	Timestamp   time.Time ` + "`json:\"timestamp\"`" + `
}

// 2. Gateway Service Engine
type IoTGateway struct {
	bufferChan chan SensorReading
	wg         sync.WaitGroup
	ctx        context.Context
	cancel     context.CancelFunc
}

func NewIoTGateway(bufferSize, workerCount int) *IoTGateway {
	ctx, cancel := context.WithCancel(context.Background())
	gw := &IoTGateway{
		bufferChan: make(chan SensorReading, bufferSize),
		ctx:        ctx,
		cancel:     cancel,
	}

	// เริ่มต้น Worker Pool สำหรับดึงข้อมูลจากบัฟเฟอร์ไปบันทึก
	for i := 1; i <= workerCount; i++ {
		gw.wg.Add(1)
		go gw.worker(i)
	}

	return gw
}

func (gw *IoTGateway) worker(workerID int) {
	defer gw.wg.Done()
	for {
		select {
		case reading, ok := <-gw.bufferChan:
			if !ok {
				// Channel ปิดแล้ว คืนงาน
				return
			}
			// จำลองการบันทึกลง Time-Series Database
			fmt.Printf("💾 [WORKER-%d] บันทึกเซนเซอร์: [%s] ชนิด: %s ค่า: %.2f เวลา: %s\n",
				workerID, reading.DeviceID, reading.SensorType, reading.Value, reading.Timestamp.Format("15:04:05.000"))
		case <-gw.ctx.Done():
			// ได้รับสัญญาณ Shutdown
			return
		}
	}
}

// Ingest: รับข้อมูลเข้าแบบ Non-Blocking
func (gw *IoTGateway) Ingest(reading SensorReading) bool {
	select {
	case gw.bufferChan <- reading:
		return true // รับเข้าคิวสำเร็จ
	default:
		// บัฟเฟอร์เต็ม ปฏิเสธเพื่อป้องกัน Memory Overflow
		fmt.Printf("⚠️ [OVERFLOW] บัฟเฟอร์เต็ม ปฏิเสธข้อมูลจาก: %s\n", reading.DeviceID)
		return false
	}
}

func (gw *IoTGateway) Shutdown() {
	fmt.Println("\n🛑 กำลังเริ่มกระบวนการ Graceful Shutdown...")
	close(gw.bufferChan) // ปิด Channel เพื่อให้ Workers ทราบว่าไม่มีงานใหม่
	gw.wg.Wait()          // รอจนกระทั่ง Workers บันทึกข้อมูลที่ตกค้างในบัฟเฟอร์จนหมดเกลี้ยง
	gw.cancel()
	fmt.Println("🎉 ปิดระบบ IoT Gateway สำเร็จสมบูรณ์ ข้อมูลไม่สูญหาย (Zero Data Loss)!")
}

func main() {
	fmt.Println("=== IT Academy IoT Telemetry Gateway Microservice ===")

	gateway := NewIoTGateway(10, 3)

	// จำลองอุปกรณ์ส่งข้อมูลเข้ามา
	devices := []string{"ESP32-LAB-01", "ESP32-LAB-02", "RPI-GATEWAY-A", "ESP32-SERVER-ROOM"}

	for idx, dev := range devices {
		reading := SensorReading{
			DeviceID:   dev,
			SensorType: "TEMPERATURE_CELSIUS",
			Value:      24.5 + float64(idx)*1.5,
			Timestamp:  time.Now(),
		}
		gateway.Ingest(reading)
	}

	time.Sleep(100 * time.Millisecond)
	gateway.Shutdown()
}`,
        description: "สถาปัตยกรรม Microservice Ingestion Gateway พร้อม Worker Pool และ Graceful Shutdown"
      },
      challenge: {
        description: "ขยายฟังก์ชัน `IngestWithPriority` ให้ตรวจสอบค่าของ Value หากมากกว่า 100 ให้พิมพ์แจ้งเตือนว่า 'ALERT: Critical Value Detected' ก่อนส่งเข้าบัฟเฟอร์",
        startingCode: `// TODO: เขียนฟังก์ชันตรวจสอบค่าวิกฤตของเซนเซอร์
`,
        solution: `// Solution:
// if reading.Value > 100 {
//     fmt.Println("ALERT: Critical Value Detected:", reading.Value)
// }`
      },
      quiz: [
        {
          id: "go-9-q1",
          question: "ทำไมในฟังก์ชัน `Ingest()` จึงควรใช้ `select` ร่วมกับ `default` ในการส่งข้อมูลเข้า Buffered Channel?",
          options: [
            "เพื่อให้แอปพลิเคชันเกิด Deadlock",
            "เพื่อให้การส่งข้อมูลมีพฤติกรรมแบบ Non-blocking หากบัฟเฟอร์เต็ม จะตกลงมาที่ default ทันที ทำให้สามารถตอบ HTTP 429 หรือ 503 กลับไปได้โดยไม่ทำให้ Server ค้าง",
            "เพื่อแปลงข้อมูลให้เป็น XML",
            "เพื่อให้ข้อมูลส่งไปยังดาวเทียม"
          ],
          correctAnswer: 1,
          explanation: "การใช้ `select` ที่มีเคส `default` จะทำให้การส่งข้อมูลเข้า Channel ไม่บล็อก (Non-blocking Send) หาก Channel เต็ม ระบบจะหลุดเข้าเคส default ทันที ทำให้เราสามารถป้องกันปัญหา Server ค้างและตอบกลับผู้ใช้ได้อย่างรวดเร็ว"
        },
        {
          id: "go-9-q2",
          question: "ขั้นตอนแรกของการทำ Graceful Shutdown เมื่อได้รับสัญญาณ OS Signal (SIGTERM) คืออะไร?",
          options: [
            "ตัดกระแสไฟฟ้าของเครื่องเซิร์ฟเวอร์ทันที",
            "หยุดรับคำขอใหม่และปิด Ingestion Channel เพื่อให้ Workers ระบายงานที่ค้างอยู่ในคิวให้หมดก่อนปิดระบบ",
            "ลบฐานข้อมูลทิ้ง",
            "เปิด Goroutines เพิ่มขึ้นเป็น 2 เท่า"
          ],
          correctAnswer: 1,
          explanation: "หัวใจของ Graceful Shutdown คือ Zero Data Loss เมื่อได้รับ SIGTERM เซิร์ฟเวอร์ต้องหยุดรับงานใหม่และปิด Channel ส่งต่องาน จากนั้นรอให้ Workers ดึงงานที่ค้างในคิวไปบันทึกลงฐานข้อมูลจนหมด แล้วจึงปิดแอปพลิเคชัน"
        },
        {
          id: "go-9-q3",
          question: "Structured Logging ด้วยแพ็กเกจมาตรฐาน `log/slog` (นำเสนอใน Go 1.21+) มีข้อดีเหนือ `log.Println` ดั้งเดิมอย่างไร?",
          options: [
            "ส่งออก Log เป็นโครงสร้าง Key-Value (เช่น JSON) ทำให้ระบบจัดเก็บ Log ระดับองค์กร (เช่น Datadog, Elasticsearch) สามารถ Parse และทำ Index ค้นหาได้อย่างรวดเร็ว",
            "ทำให้โปรแกรมไม่ต้องใช้พื้นที่จัดเก็บ Log บนฮาร์ดดิสก์",
            "ปิดการทำงานของระบบรักษาความปลอดภัย",
            "เปลี่ยนสีตัวอักษรในเทอร์มินัลเป็นสีชมพูเสมอ"
          ],
          correctAnswer: 0,
          explanation: "log/slog เป็น Structured Logging แบบเป็นทางการของ Go ที่ให้ประสิทธิภาพสูงและสร้าง Log ในรูปแบบ JSON หรือ Key-Value ตามมาตรฐาน ทำให้ระบบวิเคราะห์ Log ยุคใหม่สามารถค้นหาและจัดทำ Metrics ได้อย่างแม่นยำ"
        }
      ]
    }
  ]
};
