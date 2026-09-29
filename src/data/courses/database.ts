import { Course } from "../types";

export const databaseCourse: Course = {
  id: "database",
  title: "ระบบฐานข้อมูล & RMS",
  description: "ออกแบบฐานข้อมูลเชิงสัมพันธ์ SQL, Normalization และพัฒนาระบบทะเบียนนักเรียน RMS เต็มรูปแบบ",
  longDescription: "หลักสูตรฐานข้อมูลที่พัฒนาตามมาตรฐานวิชาชีพเทคโนโลยีสารสนเทศ สอศ. และมาตรฐานสากลด้านการจัดการข้อมูล (RDBMS) อ้างอิงจากคู่มือทางการของ PostgreSQL 16, MySQL 8.0 และทฤษฎีโมเดลเชิงสัมพันธ์ของ E.F. Codd ครอบคลุมตั้งแต่สถาปัตยกรรม RDBMS, ชนิดข้อมูลขั้นสูง, การเขียนคิวรี SQL แบบ CRUD, การสร้างแบบจำลอง ER Diagram, การทำ Normalization (1NF ถึง BCNF) เพื่อกำจัดความซ้ำซ้อน, เทคนิค Multi-Table JOINs ทุกประเภท, การคำนวณสถิติด้วย GROUP BY/HAVING, การปรับจูนประสิทธิภาพด้วย B-Tree Indexes และ EXPLAIN ANALYZE, สถาปัตยกรรมธุรกรรม ACID & Concurrency Control ตลอดจนการลงมือสร้างระบบจัดเก็บข้อมูลผลการเรียนและทะเบียนประวัตินักศึกษา (RMS Database) เต็มรูปแบบ",
  icon: "🗄️",
  color: "purple",
  gradient: "from-purple-500 to-violet-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Database", "SQL", "PostgreSQL", "MySQL", "RMS", "Normalization", "Indexing", "ACID", "ER Diagram"],
  recommendedTools: [
    {
      name: "DBeaver Community",
      icon: "🦫",
      badge: "Universal DB Tool",
      description: "สุดยอดโปรแกรมจัดการและเขียนคิวรีฐานข้อมูลระดับมืออาชีพ รองรับทั้ง PostgreSQL, MySQL, MariaDB, SQLite และ Oracle พร้อมฟังก์ชันแสดงแผนผัง ER Diagram จาก Schema จริงอัตโนมัติ",
      downloadUrl: "https://dbeaver.io/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง DBeaver Community Edition สำหรับ Windows\n2. กดปุ่ม New Database Connection (ไอคอนปลั๊กไฟ)\n3. เลือกไดรเวอร์ PostgreSQL หรือ MySQL แล้วกรอก Host: localhost, Port, User และ Password\n4. กดปุ่ม Test Connection หากขึ้นสีเขียวให้กด Finish เพื่อเริ่มเขียน SQL ได้ทันที"
    },
    {
      name: "pgAdmin 4 / MySQL Workbench",
      icon: "🐬",
      badge: "Official GUI Tool",
      description: "เครื่องมือบริหารจัดการฐานข้อมูลอย่างเป็นทางการจากชุมชน PostgreSQL และ Oracle มีระบบวิเคราะห์ EXPLAIN Graphical Plan และเครื่องมือจัดการ User Permissions ครบวงจร",
      downloadUrl: "https://www.pgadmin.org/",
      setupGuide: "1. ดาวน์โหลดติดตั้งพร้อมกับชุด Database Server\n2. เปิดโปรแกรม ใส่รหัสผ่าน Master Password\n3. เชื่อมต่อไปยัง Server Instance เพื่อดูโครงสร้างตาราง ดัชนี และรันสคริปต์ SQL"
    },
    {
      name: "drawSQL",
      icon: "📐",
      badge: "Schema Visualizer",
      description: "เครื่องมือออกแบบฐานข้อมูลและสร้างแผนภาพ ER Diagram บนเว็บเบราว์เซอร์อย่างสวยงาม รองรับการ Export เป็นโค้ด SQL DDL (CREATE TABLE) ได้อัตโนมัติ 100%",
      downloadUrl: "https://drawsql.app/",
      setupGuide: "1. เข้าสู่เว็บไซต์ drawsql.app แล้วสร้างบัญชีฟรี\n2. กด Create new diagram เลือกฐานข้อมูลเป้าหมายเป็น PostgreSQL หรือ MySQL\n3. เพิ่มตาราง กำหนดชนิดข้อมูล และลากเส้นโยง Primary Key ไปยัง Foreign Key"
    }
  ],
  lessons: [
    // ==========================================
    // บทเรียนที่ 1: สถาปัตยกรรม RDBMS และคีย์ความสัมพันธ์
    // ==========================================
    {
      id: "db-1",
      title: "พื้นฐานฐานข้อมูลเชิงสัมพันธ์ (RDBMS) และชนิดข้อมูล (Data Types & Keys)",
      description: "เจาะลึกสถาปัตยกรรม Relational Model, ความสมบูรณ์ของข้อมูล (Integrity Constraints), ชนิดข้อมูล Numeric/String/Temporal/JSON, และการกำหนดคีย์ PK, FK, Composite Key",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมฐานข้อมูลเชิงสัมพันธ์และชนิดข้อมูลสากล

ระบบจัดการฐานข้อมูลเชิงสัมพันธ์ (**RDBMS - Relational Database Management System**) มีรากฐานมาจากทฤษฎีทางคณิตศาสตร์แบบพีชคณิตเชิงสัมพันธ์ (Relational Algebra) ที่คิดค้นโดย Dr. Edgar F. Codd แห่งศูนย์วิจัย IBM ในปี 1970 ข้อมูลจะถูกจัดเก็บในลักษณะของ **ตาราง 2 มิติ (Relations)** ที่มีความเป็นระเบียบ แม่นยำ และมีความสอดคล้องของข้อมูล (Data Consistency) สูงที่สุด

---

## 1. องค์ประกอบพื้นฐานในสถาปัตยกรรม Relational Model

| ศัพท์ทางวิชาการ (Formal Term) | ศัพท์ในระบบฐานข้อมูล (RDBMS) | คำอธิบายและความหมาย |
|---|---|---|
| **Relation** | **Table (ตาราง)** | โครงสร้างจัดเก็บกลุ่มข้อมูลที่มีความหมายเรื่องเดียวกัน เช่น ตาราง \`students\`, \`departments\` |
| **Tuple** | **Row / Record (แถวข้อมูล)** | ข้อมูลของสิ่งหนึ่งสิ่งใด 1 รายการ เช่น ข้อมูลประวัติของนายสมชาย 1 แถว |
| **Attribute** | **Column / Field (คอลัมน์)** | คุณลักษณะเฉพาะของข้อมูล เช่น \`student_code\`, \`first_name\`, \`birth_date\` |
| **Domain** | **Data Type & Constraints** | ขอบเขตของค่าที่ยอมให้จัดเก็บได้ในคอลัมน์นั้น เช่น ค่าคะแนนต้องเป็นตัวเลข 0.00 – 4.00 |

---

## 2. บทบาทและประเภทของคีย์ในระบบฐานข้อมูล (Database Keys)

การออกแบบโครงสร้างฐานข้อมูลที่ดี ต้องมีการกำหนดคีย์เพื่อควบคุมความสมบูรณ์ของข้อมูล (**Entity Integrity** และ **Referential Integrity**):

1. **Primary Key (PK - คีย์หลัก):**
   - ฟิลด์ที่ทำหน้าที่ระบุตัวตนของแต่ละแถวข้อมูลโดย **ห้ามซ้ำกันเด็ดขาด (Unique)** และ **ห้ามเป็นค่าว่าง (NOT NULL)**
   - ในหนึ่งตารางสามารถมี Primary Key ได้เพียง **1 คีย์เท่านั้น** (แต่คีย์นั้นอาจประกอบด้วยหลายคอลัมน์ได้)
2. **Foreign Key (FK - คีย์นอก):**
   - คอลัมน์ในตารางหนึ่งที่เก็บค่าอ้างอิงตรงไปยัง Primary Key ของอีกตารางหนึ่ง
   - ทำหน้าที่บังคับกฎ **Referential Integrity** ป้องกันไม่ให้มีข้อมูลที่ชี้ไปยังรายการที่ไม่มีอยู่จริง (Orphan Records)
3. **Composite Primary Key (คีย์หลักแบบผสม):**
   - การนำคอลัมน์ตั้งแต่ 2 คอลัมน์ขึ้นไปมารวมกันเพื่อทำหน้าที่เป็น Primary Key เช่น ในตารางลงทะเบียน \`enrollments\` ใช้คู่ของ \`(student_id, course_id)\` ร่วมกันเป็นคีย์หลัก
4. **Candidate Key (คีย์คู่แข่ง):** คอลัมน์ที่มีคุณสมบัติไม่ซ้ำกันและไม่ว่าง สามารถนำมาเป็น PK ได้ เช่น รหัสประจำตัวประชาชน, รหัสนักศึกษา, อีเมล
5. **Surrogate Key (คีย์ตัวแทน):** คีย์ตัวเลขลำดับอัตโนมัติ (เช่น \`BIGSERIAL\` หรือ \`AUTO_INCREMENT\`) ที่สร้างขึ้นเพื่อความสะดวกในการจัดการ แทนการใช้คีย์ธรรมชาติที่ยาวหรือเปลี่ยนแปลงได้

---

## 3. ตารางเปรียบเทียบชนิดข้อมูลมาตรฐาน (Standard SQL Data Types)

| ชนิดข้อมูล | ขนาดพื้นที่จัดเก็บ | ช่วงค่าและลักษณะการใช้งาน | คำแนะนำในการเลือกใช้งาน |
|---|---|---|---|
| **INT / INTEGER** | 4 Bytes | -2,147,483,648 ถึง +2,147,483,647 | ใช้สำหรับ ID ทั่วไป, ตัวเลขนับจำนวน |
| **BIGINT** | 8 Bytes | ตัวเลขขนาดใหญ่มาก (ระดับ $\\pm 9 \\times 10^{18}$) | **มาตรฐานสำหรับ Primary Key** ในระบบใหญ่ที่ข้อมูลเพิ่มต่อเนื่อง |
| **DECIMAL(p, s) / NUMERIC** | ผันแปรตามความละเอียด | จัดเก็บตัวเลขทศนิยมแบบ **คงที่แน่นอน (Exact Precision)** | **ห้ามใช้ FLOAT!** ต้องใช้ DECIMAL เสมอสำหรับระบบการเงิน, เงินเดือน, และเกรดเฉลี่ย (GPA) |
| **VARCHAR(n)** | ตามความยาวจริง + 1 Byte | ข้อความความยาวไม่เกิน $n$ ตัวอักษร | ชื่อ-นามสกุล, ที่อยู่อีเมล, ชื่อวิชา |
| **CHAR(n)** | ขนาดคงที่ $n$ Bytes เสมอ | ข้อความที่มีความยาวคงที่แน่นอน | รหัสบัตรประชาชน (13 ตัว), รหัสไปรษณีย์ (5 ตัว), เพศ (1 ตัว) |
| **DATE** | 4 Bytes | จัดเก็บเฉพาะปี-เดือน-วัน (\`YYYY-MM-DD\`) | วันเกิด, วันที่เริ่มภาคเรียน |
| **TIMESTAMPTZ** | 8 Bytes | วันที่ เวลา วินาที พร้อมข้อมูล Timezone | บันทึกเวลาสมัครสมาชิก, Log การทำรายการเงิน |
| **BOOLEAN** | 1 Byte | ค่าความจริง (\`TRUE\` หรือ \`FALSE\`) | สถานะการยืนยันตัวตน, สถานะการชำระเงิน |
| **JSONB (PostgreSQL)** | ผันแปร (Binary JSON) | จัดเก็บข้อมูลกึ่งโครงสร้าง รองรับการสร้าง Index | ข้อมูลการตั้งค่าระบบ, ประวัติกิจกรรม |`,
      codeExample: {
        language: "sql",
        code: `-- 1. สร้างตารางแผนกวิชา (Departments)
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_code VARCHAR(10) NOT NULL UNIQUE,
    dept_name VARCHAR(100) NOT NULL,
    building VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. สร้างตารางนักศึกษา (Students) ที่มี Foreign Key เชื่อมไปยังแผนก
CREATE TABLE students (
    student_id VARCHAR(11) PRIMARY KEY, -- เช่น 67309010001
    citizen_id CHAR(13) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL,
    gpa DECIMAL(3, 2) DEFAULT 0.00 CHECK (gpa >= 0.00 AND gpa <= 4.00),
    dept_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_students_dept FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id) 
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);`,
        description: "สคริปต์คำสั่ง DDL สร้างตารางตามมาตรฐานพร้อม Integrity Constraints (PRIMARY KEY, UNIQUE, CHECK, FOREIGN KEY)"
      },
      quiz: [
        {
          id: "db-1-q1",
          question: "เหตุใดในการจัดเก็บข้อมูลยอดเงินหรือผลการเรียน (GPA) จึงต้องเลือกชนิดข้อมูล DECIMAL แทนที่จะเป็น FLOAT หรือ DOUBLE?",
          options: [
            "เพราะ DECIMAL ใช้พื้นที่หน่วยความจำน้อยกว่ามาก",
            "เพราะ FLOAT จัดเก็บแบบเลขฐานสองประมาณค่า (Inexact) ซึ่งอาจเกิดความคลาดเคลื่อนของการปัดเศษทศนิยมได้",
            "เพราะ FLOAT ไม่สามารถจัดเก็บเครื่องหมายลบได้",
            "เพราะ DECIMAL รองรับเฉพาะฐานข้อมูล MySQL เท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "FLOAT/DOUBLE ใช้การแทนค่าแบบ IEEE Floating-Point ซึ่งมีความคลาดเคลื่อนในการคำนวณทศนิยม ส่วน DECIMAL เก็บเป็นเลขฐานสิบที่แม่นยำ 100% เหมาะกับเรื่องเงินและคะแนน"
        },
        {
          id: "db-1-q2",
          question: "เงื่อนไขข้อบังคับ 'ON DELETE RESTRICT' บน Foreign Key มีพฤติกรรมอย่างไรเมื่อมีผู้พยายามลบแถวข้อมูลในตารางแม่?",
          options: [
            "ลบแถวข้อมูลในตารางลูกที่เกี่ยวข้องทั้งหมดตามไปด้วยโดยอัตโนมัติ",
            "เปลี่ยนค่า Foreign Key ในตารางลูกให้กลายเป็น NULL",
            "ไม่อนุญาตให้ลบแถวในตารางแม่ หากยังมีข้อมูลในตารางลูกอ้างอิงถึงอยู่ (ป้องกันข้อมูลกำพร้า)",
            "อนุญาตให้ลบได้ทันทีโดยไม่ตรวจสอบตารางลูก"
          ],
          correctAnswer: 2,
          explanation: "RESTRICT (หรือ NO ACTION) จะปฏิเสธการลบแถวในตารางแม่ทันที หากยังมี Foreign Key ในตารางลูกชี้มา เพื่อรักษาความสมบูรณ์ของความสัมพันธ์ในระบบ"
        }
      ],
      labGuide: {
        title: "แล็บสร้างสคีมาฐานข้อมูลวิทยาลัยและการบังคับใช้ Constraints",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "เปิดใช้งาน DBeaver เขียนคำสั่ง DDL สร้างตาราง departments และ students พร้อมทดสอบใส่ข้อมูลที่ถูกต้องและทดสอบยิงข้อมูลที่ละเมิดข้อบังคับ CHECK และ FOREIGN KEY",
        steps: [
          {
            title: "ขั้นตอนที่ 1: สร้างฐานข้อมูลและเปิด SQL Editor",
            detail: "เปิดโปรแกรม DBeaver เชื่อมต่อฐานข้อมูล local สร้าง Database ชื่อ 'it_academy_db' จากนั้นกดเปิดแท็บ SQL Editor (กดปุ่มลัด F3)"
          },
          {
            title: "ขั้นตอนที่ 2: รันสคริปต์สร้างตาราง (DDL)",
            detail: "คัดลอกโค้ด SQL จากตัวอย่างในบทเรียนไปวางใน DBeaver แล้วกดปุ่ม Ctrl+Enter เพื่อรันคำสั่งสร้างตาราง departments และ students"
          },
          {
            title: "ขั้นตอนที่ 3: ทดสอบเพิ่มข้อมูลที่ถูกต้อง",
            detail: "เพิ่มแผนกวิชา IT และเพิ่มข้อมูลนักศึกษา 1 คนที่มี dept_id ตรงกับแผนกที่เพิ่งสร้าง รันคำสั่งแล้วตรวจสอบผลด้วย SELECT * FROM students"
          },
          {
            title: "ขั้นตอนที่ 4: ทดสอบระบบความปลอดภัย Constraints",
            detail: "ทดลองเพิ่มนักศึกษาที่มีค่า gpa เป็น 4.50 (ต้อง Error ติดข้อบังคับ CHECK) และทดลองเพิ่มนักศึกษาที่มี dept_id เป็น 999 ซึ่งไม่มีอยู่จริงในตารางแม่ (ต้อง Error ติด FOREIGN KEY violation)"
          }
        ],
        verification: "คำสั่งที่ใส่ข้อมูลผิดพลาดจะต้องถูก RDBMS สกัดกั้นและแจ้งข้อความ 'violates check constraint' หรือ 'violates foreign key constraint' อย่างชัดเจน"
      }
    },

    // ==========================================
    // บทเรียนที่ 2: SQL DDL, DML & CRUD Operations
    // ==========================================
    {
      id: "db-2",
      title: "SQL เชิงลึก: DDL, DML และการปฏิบัติการข้อมูลแบบ CRUD",
      description: "เชี่ยวชาญคำสั่ง CREATE/ALTER/DROP, INSERT หลายแถว (Batch Insert), SELECT พร้อมการกรอง WHERE, LIKE, IN, BETWEEN, ORDER BY และการ UPDATE/DELETE อย่างปลอดภัย",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# การจัดการฐานข้อมูลด้วยภาษา SQL: DDL, DML และ CRUD Operations

**SQL (Structured Query Language)** เป็นภาษามาตรฐานสากล (ISO/IEC 9075) ที่ใช้ในการบริหารจัดการ สั่งการ และสอบถามข้อมูลกับระบบ RDBMS ทั้งหมด

---

## 1. หมวดหมู่หลักของคำสั่ง SQL

1. **DDL (Data Definition Language - คำสั่งโครงสร้าง):**
   - \`CREATE\`: สร้างฐานข้อมูล, ตาราง, วิว หรือดัชนี
   - \`ALTER\`: เพิ่ม, ลบ หรือแก้ไขคอลัมน์และข้อบังคับในตารางที่มีอยู่แล้ว
   - \`DROP\`: ลบโครงสร้างตารางหรือฐานข้อมูลทิ้งอย่างถาวร
   - \`TRUNCATE\`: ล้างข้อมูลทั้งหมดในตารางทิ้งอย่างรวดเร็ว (เร็วกว่า DELETE และรีเซ็ตค่าตัวนับ ID)
2. **DML (Data Manipulation Language - คำสั่งจัดการข้อมูล):**
   - \`INSERT\`: นำเข้าข้อมูลใหม่เข้าสู่ตาราง
   - \`SELECT\`: ดึง คัดกรอง และประมวลผลข้อมูลออกมาแสดง
   - \`UPDATE\`: แก้ไขค่าของข้อมูลที่มีอยู่แล้ว
   - \`DELETE\`: ลบแถวข้อมูลตามเงื่อนไขที่กำหนด
3. **DCL (Data Control Language - คำสั่งความปลอดภัย):**
   - \`GRANT\`, \`REVOKE\`: กำหนดและเพิกถอนสิทธิ์ของผู้ใช้งานในระบบ

---

## 2. กฎเหล็กในการใช้งานคำสั่ง UPDATE และ DELETE (Production Safety)

> ⚠️ **คำเตือนที่มีมูลค่าล้านบาทสำหรับโปรแกรมเมอร์:**
> ห้ามรันคำสั่ง \`UPDATE\` หรือ \`DELETE\` โดย **ไม่มีเงื่อนไข \`WHERE\` เด็ดขาด!** เพราะหากลืมใส่ \`WHERE\` คำสั่งจะถูกนำไปกระทำกับ **ทุกแถวข้อมูลในตารางทั้งหมดทันที**
> - **เทคนิคป้องกัน:** ก่อนสั่ง UPDATE หรือ DELETE ให้เขียนคำสั่ง \`SELECT\` ด้วยเงื่อนไข \`WHERE\` เดียวกันนั้นก่อนเสมอ เพื่อตรวจสอบให้แน่ใจว่าได้แถวข้อมูลที่ต้องการแก้ไขตรงเป๊ะจริงๆ

---

## 3. รูปแบบการสอบถามข้อมูลด้วยคำสั่ง SELECT ขั้นสูง

### 3.1 การกรองด้วย WHERE Operators
- \`WHERE gpa >= 3.50 AND dept_id = 1\` (เงื่อนไขและ)
- \`WHERE status = 'active' OR is_scholarship = TRUE\` (เงื่อนไขหรือ)
- \`WHERE dept_id IN (1, 3, 5)\` (ตรงกับค่าใดค่าหนึ่งในลิสต์)
- \`WHERE gpa BETWEEN 2.50 AND 3.50\` (ช่วงค่าที่รวมหัวและท้าย)
- \`WHERE last_name LIKE 'สม%'\` (ขึ้นต้นด้วยคำว่า 'สม' โดย \`%\` แทนตัวอักษรใดๆ กี่ตัวก็ได้)
- \`WHERE phone_number IS NULL\` (ตรวจสอบค่าว่าง ห้ามใช้ \`= NULL\`)

### 3.2 การเรียงลำดับและการจำกัดจำนวนข้อมูล (Pagination)
- \`ORDER BY gpa DESC, student_id ASC\` (เรียงตามเกรดจากมากไปน้อย หากเกรดเท่ากันให้เรียงตามรหัสนักศึกษาจากน้อยไปมาก)
- \`LIMIT 10 OFFSET 20\` (สำหรับทำหน้าเว็บแบ่งหน้า: ข้าม 20 รายการแรกไป แล้วดึงมาแสดง 10 รายการถัดไป)`,
      codeExample: {
        language: "sql",
        code: `-- 1. เพิ่มข้อมูลหลายแถวพร้อมกันในคำสั่งเดียว (Batch Insert)
INSERT INTO students (student_id, citizen_id, first_name, last_name, birth_date, gpa, dept_id) VALUES
('67309010001', '1100500123451', 'กิตติศักดิ์', 'รักเรียน', '2005-05-15', 3.85, 1),
('67309010002', '1100500123452', 'สุดารัตน์', 'ใจดี', '2006-02-20', 3.92, 1),
('67309010003', '1100500123453', 'ธนากร', 'เก่งกาจ', '2005-11-10', 2.75, 2),
('67309010004', '1100500123454', 'พรสวรรค์', 'ปัญญาเลิศ', '2006-08-05', 3.50, 1);

-- 2. คัดกรองนักศึกษาที่ได้เกรดนิยม (GPA >= 3.50) ประจำแผนก 1 เรียงลำดับจากเกรดสูงสุด
SELECT student_id, first_name, last_name, gpa
FROM students
WHERE gpa >= 3.50 AND dept_id = 1
ORDER BY gpa DESC;

-- 3. อัปเดตข้อมูลเกรดเฉลี่ยอย่างปลอดภัยโดยระบุ Primary Key
UPDATE students
SET gpa = 3.90, updated_at = CURRENT_TIMESTAMP
WHERE student_id = '67309010004';

-- 4. ลบข้อมูลโดยมีเงื่อนไขระบุเฉพาะเจาะจง
DELETE FROM students
WHERE student_id = '67309010003';`,
        description: "สคริปต์คำสั่ง DML ปฏิบัติการ CRUD: การเพิ่มข้อมูลแบบกลุ่ม, การคิวรีกรองข้อมูลพร้อมเรียงลำดับ, และการแก้ไข/ลบข้อมูลอย่างปลอดภัย"
      },
      quiz: [
        {
          id: "db-2-q1",
          question: "หากต้องการตรวจสอบหาแถวข้อมูลที่ฟิลด์ email ไม่มีข้อมูลบันทึกอยู่ (เป็นค่าว่าง) ต้องเขียนเงื่อนไข WHERE ในข้อใด?",
          options: ["WHERE email = ''", "WHERE email = NULL", "WHERE email IS NULL", "WHERE email == NULL"],
          correctAnswer: 2,
          explanation: "ในมาตรฐาน SQL ค่า NULL หมายถึง 'ไม่ทราบค่า' (Unknown) ไม่สามารถใช้เครื่องหมายเปรียบเทียบ = หรือ != ได้ ต้องใช้ตัวดำเนินการ 'IS NULL' หรือ 'IS NOT NULL' เท่านั้น"
        },
        {
          id: "db-2-q2",
          question: "คำสั่ง 'TRUNCATE TABLE students;' มีความแตกต่างจาก 'DELETE FROM students;' อย่างไร?",
          options: [
            "TRUNCATE ลบได้เฉพาะทีละแถว ส่วน DELETE ลบได้ทั้งตาราง",
            "TRUNCATE เป็นคำสั่ง DDL ที่ลบข้อมูลทั้งหมดอย่างรวดเร็วโดยไม่บันทึกประวัติการลบทีละแถว และรีเซ็ตค่าตัวนับลำดับ ID",
            "DELETE จะทำการลบโครงสร้างตารางทิ้งไปด้วย",
            "TRUNCATE สามารถใส่เงื่อนไข WHERE ได้"
          ],
          correctAnswer: 1,
          explanation: "TRUNCATE ล้างข้อมูลทั้งตารางโดยการ Deallocate หน้าหน่วยความจำระดับ Block จึงเร็วกว่า DELETE มาก และจะรีเซ็ตค่า AUTO_INCREMENT กลับเป็น 1 แต่ไม่สามารถใช้ WHERE ได้"
        }
      ],
      labGuide: {
        title: "แล็บฝึกปฏิบัติการเขียนคิวรีข้อมูล CRUD และการสร้างระบบค้นหานักศึกษา",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "เขียนคำสั่ง SQL INSERT ข้อมูลนักศึกษาจำลอง 10 แถว และเขียนคิวรี SELECT ค้นหานักศึกษาตามเงื่อนไขความซับซ้อนต่างๆ",
        steps: [
          {
            title: "ขั้นตอนที่ 1: เตรียมชุดข้อมูลจำลอง",
            detail: "เปิดแท็บ SQL Editor บน DBeaver รันชุดคำสั่ง INSERT ข้อมูลนักศึกษาจำนวน 10 รายการ โดยมีเกรดและวันเกิดที่หลากหลาย"
          },
          {
            title: "ขั้นตอนที่ 2: เขียนคำสั่งค้นหานักศึกษาตามตัวอักษร",
            detail: "เขียนคิวรีค้นหานักศึกษาทุกคนที่นามสกุลขึ้นต้นด้วยตัว 'ส' หรือชื่อมีคำว่า 'ศักดิ์' โดยใช้ตัวดำเนินการ LIKE และเครื่องหมาย %",
            codeOrCommand: "SELECT * FROM students WHERE first_name LIKE '%ศักดิ์%' OR last_name LIKE 'ส%';"
          },
          {
            title: "ขั้นตอนที่ 3: ฝึกเขียนเงื่อนไขช่วงเวลาและตัวเลข",
            detail: "เขียนคิวรีค้นหานักศึกษาที่เกิดในช่วงปี 2005 (ระหว่าง '2005-01-01' ถึง '2005-12-31') และมีเกรดเฉลี่ยมากกว่า 3.00"
          },
          {
            title: "ขั้นตอนที่ 4: ทดสอบการทำ Pagination",
            detail: "เขียนคิวรีจัดอันดับนักศึกษาตามเกรดเฉลี่ยจากมากไปน้อย แล้วใช้คำสั่ง LIMIT 5 OFFSET 0 เพื่อดึง Top 5 อันดับแรกของวิทยาลัยออกมาแสดง"
          }
        ],
        verification: "ตารางผลลัพธ์ใน Result Grid ของ DBeaver จะต้องแสดงข้อมูลที่กรองและเรียงลำดับถูกต้องตามเงื่อนไขที่กำหนดครบถ้วน"
      }
    },

    // ==========================================
    // บทเรียนที่ 3: การสร้างแบบจำลอง ER Diagram และความสัมพันธ์
    // ==========================================
    {
      id: "db-3",
      title: "การออกแบบแบบจำลองข้อมูล (ER Modeling) และความสัมพันธ์ 1:1, 1:N, M:N",
      description: "ทำความเข้าใจ Entities, Attributes, Relationships, การแปลงความสัมพันธ์ 1:1, 1:N และการแก้ปัญหาความสัมพันธ์กลุ่มต่อกลุ่ม (M:N) ด้วยตารางตัวกลาง (Junction Table)",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การออกแบบแบบจำลองข้อมูล (Entity-Relationship Modeling)

**ER Diagram (Entity-Relationship Diagram)** เป็นแบบจำลองเชิงแนวคิด (Conceptual Data Model) ที่ช่วยให้นักวิเคราะห์ระบบและวิศวกรฐานข้อมูลสามารถแปลงความต้องการทางธุรกิจ (Business Requirements) ขององค์กรให้ออกมาเป็นแผนภาพโครงสร้างตารางและความสัมพันธ์ได้อย่างถูกต้อง ก่อนที่จะลงมือเขียนโค้ด SQL จริง

\`\`\`diagram:er
แผนภาพความสัมพันธ์ข้อมูล (ER Diagram) และคีย์หลัก PK / คีย์นอก FK
\`\`\`

---

## 1. องค์ประกอบหลักของแบบจำลอง ER

1. **Entity (เอนทิตี):** สิ่งที่มีตัวตนและองค์กรต้องการเก็บข้อมูล เช่น นักศึกษา (\`Student\`), รายวิชา (\`Course\`), อาจารย์ผู้สอน (\`Teacher\`), ห้องเรียน (\`Classroom\`)
2. **Attribute (แอตทริบิวต์):** คุณลักษณะประจำตัวของ Entity เช่น รหัสนักศึกษา, ชื่อ, เกรดเฉลี่ย
3. **Relationship (ความสัมพันธ์):** ความเกี่ยวข้องกันระหว่าง 2 เอนทิตีขึ้นไป เช่น *"นักศึกษา **ลงทะเบียนเรียน** ในรายวิชา"*

---

## 2. ประเภทของความสัมพันธ์ระหว่างข้อมูล (Cardinality)

### 2.1 ความสัมพันธ์แบบ 1 ต่อ 1 (One-to-One : 1:1)
- **ตัวอย่าง:** นักศึกษา 1 คน มีบัตรประจำตัวนักศึกษาได้เพียง 1 ใบ และบัตรใบนั้นเป็นของนักศึกษาคนนั้นเพียงคนเดียว
- **การแปลงเป็นตาราง:** นำ Primary Key ของตารางหลัก ไปวางเป็น Foreign Key ในตารางรอง พร้อมทั้งกำหนดเงื่อนไข **\`UNIQUE\`** กำกับไว้เสมอ เพื่อไม่ให้มีข้อมูลซ้ำ

### 2.2 ความสัมพันธ์แบบ 1 ต่อ กลุ่ม (One-to-Many : 1:N)
- **ตัวอย่าง:** แผนกวิชา 1 แผนก มีนักศึกษาสังกัดได้หลายคน (N) แต่นักศึกษาแต่ละคนสามารถสังกัดได้เพียง 1 แผนกเท่านั้น
- **การแปลงเป็นตาราง:** กฎตายตัวคือ **นำ Primary Key จากฝั่ง 1 ไปวางเป็น Foreign Key ในฝั่ง Many** เสมอ (เช่น นำ \`dept_id\` ไปเป็น FK ในตาราง \`students\`)

### 2.3 ความสัมพันธ์แบบ กลุ่ม ต่อ กลุ่ม (Many-to-Many : M:N)
- **ตัวอย่าง:** นักศึกษา 1 คน สามารถลงทะเบียนเรียนได้หลายรายวิชา (Many) และในขณะเดียวกัน รายวิชา 1 วิชา ก็มีนักศึกษาเข้าเรียนได้หลายคน (Many)
- **ปัญหาทางทฤษฎี:** RDBMS **ไม่สามารถเชื่อมโยงความสัมพันธ์แบบ Many-to-Many ได้โดยตรง** เพราะจะทำให้เกิดความซ้ำซ้อนอย่างมหาศาล
- **วิธีแก้ไขมาตรฐาน:** ต้องทำการแตกความสัมพันธ์ออกโดยการสร้าง **ตารางตัวกลาง (Junction Table / Associative Entity)** ขึ้นมาคั่นตรงกลาง เช่น ตาราง \`enrollments\`
  - ตารางตัวกลางจะดึงเอา Primary Key ของทั้งสองตารางมาเก็บไว้เป็น Foreign Key
  - และนำทั้งสองฟิลด์มารวมกันเป็น **Composite Primary Key** เช่น \`PRIMARY KEY (student_id, course_id)\``,
      codeExample: {
        language: "sql",
        code: `-- 1. ตารางหลัก: นักศึกษา (Students)
CREATE TABLE students (
    student_id VARCHAR(11) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- 2. ตารางหลัก: รายวิชา (Courses)
CREATE TABLE courses (
    course_id VARCHAR(10) PRIMARY KEY, -- เช่น '30901-2001'
    course_name VARCHAR(100) NOT NULL,
    credits INT NOT NULL CHECK (credits > 0)
);

-- 3. ตารางตัวกลาง (Junction Table): การลงทะเบียนเรียน (Enrollments)
-- แก้ไขความสัมพันธ์ Many-to-Many ระหว่าง Students กับ Courses
CREATE TABLE enrollments (
    student_id VARCHAR(11) NOT NULL,
    course_id VARCHAR(10) NOT NULL,
    semester VARCHAR(10) NOT NULL, -- เช่น '1/2567'
    grade DECIMAL(3, 2),          -- ผลการเรียน เช่น 4.00, 3.50
    enrolled_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    -- กำหนด Composite Primary Key (นักศึกษาคนเดิม ลงวิชาเดิม ในเทอมเดิม ซ้ำซ้อนไม่ได้)
    PRIMARY KEY (student_id, course_id, semester),
    
    -- Foreign Keys เชื่อมโยงกลับไปยังตารางหลักทั้งสอง
    CONSTRAINT fk_enroll_student FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    CONSTRAINT fk_enroll_course FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE RESTRICT
);`,
        description: "ตัวอย่างสคริปต์ SQL การแก้ไขความสัมพันธ์แบบ Many-to-Many ด้วยการสร้าง Junction Table (ตารางการลงทะเบียนเรียน)"
      },
      quiz: [
        {
          id: "db-3-q1",
          question: "เมื่อพบความสัมพันธ์ระหว่าง Entity แบบ Many-to-Many (M:N) ในขั้นตอนการออกแบบฐานข้อมูล มีแนวทางปฏิบัติอย่างไรในการแปลงเป็นตารางจริง?",
          options: [
            "สร้างคอลัมน์เก็บข้อมูลแบบ Array คั่นด้วยเครื่องหมายจุลภาคในตารางใดตารางหนึ่ง",
            "สร้างตารางตัวกลาง (Junction Table) ขึ้นมาคั่นตรงกลางเพื่อแปลงเป็นความสัมพันธ์ 1:N สองชุด",
            "นำ Primary Key ของทั้งสองตารางมารวมเป็นตารางเดียวกันทั้งหมด",
            "ไม่สามารถทำได้ในระบบฐานข้อมูล RDBMS ต้องเปลี่ยนไปใช้ NoSQL"
          ],
          correctAnswer: 1,
          explanation: "มาตรฐานของ RDBMS คือการสร้าง Junction Table (ตารางตัวกลาง) ขึ้นมารับ Foreign Key จากทั้งสองตาราง แปลงความสัมพันธ์ M:N ให้กลายเป็น 1:N จำนวนสองเส้นได้อย่างเป็นระเบียบ"
        },
        {
          id: "db-3-q2",
          question: "ในตารางลงทะเบียนเรียน (Enrollments) การกำหนด Composite Primary Key ด้วยฟิลด์ (student_id, course_id, semester) มีประโยชน์อย่างไร?",
          options: [
            "ช่วยให้นักศึกษาคนหนึ่งสามารถลงทะเบียนวิชาเดิมซ้ำๆ ในเทอมเดียวกันได้หลายครั้ง",
            "ป้องกันไม่ให้นักศึกษาคนเดิมลงทะเบียนในวิชาเดียวกันซ้ำซ้อนมากกว่า 1 ครั้งในภาคเรียนเดียวกัน",
            "ทำให้ไม่ต้องมี Foreign Key",
            "ทำให้ตารางนี้ทำงานได้เร็วขึ้นเฉพาะคำสั่ง DELETE"
          ],
          correctAnswer: 1,
          explanation: "Composite Key ชุดนี้จะบังคับความไม่ซ้ำกันของคู่นักศึกษาและรายวิชาในเทอมนั้นๆ ป้องกันบั๊กการกดลงทะเบียนซ้ำซ้อนในระบบทะเบียนได้อย่างเด็ดขาด"
        }
      ],
      labGuide: {
        title: "แล็บออกแบบสถาปัตยกรรม ER Diagram ระบบทะเบียนวิทยาลัย",
        toolName: "drawSQL",
        downloadUrl: "https://drawsql.app/",
        objective: "ใช้เครื่องมือ drawSQL ออกแบบผังฐานข้อมูลความสัมพันธ์ของวิทยาลัย ประกอบด้วยตาราง students, departments, courses, teachers และ enrollments",
        steps: [
          {
            title: "ขั้นตอนที่ 1: เข้าสู่ drawSQL และสร้าง Diagram ใหม่",
            detail: "เข้าเว็บ drawsql.app สร้างไดอะแกรมใหม่ชื่อ 'Vocational_RMS_Schema' เลือกฐานข้อมูล PostgreSQL"
          },
          {
            title: "ขั้นตอนที่ 2: สร้างตารางและกำหนดฟิลด์",
            detail: "สร้างตาราง departments, students, courses, teachers และสร้างตาราง enrollments ระบุ Primary Key และชนิดข้อมูลให้ถูกต้อง"
          },
          {
            title: "ขั้นตอนที่ 3: ลากเส้นความสัมพันธ์ (Relationships)",
            detail: "ลากเส้นเชื่อมโยง:\n- จาก departments.dept_id ไปยัง students.dept_id (ความสัมพันธ์ 1:N)\n- จาก students.student_id ไปยัง enrollments.student_id (ความสัมพันธ์ 1:N)\n- จาก courses.course_id ไปยัง enrollments.course_id (ความสัมพันธ์ 1:N)"
          },
          {
            title: "ขั้นตอนที่ 4: Export สคริปต์ SQL DDL",
            detail: "กดปุ่ม Export ที่มุมบนขวา เลือก Export as SQL แล้วนำสคริปต์ที่ได้มาตรวจสอบความถูกต้องของคำสั่ง Foreign Key และชนิดข้อมูล"
          }
        ],
        verification: "ผังไดอะแกรมต้องแสดงเส้นความสัมพันธ์อย่างชัดเจน ไม่มีเส้นความสัมพันธ์ Many-to-Many หลงเหลืออยู่โดยตรง และมี Junction Table คั่นกลางอย่างถูกต้อง"
      }
    },

    // ==========================================
    // บทเรียนที่ 4: การทำ Normalization (1NF ถึง BCNF)
    // ==========================================
    {
      id: "db-4",
      title: "การจัดโครงสร้างข้อมูลให้เป็นบรรทัดฐาน: Normalization (1NF, 2NF, 3NF & BCNF)",
      description: "ทำความเข้าใจความผิดปกติของข้อมูล (Anomalies), กฎการทำ Normalization ทีละระดับขั้น 1NF (Atomic Values), 2NF (Full Functional Dependency), 3NF (Transitive Dependency) และ BCNF",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# การปรับโครงสร้างข้อมูลให้เป็นบรรทัดฐาน (Database Normalization)

**Normalization** คือกระบวนการทางวิศวกรรมในการวิเคราะห์และแยกย่อยตารางขนาดใหญ่ที่ซ้ำซ้อนออกเป็นตารางย่อยๆ ที่มีความสัมพันธ์กัน เพื่อขจัดปัญหาความซ้ำซ้อนของข้อมูล (Data Redundancy) และป้องกัน **ความผิดปกติในการจัดการข้อมูล (Data Anomalies)** 3 ประการ:

1. **Insertion Anomaly (ความผิดปกติเมื่อเพิ่มข้อมูล):** ไม่สามารถเพิ่มข้อมูลเรื่องหนึ่งได้ หากยังไม่มีข้อมูลอีกเรื่องหนึ่ง เช่น ไม่สามารถเพิ่มรายวิชาใหม่ได้จนกว่าจะมีนักศึกษามาลงทะเบียน
2. **Update Anomaly (ความผิดปกติเมื่อแก้ไขข้อมูล):** หากข้อมูลมีการบันทึกซ้ำกันหลายที่ (เช่น ชื่อแผนกวิชา) เมื่อแก้ไขจุดหนึ่งแล้วลืมแก้อีกจุดหนึ่ง จะทำให้เกิดข้อมูลขัดแย้งกันในระบบ
3. **Deletion Anomaly (ความผิดปกติเมื่อลบข้อมูล):** การลบข้อมูลแถวหนึ่งทิ้ง อาจทำให้ข้อมูลสำคัญอีกเรื่องสูญหายตามไปด้วยโดยไม่ได้ตั้งใจ เช่น ลบประวัตินักศึกษาคนสุดท้ายของแผนก แล้วทำให้ชื่อแผนกวิชานั้นหายไปจากระบบด้วย

---

## 1. ลำดับขั้นตอนการทำ Normalization

\`\`\`
[ตารางข้อมูลดิบที่ไม่เป็นระเบียบ]
        │
        ▼ (ตัดข้อมูลหลายค่าใน 1 ช่องออก / ทำเป็น Atomic)
[1NF: First Normal Form]
        │
        ▼ (กำจัด Partial Dependency / ทุกคอลัมน์ต้องขึ้นกับ PK ทั้งก้อน)
[2NF: Second Normal Form]
        │
        ▼ (กำจัด Transitive Dependency / ห้ามมีคอลัมน์ทั่วไปขึ้นต่อกันเอง)
[3NF: Third Normal Form]  <-- มาตรฐานที่ใช้ในระบบองค์กรจริง
        │
        ▼ (ทุก Determinant ต้องเป็น Candidate Key)
[BCNF: Boyce-Codd Normal Form]
\`\`\`

---

## 2. เจาะลึกกฎเกณฑ์แต่ละระดับขั้น

### 2.1 First Normal Form (1NF - รูปแบบบรรทัดฐานขั้นที่ 1)
- **กฎเหล็ก:** ข้อมูลในแต่ละช่อง (Cell) ต้องเป็นค่าเดี่ยวที่ไม่สามารถแบ่งย่อยได้อีก (**Atomic Value**)
- ห้ามมีกลุ่มข้อมูลซ้ำ (Repeating Groups) เช่น ในช่อง \`courses_enrolled\` ห้ามพิมพ์เก็บเป็น \`"คณิตศาสตร์, ฟิสิกส์, ภาษาอังกฤษ"\` ในช่องเดียวกัน
- ต้องมีการกำหนด **Primary Key** ที่ชัดเจน

### 2.2 Second Normal Form (2NF - รูปแบบบรรทัดฐานขั้นที่ 2)
- ต้องผ่าน **1NF** เรียบร้อยแล้ว
- **กฎเหล็ก:** ข้อมูลที่ไม่ใช่คีย์ (Non-key Attributes) ทุกคอลัมน์ จะต้องขึ้นตรงต่อ **คีย์หลักทั้งก้อน (Full Functional Dependency)**
- **กำจัด Partial Dependency:** ปัญหานี้เกิดขึ้นเฉพาะกับตารางที่มี **Composite Primary Key** โดยหากมีคอลัมน์ใดคอลัมน์หนึ่งขึ้นอยู่กับคีย์หลักเพียงบางส่วน (ไม่ใช่ทุกฟิลด์ของคีย์ผสม) จะต้องแยกคอลัมน์นั้นออกไปตั้งเป็นตารางใหม่

### 2.3 Third Normal Form (3NF - รูปแบบบรรทัดฐานขั้นที่ 3)
- ต้องผ่าน **2NF** เรียบร้อยแล้ว
- **กฎเหล็ก:** ต้องไม่มี **Transitive Dependency** (ความขึ้นต่อกันแบบทอดๆ)
- อธิบายง่ายๆ: **"ฟิลด์ที่ไม่ใช่คีย์ จะต้องขึ้นตรงต่อ Primary Key เท่านั้น และห้ามขึ้นต่อฟิลด์อื่นที่ไม่ใช่คีย์ด้วยกันเอง"**
- **ตัวอย่างข้อผิดพลาด:** ในตาราง \`students\` มีคอลัมน์ \`dept_id\`, \`dept_name\`, \`dept_building\` ซึ่งพบว่า \`dept_name\` ขึ้นอยู่กับ \`dept_id\` (ซึ่งไม่ใช่ PK ของตารางนักศึกษา) ต้องแยก \`dept_id\`, \`dept_name\`, \`dept_building\` ออกไปเป็นตาราง \`departments\` แยกต่างหาก!

---

## 3. ตัวอย่างการแปลงโครงสร้างจากตารางดิบสู่ 3NF

### ตารางก่อนทำ Normalization (เกิดความซ้ำซ้อนสูง):
\`\`\`text
| student_id | student_name | dept_id | dept_name    | course_id | course_name | grade |
| 67309001   | นายสมชาย     | 10      | ช่างเทคนิค   | CS101     | เขียนโปรแกรม | 4.0   |
| 67309001   | นายสมชาย     | 10      | ช่างเทคนิค   | CS102     | เครือข่าย     | 3.5   |
\`\`\`

### หลังผ่านกระบวนการ 3NF (ได้ 4 ตารางที่เป็นระเบียบ):
1. **\`students\` (student_id [PK], student_name, dept_id [FK])**
2. **\`departments\` (dept_id [PK], dept_name)**
3. **\`courses\` (course_id [PK], course_name)**
4. **\`enrollments\` (student_id [FK], course_id [FK], grade) -> PK(student_id, course_id)**`,
      codeExample: {
        language: "sql",
        code: `-- โครงสร้างฐานข้อมูลที่ผ่านการ Normalize ระดับ 3NF เรียบร้อยแล้ว
-- 1. ตารางแผนกวิชา (ขจัด Transitive Dependency ของข้อมูลแผนก)
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

-- 2. ตารางนักศึกษา (ขึ้นตรงกับ student_id เพียงอย่างเดียว)
CREATE TABLE students (
    student_id VARCHAR(11) PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    dept_id INT REFERENCES departments(dept_id)
);

-- 3. ตารางรายวิชา (ขึ้นตรงกับ course_id เพียงอย่างเดียว)
CREATE TABLE courses (
    course_id VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL
);

-- 4. ตารางการลงทะเบียน (ขจัด Partial Dependency: grade ขึ้นอยู่กับคู่นักศึกษาและวิชา)
CREATE TABLE enrollments (
    student_id VARCHAR(11) REFERENCES students(student_id),
    course_id VARCHAR(10) REFERENCES courses(course_id),
    grade DECIMAL(3, 2),
    PRIMARY KEY (student_id, course_id)
);`,
        description: "โครงสร้าง DDL ของตารางที่ผ่านการปรับบรรทัดฐานข้อมูลระดับ 3NF สมบูรณ์ ปราศจากความผิดปกติของข้อมูล"
      },
      quiz: [
        {
          id: "db-4-q1",
          question: "การที่คอลัมน์ที่ไม่ใช่คีย์ ขึ้นต่อกันเอง (เช่น ในตารางนักศึกษามีรหัสไปรษณีย์ และมีชื่อจังหวัดที่ขึ้นอยู่กับรหัสไปรษณีย์) จัดเป็นความผิดปกติข้อใด และแก้ไขได้ที่ระดับใด?",
          options: [
            "Partial Dependency แก้ไขที่ระดับ 2NF",
            "Transitive Dependency แก้ไขที่ระดับ 3NF",
            "Multi-valued Dependency แก้ไขที่ระดับ 1NF",
            "Atomic Violation แก้ไขที่ระดับ BCNF"
          ],
          correctAnswer: 1,
          explanation: "Transitive Dependency คือการที่ Non-key ส่งผลต่อ Non-key ด้วยกันเอง (A -> B -> C) แก้ไขได้ในระดับ 3NF โดยการตัดฟิลด์นั้นออกไปสร้างเป็นตารางใหม่"
        },
        {
          id: "db-4-q2",
          question: "เงื่อนไขสำคัญที่สุดของ First Normal Form (1NF) คือข้อใด?",
          options: [
            "ตารางต้องไม่มี Foreign Key",
            "ข้อมูลในแต่ละช่อง (Attribute) ต้องเป็นค่าเดี่ยวที่ไม่สามารถแบ่งแยกได้อีก (Atomic Value)",
            "ทุกตารางต้องมีคอลัมน์ไม่เกิน 5 คอลัมน์",
            "ต้องไม่มีการเชื่อมโยงข้ามตาราง"
          ],
          correctAnswer: 1,
          explanation: "1NF บังคับว่าข้อมูลในแต่ละ Cell ต้องเป็นค่า Atomic (ค่าเดี่ยว) ห้ามจัดเก็บข้อมูลที่เป็นชุด (Repeating Groups หรือ Arrays) ในช่องเดียวกันเด็ดขาด"
        }
      ],
      labGuide: {
        title: "แล็บแปลงข้อมูลเอกสารกระดาษ Excel ให้กลายเป็น 3NF Schema",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "นำตารางข้อมูลประวัติการฝึกงานของนักศึกษาในไฟล์ Excel ที่ยังไม่ Normalize มาทำการวิเคราะห์และแยกย่อยออกเป็นสคีมา 3NF บนฐานข้อมูลจริง",
        steps: [
          {
            title: "ขั้นตอนที่ 1: วิเคราะห์ข้อมูลดิบ (Unnormalized Form)",
            detail: "สังเกตตาราง Excel ที่มีข้อมูลรหัสนักศึกษา, ชื่อสถานประกอบการ, ที่อยู่บริษัท, เบอร์ติดต่อ, ชื่อผู้ควบคุมการฝึกงาน, และวันที่เริ่มฝึกงานในตารางเดียว"
          },
          {
            title: "ขั้นตอนที่ 2: ปรับปรุงให้อยู่ในรูปแบบ 1NF",
            detail: "แยกข้อมูลที่มีหลายเบอร์โทรศัพท์ในช่องเดียวออกเป็นแถวเดี่ยว และกำหนด Primary Key ที่ระบุตัวตนได้แน่นอน"
          },
          {
            title: "ขั้นตอนที่ 3: ปรับปรุงเป็น 2NF และ 3NF",
            detail: "แยกข้อมูลสถานประกอบการ (company_id, company_name, address, phone) ออกไปเป็นตาราง companies และสร้างตารางฝึกงาน internships เก็บเฉพาะ (student_id, company_id, start_date)"
          },
          {
            title: "ขั้นตอนที่ 4: รันคำสั่งสร้างตารางบน DBeaver",
            detail: "เขียนโค้ด SQL CREATE TABLE เชื่อมโยง Foreign Key ตามผลการวิเคราะห์ และทดสอบเพิ่มข้อมูลความสัมพันธ์"
          }
        ],
        verification: "ตารางที่สร้างขึ้นใหม่จะต้องไม่มีข้อมูลที่อยู่ของบริษัทซ้ำซ้อนกันในหลายๆ แถว เมื่อบริษัทเปลี่ยนที่อยู่ จะทำการแก้ไขเพียงแถวเดียวในตาราง companies"
      }
    },

    // ==========================================
    // บทเรียนที่ 5: การเชื่อมโยงข้อมูลหลายตาราง Multi-Table JOINs
    // ==========================================
    {
      id: "db-5",
      title: "การเชื่อมโยงข้อมูลหลายตารางขั้นสูง (Multi-Table JOIN Operations)",
      description: "เชี่ยวชาญการผสานตารางด้วย INNER JOIN, LEFT OUTER JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN และ SELF JOIN พร้อมการวิเคราะห์ประสิทธิภาพ",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# การเชื่อมโยงข้อมูลหลายตาราง (SQL JOIN Operations)

หลังจากที่เราได้ทำ Normalization แยกข้อมูลออกเป็นหลายๆ ตารางที่เป็นระเบียบเรียบร้อยแล้ว ในการออกรายงานหรือแสดงผลบนหน้าจอเว็บ เราจำเป็นต้องดึงข้อมูลจากตารางต่างๆ กลับมารวมกันเป็นผลลัพธ์ผืนเดียว คำสั่งที่เป็นหัวใจสำคัญที่สุดในขั้นตอนนี้คือคำสั่ง **JOIN**

---

## 1. แผนภาพและประเภทของ SQL JOINs

| ชนิดของ JOIN | คำอธิบายพฤติกรรมการดึงข้อมูล | กรณีตัวอย่างในการใช้งานจริง |
|---|---|---|
| **INNER JOIN** | ดึงเฉพาะแถวข้อมูลที่ **มีค่าตรงกันทั้งสองฝั่งตารางเท่านั้น** | ค้นหานักศึกษาที่มีการลงทะเบียนเรียนในเทอมนี้เท่านั้น (คนไม่ลงจะไม่โผล่มา) |
| **LEFT JOIN** | ดึงข้อมูล **ทุกแถวจากตารางซ้าย (ตารางหลัก)** เสมอ แม้ว่าตารางขวาจะไม่มีข้อมูลตรงกันก็ตาม (ค่าฝั่งขวาจะเป็น NULL) | **ดึงรายชื่อนักศึกษาทุกคน** พร้อมแสดงแผนกวิชา (แม้บางคนจะยังไม่ได้เลือกแผนกก็ยังเห็นชื่อ) |
| **RIGHT JOIN** | ดึงข้อมูล **ทุกแถวจากตารางขวา** เสมอ แม้ตารางซ้ายจะไม่มีข้อมูล | แสดงแผนกวิชาทั้งหมด พร้อมรายชื่อนักศึกษา (แผนกที่ไม่มีนักศึกษาเรียนเลยก็จะยังแสดงชื่อแผนก) |
| **FULL OUTER JOIN** | ดึงข้อมูลทั้งหมดจากทั้งสองตาราง หากฝั่งใดไม่มีคู่จะเติมด้วยค่า NULL | ตรวจสอบการกระทบยอดข้อมูลที่อาจไม่ตรงกันทั้งสองฝั่ง |
| **CROSS JOIN** | นำทุกแถวของตารางแรก ไปจับคู่กับทุกแถวของตารางที่สอง (**Cartesian Product**: $M \\times N$) | สร้างเมทริกซ์จับคู่วันในสัปดาห์ (จันทร์-ศุกร์) กับคาบเรียน (1-8) |
| **SELF JOIN** | การนำตารางเดิมมา JOIN เข้ากับตัวมันเอง โดยตั้งชื่อ Alias ต่างกัน | ค้นหาข้อมูลที่มีโครงสร้างลำดับชั้น (Hierarchy) เช่น ตารางพนักงานที่มีฟิลด์เก็บรหัสหัวหน้า |

---

## 2. โครงสร้างคำสั่งและการใช้ Table Alias

การเขียน JOIN ที่เป็นมืออาชีพต้องตั้งชื่อย่อ (**Table Alias**) ให้กับตารางเสมอเพื่อให้อ่านง่าย กระชับ และป้องกันข้อผิดพลาดกรณีที่ชื่อคอลัมน์ซ้ำกัน:

\`\`\`sql
SELECT 
    s.student_id,
    s.first_name,
    s.last_name,
    d.dept_name
FROM students s
INNER JOIN departments d ON s.dept_id = d.dept_id;
\`\`\`

---

## 3. การทำ Multi-Table JOIN มากกว่า 2 ตาราง (3-Way และ 4-Way JOIN)
ในระบบงานทะเบียนนักเรียน เมื่อต้องการพิมพ์ใบรายงานเกรด (Transcript) เราต้องเชื่อมโยงถึง 4 ตารางพร้อมกัน:
\`students\` $\\rightarrow$ \`enrollments\` $\\rightarrow$ \`courses\` $\\rightarrow$ \`departments\``,
      codeExample: {
        language: "sql",
        code: `-- รายงานผลการเรียนของนักศึกษาทุกคน พร้อมชื่อวิชาและหน่วยกิต (Multi-Table JOIN)
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS full_name,
    d.dept_name,
    c.course_id,
    c.course_name,
    c.credits,
    e.grade,
    e.semester
FROM students s
-- 1. เชื่อมไปยังแผนกวิชา (แบบ LEFT JOIN เพื่อให้นักศึกษาทุกคนแสดงเสมอ)
LEFT JOIN departments d ON s.dept_id = d.dept_id
-- 2. เชื่อมไปยังตารางประวัติการลงทะเบียน
INNER JOIN enrollments e ON s.student_id = e.student_id
-- 3. เชื่อมต่อไปยังตารางรายวิชาเพื่อเอาชื่อวิชาและหน่วยกิต
INNER JOIN courses c ON e.course_id = c.course_id
WHERE e.semester = '1/2567'
ORDER BY s.student_id ASC, c.course_id ASC;`,
        description: "สคริปต์การทำ Multi-Table JOIN ผสานข้อมูล 4 ตารางเพื่อออกรายงานประวัติการลงทะเบียนเรียนพร้อมเกรด"
      },
      quiz: [
        {
          id: "db-5-q1",
          question: "หากต้องการออกรายงานรายชื่อ 'นักศึกษาทั้งหมดทุกคนในวิทยาลัย' พร้อมแสดงรายวิชาที่ลงทะเบียน โดยนักศึกษาที่ยังไม่ได้ลงทะเบียนเรียนเลย ก็ยังต้องมีชื่อปรากฏในรายงานด้วย จะต้องใช้คำสั่ง JOIN ชนิดใด?",
          options: ["INNER JOIN", "LEFT OUTER JOIN", "CROSS JOIN", "NATURAL JOIN"],
          correctAnswer: 1,
          explanation: "LEFT JOIN จะรักษาข้อมูลทุกแถวของตารางฝั่งซ้าย (students) ไว้ทั้งหมด แม้ว่าในตารางฝั่งขวา (enrollments) จะไม่มีรายการจับคู่ตรงกันก็ตาม โดยจะแสดงค่าฝั่งขวาเป็น NULL"
        },
        {
          id: "db-5-q2",
          question: "เมื่อทำ CROSS JOIN ระหว่างตาราง Colors ที่มีข้อมูล 4 แถว กับตาราง Sizes ที่มีข้อมูล 3 แถว ผลลัพธ์ที่ได้จะมีจำนวนแถวทั้งหมดกี่แถว?",
          options: ["7 แถว", "12 แถว", "1 แถว", "0 แถว"],
          correctAnswer: 1,
          explanation: "CROSS JOIN ให้ผลลัพธ์เป็น Cartesian Product เกิดจากการคูณจำนวนแถวของทั้งสองตารางเข้าด้วยกัน (4 x 3 = 12 แถว)"
        }
      ],
      labGuide: {
        title: "แล็บเขียนคิวรี JOIN ออกรายงานใบเสร็จค่าลงทะเบียนเรียน",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "เขียนคิวรี SQL เชื่อมโยง 4 ตารางเพื่อคำนวณและออกรายงานผลการลงทะเบียนเรียนแยกตามรายชื่อนักศึกษาและแผนกวิชา",
        steps: [
          {
            title: "ขั้นตอนที่ 1: ตรวจสอบความพร้อมของข้อมูลในตาราง",
            detail: "เปิด DBeaver ตรวจสอบว่าในตาราง students, departments, courses และ enrollments มีข้อมูลครบถ้วน"
          },
          {
            title: "ขั้นตอนที่ 2: เขียน INNER JOIN เชื่อมโยงพื้นฐาน",
            detail: "เขียนคำสั่งเชื่อมโยง students เข้ากับ departments โดยใช้เงื่อนไข ON s.dept_id = d.dept_id ตรวจสอบว่าได้ผลลัพธ์ชื่อนักศึกษาคู่กับชื่อแผนกถูกต้อง"
          },
          {
            title: "ขั้นตอนที่ 3: ขยายเป็น Multi-Table JOIN",
            detail: "นำโค้ดในตัวอย่างบทเรียนมารันเพื่อดึงข้อมูลจาก enrollments และ courses เข้ามาร่วมด้วย"
          },
          {
            title: "ขั้นตอนที่ 4: ค้นหานักศึกษาที่ยังไม่ได้ลงทะเบียน (Anti-JOIN)",
            detail: "ดัดแปลงคำสั่งเป็น LEFT JOIN enrollments แล้วใส่เงื่อนไข WHERE e.student_id IS NULL เพื่อค้นหารายชื่อนักศึกษาที่ยังไม่ยอมมาลงทะเบียนเรียนในภาคเรียนนี้"
          }
        ],
        verification: "ผลลัพธ์การคิวรีต้องแสดงข้อมูลที่เชื่อมโยงถูกต้อง คอลัมน์ชื่อแผนกและชื่อวิชาต้องตรงกับรหัส และคำสั่ง Anti-JOIN ต้องแสดงเฉพาะรายชื่อผู้ที่ยังไม่ลงทะเบียน"
      }
    },

    // ==========================================
    // บทเรียนที่ 6: Aggregate Functions & GROUP BY คำนวณ GPA
    // ==========================================
    {
      id: "db-6",
      title: "การจัดกลุ่มและคำนวณสถิติ: Aggregate Functions, GROUP BY, HAVING และการคำนวณ GPA",
      description: "ใช้งานฟังก์ชันรวม COUNT, SUM, AVG, MIN, MAX, การจัดกลุ่มข้อมูลด้วย GROUP BY, การคัดกรองผลลัพธ์กลุ่มด้วย HAVING และสูตรคำนวณเกรดเฉลี่ยถ่วงน้ำหนัก (Weighted GPA)",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การคำนวณสถิติและการจัดกลุ่มข้อมูล (Aggregate Functions & GROUP BY)

ในการพัฒนาระบบทะเบียนและวัดผล หรือระบบบริหารงานองค์กร การดึงข้อมูลออกมาดูทีละแถวมักไม่เพียงพอต่อการตัดสินใจของผู้บริหาร ผู้ดูแลระบบจำเป็นต้องสรุปผลข้อมูลออกมาในเชิงสถิติ เช่น ยอดรวมรายรับ, จำนวนนักศึกษาในแต่ละแผนก, หรือเกรดเฉลี่ยสะสมประจำภาคเรียน

---

## 1. ฟังก์ชันการคำนวณค่ารวม (Aggregate Functions)

ฟังก์ชันรวมจะนำค่าจากหลายๆ แถวมาประมวลผลและส่งค่ากลับออกมาเป็น **ค่าเดี่ยว (Single Value)**:
- \`COUNT(*)\`: นับจำนวนแถวทั้งหมด (รวมแถวที่เป็น NULL)
- \`COUNT(column_name)\`: นับเฉพาะแถวที่มีข้อมูล (ไม่นับแถวที่เป็น NULL)
- \`COUNT(DISTINCT column_name)\`: นับจำนวนค่าที่ไม่ซ้ำกัน
- \`SUM(column_name)\`: คำนวณผลรวมของตัวเลขทั้งหมด
- \`AVG(column_name)\`: คำนวณค่าเฉลี่ยทางคณิตศาสตร์
- \`MIN(column_name)\`: หาค่าที่น้อยที่สุด (ใช้ได้ทั้งตัวเลข วันที่ และตัวอักษร)
- \`MAX(column_name)\`: หาค่าที่มากที่สุด

---

## 2. การจัดกลุ่มข้อมูลด้วย GROUP BY และข้อแตกต่างกับ HAVING

### 2.1 GROUP BY Clause
ใช้จัดหมวดหมู่แถวข้อมูลที่มีค่าเหมือนกันให้ยุบรวมเป็นกลุ่มเดียวกัน เพื่อนำฟังก์ชันรวมไปคำนวณแยกตามแต่ละกลุ่ม เช่น สรุปจำนวนนักศึกษา **แยกตามแผนกวิชา**

> ⚠️ **กฎเหล็กของ GROUP BY:** คอลัมน์ทั้งหมดที่ปรากฏอยู่ในคำสั่ง \`SELECT\` **จะต้องอยู่ใน \`GROUP BY\` หรือต้องถูกครอบด้วย Aggregate Function เท่านั้น!** ห้ามนำคอลัมน์อิสระที่ไม่ได้จัดกลุ่มมาวางปนเด็ดขาด

### 2.2 ข้อแตกต่างสำคัญระหว่าง WHERE และ HAVING

| เงื่อนไขการใช้งาน | WHERE Clause | HAVING Clause |
|---|---|---|
| **จังหวะการทำงาน** | กรองแถวข้อมูล **ก่อนที่ระบบจะนำไปจัดกลุ่ม (Filter Rows)** | กรองผลลัพธ์ **หลังจากที่ข้อมูลถูกจัดกลุ่มเสร็จแล้ว (Filter Groups)** |
| **การใช้ฟังก์ชันรวม** | **ห้ามใช้ Aggregate Function ใน WHERE เด็ดขาด!** (เช่น \`WHERE AVG(gpa) > 3.0\` จะ Error) | **ใช้สำหรับคัดกรอง Aggregate Function โดยตรง** (เช่น \`HAVING AVG(gpa) >= 3.50\`) |

---

## 3. สูตรคณิตศาสตร์การคำนวณเกรดเฉลี่ยถ่วงน้ำหนัก (Weighted GPA Formula)

การคิดเกรดเฉลี่ยของวิทยาลัย ไม่ใช่การนำเกรดมาหาค่าเฉลี่ยแบบบวกกันแล้วหารจำนวนวิชาตรงๆ แต่ต้องคำนวณแบบ **ถ่วงน้ำหนักตามหน่วยกิต (Weighted Average)** ตามสูตร:

$$\\text{GPA} = \\frac{\\sum (\\text{Grade} \\times \\text{Credits})}{\\sum \\text{Credits}} = \\frac{\\text{ผลรวมของ (เกรดแต่ละวิชา} \\times \\text{หน่วยกิตวิชานั้น)}}{\\text{ผลรวมของหน่วยกิตทั้งหมด}}$$`,
      codeExample: {
        language: "sql",
        code: `-- 1. คิวรีคำนวณเกรดเฉลี่ยถ่วงน้ำหนัก (Weighted GPA) ของนักศึกษาแต่ละคนในภาคเรียน 1/2567
SELECT 
    s.student_id,
    s.first_name,
    s.last_name,
    SUM(c.credits) AS total_credits,
    ROUND(
        SUM(e.grade * c.credits) / SUM(c.credits), 
        2
    ) AS calculated_gpa
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id
WHERE e.semester = '1/2567' AND e.grade IS NOT NULL
GROUP BY s.student_id, s.first_name, s.last_name
-- คัดกรองเฉพาะนักศึกษาที่ได้เกียรตินิยม (GPA >= 3.50) และลงเรียนไม่น้อยกว่า 12 หน่วยกิต
HAVING 
    ROUND(SUM(e.grade * c.credits) / SUM(c.credits), 2) >= 3.50
    AND SUM(c.credits) >= 12
ORDER BY calculated_gpa DESC;`,
        description: "สคริปต์ SQL คำนวณเกรดเฉลี่ยถ่วงน้ำหนักตามหน่วยกิตจริง พร้อมคัดกรองกลุ่มด้วย HAVING Clause"
      },
      quiz: [
        {
          id: "db-6-q1",
          question: "เหตุใดคำสั่ง 'SELECT dept_id, AVG(gpa) FROM students WHERE AVG(gpa) >= 3.00 GROUP BY dept_id;' จึงเกิดข้อผิดพลาดในการรัน?",
          options: [
            "เพราะคำสั่ง AVG ใช้ได้เฉพาะกับตารางวิชาเท่านั้น",
            "เพราะห้ามใช้ Aggregate Function (เช่น AVG) ในคำสั่ง WHERE ต้องย้ายไปใช้คำสั่ง HAVING หลัง GROUP BY แทน",
            "เพราะลืมใส่คำสั่ง ORDER BY",
            "เพราะ dept_id ไม่ใช่ตัวเลข"
          ],
          correctAnswer: 1,
          explanation: "WHERE ทำงานคัดกรองแถวข้อมูลก่อนการจัดกลุ่ม ทำให้ในจังหวะนั้นระบบยังไม่ทราบค่าเฉลี่ย AVG การกรองผลลัพธ์ของฟังก์ชันรวมจะต้องทำผ่านคำสั่ง 'HAVING AVG(gpa) >= 3.00' หลัง GROUP BY เท่านั้น"
        },
        {
          id: "db-6-q2",
          question: "คำสั่ง COUNT(*) มีความแตกต่างจากคำสั่ง COUNT(email) ในกรณีใด?",
          options: [
            "COUNT(*) นับทุกแถวที่มีในตาราง ส่วน COUNT(email) จะนับเฉพาะแถวที่ฟิลด์ email ไม่เป็นค่าว่าง (ไม่นับ NULL)",
            "COUNT(*) นับเฉพาะแถวที่เป็นตัวเลข",
            "COUNT(email) ทำงานเร็วกว่าเสมอ",
            "ไม่มีความแตกต่างกัน ให้ผลลัพธ์เท่ากันเสมอ"
          ],
          correctAnswer: 0,
          explanation: "COUNT(*) จะนับจำนวน Record ทั้งหมดโดยไม่สนใจว่ามีคอลัมน์ใดเป็นค่าว่างหรือไม่ ส่วน COUNT(column) จะละเว้นแถวที่คอลัมน์นั้นมีค่าเป็น NULL"
        }
      ],
      labGuide: {
        title: "แล็บสร้างรายงานสถิติผลการเรียนและจำนวนนักศึกษาแยกตามแผนกวิชา",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "เขียนคิวรีจัดกลุ่มสรุปสถิตินักศึกษาในแต่ละแผนก: จำนวนนักศึกษาทั้งหมด, เกรดเฉลี่ยสูงสุด, เกรดเฉลี่ยต่ำสุด และค่าเฉลี่ยของแผนก",
        steps: [
          {
            title: "ขั้นตอนที่ 1: เตรียมคิวรีเชื่อมโยงข้อมูล",
            detail: "เปิด SQL Editor ใน DBeaver เขียนคำสั่งเชื่อมโยง departments เข้ากับ students"
          },
          {
            title: "ขั้นตอนที่ 2: เพิ่มฟังก์ชันคำนวณสถิติ",
            detail: "ใส่คอลัมน์คำนวณ COUNT(s.student_id), MAX(s.gpa), MIN(s.gpa), และ ROUND(AVG(s.gpa), 2)"
          },
          {
            title: "ขั้นตอนที่ 3: จัดกลุ่มด้วย GROUP BY",
            detail: "ใส่คำสั่ง GROUP BY d.dept_id, d.dept_name เพื่อสรุปผลแยกตามรายแผนกวิชา"
          },
          {
            title: "ขั้นตอนที่ 4: คัดกรองด้วย HAVING",
            detail: "เพิ่มเงื่อนไข HAVING COUNT(s.student_id) >= 2 เพื่อแสดงเฉพาะแผนกวิชาที่มีนักศึกษาเรียนอยู่อย่างน้อย 2 คนขึ้นไป"
          }
        ],
        verification: "ตารางสรุปผลต้องแสดง 1 แถวต่อ 1 แผนกวิชา พร้อมตัวเลขจำนวนนักศึกษา เกรดเฉลี่ยสูงสุด และเกรดเฉลี่ยต่ำสุดอย่างถูกต้องแม่นยำ"
      }
    },

    // ==========================================
    // บทเรียนที่ 7: การปรับจูนประสิทธิภาพ B-Tree Indexes & EXPLAIN
    // ==========================================
    {
      id: "db-7",
      title: "การปรับแต่งประสิทธิภาพฐานข้อมูล: Indexes, B-Tree และการวิเคราะห์ EXPLAIN Plan",
      description: "ทำความเข้าใจโครงสร้าง B-Tree Index, Sequential Scan vs Index Scan, กฎ Leftmost Prefix ของ Composite Index, และการอ่านค่า EXPLAIN ANALYZE เพื่อแก้ปัญหาคิวรีช้า",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การปรับแต่งประสิทธิภาพฐานข้อมูล (Database Performance Tuning & Indexing)

เมื่อระบบมีผู้ใช้งานเพิ่มขึ้นและข้อมูลในตารางขยายขนาดจากหลักร้อยแถวสู่หลักแสนหรือหลักล้านแถว ปัญหาที่พบบ่อยที่สุดคือ **"เว็บโหลดช้า ฐานข้อมูลค้าง หรือ CPU เซิร์ฟเวอร์พุ่งสูง 100%"** ซึ่งกว่า 90% เกิดจากการขาด **การสร้างดัชนี (Indexing)** ที่เหมาะสม หรือเขียนคิวรีที่ไม่เป็นมิตรต่อ Index

\`\`\`diagram:btree
ผังโครงสร้าง B-Tree Index และการชี้ตำแหน่ง Record Blocks บน Disk
\`\`\`

---

## 1. กลไกการทำงานของ B-Tree Index (Balanced Tree)

โดยค่าเริ่มต้น ระบบ RDBMS ส่วนใหญ่ (PostgreSQL, MySQL InnoDB) จะสร้างดัชนีแบบ **B-Tree** เมื่อเราสั่ง \`CREATE INDEX\`:
- ข้อมูลคีย์จะถูกจัดเรียงลำดับและแบ่งเป็นโครงสร้างต้นไม้ที่มีความสมดุล ประกอบด้วย **Root Node**, **Branch Nodes**, และ **Leaf Nodes**
- ที่ Leaf Node จะเก็บคู่ของ **\`(Indexed Value, Pointer/TID)\`** ซึ่งชี้ตรงไปยังบล็อกตำแหน่งของแถวข้อมูลจริงบนฮาร์ดดิสก์
- **ความซับซ้อนทางเวลา (Time Complexity):**
  - **ไม่มี Index (Sequential Scan / Full Table Scan):** ต้องอ่านข้อมูลตั้งแต่แถวแรกจนถึงแถวสุดท้าย ประสิทธิภาพคือ **$O(N)$** ยิ่งข้อมูลเยอะยิ่งช้า
  - **มี B-Tree Index (Index Scan):** ค้นหาแบบไบนารีทรี ประสิทธิภาพคือ **$O(\\log N)$** แม้มีข้อมูล 1,000,000 แถว ก็กระโดดอ่านเพียง 3-4 ครั้งก็พบข้อมูลทันที!

---

## 2. การเปรียบเทียบรูปแบบการสแกนข้อมูล (Scan Types)

| รูปแบบการสแกน | ความหมายและการทำงาน | เมื่อไหร่ที่ระบบเลือกใช้? |
|---|---|---|
| **Sequential Scan (Seq Scan)** | อ่านข้อมูลทุกบล็อกตั้งแต่ต้นจนจบตาราง | ตารางมีขนาดเล็กมาก หรือคิวรีต้องการดึงข้อมูลเกิน 20-30% ของทั้งตาราง |
| **Index Scan** | วิ่งค้นหาบน B-Tree แล้ววิ่งไปเปิดอ่านบล็อกจริงบน Disk ทีละแถว | ค้นหาข้อมูลเจาะจง (Selective Query) เช่น ค้นหาจาก Primary Key หรือรหัสนักศึกษา |
| **Index Only Scan (ดีที่สุด)** | ดึงข้อมูลได้ครบถ้วนจากตัว B-Tree เอง **โดยไม่ต้องไปแตะต้อง Table บน Disk เลย** | ทุกคอลัมน์ในคำสั่ง SELECT และ WHERE อยู่ในตัว Index นั้นทั้งหมด |
| **Bitmap Index Scan** | ค้นหาบน Index หลายตัวแล้วแปลงเป็น Bitmap มารวมกันด้วย AND/OR ก่อนเปิดอ่าน Disk | คิวรีที่มีเงื่อนไขซับซ้อนหลายตัว เช่น \`WHERE dept_id = 1 AND gpa > 3.5\` |

---

## 3. กฎเหล็กในการใช้งาน Index (Index Best Practices)

1. **อย่าสร้าง Index สุ่มสี่สุ่มห้า:** ทุกครั้งที่มีการสั่ง \`INSERT\`, \`UPDATE\`, หรือ \`DELETE\` ระบบต้องเสียเวลาไปอัปเดตโครงสร้างต้นไม้ B-Tree ทุกตัวด้วย ยิ่งมี Index เยอะ การเขียนข้อมูลยิ่งช้าลง
2. **กฎ Leftmost Prefix Rule (สำหรับ Composite Index):**
   - หากสร้างดัชนีผสม \`CREATE INDEX idx_stu ON students (dept_id, gpa);\`
   - คิวรีที่ใช้ \`WHERE dept_id = 1\` -> **Index ทำงาน**
   - คิวรีที่ใช้ \`WHERE dept_id = 1 AND gpa > 3.0\` -> **Index ทำงานสมบูรณ์แบบ**
   - คิวรีที่ใช้ \`WHERE gpa > 3.0\` (โดดข้าม dept_id) -> **Index ไม่ทำงาน!**
3. **ข้อผิดพลาดคลาสสิกที่ทำให้ Index ใช้งานไม่ได้ (Index SARGability):**
   - ห้ามครอบฟังก์ชันบนคอลัมน์ เช่น \`WHERE YEAR(birth_date) = 2005\` (Index จะถูกยกเลิกทันที)
   - วิธีแก้: เปลี่ยนเป็น \`WHERE birth_date >= '2005-01-01' AND birth_date <= '2005-12-31'\`
   - การใช้ LIKE ที่ขึ้นต้นด้วย Wildcard เช่น \`WHERE first_name LIKE '%ศักดิ์'\` (Index สแกนไม่ได้ ต้องเป็น Full Table Scan)`,
      codeExample: {
        language: "sql",
        code: `-- 1. วิเคราะห์แผนการทำงานของคิวรีด้วย EXPLAIN ANALYZE
EXPLAIN ANALYZE
SELECT student_id, first_name, last_name, gpa
FROM students
WHERE dept_id = 1 AND gpa >= 3.50;
-- ผลลัพธ์ก่อนสร้าง Index: Seq Scan on students (cost=0.00..35.50 rows=12 width=40) (actual time=0.085..1.240 ms)

-- 2. สร้าง Composite Index ที่เหมาะสมกับเงื่อนไขการค้นหา
CREATE INDEX idx_students_dept_gpa ON students (dept_id, gpa DESC);

-- 3. รัน EXPLAIN ANALYZE อีกครั้งเพื่อเปรียบเทียบความเร็ว
EXPLAIN ANALYZE
SELECT student_id, first_name, last_name, gpa
FROM students
WHERE dept_id = 1 AND gpa >= 3.50;
-- ผลลัพธ์หลังสร้าง Index: Index Scan using idx_students_dept_gpa (actual time=0.012..0.025 ms) -> เร็วขึ้นกว่า 50 เท่า!`,
        description: "สคริปต์การใช้คำสั่ง EXPLAIN ANALYZE ตรวจสอบ Execution Plan ก่อนและหลังการสร้าง Composite B-Tree Index"
      },
      quiz: [
        {
          id: "db-7-q1",
          question: "หากสร้างดัชนีผสม CREATE INDEX idx_test ON users (city, age); ข้อใดคือคิวรีที่ไม่สามารถใช้ประโยชน์จากดัชนีนี้ได้ (Index ไม่ถูกเรียกใช้)?",
          options: [
            "SELECT * FROM users WHERE city = 'Bangkok';",
            "SELECT * FROM users WHERE city = 'Bangkok' AND age >= 20;",
            "SELECT * FROM users WHERE age >= 20;",
            "SELECT * FROM users WHERE city = 'Chiang Mai' ORDER BY age;"
          ],
          correctAnswer: 2,
          explanation: "ตามกฎ Leftmost Prefix Rule ดัชนีผสมจะทำงานได้ก็ต่อเมื่อมีเงื่อนไขของคอลัมน์ตัวแรกสุด (city) อยู่ในคิวรี หากสั่งค้นหาเฉพาะ age โดยไม่มี city ตัว Index จะไม่สามารถกระโดดค้นหาได้"
        },
        {
          id: "db-7-q2",
          question: "คำสั่ง 'EXPLAIN ANALYZE' มีความแตกต่างจากคำสั่ง 'EXPLAIN' ธรรมดาอย่างไรใน PostgreSQL?",
          options: [
            "EXPLAIN จะรันคำสั่งจริง แต่ EXPLAIN ANALYZE จะไม่รัน",
            "EXPLAIN จะประมาณการต้นทุนล่วงหน้า (Estimate Cost) ส่วน EXPLAIN ANALYZE จะรันคำสั่งจริงในฐานข้อมูลและจับเวลาที่ใช้จริง (Actual Execution Time)",
            "EXPLAIN ใช้ได้เฉพาะคำสั่ง INSERT",
            "ไม่มีความแตกต่างกัน"
          ],
          correctAnswer: 1,
          explanation: "EXPLAIN เป็นเพียงการคาดคะเนของ Query Planner ส่วน EXPLAIN ANALYZE จะนำคิวรีไปรันจริงๆ ในฐานข้อมูล วัดเวลาระดับเสี้ยววินาที และนับจำนวนแถวที่ได้จริง ทำให้เห็นจุดคอขวดที่แท้จริง"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบวัดความเร็วและสร้าง B-Tree Index บนตารางขนาด 100,000 แถว",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "สร้างข้อมูลจำลองขนาด 100,000 แถว รันคำสั่ง EXPLAIN ANALYZE ดูต้นทุน Seq Scan จากนั้นสร้าง Index และพิสูจน์การเปลี่ยนเป็น Index Scan ที่เร็วกว่าเดิม",
        steps: [
          {
            title: "ขั้นตอนที่ 1: สร้างตารางและยิงข้อมูลสุ่ม 100,000 แถว",
            detail: "รันสคริปต์ generate_series ใน PostgreSQL เพื่อสร้างข้อมูลประวัติการล็อกอินจำลอง 100,000 แถว พร้อมเวลาและ IP Address",
            codeOrCommand: "CREATE TABLE login_logs AS SELECT generate_series(1,100000) AS id, (random()*1000)::int AS user_id, NOW() - (random()*365 || ' days')::interval AS log_time;"
          },
          {
            title: "ขั้นตอนที่ 2: รันคิวรีค้นหาและตรวจสอบ Execution Plan",
            detail: "สั่ง EXPLAIN ANALYZE SELECT * FROM login_logs WHERE user_id = 450; สังเกตผลลัพธ์ที่เป็น 'Seq Scan' และดูค่าเวลา Execution Time"
          },
          {
            title: "ขั้นตอนที่ 3: สร้าง B-Tree Index บนฟิลด์ user_id",
            detail: "พิมพ์คำสั่งสร้างดัชนี:\nCREATE INDEX idx_login_user ON login_logs (user_id);"
          },
          {
            title: "ขั้นตอนที่ 4: รันคำสั่งเดิมซ้ำเพื่อเปรียบเทียบผล",
            detail: "รันคำสั่ง EXPLAIN ANALYZE เดิมอีกครั้ง สังเกตว่า Plan เปลี่ยนเป็น 'Bitmap Index Scan' หรือ 'Index Scan' และเวลาลดลงเหลือระดับ 0.0xx ms"
          }
        ],
        verification: "ใน DBeaver หน้าต่าง Explain Plan ต้องแสดงไอคอนเปลี่ยนจากตารางสีแดง (Full Table Scan) เป็นไอคอนค้นหาต้นไม้ B-Tree สีเขียว และเวลาการประมวลผลลดลงมากกว่า 90%"
      }
    },

    // ==========================================
    // บทเรียนที่ 8: ธุรกรรมฐานข้อมูลและคุณสมบัติ ACID
    // ==========================================
    {
      id: "db-8",
      title: "ธุรกรรมฐานข้อมูลและคุณสมบัติ ACID (Transactions, Concurrency & Isolation Levels)",
      description: "เจาะลึกคุณสมบัติ ACID (Atomicity, Consistency, Isolation, Durability), การสั่ง COMMIT และ ROLLBACK, ปัญหาการเข้าถึงข้อมูลพร้อมกัน (Dirty Read, Phantom Read) และ Isolation Levels",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# ธุรกรรมฐานข้อมูลและการประมวลผลพร้อมกัน (Transactions & ACID Properties)

ในระบบงานจริง ข้อมูลไม่ได้ถูกแก้ไขแบบคำสั่งเดี่ยวโดดๆ แต่ประกอบด้วยชุดของคำสั่งหลายคำสั่งที่ต้องทำงานร่วมกันเป็นกระบวนการเดียวทางธุรกิจ เช่น **การโอนเงินข้ามบัญชี** หรือ **การตัดยอดที่นั่งลงทะเบียนเรียน**

แนวคิดของ **Transaction (ธุรกรรม)** คือการรวมชุดคำสั่งหลายๆ คำสั่งเข้าด้วยกันเป็นหน่วยงานเดียวที่มีเงื่อนไขว่า **"ต้องสำเร็จทั้งหมดทุกคำสั่ง หรือไม่ก็ต้องยกเลิกทั้งหมดเสมือนไม่เคยมีอะไรเกิดขึ้น (All or Nothing)"**

---

## 1. คุณสมบัติ 4 ประการของ ACID

| คุณสมบัติ | ความหมายเชิงลึก | ตัวอย่างสถานการณ์จริง |
|---|---|---|
| **A - Atomicity (ความเป็นหนึ่งเดียว)** | คำสั่งทั้งหมดใน Transaction ต้องสำเร็จครบทุกตัว หากมีคำสั่งใดคำสั่งหนึ่งล้มเหลว ระบบจะทำการ **ROLLBACK** ยกเลิกคำสั่งก่อนหน้าทั้งหมดกลับสู่สภาพเดิมทันที | การโอนเงิน: ตัดเงินจากบัญชี A สำเร็จ แต่เกิดไฟดับก่อนนำเงินเข้าบัญชี B -> ระบบจะ Rollback คืนเงินเข้าบัญชี A ทันที เงินไม่สูญหาย |
| **C - Consistency (ความถูกต้องสอดคล้อง)** | ข้อมูลก่อนและหลังการทำ Transaction จะต้องถูกต้องตามกฎข้อบังคับ (Constraints, Foreign Key, Balance >= 0) เสมอ | ยอดเงินรวมของทั้งระบบก่อนโอนและหลังโอนจะต้องมีค่าเท่าเดิมเสมอ |
| **I - Isolation (ความโดดเดี่ยวตัดขาด)** | Transaction ที่ทำงานพร้อมๆ กันหลายตัว (Concurrent Transactions) จะต้องไม่เข้ามารบกวนหรือเห็นข้อมูลกึ่งกลางของกันและกัน | นักศึกษา 2 คนกดลงทะเบียนแย่งที่นั่งตัวสุดท้ายพร้อมกันในเสี้ยววินาที ระบบต้องประมวลผลแยกอิสระเพื่อไม่ให้ที่นั่งติดลบ |
| **D - Durability (ความคงทนถาวร)** | เมื่อคำสั่งยืนยันความสำเร็จ (**COMMIT**) เสร็จสิ้น ข้อมูลจะถูกบันทึกลงดิสก์อย่างถาวร แม้เซิร์ฟเวอร์จะไฟดับหรือแครชในวินาทีถัดไป ข้อมูลก็จะไม่สูญหาย | มีระบบ Write-Ahead Logging (WAL) ช่วยกู้คืนข้อมูลกลับมาได้สมบูรณ์ตอนเปิดเครื่อง |

---

## 2. ปัญหาที่เกิดขึ้นเมื่อทำงานพร้อมกัน (Concurrency Phenomena)

1. **Dirty Read (การอ่านข้อมูลดิบที่ยังไม่คอมมิต):** Transaction A เข้าไปแก้ข้อมูล แต่ยังไม่ได้กด Commit จากนั้น Transaction B เข้ามาอ่านค่านั้นไปใช้งาน แต่ต่อมา Transaction A เกิดข้อผิดพลาดแล้วสั่ง Rollback ยกเลิก ทำให้ Transaction B ได้ข้อมูลปลอมไปทำงาน
2. **Non-repeatable Read (อ่านสองครั้งได้ค่าไม่ตรงกัน):** Transaction A อ่านข้อมูลแถวหนึ่ง จากนั้น Transaction B เข้าไปแก้ไขแถวนั้นแล้วกด Commit ต่อมา Transaction A สั่งอ่านแถวเดิมซ้ำอีกครั้งในเซสชันเดิม กลับได้ค่าใหม่ที่ไม่เหมือนเดิม
3. **Phantom Read (ข้อมูลผีโผล่มาเพิ่ม):** Transaction A อ่านจำนวนแถวข้อมูลที่ตรงตามเงื่อนไข (เช่น มี 10 แถว) จากนั้น Transaction B ทำการ Insert ข้อมูลใหม่เพิ่มเข้าไป 1 แถวแล้ว Commit เมื่อ Transaction A รันคำสั่งเดิมซ้ำ กลับพบว่ามี 11 แถว

---

## 3. ระดับการแยกขาดของธุรกรรม (Transaction Isolation Levels)

มาตรฐาน ANSI/ISO SQL กำหนดระดับความเข้มงวดของ Isolation ไว้ 4 ระดับ:

| Isolation Level | ป้องกัน Dirty Read? | ป้องกัน Non-repeatable Read? | ป้องกัน Phantom Read? | ประสิทธิภาพความเร็ว |
|---|---|---|---|---|
| **Read Uncommitted** | ❌ (ไม่ป้องกัน) | ❌ | ❌ | เร็วที่สุด (อันตราย ห้ามใช้ในงานการเงิน) |
| **Read Committed** (Default ของ PostgreSQL/Oracle) | ✅ **ป้องกันได้** | ❌ | ❌ | สมดุลยอดเยี่ยม เหมาะกับระบบทั่วไป |
| **Repeatable Read** (Default ของ MySQL InnoDB) | ✅ **ป้องกันได้** | ✅ **ป้องกันได้** | ❌ (MySQL ใช้ MVCC ป้องกันได้ส่วนใหญ่) | ความสม่ำเสมอสูงมาก |
| **Serializable** (เข้มงวดที่สุด) | ✅ **ป้องกันได้** | ✅ **ป้องกันได้** | ✅ **ป้องกันได้ 100%** | ช้าที่สุด เกิด Transaction Lock/Retry บ่อย |`,
      codeExample: {
        language: "sql",
        code: `-- การทำธุรกรรมโอนย้ายเงินหรือโควตาที่นั่งลงทะเบียนเรียนอย่างปลอดภัย
BEGIN; -- เริ่มต้น Transaction

-- 1. ล็อกแถวข้อมูลวิชาเพื่อป้องกันผู้อื่นแย่งสิทธิ์ในเวลาเดียวกัน (Pessimistic Locking)
SELECT course_id, available_seats 
FROM courses 
WHERE course_id = '30901-2001' 
FOR UPDATE;

-- 2. ตรวจสอบว่าที่นั่งยังเหลืออยู่ และตัดยอดที่นั่งลง 1 ที่
UPDATE courses
SET available_seats = available_seats - 1
WHERE course_id = '30901-2001' AND available_seats > 0;

-- 3. บันทึกข้อมูลการลงทะเบียนของนักศึกษา
INSERT INTO enrollments (student_id, course_id, semester, enrolled_at)
VALUES ('67309010001', '30901-2001', '1/2567', CURRENT_TIMESTAMP);

-- หากทุกอย่างทำงานสำเร็จโดยไม่มีข้อผิดพลาด ให้ทำการบันทึกถาวร
COMMIT;

-- หากเกิดข้อผิดพลาดขึ้นในขั้นตอนใดก็ตาม ระบบสามารถสั่งยกเลิกเพื่อคืนค่าเดิมทั้งหมด:
-- ROLLBACK;`,
        description: "สคริปต์การเขียนธุรกรรมฐานข้อมูล (Transaction) ด้วย BEGIN, FOR UPDATE, COMMIT และ ROLLBACK"
      },
      quiz: [
        {
          id: "db-8-q1",
          question: "คุณสมบัติ 'Atomicity' ในหลักการ ACID มีความหมายตรงกับข้อใด?",
          options: [
            "ข้อมูลต้องถูกเข้ารหัสความปลอดภัยระดับอะตอม",
            "การทำงานของชุดคำสั่งต้องสำเร็จครบทั้งหมด หรือไม่ก็ต้องถูกยกเลิกทั้งหมดเสมือนไม่เคยเกิดขึ้น (All or Nothing)",
            "ข้อมูลต้องไม่มีวันสูญหายแม้ไฟจะดับ",
            "ต้องไม่มีผู้ใช้คนอื่นเข้าถึงข้อมูลได้เลย"
          ],
          correctAnswer: 1,
          explanation: "Atomicity รับประกันว่างานที่ประกอบด้วยหลายขั้นตอนย่อย จะถูกมองเป็นก้อนเดียวที่แยกออกจากกันไม่ได้ หากมีขั้นตอนใดล้มเหลว ขั้นตอนก่อนหน้าทั้งหมดจะถูก Rollback ยกเลิกทันที"
        },
        {
          id: "db-8-q2",
          question: "ปรากฏการณ์ที่ Transaction หนึ่ง อ่านค่าข้อมูลที่ Transaction อื่นเพิ่งแก้ไขแต่ 'ยังไม่ได้กด COMMIT' เรียกว่าอะไร?",
          options: ["Phantom Read", "Dirty Read", "Lost Update", "Deadlock"],
          correctAnswer: 1,
          explanation: "Dirty Read คือการอ่านข้อมูลที่ยังไม่ได้รับการยืนยัน (Uncommitted Data) ซึ่งมีความเสี่ยงสูงมาก เพราะหากธุรกรรมนั้นถูก Rollback ข้อมูลที่อ่านไปก็จะกลายเป็นข้อมูลที่ไม่เคยมีอยู่จริง"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบการทำงานของ Transaction และการ Rollback เมื่อเกิด Error",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "เปิด 2 หน้าต่าง SQL Editor พร้อมกัน เพื่อทดสอบการทำงานของคำสั่ง BEGIN, จำลองข้อผิดพลาด และทดสอบคำสั่ง ROLLBACK เพื่อดูการคืนค่าเดิมของฐานข้อมูล",
        steps: [
          {
            title: "ขั้นตอนที่ 1: เตรียมตารางและข้อมูลทดสอบ",
            detail: "สร้างตารางบัญชีเงินฝากทดสอบ accounts (id, name, balance) ใส่ข้อมูลนาย A มีเงิน 10,000 บาท และนาย B มีเงิน 500 บาท"
          },
          {
            title: "ขั้นตอนที่ 2: เริ่มต้น Transaction และตัดเงินนาย A",
            detail: "พิมพ์คำสั่ง BEGIN; ตามด้วย UPDATE accounts SET balance = balance - 1000 WHERE id = 1; (ยังไม่ต้องพิมพ์ COMMIT)"
          },
          {
            title: "ขั้นตอนที่ 3: เปิดอีกหน้าต่างเพื่อทดสอบ Isolation",
            detail: "เปิด SQL Editor อีกแท็บหนึ่ง พิมพ์ SELECT * FROM accounts WHERE id = 1; สังเกตว่าหน้าต่างที่สองยังคงเห็นเงิน 10,000 บาทเท่าเดิม เพราะหน้าต่างแรกยังไม่คอมมิต"
          },
          {
            title: "ขั้นตอนที่ 4: สั่ง ROLLBACK และตรวจสอบความคงเดิม",
            detail: "ในหน้าต่างแรก พิมพ์คำสั่ง ROLLBACK; จากนั้นตรวจสอบยอดเงินของนาย A พบว่ายอดเงินกลับมาเป็น 10,000 บาทอย่างปลอดภัย"
          }
        ],
        verification: "คำสั่ง ROLLBACK ต้องสามารถยกเลิกการตัดเงินได้อย่างสมบูรณ์ และเมื่อรันคำสั่ง COMMIT ในรอบถัดไป ข้อมูลจึงจะเปลี่ยนผ่านไปยังหน้าต่างอื่นอย่างถูกต้อง"
      }
    },

    // ==========================================
    // บทเรียนที่ 9: สุดยอดโปรเจกต์: พัฒนาระบบฐานข้อมูล RMS เต็มรูปแบบ
    // ==========================================
    {
      id: "db-9",
      title: "โปรเจกต์หลักสูตร: ออกแบบและสร้างฐานข้อมูลระบบทะเบียนนักเรียน RMS เต็มรูปแบบ",
      description: "ผสานรวมทุกทักษะ: ออกแบบสคีมาระบบทะเบียนและวัดผล ศธ.02 (RMS), ตารางครู, ตารางเกรด, การตัดเกรดอัตโนมัติด้วย Stored Procedures, Views สรุปผล และระบบความปลอดภัย",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# สุดยอดโปรเจกต์: ระบบฐานข้อมูลทะเบียนและวัดผลการศึกษา (Student RMS Database)

ในบทเรียนสุดท้ายของหลักสูตร เราจะนำองค์ความรู้ทั้งหมดตั้งแต่เรื่อง Data Types, Constraints, Normalization 3NF, Multi-Table JOINs, และ Transactions มาร่วมกันออกแบบและสร้าง **ระบบฐานข้อมูลทะเบียนและผลการเรียน (Record Management System - RMS)** ที่ใช้งานได้จริงในสถานศึกษาตามมาตรฐานงานทะเบียน ศธ.02 ของกระทรวงศึกษาธิการ

---

## 1. ขอบเขตสถาปัตยกรรมระบบงานทะเบียน RMS

ระบบฐานข้อมูลประกอบด้วยโมดูลสำคัญ 5 ส่วน:
1. **โมดูลโครงสร้างองค์กร (Academic Structure):** แผนกวิชา (\`departments\`), สาขางาน, ครูผู้สอน (\`teachers\`)
2. **โมดูลประวัตินักศึกษา (Student Information):** ข้อมูลส่วนตัว, รหัสประจำตัว, ข้อมูลผู้ปกครอง, สถานะการศึกษา (\`active\`, \`graduated\`, \`suspended\`)
3. **โมดูลโครงสร้างหลักสูตร (Curriculum & Courses):** รายวิชา, จำนวนหน่วยกิต, ชั่วโมงทฤษฎี/ปฏิบัติ, เงื่อนไขวิชาบังคับก่อน (Prerequisite)
4. **โมดูลการเปิดสอนและตารางเรียน (Class Scheduling):** แผนการเรียนในแต่ละภาคเรียน, ห้องเรียน, ครูผู้สอนประจำวิชา
5. **โมดูลการลงทะเบียนและประเมินผล (Enrollments & Grading):** บันทึกคะแนนเก็บระหว่างภาค, คะแนนสอบปลายภาค, การคำนวณตัดเกรดอัตโนมัติ (4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0), และการคิดเกรดเฉลี่ยสะสม (GPA / GPAX)

---

## 2. การสร้าง Database View สำหรับสรุปรายงานผลการศึกษา

**View** คือตารางเสมือนที่สร้างขึ้นจากคำสั่งคิวรี SQL ที่ซับซ้อน ช่วยให้โปรแกรมเมอร์และฝ่ายทะเบียนสามารถดึงข้อมูลสรุปผลการเรียนได้ง่ายๆ ผ่านคำสั่ง \`SELECT * FROM v_student_transcripts\` โดยไม่ต้องเขียน JOIN ยาวๆ ซ้ำซ้อนในโค้ดฝั่งแอปพลิเคชัน

---

## 3. การตัดเกรดอัตโนมัติด้วยคำสั่ง CASE Expression

ตามเกณฑ์มาตรฐานการศึกษาอาชีวศึกษา (ปวช. และ ปวส.):
- $80 - 100$ คะแนน $\\rightarrow$ **เกรด 4.0 (A)**
- $75 - 79$ คะแนน $\\rightarrow$ **เกรด 3.5 (B+)**
- $70 - 74$ คะแนน $\\rightarrow$ **เกรด 3.0 (B)**
- $65 - 69$ คะแนน $\\rightarrow$ **เกรด 2.5 (C+)**
- $60 - 64$ คะแนน $\\rightarrow$ **เกรด 2.0 (C)**
- $55 - 59$ คะแนน $\\rightarrow$ **เกรด 1.5 (D+)**
- $50 - 54$ คะแนน $\\rightarrow$ **เกรด 1.0 (D)**
- ต่ำกว่า $50$ คะแนน $\\rightarrow$ **เกรด 0 (F)**`,
      codeExample: {
        language: "sql",
        code: `-- ==========================================
-- สคริปต์สร้าง View สรุปผลการเรียนและตัดเกรดอัตโนมัติ (RMS Transcript View)
-- ==========================================
CREATE OR REPLACE VIEW v_student_grade_reports AS
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.dept_name,
    c.course_id,
    c.course_name,
    c.credits,
    e.semester,
    e.score,
    -- คำนวณตัดเกรดอัตโนมัติจากคะแนนรวม 100 คะแนน
    CASE 
        WHEN e.score >= 80 THEN 4.00
        WHEN e.score >= 75 THEN 3.50
        WHEN e.score >= 70 THEN 3.00
        WHEN e.score >= 65 THEN 2.50
        WHEN e.score >= 60 THEN 2.00
        WHEN e.score >= 55 THEN 1.50
        WHEN e.score >= 50 THEN 1.00
        ELSE 0.00
    END AS letter_grade,
    CASE 
        WHEN e.score >= 50 THEN 'ผ่าน (PASS)'
        ELSE 'ไม่ผ่าน (FAIL)'
    END AS evaluation_status
FROM enrollments e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id
LEFT JOIN departments d ON s.dept_id = d.dept_id;

-- การเรียกใช้งาน View สรุปผลการเรียนได้ง่ายๆ เหมือนเรียกตารางเดี่ยว
SELECT * 
FROM v_student_grade_reports 
WHERE semester = '1/2567' AND student_id = '67309010001';`,
        description: "สคริปต์การสร้าง Database View เพื่อรวบรวมข้อมูลผลการเรียนและตัดเกรดตัวอักษร 8 ระดับตามคะแนนรวมอย่างเป็นระบบ"
      },
      quiz: [
        {
          id: "db-9-q1",
          question: "การสร้าง Database View ในระบบทะเบียน RMS มีข้อดีสำคัญในเรื่องใด?",
          options: [
            "ช่วยเพิ่มขนาดพื้นที่จัดเก็บบนฮาร์ดดิสก์ให้มากขึ้น",
            "ช่วยซ่อนความซับซ้อนของคำสั่ง Multi-Table JOINs และช่วยจำกัดสิทธิ์การเข้าถึงข้อมูลบางคอลัมน์เพื่อความปลอดภัย",
            "ทำให้คำสั่ง INSERT ทำงานได้เร็วกว่าปกติ",
            "ทำให้ไม่ต้องมีคีย์หลัก (Primary Key)"
          ],
          correctAnswer: 1,
          explanation: "View ช่วยรวมคิวรีที่ซับซ้อนให้เรียกใช้งานได้ง่ายขึ้น และยังเป็นเกราะป้องกันความปลอดภัย โดยสามารถอนุญาตให้ผู้ใช้เห็นเฉพาะข้อมูลใน View โดยไม่ต้องให้สิทธิ์เข้าถึงตารางจริงโดยตรง"
        },
        {
          id: "db-9-q2",
          question: "ในคำสั่ง CASE Expression หากคะแนนของนักศึกษาคือ 72 คะแนน จะตกอยู่ในเงื่อนไขใดและได้เกรดเท่าใด?",
          options: ["WHEN e.score >= 75 (เกรด 3.5)", "WHEN e.score >= 70 (เกรด 3.0)", "WHEN e.score >= 80 (เกรด 4.0)", "ELSE (เกรด 0)"],
          correctAnswer: 1,
          explanation: "คำสั่ง CASE จะตรวจสอบจากบนลงล่าง เมื่อ 72 ไม่ถึง 75 และ 80 จะตกลงมาตรงกับเงื่อนไข 'WHEN e.score >= 70' จึงได้เกรด 3.0 อย่างถูกต้อง"
        }
      ],
      labGuide: {
        title: "สุดยอดแล็บโปรเจกต์: ติดตั้งสคีมา RMS และทดสอบระบบออกใบรายงานผลการศึกษา",
        toolName: "DBeaver Community",
        downloadUrl: "https://dbeaver.io/",
        objective: "สร้าง Database Schema ของระบบทะเบียน RMS ครบวงจร นำเข้าข้อมูลตัวอย่าง และเรียกใช้ View แสดงผล Transcript เกรดเฉลี่ยของนักศึกษาทุกคน",
        steps: [
          {
            title: "ขั้นตอนที่ 1: รันสคริปต์สถาปัตยกรรม RMS ทั้งระบบ",
            detail: "เปิด SQL Editor ใน DBeaver รันสคริปต์สร้างตาราง departments, teachers, students, courses และ enrollments พร้อมฟิลด์ score"
          },
          {
            title: "ขั้นตอนที่ 2: นำเข้าข้อมูลจำลองผลการสอบ",
            detail: "เพิ่มข้อมูลนักศึกษา 5 คน และข้อมูลการลงทะเบียนเรียนคนละ 4 วิชา พร้อมกรอกคะแนนดิบ (score 0-100)"
          },
          {
            title: "ขั้นตอนที่ 3: สร้าง View v_student_grade_reports",
            detail: "รันสคริปต์สร้าง View ตัดเกรดอัตโนมัติตามโค้ดตัวอย่างในบทเรียน"
          },
          {
            title: "ขั้นตอนที่ 4: ออกใบรายงานผลการศึกษา (Transcript Summary)",
            detail: "เขียนคิวรีสรุป GPA รายคนจาก View: คำนวณ SUM(credits * letter_grade) / SUM(credits) แล้วเรียงลำดับดูนักเรียนที่ได้เกียรตินิยมอันดับ 1 ของวิทยาลัย"
          }
        ],
        verification: "View ต้องสามารถแปลงคะแนนตัวเลขเป็นเกรด 4.0 - 0.0 ได้ถูกต้องทุกช่วงคะแนน และคิวรีสรุปผลการศึกษาต้องแสดงเกรดเฉลี่ยสะสม GPA สองตำแหน่งทศนิยมอย่างสมบูรณ์แบบ"
      }
    }
  ]
};
