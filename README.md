# 🎓 IT Academy — แพลตฟอร์มการเรียนรู้ IT ครบวงจรระดับมืออาชีพ

แพลตฟอร์มการเรียนรู้ด้านเทคโนโลยีสารสนเทศ วิศวกรรมเครือข่าย และการพัฒนาซอฟต์แวร์แบบ Interactive สำหรับนักเรียนสาย IT ครบทั้ง 7 สาขาหลัก แบ่งระดับความยากชัดเจน **เริ่มต้น (Beginner) | ปานกลาง (Intermediate) | ขั้นสูง (Advanced)** พร้อมระบบลงมือปฏิบัติบนโปรแกรมจริงและ In-browser Interactive Simulator

---

## 🚀 7 หลักสูตรหลักและเครื่องมือเฉพาะทางระดับมืออาชีพ

### 1. 🌐 Internet of Things (IoT) & Embedded Systems (9 บทเรียน)
- **ระดับเริ่มต้น:** พื้นฐานสถาปัตยกรรม 4-Tier IoT, กฎของโอห์ม, วงจรไฟฟ้าสำหรับโปรแกรมเมอร์, การเขียนโปรแกรม Arduino UNO & GPIO, เซนเซอร์สภาพแวดล้อม DHT22 / Ultrasonic / PIR
- **ระดับปานกลาง:** เจาะลึก ESP32 Dual-Core & Wi-Fi Web Server, โปรโตคอลอุตสาหกรรม MQTT (HiveMQ/EMQX), การเขียนโปรแกรมด้วย MicroPython บน ESP32 และ Raspberry Pi Pico
- **ระดับขั้นสูง:** Raspberry Pi ในฐานะ Edge IoT Gateway บน Linux, ระบบ Real-Time Operating System (FreeRTOS) บน ESP32, โปรเจกต์ Full-Stack Smart Home ด้วย Home Assistant & ESPHome
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - ⚡ **Arduino IDE 2.x**: โปรแกรมเขียนโค้ดและอัปโหลดลงบอร์ดมาตรฐานสากล
  - 🐍 **Thonny IDE**: โปรแกรมเขียน MicroPython บน ESP32/Pico
  - 🍓 **Raspberry Pi Imager**: ติดตั้ง Raspberry Pi OS
  - 🧪 **Wokwi Simulator**: จำลองวงจรและโค้ด Arduino/ESP32 เสมือนจริงบนเว็บ

---

### 2. 🔌 Network & Cisco (9 บทเรียน)
- **ระดับเริ่มต้น:** สถาปัตยกรรมเครือข่าย LAN/MAN/WAN, โทโพโลยี Star, สายสัญญาณ UTP Cat6 และ Fiber Optic, โมเดล OSI 7 Layers & Encapsulation, การคำนวณ Subnetting & VLSM
- **ระดับปานกลาง:** การใช้งาน Cisco IOS Command Line Interface (CLI), การออกแบบและคอนฟิก Virtual LAN (VLAN) และ 802.1Q Trunking, Inter-VLAN Routing ด้วย Router-on-a-Stick และ Layer 3 Multi-Layer Switch
- **ระดับขั้นสูง:** การหาเส้นทางอัตโนมัติด้วยโปรโตคอล OSPF v2 (Dijkstra SPF Algorithm), ความปลอดภัยเครือข่ายด้วย Standard & Extended Access Control Lists (ACLs), โปรเจกต์ Enterprise Campus Network พร้อม NAT/PAT และ DHCP
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - 🌐 **Cisco Packet Tracer**: ซอฟต์แวร์จำลองเครือข่ายทางการจาก Cisco Networking Academy
  - 🦈 **Wireshark**: โปรแกรมดักจับและวิเคราะห์แพ็กเก็ตระดับลึก
  - 💻 **PuTTY / Tera Term**: โปรแกรมต่อสาย Console เข้าสวิตช์/เราเตอร์จริง

---

### 3. 🖥️ Web Development (9 บทเรียน)
- **ระดับเริ่มต้น:** Semantic HTML5 ตามมาตรฐาน W3C และ SEO, Modern CSS3 Flexbox & CSS Grid แบบ 2 มิติ, JavaScript Core, DOM Manipulation และ Event Handling
- **ระดับปานกลาง:** Asynchronous JavaScript (Promises, async/await, Fetch API), Utility-First CSS ด้วย Tailwind CSS, Component-Driven UI ด้วย React.js (State, Hooks, Virtual DOM)
- **ระดับขั้นสูง:** Full-Stack Next.js 14 App Router, Server Components & Server Actions, ระบบความปลอดภัย Authentication & Database ORM (Prisma/bcrypt), โปรเจกต์ E-Commerce Store ครบวงจร
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - 💻 **Visual Studio Code (VS Code)** + ส่วนเสริม Live Server, Prettier, Tailwind IntelliSense
  - 🔍 **Google Chrome DevTools**: ดีบักหน้าเว็บและวิเคราะห์ Core Web Vitals
  - 📦 **Node.js & npm**: รันไทม์รันสคริปต์และตัวจัดการแพ็กเกจ

---

### 4. 🗄️ ระบบฐานข้อมูล & RMS (9 บทเรียน)
- **ระดับเริ่มต้น:** สถาปัตยกรรม RDBMS, ตาราง, Record, Primary Key, Foreign Key, คำสั่ง SQL พื้นฐาน CRUD (Create, Read, Update, Delete), การออกแบบโมเดลด้วย ER Diagram
- **ระดับปานกลาง:** การสืบค้นข้อมูลข้ามตารางด้วย SQL JOINs (INNER, LEFT, RIGHT) และ Subqueries, การลดความซ้ำซ้อนด้วย Normalization (1NF, 2NF, 3NF), Aggregate Functions และการคำนวณเกรดเฉลี่ยถ่วงน้ำหนัก (GPA)
- **ระดับขั้นสูง:** การเพิ่มประสิทธิภาพด้วย Indexing แบบ B-Tree และคำสั่ง EXPLAIN, คุณสมบัติ ACID และระบบธุรกรรม Transactions (COMMIT, ROLLBACK), โปรเจกต์ระบบบริหารจัดการงานทะเบียนนักเรียน (Student Record Management System - RMS)
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - 🦫 **DBeaver Community**: สุดยอดโปรแกรมบริหารจัดการฐานข้อมูลครอบจักรวาล
  - 🐬 **MySQL Workbench**: ออกแบบและแปลงโมเดล ER Diagram เป็นคำสั่ง SQL อัตโนมัติ
  - 📐 **drawSQL**: วาดผัง Schema ฐานข้อมูลออนไลน์

---

### 5. 📱 Mobile App Development (9 บทเรียน)
- **ระดับเริ่มต้น:** สถาปัตยกรรม Mobile App ยุคใหม่ (Native vs Cross-Platform), สถาปัตยกรรม Impeller Engine ของ Flutter, ภาษา Dart พื้นฐานและระบบ Sound Null Safety, โครงสร้าง Widget Layout บนหน้าจอมือถือ (Scaffold, Column, Row, ListView)
- **ระดับปานกลาง:** การจัดการสถานะ (State Management) ด้วย StatefulWidget และ Provider, ระบบนำทาง Navigation & Routing ข้ามหน้าจอ, การเชื่อมต่อ REST API ผ่าน HTTP Client และ JSON Serialization
- **ระดับขั้นสูง:** ระบบฐานข้อมูลออฟไลน์ในเครื่องด้วย SQLite (sqflite), การเข้าถึงฮาร์ดแวร์มือถือ (Camera, GPS Geolocation, Push Notifications), โปรเจกต์พอร์ทัลนักเรียน (Student Portal Mobile App) พร้อมการ Build ไฟล์ Release สำหรับติดตั้ง
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - 🤖 **Android Studio**: IDE พัฒนาแอปและรัน Android Emulator
  - 🎯 **Flutter SDK**: ชุดพัฒนาซอฟต์แวร์ UI ข้ามแพลตฟอร์มจาก Google
  - ⚡ **VS Code + Flutter Extension**: เอดิเตอร์น้ำหนักเบาพร้อมฟีเจอร์ Stateful Hot Reload

---

### 6. 🎮 Game Development (9 บทเรียน)
- **ระดับเริ่มต้น:** สถาปัตยกรรม Game Loop 60 FPS บน HTML5 Canvas, เวกเตอร์คณิตศาสตร์ 2 มิติ และการเคลื่อนที่ของตัวละคร, การทำแอนิเมชันจาก Sprite Sheet และระบบเสียง Web Audio
- **ระดับปานกลาง:** ระบบฟิสิกส์แรงโน้มถ่วง (Gravity) และการตรวจจับการชน AABB Collision, การออกแบบฉากเกมด้วย Tilemap และกล้องติดตามตัวละคร (Camera Scroll), การควบคุมสถานะตัวละครด้วย Finite State Machine (FSM)
- **ระดับขั้นสูง:** ปัญญาประดิษฐ์ในเกม (Enemy AI Patrol & A* Pathfinding), การพัฒนาเกมด้วย Godot Engine 4 (Scene, Nodes, GDScript), โปรเจกต์เกม 2D Action Platformer เล่นได้จริงบนเว็บ
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - 🤖 **Godot Engine 4**: เอนจินสร้างเกมโอเพนซอร์สยอดนิยมอันดับ 1
  - 🗺️ **Tiled Map Editor**: โปรแกรมออกแบบฉาก 2D Tilemap
  - 🎨 **Pixelorama / Aseprite**: โปรแกรมวาดภาพ Pixel Art และสร้าง Sprite Sheet

---

### 7. 🔒 Cybersecurity & Hacking (9 บทเรียน)
- **ระดับเริ่มต้น:** เสาหลักความมั่นคงปลอดภัยสารสนเทศ CIA Triad, สิทธิ์ขั้นต่ำ Least Privilege, วิทยาการรหัสลับเบื้องต้น (AES-256, RSA, SHA-256), การวิเคราะห์แพ็กเก็ตด้วย Wireshark (TCP 3-Way Handshake, HTTP vs HTTPS)
- **ระดับปานกลาง:** การสแกนเครือข่ายและสำรวจระบบด้วย Nmap (Stealth Scan, Service Enumeration), ช่องโหว่ OWASP Top 10: SQL Injection และการป้องกันด้วย Prepared Statements, ช่องโหว่ Cross-Site Scripting (XSS) และ CSRF
- **ระดับขั้นสูง:** การใช้ Burp Suite Community เป็น Intercepting Proxy และ Repeater, ระเบียบวิธีทดสอบเจาะระบบ (Penetration Testing Methodology) และจริยธรรมตาม พ.ร.บ. คอมพิวเตอร์, โปรเจกต์เสริมเกราะป้องกันเซิร์ฟเวอร์ (Linux Hardening, SSH Key Auth, UFW Firewall, Fail2ban)
- **เครื่องมือเฉพาะทางที่แนะนำ:**
  - 🐉 **Kali Linux**: ระบบปฏิบัติการทดสอบความปลอดภัยที่มีเครื่องมือกว่า 600 ชนิด
  - 🎯 **Burp Suite Community**: พร็อกซีวิเคราะห์และทดสอบช่องโหว่เว็บแอปพลิเคชัน
  - 🔍 **Nmap**: เครื่องมือสแกนเครือข่ายและพอร์ตมาตรฐานสากล

---

## 🛠️ ระบบปฏิบัติการบนเว็บ (In-browser Practice Environments)

1. **Web Code Editor (Monaco Editor):**
   - รองรับการเขียนและรันโค้ดภาษา HTML/CSS/JS, C/C++, Python, SQL, Dart
   - Live Preview แบบ Sandboxed Iframe
2. **Cisco IOS CLI Simulator:**
   - หน้าต่าง Command Prompt เสมือนจริง จำลองการคอนฟิก Router และ Switch บน Cisco IOS
   - รองรับคำสั่ง: `enable`, `configure terminal`, `hostname`, `interface`, `ip address`, `no shutdown`, `vlan`, `show ip int brief`, `ping`, `?`
3. **Desktop Lab Guides:**
   - คำแนะนำแล็บโปรแกรมจริงทีละขั้นตอน (Step-by-Step)
   - ลิงก์ดาวน์โหลดโปรแกรมจริงตรงจากผู้พัฒนา
   - ปุ่มคลิกเดียวคัดลอกคำสั่ง/โค้ด (One-click Copy)
   - เกณฑ์ตรวจสอบผลลัพธ์การผ่านแล็บ (Verification Criteria)

---

## 🏃 วิธีการเปิดใช้งานบนเครื่อง (Local Run)

```bash
cd "C:\Users\asus\OneDrive\Documents\IT Academy"

# รันโหมด Production (ที่ Build ผ่านแล้ว)
npm run start

# หรือ รันโหมด Development เพื่อแก้ไขเพิ่มเติม
npm run dev
```
เปิดบราวเซอร์ไปที่: `http://localhost:3000`
