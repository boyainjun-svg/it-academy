import { Course } from "../types";

export const networkCourse: Course = {
  id: "network",
  title: "Network & Cisco",
  description: "ออกแบบ จัดการ และตั้งค่าระบบเครือข่ายระดับวิทยาลัยและองค์กรด้วย Cisco Packet Tracer & CLI",
  longDescription: "หลักสูตรระบบเครือข่ายที่พัฒนาตามมาตรฐานหลักสูตรสากล Cisco Certified Network Associate (CCNA 200-301) และมาตรฐานวิชาชีพเทคโนโลยีสารสนเทศ สอศ. ถ่ายทอดความรู้เชิงลึกตั้งแต่แบบจำลอง OSI 7 Layers, การวิเคราะห์แพ็กเก็ตด้วย Wireshark, การคำนวณ VLSM Subnetting, การตั้งค่าความปลอดภัยอุปกรณ์ Cisco Router/Switch ผ่าน CLI, การตัดแบ่งเครือข่ายเสมือน VLAN & 802.1Q Trunking, การทำ Inter-VLAN Routing ด้วย Layer 3 Switch, การกำหนดเส้นทางอัตโนมัติด้วย OSPF v2, ระบบไฟร์วอลล์คัดกรองทราฟฟิก Access Control Lists (ACLs) ตลอดจนการทำ NAT/PAT เชื่อมต่ออินเทอร์เน็ต",
  icon: "🔌",
  color: "blue",
  gradient: "from-blue-500 to-indigo-600",
  category: "core",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Network", "Cisco", "CCNA", "Packet Tracer", "VLAN", "Routing", "OSPF", "Firewall", "Wireshark"],
  recommendedTools: [
    {
      name: "Cisco Packet Tracer",
      icon: "🌐",
      badge: "Official Cisco Tool",
      description: "สุดยอดโปรแกรมจำลองระบบเครือข่ายระดับโลกจาก Cisco Networking Academy จำลองการทำงานของ Router, Switch, Server, PC, สายสัญญาณเคเบิล และคำสั่ง Cisco IOS CLI ได้สมจริง 100%",
      downloadUrl: "https://www.netacad.com/courses/packet-tracer",
      setupGuide: "1. สมัครบัญชีฟรีที่ Cisco Networking Academy (SkillsForAll / NetAcad)\n2. ดาวน์โหลด Packet Tracer เวอร์ชันล่าสุดสำหรับ Windows (64-bit)\n3. ติดตั้งโปรแกรมและล็อกอินเข้าสู่ระบบด้วยบัญชี Cisco\n4. สามารถเปิดไฟล์แล็บ (.pkt) หรือเริ่มสร้างโทโพโลยีเครือข่ายได้ทันที"
    },
    {
      name: "Wireshark",
      icon: "🦈",
      badge: "Packet Analyzer",
      description: "โปรแกรมวิเคราะห์ข้อมูลแพ็กเก็ตบนโครงข่าย (Network Protocol Analyzer) ระดับมาตรฐานอุตสาหกรรม ใช้ดักจับ ตรวจสอบ และดีบักการทำงานของโปรโตคอล TCP, UDP, DNS, ARP, ICMP แบบเรียลไทม์",
      downloadUrl: "https://www.wireshark.org/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Wireshark พร้อมเลือกติดตั้งไดรเวอร์ Npcap\n2. เลือกการ์ดเครือข่าย (Network Interface) ที่กำลังใช้งาน เช่น Ethernet หรือ Wi-Fi\n3. กดปุ่มครีบฉลามสีน้ำเงินเพื่อเริ่มจับแพ็กเก็ต (Start Capturing)\n4. พิมพ์ Display Filter เช่น 'dns', 'tcp.port == 80', 'arp', 'icmp' เพื่อกรองข้อมูล"
    },
    {
      name: "PuTTY / Tera Term",
      icon: "💻",
      badge: "Console Terminal",
      description: "โปรแกรมจำลองเทอร์มินัล (Serial/SSH/Telnet) เพื่อเชื่อมต่อสาย Console ทางฮาร์ดแวร์เข้าสู่พอร์ต RJ-45/USB ของเราเตอร์และสวิตช์ของจริงในห้องปฏิบัติการ",
      downloadUrl: "https://www.putty.org/",
      setupGuide: "1. เสียบสาย USB-to-RJ45 Console Cable ระหว่างคอมพิวเตอร์กับอุปกรณ์ Cisco\n2. ตรวจสอบหมายเลข COM Port ใน Windows Device Manager (เช่น COM3)\n3. เปิดโปรแกรม PuTTY เลือก Connection type: Serial ใส่ Serial line เป็น COM3 และ Speed เป็น 9600\n4. กดปุ่ม Open เพื่อเข้าสู่หน้าต่างคอนฟิก CLI ทันที"
    }
  ],
  lessons: [
    // ==========================================
    // บทเรียนที่ 1: สถาปัตยกรรมเครือข่ายและสื่อส่งข้อมูล
    // ==========================================
    {
      id: "net-1",
      title: "สถาปัตยกรรมเครือข่ายคอมพิวเตอร์และสื่อส่งข้อมูล (Network Architecture & Media)",
      description: "ทำความเข้าใจโครงสร้างเครือข่าย LAN/MAN/WAN, โทโพโลยี Star/Mesh, มาตรฐานสายสัญญาณ UTP Cat5e/Cat6/Cat6a, หัวต่อ RJ-45 และสายใยแก้วนำแสง Single-mode vs Multi-mode",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมเครือข่ายคอมพิวเตอร์และสื่อส่งข้อมูลกายภาพ

เครือข่ายคอมพิวเตอร์ (Computer Network) คือระบบการเชื่อมโยงระหว่างอุปกรณ์คอมพิวเตอร์ เซิร์ฟเวอร์ และอุปกรณ์เครือข่ายเข้าด้วยกันผ่านตัวกลางสื่อสาร โดยมีเป้าหมายเพื่อแลกเปลี่ยนข้อมูลและแบ่งปันทรัพยากร (Resource Sharing) อย่างมีเสถียรภาพ รวดเร็ว และปลอดภัยตามมาตรฐานสากล **IEEE 802.3 (Ethernet)** และ **IETF (Internet Engineering Task Force)**

---

## 1. การจัดประเภทของเครือข่ายตามขอบเขตทางภูมิศาสตร์

| ประเภทเครือข่าย | คำจำกัดความ | ขอบเขตระยะทาง | แบนด์วิดท์มาตรฐาน | ตัวอย่างการใช้งานจริง |
|---|---|---|---|---|
| **LAN (Local Area Network)** | เครือข่ายท้องถิ่นเฉพาะพื้นที่ | ภายในห้อง, อาคาร, หรือวิทยาเขต (10 ม. - 1 กม.) | 1 Gbps – 10 Gbps | ห้องเรียนคอมพิวเตอร์, แผนกวิชา, สำนักงานวิทยาลัย |
| **CAN (Campus Area Network)** | เครือข่ายเชื่อมโยงหลายอาคารในสถาบัน | 1 กม. – 5 กม. | 10 Gbps – 40 Gbps | ระบบโครงข่ายหลักของมหาวิทยาลัยหรือวิทยาลัยเทคนิค |
| **MAN (Metropolitan Area Network)** | เครือข่ายระดับเมืองหรือเทศบาล | 5 กม. – 50 กม. | 1 Gbps – 100 Gbps | โครงข่ายกล้อง CCTV เมือง, ระบบสารสนเทศของเทศบาลนคร |
| **WAN (Wide Area Network)** | เครือข่ายระยะไกลระดับประเทศหรือทั่วโลก | ไม่จำกัดระยะทาง | แตกต่างกันตามลิงก์เช่า (Leased Line / MPLS / SD-WAN) | เครือข่ายอินเทอร์เน็ต, เครือข่ายเชื่อมโยงระหว่างธนาคาร |

---

## 2. โทโพโลยีเครือข่าย (Network Topologies)

สถาปัตยกรรมการเชื่อมต่อทางกายภาพและเชิงตรรกะ มีรูปแบบหลักดังนี้:

### 2.1 Star Topology (โทโพโลยีแบบดาว - มาตรฐานองค์กรปัจจุบัน)
อุปกรณ์ปลายทางทุกตัว (PC, IP Phone, Access Point, Printer) จะต่อสายเคเบิลตรงเข้าสู่ศูนย์กลางคือ **Access Layer Switch**
- **ข้อดี:** หากสายเส้นใดชำรุดเสียหาย เครื่องอื่นในเครือข่ายจะไม่ได้รับผลกระทบเลย ค้นหาจุดเสีย (Troubleshooting) ได้ง่าย และขยายระบบได้ไม่จำกัด
- **ข้อจำกัด:** หากสวิตช์ตัวกลางเสีย ทั้งเครือข่ายย่อยนั้นจะหยุดทำงานทั้งหมด (Single Point of Failure) จึงต้องมีสวิตช์สำรองในระดับ Core/Distribution

### 2.2 Full-Mesh & Partial-Mesh Topology (โทโพโลยีแบบร่างแห)
อุปกรณ์ทุกตัวมีลิงก์เชื่อมต่อถึงกันและกันโดยตรง
- สูตรคำนวณจำนวนลิงก์ใน Full-Mesh: $$\\text{Links} = \\frac{N(N - 1)}{2}$$ (โดย $N$ คือจำนวนอุปกรณ์)
- นิยมใช้เฉพาะใน **Core Data Center** และลิงก์เชื่อมต่อระหว่างเราเตอร์ของ ISP เพื่อรับประกันความพร้อมใช้งานสูง (High Availability 99.999%)

---

## 3. สื่อส่งข้อมูลทางกายภาพ (Transmission Media)

### 3.1 สายทองแดงคู่ตีเกลียว (Twisted-Pair Copper Cable)
การนำสายทองแดงมาตีเกลียวเป็นคู่ๆ มีวัตถุประสงค์ทางฟิสิกส์เพื่อ **หักล้างสัญญาณรบกวนแม่เหล็กไฟฟ้าภายนอก (EMI)** และป้องกันการรบกวนข้ามสาย (Crosstalk)

| มาตรฐานสาย | แบนด์วิดท์ความถี่ (Frequency) | ความเร็วสูงสุด | ระยะทางสูงสุด | การใช้งานหลัก |
|---|---|---|---|---|
| **Cat 5e** | 100 MHz | 1 Gbps (1000BASE-T) | 100 เมตร | เครือข่ายสำนักงานทั่วไปในอดีต |
| **Cat 6** | 250 MHz | 1 Gbps (100 ม.) / 10 Gbps (ไม่เกิน 55 ม.) | 100 เมตร | มาตรฐานห้องเรียนและอาคารในปัจจุบัน |
| **Cat 6a** | 500 MHz | 10 Gbps (10GBASE-T) | 100 เมตร | โครงข่ายหลักและห้องเซิร์ฟเวอร์ Data Center |

> ⚠️ **ข้อบังคับมาตรฐาน IEEE 802.3:** สายสัญญาณทองแดง UTP มีระยะทางเดินสายสูงสุด **ไม่เกิน 100 เมตร** ต่อช่วง (ความยาวสายเดินในท่อ 90 เมตร + สาย Patch Cord ที่หัวท้ายรวมกันไม่เกิน 10 เมตร) หากเกินกว่านี้สัญญาณจะลดทอน (Attenuation) จนแพ็กเก็ตสูญหาย

### 3.2 การเข้าหัวต่อ RJ-45 ตามมาตรฐาน TIA/EIA-568
- **T568B (มาตรฐานที่นิยมที่สุดในไทย):** ส้มขาว, ส้ม, เขียวขาว, น้ำเงิน, น้ำเงินขาว, เขียว, น้ำตาลขาว, น้ำตาล
- **T568A:** เขียวขาว, เขียว, ส้มขาว, น้ำเงิน, น้ำเงินขาว, ส้ม, น้ำตาลขาว, น้ำตาล
- **Straight-Through Cable (สายตรง):** ปลายทั้งสองข้างเป็นมาตรฐานเดียวกัน (เช่น T568B ทั้งคู่) ใช้เชื่อมต่ออุปกรณ์ต่างชั้น เช่น **PC กับ Switch** หรือ **Router กับ Switch**
- **Crossover Cable (สายไขว้):** ปลายข้างหนึ่งเป็น T568A อีกข้างเป็น T568B ใช้ต่ออุปกรณ์ประเภทเดียวกัน เช่น **Switch กับ Switch** หรือ **PC กับ PC** *(อุปกรณ์รุ่นใหม่มีฟังก์ชัน Auto-MDIX คอยสลับขั้วสัญญาณให้อัตโนมัติ)*

### 3.3 สายใยแก้วนำแสง (Optical Fiber Cable)
ใช้สัญญาณแสงในการส่งข้อมูล ทำให้ไม่มีการรบกวนทางแม่เหล็กไฟฟ้าโดยสิ้นเชิง และรองรับความเร็วหลายร้อยกิ๊กกะบิต:
1. **Single-Mode Fiber (SMF):**
   - แกนคอร์ขนาดเล็กมาก (ประมาณ 9 ไมโครเมตร) แสงเลเซอร์เดินทางตรงเป็นลำเดียว
   - ส่งได้ระยะทางไกลมาก **10 กิโลเมตร ถึง 40+ กิโลเมตร**
   - ปลอกหุ้มภายนอกสีเหลือง (Yellow Jacket) ใช้เป็นสาย Backbone เชื่อมต่อระหว่างอาคารและโครงข่ายเมือง
2. **Multi-Mode Fiber (MMF):**
   - แกนคอร์ขนาดใหญ่ (50 หรือ 62.5 ไมโครเมตร) แสง LED/VCSEL สะท้อนไปมาหลายทิศทาง
   - ส่งได้ระยะทางสั้น **ไม่เกิน 300 - 550 เมตร** ที่ความเร็ว 10G/40G
   - ปลอกหุ้มสีฟ้าเทอร์ควอยซ์ (Aqua Jacket สำหรับ OM3/OM4) นิยมใช้เชื่อมต่อสวิตช์ในห้องเซิร์ฟเวอร์เดียวกัน

---

## 4. ปัญหาที่พบบ่อยในการติดตั้งจริง (Troubleshooting Guide)
1. **ความเร็วตกเหลือ 100 Mbps แทนที่จะเป็น 1 Gbps:** เกิดจากการเข้าหัวสาย RJ-45 ไม่ครบ 8 เส้น หรือสายเส้นใดเส้นหนึ่งขาดใน เพราะความเร็ว 1 Gbps ต้องใช้ครบทั้ง 4 คู่ (8 เส้น) ต่างจาก 100 Mbps ที่ใช้เพียง 2 คู่ (Pin 1, 2, 3, 6)
2. **สัญญาณหลุดเป็นช่วงๆ (CRC Errors):** เกิดจากการเดินสาย UTP ขนานไปกับสายไฟฟ้าแรงสูง หรือผ่านบัลลาสต์หลอดไฟฟลูออเรสเซนต์ แก้ไขโดยใช้สายแบบมีชีลด์กันสัญญาณกวน (STP/FTP) และรักษาระยะห่างจากสายไฟอย่างน้อย 30 เซนติเมตร`,
      codeExample: {
        language: "bash",
        code: `# 1. ตรวจสอบการตั้งค่า Network บนเครื่อง Client (Windows)
ipconfig /all

# 2. ตรวจสอบสถานะการเชื่อมต่อ Physical Link และ Duplex (Linux)
ip link show
ethtool eth0

# 3. บน Cisco Switch CLI: ตรวจสอบสถานะและข้อผิดพลาดทางฮาร์ดแวร์ของพอร์ต
Switch# show interfaces status
Switch# show interfaces gigabitEthernet 0/1 | include duplex|errors|drops`,
        description: "คำสั่งตรวจสอบสถานะการทำงาน ความเร็ว (Speed) โหมด Duplex และสถิติ Packet Errors ของการ์ดเครือข่ายและสวิตช์"
      },
      quiz: [
        {
          id: "net-1-q1",
          question: "ตามข้อกำหนดมาตรฐานสากล IEEE 802.3 สายสัญญาณ UTP Cat6 มีระยะทางการเดินสายสูงสุดไม่เกินเท่าใด?",
          options: ["50 เมตร", "100 เมตร", "150 เมตร", "500 เมตร"],
          correctAnswer: 1,
          explanation: "มาตรฐานอีเธอร์เน็ตกำหนดให้ระยะทางสายทองแดง UTP ไม่เกิน 100 เมตร (สายถาวร 90 ม. + Patch Cord 10 ม.) เพื่อไม่ให้สัญญาณเกิดการสูญเสียกำลัง (Attenuation) เกินเกณฑ์"
        },
        {
          id: "net-1-q2",
          question: "สายใยแก้วนำแสงชนิด Single-Mode Fiber (SMF) มีลักษณะเด่นที่แตกต่างจาก Multi-Mode Fiber (MMF) ในข้อใด?",
          options: [
            "มีแกนคอร์ขนาดเล็กมาก (ประมาณ 9 ไมโครเมตร) ส่งข้อมูลได้ไกลกว่ามาก",
            "ใช้แสงความยาวคลื่นสั้นกว่าและส่งได้ไม่เกิน 300 เมตร",
            "ปลอกภายนอกมักเป็นสีฟ้า Aqua และราคาอุปกรณ์แปลงสัญญาณถูกกว่า",
            "ใช้แสงหลายระนาบสะท้อนไปมาในคอร์เพื่อเพิ่มแบนด์วิดท์"
          ],
          correctAnswer: 0,
          explanation: "Single-Mode Fiber (SMF) มีขนาด Core เล็กเพียง 9 µm ทำให้ลำแสงเลเซอร์เดินทางเป็นเส้นตรง ไม่เกิด Modal Dispersion จึงส่งข้อมูลได้ไกลหลายสิบกิโลเมตร"
        }
      ],
      labGuide: {
        title: "แล็บสร้างผังโครงข่าย LAN แรกบน Cisco Packet Tracer",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "สร้างผังเครือข่าย Local Area Network เชื่อมต่อ Cisco Catalyst 2960 Switch เข้ากับคอมพิวเตอร์ลูกข่าย กำหนด IP Address และทดสอบการส่งแพ็กเก็ต",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วางอุปกรณ์สวิตช์และคอมพิวเตอร์",
            detail: "เปิดโปรแกรม Cisco Packet Tracer ไปที่แถบ Network Devices > Switches เลือกวางสวิตช์รุ่น 2960 ไว้ตรงกลาง จากนั้นไปที่ End Devices เลือกวาง PC0, PC1 และ PC2 ล้อมรอบสวิตช์"
          },
          {
            title: "ขั้นตอนที่ 2: เชื่อมต่อสายเคเบิล Copper Straight-Through",
            detail: "เลือกไอคอนสายฟ้า (Connections) > เลือกสาย Copper Straight-Through (สายเส้นตรงสีดำทึบ) ลากเชื่อมต่อจากพอร์ต FastEthernet0 ของ PC0 ไปยังพอร์ต FastEthernet0/1 ของสวิตช์ จากนั้นต่อ PC1 เข้า Fa0/2 และ PC2 เข้า Fa0/3",
            codeOrCommand: "รอให้ไฟสถานะพอร์ตบนสวิตช์เปลี่ยนจากสีส้ม (STP Listening/Learning 30 วินาที) กลายเป็นสีเขียว (Forwarding)"
          },
          {
            title: "ขั้นตอนที่ 3: กำหนดค่า IP Address ประจำเครื่อง",
            detail: "คลิกที่ PC0 > เลือกแท็บ Desktop > IP Configuration กำหนดค่า:\n- IP Address: 192.168.1.10\n- Subnet Mask: 255.255.255.0\nจากนั้นตั้งค่า PC1 เป็น 192.168.1.11 และ PC2 เป็น 192.168.1.12 ด้วย Subnet เดียวกัน"
          },
          {
            title: "ขั้นตอนที่ 4: ทดสอบการสื่อสารด้วย ICMP Ping",
            detail: "เปิดหน้าต่าง Command Prompt บน PC0 แล้วทดสอบส่งแพ็กเก็ตไปยัง PC1 และ PC2 ด้วยคำสั่ง ping",
            codeOrCommand: "ping 192.168.1.11\nping 192.168.1.12"
          }
        ],
        verification: "ผลลัพธ์การ Ping บนหน้าต่าง Command Prompt ต้องขึ้นข้อความ 'Reply from 192.168.1.11: bytes=32 time<1ms TTL=128' ครบทั้ง 4 ครั้ง โดยมี Packet loss เท่ากับ 0% (0% loss)"
      }
    },

    // ==========================================
    // บทเรียนที่ 2: แบบจำลอง OSI 7 Layers & Wireshark
    // ==========================================
    {
      id: "net-2",
      title: "แบบจำลอง OSI 7 Layers และการวิเคราะห์แพ็กเก็ตด้วย Wireshark (Protocol Analysis)",
      description: "ทำความเข้าใจโครงสร้าง OSI 7 Layers, กระบวนการ Encapsulation/Decapsulation, โครงสร้าง Header แต่ละชั้น, และการดักจับแพ็กเก็ต TCP 3-Way Handshake, DNS, ARP บน Wireshark",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# แบบจำลอง OSI 7 Layers และกระบวนการวิเคราะห์แพ็กเก็ต

แบบจำลอง **OSI (Open Systems Interconnection) Reference Model** ถูกกำหนดขึ้นโดยองค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO) เพื่อสร้างสถาปัตยกรรมการสื่อสารที่เป็นมาตรฐานเปิด ช่วยให้ระบบคอมพิวเตอร์จากผู้ผลิตต่างค่ายกันสามารถสื่อสารกันได้อย่างถูกต้อง

\`\`\`diagram:osi
แบบจำลองการสื่อสาร OSI 7 Layers และ Protocol Data Units (PDU)
\`\`\`

---

## 1. หน้าที่ของแต่ละเลเยอร์และ Protocol Data Unit (PDU)

| เลเยอร์ (Layer) | ชื่อและหน้าที่หลัก | หน่วยข้อมูล (PDU) | โปรโตคอลและมาตรฐานที่ทำงาน | ฮาร์ดแวร์หลัก |
|---|---|---|---|---|
| **Layer 7: Application** | ติดต่อโดยตรงกับซอฟต์แวร์แอปพลิเคชันของผู้ใช้งาน | Data | HTTP, HTTPS, DNS, DHCP, SSH, FTP, SMTP | คอมพิวเตอร์, เซิร์ฟเวอร์ |
| **Layer 6: Presentation** | แปลงรูปแบบข้อมูล บีบอัดไฟล์ และเข้ารหัสความปลอดภัย | Data | TLS/SSL, ASCII, UTF-8, JPEG, MP4 | ระบบปฏิบัติการ (OS) |
| **Layer 5: Session** | ควบคุม จัดการเปิด ปิด และประสานงานเซสชันการเชื่อมต่อ | Data | RPC, NetBIOS, PPTP | ระบบปฏิบัติการ (OS) |
| **Layer 4: Transport** | ส่งข้อมูลแบบ End-to-End, ควบคุมความลื่นไหล (Flow Control) และแก้ไขข้อผิดพลาด | **Segment (TCP) / Datagram (UDP)** | **TCP** (Reliable, Handshake), **UDP** (Fast, No-ack) | ไฟร์วอลล์ (Layer 4) |
| **Layer 3: Network** | ระบุเส้นทางเชิงตรรกะ (Logical Addressing) และค้นหาเส้นทางที่ดีที่สุด (Routing) | **Packet** | **IPv4, IPv6, ICMP, ARP, OSPF, BGP** | **Router**, Layer 3 Switch |
| **Layer 2: Data Link** | จัดการส่งข้อมูลบนลิงก์กายภาพ ตรวจจับข้อผิดพลาด (FCS) และระบุที่อยู่ฮาร์ดแวร์ | **Frame** | **Ethernet (IEEE 802.3)**, Wi-Fi (802.11), PPP | **Switch (Layer 2)**, Bridge, NIC |
| **Layer 1: Physical** | แปลงข้อมูลเป็นสัญญาณดิบทางกายภาพ (แรงดันไฟฟ้า แสง หรือคลื่นวิทยุ) | **Bits (0 และ 1)** | สาย UTP Cat6, Fiber Optic, ขั้วต่อ RJ-45 | สายสัญญาณ, Hub, Repeater |

---

## 2. กระบวนการ Encapsulation และ Decapsulation

เมื่อผู้ใช้งานส่งข้อความ เช่น ส่งคำขอเปิดหน้าเว็บ ข้อมูลจะเดินทางจากบนลงล่าง:
1. **Application Data:** เช่น คำขอ \`GET /index.html HTTP/1.1\`
2. **+ TCP Header (Layer 4):** เพิ่มหมายเลขพอร์ตต้นทาง (Source Port สุ่ม เช่น 54321) และพอร์ตปลายทาง (Destination Port เช่น 80 หรือ 443) รวมถึง Sequence Number และ Acknowledgement Number กลายเป็น **Segment**
3. **+ IP Header (Layer 3):** เพิ่มหมายเลข Source IP (เช่น 192.168.1.10) และ Destination IP (เช่น 203.0.113.50) กลายเป็น **Packet**
4. **+ Ethernet Header & Trailer (Layer 2):** เพิ่ม Source MAC Address (เครื่องเรา), Destination MAC Address (เกตเวย์เราเตอร์), และห้อยท้ายด้วย **FCS (Frame Check Sequence)** เพื่อเช็คความสมบูรณ์ กลายเป็น **Frame**
5. **Physical Encoding (Layer 1):** แปลงบิตในเฟรมเป็นสัญญาณไฟฟ้าวิ่งลงสายเคเบิล

เมื่อแพ็กเก็ตถึงปลายทาง จะเกิดกระบวนการย้อนกลับที่เรียกว่า **Decapsulation** โดยแกะ Header ออกทีละชั้นจาก Layer 1 ขึ้นไปจนถึง Layer 7

---

## 3. เจาะลึกโปรโตคอลสำคัญในระดับโครงข่าย

### 3.1 การทำงานของโปรโตคอล ARP (Address Resolution Protocol - RFC 826)
เมื่อคอมพิวเตอร์ต้องการส่งข้อมูลไปยัง IP ปลายทางในเครือข่าย LAN เดียวกัน แต่ยังไม่ทราบหมายเลข **MAC Address**:
1. เครื่องต้นทางจะส่งแพ็กเก็ต **ARP Request** กระจายเสียงแบบ Broadcast (Destination MAC: \`FF:FF:FF:FF:FF:FF\`) ถามว่า *"ใครคือเจ้าของ IP 192.168.1.11 ช่วยบอก MAC Address มาที?"*
2. เครื่องที่เป็นเจ้าของ IP นั้นจะตอบกลับด้วย **ARP Reply** แบบ Unicast ตรงกลับมา
3. เครื่องต้นทางจะบันทึกคู่นี้ไว้ใน **ARP Table / ARP Cache** ชั่วคราว

### 3.2 กลไก TCP 3-Way Handshake (การเริ่มเชื่อมต่ออย่างมั่นคง)
ก่อนที่เว็บเบราว์เซอร์จะส่งข้อมูล HTTP/HTTPS ได้ TCP ต้องสร้างการเชื่อมต่อก่อนเสมอด้วย 3 ขั้นตอน:
1. **SYN:** Client ส่งแพ็กเก็ตพร้อมตั้งแฟล็ก SYN = 1, Sequence = X ไปยัง Server
2. **SYN-ACK:** Server ตอบรับด้วย SYN = 1, ACK = 1, Sequence = Y, Ack Number = X + 1
3. **ACK:** Client ส่งยืนยันกลับด้วย ACK = 1, Sequence = X + 1, Ack Number = Y + 1 (สถานะกลายเป็น **ESTABLISHED**)

---

## 4. เทคนิคการใช้ Wireshark Display Filters สำหรับงานวิศวกรรมเครือข่าย

| คำสั่งฟิลเตอร์ Wireshark | ความหมายและการนำไปใช้ |
|---|---|
| \`ip.addr == 192.168.1.10\` | ดูทราฟฟิกทั้งหมดที่เข้าหรือออกจากหมายเลข IP นี้ |
| \`tcp.port == 443\` | ดักดูเฉพาะทราฟฟิกเว็บแบบเข้ารหัส HTTPS |
| \`tcp.flags.syn == 1 && tcp.flags.ack == 0\` | ดักจับเฉพาะแพ็กเก็ตการเริ่มขอเชื่อมต่อ TCP (SYN Packet) |
| \`dns\` | กรองดูคำขอและคำตอบการแปลงชื่อโดเมนทั้งหมด |
| \`icmp\` | กรองดูคำสั่งทดสอบเครือข่าย Ping และ Traceroute |
| \`arp\` | ดูทราฟฟิกการถามหาที่อยู่ MAC Address ในวง LAN |`,
      codeExample: {
        language: "bash",
        code: `# 1. ดูตารางแคช ARP ที่เครื่องบันทึกการจับคู่ IP กับ MAC Address ไว้
arp -a

# 2. ล้างตาราง ARP Cache เพื่อบังคับให้เครื่องถามหา MAC ใหม่ (Run as Administrator)
netsh interface ip delete arpcache

# 3. ตรวจสอบการเดินทางของแพ็กเก็ตผ่าน Layer 3 ทีละ Hop
tracert 8.8.8.8

# 4. ตรวจสอบพอร์ตที่กำลังเปิดให้บริการ (Listening) และเซสชัน TCP ที่เชื่อมต่ออยู่
netstat -ano | findstr ESTABLISHED`,
        description: "คำสั่งระบบปฏิบัติการสำหรับตรวจสอบ ARP Cache, เส้นทางการส่งข้อมูล Layer 3 และเซสชันการเชื่อมต่อ TCP Layer 4"
      },
      quiz: [
        {
          id: "net-2-q1",
          question: "หน่วยข้อมูล (PDU) ที่ถูกผนึกใน Transport Layer (Layer 4) เมื่อใช้โปรโตคอล TCP มีชื่อเรียกว่าอะไร?",
          options: ["Bits", "Frame", "Packet", "Segment"],
          correctAnswer: 3,
          explanation: "ลำดับ PDU: Layer 4 = Segment, Layer 3 = Packet, Layer 2 = Frame, Layer 1 = Bits"
        },
        {
          id: "net-2-q2",
          question: "ขั้นตอนแรกของกระบวนการ TCP 3-Way Handshake คืออะไร?",
          options: [
            "Client ส่งแพ็กเก็ต ACK",
            "Server ส่งแพ็กเก็ต SYN-ACK",
            "Client ส่งแพ็กเก็ต SYN",
            "Server ส่งแพ็กเก็ต FIN"
          ],
          correctAnswer: 2,
          explanation: "TCP 3-Way Handshake เริ่มต้นด้วยการที่ Client ส่งแพ็กเก็ตที่เปิดแฟล็ก SYN (Synchronize) เพื่อขอเปิดการเชื่อมต่อและเจรจาหมายเลข Sequence Number เริ่มต้น"
        }
      ],
      labGuide: {
        title: "แล็บดักจับแพ็กเก็ต TCP 3-Way Handshake และ ARP ด้วย Wireshark",
        toolName: "Wireshark",
        downloadUrl: "https://www.wireshark.org/",
        objective: "เปิดใช้งาน Wireshark ดักจับทราฟฟิกขณะเข้าใช้งานเว็บไซต์ วิเคราะห์โครงสร้างแพ็กเก็ต ARP และตรวจสอบขั้นตอน TCP 3-Way Handshake แบบไบต์ต่อไบต์",
        steps: [
          {
            title: "ขั้นตอนที่ 1: เตรียมเปิดโปรแกรมและเลือกการ์ดเครือข่าย",
            detail: "เปิดโปรแกรม Wireshark ดับเบิลคลิกที่การ์ดเชื่อมต่อที่มีการเคลื่อนไหวของกราฟทราฟฟิก (เช่น Ethernet หรือ Wi-Fi) เพื่อเริ่มดักจับแพ็กเก็ต"
          },
          {
            title: "ขั้นตอนที่ 2: ดักจับแพ็กเก็ต ARP",
            detail: "ในช่อง Apply a display filter พิมพ์คำว่า 'arp' จากนั้นเปิด Command Prompt ในเครื่องแล้วพิมพ์คำสั่ง ping ไปยังหมายเลขไอพีของเกตเวย์หรือเครื่องอื่นในวงเดียวกัน",
            codeOrCommand: "ping 192.168.1.1"
          },
          {
            title: "ขั้นตอนที่ 3: สังเกตแพ็กเก็ต ARP Request และ Reply",
            detail: "ใน Wireshark จะพบแพ็กเก็ต 'Who has 192.168.1.1? Tell ...' ที่ส่งไปยัง Broadcast MAC (ff:ff:ff:ff:ff:ff) และตามด้วยแพ็กเก็ตตอบกลับ '192.168.1.1 is at ...'"
          },
          {
            title: "ขั้นตอนที่ 4: กรองและวิเคราะห์ TCP Handshake",
            detail: "เปลี่ยนฟิลเตอร์ใน Wireshark เป็น 'tcp.port == 80 || tcp.port == 443' แล้วเปิดเบราว์เซอร์เข้าชมเว็บไซต์ สังเกตชุดแพ็กเก็ต 3 บรรทัดแรกที่มีแฟล็ก [SYN], [SYN, ACK], [ACK]"
          }
        ],
        verification: "ในหน้าต่าง Packet Details ของ Wireshark สามารถขยายดูโครงสร้าง Ethernet II (ระบุ MAC), Internet Protocol Version 4 (ระบุ IP) และ Transmission Control Protocol (ระบุ Port และ Flags) ได้ครบถ้วน"
      }
    },

    // ==========================================
    // บทเรียนที่ 3: การคำนวณ Subnetting และ VLSM ขั้นสูง
    // ==========================================
    {
      id: "net-3",
      title: "การคำนวณ IP Addressing และ Subnetting ขั้นสูง (IPv4, CIDR & VLSM)",
      description: "เจาะลึกโครงสร้าง IPv4, บิตของ Subnet Mask, การแปลงเลขฐานสอง, การคำนวณขนาดบล็อกเครือข่าย (Block Size), และการจัดสรรพื้นที่ด้วยเทคนิค Variable Length Subnet Masking (VLSM)",
      duration: "60 นาที",
      level: "เริ่มต้น",
      content: `# การคำนวณ IP Addressing และ Subnetting ขั้นสูง

หมายเลข **IPv4 (Internet Protocol Version 4)** ตามมาตรฐาน RFC 791 มีขนาดความยาวทั้งสิ้น **32 บิต (4 ไบต์)** แบ่งออกเป็น 4 ชุด แต่ละชุดเรียกว่า **Octet (8 บิต)** คั่นด้วยเครื่องหมายจุด (Dotted Decimal Notation) เช่น \`192.168.10.1\`

---

## 1. โครงสร้างและการแปลงเลขฐานสองของ IPv4

แต่ละ Octet มีค่าได้ตั้งแต่ \`00000000\` (0) ถึง \`11111111\` (255) โดยคิดจากน้ำหนักเลขยกกำลังของ 2:
$$2^7(128) + 2^6(64) + 2^5(32) + 2^4(16) + 2^3(8) + 2^2(4) + 2^1(2) + 2^0(1)$$

### ตัวอย่างการแปลง 192.168.10.1 เป็นเลขฐานสอง:
- $192 = 128 + 64 \\rightarrow \\mathbf{11000000}$
- $168 = 128 + 32 + 8 \\rightarrow \\mathbf{10101000}$
- $10 = 8 + 2 \\rightarrow \\mathbf{00001010}$
- $1 = 1 \\rightarrow \\mathbf{00000001}$
- รวมทั้ง 32 บิต: \`11000000.10101000.00001010.00000001\`

---

## 2. กลุ่มหมายเลข Private IP Address (RFC 1918)
หมายเลข IP ภายในองค์กรที่ไม่สามารถนำไปใช้วิ่งบนอินเทอร์เน็ตสาธารณะได้โดยตรง (ต้องผ่านการทำ NAT):
1. **Class A Private:** \`10.0.0.0/8\` (10.0.0.0 ถึง 10.255.255.255) -> 16,777,216 IPs (สำหรับองค์กรขนาดใหญ่มาก)
2. **Class B Private:** \`172.16.0.0/12\` (172.16.0.0 ถึง 172.31.255.255) -> 1,048,576 IPs (สำหรับระดับมหาวิทยาลัย/วิทยาลัย)
3. **Class C Private:** \`192.168.0.0/16\` (192.168.0.0 ถึง 192.168.255.255) -> 65,536 IPs (สำหรับระบบบ้านและแผนกวิชา)
4. **Loopback Address:** \`127.0.0.1/8\` (ใช้ทดสอบระบบเครือข่ายภายในเครื่องตนเอง)
5. **APIPA (Automatic Private IP):** \`169.254.0.0/16\` (เกิดขึ้นเมื่อเครื่องตั้งเป็น DHCP แต่ไม่สามารถติดต่อรับ IP จาก DHCP Server ได้)

---

## 3. ทำไมต้องทำ Subnetting?
1. **การจำกัด Broadcast Domain:** ลดปริมาณทราฟฟิก Broadcast ที่ไม่จำเป็นไม่ให้แพร่กระจายไปกวนแผนกอื่น
2. **ความคุ้มค่าและการประหยัด IP Address:** ป้องกันการสูญเปล่าของหมายเลขไอพี
3. **การรักษาความปลอดภัย (Security Segmentation):** แบ่งโซนนักศึกษา โซนอาจารย์ และโซนเซิร์ฟเวอร์ออกจากกัน เพื่อให้วางไฟร์วอลล์กั้นได้

---

## 4. ตารางสูตรสำเร็จการคำนวณ Subnetting (สำหรับ Prefix /24 ถึง /30)

สูตรคำนวณจำนวนโฮสต์ที่ใช้งานได้ต่อ Subnet:
$$\\text{Usable Hosts} = 2^H - 2$$
*(โดย $H$ คือจำนวนบิตที่เป็นศูนย์ (Host bits) และหักออก 2 เพราะต้องสงวนไว้สำหรับ **Network ID** หมายเลขแรก และ **Broadcast ID** หมายเลขสุดท้าย)*

| Prefix | Subnet Mask | บิต Host ($H$) | ขนาดบล็อก (Block Size) | จำนวนโฮสต์ใช้งานได้จริง | ตัวอย่างการนำไปใช้งาน |
|---|---|---|---|---|---|
| **/24** | 255.255.255.0 | 8 บิต | 256 | **254 เครื่อง** | แผนกวิชาขนาดใหญ่, หอพักนักศึกษา |
| **/25** | 255.255.255.128 | 7 บิต | 128 | **126 เครื่อง** | แผนกวิชาขนาดกลาง |
| **/26** | 255.255.255.192 | 6 บิต | 64 | **62 เครื่อง** | แผนกงานสำนักงาน, ห้องแล็บคอมพิวเตอร์ |
| **/27** | 255.255.255.224 | 5 บิต | 32 | **30 เครื่อง** | ฝ่ายบริหาร, แผนกการเงิน |
| **/28** | 255.255.255.240 | 4 บิต | 16 | **14 เครื่อง** | แผนกบุคลากร, โซนเครื่องปริ้นเตอร์ |
| **/29** | 255.255.255.248 | 3 บิต | 8 | **6 เครื่อง** | โซนเซิร์ฟเวอร์เฉพาะ (DMZ Server Farm) |
| **/30** | 255.255.255.252 | 2 บิต | 4 | **2 เครื่อง** | **ลิงก์เชื่อมต่อระหว่างเราเตอร์สู่เราเตอร์ (Point-to-Point WAN)** |

---

## 5. การจัดสรรเครือข่ายด้วย Variable Length Subnet Masking (VLSM)

**กฎเหล็กของ VLSM:** ต้องนำแผนกที่ต้องการจำนวนโฮสต์ **มากที่สุดขึ้นมาจัดสรรก่อนเสมอ** เพื่อป้องกันปัญหา Subnet ซ้อนทับกัน (Overlap)

### กรณีศึกษาจริง: วิทยาลัยได้รับวง Network 192.168.10.0/24 ต้องการแบ่งสรรดังนี้:
1. **โซนนักศึกษา (Students):** ต้องการ 100 เครื่อง
   - ต้องใช้ขนาดบล็อกอย่างน้อย 128 $\\rightarrow$ ใช้ **/25** (255.255.255.128) รองรับได้ 126 เครื่อง
   - ช่วง IP: **192.168.10.0 ถึง 192.168.10.127**
   - Network ID: \`192.168.10.0\` | Usable IP: \`192.168.10.1 - 192.168.10.126\` | Broadcast ID: \`192.168.10.127\`
2. **โซนอาจารย์ (Teachers):** ต้องการ 50 เครื่อง
   - นำ IP ที่เหลือเริ่มจาก .128 มาจัดสรร บล็อกถัดไปต้องการ 64 $\\rightarrow$ ใช้ **/26** (255.255.255.192) รองรับได้ 62 เครื่อง
   - ช่วง IP: **192.168.10.128 ถึง 192.168.10.191**
   - Network ID: \`192.168.10.128\` | Usable IP: \`192.168.10.129 - 192.168.10.190\` | Broadcast ID: \`192.168.10.191\`
3. **โซนห้องเซิร์ฟเวอร์ (Servers):** ต้องการ 12 เครื่อง
   - นำ IP ที่เหลือเริ่มจาก .192 มาจัดสรร บล็อกต้องการ 16 $\\rightarrow$ ใช้ **/28** (255.255.255.240) รองรับได้ 14 เครื่อง
   - ช่วง IP: **192.168.10.192 ถึง 192.168.10.207**
   - Network ID: \`192.168.10.192\` | Usable IP: \`192.168.10.193 - 192.168.10.206\` | Broadcast ID: \`192.168.10.207\`
4. **ลิงก์เชื่อมต่อ Router R1 -> Router R2:** ต้องการ 2 เครื่อง
   - นำ IP ที่เหลือเริ่มจาก .208 มาจัดสรร $\\rightarrow$ ใช้ **/30** (255.255.255.252) รองรับได้ 2 เครื่องพอดี
   - ช่วง IP: **192.168.10.208 ถึง 192.168.10.211**
   - Usable IP: \`192.168.10.209\` และ \`192.168.10.210\``,
      codeExample: {
        language: "bash",
        code: `! ตัวอย่างการนำผลลัพธ์จาก VLSM ไปกำหนดค่าจริงบน Cisco Router Interface
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# description Gateway_For_Students_VLAN
Router(config-if)# ip address 192.168.10.1 255.255.255.128
Router(config-if)# no shutdown
Router(config-if)# exit

Router(config)# interface gigabitEthernet 0/1
Router(config-if)# description Gateway_For_Teachers_VLAN
Router(config-if)# ip address 192.168.10.129 255.255.255.192
Router(config-if)# no shutdown
Router(config-if)# exit

! ลิงก์ Point-to-Point เชื่อมต่อเราเตอร์
Router(config)# interface serial 0/1/0
Router(config-if)# description WAN_Link_To_Branch_Router
Router(config-if)# ip address 192.168.10.209 255.255.255.252
Router(config-if)# no shutdown`,
        description: "การกำหนดหมายเลข IP Address และ Subnet Mask แบบ VLSM ลงในพอร์ต GigabitEthernet และ Serial บนเราเตอร์ Cisco"
      },
      quiz: [
        {
          id: "net-3-q1",
          question: "เครือข่าย 172.16.10.0/27 มีหมายเลข Broadcast Address คือข้อใด?",
          options: ["172.16.10.31", "172.16.10.32", "172.16.10.63", "172.16.10.255"],
          correctAnswer: 0,
          explanation: "/27 มีขนาดบล็อกละ 32 IP (32 - 1 = 31) ดังนั้นช่วงไอพีคือ 172.16.10.0 ถึง 172.16.10.31 โดยหมายเลขสุดท้าย .31 คือ Broadcast Address"
        },
        {
          id: "net-3-q2",
          question: "สำหรับการเชื่อมต่อแบบ Point-to-Point ระหว่างเราเตอร์ 2 ตัว ข้อใดคือ Subnet Mask ที่ประหยัดและเหมาะสมที่สุด?",
          options: ["/24 (255.255.255.0)", "/28 (255.255.255.240)", "/29 (255.255.255.248)", "/30 (255.255.255.252)"],
          correctAnswer: 3,
          explanation: "/30 มีขนาดบล็อก 4 IP หัก Network และ Broadcast จะเหลือ 2 IP พอดีสำหรับขั้วปลายทางของ Router ทั้งสองฝั่งโดยไม่สูญเปล่า"
        }
      ],
      labGuide: {
        title: "แล็บฝึกคำนวณและตั้งค่าเครือข่ายตามผัง VLSM",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "นำผลการจัดสรร VLSM ของเครือข่ายวิทยาลัย (Students / Teachers / WAN) ไปคอนฟิกลงใน Router 2911 และคอมพิวเตอร์จริงบนโปรแกรมจำลอง",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วาง Router 2911 และ Switch 2 ตัว",
            detail: "วาง Router 2911 ตรงกลาง ต่อพอร์ต G0/0 เข้า Switch ฝั่งซ้าย (Students) และต่อพอร์ต G0/1 เข้า Switch ฝั่งขวา (Teachers)"
          },
          {
            title: "ขั้นตอนที่ 2: ตั้งค่า IP ให้กับ Interface Router",
            detail: "เข้าแท็บ CLI ของเราเตอร์ แล้วพิมพ์ชุดคำสั่งตามโค้ดตัวอย่าง กำหนด G0/0 เป็น IP 192.168.10.1 /25 และ G0/1 เป็น IP 192.168.10.129 /26 อย่าลืมคำสั่ง no shutdown"
          },
          {
            title: "ขั้นตอนที่ 3: กำหนดค่า IP ให้กับเครื่องนักเรียนและอาจารย์",
            detail: "เครื่องนักเรียนฝั่งซ้าย: IP 192.168.10.10, Subnet Mask 255.255.255.128, Default Gateway 192.168.10.1\nเครื่องอาจารย์ฝั่งขวา: IP 192.168.10.130, Subnet Mask 255.255.255.192, Default Gateway 192.168.10.129"
          },
          {
            title: "ขั้นตอนที่ 4: ทดสอบการสื่อสารข้ามวง Subnet",
            detail: "เปิด Command Prompt บนเครื่องนักเรียน แล้วพิมพ์คำสั่ง ping 192.168.10.130 เพื่อทดสอบว่าเราเตอร์เราน์แพ็กเก็ตข้าม Subnet สำเร็จหรือไม่"
          }
        ],
        verification: "การ Ping ข้ามเครือข่ายครั้งแรกอาจมีแพ็กเก็ตหลุด 1 ครั้งเนื่องจากกระบวนการ ARP ของเราเตอร์ (Request timed out) แต่หลังจากนั้นต้องได้รับ Reply ครบถ้วน (Success rate 75% - 100%)"
      }
    },

    // ==========================================
    // บทเรียนที่ 4: การใช้งาน Cisco IOS CLI และการ Hardening
    // ==========================================
    {
      id: "net-4",
      title: "การใช้งาน Cisco IOS Command Line Interface (CLI) และการ Hardening ระบบ",
      description: "เรียนรู้สถาปัตยกรรมหน่วยความจำ Cisco, ลำดับชั้นโหมดคำสั่ง User/Privileged/Global Config, การตั้งค่าการรักษาความปลอดภัย (Security Hardening), รหัสผ่านเข้ารหัส และการจัดการคอนฟิกไฟล์",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การใช้งาน Cisco IOS CLI และการรักษาความปลอดภัยเบื้องต้น

ระบบปฏิบัติการ **Cisco IOS (Internetwork Operating System)** คือหัวใจในการควบคุมเราเตอร์และสวิตช์ระดับองค์กร การควบคุมและบริหารจัดการระบบส่วนใหญ่ดำเนินการผ่านหน้าต่างข้อความ **Command Line Interface (CLI)** ซึ่งมีความรวดเร็ว แม่นยำ และรองรับคำสั่งอัตโนมัติ

---

## 1. โครงสร้างสถาปัตยกรรมหน่วยความจำของอุปกรณ์ Cisco

| ชนิดหน่วยความจำ | ชื่อไฟล์ข้อมูลที่เก็บ | หน้าที่และลักษณะการทำงาน | ไฟดับข้อมูลหายหรือไม่? |
|---|---|---|---|
| **RAM (Random Access Memory)** | \`running-config\` | เก็บระบบปฏิบัติการขณะรัน, ตาราง Routing Table, ARP Cache, ข้อมูลสวิตชิ่งปัจจุบัน | **หายทันที (Volatile)** |
| **NVRAM (Non-Volatile RAM)** | \`startup-config\` | เก็บไฟล์การตั้งค่าที่ถูกบันทึกไว้ เพื่อใช้โหลดขึ้นมาทำงานใหม่ตอนเปิดเครื่อง | **ไม่หาย (Non-Volatile)** |
| **Flash Memory** | \`c2900-universalk9-mz.SPA...bin\` | เก็บระบบปฏิบัติการ Cisco IOS Image แบบสมบูรณ์ รองรับการอัปเกรดเฟิร์มแวร์ | **ไม่หาย** |
| **ROM (Read-Only Memory)** | \`ROM Monitor (ROMmon)\` | เก็บโปรแกรม Microcode พื้นฐานสำหรับทดสอบฮาร์ดแวร์ตอนเปิดเครื่อง (POST) และบูตระบบ | **ไม่หาย** |

> ⚠️ **คำสั่งสำคัญที่สุด:** เมื่อแก้ไขคอนฟิกใดๆ ในระบบ การตั้งค่าจะอยู่ใน RAM (\`running-config\`) เท่านั้น หากไม่สั่ง \`copy running-config startup-config\` (หรือพิมพ์ย่อว่า \`write\`) เมื่ออุปกรณ์ไฟตกหรือรีสตาร์ต ค่าที่ตั้งไว้ทั้งหมดจะสูญหายทันที!

---

## 2. ลำดับชั้นของโหมดคำสั่งบน Cisco IOS (Command Modes)

\`\`\`
1. User EXEC Mode: Router>
   │ (พิมพ์คำสั่ง enable)
   ▼
2. Privileged EXEC Mode: Router#
   │ (พิมพ์คำสั่ง configure terminal)
   ▼
3. Global Configuration Mode: Router(config)#
   │
   ├── พิมพ์ interface g0/0  ──> 4. Interface Mode: Router(config-if)#
   ├── พิมพ์ line console 0   ──> 5. Line Mode: Router(config-line)#
   └── พิมพ์ router ospf 1    ──> 6. Router Mode: Router(config-router)#
\`\`\`

- **User EXEC Mode (\`Router>\`):** โหมดพื้นฐาน ตรวจสอบได้เฉพาะคำสั่งดูสถานะทั่วไป คำสั่งถูกจำกัดเพื่อความปลอดภัย
- **Privileged EXEC Mode (\`Router#\`):** โหมดผู้ดูแลระบบระดับสูง สามารถดูไฟล์การตั้งค่าทั้งหมดด้วย \`show running-config\`, ทดสอบดีบัก และสั่งรีสตาร์ตเครื่อง (\`reload\`)
- **Global Configuration Mode (\`Router(config)#\`):** โหมดการตั้งค่าส่วนกลาง ส่งผลต่อการทำงานของทั้งอุปกรณ์ เช่น การตั้งชื่อเครื่อง (\`hostname\`), แบนเนอร์เตือนภัย, การเปิดใช้งาน Routing
- **Sub-Configuration Modes:** โหมดเฉพาะส่วน เช่น Interface Mode (\`Router(config-if)#\`) สำหรับคอนฟิก IP Address หรือ Line Mode สำหรับตั้งรหัสผ่านพอร์ต Console/SSH

---

## 3. มาตรฐานการรักษาความปลอดภัยเบื้องต้น (Cisco Baseline Hardening)
ในการติดตั้งอุปกรณ์ Cisco สำหรับสภาพแวดล้อมจริง ต้องปฏิบัติตามเกณฑ์ความปลอดภัยมาตรฐานดังนี้:

1. **ตั้งชื่อเครื่องระบุสถานที่ชัดเจน:** เช่น \`hostname BKK-CORE-SW01\`
2. **ปิดระบบค้นหา DNS เมื่อพิมพ์คำสั่งผิด (\`no ip domain-lookup\`):** หากพิมพ์คำสั่งผิดโดยไม่ได้ปิดฟังก์ชันนี้ ระบบ IOS จะค้างส่งคำถาม Broadcast ออกไปรอ Timeout นานเกือบ 1 นาที
3. **ใช้ Enable Secret แทน Enable Password:**
   - \`enable password\` เก็บเป็นข้อความธรรมดา (Plain Text) ไม่ปลอดภัย
   - \`enable secret\` เข้ารหัสผ่านด้วยฟังก์ชันทางเดียวที่แข็งแกร่ง (MD5 / SHA-256)
4. **เปิดระบบเข้ารหัสรหัสผ่านทุกตัวในไฟล์คอนฟิก:** \`service password-encryption\`
5. **ข้อความเตือนภัยทางกฎหมาย (Banner MOTD):** แสดงข้อความเตือนผู้ไม่ประสงค์ดีว่าการบุกรุกมีโทษตามกฎหมายว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์
6. **การป้องกัน Brute-force บนพอร์ตล็อกอิน:** สั่งตัดการเชื่อมต่อเมื่อใส่รหัสผิดติดต่อกัน 3 ครั้ง ภายใน 60 วินาที ให้บล็อก 120 วินาที ด้วยคำสั่ง \`login block-for 120 attempts 3 within 60\``,
      codeExample: {
        language: "bash",
        code: `! 1. เข้าสู่โหมด Global Configuration
Switch> enable
Switch# configure terminal

! 2. ตั้งชื่ออุปกรณ์ และป้องกันอาการพิมพ์คำสั่งผิดแล้วค้าง
Switch(config)# hostname SVC-MAIN-SW01
SVC-MAIN-SW01(config)# no ip domain-lookup

! 3. ตั้งรหัสผ่านระดับสูง (เข้ารหัส SHA-256)
SVC-MAIN-SW01(config)# enable secret AdminSuperSecure@2026

! 4. ตั้งรหัสผ่านพอร์ต Console สำหรับช่างเทคนิคที่หน้าตู้ Rack
SVC-MAIN-SW01(config)# line console 0
SVC-MAIN-SW01(config-line)# password ConsolePass#402
SVC-MAIN-SW01(config-line)# login
SVC-MAIN-SW01(config-line)# logging synchronous
SVC-MAIN-SW01(config-line)# exec-timeout 5 0
SVC-MAIN-SW01(config-line)# exit

! 5. เปิดระบบเข้ารหัสรหัสผ่าน และติดป้ายเตือนทางกฎหมาย
SVC-MAIN-SW01(config)# service password-encryption
SVC-MAIN-SW01(config)# banner motd # WARNING: AUTHORIZED SYSTEM ONLY. UNAUTHORIZED ACCESS IS PROHIBITED BY LAW! #
SVC-MAIN-SW01(config)# exit

! 6. บันทึกการตั้งค่าลง NVRAM ทันที
SVC-MAIN-SW01# copy running-config startup-config`,
        description: "สคริปต์คำสั่งคอนฟิกความปลอดภัยมาตรฐานเริ่มต้น (Baseline Security Configuration) สำหรับอุปกรณ์ Cisco Switch/Router"
      },
      quiz: [
        {
          id: "net-4-q1",
          question: "คำสั่งใดมีหน้าที่ป้องกันไม่ให้หน้าจอ Cisco IOS ค้างส่งคำร้องขอค้นหาชื่อ เมื่อผู้ใช้พิมพ์คำสั่งผิดพลาดในโหมด Config?",
          options: ["no ip routing", "no ip domain-lookup", "logging synchronous", "exec-timeout 0 0"],
          correctAnswer: 1,
          explanation: "เมื่อพิมพ์คำสั่งผิดโดยค่าเริ่มต้น Cisco IOS จะคิดว่าเป็นชื่อโฮสต์และพยายามทำ DNS Broadcast ค้นหา ทำให้เทอร์มินัลค้าง คำสั่ง 'no ip domain-lookup' จะปิดพฤติกรรมนี้ทันที"
        },
        {
          id: "net-4-q2",
          question: "ไฟล์ 'running-config' ที่อุปกรณ์กำลังประมวลผลอยู่ ถูกจัดเก็บอยู่ในหน่วยความจำชนิดใดของอุปกรณ์ Cisco?",
          options: ["ROM", "Flash Memory", "NVRAM", "RAM"],
          correctAnswer: 3,
          explanation: "running-config ถูกเก็บไว้ใน RAM ซึ่งเป็นหน่วยความจำชั่วคราว หากไฟดับข้อมูลจะหายไปทันที จึงต้องบันทึกลง NVRAM (startup-config) เสมอ"
        }
      ],
      labGuide: {
        title: "แล็บฝึกคอนฟิกความปลอดภัยเริ่มต้นและบันทึกค่าลง NVRAM",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "ฝึกเชื่อมต่อสาย Console เข้าสู่ Cisco 2911 Router ทำการตั้งชื่อเครื่อง ใส่รหัสผ่าน Enable Secret, ป้องกันการค้างจากพิมพ์ผิด และทดสอบบันทึกการตั้งค่าลง NVRAM",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วาง Router 2911 และ PC ตรวจสอบสาย Console",
            detail: "วาง Router 2911 และ PC0 จากนั้นเลือกสายสีฟ้าอ่อน (Console Cable) ต่อจากพอร์ต RS-232 ของ PC0 เข้าพอร์ต Console สีฟ้าด้านหลังของ Router"
          },
          {
            title: "ขั้นตอนที่ 2: เปิดเทอร์มินัลเพื่อเข้าสู่หน้าต่างคำสั่ง",
            detail: "คลิกที่ PC0 > เลือกแท็บ Desktop > Terminal > ตั้งค่า Bits per second: 9600 > กด OK จะพบหน้าต่าง CLI ตอบ 'no' เมื่อถามเรื่อง Initial Configuration Dialog"
          },
          {
            title: "ขั้นตอนที่ 3: ดำเนินการตั้งค่าความปลอดภัยตามแบบฝึกหัด",
            detail: "พิมพ์คำสั่งตามสคริปต์ตัวอย่างในบทเรียน: เปลี่ยนชื่อเป็น R1-GATEWAY, ใส่ enable secret, line console 0 พร้อมคำสั่ง logging synchronous และใส่ banner motd",
            codeOrCommand: "enable\nconfigure terminal\nhostname R1-GATEWAY\nno ip domain-lookup\nenable secret Cisco@Pass2026\nexit"
          },
          {
            title: "ขั้นตอนที่ 4: บันทึกและทดสอบการรีสตาร์ต",
            detail: "พิมพ์คำสั่ง copy running-config startup-config จากนั้นสั่ง reload เพื่อทดสอบว่าหลังจากเราเตอร์รีบูตเสร็จ การตั้งค่าทั้งหมดและชื่อ R1-GATEWAY ยังคงอยู่ครบถ้วน"
          }
        ],
        verification: "เมื่ออุปกรณ์รีบูตกลับขึ้นมา จะต้องแสดง Banner ข้อความเตือนภัย และเมื่อพิมพ์คำสั่ง enable จะต้องบังคับให้ใส่รหัสผ่านอย่างถูกต้องจึงจะเข้าสู่โหมด R1-GATEWAY# ได้"
      }
    },

    // ==========================================
    // บทเรียนที่ 5: การออกแบบและตั้งค่า VLAN & 802.1Q Trunking
    // ==========================================
    {
      id: "net-5",
      title: "การออกแบบและตั้งค่า VLAN & 802.1Q Trunking (Virtual LANs & Dot1Q)",
      description: "ทำความเข้าใจปัญหา Broadcast Storm, การแบ่งเครือข่ายเสมือนด้วย VLAN ID (1-4094), โหมดพอร์ต Access vs Trunk, โปรโตคอล IEEE 802.1Q, และแนวทางการรักษาความปลอดภัย Native VLAN",
      duration: "65 นาที",
      level: "ปานกลาง",
      content: `# การออกแบบและตั้งค่าเครือข่ายเสมือน VLAN และ 802.1Q Trunking

ในเครือข่ายอีเธอร์เน็ตแบบดั้งเดิม สวิตช์เลเยอร์ 2 หนึ่งตัวจะมีสถานะเป็น **1 Broadcast Domain** ขนาดใหญ่ หากมีคอมพิวเตอร์เครื่องใดเครื่องหนึ่งส่งข้อมูลแบบ Broadcast (เช่น ไวรัสแพร่กระจายตัว หรือคำสั่งถามหา ARP) สวิตช์จะต้องส่งข้อมูลนั้นออกไปหาทุกๆ พอร์ต ทำให้เกิดปัญหา **Broadcast Storm** แบนด์วิดท์อิ่มตัว และมีความเสี่ยงด้านความปลอดภัย

เทคโนโลยี **Virtual LAN (VLAN)** ตามมาตรฐาน **IEEE 802.1Q** ช่วยแก้ไขปัญหานี้โดยการแบ่งสวิตช์กายภาพตัวเดียวกันออกเป็นเครือข่ายย่อยเสมือนเชิงตรรกะหลายๆ เครือข่ายที่แยกขาดจากกันโดยเด็ดขาด

---

## 1. ช่วงหมายเลข VLAN ID (VLAN Ranges)

ตามมาตรฐาน 802.1Q ฟิลด์ VLAN ID มีขนาด 12 บิต ทำให้รองรับหมายเลขได้ตั้งแต่ **1 ถึง 4094**:

| ช่วงของ VLAN ID | ชนิดของ VLAN | ลักษณะการใช้งาน |
|---|---|---|
| **VLAN 1** | Default VLAN | VLAN ดั้งเดิมที่มาพร้อมสวิตช์ทุกตัว พอร์ตทุกพอร์ตจะสังกัด VLAN 1 ตั้งแต่ออกจากโรงงาน (ไม่สามารถลบได้) |
| **VLAN 2 – 1001** | Normal Range | ช่วงมาตรฐานที่นิยมใช้สำหรับสร้างแผนกวิชา ผู้ใช้งานทั่วไป บันทึกอยู่ในไฟล์ \`vlan.dat\` บน Flash Memory |
| **VLAN 1002 – 1005** | Cisco Reserved | สงวนไว้สำหรับ Token Ring และ FDDI ในอดีต (ไม่สามารถลบได้) |
| **VLAN 1006 – 4094** | Extended Range | ช่วงส่วนขยาย สำหรับผู้ให้บริการอินเทอร์เน็ต (ISP) หรือสถาปัตยกรรม Data Center ขนาดใหญ่ |

---

## 2. ความแตกต่างระหว่าง Access Port และ Trunk Port

### 2.1 Access Port (พอร์ตเชื่อมต่ออุปกรณ์ปลายทาง)
- ใช้สำหรับเชื่อมต่อกับอุปกรณ์ที่ **ไม่เข้าใจ Tag ของ VLAN** เช่น คอมพิวเตอร์ PC, เครื่องพิมพ์, กล้องวงจรปิด
- พอร์ต Access จะถูกกำหนดให้อยู่เพียง **1 VLAN เดียวเท่านั้น**
- เมื่อส่งข้อมูลออกจากพอร์ตนี้ สวิตช์จะทำการปลด Header 802.1Q ออก ข้อมูลที่ส่งถึงคอมพิวเตอร์จะเป็น Standard Ethernet Frame ปกติ

### 2.2 Trunk Port (พอร์ตเชื่อมต่อระหว่างอุปกรณ์สวิตช์)
- ใช้สำหรับเชื่อมต่อระหว่าง **Switch สู่ Switch** หรือ **Switch สู่ Router**
- ทำหน้าที่เป็นท่อส่งรวม (Multiplexing) ที่ยอมให้ข้อมูลของ **หลายๆ VLAN ไหลผ่านสายสัญญาณเส้นเดียวกันได้**
- ข้อมูลที่วิ่งผ่าน Trunk Port จะถูกสวม Header พิเศษขนาด **4 Bytes** ตามมาตรฐาน **IEEE 802.1Q (Dot1Q)** แทรกอยู่ระหว่าง Source MAC Address กับฟิลด์ Type/Length:
  - **TPID (Tag Protocol Identifier):** ขนาด 16 บิต มีค่าคงที่ \`0x8100\` บ่งบอกว่าเป็นเฟรม 802.1Q
  - **TCI (Tag Control Information):**
    - Priority (3 บิต): กำหนดระดับความสำคัญ QoS ตามมาตรฐาน 802.1p (0-7)
    - DEI (1 บิต): Drop Eligible Indicator สำหรับตัดสินใจดรอปแพ็กเก็ตเมื่อทราฟฟิกหนาแน่น
    - **VLAN ID (12 บิต):** ระบุหมายเลข VLAN ปลายทาง (1 - 4094)

---

## 3. ระบบ Native VLAN และการรักษาความปลอดภัย

**Native VLAN** คือ VLAN พิเศษประจำ Trunk Port ที่ข้อมูลจะถูกส่งออกไปโดย **ไม่มีการสวม Tag 802.1Q (Untagged Frame)**
- โดยค่าเริ่มต้นจากโรงงาน Native VLAN ของสวิตช์ Cisco ทุกพอร์ตคือ **VLAN 1**
- **ความเสี่ยงด้านความปลอดภัย:** ผู้ไม่หวังดีอาจใช้วิธี **Double-Tagging Attack** (การซ้อน Tag ปลอม) ลักลอบส่งแพ็กเก็ตข้ามไปโจมตี VLAN อื่นได้
- **แนวทางปฏิบัติที่เป็นมาตรฐานความปลอดภัยระดับสูง (Security Best Practice):**
  1. ห้ามใช้ VLAN 1 ในการรับส่งข้อมูลของผู้ใช้งาน
  2. เปลี่ยนหมายเลข Native VLAN ไปเป็นเลขที่ไม่มีการใช้งาน (เช่น VLAN 999 หรือ VLAN 666) ให้ตรงกันที่ปลายสายทั้งสองฝั่งของ Trunk Link
  3. ปิดการเจรจาโหมดพอร์ตอัตโนมัติ (DTP - Dynamic Trunking Protocol) ด้วยคำสั่ง \`switchport nonegotiate\`

---

## 4. แผนผังการจัดสรร VLAN ในวิทยาลัย (Campus VLAN Blueprint)

- **VLAN 10 (Teachers):** เครือข่ายอาจารย์ (IP: 192.168.10.0/24)
- **VLAN 20 (Students):** เครือข่ายห้องเรียนนักเรียนนักศึกษา (IP: 192.168.20.0/24)
- **VLAN 30 (Administration):** เครือข่ายฝ่ายทะเบียนและการเงิน (IP: 192.168.30.0/24)
- **VLAN 99 (Management):** เครือข่ายสำหรับรีโมตจัดการอุปกรณ์ Switch/Router (IP: 192.168.99.0/24)
- **VLAN 999 (BlackHole/Native):** เครือข่ายกักกันพอร์ตที่ไม่ได้ใช้งาน`,
      codeExample: {
        language: "bash",
        code: `! 1. สร้าง VLAN ฐานข้อมูลบน Cisco Switch
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name Teachers_Faculty
Switch(config-vlan)# vlan 20
Switch(config-vlan)# name Students_Lab
Switch(config-vlan)# vlan 99
Switch(config-vlan)# name Network_Management
Switch(config-vlan)# exit

! 2. กำหนดช่วงพอร์ต Fa0/1 - Fa0/10 ให้เป็น Access Port สำหรับ VLAN 10
Switch(config)# interface range fastEthernet 0/1 - 10
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# spanning-tree portfast
Switch(config-if-range)# exit

! 3. กำหนดช่วงพอร์ต Fa0/11 - Fa0/20 ให้เป็น Access Port สำหรับ VLAN 20
Switch(config)# interface range fastEthernet 0/11 - 20
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 20
Switch(config-if-range)# spanning-tree portfast
Switch(config-if-range)# exit

! 4. กำหนดพอร์ต Gi0/1 เป็น 802.1Q Trunk Link เชื่อมต่อสวิตช์ตัวถัดไป
Switch(config)# interface gigabitEthernet 0/1
Switch(config-if)# description UPLINK_TO_CORE_SWITCH
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99
Switch(config-if)# switchport trunk allowed vlan 10,20,99
Switch(config-if)# switchport nonegotiate
Switch(config-if)# exit

! 5. ตรวจสอบสถานะ VLAN และ Trunk
Switch# show vlan brief
Switch# show interfaces trunk`,
        description: "สคริปต์คำสั่งสร้าง VLAN, กำหนดช่วง Access Port, เปิดใช้งาน PortFast และคอนฟิก 802.1Q Trunk Port อย่างปลอดภัย"
      },
      quiz: [
        {
          id: "net-5-q1",
          question: "Header มาตรฐาน IEEE 802.1Q ที่ถูกแทรกเข้าไปใน Ethernet Frame เมื่อวิ่งผ่าน Trunk Link มีขนาดเท่าใด?",
          options: ["2 Bytes", "4 Bytes", "8 Bytes", "20 Bytes"],
          correctAnswer: 1,
          explanation: "802.1Q Tag มีขนาด 4 Bytes ประกอบด้วย TPID (2 Bytes) และ TCI ซึ่งเก็บค่า Priority, DEI และ VLAN ID ขนาด 12 บิต"
        },
        {
          id: "net-5-q2",
          question: "เพราะเหตุใดจึงแนะนำให้ปิดโปรโตคอล DTP (Dynamic Trunking Protocol) ด้วยคำสั่ง 'switchport nonegotiate' ในเครือข่ายองค์กร?",
          options: [
            "เพื่อประหยัดหน่วยความจำ RAM ของสวิตช์",
            "เพื่อป้องกันไม่ให้ผู้ไม่หวังดีนำคอมพิวเตอร์มาหลอกสวิตช์เจรจาโหมดพอร์ตกลายเป็น Trunk Link (VLAN Hopping Attack)",
            "เพื่อให้สวิตช์สามารถส่งข้อมูลได้เร็วกว่า 1 Gbps",
            "เพื่อให้สามารถใช้ VLAN 1 ส่งข้อมูลได้"
          ],
          correctAnswer: 1,
          explanation: "DTP ทำให้พอร์ตพยายามเจรจาโหมดอัตโนมัติ ซึ่งผู้โจมตีสามารถส่งสัญญาณจำลองขอเป็น Trunk แล้วดักฟังข้อมูลของทุก VLAN ได้ การปิด DTP ถือเป็น Best Practice ด้านความปลอดภัย"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบเครือข่ายแบ่งแผนกด้วย VLAN และ 802.1Q Trunking",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "เชื่อมต่อสวิตช์ 2960 จำนวน 2 ตัวผ่านสาย Trunk Link และต่อคอมพิวเตอร์แผนกอาจารย์ (VLAN 10) กับแผนกนักศึกษา (VLAN 20) เพื่อพิสูจน์การแยกวง Broadcast",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วางสวิตช์ SW1, SW2 และ PC ประจำแผนก",
            detail: "วาง Switch 2960 สองตัว (SW1 และ SW2) ลากสาย Copper Cross-Over (หรือสายตรง Auto-MDIX) เชื่อมพอร์ต Gi0/1 ของ SW1 เข้า Gi0/1 ของ SW2\n- ที่ SW1: ต่อ PC-Teacher1 (Fa0/1) และ PC-Student1 (Fa0/11)\n- ที่ SW2: ต่อ PC-Teacher2 (Fa0/1) และ PC-Student2 (Fa0/11)"
          },
          {
            title: "ขั้นตอนที่ 2: สร้าง VLAN 10 และ 20 บนสวิตช์ทั้งสองตัว",
            detail: "เข้าหน้า CLI ของทั้ง SW1 และ SW2 ทำการพิมพ์คำสั่งสร้าง VLAN 10 (ชื่อ Teachers) และ VLAN 20 (ชื่อ Students) ให้ตรงกัน"
          },
          {
            title: "ขั้นตอนที่ 3: กำหนด Access Port และ Trunk Port",
            detail: "ที่ SW1 และ SW2:\n- กำหนด Fa0/1 เป็น switchport access vlan 10\n- กำหนด Fa0/11 เป็น switchport access vlan 20\n- กำหนด Gi0/1 เป็น switchport mode trunk"
          },
          {
            title: "ขั้นตอนที่ 4: ตั้งค่า IP และทดสอบการสื่อสาร",
            detail: "ตั้ง IP เครื่องอาจารย์: 192.168.10.1 และ 192.168.10.2\nตั้ง IP เครื่องนักศึกษา: 192.168.20.1 และ 192.168.20.2\n- สั่ง Ping จาก PC-Teacher1 ไปยัง PC-Teacher2 (VLAN 10 ข้ามสวิตช์) -> ต้อง Ping เจอสำเร็จ\n- สั่ง Ping จาก PC-Student1 ข้ามไปหา PC-Teacher1 (ต่าง VLAN) -> ต้อง Ping ไม่เจอโดยสิ้นเชิง"
          }
        ],
        verification: "การ Ping ระหว่างเครื่องที่อยู่ VLAN เดียวกันข้ามสวิตช์ต้องได้ 100% Success แต่การ Ping ข้ามหมายเลข VLAN ต้องไม่สำเร็จ (100% loss) พิสูจน์ว่า Broadcast Domain ถูกแยกขาดจากกันแล้ว"
      }
    },

    // ==========================================
    // บทเรียนที่ 6: Inter-VLAN Routing & Layer 3 Switch
    // ==========================================
    {
      id: "net-6",
      title: "Inter-VLAN Routing: Router-on-a-Stick และ Multi-Layer Switch (L3 Switching)",
      description: "เชื่อมโยงการสื่อสารข้าม VLAN ด้วย Sub-interfaces บน Router (Router-on-a-Stick) และการสร้าง Switch Virtual Interface (SVI) บน Layer 3 Switch ระดับฮาร์ดแวร์",
      duration: "65 นาที",
      level: "ปานกลาง",
      content: `# การเชื่อมต่อและหาเส้นทางข้ามเครือข่ายเสมือน (Inter-VLAN Routing)

จากบทเรียนก่อนหน้า อุปกรณ์ที่อยู่ต่าง VLAN กันจะไม่สามารถสื่อสารกันได้เลยในระดับ Layer 2 แต่ในชีวิตจริง มีความจำเป็นที่นักศึกษา (VLAN 20) จะต้องส่งงานเข้าเครื่องเซิร์ฟเวอร์ฐานข้อมูลกลางของวิทยาลัย (VLAN 30) หรือเข้าใช้งานอินเทอร์เน็ต

การจะทำให้ข้อมูลวิ่งข้ามระหว่าง VLAN ได้ จำเป็นต้องมี **อุปกรณ์ในระดับ Layer 3 (Network Layer)** เช่น เราเตอร์ หรือ สวิตช์เลเยอร์ 3 เข้ามาทำหน้าที่เป็น **Default Gateway** และตัดสินใจส่งต่อแพ็กเก็ต (Packet Routing)

---

## 1. การเปรียบเทียบ 2 สถาปัตยกรรม Inter-VLAN Routing

| คุณสมบัติ | วิธีที่ 1: Router-on-a-Stick (ROAS) | วิธีที่ 2: Multi-Layer Switch (L3 Switch SVI) |
|---|---|---|
| **อุปกรณ์ที่ใช้** | เราเตอร์ทั่วไป + สวิตช์ Layer 2 | สวิตช์เลเยอร์ 3 (เช่น Cisco Catalyst 3560/3650/3850) |
| **การเชื่อมต่อกายภาพ** | ใช้สายเคเบิล 1 เส้นเชื่อม Trunk Link เข้าหาพอร์ตเราเตอร์ | Routing เกิดขึ้นภายในตัวถังสวิตช์ผ่านบัสความเร็วสูง |
| **กลไกการทำงาน** | แบ่งพอร์ตจริงออกเป็นพอร์ตเสมือน (**Sub-interfaces**) | สร้างอินเทอร์เฟซเสมือนประจำแต่ละ VLAN (**SVI**) |
| **ประสิทธิภาพและความเร็ว** | ต่ำกว่า เพราะแบนด์วิดท์แชร์กันในสายเส้นเดียว และประมวลผลด้วย CPU เราเตอร์ | **สูงมากระดับ Wire-Speed** ประมวลผลด้วยชิปฮาร์ดแวร์เฉพาะทาง (ASIC) |
| **ความเหมาะสม** | สาขาย่อย, องค์กรขนาดเล็ก (ไม่เกิน 50-100 คน) | **Campus Core, Data Center, องค์กรขนาดกลางและใหญ่** |

---

## 2. เจาะลึกวิธีที่ 1: Router-on-a-Stick (ROAS)

ในวิธี Router-on-a-Stick เราเตอร์จะใช้พอร์ตกายภาพเพียงพอร์ตเดียว (เช่น \`GigabitEthernet 0/0\`) ต่อเข้ากับพอร์ต Trunk ของสวิตช์ จากนั้นบนเราเตอร์จะเปิดพอร์ตหลักด้วยคำสั่ง \`no shutdown\` โดยไม่ต้องใส่ IP Address แต่จะทำการซอยเป็นพอร์ตย่อยเชิงตรรกะ:
- \`g0/0.10\` สำหรับรับส่งทราฟฟิกของ VLAN 10
- \`g0/0.20\` สำหรับรับส่งทราฟฟิกของ VLAN 20

> ⚠️ **กฎเหล็กของ Cisco Sub-interface:** บน Sub-interface จะต้องใส่คำสั่ง \`encapsulation dot1Q <vlan-id>\` เพื่อระบุหมายเลข VLAN ก่อนเสมอ จึงจะสามารถกำหนดหมายเลข \`ip address\` ประจำเกตเวย์ได้

---

## 3. เจาะลึกวิธีที่ 2: Multi-Layer Switch (Layer 3 Switching)

สวิตช์ระดับ Layer 3 ผสานความเร็วในการสลับเฟรมระดับ Layer 2 เข้ากับความสามารถในการหาเส้นทางระดับ Layer 3 โดยใช้เทคโนโลยี **Cisco Express Forwarding (CEF)** ที่ประกอบด้วย:
1. **FIB (Forwarding Information Base):** ตารางหาเส้นทางระดับฮาร์ดแวร์ที่ดึงมาจาก Routing Table
2. **Adjacency Table:** ตารางเก็บข้อมูล Layer 2 Next-hop MAC Address

### การสร้าง Switch Virtual Interface (SVI):
SVI คืออินเทอร์เฟซเสมือนของ Layer 3 ที่สร้างขึ้นบนสวิตช์เพื่อทำหน้าที่เป็น Default Gateway ให้กับคอมพิวเตอร์ใน VLAN นั้นๆ เช่น \`interface vlan 10\` และใส่ IP \`192.168.10.1/24\`

### คำสั่งเปิดระบบ Routing บนสวิตช์ Layer 3:
สวิตช์ L3 ของ Cisco เมื่อออกจากโรงงานจะทำงานในโหมด Layer 2 เป็นค่าเริ่มต้น หากต้องการให้สามารถเราน์แพ็กเก็ตข้าม VLAN ได้ **ต้องสั่งคำสั่ง \`ip routing\` ในโหมด Global Configuration เสมอ**`,
      codeExample: {
        language: "bash",
        code: `! ==========================================
! วิธีที่ 1: คอนฟิก Router-on-a-Stick บน Cisco Router
! ==========================================
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# description Trunk_Link_To_Switch
Router(config-if)# no ip address
Router(config-if)# no shutdown
Router(config-if)# exit

! สร้าง Sub-interface สำหรับ VLAN 10 (Teachers)
Router(config)# interface gigabitEthernet 0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit

! สร้าง Sub-interface สำหรับ VLAN 20 (Students)
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# exit

! ==========================================
! วิธีที่ 2: คอนฟิก SVI บน Cisco Layer 3 Switch (Catalyst 3560/3650)
! ==========================================
L3Switch(config)# ip routing    <-- สำคัญมาก! ต้องเปิดคำสั่งนี้เพื่อเปิดโหมดเราเตอร์

! สร้าง SVI Gateway ประจำ VLAN 10
L3Switch(config)# interface vlan 10
L3Switch(config-if)# description Gateway_Teachers
L3Switch(config-if)# ip address 192.168.10.1 255.255.255.0
L3Switch(config-if)# no shutdown

! สร้าง SVI Gateway ประจำ VLAN 20
L3Switch(config)# interface vlan 20
L3Switch(config-if)# description Gateway_Students
L3Switch(config-if)# ip address 192.168.20.1 255.255.255.0
L3Switch(config-if)# no shutdown`,
        description: "สคริปต์เปรียบเทียบการตั้งค่า Inter-VLAN Routing แบบ Router-on-a-Stick และแบบ SVI บน Layer 3 Switch"
      },
      quiz: [
        {
          id: "net-6-q1",
          question: "เมื่อต้องการให้ Cisco Layer 3 Switch เริ่มทำหน้าที่หาเส้นทางและส่งต่อแพ็กเก็ตข้าม VLAN ได้ จะต้องพิมพ์คำสั่งใดในโหมด Global Configuration?",
          options: ["router rip", "enable routing", "ip routing", "switchport routing"],
          correctAnswer: 2,
          explanation: "คำสั่ง 'ip routing' เป็นคำสั่งเปิดการทำงานของเอนจิน Layer 3 บน Cisco Multilayer Switch หากไม่ได้เปิดคำสั่งนี้ สวิตช์จะทำงานได้เพียง Layer 2 เท่านั้น"
        },
        {
          id: "net-6-q2",
          question: "ในสถาปัตยกรรมแบบ Router-on-a-Stick พอร์ตกายภาพหลักบนเราเตอร์ (เช่น g0/0) ควรถูกตั้งค่าอย่างไร?",
          options: [
            "กำหนดเป็น switchport mode trunk",
            "เปิดพอร์ตด้วยคำสั่ง no shutdown โดยไม่ต้องใส่ IP Address",
            "ใส่ IP Address ของ VLAN 1",
            "สั่ง encapsulation dot1Q ที่พอร์ตหลักโดยตรง"
          ],
          correctAnswer: 1,
          explanation: "พอร์ตหลักทำหน้าที่เพียงเป็นตัวเชื่อมต่อทางกายภาพ จึงเปิดด้วย no shutdown โดยไม่ใส่ IP ส่วนการกำหนด IP และระบุ Encapsulation จะทำที่ระดับ Sub-interfaces (เช่น g0/0.10)"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบ Inter-VLAN Routing ด้วย Layer 3 Switch และ DHCP Relay",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "คอนฟิก Cisco 3560 Layer 3 Switch สร้าง SVI ให้บริการเป็น Default Gateway ให้กับ VLAN 10 และ VLAN 20 พร้อมทดสอบส่งข้อมูลข้ามเครือข่าย",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วางอุปกรณ์ Layer 3 Switch และคอมพิวเตอร์",
            detail: "ไปที่หมวด Switches เลือกวางสวิตช์ Multilayer รุ่น 3560-24PS วาง PC-Teacher1 ต่อเข้าพอร์ต Fa0/1 และ PC-Student1 ต่อเข้าพอร์ต Fa0/11"
          },
          {
            title: "ขั้นตอนที่ 2: เปิดโหมด Routing และสร้าง VLAN",
            detail: "เข้าหน้า CLI ของสวิตช์ 3560:\nพิมพ์ enable > configure terminal > พิมพ์ 'ip routing'\nสร้าง vlan 10 และ vlan 20 กำหนดพอร์ต Fa0/1 เป็น access vlan 10 และ Fa0/11 เป็น access vlan 20"
          },
          {
            title: "ขั้นตอนที่ 3: สร้าง SVI Gateway ประจำแต่ละ VLAN",
            detail: "พิมพ์คำสั่งสร้างอินเทอร์เฟซเสมือน:\n- interface vlan 10 > ip address 192.168.10.1 255.255.255.0 > no shutdown\n- interface vlan 20 > ip address 192.168.20.1 255.255.255.0 > no shutdown"
          },
          {
            title: "ขั้นตอนที่ 4: ตั้งค่า IP ให้คอมพิวเตอร์และทดสอบ",
            detail: "PC-Teacher1: IP 192.168.10.50 / Gateway 192.168.10.1\nPC-Student1: IP 192.168.20.50 / Gateway 192.168.20.1\nจากนั้นทดสอบ Ping จาก PC-Teacher1 ข้ามไปหา PC-Student1 (192.168.20.50)"
          }
        ],
        verification: "การ Ping ข้าม VLAN ผ่าน Layer 3 Switch ต้องได้รับข้อความตอบกลับ 'Reply from 192.168.20.50' สำเร็จ โดยมีค่า TTL ลดลง 1 ระดับ (เหลือ 127) ยืนยันว่าแพ็กเก็ตผ่านกระบวนการ L3 Routing จริง"
      }
    },

    // ==========================================
    // บทเรียนที่ 7: Routing Protocols: Static Routing และ OSPF v2
    // ==========================================
    {
      id: "net-7",
      title: "Routing Protocols: Static Routing และ OSPF v2 (Open Shortest Path First)",
      description: "ทำความเข้าใจ Routing Table, ค่า Administrative Distance (AD), เมตริก Cost, การทำงานของ Link-State Routing, อัลกอริทึม Dijkstra SPF, การเลือก DR/BDR, และการคอนฟิก OSPF Single Area",
      duration: "70 นาที",
      level: "ขั้นสูง",
      content: `# โปรโตคอลการหาเส้นทาง: Static Routing และ OSPF v2

ในเครือข่ายระดับองค์กรที่มีเราเตอร์และสวิตช์เลเยอร์ 3 หลายตัว การเชื่อมต่อระหว่างเครือข่ายย่อยจำเป็นต้องอาศัย **Routing Table (ตารางการหาเส้นทาง)** เพื่อระบุว่า เมื่อมีแพ็กเก็ตส่งมายัง IP ปลายทางนี้ จะต้องส่งออกไปยังอินเทอร์เฟซใด หรือส่งต่อไปยังเน็กซ์ฮ็อป (Next-hop IP) ตัวไหน

---

## 1. การเปรียบเทียบ Static Routing กับ Dynamic Routing

| คุณสมบัติ | Static Routing (กำหนดด้วยมือ) | Dynamic Routing (โปรโตคอลหาเส้นทางอัตโนมัติ) |
|---|---|---|
| **ความซับซ้อนในการตั้งค่า** | ผู้ดูแลระบบต้องพิมพ์บอกเส้นทางเองทุกเส้นทาง | เปิดใช้งานโปรโตคอล เราเตอร์จะคุยและแลกเปลี่ยนตารางกันเอง |
| **การใช้ทรัพยากร (CPU/RAM)** | ต่ำมาก เพราะไม่มีการส่งแพ็กเก็ตคำนวณเส้นทาง | ปานกลางถึงสูง ตามความซับซ้อนของอัลกอริทึม |
| **เมื่อสายเคเบิลหรือลิงก์ขาด** | **ไม่สามารถเปลี่ยนเส้นทางเองได้** ระบบจะล่มจนกว่าคนจะมาแก้ | **ตรวจจับและคำนวณเส้นทางสำรองให้อัตโนมัติ (Fast Convergence)** |
| **ความปลอดภัย** | สูงสุด เพราะไม่มีการส่งข้อมูลโครงสร้างเครือข่ายออกไป | ต้องเปิดระบบยืนยันตัวตน (MD5/SHA Authentication) เพื่อป้องกันเราเตอร์ปลอม |
| **ความเหมาะสม** | ลิงก์ออกอินเทอร์เน็ต (Default Route), เครือข่ายสาขาเล็กๆ | เครือข่ายแคมปัสขนาดใหญ่, Data Center, ISP |

---

## 2. ค่า Administrative Distance (AD) - ลำดับความน่าเชื่อถือของเส้นทาง

เมื่อเราเตอร์ได้รับข้อมูลเส้นทางไปยังปลายทางเดียวกันจากหลายแหล่ง เราเตอร์จะเลือกติดตั้งเส้นทางที่มีค่า **Administrative Distance (AD) ต่ำที่สุด** ลงใน Routing Table:

| ประเภทของเส้นทาง (Route Source) | ค่า Administrative Distance (AD) | รหัสใน Routing Table |
|---|---|---|
| **Connected Interface (สายต่อตรงเข้าพอร์ต)** | **0** | **C** |
| **Static Route** | **1** | **S** |
| **EIGRP Summary Route** | **5** | **D** |
| **eBGP (External BGP)** | **20** | **B** |
| **EIGRP (Internal)** | **90** | **D** |
| **OSPF (Open Shortest Path First)** | **110** | **O** |
| **IS-IS** | **115** | **i** |
| **RIP (Routing Information Protocol)** | **120** | **R** |

---

## 3. สถาปัตยกรรม OSPF v2 (RFC 2328)

**OSPF (Open Shortest Path First)** เป็นมาตรฐานเปิดระดับสากลแบบ **Link-State Routing Protocol** ที่นิยมใช้งานมากที่สุดในองค์กร:

### 3.1 อัลกอริทึม Dijkstra's Shortest Path First (SPF)
เราเตอร์ OSPF แต่ละตัวจะสร้างแผนผังโทโพโลยีเครือข่ายทั้งหมดเก็บไว้ใน **Link-State Database (LSDB)** ของตนเอง จากนั้นจะใช้อัลกอริทึมคณิตศาสตร์ของ Dijkstra คำนวณหาเส้นทางที่สั้นที่สุดโดยพิจารณาจากค่า **Metric คือ Cost**:
$$\\text{Cost} = \\frac{\\text{Reference Bandwidth}}{\\text{Interface Bandwidth}}$$
*(โดยค่าเริ่มต้น Reference Bandwidth คือ 100 Mbps ดังนั้นลิงก์ 100 Mbps จะมี Cost = 1 ส่วนลิงก์ 10 Mbps จะมี Cost = 10 เส้นทางที่มีผลรวม Cost ต่ำที่สุดจะถูกเลือก)*

> 💡 **ข้อควรระวังในยุคปัจจุบัน:** ในเครือข่ายปัจจุบันที่มีพอร์ต Gigabit (1000 Mbps) และ 10G ค่า Cost จะกลายเป็น 1 เท่ากันหมด แก้ไขโดยตั้งคำสั่ง \`auto-cost reference-bandwidth 1000\` หรือ \`10000\` เพื่อให้แยกความแตกต่างของความเร็วได้อย่างถูกต้อง

### 3.2 สถาปัตยกรรม Area และ Backbone Area 0
OSPF ใช้ระบบลำดับชั้นในการแบ่งพื้นที่เพื่อลดการคำนวณ SPF:
- **Area 0 (Backbone Area):** พื้นที่แกนหลักที่ทุก Area อื่นๆ (เช่น Area 1, Area 2) จะต้องเชื่อมต่อเข้ามาหาเสมอ
- **Router ID (RID):** หมายเลข 32 บิตที่ระบุตัวตนของเราเตอร์ในระบบ OSPF โดยเลือกจาก:
  1. คำสั่งกำหนดด้วยตนเอง: \`router-id <ip-address>\` (แนะนำที่สุด)
  2. IP Address ที่สูงที่สุดของ **Loopback Interface**
  3. IP Address ที่สูงที่สุดของพอร์ตกายภาพที่เปิดทำงานอยู่

### 3.3 การเลือก DR (Designated Router) และ BDR (Backup Designated Router)
ในเครือข่ายแบบ Multi-access (เช่น สวิตช์ต่อเราเตอร์หลายตัว) เราเตอร์จะเลือก **DR** และ **BDR** เพื่อเป็นศูนย์กลางการกระจายข้อมูล LSA ช่วยลดจำนวนแพ็กเก็ต Hello และอัปเดต โดยเราเตอร์ที่มีค่า **Priority สูงสุด (0-255)** จะได้เป็น DR (หากเท่ากันจะตัดสินที่ Router ID สูงสุด)`,
      codeExample: {
        language: "bash",
        code: `! ==========================================
! 1. การกำหนด Static Route และ Default Route
! ==========================================
! ส่งทราฟฟิกไปเครือข่าย 10.50.0.0/16 ผ่านเกตเวย์ 192.168.1.254
Router(config)# ip route 10.50.0.0 255.255.0.0 192.168.1.254

! Default Route (เส้นทางเชื่อมต่อไปยังอินเทอร์เน็ต เมื่อไม่ตรงกับเส้นทางใดเลย)
Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1

! ==========================================
! 2. การเปิดใช้งานและตั้งค่า OSPF v2 (Single Area 0)
! ==========================================
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# auto-cost reference-bandwidth 10000

! ประกาศเครือข่ายด้วย Wildcard Mask (255.255.255.255 ลบด้วย Subnet Mask)
! เครือข่าย 192.168.10.0/24 (Wildcard คือ 0.0.0.255)
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
! เครือข่าย WAN 10.0.0.0/30 (Wildcard คือ 0.0.0.3)
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0

! กระจายเส้นทางอินเทอร์เน็ต (Default Route) ให้เราเตอร์ตัวอื่นในเครือข่ายอัตโนมัติ
Router(config-router)# default-information originate
Router(config-router)# exit

! 3. คำสั่งตรวจสอบและวิเคราะห์การทำงานของ OSPF
Router# show ip protocols
Router# show ip route ospf
Router# show ip ospf neighbor
Router# show ip ospf database`,
        description: "สคริปต์การตั้งค่า Static Route, Default Route และการเปิดใช้งาน OSPF Single Area 0 พร้อมคำสั่งตรวจสอบสถานะเพื่อนบ้าน (Neighbors)"
      },
      quiz: [
        {
          id: "net-7-q1",
          question: "ค่า Administrative Distance (AD) ของโปรโตคอล OSPF ตามมาตรฐานของอุปกรณ์ Cisco มีค่าเท่าใด?",
          options: ["90", "100", "110", "120"],
          correctAnswer: 2,
          explanation: "ค่า AD ของ OSPF คือ 110 (ต่ำกว่า RIP ที่มี AD 120 แต่วางใจได้น้อยกว่า Connected=0, Static=1 และ EIGRP=90)"
        },
        {
          id: "net-7-q2",
          question: "ในคำสั่งประกาศเครือข่าย OSPF 'network 172.16.0.0 0.0.255.255 area 0' ตัวเลข 0.0.255.255 เรียกว่าอะไร และตรงกับ Subnet Mask ขนาดเท่าใด?",
          options: [
            "Subnet Mask ขนาด /16",
            "Wildcard Mask ตรงกับ Subnet Mask 255.255.0.0 (/16)",
            "Inverse Mask ตรงกับ Subnet Mask 255.255.255.0 (/24)",
            "Host Mask สำหรับเครื่องเดี่ยว"
          ],
          correctAnswer: 1,
          explanation: "0.0.255.255 คือ Wildcard Mask เกิดจากนำ 255.255.255.255 ลบด้วย Subnet Mask 255.255.0.0 (/16) ซึ่งบิต 0 หมายถึงต้องตรงกันทุกบิต และบิต 1 หมายถึงละเว้นไม่สนใจ"
        }
      ],
      labGuide: {
        title: "แล็บสร้างโครงข่ายหาเส้นทางอัตโนมัติด้วย OSPF Multi-Router",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "เชื่อมต่อเราเตอร์ Cisco 2911 จำนวน 3 ตัวในรูปแบบวงแหวน (Redundant Ring) เปิดใช้งาน OSPF Area 0 และทดสอบการสลับเส้นทางอัตโนมัติเมื่อสายสัญญาณหลักขาด",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วาง Router R1, R2, R3 และต่อสายสัญญาณ",
            detail: "วางเราเตอร์ 3 ตัว เชื่อมต่อลิงก์ Point-to-Point (/30) ระหว่าง R1-R2 (10.0.0.0/30), R2-R3 (10.0.0.4/30) และ R1-R3 (10.0.0.8/30) ต่อคอมพิวเตอร์ LAN เข้าที่ R1 และ R3"
          },
          {
            title: "ขั้นตอนที่ 2: กำหนด IP Address ประจำ Interface ให้ครบทุกตัว",
            detail: "เข้าคอนฟิก IP Address ตามแต่ละคู่ Subnet /30 บน Serial หรือ GigabitEthernet พร้อมสั่ง no shutdown ตรวจสอบให้ทุกพอร์ตขึ้นไฟเขียว"
          },
          {
            title: "ขั้นตอนที่ 3: เปิดใช้งาน OSPF Process 1 บนเราเตอร์ทั้งสามตัว",
            detail: "บนเราเตอร์แต่ละตัว สั่ง router ospf 1 > ตั้งค่า router-id (R1=1.1.1.1, R2=2.2.2.2, R3=3.3.3.3) > ประกาศ network ที่เชื่อมต่อตรงกับตัวมันเองให้อยู่ใน area 0"
          },
          {
            title: "ขั้นตอนที่ 4: ตรวจสอบสถานะ OSPF Neighbor และทดสอบ Failover",
            detail: "พิมพ์คำสั่ง show ip ospf neighbor บน R1 ตรวจสอบว่าเห็น R2 และ R3 ในสถานะ FULL/DR หรือ FULL/BDR\nจากนั้นเปิดคำสั่ง ping -t จาก PC ฝั่ง R1 ไปยัง PC ฝั่ง R3 แล้วทดลองกดลบสายเคเบิลเส้นตรง R1-R3 เพื่อดูว่าแพ็กเก็ตสลับไปวิ่งผ่าน R2 โดยอัตโนมัติหรือไม่"
          }
        ],
        verification: "ในตาราง show ip route ospf จะต้องมองเห็นเส้นทางของทุกเครือข่ายย่อยขึ้นต้นด้วยสัญลักษณ์ตัว 'O' และเมื่อสายเชื่อมต่อหลักถูกตัด การสื่อสารจะต้องกลับมาใช้งานได้ต่อเนื่องภายในเวลาไม่กี่วินาที"
      }
    },

    // ==========================================
    // บทเรียนที่ 8: ความปลอดภัยเครือข่ายด้วย Access Control Lists (ACLs)
    // ==========================================
    {
      id: "net-8",
      title: "ความปลอดภัยเครือข่าย: Access Control Lists (Standard & Extended ACLs)",
      description: "ทำความเข้าใจไฟร์วอลล์คัดกรองแพ็กเก็ต (Packet Filtering), กฎเกณฑ์ Implicit Deny, ความแตกต่างและการวางตำแหน่ง Standard ACL vs Extended ACL, และการเขียน Named ACL ป้องกันระบบเซิร์ฟเวอร์",
      duration: "70 นาที",
      level: "ขั้นสูง",
      content: `# การควบคุมความปลอดภัยระดับโครงข่ายด้วย Access Control Lists (ACLs)

**Access Control List (ACL)** คือชุดของกฎเกณฑ์ (Sequential Rules) ที่ผู้ดูแลระบบสร้างขึ้นบนอุปกรณ์เราเตอร์หรือสวิตช์เลเยอร์ 3 เพื่อทำหน้าที่เป็น **ไฟร์วอลล์คัดกรองแพ็กเก็ต (Packet-filtering Firewall)** โดยตรวจสอบส่วนหัวของข้อมูล (Headers) และตัดสินใจว่าจะ **อนุญาตให้ผ่าน (permit)** หรือ **ทิ้งแพ็กเก็ต (deny)**

---

## 1. ลำดับขั้นตอนการประมวลผลกฎของ ACL (Processing Logic)

1. **ประมวลผลจากบนลงล่าง (Top-Down Processing):** แพ็กเก็ตจะถูกนำมาเปรียบเทียบกับกฎบรรทัดแรกไล่ลงมาเรื่อยๆ
2. **จับคู่ตรงไหน หยุดตรงนั้นทันที (First-Match Terminates):** เมื่อแพ็กเก็ตตรงกับกฎบรรทัดใดบรรทัดหนึ่ง ระบบจะสั่ง \`permit\` หรือ \`deny\` ทันที และจะไม่ตรวจสอบบรรทัดด้านล่างอีก
3. **กฎปิดท้ายที่มองไม่เห็น (Implicit Deny Any Any):** **สำคัญที่สุด!** ที่บรรทัดล่างสุดของ ACL ทุกอัน จะมีกฎ \`deny ip any any\` แอบแฝงอยู่เสมอ หากแพ็กเก็ตใดไม่ตรงกับกฎด้านบนเลย จะถูกดรอปทิ้งทั้งหมดโดยอัตโนมัติ ดังนั้น ACL ที่ใช้งานได้จริง **ต้องมีคำสั่ง permit อย่างน้อย 1 บรรทัดเสมอ**

---

## 2. การเปรียบเทียบ Standard ACL กับ Extended ACL

| หัวข้อเปรียบเทียบ | Standard ACL (มาตรฐาน) | Extended ACL (ส่วนขยาย) |
|---|---|---|
| **ช่วงหมายเลข Numbered ACL** | **1 – 99** และ 1300 – 1999 | **100 – 199** และ 2000 – 2699 |
| **ปัจจัยที่ใช้ในการตรวจสอบ** | ตรวจสอบได้เฉพาะ **Source IP Address (ไอพีต้นทาง)** เท่านั้น | ตรวจสอบได้ทั้ง **Source IP, Destination IP, Protocol (TCP/UDP/ICMP), และ Port Number** |
| **ความละเอียดในการควบคุม** | ควบคุมได้หยาบ บล็อกหรืออนุญาตทั้งเครื่อง | ควบคุมได้ละเอียดระดับพอร์ตบริการ (เช่น อนุญาต Web แต่บล็อก SSH) |
| **หลักการวางตำแหน่งที่ดีที่สุด (Placement Rule)** | **วางไว้ใกล้ปลายทาง (Destination) มากที่สุด** เพื่อไม่ให้ไปบล็อกเส้นทางอื่นโดยไม่ตั้งใจ | **วางไว้ใกล้ต้นทาง (Source) มากที่สุด** เพื่อบล็อกทราฟฟิกที่ไม่ต้องการทิ้งตั้งแต่ต้นทาง ประหยัดแบนด์วิดท์ |

---

## 3. ทิศทางการบังคับใช้ ACL (Inbound vs Outbound)

เมื่อเขียนกฎ ACL เสร็จสิ้น จะต้องนำไปผูกเข้ากับ Interface ด้วยคำสั่ง \`ip access-group <ชื่อหรือเบอร์> <in|out>\`:
- **Inbound ACL (\`in\`):** ตรวจสอบแพ็กเก็ตทันทีที่เดินทางเข้ามายังพอร์ต ก่อนที่เราเตอร์จะเริ่มประมวลผล Routing Table (ประหยัดพลังงาน CPU เราเตอร์หากต้องดรอปทิ้ง)
- **Outbound ACL (\`out\`):** เราเตอร์ทำการเราน์แพ็กเก็ตเสร็จแล้ว และตรวจสอบกฎก่อนที่จะปล่อยแพ็กเก็ตหลุดออกจากพอร์ตนั้นไปยังเครือข่าย

---

## 4. ตัวอย่างการเขียน Extended Named ACL ป้องกันระบบเซิร์ฟเวอร์วิทยาลัย

### โจทยการรักษาความปลอดภัย:
1. แผนกอาจารย์ (192.168.10.0/24) สามารถเข้าถึงทุกบริการของเซิร์ฟเวอร์การเงิน (192.168.99.10) ได้
2. แผนกนักศึกษา (192.168.20.0/24) สามารถเข้าดูได้เฉพาะหน้าเว็บ (HTTP พอร์ต 80 และ HTTPS พอร์ต 443) ของเซิร์ฟเวอร์การเงิน แต่ **ห้ามเข้า SSH (พอร์ต 22) และห้าม Ping**
3. อนุญาตให้ทราฟฟิกอื่นๆ ที่ออกสู่อินเทอร์เน็ตทำงานได้ตามปกติ`,
      codeExample: {
        language: "bash",
        code: `! 1. สร้าง Extended Named ACL
Router(config)# ip access-list extended SECURE_FINANCE_SERVER

! กฎที่ 1: อนุญาตเครือข่ายอาจารย์เข้าถึงเซิร์ฟเวอร์การเงินได้ทุกโปรโตคอล
Router(config-ext-nacl)# permit ip 192.168.10.0 0.0.0.255 host 192.168.99.10

! กฎที่ 2: อนุญาตนักศึกษาเข้าใช้งานเฉพาะเว็บพอร์ต 80 และ 443
Router(config-ext-nacl)# permit tcp 192.168.20.0 0.0.0.255 host 192.168.99.10 eq 80
Router(config-ext-nacl)# permit tcp 192.168.20.0 0.0.0.255 host 192.168.99.10 eq 443

! กฎที่ 3: บล็อกนักศึกษาไม่ให้แตะต้องเซิร์ฟเวอร์การเงินในบริการอื่นๆ ทั้งหมด (เช่น SSH, Ping)
Router(config-ext-nacl)# deny ip 192.168.20.0 0.0.0.255 host 192.168.99.10

! กฎที่ 4: อนุญาตทราฟฟิกอื่นๆ ให้เดินทางได้ตามปกติ (ป้องกัน Implicit Deny)
Router(config-ext-nacl)# permit ip any any
Router(config-ext-nacl)# exit

! 2. ผูก ACL ขาเข้า (Inbound) บนพอร์ตของนักศึกษา
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# ip access-group SECURE_FINANCE_SERVER in
Router(config-subif)# exit

! 3. ตรวจสอบการจับคู่ของกฎและสถิติจำนวนแพ็กเก็ตที่ถูกบล็อก (Hit Counts)
Router# show access-lists SECURE_FINANCE_SERVER`,
        description: "สคริปต์การเขียน Extended Named Access Control List เพื่อควบคุมการเข้าถึงระบบฐานข้อมูลเซิร์ฟเวอร์อย่างปลอดภัย"
      },
      quiz: [
        {
          id: "net-8-q1",
          question: "เหตุใดหลักการสากลจึงแนะนำให้วาง Extended Access Control List (Extended ACL) ไว้ใกล้กับต้นทาง (Source) มากที่สุด?",
          options: [
            "เพื่อให้เราเตอร์สามารถประมวลผลคำสั่งได้ง่ายขึ้น",
            "เพื่อกำจัดทราฟฟิกที่ไม่พึงประสงค์ทิ้งตั้งแต่ต้นทาง ป้องกันไม่ให้เปลืองแบนด์วิดท์บนลิงก์เครือข่ายส่วนกลาง",
            "เพราะ Extended ACL ไม่สามารถตรวจสอบ IP ปลายทางได้",
            "เพื่อหลีกเลี่ยงกฎ Implicit Deny"
          ],
          correctAnswer: 1,
          explanation: "Extended ACL ทราบทั้ง Source และ Destination อย่างแม่นยำ การวางไว้ใกล้ต้นทางจะช่วยตัดทิ้งแพ็กเก็ตที่ไม่ได้รับอนุญาตได้ทันที ทำให้ไม่สูญเสียแบนด์วิดท์ไปโดยเปล่าประโยชน์ตลอดเส้นทาง"
        },
        {
          id: "net-8-q2",
          question: "หากสร้าง ACL ขึ้นมา 1 รายการโดยมีเพียงกฎ 'deny 192.168.1.50 0.0.0.0 any' แล้วนำไปผูกกับพอร์ต จะเกิดผลลัพธ์อย่างไรกับเครื่องอื่นๆ ในเครือข่าย?",
          options: [
            "เฉพาะเครื่อง 192.168.1.50 เท่านั้นที่ถูกบล็อก เครื่องอื่นใช้งานได้ตามปกติ",
            "ทุกเครื่องในเครือข่ายจะถูกบล็อกทราฟฟิกทั้งหมดไปด้วย เนื่องจากกฎ Implicit Deny ท้ายตาราง",
            "คำสั่งจะเกิดข้อผิดพลาด (Syntax Error)",
            "ระบบจะอนุญาตเครื่อง 192.168.1.50 ให้ออกเน็ตได้"
          ],
          correctAnswer: 1,
          explanation: "เพราะที่บรรทัดล่างสุดมี 'deny ip any any' แอบแฝงอยู่เสมอ หากไม่มีคำสั่ง 'permit ip any any' ตบท้าย เครื่องอื่นๆ ทั้งหมดที่ไม่ใช่ .50 ก็จะตกลงมากระทบกฎข้อสุดท้ายและถูกบล็อกทิ้งทั้งหมด"
        }
      ],
      labGuide: {
        title: "แล็บสร้างไฟร์วอลล์ Extended ACL สกัดกั้นการเข้าถึงเว็บเซิร์ฟเวอร์",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "สร้าง Extended ACL บน Router 2911 เพื่อบล็อกนักศึกษาไม่ให้เข้าเว็บเบราว์เซอร์ของ Web Server (พอร์ต 80) แต่ยังคงอนุญาตให้ใช้คำสั่ง ICMP Ping ทดสอบสายได้",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วาง Router, Switch, Server และ PC ลูกข่าย",
            detail: "วาง Router 2911 เชื่อมต่อ PC-Student (192.168.1.10) ที่พอร์ต G0/0 และต่อ Web Server (192.168.2.100) ที่พอร์ต G0/1 เปิดบริการ HTTP Service บนเซิร์ฟเวอร์"
          },
          {
            title: "ขั้นตอนที่ 2: ทดสอบการเชื่อมต่อก่อนติดไฟร์วอลล์",
            detail: "เปิด PC-Student ทดลองเปิด Web Browser พิมพ์ URL '192.168.2.100' ต้องเปิดหน้าเว็บสำเร็จ และทดสอบ ping 192.168.2.100 ต้องได้รับ Reply ปกติ"
          },
          {
            title: "ขั้นตอนที่ 3: เขียนกฎ Extended ACL สกัดกั้นเฉพาะพอร์ต HTTP",
            detail: "เข้าหน้า CLI ของเราเตอร์ พิมพ์คำสั่ง:\naccess-list 101 deny tcp host 192.168.1.10 host 192.168.2.100 eq 80\naccess-list 101 permit ip any any\nจากนั้นผูกเข้าพอร์ต G0/0 ขาเข้า: interface g0/0 > ip access-group 101 in"
          },
          {
            title: "ขั้นตอนที่ 4: ทดสอบผลลัพธ์หลังติดไฟร์วอลล์",
            detail: "กลับไปที่ PC-Student เปิด Web Browser พิมพ์ 192.168.2.100 อีกครั้ง -> ต้องขึ้น Request Timeout (เปิดหน้าเว็บไม่ได้)\nจากนั้นเปิด Command Prompt แล้ว ping 192.168.2.100 -> ต้อง Ping ผ่านได้ตามปกติ (เพราะเราบล็อกเฉพาะ HTTP ไม่ได้บล็อก ICMP)"
          }
        ],
        verification: "บนเราเตอร์เมื่อสั่ง 'show access-lists 101' จะต้องเห็นตัวนับ (matches) ขยับขึ้นที่บรรทัด deny tcp เมื่อนักศึกษาพยายามเปิดหน้าเว็บ พิสูจน์ว่าไฟร์วอลล์คัดกรองแพ็กเก็ตได้อย่างถูกต้องสมบูรณ์"
      }
    },

    // ==========================================
    // บทเรียนที่ 9: โปรเจกต์หลักสูตร: โครงข่ายระดับองค์กร และ NAT/PAT
    // ==========================================
    {
      id: "net-9",
      title: "โปรเจกต์ใหญ่: ออกแบบและติดตั้งระบบเครือข่ายวิทยาลัย/องค์กร (Enterprise Campus Network & NAT/PAT)",
      description: "ผสานรวมทุกทักษะ: สถาปัตยกรรม Cisco 3-Tier, Redundant Core, DHCP Relay, การทำ Network Address Translation (Static NAT / PAT Overload), และเอกสารผังโครงข่ายมาตรฐาน",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# การออกแบบและติดตั้งโครงข่ายระดับองค์กร (Enterprise Campus Network)

ในบทเรียนสุดท้ายของหลักสูตร Network & Cisco เราจะนำองค์ความรู้ทั้งหมดตั้งแต่เรื่องสื่อสัญญาณ, VLAN, Inter-VLAN Routing, OSPF และ ACL มาร้อยเรียงเข้าด้วยกันเพื่อสร้าง **ระบบเครือข่ายระดับสถาบันการศึกษาและองค์กรธุรกิจ (Enterprise Campus Network)** ที่มีความพร้อมใช้งานสูง (High Availability) และเชื่อมต่อออกสู่เครือข่ายอินเทอร์เน็ตผ่าน **NAT/PAT**

\`\`\`diagram:campus-network
สถาปัตยกรรมเครือข่ายวิทยาลัย 3-Tier Campus Network และการแบ่ง VLANs
\`\`\`

---

## 1. สถาปัตยกรรมโครงข่าย 3 ลำดับชั้นของ Cisco (Three-Tier Hierarchical Model)

1. **Core Layer (แกนหลักเครือข่าย):**
   - หน้าที่: สวิตชิ่งรับส่งแพ็กเก็ตระหว่างอาคารและ Data Center ด้วย **ความเร็วสูงที่สุด (High-Speed Backbone 40G/100G)**
   - กฎเหล็ก: ไม่ติดตั้งนโยบายความปลอดภัย ACL หรือการบีบอัดทราฟฟิกที่ซับซ้อนบนชั้นนี้ เพื่อรักษาอัตรา Throughput สูงสุด
2. **Distribution Layer (กระจายสัญญาณและนโยบาย):**
   - หน้าที่: เชื่อมต่อระหว่าง Access Layer กับ Core Layer ทำหน้าที่จัดสรร VLAN, Routing ข้ามแผนก (Inter-VLAN), คัดกรองนโยบายความปลอดภัย (ACLs), รวมกลุ่มสายสัญญาณ (EtherChannel/LACP), และระบบสำรองคู่สาย (Redundancy HSRP/VRRP)
3. **Access Layer (ชั้นเข้าถึงสำหรับผู้ใช้งาน):**
   - หน้าที่: เชื่อมต่อโดยตรงกับเครื่องผู้ใช้งาน (PC, โน้ตบุ๊ก, แท็บเล็ต, กล้อง IP Camera) มีระบบ Port Security ป้องกันการแอบสลับเครื่อง และเปิด Spanning Tree PortFast

---

## 2. การทำงานของ Network Address Translation (NAT) และ PAT

เนื่องจากหมายเลข **IPv4 Public Address** มีจำนวนจำกัดและมีค่าใช้จ่ายสูง องค์กรส่วนใหญ่จึงได้รับ Public IP จริงจากผู้ให้บริการ ISP เพียงไม่กี่หมายเลข เพื่อให้เครื่องลูกข่ายนับพันเครื่องในวิทยาลัยสามารถท่องเว็บพร้อมกันได้ จึงต้องใช้เทคโนโลยี **NAT (RFC 1631)**

### รูปแบบของ NAT:
1. **Static NAT (1 ต่อ 1):** จับคู่ Private IP 1 เบอร์กับ Public IP 1 เบอร์แบบถาวร นิยมใช้กับเว็บเซิร์ฟเวอร์ของวิทยาลัยที่ต้องการให้คนภายนอกเข้าถึงได้จากอินเทอร์เน็ต
2. **Dynamic NAT (กลุ่มต่อกลุ่ม):** จับคู่ Private IP กับกลุ่มของ Public IP (NAT Pool) แบบใครมาก่อนได้ก่อน
3. **PAT (Port Address Translation / NAT Overload):** **รูปแบบที่นิยมใช้มากที่สุดในโลก!** นำเครื่องลูกข่าย Private IP นับร้อยนับพันเครื่อง ออกสู่อินเทอร์เน็ตพร้อมๆ กันโดยใช้ **Public IP เพียงหมายเลขเดียว** โดยเราเตอร์จะแยกแยะการเชื่อมต่อด้วยหมายเลขพอร์ตต้นทางที่ไม่ซ้ำกัน (Source Port Mapping)

---

## 3. เอกสารผังเครือข่ายและการจัดสรรทรัพยากร (Design Blueprint)

### 3.1 ตารางจัดสรร VLAN และ Subnet ภายในวิทยาลัย
- **VLAN 10 (Management & IT):** 192.168.10.0/24 (Gateway: 192.168.10.1)
- **VLAN 20 (Teachers & Staff):** 192.168.20.0/24 (Gateway: 192.168.20.1)
- **VLAN 30 (Students & Labs):** 192.168.30.0/24 (Gateway: 192.168.30.1)
- **VLAN 40 (Public Wi-Fi Guest):** 172.16.0.0/22 (Gateway: 172.16.0.1)
- **VLAN 50 (Server Farm / DMZ):** 192.168.50.0/24 (Gateway: 192.168.50.1)

### 3.2 การแจกจ่าย IP อัตโนมัติด้วย DHCP Relay Agent
หากเซิร์ฟเวอร์แจก IP (DHCP Server) อยู่ใน VLAN เซิร์ฟเวอร์ แต่เครื่องนักศึกษาอยู่ใน VLAN 30 แพ็กเก็ต DHCP Discover ซึ่งเป็น Broadcast จะไม่สามารถข้ามเราเตอร์มาได้ แก้ไขโดยใช้คำสั่ง **\`ip helper-address <ip-dhcp-server>\`** บนอินเทอร์เฟซเกตเวย์ เพื่อแปลงแพ็กเก็ต Broadcast ให้กลายเป็น Unicast ส่งตรงไปยัง DHCP Server`,
      codeExample: {
        language: "bash",
        code: `! ==========================================
! 1. ตั้งค่า NAT Overload (PAT) เชื่อมต่อออกสู่อินเทอร์เน็ต
! ==========================================
! กำหนด ACL อนุญาตให้เครือข่าย Private IP ทุกวงทำ NAT ได้
Router(config)# access-list 1 permit 192.168.0.0 0.0.255.255
Router(config)# access-list 1 permit 172.16.0.0 0.0.3.255

! ผูก ACL 1 เข้ากับพอร์ตอินเทอร์เน็ตขาออก (GigabitEthernet 0/1) โดยใช้คำสั่ง overload
Router(config)# ip nat inside source list 1 interface gigabitEthernet 0/1 overload

! ระบุพอร์ตเครือข่ายภายใน (Inside) และพอร์ตออกเน็ต (Outside)
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# description LAN_INSIDE_NETWORK
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface gigabitEthernet 0/1
Router(config-if)# description WAN_INTERNET_OUTSIDE
Router(config-if)# ip address 203.0.113.10 255.255.255.252
Router(config-if)# ip nat outside
Router(config-if)# exit

! ชี้ Default Route มุ่งหน้าไปยัง ISP Gateway
Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.9

! ==========================================
! 2. การตั้งค่า DHCP Relay Agent ส่งต่อคำขอรับ IP
! ==========================================
Router(config)# interface gigabitEthernet 0/0.30
Router(config-subif)# description Students_Gateway
Router(config-subif)# ip address 192.168.30.1 255.255.255.0
Router(config-subif)# ip helper-address 192.168.50.100  <-- IP ของ DHCP Server
Router(config-subif)# exit

! ตรวจสอบตารางการแปลง IP ของ NAT แบบเรียลไทม์
Router# show ip nat translations
Router# show ip nat statistics`,
        description: "สคริปต์การตั้งค่า PAT (Port Address Translation) ออกสู่อินเทอร์เน็ต และการทำ DHCP Relay Agent สำหรับระบบเครือข่ายระดับองค์กร"
      },
      quiz: [
        {
          id: "net-9-q1",
          question: "เทคโนโลยี Port Address Translation (PAT หรือ NAT Overload) ใช้องค์ประกอบใดในการจำแนกความแตกต่างของการเชื่อมต่อ เมื่อเครื่องลูกข่ายจำนวนมากใช้ Public IP เดียวกันออกเน็ต?",
          options: [
            "หมายเลข MAC Address ของคอมพิวเตอร์",
            "หมายเลขพอร์ตต้นทาง (Unique Source Port Number)",
            "หมายเลข Sequence Number ของ Layer 4",
            "ชื่อเครื่อง Hostname"
          ],
          correctAnswer: 1,
          explanation: "PAT ทำการแมปคู่หมายเลข Private IP และ Port ต้นทางของเครื่องลูกข่าย เข้ากับ Public IP เดียวกันแต่เปลี่ยนเลข Port ภายนอกที่ไม่ซ้ำกัน ทำให้สามารถแยกแยะทราฟฟิกขากลับได้อย่างแม่นยำ"
        },
        {
          id: "net-9-q2",
          question: "เมื่อคอมพิวเตอร์ลูกข่ายใน VLAN 30 ต้องการขอรับ IP Address จาก DHCP Server ที่ตั้งอยู่อีกวงหนึ่ง (VLAN 50) จะต้องใส่คำสั่งใดบน Interface Gateway ของเราเตอร์?",
          options: [
            "ip forward-protocol dhcp",
            "ip helper-address <ip-server>",
            "dhcp relay enable",
            "ip address dhcp"
          ],
          correctAnswer: 1,
          explanation: "คำสั่ง 'ip helper-address <ip-server>' ทำหน้าที่เป็น DHCP Relay Agent ดักจับแพ็กเก็ต Broadcast (พอร์ต UDP 67) ของเครื่องลูกข่าย แล้วแปลงเป็น Unicast ส่งตรงข้ามเราเตอร์ไปยังเซิร์ฟเวอร์"
        }
      ],
      labGuide: {
        title: "สุดยอดแล็บโปรเจกต์: วางระบบ Campus Network, PAT และทดสอบออกอินเทอร์เน็ต",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "ออกแบบผังเครือข่ายวิทยาลัย ผสานรวม Core Switch, Access Switch, VLAN, OSPF และคอนฟิกเราเตอร์ Gateway ทำ PAT ออกสู่อินเทอร์เน็ตได้อย่างสมบูรณ์",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วางโครงสร้างสถาปัตยกรรม Three-Tier",
            detail: "วาง Router 2911 (Internet Gateway), Layer 3 Switch 3560 (Core Switch), Layer 2 Switch 2960 (Access Switch), เซิร์ฟเวอร์ Web/DHCP และเครื่องลูกข่าย"
          },
          {
            title: "ขั้นตอนที่ 2: ตั้งค่า VLAN, SVI และ Trunk Link",
            detail: "บนสวิตช์ 3560 สั่ง ip routing สร้าง VLAN 10 (Teachers) และ VLAN 20 (Students) พร้อมสร้าง SVI Gateway พอร์ต Uplink เชื่อมต่อระหว่างสวิตช์ตั้งค่าเป็น Trunk 802.1Q"
          },
          {
            title: "ขั้นตอนที่ 3: คอนฟิกการหาเส้นทาง OSPF และ NAT/PAT บนเราเตอร์",
            detail: "เชื่อมต่อ L3 Switch เข้ากับ Router ผ่านวง 10.0.0.0/30 เปิด OSPF Area 0 แลกเปลี่ยนเส้นทาง\nจากนั้นบนเราเตอร์ ทำการคอนฟิก NAT Overload (PAT) ที่พอร์ตขาออกสู่อินเทอร์เน็ต ชี้ Default Route ไปยัง ISP Server"
          },
          {
            title: "ขั้นตอนที่ 4: ทดสอบระบบและการออกสู่อินเทอร์เน็ต",
            detail: "เปิดเครื่องลูกข่ายทั้งฝั่งอาจารย์และนักศึกษา ทดสอบเปิด Web Browser พิมพ์ค้นหาเว็บภายนอก เช่น 'www.cisco.com' หรือ '203.0.113.100'\nบนเราเตอร์ พิมพ์คำสั่ง 'show ip nat translations' สังเกตตารางแมปปิ้งพอร์ต"
          }
        ],
        verification: "เครื่องลูกข่ายในทุก VLAN ต้องสามารถเข้าถึงหน้าเว็บภายนอกได้สำเร็จ และตาราง 'show ip nat translations' บนเราเตอร์ต้องแสดงรายการเชื่อมต่อที่มีทั้ง Inside Local (Private IP) และ Inside Global (Public IP) พร้อมหมายเลขพอร์ต"
      }
    }
  ]
};
