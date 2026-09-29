import { Course } from "../types";

export const networkCourse: Course = {
  id: "network",
  title: "Network & Cisco",
  description: "ออกแบบ จัดการ และตั้งค่าระบบเครือข่ายระดับวิทยาลัยและองค์กรด้วย Cisco Packet Tracer & CLI",
  longDescription: "หลักสูตรระบบเครือข่ายที่พัฒนาตามมาตรฐานหลักสูตร CCNA (Cisco Certified Network Associate) ถ่ายทอดความรู้ตั้งแต่โมเดล OSI, การคำนวณ Subnetting, การคอนฟิกอุปกรณ์จริงของ Cisco ทั้ง Router และ Switch ผ่าน CLI, การตัดแบ่งเครือข่ายเสมือน VLAN & Trunking, การทำ Routing แบบ OSPF, ตลอดจนระบบความปลอดภัย Access Control Lists (ACL) และ NAT",
  icon: "🔌",
  color: "blue",
  gradient: "from-blue-500 to-indigo-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Network", "Cisco", "CCNA", "Packet Tracer", "VLAN", "Routing", "OSPF", "Firewall"],
  recommendedTools: [
    {
      name: "Cisco Packet Tracer",
      icon: "🌐",
      badge: "Official Cisco Tool",
      description: "สุดยอดโปรแกรมจำลองระบบเครือข่ายจาก Cisco Networking Academy ที่จำลองทั้ง Router, Switch, Server, PC, สายสัญญาณ และพิมพ์คำสั่ง Cisco IOS เสมือนจริง",
      downloadUrl: "https://www.netacad.com/courses/packet-tracer",
      setupGuide: "1. สมัครบัญชีฟรีที่ Cisco Networking Academy (SkillsForAll / NetAcad)\n2. ดาวน์โหลด Packet Tracer สำหรับ Windows (64-bit)\n3. ติดตั้งและเปิดโปรแกรม เข้าสู่ระบบด้วยบัญชี Cisco\n4. เริ่มลากอุปกรณ์ Router 2911, Switch 2960 และต่อสายเคเบิลได้ทันที"
    },
    {
      name: "Wireshark",
      icon: "🦈",
      badge: "Packet Analyzer",
      description: "โปรแกรมวิเคราะห์ข้อมูลแพ็กเก็ต (Packet Sniffer) ระดับมืออาชีพ ใช้ตรวจสอบการวิ่งของโปรโตคอล TCP, UDP, DNS, HTTP, ARP ในเครือข่ายแบบสดๆ",
      downloadUrl: "https://www.wireshark.org/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Wireshark พร้อม Npcap\n2. เลือกการ์ดเครือข่ายที่ใช้งาน (Wi-Fi หรือ Ethernet)\n3. กดปุ่มครีบฉลามสีน้ำเงินเพื่อเริ่มจับแพ็กเก็ต\n4. พิมพ์ Filter กรองโปรโตคอล เช่น 'dns' หรือ 'http' หรือ 'icmp'"
    },
    {
      name: "PuTTY / Tera Term",
      icon: "💻",
      badge: "Console Terminal",
      description: "โปรแกรมเชื่อมต่อสาย Console (RS232/USB Serial) เพื่อเข้าคอนฟิกอุปกรณ์ Cisco จริงทางฮาร์ดแวร์ หรือเชื่อมต่อระยะไกลผ่าน SSH/Telnet",
      downloadUrl: "https://www.putty.org/",
      setupGuide: "1. ดาวน์โหลด PuTTY ตัวพกพาหรือตัวติดตั้ง\n2. ต่อสาย USB-to-RJ45 Console จากคอมเข้าพอร์ต Console ของสวิตช์ Cisco\n3. เปิด PuTTY เลือกการเชื่อมต่อแบบ 'Serial' ตั้ง Speed เป็น 9600\n4. กด Open เพื่อเปิดหน้าต่าง CLI"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "net-1",
      title: "สถาปัตยกรรมเครือข่ายคอมพิวเตอร์และสื่อส่งข้อมูล",
      description: "ทำความเข้าใจประเภทเครือข่าย LAN/MAN/WAN, โทโพโลยี Star/Mesh, และสายสัญญาณ UTP Cat6/Fiber Optic",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมเครือข่ายคอมพิวเตอร์ (Network Architecture)

เครือข่ายคอมพิวเตอร์ คือการเชื่อมต่ออุปกรณ์สื่อสารตั้งแต่สองเครื่องขึ้นไปเข้าด้วยกัน เพื่อการแลกเปลี่ยนข้อมูลและทรัพยากร (เช่น เครื่องพิมพ์ ฐานข้อมูล หรือระบบอินเทอร์เน็ต)

## 1. การแบ่งขนาดของเครือข่าย
- **LAN (Local Area Network):** เครือข่ายขนาดเล็ก เช่น ภายในอาคารเรียน ห้องปฏิบัติการสำนักงาน
- **MAN (Metropolitan Area Network):** เครือข่ายระดับเมือง เช่น เครือข่ายเชื่อมต่อระหว่างวิทยาเขตของวิทยาลัย
- **WAN (Wide Area Network):** เครือข่ายระดับกว้าง เช่น เครือข่ายอินเทอร์เน็ตที่เชื่อมต่อทั่วโลก

## 2. โทโพโลยีที่นิยมใช้งานในองค์กร (Star Topology)
ในยุคปัจจุบัน โทโพโลยีแบบ **Star** เป็นมาตรฐาน โดยทุกอุปกรณ์ปลายทาง (PC, Printer, IP Phone) จะต่อสายตรงเข้าหาศูนย์กลางคือ **Access Switch** หากมีสายเส้นใดขาด จะไม่กระทบเครื่องอื่นในระบบ

## 3. สื่อส่งข้อมูลทางกายภาพ
- **สาย UTP (Unshielded Twisted Pair) Cat6:** รองรับความเร็ว 1 Gbps ถึง 10 Gbps (ระยะทางไม่เกิน 100 เมตร) ใช้หัวต่อ **RJ-45**
- **สายใยแก้วนำแสง (Fiber Optic):**
  - *Single-mode (SMF):* แสงเดินทางตรง สำหรับระยะไกลหลายกิโลเมตร เชื่อมต่อระหว่างอาคาร
  - *Multi-mode (MMF):* สำหรับระยะใกล้ใน Data Center ไม่เกิน 500 เมตร`,
      codeExample: {
        language: "bash",
        code: `# ตรวจสอบการตั้งค่า Network บนเครื่อง Client (Windows)
ipconfig /all

# ตรวจสอบการ์ดเครือข่ายบนระบบ Linux
ip addr show
ethtool eth0`,
        description: "คำสั่งตรวจสอบข้อมูลการ์ดเครือข่ายและ MAC Address บนคอมพิวเตอร์"
      },
      quiz: [
        { id: "net-1-q1", question: "สายเคเบิลทองแดงคู่ตีเกลียวมาตรฐาน UTP Cat6 มีระยะทางการเดินสายสูงสุดไม่เกินเท่าใดต่อช่วง?", options: ["50 เมตร", "100 เมตร", "200 เมตร", "500 เมตร"], correctAnswer: 1, explanation: "มาตรฐานสายทองแดงอีเธอร์เน็ต (UTP) จำกัดระยะทางสูงสุดไว้ที่ 100 เมตรเพื่อรักษาคุณภาพสัญญาณ" }
      ],
      labGuide: {
        title: "แล็บสร้างผังโครงข่าย LAN แรกบน Cisco Packet Tracer",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "ลากสวิตช์ Cisco Catalyst 2960 วาง PC 3 เครื่อง ต่อสายตรง Copper Straight-Through และตั้ง IP ให้อยู่ในวงเดียวกัน",
        steps: [
          { title: "วางอุปกรณ์", detail: "เลือกหมวด Switches วาง Switch รุ่น 2960 ไว้ตรงกลาง และวาง PC0, PC1, PC2 ไว้รอบๆ" },
          { title: "ต่อสายสัญญาณ", detail: "เลือกรูปสายฟ้า (Connections) ใช้สาย Copper Straight-Through ต่อจาก FastEthernet ของ PC แต่ละเครื่องเข้าพอร์ต Fa0/1, Fa0/2, Fa0/3 ของสวิตช์" },
          { title: "กำหนด IP Address", detail: "คลิกที่ PC0 > Desktop > IP Configuration ใส่ IP 192.168.1.10 Subnet 255.255.255.0 และ PC อื่นๆ เป็น .11, .12" },
          { title: "ทดสอบการเชื่อมต่อ", detail: "เปิด Command Prompt ใน PC0 แล้วพิมพ์คำสั่ง ping 192.168.1.11" }
        ],
        verification: "คำสั่ง Ping ต้องแสดง Reply from 192.168.1.11: bytes=32 time<1ms โดยไม่มี Packet Loss (0% loss)"
      }
    },
    {
      id: "net-2",
      title: "OSI 7 Layers และการวิเคราะห์แพ็กเก็ตด้วย Wireshark",
      description: "เจาะลึก Encapsulation, Header แต่ละชั้น และดักจับแพ็กเก็ต ARP, DNS, TCP Handshake",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# แบบจำลอง OSI 7 Layers และกระบวนการ Encapsulation

**OSI Model (Open Systems Interconnection)** ช่วยให้นักวิศวกรรมเครือข่ายเข้าใจว่าข้อมูลเดินทางจากคีย์บอร์ดของผู้ส่งไปยังปลายทางอย่างไร

## รายละเอียดแต่ละเลเยอร์และการรวมข้อมูล (Encapsulation)
1. **Application (Layer 7):** ข้อมูลดิบจากแอปพลิเคชัน (HTTP, DNS, SSH)
2. **Presentation (Layer 6):** การเข้ารหัส (SSL/TLS), แปลงฟอร์แมตภาพ/ตัวอักษร
3. **Session (Layer 5):** เปิดและควบคุมเซสชันการเชื่อมต่อ
4. **Transport (Layer 4):** เพิ่ม Header หมายเลข Port (เช่น Port 80, 443) เรียกว่า **Segment** (TCP/UDP)
5. **Network (Layer 3):** เพิ่ม Header หมายเลข Source & Destination IP Address เรียกว่า **Packet**
6. **Data Link (Layer 2):** เพิ่ม Header หมายเลข MAC Address และ Trailer ตรวจสอบข้อผิดพลาด (FCS) เรียกว่า **Frame**
7. **Physical (Layer 1):** แปลงเฟรมเป็นสัญญาณไฟฟ้า คลื่นวิทยุ หรือแสง (Bits 0 และ 1)`,
      codeExample: {
        language: "bash",
        code: `# ทดสอบดูการทำงานของเลเยอร์ 3 ด้วยคำสั่ง Traceroute
tracert 1.1.1.1    # บน Windows (ใช้ ICMP Echo)
traceroute 1.1.1.1 # บน Linux/macOS (ใช้ UDP Probe)

# ดูตารางแปลง IP เป็น MAC (ARP Cache) ที่ Layer 2
arp -a`,
        description: "คำสั่งตรวจสอบการเดินทางของแพ็กเก็ตผ่านเราเตอร์ทีละโหนด (Hop)"
      },
      quiz: [
        { id: "net-2-q1", question: "หน่วยของข้อมูล (PDU) ที่อยู่ใน Transport Layer (Layer 4) เรียกว่าอะไร?", options: ["Bits", "Frame", "Packet", "Segment"], correctAnswer: 3, explanation: "Layer 4 = Segment, Layer 3 = Packet, Layer 2 = Frame, Layer 1 = Bits" }
      ]
    },
    {
      id: "net-3",
      title: "การคำนวณ IP Addressing และ Subnetting ขั้นเทพ (VLSM)",
      description: "ฝึกคำนวณคลาส IP, Subnet Mask, Network ID, Broadcast ID และการแบ่งเครือข่ายย่อยด้วย VLSM",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การคำนวณ Subnetting และ VLSM สำหรับระบบสำนักงาน

**IPv4** มีขนาด 32 บิต ประกอบด้วย 4 ชุด (Octet) โดยแบ่งเป็นส่วน Network ID และ Host ID

## ทำไมต้องแบ่ง Subnet?
1. **ลด Broadcast Traffic:** ป้องกันไม่ให้สัญญาณกวนกันข้ามแผนก
2. **ประหยัดหมายเลข IP:** จัดสรรจำนวน IP ให้พอดีกับจำนวนเครื่อง
3. **ความปลอดภัย:** สามารถคุมนโยบาย Firewall ข้ามแผนกได้

## ตารางค่าเลขยกกำลัง 2 สำหรับคำนวณอย่างรวดเร็ว
- $/24 = 255.255.255.0$ $\\rightarrow 256$ IPs (254 Hosts)
- $/25 = 255.255.255.128$ $\\rightarrow 128$ IPs (126 Hosts)
- $/26 = 255.255.255.192$ $\\rightarrow 64$ IPs (62 Hosts)
- $/27 = 255.255.255.224$ $\\rightarrow 32$ IPs (30 Hosts)
- $/28 = 255.255.255.240$ $\\rightarrow 16$ IPs (14 Hosts)
- $/30 = 255.255.255.252$ $\\rightarrow 4$ IPs (2 Hosts สำหรับสายเชื่อมต่อระหว่างเราเตอร์)`,
      codeExample: {
        language: "bash",
        code: `# ตัวอย่างการแบ่งเครือข่าย 192.168.10.0/24 ด้วย VLSM:
# แผนก IT ต้องการ 50 เครื่อง   -> ใช้ /26 (ได้ 62 เครื่อง) [192.168.10.0 - 192.168.10.63]
# แผนกบัญชี ต้องการ 25 เครื่อง -> ใช้ /27 (ได้ 30 เครื่อง) [192.168.10.64 - 192.168.10.95]
# แผนกบุคคล ต้องการ 10 เครื่อง -> ใช้ /28 (ได้ 14 เครื่อง) [192.168.10.96 - 192.168.10.111]
# ลิงก์เชื่อม Router -> Router   -> ใช้ /30 (ได้ 2 เครื่อง)  [192.168.10.112 - 192.168.10.115]`,
        description: "ตัวอย่างแผนผังการจัดสรรหมายเลข IP Address ด้วยเทคนิค Variable Length Subnet Masking (VLSM)"
      },
      quiz: [
        { id: "net-3-q1", question: "เครือข่าย 192.168.1.0/26 มีหมายเลข Broadcast Address คือข้อใด?", options: ["192.168.1.63", "192.168.1.64", "192.168.1.127", "192.168.1.255"], correctAnswer: 0, explanation: "/26 มีขนาดบล็อกละ 64 หมายเลขแรกคือ 0 (Network) และหมายเลขสุดท้ายคือ 63 (Broadcast)" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "net-4",
      title: "การใช้งาน Cisco IOS Command Line Interface (CLI)",
      description: "โหมดการทำงาน User/Privileged/Global Config, การตั้งรหัสผ่าน, แบนเนอร์เตือนภัย, และบันทึกค่าลง NVRAM",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# การตั้งค่าอุปกรณ์ Cisco ผ่าน Command Line Interface (CLI)

ระบบปฏิบัติการ **Cisco IOS (Internetwork Operating System)** คือหัวใจในการควบคุมเราเตอร์และสวิตช์ระดับเอนเตอร์ไพรส์

## ลำดับชั้นโหมดคำสั่ง (Command Modes)
1. **User EXEC Mode (\`Router>\`):** โหมดดูข้อมูลทั่วไป คำสั่งจำกัด
2. **Privileged EXEC Mode (\`Router#\`):** เข้าด้วยคำสั่ง \`enable\` ตรวจสอบการตั้งค่า รีสตาร์ตอุปกรณ์ บันทึกไฟล์
3. **Global Configuration Mode (\`Router(config)#\`):** เข้าด้วย \`configure terminal\` เปลี่ยนแปลงการตั้งค่าระดับอุปกรณ์
4. **Interface Configuration Mode (\`Router(config-if)#\`):** เข้าด้วย \`interface gigabitEthernet 0/0\` ตั้งค่าพอร์ต`,
      codeExample: {
        language: "bash",
        code: `Switch> enable
Switch# configure terminal
Switch(config)# hostname CORE-SW01
CORE-SW01(config)# enable secret CiscoSecurePass@2024
CORE-SW01(config)# banner motd # AUTHORIZED ACCESS ONLY! #
CORE-SW01(config)# line console 0
CORE-SW01(config-line)# password ConsolePass123
CORE-SW01(config-line)# login
CORE-SW01(config-line)# exit
CORE-SW01(config)# exit
CORE-SW01# copy running-config startup-config`,
        description: "ลำดับคำสั่งมาตรฐานในการเริ่มต้นตั้งค่าอุปกรณ์ Cisco Switch"
      },
      quiz: [
        { id: "net-4-q1", question: "คำสั่งใดใช้บันทึกการตั้งค่าจาก RAM (หน่วยความจำชั่วคราว) ลงสู่ NVRAM เพื่อไม่ให้ค่าหายเมื่อไฟดับ?", options: ["write erase", "save config", "copy running-config startup-config", "commit"], correctAnswer: 2, explanation: "copy running-config startup-config (หรือคำสั่งย่อ wr) นำค่าปัจจุบันไปบันทึกไว้ใน NVRAM" }
      ],
      labGuide: {
        title: "แล็บคอนฟิกความปลอดภัยเริ่มต้นให้กับ Cisco Router",
        toolName: "Cisco Packet Tracer",
        downloadUrl: "https://www.netacad.com/courses/packet-tracer",
        objective: "ตั้งชื่ออุปกรณ์, รหัสผ่าน Enable Secret, ปิดการค้นหาโดเมนที่พิมพ์ผิด, และเปิดรหัสผ่านพอร์ต Console",
        steps: [
          { title: "วาง Router 2911", detail: "เปิด Packet Tracer วาง Router รุ่น 2911 คลิกที่อุปกรณ์เลือกแท็บ CLI" },
          { title: "ปฏิเสธ Setup Dialog", detail: "เมื่อถามว่า 'Would you like to enter the initial configuration dialog? [yes/no]:' ให้พิมพ์ no" },
          { title: "พิมพ์ชุดคำสั่งรักษาความปลอดภัย", detail: "พิมพ์ enable > configure terminal > hostname R1 > no ip domain-lookup > enable secret ClassSecret123" },
          { title: "ทดสอบออกจากระบบ", detail: "พิมพ์ exit สองครั้ง แล้วกด Enter ลองเข้าด้วยคำสั่ง enable แล้วใส่รหัสผ่าน" }
        ],
        verification: "เมื่อพิมพ์คำสั่ง enable ระบบต้องถามหา Password และเมื่อพิมพ์ถูกต้องจะเข้าสู่โหมด R1# ได้"
      }
    },
    {
      id: "net-5",
      title: "การออกแบบและตั้งค่า VLAN & 802.1Q Trunking",
      description: "แบ่งแผนกด้วย VLAN, การตั้งค่าพอร์ต Access และสร้าง Trunk Link ข้ามสวิตช์ด้วยโปรโตคอล IEEE 802.1Q",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การตัดแบ่งเครือข่ายด้วย Virtual LAN (VLAN)

**VLAN** คือเทคโนโลยีที่ช่วยให้เราสามารถแบ่งสวิตช์ตัวเดียวกันออกเป็นเครือข่ายย่อยเสมือนหลายๆ วง ซึ่งแยก Broadcast Domain ออกจากกันโดยเด็ดขาด

## พอร์ต 2 ประเภทบน Cisco Switch
1. **Access Port:** พอร์ตสำหรับต่อเข้าเครื่องปลายทาง (PC, Printer) โดยพอร์ตนี้จะอยู่เพียง 1 VLAN เดียวเท่านั้น และข้อมูลที่ส่งออกจะไม่มี Tag หมายเลข VLAN
2. **Trunk Port:** พอร์ตสำหรับเชื่อมต่อระหว่างสวิตช์ไปยังสวิตช์ หรือสวิตช์ไปยังเราเตอร์ เพื่อให้ข้อมูลของทุกๆ VLAN วิ่งผ่านสายเส้นเดียวกันได้ โดยจะใช้โปรโตคอลมาตรฐาน **IEEE 802.1Q** แปะหัว Tag ขนาด 4 Bytes ระบุ VLAN ID (1 - 4094)`,
      codeExample: {
        language: "bash",
        code: `! สร้าง VLAN 10 (แผนกอาจารย์) และ VLAN 20 (แผนกนักศึกษา)
Switch(config)# vlan 10
Switch(config-vlan)# name Teachers
Switch(config-vlan)# vlan 20
Switch(config-vlan)# name Students
Switch(config-vlan)# exit

! กำหนดพอร์ต Fa0/1 - Fa0/10 ให้อยู่ VLAN 10
Switch(config)# interface range fastEthernet 0/1 - 10
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10

! กำหนดพอร์ต Gi0/1 เป็น Trunk Link เชื่อมต่อสวิตช์ตัวถัดไป
Switch(config)# interface gigabitEthernet 0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20`,
        description: "คำสั่งสร้าง VLAN และกำหนดโหมด Access / Trunk บน Cisco Switch"
      },
      quiz: [
        { id: "net-5-q1", question: "มาตรฐานสากลที่ใช้ในการทำ VLAN Trunking บนเครือข่ายอีเธอร์เน็ตคือข้อใด?", options: ["IEEE 802.11ax", "IEEE 802.1Q", "IEEE 802.3af", "IEEE 802.1X"], correctAnswer: 1, explanation: "IEEE 802.1Q (Dot1Q) เป็นมาตรฐานสากลในการแท็กหมายเลข VLAN เข้าไปใน Ethernet Frame" }
      ]
    },
    {
      id: "net-6",
      title: "Inter-VLAN Routing: Router-on-a-Stick และ Multi-Layer Switch",
      description: "ทำให้เครื่องต่าง VLAN สื่อสารกันได้ด้วย Sub-interface บนเราเตอร์ และการคอนฟิก SVI บน Layer 3 Switch",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# การเชื่อมต่อระหว่าง VLAN (Inter-VLAN Routing)

ตามปกติ เครื่องที่อยู่ต่าง VLAN กันจะไม่สามารถคุยกันได้เลยแม้จะเสียบอยู่บนสวิตช์เดียวกัน เพื่อความปลอดภัย แต่ในกรณีที่ต้องการให้เครื่องนักศึกษาเข้าถึงเว็บเซิร์ฟเวอร์ส่วนกลางได้ จำเป็นต้องมีอุปกรณ์ Layer 3 เข้ามาทำ Routing

## วิธีที่ 1: Router-on-a-Stick (ROAS)
ใช้สายเคเบิลเพียง 1 เส้นต่อจาก Trunk Switch เข้าพอร์ต GigabitEthernet ของ Router แล้วแบ่งพอร์ตจริงออกเป็น **Sub-interfaces** ย่อยๆ เช่น \`g0/0.10\` และ \`g0/0.20\`

## วิธีที่ 2: Multi-Layer Switch (L3 Switch)
ใช้สวิตช์เลเยอร์ 3 เช่น Cisco Catalyst 3560/3650 สร้าง **SVI (Switch Virtual Interface)** ขึ้นมาทำหน้าที่เป็น Default Gateway โดยตรง ซึ่งมีความเร็วระดับฮาร์ดแวร์ (ASIC) สูงกว่าเราเตอร์มาก`,
      codeExample: {
        language: "bash",
        code: `! คอนฟิก Router-on-a-Stick บนเราเตอร์ Cisco
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# no shutdown
Router(config-if)# exit

! สร้าง Sub-interface สำหรับ VLAN 10
Router(config)# interface gigabitEthernet 0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0

! สร้าง Sub-interface สำหรับ VLAN 20
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0`,
        description: "การสร้าง Sub-interface และผูก encapsulation dot1Q สำหรับ Inter-VLAN Routing"
      },
      quiz: [
        { id: "net-6-q1", question: "ในวิธี Router-on-a-Stick คำสั่งใดจำเป็นต้องใส่ก่อนการกำหนด IP Address บน Sub-interface เสมอ?", options: ["no shutdown", "encapsulation dot1Q <vlan-id>", "switchport mode trunk", "ip routing"], correctAnswer: 1, explanation: "ต้องประกาศโปรโตคอล encapsulation dot1Q ระบุหมายเลข VLAN ก่อน เราเตอร์จึงจะยอมให้กำหนด IP Address" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "net-7",
      title: "Routing Protocols: Static Routing และ OSPF v2 (Open Shortest Path First)",
      description: "ทำความเข้าใจ Administrative Distance, เมตริก Cost, การคำนวณ Dijkstra (SPF) และการคอนฟิก OSPF Single Area",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การหาเส้นทางอัตโนมัติด้วยโปรโตคอล OSPF

เมื่อเครือข่ายมีเราเตอร์หลายตัว การกำหนด Static Route ด้วยมือจะเริ่มจัดการไม่ไหว จึงต้องใช้ **Dynamic Routing Protocol** เข้ามาเรียนรู้เส้นทางอัตโนมัติ

## คุณสมบัติหลักของ OSPF (Open Shortest Path First)
- เป็นโปรโตคอลแบบ **Link-State** ที่เปิดเป็นมาตรฐานเปิด (RFC 2328)
- ใช้อัลกอริทึม **Dijkstra's SPF (Shortest Path First)** คำนวณเส้นทางที่ดีที่สุดตามค่า **Cost** (แบนด์วิดท์ ยิ่งเน็ตเร็ว Cost ยิ่งต่ำ)
- อัปเดตข้อมูลเฉพาะเมื่อมีการเปลี่ยนแปลงโครงสร้างเครือข่าย (Event-triggered update) ไม่ส่งทั้งตารางทุก 30 วินาทีแบบ RIP
- มีการรวมศูนย์การบริหารเป็น **Area 0 (Backbone Area)**`,
      codeExample: {
        language: "bash",
        code: `! เปิดใช้งาน OSPF Process ID 1 บนเราเตอร์
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1

! ประกาศเครือข่ายโดยใช้ Wildcard Mask ให้อยู่ใน Area 0
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0
Router(config-router)# exit

! ตรวจสอบตารางการหาเส้นทางและเพื่อนบ้าน OSPF
Router# show ip route ospf
Router# show ip ospf neighbor`,
        description: "การเปิดใช้งานโปรโตคอล OSPF v2 และตรวจสอบตารางสถานะเพื่อนบ้าน (Neighbors)"
      },
      quiz: [
        { id: "net-7-q1", question: "OSPF คำนวณหาเส้นทางที่ดีที่สุดโดยพิจารณาจากค่าเมตริกใด?", options: ["Hop Count (จำนวนตัวกั้น)", "Cost (คำนวณจากแบนด์วิดท์)", "Reliability (ความน่าเชื่อถือ)", "Delay (เวลาหน่วง)"], correctAnswer: 1, explanation: "OSPF ใช้ค่า Cost = Reference Bandwidth / Interface Bandwidth ยิ่งสายมีความเร็วสูงค่า Cost ยิ่งต่ำและถูกเลือกเป็นเส้นทางหลัก" }
      ]
    },
    {
      id: "net-8",
      title: "ความปลอดภัยเครือข่าย: Access Control Lists (Standard & Extended ACLs)",
      description: "เขียนนโยบายไฟร์วอลล์คัดกรองทราฟฟิก กรองตาม IP หรือ Port (HTTP, HTTPS, SSH, ICMP) และการวางตำแหน่ง Inbound/Outbound",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การควบคุมความปลอดภัยด้วย Access Control Lists (ACLs)

**ACL** คือรายการกฎ (Rules) ที่ทำหน้าที่เป็นเสมือนไฟร์วอลล์ชั้นในของอุปกรณ์ Cisco เพื่อตรวจสอบแพ็กเก็ตที่วิ่งผ่าน และตัดสินใจว่าจะ **permit (อนุญาต)** หรือ **deny (บล็อก)**

## ความแตกต่างระหว่าง Standard และ Extended ACL
1. **Standard ACL (เบอร์ 1-99 หรือ 1300-1999):**
   - ตรวจสอบเฉพาะ **Source IP Address** (ต้นทาง) เท่านั้น
   - *หลักการวาง:* ควรวางไว้ **ใกล้ปลายทาง (Destination)** มากที่สุด
2. **Extended ACL (เบอร์ 100-199 หรือ 2000-2699):**
   - ตรวจสอบได้ทั้ง Source IP, Destination IP, Protocol (TCP/UDP/ICMP) และ Port Number
   - *หลักการวาง:* ควรวางไว้ **ใกล้ต้นทาง (Source)** มากที่สุด เพื่อประหยัดแบนด์วิดท์`,
      codeExample: {
        language: "bash",
        code: `! สร้าง Extended ACL บล็อกนักเรียน (192.168.20.0/24) ไม่ให้เข้าเซิร์ฟเวอร์การเงิน (192.168.99.10)
Router(config)# ip access-list extended BLOCK_FINANCE
Router(config-ext-nacl)# deny tcp 192.168.20.0 0.0.0.255 host 192.168.99.10 eq 80
Router(config-ext-nacl)# deny tcp 192.168.20.0 0.0.0.255 host 192.168.99.10 eq 443
Router(config-ext-nacl)# permit ip any any
Router(config-ext-nacl)# exit

! นำ ACL ไปผูกไว้ที่ Interface ขาเข้าของแผนกนักเรียน
Router(config)# interface gigabitEthernet 0/0.20
Router(config-subif)# ip access-group BLOCK_FINANCE in`,
        description: "การเขียน Extended Named ACL บล็อกการเข้าถึงเว็บพอร์ต 80 และ 443 ของเซิร์ฟเวอร์การเงิน"
      },
      quiz: [
        { id: "net-8-q1", question: "ที่บรรทัดล่างสุดของ Access Control List ทุกอันในระบบ Cisco จะมีกฎใดซ่อนอยู่เสมอ?", options: ["permit ip any any", "deny ip any any (Implicit Deny)", "log all", "permit icmp any any"], correctAnswer: 1, explanation: "Implicit Deny หมายถึง หากแพ็กเก็ตใดไม่ตรงกับกฎด้านบนเลย จะถูกบล็อกทิ้งทั้งหมดโดยอัตโนมัติ" }
      ]
    },
    {
      id: "net-9",
      title: "โปรเจกต์ใหญ่: ออกแบบระบบเครือข่ายวิทยาลัย/องค์กร (Enterprise Campus Network)",
      description: "ผสานรวมทุกระบบ: Redundant Core Switch, DHCP Server, NAT/PAT ออกอินเทอร์เน็ต และการจัดทำเอกสารผังเครือข่าย",
      duration: "80 นาที",
      level: "ขั้นสูง",
      content: `# การออกแบบโครงข่ายระดับองค์กร (Enterprise Campus Network)

สถาปัตยกรรมเครือข่ายขององค์กรขนาดใหญ่และสถาบันการศึกษา ใช้โมเดล **Cisco Three-Tier Hierarchical Model**

## สถาปัตยกรรม 3 ระดับชั้น (Three-Tier Architecture)
1. **Core Layer:** สวิตช์ความเร็วสูงพิเศษ (High-Speed Backbone 40G/100G) ทำหน้าที่สวิตชิ่งแพ็กเก็ตข้ามอาคารด้วยความเร็วสูงสุด ไม่ใส่นโยบาย ACL กั้นที่ชั้นนี้
2. **Distribution Layer:** รวมทราฟฟิกจากตึกต่างๆ ทำ Inter-VLAN Routing, กำหนดนโยบายความปลอดภัย และกำหนดทางเลือกเส้นทางสำรอง (Redundancy)
3. **Access Layer:** สวิตช์ตามห้องเรียนและแผนก เชื่อมต่อไปยังผู้ใช้งาน พร้อมฟีเจอร์รักษาความปลอดภัยพอร์ต (Port Security)`,
      codeExample: {
        language: "bash",
        code: `! คอนฟิก NAT Overload (PAT) ให้ทั้งองค์กรออกเน็ตด้วย Public IP หมายเลขเดียว
Router(config)# ip nat pool PUBLIC_IP 203.0.113.10 203.0.113.10 netmask 255.255.255.0
Router(config)# access-list 1 permit 192.168.0.0 0.0.255.255
Router(config)# ip nat inside source list 1 pool PUBLIC_IP overload

! กำหนดขาใน (Inside) และขานอก (Outside)
Router(config)# interface gigabitEthernet 0/0
Router(config-if)# ip nat inside
Router(config)# interface serial 0/1/0
Router(config-if)# ip nat outside`,
        description: "การทำ Port Address Translation (PAT) เพื่อให้เครื่องลูกข่ายนับพันเครื่องออกสู่อินเทอร์เน็ตได้"
      },
      quiz: [
        { id: "net-9-q1", question: "ในโมเดลเครือข่าย 3-Tier ของ Cisco ชั้นใดทำหน้าที่สลับส่งข้อมูลระหว่างอาคารด้วยความเร็วสูงสุดโดยไม่กรองทราฟฟิก?", options: ["Access Layer", "Distribution Layer", "Core Layer", "Internet Gateway"], correctAnswer: 2, explanation: "Core Layer มีหน้าที่หลักเพียงอย่างเดียวคือสลับแพ็กเก็ตด้วยความเร็วสูงสุด (Speed & Reliability) จึงไม่ควรมีนโยบาย Packet Filtering ซับซ้อน" }
      ]
    }
  ]
};
