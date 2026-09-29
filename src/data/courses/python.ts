import { Course } from "../types";

export const pythonCourse: Course = {
  id: "python",
  title: "Python for Data, AI & Modern Backend",
  description: "เรียนรู้ภาษา Python ตั้งแต่สถาปัตยกรรม CPython, Memory Model, GIL, Advanced OOP, AsyncIO, REST API ด้วย FastAPI จนถึง NumPy/Pandas Data Pipelines",
  longDescription: "หลักสูตรภาษาไพทอนเชิงวิศวกรรม (Python Software Engineering) ที่ออกแบบมาเพื่อพัฒนาทักษะระดับมืออาชีพ ครอบคลุมตั้งแต่สถาปัตยกรรมภายในของ CPython, การทำงานของหน่วยความจำ Reference Counting และ Cyclic Garbage Collection, Global Interpreter Lock (GIL), การประมวลผลข้อมูลด้วย List/Dict Comprehensions, การเขียนโปรแกรมเชิงวัตถุ (OOP) ร่วมกับ Magic Dunder Methods, Descriptors และ Dataclasses, เทคนิคขั้นสูงอย่าง Generators, Decorators และ Context Managers, การรับส่งงานพร้อมกันด้วย AsyncIO Event Loop, การสร้าง Production REST API ประสิทธิภาพสูงด้วย FastAPI และ Pydantic v2, ตลอดจนการประมวลผลข้อมูลมหาศาลด้วย NumPy Vectorization และ Pandas สำหรับงาน Data Science และ AI",
  icon: "🐍",
  color: "sky",
  gradient: "from-sky-500 via-blue-600 to-amber-500",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Python", "FastAPI", "AsyncIO", "Data Science", "Pandas", "NumPy", "Pydantic", "OOP", "CPython"],
  recommendedTools: [
    {
      name: "Python 3.12+ (CPython)",
      icon: "🐍",
      badge: "Official Runtime",
      description: "ตัวแปลภาษาและสภาพแวดล้อมมาตรฐานของ Python พร้อมฟีเจอร์ Type Parameter Syntax และการปรับปรุงความเร็วรอบด้าน",
      downloadUrl: "https://www.python.org/downloads/",
      setupGuide: "1. ดาวน์โหลด Python 3.12 ขึ้นไปจาก python.org\n2. ในหน้าติดตั้งติ๊กเลือก 'Add python.exe to PATH'\n3. เปิด Terminal และตรวจสอบด้วยคำสั่ง: python --version และ pip --version"
    },
    {
      name: "VS Code with Python Extension",
      icon: "💻",
      badge: "Recommended IDE",
      description: "โปรแกรมแก้ไขโค้ดพร้อมส่วนขยาย Python, Pylance สำหรับ Type Checking และ Python Debugger",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้ง VS Code\n2. ไปที่ Extensions (Ctrl+Shift+X) ค้นหาและติดตั้ง 'Python' และ 'Pylance' โดย Microsoft\n3. สร้าง Virtual Environment ด้วยคำสั่ง: python -m venv .venv"
    },
    {
      name: "Postman / Thunder Client",
      icon: "⚡",
      badge: "API Testing",
      description: "เครื่องมือทดสอบการเรียกใช้งาน REST API, HTTP Headers, JSON Body และ Swagger OpenAPI Endpoints",
      downloadUrl: "https://www.postman.com/downloads/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Postman หรือใช้ส่วนขยาย Thunder Client ใน VS Code\n2. สร้างคำขอ HTTP GET/POST ไปยัง http://127.0.0.1:8000\n3. ตรวจสอบ Response Status Code 200 OK และ JSON Body"
    }
  ],
  lessons: [
    {
      id: "py-1",
      title: "สถาปัตยกรรม CPython Internals: Dynamic Typing, Bytecode, Reference Counting และ GC",
      description: "เจาะลึกเบื้องหลังการทำงานของ Python: สถาปัตยกรรม CPython, โครงสร้าง PyObject, กระบวนการคอมไพล์ซอร์สโค้ดสู่ Bytecode (.pyc), การจัดการหน่วยความจำด้วย Reference Counting และ Cyclic Garbage Collection (Gen 0, 1, 2) และมาตรฐาน PEP 8",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา Python และระบบการทำงานภายใน (CPython Internals)

ภาษา **Python** ที่ใช้งานกันแพร่หลายที่สุดในโลกคือ **CPython** ซึ่งเป็น Reference Implementation ที่เขียนขึ้นด้วยภาษา C

ใน Python ตัวแปรไม่ได้เป็น "กล่องเก็บข้อมูล" เหมือนใน C หรือ C++ แต่เป็น **ชื่อป้ายกำกับ (Label/Pointer)** ที่ชี้ไปยังอ็อบเจกต์ในหน่วยความจำ:
> *"Everything in Python is an Object (ทุกสิ่งใน Python ล้วนเป็น Object ทั้งฟังก์ชัน ตัวเลข และคลาส)"*

---

## 1. กระบวนการทำงานของ CPython (Execution Pipeline)

\`\`\`text
+-------------------------------------------------------------------------+
|                  CPython Compilation & Execution Pipeline               |
+-------------------------------------------------------------------------+
|  Source Code (.py)                                                      |
|        │                                                                |
|        ▼ (Lexer & Parser)                                               |
|  Abstract Syntax Tree (AST)                                             |
|        │                                                                |
|        ▼ (Bytecode Compiler)                                            |
|  Python Bytecode (.pyc file stored in __pycache__)                      |
|        │                                                                |
|        ▼                                                                |
|  Python Virtual Machine (PVM - ceval.c Evaluation Loop)                 |
|        │                                                                |
|        ▼ (รันผ่าน C Standard Library & Native System Calls)             |
|  CPU Machine Execution                                                  |
+-------------------------------------------------------------------------+
\`\`\`

1. **Parser & AST:** ตรวจสอบไวยากรณ์และแปลงโค้ดเป็นโครงสร้างต้นไม้
2. **Bytecode Compiler:** แปลง AST ออกมาเป็นคำสั่งไบต์โค้ดเฉพาะของ PVM เช่น \`LOAD_FAST\`, \`BINARY_OP\`, \`STORE_FAST\`
3. **PVM Evaluation Loop (\`ceval.c\`):** ลูปวนอ่านไบต์โค้ดและส่งต่อให้ฮาร์ดแวร์ทำงาน

---

## 2. โครงสร้างหน่วยความจำ \`PyObject\`
ทุกอ็อบเจกต์ใน Python จะมี Header ประจำตัว (อย่างน้อย 16 ไบต์บนระบบ 64-bit):
\`\`\`c
struct _object {
    _PyObject_HEAD_EXTRA // ตัวชี้ Double Linked List สำหรับ Tracking
    Py_ssize_t ob_refcnt; // ตัวนับจำนวน Reference Count
    PyTypeObject *ob_type; // ตัวชี้ไปยัง Type Descriptor (เช่น &PyLong_Type)
};
\`\`\`
ดังนั้น ตัวเลขจำนวนเต็มธรรมดาอย่าง \`x = 42\` จึงกินหน่วยความจำถึง **28 ไบต์** ใน Python (8 ไบต์ refcnt + 8 ไบต์ type ptr + 8 ไบต์ size + 4 ไบต์ integer value)

---

## 3. การจัดการหน่วยความจำ: Reference Counting vs Cyclic GC
1. **Reference Counting (ตัวหลัก):** เมื่อมีการสร้างตัวแปรหรือส่งต่อ Reference Count จะเพิ่มขึ้น (+1) เมื่อตัวแปรหมดขอบเขตการใช้งานหรือถูก \`del\` ตัวนับจะลดลง (-1) หากตัวนับลดลงเหลือ **0** หน่วยความจำจะถูกส่งคืนระบบทันทีด้วยต้นทุน O(1)
2. **Cyclic Garbage Collector (ตัวเสริม):** คอยตรวจจับปัญหา **Circular Reference** (เช่น Object A อ้างอิง B และ B อ้างอิงกลับมาหา A) ซึ่งทำให้ Reference Count ไม่มีวันเป็น 0 ตัว Cyclic GC จะสแกนค้นหาเป็นรอบๆ แบ่งเป็น 3 Generations (Gen 0, 1, 2)`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# CPython Diagnostics: Reference Counting และ Object Inspection
# =================================================================

import sys
import gc

print("=== IT Academy CPython Runtime & Memory Diagnostics ===")

# 1. ตรวจสอบ Reference Counting ของตัวเลข
# ตัวเลขขนาดเล็ก (-5 ถึง 256) จะถูก Pre-allocated แคชไว้ใน CPython (Small Integer Cache)
sample_number = 1000
print(f"ค่าตัวเลข: {sample_number}")
# sys.getrefcount() จะนับการส่งเข้าไปในพารามิเตอร์ของฟังก์ชันเพิ่มอีก 1 เสมอ
print(f"• Reference Count: {sys.getrefcount(sample_number) - 1}")

alias_ref = sample_number
print(f"• Reference Count หลังสร้างตัวแปรอ้างอิงเพิ่ม: {sys.getrefcount(sample_number) - 1}")

# 2. ขนาดของตัวแปรในหน่วยความจำจริง
empty_list = []
filled_list = [1, 2, 3, 4, 5]
text_data = "IT Academy Online"

print(f"\n[ขนาดหน่วยความจำจริงของ Objects (PyObject)]")
print(f"• ตัวเลข 1000       : {sys.getsizeof(sample_number)} ไบต์")
print(f"• List ว่าง []      : {sys.getsizeof(empty_list)} ไบต์")
print(f"• List 5 สมาชิก     : {sys.getsizeof(filled_list)} ไบต์")
print(f"• สตริง '{text_data}' : {sys.getsizeof(text_data)} ไบต์")

# 3. สถานะ Garbage Collector
print(f"\n[สถานะ Cyclic Garbage Collector]")
print(f"• รอบการเก็บกวาด (Gen 0, Gen 1, Gen 2): {gc.get_count()}")
print(f"• ขีดจำกัด Thresholds (Gen 0, 1, 2)   : {gc.get_threshold()}")`,
        description: "การตรวจสอบโครงสร้าง Reference Counting และขนาดหน่วยความจำจริงของ Object ใน CPython"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `analyze_memory_usage(data)` ที่คืนค่า Tuple `(type_name, size_in_bytes)` โดยใช้ `type(data).__name__` และ `sys.getsizeof(data)`",
        startingCode: `import sys

def analyze_memory_usage(data: any) -> tuple[str, int]:
    # TODO: คืนค่าชื่อ Type และขนาดไบต์
    return ("", 0)`,
        solution: `import sys

def analyze_memory_usage(data: any) -> tuple[str, int]:
    return (type(data).__name__, sys.getsizeof(data))`
      },
      quiz: [
        {
          id: "py-1-q1",
          question: "กลไกหลักที่ CPython ใช้ในการปลดปล่อยหน่วยความจำ (Deallocation) เมื่ออ็อบเจกต์ไม่มีการใช้งานแล้วคืออะไร?",
          options: [
            "หยุดการทำงานของทั้งโปรแกรมเพื่อสแกนทั้งฮาร์ดดิสก์",
            "Reference Counting (เมื่อตัวนับการอ้างอิงของอ็อบเจกต์ลดลงเหลือ 0 หน่วยความจำจะถูกคืนทันที)",
            "ลบข้อมูลทิ้งทุกๆ 1 นาทีโดยอัตโนมัติ",
            "รอให้ระบบปฏิบัติการเข้ามาจัดการเองเมื่อเครื่องดับ"
          ],
          correctAnswer: 1,
          explanation: "CPython มีระบบหลักคือ Reference Counting ซึ่งติดตามว่ามีตัวแปรกี่ตัวชี้มายัง Object นั้น เมื่อตัวนับลดลงเหลือ 0 เมมโมรี่จะถูก Deallocate ทันที ส่วน Cyclic GC จะทำงานเฉพาะกรณีที่มี Circular Reference ค้างอยู่"
        },
        {
          id: "py-1-q2",
          question: "เหตุใดตัวแปรตัวเลข integer ธรรมดาใน Python เช่น `x = 42` จึงกินหน่วยความจำถึง 28 ไบต์ (มากกว่า 4 ไบต์ในภาษา C)?",
          options: [
            "เพราะ CPython เขียนโปรแกรมผิดพลาด",
            "เพราะทุกสิ่งใน Python เป็น PyObject ซึ่งมีโครงสร้าง Header เก็บ Reference Count (8 ไบต์), Type Pointer (8 ไบต์) และขนาดของข้อมูล (8 ไบต์) อยู่ด้วย",
            "เพราะ Python มีการเชื่อมต่อดาวเทียมตลอดเวลา",
            "เพราะตัวเลขใน Python ถูกแปลงเป็นรูปภาพเสมอ"
          ],
          correctAnswer: 1,
          explanation: "ใน CPython ทุกอ็อบเจกต์ต้องมีโครงสร้าง PyObject Header ซึ่งบรรจุตัวนับ Reference Count (ob_refcnt) และตัวชี้ชนิดข้อมูล (ob_type) บวกกับขนาดของตัวเลขแบบ Arbitrary-precision ทำให้ตัวเลขใน Python มีความยืดหยุ่นสูงแต่ใช้พื้นที่มากกว่าตัวเลข Primitive ของภาษา C"
        },
        {
          id: "py-1-q3",
          question: "ไฟล์นามสกุล `.pyc` ที่ถูกสร้างขึ้นในโฟลเดอร์ `__pycache__` มีบทบาทหน้าที่อะไร?",
          options: [
            "เป็นไฟล์ไวรัสของระบบ",
            "เป็นไฟล์เก็บ Python Bytecode ที่ถูกคอมไพล์ไว้ล่วงหน้า ช่วยให้การรันสคริปต์ในครั้งถัดไปเปิดทำงานได้เร็วขึ้นโดยไม่ต้อง Parse ซอร์สโค้ดซ้ำ",
            "เป็นไฟล์สำรองข้อมูลส่วนตัวของผู้ใช้",
            "เป็นไฟล์รูปภาพกราฟิกของโปรแกรม"
          ],
          correctAnswer: 1,
          explanation: "เมื่อรันโมดูลใน Python ตัวคอมไพเลอร์จะแปลงโค้ดเป็นไบต์โค้ดและแคชไว้ในไฟล์ .pyc ในครั้งถัดไป หากซอร์สโค้ดไม่มีการเปลี่ยนแปลง CPython จะโหลดไบต์โค้ดนี้เข้า PVM ได้ทันที ข้ามขั้นตอน Lexing และ Parsing ไปทั้งหมด"
        }
      ]
    },
    {
      id: "py-2",
      title: "โครงสร้างข้อมูลประสิทธิภาพสูง: Lists, Tuples, Dictionaries และ Sets",
      description: "วิเคราะห์ความซับซ้อนเชิงเวลา Big-O และโครงสร้างภายใน: PyListObject Array of Pointers, Over-allocation strategy, Compact Dictionary Design (Hash Tables ใน Python), Set Operations และ Comprehensions",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# โครงสร้างข้อมูลประสิทธิภาพสูงใน Python และ Big-O Time Complexity

การเลือกโครงสร้างข้อมูลที่ถูกต้องเป็นหัวใจสำคัญของการเขียนโค้ดที่รวดเร็วและใช้แรมน้อย ใน Python โครงสร้างข้อมูลพื้นฐานถูกพัฒนาขึ้นด้วยภาษา C ให้อย่างมีประสิทธิภาพสูงสุด

---

## 1. เบื้องหลังของ \`list\` (Dynamic Pointer Array)
ใน CPython \`list\` ไม่ใช่ Linked List แต่เป็น **Dynamic Array of Pointers (\`PyListObject\`)**:
- สมาชิกของ List จะเก็บ Memory Address ชี้ไปยังอ็อบเจกต์จริง
- **การเข้าถึงตามดัชนี (\`lst[i]\`):** ใช้เวลา **O(1)**
- **การขยายขนาด (Over-allocation Strategy):** เมื่อ Append ข้อมูลจนเต็ม CPython จะไม่ขยายทีละ 1 ช่อง แต่จะขยายแบบทวีคูณ (เช่น 0, 4, 8, 16, 25, 35, 46...) ทำให้ \`append()\` มีต้นทุนเฉลี่ยเป็น **O(1) Amortized**
- **การแทรกหรือลบตรงกลาง (\`insert(0, val)\` / \`pop(0)\`):** ต้องขยับพอยน์เตอร์ทั้งหมดถอยหลัง จึงมีต้นทุนเป็น **O(N)**! (หากต้องการคิวสองด้าน ให้ใช้ \`collections.deque\` ซึ่งมีต้นทุน O(1))

---

## 2. Compact Dictionary Architecture (Hash Tables ยุคใหม่)
ตั้งแต่ Python 3.6+ ได้ปรับโครงสร้าง Dict เป็น **Compact Dictionary (ออกแบบโดย Raymond Hettinger)**:

\`\`\`text
แบบเดิม (สิ้นเปลือง):
[ Hash Table ขนาดยักษ์ มีช่องว่าง Sparse สูง ]

แบบใหม่ (Compact Dict):
1. Indices Array (ก้อนเล็ก): [None, 1, None, 0, None, 2]  <-- เก็บ Index
2. Entries Array (ชิดติดกัน):
   Index 0: [hash_val, key="name", value="Somchai"]
   Index 1: [hash_val, key="id",   value="STD-01"]
   Index 2: [hash_val, key="gpa",  value=3.85]
\`\`\`
- **ประหยัดหน่วยความจำ RAM ลงกว่า 25% - 35%**
- **รักษาลำดับการแทรกข้อมูล (Insertion Order Preserved)** เป็นคุณสมบัติทางการของภาษา

---

## 3. ตารางเปรียบเทียบ Time Complexity

| การดำเนินการ | List | Set | Dictionary |
| :--- | :---: | :---: | :---: |
| ค้นหาสมาชิก (\`item in collection\`) | **O(N)** ช้ามาก | **O(1) Average** เร็วมาก | **O(1) Average** (ค้นหาที่ Key) |
| เพิ่มข้อมูล (\`append\` / \`add\`) | **O(1) Amortized** | **O(1)** | **O(1)** |
| การตัดส่วน (Slicing \`[a:b]\`) | O(K) สร้างสำเนาใหม่ | - | - |
| ลบข้อมูลตาม Index / Key | O(N) | **O(1)** | **O(1)** |`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Data Structures Performance & Memory Optimization Lab
# =================================================================

import time

# 1. การเปรียบเทียบความเร็วในการค้นหา: List vs Set (O(N) vs O(1))
dataset_size = 200_000
search_target = 199_999

sample_list = list(range(dataset_size))
sample_set = set(sample_list)

# ทดสอบค้นหาใน List (O(N) Linear Search)
t0 = time.perf_counter()
found_in_list = search_target in sample_list
t_list = (time.perf_counter() - t0) * 1000

# ทดสอบค้นหาใน Set (O(1) Hash Table Lookup)
t1 = time.perf_counter()
found_in_set = search_target in sample_set
t_set = (time.perf_counter() - t1) * 1000

print(f"🔍 ผลการค้นหาข้อมูลในชุดข้อมูล {dataset_size:,} รายการ:")
print(f"• ค้นหาใน List (O(N)) : {t_list:.4f} ms")
print(f"• ค้นหาใน Set  (O(1)) : {t_set:.4f} ms (เร็วกว่า {t_list/max(t_set, 0.0001):.1f} เท่า!)")

# 2. Advanced Dict & Set Comprehensions
students_catalog = [
    {"id": "STD-01", "name": "สมชาย ใจดี", "department": "IT", "gpa": 3.85},
    {"id": "STD-02", "name": "กานดา สุขเกษม", "department": "IT", "gpa": 3.92},
    {"id": "STD-03", "name": "ธนากร วิเศษศิลป์", "department": "CS", "gpa": 3.40},
    {"id": "STD-04", "name": "วรัญญา นามดี", "department": "BC", "gpa": 3.75},
]

# ค้นหาแผนกวิชาที่มีทั้งหมดแบบ Unique ด้วย Set Comprehension
departments = {s["department"] for s in students_catalog}
print(f"\n🏛️ แผนกวิชาทั้งหมดในระบบ (Set): {departments}")

# สร้าง Lookup Index ด้วย Dict Comprehension
id_to_student = {s["id"]: s for s in students_catalog if s["gpa"] >= 3.50}
print(f"🏆 นักศึกษาเกียรตินิยม Lookup Map: {list(id_to_student.keys())}")`,
        description: "การทดสอบความเร็วระหว่าง List และ Set พร้อมการใช้งาน Comprehensions"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `find_duplicates(items)` ที่รับ List ของข้อมูล แล้วคืนค่าเป็น Set ของสมาชิกที่มีค่าซ้ำกันตั้งแต่ 2 ครั้งขึ้นไป โดยมี Time Complexity รวมเป็น O(N)",
        startingCode: `def find_duplicates(items: list) -> set:
    # TODO: คืนค่าเซตของสมาชิกที่ซ้ำกัน
    return set()`,
        solution: `def find_duplicates(items: list) -> set:
    seen = set()
    duplicates = set()
    for item in items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return duplicates`
      },
      quiz: [
        {
          id: "py-2-q1",
          question: "ทำไมการตรวจสอบว่ามีข้อมูลอยู่ในเซตหรือไม่ (`item in my_set`) จึงทำงานได้เร็วกว่าในลิสต์ (`item in my_list`) อย่างมหาศาลเมื่อข้อมูลมีขนาดใหญ่?",
          options: [
            "เพราะ Set มีการบีบอัดข้อมูลด้วย ZIP",
            "เพราะ Set ทำงานบนโครงสร้าง Hash Table ที่แปลงข้อมูลเป็น Hash Code แล้วชี้ไปยังช่องข้อมูลได้ในเวลาเฉลี่ย O(1) ขณะที่ List ต้องวนลูปเปรียบเทียบทีละตัวตั้งแต่ต้นจนจบ O(N)",
            "เพราะ Set รันเฉพาะบนหน่วยความจำของการ์ดจอ",
            "เพราะ List ไม่อนุญาตให้เก็บข้อมูลตัวเลข"
          ],
          correctAnswer: 1,
          explanation: "Set และ Dictionary ใน Python ใช้โครงสร้าง Hash Table ซึ่งคำนวณตำแหน่งช่องจัดเก็บจากค่า Hash ของข้อมูล ทำให้การค้นหาใช้เวลาคงที่เฉลี่ย O(1) ไม่ว่าข้อมูลจะมีหมื่นหรือล้านตัว แตกต่างจาก List ที่ต้องทำ Linear Search วิ่งตรวจทีละตำแหน่ง O(N)"
        },
        {
          id: "py-2-q2",
          question: "การแทรกข้อมูลที่หัวแถวของ List ด้วยคำสั่ง `my_list.insert(0, value)` มีความซับซ้อนเชิงเวลา (Time Complexity) ระดับใด และควรใช้โครงสร้างใดแทน?",
          options: [
            "O(1) ไม่ต้องเปลี่ยนโครงสร้าง",
            "O(N) เพราะต้องขยับสมาชิกทั้งหมดใน Array ไปข้างหลัง 1 ตำแหน่ง และควรเปลี่ยนไปใช้ `collections.deque` ที่รองรับการแทรกหัวแถวแบบ O(1)",
            "O(N^2) และควรเปลี่ยนไปใช้ String",
            "O(log N) และควรเปลี่ยนไปใช้ Tuple"
          ],
          correctAnswer: 1,
          explanation: "เนื่องจาก List ใน CPython คือ Contiguous Array of Pointers การแทรกที่ตำแหน่ง index 0 จะต้องเลื่อนพอยน์เตอร์ของสมาชิกที่เหลือทั้งหมดไปทางขวา O(N) หากต้องการโครงสร้างคิวที่เพิ่ม/ลดข้อมูลที่หัวแถวได้รวดเร็วระดับ O(1) ต้องใช้ Double-ended Queue (`collections.deque`)"
        },
        {
          id: "py-2-q3",
          question: "โครงสร้าง Compact Dictionary ที่นำเสนอใน Python ยุคใหม่ มีข้อดีสำคัญอย่างไร?",
          options: [
            "ทำให้ Dictionary เก็บข้อมูลได้เฉพาะตัวเลขเท่านั้น",
            "ลดการใช้หน่วยความจำ RAM ลง 25%-35% ด้วยการแยก Sparse Index Array ออกจาก Dense Entries Array และรับประกันการรักษาลำดับการเพิ่มข้อมูล (Insertion Order)",
            "ป้องกันไม่ให้ผู้ใช้ลบข้อมูลใน Dictionary ได้",
            "เข้ารหัสข้อมูลด้วยรหัสผ่านอัตโนมัติ"
          ],
          correctAnswer: 1,
          explanation: "Compact Dict แยกเก็บ Indices ขนาดเล็กและ Entries ที่เรียงชิดติดกัน ช่วยลดพื้นที่ว่างเปล่า (Sparse Table Waste) ประหยัดแรมลงถึง 1 ใน 3 และทำให้ Dictionary ใน Python การันตีการเรียงลำดับตามเวลาที่เพิ่มข้อมูล (Insertion Order Preserved) เป็นมาตรฐาน"
        }
      ]
    },
    {
      id: "py-3",
      title: "OOP ขั้นสูง: Dunder Methods, Descriptors, Dataclasses และ Method Resolution Order (MRO)",
      description: "สถาปัตยกรรม OOP เชิงลึกใน Python: Magic Methods (__str__, __repr__, __eq__, __hash__), Descriptor Protocol (__get__, __set__), Method Resolution Order (C3 Linearization), และการเพิ่มประสิทธิภาพด้วย @dataclass(slots=True)",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# การเขียนโปรแกรมเชิงวัตถุ (OOP) ขั้นสูงใน Python

Python รองรับการเขียนโปรแกรมเชิงวัตถุอย่างสมบูรณ์แบบ โดยหัวใจของคลาสใน Python คือ **Data Model Protocols** ผ่านฟังก์ชันพิเศษที่เรียกว่า **Dunder Methods (Double Underscore Methods)**

---

## 1. Magic Methods (Dunder Methods) ที่สำคัญในระดับ Production

- \`__init__(self, ...)\`: คอนสตรักเตอร์สำหรับกำหนดค่าเริ่มต้นของอ็อบเจกต์
- \`__str__(self)\`: ข้อความอ่านง่ายสำหรับผู้ใช้ทั่วไป (\`str(obj)\` หรือ \`print(obj)\`)
- \`__repr__(self)\`: ข้อความทางการสำหรับการดีบั๊กของนักพัฒนา (\`repr(obj)\`)
- \`__eq__(self, other)\`: ตรรกะการตรวจสอบความเท่ากัน (\`==\`)
- \`__hash__(self)\`: การคำนวณ Hash Code เมื่อต้องการให้อ็อบเจกต์ทำตัวเป็น Key ใน Dict หรือสมาชิกใน Set ได้
- \`__enter__\` / \`__exit__\`: โครงสร้างสำหรับทำงานร่วมกับคำสั่ง \`with\` (Context Manager)

---

## 2. Descriptor Protocol (เบื้องหลังของ \`@property\`)
Descriptor คือคลาสที่ควบคุมการเข้าถึงคุณสมบัติของอ็อบเจกต์อื่นผ่านเมธอด \`__get__\`, \`__set__\`, หรือ \`__delete__\`:

\`\`\`python
class PositiveNumber:
    def __set_name__(self, owner, name):
        self.name = name

    def __set__(self, instance, value):
        if value < 0:
            raise ValueError(f"{self.name} ต้องไม่ติดลบ")
        instance.__dict__[self.name] = value
\`\`\`

---

## 3. Multiple Inheritance และ Method Resolution Order (C3 Linearization)
Python รองรับการสืบทอดหลายคลาสพร้อมกัน (Multiple Inheritance) เพื่อป้องกันปัญหา **Diamond Problem** Python ใช้อัลกอริทึม **C3 Linearization** ในการจัดลำดับการเรียกเมธอด สามารถตรวจสอบได้ด้วย \`ClassName.mro()\`:

\`\`\`text
      A
     / \\
    B   C
     \\ /
      D  --> MRO ลำดับการเรียก: D -> B -> C -> A -> object
\`\`\`

---

## 4. Modern Dataclasses พร้อม \`slots=True\` (Python 3.10+)
การประกาศคลาสทั่วไป Python จะสร้างพจนานุกรม \`__dict__\` ประจำอ็อบเจกต์ทุกตัว ทำให้เปลืองแรม การใช้ \`@dataclass(slots=True)\` จะบังคับให้จองหน่วยความจำแบบ Fix Struct:
- **ลดการใช้แรมลงกว่า 50% - 60%**
- **เพิ่มความเร็วในการอ่าน/เขียน Property ขึ้นกว่า 20%**`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Advanced Python OOP: Dataclasses with Slots & Dunder Protocols
# =================================================================

from dataclasses import dataclass
import sys

# 1. คลาสแบบดั้งเดิม (สร้าง __dict__ เปลืองแรม)
class StandardStudent:
    def __init__(self, student_id: str, name: str, gpa: float):
        self.student_id = student_id
        self.name = name
        self.gpa = gpa

# 2. คลาสสมัยใหม่ด้วย @dataclass พร้อม slots=True (Zero __dict__ Overhead)
@dataclass(slots=True, frozen=True)
class OptimizedStudent:
    student_id: str
    name: str
    gpa: float

    # Magic Dunder Method เสริม
    def __repr__(self) -> str:
        return f"🎓 Student({self.student_id}: {self.name}, GPA={self.gpa:.2f})"

print("=== การเปรียบเทียบการใช้หน่วยความจำ OOP ใน Python 3.12 ===")

std_normal = StandardStudent("STD-01", "สมชาย ใจดี", 3.85)
std_slotted = OptimizedStudent("STD-01", "สมชาย ใจดี", 3.85)

# อ็อบเจกต์ที่มี __dict__ จะกินแรมของ Object + ขนาดของ Dict ข้างใน
size_normal = sys.getsizeof(std_normal) + sys.getsizeof(std_normal.__dict__)
size_slotted = sys.getsizeof(std_slotted)

print(f"• คลาสปกติ (มี __dict__) : {size_normal} ไบต์")
print(f"• คลาส Slotted Dataclass : {size_slotted} ไบต์ (ประหยัดแรมลง {((size_normal - size_slotted)/size_normal)*100:.1f}%)")

# ตรวจสอบ Method Resolution Order (MRO)
class BaseService: pass
class AuditMixin: pass
class StudentService(AuditMixin, BaseService): pass

print(f"\n[Method Resolution Order - C3 Linearization]")
for idx, cls in enumerate(StudentService.mro()):
    print(f"  {idx + 1}. {cls.__name__}")`,
        description: "การสร้าง High-Performance Value Objects ด้วย Dataclass(slots=True) และการสืบค้น MRO"
      },
      challenge: {
        description: "สร้าง Dataclass ชื่อ `Book` ที่มีฟิลด์ `title: str`, `price: float` โดยเปิดออปชัน `frozen=True` และ `slots=True`",
        startingCode: `from dataclasses import dataclass

# TODO: สร้าง Book Dataclass
`,
        solution: `from dataclasses import dataclass

@dataclass(frozen=True, slots=True)
class Book:
    title: str
    price: float`
      },
      quiz: [
        {
          id: "py-3-q1",
          question: "การใช้พารามิเตอร์ `slots=True` ใน `@dataclass` มีประโยชน์สำคัญอย่างไรต่อการพัฒนาซอฟต์แวร์ระดับองค์กร?",
          options: [
            "ทำให้คลาสสามารถเล่นเกมได้",
            "ยกเลิกการสร้าง `__dict__` ในทุกอินสแตนซ์ และจองพื้นที่หน่วยความจำเป็นแบบคงที่ ช่วยลดการใช้หน่วยความจำ RAM ลงกว่า 50% และเพิ่มความเร็วในการเข้าถึง Property",
            "ป้องกันไม่ให้ใครเปิดอ่านไฟล์ .py",
            "บังคับให้ทุกตัวแปรต้องมีค่าเท่ากับ 0"
          ],
          correctAnswer: 1,
          explanation: "โดยปกติ Python Object จะสร้าง `__dict__` (ที่เป็น Hash Table ขนาดหลายร้อยไบต์) ไว้เก็บฟิลด์ของตัวแปร การเปิดใช้ `slots=True` จะแทนที่ __dict__ ด้วยโครงสร้าง Array ขนาดคงที่ใน C-level ช่วยประหยัดแรมอย่างมหาศาลเมื่อต้องสร้างอ็อบเจกต์นับแสนตัว"
        },
        {
          id: "py-3-q2",
          question: "ในกรณีที่มีการสืบทอดหลายคลาส (Multiple Inheritance) CPython ใช้อัลกอริทึมใดในการตัดสินลำดับการสืบค้นเมธอด (Method Resolution Order)?",
          options: [
            "สุ่มตามใจชอบ",
            "C3 Linearization Algorithm",
            "First In First Out (FIFO)",
            "Dijkstra Shortest Path"
          ],
          correctAnswer: 1,
          explanation: "Python ใช้ C3 Linearization Algorithm ในการคำนวณ MRO ซึ่งรับประกันคุณสมบัติความสอดคล้องตามลำดับความสัมพันธ์ของคลาสพ่อแม่ (Local Precedence Order) และแก้ปัญหา Diamond Inheritance ป้องกันการเรียกเมธอดซ้ำซ้อน"
        },
        {
          id: "py-3-q3",
          question: "ความแตกต่างระหว่าง Magic Methods `__str__` และ `__repr__` คืออะไร?",
          options: [
            "__str__ ให้ผลลัพธ์ที่อ่านง่าย สวยงาม เหมาะสำหรับแสดงผลให้ผู้ใช้ทั่วไป ส่วน __repr__ มุ่งเน้นความชัดเจนทางเทคนิคสำหรับนักพัฒนาในการดีบั๊ก",
            "__str__ ใช้กับตัวเลข ส่วน __repr__ ใช้กับตัวอักษร",
            "__repr__ ถูกยกเลิกไปแล้วใน Python 3",
            "ทั้งคู่ทำงานเหมือนกันทุกประการ"
          ],
          correctAnswer: 0,
          explanation: "ตามปรัชญาของ Python: `__str__` มีเป้าหมายเพื่อความอ่านง่าย (Readable) สำหรับผู้ใช้งาน ส่วน `__repr__` มีเป้าหมายเพื่อความชัดเจน ไม่คลุมเครือ (Unambiguous) และเป็นประโยชน์ต่อการดีบั๊ก โดยหากเป็นไปได้ โค้ดของ __repr__ ควรเป็นสตริงคำสั่งที่นำไปรันเพื่อสร้างอ็อบเจกต์เดิมขึ้นมาใหม่ได้"
        }
      ]
    },
    {
      id: "py-4",
      title: "Generators, Iterators, Custom Decorators (@wraps) และ Context Managers",
      description: "เทคนิคขั้นสูงใน Python: Iterator Protocol (__iter__, __next__), การประหยัดแรมด้วย Generators (yield), Function & Class Decorators พร้อม functools.wraps, และการจัดการทรัพยากรด้วย Context Managers (__enter__, __exit__)",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Generators, Decorators และ Context Managers

สำหรับงาน Big Data, ระบบจัดการไฟล์ขนาดใหญ่ และ High-Performance Backend การโหลดข้อมูลทั้งหมดเข้า RAM พร้อมกันเป็นสิ่งต้องห้าม เทคนิค **Lazy Evaluation** และ **Metaprogramming** จึงเป็นสิ่งจำเป็น

---

## 1. Iterator Protocol และ Generators (\`yield\`)
- **Iterator Protocol:** อ็อบเจกต์ที่ Implement เมธอด \`__iter__()\` และ \`__next__()\` โดยจะโยน Exception \`StopIteration\` เมื่อข้อมูลหมด
- **Generators (\`yield\`):** เมื่อฟังก์ชันมีคำสั่ง \`yield\` ฟังก์ชันนั้นจะกลายเป็น Generator ทันที โดยสถานะของตัวแปรและตำแหน่งคำสั่ง (Execution Frame) จะถูกแช่แข็งไว้ และจะกลับมาประมวลผลต่อเมื่อถูกเรียก \`next()\`
- **Zero Memory Streaming:** ไม่ว่าไฟล์ Log จะมีขนาด 50 GB ก็สามารถอ่านและประมวลผลได้โดยใช้หน่วยความจำคงที่ **O(1) Memory**

---

## 2. Function Decorators และ \`functools.wraps\`
Decorator คือฟังก์ชันที่รับฟังก์ชันอื่นเข้ามาเป็นอาร์กิวเมนต์ เพื่อห่อหุ้ม ขยายความสามารถ หรือดักจับการทำงาน (Wrapper):
- **\`@functools.wraps(func)\`:** จำเป็นต้องใช้เสมอ เพื่อคัดลอก Metadata ดั้งเดิม (เช่น \`__name__\`, \`__doc__\`, Type Hints) ของฟังก์ชันต้นฉบับมาไว้ที่ wrapper ป้องกันปัญหาชื่อฟังก์ชันกลายเป็น \`wrapper\` ในเอกสารหรือ Debugger

---

## 3. Context Managers (\`with\` statement)
การเปิดไฟล์หรือต่อฐานข้อมูลมีความเสี่ยงที่ทรัพยากรจะรั่วไหล (Resource Leak) หากเกิด Exception กลางคัน คำสั่ง \`with\` รับประกันว่าเมธอด **\`__exit__()\`** จะถูกเรียกเสมอ (คล้าย try-finally):

\`\`\`python
class DatabaseSession:
    def __enter__(self):
        print("เปิด Connection")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("ปิด Connection ปลอดภัย 100%")
\`\`\``,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Advanced Lazy Data Streaming & Context Manager Implementation
# =================================================================

import time
from functools import wraps
from typing import Callable, Any, Generator

# 1. Custom Decorator พร้อม @wraps
def measure_execution_time(func: Callable) -> Callable:
    """Decorator วัดเวลาประมวลผลระดับไมโครวินาที"""
    @wraps(func)
    def wrapper(*args: Any, **kwargs: Any) -> Any:
        t0 = time.perf_counter()
        result = func(*args, **kwargs)
        duration_ms = (time.perf_counter() - t0) * 1000
        print(f"⚡ [METRIC] ฟังก์ชัน '{func.__name__}' ใช้เวลา: {duration_ms:.3f} ms")
        return result
    return wrapper

# 2. Generator Stream: คำนวณข้อมูลขนาดใหญ่แบบ O(1) Memory
def log_event_stream(total_events: int) -> Generator[dict, None, None]:
    """สร้างเหตุการณ์จำลองแบบ Lazy Stream ทีละรายการ"""
    for i in range(1, total_events + 1):
        yield {
            "event_id": f"EVT-{i:06d}",
            "severity": "CRITICAL" if i % 100 == 0 else "INFO",
            "timestamp": time.time()
        }

# 3. Context Manager สำหรับจัดสรรและคืนทรัพยากร
class TransactionScope:
    def __enter__(self):
        print("🔒 [ACID START] เริ่มต้น Transaction สู่ฐานข้อมูล...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            print(f"⚠️ [ROLLBACK] เกิดข้อผิดพลาด ({exc_val}): ทำการ Rollback ธุรกรรม!")
            return False # ส่งต่อ Exception ให้ภายนอกทราบ
        print("✅ [COMMIT] ธุรกรรมผ่านการยืนยันเสร็จสมบูรณ์!")
        return True

# 4. ทดสอบรัน
@measure_execution_time
def process_data_stream():
    with TransactionScope():
        stream = log_event_stream(500)
        critical_count = sum(1 for e in stream if e["severity"] == "CRITICAL")
        print(f"• พบเหตุการณ์ระดับวิกฤต: {critical_count} รายการ")

print("=== IT Academy Advanced Python Execution ===")
process_data_stream()`,
        description: "การสร้าง Custom Decorator, Generator Stream และ Transaction Context Manager"
      },
      challenge: {
        description: "เขียน Generator Function `batch_generator(items, batch_size)` ที่แบ่งสมาชิกใน items ออกมาเป็นก้อน List ย่อยขนาด batch_size ด้วยคำสั่ง yield",
        startingCode: `def batch_generator(items: list, batch_size: int):
    # TODO: ใช้ yield ส่งข้อมูลทีละ batch
    pass`,
        solution: `def batch_generator(items: list, batch_size: int):
    for i in range(0, len(items), batch_size):
        yield items[i:i + batch_size]`
      },
      quiz: [
        {
          id: "py-4-q1",
          question: "เหตุใดจึงควรใช้ Generator (`yield`) แทนที่จะส่งคืน List ข้อมูลทั้งก้อน เมื่อต้องประมวลผลไฟล์ขนาดใหญ่ระดับหลายกิกะไบต์?",
          options: [
            "เพราะ Generator แปลงไฟล์เป็นภาพยนตร์ได้",
            "เพราะ Generator คำนวณและส่งมอบข้อมูลทีละก้อน (Lazy Stream) ทำให้ใช้หน่วยความจำ RAM คงที่ O(1) โดยไม่ต้องโหลดข้อมูลทั้งหมดเข้ามาในหน่วยความจำพร้อมกัน",
            "เพราะ List ไม่อนุญาตให้เปิดไฟล์เกิน 10 บรรทัด",
            "เพราะ Generator ป้องกันไวรัสคอมพิวเตอร์"
          ],
          correctAnswer: 1,
          explanation: "Generator ประมวลผลแบบ Lazy Evaluation โดยส่งคืนค่าทีละรายการเมื่อถูกร้องขอ (ผ่าน `next()`) ทำให้โปรแกรมสามารถประมวลผลข้อมูลขนาดใหญ่ไม่จำกัดได้โดยใช้หน่วยความจำ RAM เพียงไม่กี่กิโลไบต์"
        },
        {
          id: "py-4-q2",
          question: "ทำไมการสร้างฟังก์ชัน Decorator จึงควรใส่ `@functools.wraps(func)` ครอบฟังก์ชัน wrapper ไว้เสมอ?",
          options: [
            "เพื่อเพิ่มความเร็วในการรัน 100 เท่า",
            "เพื่อรักษา Metadata ดั้งเดิมของฟังก์ชันต้นฉบับ เช่น ชื่อฟังก์ชัน (`__name__`), ข้อความอธิบาย (`__doc__`) และ Type Annotations ป้องกันไม่ให้ถูกเขียนทับด้วยข้อมูลของ wrapper",
            "เพื่อบังคับให้ฟังก์ชันต้องรับพารามิเตอร์เป็นตัวเลขเท่านั้น",
            "เพื่อส่งผลลัพธ์ไปยังอีเมลของนักพัฒนา"
          ],
          correctAnswer: 1,
          explanation: "หากไม่ใช้ `@functools.wraps` ฟังก์ชันที่ถูกตกแต่งจะมี `__name__` กลายเป็น `'wrapper'` และสูญเสีย docstring ไป ทำให้เครื่องมือ Debugger, IDE IntelliSense และไลบรารีสร้างเอกสารทำงานผิดพลาด"
        },
        {
          id: "py-4-q3",
          question: "ในโปรโตคอล Context Manager เมื่อเกิด Exception ขึ้นภายในบล็อก `with` เมธอด `__exit__` ต้องคืนค่าแบบใด หากต้องการกลืนข้อผิดพลาดนั้นไว้ไม่ให้แอปพลิเคชัน Crash?",
          options: [
            "คืนค่า 0",
            "คืนค่า True",
            "คืนค่า False หรือ None",
            "โยนคำสั่ง break"
          ],
          correctAnswer: 1,
          explanation: "ในเมธอด `__exit__(self, exc_type, exc_val, exc_tb)` หากส่งคืนค่า `True` ตัว Python จะถือว่า Exception นั้นได้รับการจัดการเรียบร้อยแล้วและจะระงับการโยนข้อผิดพลาดต่อ (Suppress Exception) แต่หากคืนค่า `False` หรือ `None` ข้อผิดพลาดจะถูกโยนออกสู่ภายนอกตามปกติ"
        }
      ]
    },
    {
      id: "py-5",
      title: "Concurrency ใน Python: AsyncIO Event Loop, Multithreading และ Multiprocessing",
      description: "ทำความเข้าใจสถาปัตยกรรม Concurrency ใน Python: Global Interpreter Lock (GIL), การเลือกใช้ I/O-Bound vs CPU-Bound, AsyncIO Event Loop Architecture, Coroutines (async/await), TaskGroup และ ProcessPoolExecutor",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# Concurrency ใน Python: AsyncIO, GIL และ Multi-Core Architecture

หนึ่งในประเด็นที่ถูกกล่าวถึงมากที่สุดในภาษา Python คือ **Global Interpreter Lock (GIL)** ซึ่งเป็น Mutex Lock ระดับแกนกลางของ CPython ที่อนุญาตให้มีเพียง **1 เธรดเท่านั้นที่สามารถประมวลผล Python Bytecode ได้ในเวลาเดียวกัน**

---

## 1. แผนภูมิการเลือกรูปแบบ Concurrency ใน Python

\`\`\`text
                      ลักษณะของภาระงาน (Workload Type)
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
     [ I/O-Bound Workload ]                              [ CPU-Bound Workload ]
  (รอ Network, Database, Web API)                    (คำนวณคณิตศาสตร์, Image Processing, AI)
           │                                                   │
  ┌────────┴────────┐                                          ▼
  ▼                 ▼                                  [ Multiprocessing ]
[ AsyncIO ]   [ Multithreading ]               (แยก Process แยก Memory แยก Core)
(Single-thread (OS Preemptive Threads)         (หลุดพ้นจาก GIL อย่างสมบูรณ์ 100%)
 Event Loop)
\`\`\`

---

## 2. สถาปัตยกรรม AsyncIO Event Loop
AsyncIO ไม่ได้สร้าง OS Thread ขึ้นมาใหม่นับพันตัว แต่ใช้แนวคิด **Single-Threaded Cooperative Multitasking**:
- มี **Event Loop** ทำหน้าที่วนลูปตรวจสอบ I/O Sockets ผ่าน System Calls ของ OS (\`epoll\` บน Linux, \`kqueue\` บน macOS, \`IOCP\` บน Windows)
- เมื่อ Coroutine สั่ง \`await asyncio.sleep()\` หรือ \`await db.query()\` Coroutine นั้นจะ **คืนสิทธิ์การควบคุมกลับสู่ Event Loop** เพื่อเปิดทางให้งานอื่นทำงานต่อได้ทันที
- ส่งผลให้รองรับ Concurrent Connections ได้หลายหมื่นการเชื่อมต่อโดยไม่เปลืองหน่วยความจำ

---

## 3. วิวัฒนาการสู่ \`asyncio.TaskGroup\` (Python 3.11+)
แทนที่จะใช้ \`asyncio.gather\` แบบเดิมที่หากมี Task ตัวใดพัง ตัวอื่นอาจยังทำงานค้างอยู่ Python 3.11 นำเสนอ **Structured Concurrency** ผ่าน \`asyncio.TaskGroup\`:
- รับประกันว่าทุก Task ในกลุ่มต้องทำงานเสร็จทั้งหมด หรือหากมี Task ใดโยน Exception ระบบจะยกเลิก Task ที่เหลือในกลุ่มทันทีอย่างเป็นระเบียบ`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Production-Grade AsyncIO Structured Concurrency (Python 3.11+)
# =================================================================

import asyncio
import time

async def fetch_service_telemetry(service_id: str, delay_seconds: float) -> dict:
    """จำลองการยิง HTTP ไปดึงสถานะจาก Microservices ภายนอก"""
    print(f"⏳ [REQ START] เริ่มต้นเชื่อมต่อบริการ: {service_id}...")
    
    # Non-blocking Sleep: คืนการควบคุมให้ Event Loop นำงานอื่นมารันต่อทันที
    await asyncio.sleep(delay_seconds)
    
    print(f"✅ [REQ DONE] ได้รับข้อมูลจาก: {service_id} (ใช้เวลา {delay_seconds*1000:.0f}ms)")
    return {
        "service": service_id,
        "status": "HEALTHY",
        "latency_ms": int(delay_seconds * 1000)
    }

async def run_structured_concurrency_demo():
    print("🚀 เริ่มการดึงข้อมูลสถานะ Microservices พร้อมกันด้วย TaskGroup:\n")
    start_time = time.perf_counter()
    
    results = []

    # ใช้งาน TaskGroup ตามหลัก Structured Concurrency
    async with asyncio.TaskGroup() as tg:
        t1 = tg.create_task(fetch_service_telemetry("Auth-Service", 0.4))
        t2 = tg.create_task(fetch_service_telemetry("Billing-Engine", 0.6))
        t3 = tg.create_task(fetch_service_telemetry("Notification-Hub", 0.3))

    # เมื่อออกจากบล็อก async with แสดงว่าทุก Task เสร็จสมบูรณ์แล้วแน่นอน 100%
    results = [t1.result(), t2.result(), t3.result()]
    elapsed_total = (time.perf_counter() - start_time) * 1000

    print("\n--- สรุปผลการสืบค้นสถานะ Microservices ---")
    for r in results:
        print(f"• บริการ: {r['service']} | สถานะ: {r['status']} | Latency: {r['latency_ms']} ms")
    
    print(f"\n⏱️ เวลารวมทั้งหมด: {elapsed_total:.2f} ms (ทำงานแบบคู่ขนาน ไม่ใช่บวกเวลากัน!)")

# รัน Event Loop
asyncio.run(run_structured_concurrency_demo())`,
        description: "การประมวลผลงานแบบ Asynchronous Concurrent ด้วย asyncio.TaskGroup บน Python 3.11+"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `async def run_parallel_jobs()` ที่ปล่อย 2 งานด้วย `asyncio.gather`: งานแรก sleep 0.1s คืน 'A' งานที่สอง sleep 0.2s คืน 'B' แล้วคืนค่าลิสต์ผลลัพธ์",
        startingCode: `import asyncio

async def run_parallel_jobs():
    # TODO: ใช้ asyncio.gather
    return []`,
        solution: `import asyncio

async def job(val, delay):
    await asyncio.sleep(delay)
    return val

async def run_parallel_jobs():
    return await asyncio.gather(job('A', 0.1), job('B', 0.2))`
      },
      quiz: [
        {
          id: "py-5-q1",
          question: "Global Interpreter Lock (GIL) ใน CPython มีผลกระทบโดยตรงต่องานประเภทใดมากที่สุด?",
          options: [
            "งานประเภท CPU-Bound ที่พยายามใช้ Multithreading เพื่อเร่งความเร็วบน CPU หลาย Core",
            "งานประเภทอ่านเขียนไฟล์ดิสก์",
            "งานพิมพ์เอกสารออกทางเครื่องพิมพ์",
            "งานเล่นไฟล์เสียง"
          ],
          correctAnswer: 0,
          explanation: "GIL บังคับให้ CPython รันคำสั่งไบต์โค้ดได้เพียง 1 เธรดในแต่ละขณะเวลา ดังนั้นหากมีงานคำนวณหนักๆ (CPU-Bound) การใช้ threading จะไม่ช่วยให้เร็วขึ้นเลยและอาจช้าลงจากค่าสลับ Lock ต้องเลี่ยงไปใช้ `multiprocessing` แทน"
        },
        {
          id: "py-5-q2",
          question: "หัวใจสำคัญของสถาปัตยกรรม AsyncIO Event Loop ใน Python คือข้อใด?",
          options: [
            "การเปิด Process แยกขึ้นมา 100 ตัวเพื่อทำงาน",
            "การทำงานแบบ Cooperative Multitasking บนเธรดเดี่ยว โดยเมื่อเจอคำสั่ง await งานจะปล่อยสิทธิ์ให้ Event Loop สลับไปรันงานอื่นในระหว่างที่รอ I/O",
            "การปิดระบบรักษาความปลอดภัยของระบบปฏิบัติการ",
            "การแปลงโค้ด Python ให้กลายเป็นไฟล์ Assembly"
          ],
          correctAnswer: 1,
          explanation: "AsyncIO ใช้โมเดล Single-Threaded Asynchronous Cooperative Multitasking คำสั่ง `await` จะคืนการควบคุมกลับสู่ Event Loop เพื่อให้สามารถหยิบงานหรือคำขออื่นๆ มารันต่อได้ในระหว่างรอคอย Network หรือ Disk I/O"
        },
        {
          id: "py-5-q3",
          question: "ข้อได้เปรียบหลักของ `asyncio.TaskGroup` (Python 3.11+) เมื่อเทียบกับ `asyncio.gather` ดั้งเดิมคืออะไร?",
          options: [
            "ทำให้การคำนวณทางคณิตศาสตร์เร็วขึ้น 10 เท่า",
            "สนับสนุนแนวคิด Structured Concurrency โดยรับประกันว่าทุก Task ต้องทำงานจนจบ หรือหากมี Task ตัวใดโยนข้อผิดพลาด ระบบจะช่วย Cancel งานที่เหลือในกลุ่มให้อัตโนมัติ ป้องกันปัญหางานค้างล่องลอย (Leaked Tasks)",
            "ช่วยให้แอปพลิเคชันทำงานได้โดยไม่ต้องมีแรม",
            "ลบตัวแปรที่เป็น None ออกจากหน่วยความจำ"
          ],
          correctAnswer: 1,
          explanation: "TaskGroup นำเสนอ Structured Concurrency สู่ Python เพื่อป้องกันปัญหา Orphaned/Leaked Tasks หากมีข้อผิดพลาดเกิดขึ้นในงานหนึ่ง ตัว TaskGroup context manager จะดักจับและทำการยกเลิกงานอื่นๆ ทั้งหมดในกลุ่มอย่างสะอาดตาและปลอดภัย"
        }
      ]
    },
    {
      id: "py-6",
      title: "การพัฒนา High-Performance REST API ด้วย FastAPI, Pydantic v2 และ Dependency Injection",
      description: "สร้าง REST API ความเร็วสูงระดับ Production ด้วย FastAPI: สถาปัตยกรรม ASGI Server (Uvicorn), Pydantic v2 Core (Rust-powered Validation Engine), Dependency Injection (Depends), OAuth2 Bearer Tokens และ Automatic OpenAPI Documentation",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# FastAPI และ Pydantic v2: สถาปัตยกรรม Modern Backend

**FastAPI** พัฒนาขึ้นโดย Sebastián Ramírez และกลายเป็นมาตรฐานสูงสุดของการสร้าง Backend Web API ในโลก Python โดยได้รับการจัดอันดับให้เป็นหนึ่งในเฟรมเวิร์กที่เร็วที่สุดเทียบเคียง Go และ Node.js

---

## 1. องค์ประกอบสถาปัตยกรรมของ FastAPI

\`\`\`text
+-------------------------------------------------------------------------+
|                  FastAPI High-Performance Architecture                  |
+-------------------------------------------------------------------------+
|  HTTP Request (from Web / Mobile Client)                                |
|        │                                                                |
|        ▼                                                                |
|  1. Uvicorn (ASGI Web Server: libuv High-Performance Event Loop)       |
|        │                                                                |
|        ▼                                                                |
|  2. Starlette Routing Engine (Fast Asynchronous HTTP Handling)          |
|        │                                                                |
|        ▼                                                                |
|  3. Pydantic v2 Validation Layer (Engine เขียนด้วย Rust: 5x-20x เร็วขึ้น)|
|        │  - Parse JSON Payload, ตรวจสอบ Type, Sanitization              |
|        ▼                                                                |
|  4. FastAPI Dependency Injection (Depends: Auth, DB Session, Services) |
|        │                                                                |
|        ▼                                                                |
|  5. Route Handler Execution (async def controller)                      |
|        │                                                                |
|        ▼                                                                |
|  Automatic OpenAPI (Swagger / ReDoc JSON Serialization)                 |
+-------------------------------------------------------------------------+
\`\`\`

---

## 2. Pydantic v2: ขับเคลื่อนด้วย Rust Core
ใน Pydantic v1 การตรวจสอบข้อมูลถูกเขียนด้วย Python ซึ่งมีค่าใช้จ่ายสูง แต่ใน **Pydantic v2** แกนกลางทั้งหมดถูกเขียนขึ้นใหม่ด้วยภาษา **Rust (\`pydantic-core\`)**:
- ความเร็วในการ Validate และ Serialize ข้อมูลสูงขึ้นกว่าเดิม **5 ถึง 20 เท่า**
- ตรวจสอบความถูกต้องอย่างเข้มงวดและมี Type Inference ที่แม่นยำ 100%

---

## 3. Dependency Injection System (\`Depends\`)
FastAPI มีระบบ DI ในตัวที่เรียบง่ายแต่ทรงพลังอย่างยิ่ง:
- ใช้สำหรับจัดการ Database Connection Sessions (\`get_db\`)
- ใช้สำหรับตรวจสอบความปลอดภัยและถอดรหัส JWT Token (\`get_current_user\`)
- รองรับการทำ Mocking ในการเขียน Unit Tests ได้อย่างราบรื่น`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Enterprise FastAPI & Pydantic v2 Application Blueprint
# =================================================================

from pydantic import BaseModel, Field, EmailStr
from typing import Annotated
import json

# 1. นิยาม Pydantic v2 Validation Models
class CourseRegistrationSchema(BaseModel):
    student_id: str = Field(..., pattern=r"^STD-\d{6}$", description="รหัสนักศึกษาขึ้นต้นด้วย STD- ตามด้วยตัวเลข 6 หลัก")
    full_name: str = Field(..., min_length=3, max_length=80, description="ชื่อและนามสกุล")
    email: str = Field(..., description="อีเมลทางการของนักศึกษา")
    gpa: float = Field(..., ge=0.00, le=4.00, description="เกรดเฉลี่ยสะสม")
    course_code: str = Field("CS-801", description="รหัสหลักสูตรที่ต้องการลงทะเบียน")

# 2. จำลอง Dependency Injection Component
class DatabaseSession:
    def __init__(self):
        self.connection_id = "CONN-POOL-9981"
    
    def save(self, record: dict) -> bool:
        print(f"💾 [DB POOL {self.connection_id}] บันทึกข้อมูลนักศึกษา: {record['student_id']}")
        return True

def get_database_session():
    """Dependency Provider"""
    session = DatabaseSession()
    try:
        yield session
    finally:
        print(f"🔒 [DB POOL {session.connection_id}] ปิดและคืน Connection เรียบร้อย")

# 3. จำลองการทำงานของ FastAPI Controller Action
def register_course_endpoint(payload: dict, db: DatabaseSession):
    # Pydantic v2 ทำการ Parse และ Validate ข้อมูล
    validated_data = CourseRegistrationSchema(**payload)
    
    db.save(validated_data.model_dump())
    
    return {
        "status_code": 201,
        "message": "ลงทะเบียนหลักสูตรสำเร็จสมบูรณ์",
        "data": validated_data.model_dump()
    }

# ทดสอบรัน
print("=== IT Academy FastAPI & Pydantic v2 Architecture ===")

mock_request_body = {
    "student_id": "STD-670101",
    "full_name": "สมชาย ใจดี",
    "email": "somchai.dev@academy.edu",
    "gpa": 3.85,
    "course_code": "CS-801"
}

db_provider = get_database_session()
db_instance = next(db_provider)

response = register_course_endpoint(mock_request_body, db_instance)

# ปิด Session
try:
    next(db_provider)
except StopIteration:
    pass

print("\n[HTTP 201 Response JSON]:")
print(json.dumps(response, indent=2, ensure_ascii=False))`,
        description: "สถาปัตยกรรม FastAPI Schema Validation และ Dependency Injection ด้วย Pydantic v2"
      },
      challenge: {
        description: "เขียน Pydantic Model ชื่อ `ProductItem` ที่มีฟิลด์ `name: str` (ยาวอย่างน้อย 2 ตัว) และ `price: float` (ต้องมากกว่า 0)",
        startingCode: `from pydantic import BaseModel, Field

# TODO: สร้าง ProductItem Model
`,
        solution: `from pydantic import BaseModel, Field

class ProductItem(BaseModel):
    name: str = Field(..., min_length=2)
    price: float = Field(..., gt=0)`
      },
      quiz: [
        {
          id: "py-6-q1",
          question: "เหตุใด Pydantic v2 ใน FastAPI จึงมีความเร็วในการตรวจสอบข้อมูล (Validation) และการแปลง JSON สูงกว่า Pydantic v1 ถึง 5-20 เท่า?",
          options: [
            "เพราะ Pydantic v2 ตัดการตรวจสอบข้อมูลทิ้งทั้งหมด",
            "เพราะแกนกลางของเอนจินการตรวจสอบข้อมูลถูกเขียนขึ้นใหม่ทั้งหมดด้วยภาษา Rust (pydantic-core)",
            "เพราะทำงานเฉพาะบนคอมพิวเตอร์แบบควอนตัม",
            "เพราะบังคับให้ส่งข้อมูลเป็นไฟล์ภาพแทนตัวหนังสือ"
          ],
          correctAnswer: 1,
          explanation: "หัวใจสำคัญของการยกเครื่องใน Pydantic v2 คือการย้ายตรรกะการประมวลผลและการตรวจสอบ Schema ทั้งหมดลงไปเขียนด้วยภาษา Rust ภายใต้ไลบรารี `pydantic-core` ทำให้การแปลงและตรวจสอบ JSON ทำได้รวดเร็วเทียบเคียงภาษา C/C++"
        },
        {
          id: "py-6-q2",
          question: "ใน FastAPI ระบบ Dependency Injection ผ่านฟังก์ชัน `Depends()` นิยมนำมาใช้ในกรณีใดมากที่สุด?",
          options: [
            "ใช้สำหรับแปลงไฟล์เสียงเป็นตัวหนังสือ",
            "ใช้สำหรับจัดการวงจรชีวิตของ Database Connections/Sessions, การตรวจสอบสิทธิ์และดึงข้อมูลผู้ใช้จาก JWT Token และการนำมาทำ Mocking ในการทดสอบ",
            "ใช้สำหรับปิดเซิร์ฟเวอร์เมื่อเกิด Error",
            "ใช้สำหรับลบแคชของเบราว์เซอร์"
          ],
          correctAnswer: 1,
          explanation: "`Depends()` ใน FastAPI เป็นเครื่องมือ Dependency Injection ที่ช่วยให้สามารถแบ่งปันตรรกะการทำงาน (เช่น การเปิด/ปิด Database Session, การแกะ Token ยืนยันตัวตน) และส่งอ็อบเจกต์ที่จำเป็นเข้าไปใน Endpoint อย่างเป็นระเบียบตามหลัก Clean Architecture"
        },
        {
          id: "py-6-q3",
          question: "จุดเด่นสำคัญของเอกสาร API อัตโนมัติ (Swagger UI) ที่ FastAPI สร้างขึ้นที่พาธ `/docs` คืออะไร?",
          options: [
            "เป็นเอกสารแบบโต้ตอบ (Interactive OpenAPI Docs) ที่สร้างขึ้นจากโครงสร้าง Type Hints และ Pydantic Models ให้อัตโนมัติ ทำให้นักพัฒนาสามารถทดลองกดส่ง Request ได้ทันทีบนเว็บเบราว์เซอร์",
            "เป็นไฟล์ PDF ที่ต้องดาวน์โหลดมาอ่านบนคอมพิวเตอร์",
            "เป็นเอกสารที่ต้องจ้างโปรแกรมเมอร์เขียนเพิ่มแยกต่างหากเสมอ",
            "เอกสารจะแสดงเฉพาะภาษาละตินโบราณเท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "FastAPI สกัดข้อมูล Type Annotations และ Pydantic Schemas ของทุก Endpoint มาสร้างเป็นเอกสารตามมาตรฐาน OpenAPI Specification อัตโนมัติ และแสดงผลเป็นหน้าเว็บ Interactive Swagger UI (/docs) ที่สามารถทดสอบยิง API ได้ทันทีโดยไม่ต้องเขียนเอกสารเพิ่มเอง"
        }
      ]
    },
    {
      id: "py-7",
      title: "Data Engineering & Analytics ด้วย NumPy Vectorization และ Pandas DataFrames",
      description: "ทำความเข้าใจทำไม Python Loops ถึงช้าสำหรับงาน Big Data, โครงสร้างหน่วยความจำแบบเรียงติดกัน (Contiguous Memory) ของ NumPy C-Arrays, SIMD Vectorization, การจัดการข้อมูลตารางด้วย Pandas DataFrames และการประมวลผลความเร็วสูงด้วย Apache Arrow Backend",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# Data Engineering และ Analytics ด้วย NumPy และ Pandas

ในงาน Data Science, Machine Learning และ Big Data การใช้ลูป \`for\` ในภาษา Python เพื่อประมวลผลข้อมูล 1,000,000 แถวจะช้ามาก เพราะเป็นภาษา Interpreted ที่ต้องตรวจสอบ Type ของแต่ละตัวแปรซ้ำไปซ้ำมาในทุกรอบของลูป (Type Overhead)

**NumPy** และ **Pandas** แก้ปัญหานี้ด้วยแนวคิด **Vectorization** ที่นำการคำนวณทั้งหมดลงไปรันบน C Arrays และชุดคำสั่ง **SIMD (Single Instruction, Multiple Data)** ของ CPU โดยตรง

---

## 1. เปรียบเทียบหน่วยความจำ: Python List vs NumPy \`ndarray\`

\`\`\`text
Python List (Array of Pointers - กระจัดกระจายบน Heap):
[ Ptr 0 ] ──> PyObject(10) (28 bytes)
[ Ptr 1 ] ──> PyObject(20) (28 bytes)   <-- Cache Miss บ่อยมาก เปลืองแรมมหาศาล!
[ Ptr 2 ] ──> PyObject(30) (28 bytes)

NumPy ndarray (Contiguous Memory Block - ต่อเนื่องใน RAM):
+----------+----------+----------+----------+
| 10 (int64) 20 (int64) 30 (int64) 40 (int64) |   <-- โหลดเข้า CPU L1/L2 Cache Line
+----------+----------+----------+----------+       ได้ในคราวเดียว ประมวลผลด้วย SIMD!
\`\`\`

---

## 2. Vectorization และ Broadcasting
- **Vectorization:** การสั่งคำนวณกับ Array ทั้งชุด เช่น \`arr * 1.07\` ในระดับไวยากรณ์ โดยไม่ต้องเขียน \`for\` loop ตัวคำสั่งจะถูกส่งต่อให้ไลบรารี BLAS/LAPACK ภาษา C/Fortran ประมวลผลด้วยความเร็วสูงสุด
- **Broadcasting:** กฎที่อนุญาตให้คำนวณข้อมูลระหว่าง Array ที่มีขนาดมิติ (Dimensions) แตกต่างกันได้โดยไม่ต้องคัดลอกข้อมูลซ้ำซ้อนในหน่วยความจำ

---

## 3. Pandas 2.0+ และสถาปัตยกรรม Apache Arrow
ในอดีต Pandas มีข้อจำกัดเรื่องการใช้แรมสูงเพราะรันบน NumPy Backend ดั้งเดิม
ตั้งแต่ **Pandas 2.0+** ได้เปิดตัว **Apache Arrow Backend**:
- รองรับการประมวลผลสตริงและข้อมูลประเภท Nullable ได้อย่างมีประสิทธิภาพ
- **ลดการใช้แรมลงกว่า 40% - 60%**
- ถ่ายโอนข้อมูลไปยังระบบอื่นๆ (เช่น Spark, Parquet, Rust Polars) ได้แบบ **Zero-Copy**`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# High-Performance Data Analytics: NumPy Vectorization & Aggregation
# =================================================================

import numpy as np
import time

# 1. การเปรียบเทียบความเร็ว: Python Native Loop vs NumPy Vectorization
data_size = 1_000_000
raw_python_list = list(range(data_size))
numpy_array = np.arange(data_size, dtype=np.float64)

# แบบที่ 1: วนลูปใน Python
t0 = time.perf_counter()
res_loop = [x * 1.07 for x in raw_python_list]
t_loop = (time.perf_counter() - t0) * 1000

# แบบที่ 2: NumPy SIMD Vectorization
t1 = time.perf_counter()
res_vectorized = numpy_array * 1.07
t_vectorized = (time.perf_counter() - t1) * 1000

print("=== IT Academy Data Engineering Benchmark ===")
print(f"ข้อมูลขนาด: {data_size:,} รายการ")
print(f"• วนลูป Python Loop       : {t_loop:.2f} ms")
print(f"• NumPy SIMD Vectorization : {t_vectorized:.2f} ms (เร็วกว่า {t_loop/max(t_vectorized, 0.001):.1f} เท่า!)")

# 2. การคำนวณสถิติวิเคราะห์เชิงลึกด้วย Matrix Operations
# จำลองคะแนนนักศึกษา 5 คนใน 4 รายวิชา (Matrix 5x4)
exam_matrix = np.array([
    [85.0, 78.0, 92.0, 88.0],
    [90.0, 88.0, 95.0, 91.0],
    [65.0, 70.0, 60.0, 72.0],
    [78.0, 82.0, 80.0, 85.0],
    [95.0, 94.0, 98.0, 96.0]
])

# คำนวณคะแนนเฉลี่ยประจำแต่ละวิชา (axis=0 คือคอลัมน์)
subject_means = np.mean(exam_matrix, axis=0)

# คำนวณคะแนนรวมของนักศึกษาแต่ละคน (axis=1 คือแถว)
student_totals = np.sum(exam_matrix, axis=1)

# Boolean Masking: คัดกรองนักศึกษาที่มีคะแนนรวม > 350
honor_mask = student_totals > 350
honor_students_scores = student_totals[honor_mask]

print(f"\n📊 คะแนนเฉลี่ย 4 รายวิชา      : {np.round(subject_means, 1)}")
print(f"👥 คะแนนรวมนักศึกษา 5 คน       : {student_totals}")
print(f"🏆 จำนวนนักศึกษาเกียรตินิยม (>350) : {len(honor_students_scores)} คน")`,
        description: "การเปรียบเทียบประสิทธิภาพระหว่าง Python Loop และ NumPy SIMD Vectorization"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `normalize_array(arr)` ที่รับ NumPy 1D array แล้วปรับสเกลข้อมูลให้มีค่าระหว่าง 0 ถึง 1 ด้วยสูตร `(arr - min) / (max - min)` แบบ Vectorized",
        startingCode: `import numpy as np

def normalize_array(arr: np.ndarray) -> np.ndarray:
    # TODO: ปรับสเกลข้อมูลแบบ Vectorization
    return arr`,
        solution: `import numpy as np

def normalize_array(arr: np.ndarray) -> np.ndarray:
    return (arr - np.min(arr)) / (np.max(arr) - np.min(arr))`
      },
      quiz: [
        {
          id: "py-7-q1",
          question: "ทำไมการคำนวณทางคณิตศาสตร์ด้วย NumPy Vectorization จึงทำงานได้เร็วกว่าการเขียน `for` loop ใน Python นับสิบเท่า?",
          options: [
            "เพราะ NumPy ทำการลบข้อมูลที่ซ้ำกันทิ้งทั้งหมด",
            "เพราะ NumPy จัดเก็บข้อมูลในหน่วยความจำแบบต่อเนื่อง (Contiguous C Array) และส่งคำสั่งไปประมวลผลผ่านชุดคำสั่ง SIMD ในระดับฮาร์ดแวร์ CPU โดยตรง ข้ามภาระการตรวจสอบ Type ซ้ำซากของ Python PVM",
            "เพราะ NumPy ทำงานเฉพาะบนเครื่องเซิร์ฟเวอร์ของ Google",
            "เพราะคำสั่ง for loop ใน Python ถูกออกแบบมาให้ทำงานช้าโดยเจตนา"
          ],
          correctAnswer: 1,
          explanation: "NumPy ใช้ Contiguous C Arrays ที่เก็บข้อมูลชนิดเดียวกันแบบเรียงติดกันใน RAM ทำให้ CPU สามารถดึงเข้า Cache Line และคำนวณหลายค่าพร้อมกันด้วยชุดคำสั่ง SIMD (Single Instruction Multiple Data) ผ่านภาษา C/Fortran ข้ามขั้นตอนการแกะ PyObject และ Type Checking ของ Python PVM ในทุกรอบลูป"
        },
        {
          id: "py-7-q2",
          question: "ในไลบรารี NumPy เมื่อต้องการคำนวณทางสถิติ (เช่น `np.mean` หรือ `np.sum`) บนตาราง 2 มิติ พารามิเตอร์ `axis=0` หมายถึงการคำนวณในทิศทางใด?",
          options: [
            "คำนวณในแนวนอนตามแต่ละแถว (Row-wise)",
            "คำนวณในแนวตั้งตามแต่ละคอลัมน์ (Column-wise)",
            "คำนวณเฉพาะสมาชิกตัวแรกของตาราง",
            "คำนวณเฉพาะเลขจำนวนเต็ม"
          ],
          correctAnswer: 1,
          explanation: "ใน NumPy 2D Array: `axis=0` หมายถึงการยุบข้อมูลตามแนวตั้ง (ตามแถวลงมา) เพื่อหาผลลัพธ์ของแต่ละคอลัมน์ ส่วน `axis=1` หมายถึงการยุบข้อมูลตามแนวนอน (ขวางไปตามคอลัมน์) เพื่อหาผลลัพธ์ของแต่ละแถว"
        },
        {
          id: "py-7-q3",
          question: "การรองรับ Apache Arrow Backend ใน Pandas 2.0+ ช่วยปรับปรุงระบบในด้านใดเป็นสำคัญ?",
          options: [
            "ทำให้โปรแกรมไม่ต้องใช้ CPU ในการคำนวณ",
            "เพิ่มประสิทธิภาพในการจัดการข้อมูลสตริงและค่าว่าง (Nulls), ลดการใช้หน่วยความจำ RAM ลงกว่า 40-60% และสามารถถ่ายโอนข้อมูลไปยังระบบอื่นได้แบบ Zero-Copy Memory Sharing",
            "ลบไฟล์ที่ไม่มีการใช้งานออกจากเครื่อง",
            "เปลี่ยนหน้าต่างของโปรแกรมให้เป็นสีเขียว"
          ],
          correctAnswer: 1,
          explanation: "Apache Arrow เป็นมาตรฐานการจัดเก็บข้อมูลแบบคอลัมน์ในหน่วยความจำ (In-Memory Columnar Format) การที่ Pandas 2.0 รองรับ Arrow ช่วยแก้ปัญหาคอขวดด้านแรม โดยเฉพาะข้อมูลชนิด String และช่วยให้แชร์เมมโมรี่ข้ามไประบบอื่น (เช่น Rust, Spark, C++) ได้โดยไม่ต้องเสียเวลาแปลงข้อมูล (Zero-Copy)"
        }
      ]
    },
    {
      id: "py-8",
      title: "การทดสอบอัตโนมัติด้วย Pytest, Type Checking (Mypy) และ Mocking",
      description: "การสร้างชุดทดสอบระดับวิศวกรรม: สถาปัตยกรรม Pytest, Assert Introspection, การจัดการ Dependencies ด้วย Fixtures, การทดสอบหลายกรณีด้วย Parametrize, การทำ Mocking ภายนอกด้วย unittest.mock และการวิเคราะห์ความปลอดภัยเชิงสถิติด้วย Mypy",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การประกันคุณภาพซอฟต์แวร์ด้วย Pytest และ Type Analysis

ในระบบซอฟต์แวร์ระดับองค์กร การทดสอบอัตโนมัติ (**Automated Testing**) ร่วมกับ **Static Type Checking** คือเกราะป้องกันเดียวที่รับประกันว่าการ Deploy โค้ดขึ้นสู่ Production จะไม่สร้างความเสียหายต่อระบบเดิม

---

## 1. จุดเด่นของ Pytest เหนือ unittest มาตรฐาน
- **Assert Introspection:** ไม่ต้องจำเมธอด \`self.assertEqual()\` หรือ \`self.assertTrue()\` ใช้เพียงคำสั่ง \`assert\` ดั้งเดิมของ Python ตัว Pytest จะเขียน Bytecode ดักจับและแสดงค่าของตัวแปรทั้งสองฝั่งอย่างละเอียดเมื่อการทดสอบล้มเหลว
- **Pytest Fixtures (\`@pytest.fixture\`):** ระบบ Dependency Injection สำหรับการเตรียมทรัพยากร (Setup) และการล้างข้อมูล (Teardown)
- **Parametrized Testing (\`@pytest.mark.parametrize\`):** ป้อนชุดข้อมูลทดสอบหลายสิบเคสเข้าสู่ฟังก์ชันทดสอบเดียวได้โดยไม่ต้องเขียนโค้ดซ้ำ

---

## 2. Mocking และการตัดขาด Dependency ภายนอก
การทดสอบ Unit Test ต้องรวดเร็วและเป็นอิสระ ห้ามต่ออินเทอร์เน็ตหรือฐานข้อมูลจริง:
- **\`unittest.mock.patch\`:** แทนที่ฟังก์ชันหรือคลาสภายนอกด้วย Mock Object
- **\`AsyncMock\`:** สำหรับจำลองการทำงานของ Coroutines ในระบบ AsyncIO

---

## 3. Static Type Analysis ด้วย Mypy
แม้ Python จะเป็น Dynamic Typing แต่การเปิดใช้ **Mypy** ในโหมด Strict (\`mypy --strict .\`) จะช่วยดักจับข้อผิดพลาดเรื่อง Type ในขั้นตอน CI/CD Pipeline ตั้งแต่ก่อนนำโค้ดไปรันจริง:
- ตรวจจับค่า \`None\` ที่อาจหลุดรอดเข้าไปในฟังก์ชัน
- ตรวจสอบความถูกต้องของพารามิเตอร์และค่าส่งกลับตามมาตรฐาน PEP 484`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Production Unit Testing Blueprint with Pytest Patterns
# =================================================================

import pytest
from unittest.mock import MagicMock

# 1. Business Logic Function ที่ต้องการทดสอบ
def calculate_tuition_fee(credit_hours: int, is_scholarship: bool) -> float:
    """คำนวณค่าลงทะเบียนเรียนตามจำนวนหน่วยกิต"""
    if credit_hours <= 0:
        raise ValueError("จำนวนหน่วยกิตต้องมากกว่า 0")
    if credit_hours > 22:
        raise ValueError("ไม่สามารถลงทะเบียนเกิน 22 หน่วยกิตต่อภาคการศึกษา")

    price_per_credit = 1500.0
    total = credit_hours * price_per_credit

    if is_scholarship:
        total *= 0.50 # นักศึกษาทุนได้รับส่วนลด 50%

    return total

# 2. จำลองชุดทดสอบแบบ Parametrized Test
test_cases = [
    # (credit_hours, is_scholarship, expected_fee)
    (10, False, 15000.0),
    (10, True, 7500.0),
    (22, False, 33000.0),
    (1, False, 1500.0)
]

print("=== IT Academy Automated Testing Lab ===")
print("🧪 กำลังรัน Parametrized Unit Tests...")

for credits, scholarship, expected in test_cases:
    actual = calculate_tuition_fee(credits, scholarship)
    assert actual == expected, f"ผิดพลาด: คำนวณได้ {actual} แต่คาดหวัง {expected}"
    print(f"  ✓ ผ่านการทดสอบ: {credits} หน่วยกิต (ทุน: {scholarship}) => {actual:C} THB")

# 3. ทดสอบการดักจับข้อผิดพลาด (Exception Testing)
print("\n🧪 กำลังทดสอบขอบเขตข้อผิดพลาด (Edge Cases & Exceptions)...")
try:
    calculate_tuition_fee(0, False)
    assert False, "ต้องโยน ValueError เมื่อหน่วยกิตเป็น 0"
except ValueError as e:
    print(f"  ✓ ตรวจจับได้ถูกต้อง: {e}")

try:
    calculate_tuition_fee(25, False)
    assert False, "ต้องโยน ValueError เมื่อหน่วยกิตเกิน 22"
except ValueError as e:
    print(f"  ✓ ตรวจจับได้ถูกต้อง: {e}")

print("\n🎉 การทดสอบทั้งหมด 6 Test Cases ผ่านการประเมิน 100%!")`,
        description: "การออกแบบชุดทดสอบ Parametrized Tests และ Exception Handling ตามหลักการของ Pytest"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `test_grade_pass()` ที่ตรวจสอบว่าฟังก์ชัน `is_passing(score: float) -> bool` คืนค่า True เมื่อคะแนน >= 50 และคืนค่า False เมื่อคะแนน < 50",
        startingCode: `def is_passing(score: float) -> bool:
    return score >= 50.0

def test_grade_pass():
    # TODO: เขียน assertion ตรวจสอบ
    pass`,
        solution: `def is_passing(score: float) -> bool:
    return score >= 50.0

def test_grade_pass():
    assert is_passing(75.0) is True
    assert is_passing(50.0) is True
    assert is_passing(49.9) is False`
      },
      quiz: [
        {
          id: "py-8-q1",
          question: "ฟีเจอร์ Assert Introspection ใน Pytest มีประโยชน์สำคัญอย่างไรเมื่อเทียบกับเฟรมเวิร์ก unittest ดั้งเดิม?",
          options: [
            "ทำให้การทดสอบรันได้โดยไม่ต้องมีไฟล์โค้ด",
            "อนุญาตให้นักพัฒนาใช้คำสั่ง `assert` ธรรมดาของ Python โดย Pytest จะทำการเขียน Bytecode ดักจับและแสดงค่าที่แท้จริงของตัวแปรทั้งสองฝั่งอย่างละเอียดเมื่อเกิดความผิดพลาด ช่วยให้ดีบั๊กได้ง่ายมาก",
            "ลบโค้ดที่มีบั๊กทิ้งทันที",
            "บังคับให้โปรแกรมต้องผ่านการทดสอบเสมอแม้จะมีข้อผิดพลาด"
          ],
          correctAnswer: 1,
          explanation: "Pytest มีความสามารถพิเศษในการวิเคราะห์ Abstract Syntax Tree และ Bytecode ของคำสั่ง `assert` เมื่อการทดสอบล้มเหลว มันจะแสดงแผนผังค่าของตัวแปรทั้งสองฝั่ง (Detailed Failure Representation) ทำให้นักพัฒนาทราบสาเหตุได้ทันทีโดยไม่ต้องจำเมธอด `self.assertEqual()`"
        },
        {
          id: "py-8-q2",
          question: "บทบาทของ `@pytest.fixture` ในการจัดการชุดทดสอบคือข้อใด?",
          options: [
            "ใช้สำหรับซ่อมแซมฮาร์ดดิสก์",
            "ทำหน้าที่เป็นระบบ Dependency Injection สำหรับเตรียมข้อมูลหรือสภาพแวดล้อม (Setup) ก่อนเริ่มการทดสอบ และล้างข้อมูล (Teardown) เมื่อการทดสอบเสร็จสิ้น",
            "ใช้สำหรับการแปลงไฟล์เป็นภาษาไทย",
            "ใช้สำหรับการนับจำนวนบรรทัดของโค้ด"
          ],
          correctAnswer: 1,
          explanation: "Fixtures ใน Pytest ทำหน้าที่จัดเตรียมสภาพแวดล้อม เช่น การสร้าง In-Memory Database หรือจำลองข้อมูลผู้ใช้ แล้วฉีดเข้าไปในฟังก์ชันทดสอบผ่านพารามิเตอร์ และสามารถกำหนดขอบเขต (Scopes เช่น function, module, session) ได้อย่างยืดหยุ่น"
        },
        {
          id: "py-8-q3",
          question: "การใช้เครื่องมือ Mypy ในกระบวนการ CI/CD Pipeline มีจุดประสงค์เพื่อสิ่งใด?",
          options: [
            "เพื่อวัดความเร็วในการเชื่อมต่ออินเทอร์เน็ต",
            "เพื่อทำ Static Type Analysis ตรวจสอบความถูกต้องของประเภทข้อมูล (Type Safety) ตามมาตรฐาน PEP 484 ตั้งแต่ก่อนนำโค้ดไปรันจริง ช่วยกำจัดบั๊กประเภท TypeError และ NoneType Error",
            "เพื่อแปลงโค้ด Python ให้กลายเป็นภาษา HTML",
            "เพื่อทำการรีสตาร์ทเครื่องเซิร์ฟเวอร์"
          ],
          correctAnswer: 1,
          explanation: "Mypy เป็น Static Type Checker อย่างเป็นทางการสำหรับ Python โดยจะตรวจสอบซอร์สโค้ดตาม Type Annotations โดยไม่ต้องรันโค้ดจริง ช่วยดักจับบั๊กที่เกิดจากการส่งชนิดข้อมูลผิดประเภท หรือกรณีที่ตัวแปรอาจเป็น None ก่อนที่จะ Deploy สู่ Production"
        }
      ]
    },
    {
      id: "py-9",
      title: "โปรเจกต์ Enterprise ETL Pipeline & Machine Learning Inference API",
      description: "โปรเจกต์วิศวกรรมข้อมูลและ AI ระดับโปรดักชัน: พัฒนา High-Throughput Asynchronous ETL Data Pipeline เชื่อมต่อกับ Machine Learning Inference Engine ด้วย Python: การสกัดข้อมูล, การทำ Data Cleaning ด้วย NumPy/Pandas, การจัดกลุ่มความเสี่ยงด้วย Decision Matrix และการบันทึกผลแบบ Asynchronous",
      duration: "55 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise Python: Production Data Pipeline & Inference Engine

ในบทเรียนรวบยอดนี้ เราจะนำองค์ความรู้ทั้งหมด ทั้ง **CPython Internals, High-Performance Data Structures, Advanced OOP, Generators, AsyncIO Concurrency, Pydantic v2 และ NumPy Vectorization** มาผสานสร้างเป็น **Production-Grade Data Pipeline & Machine Learning Inference Microservice**

---

## 1. แผนผังสถาปัตยกรรมระบบ (System Architecture)

\`\`\`text
[ Raw Telemetry & Academic Logs ]
                │
                ▼
+-------------------------------------------------------------------------+
|                  Enterprise Python Data & AI Pipeline                   |
|                                                                         |
|  1. Ingestion Layer      --> รับข้อมูลแบบ Streaming ผ่าน AsyncIO Tasks  |
|  2. Validation Engine    --> ตรวจสอบความถูกต้องด้วย Pydantic v2 Models  |
|  3. Feature Engineering  --> คำนวณเมทริกซ์คะแนนด้วย NumPy Vectorization |
|  4. ML Inference Engine  --> ประเมินความเสี่ยงและพยากรณ์ผลการเรียน      |
|  5. Persistence Worker   --> บันทึกผลลัพธ์ผ่าน Asynchronous Repository  |
+-------------------------------------------------------------------------+
                │
                ▼
[ Real-Time Analytics Dashboard / TimescaleDB ]
\`\`\`

---

## 2. อัลกอริทึมการคำนวณดัชนีความเสี่ยง (Risk Score Index)
ประเมินความเสี่ยงของนักศึกษาด้วยระบบถ่วงน้ำหนักความสำคัญ (Weighted Feature Matrix):
$$\\text{Risk Score} = 100 - (\\text{Attendance} \\times 40 + \\text{Assignment} \\times 40 + \\text{Quiz} \\times 20)$$
- **Score > 40:** สถานะ \`CRITICAL_RISK\` (เสี่ยงต่อการถูกรีไทร์ ต้องส่งให้อาจารย์ที่ปรึกษาทันที)
- **Score 20 - 40:** สถานะ \`MODERATE_RISK\` (ต้องติดตามพฤติกรรม)
- **Score < 20:** สถานะ \`EXCELLENT\` (ผลการเรียนยอดเยี่ยม)`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# Enterprise Project: AI Inference & Data Pipeline Engine
# =================================================================

import asyncio
from dataclasses import dataclass
from typing import List
import numpy as np

# 1. Domain Entities
@dataclass(slots=True, frozen=True)
class RawStudentRecord:
    student_id: str
    name: str
    attendance_rate: float  # 0.0 - 1.0
    assignment_rate: float  # 0.0 - 1.0
    midterm_score: float    # 0.0 - 100.0

@dataclass(slots=True, frozen=True)
class RiskPredictionResult:
    student_id: str
    name: str
    risk_score: float
    risk_level: str
    recommendation: str

# 2. Machine Learning Inference Engine
class AcademicInferenceEngine:
    @staticmethod
    def predict_batch_vectorized(records: List[RawStudentRecord]) -> List[RiskPredictionResult]:
        """ประมวลผลคะแนนนักศึกษาทั้งชุดด้วย NumPy Vectorization"""
        count = len(records)
        if count == 0:
            return []

        # สกัด Features เข้าสู่ NumPy Contiguous Matrix (N x 3)
        features = np.zeros((count, 3), dtype=np.float64)
        for i, r in enumerate(records):
            features[i, 0] = r.attendance_rate * 100.0
            features[i, 1] = r.assignment_rate * 100.0
            features[i, 2] = r.midterm_score

        # คำนวณคะแนนสัมฤทธิผลโดยมีค่าน้ำหนัก: เข้าเรียน 30%, การบ้าน 30%, มิดเทอม 40%
        weights = np.array([0.30, 0.30, 0.40], dtype=np.float64)
        performance_index = np.dot(features, weights) # Matrix Multiplication (SIMD)
        
        # Risk Score Index: ยิ่งผลงานต่ำ ความเสี่ยงยิ่งสูง
        risk_scores = np.maximum(0.0, 100.0 - performance_index)

        results = []
        for i, r in enumerate(records):
            score = round(float(risk_scores[i]), 1)
            if score >= 45.0:
                level = "CRITICAL_RISK"
                action = "ส่งข้อมูลให้อาจารย์ที่ปรึกษาเรียกพบด่วน"
            elif score >= 25.0:
                level = "MODERATE_RISK"
                action = "ส่งการแจ้งเตือนแนะนำให้เข้าห้องแล็บเสริม"
            else:
                level = "EXCELLENT"
                action = "เสนอชื่อเข้ารับทุนการศึกษาเรียนดี"

            results.append(RiskPredictionResult(
                student_id=r.student_id,
                name=r.name,
                risk_score=score,
                risk_level=level,
                recommendation=action
            ))

        return results

# 3. Asynchronous Pipeline Controller
async def execute_enterprise_pipeline():
    print("=== IT Academy AI Data & Inference Pipeline Execution ===\n")

    dataset = [
        RawStudentRecord("STD-6701", "กานดา สุขเกษม", 0.98, 0.95, 92.0),
        RawStudentRecord("STD-6702", "ธนากร วิเศษศิลป์", 0.55, 0.40, 48.0),
        RawStudentRecord("STD-6703", "สมชาย ใจดี", 0.85, 0.80, 75.0),
        RawStudentRecord("STD-6704", "วรัญญา นามดี", 0.45, 0.35, 38.0),
        RawStudentRecord("STD-6705", "พงศกร เมืองประเทศ", 0.95, 0.90, 88.0)
    ]

    print(f"📥 [INGESTION] รับข้อมูลนักศึกษาเข้าสู่ Pipeline: {len(dataset)} รายการ")
    
    # จำลอง Async I/O Delay เล็กน้อย
    await asyncio.sleep(0.05)

    print("⚡ [VECTORIZED INFERENCE] กำลังประมวลผลดัชนีความเสี่ยงด้วย NumPy SIMD Engine...")
    predictions = AcademicInferenceEngine.predict_batch_vectorized(dataset)

    print("\n📊 [PIPELINE OUTPUT RESULTS]:")
    for p in predictions:
        icon = "🚨" if p.risk_level == "CRITICAL_RISK" else ("⚠️" if p.risk_level == "MODERATE_RISK" else "🏆")
        print(f"{icon} [{p.student_id}] {p.name:<18} | Risk Score: {p.risk_score:>4.1f} | ระดับ: {p.risk_level:<13}")
        print(f"   👉 คำแนะนำ: {p.recommendation}\n")

    print("🎉 การประมวลผลข้อมูลและ Machine Learning Inference เสร็จสมบูรณ์ 100%!")

asyncio.run(execute_enterprise_pipeline())`,
        description: "สถาปัตยกรรม Asynchronous Data Pipeline และ Vectorized ML Inference Engine"
      },
      challenge: {
        description: "เขียนฟังก์ชัน `filter_critical_students(predictions)` ที่รับ List ของ RiskPredictionResult และคืนค่าเฉพาะนักศึกษาที่มีสถานะเป็น 'CRITICAL_RISK'",
        startingCode: `def filter_critical_students(predictions: list) -> list:
    # TODO: คัดกรองเฉพาะ CRITICAL_RISK
    return []`,
        solution: `def filter_critical_students(predictions: list) -> list:
    return [p for p in predictions if p.risk_level == "CRITICAL_RISK"]`
      },
      quiz: [
        {
          id: "py-9-q1",
          question: "ทำไมการคำนวณทางคณิตศาสตร์แบบเมทริกซ์ (Matrix Multiplication `np.dot`) ในการทำ Machine Learning Inference จึงควรทำในรูปแบบ Vectorized Batch แทนการวนลูปทีละแถว?",
          options: [
            "เพราะการส่งข้อมูลทั้ง Batch เข้าสู่ NumPy/BLAS จะใช้ประโยชน์จากแคชของ CPU และชุดคำสั่งเวกเตอร์ SIMD (AVX-512) ในการคำนวณแถวข้อมูลนับพันพร้อมกันในรอบเดียว ลด Overhead ของ Python PVM อย่างมหาศาล",
            "เพราะทำให้ตัวเลขมีขนาดเล็กลง",
            "เพราะ Python ไม่อนุญาตให้ใช้เลขทศนิยมในลูป",
            "เพราะป้องกันไม่ให้เกิดความร้อนสะสมในซีพียู"
          ],
          correctAnswer: 0,
          explanation: "การทำ Vectorized Batch Inference ช่วยขจัด Overhead ของการสลับการทำงานระหว่าง Python กับ C code ทุกแถว โดยจะส่งข้อมูลทั้งเมทริกซ์ไปประมวลผลในฮาร์ดแวร์ระดับต่ำด้วยชุดคำสั่ง SIMD ผ่าน BLAS ในคราวเดียว ทำให้คำนวณเสร็จเร็วกว่าการวนลูปนับร้อยเท่า"
        },
        {
          id: "py-9-q2",
          question: "ในสถาปัตยกรรม Data Pipeline ระดับองค์กร บทบาทของ Pydantic v2 ในขั้นตอน Ingestion คืออะไร?",
          options: [
            "จัดเก็บไฟล์ลงในฮาร์ดดิสก์สำรอง",
            "ทำหน้าที่เป็น Gatekeeper ตรวจสอบความถูกต้องของชนิดข้อมูล ขอบเขตค่า และรูปแบบฟิลด์ (Schema Validation) ก่อนส่งต่อเข้าสู่กระบวนการคำนวณ เพื่อให้แน่ใจว่าข้อมูลมีคุณภาพสูงตามมาตรฐาน Fail-Fast",
            "แปลงข้อความภาษาไทยให้เป็นภาษาอังกฤษ",
            "ลบแถวข้อมูลทั้งหมดที่ได้รับมา"
          ],
          correctAnswer: 1,
          explanation: "Pydantic ทำหน้าที่เป็นด่านหน้าในการทำ Data Ingestion ทำการตรวจสอบประเภทข้อมูล (Data Types) ความถูกต้องของรูปแบบ (เช่น Regex, Range, Email) และแปลงให้เป็นโครงสร้างที่ปลอดภัย หากข้อมูลผิดเพี้ยนจะปฏิเสธทันที (Fail-Fast) ป้องกันไม่ให้ Garbage Data หลุดเข้าไปพังระบบ Machine Learning หรือฐานข้อมูล"
        },
        {
          id: "py-9-q3",
          question: "เมื่อต้องการรัน AI Microservice ที่ต้องรองรับทั้งการรับส่งคำขอเครือข่ายปริมาณมหาศาล (I/O-Bound) และการคำนวณโมเดล Machine Learning (CPU-Bound) สถาปัตยกรรมใดเหมาะสมที่สุดใน Python?",
          options: [
            "ใช้คำสั่ง time.sleep() ในทุกฟังก์ชัน",
            "ใช้สถาปัตยกรรมแบบผสม: ใช้ FastAPI/AsyncIO สำหรับรับส่งคำขอเครือข่ายและเชื่อมต่อฐานข้อมูล (I/O) และส่งต่องานคำนวณหนักๆ ไปให้ ProcessPoolExecutor หรือรันบน C/C++ Extensions (เช่น ONNX Runtime หรือ NumPy) เพื่อไม่ให้บล็อก Event Loop และหลุดพ้นจากข้อจำกัดของ GIL",
            "ปิดการเชื่อมต่ออินเทอร์เน็ตของเครื่องทั้งหมด",
            "ใช้เฉพาะคำสั่ง print() ในการแสดงผล"
          ],
          correctAnswer: 1,
          explanation: "นี่คือสถาปัตยกรรมมาตรฐานของ AI Microservices ในปัจจุบัน: ใช้ AsyncIO จัดการ Concurrency ของการรับส่งคำขอ HTTP (I/O-Bound) ได้หลายหมื่นงาน และเมื่อถึงขั้นตอนรันโมเดล AI (CPU-Bound) จะส่งต่องานไปยัง Process แยก (ProcessPool) หรือไลบรารีที่เขียนด้วย C/C++ ซึ่งจะทำการปล่อย GIL (Release GIL) ในระหว่างคำนวณ ทำให้ไม่บล็อกการทำงานของเซิร์ฟเวอร์หลัก"
        }
      ]
    }
  ]
};
