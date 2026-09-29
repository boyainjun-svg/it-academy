import { Course } from "../types";

export const cppCourse: Course = {
  id: "cpp",
  title: "Modern C++ (C++20/C++23) & High-Performance Systems",
  description: "เจาะลึกภาษา C++ สมัยใหม่ตั้งแต่การจัดการหน่วยความจำระดับต่ำ, Pointers, RAII, Smart Pointers, Move Semantics, Templates/Concepts จนถึง Multithreading และระบบความเร็วสูงระดับไมโครวินาที",
  longDescription: "หลักสูตรวิศวกรรมภาษา C++ สมัยใหม่ (Modern C++ Systems Engineering) ครอบคลุมตั้งแต่กระบวนการคอมไพล์ระดับต่ำของ Clang/GCC, การวิเคราะห์ Stack และ Heap, การจัดการทรัพยากรด้วยหลักการ RAII, การกำจัดการรั่วไหลของหน่วยความจำด้วย Smart Pointers (std::unique_ptr, std::shared_ptr), เทคนิค Move Semantics และ Rvalue References เพื่อประสิทธิภาพ Zero-Copy, การเขียน Generic Code ด้วย C++ Templates และ C++20 Concepts, การใช้ Standard Template Library (STL) ให้สอดคล้องกับ CPU Cache Locality, การประมวลผลแบบ Multithreading ร่วมกับ Atomic และ Lock-Free Programming, จนถึงการพัฒนาโปรเจกต์ระดับการเงินและเกมเอนจินที่ต้องการ Latency ต่ำที่สุด",
  icon: "⚡",
  color: "blue",
  gradient: "from-blue-600 via-indigo-700 to-slate-900",
  category: "language",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: ["C++", "C++20", "C++23", "RAII", "Pointers", "Memory Management", "Multithreading", "High Performance"],
  recommendedTools: [
    {
      name: "GCC 13+ / Clang 17+ with CMake",
      icon: "⚡",
      badge: "Native Toolchain",
      description: "คอมไพเลอร์ภาษา C++ มาตรฐานโลก รองรับฟีเจอร์ C++20/C++23 เต็มรูปแบบ พร้อมระบบ Build System CMake",
      downloadUrl: "https://gcc.gnu.org/",
      setupGuide: "1. ติดตั้ง MinGW-w64 (Windows) หรือ build-essential (Linux)\n2. ตรวจสอบใน Terminal: g++ --version และ cmake --version\n3. คอมไพล์ด้วย Flag มาตรฐาน: g++ -std=c++20 -O3 main.cpp -o app"
    },
    {
      name: "VS Code with C/C++ Extension / CLion",
      icon: "💻",
      badge: "C++ Development IDE",
      description: "เครื่องมือเขียนโปรแกรม C++ พร้อม IntelliSense, GDB/LLDB Debugger, และ Memory Profiler",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้ง VS Code\n2. ติดตั้ง Extension: 'C/C++' และ 'CMake Tools' โดย Microsoft"
    }
  ],
  lessons: [
    {
      id: "cpp-1",
      title: "กระบวนการคอมไพล์ภาษา C++, Preprocessor, Header Files และโครงสร้าง Memory",
      description: "ทำความเข้าใจ 4 ขั้นตอนการคอมไพล์ (Preprocessing, Compiling, Assembly, Linking), Header Guards (#pragma once), และการจัดสรรหน่วยความจำ",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา C++ และขั้นตอนการคอมไพล์ (Compilation Pipeline)

ภาษา **C++** เป็นภาษาที่รันบนฮาร์ดแวร์โดยตรง (Native Machine Code) โดยไม่มี Virtual Machine หรือ Garbage Collector คั่นกลาง ทำให้มีประสิทธิภาพ ความเร็ว และการควบคุมทรัพยากรระดับสูงสุด

---

## 1. ลำดับขั้นตอนการคอมไพล์ C++ (4 Stages)

1. **Preprocessing (\`cpp\`):** จัดการคำสั่ง \`#include\`, \`#define\`, \`#pragma once\`
2. **Compilation (\`g++ -S\`):** แปลงซอร์สโค้ด C++ เป็น Assembly Code ตามสถาปัตยกรรม CPU
3. **Assembly (\`as\`):** แปลง Assembly Code เป็น Object File (\`.o\` หรือ \`.obj\`) ซึ่งเป็น Machine Code แต่ละโมดูล
4. **Linking (\`ld\`):** นำ Object Files และ Libraries ทั้งหมดมารวมกันเป็นไฟล์ปฏิบัติการตัวเดียว (Executable Binary \`.exe\`)`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// C++20 Standard Application: ระบบคำนวณคะแนนนักศึกษา
// =================================================================

#include <iostream>
#include <vector>
#include <numeric>
#include <iomanip>

int main() {
    std::cout << "=== IT Academy Modern C++ Engine (C++20/C++23) ===\n";

    std::string studentName = "พงศกร เมืองประเทศ";
    std::string studentId = "STD-670101";
    std::vector<double> scores = {88.5, 92.0, 79.5, 95.0, 84.0};

    // คำนวณผลรวมด้วย std::accumulate
    double totalScore = std::accumulate(scores.begin(), scores.end(), 0.0);
    double averageScore = totalScore / scores.size();

    std::cout << "รหัสนักศึกษา: " << studentId << "\n";
    std::cout << "ชื่อ-สกุล: " << studentName << "\n";
    std::cout << std::fixed << std::setprecision(2);
    std::cout << "คะแนนเฉลี่ย: " << averageScore << " / 100\n";
    std::cout << "สถานะ: " << (averageScore >= 80.0 ? "เกียรตินิยมอันดับหนึ่ง" : "ผ่านเกณฑ์") << "\n";

    return 0;
}`,
        description: "โครงสร้างโปรแกรม Modern C++ มาตรฐานพร้อม std::vector และ std::accumulate"
      },
      quiz: [
        {
          id: "cpp-q1",
          question: "ขั้นตอนใดใน C++ Compilation Pipeline ที่ทำหน้าที่รวม Object Files (.o) และไลบรารีภายนอกเข้าเป็นไฟล์ Executable ตัวเดียว?",
          options: ["Preprocessing", "Compiling", "Assembly", "Linking"],
          correctAnswer: 3,
          explanation: "Linker ทำหน้าที่เชื่อมโยง Function References ระหว่าง Object Files หลายไฟล์ให้เป็น Binary ตัวเดียว"
        }
      ]
    },
    {
      id: "cpp-2",
      title: "การจัดการหน่วยความจำ: Pointer Arithmetic, References และ Heap Allocation",
      description: "ทำความเข้าใจความแตกต่างระหว่าง Pointer และ Reference, การคำนวณตำแหน่งหน่วยความจำ (Pointer Arithmetic), การจองแรมด้วย new/delete และอันตรายของ Memory Leaks",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Pointers, References และสถาปัตยกรรมหน่วยความจำใน C++

ในภาษา C++ ตัวแปรทุกตัวมี **ที่อยู่บนหน่วยความจำจริง (Physical/Virtual Memory Address)** ที่สามารถเข้าถึงได้โดยตรงผ่าน **Pointer (\`*\`)** และ **Reference (\`&\`)**

---

## 1. ตารางเปรียบเทียบ Pointer และ Reference

| คุณลักษณะ | Pointer (\`int*\`) | Reference (\`int&\`) |
|:---|:---|:---|
| **สามารถเป็น Null ได้?** | ✅ ได้ (\`nullptr\`) | ❌ ไม่ได้ (ต้องอ้างอิงตัวแปรที่มีอยู่จริงเสมอ) |
| **สามารถเปลี่ยนเป้าหมายได้?** | ✅ ได้ (Re-assignable) | ❌ ไม่ได้ (ผูกติดกับตัวแปรเดิมตลอดอายุ) |
| **การเข้าถึงค่า** | ต้อง Dereference (\`*ptr\`) | ใช้งานเสมือนเป็นตัวแปรตัวเดิมโดยตรง |`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การสาธิต Pointer, Reference และ Memory Addresses
// =================================================================

#include <iostream>

void modifyViaPointer(int* pVal) {
    if (pVal != nullptr) {
        *pVal += 10;
    }
}

void modifyViaReference(int& rVal) {
    rVal += 20;
}

int main() {
    int score = 70;
    std::cout << "ค่าเริ่มต้น score = " << score << " (Address: " << &score << ")\n";

    modifyViaPointer(&score);
    std::cout << "หลังเรียก modifyViaPointer(&score): " << score << "\n";

    modifyViaReference(score);
    std::cout << "หลังเรียก modifyViaReference(score): " << score << "\n";

    return 0;
}`,
        description: "การเปรียบเทียบการส่งค่าผ่าน Pointer และ Reference"
      }
    },
    {
      id: "cpp-3",
      title: "RAII (Resource Acquisition Is Initialization) และ Smart Pointers",
      description: "กำจัดปัญหา Memory Leak ถาวรด้วยหลักการ RAII, การใช้งาน std::unique_ptr (Exclusive Ownership) และ std::shared_ptr (Shared Ownership Reference Counting)",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# RAII และ Smart Pointers ใน Modern C++

ใน Modern C++ (ตั้งแต่ C++11 ขึ้นไป) **ห้ามใช้ \`new\` และ \`delete\` ดิบๆ เด็ดขาด!** เพราะมีความเสี่ยงสูงที่จะเกิด **Memory Leaks** และ **Dangling Pointers** แนวทางมาตรฐานคือการใช้ **Smart Pointers** ภายใต้หลักการ **RAII (Resource Acquisition Is Initialization)**

---

## 1. ชนิดของ Smart Pointers

- **\`std::unique_ptr<T>\`:** ครอบครองทรัพยากรเพียงหนึ่งเดียว (Exclusive Ownership) มี Overhead เป็น 0 (Zero Cost Abstraction)
- **\`std::shared_ptr<T>\`:** แบ่งปันการครอบครองทรัพยากรร่วมกันผ่านตัวนับ Reference Count เมื่อตัวนับเหลือ 0 จะทำลาย Object ทิ้งอัตโนมัติ`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การจัดการหน่วยความจำอย่างปลอดภัยด้วย std::unique_ptr
// =================================================================

#include <iostream>
#include <memory>

class NetworkSocket {
public:
    NetworkSocket(std::string ip) : ipAddress(ip) {
        std::cout << "🔌 [SOCKET] เปิดการเชื่อมต่อ Socket ไปที่: " << ipAddress << "\n";
    }
    ~NetworkSocket() {
        std::cout << "🔒 [SOCKET] คืนหน่วยความจำและปิด Socket อัตโนมัติ (RAII Destructor)\n";
    }
    void sendData(std::string payload) {
        std::cout << "📤 ส่งข้อมูล: '" << payload << "' ไปยัง " << ipAddress << "\n";
    }
private:
    std::string ipAddress;
};

int main() {
    {
        // สร้าง unique_ptr ด้วย std::make_unique
        auto socket = std::make_unique<NetworkSocket>("192.168.1.100");
        socket->sendData("Hello Server");
    } // เมื่อหลุดออกจาก Scope ปีกกา Destructor จะถูกเรียกคืนแรมทันที ไร้ Memory Leak!

    std::cout << "✓ สิ้นสุดการทำงานของ Scope\n";
    return 0;
}`,
        description: "การใช้ std::unique_ptr และหลักการ RAII ในการคืนทรัพยากรอัตโนมัติ"
      }
    },
    {
      id: "cpp-4",
      title: "Move Semantics และ Rvalue References (std::move) เพื่อประสิทธิภาพ Zero-Copy",
      description: "ทำความเข้าใจ lvalue vs rvalue, Move Constructor, Move Assignment Operator, และการใช้ std::move() เพื่อย้ายกรรมสิทธิ์หน่วยความจำโดยไม่ต้องคัดลอกข้อมูล",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Move Semantics และ Rvalue References ใน C++

ก่อน C++11 เมื่อเราส่งก้อนข้อมูลขนาดใหญ่ (เช่น Vector ขนาด 1GB) เข้าสู่ฟังก์ชัน C++ จะต้องทำการ **Deep Copy (คัดลอกข้อมูลทุกไบต์ใหม่ทั้งหมด)** ซึ่งกินเวลาและแรมมหาศาล **Move Semantics** ถูกประดิษฐ์ขึ้นมาเพื่อ "ย้ายตัวชี้ (Pointer Transfer)" แทนการคัดลอก`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การย้ายทรัพยากรด้วย std::move (Zero-Copy Transfer)
// =================================================================

#include <iostream>
#include <vector>
#include <utility>

int main() {
    std::vector<int> sourceData(1000000, 42); // Array ขนาด 1 ล้านสมาชิก (~4MB)
    std::cout << "• ขนาดของ sourceData ก่อน Move: " << sourceData.size() << " elements\n";

    // ย้ายความเป็นเจ้าของหน่วยความจำโดยไม่ต้องคัดลอกข้อมูล (O(1) Operation)
    std::vector<int> destinationData = std::move(sourceData);

    std::cout << "• ขนาดของ destinationData หลัง Move: " << destinationData.size() << " elements\n";
    std::cout << "• ขนาดของ sourceData หลังถูก Move: " << sourceData.size() << " elements (Empty)\n";

    return 0;
}`,
        description: "การใช้ std::move เพื่อสลับ Pointer ของ Vector ภายในเสี้ยววินาที"
      }
    },
    {
      id: "cpp-5",
      title: "Generic Programming ด้วย C++ Templates และ C++20 Concepts",
      description: "เขียนโค้ดที่รองรับหลายชนิดข้อมูลด้วย Function & Class Templates, การทำ Template Specialization, และการจำกัดเงื่อนไข Type ด้วย C++20 Concepts",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# C++ Templates และ C++20 Concepts

**Templates** ใน C++ ทำงานในขั้นตอนการคอมไพล์ (Compile-Time Metaprogramming) โดยคอมไพเลอร์จะสร้างโค้ดเฉพาะสำหรับแต่ละ Type ขึ้นมา ทำให้ไม่มี Runtime Overhead ใดๆ และใน **C++20 Concepts** เราสามารถกำหนดเงื่อนไขของ Type ได้อย่างปลอดภัย`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// C++20 Concepts: กำหนดข้อจำกัดของ Generic Type
// =================================================================

#include <iostream>
#include <concepts>

// สร้าง Concept ที่ยอมรับเฉพาะตัวเลข (Number)
template <typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template <Numeric T>
T calculateAverage(T a, T b) {
    return (a + b) / 2;
}

int main() {
    int intAvg = calculateAverage(10, 20);
    double doubleAvg = calculateAverage(3.5, 4.5);

    std::cout << "• ค่าเฉลี่ย Integer: " << intAvg << "\n";
    std::cout << "• ค่าเฉลี่ย Double: " << doubleAvg << "\n";

    return 0;
}`,
        description: "การใช้ C++20 Concepts เพื่อจำกัดประเภทข้อมูลเฉพาะ Numeric"
      }
    },
    {
      id: "cpp-6",
      title: "Standard Template Library (STL), Cache Locality และการเลือก Data Structure",
      description: "ทำความเข้าใจสถาปัตยกรรม CPU Cache Lines, ทำไม std::vector ถึงเร็วกว่า std::list ใน 99% ของกรณี, std::unordered_map (Hash Table) และ STL Algorithms",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Standard Template Library (STL) และ CPU Cache Locality

ในโลกวิศวกรรมคอมพิวเตอร์ปัจจุบัน การดึงข้อมูลจาก **L1/L2/L3 CPU Cache** เร็วกว่าการดึงจาก RAM นับร้อยเท่า **\`std::vector\`** เก็บข้อมูลเรียงติดกันในหน่วยความจำ (Contiguous Memory) จึงได้เปรียบเรื่อง **Cache Locality** อย่างมหาศาล`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การจัดเรียงและค้นหาข้อมูลด้วย STL Algorithms
// =================================================================

#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> studentScores = {78, 92, 65, 88, 95, 84};

    // จัดเรียงคะแนนจากมากไปน้อย
    std::sort(studentScores.begin(), studentScores.end(), std::greater<int>());

    std::cout << "📊 ผลการจัดเรียงคะแนนนักศึกษา (STL std::sort):\n";
    for (int score : studentScores) {
        std::cout << "• " << score << "\n";
    }

    return 0;
}`,
        description: "การใช้งาน std::sort และ Functional Comparator ใน C++ STL"
      }
    },
    {
      id: "cpp-7",
      title: "Multithreading, Atomic Operations (std::atomic) และ Lock-Free Programming",
      description: "การสร้างเธรดด้วย std::thread, ป้องกัน Data Races ด้วย std::mutex และ std::lock_guard, และการเขียนโปรแกรมความเร็วสูงด้วย std::atomic โดยไม่ต้องใช้ Mutex",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Multithreading และ Lock-Free Programming ใน C++

เมื่อหลายเธรดเข้าถึงข้อมูลตัวเดียวกันพร้อมกันจะเกิด **Data Race** การใช้ Mutex เป็นวิธีที่ปลอดภัย แต่อาจเกิด Overhead การเขียนโปรแกรมความเร็วสูงจึงนิยมใช้ **\`std::atomic\`** ที่ทำงานในระดับคำสั่ง CPU Instruction โดยตรง`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การนับสถิติพร้อมกันด้วย std::atomic (Lock-Free Counter)
// =================================================================

#include <iostream>
#include <thread>
#include <vector>
#include <atomic>

std::atomic<long long> globalRequestCount(0);

void processWorkerRequests(int count) {
    for (int i = 0; i < count; ++i) {
        globalRequestCount.fetch_add(1, std::memory_order_relaxed);
    }
}

int main() {
    std::cout << "🚀 ปล่อย 4 เธรด ทำงานพร้อมกันผ่าน Atomic Counter:\n";
    std::vector<std::thread> workers;

    for (int i = 0; i < 4; ++i) {
        workers.emplace_back(processWorkerRequests, 25000);
    }

    for (auto& w : workers) {
        w.join();
    }

    std::cout << "✓ ยอดรวม Request ที่นับได้: " << globalRequestCount << " (ถูกต้องแม่นยำ 100% ไร้ Data Race)\n";
    return 0;
}`,
        description: "การใช้งาน std::atomic ในการนับยอดร่วมกันระหว่างหลายเธรดอย่างปลอดภัย"
      }
    },
    {
      id: "cpp-8",
      title: "High-Performance I/O, SIMD Vectorization และ Compiler Optimization Flags",
      description: "เทคนิคการเร่งความเร็ว C++: ปิด sync_with_stdio, การปรับแต่ง Compiler Flags (-O3, -march=native), และการทำ Vectorization ด้วย SIMD Instructions",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# High-Performance I/O และ Compiler Optimization

ในระบบ Trade หรืองาน Game Engine การปรับแต่ง Compiler Flag เช่น \`-O3 -march=native -flto\` สามารถเพิ่มความเร็วของโปรแกรมได้สูงสุดถึง 300% - 500%`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การตั้งค่า Fast I/O สำหรับระบบ High-Throughput
// =================================================================

#include <iostream>

void enableFastIO() {
    // ปิดการซิงค์ระหว่าง C++ Streams กับ C Standard I/O
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
}

int main() {
    enableFastIO();
    std::cout << "⚡ ระบบ Fast I/O พร้อมประมวลผลข้อมูลระดับล้านเรคคอร์ดต่อวินาที\n";
    return 0;
}`,
        description: "การปลดล็อกความเร็ว I/O ของ C++ ให้ทำงานเร็วเทียบเท่า C ดิบ"
      }
    },
    {
      id: "cpp-9",
      title: "โปรเจกต์ High-Speed Financial Order Matching Engine ระดับไมโครวินาที",
      description: "โปรเจกต์รวบยอด: สร้างระบบจับคู่คำสั่งซื้อขายหลักทรัพย์ (Matching Engine) ความเร็วสูงระดับ Sub-microsecond ด้วย Modern C++, Struct Alignment และ Cache Optimization",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise C++: High-Frequency Order Matching Engine

ในบทเรียนนี้ เราจะประยุกต์ใช้ความรู้ทั้งหมดของ Modern C++ สร้าง Matching Engine สำหรับจับคู่คำสั่งซื้อ (Bid) และคำสั่งขาย (Ask) ด้วยความเร็วสูงสุด`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// โปรเจกต์จำลอง Order Matching Engine ระดับไมโครวินาที
// =================================================================

#include <iostream>
#include <vector>
#include <string>

struct Order {
    int orderId;
    std::string symbol;
    bool isBuy;
    double price;
    int quantity;
};

class SimpleMatchingEngine {
public:
    void submitOrder(const Order& order) {
        std::cout << "📥 [ORDER " << order.orderId << "] "
                  << (order.isBuy ? "BUY " : "SELL ")
                  << order.quantity << " " << order.symbol
                  << " @ " << order.price << " THB\n";
        
        // จำลองการจับคู่คำสั่งสำเร็จ
        std::cout << "⚡ [MATCHED] จับคู่คำสั่ง " << order.orderId << " สำเร็จทันที (Latency: 0.8 us)\n";
    }
};

int main() {
    SimpleMatchingEngine engine;
    engine.submitOrder({101, "PTT", true, 34.50, 1000});
    engine.submitOrder({102, "CPALL", false, 62.00, 500});

    return 0;
}`,
        description: "สถาปัตยกรรมระบบจับคู่คำสั่งซื้อขายความเร็วสูงระดับไมโครวินาที"
      }
    }
  ]
};
