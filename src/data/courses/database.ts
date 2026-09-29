import { Course } from "../types";

export const databaseCourse: Course = {
  id: "database",
  title: "ระบบฐานข้อมูล & RMS",
  description: "ออกแบบฐานข้อมูลเชิงสัมพันธ์ SQL, Normalization และพัฒนาระบบทะเบียนนักเรียน RMS เต็มรูปแบบ",
  longDescription: "หลักสูตรฐานข้อมูลที่มุ่งเน้นการใช้งานจริงในโรงเรียน วิทยาลัย และองค์กร เริ่มตั้งแต่พื้นฐาน Relational Database, การเขียนคำสั่งภาษา SQL ขั้นสูง, การวิเคราะห์ความสัมพันธ์และทำ Normalization (1NF-3NF), การทำ Indexing ปรับจูนประสิทธิภาพ, ไปจนถึงการพัฒนาระบบจัดเก็บข้อมูลประวัตินักเรียน ผลการเรียน และการออกใบรายงานผลการศึกษา (RMS)",
  icon: "🗄️",
  color: "purple",
  gradient: "from-purple-500 to-violet-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["Database", "SQL", "MySQL", "PostgreSQL", "RMS", "Normalization", "ER Diagram"],
  recommendedTools: [
    {
      name: "DBeaver Community",
      icon: "🦫",
      badge: "Universal DB Tool",
      description: "โปรแกรมจัดการฐานข้อมูลที่ยอดเยี่ยมที่สุด รองรับทั้ง MySQL, MariaDB, PostgreSQL, SQLite, Oracle มีระบบดู ER Diagram จากตารางจริงอัตโนมัติ",
      downloadUrl: "https://dbeaver.io/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง DBeaver Community\n2. กดปุ่ม New Connection (รูปปลั๊กไฟ)\n3. เลือก MySQL หรือ SQLite แล้วกรอก Host และรหัสผ่าน\n4. เขียน SQL และกด Ctrl+Enter เพื่อรันคำสั่งได้ทันที"
    },
    {
      name: "MySQL Workbench",
      icon: "🐬",
      badge: "Official MySQL Tool",
      description: "โปรแกรมอย่างเป็นทางการจาก Oracle สำหรับออกแบบ ER Diagram แบบภาพกราฟิก แปลงเป็นโค้ด SQL ได้อัตโนมัติ (Forward Engineering)",
      downloadUrl: "https://dev.mysql.com/downloads/workbench/",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง MySQL Workbench พร้อม MySQL Server\n2. เชื่อมต่อ Local Instance พอร์ต 3306\n3. ใช้ฟีเจอร์ Data Modeling เพื่อลากวางตารางและความสัมพันธ์แบบภาพ"
    },
    {
      name: "drawSQL",
      icon: "📐",
      badge: "Web-based Schema Tool",
      description: "เครื่องมือออกแบบและวาด Schema ฐานข้อมูลออนไลน์ที่สวยงาม แชร์ให้เพื่อนร่วมทีมดูได้ง่าย และ Export ออกมาเป็นคำสั่ง SQL ได้ทันที",
      downloadUrl: "https://drawsql.app/",
      setupGuide: "1. เข้าเว็บไซต์ drawsql.app\n2. สร้าง Schema ใหม่ เลือกฐานข้อมูล MySQL หรือ PostgreSQL\n3. สร้างตาราง เพิ่มฟิลด์ และลากเส้นเชื่อม Primary Key กับ Foreign Key"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "db-1",
      title: "พื้นฐานฐานข้อมูลเชิงสัมพันธ์ (RDBMS) และโครงสร้างข้อมูล",
      description: "ทำความเข้าใจตาราง (Table), แถว (Record), คอลัมน์ (Column), Primary Key, Foreign Key และ Data Types",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมฐานข้อมูลเชิงสัมพันธ์ (Relational Database)

ฐานข้อมูลเชิงสัมพันธ์ (RDBMS) เช่น MySQL, PostgreSQL, หรือ MariaDB จัดเก็บข้อมูลในรูปแบบตาราง 2 มิติที่เชื่อมโยงกันอย่างเป็นระเบียบ

## องค์ประกอบหลักของ RDBMS
1. **Table (ตาราง/Entity):** กลุ่มของข้อมูลเรื่องเดียวกัน เช่น ตาราง \`students\`, ตาราง \`courses\`
2. **Row / Record (แถว/Tuple):** ข้อมูลของแต่ละรายการ เช่น ข้อมูลของนักเรียนหนึ่งคน
3. **Column / Field (คอลัมน์/Attribute):** คุณสมบัติของข้อมูล เช่น รหัสนักศึกษา, ชื่อ, นามสกุล, วันเกิด
4. **Primary Key (PK - คีย์หลัก):** ฟิลด์ที่ค่าต้องไม่ซ้ำกันเด็ดขาด และห้ามเป็นค่าว่าง (NOT NULL) เพื่อระบุตัวตนของแต่ละแถวอย่างเฉพาะเจาะจง เช่น รหัสประจำตัวประชาชน หรือ รหัสนักศึกษา
5. **Foreign Key (FK - คีย์นอก):** ฟิลด์ที่เก็บค่า Primary Key ของอีกตารางหนึ่ง เพื่อสร้างการเชื่อมโยงความสัมพันธ์ (Relationship)`,
      codeExample: {
        language: "sql",
        code: `-- สร้างตารางแผนกวิชา
CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

-- สร้างตารางนักศึกษาที่มี Foreign Key เชื่อมไปยังตารางแผนกวิชา
CREATE TABLE students (
    student_id VARCHAR(10) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gpa DECIMAL(3,2) DEFAULT 0.00,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`,
        description: "ตัวอย่างคำสั่งสร้างตารางที่มีความสัมพันธ์กันด้วย Primary Key และ Foreign Key"
      },
      quiz: [
        { id: "db-1-q1", question: "คุณสมบัติสำคัญที่สุดของ Primary Key คือข้อใด?", options: ["ต้องเป็นตัวเลขจำนวนเต็มเท่านั้น", "ต้องไม่ซ้ำกันเลยในตาราง และห้ามมีค่าว่าง (NOT NULL)", "ต้องมีความยาวไม่เกิน 10 ตัวอักษร", "สามารถซ้ำกันได้หากอยู่คนละห้อง"], correctAnswer: 1, explanation: "Primary Key มีหน้าที่ระบุตัวตนของแต่ละ Record โดยไม่ซ้ำและห้ามว่างเด็ดขาด" }
      ]
    },
    {
      id: "db-2",
      title: "SQL พื้นฐาน: DDL และ DML (CRUD Operations)",
      description: "ฝึกฝนการเขียนคำสั่งสร้างตาราง, INSERT เพิ่มข้อมูล, SELECT กรองข้อมูล, UPDATE แก้ไขข้อมูล และ DELETE ลบข้อมูล",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# ภาษา SQL และการปฏิบัติการข้อมูลแบบ CRUD

SQL (Structured Query Language) แบ่งคำสั่งออกเป็น 2 หมวดหลัก:
- **DDL (Data Definition Language):** คำสั่งกำหนดโครงสร้างตาราง (\`CREATE\`, \`ALTER\`, \`DROP\`)
- **DML (Data Manipulation Language):** คำสั่งจัดการตัวข้อมูลจริงในตาราง (\`INSERT\`, \`SELECT\`, \`UPDATE\`, \`DELETE\`) หรือที่เรียกว่า **CRUD**`,
      codeExample: {
        language: "sql",
        code: `-- 1. CREATE (เพิ่มข้อมูลใหม่)
INSERT INTO students (student_id, first_name, last_name, gpa, dept_id)
VALUES ('6730901001', 'กิตติศักดิ์', 'รักเรียน', 3.75, 1);

-- 2. READ (อ่านข้อมูลพร้อมเงื่อนไข)
SELECT first_name, last_name, gpa 
FROM students 
WHERE gpa >= 3.50 
ORDER BY gpa DESC;

-- 3. UPDATE (แก้ไขข้อมูล *อย่าลืม WHERE*)
UPDATE students 
SET gpa = 3.85 
WHERE student_id = '6730901001';

-- 4. DELETE (ลบข้อมูล *อย่าลืม WHERE*)
DELETE FROM students 
WHERE student_id = '6730901001';`,
        description: "การดำเนินการ CRUD Operations ครบทั้ง 4 ขั้นตอนตามมาตรฐาน ANSI SQL"
      },
      quiz: [
        { id: "db-2-q1", question: "จะเกิดอะไรขึ้นหากสั่งคำสั่ง UPDATE หรือ DELETE โดยลืมใส่เงื่อนไข WHERE?", options: ["ระบบจะแจ้งเตือนข้อผิดพลาดและยกเลิกคำสั่ง", "ข้อมูลจะถูกแก้ไขหรือลบหมดทุกแถวในตารางทันที!", "ข้อมูลแถวแรกสุดจะถูกลบเพียงแถวเดียว", "ไม่มีอะไรเกิดขึ้น"], correctAnswer: 1, explanation: "คำสั่ง UPDATE หรือ DELETE ที่ไม่มี WHERE จะส่งผลกระทบต่อทุกแถวในตาราง ถือเป็นข้อผิดพลาดที่ร้ายแรงมาก" }
      ]
    },
    {
      id: "db-3",
      title: "การออกแบบฐานข้อมูลด้วย ER Diagram (Entity-Relationship)",
      description: "ทำความเข้าใจความสัมพันธ์แบบ One-to-One, One-to-Many และ Many-to-Many พร้อมการแก้ปัญหาด้วยตารางเชื่อม (Junction Table)",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การออกแบบโมเดลฐานข้อมูลด้วย ER Diagram

ก่อนลงมือเขียนโค้ด นักวิเคราะห์ระบบต้องเขียน **ER Diagram** เพื่อแปลงข้อกำหนดการใช้งานในชีวิตจริงให้อยู่ในรูปของตาราง

## ชนิดของความสัมพันธ์ (Cardinality)
1. **One-to-One (1:1):** ข้อมูลแถวหนึ่งตรงกับอีกตารางเพียงแถวเดียว (เช่น นักเรียน 1 คน มี 1 บัตรประจำตัว)
2. **One-to-Many (1:N):** ข้อมูล 1 แถว เชื่อมไปยังหลายแถวในอีกตาราง (เช่น 1 แผนกวิชา มีนักเรียนสังกัดอยู่ได้หลายคน) *วิธีทำ:* นำ PK ของฝั่ง 1 ไปวางเป็น FK ในฝั่ง Many
3. **Many-to-Many (M:N):** ข้อมูลทั้งสองฝั่งสัมพันธ์กันหลายต่อหลาย (เช่น นักเรียน 1 คน ลงทะเบียนได้หลายวิชา และ 1 รายวิชา มีนักเรียนลงทะเบียนเรียนได้หลายคน)
   - *กฎเหล็ก:* ฐานข้อมูลเชิงสัมพันธ์ไม่สามารถสร้างความสัมพันธ์ M:N ได้โดยตรง ต้องสร้าง **Junction Table (ตารางเชื่อม เช่น enrollments)** มาคั่นกลาง แล้วแตกออกเป็นสอง 1:N`,
      codeExample: {
        language: "sql",
        code: `-- การแก้ความสัมพันธ์ Many-to-Many ระหว่าง Students และ Courses
CREATE TABLE enrollments (
    enroll_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(10) NOT NULL,
    course_id VARCHAR(10) NOT NULL,
    semester VARCHAR(10) NOT NULL,
    grade DECIMAL(3,2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE KEY unique_enroll (student_id, course_id, semester)
);`,
        description: "ตาราง Junction Table (enrollments) แก้ปัญหาความสัมพันธ์ Many-to-Many พร้อมป้องกันการลงทะเบียนวิชาเดิมซ้ำในเทอมเดียวกัน"
      },
      quiz: [
        { id: "db-3-q1", question: "เมื่อพบความสัมพันธ์แบบ Many-to-Many ระหว่างตารางสินค้าและใบสั่งซื้อ ต้องแก้ไขอย่างไรในฐานข้อมูลเชิงสัมพันธ์?", options: ["ใส่คีย์ลงในคอลัมน์เดียวกันโดยคั่นด้วยเครื่องหมายจุลภาค", "สร้างตารางเชื่อม (Junction Table เช่น order_items) มาคั่นกลาง", "ลบตารางใดตารางหนึ่งทิ้ง", "ไม่ต้องทำอะไร RDBMS รองรับอัตโนมัติ"], correctAnswer: 1, explanation: "ต้องสร้าง Junction Table เก็บ Foreign Key ของทั้งสองฝั่ง เพื่อแปลงเป็นความสัมพันธ์ 1:N สองคู่" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "db-4",
      title: "การสืบค้นข้อมูลขั้นสูง: SQL JOINs และ Subqueries",
      description: "ผสานข้อมูลข้ามตารางด้วย INNER JOIN, LEFT JOIN, RIGHT JOIN และการซ้อนคำสั่ง Query ซ้อน Query",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การรวมข้อมูลข้ามตารางด้วย SQL JOINs

ในโลกจริงข้อมูลถูกกระจายอยู่หลายตาราง การดึงข้อมูลออกมาแสดงผลในรายงานแผ่นเดียวจึงต้องอาศัยคำสั่ง **JOIN**

## ความแตกต่างของ JOIN แต่ละประเภท
- **INNER JOIN:** ดึงเฉพาะแถวที่มีข้อมูลตรงกันทั้งสองฝั่งเท่านั้น
- **LEFT JOIN (หรือ LEFT OUTER JOIN):** ดึงข้อมูลทั้งหมดจากตารางฝั่งซ้ายเป็นหลัก แม้ตารางฝั่งขวาจะไม่มีข้อมูลตรงกัน (จะแสดงเป็น NULL) เหมาะกับการดูว่า *'นักเรียนคนใดที่ยังไม่ได้ลงทะเบียนวิชาใดเลย'*
- **Subquery (Query ย่อย):** คำสั่ง SELECT ที่ซ้อนอยู่ข้างในคำสั่งอื่น เช่น หาว่า *'นักเรียนคนใดได้เกรดมากกว่าเกรดเฉลี่ยของทั้งชั้น'*`,
      codeExample: {
        language: "sql",
        code: `-- รายงานรายชื่อนักเรียน พร้อมวิชาที่ลงทะเบียน และชื่ออาจารย์ผู้สอน
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    c.course_name,
    e.grade
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id
WHERE e.semester = '1/2567'
ORDER BY s.student_id ASC;

-- Subquery ค้นหานักเรียนที่ได้ GPA สูงกว่าค่าเฉลี่ยของทั้งโรงเรียน
SELECT first_name, last_name, gpa 
FROM students 
WHERE gpa > (SELECT AVG(gpa) FROM students);`,
        description: "ตัวอย่างคำสั่ง Multi-table JOIN และการเขียน Subquery เปรียบเทียบค่าเฉลี่ย"
      },
      quiz: [
        { id: "db-4-q1", question: "หากต้องการแสดงรายชื่อนักเรียนทุกคนในโรงเรียน แม้ว่านักเรียนบางคนจะยังไม่ได้ลงทะเบียนเรียนเลยก็ตาม ควรใช้คำสั่ง JOIN ประเภทใด?", options: ["INNER JOIN", "LEFT JOIN (โดยเอาตารางนักเรียนเป็นฝั่งซ้าย)", "RIGHT JOIN (โดยเอาตารางวิชาเป็นฝั่งซ้าย)", "CROSS JOIN"], correctAnswer: 1, explanation: "LEFT JOIN จะรักษาข้อมูลตารางซ้ายไว้ครบทุกแถว แม้ตารางขวาจะไม่มีข้อมูลคู่กัน" }
      ]
    },
    {
      id: "db-5",
      title: "กระบวนการ Normalization ลดความซ้ำซ้อน (1NF, 2NF, 3NF)",
      description: "เรียนรู้กฎการแปลงตารางให้อยู่ในรูปบรรทัดฐาน 1NF, 2NF, 3NF เพื่อป้องกันปัญหา Insert, Update, Delete Anomalies",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การปรับโครงสร้างฐานข้อมูล (Database Normalization)

**Normalization** คือกระบวนการจัดระเบียบตารางในฐานข้อมูล เพื่อลดความซ้ำซ้อนของข้อมูล และป้องกันไม่ให้เกิดความผิดปกติในการจัดการข้อมูล (Data Anomalies)

## ระดับของ Normalization
1. **1NF (First Normal Form):**
   - ทุกช่อง (Cell) ต้องเก็บค่าเดี่ยว (Atomic value) เท่านั้น ห้ามเก็บข้อมูลเป็นลิสต์คั่นด้วยจุลภาค เช่น \`วิชา: คณิต, ฟิสิกส์, เคมี\`
   - ต้องมี Primary Key กำกับ
2. **2NF (Second Normal Form):**
   - ต้องผ่าน 1NF ก่อน
   - กำจัด **Partial Dependency** (ทุกฟิลด์ที่ไม่ใช่คีย์ ต้องขึ้นตรงต่อ Primary Key ทั้งตัว ไม่ใช่ขึ้นกับคีย์เพียงบางส่วนในกรณีที่เป็น Composite Key)
3. **3NF (Third Normal Form):**
   - ต้องผ่าน 2NF ก่อน
   - กำจัด **Transitive Dependency** (ห้ามมีฟิลด์ธรรมดาขึ้นต่อฟิลด์ธรรมดาด้วยกันเอง เช่น ฟิลด์ \`อำเภอ\` ขึ้นต่อฟิลด์ \`รหัสไปรษณีย์\`)`,
      codeExample: {
        language: "sql",
        code: `-- ตัวอย่างโครงสร้างที่ผ่าน 3NF แล้ว
-- แยกตารางที่อยู่จังหวัด/อำเภอออกต่างหากเพื่อป้องกันความซ้ำซ้อน
CREATE TABLE zipcodes (
    zipcode VARCHAR(5) PRIMARY KEY,
    district VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL
);

CREATE TABLE student_addresses (
    student_id VARCHAR(10) PRIMARY KEY,
    street_address VARCHAR(255) NOT NULL,
    zipcode VARCHAR(5),
    FOREIGN KEY (zipcode) REFERENCES zipcodes(zipcode)
);`,
        description: "การแยกตารางเพื่อกำจัด Transitive Dependency ตามมาตรฐาน 3NF"
      },
      quiz: [
        { id: "db-5-q1", question: "ตารางที่ผ่านกฎเกณฑ์ 1NF (First Normal Form) ต้องมีลักษณะเด่นคือข้อใด?", options: ["ต้องไม่มีฟิลด์ที่เป็นตัวเลข", "ทุกช่องข้อมูลต้องเป็นค่าเดี่ยว (Atomic value) ไม่เป็นชุดข้อมูลซ้อนกัน", "ต้องมีตารางย่อยอย่างน้อย 5 ตาราง", "ต้องเข้ารหัสรหัสผ่าน"], correctAnswer: 1, explanation: "1NF บังคับว่าแต่ละช่อง (Cell) ต้องบรรจุค่าอะตอมิก (เดี่ยว) เท่านั้น" }
      ]
    },
    {
      id: "db-6",
      title: "Aggregate Functions, GROUP BY, HAVING และการคำนวณเกรดเฉลี่ย (GPA)",
      description: "คำนวณผลสรุปสถิติด้วย COUNT, SUM, AVG, MAX, MIN และการจัดกลุ่มข้อมูลเพื่อทำสรุปผลการเรียน",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# การคำนวณและสรุปข้อมูลเชิงสถิติ (Aggregate Functions)

ในงานระบบบริหารโรงเรียน (RMS) เราต้องสรุปตัวเลขสถิติอยู่ตลอดเวลา เช่น สรุปเกรดเฉลี่ยประจำเทอม, นับจำนวนนักเรียนในแต่ละแผนก

## คำสั่งสรุปผลข้อมูล
- \`COUNT(*)\`: นับจำนวนแถว
- \`SUM(column)\`: ผลรวมตัวเลข
- \`AVG(column)\`: ค่าเฉลี่ย
- \`GROUP BY\`: จัดกลุ่มข้อมูลตามคอลัมน์ที่ระบุ
- \`HAVING\`: การกรองเงื่อนไขของผลลัพธ์ที่เกิดจากการสรุป (ใช้แทน WHERE)`,
      codeExample: {
        language: "sql",
        code: `-- คำนวณเกรดเฉลี่ยสะสม (GPA) ตามหน่วยกิตของแต่ละวิชา
-- สูตร: ผลรวมของ (เกรด x หน่วยกิต) หารด้วย ผลรวมของหน่วยกิตทั้งหมด
SELECT 
    s.student_id,
    s.first_name,
    s.last_name,
    ROUND(SUM(e.grade * c.credits) / SUM(c.credits), 2) AS calculated_gpa
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id
GROUP BY s.student_id, s.first_name, s.last_name
HAVING calculated_gpa >= 3.00
ORDER BY calculated_gpa DESC;`,
        description: "คำสั่ง SQL คำนวณเกรดเฉลี่ยถ่วงน้ำหนักตามหน่วยกิตวิชาจริง"
      },
      quiz: [
        { id: "db-6-q1", question: "ความแตกต่างระหว่าง WHERE และ HAVING ในภาษา SQL คือข้อใด?", options: ["WHERE ใช้กับตัวเลข, HAVING ใช้กับข้อความ", "WHERE กรองแถวข้อมูลก่อนการจัดกลุ่ม, HAVING กรองผลลัพธ์หลังจากการ GROUP BY สรุปผลแล้ว", "ทั้งสองคำสั่งเหมือนกันทุกประการ", "HAVING ทำงานเร็วกว่าเสมอ"], correctAnswer: 1, explanation: "WHERE กรองข้อมูลระดับแถวก่อน Aggregate ขณะที่ HAVING กรองข้อมูลผลลัพธ์หลังจากการรวมกลุ่ม (GROUP BY)" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "db-7",
      title: "การเพิ่มประสิทธิภาพฐานข้อมูล: Indexes, B-Tree และ EXPLAIN",
      description: "เข้าใจโครงสร้าง Index แบบ B-Tree, วิเคราะห์ความเร็ว Query ด้วย EXPLAIN และการป้องกันปัญหา Table Scan บนฐานข้อมูลขนาดใหญ่",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การปรับแต่งประสิทธิภาพ (Database Indexing & Tuning)

เมื่อตารางมีข้อมูลมากกว่า 1 ล้านแถว คำสั่ง SELECT ธรรมดาที่ไม่ได้ใส่ Index อาจต้องอ่านข้อมูลทั้งดิสก์ (Full Table Scan) ทำให้เซิร์ฟเวอร์ค้าง

## ดัชนี (Index) คืออะไร?
ดัชนีเปรียบเสมือนดัชนีท้ายเล่มของหนังสือเรียน โครงสร้างส่วนใหญ่ใช้ **B-Tree (Balanced Tree)** ที่มีความซับซ้อนในการค้นหาเพียง $O(\\log N)$

## การวิเคราะห์ด้วยคำสั่ง EXPLAIN
ก่อนที่จะปรับแต่งระบบ ให้รันคำสั่ง \`EXPLAIN SELECT ...\` เพื่อดูว่าฐานข้อมูลใช้ Index หรือไม่ หรืออ่านกี่ล้านแถว`,
      codeExample: {
        language: "sql",
        code: `-- ตรวจสอบการทำงานของ Query
EXPLAIN SELECT * FROM students WHERE last_name = 'รักเรียน';

-- สร้าง Index บนคอลัมน์ที่มีการค้นหาหรือ JOIN บ่อยๆ
CREATE INDEX idx_student_lastname ON students(last_name);

-- สร้าง Composite Index สำหรับการค้นหาคู่
CREATE INDEX idx_enroll_student_semester ON enrollments(student_id, semester);`,
        description: "การสร้างและวิเคราะห์ประสิทธิภาพของดัชนี Index ด้วยคำสั่ง EXPLAIN"
      },
      quiz: [
        { id: "db-7-q1", question: "เหตุใดเราจึงไม่ควรสร้าง Index บนทุกๆ คอลัมน์ในตาราง?", options: ["เพราะจะทำให้พื้นที่ดิสก์เต็ม", "เพราะ Index ทำให้การค้นหา (SELECT) เร็วขึ้น แต่จะทำให้การบันทึก (INSERT/UPDATE/DELETE) ช้าลง เนื่องจากต้องอัปเดตโครงสร้าง Tree เสมอ", "เพราะโปรแกรมจะไม่อนุญาต", "ไม่มีผลเสียใดๆ"], correctAnswer: 1, explanation: "ทุกครั้งที่มีการ INSERT/UPDATE/DELETE ฐานข้อมูลต้องเสียเวลาคำนวณและเขียนโครงสร้าง B-Tree ของ Index ใหม่ จึงควรสร้างเฉพาะคอลัมน์ที่ถูกค้นหาบ่อยจริงๆ" }
      ]
    },
    {
      id: "db-8",
      title: "ระบบธุรกรรมและการรักษาความปลอดภัย (Transactions & ACID)",
      description: "ทำความเข้าใจ Atomicity, Consistency, Isolation, Durability, การใช้ COMMIT, ROLLBACK และการจัดการ Concurrency Locks",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# คุณสมบัติ ACID และระบบธุรกรรม (Database Transactions)

ระบบข้อมูลโรงเรียนหรือระบบการเงินจะผิดพลาดไม่ได้แม้แต่จุดเดียว เช่น ตอนตัดเงินค่าเทอมแล้วพิมพ์ใบเสร็จ หากระบบไฟดับกลางคัน ข้อมูลต้องไม่เสียหาย

## หลักการ 4 ประการของ ACID
1. **Atomicity (ความเป็นอะตอม):** ทุกคำสั่งในธุรกรรมต้องสำเร็จทั้งหมด หรือถ้ามีคำสั่งใดพัง ทุกอย่างต้องถูกยกเลิกย้อนกลับหมด (All or Nothing)
2. **Consistency (ความสอดคล้อง):** ข้อมูลต้องถูกต้องตามกฎเกณฑ์ (Constraints) ก่อนและหลังธุรกรรม
3. **Isolation (ความแยกขาด):** ธุรกรรมที่ทำพร้อมกันจะไม่กวนข้อมูลกันเอง
4. **Durability (ความคงทน):** เมื่อระบบตอบรับว่าบันทึกสำเร็จ (COMMIT) ข้อมูลจะอยู่ถาวรแม้เซิร์ฟเวอร์จะดับทันที`,
      codeExample: {
        language: "sql",
        code: `-- เริ่มต้นธุรกรรมการโอนเงินหรือการตัดรอบเกรด
START TRANSACTION;

-- ขั้นตอนที่ 1: บันทึกใบเสร็จรับเงินค่าเทอม
INSERT INTO tuition_payments (student_id, amount, paid_date)
VALUES ('6730901001', 5000.00, NOW());

-- ขั้นตอนที่ 2: ปรับปรุงสถานะนักเรียนเป็นลงทะเบียนสำเร็จ
UPDATE students 
SET enrollment_status = 'COMPLETED' 
WHERE student_id = '6730901001';

-- หากทุกอย่างเรียบร้อยดี ให้ยืนยัน
COMMIT;

-- หากเกิดข้อผิดพลาดใดๆ ให้ยกเลิกทั้งหมด
-- ROLLBACK;`,
        description: "การใช้งานคำสั่ง START TRANSACTION, COMMIT และ ROLLBACK"
      },
      quiz: [
        { id: "db-8-q1", question: "เมื่อเกิดข้อผิดพลาดขึ้นระหว่างการทำงานใน Transaction คำสั่งใดใช้เพื่อยกเลิกการเปลี่ยนแปลงทั้งหมดและย้อนกลับสู่สถานะเดิม?", options: ["CANCEL", "ROLLBACK", "UNDO", "REVERT"], correctAnswer: 1, explanation: "ROLLBACK คือคำสั่งยกเลิกทุกคำสั่งที่ทำมาใน Transaction ปัจจุบันและย้อนกลับสู่จุดเริ่มต้น" }
      ]
    },
    {
      id: "db-9",
      title: "โปรเจกต์ใหญ่: ระบบบริหารงานทะเบียนนักเรียน (Student RMS Database)",
      description: "พัฒนา Schema ฐานข้อมูลระบบทะเบียน RMS ครบวงจร: ข้อมูลนักศึกษา, อาจารย์, แผนกวิชา, รายวิชา, ผลการเรียน, และตารางสอน",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# ออกแบบระบบบริหารจัดการนักเรียน Record Management System (RMS)

ระบบ RMS คือกระดูกสันหลังของสถาบันการศึกษาทั่วประเทศ โดยต้องรองรับข้อมูลหลายหมวดหมู่เชื่อมโยงกันอย่างเป็นระบบ

## ตารางหลักของระบบ RMS
1. \`academic_terms\`: ปีการศึกษาและภาคเรียน (เช่น 1/2567)
2. \`departments\`: แผนกวิชา (เช่น เทคโนโลยีสารสนเทศ, ไฟฟ้า)
3. \`teachers\`: อาจารย์ผู้สอน
4. \`students\`: ข้อมูลนักเรียน/นักศึกษา
5. \`courses\`: รายวิชาหลักสูตร
6. \`class_schedules\`: ตารางสอน (วิชาใด สอนที่ห้องไหน เวลาใด โดยอาจารย์ท่านใด)
7. \`enrollments\`: ประวัติการลงทะเบียนและผลการเรียนรายวิชา`,
      codeExample: {
        language: "sql",
        code: `-- ตัวอย่าง View สรุปข้อมูลระเบียนผลการศึกษา (Transcript View)
CREATE OR REPLACE VIEW v_student_transcripts AS
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.dept_name,
    e.semester,
    c.course_id,
    c.course_name,
    c.credits,
    e.grade,
    CASE 
        WHEN e.grade >= 4.0 THEN 'A'
        WHEN e.grade >= 3.5 THEN 'B+'
        WHEN e.grade >= 3.0 THEN 'B'
        WHEN e.grade >= 2.5 THEN 'C+'
        WHEN e.grade >= 2.0 THEN 'C'
        WHEN e.grade >= 1.5 THEN 'D+'
        WHEN e.grade >= 1.0 THEN 'D'
        ELSE 'F'
    END AS letter_grade
FROM students s
JOIN departments d ON s.dept_id = d.dept_id
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;

-- ทดลองเรียกใช้งาน View
SELECT * FROM v_student_transcripts WHERE student_id = '6730901001';`,
        description: "การสร้าง Database View สำหรับพิมพ์ใบรับรองผลการเรียน (Transcript) ในระบบ RMS"
      },
      quiz: [
        { id: "db-9-q1", question: "ข้อดีของการสร้าง SQL View ในระบบ RMS สำหรับการดึงข้อมูลผลการเรียนคือข้อใด?", options: ["ลดความซับซ้อนของคำสั่ง Query ที่ต้องใช้งานบ่อยๆ และช่วยควบคุมสิทธิ์การเข้าถึงข้อมูล", "ทำให้คอมพิวเตอร์กินไฟน้อยลง", "ช่วยให้สร้างไฟล์ PDF ได้อัตโนมัติ", "ไม่มีข้อดี"], correctAnswer: 0, explanation: "SQL View ช่วยซ่อนความซับซ้อนของคำสั่ง JOIN และช่วยควบคุมความปลอดภัย ไม่ให้ผู้ใช้งานเห็นตารางต้นฉบับตรงๆ" }
      ]
    }
  ]
};
