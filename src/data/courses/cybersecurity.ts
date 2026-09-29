import { Course } from "../types";

export const cybersecurityCourse: Course = {
  id: "cybersecurity",
  title: "Cybersecurity & Ethical Hacking",
  description: "เรียนรู้ความปลอดภัยทางไซเบอร์ การเข้ารหัสลับ วิเคราะห์ช่องโหว่ OWASP Top 10 การทดสอบเจาะระบบ และการเสริมเกราะป้องกันระบบสารสนเทศ",
  longDescription: "หลักสูตรความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity) และการทดสอบเจาะระบบอย่างมีจริยธรรม (Ethical Hacking) ที่เข้มข้นที่สุด ครอบคลุมตั้งแต่นิยามความมั่นคงปลอดภัยสารสนเทศตามกรอบ NIST CSF 2.0 และ CIA Triad, วิทยาการรหัสลับเชิงประยุกต์ (AES-256-GCM, RSA, ECC, Argon2id, TLS 1.3), การดักจับและแกะรอยแพ็กเก็ตด้วย Wireshark, การสำรวจระบบเครือข่ายด้วย Nmap และ NSE, การเจาะลึกช่องโหว่เว็บแอปพลิเคชันตามมาตรฐาน OWASP Top 10 (SQL Injection, XSS, CSRF, IDOR), การใช้เครื่องมือระดับมืออาชีพอย่าง Burp Suite, ระเบียบวิธีทดสอบเจาะระบบตามมาตรฐาน PTES พร้อมเกณฑ์คะแนน CVSS, กฎหมาย พ.ร.บ. คอมพิวเตอร์ และ PDPA, ตลอดจนการทำ Server Hardening ด้วย UFW, Fail2ban และระบบตรวจจับการบุกรุก (IDS/IPS)",
  icon: "🔒",
  color: "pink",
  gradient: "from-fuchsia-500 to-pink-600",
  totalLessons: 9,
  difficulty: "ขั้นสูง",
  tags: ["Cybersecurity", "Ethical Hacking", "OWASP", "Burp Suite", "Wireshark", "Nmap", "Cryptography", "Linux Hardening"],
  recommendedTools: [
    {
      name: "Kali Linux",
      icon: "🐉",
      badge: "Industry Standard OS",
      description: "ระบบปฏิบัติการระดับโลกสำหรับการทดสอบเจาะระบบและการตรวจสอบความปลอดภัย รวบรวมเครื่องมือวิเคราะห์ทางไซเบอร์มากกว่า 600 ชนิดในตัว ติดตั้งบน VirtualBox หรือ VMware ได้ทันที",
      downloadUrl: "https://www.kali.org/get-kali/",
      setupGuide: "1. ดาวน์โหลด Kali Linux Pre-built Virtual Machine (สำหรับ VirtualBox หรือ VMware)\n2. เปิดไฟล์ใน VirtualBox และกำหนด RAM อย่างน้อย 4GB และ 2 Cores\n3. เริ่มต้นระบบ ล็อกอินด้วย Default Credentials: kali / kali\n4. ปรับปรุงฐานข้อมูลเครื่องมือด้วยคำสั่ง: sudo apt update && sudo apt dist-upgrade -y"
    },
    {
      name: "Burp Suite Community",
      icon: "🎯",
      badge: "Web Security Proxy",
      description: "เครื่องมือทดสอบความมั่นคงปลอดภัยของเว็บแอปพลิเคชันและ API ระดับแถวหน้า ทำหน้าที่เป็น Intercepting Proxy ดักจับ วิเคราะห์ แก้ไข และส่งซ้ำคำขอ HTTP/HTTPS ได้อย่างอิสระ",
      downloadUrl: "https://portswigger.net/burp/communitydownload",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Burp Suite Community Edition\n2. เปิดโปรแกรม เลือก Temporary Project แล้วกด Use Burp Defaults\n3. ไปที่แท็บ Proxy > คลิกปุ่ม 'Open Browser' เพื่อเปิดเบราว์เซอร์ที่มีการติดตั้ง Root CA ของ Burp ไว้แล้ว\n4. ทดสอบเปิดหน้าเว็บเป้าหมายและสังเกตคำขอในแท็บ Intercept และ HTTP History"
    },
    {
      name: "Wireshark Network Analyzer",
      icon: "🦈",
      badge: "Packet Analysis Tool",
      description: "โปรแกรมวิเคราะห์โปรโตคอลเครือข่ายชั้นนำของโลก สามารถดักจับและแสดงโครงสร้างไบต์ของแพ็กเก็ตที่วิ่งผ่านการ์ดเครือข่ายแบบเรียลไทม์ พร้อมระบบกรองขั้นสูง",
      downloadUrl: "https://www.wireshark.org/download.html",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง Wireshark (พร้อมติดตั้ง Npcap Driver สำหรับ Windows)\n2. เปิดโปรแกรม ดับเบิลคลิกเลือกอินเทอร์เฟซเครือข่ายที่ใช้งาน (เช่น Wi-Fi หรือ Ethernet)\n3. ใช้ Display Filter เช่น 'tcp.port == 80' หรือ 'dns' เพื่อคัดกรองเฉพาะข้อมูลที่ต้องการตรวจสอบ"
    },
    {
      name: "Nmap Security Scanner",
      icon: "🔍",
      badge: "Reconnaissance Tool",
      description: "เครื่องมือสแกนและสำรวจโครงสร้างเครือข่าย ค้นหาพอร์ตเปิด (Open Ports) ตรวจจับเวอร์ชันของเซอร์วิส (Service Fingerprinting) และประเมินช่องโหว่ด้วยสคริปต์ NSE",
      downloadUrl: "https://nmap.org/download.html",
      setupGuide: "1. ติดตั้ง Nmap บน Windows หรือใช้คำสั่ง sudo apt install nmap บน Linux\n2. เปิด Terminal หรือ PowerShell\n3. ทดสอบสแกนเซิร์ฟเวอร์ทดสอบที่ได้รับอนุญาต: nmap -sV scanme.nmap.org"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "cyber-1",
      title: "เสาหลักความมั่นคงปลอดภัยสารสนเทศ (CIA Triad), กรอบการทำงาน NIST CSF 2.0 และการป้องกันเชิงลึก",
      description: "ทำความเข้าใจเสาหลัก CIA Triad, การขยายสู่ Parkerian Hexad, การประเมินภัยคุกคามด้วยแบบจำลอง STRIDE, กรอบการทำงาน NIST CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover) และกลยุทธ์ Defense-in-Depth",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# เสาหลักความมั่นคงปลอดภัยสารสนเทศและกรอบการทำงานระดับสากล

ความมั่นคงปลอดภัยทางไซเบอร์ (Cybersecurity) ไม่ใช่เพียงแค่การติดตั้งโปรแกรมแอนตี้ไวรัสหรือตั้งรหัสผ่านที่ซับซ้อน แต่คือกระบวนการบริหารความเสี่ยง (Risk Management) ที่ครอบคลุมทั้ง **บุคลากร (People)**, **กระบวนการ (Processes)** และ **เทคโนโลยี (Technology)** เพื่อปกป้องทรัพย์สินสารสนเทศขององค์กร

---

## 1. เสาหลัก 3 ประการของความมั่นคงปลอดภัยสารสนเทศ (CIA Triad)

\`\`\`
                     [ Confidentiality ]
                     (การรักษาความลับ)
                           ▲
                          / \\
                         /   \\
                        /     \\
                       /       \\
  [ Integrity ] ◄─────────────────► [ Availability ]
(ความถูกต้องแท้จริง)                 (ความพร้อมใช้งาน)
\`\`\`

1. **Confidentiality (การรักษาความลับ):** ข้อมูลต้องได้รับการปกป้องไม่ให้ผู้ที่ไม่มีสิทธิ์สามารถเข้าถึงหรือลักลอบเปิดดูได้
   - *มาตรการควบคุม:* การเข้ารหัสลับ (Encryption at Rest / in Transit), การควบคุมสิทธิ์ (Role-Based Access Control: RBAC), การยืนยันตัวตนแบบหลายปัจจัย (Multi-Factor Authentication: MFA)
2. **Integrity (ความถูกต้องแท้จริงและไม่ถูกดัดแปลง):** ข้อมูลต้องถูกต้องสมบูรณ์ ตรงตามต้นฉบับ ไม่ถูกแก้ไข ปลอมปน หรือลบทิ้งโดยไม่ได้รับอนุญาต ทั้งจากอุบัติเหตุและการโจมตี
   - *มาตรการควบคุม:* ฟังก์ชันแฮชทางเดียว (Cryptographic Hash: SHA-256), ลายมือชื่อดิจิทัล (Digital Signatures), ระบบบันทึก Audit Logs ที่ห้ามแก้ไข (WORM Storage)
3. **Availability (ความพร้อมใช้งาน):** สารสนเทศและระบบบริการต้องมีความพร้อมในการเข้าถึงและใช้งานได้ทันทีเมื่อผู้มีอำนาจหน้าที่ต้องการ
   - *มาตรการควบคุม:* ระบบสถาปัตยกรรมทำงานซ้ำซ้อน (High Availability & Redundancy), แผนสำรองข้อมูลและกู้คืน (Disaster Recovery: DR), ระบบกระจายโหลด (Load Balancing) และระบบป้องกันการโจมตีแบบ DDoS

### ส่วนขยาย Parkerian Hexad (6 เสาหลักความปลอดภัย)
นอกจาก 3 เสาหลักดั้งเดิมแล้ว Donn B. Parker ได้นำเสนออีก 3 องค์ประกอบที่จำเป็น:
- **Possession / Control:** การถือครองหรือควบคุมสื่อกายภาพ (เช่น ฮาร์ดดิสก์ถูกขโมย แม้ข้อมูลจะเข้ารหัสไว้แต่การครอบครองสูญเสียไปแล้ว)
- **Authenticity:** ความสามารถในการพิสูจน์แหล่งที่มาและความเป็นของแท้ (การไม่สามารถปฏิเสธความรับผิดชอบ: Non-Repudiation)
- **Utility:** อรรถประโยชน์และการนำไปใช้ประโยชน์ได้จริง (เช่น ข้อมูลถูกเข้ารหัสอย่างแน่นหนาจนถอดรหัสไม่ได้ ข้อมูลนั้นย่อมหมดประโยชน์)

---

## 2. กรอบการทำงานความมั่นคงปลอดภัยทางไซเบอร์ NIST CSF 2.0

สถาบันมาตรฐานและเทคโนโลยีแห่งชาติสหรัฐอเมริกา (NIST) ได้ประกาศกรอบการทำงาน **Cybersecurity Framework 2.0 (NIST CSF 2.0)** ซึ่งเป็นมาตรฐานที่องค์กรทั่วโลกใช้อ้างอิง โดยแบ่งหน้าที่หลักออกเป็น 6 แกน:

| ฟังก์ชันหลัก (Core Functions) | วัตถุประสงค์และกิจกรรมหลัก |
|---|---|
| **GOVERN (การกำกับดูแล)** | กำหนดนโยบาย ยุทธศาสตร์ บทบาทหน้าที่ และการบริหารความเสี่ยงระดับองค์กร |
| **IDENTIFY (การระบุและประเมิน)** | ระบุทรัพย์สิน ทะเบียนสินทรัพย์ (Asset Inventory), ประเมินช่องโหว่และความเสี่ยง |
| **PROTECT (การป้องกันและคุ้มครอง)** | ติดตั้งระบบควบคุมความปลอดภัย เช่น Firewall, การเข้ารหัสลับ, จัดฝึกอบรม Security Awareness |
| **DETECT (การตรวจจับสิ่งผิดปกติ)** | ตรวจจับการบุกรุกและพฤติกรรมผิดปกติแบบเรียลไทม์ (SIEM, IDS/IPS, EDR) |
| **RESPOND (การตอบสนองต่ออุบัติการณ์)** | แผนการระงับเหตุฉุกเฉิน (Incident Response), การกักกันระบบ (Containment), การสืบสวน |
| **RECOVER (การกู้คืนระบบ)** | กู้คืนระบบและข้อมูลกลับสู่สภาวะปกติอย่างปลอดภัย พร้อมบทเรียนหลังเหตุการณ์ (Post-Mortem) |

---

## 3. แบบจำลองวิเคราะห์ภัยคุกคาม STRIDE Threat Model

พัฒนาโดย Microsoft เพื่อช่วยให้นักพัฒนาวิเคราะห์หาจุดอ่อนของระบบตั้งแต่ขั้นตอนการออกแบบสถาปัตยกรรม:

\`\`\`
S - Spoofing (การปลอมแปลงตัวตน): แอบอ้างเป็นบุคคลหรือระบบอื่น  ---> [แก้ด้วย: Authentication, MFA]
T - Tampering (การดัดแปลงข้อมูล): แก้ไขแพ็กเก็ตหรือค่าในฐานข้อมูล ---> [แก้ด้วย: Integrity, Hashes, TLS]
R - Repudiation (การปฏิเสธความรับผิดชอบ): กระทำแล้วอ้างว่าไม่ได้ทำ ---> [แก้ด้วย: Audit Logs, Digital Signatures]
I - Information Disclosure (ข้อมูลรั่วไหล): ความลับถูกเปิดเผย      ---> [แก้ด้วย: Encryption, Least Privilege]
D - Denial of Service (การปฏิเสธการให้บริการ): ยิงถล่มระบบจนล่ม ---> [แก้ด้วย: Rate Limiting, DDoS Mitigation]
E - Elevation of Privilege (การยกระดับสิทธิ์): ผู้ใช้ทั่วไปแอบเป็นแอดมิน -> [แก้ด้วย: RBAC, Authorization Checks]
\`\`\`

---

## 4. กลยุทธ์การป้องกันเชิงลึกหลายชั้น (Defense-in-Depth)

\`\`\`
                 ┌───────────────────────────────────────┐
                 │  1. Physical Security: ประตู, CCTV    │
                 ├───────────────────────────────────────┤
                 │  2. Perimeter Security: WAF, DDoS Def │
                 ├───────────────────────────────────────┤
                 │  3. Network Security: VLANs, Firewall │
                 ├───────────────────────────────────────┤
                 │  4. Host/Endpoint: EDR, Patching, UFW │
                 ├───────────────────────────────────────┤
                 │  5. Application: Input Validation     │
                 ├───────────────────────────────────────┤
                 │  6. Data Security: AES-256 Encryption │
                 └───────────────────────────────────────┘
\`\`\``,
      codeExample: {
        language: "bash",
        code: `#!/usr/bin/env bash
# =================================================================
# สคริปต์ตรวจสอบและบังคับใช้นโยบายความปลอดภัย Principle of Least Privilege
# บนระบบปฏิบัติการ Linux Server เพื่อป้องกัน Information Disclosure & Tampering
# =================================================================

set -euo pipefail

echo "========================================================"
echo "    เริ่มกระบวนการตรวจสอบสิทธิ์ไฟล์ระบบ (Least Privilege)   "
echo "========================================================"

# 1. ตรวจสอบไฟล์เก็บ Hash รหัสผ่านผู้ใช้งาน /etc/shadow
# ต้องมีสิทธิ์เพียง root:shadow และอนุญาตให้อ่านเฉพาะผู้มีสิทธิ์ (0640 หรือ 0600)
echo "[+] บังคับใช้นโยบายสิทธิ์รัดกุมสำหรับไฟล์ /etc/shadow..."
sudo chown root:shadow /etc/shadow
sudo chmod 0640 /etc/shadow

# 2. ตรวจสอบไฟล์กุญแจส่วนตัว SSH Private Keys (ห้ามเปิดสิทธิ์ให้กลุ่มหรือบุคคลอื่นอ่าน)
echo "[+] ปรับปรุงสิทธิ์โฟลเดอร์และกุญแจ SSH ของผู้ใช้..."
if [ -d "$HOME/.ssh" ]; then
    chmod 700 "$HOME/.ssh"
    find "$HOME/.ssh" -type f -name "id_*" ! -name "*.pub" -exec chmod 600 {} +
    find "$HOME/.ssh" -type f -name "*.pub" -exec chmod 644 {} +
    find "$HOME/.ssh" -type f -name "authorized_keys" -exec chmod 600 {} +
fi

# 3. ค้นหาไฟล์อันตรายที่มีการเปิดสิทธิ์แบบ World-Writable (ทุกคนเขียนทับได้)
echo "[+] ตรวจหาไฟล์ที่เปิดสิทธิ์อันตราย World-Writable บนระบบ:"
WORLD_WRITABLE=$(find /etc /var/www -type f -perm -0002 2>/dev/null || true)

if [ -n "$WORLD_WRITABLE" ]; then
    echo "[!] ตรวจพบไฟล์อันตรายที่ทุกคนแก้ไขได้:"
    echo "$WORLD_WRITABLE"
    echo "กำลังแก้ไขสิทธิ์กลับคืน..."
    find /etc /var/www -type f -perm -0002 -exec chmod o-w {} +
else
    echo "[OK] ไม่พบไฟล์ที่เปิดสิทธิ์ World-Writable ในไดเรกทอรีสำคัญ"
fi

echo "[SUCCESS] การบังคับใช้นโยบายสิทธิ์ความปลอดภัยเสร็จสมบูรณ์"`,
        description: "สคริปต์เชลล์อัตโนมัติในการตรวจสอบและปรับลดสิทธิ์ของไฟล์สำคัญบน Linux ตามหลักการสิทธิ์ขั้นต่ำ"
      },
      quiz: [
        {
          id: "cy-1-q1",
          question: "การโจมตีแบบ Distributed Denial of Service (DDoS) ส่งผลกระทบทำลายเสาหลักใดในกรอบ CIA Triad โดยตรงที่สุด?",
          options: [
            "Confidentiality (การรักษาความลับ)",
            "Integrity (ความถูกต้องแท้จริง)",
            "Availability (ความพร้อมใช้งาน)",
            "Non-repudiation (การไม่สามารถปฏิเสธความรับผิดชอบ)"
          ],
          correctAnswer: 2,
          explanation: "การโจมตีแบบ DDoS มุ่งเน้นการส่งปริมาณทราฟฟิกมหาศาลเพื่อทำให้เซิร์ฟเวอร์หรือทรัพยากรเครือข่ายล่ม ส่งผลให้ผู้ใช้บริการทั่วไปไม่สามารถเข้าถึงระบบได้ จึงเป็นการทำลายด้าน Availability โดยตรง"
        },
        {
          id: "cy-1-q2",
          question: "ตามแบบจำลอง STRIDE Threat Model หากผู้โจมตีทำการปลอมแปลงค่าในแพ็กเก็ตเครือข่ายระหว่างการส่งผ่าน (Data in Transit) จะจัดอยู่ในหมวดหมู่ภัยคุกคามใด?",
          options: [
            "Spoofing",
            "Tampering",
            "Repudiation",
            "Information Disclosure"
          ],
          correctAnswer: 1,
          explanation: "Tampering คือการแอบแก้ไข ดัดแปลง หรือปลอมปนข้อมูลทั้งในระหว่างการจัดเก็บ (At Rest) หรือระหว่างการส่งผ่านเครือข่าย (In Transit) ซึ่งสามารถป้องกันได้ด้วยการใช้ Cryptographic Hash และการเข้ารหัสแบบมี Message Authentication Code (MAC)"
        }
      ],
      labGuide: {
        title: "แล็บการทำ Threat Modeling และการจำกัดสิทธิ์ไฟล์ระบบบน Linux",
        toolName: "Linux Terminal / WSL",
        downloadUrl: "https://ubuntu.com/wsl",
        objective: "ตรวจสอบสิทธิ์ของไฟล์คอนฟิกและไฟล์กุญแจสำคัญบนระบบ Linux และเขียนสคริปต์จำกัดสิทธิ์ตามหลัก Least Privilege อย่างถูกต้อง",
        steps: [
          {
            title: "ตรวจสอบสิทธิ์ปัจจุบัน",
            detail: "เปิดเทอร์มินัล รันคำสั่ง ls -la ~/.ssh และ ls -l /etc/shadow เพื่อสังเกตสัญลักษณ์สิทธิ์ rwx ของ Owner, Group, Other"
          },
          {
            title: "จำลองการสร้างไฟล์ลับ",
            detail: "สร้างไดเรกทอรีทดสอบ mkdir /tmp/secure_data และสร้างไฟล์ secret.env กำหนดข้อความลับด้านใน"
          },
          {
            title: "ปรับลดสิทธิ์ตามมาตรฐานความปลอดภัย",
            detail: "ใช้คำสั่ง chmod 600 /tmp/secure_data/secret.env เพื่ออนุญาตให้เฉพาะเจ้าของไฟล์เท่านั้นที่สามารถอ่านและเขียนได้"
          },
          {
            title: "ทดสอบการเข้าถึงข้ามผู้ใช้",
            detail: "ทดลองสลับบัญชีผู้ใช้ หรือใช้คำสั่ง sudo -u nobody cat /tmp/secure_data/secret.env เพื่อพิสูจน์ว่าระบบปฏิเสธการเข้าถึง (Permission denied)"
          }
        ],
        verification: "เมื่อทดลองใช้ผู้ใช้รายอื่นพยายามอ่านไฟล์ลับ ระบบปฏิบัติการ Linux จะต้องแจ้งเตือนข้อผิดพลาด 'Permission denied' เสมอ"
      }
    },

    {
      id: "cyber-2",
      title: "วิทยาการรหัสลับเชิงประยุกต์ (Applied Cryptography): สมมาตร, อสมมาตร, Password Hashing และ TLS 1.3",
      description: "เจาะลึกการเข้ารหัสแบบสมมาตร AES-256-GCM (AEAD), กุญแจอสมมาตร RSA vs ECC (Ed25519), การจัดเก็บรหัสผ่านยุคใหม่ด้วย Argon2id และ bcrypt, และสถาปัตยกรรม 1-RTT Handshake ของโปรโตคอล TLS 1.3 (RFC 8446)",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# วิทยาการรหัสลับประยุกต์ (Applied Cryptography)

วิทยาการรหัสลับคือรากฐานทางคณิตศาสตร์ที่ค้ำจุนความมั่นคงปลอดภัยของอินเทอร์เน็ตทั้งหมด โดยแบ่งออกเป็น 3 แขนงหลัก: **การเข้ารหัสลับแบบกุญแจสมมาตร (Symmetric)**, **การเข้ารหัสลับแบบกุญแจอสมมาตร (Asymmetric)** และ **ฟังก์ชันแฮชทางเดียว (Cryptographic Hash Functions)**

---

## 1. การเข้ารหัสแบบกุญแจสมมาตร (Symmetric Ciphers): AES-256

ใช้กุญแจลับตัวเดียวกันทั้งในการเข้ารหัส (Encryption) และการถอดรหัส (Decryption) มีความเร็วในการประมวลผลสูงมากเนื่องจากมีชุดคำสั่งฮาร์ดแวร์ระดับ CPU (AES-NI) คอยช่วยเหลือ

\`\`\`
Plaintext (ข้อความธรรมดา) ───► [ อัลกอริทึม AES-256-GCM ] ───► Ciphertext + Auth Tag
                                       ▲
                                       │ (กุญแจลับ 256 บิต + 96-bit Nonce)
                               [ Secret Key ]
\`\`\`

### ทำไมต้องเป็น AES-GCM (Galois/Counter Mode)?
ในอดีตการใช้โหมด **AES-CBC (Cipher Block Chaining)** ต้องพึ่งพาการ Padding ข้อมูล ซึ่งเสี่ยงต่อการถูกโจมตีด้วยเทคนิค **Padding Oracle Attack** 
โหมดยุคใหม่จึงเปลี่ยนมาใช้ **AEAD (Authenticated Encryption with Associated Data)** เช่น **AES-GCM** หรือ **ChaCha20-Poly1305** ซึ่งสามารถเข้ารหัสลับไปพร้อมกับการสร้าง **Authentication Tag** ยืนยันความถูกต้องสมบูรณ์ของข้อมูล หากผู้โจมตีแอบแก้ไขข้อมูลแม้แต่บิตเดียว ตัวแท็กจะไม่ตรงและระบบจะปฏิเสธข้อมูลทันทีก่อนการถอดรหัส

---

## 2. การเข้ารหัสแบบกุญแจอสมมาตร (Asymmetric Ciphers): RSA vs ECC

ใช้คู่กุญแจสองดอกที่สัมพันธ์กันทางคณิตศาสตร์:
- **Public Key (กุญแจสาธารณะ):** แจกจ่ายให้ทุกคน ใช้สำหรับ "เข้ารหัสข้อความ" ส่งหาเจ้าของ หรือใช้ "ตรวจสอบลายมือชื่อ"
- **Private Key (กุญแจส่วนตัว):** เก็บรักษาไว้เป็นความลับสูงสุด ใช้สำหรับ "ถอดรหัสข้อความ" หรือใช้ "ลงลายมือชื่อดิจิทัล"

| คุณสมบัติ | RSA (Rivest–Shamir–Adleman) | ECC (Elliptic Curve Cryptography: Curve25519) |
|---|---|---|
| **พื้นฐานคณิตศาสตร์** | ปัญหาการแยกตัวประกอบจำนวนเต็มขนาดใหญ่ | ปัญหาลอการิทึมแบบไม่ต่อเนื่องบนเส้นโค้งวงรี |
| **ขนาดกุญแจที่แนะนำ** | **3072 บิต หรือ 4096 บิต** | **256 บิต** (เช่น Ed25519, X25519) |
| **ความเร็วในการประมวลผล** | ช้า ใช้พลังงานและพื้นที่ CPU สูง | **เร็วกว่ามาก กินแบนด์วิดท์ต่ำกว่า 10 เท่า** |
| **ความเหมาะสมในการใช้งาน** | ระบบโครงสร้างพื้นฐานเก่า (Legacy PKI) | **มาตรฐานใหม่สำหรับ SSH, TLS 1.3, WireGuard, Blockchain** |

---

## 3. การจัดเก็บรหัสผ่านอย่างปลอดภัย: ทำไม SHA-256 จึงไม่เพียงพอ?

> [!CAUTION]
> **ข้อผิดพลาดร้ายแรงของโปรแกรมเมอร์:**
> ห้ามใช้ **MD5**, **SHA-1** หรือแม้แต่ **SHA-256 ธรรมดา** ในการจัดเก็บรหัสผ่านผู้ใช้ในฐานข้อมูลเด็ดขาด!
> เนื่องจากฟังก์ชันกลุ่ม SHA ถูกออกแบบมาให้ "ทำงานเร็วมากระดับหลายกิกะไบต์ต่อวินาที" เพื่อตรวจสอบไฟล์ ผู้โจมตีสามารถใช้การ์ดจอ (GPU Rig) สุ่มถอดรหัสผ่านด้วย Rainbow Tables หรือ Brute Force ได้หลายหมื่นล้านครั้งต่อวินาที!

### มาตรฐานการแฮชรหัสผ่านยุคใหม่ (Adaptive & Memory-Hard Hashes):
1. **Argon2id (ผู้ชนะเลิศ Password Hashing Competition - แนะนำสูงสุดโดย OWASP):** ทนทานต่อการโจมตีด้วย GPU/ASIC เพราะบังคับให้ใช้พื้นที่หน่วยความจำ RAM มหาศาลในการคำนวณแต่ละครั้ง
2. **bcrypt (Blowfish-based):** มีค่า Work Factor (Cost) สามารถปรับเพิ่มรอบการวนซ้ำได้ตามความเร็วของคอมพิวเตอร์ที่เพิ่มขึ้นในอนาคต
3. **Cryptographic Salt:** ต้องสุ่มสตริงความยาวอย่างน้อย 16 ไบต์ขึ้นมาผสมกับรหัสผ่านของแต่ละคนเสมอ เพื่อป้องกัน Rainbow Table Attacks

---

## 4. สถาปัตยกรรมโปรโตคอล TLS 1.3 Handshake (RFC 8446)

\`\`\`
   Client                                                Server
     │                                                      │
     │ ──── ClientHello (เสนอ Cipher Suites, ECDHE Key) ───► │
     │                                                      │
     │ ◄─── ServerHello (เลือก Cipher, ส่ง ECDHE Key) ─────── │
     │      {EncryptedExtensions}                           │
     │      {Certificate}                                   │
     │      {CertificateVerify}                             │
     │      {Finished}                                      │
     │                                                      │
     │ ──── {Finished} ────────────────────────────────────► │
     │                                                      │
     │ ◄══════════ ข้อมูลแอปพลิเคชันเข้ารหัสสมบูรณ์ ═════════► │
     │             (เริ่มต้นส่งได้ทันทีใน 1-RTT)              │
\`\`\`

**สิ่งที่ TLS 1.3 ปรับปรุงจากเวอร์ชันเก่า:**
- ลดขั้นตอนการจับมือจาก 2-RTT เหลือเพียง **1-RTT** (และรองรับ 0-RTT Early Data สำหรับการเชื่อมต่อซ้ำ)
- ตัดอัลกอริทึมที่ล้าสมัยและไม่ปลอดภัยออกทั้งหมด (ตัด MD5, SHA-1, RC4, DES, 3DES, Static RSA Key Exchange)
- บังคับใช้คุณสมบัติ **Perfect Forward Secrecy (PFS)** โดยใช้ชิปแลกกุญแจชั่วคราว (Ephemeral Diffie-Hellman) เท่านั้น ทำให้แม้กุญแจหลักของเซิร์ฟเวอร์จะถูกขโมยในอนาคต ข้อมูลทราฟฟิกย้อนหลังที่เคยถูกอัดเทปไว้ก็ยังคงปลอดภัยไม่สามารถถอดรหัสได้`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การเข้ารหัสลับแบบสมมาตร AES-256-GCM (AEAD) 
# และการแฮชรหัสผ่านด้วย Argon2id ตามมาตรฐาน OWASP ในภาษา Python
# ไลบรารี: cryptography และ argon2-cffi
# =================================================================

import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError

# -------------------------------------------------------------
# 1. การแฮชรหัสผ่านผู้ใช้งานอย่างปลอดภัยด้วย Argon2id
# -------------------------------------------------------------
print("--- [1] ทดสอบการแฮชรหัสผ่านด้วย Argon2id ---")
ph = PasswordHasher(
    time_cost=3,        # จำนวนรอบการคำนวณ (Iterations)
    memory_cost=65536,  # ใช้ RAM 64 MB ต่อการแฮชหนึ่งครั้ง (ป้องกันการ์ดจอแฮก)
    parallelism=4,      # ใช้งาน 4 เธรด
    hash_len=32,
    salt_len=16
)

user_raw_password = "SuperSecretPassword@2026"

# สร้าง Salt สุ่มและแฮชรหัสผ่าน
password_hash = ph.hash(user_raw_password)
print(f"Argon2id Hash String:\n{password_hash}\n")

# ตรวจสอบรหัสผ่านตอนล็อกอิน
try:
    ph.verify(password_hash, "SuperSecretPassword@2026")
    print("-> ยืนยันรหัสผ่านถูกต้องสมบูรณ์ (Authentication Succeeded)")
except VerifyMismatchError:
    print("-> รหัสผ่านไม่ถูกต้อง!")

# -------------------------------------------------------------
# 2. การเข้ารหัสและถอดรหัสข้อมูลด้วย AES-256-GCM
# -------------------------------------------------------------
print("\n--- [2] ทดสอบการเข้ารหัสลับข้อมูลด้วย AES-256-GCM (AEAD) ---")
# สร้างกุญแจลับสุ่มขนาด 256 บิต (32 ไบต์)
secret_key = AESGCM.generate_key(bit_length=256)
aesgcm = AESGCM(secret_key)

# Nonce (Number Used Once) ขนาด 96 บิต (12 ไบต์) - ห้ามใช้ซ้ำเด็ดขาด!
nonce = os.urandom(12)

plaintext = b"Confidential Record: Student GPA=4.00, Citizen ID=1103700000001"
associated_data = b"school_db_header_v1" # ข้อมูลประกอบที่ร่วมตรวจสอบความถูกต้อง

# เข้ารหัสข้อมูล (ผลลัพธ์คือ Ciphertext พ่วงด้วย 16-byte Authentication Tag)
ciphertext = aesgcm.encrypt(nonce, plaintext, associated_data)
print(f"Ciphertext (Hex): {ciphertext.hex()}")

# ถอดรหัสข้อมูลพร้อมยืนยันความสมบูรณ์
decrypted_data = aesgcm.decrypt(nonce, ciphertext, associated_data)
print(f"Decrypted Data: {decrypted_data.decode('utf-8')}")`,
        description: "การประยุกต์ใช้งานวิทยาการรหัสลับระดับอุตสาหกรรมด้วย AES-256-GCM และฟังก์ชันแฮช Argon2id"
      },
      quiz: [
        {
          id: "cy-2-q1",
          question: "เหตุใดวงการความปลอดภัยไซเบอร์สากล (เช่น OWASP) จึงสั่งห้ามใช้ฟังก์ชัน SHA-256 หรือ MD5 แบบธรรมดาในการจัดเก็บรหัสผ่านผู้ใช้งานในฐานข้อมูล?",
          options: [
            "เพราะฟังก์ชันเหล่านี้คำนวณได้เร็วเกินไป ทำให้ผู้โจมตีสามารถใช้การ์ดจอ (GPU) คำนวณสุ่มรหัสผ่านได้หลายหมื่นล้านครั้งต่อวินาที",
            "เพราะฟังก์ชันเหล่านี้ใช้หน่วยความจำเกิน 100GB",
            "เพราะผลลัพธ์ของ SHA-256 สามารถถอดรหัสกลับเป็นข้อความเดิมได้โดยตรง",
            "เพราะ SHA-256 ใช้งานได้เฉพาะบนระบบปฏิบัติการ Windows เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "ฟังก์ชันกลุ่ม SHA ออกแบบมาสำหรับการตรวจสอบความสมบูรณ์ของไฟล์ จึงต้องคำนวณเร็วระดับกิกะไบต์ต่อวินาที แต่รหัสผ่านต้องการฟังก์ชันแบบ 'Adaptive & Memory-Hard' เช่น Argon2id หรือ bcrypt ซึ่งจงใจทำให้คำนวณช้าและใช้แรมเยอะ เพื่อทำลายความได้เปรียบของการใช้การ์ดจอหรือเครื่องขุด ASIC ในการเจาะระบบ"
        },
        {
          id: "cy-2-q2",
          question: "คุณสมบัติ Perfect Forward Secrecy (PFS) ในโปรโตคอล TLS 1.3 มีประโยชน์สำคัญอย่างไร?",
          options: [
            "ทำให้หน้าเว็บโหลดเร็วขึ้น 10 เท่า",
            "แม้กุญแจ Private Key หลักของเว็บเซิร์ฟเวอร์จะถูกแฮกเกอร์ขโมยไปในอนาคต แต่ทราฟฟิกข้อมูลย้อนหลังที่เคยถูกดักฟังบันทึกไว้ก็ยังคงไม่สามารถถูกถอดรหัสได้",
            "ป้องกันไม่ให้เบราว์เซอร์ติดไวรัส",
            "อนุญาตให้ส่งไฟล์ได้โดยไม่ต้องผ่านอินเทอร์เน็ต"
          ],
          correctAnswer: 1,
          explanation: "PFS อาศัยการสร้างคู่กุญแจชั่วคราว (Ephemeral Keys) สำหรับการแลกเปลี่ยนในแต่ละ Session เมื่อเซสชันสิ้นสุดลง กุญแจชั่วคราวจะถูกทำลายทิ้งทันที ดังนั้นแม้แฮกเกอร์จะได้ Master Private Key ของเซิร์ฟเวอร์ไปในภายหลัง ก็ไม่มีกุญแจสำหรับถอดรหัสข้อมูลเซสชันเก่าๆ ในอดีตได้"
        }
      ],
      labGuide: {
        title: "แล็บการสร้างคู่กุญแจ Ed25519 สำหรับการพิสูจน์ตัวตน SSH อย่างปลอดภัย",
        toolName: "OpenSSH Client (ssh-keygen)",
        downloadUrl: "https://www.openssh.com/",
        objective: "สร้างคู่กุญแจแบบ Elliptic Curve (Ed25519) เปรียบเทียบความยาวของกุญแจกับ RSA 4096 บิต และทดสอบติดตั้งกุญแจสาธารณะลงบนเซิร์ฟเวอร์",
        steps: [
          {
            title: "สร้างกุญแจ Ed25519",
            detail: "เปิดเทอร์มินัลหรือ PowerShell พิมพ์คำสั่ง: ssh-keygen -t ed25519 -C \"student@itacademy.local\""
          },
          {
            title: "กำหนด Passphrase ป้องกันกุญแจ",
            detail: "ตั้งค่ารหัสผ่านป้องกัน Private Key เพิ่มเติมอีกหนึ่งชั้น เพื่อป้องกันกรณีทำไฟล์กุญแจหลุด"
          },
          {
            title: "ตรวจสอบเนื้อหากุญแจทั้งสองดอก",
            detail: "ใช้คำสั่ง cat ~/.ssh/id_ed25519.pub เพื่อดูกุญแจสาธารณะ และสังเกตขนาดของไฟล์ที่มีความยาวกะทัดรัดเพียง 68 ตัวอักษร"
          },
          {
            title: "เปรียบเทียบกับ RSA",
            detail: "ทดลองสร้างกุญแจ RSA แบบเดิม ssh-keygen -t rsa -b 4096 แล้วเปรียบเทียบขนาดไฟล์กุญแจ"
          }
        ],
        verification: "ในโฟลเดอร์ ~/.ssh/ จะปรากฏไฟล์คู่กุญแจ id_ed25519 (Private Key สิทธิ์ 600) และ id_ed25519.pub (Public Key สิทธิ์ 644) อย่างถูกต้องสมบูรณ์"
      }
    },

    {
      id: "cyber-3",
      title: "การดักจับและวิเคราะห์ทราฟฟิกเครือข่ายเชิงลึกด้วย Wireshark และ Tshark",
      description: "ทำความเข้าใจโครงสร้างเฟรม Ethernet II, ธงสถานะ TCP Flags (SYN, ACK, PSH, RST, FIN), กระบวนการ Three-Way Handshake, การวิเคราะห์ทราฟฟิก HTTP Cleartext vs TLS 1.3 และการตรวจจับการโจมตี ARP Spoofing (Man-in-the-Middle)",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การวิเคราะห์ความปลอดภัยเครือข่ายด้วย Wireshark

**Wireshark** เป็นโปรแกรมดักจับแพ็กเก็ต (Packet Sniffer) ที่ได้รับความนิยมสูงสุดในโลก ช่วยให้นักวิเคราะห์ความมั่นคงปลอดภัย (Security Analyst) สามารถมองเห็นบิตข้อมูลทุกตัวที่เดินทางผ่านตัวกลางเครือข่าย เพื่อตรวจจับการบุกรุกและวิเคราะห์พฤติกรรมมัลแวร์

---

## 1. การทำงานของ TCP Flags และกระบวนการ Three-Way Handshake

โปรโตคอล TCP ใช้แฟล็กควบคุม 1 บิตใน TCP Header เพื่อจัดการสถานะของการเชื่อมต่อ:

\`\`\`
Client (192.168.1.50)                                      Server (192.168.1.10)
        │                                                           │
        │ ─────── 1. [SYN] Seq=1000 ──────────────────────────────► │ (ขอเริ่มเชื่อมต่อ)
        │                                                           │
        │ ◄────── 2. [SYN, ACK] Seq=5000, Ack=1001 ───────────────── │ (ตอบรับและขอเชื่อมต่อกลับ)
        │                                                           │
        │ ─────── 3. [ACK] Seq=1001, Ack=5001 ─────────────────────► │ (ยืนยันสมบูรณ์)
        │                                                           │
        ├──────────────── กำลังส่งข้อมูลแอปพลิเคชัน ────────────────┤
        │                                                           │
        │ ─────── 4. [FIN, ACK] Seq=1500, Ack=6000 ────────────────► │ (ขอปิดการเชื่อมต่อแบบปกติ)
        │                                                           │
        │ ◄────── 5. [RST] (Reset: สั่งตัดการเชื่อมต่อทันที) ──────── │ (ในกรณีพอร์ตปิด หรือถูกโจมตี)
\`\`\`

---

## 2. อันตรายของการส่งผ่านข้อมูลแบบ Cleartext (HTTP / FTP / Telnet)

เมื่อผู้ใช้งานส่งข้อมูลผ่านโปรโตคอลที่ไม่เข้ารหัส เช่น HTTP (พอร์ต 80) แฮกเกอร์ที่อยู่บนเครือข่ายเดียวกัน (เช่น Wi-Fi สาธารณะ) สามารถใช้ Wireshark เลือกแพ็กเก็ต แล้วคลิกขวาเลือก **Follow > TCP Stream** เพื่ออ่านข้อมูลชื่อผู้ใช้ รหัสผ่าน หรือคุกกี้เซสชันในรูปแบบข้อความธรรมดาได้ทันที 100%!

\`\`\`http
POST /login HTTP/1.1
Host: insecure-bank.com
Content-Type: application/x-www-form-urlencoded

username=admin&password=PasswordSuperSecret1234
\`\`\`
*(ภาพทราฟฟิกจริงใน Wireshark เมื่อไม่ได้ใช้ HTTPS)*

---

## 3. ตัวกรองการแสดงผลขั้นสูงใน Wireshark (Display Filters)

| วัตถุประสงค์ในการตรวจสอบ | ไวยากรณ์ตัวกรอง Wireshark Display Filter |
|---|---|
| **กรองเฉพาะคำขอล็อกอิน HTTP POST** | \`http.request.method == "POST"\` |
| **ตรวจหาการเชื่อมต่อที่มีการส่งรหัสผ่าน** | \`frame contains "password" || frame contains "passwd"\` |
| **ตรวจหาการทำ TCP SYN Flood (DDoS)** | \`tcp.flags.syn == 1 && tcp.flags.ack == 0\` |
| **ตรวจหาการตัดการเชื่อมต่อผิดปกติ** | \`tcp.flags.reset == 1\` |
| **ตรวจหาทราฟฟิก DNS ผิดปกติ** | \`dns.flags.response == 0 && dns.qry.name contains "malware"\` |
| **ตรวจจับสัญญาณ ARP Spoofing / Poisoning** | \`arp.duplicate-address-frame || arp.opcode == 2\` |`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# สคริปต์ตรวจจับการโจมตี ARP Spoofing (Man-in-the-Middle Detector)
# พัฒนาด้วยภาษา Python และไลบรารี Scapy สำหรับวิเคราะห์แพ็กเก็ตดิบ
# =================================================================

from scapy.all import sniff, ARP
import sys

# ตารางจับคู่ IP Address กับ MAC Address ที่ถูกต้อง (Ground Truth)
IP_MAC_MAPPING = {
    "192.168.1.1": "a0:04:60:ab:cd:ef", # Router Gateway
}

def process_sniffed_packet(packet):
    # ตรวจสอบว่าเป็นแพ็กเก็ต ARP Response (Opcode 2 = is-at)
    if packet.haslayer(ARP) and packet[ARP].op == 2:
        source_ip = packet[ARP].psrc
        source_mac = packet[ARP].hwsrc.lower()

        # ตรวจสอบกับฐานข้อมูลของระบบ
        if source_ip in IP_MAC_MAPPING:
            real_mac = IP_MAC_MAPPING[source_ip].lower()
            if source_mac != real_mac:
                print("=" * 60)
                print(f"[ALERT] ตรวจพบการโจมตี ARP SPOOFING / MITM ในเครือข่าย!")
                print(f"IP เป้าหมาย: {source_ip}")
                print(f"MAC Address แท้จริง:   {real_mac}")
                print(f"MAC Address ปลอมแปลง:  {source_mac} (เครื่องผู้โจมตี)")
                print("=" * 60)
                # สามารถสั่งยิงสคริปต์ตัดการเชื่อมต่อเครือข่ายอัตโนมัติได้ตรงนี้

print("[SYSTEM] เริ่มต้นดักฟังและวิเคราะห์แพ็กเก็ต ARP ในเครือข่าย...")
# เริ่มต้นดักจับแพ็กเก็ตแบบเรียลไทม์
try:
    sniff(filter="arp", prn=process_sniffed_packet, store=0)
except PermissionError:
    print("[ERROR] จำเป็นต้องรันสคริปต์นี้ด้วยสิทธิ์ Root / Administrator!")`,
        description: "สคริปต์ Python ตรวจจับการปลอมแปลง ARP Packet (MITM Attack) ในเครือข่ายท้องถิ่นโดยใช้ Scapy"
      },
      quiz: [
        {
          id: "cy-3-q1",
          question: "ในกระบวนการจับมือเชื่อมต่อ TCP Three-Way Handshake แพ็กเก็ตแรกที่ไคลเอนต์ส่งไปยังเซิร์ฟเวอร์เพื่อขอเริ่มต้นสร้างการเชื่อมต่อคือแฟล็กใด?",
          options: [
            "ACK (Acknowledgment)",
            "SYN (Synchronize)",
            "FIN (Finish)",
            "RST (Reset)"
          ],
          correctAnswer: 1,
          explanation: "ไคลเอนต์จะเริ่มต้นส่งแพ็กเก็ตที่มีการเปิดแฟล็ก SYN พร้อมกับ Initial Sequence Number สุ่ม เพื่อร้องขอเริ่มการเชื่อมต่อ เซิร์ฟเวอร์จึงจะตอบกลับด้วย SYN-ACK"
        },
        {
          id: "cy-3-q2",
          question: "หากต้องการตรวจสอบว่ามีผู้ใช้คนใดในสำนักงานกำลังส่งรหัสผ่านผ่านเว็บที่ไม่เข้ารหัส (HTTP) ในโปรแกรม Wireshark ควรใช้ฟิลเตอร์ใด?",
          options: [
            "tcp.port == 443",
            "http.request.method == \"POST\"",
            "icmp",
            "arp"
          ],
          correctAnswer: 1,
          explanation: "การส่งข้อมูลแบบฟอร์มล็อกอินทางเว็บมักใช้เมธอด HTTP POST ตัวกรอง http.request.method == \"POST\" จะช่วยคัดแยกคำขอส่งข้อมูลเหล่านี้ออกมาวิเคราะห์ได้อย่างรวดเร็ว"
        }
      ],
      labGuide: {
        title: "แล็บดักจับแพ็กเก็ตและวิเคราะห์ TCP Stream ด้วย Wireshark",
        toolName: "Wireshark Network Analyzer",
        downloadUrl: "https://www.wireshark.org/",
        objective: "ดักจับทราฟฟิกเครือข่ายขณะเปิดหน้าเว็บทดสอบ HTTP และใช้ฟังก์ชัน Follow TCP Stream เพื่อดึงข้อความ Cleartext ที่ซ่อนอยู่ในแพ็กเก็ต",
        steps: [
          {
            title: "เปิด Wireshark และเลือก Interface",
            detail: "เปิดโปรแกรม Wireshark ดับเบิลคลิกที่การ์ดเชื่อมต่อเครือข่าย (เช่น Wi-Fi หรือ Ethernet) เพื่อเริ่มดักจับแพ็กเก็ต"
          },
          {
            title: "เปิดเว็บทดสอบที่ไม่เข้ารหัส",
            detail: "เปิดเว็บเบราว์เซอร์ เข้าไปที่เว็บไซต์ทดสอบ: http://testphp.vulnweb.com แล้วทดลองพิมพ์ข้อความในช่องค้นหาหรือช่องล็อกอิน"
          },
          {
            title: "ใช้ Display Filter",
            detail: "กลับมาที่ Wireshark พิมพ์ในแถบตัวกรอง: http.request.method == \"POST\" หรือ http แล้วกด Enter"
          },
          {
            title: "สกัดข้อความด้วย Follow TCP Stream",
            detail: "คลิกขวาที่แพ็กเก็ต HTTP POST ที่พบ เลือก Follow > TCP Stream"
          }
        ],
        verification: "หน้าต่างใหม่จะเปิดขึ้นมาและแสดงข้อความคำขอ HTTP Request เต็มรูปแบบ โดยมองเห็นข้อความที่พิมพ์ลงในแบบฟอร์มได้อย่างชัดเจนโดยไม่มีการเข้ารหัส"
      }
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "cyber-4",
      title: "การสำรวจเครือข่ายและการทำ Footprinting ด้วย Nmap และ Nmap Scripting Engine (NSE)",
      description: "เรียนรู้กลไกการสแกนระดับลึก: TCP SYN Stealth Scan (-sS), TCP Connect Scan (-sT), UDP Scan (-sU), การตรวจหา Service & OS Fingerprint (-sV, -O), เทคนิคการหลบหลีกไฟร์วอลล์ (Decoy, Fragmentation) และการใช้ NSE ตรวจจับช่องโหว่ CVE",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การสำรวจเครือข่ายและประเมินช่องโหว่ด้วย Nmap

**Nmap (Network Mapper)** คือเครื่องมือตรวจสอบเครือข่ายอันดับหนึ่งของโลก ได้รับการออกแบบมาเพื่อสแกนเครือข่ายขนาดใหญ่ ค้นหาโฮสต์ที่เปิดทำงาน พอร์ตที่เปิดให้บริการ (Open Ports) และสืบค้นเวอร์ชันของซอฟต์แวร์เพื่อนำไปประเมินความเสี่ยง

---

## 1. กลไกการทำงานของเทคนิคการสแกนพอร์ต (Scanning Techniques)

### 1.1 TCP SYN Scan (\`-sS\` - Half-Open / Stealth Scan)
เป็นโหมดมาตรฐานและได้รับความนิยมสูงสุด ต้องใช้สิทธิ์ระดับ Root/Administrator:
1. Nmap ส่งแพ็กเก็ต \`[SYN]\` ไปยังพอร์ตเป้าหมาย
2. หากพอร์ต **เปิดอยู่ (OPEN)**: เป้าหมายจะตอบกลับด้วย \`[SYN, ACK]\`
3. Nmap จะส่งแพ็กเก็ต \`[RST]\` กลับไปทำลายการเชื่อมต่อทันที โดย **ไม่ส่งแพ็กเก็ต ACK สุดท้าย** ทำให้กระบวนการ 3-Way Handshake ไม่สมบูรณ์ แอปพลิเคชันของเป้าหมายจึงไม่บันทึก Session ใน Application Logs

### 1.2 TCP Connect Scan (\`-sT\`)
ใช้ฟังก์ชันระดับสูง \`connect()\` ของระบบปฏิบัติการ:
- ทำการจับมือ Three-Way Handshake ครบ 100%
- ใช้ในกรณีที่ผู้ใช้งานไม่มีสิทธิ์ระดับ Root หรือกำลังสแกนผ่านเครือข่าย IPv6 / Proxy
- ทิ้งร่องรอยในไฟล์ Log ของเป้าหมายอย่างชัดเจน

### 1.3 UDP Scan (\`-sU\`)
การสแกนบริการแบบ Connectionless (เช่น DNS พอร์ต 53, SNMP พอร์ต 161, DHCP พอร์ต 67):
- หากไม่ได้รับการตอบกลับ หรือได้แพ็กเก็ต UDP กลับมา $\\implies$ สถานะ **Open|Filtered**
- หากได้รับแพ็กเก็ต ICMP Type 3 Code 3 (Port Unreachable) $\\implies$ สถานะ **Closed**

---

## 2. สถานะของพอร์ตตามการประเมินของ Nmap

| สถานะพอร์ต | ความหมายเชิงเทคนิค |
|---|---|
| **Open** | มีแอปพลิเคชันหรือเซอร์วิสกำลังดักฟังและพร้อมรับการเชื่อมต่อบนพอร์ตนั้น |
| **Closed** | เป้าหมายได้รับแพ็กเก็ต แต่ไม่มีเซอร์วิสใดเปิดรับ (ส่งสัญญาณ RST กลับมา) |
| **Filtered** | มีอุปกรณ์ความปลอดภัย เช่น Firewall หรือ Packet Filter กั้นกลาง ทำให้แพ็กเก็ตถูก Drop หรือถูกบล็อก Nmap ไม่สามารถระบุได้แน่ชัด |
| **Unfiltered** | พอร์ตสามารถเข้าถึงได้ แต่ Nmap ไม่สามารถระบุได้ว่าเปิดหรือปิด (มักพบใน ACK Scan) |

---

## 3. Nmap Scripting Engine (NSE) สำหรับการตรวจจับช่องโหว่

Nmap มาพร้อมกับเครื่องมือสคริปต์ภาษา Lua (NSE) ที่มีมากกว่า 600 สคริปต์ จัดกลุ่มตามหมวดหมู่:
- \`default\`: สคริปต์พื้นฐานที่ทำงานเร็วและปลอดภัย
- \`vuln\`: ตรวจสอบหาช่องโหว่ที่รู้จัก (Known Vulnerabilities & CVE) เช่น EternalBlue, Heartbleed
- \`auth\`: ทดสอบระบบการยืนยันตัวตน หรือตรวจหารหัสผ่านเริ่มต้น (Default Credentials)
- \`safe\`: สคริปต์ที่ไม่ทำให้ระบบเป้าหมายแครชหรือทำงานผิดปกติ`,
      codeExample: {
        language: "bash",
        code: `# =================================================================
# สูตรคำสั่ง Nmap ระดับมืออาชีพสำหรับการประเมินความมั่นคงปลอดภัย
# =================================================================

# 1. การสแกนแบบลอบเร้น (Stealth) รวดเร็ว พร้อมตรวจสอบเวอร์ชันของเซอร์วิส
# -sS: TCP SYN Scan
# -sV: Probe open ports to determine service/version info
# -T4: Aggressive timing (เร็วและแม่นยำสำหรับเน็ตเวิร์กที่เสถียร)
# -Pn: ข้ามการ Ping (สแกนแม้เป้าหมายจะบล็อก ICMP Echo Request)
sudo nmap -sS -sV -T4 -Pn -p 1-1000 192.168.1.100

# 2. การสแกนแบบ Full Audit ทุกพอร์ต (1-65535) พร้อมระบบปฏิบัติการและ Traceroute
# -p-: สแกนครบทุกพอร์ต 65,535 พอร์ต (ไม่ข้ามพอร์ตแปลกปลอม)
# -A: เปิดใช้งาน OS Detection, Version Detection, Script Scanning, และ Traceroute
# -oA: บันทึกผลลัพธ์ครบทุกฟอร์แมต (.nmap, .xml, .gnmap)
sudo nmap -p- -A -T4 192.168.1.100 -oA /var/log/audit_report_target1

# 3. การตรวจสอบหาช่องโหว่ความเสี่ยงสูง (CVE Detection) ด้วย NSE Scripts
sudo nmap -sV --script "vuln and safe" -p 80,443,445,3389 192.168.1.100

# 4. เทคนิคการหลบหลีกการตรวจจับของ Firewall/IDS
# -D: ปลอมแปลง IP แฝง (Decoys) ทำให้ผู้ดูแลระบบไม่รู้ว่า IP ไหนคือผู้สแกนตัวจริง
# -f: ซอยย่อยแพ็กเก็ต (Packet Fragmentation) ข้ามผ่านตัวกรองไฟร์วอลล์บางรุ่น
sudo nmap -sS -D 192.168.1.5,192.168.1.8,ME -f 192.168.1.100`,
        description: "ชุดคำสั่ง Nmap ประสิทธิภาพสูงสำหรับการสำรวจพอร์ต ตรวจสอบเวอร์ชัน และตรวจจับช่องโหว่ CVE"
      },
      quiz: [
        {
          id: "cy-4-q1",
          question: "ทำไมการสแกนแบบ TCP SYN Scan (-sS) จึงถูกเรียกว่า 'Half-Open Scan' หรือ 'Stealth Scan'?",
          options: [
            "เพราะสแกนได้เร็วเพียงครึ่งเดียวของการสแกนปกติ",
            "เพราะเมื่อเป้าหมายตอบรับด้วย SYN-ACK ทาง Nmap จะส่งแพ็กเก็ต RST ไปตัดการเชื่อมต่อทันที ทำให้กระบวนการ 3-Way Handshake ไม่สมบูรณ์ จึงไม่เกิดการบันทึก Log ในระดับแอปพลิเคชันส่วนใหญ่",
            "เพราะเป็นการสแกนเฉพาะครึ่งแรกของพอร์ต (1-32768)",
            "เพราะต้องปิดเครื่องคอมพิวเตอร์ครึ่งหนึ่งขณะสแกน"
          ],
          correctAnswer: 1,
          explanation: "Nmap ส่ง RST ก่อนที่การเชื่อมต่อจะเสร็จสมบูรณ์ แอปพลิเคชันบนพอร์ตเป้าหมายจึงไม่ได้รับเหตุการณ์ Connected Event ส่งผลให้ไม่มีการลงบันทึกใน Application Logs ทั่วไป"
        },
        {
          id: "cy-4-q2",
          question: "หากต้องการสแกนบริการอย่าง DNS (พอร์ต 53) หรือ SNMP (พอร์ต 161) ด้วย Nmap ต้องใช้พารามิเตอร์ใด?",
          options: [
            "-sT",
            "-sS",
            "-sU",
            "-sP"
          ],
          correctAnswer: 2,
          explanation: "พารามิเตอร์ -sU ใช้สำหรับการทำ UDP Scan ซึ่งจำเป็นอย่างยิ่งสำหรับบริการที่ไม่ใช้การเชื่อมต่อแบบ TCP เช่น DNS, SNMP, DHCP, NTP"
        }
      ],
      labGuide: {
        title: "แล็บการทำ Network Reconnaissance และ Service Enumeration ด้วย Nmap",
        toolName: "Nmap Scanner",
        downloadUrl: "https://nmap.org/",
        objective: "สแกนเซิร์ฟเวอร์เป้าหมายที่ได้รับอนุญาต (scanme.nmap.org) เพื่อตรวจสอบพอร์ตที่เปิดอยู่ ระบุเวอร์ชันของบริการ และส่งออกรายงานผล",
        steps: [
          {
            title: "เปิด Terminal หรือ Command Prompt",
            detail: "เปิดหน้าต่างคำสั่งขึ้นมาและตรวจสอบความพร้อมของโปรแกรมด้วย nmap --version"
          },
          {
            title: "สแกนสำรวจพอร์ตพื้นฐาน",
            detail: "รันคำสั่ง nmap -sS -T4 scanme.nmap.org เพื่อดูรายการพอร์ตเปิดเบื้องต้น"
          },
          {
            title: "เจาะลึกเวอร์ชันของซอฟต์แวร์",
            detail: "รันคำสั่ง nmap -sV -p 80,22 scanme.nmap.org เพื่อสังเกตเวอร์ชันของ Apache และ OpenSSH"
          },
          {
            title: "ทดสอบสคริปต์สำรวจข้อมูลเบื้องต้น",
            detail: "รันคำสั่ง nmap --script banner scanme.nmap.org เพื่อดึงข้อความต้อนรับของระบบ"
          }
        ],
        verification: "ผลลัพธ์บนหน้าจอรายงานสถานะ PORT (เช่น 22/tcp open ssh, 80/tcp open http) พร้อมหมายเลขเวอร์ชันของซอฟต์แวร์ได้อย่างละเอียด"
      }
    },

    {
      id: "cyber-5",
      title: "ช่องโหว่เว็บ OWASP Top 10 ตอนที่ 1: Injection Flaws และการเจาะลึก SQL Injection (SQLi)",
      description: "วิเคราะห์ช่องโหว่อันดับต้นๆ ของโลก: In-band SQLi (Error-based, Union-based), Blind SQLi (Boolean-based, Time-based sleep), การบายพาสหน้าล็อกอิน ' OR '1'='1 และการแก้ไขเชิงสถาปัตยกรรมด้วย Prepared Statements",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# การวิเคราะห์และป้องกันช่องโหว่ SQL Injection (SQLi)

ตามมาตรฐาน **OWASP Top 10 (A03:2021 - Injection)** ช่องโหว่ประเภท Injection ยังคงเป็นภัยคุกคามที่มีความรุนแรงระดับวิกฤต (Critical Severity) เกิดจากการที่ระบบนำข้อมูลอินพุตที่ไม่น่าเชื่อถือ (Untrusted Input) จากผู้ใช้ไปต่อสตริงเข้ากับคำสั่งฐานข้อมูลโดยตรง ทำให้ตัวแปลคำสั่ง (Database Query Interpreter) ตีความข้อมูลของแฮกเกอร์เป็นโค้ดคำสั่ง

---

## 1. การจำแนกประเภทของการโจมตี SQL Injection

\`\`\`
                               ┌─────────────────────────────┐
                               │   SQL Injection Categories  │
                               └──────────────┬──────────────┘
               ┌──────────────────────────────┼──────────────────────────────┐
               ▼                              ▼                              ▼
      [ In-Band / Classic ]            [ Inferential / Blind ]         [ Out-of-Band (OOB) ]
   (เห็นข้อมูลในหน้าเว็บโดยตรง)       (เซิร์ฟเวอร์ไม่ส่งผลลัพธ์กลับมา)  (ขโมยข้อมูลผ่านช่องทางอื่น)
     ├─ Union-Based SQLi            ├─ Boolean-Based Blind          └─ DNS Exfiltration
     └─ Error-Based SQLi            └─ Time-Based Blind (SLEEP)
\`\`\`

---

## 2. กลไกการโจมตีและการบายพาสระบบตรวจสอบสิทธิ์

### 2.1 การข้ามหน้าล็อกอิน (Authentication Bypass)
โค้ดภาษา PHP/Node.js ที่มีช่องโหว่:
\`\`\`sql
SELECT * FROM users WHERE username = '$user_input' AND password = '$pass_input';
\`\`\`
หากแฮกเกอร์ป้อนในช่อง Username ว่า:
\`admin' OR 1=1 --\`

โครงสร้างคำสั่งภายในฐานข้อมูลจะกลายเป็น:
\`\`\`sql
SELECT * FROM users WHERE username = 'admin' OR 1=1 --' AND password = '...';
\`\`\`
- เงื่อนไข \`1=1\` มีค่าเป็นจริงเสมอ (\`TRUE\`)
- สัญลักษณ์คอมเมนต์ \`--\` (หรือ \`#\` ใน MySQL) จะตัดการตรวจสอบรหัสผ่านด้านหลังทิ้งไปทั้งหมด
- เซิร์ฟเวอร์จะคืนค่าเรคอร์ดของบัญชี \`admin\` ออกมา ทำให้แฮกเกอร์ล็อกอินสำเร็จทันทีโดยไม่ต้องทราบรหัสผ่าน!

### 2.2 การดึงข้อมูลข้ามตารางด้วย UNION-Based SQLi
เทคนิคการต่อคำสั่ง \`UNION SELECT\` เพื่อขโมยข้อมูลจากตารางลับอื่นๆ เช่น ตารางบัตรเครดิต หรือตารางเงินเดือนอาจารย์:
\`\`\`sql
' UNION SELECT null, username, password_hash, citizen_id FROM secret_admin_table --
\`\`\`

---

## 3. มาตรการแก้ไขที่ปลอดภัย 100%: Prepared Statements (Parameterized Queries)

> [!IMPORTANT]
> **หลักการทำงานของ Prepared Statements:**
> 1. แอปพลิเคชันส่งโครงสร้างคำสั่ง SQL ที่มีตัวแทน (\`?\` หรือ \`$1\`) ไปให้ฐานข้อมูลคอมไพล์เป็น **Execution Plan ล่วงหน้า**
> 2. ส่งค่าข้อมูลของผู้ใช้แยกต่างหากผ่าน Binary Protocol
> 3. ฐานข้อมูลจะปฏิบัติกับอินพุตนั้นในฐานะ **ข้อมูลดิบ (Literal Data)** เสมอ ไม่ว่าอินพุตจะมีเครื่องหมาย \`'\`, \`OR 1=1\`, หรือ \`DROP TABLE\` ก็ไม่สามารถหลุดออกไปเป็นคำสั่งได้เด็ดขาด!`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# การเปรียบเทียบโค้ดที่มีช่องโหว่ SQL Injection vs โค้ดที่ปลอดภัย
# ฐานข้อมูล: PostgreSQL / SQLite (Python sqlite3)
# =================================================================

import sqlite3

def init_mock_database():
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE users (id INT, username TEXT, password TEXT, role TEXT)")
    cursor.execute("INSERT INTO users VALUES (1, 'admin', 'SuperAdminSecretKey99', 'administrator')")
    cursor.execute("INSERT INTO users VALUES (2, 'student01', 'Pass1234', 'student')")
    conn.commit()
    return conn

conn = init_mock_database()

# -------------------------------------------------------------
# ❌ [ตัวอย่างที่ไม่ปลอดภัย] ใช้การต่อสตริง (String Concatenation / f-string)
# -------------------------------------------------------------
def vulnerable_login(conn, username, password):
    cursor = conn.cursor()
    # อันตรายอย่างยิ่ง! ข้อมูลผู้ใช้ถูกร้อยต่อเป็นโค้ด SQL โดยตรง
    query = f"SELECT id, username, role FROM users WHERE username = '{username}' AND password = '{password}'"
    print(f"[VULNERABLE QUERY] {query}")
    cursor.execute(query)
    return cursor.fetchone()

# -------------------------------------------------------------
# ✅ [ตัวอย่างที่ปลอดภัย 100%] ใช้ Prepared Statements (Parameterized Query)
# -------------------------------------------------------------
def secure_login(conn, username, password):
    cursor = conn.cursor()
    # โครงสร้างคำสั่งถูกคอมไพล์แยกขาดจากตัวแปร โดยใช้เครื่องหมาย ? เป็นพารามิเตอร์
    query = "SELECT id, username, role FROM users WHERE username = ? AND password = ?"
    cursor.execute(query, (username, password))
    return cursor.fetchone()

# ทดสอบ Payload การโจมตี Authentication Bypass
malicious_payload = "admin' OR 1=1 --"
dummy_password = "any_password"

print("--- 1. ทดสอบยิงใส่ฟังก์ชันที่มีช่องโหว่ ---")
user = vulnerable_login(conn, malicious_payload, dummy_password)
if user:
    print(f"-> แฮกสำเร็จ! ล็อกอินเป็น: {user[1]} (สิทธิ์: {user[2]})\n")

print("--- 2. ทดสอบยิงใส่ฟังก์ชันที่มีการป้องกันด้วย Parameterized Query ---")
safe_user = secure_login(conn, malicious_payload, dummy_password)
if safe_user:
    print("-> ล็อกอินสำเร็จ")
else:
    print("-> ระบบปฏิเสธการเข้าสู่ระบบอย่างปลอดภัย! ข้อมูลถูกมองเป็นเพียงตัวอักษรธรรมดา")`,
        description: "การเปรียบเทียบเชิงวิศวกรรมระหว่างโค้ดที่มีช่องโหว่ SQL Injection กับการป้องกันด้วย Prepared Statement"
      },
      quiz: [
        {
          id: "cy-5-q1",
          question: "เหตุใดการป้องกัน SQL Injection ด้วยการสร้าง Blacklist กรองคำว่า 'OR', 'SELECT' หรือเครื่องหมายขีดเดี่ยว (') จึงถือเป็นวิธีที่ล้มเหลวและไม่แนะนำในระดับสากล?",
          options: [
            "เพราะทำให้เซิร์ฟเวอร์กินแรมมากเกินไป",
            "เพราะแฮกเกอร์สามารถใช้วิธีหลบหลีก (WAF Bypass) เช่น การใช้อักขระ URL Encode, การสลับพิมพ์เล็ก-ใหญ่ (sElEcT), การคอมเมนต์คั่น (/* */) หรือการแปลงเลขฐานสอง",
            "เพราะฐานข้อมูลไม่รองรับภาษาอังกฤษ",
            "เพราะจะทำให้รหัสผ่านของผู้ใช้ยาวเกินกำหนด"
          ],
          correctAnswer: 1,
          explanation: "การพึ่งพา Blacklist เป็นแนวทางที่ไม่ปลอดภัยอย่างยิ่ง เพราะมีรูปแบบไวยากรณ์และเทคนิคการเข้ารหัส (Encoding) หลากหลายรูปแบบที่สามารถหลบหลีกฟิลเตอร์ได้ มาตรการเดียวที่ถูกต้องและเป็นมาตรฐานคือการใช้ Prepared Statements / Parameterized Queries"
        },
        {
          id: "cy-5-q2",
          question: "ในช่องโหว่แบบ Time-Based Blind SQL Injection แฮกเกอร์สามารถทราบได้อย่างไรว่าเงื่อนไขที่ตนเองทดสอบเป็นจริงหรือไม่?",
          options: [
            "สังเกตจากสีของหน้าเว็บที่เปลี่ยนไป",
            "สั่งให้ฐานข้อมูลหน่วงเวลาการตอบสนอง เช่น SLEEP(5) หรือ pg_sleep(5) แล้วจับเวลาที่เซิร์ฟเวอร์ส่งคำตอบกลับมา",
            "ดูจากเลข IP Address ของตนเอง",
            "ตรวจสอบไฟล์ Log ของเครื่องแฮกเกอร์เอง"
          ],
          correctAnswer: 1,
          explanation: "เมื่อหน้าเว็บไม่แสดงผลข้อความหรือ Error ใดๆ ออกมา แฮกเกอร์จะส่งเงื่อนไขที่พ่วงคำสั่งให้ฐานข้อมูลหยุดรอเวลา หากคำขอนั้นใช้เวลาโหลดนานขึ้นตามเวลาที่ระบุ แสดงว่าเงื่อนไขที่ป้อนเข้าไปมีค่าเป็นจริง (TRUE)"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบเจาะระบบและปิดช่องโหว่ SQL Injection",
        toolName: "Python 3 / SQLite Playground",
        downloadUrl: "https://www.python.org/",
        objective: "ทดลองรันสคริปต์ SQL Injection PoC บนคอมพิวเตอร์ ทำความเข้าใจผลลัพธ์ของ Authentication Bypass และแก้ไขโค้ดให้ปลอดภัยด้วย Prepared Statements",
        steps: [
          {
            title: "เตรียมสคริปต์ทดสอบ",
            detail: "สร้างไฟล์ sqli_lab.py และคัดลอกโค้ดตัวอย่างการเปรียบเทียบในบทเรียนลงในไฟล์"
          },
          {
            title: "รันการทดสอบฟังก์ชันที่มีช่องโหว่",
            detail: "รันคำสั่ง python sqli_lab.py สังเกตผลลัพธ์ที่แฮกเกอร์สามารถเจาะผ่านหน้าล็อกอินได้สำเร็จ"
          },
          {
            title: "ทดลองเปลี่ยน Payload",
            detail: "ลองแก้ไข malicious_payload เป็น ' UNION SELECT 1, 'hacker', 'password', 'admin' -- เพื่อดูพฤติกรรม"
          },
          {
            title: "ตรวจสอบความปลอดภัยของ Prepared Statement",
            detail: "สังเกตฟังก์ชัน secure_login ที่ใช้เครื่องหมาย ? และยืนยันว่าการป้อน Payload เดิมไม่สามารถบายพาสระบบได้อีกต่อไป"
          }
        ],
        verification: "ฟังก์ชัน secure_login จะต้องคืนค่า None เสมอเมื่อถูกโจมตีด้วย SQL Injection และจะยอมให้เข้าสู่ระบบได้ต่อเมื่อระบุ Username และ Password ที่ถูกต้องตรงตามฐานข้อมูลจริงเท่านั้น"
      }
    },

    {
      id: "cyber-6",
      title: "ช่องโหว่เว็บ OWASP Top 10 ตอนที่ 2: Cross-Site Scripting (XSS), CSRF และการเสริมเกราะด้วย Content Security Policy (CSP)",
      description: "ทำความเข้าใจภัยคุกคามฝั่ง Client-Side: Stored XSS, Reflected XSS, DOM-based XSS, การขโมย Session Cookies, การกำหนดค่า HttpOnly/Secure/SameSite และการวางสถาปัตยกรรม Content Security Policy (CSP) และ Sanitization",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การวิเคราะห์และป้องกันช่องโหว่ Cross-Site Scripting (XSS) และ CSRF

แตกต่างจาก SQL Injection ที่โจมตีไปยังฐานข้อมูลฝั่งเซิร์ฟเวอร์ ช่องโหว่ **Cross-Site Scripting (XSS)** เป็นการโจมตีฝั่งผู้ใช้งาน (Client-Side Attack) โดยผู้โจมตีสามารถฝังโค้ดอันตราย (มักเป็น JavaScript) เข้าไปในเว็บแอปพลิเคชัน เพื่อให้โค้ดนั้นถูกดาวน์โหลดและประมวลผลบนเบราว์เซอร์ของเหยื่อรายอื่นๆ ที่เปิดดูหน้านั้น

---

## 1. การจำแนกประเภทของช่องโหว่ XSS

\`\`\`
1. Stored XSS (Persistent)
   แฮกเกอร์โพสต์โค้ดอันตราย ──► บันทึกลงฐานข้อมูลเว็บ ──► ผู้ใช้ทั่วไปเปิดดูหน้ากระทู้ ──► โค้ด JavaScript รันบนเครื่องเหยื่อทุกคน!

2. Reflected XSS (Non-Persistent)
   แฮกเกอร์ส่งลิงก์หลอกลวง ──► เหยื่อกดลิงก์ ?search=<script> ──► เซิร์ฟเวอร์สะท้อนโค้ดกลับมาแสดงผล ──► โค้ดรันเฉพาะคนที่กดลิงก์

3. DOM-Based XSS
   โค้ดอันตรายถูกประมวลผลโดยตรงภายในเบราว์เซอร์ผ่าน JavaScript API ที่ไม่ปลอดภัย (เช่น innerHTML, eval()) โดยไม่ผ่านเซิร์ฟเวอร์
\`\`\`

---

## 2. ผลกระทบของการถูกโจมตีด้วย XSS

เมื่อโค้ด JavaScript ของแฮกเกอร์สามารถรันบนเบราว์เซอร์ของเหยื่อได้ แฮกเกอร์จะมีสิทธิ์เทียบเท่าตัวผู้ใช้ทุกประการ:
- **Session Hijacking:** แอบอ่าน \`document.cookie\` เพื่อขโมยโทเคนล็อกอินไปสวมรอย
- **Keystroke Logging:** ดักจับการพิมพ์แป้นพิมพ์ รหัสผ่าน หรือหมายเลขบัตรเครดิต
- **Forced Actions:** บังคับให้เบราว์เซอร์ของเหยื่อส่งคำขอโอนเงินหรือเปลี่ยนอีเมลเจ้าของบัญชี
- **Phishing Redirection:** สั่ง Redirect หน้าจอไปยังเว็บธนาคารปลอมเพื่อหลอกเอาข้อมูล

---

## 3. กลยุทธ์การป้องกัน XSS และ CSRF แบบหลายชั้น

### 3.1 การป้องกันระดับคุกกี้ (Cookie Hardening Flags)
\`\`\`http
Set-Cookie: session_token=xyz987token; Secure; HttpOnly; SameSite=Strict; Path=/
\`\`\`
- **\`HttpOnly\` (สำคัญที่สุด):** สั่งให้เบราว์เซอร์ **ห้ามโค้ด JavaScript (รวมถึง document.cookie) เข้าถึงคุกกี้นี้เด็ดขาด!** ป้องกันการขโมย Session จาก XSS ได้อย่างสิ้นเชิง
- **\`Secure\`:** ส่งคุกกี้ผ่านการเชื่อมต่อที่เข้ารหัสลับ HTTPS เท่านั้น
- **\`SameSite=Strict / Lax\`:** ป้องกันการโจมตีแบบ **Cross-Site Request Forgery (CSRF)** โดยปฏิเสธการส่งคุกกี้ข้ามโดเมนอื่น

### 3.2 การกำหนดนโยบายความปลอดภัยของเนื้อหา (Content Security Policy - CSP)
CSP เป็น HTTP Header ที่สั่งให้เบราว์เซอร์ควบคุมแหล่งที่มาของสคริปต์ที่อนุญาตให้รันได้:
\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-rAnd0m123'; object-src 'none';
\`\`\`
- \`default-src 'self'\`: อนุญาตให้โหลดไฟล์และภาพเฉพาะจากโดเมนของตนเองเท่านั้น
- \`script-src 'self'\`: ปฏิเสธการรันสคริปต์แบบ Inline (\`<script>alert(1)</script>\`) และปฏิเสธการโหลดสคริปต์จากภายนอก`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// การตั้งค่าความปลอดภัยป้องกัน XSS, CSRF และ Clickjacking
// สำหรับเซิร์ฟเวอร์ Node.js / Express ด้วย Helmet Middleware
// =================================================================

const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const app = express();
const window = new JSDOM('').window;
const purify = DOMPurify(window);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// 1. ใช้งาน Helmet เพื่อเปิด HTTP Security Headers ระดับองค์กร
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"], // ปิดกั้นการรัน Inline Script และสคริปต์แฝงจากภายนอก
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"], // ป้องกัน Flash หรือปลั๊กอินโบราณ
        upgradeInsecureRequests: [], // บังคับอัปเกรดเป็น HTTPS เสมอ
      },
    },
    crossOriginEmbedderPolicy: true,
  })
);

// 2. การสร้าง Session Cookie ที่ปลอดภัยสูงสุด (ป้องกัน XSS ขโมยคุกกี้)
app.post('/api/login', (req, res) => {
  // ตรวจสอบ Username/Password สำเร็จ...
  const sessionToken = "secret_crypto_session_token_2026";

  res.cookie('auth_token', sessionToken, {
    httpOnly: true, // ✅ ห้าม JavaScript เข้าถึง document.cookie
    secure: true,   // ✅ บังคับส่งผ่าน HTTPS เท่านั้น
    sameSite: 'strict', // ✅ ป้องกันการโจมตี CSRF ข้ามเว็บ
    maxAge: 3600000 // หมดอายุใน 1 ชั่วโมง
  });

  res.json({ success: true, message: "เข้าสู่ระบบสำเร็จ" });
});

// 3. การทำ Context-aware Output Sanitization สำหรับข้อความที่อนุญาต HTML
app.post('/api/comment', (req, res) => {
  const userRawComment = req.body.comment;
  
  // ล้างโค้ดอันตรายออก เช่น <script>, onload=, onerror= แต่เก็บแท็ก <b> <i> ไว้ได้
  const cleanComment = purify.sanitize(userRawComment);
  
  console.log("ข้อความที่ผ่านการล้างพิษ:", cleanComment);
  res.send({ status: "บันทึกสำเร็จ", display: cleanComment });
});

app.listen(3000, () => console.log("Secure server listening on port 3000"));`,
        description: "สถาปัตยกรรม Express.js ป้องกัน XSS ด้วย Helmet CSP, HttpOnly Cookies และ DOMPurify Sanitization"
      },
      quiz: [
        {
          id: "cy-6-q1",
          question: "แอตทริบิวต์ใดใน HTTP Set-Cookie Header ที่มีความสำคัญสูงสุดในการป้องกันไม่ให้ผู้โจมตีที่ใช้ช่องโหว่ XSS ขโมยโทเคน Session ของผู้ใช้ไปได้?",
          options: [
            "Path=/",
            "HttpOnly",
            "Max-Age",
            "Domain"
          ],
          correctAnswer: 1,
          explanation: "เมื่อคุกกี้มีแฟล็ก HttpOnly เบราว์เซอร์จะบล็อกไม่ให้สคริปต์ฝั่ง Client-Side (ผ่าน document.cookie) เข้าถึงคุกกี้นี้โดยเด็ดขาด แม้ผู้โจมตีจะยิง XSS สำเร็จก็ไม่สามารถขโมยคุกกี้ไปได้"
        },
        {
          id: "cy-6-q2",
          question: "นโยบาย Content Security Policy (CSP) ช่วยสกัดกั้นการโจมตีแบบ XSS ได้อย่างไร?",
          options: [
            "โดยการจำกัดขนาดไฟล์ที่ผู้ใช้อัปโหลด",
            "โดยการสั่งให้เบราว์เซอร์ปฏิเสธการรันโค้ดสคริปต์แบบ Inline และบล็อกการดาวน์โหลดสคริปต์จากโดเมนแปลกปลอมที่ไม่ได้ระบุไว้ใน Whitelist",
            "โดยการเข้ารหัสฮาร์ดดิสก์ของเครื่องเซิร์ฟเวอร์",
            "โดยการตัดการเชื่อมต่ออินเทอร์เน็ตทันทีที่พบไวรัส"
          ],
          correctAnswer: 1,
          explanation: "CSP อนุญาตให้เจ้าของระบบกำหนดแหล่งที่มาของสคริปต์ที่ปลอดภัย หากแฮกเกอร์แอบฝังโค้ด <script> หรือโหลดสคริปต์จาก evil-hacker.com ตัวเบราว์เซอร์จะปฏิเสธการทำงานของโค้ดนั้นทันที"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบกลไกป้องกัน XSS ด้วยคุกกี้ HttpOnly และ Content Security Policy",
        toolName: "Chrome DevTools Console",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "ทดลองสร้างคุกกี้ทั้งแบบธรรมดาและแบบมีแฟล็ก HttpOnly จากนั้นใช้คำสั่ง JavaScript พิสูจน์ว่า HttpOnly สามารถป้องกันการขโมยข้อมูลได้จริง",
        steps: [
          {
            title: "เปิดเว็บและเรียกดู DevTools",
            detail: "เปิด Google Chrome กดปุ่ม F12 เพื่อเปิดหน้าต่าง DevTools แล้วไปที่แท็บ Console"
          },
          {
            title: "สร้างคุกกี้ธรรมดาผ่าน JavaScript",
            detail: "พิมพ์คำสั่ง: document.cookie = \"normal_token=12345; path=/\""
          },
          {
            title: "ทดลองอ่านค่าคุกกี้",
            detail: "พิมพ์คำสั่ง: console.log(document.cookie) จะสังเกตเห็นค่า normal_token ปรากฏขึ้นมาอย่างชัดเจน"
          },
          {
            title: "ตรวจสอบแท็บ Application Storage",
            detail: "ไปที่แท็บ Application > Cookies สังเกตคอลัมน์ HttpOnly ของคุกกี้ระบบ เช่น session ที่มีเครื่องหมายถูก จะไม่สามารถเข้าถึงผ่าน document.cookie ได้"
          }
        ],
        verification: "ในแท็บ Console เมื่อพิมพ์ document.cookie จะต้องไม่ปรากฏชื่อหรือค่าของคุกกี้ที่มีแฟล็ก HttpOnly อยู่เลยแม้แต่น้อย"
      }
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "cyber-7",
      title: "การทดสอบความปลอดภัยเว็บด้วย Burp Suite: Intercept, Repeater, Intruder และช่องโหว่ IDOR",
      description: "ติดตั้งและคอนฟิก Burp Suite CA Certificate, การดักจับและปรับแต่งพารามิเตอร์ HTTP Requests กลางอากาศ, การทดสอบค้นหาช่องโหว่ Broken Access Control / Insecure Direct Object References (IDOR) และการตั้งค่า RBAC",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การทดสอบความมั่นคงปลอดภัยเว็บแอปพลิเคชันด้วย Burp Suite

**Burp Suite** พัฒนาโดย PortSwigger เป็นชุดเครื่องมือมาตรฐานระดับโลกสำหรับผู้ตรวจสอบความมั่นคงปลอดภัยเว็บแอปพลิเคชัน (Web Application Penetration Tester) ทำหน้าที่เป็น **Man-in-the-Middle (MitM) Proxy** ที่ดักอยู่ระหว่างเบราว์เซอร์และเซิร์ฟเวอร์เป้าหมาย

---

## 1. ผังสถาปัตยกรรม Intercepting Proxy

\`\`\`
[ เว็บเบราว์เซอร์ ] 
        ▲
        │ 1. ส่งคำขอ HTTP/HTTPS Request
        ▼
┌───────────────────────────────────────────────┐
│              Burp Suite Proxy                 │ ◄── [นักทดสอบเจาะระบบ]
│  - Intercept (หยุดคำขอไว้เพื่อดัดแปลงค่า)      │     - ตรวจสอบค่าพารามิเตอร์
│  - Repeater (ส่งคำขอซ้ำเพื่อทดสอบเงื่อนไข)   │     - ปรับเปลี่ยน User ID
│  - Intruder (สุ่มค่า Fuzzing อัตโนมัติ)       │     - ทดสอบ Bypass Logic
└───────────────────────────────────────────────┘
        ▲
        │ 2. ปล่อยคำขอที่ดัดแปลงแล้วไปยังเซิร์ฟเวอร์
        ▼
[ เว็บเซิร์ฟเวอร์เป้าหมาย (Web Application & API) ]
\`\`\`

---

## 2. เจาะลึกช่องโหว่การควบคุมสิทธิ์ล้มเหลว (Broken Access Control & IDOR)

จากสถิติ **OWASP Top 10 ช่องโหว่ Broken Access Control ได้ทะยานขึ้นเป็นอันดับที่ 1 (A01:2021)**
หนึ่งในรูปแบบที่พบบ่อยและร้ายแรงที่สุดคือ **Insecure Direct Object References (IDOR)**:
เกิดจากการที่ระบบเปิดให้ผู้ใช้เข้าถึงข้อมูลวัตถุ (Object) เช่น ไฟล์ ใบเสร็จ หรือข้อมูลประวัตินักศึกษา โดยอ้างอิงผ่าน **ตัวระบุโดยตรง (เช่น Database ID หรือ Running Number)** โดยที่ระบบฝั่งเซิร์ฟเวอร์ไม่ได้ทำการตรวจสอบสิทธิ์ของผู้ร้องขอ

\`\`\`http
GET /api/documents/download?invoice_id=1050 HTTP/1.1
Host: school-billing.com
Cookie: session_token=student_somchai_session
\`\`\`
**การทดสอบช่องโหว่ด้วย Burp Suite Repeater:**
1. นักทดสอบดักจับคำขอข้างต้น ส่งเข้าไปในแท็บ **Repeater**
2. แก้ไขพารามิเตอร์ \`invoice_id=1050\` เป็น \`invoice_id=1049\` (ของนักศึกษาคนอื่น) หรือ \`invoice_id=1\` (ของผู้บริหาร)
3. กดปุ่ม **Send**:
   - ❌ **มีช่องโหว่ (Vulnerable):** เซิร์ฟเวอร์ส่งข้อมูลใบเสร็จของคนอื่นกลับมา (HTTP 200 OK)
   - ✅ **ปลอดภัย (Secure):** เซิร์ฟเวอร์ตอบกลับว่า **HTTP 403 Forbidden** หรือ **HTTP 404 Not Found** เนื่องจากโทเคนล็อกอินไม่ได้เป็นเจ้าของใบเสร็จนี้

---

## 3. สถาปัตยกรรมการแก้ปัญหา IDOR และการควบคุมสิทธิ์ที่ถูกต้อง

1. **ห้ามเชื่อถืออินพุตจาก Client:** ตรวจสอบจาก Session ฝั่งเซิร์ฟเวอร์เสมอว่า \`currentUser.id === document.owner_id\` หรือไม่
2. **การใช้งาน Indirect Reference Map หรือ UUID v4:** แทนที่จะใช้เลขออโต้รันนิ่งลำดับ (\`1, 2, 3\`) ให้เปลี่ยนไปใช้รหัสระบุแบบสุ่มเข้ารหัสยาว 128 บิต (\`UUID v4\` เช่น \`e4eaaaf2-d142-11e1-b3e4-080027620cdd\`) ซึ่งทำให้ผู้โจมตีไม่สามารถเดาหรือสุ่มหมายเลขลำดับถัดไปได้`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// ตัวอย่างการเขียน Middleware ป้องกันช่องโหว่ IDOR / Broken Access Control
// แพลตฟอร์ม: Node.js, Express, ฐานข้อมูล PostgreSQL / Prisma
// =================================================================

const express = require('express');
const app = express();

// จำลอง Middleware ยืนยันตัวตนผู้ใช้งาน (Authentication)
function authenticateUser(req, res, next) {
  // สกัดข้อมูลจาก JWT Token ที่ลงลายมือชื่อดิจิทัลอย่างถูกต้อง
  req.user = { id: 105, role: 'student', name: 'Somchai' };
  next();
}

// -------------------------------------------------------------
// ❌ ฟังก์ชันที่มีช่องโหว่ IDOR (เชื่อถือพารามิเตอร์ ID ที่ส่งมาตรงๆ)
// -------------------------------------------------------------
app.get('/vulnerable/student/:id/grades', authenticateUser, async (req, res) => {
  const targetStudentId = req.params.id;
  // บกพร่อง: ดึงข้อมูลผลการเรียนโดยไม่ตรวจสอบเลยว่าคนขอดูคือเจ้าของ ID นี้หรือไม่!
  const grades = await db.grades.findMany({ where: { studentId: targetStudentId } });
  res.json(grades);
});

// -------------------------------------------------------------
// ✅ ฟังก์ชันที่ปลอดภัย: ตรวจสอบสิทธิ์ความเป็นเจ้าของ (Authorization Check)
// -------------------------------------------------------------
app.get('/secure/student/:id/grades', authenticateUser, async (req, res) => {
  const targetStudentId = parseInt(req.params.id, 10);
  const currentUser = req.user;

  // กฎการควบคุมสิทธิ์: อนุญาตเฉพาะเจ้าของข้อมูล หรือผู้ใช้งานที่มีบทบาท 'teacher' / 'admin' เท่านั้น
  const isOwner = currentUser.id === targetStudentId;
  const isAuthorizedStaff = currentUser.role === 'teacher' || currentUser.role === 'admin';

  if (!isOwner && !isAuthorizedStaff) {
    // บันทึก Log การพยายามเข้าถึงข้ามสิทธิ์เพื่อการตรวจสอบความปลอดภัย (Security Audit)
    console.warn(\`[SECURITY ALERT] บัญชี User ID \${currentUser.id} พยายามแอบดูข้อมูลของ ID \${targetStudentId}\`);
    return res.status(403).json({
      error: "Forbidden",
      message: "คุณไม่มีสิทธิ์เข้าถึงข้อมูลผลการเรียนของนักศึกษาท่านนี้"
    });
  }

  const grades = await db.grades.findMany({ where: { studentId: targetStudentId } });
  res.json(grades);
});`,
        description: "การออกแบบระบบตรวจสอบสิทธิ์ระดับ Object-Level (Authorization) ป้องกันช่องโหว่ IDOR บน Express API"
      },
      quiz: [
        {
          id: "cy-7-q1",
          question: "ช่องโหว่ Insecure Direct Object References (IDOR) เกิดจากสาเหตุใดเป็นหลัก?",
          options: [
            "เซิร์ฟเวอร์ไม่ได้ติดตั้งโปรแกรมแอนตี้ไวรัส",
            "แอปพลิเคชันนำตัวระบุวัตถุ (เช่น ID ใน URL) มาเปิดให้ผู้ใช้เข้าถึงข้อมูลโดยตรง โดยขาดการตรวจสอบสิทธิ์ฝั่งเซิร์ฟเวอร์ว่าผู้ร้องขอเป็นเจ้าของข้อมูลนั้นจริงหรือไม่",
            "การใช้สายแลนที่ไม่มีฉนวนป้องกันสัญญาณรบกวน",
            "ผู้ใช้ลืมปิดเบราว์เซอร์หลังเลิกงาน"
          ],
          correctAnswer: 1,
          explanation: "IDOR เกิดขึ้นเมื่อแอปพลิเคชันพึ่งพาการส่ง ID จากผู้ใช้โดยตรงโดยไม่มีการตรวจสอบ Authorization ที่รัดกุม ทำให้แฮกเกอร์เพียงแค่แก้ไขเลข ID ในคำขอ HTTP ก็สามารถเข้าดูหรือแก้ไขข้อมูลของเหยื่อรายอื่นได้ทันที"
        },
        {
          id: "cy-7-q2",
          question: "ในโปรแกรม Burp Suite ฟังก์ชัน Repeater มีวัตถุประสงค์หลักเพื่อสิ่งใด?",
          options: [
            "ใช้บันทึกวิดีโอหน้าจอขณะแฮก",
            "ใช้สำหรับการส่งคำขอ HTTP เดิมซ้ำๆ พร้อมแก้ไขค่าพารามิเตอร์ เพื่อทดสอบและวิเคราะห์การตอบสนองของเซิร์ฟเวอร์ได้อย่างสะดวกรวดเร็ว",
            "ใช้ดาวน์โหลดไฟล์ภาพทั้งหมดในเว็บเป้าหมาย",
            "ใช้สแกนไวรัสในคอมพิวเตอร์ของตนเอง"
          ],
          correctAnswer: 1,
          explanation: "Repeater เป็นเครื่องมือสำหรับทดสอบคำขอแบบแมนนวล ช่วยให้นักทดสอบปรับเปลี่ยน Header, Cookie หรือ Payload ใน Body แล้วกดส่งซ้ำเพื่อสังเกตการเปลี่ยนแปลงของผลลัพธ์ได้อย่างแม่นยำ"
        }
      ],
      labGuide: {
        title: "แล็บดักจับคำขอและทดสอบช่องโหว่ IDOR ด้วย Burp Suite Community",
        toolName: "Burp Suite Community",
        downloadUrl: "https://portswigger.net/burp/communitydownload",
        objective: "เปิดใช้งาน Burp Proxy ดักจับคำขอส่งข้อมูลผ่านเบราว์เซอร์ ส่งคำขอเข้าแท็บ Repeater และทดลองแก้ไขค่า ID เพื่อทดสอบกลไก Authorization",
        steps: [
          {
            title: "เปิด Burp Suite และเริ่มเบราว์เซอร์ในตัว",
            detail: "เปิด Burp Suite Community เลือกแท็บ Proxy > คลิกปุ่ม 'Open Browser' เพื่อเปิดเบราว์เซอร์ที่คอนฟิกเชื่อมต่อไว้แล้ว"
          },
          {
            title: "เปิดโหมด Intercept",
            detail: "ตรวจสอบว่าปุ่ม 'Intercept is on' ในแท็บ Proxy ทำงานอยู่"
          },
          {
            title: "ทำรายการบนหน้าเว็บ",
            detail: "พิมพ์ URL และเข้าใช้งานเว็บ เมื่อเกิดการส่งคำขอ หน้าต่าง Burp Suite จะหยุดคำขอนั้นไว้กลางอากาศ"
          },
          {
            title: "ส่งคำขอเข้าแท็บ Repeater",
            detail: "กดคีย์ลัด Ctrl + R (หรือคลิกขวาเลือก Send to Repeater) จากนั้นสลับไปที่แท็บ Repeater"
          },
          {
            title: "แก้ไขพารามิเตอร์และกดส่ง",
            detail: "ทดลองแก้ไขค่าใน URL หรือ Body เช่น เปลี่ยน id=1 เป็น id=2 แล้วกดปุ่ม Send เพื่อวิเคราะห์ Response"
          }
        ],
        verification: "ในแท็บ Repeater จะต้องมองเห็นคำตอบกลับ HTTP Response พร้อม Headers และ Body จากเซิร์ฟเวอร์เป้าหมายอย่างชัดเจน"
      }
    },

    {
      id: "cyber-8",
      title: "ระเบียบวิธีทดสอบเจาะระบบ (PTES), การประเมินคะแนนความรุนแรง CVSS v3.1 และข้อกฎหมาย พ.ร.บ. ไซเบอร์ / PDPA",
      description: "ทำความเข้าใจ 7 ขั้นตอนของมาตรฐานการทดสอบเจาะระบบ PTES, การคำนวณระดับความเสี่ยงตามมาตรฐานสากล CVSS v3.1/v4.0, หนังสือยินยอมเข้าทดสอบ (Rules of Engagement & Letter of Authorization) และมาตราสำคัญใน พ.ร.บ. คอมพิวเตอร์ พ.ศ. 2560 และ PDPA",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# ระเบียบวิธีทดสอบเจาะระบบ (Penetration Testing Methodology) และจรรยาบรรณวิชาชีพ

ความแตกต่างเพียงประการเดียวระหว่าง **แฮกเกอร์อาชญากร (Black Hat Hacker)** และ **ผู้เชี่ยวชาญการทดสอบเจาะระบบอย่างมีจริยธรรม (Ethical Hacker / White Hat)** คือ **"ความยินยอมเป็นลายลักษณ์อักษร (Authorized Consent)"** และ **"ขอบเขตการปฏิบัติงานตามกรอบกฎหมาย"**

---

## 1. วงจร 7 ขั้นตอนมาตรฐานการทดสอบเจาะระบบ (PTES Standard)

\`\`\`
1. Pre-engagement Interactions  ──► กำหนดขอบเขต (Scope), กฎการทดสอบ (RoE), เซ็นสัญญา NDA & LoA
               │
2. Intelligence Gathering        ──► รวบรวมข้อมูลแบบ Passive/Active Reconnaissance, OSINT
               │
3. Threat Modeling               ──► วิเคราะห์สถาปัตยกรรมและกำหนดโมเดลภัยคุกคามเป้าหมาย
               │
4. Vulnerability Analysis        ──► สแกนและค้นหาช่องโหว่ทั้งแบบใช้เครื่องมือและวิเคราะห์ด้วยมือ
               │
5. Exploitation                  ──► ยืนยันช่องโหว่ด้วยการเข้าถึงระบบตามขอบเขต (Proof of Concept)
               │
6. Post Exploitation             ──► ประเมินผลกระทบต่อธุรกิจ (Business Impact) และข้อมูลสำคัญ
               │
7. Reporting                     ──► จัดทำรายงานสรุปผู้บริหารและแผนผังแนวทางแก้ไข (Remediation)
\`\`\`

---

## 2. ระบบประเมินคะแนนความรุนแรงของช่องโหว่ CVSS v3.1 (Common Vulnerability Scoring System)

คะแนน CVSS มีช่วงตั้งแต่ **0.0 ถึง 10.0** แบ่งออกเป็น 5 ระดับความรุนแรง:
- **0.0:** ไม่มีผลกระทบ (None)
- **0.1 - 3.9:** ระดับต่ำ (Low)
- **4.0 - 6.9:** ระดับปานกลาง (Medium)
- **7.0 - 8.9:** ระดับสูง (High)
- **9.0 - 10.0:** **ระดับวิกฤต (Critical)**

### องค์ประกอบคำนวณ CVSS Base Score Metrics:
1. **Attack Vector (AV):** เส้นทางการโจมตี (Network \`[N]\`, Adjacent \`[A]\`, Local \`[L]\`, Physical \`[P]\`)
2. **Attack Complexity (AC):** ความซับซ้อนในการโจมตี (Low \`[L]\`, High \`[H]\`)
3. **Privileges Required (PR):** ระดับสิทธิ์ที่ผู้โจมตีก่อนหน้าต้องมี (None \`[N]\`, Low \`[L]\`, High \`[H]\`)
4. **User Interaction (UI):** ต้องอาศัยเหยื่อมีส่วนร่วมหรือไม่ (None \`[N]\`, Required \`[R]\`)
5. **Scope (S):** ผลกระทบลุกลามข้ามระบบหรือไม่ (Unchanged \`[U]\`, Changed \`[C]\`)
6. **CIA Impact:** ผลกระทบต่อ Confidentiality \`[C]\`, Integrity \`[I]\`, Availability \`[A]\` (None, Low, High)

---

## 3. กฎหมายดิจิทัลและบทลงโทษที่นักพัฒนาต้องทราบ

### 3.1 พระราชบัญญัติว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ (ฉบับที่ 2) พ.ศ. 2560
- **มาตรา 5:** การเข้าถึงระบบคอมพิวเตอร์ของผู้อื่นที่มีมาตรการป้องกันโดยมิชอบ $\\implies$ จำคุกไม่เกิน 6 เดือน หรือปรับไม่เกิน 10,000 บาท
- **มาตรา 7:** การเข้าถึงข้อมูลคอมพิวเตอร์ของผู้อื่นโดยมิชอบ $\\implies$ จำคุกไม่เกิน 2 ปี หรือปรับไม่เกิน 40,000 บาท
- **มาตรา 9 - 10:** การแก้ไข ดัดแปลง ทำลายข้อมูล หรือรบกวนขัดขวางระบบคอมพิวเตอร์ของผู้อื่น (เช่น ปล่อยไวรัส หรือยิง DDoS) $\\implies$ จำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 100,000 บาท
- **มาตรา 12:** หากการกระทำความผิดก่อให้เกิดความเสียหายต่อโครงสร้างพื้นฐานสำคัญของประเทศ $\\implies$ จำคุกตั้งแต่ 1 ปี ถึง 10 ปี หรือสูงสุดถึงจำคุกตลอดชีวิต

### 3.2 พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
กำหนดให้ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller) ต้องมี **มาตรการรักษาความมั่นคงปลอดภัยที่เหมาะสม (Appropriate Security Measures)** เพื่อป้องกันการสูญหาย การเข้าถึง ทำลาย ใช้ ดัดแปลง หรือเปิดเผยข้อมูลโดยมิชอบ หากระบบถูกแฮกและข้อมูลรั่วไหลเนื่องจากละเลยมาตรการความปลอดภัย อาจถูกลงโทษปรับทางปกครองสูงสุดถึง 5 ล้านบาท`,
      codeExample: {
        language: "markdown",
        code: `# =================================================================
# ตัวอย่างโครงสร้างรายงานสรุปผลการทดสอบเจาะระบบ (Penetration Test Report)
# มาตรฐานสากลสำหรับนำเสนอผู้บริหารและทีมพัฒนาระบบ
# =================================================================

# รายงานผลการประเมินความมั่นคงปลอดภัย (Security Assessment Report)
- **ชื่อโครงการ:** การทดสอบความมั่นคงปลอดภัยระบบทะเบียนออนไลน์ (IT Academy RMS)
- **วันที่ทดสอบ:** 29 กันยายน 2026
- **ผู้ประเมิน:** ทีมตรวจสอบความมั่นคงปลอดภัยสารสนเทศ IT Academy
- **ขอบเขตการทดสอบ (Scope):** เว็บแอปพลิเคชัน https://rms.itacademy.local (IP: 192.168.10.50)

---

## 1. บทสรุปสำหรับผู้บริหาร (Executive Summary)
ทีมประเมินได้ดำเนินการทดสอบเจาะระบบแบบ Gray Box ระหว่างวันที่ 25-28 กันยายน 2026 ตามมาตรฐาน PTES
ผลการทดสอบพบช่องโหว่ความปลอดภัยทั้งหมด **5 รายการ** แบ่งตามระดับความรุนแรงดังนี้:
- ระดับวิกฤต (Critical): 1 รายการ
- ระดับสูง (High): 1 รายการ
- ระดับปานกลาง (Medium): 2 รายการ
- ระดับต่ำ (Low): 1 รายการ

---

## 2. รายละเอียดข้อตรวจพบ (Finding Detail #01)
- **ชื่อช่องโหว่:** SQL Injection ในโมดูลค้นหาประวัตินักศึกษา (Search Module)
- **ระดับความรุนแรง:** **CRITICAL (คะแนน CVSS v3.1: 9.8)**
- **เวกเตอร์ CVSS:** CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
- **ตำแหน่งที่พบ (Location):** POST /api/students/search (พารามิเตอร์: 'keyword')

### คำอธิบายผลกระทบ (Business Impact):
ผู้โจมตีจากภายนอกโดยไม่จำเป็นต้องล็อกอิน สามารถส่งคำสั่ง SQL ที่ประดิษฐ์ขึ้นเป็นพิเศษเพื่อขโมยฐานข้อมูลทั้งหมดของสถานศึกษา (รวมถึงรหัสผ่านและข้อมูลส่วนบุคคลตามกฎหมาย PDPA) ตลอดจนสามารถแก้ไขผลการเรียนของนักศึกษาได้

### ขั้นตอนการทำซ้ำ (Proof of Concept):
1. ส่งคำขอ HTTP POST ไปยัง /api/students/search พร้อม Payload:
   \`keyword=' UNION SELECT null, username, password_hash, citizen_id FROM users --\`
2. ระบบตอบกลับข้อมูลผู้ดูแลระบบและรหัสผ่านทั้งหมดในรูปแบบ JSON

### คำแนะนำในการแก้ไข (Remediation Roadmap):
1. **แก้ไขโค้ดทันที (Immediate Fix):** ปรับเปลี่ยนคำสั่งค้นหาในไฟล์ \`src/models/student.js\` ให้ใช้ **Parameterized Queries (Prepared Statements)**
2. **การป้องกันระยะยาว (Long-term):** เปิดใช้งาน Web Application Firewall (WAF) เพื่อช่วยตรวจจับและสกัดกั้นอินพุตที่ผิดปกติ`,
        description: "โครงสร้างรายงานการทดสอบเจาะระบบระดับมืออาชีพ พร้อมเกณฑ์การประเมินคะแนน CVSS v3.1"
      },
      quiz: [
        {
          id: "cy-8-q1",
          question: "เอกสารทางกฎหมายใดมีความสำคัญสูงสุดที่นักทดสอบเจาะระบบ (Penetration Tester) ต้องได้รับลายเซ็นยินยอมจากผู้บริหารขององค์กรก่อนเริ่มลงมือทดสอบเสมอ?",
          options: [
            "ใบเสร็จรับเงินมัดจำ",
            "หนังสืออนุญาตการเข้าทดสอบเจาะระบบเป็นลายลักษณ์อักษร (Letter of Authorization / Rules of Engagement)",
            "สำเนาบัตรประชาชนของโปรแกรมเมอร์",
            "คู่มือผังวงจรคอมพิวเตอร์"
          ],
          correctAnswer: 1,
          explanation: "หนังสืออนุญาตอย่างเป็นทางการ (Letter of Authorization หรือ 'Get-Out-of-Jail-Free Card') เป็นหลักฐานทางกฎหมายชิ้นสำคัญที่สุดที่คุ้มครองนักทดสอบจากการถูกดำเนินคดีตาม พ.ร.บ. คอมพิวเตอร์ หรือคดีอาญาฐานบุกรุกระบบ"
        },
        {
          id: "cy-8-q2",
          question: "ตามเกณฑ์มาตรฐาน CVSS v3.1 ช่องโหว่ที่ถูกจัดให้อยู่ในระดับ 'CRITICAL' จะต้องมีคะแนน Base Score อยู่ในช่วงใด?",
          options: [
            "4.0 - 6.9",
            "7.0 - 8.9",
            "9.0 - 10.0",
            "10.0 ขึ้นไปเท่านั้น"
          ],
          correctAnswer: 2,
          explanation: "คะแนน CVSS v3.1 มีค่าสูงสุดคือ 10.0 โดยช่วงคะแนน 9.0 - 10.0 จะจัดอยู่ในระดับวิกฤต (Critical) ซึ่งเป็นช่องโหว่ที่สามารถโจมตีได้จากระยะไกลโดยไม่ต้องมีสิทธิ์ใดๆ และสร้างความเสียหายต่อข้อมูลอย่างมหาศาล"
        }
      ],
      labGuide: {
        title: "แล็บการคำนวณคะแนนความรุนแรงของช่องโหว่ด้วย CVSS v3.1 Calculator",
        toolName: "FIRST CVSS Calculator",
        downloadUrl: "https://www.first.org/cvss/calculator/3.1",
        objective: "ฝึกฝนการวิเคราะห์คุณสมบัติของช่องโหว่ SQL Injection และคำนวณคะแนนตามเมตริก Base Score ของมาตรฐาน FIRST CVSS v3.1",
        steps: [
          {
            title: "เปิดเว็บเครื่องคำนวณ CVSS",
            detail: "เปิดเบราว์เซอร์ไปที่ https://www.first.org/cvss/calculator/3.1"
          },
          {
            title: "กำหนดเมตริกช่องโหว่ SQLi",
            detail: "เลือก Attack Vector: Network (N), Attack Complexity: Low (L), Privileges Required: None (N), User Interaction: None (N), Scope: Unchanged (U)"
          },
          {
            title: "กำหนดผลกระทบด้าน CIA",
            detail: "เลือก Confidentiality: High (H), Integrity: High (H), Availability: High (H)"
          },
          {
            title: "วิเคราะห์คะแนนที่ได้",
            detail: "สังเกตคะแนนรวมที่คำนวณได้ 9.8 CRITICAL พร้อมบันทึกสตริง Vector: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
          }
        ],
        verification: "ผลการคำนวณบนหน้าจอจะต้องแสดงระดับความรุนแรงเป็นแถบสีแดง 'CRITICAL' พร้อมคะแนน Base Score เท่ากับ 9.8 อย่างถูกต้อง"
      }
    },

    {
      id: "cyber-9",
      title: "โปรเจกต์ใหญ่: การเสริมเกราะป้องกันเซิร์ฟเวอร์ (Server Hardening), ระบบตรวจจับบุกรุก และ Fail2ban",
      description: "สวมบทบาท Blue Team ป้องกันระบบระดับองค์กร: การปิดตายรหัสผ่านเปลี่ยนมาใช้ SSH Ed25519 Keys, การตั้งค่าไฟร์วอลล์ UFW แบบ Least Access, การติดตั้งระบบเฝ้าระวังและบล็อก IP ผู้โจมตีอัตโนมัติด้วย Fail2ban และการตรวจสอบความปลอดภัยตาม CIS Benchmarks",
      duration: "80 นาที",
      level: "ขั้นสูง",
      content: `# การเสริมเกราะป้องกันระบบเซิร์ฟเวอร์ (Production Linux Hardening)

ในบทเรียนสุดท้ายนี้ เราจะเปลี่ยนบทบาทมาเป็น **Blue Team (ทีมความมั่นคงปลอดภัยฝั่งตั้งรับ)** เพื่อนำองค์ความรู้ทั้งหมดมาประยุกต์ใช้ในการปรับแต่งระบบปฏิบัติการ Linux Server ให้มีความปลอดภัยสูงสุดตามมาตรฐาน **CIS Benchmarks (Center for Internet Security)**

---

## 1. สถาปัตยกรรมการตั้งรับแบบผสมผสาน (Integrated Defense Architecture)

\`\`\`
[ อินเทอร์เน็ต / ผู้โจมตีภายนอก ]
               │
               ▼ (พอร์ต 80, 443, 22)
┌────────────────────────────────────────────────────────┐
│  1. UFW Firewall: บล็อกทุกพอร์ต ยกเว้นที่อนุญาต        │
└──────────────────────────────┬─────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────┐
│  2. OpenSSH Daemon: ปิดรหัสผ่าน, ใช้เฉพาะ Ed25519 Keys │
└──────────────────────────────┬─────────────────────────┘
                               │
               (หากมีการพยายาม Brute-force ซ้ำๆ)
                               │
                               ▼
┌────────────────────────────────────────────────────────┐
│  3. Fail2ban Engine: วิเคราะห์ /var/log/auth.log       │
│     -> สั่ง UFW แบน IP ผู้โจมตีอัตโนมัติ 24 ชม.        │
└────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. การปรับแต่งความปลอดภัยของบริการ SSH (/etc/ssh/sshd_config)

บริการ SSH (พอร์ต 22) เป็นเป้าหมายอันดับหนึ่งที่ถูกบ็อตเน็ตทั่วโลกสแกนและยิงรหัสผ่านตลอด 24 ชั่วโมง การปรับแต่งที่ถูกต้องมีดังนี้:

| ค่าคอนฟิก | การตั้งค่าที่ปลอดภัย | เหตุผลความปลอดภัยตามมาตรฐาน CIS |
|---|---|---|
| \`PermitRootLogin\` | **\`no\`** | ป้องกันไม่ให้ล็อกอินด้วยบัญชี root โดยตรง บังคับให้ใช้บัญชีทั่วไปแล้วค่อย \`sudo\` เพื่อให้มีบันทึก Audit Trail ระบุตัวบุคคล |
| \`PasswordAuthentication\` | **\`no\`** | ปิดการล็อกอินด้วยรหัสผ่านโดยเด็ดขาด บังคับใช้เฉพาะ **SSH Key (Ed25519)** ป้องกันการโจมตีแบบ Brute-force 100% |
| \`MaxAuthTries\` | **\`3\`** | จำกัดจำนวนครั้งในการส่งกุญแจผิดพลาดไม่เกิน 3 ครั้งก่อนตัดสาย |
| \`X11Forwarding\` | **\`no\`** | ปิดฟังก์ชันส่งหน้าต่างกราฟิกที่ไม่จำเป็นเพื่อลดพื้นผิวการโจมตี |
| \`AllowUsers\` | **\`sysadmin deployer\`** | ระบุเฉพาะชื่อผู้ใช้ที่ได้รับอนุญาตให้ล็อกอินทางไกลได้เท่านั้น |

---

## 3. การทำงานของระบบตรวจจับและบล็อกการบุกรุกอัตโนมัติ (Fail2ban)

**Fail2ban** ทำงานโดยการเป็น Daemon เฝ้าอ่านไฟล์ Log ของระบบแบบเรียลไทม์ (เช่น \`/var/log/auth.log\` หรือ Nginx Access Logs) 
เมื่อตรวจพบแพทเทิร์นความล้มเหลวตาม Regular Expression ซ้ำๆ เกินเกณฑ์ (เช่น ล็อกอินผิด 5 ครั้งภายใน 10 นาที) Fail2ban จะส่งคำสั่งไปยัง **UFW / iptables** เพื่อสร้างกฎบล็อก (DROP/REJECT) แพ็กเก็ตจาก IP Address ของผู้โจมตีทันที`,
      codeExample: {
        language: "bash",
        code: `#!/usr/bin/env bash
# =================================================================
# สคริปต์เสริมเกราะป้องกัน Linux Server (Automated Server Hardening)
# รองรับ: Ubuntu 22.04 / 24.04 LTS และ Debian 12
# =================================================================

set -euo pipefail

echo "========================================================"
echo "    เริ่มต้นกระบวนการทำ Server Hardening ระดับโปรดักชัน   "
echo "========================================================"

# 1. ปรับปรุงแพ็กเกจระบบให้เป็นเวอร์ชันล่าสุดเพื่อปิดช่องโหว่ CVE
echo "[+] อัปเดตและแพตช์ช่องโหว่ระบบปฏิบัติการ..."
sudo apt update && sudo apt dist-upgrade -y

# 2. ติดตั้งเครื่องมือรักษาความปลอดภัยพื้นฐาน
echo "[+] ติดตั้ง UFW Firewall และ Fail2ban..."
sudo apt install -y ufw fail2ban unattended-upgrades

# 3. กำหนดค่านโยบายไฟร์วอลล์ UFW แบบ Default Deny
echo "[+] คอนฟิกไฟร์วอลล์ UFW..."
sudo ufw default deny incoming # ปฏิเสธทราฟฟิกขาเข้าทั้งหมด
sudo ufw default allow outgoing # อนุญาตทราฟฟิกขาออก
sudo ufw allow 22/tcp comment 'SSH Remote Access'
sudo ufw allow 80/tcp comment 'HTTP Web Service'
sudo ufw allow 443/tcp comment 'HTTPS Encrypted Web'
sudo ufw --force enable
sudo ufw status verbose

# 4. เสริมความปลอดภัยให้ไฟล์คอนฟิก SSH Daemon
echo "[+] Hardening บริการ OpenSSH..."
SSHD_CONFIG="/etc/ssh/sshd_config.d/99-hardened.conf"
sudo bash -c "cat << 'EOF' > $SSHD_CONFIG
# มาตรการความปลอดภัยมาตรฐาน CIS Benchmark
PermitRootLogin no
PasswordAuthentication no
ChallengeResponseAuthentication no
MaxAuthTries 3
X11Forwarding no
ClientAliveInterval 300
ClientAliveCountMax 2
EOF"

sudo sshd -t # ทดสอบความถูกต้องของไวยากรณ์คอนฟิก
sudo systemctl restart ssh

# 5. คอนฟิกกฎการแบนของ Fail2ban (/etc/fail2ban/jail.local)
echo "[+] กำหนดค่า Fail2ban ปกป้องพอร์ต SSH..."
sudo bash -c "cat << 'EOF' > /etc/fail2ban/jail.local
[DEFAULT]
bantime  = 1d      ; แบนเป็นเวลา 24 ชั่วโมง
findtime = 10m     ; ในช่วงเวลา 10 นาที
maxretry = 3       ; หากพยายามผิดเกิน 3 ครั้ง
banaction = ufw

[sshd]
enabled = true
port    = 22
logpath = /var/log/auth.log
backend = systemd
EOF"

sudo systemctl enable fail2ban
sudo systemctl restart fail2ban

echo "========================================================"
echo "[SUCCESS] การ Hardening เซิร์ฟเวอร์เสร็จสมบูรณ์ ระบบปลอดภัย 100%"
echo "========================================================"`,
        description: "สคริปต์ Bash อัตโนมัติสำหรับทำ Production Hardening บน Ubuntu/Debian ตามมาตรฐาน CIS Benchmarks"
      },
      quiz: [
        {
          id: "cy-9-q1",
          question: "เหตุใดในขั้นตอนการทำ Hardening บริการ SSH จึงแนะนำให้ตั้งค่า PermitRootLogin no และ PasswordAuthentication no เสมอ?",
          options: [
            "เพื่อให้ผู้ใช้ต้องต่อหน้าจอคอมพิวเตอร์เข้ากับเซิร์ฟเวอร์โดยตรง",
            "เพื่อกำจัดการโจมตีแบบ Brute-force รหัสผ่านโดยสิ้นเชิง และบังคับให้ผู้ดูแลระบบล็อกอินด้วยคู่กุญแจที่มีการเข้ารหัสลับสูง (เช่น Ed25519) ภายใต้บัญชีที่มีบันทึกตรวจสอบตัวบุคคลได้",
            "เพื่อช่วยลดอุณหภูมิของ CPU",
            "เพื่อประหยัดพื้นที่บนฮาร์ดดิสก์"
          ],
          correctAnswer: 1,
          explanation: "การปิดล็อกอินด้วยรหัสผ่านจะทำให้การสุ่มรหัสผ่านของแฮกเกอร์ไร้ผล 100% เพราะระบบจะยอมรับเฉพาะผู้ที่มีไฟล์ Private Key ที่ตรงกันเท่านั้น และการห้าม Root ล็อกอินตรงจะช่วยสร้าง Audit Trail ว่าใครเป็นผู้ใช้คำสั่ง sudo"
        },
        {
          id: "cy-9-q2",
          question: "หลักการ 'Default Deny' ในการคอนฟิกไฟร์วอลล์ (UFW / iptables) มีแนวคิดการทำงานอย่างไร?",
          options: [
            "ปฏิเสธทราฟฟิกข้อมูลทั้งหมดเป็นค่าเริ่มต้น และเปิดอนุญาตเฉพาะพอร์ตหรือบริการที่จำเป็นต้องใช้งานจริงเท่านั้น",
            "เปิดทุกพอร์ตให้ใช้งานได้ แล้วค่อยสั่งบล็อกทีละพอร์ตเมื่อโดนโจมตี",
            "บล็อกเฉพาะผู้ใช้งานจากต่างประเทศ",
            "ลบประวัติการเข้าใช้งานทิ้งทั้งหมด"
          ],
          correctAnswer: 0,
          explanation: "หลักการ Default Deny หรือ Whitelisting ถือเป็นเสาหลักของสถาปัตยกรรม Zero Trust และ Principle of Least Privilege โดยจะปิดกั้นทราฟฟิกขาเข้าทุกอย่าง และเปิดเฉพาะบริการที่จำเป็น (เช่น 80, 443, 22) เพื่อลดพื้นที่หน้าตัดการถูกโจมตี (Attack Surface)"
        }
      ],
      labGuide: {
        title: "แล็บการทำ Server Hardening และตรวจสอบสถานะ Fail2ban Jail",
        toolName: "Ubuntu Server / Virtual Machine",
        downloadUrl: "https://ubuntu.com/download/server",
        objective: "รันสคริปต์ Hardening บนระบบเซิร์ฟเวอร์ Linux จำลองการล็อกอินผิดพลาด และใช้คำสั่ง fail2ban-client ตรวจสอบสถานะการบล็อก IP",
        steps: [
          {
            title: "เตรียมเซิร์ฟเวอร์ทดสอบ",
            detail: "เปิด Virtual Machine ของ Ubuntu Server หรือใช้งานเครื่องเซิร์ฟเวอร์ทดสอบ"
          },
          {
            title: "รันสคริปต์ Hardening",
            detail: "บันทึกและรันสคริปต์ hardening.sh จากบทเรียน ตรวจสอบให้แน่ใจว่าได้เปิดใช้งาน SSH Key ไว้เรียบร้อยแล้วก่อนสั่งปิดรหัสผ่าน"
          },
          {
            title: "ตรวจสอบสถานะ UFW Firewall",
            detail: "รันคำสั่ง sudo ufw status verbose เพื่อยืนยันว่าเปิดเฉพาะพอร์ตที่จำเป็น"
          },
          {
            title: "ตรวจสอบการทำงานของ Fail2ban",
            detail: "รันคำสั่ง sudo fail2ban-client status sshd เพื่อดูสถิติ Failed attempts และรายการ IP ที่ถูกสั่งแบน"
          }
        ],
        verification: "คำสั่ง fail2ban-client status sshd ต้องแสดงสถานะ Status of the jail: sshd เป็น active และ UFW ไฟร์วอลล์แสดงสถานะ active พร้อมกฎ Allow เฉพาะพอร์ต 22, 80, 443"
      }
    }
  ]
};
