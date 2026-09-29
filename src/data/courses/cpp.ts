import { Course } from "../types";

export const cppCourse: Course = {
  id: "cpp",
  title: "Modern C++ (C++20/C++23) & High-Performance Systems",
  description: "เจาะลึกวิศวกรรมระบบประสิทธิภาพสูงด้วย Modern C++: Memory Model, Pointers, RAII, Move Semantics, Templates/Concepts, Concurrency และ High-Frequency Systems",
  longDescription: "หลักสูตรวิศวกรรมซอฟต์แวร์ระบบประสิทธิภาพสูง (High-Performance Systems Engineering) ด้วยภาษา Modern C++ (มาตรฐาน C++20 และ C++23) มุ่งเน้นการควบคุมฮาร์ดแวร์ระดับต่ำสุดเพื่อเค้นประสิทธิภาพขีดสุดของ CPU, RAM และ Kernel ครอบคลุมตั้งแต่สถาปัตยกรรม Compilation Pipeline (Preprocessing, Assembly, Linking), การบริหารจัดการหน่วยความจำและ Pointer Arithmetic, ปรัชญา RAII และ Smart Pointers ไร้ Memory Leaks, การประหยัดเวลาด้วย Move Semantics และ Perfect Forwarding (Zero-Copy), การเขียน Generic Code ขั้นสูงด้วย C++20 Concepts, การเลือกใช้ Standard Template Library (STL) ที่สอดคล้องกับ CPU Cache Locality, การประมวลผล Concurrency แบบ Lock-Free ด้วย std::atomic และ std::jthread, การทำ SIMD Vectorization จนถึงการสร้าง Real-Time High-Speed Order Matching Engine ระดับไมโครวินาที",
  icon: "⚡",
  color: "blue",
  gradient: "from-blue-600 via-indigo-700 to-slate-900",
  category: "language",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: ["Modern C++", "C++20", "C++23", "Systems", "Performance", "RAII", "Concurrency", "Low Latency"],
  recommendedTools: [
    {
      name: "GCC 13+ / Clang 17+ / MSVC (C++20/23)",
      icon: "⚡",
      badge: "C++ Toolchain",
      description: "คอมไพเลอร์ภาษา C++ มาตรฐานสากลที่รองรับ C++20 และ C++23 อย่างสมบูรณ์แบบ พร้อมตัวช่วยดีบัก AddressSanitizer (ASan)",
      downloadUrl: "https://gcc.gnu.org/",
      setupGuide: "1. บน Linux: sudo apt install build-essential gdb\n2. บน Windows: ติดตั้ง MinGW-w64 หรือ Visual Studio Community (Desktop C++)\n3. ตรวจสอบใน Terminal: g++ --version หรือ clang++ --version"
    },
    {
      name: "VS Code with C/C++ Extension & CMake",
      icon: "💻",
      badge: "C++ IDE",
      description: "เครื่องมือพัฒนา C++ พร้อมระบบ IntelliSense, Clangd, Clang-Format Linter และ CMake Build System",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้ง VS Code\n2. ติดตั้ง Extension: 'C/C++' และ 'CMake Tools' โดย Microsoft"
    }
  ],
  lessons: [
    {
      id: "cpp-1",
      title: "กระบวนการคอมไพล์ภาษา C++, Preprocessor, Header Files และโครงสร้าง Memory",
      description: "เจาะลึก 4 ขั้นตอนการคอมไพล์ (Preprocessing, Compiling, Assembly, Linking), Header Guards (#pragma once), Memory Segments (Text, Data, BSS, Heap, Stack) และ Symbol Resolution",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา C++ และขั้นตอนการคอมไพล์ (Compilation Pipeline)

ภาษา **C++** เป็นภาษาที่รันบนฮาร์ดแวร์โดยตรง (**Native Machine Code**) โดยไม่มี Virtual Machine หรือ Garbage Collector คั่นกลาง การทำความเข้าใจเส้นทางจากตัวอักษรในโค้ดสู่สัญญาณไฟฟ้าในซิลิคอนจึงเป็นก้าวแรกของวิศวกรระบบชั้นนำ

---

## 1. ลำดับขั้นตอนการคอมไพล์ C++ (4 Stages of Compilation)
เมื่อสั่งคอมไพล์ด้วยคำสั่ง \`g++ -std=c++23 main.cpp -o app\`:

\`\`\`text
main.cpp  ──[ 1. Preprocessor (cpp) ]──>  main.i (ขยาย Macro & Header)
          ──[ 2. Compiler (g++ -S)   ]──>  main.s (Assembly Code ตาม CPU)
          ──[ 3. Assembler (as)      ]──>  main.o (Machine Code Object File)
          ──[ 4. Linker (ld)         ]──>  app    (Executable Binary File)
\`\`\`

1. **Preprocessing (\`cpp\`):** จัดการคำสั่งที่ขึ้นต้นด้วยเครื่องหมาย \`#\` ทั้งหมด เช่น:
   - นำเนื้อหาในไฟล์ที่ระบุใน \`#include <vector>\` มาวางแทนที่บรรทัดนั้นโดยตรง
   - ขยายผล Macro \`#define\`
   - ตัดบรรทัดที่ไม่ตรงเงื่อนไขของ \`#ifdef / #endif\`
2. **Compilation (\`cc1plus\`):** ตรวจสอบไวยากรณ์ (Syntax Analysis), Type Checking, และแปลงโครงสร้าง Abstract Syntax Tree (AST) เป็น **Assembly Language** เฉพาะสถาปัตยกรรม CPU เช่น x86_64 หรือ ARM64
3. **Assembly (\`as\`):** แปลงชุดคำสั่ง Assembly ให้เป็น **Relocatable Object File (\`.o\` หรือ \`.obj\`)** ซึ่งเก็บคำสั่งเครื่องไบนารีและตาราง Symbol Table
4. **Linking (\`ld\`):** นำ Object Files หลายไฟล์มารวมกัน ค้นหาตำแหน่งฟังก์ชันที่อ้างอิงข้ามไฟล์ (Symbol Resolution) เชื่อมต่อกับ C++ Standard Library (\`libstdc++\`) และสร้างไฟล์ปลายทางที่สามารถรันได้จริง (\`.exe\` หรือ ELF Binary)

---

## 2. Header Guards ปะทะ \`#pragma once\`
หาก Header File เดียวกันถูกรวมซ้ำซ้อนกันในโปรเจกต์ จะเกิดข้อผิดพลาด **Redefinition of class/type**:
- **วิธีดั้งเดิม (POSIX Header Guard):**
  \`\`\`cpp
  #ifndef MY_CALCULATOR_H
  #define MY_CALCULATOR_H
  // declarations
  #endif // MY_CALCULATOR_H
  \`\`\`
- **วิธีสมัยใหม่ (Modern C++ Best Practice):**
  \`\`\`cpp
  #pragma once // คอมไพเลอร์ทุกตัวในโลกยุคนี้รองรับ ช่วยให้คอมไพล์เร็วกว่าเพราะไม่ต้องเปิดอ่านไฟล์ซ้ำ
  \`\`\`

---

## 3. ผังหน่วยความจำของ Process ในระบบปฏิบัติการ (Memory Layout)
เมื่อระบบปฏิบัติการโหลด Executable File เข้าสู่ RAM จะจัดสรรพื้นที่เป็น 5 ส่วนหลัก:

\`\`\`text
  High Memory Address (0xFFFFFFFF...)
+------------------------------------------+
|  Kernel Space (OS Protected)             |
+------------------------------------------+
|  Stack (ขยายตัวลงล่าง ↓)                     |
|  - Local variables, Stack frames, Return |
+------------------------------------------+
|  ↓ Free Space ↑                          |
+------------------------------------------+
|  Heap (ขยายตัวขึ้นบน ↑)                      |
|  - Dynamic memory (new / malloc)         |
+------------------------------------------+
|  BSS Segment (Uninitialized Global/Static|
|  - ตัวแปร global ที่ไม่ได้เซ็ตค่า เริ่มต้นที่ 0 |
+------------------------------------------+
|  Data Segment (Initialized Global/Static)|
|  - ตัวแปร global ที่มีการกำหนดค่าเริ่มต้นแล้ว |
+------------------------------------------+
|  Text / Code Segment (Read-Only)         |
|  - Binary Instructions ของโปรแกรม         |
+------------------------------------------+
  Low Memory Address (0x00000000...)
\`\`\``,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++23: การสำรวจตำแหน่ง Memory Segments (Stack, Heap, Data, BSS)
// =================================================================

#include <iostream>
#include <vector>
#include <iomanip>

// 1. Data Segment: ตัวแปร Global กำหนดค่าเริ่มต้นแล้ว
int g_initializedVar = 100;

// 2. BSS Segment: ตัวแปร Global ยังไม่ได้กำหนดค่า (ระบบจะเซ็ต 0 ให้)
int g_uninitializedVar;

// 3. Text Segment: ฟังก์ชันอยู่ในพื้นที่ Read-only Code
void sampleFunction() {
    std::cout << "[Code Execution] Inside sampleFunction" << std::endl;
}

int main() {
    std::cout << "=== IT Academy Modern C++ Memory Architecture Probe ===" << std::endl;

    // 4. Stack Memory: ตัวแปรโลคัลภายใน Stack Frame
    int stackVariable = 42;
    int stackArray[5] = {1, 2, 3, 4, 5};

    // 5. Heap Memory: จองหน่วยความจำแบบพลวัต (Dynamic Allocation)
    int* heapVariable = new int(999);

    std::cout << std::hex << std::showbase;
    std::cout << "1. Text Segment (Function Pointer)  : " << (void*)&sampleFunction << std::endl;
    std::cout << "2. Data Segment (Initialized Global): " << (void*)&g_initializedVar << std::endl;
    std::cout << "3. BSS Segment (Uninitialized Global): " << (void*)&g_uninitializedVar << std::endl;
    std::cout << "4. Heap Segment (new allocated)     : " << (void*)heapVariable << std::endl;
    std::cout << "5. Stack Segment (Local Variable)   : " << (void*)&stackVariable << std::endl;
    std::cout << "6. Stack Segment (Local Array)      : " << (void*)&stackArray[0] << std::endl;

    std::cout << std::dec;
    std::cout << "\nสังเกต: Address ของ Stack จะมีค่าสูงมาก (High Address) ส่วน Text/Data จะอยู่ตำแหน่งต่ำ (Low Address)" << std::endl;

    // ล้างหน่วยความจำบน Heap เสมอเพื่อป้องกัน Memory Leak
    delete heapVariable;
    return 0;
}`,
        description: "โปรแกรม C++23 ตรวจสอบที่อยู่จริงของ Memory Segments (Text, Data, BSS, Heap, Stack) บน RAM"
      },
      challenge: {
        description: "เขียนโปรแกรม C++ ประกาศตัวแปร int บน Stack 1 ตัว และจอง int บน Heap 1 ตัว (ด้วย new) แล้วพิมพ์ค่าผลคูณของตัวเลขทั้งสองออกมา พร้อมสั่ง delete คืนหน่วยความจำ Heap",
        startingCode: `#include <iostream>

int main() {
    // TODO: ประกาศ stackVar = 10 และ heapVar = 20
    
    // TODO: พิมพ์ผลคูณ และ delete heapVar
    return 0;
}`,
        solution: `#include <iostream>

int main() {
    int stackVar = 10;
    int* heapVar = new int(20);

    std::cout << "Product: " << (stackVar * (*heapVar)) << std::endl;

    delete heapVar;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q1-1",
          question: "ขั้นตอนใดใน C++ Compilation Pipeline ที่ทำหน้าที่รวม Object Files (.o) หลายๆ ไฟล์เข้าเป็นไฟล์ Executable ตัวเดียว?",
          options: [
            "Preprocessing",
            "Compiling",
            "Assembly",
            "Linking (Linker)"
          ],
          correctAnswer: 3,
          explanation: "Linker (ld) ทำหน้าที่เชื่อมโยง Function References ข้าม Object Files และผูกเข้ากับ Libraries ของระบบเพื่อสร้าง Binary ปลายทางที่สามารถรันได้"
        },
        {
          id: "cpp-q1-2",
          question: "หน่วยความจำประเภท Stack และ Heap มีทิศทางการขยายตัวอย่างไรใน Memory Layout ของระบบปฏิบัติการส่วนใหญ่?",
          options: [
            "Stack ขยายตัวขึ้นบน (Low ไป High), Heap ขยายตัวลงล่าง (High ไป Low)",
            "Stack ขยายตัวลงล่าง (High ไป Low), Heap ขยายตัวขึ้นบน (Low ไป High)",
            "ทั้งคู่ขยายตัวไปทางขวาพร้อมกัน",
            "ไม่มีการขยายตัว มีขนาดคงที่ตลอดกาล"
          ],
          correctAnswer: 1,
          explanation: "ตามสถาปัตยกรรมของ OS ส่วนใหญ่ Stack จะเริ่มจาก High Memory Address และขยายตัวลงล่างเมื่อมีการเรียกฟังก์ชันซ้อนกัน ส่วน Heap จะเริ่มจาก Low Memory Address (เหนือ Data/BSS) และขยายตัวขึ้นบนเพื่อใช้พื้นที่ตรงกลางร่วมกัน"
        },
        {
          id: "cpp-q1-3",
          question: "คำสั่ง #pragma once มีบทบาทสำคัญอย่างไรใน Modern C++?",
          options: [
            "สั่งให้ CPU ทำงานที่ความถี่สูงสุด",
            "ป้องกันการรวม Header File ซ้ำซ้อน (Multiple Inclusion) โดยมีประสิทธิภาพการคอมไพล์เร็วกว่า Header Guard แบบเดิม",
            "ปิดการทำงานของ Compiler Warnings ทั้งหมด",
            "ลบไฟล์ซอร์สโค้ดทิ้งหลังคอมไพล์เสร็จ"
          ],
          correctAnswer: 1,
          explanation: "#pragma once เป็นคำสั่งเฉพาะของ Preprocessor ที่บอกให้คอมไพเลอร์เปิดอ่านไฟล์ Header นั้นเพียงครั้งเดียวตลอดการคอมไพล์ Translation Unit ป้องกันข้อผิดพลาดการประกาศคลาสซ้ำซ้อนและประหยัดเวลา I/O"
        }
      ]
    },
    {
      id: "cpp-2",
      title: "การจัดการหน่วยความจำ: Pointer Arithmetic, References และ Heap Allocation",
      description: "ทำความเข้าใจความต่างระหว่าง Raw Pointers และ References, กลไก Pointer Arithmetic บน Array, Void Pointers, Double Pointers, ข้อควรระวังเรื่อง Dangling Pointers และ Memory Leaks",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การจัดการหน่วยความจำ: Pointer Arithmetic และ References

ในภาษา C++ การเข้าใจว่าตัวแปรอยู่ที่ไหนบนหน่วยความจำ และสามารถเข้าถึงตำแหน่งนั้นผ่าน **Pointer (\`*\`)** และ **Reference (\`&\`)** ได้โดยตรง คือพลังที่ทำให้ C++ มีประสิทธิภาพเหนือกว่าภาษาที่ต้องรันผ่าน Virtual Machine

---

## 1. ตารางเปรียบเทียบเชิงลึก: Pointer ปะทะ Reference
| คุณสมบัติ | Pointer (\`T*\`) | Reference (\`T&\`) |
|---|---|---|
| **การเป็นค่าว่าง (Nullability)** | ✅ ชี้ไปที่ \`nullptr\` ได้ | ❌ ห้ามเป็น Null ต้องผูกกับตัวแปรที่มีอยู่จริงเสมอ |
| **การเปลี่ยนเป้าหมาย (Re-binding)** | ✅ เปลี่ยนไปชี้ตัวแปรอื่นได้ตลอดเวลา | ❌ ผูกติดกับตัวแปรเดิมตลอดอายุขัย (เสมือนเป็นชื่อเล่น Alias) |
| **หน่วยความจำในตัว** | ใช้ RAM ขนาด 8 ไบต์ (บน 64-bit OS) เก็บ Address | มักถูกคอมไพเลอร์ Optimize ให้กลายเป็นตัวแปรตัวเดิมโดยไม่กินแรมเพิ่ม |
| **ไวยากรณ์การเข้าถึงค่า** | ต้องปลดล็อกด้วย Dereference (\`*ptr\`) หรือลูกศร (\`ptr->field\`) | ใช้งานด้วยชื่อตัวแปรและจุด (\`ref.field\`) ได้ทันทีเหมือนปกติ |

---

## 2. Pointer Arithmetic (คณิตศาสตร์ของพอยน์เตอร์)
เมื่อเราสั่ง \`ptr + 1\` บนพอยน์เตอร์ คอมไพเลอร์ **ไม่ได้บวกตัวเลข 1 ไบต์** แต่จะบวกขนาดของ Data Type ที่พอยน์เตอร์นั้นชี้อยู่ (\`sizeof(T)\`):

\`\`\`cpp
int numbers[5] = {10, 20, 30, 40, 50};
int* p = numbers; // p ชี้ที่ numbers[0]

// สมมติ p อยู่ที่แอดเดรส 0x1000:
// p + 1 จะอยู่ที่แอดเดรส 0x1000 + (1 * sizeof(int)) = 0x1004!
std::cout << *(p + 1); // ได้ค่า 20 (เทียบเท่า numbers[1])
std::cout << *(p + 3); // ได้ค่า 40 (เทียบเท่า numbers[3])
\`\`\`

> **กฎเหล็กของ Array Indexing:**  
> ในภาษา C/C++ ไวยากรณ์ \`a[i]\` เป็นเพียง Syntactic Sugar ของคำสั่ง \`*(a + i)\` นั่นเอง!

---

## 3. มฤตยูในหน่วยความจำ: Memory Leaks และ Dangling Pointers
1. **Memory Leak:** จองหน่วยความจำด้วย \`new\` หรือ \`malloc()\` แต่ลืมสั่ง \`delete\` หรือ \`free()\` เมื่อเวลาผ่านไป แรมจะค่อยๆ เต็มจนระบบปฏิบัติการส่งสัญญาณ OOM Killer มาสังหารแอปพลิเคชัน
2. **Dangling Pointer (พอยน์เตอร์เคว้ง):** พอยน์เตอร์ที่ยังคงชี้ไปยังตำแหน่งหน่วยความจำที่ถูก \`delete\` คืนระบบไปแล้ว หากเผลอไปเขียนข้อมูลทับ (\`*danglingPtr = 99\`) จะเกิด **Undefined Behavior** หรือระบบแครชทันที (\`Segmentation Fault\`)
3. **Double Free:** สั่ง \`delete\` ซ้ำสองครั้งบนพอยน์เตอร์เดิม ซึ่งทำลายโครงสร้าง Heap ของระบบปฏิบัติการ`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++23: การสาธิต Pointer Arithmetic และการป้องกัน Dangling Pointer
// =================================================================

#include <iostream>

void modifyByPointer(int* ptr) {
    if (ptr != nullptr) {
        *ptr = *ptr * 2;
    }
}

void modifyByReference(int& ref) {
    ref = ref * 10; // ใช้งานง่ายกว่า ไม่ต้องกังวลเรื่อง nullptr
}

int main() {
    std::cout << "=== Pointer Arithmetic & References Demo ===" << std::endl;

    int balance = 500;
    std::cout << "Initial balance: " << balance << std::endl;

    // 1. ส่งผ่าน Pointer
    modifyByPointer(&balance);
    std::cout << "After modifyByPointer: " << balance << std::endl; // 1,000

    // 2. ส่งผ่าน Reference
    modifyByReference(balance);
    std::cout << "After modifyByReference: " << balance << std::endl; // 10,000

    // 3. Pointer Arithmetic บน Array
    int buffer[4] = {100, 200, 300, 400};
    int* ptr = buffer;

    std::cout << "\nTraversing array via pointer arithmetic:" << std::endl;
    for (int i = 0; i < 4; ++i) {
        std::cout << "Element " << i << " at [" << (void*)(ptr + i) 
                  << "] = " << *(ptr + i) << std::endl;
    }

    // 4. การจัดการ Dynamic Memory อย่างปลอดภัย
    int* dynamicData = new int(777);
    std::cout << "\nDynamic value: " << *dynamicData << std::endl;

    delete dynamicData;
    dynamicData = nullptr; // กำหนดเป็น nullptr ทันทีเพื่อป้องกัน Dangling Pointer!

    return 0;
}`,
        description: "สคริปต์สาธิตการใช้ Pointers, References, Pointer Arithmetic และการเคลียร์ค่าเป็น nullptr"
      },
      challenge: {
        description: "เขียนฟังก์ชัน swapNumbers(int* a, int* b) เพื่อสลับค่าระหว่างตัวแปรสองตัวผ่าน Pointer",
        startingCode: `#include <iostream>

// TODO: เขียนฟังก์ชัน swapNumbers
void swapNumbers(int* a, int* b) {
}

int main() {
    int x = 10, y = 20;
    swapNumbers(&x, &y);
    std::cout << "x: " << x << " y: " << y << std::endl; // x: 20 y: 10
    return 0;
}`,
        solution: `#include <iostream>

void swapNumbers(int* a, int* b) {
    if (a != nullptr && b != nullptr) {
        int temp = *a;
        *a = *b;
        *b = temp;
    }
}

int main() {
    int x = 10, y = 20;
    swapNumbers(&x, &y);
    std::cout << "x: " << x << " y: " << y << std::endl;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q2-1",
          question: "หาก ptr เป็นพอยน์เตอร์ประเภท double* (ขนาด double = 8 ไบต์) การสั่งคำสั่ง ptr + 2 จะทำให้ตำแหน่ง Address ขยับไปกี่ไบต์?",
          options: [
            "2 ไบต์",
            "8 ไบต์",
            "16 ไบต์ (2 * sizeof(double))",
            "32 ไบต์"
          ],
          correctAnswer: 2,
          explanation: "Pointer Arithmetic จะคูณสเกลาร์ด้วยขนาดของประเภทข้อมูลที่ชี้อยู่เสมอ ดังนั้นการบวก 2 บน double* จึงขยับไป 2 * 8 = 16 ไบต์บน RAM"
        },
        {
          id: "cpp-q2-2",
          question: "ข้อใดเป็นความแตกต่างที่สำคัญที่สุดระหว่าง Reference (&) และ Pointer (*) ใน C++?",
          options: [
            "Reference ต้องผูกกับตัวแปรที่มีอยู่จริงตั้งแต่ประกาศและห้ามเป็น nullptr ส่วน Pointer สามารถเป็น nullptr และเปลี่ยนเป้าหมายที่ชี้ได้ตลอดเวลา",
            "Pointer ไม่กินหน่วยความจำเลย ส่วน Reference ใช้แรม 1 GB เสมอ",
            "Reference ใช้ได้เฉพาะกับตัวเลขทศนิยม",
            "Pointer ถูกยกเลิกไปแล้วใน C++20"
          ],
          correctAnswer: 0,
          explanation: "Reference เป็น Alias (นามแฝง) ที่ผูกติดกับตัวแปรเดิมตลอดอายุขัยและรับประกันว่าจะไม่มีทางเป็น Null ทำให้โค้ดปลอดภัยและอ่านง่ายกว่า Pointer แบบเดิม"
        },
        {
          id: "cpp-q2-3",
          question: "เหตุใดหลังจากสั่ง delete ptr; จึงควรสั่ง ptr = nullptr; ทันที?",
          options: [
            "เพื่อป้องกันปัญหา Dangling Pointer ทำให้หากมีการตรวจสอบ if (ptr != nullptr) จะรู้ว่าหน่วยความจำถูกคืนไปแล้ว",
            "เพื่อให้ระบบปฏิบัติการรีสตาร์ทตัวเอง",
            "เพื่อให้ตัวแปร ptr กลายเป็นฟังก์ชัน",
            "เพื่อแปลงตัวเลขให้เป็นข้อความ"
          ],
          correctAnswer: 0,
          explanation: "เมื่อสั่ง delete พื้นที่หน่วยความจำจะถูกคืน แต่ตัวแปร ptr ยังคงเก็บ Address เดิมไว้ (Dangling Pointer) การเซ็ตเป็น nullptr จะการันตีความปลอดภัยและป้องกันข้อผิดพลาดการเข้าถึงหน่วยความจำที่ถูกทำลายไปแล้ว"
        }
      ]
    },
    {
      id: "cpp-3",
      title: "RAII (Resource Acquisition Is Initialization) และ Smart Pointers",
      description: "เสาหลักของ Modern C++: ปรัชญา RAII, การควบคุมอายุทรัพยากรด้วย Scope, เจาะลึก std::unique_ptr (Exclusive Ownership), std::shared_ptr (Reference Counting), std::weak_ptr ป้องกัน Circular References",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# RAII และ Smart Pointers ใน Modern C++

ในภาษา C ยุคเก่า ข้อผิดพลาดส่วนใหญ่เกิดขึ้นจากการลืม \`free()\`, ลืมปิดไฟล์ (\`fclose()\`), หรือลืมปลดล็อก (\`pthread_mutex_unlock()\`) เมื่อเกิดข้อยกเว้น (**Exceptions**)

Modern C++ แก้ปัญหานี้อย่างเบ็ดเสร็จด้วยปรัชญาที่ทรงอิทธิพลที่สุดในวงการซอฟต์แวร์: **RAII (Resource Acquisition Is Initialization)**

---

## 1. ปรัชญา RAII คืออะไร?
- **ผูกมัดวงจรชีวิตของทรัพยากรเข้ากับอายุของ Object บน Stack:**
  - **Constructor:** รับผิดชอบการจองทรัพยากร (เช่น เปิดไฟล์, จองหน่วยความจำ, ล็อก Mutex)
  - **Destructor (\`~Class()\`):** รับผิดชอบการคืนทรัพยากรโดยอัตโนมัติ (เช่น ปิดไฟล์, ล้างแรม, ปลดล็อก)
- **การันตี 100%:** ไม่ว่าโค้ดจะออกจากฟังก์ชันด้วยการ \`return\`, \`break\`, หรือเกิด \`throw Exception\` ตัว C++ Runtime จะเรียก Destructor ของ Stack Objects เสมอ (**Stack Unwinding**) ทำให้ไร้ปัญหา Resource Leaks อย่างแท้จริง!

---

## 2. เจาะลึก 3 ทหารเสือ Smart Pointers (\`<memory>\`)

### 1. \`std::unique_ptr<T>\` (Exclusive Ownership - เป็นเจ้าของคนเดียว)
- ห้ามคัดลอก (Copying is disabled) อนุญาตเฉพาะการย้ายกรรมสิทธิ์ (**Move Semantics**) เท่านั้น
- **Zero Overhead:** ประสิทธิภาพความเร็วและขนาดหน่วยความจำเท่ากับ Raw Pointer เป๊ะ (100% Zero-cost abstraction)
- สร้างด้วย: \`auto ptr = std::make_unique<Widget>();\`

### 2. \`std::shared_ptr<T>\` (Shared Ownership - แชร์ความเป็นเจ้าของ)
- รองรับการคัดลอก โดยภายในจะมี **Control Block** คอยนับจำนวนผู้ถือครอง (**Reference Count**)
- เมื่อมี shared_ptr ตัวใหม่มาชี้ ตัวนับจะบวก 1 (แบบ Thread-safe ด้วย Atomic Increment)
- เมื่อ shared_ptr ตัวใดตัวหนึ่งหลุดจาก Scope ตัวนับจะลบ 1
- เมื่อตัวนับเหลือ **0** ทรัพยากรจะถูก \`delete\` ทันที
- สร้างด้วย: \`auto ptr = std::make_shared<Widget>();\`

### 3. \`std::weak_ptr<T>\` (Non-owning Observer - ตัวสังเกตการณ์)
- ชี้ไปยังอ็อบเจกต์ที่จัดการโดย \`shared_ptr\` โดย **ไม่เพิ่ม Reference Count**
- **แก้ปัญหาวงจรมรณะ (Circular Dependency):** หาก Object A ถือ shared_ptr ชี้ไป B และ B ก็ถือ shared_ptr ชี้กลับมา A ทั้งคู่จะไม่มีวันถูกลบออกจากแรมเลย (Memory Leak)! การเปลี่ยนฝั่งใดฝั่งหนึ่งให้เป็น \`weak_ptr\` จะแก้ปัญหานี้ทันที`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++23: การประยุกต์ใช้ RAII, unique_ptr และ shared_ptr
// =================================================================

#include <iostream>
#include <memory>
#include <string>

class NetworkConnection {
private:
    std::string endpoint_;

public:
    NetworkConnection(const std::string& endpoint) : endpoint_(endpoint) {
        std::cout << "[RAII OPEN] Connected to: " << endpoint_ << std::endl;
    }

    ~NetworkConnection() {
        std::cout << "[RAII CLOSE] Safely severed socket to: " << endpoint_ << std::endl;
    }

    void sendPacket(const std::string& data) {
        std::cout << " -> Sending data to [" << endpoint_ << "]: " << data << std::endl;
    }
};

void demonstrateUniquePtr() {
    std::cout << "\n--- 1. Testing std::unique_ptr (Automatic Cleanup) ---" << std::endl;
    // จองผ่าน make_unique
    auto conn = std::make_unique<NetworkConnection>("10.0.0.85:443");
    conn->sendPacket("AUTH_REQ_TOKEN");
    // เมื่อจบฟังก์ชันนี้ conn จะหลุด Scope และ Destructor จะถูกเรียกอัตโนมัติ!
}

void demonstrateSharedPtr() {
    std::cout << "\n--- 2. Testing std::shared_ptr (Reference Counting) ---" << std::endl;
    std::shared_ptr<NetworkConnection> primary;
    {
        auto secondary = std::make_shared<NetworkConnection>("gateway.internal:8080");
        std::cout << "Ref count in inner block: " << secondary.use_count() << std::endl; // 1

        primary = secondary; // เพิ่มผู้ถือครอง
        std::cout << "Ref count after copy    : " << secondary.use_count() << std::endl; // 2
    } // secondary หลุด Scope แต่ทรัพยากรยังไม่ถูกทำลายเพราะ primary ยังถือครองอยู่!

    std::cout << "Ref count in outer block: " << primary.use_count() << std::endl; // 1
    primary->sendPacket("PAYLOAD_TRANSACTION_ACK");
} // primary หลุด Scope ตรงนี้ ทรัพยากรจะถูกทำลายทันที

int main() {
    demonstrateUniquePtr();
    demonstrateSharedPtr();
    std::cout << "\nProgram execution completed safely with zero memory leaks." << std::endl;
    return 0;
}`,
        description: "ตัวอย่างการทำงานของ RAII, unique_ptr และ shared_ptr พร้อมการนับ Reference Count"
      },
      challenge: {
        description: "เขียนคำสั่ง C++ สร้าง std::unique_ptr<int> ที่เก็บค่า 500 โดยใช้คำสั่ง std::make_unique<int>(...)",
        startingCode: `#include <iostream>
#include <memory>

int main() {
    // TODO: สร้าง unique_ptr เก็บเลข 500
    
    return 0;
}`,
        solution: `#include <iostream>
#include <memory>

int main() {
    auto myPtr = std::make_unique<int>(500);
    std::cout << "Value: " << *myPtr << std::endl;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q3-1",
          question: "หัวใจสำคัญของปรัชญา RAII (Resource Acquisition Is Initialization) คือข้อใด?",
          options: [
            "การเปิดใช้งานระบบ Artificial Intelligence ในคอมไพเลอร์",
            "การผูกวงจรชีวิตของทรัพยากรเข้ากับ Constructor (จอง) และ Destructor (คืน) ของ Stack Object ทำให้การคืนทรัพยากรเกิดขึ้นอัตโนมัติเมื่อหลุด Scope แม้จะเกิด Exception",
            "การเขียนโปรแกรมโดยใช้ภาษา C เท่านั้น",
            "การกำหนดให้ตัวแปรทุกตัวมีค่าเริ่มต้นเป็น 0"
          ],
          correctAnswer: 1,
          explanation: "RAII ใช้ประโยชน์จาก Stack Unwinding ของ C++ โดยการจองทรัพยากรใน Constructor และคืนทรัพยากรใน Destructor เมื่อ Object หลุดจากขอบเขต Scope ระบบจะเรียก Destructor คืนแรมหรือปิดไฟล์ให้อัตโนมัติ 100%"
        },
        {
          id: "cpp-q3-2",
          question: "เพราะเหตุใด std::unique_ptr จึงได้รับคำชมว่าเป็น Zero-cost Abstraction?",
          options: [
            "เพราะโปรแกรมเมอร์สามารถดาวน์โหลด Library มาใช้ได้ฟรี",
            "เพราะไม่มี Overhead ด้านหน่วยความจำหรือความเร็วเพิ่มเติมเมื่อเทียบกับ Raw Pointer ดั้งเดิม และคอมไพเลอร์จะอินไลน์คำสั่งทั้งหมด",
            "เพราะไม่ต้องใช้ CPU ในการประมวลผล",
            "เพราะไม่สามารถเก็บข้อมูลขนาดใหญ่เกิน 10 KB ได้"
          ],
          correctAnswer: 1,
          explanation: "std::unique_ptr ไม่ต้องเสียเวลาหรือพื้นที่ในการเก็บ Reference Count มันมีขนาดเท่ากับ Raw Pointer ทั่วไป (8 ไบต์) และคอมไพเลอร์จะกำจัด Wrapper ออกหมด จึงได้ทั้งความปลอดภัยและความเร็วเท่ากับโค้ดภาษา C"
        },
        {
          id: "cpp-q3-3",
          question: "std::weak_ptr มีบทบาทสำคัญในการแก้ไขปัญหาใดในระบบที่ใช้ std::shared_ptr?",
          options: [
            "แก้ไขปัญหาความเร็วของอินเทอร์เน็ต",
            "แก้ไขปัญหาวงจรมรณะ Circular Dependency ที่อ็อบเจกต์สองตัวถือ shared_ptr ชี้หากันเองจน Reference Count ไม่มีวันเป็นศูนย์",
            "แปลงโค้ด C++ ให้กลายเป็นภาษา Assembly อัตโนมัติ",
            "บีบอัดไฟล์ภาพให้เล็กลง"
          ],
          correctAnswer: 1,
          explanation: "Circular Dependency เกิดขึ้นเมื่ออ็อบเจกต์สองตัวต่างถือ shared_ptr ซึ่งกันและกัน ทำให้ตัวนับ use_count() ค้างอยู่ที่อย่างน้อย 1 เสมอ ส่งผลให้ Destructor ไม่ทำงานและแรมรั่ว std::weak_ptr ช่วยให้สังเกตการณ์ได้โดยไม่เพิ่มตัวนับ"
        }
      ]
    },
    {
      id: "cpp-4",
      title: "Move Semantics และ Rvalue References (std::move) เพื่อประสิทธิภาพ Zero-Copy",
      description: "ทำความเข้าใจ Value Categories: Lvalues vs Rvalues, Rvalue Reference (&&), Move Constructor, Move Assignment Operator, Rule of Five และ Perfect Forwarding (std::forward)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Move Semantics และ Rvalue References ใน C++

ก่อนหน้ามาตรฐาน C++11 เมื่อเราส่งข้อมูลอ็อบเจกต์ขนาดใหญ่ (เช่น \`std::vector\` ที่มีข้อมูลนับล้านตัว) ภาษา C++ จะทำการ **Deep Copy** คัดลอกข้อมูลใน RAM ทั้งก้อนซ้ำใหม่เสมอ ซึ่งทำให้สูญเสียประสิทธิภาพมหาศาล

**Move Semantics** ใน C++11 ถึง C++23 เข้ามาปฏิวัติสิ่งนี้ด้วยแนวคิด: **"แทนที่จะก๊อปปี้ ทำไมเราไม่ขโมย (Steal) พอยน์เตอร์ภายในมาเลยล่ะ?"**

---

## 1. Value Categories: Lvalues ปะทะ Rvalues
- **Lvalue (Left-value):** อ็อบเจกต์ที่มี **ตัวตนและตำแหน่งหน่วยความจำที่แน่นอน (Named Memory Address)** เราสามารถใส่เครื่องหมาย \`&\` เพื่อหาที่อยู่ของมันได้ เช่น ตัวแปร \`int x = 10;\` (ตัวแปร \`x\` คือ lvalue)
- **Rvalue (Right-value):** ค่าชั่วคราว (**Temporary Value / Ephemeral Object**) ที่ไม่มีชื่อและกำลังจะถูกทำลายทิ้งหลังจบบรรทัด เช่น ผลลัพธ์จากการคำนวณ \`x + 5\` หรือค่าส่งคืนจากฟังก์ชัน \`createBuffer()\`

---

## 2. Rvalue References (\`T&&\`) และ \`std::move\`
C++ นำเสนอไวยากรณ์ \`&&\` สำหรับผูกเข้ากับ Rvalue ชั่วคราว:
- **\`std::move(x)\` ทำงานอย่างไร:**  
  \`std::move\` **ไม่ได้ย้ายข้อมูลอะไรเลยในตอนรันไทม์!** มันเป็นเพียงการ **Cast** ทางคอมไพเลอร์เพื่อเปลี่ยนสถานะจาก Lvalue ให้กลายเป็น Rvalue เพื่อสั่งให้คอมไพเลอร์เลือกใช้ **Move Constructor** แทน Copy Constructor!

\`\`\`cpp
// Copy Constructor (ช้า: จองแรมใหม่ + ก๊อปปี้ข้อมูล 1,000,000 ตัว):
std::vector<int> a(1'000'000, 7);
std::vector<int> b = a; // Deep Copy

// Move Constructor (เร็วระดับเสี้ยวนาโนวินาที: สลับพอยน์เตอร์ 3 ตัว):
std::vector<int> c = std::move(a); // a สละพอยน์เตอร์ให้ c ทันที, a กลายเป็นเวกเตอร์ว่าง
\`\`\`

---

## 3. The Rule of Five (กฎแห่ง 5 ประการ)
หากคลาสของคุณมีการจัดการ Raw Resources บน Heap คุณต้องนิยามฟังก์ชันพิเศษ 5 ตัวให้ครบถ้วน:
1. **Destructor:** \`~MyClass()\`
2. **Copy Constructor:** \`MyClass(const MyClass& other)\`
3. **Copy Assignment Operator:** \`MyClass& operator=(const MyClass& other)\`
4. **Move Constructor:** \`MyClass(MyClass&& other) noexcept\`
5. **Move Assignment Operator:** \`MyClass& operator=(MyClass&& other) noexcept\`

> **คำเตือนประสิทธิภาพ:**  
> ฟังก์ชัน Move ควรใส่คีย์เวิร์ด \`noexcept\` เสมอ มิฉะนั้น \`std::vector\` จะปฏิเสธการใช้ Move ตอน Reallocation และจะถอยกลับไปใช้ Copy เพื่อความปลอดภัยแทน!`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++23: การสร้าง Custom Buffer พร้อม Move Semantics (Rule of 5)
// =================================================================

#include <iostream>
#include <utility>

class FastMemoryBuffer {
private:
    size_t size_;
    int* data_;

public:
    // 1. Constructor ปกติ
    FastMemoryBuffer(size_t size) : size_(size), data_(new int[size]) {
        std::cout << "[ALLOC] Allocated " << size_ << " integers on Heap." << std::endl;
    }

    // 2. Destructor
    ~FastMemoryBuffer() {
        if (data_ != nullptr) {
            std::cout << "[DEALLOC] Freeing " << size_ << " integers." << std::endl;
            delete[] data_;
        } else {
            std::cout << "[DEALLOC] Nothing to free (Resource was moved)." << std::endl;
        }
    }

    // 3. Move Constructor: ขโมยพอยน์เตอร์แทนการ Copy (noexcept)
    FastMemoryBuffer(FastMemoryBuffer&& other) noexcept 
        : size_(other.size_), data_(other.data_) {
        // ขโมยเสร็จแล้ว ต้องเซ็ตให้ตัวเดิมชี้ไปที่ nullptr!
        other.size_ = 0;
        other.data_ = nullptr;
        std::cout << "[MOVE CONSTRUCTOR] Stole memory pointer instantly (O(1) Zero-Copy)!" << std::endl;
    }

    // 4. Move Assignment Operator
    FastMemoryBuffer& operator=(FastMemoryBuffer&& other) noexcept {
        if (this != &other) {
            delete[] data_; // คืนหน่วยความจำเดิมของตัวเอง
            size_ = other.size_;
            data_ = other.data_;
            other.size_ = 0;
            other.data_ = nullptr;
            std::cout << "[MOVE ASSIGNMENT] Swapped ownership smoothly." << std::endl;
        }
        return *this;
    }

    // ปิดการ Copy เพื่อบังคับให้ใช้เฉพาะ Move Semantics
    FastMemoryBuffer(const FastMemoryBuffer&) = delete;
    FastMemoryBuffer& operator=(const FastMemoryBuffer&) = delete;

    size_t size() const { return size_; }
};

int main() {
    std::cout << "=== Move Semantics Zero-Copy Demonstration ===" << std::endl;

    FastMemoryBuffer bufferA(500000);
    std::cout << "Buffer A size: " << bufferA.size() << std::endl;

    // ย้ายทรัพยากรจาก bufferA ไปยัง bufferB ด้วย std::move
    FastMemoryBuffer bufferB = std::move(bufferA);

    std::cout << "Buffer A size after move: " << bufferA.size() << std::endl;
    std::cout << "Buffer B size after move: " << bufferB.size() << std::endl;

    return 0;
}`,
        description: "สคริปต์สาธิตการสร้างคลาสที่รองรับ Move Semantics (Rule of Five) เพื่อประสิทธิภาพระดับ Zero-Copy"
      },
      challenge: {
        description: "เขียนคำสั่งใช้ std::move เพื่อย้ายเวกเตอร์ sourceVec ไปยัง destVec โดยไม่ให้เกิดการคัดลอกข้อมูล",
        startingCode: `#include <iostream>
#include <vector>
#include <utility>

int main() {
    std::vector<int> sourceVec = {1, 2, 3, 4, 5};
    std::vector<int> destVec;

    // TODO: ย้ายข้อมูลจาก sourceVec ไป destVec ด้วย std::move
    
    std::cout << "destVec size: " << destVec.size() << std::endl;
    return 0;
}`,
        solution: `#include <iostream>
#include <vector>
#include <utility>

int main() {
    std::vector<int> sourceVec = {1, 2, 3, 4, 5};
    std::vector<int> destVec = std::move(sourceVec);

    std::cout << "destVec size: " << destVec.size() << std::endl;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q4-1",
          question: "คำสั่ง std::move(variable) ในภาษา C++ มีพฤติกรรมการทำงานที่แท้จริงอย่างไร?",
          options: [
            "ก๊อปปี้ข้อมูลทั้งหมดข้าม Harddisk แบบมัลติเธรด",
            "เป็นคำสั่ง Cast ทางคอมไพเลอร์ที่เปลี่ยนสถานะตัวแปรจาก Lvalue ให้กลายเป็น Rvalue เพื่อให้สามารถเรียกใช้ Move Constructor ได้",
            "ลบตัวแปรนั้นออกจากหน่วยความจำทันที",
            "สลับข้อมูลในแรมด้วยอัลกอริทึม QuickSort"
          ],
          correctAnswer: 1,
          explanation: "std::move แท้จริงแล้วเป็นเพียง static_cast<T&&>(var) ที่บอกคอมไพเลอร์ว่าตัวแปรนี้พร้อมให้ขโมยทรัพยากรได้ โดยไม่ได้มีโค้ดการย้ายข้อมูลรันในตัวของมันเอง"
        },
        {
          id: "cpp-q4-2",
          question: "เหตุใดจึงควรระบุ noexcept กำกับไว้บน Move Constructor และ Move Assignment Operator เสมอ?",
          options: [
            "เพื่อให้ฟังก์ชันรันเฉพาะตอนกลางวัน",
            "เพื่อให้คอนเทนเนอร์ใน Standard Library เช่น std::vector ยอมใช้งาน Move Semantics ตอนขยายขนาด (Reallocation) แทนที่จะถอยกลับไปใช้ Copy Constructor เพื่อความปลอดภัยของข้อมูล",
            "เพื่อปิดการทำงานของระบบระบายความร้อนของ CPU",
            "เพื่อแปลงให้เป็นภาษา C"
          ],
          correctAnswer: 1,
          explanation: "std::vector ยึดหลัก Strong Exception Guarantee หาก Move Constructor อาจโยนข้อยกเว้นได้ vector จะยอมเสียเวลาทำ Deep Copy แทนเพื่อไม่ให้ข้อมูลสูญหาย การใส่ noexcept จึงเป็นการปลดล็อกให้ vector ใช้ Move ได้อย่างมั่นใจ"
        },
        {
          id: "cpp-q4-3",
          question: "ในสถาปัตยกรรม Rule of Five หากเราย้ายพอยน์เตอร์จากอ็อบเจกต์ A ไปยัง B ใน Move Constructor สิ่งสำคัญที่สุดที่ต้องทำกับอ็อบเจกต์ A คืออะไร?",
          options: [
            "กำหนดพอยน์เตอร์ของ A ให้เป็น nullptr เพื่อป้องกันไม่ให้ Destructor ของ A มาเผลอ delete หน่วยความจำที่ B กำลังถือครองอยู่",
            "สั่งให้โปรแกรมปิดตัวลงทันที",
            "สั่งพิมพ์ค่าของ A ออกหน้าจอ 100 ครั้ง",
            "ส่งอีเมลแจ้งเตือนผู้ดูแลระบบ"
          ],
          correctAnswer: 0,
          explanation: "เมื่อขโมยพอยน์เตอร์ไปแล้ว อ็อบเจกต์เดิมจะต้องถูกเซ็ตเป็น nullptr ทันที มิฉะนั้นเมื่ออ็อบเจกต์เดิมหลุดจาก Scope และ Destructor ทำงาน จะเกิดบั๊ก Double Free ทำลายหน่วยความจำที่อ็อบเจกต์ใหม่กำลังใช้งานอยู่"
        }
      ]
    },
    {
      id: "cpp-5",
      title: "Generic Programming ด้วย C++ Templates และ C++20 Concepts",
      description: "วิวัฒนาการของการเขียน Generic Code: Function & Class Templates, Template Specialization, SFINAE ข้อผิดพลาดดั้งเดิม, และปฏิวัติด้วย C++20 Concepts & Constraints (requires clause)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Generic Programming ด้วย C++ Templates และ C++20 Concepts

จุดแข็งอันดับหนึ่งของภาษา C++ คือ **Template Metaprogramming** ซึ่งทำงานในระดับ **Compile-Time** ทำให้การเขียนโค้ดที่รองรับหลายประเภทข้อมูลไม่มีค่าใช้จ่ายด้านประสิทธิภาพตอนรันไทม์ (Zero Runtime Overhead)

---

## 1. พื้นฐาน Function และ Class Templates
\`\`\`cpp
// คอมไพเลอร์จะสร้างฟังก์ชันเวอร์ชันเฉพาะเจาะจงขึ้นมาตาม Type ที่ถูกเรียกใช้งานจริง (Monomorphization)
template <typename T>
T findMaximum(T a, T b) {
    return (a > b) ? a : b;
}

// ใช้งาน:
findMaximum(10, 20);       // คอมไพเลอร์สร้างฟังก์ชัน: int findMaximum(int, int)
findMaximum(3.14, 2.71);   // คอมไพเลอร์สร้างฟังก์ชัน: double findMaximum(double, double)
\`\`\`

---

## 2. ฝันร้ายในอดีต: SFINAE และ Error Messages ยาวนับพันบรรทัด
ในอดีต (C++98 ถึง C++17) หากเราส่ง Type ที่ไม่รองรับ (เช่น คลาสที่ไม่มีเครื่องหมาย \`>\`) เข้าไปใน Template คอมไพเลอร์จะพ่น Error Message ซ้อนกันยาวเป็นพันบรรทัดจนอ่านไม่รู้เรื่อง โปรแกรมเมอร์ต้องใช้เทคนิคอันซับซ้อนที่เรียกว่า **SFINAE** (\`std::enable_if\`) เพื่อคัดกรอง Type

---

## 3. ยุคทองของ C++20: Concepts & Constraints
**Concepts** คือการสร้าง "ข้อกำหนด (Contract)" ทางไวยากรณ์ที่คอมไพเลอร์เข้าใจได้โดยตรง:

\`\`\`cpp
#include <concepts>

// 1. สร้าง Custom Concept: บังคับว่า T ต้องเป็นตัวเลข (Integral หรือ Floating point)
template <typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

// 2. นำ Concept มากำกับฟังก์ชัน Template:
template <Numeric T>
T calculateAverage(T a, T b) {
    return (a + b) / 2;
}

// หรือใช้ไวยากรณ์แบบกระชับ (Terse Syntax ใน C++20):
auto addValues(Numeric auto a, Numeric auto b) {
    return a + b;
}
\`\`\`

### การใช้ \`requires\` Clause ตรวจสอบ Method และความสามารถ:
\`\`\`cpp
template <typename T>
concept Printable = requires(T item) {
    std::cout << item; // ต้องสามารถส่งออกทาง std::cout ได้
};

template <typename T>
concept Serializable = requires(T item) {
    { item.toJson() } -> std::same_as<std::string>; // ต้องมีเมธอด toJson() ที่คืนค่าเป็น string
};
\`\`\`

เมื่อใครเผลอส่ง Type ที่ไม่ผ่านเกณฑ์เข้าไป คอมไพเลอร์จะแจ้งเตือนเพียงบรรทัดเดียวอย่างชัดเจน:  
\`error: constraints not satisfied for class 'Student' (does not satisfy 'Numeric')\``,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++20/C++23: การสร้างและใช้งาน Concepts & Constraints
// =================================================================

#include <iostream>
#include <concepts>
#include <string>
#include <vector>

// 1. นิยาม Concept กำหนดว่า Type ต้องสามารถบวกกันได้ และแปลงเป็นตัวเลขได้
template <typename T>
concept Summable = requires(T a, T b) {
    { a + b } -> std::convertible_to<T>;
};

// 2. นิยาม Concept สำหรับ Entity ที่มีเมธอด getIdentification()
template <typename T>
concept Identifiable = requires(T obj) {
    { obj.getIdentification() } -> std::same_as<std::string>;
};

// 3. ฟังก์ชันคำนวณผลรวมที่ถูกควบคุมด้วย Concept
template <Summable T>
T accumulateValues(const std::vector<T>& items, T initialValue) {
    T total = initialValue;
    for (const auto& item : items) {
        total = total + item;
    }
    return total;
}

// 4. คลาสตัวอย่างที่ผ่านเกณฑ์ Identifiable
class HighPerformanceServer {
private:
    std::string serverTag_;
public:
    HighPerformanceServer(std::string tag) : serverTag_(tag) {}
    std::string getIdentification() const { return serverTag_; }
};

template <Identifiable T>
void printAuditLog(const T& entity) {
    std::cout << "[AUDIT] Verified entity: " << entity.getIdentification() << std::endl;
}

int main() {
    std::cout << "=== Modern C++20 Concepts Demonstration ===" << std::endl;

    std::vector<double> latencySamples = {1.24, 0.85, 2.10, 1.45};
    double totalLatency = accumulateValues(latencySamples, 0.0);
    std::cout << "Total Network Latency: " << totalLatency << " ms" << std::endl;

    std::vector<std::string> logWords = {"Modern ", "C++23 ", "Concepts ", "Rock!"};
    std::string combinedLog = accumulateValues(logWords, std::string(""));
    std::cout << "Combined String: " << combinedLog << std::endl;

    HighPerformanceServer nodeAlpha("AWS-AP-SOUTHEAST-PROD-01");
    printAuditLog(nodeAlpha);

    return 0;
}`,
        description: "สคริปต์สาธิตการนิยาม Concept และการตรวจสอบเงื่อนไข Compile-Time ใน C++20"
      },
      challenge: {
        description: "เขียน Concept ชื่อ NumberType ที่ตรวจสอบว่าประเภทข้อมูล T เป็นตัวเลขจำนวนเต็ม (std::integral<T>) หรือทศนิยม (std::floating_point<T>)",
        startingCode: `#include <iostream>
#include <concepts>

// TODO: นิยาม concept NumberType
template <typename T>
concept NumberType = ...;

int main() {
    std::cout << "Concepts Ready" << std::endl;
    return 0;
}`,
        solution: `#include <iostream>
#include <concepts>

template <typename T>
concept NumberType = std::integral<T> || std::floating_point<T>;

int main() {
    std::cout << "Concepts Ready" << std::endl;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q5-1",
          question: "C++20 Concepts มีประโยชน์หลักที่เหนือกว่าเทคนิค SFINAE ในอดีตอย่างไร?",
          options: [
            "ทำให้โปรแกรมรันบนเบราว์เซอร์ได้ทันที",
            "ช่วยกำหนดข้อจำกัดของ Template ได้อย่างชัดเจน อ่านเข้าใจง่าย และหากเกิดข้อผิดพลาด คอมไพเลอร์จะแสดง Error Message ที่กระชับตรงจุดแทนที่จะเป็น Error ยาวหลายร้อยบรรทัด",
            "เปลี่ยนให้ C++ กลายเป็นภาษาแบบ Dynamically-typed",
            "เพิ่มขนาดไฟล์ไบนารีให้ใหญ่ขึ้น 10 เท่า"
          ],
          correctAnswer: 1,
          explanation: "Concepts ช่วยให้นักพัฒนาสามารถระบุ Constraints ของ Template Type ได้ชัดเจนในระดับ Compile-Time ทำให้อ่านเข้าใจง่ายขึ้นมหาศาล และให้ข้อความแจ้งเตือนที่เข้าใจได้ทันทีเมื่อประเภทข้อมูลไม่ตรงตามเงื่อนไข"
        },
        {
          id: "cpp-q5-2",
          question: "กระบวนการ Monomorphization ของ C++ Template มีหลักการทำงานอย่างไร?",
          options: [
            "แปลงโค้ด C++ ทุกตัวให้กลายเป็นภาษา Java ก่อนรัน",
            "คอมไพเลอร์จะสร้างชุดคำสั่ง Machine Code เฉพาะเจาะจงสำหรับแต่ละ Type ที่ถูกเรียกใช้งานจริงในตอนคอมไพล์ ทำให้ไม่มีค่าใช้จ่ายด้านประสิทธิภาพตอนรันไทม์ (Zero Runtime Overhead)",
            "ลบประเภทข้อมูลทิ้งและแทนที่ด้วย void*",
            "รันโค้ดทั้งหมดผ่านระบบคลาวด์"
          ],
          correctAnswer: 1,
          explanation: "C++ ใช้การสร้าง Instance ของฟังก์ชันหรือคลาสแยกตามแต่ละ Type จริงในขั้นตอนการคอมไพล์ (Monomorphization) จึงไม่มีการทำ Dynamic Dispatch หรือ Boxing/Unboxing ส่งผลให้โค้ดทำงานได้ด้วยความเร็วสูงสุดของฮาร์ดแวร์"
        },
        {
          id: "cpp-q5-3",
          question: "ไวยากรณ์ auto add(std::integral auto a, std::integral auto b) ใน C++20 เรียกว่าอะไร?",
          options: [
            "Terse Concept Syntax (Abbreviated Function Template)",
            "Legacy Macro Syntax",
            "Assembly Inline Block",
            "Preprocessor Directive"
          ],
          correctAnswer: 0,
          explanation: "C++20 แนะนำ Terse Syntax หรือ Abbreviated Function Template ซึ่งอนุญาตให้วางชื่อ Concept นำหน้าคีย์เวิร์ด auto ในพารามิเตอร์ของฟังก์ชันได้โดยตรง ทำให้เขียน Template ได้กระชับเหมือนฟังก์ชันปกติ"
        }
      ]
    },
    {
      id: "cpp-6",
      title: "Standard Template Library (STL), Cache Locality และการเลือก Data Structure",
      description: "ความเข้าใจระดับฮาร์ดแวร์: CPU Cache Hierarchy (L1, L2, L3, RAM), Cache Lines (64 Bytes), Cache Misses, ทำไม std::vector ถึงเร็วกว่า std::list แทบทุกกรณี, std::deque, std::unordered_map และ flat_map ใน C++23",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# STL, Cache Locality และการออกแบบที่สอดคล้องกับสถาปัตยกรรม CPU

ในการเขียนโปรแกรมระดับแข่งขันหรือระบบ Low-Latency ความเร็วของอัลกอริทึมไม่ได้ขึ้นอยู่กับ **Big-O Notation** ทางทฤษฎีเพียงอย่างเดียว แต่ขึ้นอยู่กับ **ฮาร์ดแวร์และแคชของ CPU (Hardware Memory Hierarchy)** เป็นสำคัญ

---

## 1. ลำดับชั้นความเร็วของหน่วยความจำ (Memory Latency Numbers)
| อุปกรณ์หน่วยความจำ | ความเร็วในการเข้าถึง (โดยประมาณ) | เปรียบเทียบระยะเวลาเชิงเปรียบเปรย |
|---|---|---|
| **CPU L1 Cache** | ~0.5 – 1.0 นาโนวินาที | 1 วินาที (หยิบของบนโต๊ะ) |
| **CPU L2 Cache** | ~3.0 – 5.0 นาโนวินาที | 5 วินาที (เดินไปหยิบของที่ตู้หนังสือ) |
| **CPU L3 Cache** | ~10 – 20 นาโนวินาที | 20 วินาที (เดินไปหยิบของหน้าบ้าน) |
| **Main RAM (DDR4/DDR5)** | ~50 – 100 นาโนวินาที | **4 นาที (เดินไปซื้อของที่ร้านสะดวกซื้อ)** |
| **NVMe SSD / Disk** | ~10,000 – 100,000 นาโนวินาที | **หลายวันหรือหลายสัปดาห์!** |

---

## 2. ทำไม \`std::vector\` ถึงเอาชนะ \`std::list\` ได้แทบทุกการทดสอบ?
ทฤษฎีวิทยาการคอมพิวเตอร์แบบคลาสสิกระบุว่า:  
- การแทรกข้อมูลตรงกลางใน \`std::list\` ใช้เวลา **O(1)**
- การแทรกข้อมูลใน \`std::vector\` ต้องเลื่อนตำแหน่งข้อมูล ใช้เวลา **O(n)**

**แต่ในความเป็นจริงบนฮาร์ดแวร์ปัจจุบัน \`std::vector\` กลับเร็วกว่านับสิบเท่า!** เพราะ:
1. **Cache Line (ขนาด 64 ไบต์):** เมื่อ CPU อ่านข้อมูลจาก RAM มันไม่ได้ดึงมาแค่ 4 หรือ 8 ไบต์ แต่จะดึงข้อมูลทั้งบล็อกขนาด 64 ไบต์ต่อเนื่องกันมาใส่ใน Cache เสมอ
2. **Spatial Locality:** ข้อมูลใน \`std::vector\` เรียงติดกันเป็นแถวยาวบน RAM เมื่อ CPU อ่านข้อมูลตัวแรก ข้อมูล 15 ตัวถัดไปจะถูกโหลดเข้า L1 Cache พร้อมกันโดยอัตโนมัติ ทำให้การเข้าถึงตัวถัดไปเกิด **Cache Hit (O(1ns))**
3. **Cache Miss ของ LinkedList:** ข้อมูลของ \`std::list\` กระจัดกระจายอยู่คนละทิศละทางบน Heap เมื่อโปรแกรมวิ่งตาม Pointer จากโหนดหนึ่งไปอีกโหนดหนึ่ง CPU จะเจอปัญหา **Cache Miss** เกือบ 100% ทำให้ต้องหยุดรอข้อมูลจาก RAM ตลอดเวลา (CPU Stalling)!

---

## 3. ตารางคู่มือการเลือก Container ใน Production
- **\`std::vector\`:** ทางเลือกเริ่มต้นอันดับ 1 สำหรับเกือบทุกกรณี (95% ของงาน)
- **\`std::array\`:** ใช้เมื่อขนาดข้อมูลคงที่และทราบขนาดตั้งแต่ตอนคอมไพล์ (จัดสรรบน Stack ได้ทันที O(0) Heap Overhead)
- **\`std::deque\`:** เมื่อต้องการแทรกข้อมูลทั้งหัวและท้าย (Double-ended queue) โดยไม่ต้องย้ายที่ทั้งบล็อก
- **\`std::unordered_map\`:** ตารางแฮช O(1) แต่ระวังเรื่อง Node allocation
- **\`std::flat_map\` (นวัตกรรมใหม่ใน C++23):** รวมตาราง Hash/Tree ให้อยู่บนสอง Vector ที่เรียงติดกันใน RAM เพื่อให้ได้ Cache Locality ระดับสูงสุด!`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++23: การเปรียบเทียบประสิทธิภาพ Cache Locality (Vector vs List)
// =================================================================

#include <iostream>
#include <vector>
#include <list>
#include <chrono>
#include <numeric>

int main() {
    std::cout << "=== CPU Cache Locality & Sequential Access Benchmark ===" << std::endl;

    const size_t NUM_ELEMENTS = 5'000'000;

    // 1. เวกเตอร์ที่ข้อมูลเรียงชิดติดกันในหน่วยความจำ (Contiguous Memory)
    std::vector<int> contiguousVector(NUM_ELEMENTS, 1);

    // 2. ลิงก์ลิสต์ที่แต่ละโหนดกระจัดกระจายบน Heap
    std::list<int> scatteredList(NUM_ELEMENTS, 1);

    // Benchmark 1: ท่องข้อมูลบน Vector (High Cache Hits)
    auto startVec = std::chrono::high_resolution_clock::now();
    long long sumVec = 0;
    for (int val : contiguousVector) {
        sumVec += val;
    }
    auto endVec = std::chrono::high_resolution_clock::now();
    auto durationVec = std::chrono::duration_cast<std::chrono::microseconds>(endVec - startVec).count();

    // Benchmark 2: ท่องข้อมูลบน List (Frequent Cache Misses)
    auto startList = std::chrono::high_resolution_clock::now();
    long long sumList = 0;
    for (int val : scatteredList) {
        sumList += val;
    }
    auto endList = std::chrono::high_resolution_clock::now();
    auto durationList = std::chrono::duration_cast<std::chrono::microseconds>(endList - startList).count();

    std::cout << "Vector (Contiguous Cache Hits) Time: " << durationVec << " microseconds" << std::endl;
    std::cout << "List   (Node Chasing Cache Miss)  Time: " << durationList << " microseconds" << std::endl;
    std::cout << "Speed Ratio: Vector เร็วกว่า List ประมาณ " << (double)durationList / durationVec << " เท่า!" << std::endl;

    return 0;
}`,
        description: "สคริปต์ Benchmark พิสูจน์ความเร็วระหว่าง std::vector กับ std::list อันเนื่องมาจาก CPU Cache Locality"
      },
      challenge: {
        description: "เขียนคำสั่ง C++ ประกาศ std::vector<int> ขนาด 10 ตัว โดยกำหนดค่าเริ่มต้นทุกตัวเป็นเลข 100",
        startingCode: `#include <iostream>
#include <vector>

int main() {
    // TODO: ประกาศเวกเตอร์ขนาด 10 ตัว ค่า 100
    
    return 0;
}`,
        solution: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> myVec(10, 100);
    std::cout << "Size: " << myVec.size() << " Front: " << myVec.front() << std::endl;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q6-1",
          question: "เหตุใด std::vector จึงอ่านข้อมูลเร็วกว่า std::list อย่างมีนัยสำคัญบนสถาปัตยกรรม CPU ยุคใหม่?",
          options: [
            "เพราะ std::vector เขียนด้วยภาษา C ส่วน std::list เขียนด้วย Python",
            "เพราะข้อมูลใน std::vector เรียงต่อเนื่องกันในหน่วยความจำ (Contiguous Memory) ทำให้เกิด Spatial Locality และดึงข้อมูลทั้ง Cache Line (64 Bytes) มาเก็บใน L1/L2 Cache ได้ในรอบเดียว",
            "เพราะ std::vector ทำงานเฉพาะบนการ์ดจอ GPU",
            "เพราะ std::list ถูกปิดการทำงานโดย OS"
          ],
          correctAnswer: 1,
          explanation: "เมื่อ CPU อ่านข้อมูล มันจะดึงข้อมูลต่อเนื่องกัน 64 ไบต์เข้าสู่ Cache Line เสมอ std::vector ซึ่งเรียงข้อมูลติดกันจึงได้ประโยชน์เต็มที่ (Cache Hits) ขณะที่ std::list ต้องกระโดดตามพอยน์เตอร์บนฮีปทำให้เกิด Cache Misses ตลอดเวลา"
        },
        {
          id: "cpp-q6-2",
          question: "ขนาดของ CPU Cache Line บนหน่วยประมวลผล x86_64 และ ARM64 ส่วนใหญ่ในปัจจุบันมีขนาดเท่าใด?",
          options: [
            "4 ไบต์",
            "16 ไบต์",
            "64 ไบต์",
            "1,024 ไบต์"
          ],
          correctAnswer: 2,
          explanation: "Cache Line มาตรฐานของ CPU สมัยใหม่ส่วนใหญ่ (Intel, AMD, Apple Silicon ARM) มีขนาด 64 ไบต์ ซึ่งการจัดเรียง Data Structure ให้ชิดติดกันพอดีกับ 64 ไบต์เป็นเทคนิคสำคัญในการจูนประสิทธิภาพระดับสูงสุด"
        },
        {
          id: "cpp-q6-3",
          question: "คอนเทนเนอร์ประเภทใดที่เหมาะที่สุดเมื่อต้องการจองข้อมูลอาเรย์ที่มีขนาดคงที่แน่นอนตั้งแต่ตอนคอมไพล์เพื่อหลีกเลี่ยงการจัดสรรหน่วยความจำบน Heap (Zero Heap Overhead)?",
          options: [
            "std::list",
            "std::vector",
            "std::array",
            "std::queue"
          ],
          correctAnswer: 2,
          explanation: "std::array<T, N> ห่อหุ้ม C-style array ดั้งเดิมแต่เพิ่มความปลอดภัยและ STL interfaces โดยข้อมูลทั้งหมดจะจัดสรรอยู่บน Stack โดยตรง ทำให้ไม่มีต้นทุนการจองแรมบน Heap แม้แต่ไบต์เดียว"
        }
      ]
    },
    {
      id: "cpp-7",
      title: "Multithreading, Atomic Operations (std::atomic) และ Lock-Free Programming",
      description: "การประมวลผลแบบขนาน: std::jthread ใน C++20 (Auto-join & Cancellation Tokens), Race Conditions, Mutex vs Lock-Free CAS, Memory Orders (relaxed, acquire, release, seq_cst) และ False Sharing",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Multithreading, Atomic Operations และ Lock-Free Architecture

ในระบบระดับ Enterprise และ High-Frequency Trading การใช้ Mutex Lock แบบดั้งเดิมอาจก่อให้เกิด **Thread Contention, Priority Inversion และ Context Switching Overhead** ที่กินเวลาหลายไมโครวินาที

Modern C++ นำเสนอเครื่องมือ Concurrency ระดับสูงตั้งแต่ **\`std::jthread\`** ไปจนถึงการเขียนโปรแกรมไร้แม่กุญแจ (**Lock-Free Programming**) ผ่าน **\`std::atomic\`**

---

## 1. \`std::jthread\` (Joining Thread ใน C++20)
ในอดีต (\`std::thread\` ใน C++11) หากเธรดหลุด Scope โดยไม่ได้เรียก \`.join()\` หรือ \`.detach()\` โปรแกรมจะสั่งแครชทันทีผ่าน \`std::terminate()\`!

**\`std::jthread\` แก้ไขปัญหานี้ทั้งหมด:**
- ทำตามหลัก **RAII**: Destructor จะเรียก \`join()\` ให้อัตโนมัติเมื่อหลุดจาก Scope
- รองรับการขอยกเลิกงานในตัวผ่าน **\`std::stop_token\`** โดยไม่ต้องใช้ตัวแปร boolean แยกต่างหาก

\`\`\`cpp
std::jthread worker([](std::stop_token stopToken) {
    while (!stopToken.stop_requested()) {
        doBackgroundWork();
    }
}); // เมื่อจบ Scope worker จะส่งสัญญาณขอหยุดและรอให้เธรดทำงานจบอย่างปลอดภัย!
\`\`\`

---

## 2. Lock-Free Architecture ด้วย \`std::atomic<T>\`
การใช้ \`std::mutex\` บังคับให้ OS ต้องสลับ Context ของ CPU (ซึ่งมีต้นทุน ~1,000 – 2,000 นาโนวินาที)  
ในขณะที่ **Atomic Operations** อาศัยคำสั่งพิเศษของฮาร์ดแวร์ CPU โดยตรง เช่น **CAS (Compare-And-Swap หรือคำสั่ง \`CMPXCHG\` บน x86)** ซึ่งทำงานจบภายในระดับ **~5 – 10 นาโนวินาที**:

\`\`\`cpp
std::atomic<int> counter{0};

// ทำงานแบบ Atomic Increment ปลอดภัยจาก Race Condition 100% โดยไม่ต้องใช้ Mutex Lock
counter.fetch_add(1, std::memory_order_relaxed);
\`\`\`

---

## 3. โมเดลความสอดคล้องของหน่วยความจำ (C++ Memory Orders)
ในการบีบเค้นความเร็วสูงสุด เราสามารถระบุระดับความเข้มงวดของการจัดลำดับคำสั่ง (Instruction Reordering):
- **\`std::memory_order_seq_cst\` (Sequential Consistency):** ปริยาย ปลอดภัยที่สุด การันตีว่าทุก CPU Core จะเห็นลำดับการทำงานตรงกันทั้งหมด
- **\`std::memory_order_acquire\` & \`std::memory_order_release\`:** ป้องกันไม่ให้คำสั่งอ่านหรือเขียนข้อมูลหลุดข้ามเส้นกั้น นิยมใช้ในการสร้าง Lock-Free Ring Buffers และ Message Queues
- **\`std::memory_order_relaxed\`:** รับประกันเฉพาะความเป็นอะตอมมิกของตัวแปรนั้น แต่ไม่การันตีลำดับกับตัวแปรอื่น (เร็วที่สุด)

---

## 4. กับดักความเร็ว: False Sharing
**False Sharing คืออะไร:**  
เมื่อตัวแปรอิสระ 2 ตัวที่ถูกแก้ไขโดย 2 CPU Core ดันบังเอิญตั้งอยู่บน **Cache Line เดียวกัน (ภายใน 64 ไบต์เดียวกัน)**:
เมื่อ Core 1 แก้ไขค่าตัวแปร A ระบบ Hardware Cache Coherency Protocol (MESI) จะบังคับให้ Cache Line ของ Core 2 กลายเป็นโมฆะ (Invalidate) ทำให้ Core 2 ต้องไปดึงข้อมูลจาก L3/RAM ใหม่ ทั้งๆ ที่ Core 2 ไม่ได้ยุ่งกับตัวแปร A เลย!

**วิธีแก้ (C++17 \`alignas\`):**
\`\`\`cpp
struct alignas(std::hardware_destructive_interference_size) ThreadData {
    std::atomic<int> counter; // บังคับให้อยู่คนละ Cache Line 64 ไบต์ ป้องกัน False Sharing!
};
\`\`\``,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++20: การประมวลผลมัลติเธรดด้วย std::jthread และ std::atomic
// =================================================================

#include <iostream>
#include <thread>
#include <vector>
#include <atomic>
#include <chrono>

int main() {
    std::cout << "=== Modern C++20 Multi-Threading & Lock-Free CAS Demo ===" << std::endl;

    const int THREAD_COUNT = 8;
    const int INCREMENTS_PER_THREAD = 100'000;

    // ตัวแปร Atomic สำหรับนับจำนวนแบบ Lock-Free
    std::atomic<long long> atomicCounter{0};

    auto workerTask = [&](int threadId) {
        for (int i = 0; i < INCREMENTS_PER_THREAD; ++i) {
            // fetch_add ทำงานที่ระดับฮาร์ดแวร์ ปลอดภัยไร้ Mutex
            atomicCounter.fetch_add(1, std::memory_order_relaxed);
        }
    };

    std::cout << "Launching " << THREAD_COUNT << " jthreads concurrently..." << std::endl;
    auto startTime = std::chrono::high_resolution_clock::now();

    {
        // ใช้งาน std::jthread ร่วมกับเวกเตอร์
        std::vector<std::jthread> threads;
        threads.reserve(THREAD_COUNT);

        for (int i = 0; i < THREAD_COUNT; ++i) {
            threads.emplace_back(workerTask, i);
        }
    } // เมื่อหลุด Scope ตรงนี้ std::jthread ทุกตัวจะ join() จบงานโดยอัตโนมัติ!

    auto endTime = std::chrono::high_resolution_clock::now();
    auto elapsedUs = std::chrono::duration_cast<std::chrono::microseconds>(endTime - startTime).count();

    long long expectedValue = (long long)THREAD_COUNT * INCREMENTS_PER_THREAD;
    std::cout << "\n--- Multithreading Execution Telemetry ---" << std::endl;
    std::cout << "Expected Counter Value: " << expectedValue << std::endl;
    std::cout << "Actual Atomic Counter  : " << atomicCounter.load() << std::endl;
    std::cout << "Execution Duration     : " << elapsedUs << " microseconds" << std::endl;
    std::cout << "Lock-Free Verification : " << (atomicCounter == expectedValue ? "PASSED (100% Safe)" : "FAILED") << std::endl;

    return 0;
}`,
        description: "สคริปต์สาธิตการรันมัลติเธรดแบบขนานด้วย std::jthread และการบวกตัวเลขนับแสนครั้งแบบ Lock-Free ด้วย std::atomic"
      },
      challenge: {
        description: "เขียนคำสั่ง C++ ประกาศตัวแปร atomic boolean ชื่อ isServiceRunning โดยกำหนดค่าเริ่มต้นเป็น true",
        startingCode: `#include <iostream>
#include <atomic>

int main() {
    // TODO: ประกาศ atomic boolean
    
    return 0;
}`,
        solution: `#include <iostream>
#include <atomic>

int main() {
    std::atomic<bool> isServiceRunning{true};
    std::cout << "Service Status: " << (isServiceRunning.load() ? "Active" : "Stopped") << std::endl;
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q7-1",
          question: "จุดเด่นที่สำคัญที่สุดของ std::jthread ใน C++20 เมื่อเทียบกับ std::thread เดิมคือข้อใด?",
          options: [
            "std::jthread ทำการเรียก join() อัตโนมัติใน Destructor เมื่อหลุด Scope ตามหลัก RAII และรองรับการส่งสัญญาณขอยกเลิกผ่าน stop_token",
            "std::jthread ทำให้โค้ดกลายเป็น Single-thread เพื่อความปลอดภัย",
            "std::jthread ใช้งานได้เฉพาะบนระบบปฏิบัติการ Windows เท่านั้น",
            "std::jthread ยกเลิกการใช้คำสั่ง while loop ทั้งหมด"
          ],
          correctAnswer: 0,
          explanation: "std::jthread ช่วยแก้ปัญหาบั๊กคลาสสิกที่โปรแกรมแครชเมื่อลืม join() โดยมันจะ auto-join เมื่อหลุดขอบเขตของ Scope เสมอ และรองรับ Stop Tokens สำหรับ Graceful Cancellation ได้ในตัว"
        },
        {
          id: "cpp-q7-2",
          question: "Atomic Operations เช่น fetch_add บน std::atomic มีความเร็วเหนือกว่าการใช้ std::mutex เพราะเหตุใด?",
          options: [
            "เพราะไม่ต้องรอคิว",
            "เพราะทำงานผ่านคำสั่งระดับฮาร์ดแวร์ของ CPU (เช่น CMPXCHG / CAS) โดยตรง ทำให้ไม่ต้องเกิด OS Thread Context Switch ที่กินเวลาหลายไมโครวินาที",
            "เพราะเขียนด้วยภาษา HTML",
            "เพราะทำงานเฉพาะในโหมดประหยัดพลังงาน"
          ],
          correctAnswer: 1,
          explanation: "การใช้ Mutex หากเกิด Contention ระบบปฏิบัติการจะต้องระงับเธรดและสลับ Context Switch ซึ่งมีค่าใช้จ่ายสูงมาก ขณะที่ Atomic Instructions ทำงานจบในระดับไม่กี่รอบสัญญาณนาฬิกาของ CPU โดยไม่ต้องพึ่งพา OS Kernel"
        },
        {
          id: "cpp-q7-3",
          question: "ปรากฏการณ์ False Sharing ในงาน Multithreading เกิดขึ้นจากสาเหตุใด และแก้ไขได้อย่างไร?",
          options: [
            "เกิดจากสายไฟในคอมพิวเตอร์ลัดวงจร แก้ไขโดยเปลี่ยนเมนบอร์ดใหม่",
            "เกิดจากตัวแปรอิสระที่อยู่คนละเธรดดันถูกจัดสรรลงบน Cache Line เดียวกัน (64 ไบต์) ทำให้ Cache สลับสถานะโมฆะไปมา แก้ไขได้ด้วยการใช้ alignas เว้นระยะห่าง",
            "เกิดจากการพิมพ์ชื่อตัวแปรสะกดผิด แก้ไขด้วยการใช้ Linter",
            "เกิดจากแอนตี้ไวรัสบล็อกการทำงาน"
          ],
          correctAnswer: 1,
          explanation: "False Sharing เกิดขึ้นเมื่อสองคอร์แก้ไขตัวแปรคนละตัวที่บังเอิญอยู่ร่วมใน 64-byte Cache Line เดียวกัน ส่งผลให้ Cache Coherency Protocol บังคับ Invalidate แคชของอีกฝ่ายไปมา แก้ไขได้โดยการจัด Alignment ด้วย alignas(64)"
        }
      ]
    },
    {
      id: "cpp-8",
      title: "High-Performance I/O, SIMD Vectorization และ Compiler Optimization Flags",
      description: "รีดพลังระดับฮาร์ดแวร์: std::cin.tie(nullptr), Memory-Mapped Files (mmap), SIMD (Single Instruction Multiple Data: AVX-512 / NEON), Compiler Flags (-O3, -march=native, LTO, -fno-exceptions)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# High-Performance I/O, SIMD Vectorization และ Compiler Flags

ในการแข่งขันเขียนโปรแกรมระดับโลกและระบบประมวลผลขนาดใหญ่ การปรับแต่งโค้ดระดับอัลกอริทึมร่วมกับการสั่งการ **ฮาร์ดแวร์คำนวณแบบขนานระดับรีจิสเตอร์ (SIMD)** สามารถเพิ่มความเร็วของระบบขึ้นได้ตั้งแต่ **2 ถึง 100 เท่า!**

---

## 1. การปลดล็อกความเร็ว C++ Fast I/O
โดยค่าเริ่มต้น \`std::cin\` และ \`std::cout\` จะถูกผูกติด (Synchronized) เข้ากับ C Standard I/O (\`stdio\`) และ \`std::cin\` จะ Flush หน้าจอของ \`std::cout\` ทุกครั้งก่อนอ่านข้อมูล:

\`\`\`cpp
// ใส่สองบรรทัดนี้ที่ต้น main() เสมอเพื่อเพิ่มความเร็ว I/O ระดับเดียวกับ C printf/scanf:
std::ios_base::sync_with_stdio(false); // ปิดการซิงค์กับ C stdio
std::cin.tie(nullptr);                  // ปลดการผูกมัดระหว่าง cin กับ cout

// และห้ามใช้ std::endl! (เพราะ std::endl บังคับ Flush Buffer ทุกครั้ง)
// ให้ใช้ '\n' แทนเสมอ
\`\`\`

---

## 2. SIMD Vectorization (Single Instruction, Multiple Data)
หน่วยประมวลผล CPU ยุคใหม่มี **Vector Registers** ขนาดใหญ่พิเศษ:
- **SSE:** 128 บิต (คำนวณ 32-bit Float ได้ 4 ตัวพร้อมกัน)
- **AVX2:** 256 บิต (คำนวณ Float ได้ 8 ตัวพร้อมกัน)
- **AVX-512:** 512 บิต (คำนวณ Float ได้ **16 ตัวพร้อมกันใน 1 สัญญาณนาฬิกา!**)

\`\`\`text
Scalar Processing (ปกติ):
[ A1 ] + [ B1 ] -> [ C1 ] (รอบที่ 1)
[ A2 ] + [ B2 ] -> [ C2 ] (รอบที่ 2)
[ A3 ] + [ B3 ] -> [ C3 ] (รอบที่ 3)
[ A4 ] + [ B4 ] -> [ C4 ] (รอบที่ 4)

SIMD Vector Processing (ขนานระดับ CPU Register):
[ A1 | A2 | A3 | A4 ] + [ B1 | B2 | B3 | B4 ] -> [ C1 | C2 | C3 | C4 ] (เสร็จใน 1 รอบสัญญาณนาฬิกาเดียว!)
\`\`\`

---

## 3. ธงคอมไพเลอร์ระดับเทพ (Compiler Optimization Flags)
เมื่อคอมไพล์โปรแกรมสำหรับ Production ให้ใช้ชุดแฟล็กต่อไปนี้:
- **\`-O3\`:** เปิดใช้งานการปรับแต่งประสิทธิภาพระดับสูงสุด (Auto-vectorization, Loop Unrolling, Function Inlining)
- **\`-march=native\`:** สั่งให้คอมไพเลอร์สร้างชุดคำสั่งเฉพาะที่รองรับบน CPU เครื่องที่กำลังรันอยู่ (ปลดล็อก AVX2, AVX-512, FMA)
- **\`-flto\` (Link-Time Optimization):** สั่งให้คอมไพเลอร์และลิงเกอร์วิเคราะห์โค้ดข้ามไฟล์ Object ทั้งหมด ทำให้สามารถ Inline ฟังก์ชันข้ามไฟล์ \`.cpp\` ได้
- **\`-ffast-math\`:** ผ่อนปรนมาตรฐาน IEEE Floating Point เพื่อให้ CPU คำนวณคณิตศาสตร์ทศนิยมด้วยความเร็วสูงสุด`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Modern C++23: การสาธิต Fast I/O และ Auto-Vectorization Loop Pattern
// =================================================================

#include <iostream>
#include <vector>
#include <chrono>

// ฟังก์ชันคำนวณเวกเตอร์ที่เขียนในรูปแบบที่เอื้อให้คอมไพเลอร์ทำ Auto-Vectorization (SIMD)
// __restrict บ่งบอกว่าอาเรย์ a, b, c ไม่มีการซ้อนทับกันของพอยน์เตอร์ในหน่วยความจำ
void vectorMultiplyAdd(const float* __restrict a, 
                       const float* __restrict b, 
                       float* __restrict c, 
                       size_t n) {
    #pragma GCC ivdep // แนะนำคอมไพเลอร์ว่าไม่มี Loop-carried dependencies
    for (size_t i = 0; i < n; ++i) {
        c[i] = a[i] * b[i] + 1.5f;
    }
}

int main() {
    // 1. ปลดล็อกความเร็ว I/O
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    std::cout << "=== High Performance I/O & SIMD Vectorization Pipeline ===" << '\n';

    const size_t VECTOR_SIZE = 10'000'000;
    std::vector<float> vecA(VECTOR_SIZE, 2.5f);
    std::vector<float> vecB(VECTOR_SIZE, 4.0f);
    std::vector<float> vecC(VECTOR_SIZE, 0.0f);

    std::cout << "Computing 10,000,000 vector elements with FMA optimization..." << '\n';
    auto start = std::chrono::high_resolution_clock::now();

    vectorMultiplyAdd(vecA.data(), vecB.data(), vecC.data(), VECTOR_SIZE);

    auto end = std::chrono::high_resolution_clock::now();
    auto durationMs = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    std::cout << "Verification Check: vecC[0] = " << vecC[0] << " (Expected 11.5)" << '\n';
    std::cout << "Verification Check: vecC[LAST] = " << vecC.back() << " (Expected 11.5)" << '\n';
    std::cout << "Total Elapsed Time: " << durationMs << " ms" << '\n';

    return 0;
}`,
        description: "สคริปต์สาธิตเทคนิค C++ Fast I/O และการออกแบบลูปที่รองรับ SIMD Auto-vectorization"
      },
      challenge: {
        description: "เขียนคำสั่งตั้งค่า C++ Fast I/O จำนวน 2 บรรทัดที่ส่วนต้นของฟังก์ชัน main()",
        startingCode: `#include <iostream>

int main() {
    // TODO: ใส่คำสั่ง Fast I/O 2 บรรทัด
    
    std::cout << "Fast I/O Configured" << '\n';
    return 0;
}`,
        solution: `#include <iostream>

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);
    
    std::cout << "Fast I/O Configured" << '\n';
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q8-1",
          question: "การเรียกคำสั่ง std::ios_base::sync_with_stdio(false) มีผลอย่างไรต่อประสิทธิภาพการทำงาน?",
          options: [
            "ปิดการทำงานของคีย์บอร์ด",
            "ปิดการซิงโครไนซ์ระหว่าง C++ iostream กับ C stdio ทำให้บัฟเฟอร์ I/O ของ C++ ทำงานอิสระและมีความเร็วในการอ่านเขียนเทียบเท่า printf/scanf",
            "ลบประวัติการพิมพ์บนหน้าจอ",
            "บังคับให้โปรแกรมส่งข้อมูลผ่านบลูทูธ"
          ],
          correctAnswer: 1,
          explanation: "โดยค่าเริ่มต้น C++ จะซิงค์ iostream เข้ากับ stdio ของภาษา C เพื่อให้สลับใช้ printf กับ cout ได้อย่างปลอดภัย การสั่งปิด sync_with_stdio(false) จะปลดล็อก Overhead นี้และทำให้อ่านเขียนได้รวดเร็วขึ้นมหาศาล"
        },
        {
          id: "cpp-q8-2",
          question: "เทคโนโลยี SIMD (เช่น AVX2 / AVX-512) ช่วยเพิ่มความเร็วในการคำนวณทางคณิตศาสตร์ได้อย่างไร?",
          options: [
            "คำนวณข้อมูลหลายชิ้นพร้อมกันในรีจิสเตอร์ขนาดใหญ่พิเศษของ CPU ด้วย 1 คำสั่งสัญญาณนาฬิกาเดียว (Single Instruction, Multiple Data)",
            "เพิ่มขนาดแรมของคอมพิวเตอร์ขึ้นเป็น 2 เท่า",
            "ปิดโปรแกรมอื่นที่กำลังรันอยู่ทั้งหมด",
            "ลดความละเอียดของหน้าจอลง"
          ],
          correctAnswer: 0,
          explanation: "SIMD ใช้ Vector Registers ขนาดใหญ่ (128 ถึง 512 บิต) เพื่อประมวลผลข้อมูลหลายตัวพร้อมกัน เช่น สามารถนำตัวเลขทศนิยม 8 หรือ 16 ตัวมาบวกกันได้ใน 1 สัญญาณนาฬิกาเดียว เหมาะกับงาน Graphics, AI และ Data Science"
        },
        {
          id: "cpp-q8-3",
          question: "แฟล็กคอมไพเลอร์ -march=native มีประโยชน์พิเศษอย่างไรในการคอมไพล์โปรแกรม?",
          options: [
            "สร้างไฟล์ไบนารีที่เปิดได้เฉพาะในประเทศที่ระบุ",
            "สั่งให้คอมไพเลอร์ตรวจจับชุดคำสั่งฮาร์ดแวร์ทั้งหมดที่มีอยู่จริงบน CPU เครื่องนั้น (เช่น AVX, FMA, AES) และสร้างไบนารีที่ใช้ประโยชน์จากฟีเจอร์ CPU นั้นได้เต็ม 100%",
            "ลดขนาดของโค้ดให้เหลือ 1 ไบต์",
            "บังคับให้คอมไพเลอร์ไม่สร้างไฟล์ Executable"
          ],
          correctAnswer: 1,
          explanation: "-march=native จะตรวจสอบความสามารถของ CPU เครื่องที่กำลังคอมไพล์ และเปิดใช้งาน Extended Instruction Sets ทั้งหมดที่รองรับ ทำให้ไบนารีมีประสิทธิภาพสูงสุดบนเครื่องนั้นๆ"
        }
      ]
    },
    {
      id: "cpp-9",
      title: "โปรเจกต์ High-Speed Financial Order Matching Engine ระดับไมโครวินาที",
      description: "ประกอบร่างระบบวิศวกรรมระดับโลก: สร้าง Limit Order Book (LOB), ระบบจับคู่คำสั่งซื้อขายหุ้น/คริปโต (Matching Engine), Zero-Allocation Memory Arena, Lock-Free Queue และการวัด Latency ระดับนาโนวินาที",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ High-Speed Financial Order Matching Engine ระดับไมโครวินาที

ในโลกของ **High-Frequency Trading (HFT)** และกระดานเทรดระดับโลก (เช่น NASDAQ, Binance, SET) ทุกๆ **ไมโครวินาที (1/1,000,000 วินาที)** มีมูลค่ามหาศาล ระบบจับคู่คำสั่งซื้อขาย (**Order Matching Engine**) ต้องประมวลผลคำสั่งซื้อขายด้วย **Zero Dynamic Allocation** เพื่อหลีกเลี่ยง Latency Spikes โดยสิ้นเชิง

---

## 1. โครงสร้างสถาปัตยกรรม Limit Order Book (LOB)
- **Bid Book (คำสั่งซื้อ):** เรียงลำดับตาม **ราคาเสนอซื้อสูงสุดก่อน (Highest Price First)** และตามด้วยเวลาที่ส่งเข้ามาก่อน (**Price-Time Priority / FIFO**)
- **Ask Book (คำสั่งขาย):** เรียงลำดับตาม **ราคาเสนอขายต่ำสุดก่อน (Lowest Price First)** และตามด้วยเวลาที่ส่งเข้ามาก่อน
- **The Match Condition:**  
  เมื่อมีคำสั่งซื้อเข้ามา ถ้าราคาเสนอซื้อ \`>= \` ราคาเสนอขายที่ถูกที่สุดในตลาด จะเกิดการ **จับคู่ซื้อขาย (Trade Execution)** ทันที!

\`\`\`text
                  Limit Order Book (LOB)
------------------------------------------------------------
   ASKS (Offers) | ต่ำสุดลงล่าง:
   Order #104 : $102.50 | 500 หุ้น
   Order #102 : $101.00 | 200 หุ้น  <-- Best Ask ($101.00)
------------------------------------------------------------  [SPREAD: $1.00]
   BIDS (Bids)   | สูงสุดอยู่บน:
   Order #101 : $100.00 | 300 หุ้น  <-- Best Bid ($100.00)
   Order #103 : $ 98.50 | 1,000 หุ้น
------------------------------------------------------------
\`\`\`

---

## 2. กฎเหล็กของระบบ Ultra-Low Latency ใน C++
1. **No Heap Allocation during Trading Loop:** ห้ามเรียกคำสั่ง \`new\`, \`malloc\`, หรือแม้แต่การขยายขนาดของ \`std::vector\` ในระหว่างที่ระบบกำลังจับคู่คำสั่งเด็ดขาด! ให้ใช้ **Pre-allocated Memory Pools / Ring Buffers**
2. **Cache-Friendly Layouts:** ออกแบบข้อมูล Struct ให้อยู่ใน Cache Line 64 ไบต์ และใช้ Data Types ขนาดกะทัดรัด (เช่น \`uint32_t\` สำหรับราคาและจำนวน)
3. **No Exceptions in Hot Path:** ใช้คีย์เวิร์ด \`noexcept\` และส่งคืนผลลัพธ์ผ่าน \`std::optional\` หรือ Error Codes แทนการโยน Exception เพื่อหลีกเลี่ยง Stack Unwinding Overhead
4. **Benchmarking with High-Resolution Clock:** วัด Latency ด้วย \`std::chrono::high_resolution_clock\` เพื่อดูค่า P50, P99, และ Max Latency`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// Production Project: Ultra-Fast Limit Order Matching Engine in C++
// =================================================================

#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <chrono>
#include <iomanip>

enum class Side { BUY, SELL };

struct Order {
    uint32_t orderId;
    Side side;
    double price;
    uint32_t quantity;
};

class MatchingEngine {
private:
    // Bids เรียงราคามากไปน้อย (std::greater)
    std::map<double, std::vector<Order>, std::greater<double>> bids_;
    // Asks เรียงราคาน้อยไปมาก (std::less)
    std::map<double, std::vector<Order>, std::less<double>> asks_;

    uint64_t totalExecutedShares_ = 0;
    double totalTradeVolumeUSD_ = 0.0;

public:
    void processOrder(Order incomingOrder) {
        if (incomingOrder.side == Side::BUY) {
            matchBuyOrder(incomingOrder);
        } else {
            matchSellOrder(incomingOrder);
        }
    }

private:
    void matchBuyOrder(Order& buyOrder) {
        // วนจับคู่กับ Ask ที่ราคาถูกที่สุด (Best Asks)
        while (!asks_.empty() && buyOrder.quantity > 0) {
            auto bestAskIt = asks_.begin();
            double bestAskPrice = bestAskIt->first;

            if (buyOrder.price < bestAskPrice) {
                break; // ราคายังไม่ตรงกัน ไม่สามารถจับคู่ได้
            }

            auto& ordersAtPrice = bestAskIt->second;
            while (!ordersAtPrice.empty() && buyOrder.quantity > 0) {
                Order& sellOrder = ordersAtPrice.front();
                uint32_t fillQty = std::min(buyOrder.quantity, sellOrder.quantity);

                // บันทึกการจับคู่ซื้อขาย (Trade Execution)
                buyOrder.quantity -= fillQty;
                sellOrder.quantity -= fillQty;
                totalExecutedShares_ += fillQty;
                totalTradeVolumeUSD_ += (fillQty * bestAskPrice);

                std::cout << " [TRADE MATCHED] Executed " << fillQty << " shares @ $" 
                          << bestAskPrice << " (Buyer #" << buyOrder.orderId 
                          << " <-> Seller #" << sellOrder.orderId << ")" << '\n';

                if (sellOrder.quantity == 0) {
                    ordersAtPrice.erase(ordersAtPrice.begin());
                }
            }

            if (ordersAtPrice.empty()) {
                asks_.erase(bestAskIt);
            }
        }

        // หากยังมีจำนวนเหลือ ให้บันทึกลงใน Bid Book
        if (buyOrder.quantity > 0) {
            bids_[buyOrder.price].push_back(buyOrder);
        }
    }

    void matchSellOrder(Order& sellOrder) {
        // วนจับคู่กับ Bid ที่ราคาสูงที่สุด (Best Bids)
        while (!bids_.empty() && sellOrder.quantity > 0) {
            auto bestBidIt = bids_.begin();
            double bestBidPrice = bestBidIt->first;

            if (sellOrder.price > bestBidPrice) {
                break;
            }

            auto& ordersAtPrice = bestBidIt->second;
            while (!ordersAtPrice.empty() && sellOrder.quantity > 0) {
                Order& buyOrder = ordersAtPrice.front();
                uint32_t fillQty = std::min(sellOrder.quantity, buyOrder.quantity);

                sellOrder.quantity -= fillQty;
                buyOrder.quantity -= fillQty;
                totalExecutedShares_ += fillQty;
                totalTradeVolumeUSD_ += (fillQty * bestBidPrice);

                std::cout << " [TRADE MATCHED] Executed " << fillQty << " shares @ $" 
                          << bestBidPrice << " (Seller #" << sellOrder.orderId 
                          << " <-> Buyer #" << buyOrder.orderId << ")" << '\n';

                if (buyOrder.quantity == 0) {
                    ordersAtPrice.erase(ordersAtPrice.begin());
                }
            }

            if (ordersAtPrice.empty()) {
                bids_.erase(bestBidIt);
            }
        }

        if (sellOrder.quantity > 0) {
            asks_[sellOrder.price].push_back(sellOrder);
        }
    }

public:
    void printMarketSummary() const {
        std::cout << "\n================ Market Engine Telemetry ================" << '\n';
        std::cout << "Total Volume Traded: $" << std::fixed << std::setprecision(2) << totalTradeVolumeUSD_ << '\n';
        std::cout << "Total Shares Filled: " << totalExecutedShares_ << " shares" << '\n';
        std::cout << "Active Resting Bids: " << bids_.size() << " price levels" << '\n';
        std::cout << "Active Resting Asks: " << asks_.size() << " price levels" << '\n';
        std::cout << "=========================================================" << '\n';
    }
};

int main() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    MatchingEngine engine;

    std::cout << "=== IT Academy High-Frequency Order Matching Engine ===" << '\n';

    // จำลองการส่งคำสั่งซื้อขายเข้าสู่ Order Book
    engine.processOrder(Order{101, Side::SELL, 150.00, 200}); // เสนอขาย 200 หุ้น @ $150
    engine.processOrder(Order{102, Side::SELL, 151.00, 500}); // เสนอขาย 500 หุ้น @ $151
    engine.processOrder(Order{103, Side::BUY,  148.00, 100}); // เสนอซื้อ 100 หุ้น @ $148

    std::cout << "\nIncoming Market Aggressor Order: BUY 350 shares @ $150.50..." << '\n';
    auto start = std::chrono::high_resolution_clock::now();

    // คำสั่งนี้จะ Match คำสั่งขาย #101 ทันที 200 หุ้น @ $150 และเหลือเศษ 150 หุ้นเข้า Bid Book
    engine.processOrder(Order{104, Side::BUY, 150.50, 350});

    auto end = std::chrono::high_resolution_clock::now();
    auto elapsedNs = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start).count();

    std::cout << "Order Execution Latency: " << elapsedNs << " nanoseconds!" << '\n';

    engine.printMarketSummary();
    return 0;
}`,
        description: "สถาปัตยกรรม High-Speed Order Matching Engine พร้อมการคำนวณราคาและปริมาณการซื้อขายระดับนาโนวินาที"
      },
      challenge: {
        description: "เขียนคำสั่ง C++ ประกาศ Struct ชื่อ TradeExecution ที่มีฟิลด์ uint32_t buyOrderId, uint32_t sellOrderId, double executionPrice, uint32_t quantity",
        startingCode: `#include <iostream>
#include <cstdint>

// TODO: ประกาศ struct TradeExecution

int main() {
    std::cout << "Trade Struct Ready" << '\n';
    return 0;
}`,
        solution: `#include <iostream>
#include <cstdint>

struct TradeExecution {
    uint32_t buyOrderId;
    uint32_t sellOrderId;
    double executionPrice;
    uint32_t quantity;
};

int main() {
    TradeExecution trade{101, 102, 150.00, 100};
    std::cout << "Trade Struct Ready: " << trade.quantity << " shares @ $" << trade.executionPrice << '\n';
    return 0;
}`
      },
      quiz: [
        {
          id: "cpp-q9-1",
          question: "เหตุใดในระบบ Low-Latency HFT Trading Loop จึงมีกฎเหล็กห้ามเรียกคำสั่ง dynamic memory allocation (new/malloc)?",
          options: [
            "เพราะการจัดสรรหน่วยความจำบน Heap อาจทำให้เกิด Lock Contention และ OS System Calls ซึ่งก่อให้เกิด Latency Spikes ที่คาดเดาไม่ได้",
            "เพราะภาษา C++ ไม่รองรับหน่วยความจำเกิน 1 MB",
            "เพราะทำให้คอมไพเลอร์ปฏิเสธการสร้างไฟล์ .exe",
            "เพราะจะทำให้ราคาหุ้นร่วงลง 10%"
          ],
          correctAnswer: 0,
          explanation: "การจัดสรรหน่วยความจำบน Heap (malloc/new) มีความไม่แน่นอนสูง (Non-deterministic) เพราะต้องท่องหาพื้นที่ว่างใน Free List และอาจต้องขอ Memory Pages เพิ่มเติมจาก OS Kernel ซึ่งก่อให้เกิด Latency Spikes หลายสิบไมโครวินาทีจนพ่ายแพ้คู่แข่ง"
        },
        {
          id: "cpp-q9-2",
          question: "ในระบบ Limit Order Book ลำดับความสำคัญในการจับคู่คำสั่ง (Matching Priority) เป็นไปตามกฎใด?",
          options: [
            "สุ่มผู้โชคดี (Random Winner)",
            "Price-Time Priority (ให้ผู้ที่เสนอราคาดีที่สุดก่อน หากราคาเท่ากันให้ผู้ที่ส่งคำสั่งเข้ามาก่อนตามลำดับ FIFO)",
            "ให้ผู้ที่มีวงเงินมากที่สุดก่อนเสมอ",
            "ให้ผู้ที่ส่งคำสั่งมาจากต่างประเทศก่อน"
          ],
          correctAnswer: 1,
          explanation: "Price-Time Priority (FIFO) คือกฎสากลของกระดานเทรดทั่วโลก โดยผู้ซื้อที่ให้ราคาสูงสุดและผู้ขายที่ให้ราคาต่ำสุดจะได้สิทธิ์จับคู่ก่อน หากเสนอราคาเท่ากัน ผู้ที่ส่งคำสั่งมาถึงกระดานเทรดก่อนจะได้จับคู่ก่อน"
        },
        {
          id: "cpp-q9-3",
          question: "หน่วยเวลาใดที่ระบบ High-Frequency Trading ยุคใหม่ใช้เป็นเกณฑ์วัดความเร็วในการจับคู่คำสั่ง (Order-to-Trade Latency)?",
          options: [
            "วินาที (Seconds)",
            "มิลลิวินาที (Milliseconds)",
            "ไมโครวินาที (Microseconds) ถึง นาโนวินาที (Nanoseconds)",
            "ชั่วโมง (Hours)"
          ],
          correctAnswer: 2,
          explanation: "กระดานเทรดและการแข่งขันด้าน HFT ในปัจจุบันวัดความเร็วกันที่ระดับไมโครวินาที (10^-6 s) และนาโนวินาที (10^-9 s) ซึ่งภาษา C++ ที่ผ่านการจูนอย่างประณีตคือเครื่องมือหลักที่สามารถตอบโจทย์ความเร็วระดับนี้ได้"
        }
      ]
    }
  ]
};
