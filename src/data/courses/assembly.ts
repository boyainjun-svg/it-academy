import { Course } from "../types";

export const assemblyCourse: Course = {
  id: "assembly",
  title: "x86-64 & ARM Assembly Low-Level Systems Architecture",
  description: "เจาะลึกสถาปัตยกรรมคอมพิวเตอร์ x86-64 และ ARM64: รีจิสเตอร์, หน่วยความจำ, Stack Frame, Calling Conventions, POSIX System Calls, SIMD/AVX, และ Reverse Engineering",
  longDescription: "หลักสูตรวิศวกรรมสถาปัตยกรรมระดับฮาร์ดแวร์ด้วยภาษา Assembly สมัยใหม่ (Modern Low-Level Systems & x86-64 / ARM64 Assembly) สำหรับผู้ที่ต้องการเข้าใจการทำงานที่แท้จริงของ CPU และระบบปฏิบัติการอย่างไร้เวทมนตร์ ปราศจากการซ่อนรูปของ High-Level Abstractions ครอบคลุมตั้งแต่โครงสร้างภายในของซีพียู (ALU, Control Unit, Cache Hierarchy, Instruction Pipeline), ชุดรีจิสเตอร์ 64 บิต (RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP, R8-R15 และ RFLAGS), รูปแบบการอ้างแอดเดรสหน่วยความจำ (Scale-Index-Base: SIB Addressing), การบริหารจัดการ Call Stack และ Stack Frame, ข้อกำหนดการเรียกใช้ฟังก์ชัน (Calling Conventions: System V AMD64 vs Microsoft x64), การสั่งการระบบปฏิบัติการผ่าน Native Linux System Calls (sys_read, sys_write, sys_open, sys_exit), คำสั่งเวกเตอร์ความเร็วสูง SIMD/AVX2 เพื่อการประมวลผลข้อมูลคู่ขนาน, จนถึงการวิเคราะห์ไบนารีและวิศวกรรมย้อนรอย (Reverse Engineering, Buffer Overflow Analysis ด้วย GDB/GEF) และการเชื่อมต่อ Inline Assembly ใน C/C++ และ ARM64 RISC Architecture",
  icon: "⚙️",
  color: "slate",
  gradient: "from-slate-700 via-zinc-800 to-amber-950",
  category: "language",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: [
    "Assembly",
    "x86-64",
    "ARM64",
    "NASM",
    "Low-Level Systems",
    "CPU Registers",
    "Stack Frame",
    "System Calls",
    "SIMD",
    "Reverse Engineering"
  ],
  recommendedTools: [
    {
      name: "NASM (Netwide Assembler) & GNU LD",
      icon: "⚙️",
      badge: "Official Assembler",
      description: "ตัวแปลงภาษาแอสเซมบลีสถาปัตยกรรม x86 และ x86-64 ยอดนิยมระดับโลก พร้อม GNU Linker",
      downloadUrl: "https://www.nasm.us/",
      setupGuide: "1. ติดตั้งบน Ubuntu/Debian: sudo apt update && sudo apt install nasm build-essential binutils\n2. ติดตั้งบน Windows: ดาวน์โหลดตัวติดตั้ง nasm.exe และเพิ่มใน System PATH หรือใช้ WSL2\n3. คอมไพล์และลิงก์: nasm -f elf64 prog.asm -o prog.o && ld prog.o -o prog && ./prog"
    },
    {
      name: "GDB & GEF (GNU Debugger with GDB Enhanced Features)",
      icon: "🔍",
      badge: "Binary Debugger",
      description: "เครื่องมือดีบักระดับหน่วยความจำชั้นเซียนสำหรับ Reverse Engineering, Memory Inspection, และ Exploit Development",
      downloadUrl: "https://gef.readthedocs.io/",
      setupGuide: "1. ติดตั้ง gdb: sudo apt install gdb\n2. ติดตั้ง GEF: bash -c \"$(curl -fsSL https://gef.blast.hk/sh)\"\n3. เริ่มดีบักไบนารี: gdb -q ./prog แล้วพิมพ์คีย์ลัด context, registers, x/16xg $rsp"
    },
    {
      name: "SASM (Simple Assembly IDE)",
      icon: "💻",
      badge: "Cross-Platform IDE",
      description: "โปรแกรม IDE น้ำหนักเบาสำหรับเขียน รัน และดีบักโค้ด NASM, MASM, GAS, FASM พร้อมหน้าต่างดู Registers แบบเรียลไทม์",
      downloadUrl: "https://dman95.github.io/SASM/",
      setupGuide: "1. ดาวน์โหลด SASM จากเว็บไซต์อย่างเป็นทางการ\n2. ใน Settings เลือก Mode เป็น x64 และ Assembler เป็น NASM\n3. กดปุ่ม F5 เพื่อ Build & Run โค้ดได้ทันที"
    }
  ],
  lessons: [
    {
      id: "asm-1",
      title: "สถาปัตยกรรม CPU, Register Set และวงรอบคำสั่ง (CPU Architecture & Register Hierarchy)",
      description: "ทำความเข้าใจโครงสร้างภายในของซีพียู x86-64, รีจิสเตอร์ 64 บิต (RAX, RBX, RCX, RDX, RSI, RDI, RSP, RBP, R8-R15), RFLAGS, และการเขียนโปรแกรมแรกด้วย NASM",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม CPU x86-64 และชุดรีจิสเตอร์ (CPU Architecture & Register Hierarchy)

ภาษา Assembly คือภาษาโปรแกรมระดับต่ำสุดที่มนุษย์สามารถอ่านเข้าใจได้ โดย 1 คำสั่งของ Assembly แทบจะจับคู่โดยตรงแบบ 1:1 กับรหัสเครื่อง (Machine Code / Opcodes) ที่ส่งตรงเข้าสู่สถาปัตยกรรมของหน่วยประมวลผลกลาง (CPU)

---

## 1. โครงสร้างฮาร์ดแวร์ของ CPU (Von Neumann Architecture)

การทำงานของคอมพิวเตอร์สมัยใหม่ประกอบด้วย 3 ภาคส่วนหลักตามแนวคิด Von Neumann:
1. **Control Unit (CU):** ทำหน้าที่ดึงคำสั่ง (Fetch), ถอดรหัสคำสั่ง (Decode), และประสานงานส่งข้อมูลไปยังส่วนต่างๆ
2. **Arithmetic Logic Unit (ALU):** ภาคคำนวณคณิตศาสตร์ (บวก, ลบ, คูณ, หาร) และตรรกศาสตร์ระดับบิต (AND, OR, XOR, NOT, Bit Shifting)
3. **Registers (รีจิสเตอร์):** หน่วยความจำภายในตัวชิป CPU ที่มีความเร็วสูงสุดในการเข้าถึง (Sub-nanosecond latency / 1 CPU Cycle) เร็วกว่า L1 Cache, L2 Cache, L3 Cache และเร็วกว่า RAM หลายร้อยเท่า

\`\`\`
+--------------------------------------------------------------+
|                        CPU Core                              |
|  +--------------------+             +---------------------+  |
|  |    Control Unit    | ----------> |         ALU         |  |
|  +--------------------+             +---------------------+  |
|            |                                   |             |
|            v                                   v             |
|  +--------------------------------------------------------+  |
|  |   64-bit General Purpose Registers (RAX, RBX, etc.)    |  |
|  +--------------------------------------------------------+  |
+--------------------------------------------------------------+
                               |
                               v
                     +-------------------+
                     |  L1 / L2 / L3     |
                     +-------------------+
                               |
                               v
                     +-------------------+
                     | System RAM (DDR5) |
                     +-------------------+
\`\`\`

---

## 2. ชุดรีจิสเตอร์ x86-64 (General-Purpose Registers)

ในสถาปัตยกรรม 64 บิต (AMD64 / Intel 64) CPU จะมีรีจิสเตอร์ขนาด 64 บิตทั้งหมด 16 ตัวหลัก และสามารถอ้างอิงส่วนย่อยขนาด 32 บิต, 16 บิต, และ 8 บิตได้ดังนี้:

| 64-bit (Quadword) | 32-bit (Doubleword) | 16-bit (Word) | 8-bit Low (Byte) | 8-bit High (Legacy) | บทบาทหน้าที่และธรรมเนียมปฏิบัติ (Conventions) |
|---|---|---|---|---|---|
| **RAX** | EAX | AX | AL | AH | **Accumulator:** ใช้เก็บผลลัพธ์จากการคำนวณ และเป็น Return Value ของฟังก์ชัน |
| **RBX** | EBX | BX | BL | BH | **Base Register:** ใช้เก็บ Base Pointer สำหรับอ้างแอดเดรสหน่วยความจำ (Callee-saved) |
| **RCX** | ECX | CX | CL | CH | **Counter:** ตัวนับลูป, ใช้กับคำสั่ง loop และนับการเลื่อนบิต (Shift/Rotate) |
| **RDX** | EDX | DX | DL | DH | **Data Register:** ใช้ร่วมกับ RAX ในการคูณ/หาร 128 บิต และเก็บพารามิเตอร์ที่ 3 |
| **RSI** | ESI | SI | SIL | - | **Source Index:** ตัวชี้ตำแหน่งข้อมูลต้นทางในคำสั่งประมวลผล String / พารามิเตอร์ที่ 2 |
| **RDI** | EDI | DI | DIL | - | **Destination Index:** ตัวชี้ปลายทาง / พารามิเตอร์ที่ 1 ใน System V ABI |
| **RBP** | EBP | BP | BPL | - | **Base / Frame Pointer:** ตัวชี้ฐานของฟังก์ชัน Stack Frame |
| **RSP** | ESP | SP | SPL | - | **Stack Pointer:** ตัวชี้จุดสูงสุดของ Call Stack ในปัจจุบัน (ห้ามแก้ไขสุ่มสี่สุ่มห้า) |
| **R8 - R15** | R8D - R15D | R8W - R15W | R8B - R15B | - | รีจิสเตอร์เอนกประสงค์ชุดใหม่ที่เพิ่มเข้ามาในยุค 64-bit |

> **กฎเหล็กของ x86-64:** เมื่อเขียนข้อมูลลงในรีจิสเตอร์ 32 บิต (เช่น \`mov eax, 1\`) ซีพียูจะทำการ **Zero-out (ล้างเป็น 0)** ครึ่งบน 32 บิตที่เหลือของ \`RAX\` โดยอัตโนมัติ

---

## 3. โครงสร้างโปรแกรม NASM Assembly (.data, .bss, .text)

โปรแกรม Assembly แบ่งเซ็กเมนต์หน่วยความจำออกเป็น 3 ส่วนหลัก:
1. **section .data:** เก็บค่าคงที่และตัวแปรเริ่มต้นที่มีค่าแล้ว (Initialized Data) เช่น ข้อความสตริง
2. **section .bss:** จองพื้นที่หน่วยความจำสำหรับตัวแปรที่ยังไม่ได้กำหนดค่าเริ่มต้น (Block Started by Symbol)
3. **section .text:** พื้นที่เก็บโค้ดคำสั่งของโปรแกรม (Machine Code) ที่ได้รับสิทธิ์ Executable (RX)`,
      codeExample: `; ==============================================================================
; โปรแกรม: 01_hello_world_syscall.asm
; สถาปัตยกรรม: x86-64 (Linux POSIX 64-bit)
; คอมไพเลอร์: NASM (Netwide Assembler)
; คำสั่งคอมไพล์: nasm -f elf64 01_hello_world_syscall.asm -o hello.o
; คำสั่งลิงก์: ld hello.o -o hello
; ==============================================================================

section .data
    ; ข้อความสตริงที่ต้องการพิมพ์ จบด้วย Newline (10 ในรหัส ASCII)
    msg db "Hello, x86-64 Assembly & Low-Level Architecture!", 10
    msg_len equ $ - msg   ; คำนวณความยาวสตริงอัตโนมัติ (Current Address - msg Start Address)

    info db "CPU Register State: RAX initialized, Calling Linux sys_write", 10
    info_len equ $ - info

section .text
    global _start         ; กำหนด Entry Point หลักให้ Linker (ld) รู้จัก

_start:
    ; --------------------------------------------------------------------------
    ; ขั้นตอนที่ 1: เรียกคำสั่ง sys_write (Linux Syscall หมายเลข 1)
    ; ตารางส่งพารามิเตอร์ System V x86-64:
    ;   RAX = Syscall ID (1 = sys_write)
    ;   RDI = File Descriptor (1 = stdout)
    ;   RSI = Memory Buffer Pointer (ที่อยู่ของข้อความ msg)
    ;   RDX = Buffer Length (จำนวนไบต์ที่ต้องการพิมพ์)
    ; --------------------------------------------------------------------------
    mov rax, 1            ; sys_write syscall number
    mov rdi, 1            ; fd = stdout (1)
    mov rsi, msg          ; ชี้ไปยังข้อความใน .data
    mov rdx, msg_len      ; ส่งจำนวนไบต์
    syscall               ; ส่งสัญญาณ Interrupt สลับโหมดสู่ Kernel Ring 0

    ; พิมพ์ข้อความที่สอง
    mov rax, 1
    mov rdi, 1
    mov rsi, info
    mov rdx, info_len
    syscall

    ; --------------------------------------------------------------------------
    ; ขั้นตอนที่ 2: เรียกคำสั่ง sys_exit (Linux Syscall หมายเลข 60)
    ;   RAX = Syscall ID (60 = sys_exit)
    ;   RDI = Exit Status Code (0 = Success)
    ; --------------------------------------------------------------------------
    mov rax, 60           ; sys_exit syscall number
    xor rdi, rdi          ; rdi = 0 (เทคนิค xor rdi, rdi ประหยัดไบต์ opcode กว่า mov rdi, 0)
    syscall               ; จบการทำงาน ส่งคืน Control ให้แก่ระบบปฏิบัติการ`,
      challenge: "แก้ไขโค้ดโปรแกรมข้างต้นให้พิมพ์ข้อความ 3 บรรทัดติดต่อกัน พร้อมเปลี่ยน Exit Code ของโปรแกรมให้คืนค่า 42 (ตรวจสอบสถานะในเชลล์ด้วย echo $?)",
      quiz: [
        {
          question: "ในสถาปัตยกรรม x86-64 เมื่อเราสั่งเขียนข้อมูลลงในรีจิสเตอร์ขนาด 32 บิต เช่น mov eax, 5 จะเกิดอะไรขึ้นกับ 32 บิตครึ่งบนของ RAX?",
          options: [
            "ครึ่งบนของ RAX จะถูก Zero-extend (เติมบิต 0) โดยอัตโนมัติ",
            "ครึ่งบนของ RAX จะคงค่าเดิมไว้ไม่เปลี่ยนแปลง",
            "เกิดข้อผิดพลาด General Protection Fault ขณะรันไทม์",
            "ซีพียูจะทำการ Sign-extend คัดลอกบิตสูงสุดไปเติมครึ่งบน"
          ],
          correctAnswer: 0,
          explanation: "ใน x86-64 กฎของฮาร์ดแวร์ระบุว่าการเขียนข้อมูลลงในรีจิสเตอร์ 32 บิตย่อยใดๆ จะล้างบิต 32-63 ด้านบนเป็น 0 เสมอ (Automatic Zero-Extension) เพื่อขจัดปัญหาความไม่สอดคล้องของ Dependency Chain"
        },
        {
          question: "เหตุใดโปรแกรมเมอร์ Assembly ระดับอาชีพจึงนิยมใช้คำสั่ง 'xor rdi, rdi' แทนที่การใช้ 'mov rdi, 0'?",
          options: [
            "xor มีขนาด Opcode เล็กกว่า (2 ไบต์ เทียบกับ 5-7 ไบต์) และซีพียูมีวงจร Register Renaming เคลียร์ค่าได้เร็วกว่า",
            "mov ไม่สามารถใส่ค่า 0 ลงในรีจิสเตอร์ 64 บิตได้",
            "xor ป้องกันปัญหาฮาร์ดแวร์ร้อนจัดจากการใช้ไฟฟ้า",
            "ระบบปฏิบัติการ Linux ไม่อนุญาตให้ใช้คำสั่ง mov rdi, 0"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง xor reg, reg ถูกออกแบบให้ซีพียูสมัยใหม่ตรวจจับเป็น Zeroing Idiom ผ่าน Out-of-Order Execution engine ทำให้ไม่ต้องรอข้อมูลและประหยัดพื้นที่แคชคำสั่ง"
        },
        {
          question: "ในระบบปฏิบัติการ Linux 64-bit พารามิเตอร์ตัวแรกของการทำ System Call จะต้องถูกส่งผ่านรีจิสเตอร์ตัวใด?",
          options: ["RDI", "RAX", "RSI", "RDX"],
          correctAnswer: 0,
          explanation: "ตามข้อกำหนด System V AMD64 ABI พารามิเตอร์ของ System Call จะส่งผ่านลำดับรีจิสเตอร์ RDI (ตัวที่ 1), RSI (ตัวที่ 2), RDX (ตัวที่ 3), R10 (ตัวที่ 4), R8 (ตัวที่ 5), R9 (ตัวที่ 6) โดย RAX ใช้สำหรับเก็บ Syscall ID"
        }
      ],
      labGuide: {
        title: "ปฏิบัติการที่ 1: ติดตั้ง NASM, Assembler และวิเคราะห์ไบนารีด้วย Readelf",
        toolName: "NASM & GNU Binutils",
        toolIcon: "⚙️",
        downloadUrl: "https://www.nasm.us/",
        objective: "สร้าง ติดตั้ง และประกอบไบนารี ELF64 ด้วย NASM พร้อมตรวจเช็กเซ็กเมนต์หน่วยความจำด้วย readelf",
        steps: [
          {
            title: "ติดตั้งชุดเครื่องมือประกอบภาษา (Assembler Tools)",
            detail: "เปิดเทอร์มินัล Linux หรือ WSL2 และติดตั้ง NASM พร้อมกับ binutils",
            codeOrCommand: "sudo apt update && sudo apt install -y nasm binutils gcc gdb",
            tip: "ตรวจสอบเวอร์ชันด้วยคำสั่ง nasm -v ต้องได้เวอร์ชัน 2.15 หรือใหม่กว่า"
          },
          {
            title: "สร้างไฟล์โค้ดแอสเซมบลี",
            detail: "บันทึกโค้ด hello.asm ลงในไดเรกทอรีการทำงาน",
            codeOrCommand: "cat << 'EOF' > hello.asm\nsection .data\n  msg db 'Hello Assembly!', 10\n  len equ $ - msg\nsection .text\n  global _start\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, msg\n  mov rdx, len\n  syscall\n  mov rax, 60\n  xor rdi, rdi\n  syscall\nEOF"
          },
          {
            title: "ประกอบโค้ดและลิงก์เป็นโปรแกรมปฏิบัติการ",
            detail: "รัน nasm เพื่อสร้าง Object File และ ld เพื่อสร้าง Executable Binary",
            codeOrCommand: "nasm -f elf64 hello.asm -o hello.o && ld hello.o -o hello && ./hello",
            tip: "ไบนารีที่ได้จะไม่มี Libc ผูกติดมาด้วย ทำให้มีขนาดเล็กมากเพียงไม่กี่ร้อยไบต์"
          },
          {
            title: "วิเคราะห์โครงสร้าง ELF ด้วย readelf",
            detail: "ตรวจสอบ Entry Point และ Sections ที่ถูกสร้างขึ้น",
            codeOrCommand: "readelf -h -S hello",
            tip: "สังเกตค่า Entry point address ซึ่งจะตรงกับแอดเดรสของเลเบล _start"
          }
        ],
        verification: "โปรแกรมรันและแสดงข้อความ 'Hello Assembly!' ออกทางหน้าจอ พร้อมทั้งคำสั่ง echo $? คืนค่า 0"
      }
    },
    {
      id: "asm-2",
      title: "การจัดการหน่วยความจำ, Addressing Modes และคำสั่งย้ายข้อมูล (Memory Addressing & Data Movement)",
      description: "ทำความเข้าใจรูปแบบการคำนวณแอดเดรส Scale-Index-Base (SIB), Endianness (Little-Endian), คำสั่ง MOV, LEA, MOVZX, MOVSX และตัวแปรใน .data/.bss",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การคำนวณแอดเดรสหน่วยความจำ และคำสั่งย้ายข้อมูล (Addressing Modes & Data Movement)

ในภาษา Assembly การเข้าถึงข้อมูลในแรมจะต้องทำความเข้าใจเรื่องสถาปัตยกรรมบัส, ขนาดของข้อมูล และลำดับการเรียงไบต์ (Byte Ordering / Endianness) อย่างลึกซึ้ง

---

## 1. ลำดับไบต์ Little-Endian (x86-64 Architecture)

ซีพียูตระกูล x86 และ ARM (ส่วนใหญ่) ใช้ระบบ **Little-Endian**:
- **Least Significant Byte (ไบต์ที่มีค่าน้อยที่สุด)** จะถูกจัดเก็บไว้ที่ **Memory Address ต่ำสุด**
- สมมติค่า Hex: \`0x12345678\` (ขนาด 4 ไบต์) เมื่อบันทึกลงในแรมที่แอดเดรส \`0x1000\`:

\`\`\`
Address:   0x1000  0x1001  0x1002  0x1003
Value:     [0x78]  [0x56]  [0x34]  [0x12]
\`\`\`

---

## 2. โครงสร้าง SIB (Scale-Index-Base) Addressing Mode

x86-64 มีความสามารถระดับฮาร์ดแวร์ในการคำนวณแอดเดรสของอาร์เรย์และโครงสร้างข้อมูลผ่านสูตรเดียว:

$$\\text{Effective Address} = \\text{Base} + (\\text{Index} \\times \\text{Scale}) + \\text{Displacement}$$

- **Base Register:** รีจิสเตอร์ฐาน 64 บิต เช่น \`RBX\`, \`RBP\`, \`R12\`
- **Index Register:** ตัวนับดัชนี เช่น \`RCX\`, \`RSI\`, \`RDI\` (ยกเว้น \`RSP\`)
- **Scale Factor:** ตัวคูณขนาดข้อมูล ซึ่งฮาร์ดแวร์รองรับค่าเฉพาะ: **1, 2, 4, 8** (ตรงกับ Byte, Word, Dword, Qword)
- **Displacement:** ค่า Offset ตัวเลขคงที่ (Offset/Constant Displacement)

\`\`\`asm
mov eax, [rbx + rcx*4 + 0x10]  ; ดึงค่า int ในอาร์เรย์ตำแหน่งที่ rcx ออฟเซต 16 ไบต์
\`\`\`

---

## 3. ความแตกต่างระหว่าง MOV และ LEA (Load Effective Address)

- **MOV:** ทำการ **Dereference** เข้าไปอ่านข้อมูลจริงๆ ณ แอดเดรสนั้นในหน่วยความจำ
- **LEA (Load Effective Address):** คำนวณเฉพาะ **ตำแหน่งแอดเดรส (Pointer Address)** หรือใช้เป็นทริคคำนวณคณิตศาสตร์ความเร็วสูงโดยไม่เข้าถึงแรมเลยแม้แต่ไบต์เดียว!

\`\`\`asm
; สมมติ rax = 10, rbx = 5
lea rcx, [rax + rbx*2 + 3]   ; rcx = 10 + (5*2) + 3 = 23 (คำนวณใน 1 CPU Cycle โดยไม่แตะแรม!)
mov rcx, [rax + rbx*2 + 3]   ; อ่านค่าในแรมที่แอดเดรส 23 ลงใน rcx (เข้าถึงหน่วยความจำจริง)
\`\`\`

---

## 4. MOVZX (Zero-Extend) vs MOVSX (Sign-Extend)
- เมื่อต้องการย้ายข้อมูลจากขนาดเล็กไปขนาดใหญ่ เช่น จาก 8 บิต (AL) ไป 64 บิต (RAX):
  - **movzx (Move with Zero-Extend):** ใช้กับ **Unsigned Numbers** เติม 0 ในบิตส่วนบน
  - **movsx / movsxd (Move with Sign-Extend):** ใช้กับ **Signed Numbers** ทำการก็อปปี้บิตเครื่องหมาย (Sign Bit) ไปเติมบิตส่วนบนทั้งหมดเพื่อรักษาค่าติดลบไว้`,
      codeExample: `; ==============================================================================
; โปรแกรม: 02_addressing_modes_and_lea.asm
; สาธิต: SIB Addressing, LEA Arithmetic Trick, และ Little-Endian Memory Dump
; ==============================================================================

section .data
    align 8
    ; อาร์เรย์จำนวนเต็ม 32 บิต (dd = define doubleword, 4 ไบต์ต่อสมาชิก)
    scores dd 100, 250, 475, 890, 1024
    scores_count equ ($ - scores) / 4

    ; ตัวแปรประเภทต่างๆ
    byte_val  db 0x7F           ; 1 ไบต์ (+127)
    neg_byte  db 0x80           ; 1 ไบต์ (-128 ใน Signed 2's Complement)
    dword_val dd 0x12345678     ; สาธิต Little-Endian

    result_msg db "Address calculation completed successfully!", 10
    result_len equ $ - result_msg

section .bss
    buffer resb 64              ; จองพื้นที่ว่าง 64 ไบต์ใน RAM

section .text
    global _start

_start:
    ; 1. สาธิต SIB Addressing เข้าถึง scores[2] (ค่า 475)
    lea rbx, [scores]           ; Base Register = แอดเดรสเริ่มต้นของอาร์เรย์
    mov rcx, 2                  ; Index = 2 (สมาชิกตัวที่ 3)
    mov edx, [rbx + rcx*4]      ; Scale = 4 ไบต์ -> edx จะมีค่า 475 (0x1DB)

    ; 2. สาธิต LEA ในการคำนวณสูตรคณิตศาสตร์: Result = (rax * 8) + 15
    mov rax, 10
    lea r8, [rax*8 + 15]        ; r8 = (10 * 8) + 15 = 95 (ไม่แตะต้องหน่วยความจำ)

    ; 3. สาธิต Sign-Extension vs Zero-Extension
    movzx r9, byte [byte_val]   ; r9 = 0x000000000000007F (Zero-extended)
    movsx r10, byte [neg_byte]  ; r10 = 0xFFFFFFFFFFFFFF80 (Sign-extended รักษาค่า -128)

    ; 4. บันทึกผลลัพธ์ลงใน buffer ที่จองไว้ใน .bss
    mov [buffer], edx
    mov [buffer + 4], r8d

    ; พิมพ์ข้อความยืนยันการคำนวณผ่าน sys_write
    mov rax, 1
    mov rdi, 1
    mov rsi, result_msg
    mov rdx, result_len
    syscall

    ; จบโปรแกรมด้วย sys_exit
    mov rax, 60
    xor rdi, rdi
    syscall`,
      challenge: "เขียนฟังก์ชัน Assembly ที่รับ Base Address ของอาร์เรย์ 64-bit (Quadword) ใน RDI และ Index ใน RSI แล้วใช้ SIB addressing ดึงข้อมูลสมาชิกตัวนั้นมาคูณ 2 ด้วยคำสั่ง LEA แล้วส่งค่าคืนใน RAX",
      quiz: [
        {
          question: "ค่าตัวคูณ (Scale Factor) ในสถาปัตยกรรม x86-64 SIB Addressing Mode สามารถเป็นค่าใดได้บ้าง?",
          options: [
            "1, 2, 4, หรือ 8 เท่านั้น",
            "ตัวเลขจำนวนเต็มใดๆ ก็ได้ตั้งแต่ 1 ถึง 64",
            "เฉพาะเลขคู่เท่านั้น (2, 4, 6, 8, 10)",
            "ต้องเป็นเลขยกกำลังของ 10 เช่น 1, 10, 100"
          ],
          correctAnswer: 0,
          explanation: "วงจรถอดรหัสฮาร์ดแวร์ x86-64 SIB Byte ออกแบบ Field ขนาด 2 บิตสำหรับ Scale ทำให้ระบุได้เพียง $2^0=1, 2^1=2, 2^2=4, 2^3=8$ ซึ่งสอดคล้องกับขนาดตัวแปร Byte, Word, Dword, และ Qword พอดี"
        },
        {
          question: "คำสั่ง 'lea rax, [rbx + rcx*4 + 10]' มีพฤติกรรมการทำงานต่างจาก 'mov rax, [rbx + rcx*4 + 10]' อย่างไร?",
          options: [
            "LEA คำนวณผลลัพธ์แอดเดรส (rbx + rcx*4 + 10) เก็บลง RAX โดยไม่เข้าถึง RAM ส่วน MOV จะอ่านข้อมูลที่อยู่ใน RAM แอดเดรสนั้น",
            "LEA ช้ากว่า MOV เสมอเพราะต้องใช้ระบบปฏิบัติการช่วย",
            "LEA ทำงานได้เฉพาะกับตัวแปรสตริง ส่วน MOV ทำงานได้กับตัวเลข",
            "ทั้งสองคำสั่งทำงานเหมือนกันทุกประการเป็นเพียง Alias"
          ],
          correctAnswer: 0,
          explanation: "LEA (Load Effective Address) ใช้ ALU ภายในของหน่วยคำนวณแอดเดรสคำนวณสูตรแล้วนำผลลัพธ์ใส่รีจิสเตอร์ทันทีโดยไม่มี Bus Transaction ไปยังแคชหรือแรม"
        },
        {
          question: "ข้อมูล 32-bit เลขฐานสิบหก 0xAABBCCDD เมื่อถูกจัดเก็บบนระบบ Little-Endian ค่าในไบต์แรกสุดของแอดเดรส (Lowest Address) จะเป็นค่าใด?",
          options: ["0xDD", "0xAA", "0xBB", "0xCC"],
          correctAnswer: 0,
          explanation: "ในระบบ Little-Endian ไบต์ต่ำสุด (Least Significant Byte คือ 0xDD) จะถูกบันทึกไว้ที่แอดเดรสต่ำสุดเสมอ จากนั้นตามด้วย 0xCC, 0xBB, และ 0xAA ที่แอดเดรสถัดไป"
        }
      ]
    },
    {
      id: "asm-3",
      title: "เลขคณิต, ตรรกศาสตร์บิต และการจัดการ CPU Flags (Arithmetic, Logic & Flags)",
      description: "เจาะลึกคำสั่ง ADD, SUB, IMUL, IDIV, AND, OR, XOR, SHL, SHR, SAR พร้อมวิเคราะห์สถานะ RFLAGS: Zero Flag (ZF), Carry Flag (CF), Overflow Flag (OF), และ Sign Flag (SF)",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การคำนวณทางคณิตศาสตร์ ตรรกศาสตร์ และรีจิสเตอร์สภาวะ (Arithmetic, Logic & RFLAGS)

การทำงานของคอมไพเลอร์ทุกตัว (C, C++, Rust, Go) เมื่อแปลงนิพจน์คณิตศาสตร์ (Expressions) จะต้องแปลงลงมาเป็นคำสั่งพื้นฐานของ ALU และตรวจสอบผลลัพธ์ผ่าน **RFLAGS Register**

---

## 1. รีจิสเตอร์สถานะ RFLAGS (Status Flags)

ทุกครั้งที่คำสั่งทางคณิตศาสตร์หรือตรรกศาสตร์ทำงาน CPU จะอัปเดตบิตแฟล็กใน \`RFLAGS\` โดยอัตโนมัติ:

| Flag | ชื่อเต็ม | ความหมายเมื่อค่าเป็น 1 (Set) |
|---|---|---|
| **ZF** | **Zero Flag** | ผลลัพธ์จากการคำนวณมีค่าเท่ากับศูนย์พอดี (เช่น \`5 - 5 = 0\`) |
| **CF** | **Carry Flag** | เกิดการทดบิตหรือขอยืมบิตในการคำนวณ **Unsigned Numbers** (Out of range) |
| **OF** | **Overflow Flag** | เกิดการล้นของค่าบวก/ลบในการคำนวณ **Signed Numbers** (เช่น บวกเลขบวกสองตัวแล้วได้เลขติดลบ) |
| **SF** | **Sign Flag** | บิตสูงสุด (Most Significant Bit) มีค่าเป็น 1 ซึ่งหมายถึงผลลัพธ์เป็นค่าติดลบในระบบ Signed 2's Complement |
| **PF** | **Parity Flag** | จำนวนบิต 1 ในไบต์ต่ำสุดเป็นเลขคู่ (Even Parity) |

---

## 2. การคูณและการหาร 64 บิต (IMUL vs IDIV)

### การคูณ (IMUL / MUL):
- การคูณตัวเลข 64 บิต 2 ตัว ผลลัพธ์อาจมีขนาดใหญ่ถึง **128 บิต**
- \`mul rbx\` (Unsigned) หรือ \`imul rbx\`: จะนำ \`RAX\` คูณกับ \`RBX\` แล้วเก็บผลลัพธ์ 128 บิตไว้ในคู่รีจิสเตอร์ **\`RDX:RAX\`** (RDX เก็บ 64 บิตบน, RAX เก็บ 64 บิตล่าง)
- แบบ 3 โอเปอแรนด์: \`imul rax, rbx, 50\` (rax = rbx * 50)

### การหาร (IDIV / DIV):
- คำสั่ง \`idiv rbx\` ต้องส่งตัวตั้งขนาด 128 บิตผ่าน **\`RDX:RAX\`**
- **ข้อควรระวังอันตราย:** ก่อนสั่ง \`idiv\` จะต้องขยายเครื่องหมายของ \`RAX\` ไปยัง \`RDX\` เสมอด้วยคำสั่ง:
  - \`cqo\` (Convert Quadword to Octoword): ขยายบิตเครื่องหมายจาก \`RAX\` ไปยัง \`RDX\`
  - หากลืมสั่ง \`cqo\` ระบบจะเกิดข้อผิดพลาดรุนแรง **Floating Point Exception (Core Dumped / Divide Error)**
- **ผลลัพธ์การหาร:** ผลหาร (Quotient) เก็บใน **\`RAX\`**, เศษเหลือจากการหาร (Remainder/Modulo) เก็บใน **\`RDX\`**

---

## 3. การเลื่อนบิต: Logical Shift vs Arithmetic Shift
- **SHL / SHR (Logical Shift):** เลื่อนบิตไปทางซ้าย/ขวา แล้วเติมบิต 0 เข้ามาเสมอ (ใช้กับ Unsigned Numbers)
- **SAR (Shift Arithmetic Right):** เลื่อนบิตไปทางขวาโดย **คงสภาพบิตเครื่องหมายเดิมไว้ (Sign-Preserving)** เพื่อให้ผลลัพธ์การหารตัวเลขติดลบด้วย $2^n$ ยังคงถูกต้อง`,
      codeExample: `; ==============================================================================
; โปรแกรม: 03_arithmetic_flags_and_division.asm
; สาธิต: การคูณ 128-bit, การหารแบบปลอดภัยด้วย cqo, ตรรกศาสตร์บิต และการเช็ค Flags
; ==============================================================================

section .data
    dividend    dq 1000         ; ตัวตั้ง = 1000
    divisor     dq 33           ; ตัวหาร = 33

    msg_ok      db "Arithmetic and Bitwise Operations Verified!", 10
    msg_ok_len  equ $ - msg_ok

section .bss
    quotient    resq 1          ; พื้นที่เก็บผลหาร
    remainder   resq 1          ; พื้นที่เก็บเศษ

section .text
    global _start

_start:
    ; --------------------------------------------------------------------------
    ; 1. การคำนวณพื้นฐานและการเช็ค Zero Flag
    ; --------------------------------------------------------------------------
    mov rax, 50
    add rax, 50                 ; rax = 100
    sub rax, 100                ; rax = 0 -> ส่งผลให้ Zero Flag (ZF) = 1 ทันที

    ; --------------------------------------------------------------------------
    ; 2. การคูณตัวเลข 64-bit ให้ผลลัพธ์ 128-bit ใน RDX:RAX
    ; --------------------------------------------------------------------------
    mov rax, 0x100000000        ; 4,294,967,296
    mov rbx, 0x200000000        ; 8,589,934,592
    mul rbx                     ; RDX:RAX = RAX * RBX (ผลลัพธ์ล้น 64 บิตแน่นอน)
    ; ตอนนี้ RDX จะเก็บค่าครึ่งบน และ RAX จะเก็บค่าครึ่งล่าง

    ; --------------------------------------------------------------------------
    ; 3. การหารแบบมีเครื่องหมาย (Signed Division) ด้วย IDIV
    ; --------------------------------------------------------------------------
    mov rax, [dividend]         ; rax = 1000
    cqo                         ; ขยาย Sign Bit จาก RAX ไปเต็ม RDX (RDX = 0)
    mov rbx, [divisor]          ; rbx = 33
    idiv rbx                    ; ผลหาร: RAX = 30, เศษเหลือ: RDX = 10

    mov [quotient], rax         ; บันทึกผลหาร (30)
    mov [remainder], rdx        ; บันทึกเศษ (10)

    ; --------------------------------------------------------------------------
    ; 4. การเลื่อนบิต (Bit Shift) แทนการคูณ/หาร 2^n เพื่อความเร็วระดับนาโนวินาที
    ; --------------------------------------------------------------------------
    mov rax, 64
    shl rax, 2                  ; rax = 64 * 4 = 256
    sar rax, 3                  ; rax = 256 / 8 = 32

    ; 5. ตรรกศาสตร์บิต Bit Masking
    mov rbx, 0b10110011
    and rbx, 0b00001111         ; Mask เอาเฉพาะ 4 บิตล่าง (rbx = 0b00000011)
    xor rbx, rbx                ; เคลียร์ค่า rbx เป็น 0 (ZF = 1)

    ; พิมพ์รายงานผล
    mov rax, 1
    mov rdi, 1
    mov rsi, msg_ok
    mov rdx, msg_ok_len
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall`,
      challenge: "เขียนฟังก์ชันคำนวณ Greatest Common Divisor (GCD) ของตัวเลขสองจำนวนใน RDI และ RSI โดยใช้วิธี Euclidean Algorithm ที่ใช้คำสั่ง idiv ในการหาเศษเหลือไปเรื่อยๆ จนกว่า RDX จะเป็น 0",
      quiz: [
        {
          question: "เหตุใดก่อนการเรียกคำสั่ง 'idiv' ใน x86-64 จึงจำเป็นต้องสั่ง 'cqo' ก่อนเสมอ?",
          options: [
            "เพื่อขยายบิตเครื่องหมาย (Sign Bit) ของ RAX เข้าสู่ RDX ให้ตัวตั้ง 128 บิต (RDX:RAX) มีความถูกต้อง ป้องกัน Divide Error",
            "เพื่อเปิดสิทธิ์การใช้งาน ALU สำหรับการหาร",
            "เพื่อล้างแคชคำสั่งของ CPU",
            "เพื่อแปลงตัวเลขจำนวนเต็มให้กลายเป็นทศนิยม Float"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง IDIV จะมองว่าตัวตั้งคือคู่รีจิสเตอร์ RDX:RAX ขนาด 128 บิต หากไม่ใช้ CQO เคลียร์/ขยายเครื่องหมายใน RDX ข้อมูลขยะที่ค้างอยู่ใน RDX จะทำให้ตัวตั้งกลายเป็นเลขมหาศาลและเกิด Arithmetic Overflow Crash ทันที"
        },
        {
          question: "ความแตกต่างสำคัญระหว่างคำสั่ง SHR (Shift Right) และ SAR (Shift Arithmetic Right) คือข้อใด?",
          options: [
            "SAR จะรักษาบิตเครื่องหมายเดิม (Sign Bit) ไว้ ส่วน SHR จะเติมบิต 0 เข้ามาทางซ้ายเสมอ",
            "SHR ใช้กับจำนวนเต็ม ส่วน SAR ใช้กับทศนิยม",
            "SAR เลื่อนบิตได้ทีละ 2 บิต ส่วน SHR เลื่อนทีละ 1 บิต",
            "SHR เร็วกว่า SAR 10 เท่าในสถาปัตยกรรม Intel"
          ],
          correctAnswer: 0,
          explanation: "SAR (Arithmetic Shift) ถูกออกแบบมาเพื่อหารเลข Signed 2's Complement ด้วยกำลังของ 2 ดังนั้นบิตซ้ายสุดจะถูกคัดลอกค่าเดิม (ถ้าติดลบ 1 ก็เติม 1, ถ้าบวก 0 ก็เติม 0)"
        },
        {
          question: "เมื่อเกิดเหตุการณ์บวกตัวเลขมีเครื่องหมาย (Signed Numbers) ค่าบวกสองตัวแล้วได้ผลลัพธ์กลายเป็นค่าติดลบ แฟล็กใดใน RFLAGS จะถูกเซ็ตเป็น 1?",
          options: ["Overflow Flag (OF)", "Carry Flag (CF)", "Zero Flag (ZF)", "Parity Flag (PF)"],
          correctAnswer: 0,
          explanation: "Overflow Flag (OF) มีหน้าที่เตือนเมื่อเกิด Signed Arithmetic Overflow ซึ่งหมายถึงผลลัพธ์เกินช่วงความจุที่ Signed Data Type นั้นจะรับได้"
        }
      ]
    },
    {
      id: "asm-4",
      title: "โครงสร้างควบคุม, การเปรียบเทียบ และการกระโดดเงื่อนไข (Control Flow & Branching)",
      description: "สร้างลูปและเงื่อนไข If-Else ในระดับ Assembly ด้วยคำสั่ง CMP, TEST, JMP, และ Conditional Jumps (JE, JNE, JG, JL, JA, JB) พร้อมวิเคราะห์ Branch Prediction",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การควบคุมทิศทางการทำงาน และการกระโดดตามเงื่อนไข (Control Flow & Branching)

ในภาษา Assembly ไม่มีคีย์เวิร์ด \`if\`, \`else\`, \`while\`, หรือ \`for\` โครงสร้างการตัดสินใจทั้งหมดเกิดจากการรวมกันของ **คำสั่งเปรียบเทียบ (Compare/Test)** ร่วมกับ **คำสั่งกระโดด (Jump Instructions)**

---

## 1. คำสั่ง CMP และ TEST

### คำสั่ง CMP (Compare):
- ไวยากรณ์: \`cmp op1, op2\`
- การทำงานภายใน: ทำการ **ลบแบบจำลอง (\`op1 - op2\`)** เพื่อปรับแต่งบิตใน \`RFLAGS\` (ZF, SF, CF, OF) แต่ **ไม่บันทึกผลลัพธ์ลงใน op1** ทำให้ค่าเดิมไม่สูญหาย

### คำสั่ง TEST (Logical Compare):
- ไวยากรณ์: \`test op1, op2\`
- การทำงานภายใน: ทำการ **AND ทางตรรกศาสตร์ (\`op1 & op2\`)** เพื่อปรับแต่งแฟล็ก (ZF, SF) โดยไม่บันทึกผลลัพธ์
- นิยมใช้มากที่สุดในการตรวจสอบว่าตัวแปรเป็น 0 หรือไม่: \`test rax, rax\` (ถ้า rax เป็น 0 จะทำให้ Zero Flag = 1 ทันที)

---

## 2. ตารางคำสั่งกระโดดตามเงื่อนไข (Conditional Jumps)

การเลือกคำสั่งกระโดดจะต้องแยกความแตกต่างระหว่าง **Signed** และ **Unsigned**:

| คำสั่งกระโดด | ความหมาย | เงื่อนไขใน RFLAGS | ชนิดข้อมูลที่เหมาะสม |
|---|---|---|---|
| **JE / JZ** | Jump if Equal / Jump if Zero | \`ZF = 1\` | ทั้งหมด |
| **JNE / JNZ** | Jump if Not Equal / Not Zero | \`ZF = 0\` | ทั้งหมด |
| **JG / JNLE** | Jump if Greater (มากกว่า) | \`ZF = 0 and SF = OF\` | **Signed Numbers** |
| **JGE / JNL** | Jump if Greater or Equal | \`SF = OF\` | **Signed Numbers** |
| **JL / JNGE** | Jump if Less (น้อยกว่า) | \`SF != OF\` | **Signed Numbers** |
| **JLE / JNG** | Jump if Less or Equal | \`ZF = 1 or SF != OF\` | **Signed Numbers** |
| **JA / JNBE** | Jump if Above (สูงกว่า) | \`CF = 0 and ZF = 0\` | **Unsigned Numbers** |
| **JAE / JNB** | Jump if Above or Equal | \`CF = 0\` | **Unsigned Numbers** |
| **JB / JNAE** | Jump if Below (ต่ำกว่า) | \`CF = 1\` | **Unsigned Numbers** |
| **JBE / JNA** | Jump if Below or Equal | \`CF = 1 or ZF = 1\` | **Unsigned Numbers** |

---

## 3. การสร้างลูปประสิทธิภาพสูง (Loop Construct Patterns)

\`\`\`
       C Code:                           Modern Assembly Pattern:
------------------------          ----------------------------------------
int sum = 0;                             xor eax, eax        ; sum = 0
for (int i = 10; i > 0; i--) {           mov ecx, 10         ; counter = 10
    sum += i;                     .loop_start:
}                                        add eax, ecx        ; sum += counter
                                         dec ecx             ; counter--
                                         jnz .loop_start     ; กระโดดกลับถ้า ecx != 0
\`\`\`

> **เกร็ดเทคนิค:** คำสั่งโบราณ \`loop label\` มักจะทำงานช้ากว่าคำสั่ง \`dec ecx; jnz label\` บนซีพียู Intel/AMD ยุคใหม่ คอมไพเลอร์จึงไม่ใช้คำสั่ง loop อีกต่อไป`,
      codeExample: `; ==============================================================================
; โปรแกรม: 04_branching_and_loops.asm
; สาธิต: การสร้างลูปหาผลรวมตัวเลข 1 ถึง 100 และการแยกเงื่อนไข If-Else
; ==============================================================================

section .data
    msg_even db "Loop Result: Even Number!", 10
    msg_even_len equ $ - msg_even

    msg_odd  db "Loop Result: Odd Number!", 10
    msg_odd_len equ $ - msg_odd

section .text
    global _start

_start:
    ; --------------------------------------------------------------------------
    ; ขั้นตอนที่ 1: วนลูปบวกเลข 1 ถึง 100 (1 + 2 + 3 + ... + 100 = 5050)
    ; --------------------------------------------------------------------------
    xor rax, rax          ; rax = 0 (ตัวสะสมผลรวม sum)
    mov rcx, 1            ; rcx = 1 (ตัวนับดัชนี i)

.sum_loop:
    add rax, rcx          ; sum += i
    inc rcx               ; i++
    cmp rcx, 100          ; ตรวจสอบว่า i ถึง 100 หรือยัง
    jle .sum_loop         ; ถ้า i <= 100 ให้กระโดดวนซ้ำกลับไปที่ .sum_loop

    ; --------------------------------------------------------------------------
    ; ขั้นตอนที่ 2: ตรวจสอบเงื่อนไขว่าผลรวมที่ได้เป็นเลขคู่หรือเลขคี่
    ; ใช้คำสั่ง TEST ตรวจสอบบิตที่ 0 (บิตต่ำสุด ถ้าเป็น 0 = คู่, ถ้าเป็น 1 = คี่)
    ; --------------------------------------------------------------------------
    test rax, 1
    jnz .is_odd           ; ถ้าบิตต่ำสุดเป็น 1 ให้กระโดดไปส่วนเลขคี่

.is_even:
    ; พิมพ์ข้อความว่าเป็นเลขคู่
    mov rax, 1
    mov rdi, 1
    mov rsi, msg_even
    mov rdx, msg_even_len
    syscall
    jmp .exit_program     ; กระโดดข้ามบล็อกเลขคี่ไปยังจุดจบโปรแกรม

.is_odd:
    ; พิมพ์ข้อความว่าเป็นเลขคี่
    mov rax, 1
    mov rdi, 1
    mov rsi, msg_odd
    mov rdx, msg_odd_len
    syscall

.exit_program:
    mov rax, 60           ; sys_exit
    xor rdi, rdi          ; exit code 0
    syscall`,
      challenge: "เขียนโปรแกรม Assembly ค้นหาตัวเลขที่มีค่ามากที่สุด (Maximum Value) ในอาร์เรย์จำนวนเต็มขนาด 64 บิต โดยวนลูปเปรียบเทียบทีละตัวและอัปเดตค่า Max",
      quiz: [
        {
          question: "คำสั่ง 'test rax, rax' มีการทำงานภายในอย่างไรและนิยมใช้เพื่อจุดประสงค์ใด?",
          options: [
            "ทำการ AND ทางตรรกศาสตร์ระหว่าง rax กับตัวเอง เพื่อเช็คว่า rax มีค่าเป็น 0 หรือไม่ (ตั้งค่า Zero Flag)",
            "ทำการเปรียบเทียบว่า rax มีขนาดกี่บิต",
            "สุ่มสร้างตัวเลขขึ้นมาทดสอบความเร็วของ CPU",
            "ตรวจสอบว่า rax เป็นตัวแปรประเภท String หรือไม่"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง test ทำการ bitwise AND ระหว่างสองโอเปอแรนด์โดยไม่บันทึกผล การทำ test rax, rax หาก rax เป็น 0 ผลลัพธ์จะเป็น 0 ทำให้ Zero Flag (ZF) กลายเป็น 1 เป็นวิธีที่มีประสิทธิภาพสูงสุดในการตรวจเช็คค่า Null/Zero"
        },
        {
          question: "หากต้องการเปรียบเทียบตัวเลขที่มีเครื่องหมาย (Signed Numbers) แล้วกระโดดเมื่อตัวแรก 'มากกว่า' ตัวที่สอง ต้องใช้คำสั่งกระโดดข้อใด?",
          options: ["JG (Jump if Greater)", "JA (Jump if Above)", "JB (Jump if Below)", "JGE (Jump if Greater or Equal)"],
          correctAnswer: 0,
          explanation: "ใน x86-64 คำสั่งตระกูล Greater/Less (JG, JL, JGE, JLE) ใช้สำหรับ Signed Numbers ในขณะที่คำสั่งตระกูล Above/Below (JA, JB, JAE, JBE) ใช้สำหรับ Unsigned Numbers"
        },
        {
          question: "สิ่งใดที่ทำให้คำสั่ง 'dec ecx; jnz loop_label' มีประสิทธิภาพสูงกว่าคำสั่ง 'loop loop_label' บนซีพียูสมัยใหม่?",
          options: [
            "คำสั่ง dec + jnz สามารถถูกแยกออกเป็น Micro-ops ที่ซีพียู Out-of-Order สามารถประมวลผลคู่ขนานผ่าน Branch Predictor ได้ดีกว่า",
            "คำสั่ง loop ใช้เวลา 100 รอบสัญญาณนาฬิกาเสมอ",
            "คำสั่ง loop ไม่สามารถรันบนระบบปฏิบัติการ 64-bit ได้",
            "คำสั่ง dec บังคับให้ฮาร์ดแวร์โอเวอร์คล็อกความเร็วขึ้น"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง 'loop' เป็นคำสั่งแบบ Complex Instruction ในยุค CISC ดั้งเดิมซึ่งฮาร์ดแวร์ไม่ได้ปรับแต่งวงจรให้เร็วเท่ากับคู่คำสั่งพื้นฐาน 'dec + jnz' ที่ทำงานได้อย่างสมบูรณ์แบบบน Macro-fusion pipeline"
        }
      ]
    },
    {
      id: "asm-5",
      title: "Call Stack, Stack Frame, PUSH/POP และ Calling Conventions (System V vs Microsoft x64)",
      description: "ทำความเข้าใจโครงสร้าง Call Stack, การเจริญเติบโตของหน่วยความจำ, Stack Alignment 16-byte, Function Prologue/Epilogue, System V AMD64 ABI และ Shadow Space ของ Windows",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Call Stack, Stack Frame และมาตรฐานการเรียกฟังก์ชัน (Calling Conventions)

หัวใจสำคัญของการทำงานร่วมกันระหว่างโปรแกรมที่เขียนด้วย Assembly, C, C++, Rust และระบบปฏิบัติการ คือการปฏิบัติตามมาตรฐานการส่งผ่านพารามิเตอร์และการจัดการ Stack Frame (Application Binary Interface - ABI)

---

## 1. ธรรมชาติของ Call Stack ในสถาปัตยกรรม x86-64

- **ทิศทางการเติบโต:** Stack ใน x86-64 จะ **เติบโตจากแอดเดรสสูงลงสู่แอดเดรสต่ำ (Grows Downward)**
- **RSP (Stack Pointer):** ชี้อยู่ที่แอดเดรสต่ำสุดของข้อมูลล่าสุดบน Stack เสมอ
- **PUSH reg:** ลดค่า \`RSP\` ลง 8 ไบต์ (\`sub rsp, 8\`) แล้วเขียนข้อมูลลงในตำแหน่ง \`[rsp]\`
- **POP reg:** อ่านข้อมูลจาก \`[rsp]\` มาเก็บในรีจิสเตอร์ แล้วเพิ่มค่า \`RSP\` ขึ้น 8 ไบต์ (\`add rsp, 8\`)

\`\`\`
High Memory Address (0x7FFFFFFF)
+------------------------------------+
|  Return Address (บันทึกโดย CALL)     |
+------------------------------------+
|  Old RBP (Saved Frame Pointer)     |  <-- RBP (Base Pointer) ชี้ที่นี่
+------------------------------------+
|  Local Variable 1 (-8[rbp])        |
+------------------------------------+
|  Local Variable 2 (-16[rbp])       |  <-- RSP (Stack Pointer) ชี้ที่จุดต่ำสุด
+------------------------------------+
Low Memory Address (0x70000000)      [ทิศทางการเติบโตของ Stack ลงล่าง]
\`\`\`

---

## 2. โครงสร้าง Function Prologue และ Epilogue

ฟังก์ชันมาตรฐานทุกฟังก์ชันจะต้องจัดตั้งกรอบ Stack Frame ของตนเอง:

\`\`\`asm
my_function:
    ; === 1. Function Prologue ===
    push rbp              ; บันทึก Frame Pointer ของฟังก์ชันผู้เรียก (Caller)
    mov rbp, rsp          ; ตั้ง Frame Pointer ใหม่สำหรับฟังก์ชันปัจจุบัน
    sub rsp, 32           ; จองพื้นที่ 32 ไบต์สำหรับ Local Variables (และคง Stack Alignment)

    ; === 2. Function Body ===
    mov qword [rbp - 8], 100   ; ใช้งาน Local Variable ตัวที่ 1

    ; === 3. Function Epilogue ===
    mov rsp, rbp          ; คืนพื้นที่ Local Variables
    pop rbp               ; กู้คืน Frame Pointer เดิม
    ret                   ; ดึง Return Address จาก Stack แล้วกระโดดกลับผู้เรียก
\`\`\`

---

## 3. เปรียบเทียบ Calling Conventions (System V AMD64 vs Microsoft x64)

| หัวข้อ | System V AMD64 ABI (Linux, macOS, BSD) | Microsoft x64 (Windows OS) |
|---|---|---|
| **พารามิเตอร์ที่เป็น Integer/Pointer** | **RDI, RSI, RDX, RCX, R8, R9** (ตัวที่ 1 ถึง 6) | **RCX, RDX, R8, R9** (ตัวที่ 1 ถึง 4) |
| **พารามิเตอร์ Floating-point** | XMM0 ถึง XMM7 | XMM0 ถึง XMM3 |
| **Shadow Space (Home Space)** | **ไม่มี** | **ต้องจอง 32 ไบต์บน Stack เสมอก่อน CALL** |
| **Red Zone** | 128 ไบต์ใต้ RSP (ฟังก์ชันสามารถใช้ได้โดยไม่ต้องลบ RSP) | **ไม่มี Red Zone เด็ดขาด** |
| **Stack Alignment** | **16 ไบต์** ก่อนสั่งคำสั่ง \`CALL\` | **16 ไบต์** ก่อนสั่งคำสั่ง \`CALL\` |
| **Return Value** | RAX (และ RDX หากขนาด 128-bit) | RAX |`,
      codeExample: `; ==============================================================================
; โปรแกรม: 05_calling_conventions_and_stack.asm
; สาธิต: ฟังก์ชันบวกเลข 6 อาร์กิวเมนต์ตาม System V ABI พร้อม Stack Frame & Alignment
; ==============================================================================

section .data
    result_fmt db "Calculated sum of 6 arguments = Success", 10
    result_len equ $ - result_fmt

section .text
    global _start

; ------------------------------------------------------------------------------
; ฟังก์ชัน: calculate_sum_6
; พารามิเตอร์ตาม System V ABI:
;   RDI = arg1, RSI = arg2, RDX = arg3, RCX = arg4, R8 = arg5, R9 = arg6
; ส่งคืนค่า:
;   RAX = ผลรวมทั้งหมด
; ------------------------------------------------------------------------------
calculate_sum_6:
    ; Function Prologue
    push rbp
    mov rbp, rsp
    sub rsp, 16                 ; จองพื้นที่ 16 ไบต์ (รักษา Alignment 16-byte)

    ; คำนวณผลรวมของอาร์กิวเมนต์ทั้ง 6 ตัว
    mov rax, rdi                ; rax = arg1
    add rax, rsi                ; rax += arg2
    add rax, rdx                ; rax += arg3
    add rax, rcx                ; rax += arg4
    add rax, r8                 ; rax += arg5
    add rax, r9                 ; rax += arg6

    ; บันทึกผลลัพธ์ลง Local Variable บน Stack เพื่อสาธิต
    mov [rbp - 8], rax

    ; Function Epilogue
    mov rax, [rbp - 8]          ; โหลดผลลัพธ์กลับเข้า RAX สำหรับ return
    mov rsp, rbp
    pop rbp
    ret

_start:
    ; จัดเตรียมส่ง 6 อาร์กิวเมนต์: 10, 20, 30, 40, 50, 60 (ผลรวม = 210)
    mov rdi, 10                 ; arg1
    mov rsi, 20                 ; arg2
    mov rdx, 30                 ; arg3
    mov rcx, 40                 ; arg4
    mov r8, 50                  ; arg5
    mov r9, 60                  ; arg6

    call calculate_sum_6        ; เรียกฟังก์ชัน ผลลัพธ์จะกลับมาอยู่ใน RAX (210)

    ; ตรวจสอบผลลัพธ์ว่าเท่ากับ 210 หรือไม่
    cmp rax, 210
    jne .error_exit

    ; พิมพ์ข้อความสำเร็จ
    mov rax, 1
    mov rdi, 1
    mov rsi, result_fmt
    mov rdx, result_len
    syscall

    mov rax, 60
    xor rdi, rdi                ; Exit Code 0
    syscall

.error_exit:
    mov rax, 60
    mov rdi, 1                  ; Exit Code 1 (Error)
    syscall`,
      challenge: "เขียนฟังก์ชัน recursive_factorial คำนวณแฟกทอเรียล (N!) ด้วยการเรียกตัวเองแบบ Recursive โดยจัดการ Stack Frame และ Return Address อย่างถูกต้อง",
      quiz: [
        {
          question: "ตามข้อกำหนด System V AMD64 ABI (Linux/macOS) สแตกจะต้องถูก Align ที่ขนาดกี่ไบต์ก่อนที่จะเรียกคำสั่ง 'CALL'?",
          options: [
            "16 ไบต์ (16-byte Alignment)",
            "8 ไบต์",
            "32 ไบต์",
            "ไม่จำเป็นต้อง Align"
          ],
          correctAnswer: 0,
          explanation: "ข้อกำหนด ABI บังคับว่าสแตกพอยน์เตอร์ (RSP) จะต้องลงท้ายด้วยแอดเดรสที่หารด้วย 16 ลงตัวก่อนคำสั่ง CALL เพื่อให้คำสั่งชุดเวกเตอร์ SIMD/SSE/AVX สามารถเข้าถึงหน่วยความจำได้อย่างปลอดภัยโดยไม่เกิด Crash"
        },
        {
          question: "แนวคิด 'Shadow Space' (ขนาด 32 ไบต์) เป็นข้อกำหนดเฉพาะของ Calling Convention ใด?",
          options: [
            "Microsoft x64 Calling Convention (Windows)",
            "System V AMD64 ABI (Linux)",
            "ARM64 AAPCS",
            "MIPS 32-bit ABI"
          ],
          correctAnswer: 0,
          explanation: "บน Windows x64 ผู้เรียก (Caller) จะต้องลดค่า RSP ลงอย่างน้อย 32 ไบต์ (Shadow Space / Home Space) เพื่อให้ฟังก์ชันผู้ถูกเรียกสามารถบันทึกค่า RCX, RDX, R8, R9 ลงสแตกได้หากต้องการ"
        },
        {
          question: "คำสั่ง 'CALL' และ 'RET' มีพฤติกรรมการทำงานภายในร่วมกับ Stack อย่างไร?",
          options: [
            "CALL จะทำการ PUSH แอดเดรสคำสั่งถัดไป (Return Address) ลงสแตก แล้วกระโดดไป ส่วน RET จะ POP แอดเดรสนั้นกลับมาใส่ RIP",
            "CALL จะคัดลอกรีจิสเตอร์ทั้งหมดลงฮาร์ดดิสก์ ส่วน RET จะโหลดกลับมา",
            "CALL ทำหน้าที่กระโดดเฉยๆ ส่วน RET จะล้างข้อมูลในแรมทั้งหมด",
            "CALL จะเรียกใช้เคอร์เนลของระบบปฏิบัติการเสมอ"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง CALL จะลดค่า RSP ลง 8 ไบต์และบันทึกแอดเดรสคำสั่งถัดไป (RIP) ลงบนสแตก เมื่อฟังก์ชันทำงานเสร็จสิ้น คำสั่ง RET จะดึงแอดเดรสนั้นออกจากสแตกแล้วโหลดกลับเข้าสู่ RIP เพื่อกลับสู่จุดเดิม"
        }
      ]
    },
    {
      id: "asm-6",
      title: "การเรียกใช้ System Calls ของระบบปฏิบัติการ (Linux POSIX Syscalls & C Interop)",
      description: "ทำความเข้าใจเส้นแบ่งระหว่าง Ring 3 (User Space) และ Ring 0 (Kernel Space), ตารางคำสั่ง Syscall ของ Linux 64-bit, การเปิด/อ่าน/เขียนไฟล์, และการลิงก์ใช้งาน C Standard Library",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# การเรียกใช้งาน System Calls และการเชื่อมต่อภาษา C (Syscalls & C Interoperability)

โปรแกรมใน User Mode (Ring 3) ไม่สามารถสั่งการฮาร์ดแวร์โดยตรงได้ หากต้องการพิมพ์ข้อความ, จองหน่วยความจำ, หรืออ่านไฟล์ จะต้องทำการสลับโหมดผ่าน **System Call (คำสั่ง \`syscall\`)** เข้าสู่ Kernel Mode (Ring 0)

---

## 1. กลไกการทำงานของคำสั่ง SYSCALL

ในยุค x86 32-bit ดั้งเดิม โปรแกรมจะใช้คำสั่งซอฟต์แวร์อินเทอร์รัปต์ \`int 0x80\` แต่ในยุค x86-64 ซีพียูมีคำสั่งพิเศษชื่อ **\`syscall\`** (และ \`sysret\`) ที่สลับโหมดเข้าสู่เคอร์เนลได้เร็วกว่าหลายเท่าผ่าน Model-Specific Registers (MSR)

### ตาราง Linux x86-64 System Calls ที่สำคัญ:
| Syscall Number (\`RAX\`) | ชื่อฟังก์ชันเคอร์เนล | อาร์กิวเมนต์ที่ 1 (\`RDI\`) | อาร์กิวเมนต์ที่ 2 (\`RSI\`) | อาร์กิวเมนต์ที่ 3 (\`RDX\`) |
|---|---|---|---|---|
| **0** | \`sys_read\` | File Descriptor (\`fd\`) | Buffer Pointer (\`char*\`) | Count (\`size_t\`) |
| **1** | \`sys_write\` | File Descriptor (\`fd\`) | Buffer Pointer (\`char*\`) | Count (\`size_t\`) |
| **2** | \`sys_open\` | File Path (\`const char*\`) | Flags (\`int\`) | Mode (\`umode_t\`) |
| **3** | \`sys_close\` | File Descriptor (\`fd\`) | - | - |
| **9** | \`sys_mmap\` | Address Hint | Length | Protection Flags |
| **60** | \`sys_exit\` | Error Code (\`int\`) | - | - |

---

## 2. การเชื่อมต่อ Assembly กับ C Standard Library (Libc Interop)

เราสามารถเขียนฟังก์ชัน Assembly และเรียกใช้ฟังก์ชันมาตรฐานของภาษา C ได้ เช่น \`printf\`, \`malloc\`, \`free\`, \`scanf\`:
1. ประกาศคำสั่ง \`extern printf\`, \`extern exit\` ในเซกชันต้นไฟล์
2. ส่งพารามิเตอร์ตามมาตรฐาน System V AMD64 ABI: \`RDI\` (Format String), \`RSI\` (ตัวแปรที่ 1), \`RDX\` (ตัวแปรที่ 2)
3. **กฎสำคัญสำหรับคำสั่ง Variadic Functions (เช่น \`printf\`):** จะต้องเซ็ตค่า **\`AL = 0\`** เพื่อบอกให้ printf ทราบว่าไม่มีการส่งเวกเตอร์รีจิสเตอร์ XMM มาด้วย
4. คอมไพล์ด้วย \`gcc\` แทนที่จะใช้ \`ld\` ตรงๆ เพื่อให้ C Runtime (crt1.o) ช่วยลิงก์ Libc เข้ามาอัตโนมัติ`,
      codeExample: `; ==============================================================================
; โปรแกรม: 06_linux_file_io_syscalls.asm
; สาธิต: การสร้างไฟล์ เขียนข้อความลงไฟล์ และปิดไฟล์ด้วย Native Linux Syscalls (Zero Libc)
; ==============================================================================

section .data
    filename    db "output_asm_demo.txt", 0       ; สตริงชื่อไฟล์จบด้วย Null Byte (0)
    file_content db "Welcome to Bare-Metal Low-Level Programming with NASM Assembly!", 10
    content_len equ $ - file_content

    success_msg db "File created and written successfully via Kernel Syscalls!", 10
    success_len equ $ - success_msg

    ; Linux Open Flags: O_WRONLY(1) | O_CREAT(64) | O_TRUNC(512) = 577 (0x241)
    O_CREAT_WRONLY_TRUNC equ 577
    FILE_PERMS equ 0644o                         ; สิทธิ์ไฟล์ rw-r--r-- (Octal)

section .bss
    file_descriptor resq 1                       ; ตัวแปรเก็บ File Descriptor ที่ได้จาก sys_open

section .text
    global _start

_start:
    ; --------------------------------------------------------------------------
    ; 1. sys_open (Syscall หมายเลข 2): เปิดหรือสร้างไฟล์ใหม่
    ;   RAX = 2 (sys_open)
    ;   RDI = ที่อยู่ชื่อไฟล์ (filename)
    ;   RSI = Flags (O_WRONLY | O_CREAT | O_TRUNC)
    ;   RDX = Mode/Permissions (0644)
    ; --------------------------------------------------------------------------
    mov rax, 2                  ; sys_open
    mov rdi, filename           ; ที่อยู่ชื่อไฟล์
    mov rsi, O_CREAT_WRONLY_TRUNC
    mov rdx, FILE_PERMS
    syscall

    ; ตรวจสอบว่าเปิดไฟล์สำเร็จหรือไม่ (ถ้าติดลบแสดงว่า Error)
    cmp rax, 0
    jl .exit_error
    mov [file_descriptor], rax  ; บันทึก File Descriptor

    ; --------------------------------------------------------------------------
    ; 2. sys_write (Syscall หมายเลข 1): เขียนเนื้อหาลงในไฟล์ที่เปิดไว้
    ;   RAX = 1 (sys_write)
    ;   RDI = file descriptor ที่ได้จาก sys_open
    ;   RSI = ที่อยู่ข้อมูล (file_content)
    ;   RDX = ขนาดข้อมูล (content_len)
    ; --------------------------------------------------------------------------
    mov rax, 1                  ; sys_write
    mov rdi, [file_descriptor]  ; fd
    mov rsi, file_content
    mov rdx, content_len
    syscall

    ; --------------------------------------------------------------------------
    ; 3. sys_close (Syscall หมายเลข 3): ปิด File Descriptor
    ;   RAX = 3 (sys_close)
    ;   RDI = file descriptor
    ; --------------------------------------------------------------------------
    mov rax, 3                  ; sys_close
    mov rdi, [file_descriptor]
    syscall

    ; 4. พิมพ์ข้อความยืนยันออก Terminal (stdout = 1)
    mov rax, 1
    mov rdi, 1
    mov rsi, success_msg
    mov rdx, success_len
    syscall

    ; 5. sys_exit (Syscall หมายเลข 60)
    mov rax, 60
    xor rdi, rdi                ; Success exit 0
    syscall

.exit_error:
    mov rax, 60
    mov rdi, 1                  ; Exit with error code 1
    syscall`,
      challenge: "เขียนโปรแกรม Assembly อ่านเนื้อหาจากไฟล์ข้อความที่มีอยู่แล้วด้วย sys_open และ sys_read แล้วพิมพ์เนื้อหาที่อ่านได้ออกทางหน้าจอ Terminal (stdout)",
      quiz: [
        {
          question: "เหตุใดเมื่อเรียกฟังก์ชันประเภท Variadic ในภาษา C เช่น 'printf' จากโค้ด Assembly จึงต้องกำหนดค่า AL = 0 ก่อนสั่ง CALL?",
          options: [
            "เพื่อบอกฟังก์ชัน printf ว่าไม่มีการส่งพารามิเตอร์แบบ Floating-point ในรีจิสเตอร์ตระกูล XMM",
            "เพื่อรีเซ็ตสถานะข้อความไมโครโฟน",
            "เพื่อป้องกันไม่ให้หน้าจอ Terminal ดับ",
            "เป็นรหัสผ่านความปลอดภัยของ GCC Compiler"
          ],
          correctAnswer: 0,
          explanation: "ตามข้อกำหนด System V AMD64 ABI สำหรับฟังก์ชันที่มี Variable Arguments (เช่น printf) รีจิสเตอร์ AL จะต้องเก็บจำนวนของ Vector/XMM Registers ที่ใช้ส่งพารามิเตอร์ หากไม่มีการส่ง Floating-point จะต้องตั้ง AL = 0 เสมอ"
        },
        {
          question: "ในสถาปัตยกรรม Linux 64-bit การส่งคำสั่งเพื่อกระโดดเข้าสู่เคอร์เนล (Kernel Space) ใช้คำสั่งใด?",
          options: ["syscall", "int 0x80", "kernel_exec", "trap 0"],
          correctAnswer: 0,
          explanation: "ในโหมด 64-bit ของสถาปัตยกรรม x86-64 คำสั่ง 'syscall' คือคำสั่งทางการที่ฮาร์ดแวร์เตรียมไว้สำหรับการทำ Fast System Call แทนที่คำสั่งซอฟต์แวร์อินเทอร์รัปต์รุ่นเก่าอย่าง 'int 0x80'"
        },
        {
          question: "ค่า File Descriptor (FD) หมายเลข 0, 1, และ 2 ในระบบปฏิบัติการ POSIX/Linux หมายถึงช่องทางใดตามลำดับ?",
          options: [
            "0 = stdin, 1 = stdout, 2 = stderr",
            "0 = stdout, 1 = stdin, 2 = network",
            "0 = harddisk, 1 = display, 2 = printer",
            "0 = kernel, 1 = user, 2 = root"
          ],
          correctAnswer: 0,
          explanation: "มาตรฐาน POSIX กำหนดให้ File Descriptor เริ่มต้นที่ระบบปฏิบัติการเปิดให้ทุกโปรเซสเสมอคือ 0 (Standard Input), 1 (Standard Output), และ 2 (Standard Error)"
        }
      ]
    },
    {
      id: "asm-7",
      title: "คำสั่งชุดเวกเตอร์ความเร็วสูง SIMD และ AVX (Single Instruction Multiple Data & Vectorization)",
      description: "ปลดล็อกขีดสุดความเร็ว CPU: วิวัฒนาการจาก SSE (128-bit XMM) สู่ AVX/AVX2 (256-bit YMM) และ AVX-512, Data Alignment, และการประมวลผล Parallel Matrix Math",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# การประมวลผลเวกเตอร์ความเร็วสูง SIMD และชุดคำสั่ง AVX/AVX2

ในงานประมวลผลระดับสูง เช่น ปัญญาประดิษฐ์ (Deep Learning Matrix Multiplication), การเรนเดอร์กราฟิกเกม 3D, วิทยาการเข้ารหัสลับ (Cryptography), และการประมวลผลภาพ การประมวลผลตัวเลขทีละตัว (Scalar Processing) ถือว่าช้าเกินไป ซีพียูจึงมีหน่วยประมวลผล **SIMD (Single Instruction, Multiple Data)**

---

## 1. ลำดับวิวัฒนาการของรีจิสเตอร์เวกเตอร์

1. **MMX:** รีจิสเตอร์ 64 บิต (MM0 - MM7) ในยุคแรกเริ่ม
2. **SSE (Streaming SIMD Extensions):** เพิ่มรีจิสเตอร์ **128 บิต (\`XMM0 - XMM15\`)** สามารถประมวลผล \`float\` 32-bit ได้พร้อมกัน 4 ตัว หรือ \`double\` 64-bit ได้พร้อมกัน 2 ตัวใน 1 สัญญาณนาฬิกา
3. **AVX / AVX2 (Advanced Vector Extensions):** ขยายรีจิสเตอร์เป็น **256 บิต (\`YMM0 - YMM15\`)** ประมวลผล \`float\` ได้พร้อมกัน **8 ตัว** หรือ \`double\` ได้พร้อมกัน **4 ตัว**
4. **AVX-512:** ขยายรีจิสเตอร์เป็น **512 บิต (\`ZMM0 - ZMM31\`)** ประมวลผล \`float\` ได้พร้อมกัน **16 ตัว** ในคำสั่งเดียว!

\`\`\`
ZMM0 (512-bit) [................................................................]
YMM0 (256-bit) [................................]
XMM0 (128-bit) [................]
\`\`\`

---

## 2. Aligned vs Unaligned Memory Access
- **Aligned Access (\`vmovaps\`):** ข้อมูลในแรมต้องถูกจัดเรียงอยู่ที่แอดเดรสที่หารด้วย 16 หรือ 32 ลงตัว (16-byte หรือ 32-byte Alignment) ให้ประสิทธิภาพสูงสุด หากแอดเดรสไม่ Align ซีพียูจะเกิดการ Crash (General Protection Fault)
- **Unaligned Access (\`vmovups\`):** ยอมให้อ่านข้อมูลจากแอดเดรสใดๆ ได้อย่างปลอดภัย แต่บนซีพียูรุ่นเก่าอาจมีค่าใช้จ่ายความเร็วเล็กน้อย

---

## 3. รูปแบบคำสั่ง SIMD ที่พบบ่อย
- **\`vaddps ymm0, ymm1, ymm2\`:** บวกเวกเตอร์ Floating-point 32-bit จำนวน 8 คู่พร้อมกัน
- **\`vmulps ymm0, ymm1, ymm2\`:** คูณเวกเตอร์ Floating-point 32-bit จำนวน 8 คู่พร้อมกัน
- **\`vfmadd231ps ymm0, ymm1, ymm2\`:** Fused Multiply-Add (FMA) ทำการคูณและบวกในขั้นตอนเดียว: $\\text{YMM0} = (\\text{YMM1} \\times \\text{YMM2}) + \\text{YMM0}$ ด้วยความเร็วสูงสุด`,
      codeExample: `; ==============================================================================
; โปรแกรม: 07_simd_avx2_vector_addition.asm
; สาธิต: การบวกอาร์เรย์ Float 8 ตัวพร้อมกันใน 1 คำสั่งด้วย AVX/AVX2 (YMM Registers)
; คอมไพล์: nasm -f elf64 07_simd_avx2_vector_addition.asm -o simd.o && ld simd.o -o simd
; ==============================================================================

section .data
    ; จัดเรียงข้อมูลให้ตรงกับขอบเขต 32 ไบต์ (32-byte Alignment สำหรับ AVX 256 บิต)
    align 32
    vector_a dd 1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5    ; 8 Single-precision Floats
    align 32
    vector_b dd 10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0

    msg_simd db "AVX2 SIMD Vector Parallel Execution Complete!", 10
    msg_len  equ $ - msg_simd

section .bss
    align 32
    vector_result resd 8         ; จองพื้นที่ 32 ไบต์สำหรับผลลัพธ์ 8 Floats

section .text
    global _start

_start:
    ; --------------------------------------------------------------------------
    ; 1. โหลดข้อมูล 256 บิต (8 Floats) จากแรมเข้าสู่รีจิสเตอร์ YMM0 และ YMM1
    ; ใช้ vmovaps (Vector Move Aligned Packed Single-Precision)
    ; --------------------------------------------------------------------------
    vmovaps ymm0, [vector_a]     ; โหลด 8 Floats แรกเข้า YMM0
    vmovaps ymm1, [vector_b]     ; โหลด 8 Floats ที่สองเข้า YMM1

    ; --------------------------------------------------------------------------
    ; 2. ประมวลผลการบวกเวกเตอร์ 8 ตัวพร้อมกันใน 1 สัญญาณนาฬิกา!
    ; ymm2 = ymm0 + ymm1
    ; ผลลัพธ์: [11.5, 22.5, 33.5, 44.5, 55.5, 66.5, 77.5, 88.5]
    ; --------------------------------------------------------------------------
    vaddps ymm2, ymm0, ymm1

    ; --------------------------------------------------------------------------
    ; 3. บันทึกผลลัพธ์ 256 บิตจาก YMM2 กลับลงในแรมที่ vector_result
    ; --------------------------------------------------------------------------
    vmovaps [vector_result], ymm2

    ; ล้างสถานะ AVX เพื่อป้องกันปัญหาความเข้ากันได้กับคำสั่ง legacy SSE
    vzeroupper

    ; พิมพ์ข้อความรายงานผล
    mov rax, 1
    mov rdi, 1
    mov rsi, msg_simd
    mov rdx, msg_len
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall`,
      challenge: "แก้ไขโปรแกรมให้ใช้คำสั่ง vmulps ในการคำนวณการคูณเวกเตอร์แบบ Element-wise พร้อมวัดรอบสัญญาณนาฬิกา CPU เทียบกับการวนลูปแบบดั้งเดิม 8 รอบ",
      quiz: [
        {
          question: "รีจิสเตอร์ตระกูล YMM ในชุดคำสั่ง AVX/AVX2 มีขนาดกี่บิต และสามารถบรรจุตัวเลข Single-Precision Float (32-bit) ได้พร้อมกันกี่ตัว?",
          options: [
            "ขนาด 256 บิต บรรจุตัวเลข Float ได้พร้อมกัน 8 ตัว",
            "ขนาด 128 บิต บรรจุตัวเลข Float ได้พร้อมกัน 4 ตัว",
            "ขนาด 512 บิต บรรจุตัวเลข Float ได้พร้อมกัน 16 ตัว",
            "ขนาด 64 บิต บรรจุตัวเลข Float ได้เพียง 2 ตัว"
          ],
          correctAnswer: 0,
          explanation: "รีจิสเตอร์ YMM ของ AVX มีขนาด 256 บิต เมื่อนำมาเก็บ Single-Precision Float ขนาด 32 บิต จะเก็บได้ $256 / 32 = 8$ ตัว ทำให้คำนวณเวกเตอร์ได้ 8 ช่องพร้อมกันในคำสั่งเดียว"
        },
        {
          question: "เหตุใดโปรแกรมเมอร์จึงควรใส่คำสั่ง 'vzeroupper' หลังจากเสร็จสิ้นการประมวลผลชุดคำสั่ง AVX/YMM?",
          options: [
            "เพื่อล้างสถานะครึ่งบนของรีจิสเตอร์ YMM ป้องกันไม่ให้เกิดอาการประสิทธิภาพลดลง (AVX-SSE Transition Penalty) เมื่อระบบกลับไปรันโค้ด SSE เก่า",
            "เพื่อปิดเครื่องคอมพิวเตอร์อย่างปลอดภัย",
            "เพื่อคืนหน่วยความจำแรมให้แก่ระบบปฏิบัติการ",
            "เพื่อบันทึกไฟล์แคชลงฮาร์ดดิสก์"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง vzeroupper ใช้เคลียร์ค่าบิต 128-255 ของรีจิสเตอร์ YMM ทั้งหมดเป็น 0 เพื่อป้องกันไม่ให้เกิดความล่าช้าหลายสิบรอบสัญญาณนาฬิกาเมื่อโปรแกรมมีการสลับไปเรียกใช้โค้ดหรือไลบรารีที่ยังใช้คำสั่ง SSE ดั้งเดิม"
        },
        {
          question: "คำสั่ง 'vmovaps' แตกต่างจาก 'vmovups' ในแง่มุมใด?",
          options: [
            "vmovaps ต้องการให้หน่วยความจำถูกจัดเรียง Align ตรงขอบเขต (Aligned) มิฉะนั้นจะเกิด Crash ส่วน vmovups รองรับหน่วยความจำที่ไม่ Align",
            "vmovaps ใช้งานได้เฉพาะระบบ 32-bit ส่วน vmovups ใช้กับ 64-bit",
            "vmovaps ใช้กับตัวเลขจำนวนเต็ม ส่วน vmovups ใช้กับทศนิยม",
            "ไม่มีความแตกต่างกันเป็นคำสั่งเดียวกัน"
          ],
          correctAnswer: 0,
          explanation: "ตัวอักษร 'a' ใน vmovaps ย่อมาจาก Aligned ซึ่งบังคับว่าแอดเดรสของหน่วยความจำจะต้องหารด้วย 16 หรือ 32 ลงตัว ในขณะที่ตัว 'u' ใน vmovups ย่อมาจาก Unaligned"
        }
      ]
    },
    {
      id: "asm-8",
      title: "วิศวกรรมย้อนรอยและการดีบักระดับไบนารี (Reverse Engineering, Disassembly & GDB)",
      description: "เรียนรู้การอ่าน Assembly ที่คอมไพล์มาจาก C/C++, การใช้ GDB/GEF ดีบักหน่วยความจำแบบสด, การทำ Reverse Engineering ไบนารีปิด, และการวิเคราะห์ช่องโหว่ Buffer Overflow",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# วิศวกรรมย้อนรอย และการดีบักไบนารีระดับลึก (Reverse Engineering & Binary Debugging)

วิศวกรรมย้อนรอย (Reverse Engineering) คือทักษะสูงสุดของการเขียนโปรแกรมระดับต่ำ ซึ่งจำเป็นอย่างยิ่งในงานความปลอดภัยไซเบอร์ (Malware Analysis, Vulnerability Research, Exploit Development) และการปรับแต่งประสิทธิภาพขั้นสุดยอด

---

## 1. การสร้างและอ่าน Disassembly

เมื่อคอมไพเลอร์แปลงภาษา C เป็น Machine Code เราสามารถสั่งให้คอมไพเลอร์แสดงโค้ด Assembly หรือถอดรหัสไฟล์ไบนารีที่ไม่มี Source Code กลับมาได้:

\`\`\`bash
# 1. คอมไพล์ไฟล์ C ให้เป็น Assembly รูปแบบ Intel Syntax
gcc -S -O2 -masm=intel program.c -o program.s

# 2. ถอดรหัสไบนารี Executable ที่คอมไพล์เสร็จแล้วด้วย objdump
objdump -d -M intel --no-show-raw-insn ./program
\`\`\`

---

## 2. ทักษะการใช้ GDB (GNU Debugger) & GEF ปฏิบัติการ

คำสั่งทรงพลังใน GDB สำหรับนักวิเคราะห์ระบบ:
- \`break main\` หรือ \`b *0x401050\`: ตั้งจุดหยุดการทำงาน (Breakpoint)
- \`run\` หรือ \`r\`: เริ่มรันโปรแกรม
- \`si\` (Step Instruction): สั่งรันก้าวหน้าไปทีละ 1 คำสั่ง Assembly (ก้าวข้ามเข้าไปใน Call)
- \`ni\` (Next Instruction): สั่งรันก้าวหน้าทีละ 1 คำสั่ง แต่ข้ามผ่านฟังก์ชัน Call
- \`info registers\` หรือ \`i r\`: ดูค่าของรีจิสเตอร์ทั้งหมดในปัจจุบัน
- \`x/16xg $rsp\`: ตรวจสอบหน่วยความจำ (Examine Memory) จำนวน 16 ก้อนแบบ 64-bit Hex ที่สแตกพอยน์เตอร์
- \`x/s 0x402000\`: อ่านค่าในหน่วยความจำเป็นข้อความสตริง

---

## 3. กายวิภาคของช่องโหว่ Buffer Overflow

เมื่อฟังก์ชันในภาษา C เรียกใช้คำสั่งที่ไม่ตรวจสอบความยาวสตริง เช่น \`gets()\` หรือ \`strcpy()\`:
1. ข้อมูลนำเข้าของผู้ใช้จะไหลล้นจาก Local Buffer บน Stack
2. ล้นไปทับ Saved RBP
3. **ล้นไปทับ Saved Return Address (RIP)!**
4. เมื่อฟังก์ชันสั่งคำสั่ง \`RET\` ซีพียูจะกระโดดไปทำงานที่แอดเดรสที่ถูกผู้โจมตีเขียนทับทันที (Control Flow Hijacking)

\`\`\`
+------------------------------------+
|  Target Return Address (RIP)       |  <-- ถูกเขียนทับด้วย Shellcode Address!
+------------------------------------+
|  Saved RBP                         |  <-- ถูกเขียนทับ
+------------------------------------+
|  Local Buffer [64 bytes]           |  <-- ข้อมูลผู้ใช้เกิน 64 ไบต์ไหลทะลักขึ้นไป
+------------------------------------+
\`\`\`

> **กลไกป้องกันในปัจจุบัน:** Modern Operating Systems จึงเพิ่มระบบป้องกัน **Stack Canaries (Stack Guard)**, **NX/DEP (Non-Executable Stack)**, และ **ASLR (Address Space Layout Randomization)** เพื่อต่อต้านการโจมตีลักษณะนี้`,
      codeExample: `; ==============================================================================
; โปรแกรม: 08_crackme_key_verification.asm
; สาธิต: ลอจิกการตรวจรหัสผ่านลับ (Crackme Challenge) สำหรับฝึกทำ Reverse Engineering
; ==============================================================================

section .data
    prompt_msg      db "=== CRACKME v1.0: Enter Secret Access Key ===", 10
    prompt_len      equ $ - prompt_msg

    access_granted  db "ACCESS GRANTED: Secret Flag = ITACADEMY{x86_64_m4st3r_r3v}", 10
    granted_len     equ $ - access_granted

    access_denied   db "ACCESS DENIED: Invalid Key! Try analyzing with GDB/Objdump.", 10
    denied_len      equ $ - access_denied

    ; รหัสผ่านที่ถูกเข้ารหัสแบบ XOR ด้วยคีย์ 0x5A
    ; ตัวอักษรจริง: 'A', 'S', 'M', '6', '4'
    ; 'A' (0x41) ^ 0x5A = 0x1B
    ; 'S' (0x53) ^ 0x5A = 0x09
    ; 'M' (0x4D) ^ 0x5A = 0x17
    ; '6' (0x36) ^ 0x5A = 0x6C
    ; '4' (0x34) ^ 0x5A = 0x6E
    encrypted_key   db 0x1B, 0x09, 0x17, 0x6C, 0x6E
    key_len         equ $ - encrypted_key
    xor_secret      equ 0x5A

section .bss
    user_input      resb 32

section .text
    global _start

_start:
    ; 1. พิมพ์คำร้องขอคีย์
    mov rax, 1
    mov rdi, 1
    mov rsi, prompt_msg
    mov rdx, prompt_len
    syscall

    ; 2. รับคีย์จากคีย์บอร์ดผ่าน sys_read (stdin = 0)
    mov rax, 0                  ; sys_read
    mov rdi, 0                  ; fd = stdin
    mov rsi, user_input         ; เก็บที่ user_input
    mov rdx, 32                 ; อ่านสูงสุด 32 ไบต์
    syscall

    ; 3. ตรวจสอบความยาวอินพุต (ต้องอย่างน้อย key_len ตัวอักษร)
    cmp rax, key_len
    jl .denied

    ; 4. ลูปถอดรหัสและเปรียบเทียบทีละไบต์
    xor rcx, rcx                ; index = 0

.verify_loop:
    mov al, [user_input + rcx]  ; อ่านตัวอักษรที่ผู้ใช้ป้อน
    xor al, xor_secret          ; นำมา XOR ด้วย 0x5A
    mov bl, [encrypted_key + rcx] ; ดึงค่าคีย์ที่เข้ารหัสไว้
    cmp al, bl                  ; เปรียบเทียบ
    jne .denied                 ; ถ้าไม่ตรง กระโดดไป Denied ทันที

    inc rcx                     ; index++
    cmp rcx, key_len            ; เช็คว่าครบทุกตัวหรือยัง
    jl .verify_loop

.granted:
    ; ถ้าถูกต้องทุกตัว พิมพ์ธงลับ
    mov rax, 1
    mov rdi, 1
    mov rsi, access_granted
    mov rdx, granted_len
    syscall
    jmp .exit

.denied:
    mov rax, 1
    mov rdi, 1
    mov rsi, access_denied
    mov rdx, denied_len
    syscall

.exit:
    mov rax, 60
    xor rdi, rdi
    syscall`,
      challenge: "ใช้คำสั่ง objdump -d หรือเปิดโปรแกรม GDB เพื่อวิเคราะห์หาว่าค่าสตริงที่ถูกต้องของโปรแกรม Crackme ข้างต้นคือคำว่าอะไรโดยไม่ต้องรันโปรแกรม",
      quiz: [
        {
          question: "ในโปรแกรม GDB คำสั่งใดใช้สำหรับตรวจสอบข้อมูลในหน่วยความจำจำนวน 16 ไบต์ในรูปแบบเลขฐานสิบหก 64 บิตที่ตำแหน่งสแตกพอยน์เตอร์?",
          options: [
            "x/16xg $rsp",
            "print stack 16",
            "show memory rsp",
            "inspect 16 $rsp"
          ],
          correctAnswer: 0,
          explanation: "คำสั่ง 'x' ใน GDB ย่อมาจาก Examine Memory โดยรูปแบบ /16xg หมายถึงแสดงผล 16 ก้อน (Count: 16), ในรูปแบบเลขฐานสิบหก (Format: Hex), ขนาดก้อนละ Giant Word 64 บิต (Size: Giant/g)"
        },
        {
          question: "กลไกความปลอดภัย 'Stack Canary' ทำงานอย่างไรเพื่อป้องกันการโจมตีแบบ Buffer Overflow?",
          options: [
            "สุ่มค่าตัวเลขลับ (Guard Value) วางคั่นไว้ก่อน Return Address บนสแตก และตรวจสอบค่านี้ก่อนคำสั่ง RET เสมอ หากค่าถูกทับจะสั่งตัดโปรแกรมทันที",
            "ทำการเข้ารหัสไฟล์ฮาร์ดดิสก์",
            "จำกัดให้โปรแกรมรันได้เพียง 5 วินาที",
            "ปิดการทำงานของการ์ดเครือข่ายเมื่อมีข้อมูลแปลกปลอม"
          ],
          correctAnswer: 0,
          explanation: "Stack Canary (หรือ Stack Guard) จะสุ่มค่าตัวเลขจากเคอร์เนลมาวางคั่นระหว่าง Local Variables และ Return Address เมื่อเกิด Buffer Overflow ค่า Canary จะถูกเขียนทับก่อนเสมอ คอมไพเลอร์จะตรวจจับและสั่งแคลชโปรแกรมก่อนที่ Return Address ปลอมจะถูกเรียกใช้งาน"
        },
        {
          question: "การวิเคราะห์ไฟล์ไบนารีที่คอมไพล์เสร็จแล้วโดยไม่มีการเปิดให้โปรแกรมทำงาน เรียกว่าการวิเคราะห์รูปแบบใด?",
          options: [
            "Static Analysis (การวิเคราะห์แบบคงที่)",
            "Dynamic Analysis (การวิเคราะห์แบบพลวัต)",
            "Heuristic Runtime Analysis",
            "Emulation Fuzzing"
          ],
          correctAnswer: 0,
          explanation: "Static Analysis คือการตรวจสอบโค้ด ถอดรหัส Disassembly และทำความเข้าใจโครงสร้างไบนารีจากไฟล์บนดิสก์โดยตรงโดยไม่มีการรันโปรเซสจริง ต่างจาก Dynamic Analysis ที่ต้องรันและแนบ Debugger"
        }
      ]
    },
    {
      id: "asm-9",
      title: "การเชื่อมต่อ Inline Assembly ใน C/C++ และสถาปัตยกรรม ARM64 (Inline ASM & ARM64 Architecture)",
      description: "ผสานพลัง Assembly เข้ากับโค้ด C/C++ ด้วย GNU Extended Inline Assembly, เปรียบเทียบสถาปัตยกรรม CISC vs RISC, รีจิสเตอร์และคำสั่งพื้นฐานของ ARM64 (Apple Silicon & Raspberry Pi)",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# การใช้งาน Inline Assembly ใน C/C++ และสถาปัตยกรรม ARM64 (Inline ASM & ARM64)

ในงานวิศวกรรมจริง นักพัฒนามักไม่เขียนโปรแกรมทั้งระบบด้วย Assembly ทั้งหมด แต่นิยมเขียนภาษา C, C++, หรือ Rust เป็นแกนหลัก แล้วแทรกโค้ด **Inline Assembly** เฉพาะจุดสำคัญ (Hotspots) ที่ต้องการคำสั่งพิเศษของฮาร์ดแวร์

---

## 1. GNU Extended Inline Assembly ในภาษา C/C++

ไวยากรณ์มาตรฐานของ GNU Inline Assembly:

\`\`\`c
__asm__ __volatile__ (
    "คำสั่ง assembly"
    : output_operands    /* ตัวแปรรับผลลัพธ์ (เช่น "=r"(result), "=a"(val)) */
    : input_operands     /* ตัวแปรส่งเข้า (เช่น "r"(a), "r"(b)) */
    : clobbered_registers /* รีจิสเตอร์ที่ถูกแก้ไข เพื่อให้คอมไพเลอร์ระวัง (เช่น "memory", "cc") */
);
\`\`\`

### ตัวอย่าง: สั่งอ่าน CPU Time-Stamp Counter (RDTSC) สำหรับจับเวลาระดับนาโนวินาที:
\`\`\`c
uint64_t rdtsc(void) {
    uint32_t lo, hi;
    __asm__ __volatile__ ("rdtsc" : "=a"(lo), "=d"(hi));
    return ((uint64_t)hi << 32) | lo;
}
\`\`\`

---

## 2. เปรียบเทียบสถาปัตยกรรม x86-64 (CISC) vs ARM64 (RISC)

ปัจจุบันสถาปัตยกรรม **ARM64 (AArch64)** ได้ก้าวขึ้นมาเป็นผู้นำทั้งในสมาร์ตโฟน (iPhone, Android), คอมพิวเตอร์ส่วนบุคคล (Apple Silicon M1/M2/M3/M4, Snapdragon X Elite), และ Cloud Servers (AWS Graviton, Google Axion):

| มิติการเปรียบเทียบ | x86-64 (Intel & AMD) | ARM64 / AArch64 (Apple Silicon, ARM) |
|---|---|---|
| **ปรัชญาสถาปัตยกรรม** | **CISC (Complex Instruction Set)** คำสั่งมีความยาวแปรผัน (1 ถึง 15 ไบต์) | **RISC (Reduced Instruction Set)** คำสั่งมีขนาดคงที่ตายตัวคือ **4 ไบต์ (32 บิต)** เสมอ |
| **โครงสร้างคำสั่ง** | Memory operands ผสมกับคำสั่งคำนวณได้ เช่น \`add [rbx], rax\` | **Load/Store Architecture:** คำนวณได้เฉพาะในรีจิสเตอร์เท่านั้น ต้องใช้ \`LDR/STR\` เข้าถึงแรม |
| **จำนวนรีจิสเตอร์หลัก** | 16 ตัว (\`RAX - R15\`) | **31 ตัว (\`X0 - X30\`)** มีพื้นที่เก็บตัวแปรมากกว่าถึงเท่าตัว! |
| **รีจิสเตอร์พิเศษ** | \`RSP\` (Stack Pointer), \`RIP\` (Instruction Pointer) | \`SP\` (Stack Pointer), \`PC\` (Program Counter), \`XZR\` (Zero Register) |
| **การเชื่อมต่อฟังก์ชัน** | PUSH Return Address ลงสแตกอัตโนมัติ | บันทึก Return Address ลงในรีจิสเตอร์ **\`X30 (LR - Link Register)\`** |

---

## 3. ชุดรีจิสเตอร์และคำสั่งพื้นฐานของ ARM64
- **รีจิสเตอร์ขนาด 64 บิต:** \`X0\` ถึง \`X30\`
- **รีจิสเตอร์ขนาด 32 บิต:** \`W0\` ถึง \`W30\`
- **XZR / WZR (Zero Register):** อ่านได้ค่า 0 เสมอ และหากเขียนค่าทิ้งลงไปข้อมูลจะสูญหายทันที
- **คำสั่งเข้าถึงหน่วยความจำ:**
  - \`LDR X0, [X1]\` : โหลดข้อมูล 64 บิตจากแอดเดรส \`[X1]\` เข้าสู่ \`X0\` (Load)
  - \`STR X0, [X1]\` : บันทึกข้อมูลจาก \`X0\` ลงในแอดเดรส \`[X1]\` (Store)
- **การเรียกฟังก์ชัน:** \`BL function_name\` (Branch with Link บันทึก Return Address ลง \`X30\`) และจบด้วย \`RET\``,
      codeExample: `// ==============================================================================
// โปรแกรม: 09_inline_assembly_and_arm64_comparison.c
// คอมไพล์: gcc -O3 09_inline_assembly_and_arm64_comparison.c -o inline_demo
// ==============================================================================

#include <stdio.h>
#include <stdint.h>

// ฟังก์ชันสาธิต 1: Fast Bit-Scan Reverse (BSR) คำนวณตำแหน่งบิตสูงสุดผ่าน Inline Assembly
static inline uint32_t find_highest_bit(uint32_t value) {
    uint32_t index;
    // คำสั่ง bsr (Bit Scan Reverse) ของซีพียู x86 ค้นหาตำแหน่งบิต 1 สูงสุดใน 1 คำสั่ง
    __asm__ (
        "bsrl %1, %0"
        : "=r" (index)    // Output: %0 ใส่ในตัวแปร index
        : "r" (value)     // Input:  %1 รับจากตัวแปร value
        : "cc"            // Clobbered: Condition code flags ถูกแก้ไข
    );
    return index;
}

// ฟังก์ชันสาธิต 2: Fast 64-bit Assembly Syscall Exit โดยตรงจากภาษา C
void direct_raw_syscall_exit(int status) {
    __asm__ __volatile__ (
        "mov $60, %%rax\n\t"     // syscall 60 = sys_exit
        "mov %0, %%rdi\n\t"      // rdi = status
        "syscall"
        :
        : "r" ((uint64_t)status)
        : "rax", "rdi"
    );
}

int main(void) {
    printf("=== IT Academy: Advanced Assembly & Systems Engineering ===\\n");

    uint32_t num = 1024; // 1024 = 2^10 (บิตสูงสุดคือบิตที่ 10)
    uint32_t highest_bit = find_highest_bit(num);

    printf("Number: %u (0x%X)\\n", num, num);
    printf("Highest set bit position: %u\\n", highest_bit);

    printf("Executing Bare-Metal Inline Assembly Syscall Exit...\\n");
    direct_raw_syscall_exit(0);

    return 0; // บรรทัดนี้จะไม่มีวันถูกเรียกเพราะ syscall exit ตัดการทำงานแล้ว
}`,
      challenge: "เขียนฟังก์ชันในภาษา C ที่ใช้ Inline Assembly สั่งคำสั่ง RDTSC วัดจำนวนรอบสัญญาณนาฬิกา (CPU Cycles) ที่ใช้ในการวนลูป 1,000,000 รอบ แล้วพิมพ์เวลาเฉลี่ยต่อรอบออกมา",
      quiz: [
        {
          question: "ข้อใดคือความแตกต่างเชิงโครงสร้างที่สำคัญที่สุดระหว่างสถาปัตยกรรม x86-64 (CISC) และ ARM64 (RISC)?",
          options: [
            "ARM64 มีขนาดคำสั่งคงที่ 4 ไบต์เสมอ และใช้สถาปัตยกรรม Load/Store คำนวณได้เฉพาะในรีจิสเตอร์เท่านั้น ส่วน x86-64 มีความยาวคำสั่งแปรผันและคำนวณกับหน่วยความจำได้โดยตรง",
            "ARM64 ไม่รองรับตัวเลขทศนิยม",
            "x86-64 สามารถประมวลผลได้เฉพาะในโหมด 32 บิตเท่านั้น",
            "ARM64 ไม่มี Stack Pointer"
          ],
          correctAnswer: 0,
          explanation: "ARM64 เป็นสถาปัตยกรรม RISC ที่ยึดหลัก Load/Store Architecture ทุกคำสั่งมีขนาดเท่ากันคือ 32 บิต (4 ไบต์) เสมอ และห้ามคำสั่งทางคณิตศาสตร์เข้าถึงแรมโดยตรง ต้องโหลดเข้าสู่รีจิสเตอร์ก่อนด้วย LDR ต่างจาก x86-64 ที่เป็น CISC"
        },
        {
          question: "ในสถาปัตยกรรม ARM64 รีจิสเตอร์ 'XZR' (Zero Register) มีคุณสมบัติพิเศษอย่างไร?",
          options: [
            "เมื่ออ่านค่าจะได้เลข 0 เสมอ และเมื่อเขียนข้อมูลลงไปข้อมูลจะถูกทิ้งทันทีโดยไม่เปลืองหน่วยความจำ",
            "ใช้เก็บแอดเดรสของเคอร์เนลเท่านั้น",
            "เป็นตัวนับเวลาของนาฬิกา CPU",
            "ใช้งานได้เฉพาะตอนเครื่องเริ่มเปิดบูตระบบ (Bootloader)"
          ],
          correctAnswer: 0,
          explanation: "XZR (64-bit) และ WZR (32-bit) เป็นฮาร์ดแวร์รีจิสเตอร์พิเศษที่ส่งค่าบิต 0 ตลอดเวลาเมื่ออ่านค่า และทำหน้าที่เป็นตัวทิ้งข้อมูลเมื่อต้องการสั่งคำสั่งแต่ไม่ต้องการเก็บผลลัพธ์ (Discard write)"
        },
        {
          question: "ในไวยากรณ์ Extended Inline Assembly ของ GCC คำว่า 'clobbered registers' (ส่วนสุดท้ายหลังเครื่องหมาย :) มีบทบาทหน้าที่อะไร?",
          options: [
            "แจ้งให้คอมไพเลอร์ทราบว่ารีจิสเตอร์หรือแฟล็กเหล่านั้นถูกโค้ด Assembly แก้ไข เพื่อให้คอมไพเลอร์กู้คืนและไม่บันทึกค่าสำคัญค้างไว้ในรีจิสเตอร์เหล่านั้น",
            "สั่งให้คอมไพเลอร์ลบรีจิสเตอร์เหล่านั้นทิ้งจากชิป CPU",
            "สั่งคอมไพเลอร์ให้เพิ่มความเร็วของหน่วยความจำเป็นสองเท่า",
            "ตั้งค่ารหัสผ่านป้องกันการแฮกโปรแกรม"
          ],
          correctAnswer: 0,
          explanation: "Clobber List จำเป็นอย่างยิ่งเพื่อบอกให้ Register Allocator ของคอมไพเลอร์ C/C++ ทราบว่ารีจิสเตอร์ใดบ้างที่ถูก Assembly ของเราเข้าไปเปลี่ยนแปลง จะได้ไม่นำข้อมูลตัวแปรอื่นไปวางซ้อนทับจนเกิด Bug ร้ายแรง"
        }
      ]
    }
  ]
};
