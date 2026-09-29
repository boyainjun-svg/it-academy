import { Course } from "../types";

export const pythonCourse: Course = {
  id: "python",
  title: "Python for Data, AI & Modern Backend",
  description: "เรียนรู้ภาษา Python ตั้งแต่พื้นฐานไวยากรณ์, โครงสร้างข้อมูล, OOP, Concurrency ด้วย AsyncIO, REST API ด้วย FastAPI จนถึง Data Analysis และ AI Backend",
  longDescription: "หลักสูตรภาษาไพทอนเชิงวิศวกรรม (Python Software Engineering) ที่ออกแบบมาเพื่อพัฒนาทักษะระดับมืออาชีพ ครอบคลุมตั้งแต่สถาปัตยกรรมภายในของ CPython, การทำงานของหน่วยความจำและ Reference Counting, การประมวลผลข้อมูลด้วย List/Dict Comprehensions, การเขียนโปรแกรมเชิงวัตถุ (OOP) ร่วมกับ Magic Dunder Methods และ Dataclasses, เทคนิคขั้นสูงอย่าง Generators, Decorators และ Context Managers, การรับส่งงานพร้อมกันด้วย AsyncIO Event Loop, การสร้าง Production REST API ประสิทธิภาพสูงด้วย FastAPI และ Pydantic v2, ตลอดจนการประมวลผลข้อมูลมหาศาลด้วย NumPy Vectorization และ Pandas สำหรับงาน Data Science และ AI",
  icon: "🐍",
  color: "sky",
  gradient: "from-sky-500 via-blue-600 to-amber-500",
  category: "language",
  totalLessons: 9,
  difficulty: "เริ่มต้น",
  tags: ["Python", "FastAPI", "AsyncIO", "Data Science", "Pandas", "NumPy", "Pydantic", "OOP"],
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
      title: "ไวยากรณ์พื้นฐาน, Dynamic Typing, PEP 8 และโมเดลหน่วยความจำใน Python",
      description: "ทำความเข้าใจปรัชญาของ Python, การทำงานของ CPython, ตัวแปรและชนิดข้อมูลพื้นฐาน, Reference Counting, และข้อกำหนดมาตรฐานโค้ด PEP 8",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา Python และระบบการทำงานภายใน (CPython Internals)

ภาษา **Python** เป็นภาษาโปรแกรมระดับสูงที่เน้นความกระชับ อ่านง่าย (Readability) และทรงพลังอย่างยิ่ง โดยตัวแปรใน Python ไม่ได้เป็นเพียง "กล่องใส่ข้อมูล" เหมือนภาษา C/C++ แต่เป็น **ตัวชี้ (Reference Pointer)** ไปยัง Object บนหน่วยความจำ (Everything in Python is an Object)

---

## 1. ปรัชญาและข้อกำหนดมาตรฐาน PEP 8 (Style Guide for Python)

การเขียน Python ระดับมืออาชีพต้องยึดตาม **PEP 8 (Python Enhancement Proposal 8)**:
- **Indent:** ใช้การเยื้อง 4 Spaces เสมอ (ไม่ใช้ Tab)
- **Naming Conventions:**
  - ตัวแปรและฟังก์ชัน: \`snake_case\` เช่น \`student_score\`, \`calculate_gpa()\`
  - ค่าคงที่ (Constants): \`UPPER_SNAKE_CASE\` เช่น \`MAX_CONNECTIONS = 100\`
  - คลาส (Classes): \`PascalCase\` เช่น \`StudentRepository\`
- **Type Annotations (PEP 484):** กำหนดประเภทข้อมูลอย่างชัดเจนเพื่อการตรวจสอบที่แม่นยำ

---

## 2. ตารางเปรียบเทียบชนิดข้อมูลพื้นฐานใน Python 3.12

| Data Type | คำอธิบาย | ตัวอย่างการประกาศ | Mutable? (แก้ไขค่าได้?) |
|:---|:---|:---|:---:|
| \`int\` / \`float\` | ตัวเลขจำนวนเต็มและทศนิยมความแม่นยำสูง | \`age: int = 20\`, \`gpa: float = 3.85\` | ❌ Immutable |
| \`str\` | สตริงอักขระ Unicode (UTF-8) | \`name: str = "IT Academy"\` | ❌ Immutable |
| \`bool\` | ค่าความจริงทางตรรกศาสตร์ | \`is_active: bool = True\` | ❌ Immutable |
| \`list\` | ลำดับข้อมูลแบบเรียงลำดับ | \`skills: list[str] = ["Python", "FastAPI"]\` | ✅ Mutable |
| \`tuple\` | ลำดับข้อมูลคงที่ ป้องกันการแก้ไข | \`coords: tuple[float, float] = (13.75, 100.5)\` | ❌ Immutable |
| \`dict\` | โครงสร้าง Key-Value Hash Map | \`user: dict[str, str] = {"id": "U01"}\` | ✅ Mutable |
| \`set\` | ชุดข้อมูลที่ไม่ซ้ำกัน (Unique Elements) | \`tags: set[str] = {"backend", "api"}\` | ✅ Mutable |

---

## 3. Reference Counting และ Garbage Collection

Python จัดการหน่วยความจำด้วย 2 กลไกหลัก:
1. **Reference Counting:** ทุก Object จะมีตัวนับว่ามีตัวแปรกี่ตัวอ้างอิงถึงมัน เมื่อตัวนับลดลงเหลือ 0 Python จะคืนหน่วยความจำทันที
2. **Cyclic Garbage Collector:** คอยตรวจสอบกรณี Circular Reference (Object A อ้างอิง B และ B อ้างอิง A) ที่ Reference Count ไม่ยอมเป็น 0`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การประกาศตัวแปร Type Hints และการประมวลผลข้อมูลนักศึกษา (PEP 8)
# =================================================================

from typing import Final

# ค่าคงที่ประจำระบบ
MIN_PASSING_GRADE: Final[float] = 2.00
COLLEGE_NAME: Final[str] = "IT Academy Online"

def evaluate_student(name: str, scores: list[float]) -> dict[str, any]:
    """คำนวณเกรดเฉลี่ยและประเมินสถานะของนักศึกษา"""
    if not scores:
        return {"error": "ไม่มีข้อมูลคะแนนสอบ"}

    average_score: float = sum(scores) / len(scores)
    is_passed: bool = average_score >= (MIN_PASSING_GRADE * 25)

    return {
        "institution": COLLEGE_NAME,
        "student_name": name,
        "total_subjects": len(scores),
        "average_score": round(average_score, 2),
        "status": "PASS" if is_passed else "RETAKE"
    }

# ทดสอบรันฟังก์ชัน
student_result = evaluate_student(
    name="พงศกร เมืองประเทศ",
    scores=[85.5, 92.0, 78.5, 90.0, 88.0]
)

print(f"สถาบัน: {student_result['institution']}")
print(f"นักศึกษา: {student_result['student_name']}")
print(f"คะแนนเฉลี่ย: {student_result['average_score']} / 100")
print(f"ผลการประเมิน: {student_result['status']}")`,
        description: "ฟังก์ชันประเมินผลคะแนนนักศึกษาตามมาตรฐาน PEP 8 พร้อม Type Annotations"
      },
      challenge: {
        id: "py-ch-1",
        title: "สร้างฟังก์ชันแปลงอุณหภูมิและคัดกรองข้อมูล",
        description: "เขียนฟังก์ชัน `filter_fever_temperatures(celsius_list)` ที่รับลิสต์อุณหภูมิ แล้วแปลงเป็นฟาเรนไฮต์ และคืนค่าเฉพาะอุณหภูมิที่เกิน 37.5 องศาเซลเซียส",
        initialCode: `def filter_fever_temperatures(celsius_list: list[float]) -> list[dict]:
    # เขียนโค้ดของคุณที่นี่
    pass`,
        language: "python",
        hint: "สูตรแปลงฟาเรนไฮต์: (C * 9/5) + 32 และใช้ List Comprehension หรือ Loop ในการคัดกรอง"
      },
      quiz: [
        {
          id: "py-q1",
          question: "ชนิดข้อมูลใดใน Python จัดเป็น Mutable (สามารถแก้ไขข้อมูลใน Object เดิมได้)?",
          options: ["str", "tuple", "list", "int"],
          correctAnswer: 2,
          explanation: "list และ dict เป็น Mutable Object สามารถเพิ่ม ลบ หรือแก้ไขสมาชิกได้โดยไม่ต้องสร้าง Object ใหม่ในหน่วยความจำ"
        },
        {
          id: "py-q2",
          question: "ตามมาตรฐาน PEP 8 การตั้งชื่อตัวแปรและฟังก์ชันควรใช้รูปแบบใด?",
          options: ["camelCase", "PascalCase", "snake_case", "kebab-case"],
          correctAnswer: 2,
          explanation: "PEP 8 กำหนดให้ตัวแปรและฟังก์ชันใช้ snake_case (ตัวพิมพ์เล็กคั่นด้วยขีดล่าง) เสมอ"
        }
      ]
    },
    {
      id: "py-2",
      title: "โครงสร้างข้อมูลประสิทธิภาพสูง: Lists, Dictionaries, Sets และ Comprehensions",
      description: "เจาะลึกความซับซ้อนเชิงเวลา Big-O ของ Data Structures ใน Python, Hash Tables ภายใน Dict, Set Operations, และ List/Dict Comprehensions",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# โครงสร้างข้อมูลประสิทธิภาพสูงใน Python และ Big-O Time Complexity

การเลือกโครงสร้างข้อมูลที่ถูกต้องเป็นหัวใจสำคัญของการเขียนโค้ดที่รวดเร็วและใช้แรมน้อย ใน Python โครงสร้างข้อมูลแต่ละชนิดถูกปรับแต่งในภาษา C ให้อย่างมีประสิทธิภาพสูง

---

## 1. ตารางความซับซ้อนเชิงเวลา (Time Complexity Comparison)

| การดำเนินการ (Operation) | List | Dictionary (Hash Table) | Set (Hash Table) |
|:---|:---:|:---:|:---:|
| เข้าถึงข้อมูลด้วย Index (\`lst[i]\`) | **O(1)** | - | - |
| ค้นหาด้วย Key / Value (\`key in d\`) | O(n) | **O(1) Average** | **O(1) Average** |
| เพิ่มข้อมูลต่อท้าย (\`append\`) | **O(1) Amortized** | **O(1)** | **O(1)** |
| ลบข้อมูล (\`del\` / \`pop\`) | O(n) จากตำแหน่งกลาง | **O(1)** | **O(1)** |
| การรวมเซต (Union \`\|\`) | - | - | O(len(s) + len(t)) |

---

## 2. พลังของ Comprehensions

แทนที่จะเขียน \`for\` loop หลายบรรทัด การใช้ **Comprehension** ทำงานเร็วกว่าเพราะประมวลผลในระดับ C-Level Bytecode ของ Python:
- **List Comprehension:** \`[x * 2 for x in items if x > 0]\`
- **Dict Comprehension:** \`{user.id: user.name for user in users}\`
- **Set Comprehension:** \`{x.category for x in products}\``,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การประมวลผลข้อมูลด้วย List & Dict Comprehension ระดับโปรดักชัน
# =================================================================

courses_raw = [
    {"id": "web-101", "name": "Web Development", "students": 45, "active": True},
    {"id": "iot-201", "name": "Internet of Things", "students": 28, "active": True},
    {"id": "db-301", "name": "Database Internals", "students": 0, "active": False},
    {"id": "sec-401", "name": "Cybersecurity Operations", "students": 34, "active": True}
]

# 1. คัดกรองเฉพาะคอร์สที่เปิดสอนและมีนักศึกษาด้วย List Comprehension
active_courses = [
    course["name"].upper()
    for course in courses_raw
    if course["active"] and course["students"] > 0
]

# 2. แปลงเป็น Dictionary Lookup สำหรับการค้นหาความเร็ว O(1)
course_lookup = {
    course["id"]: {
        "title": course["name"],
        "enrollment_ratio": round(course["students"] / 50 * 100, 1)
    }
    for course in courses_raw
    if course["active"]
}

print(f"คอร์สที่เปิดสอน (Active): {active_courses}")
print(f"สืบค้นข้อมูลคอร์ส 'iot-201': {course_lookup.get('iot-201')}")`,
        description: "การใช้ Comprehensions ในการจัดการโครงสร้างข้อมูลแบบกระชับและรวดเร็ว"
      }
    },
    {
      id: "py-3",
      title: "การเขียนโปรแกรมเชิงวัตถุ (OOP), Dunder Methods และ Dataclasses",
      description: "สถาปัตยกรรม OOP ใน Python: คลาส, อินสแตนซ์, Magic Methods (__str__, __repr__, __eq__), Property Decorators, และ Dataclasses ใน Python 3.7+",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การเขียนโปรแกรมเชิงวัตถุ (OOP) และ Dataclasses สมัยใหม่

Python รองรับการเขียนโปรแกรมเชิงวัตถุอย่างสมบูรณ์แบบ ทั้ง Encapsulation, Inheritance, และ Polymorphism โดยหัวใจของคลาสใน Python คือ **Dunder Methods (Double Underscore Methods)**

---

## 1. Magic Methods (Dunder Methods) ที่สำคัญ

- \`__init__(self, ...)\`: คอนสตรักเตอร์สำหรับกำหนดค่าเริ่มต้นของออบเจกต์
- \`__str__(self)\`: คืนค่าข้อความสำหรับผู้ใช้งาน (User-friendly representation)
- \`__repr__(self)\`: คืนค่าข้อความสำหรับนักพัฒนาในการดีบั๊ก (Official representation)
- \`__eq__(self, other)\`: กำหนดตรรกะการเปรียบเทียบความเท่ากัน (\`==\`)

---

## 2. Dataclasses ใน Python 3.7+

โมดูล \`dataclasses\` ช่วยลด Boilerplate Code ในการสร้าง Data Carrier Class โดยจะสร้าง \`__init__\`, \`__repr__\`, และ \`__eq__\` ให้อัตโนมัติ:

\`\`\`python
from dataclasses import dataclass

@dataclass
class DeviceSensor:
    sensor_id: str
    pin_number: int
    is_calibrated: bool = False
\`\`\``,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การออกแบบคลาสด้วย Dataclasses และ Property Validation
# =================================================================

from dataclasses import dataclass, field
from datetime import datetime

@dataclass
class NetworkDevice:
    hostname: str
    ip_address: str
    mac_address: str
    uptime_seconds: int = 0
    registered_at: datetime = field(default_factory=datetime.now)

    @property
    def is_ipv4(self) -> bool:
        """ตรวจสอบว่า IP อยู่ในรูปแบบ IPv4"""
        octets = self.ip_address.split(".")
        return len(octets) == 4 and all(o.isdigit() and 0 <= int(o) <= 255 for o in octets)

    def record_uptime(self, additional_seconds: int) -> None:
        if additional_seconds > 0:
            self.uptime_seconds += additional_seconds

    def __str__(self) -> str:
        return f"[{self.hostname}] IP: {self.ip_address} (Uptime: {self.uptime_seconds}s)"

# สร้างอินสแตนซ์
router = NetworkDevice(
    hostname="Core-Router-BKK",
    ip_address="192.168.1.1",
    mac_address="00:1A:2B:3C:4D:5E"
)
router.record_uptime(3600)

print(str(router))
print(f"Is valid IPv4: {router.is_ipv4}")`,
        description: "ตัวอย่างการสร้างโมเดล NetworkDevice ด้วย @dataclass พร้อม Property และ Method"
      }
    },
    {
      id: "py-4",
      title: "Generators, Iterators, Custom Decorators (@wraps) และ Context Managers",
      description: "การประหยัดแรมมหาศาลด้วย Generator (yield), โปรโตคอล Iteration, การสร้าง Decorator พร้อม @functools.wraps, และการจัดการทรัพยากรด้วย with (contextlib)",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Advanced Python: Generators, Decorators และ Context Managers

สำหรับงาน Big Data และ High-Performance Backend การโหลดข้อมูลทั้งหมดเข้า RAM พร้อมกันเป็นสิ่งต้องห้าม เทคนิค **Lazy Evaluation** จึงเป็นสิ่งจำเป็น

---

## 1. Generators และคีย์เวิร์ด \`yield\`

Generator จะคำนวณและส่งคืนข้อมูลทีละก้อน (Lazy Stream) ทำให้ใช้หน่วยความจำคงที่ **O(1) Memory** แม้ต้องอ่านข้อมูลขนาด 10 GB:
\`\`\`python
def read_large_log(file_path):
    with open(file_path) as f:
        for line in f:
            if "ERROR" in line:
                yield line.strip()
\`\`\`

---

## 2. Function Decorators และ \`functools.wraps\`

Decorator ใช้สำหรับดักจับ เพิ่มความสามารถ หรือวัดเวลาของฟังก์ชันโดยไม่ต้องแก้ไขโค้ดเดิม (Clean Code & Open-Closed Principle)`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การสร้าง Execution Timer Decorator และ Log Stream Generator
# =================================================================

import time
from functools import wraps

def timeit(func):
    """Decorator วัดระยะเวลาประมวลผลของฟังก์ชันระดับมิลลิวินาที"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = (time.perf_counter() - start) * 1000
        print(f"⚡ [TIMER] ฟังก์ชัน '{func.__name__}' ใช้เวลา: {duration:.3f} ms")
        return result
    return wrapper

def fibonacci_stream(max_count: int):
    """Generator คำนวณลำดับฟีโบนัชชีแบบ Lazy Evaluation O(1) Memory"""
    a, b = 0, 1
    count = 0
    while count < max_count:
        yield a
        a, b = b, a + b
        count += 1

@timeit
def calculate_batch():
    stream = fibonacci_stream(10)
    return list(stream)

results = calculate_batch()
print(f"ผลลัพธ์ Fibonacci 10 ลำดับแรก: {results}")`,
        description: "ตัวอย่างการเขียน Decorator วัดเวลา และ Generator ฟีโบนัชชี"
      }
    },
    {
      id: "py-5",
      title: "Concurrency & Asynchronous Programming ด้วย AsyncIO, Event Loop และ Tasks",
      description: "ทำความเข้าใจ I/O-Bound vs CPU-Bound, การทำงานของ AsyncIO Event Loop, Coroutines (async/await), asyncio.gather, และการป้องกัน Race Conditions",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# Concurrency ใน Python: AsyncIO และ Non-Blocking I/O Architecture

ในงานเว็บแอปพลิเคชันและ Microservices การรอการตอบกลับจากฐานข้อมูลหรือ Third-Party API เป็นคอขวดที่ใหญ่ที่สุด **AsyncIO** นำเสนอสถาปัตยกรรม Single-Threaded Asynchronous Event Loop ที่สามารถจัดการ Concurrent Connections นับหมื่นได้พร้อมกัน

---

## 1. เปรียบเทียบ Concurrency Models ใน Python

| Model | กลไก | เหมาะสำหรับงาน | มีผลกระทบจาก GIL (Global Interpreter Lock)? |
|:---|:---|:---|:---:|
| **AsyncIO** | Cooperative Single-thread Event Loop | I/O-Bound (HTTP, DB, WebSockets) | ❌ ไม่ติด GIL (ทำงานเมื่อรอ I/O) |
| **Multithreading** | OS Preemptive Threads (\`threading\`) | I/O-Bound แบบดั้งเดิม | ⚠️ ติด GIL (รัน Python Bytecode ทีละ 1 เธรด) |
| **Multiprocessing** | แยก Process และ Memory (\`multiprocessing\`) | CPU-Bound (Machine Learning, Image) | ❌ หลุดพ้นจาก GIL (แยก Core สมบูรณ์) |`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การทำงานแบบ Concurrency ด้วย AsyncIO และ Coroutines
# =================================================================

import asyncio

async def fetch_service_health(service_name: str, delay: float) -> dict:
    """จำลองการยิง HTTP ไปตรวจสถานะ Microservice แบบ Asynchronous"""
    print(f"⏳ เริ่มต้นตรวจสอบ: {service_name}...")
    await asyncio.sleep(delay) # จำลอง I/O Delay โดยไม่บล็อกเธรด
    print(f"✓ ตรวจสอบเสร็จสิ้น: {service_name}")
    return {"service": service_name, "status": "UP", "latency_ms": int(delay * 1000)}

async def main():
    print("🚀 เริ่มการตรวจสอบ Microservices ทั้งหมดพร้อมกัน (Parallel Fetch)...")
    
    # รันทั้ง 3 เซอร์วิสพร้อมกันด้วย asyncio.gather
    results = await asyncio.gather(
        fetch_service_health("Auth Service", 0.4),
        fetch_service_health("Billing Gateway", 0.6),
        fetch_service_health("Notification Engine", 0.2)
    )
    
    print("\n--- สรุปผลสถานะระบบ ---")
    for res in results:
        print(f"• {res['service']}: สถานะ {res['status']} ({res['latency_ms']} ms)")

# รัน Event Loop
asyncio.run(main())`,
        description: "การดึงข้อมูลสถานะ Microservices พร้อมกันด้วย asyncio.gather"
      }
    },
    {
      id: "py-6",
      title: "การพัฒนา High-Performance REST API ด้วย FastAPI, Pydantic v2 และ Dependency Injection",
      description: "สร้าง REST API ความเร็วสูงระดับ Production ด้วย FastAPI, Auto OpenAPI Documentation, Schema Validation ด้วย Pydantic v2, และระบบ Dependency Injection (Depends)",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# FastAPI และ Pydantic v2: สถาปัตยกรรม Modern Backend

**FastAPI** เป็นหนึ่งใน Web Framework สำหรับ Python ที่ได้รับความนิยมและมีประสิทธิภาพสูงสุดในโลก ขับเคลื่อนด้วย Starlette สำหรับงาน Asynchronous และ Pydantic v2 สำหรับ Type Validation ที่คอมไพล์ด้วย Rust

---

## 1. จุดเด่นสำคัญของ FastAPI

1. **High Performance:** ประสิทธิภาพเทียบเคียง NodeJS และ Go ด้วย Uvicorn ASGI Server
2. **Fast to code:** ลดข้อผิดพลาดด้วย Type Hints ของ Python
3. **Automatic Documentation:** สร้าง Interactive Swagger UI (\`/docs\`) และ ReDoc (\`/redoc\`) ให้อัตโนมัติจากโครงสร้าง Pydantic Models
4. **Dependency Injection:** ระบบจัดการทรัพยากร (Database Sessions, Security Tokens) ที่ทรงพลังและทดสอบได้ง่าย`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# โครงสร้าง FastAPI Application พร้อม Pydantic v2 Validation
# =================================================================

from pydantic import BaseModel, Field, EmailStr
from typing import Optional

# 1. Pydantic Request Model
class StudentCreateRequest(BaseModel):
    student_id: str = Field(..., pattern=r"^STD-\d{6}$", description="รหัสนักศึกษาขึ้นต้นด้วย STD- ตามด้วยเลข 6 หลัก")
    full_name: str = Field(..., min_length=3, max_length=100)
    email: str = Field(..., description="อีเมลทางการของนักศึกษา")
    gpa: float = Field(..., ge=0.00, le=4.00, description="เกรดเฉลี่ยสะสม")
    department: str = "Information Technology"

# 2. จำลองการทำงานและตรวจสอบ Schema
test_payload = {
    "student_id": "STD-670101",
    "full_name": "สมชาย ใจดี",
    "email": "somchai@itacademy.ac.th",
    "gpa": 3.85,
    "department": "Information Technology"
}

# แปลงและ Validate ข้อมูล
student = StudentCreateRequest(**test_payload)
print(f"✓ Validation สำเร็จ: {student.full_name} ({student.student_id})")
print(f"JSON Payload พร้อมบันทึก: {student.model_dump_json(indent=2)}")`,
        description: "ตัวอย่างการกำหนด Data Schema ด้วย Pydantic v2 สำหรับ FastAPI"
      }
    },
    {
      id: "py-7",
      title: "การวิเคราะห์และประมวลผลข้อมูลด้วย NumPy Vectorization และ Pandas DataFrames",
      description: "เทคนิคการประมวลผลข้อมูลระดับล้านแถวโดยไม่ต้องใช้ Python Loops ด้วย NumPy Array Vectorization, Pandas Data Cleaning, GroupBy, และ Aggregation",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# NumPy และ Pandas สำหรับงาน Data Science & Analytics

ในงาน Data Science การวนลูป \`for\` ใน Python กับข้อมูล 1,000,000 แถวจะช้ามาก เพราะเป็นภาษา Interpreted **NumPy** แก้ปัญหานี้ด้วย **Vectorization** ที่นำการคำนวณลงไปรันบน C Arrays และ SIMD CPU Instructions โดยตรง

---

## 1. เปรียบเทียบ NumPy Array กับ Python List

- **Memory Contiguity:** NumPy จัดเก็บข้อมูลในหน่วยความจำแบบเรียงติดกัน (Contiguous Memory)
- **No Type Overhead:** ทุกสมาชิกใน Array เป็นชนิดข้อมูลเดียวกัน เช่น \`float64\` ไม่ต้องมี Object Header หุ้ม
- **Broadcasting:** สามารถคำนวณทางคณิตศาสตร์กับ Array ทั้งชุดได้ในคำสั่งเดียว`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การคำนวณคะแนนและสถิติด้วย NumPy Vectorization
# =================================================================

import numpy as np

# จำลองคะแนนสอบของนักศึกษา 5 คนใน 3 รายวิชา (Matrix 5x3)
scores = np.array([
    [85.0, 78.0, 92.0],
    [90.0, 88.0, 95.0],
    [65.0, 70.0, 60.0],
    [78.0, 82.0, 80.0],
    [95.0, 94.0, 98.0]
])

# 1. คำนวณคะแนนเฉลี่ยของแต่ละวิชา (Column-wise: axis=0)
subject_averages = np.mean(scores, axis=0)

# 2. คำนวณคะแนนรวมของนักศึกษาแต่ละคน (Row-wise: axis=1)
student_totals = np.sum(scores, axis=1)

# 3. คัดกรองนักศึกษาที่ได้คะแนนรวมเกิน 260 คะแนนด้วย Boolean Indexing
high_achievers_mask = student_totals > 260
high_achievers_scores = student_totals[high_achievers_mask]

print(f"คะแนนเฉลี่ยแต่ละวิชา: {np.round(subject_averages, 1)}")
print(f"คะแนนรวมนักศึกษา: {student_totals}")
print(f"จำนวนนักศึกษาคะแนนระดับเกียรตินิยม (>260): {len(high_achievers_scores)} คน")`,
        description: "การคำนวณทางสถิติด้วย NumPy Vectorization โดยไม่ต้องเขียน Loop"
      }
    },
    {
      id: "py-8",
      title: "การทดสอบอัตโนมัติด้วย Pytest, Type Checking (Mypy) และ Mocking",
      description: "แนวทางการพัฒนาซอฟต์แวร์คุณภาพสูงด้วย Unit Testing, Pytest Fixtures, Parametrized Tests, การจำลอง External Services ด้วย Mock, และ Static Type Analysis ด้วย Mypy",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# การประกันคุณภาพซอฟต์แวร์ด้วย Pytest และ Type Safety

ในระบบ Production การทดสอบอัตโนมัติ (Automated Testing) คือสิ่งเดียวที่รับประกันว่าการเปลี่ยนแปลงโค้ดจะไม่สร้าง Bug ขึ้นมาใหม่ในระบบเดิม (Regression Prevention)

---

## 1. จุดเด่นของ Pytest

- ไม่ต้องสืบทอดคลาสเหมือน \`unittest.TestCase\` ใช้เพียงคีย์เวิร์ด \`assert\` ธรรมดา
- **Fixtures (\`@pytest.fixture\`):** ระบบ Dependency Injection สำหรับสร้าง Mock Data หรือ Database Connection
- **Parametrized Tests (\`@pytest.mark.parametrize\`):** ป้อน Test Cases หลายสิบชุดเข้าฟังก์ชันทดสอบเดียวได้สะดวก`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# โครงสร้างชุดทดสอบ Unit Test ด้วย Pytest Patterns
# =================================================================

def calculate_discount(price: float, member_tier: str) -> float:
    """คำนวณราคาสุทธิหลังหักส่วนลดสมาชิก"""
    if price < 0:
        raise ValueError("ราคาสินค้าต้องไม่ติดลบ")
    
    discount_rates = {
        "GOLD": 0.20,
        "SILVER": 0.10,
        "BRONZE": 0.05
    }
    rate = discount_rates.get(member_tier.upper(), 0.0)
    return round(price * (1 - rate), 2)

# ฟังก์ชันทดสอบ
def test_discount_calculation():
    # Test Normal cases
    assert calculate_discount(1000.0, "GOLD") == 800.0
    assert calculate_discount(1000.0, "SILVER") == 900.0
    assert calculate_discount(1000.0, "UNKNOWN") == 1000.0
    
    # Test Edge case & Exception
    try:
        calculate_discount(-50.0, "GOLD")
        assert False, "ควรเกิด ValueError เมื่อราคาสินค้าติดลบ"
    except ValueError as e:
        assert str(e) == "ราคาสินค้าต้องไม่ติดลบ"
    
    print("✓ การทดสอบทั้งหมด 4 Test Cases ผ่าน 100% (All assertions passed)")

test_discount_calculation()`,
        description: "การเขียนชุดทดสอบ Assertion ครอบคลุมทั้ง Positive และ Negative Cases"
      }
    },
    {
      id: "py-9",
      title: "โปรเจกต์ Enterprise ETL Pipeline & Machine Learning Inference API",
      description: "พัฒนาโปรเจกต์รวบยอด: สร้างระบบ ETL ดึงข้อมูลนักศึกษา ตรวจสอบความถูกต้อง ส่งต่อเข้า Model Inference และบันทึกผลลงระบบฐานข้อมูลแบบครบวงจร",
      duration: "50 นาที",
      level: "ขั้นสูง",
      content: `# โปรเจกต์ Enterprise Python: Production Data Pipeline & Inference Engine

ในบทเรียนสุดท้ายนี้ เราจะผสานองค์ความรู้ทั้งหมด ทั้ง Data Structures, OOP, Error Handling, Concurrency และ Type Safety เข้าเป็นโปรเจกต์ระดับ Enterprise ที่พร้อม Deploy สู่ Cloud

---

## สถาปัตยกรรมของระบบ

\`\`\`
[ Raw Data Ingestion ] ──> [ Pydantic v2 Validation ] ──> [ Async Worker Pool ]
                                                                 │
                                                                 ▼
[ Realtime Dashboard ] <── [ Structured JSON Output ] <── [ ML Scoring Engine ]
\`\`\``,
      codeExample: {
        language: "python",
        code: `# =================================================================
# โปรเจกต์ Enterprise: AI Scoring & Data Validation Pipeline
# =================================================================

import asyncio
from dataclasses import dataclass
from typing import List

@dataclass
class StudentRecord:
    id: str
    name: str
    attendance_rate: float
    assignment_score: float

class StudentAnalyticsPipeline:
    def __init__(self, records: List[StudentRecord]):
        self.records = records

    async def predict_risk(self, record: StudentRecord) -> dict:
        """ประเมินความเสี่ยงในการเรียนด้วยอัลกอริทึม Decision Matrix"""
        await asyncio.sleep(0.05) # จำลอง ML Inference Latency
        
        # Risk Score Index: (0 - 100)
        risk_score = 100 - (record.attendance_rate * 40 + record.assignment_score * 60)
        risk_level = "HIGH" if risk_score > 40 else "NORMAL"
        
        return {
            "student_id": record.id,
            "name": record.name,
            "risk_score": round(max(0, risk_score), 1),
            "risk_level": risk_level
        }

    async def run_pipeline(self) -> List[dict]:
        tasks = [self.predict_risk(r) for r in self.records]
        return await asyncio.gather(*tasks)

async def main():
    dataset = [
        StudentRecord("STD-01", "ธนากร วิเศษศิลป์", 0.95, 0.90),
        StudentRecord("STD-02", "พิมชนก รัตนชัย", 0.60, 0.50),
        StudentRecord("STD-03", "กานดา สุขเกษม", 0.98, 0.96),
    ]
    
    pipeline = StudentAnalyticsPipeline(dataset)
    results = await pipeline.run_pipeline()
    
    print("📊 ผลการวิเคราะห์ความเสี่ยงนักศึกษา (Student Risk Assessment):")
    for item in results:
        status_icon = "⚠️" if item["risk_level"] == "HIGH" else "✅"
        print(f"{status_icon} [{item['student_id']}] {item['name']}: Risk Score = {item['risk_score']} ({item['risk_level']})")

asyncio.run(main())`,
        description: "ระบบประเมินความเสี่ยงนักศึกษาด้วยสถาปัตยกรรม Asynchronous Data Pipeline"
      }
    }
  ]
};
