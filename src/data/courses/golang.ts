import { Course } from "../types";

export const golangCourse: Course = {
  id: "go",
  title: "Go (Golang) Microservices & Concurrent Systems",
  description: "เรียนรู้ภาษา Go (Golang) ตั้งแต่พื้นฐานไวยากรณ์, Pointers, Structs, Interfaces, Concurrency ด้วย Goroutines และ Channels จนถึงการสร้าง Microservices ความเร็วสูงด้วย Gin",
  longDescription: "หลักสูตรภาษา Go เชิงวิศวกรรมระบบ (Go Systems & Cloud Engineering) ออกแบบมาเพื่อสร้างนักพัฒนา Backend และ Cloud-Native ชั้นนำ ครอบคลุมตั้งแต่ปรัชญาความเรียบง่ายของ Go, โครงสร้างหน่วยความจำและ Pointers, การจัดการข้อผิดพลาดตามแนวคิด Explicit Error Handling, สถาปัตยกรรม Interfaces และ Composition, การประมวลผลพร้อมกันระดับล้านงานด้วย Goroutines และ Channels (CSP Concurrency Model), การจัดการ Context และ Worker Pools, การสร้าง High-Throughput REST APIs ด้วย Gin และ net/http, จนถึงการทดสอบ Benchmark และ Profiling หน่วยความจำด้วย pprof",
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
      title: "ปรัชญาการออกแบบภาษา Go: Static Typing, Pointers, Structs และ Memory Layout",
      description: "ทำความเข้าใจปรัชญาของ Go (Less is More), ชนิดข้อมูลพื้นฐาน, การส่งค่าแบบ Pass by Value vs Pointer, การสร้าง Structs และ Memory Allocation",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# ปรัชญาการออกแบบภาษา Go และโครงสร้างหน่วยความจำ

ภาษา **Go (Golang)** ถูกสร้างขึ้นโดยทีมวิศวกรของ Google (Robert Griesemer, Rob Pike, Ken Thompson) เพื่อแก้ปัญหาความซับซ้อนและเวลาคอมไพล์ที่เชื่องช้าของ C++ และ Java โดยมีจุดเด่นคือ **ความเรียบง่าย (Simplicity)**, **คอมไพล์เป็น Single Static Binary**, และ **รองรับ Concurrency ในระดับแกนกลาง**

---

## 1. ปรัชญา "Less is More" ของ Go

- ไม่มี Class ไม่มี Inheritance (ใช้ Composition แทน)
- ไม่มี Exception Handling (ใช้ Explicit Error Return แทน)
- ไม่มี Generic ซับซ้อนเกินจำเป็น
- บังคับฟอร์แมตโค้ดเป็นมาตรฐานเดียวกันทั่วโลกด้วย \`gofmt\`

---

## 2. Pointers ใน Go: ปลอดภัยและไม่ซับซ้อน

Pointer ใน Go ใช้เพื่อหลีกเลี่ยงการคัดลอกข้อมูลขนาดใหญ่ (Zero-Copy) โดย **ไม่มี Pointer Arithmetic** เหมือน C/C++ ทำให้ปลอดภัยจากการรั่วไหลของหน่วยความจำ:

\`\`\`go
func updateGpa(student *Student, newGpa float64) {
    student.Gpa = newGpa // Go มีระบบ Auto-dereference ไม่ต้องเขียน (*student).Gpa
}
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
)

// โครงสร้างข้อมูล Struct สำหรับนักศึกษา
type Student struct {
	ID         string
	FullName   string
	Department string
	GPA        float64
}

// Method ผูกติดกับ Struct (Value Receiver vs Pointer Receiver)
func (s *Student) UpdateGPA(newScore float64) {
	if newScore >= 0.0 && newScore <= 4.0 {
		s.GPA = newScore
	}
}

func (s Student) GetStatus() string {
	if s.GPA >= 3.50 {
		return "เกียรตินิยม"
	}
	return "ปกติ"
}

func main() {
	fmt.Println("=== ระบบทะเบียนนักศึกษา IT Academy (Go 1.22 Runtime) ===")

	student := Student{
		ID:         "STD-670101",
		FullName:   "สมชาย ใจดี",
		Department: "Information Technology",
		GPA:        3.45,
	}

	fmt.Printf("ก่อนอัปเดต: %s (GPA: %.2f) สถานะ: %s\n", student.FullName, student.GPA, student.GetStatus())

	// อัปเดตผ่าน Pointer Receiver
	student.UpdateGPA(3.85)

	fmt.Printf("หลังอัปเดต: %s (GPA: %.2f) สถานะ: %s\n", student.FullName, student.GPA, student.GetStatus())
}`,
        description: "การประกาศ Struct และ Method Receiver ในภาษา Go"
      },
      quiz: [
        {
          id: "go-q1",
          question: "อะไรคือความแตกต่างหลักของ Pointer ในภาษา Go เมื่อเทียบกับภาษา C/C++?",
          options: ["Go ไม่มี Pointer", "Go ไม่อนุญาตให้ทำ Pointer Arithmetic เพื่อความปลอดภัย", "Pointer ใน Go ใช้แรมมากกว่า 3 เท่า", "Pointer ใน Go ใช้ได้กับตัวเลขเท่านั้น"],
          correctAnswer: 1,
          explanation: "Go ตัดคุณสมบัติ Pointer Arithmetic ออก เพื่อป้องกันปัญหา Memory Corruption และ Buffer Overflow"
        }
      ]
    },
    {
      id: "go-2",
      title: "การจัดการข้อผิดพลาดตามแบบฉบับ Go: Explicit Error Handling, Panic และ Recover",
      description: "เข้าใจแนวคิด Errors as Values, รูปแบบ if err != nil, Custom Errors, การห่อข้อผิดพลาดด้วย fmt.Errorf(%w), และการใช้งาน panic/recover เมื่อระบบวิกฤต",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# การจัดการข้อผิดพลาด (Error Handling) ตามแบบฉบับ Go

ในภาษา Go **ข้อผิดพลาดไม่ได้เป็น Exception ที่กระโดดข้ามขั้นตอน** แต่เป็นเพียง **ค่าตัวแปรปกติ (Errors are Values)** ที่ฟังก์ชันจะส่งคืนคู่กับผลลัพธ์ผ่าน Multiple Return Values

---

## 1. รูปแบบมาตรฐาน \`if err != nil\`

\`\`\`go
data, err := readFile("config.json")
if err != nil {
    // จัดการข้อผิดพลาดทันทีตรงจุดที่เกิดเหตุ
    log.Printf("ไม่สามารถอ่านไฟล์ได้: %v", err)
    return err
}
// ทำงานต่อไปได้อย่างมั่นใจว่า data มีค่าแน่นอน
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"errors"
	"fmt"
)

var ErrInsufficientFunds = errors.New("ยอดเงินในบัญชีไม่เพียงพอสำหรับการทำรายการ")
var ErrInvalidAmount = errors.New("จำนวนเงินที่ต้องการโอนต้องมากกว่า 0 บาท")

type BankAccount struct {
	AccountNo string
	Balance   float64
}

func (b *BankAccount) Withdraw(amount float64) (float64, error) {
	if amount <= 0 {
		return b.Balance, ErrInvalidAmount
	}
	if amount > b.Balance {
		return b.Balance, fmt.Errorf("%w (ยอดเงินคงเหลือ: %.2f, ร้องขอ: %.2f)", ErrInsufficientFunds, b.Balance, amount)
	}

	b.Balance -= amount
	return b.Balance, nil
}

func main() {
	account := BankAccount{AccountNo: "ACC-1002", Balance: 500.00}

	// ทดสอบกรณีปกติ
	if newBal, err := account.Withdraw(200); err != nil {
		fmt.Printf("❌ เกิดข้อผิดพลาด: %v\n", err)
	} else {
		fmt.Printf("✓ ถอนเงิน 200 สำเร็จ คงเหลือ: %.2f THB\n", newBal)
	}

	// ทดสอบกรณีเงินไม่พอ
	if _, err := account.Withdraw(800); err != nil {
		fmt.Printf("❌ เกิดข้อผิดพลาด: %v\n", err)
	}
}`,
        description: "การจัดการ Explicit Error และการสร้าง Custom Wrapped Errors ใน Go"
      }
    },
    {
      id: "go-3",
      title: "Interfaces และ Composition: สถาปัตยกรรม Decoupled โดยไม่ต้องมี Inheritance",
      description: "การทำ Implicit Interface Implementation (Duck Typing), Interface Segregation, การทำ Mocking ในการทดสอบ, และการรวม Struct ด้วย Composition",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Interfaces และ Composition ในภาษา Go

ใน Go การที่ Struct จะ Implement Interface ใดๆ **ไม่จำเป็นต้องเขียนคีย์เวิร์ด implements** เพียงแค่ Struct นั้นมี Method ครบตามที่ Interface กำหนดไว้ Go Compiler จะถือว่า Struct นั้น Implement Interface นั้นโดยอัตโนมัติ (Duck Typing: "If it walks like a duck and quacks like a duck, it's a duck")

---

## 1. จุดเด่นของ Implicit Interfaces

- **Decoupling:** ผู้สร้าง Type ไม่จำเป็นต้องรู้ว่ามีใครนำ Type ของตนไปใช้ใน Interface ใดบ้าง
- **Easy Mocking:** สามารถสร้าง Mock Type สำหรับการทำ Unit Test ได้ทันทีโดยไม่ต้องแก้ไขโค้ดหลัก`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
)

// 1. กำหนด Interface
type Notifier interface {
	Send(recipient string, message string) error
}

// 2. Email Service
type EmailService struct {
	SMTPServer string
}

func (e EmailService) Send(recipient string, message string) error {
	fmt.Printf("📧 [EMAIL -> %s via %s]: %s\n", recipient, e.SMTPServer, message)
	return nil
}

// 3. Line Notify Service
type LineService struct {
	Token string
}

func (l LineService) Send(recipient string, message string) error {
	fmt.Printf("💬 [LINE -> %s]: %s\n", recipient, message)
	return nil
}

// ฟังก์ชันทางธุรกิจที่พึ่งพา Interface Notifier
func NotifyStudent(n Notifier, studentName string, info string) {
	n.Send(studentName, info)
}

func main() {
	email := EmailService{SMTPServer: "smtp.itacademy.ac.th"}
	line := LineService{Token: "line_sec_token_99"}

	NotifyStudent(email, "somchai@itacademy.ac.th", "คุณผ่านการคัดเลือกเข้าศึกษาต่อ")
	NotifyStudent(line, "Thanakorn.Dev", "ห้องแล็บ Network เปิดให้บริการแล้ว")
}`,
        description: "การใช้งาน Implicit Interface เพื่อทำ Polymorphism ใน Go"
      }
    },
    {
      id: "go-4",
      title: "Goroutines และ Concurrency Model: M:N Runtime Scheduler และ Lightweight Threads",
      description: "เจาะลึก Go Runtime Concurrency: ทำไม Goroutines ถึงใช้แรมเพียง 2KB, M:N Scheduler (G, M, P Model), คีย์เวิร์ด go, และ sync.WaitGroup",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Goroutines และ Go Runtime M:N Scheduler

ในขณะที่ OS Thread ของ Linux/Windows ต้องใช้หน่วยความจำ Stack อย่างน้อย **1MB - 2MB** แต่ **Goroutine** ของ Go ใช้พื้นที่เริ่มต้นเพียง **2KB (Kilobytes)** เท่านั้น! ทำให้คอมพิวเตอร์ทั่วไปสามารถเปิด Goroutine ได้พร้อมกันนับแสนหรือนับล้านตัว

---

## 1. สถาปัตยกรรม G-M-P Scheduler

- **G (Goroutine):** เธรดจำลองระดับผู้ใช้ (Lightweight Thread)
- **M (Machine):** OS Thread จริงที่รันอยู่บนแกนประมวลผลของ CPU
- **P (Processor):** สิทธิ์ในการประมวลผล (Logical Context) ซึ่งปกติจะเท่ากับจำนวน CPU Cores`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"sync"
	"time"
)

func worker(id int, wg *sync.WaitGroup) {
	defer wg.Done() // ส่งสัญญาณว่างานเสร็จสิ้นเมื่อออกจากฟังก์ชัน

	fmt.Printf("⏳ [Worker %d] เริ่มต้นประมวลผลข้อมูล...\n", id)
	time.Sleep(time.Duration(id*100) * time.Millisecond) // จำลองงาน I/O
	fmt.Printf("✓ [Worker %d] ประมวลผลเสร็จสมบูรณ์!\n", id)
}

func main() {
	var wg sync.WaitGroup

	fmt.Println("🚀 ปล่อย Goroutines ทำงานพร้อมกัน 3 งาน (Parallel Execution):")

	for i := 1; i <= 3; i++ {
		wg.Add(1)
		go worker(i, &wg) // รันใน Goroutine ใหม่
	}

	wg.Wait() // รอจนกว่าทุก Goroutine จะทำงานเสร็จสิ้น
	fmt.Println("🎉 ทุกงานใน Worker Pool เสร็จสิ้นครบถ้วน!")
}`,
        description: "การควบคุม Goroutines พร้อมกันด้วย sync.WaitGroup"
      }
    },
    {
      id: "go-5",
      title: "Channels และ CSP Concurrency: Buffered Channels, Select และ Worker Pools",
      description: "ปรัชญา 'Do not communicate by sharing memory; instead, share memory by communicating', Channels (Unbuffered vs Buffered), Select multiplexing, และ Worker Pool Pattern",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Channels และปรัชญา Communicating Sequential Processes (CSP)

คำขวัญอันเลื่องชื่อของ Go:
> *"Do not communicate by sharing memory; instead, share memory by communicating."*
(อย่าสื่อสารด้วยการแชร์หน่วยความจำ แต่จงแชร์หน่วยความจำด้วยการสื่อสารผ่าน Channel)

---

## 1. ชนิดของ Channels

- **Unbuffered Channel (\`make(chan int)\`):** ผู้ส่งจะบล็อกจนกว่าจะมีผู้รับ (Synchronous Handshake)
- **Buffered Channel (\`make(chan int, 10)\`):** ผู้ส่งสามารถส่งข้อมูลเข้าคิวได้ตราบใดที่บัฟเฟอร์ยังไม่เต็ม`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
)

func main() {
	// สร้าง Buffered Channel รองรับ 3 รายการ
	jobQueue := make(chan string, 3)

	jobQueue <- "TASK-101: คำนวณเกรดเฉลี่ย"
	jobQueue <- "TASK-102: ตรวจสอบแพ็กเก็ต Firewall"
	jobQueue <- "TASK-103: สำรองข้อมูลฐานข้อมูล"
	close(jobQueue) // ปิด Channel เมื่อส่งข้อมูลครบ

	fmt.Println("📥 รับข้อมูลจาก Channel ด้วย Range Loop:")
	for task := range jobQueue {
		fmt.Printf("• ประมวลผล: %s\n", task)
	}
}`,
        description: "การส่งข้อมูลผ่าน Buffered Channel และรับด้วย range loop"
      }
    },
    {
      id: "go-6",
      title: "การสร้าง High-Performance REST API ด้วย Standard Library net/http และ Gin Framework",
      description: "พัฒนา REST API ความเร็วสูงด้วย Gin Web Framework: Radix Tree Router, JSON Binding, Middleware (CORS, Logger), และการจัดโครงสร้าง Clean Architecture",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# High-Performance Web Services ด้วย Go และ Gin Framework

**Gin** เป็น Web Framework ภาษา Go ที่ได้รับความนิยมสูงสุด ขับเคลื่อนด้วย **Radix Tree Routing Engine** ที่มีความเร็วสูงสุดและใช้หน่วยความจำน้อยมาก

---

## 1. จุดเด่นของ Gin

- เร็วกว่าเฟรมเวิร์กของภาษาอื่นนับสิบเท่า
- มี Middleware รองรับในตัว (Crash Recovery, Request Logging, Auth)
- ระบบ JSON Serialization และ Validation ที่มีประสิทธิภาพ`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"encoding/json"
	"fmt"
)

type CourseAPIResponse struct {
	ID         string   ` + "`json:\"id\"`" + `
	Title      string   ` + "`json:\"title\"`" + `
	Instructor string   ` + "`json:\"instructor\"`" + `
	Tags       []string ` + "`json:\"tags\"`" + `
}

func main() {
	course := CourseAPIResponse{
		ID:         "GO-801",
		Title:      "Go Microservices & Concurrency",
		Instructor: "IT Academy Engineering Team",
		Tags:       []string{"Go", "Microservices", "Docker"},
	}

	jsonData, err := json.MarshalIndent(course, "", "  ")
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}

	fmt.Println("✓ จำลอง Response HTTP JSON จาก Gin Endpoint (GET /api/courses/go):")
	fmt.Println(string(jsonData))
}`,
        description: "การกำหนด JSON Struct Tags และการแปลง Struct เป็น JSON ใน Go"
      }
    },
    {
      id: "go-7",
      title: "Data Persistence ด้วย database/sql, Connection Pooling และ GORM",
      description: "เชื่อมต่อฐานข้อมูล PostgreSQL/MySQL อย่างมีประสิทธิภาพ: การปรับแต่ง Connection Pool (SetMaxOpenConns, SetMaxIdleConns), Transactions, และ GORM ORM Library",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การจัดการฐานข้อมูลใน Go: database/sql และ Connection Pooling

แพ็กเกจมาตรฐาน \`database/sql\` ใน Go มาพร้อมระบบ **Connection Pool อัตโนมัติและ Thread-Safe** ซึ่งเป็นหัวใจสำคัญของการรับโหลดหลายแสน Request ต่อวินาที

---

## พารามิเตอร์ Connection Pool ที่ต้องตั้งค่าเสมอ

- \`SetMaxOpenConns(50)\`: จำนวน Connection สูงสุดที่อนุญาตให้เปิดพร้อมกัน
- \`SetMaxIdleConns(25)\`: จำนวน Connection ว่างที่เปิดรอไว้ใน Pool
- \`SetConnMaxLifetime(5 * time.Minute)\`: อายุขัยสูงสุดของแต่ละ Connection`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"time"
)

type DBConfig struct {
	MaxOpenConns    int
	MaxIdleConns    int
	ConnMaxLifetime time.Duration
}

func main() {
	cfg := DBConfig{
		MaxOpenConns:    100,
		MaxIdleConns:    20,
		ConnMaxLifetime: 10 * time.Minute,
	}

	fmt.Println("✓ จำลองการปรับแต่ง Database Connection Pool ใน Go:")
	fmt.Printf("• Max Open Connections: %d (ป้องกัน Database Overload)\n", cfg.MaxOpenConns)
	fmt.Printf("• Max Idle Connections: %d (ลดเวลา Handshake ในการต่อใหม่)\n", cfg.MaxIdleConns)
	fmt.Printf("• Conn Max Lifetime: %v (คืน Connection เก่าเพื่อความเสถียร)\n", cfg.ConnMaxLifetime)
}`,
        description: "การกำหนดค่า Connection Pool สำหรับงาน Production ใน Go"
      }
    },
    {
      id: "go-8",
      title: "Testing, Benchmarking (go test -bench) และ Memory Profiling ด้วย pprof",
      description: "การเขียน Unit Tests ในตัว Go, การวัดความเร็วและ Memory Allocation ด้วย Benchmark Functions (b.N), และการหา Memory Leak ด้วย Go pprof",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Testing และ Benchmarking ในตัวภาษา Go

Go เป็นหนึ่งในไม่กี่ภาษาที่มีเครื่องมือทดสอบประสิทธิภาพ (Benchmarking) และ Profiling แนบมาให้ในตัว Compiler โดยไม่ต้องติดตั้งปลั๊กอินเพิ่มเติม

---

## 1. คำสั่งการทดสอบใน Go

- \`go test ./...\`: รันชุดทดสอบทั้งหมดในโปรเจกต์
- \`go test -bench=.\`: รันการวัดประสิทธิภาพฟังก์ชัน
- \`go test -bench=. -benchmem\`: แสดงจำนวนไบต์และรอบที่จัดสรรแรม (\`B/op\`, \`allocs/op\`)`,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"strings"
	"testing"
)

// ฟังก์ชันต่อสตริงแบบดั้งเดิม vs strings.Builder
func ConcatWithBuilder(parts []string) string {
	var builder strings.Builder
	for _, p := range parts {
		builder.WriteString(p)
	}
	return builder.String()
}

func main() {
	words := []string{"IT", " ", "Academy", " ", "Online", " ", "2026"}
	result := ConcatWithBuilder(words)
	fmt.Printf("✓ ผลลัพธ์ strings.Builder (Zero Allocation Optimized): '%s'\n", result)
}

// ตัวอย่างฟังก์ชัน Benchmark
func BenchmarkBuilder(b *testing.B) {
	words := []string{"Hello", "Go", "World"}
	for i := 0; i < b.N; i++ {
		ConcatWithBuilder(words)
	}
}`,
        description: "การเขียนโค้ดประสิทธิภาพสูงด้วย strings.Builder และโครงสร้าง Benchmark"
      }
    },
    {
      id: "go-9",
      title: "โปรเจกต์ High-Throughput IoT Gateway Microservice พร้อม Rate Limiting",
      description: "โปรเจกต์รวบยอด: สร้าง IoT Gateway Microservice ด้วย Go รับส่งข้อมูลเซนเซอร์ผ่าน Goroutines พร้อม Token Bucket Rate Limiting และ Graceful Shutdown",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise Go: High-Throughput IoT Telemetry Gateway

ในบทเรียนสุดท้ายนี้ เราจะผสานพลังทั้งหมดของภาษา Go ทั้ง Goroutines, Channels, Structs, Concurrency และ Clean Architecture เพื่อสร้าง Microservice สำหรับรับข้อมูล IoT หมื่นเครื่องพร้อมกัน

---

## สถาปัตยกรรมระบบ

\`\`\`
[ IoT Devices (MQTT/HTTP) ] ──> [ Rate Limiting Token Bucket ]
                                             │
                                             ▼
                                [ Worker Pool (100 Goroutines) ]
                                             │
                                             ▼
                                [ Buffered Ingestion Channel ] ──> [ TimescaleDB / Redis ]
\`\`\``,
      codeExample: {
        language: "go",
        code: `package main

import (
	"fmt"
	"sync"
	"time"
)

type SensorPayload struct {
	DeviceID    string
	Temperature float64
	Timestamp   time.Time
}

func main() {
	telemetryChannel := make(chan SensorPayload, 5)
	var wg sync.WaitGroup

	// Worker Goroutine ดึงข้อมูลไปบันทึก
	wg.Add(1)
	go func() {
		defer wg.Done()
		for data := range telemetryChannel {
			fmt.Printf("💾 [INGESTION] บันทึกข้อมูล: [%s] Temp=%.1f°C เวลา=%s\n",
				data.DeviceID, data.Temperature, data.Timestamp.Format("15:04:05"))
		}
	}()

	// ส่งข้อมูลจำลองจากอุปกรณ์
	telemetryChannel <- SensorPayload{"ESP32-ROOM401", 28.5, time.Now()}
	telemetryChannel <- SensorPayload{"ESP32-SERVER", 22.0, time.Now()}
	telemetryChannel <- SensorPayload{"RPI-GATEWAY", 35.2, time.Now()}

	close(telemetryChannel)
	wg.Wait()
	fmt.Println("🎉 IoT Telemetry Gateway ประมวลผลเสร็จสิ้นทุกรายการ!")
}`,
        description: "สถาปัตยกรรม IoT Ingestion Gateway ด้วย Go Channels และ Goroutines"
      }
    }
  ]
};
