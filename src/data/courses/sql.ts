import { Course } from "../types";

export const sqlCourse: Course = {
  id: "sql",
  title: "Advanced SQL & Database Query Engineering",
  description: "เจาะลึกภาษา SQL เชิงวิศวกรรม ตั้งแต่ Execution Order, CTEs, Window Functions, B-Tree Indexing, Transaction Isolation (MVCC) จนถึง EXPLAIN Query Optimization",
  longDescription: "หลักสูตรวิศวกรรมการสืบค้นข้อมูลด้วยภาษา SQL ขั้นสูง (Advanced SQL Query Engineering) สำหรับ Data Engineers, Software Engineers และ Database Administrators ครอบคลุมตั้งแต่คณิตศาสตร์พีชคณิตเชิงสัมพันธ์ (Relational Algebra), ลำดับการประมวลผลคำสั่งจริงของ SQL Engine (Execution Order), การเชื่อมต่อตารางขั้นสูงแบบ Complex Joins และ Self Joins, การเขียน Common Table Expressions (CTE) และ Recursive Queries สำหรับจัดการข้อมูลกราฟและโครงสร้างองค์กร, การวิเคราะห์ข้อมูลสถิติขั้นสูงด้วย Window Functions (PARTITION BY, RANK, LAG, LEAD), สถาปัตยกรรมภายในของ B-Tree Indexes และ Covering Indexes, ทรานแซกชันและการรับประกัน ACID ร่วมกับระดับการแยกตัว (Isolation Levels) และ Multi-Version Concurrency Control (MVCC), การเขียน Stored Procedures และ Triggers, ตลอดจนการวิเคราะห์ Execution Plan ด้วย EXPLAIN ANALYZE เพื่อปรับแต่งคำสั่งให้ทำงานเร็วขึ้นระดับ 100 เท่า",
  icon: "📊",
  color: "cyan",
  gradient: "from-cyan-600 via-blue-600 to-indigo-800",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["SQL", "PostgreSQL", "MySQL", "Query Optimization", "Window Functions", "CTE", "Indexing", "ACID"],
  recommendedTools: [
    {
      name: "PostgreSQL 16+ & pgAdmin 4 / DBeaver",
      icon: "🐘",
      badge: "Database Engine",
      description: "ระบบฐานข้อมูลเชิงสัมพันธ์ชั้นนำระดับโลกที่รองรับมาตรฐาน SQL สมบูรณ์แบบที่สุด พร้อม GUI Tool สำหรับเขียนคำสั่งและดู Execution Plan",
      downloadUrl: "https://www.postgresql.org/",
      setupGuide: "1. ติดตั้ง PostgreSQL 16 และ pgAdmin 4\n2. เปิด psql หรือ DBeaver เชื่อมต่อฐานข้อมูล\n3. รันคำสั่งทดสอบ: SELECT version();"
    },
    {
      name: "DBeaver Universal Database Tool",
      icon: "🦫",
      badge: "Universal SQL IDE",
      description: "โปรแกรมจัดการฐานข้อมูลที่รองรับทั้ง PostgreSQL, MySQL, SQLite, Oracle และ SQL Server พร้อม Visual Explain Plan",
      downloadUrl: "https://dbeaver.io/",
      setupGuide: "1. ติดตั้ง DBeaver Community Edition\n2. สร้างการเชื่อมต่อ New Database Connection\n3. ใช้คีย์ลัด Ctrl + Enter เพื่อรันคำสั่ง SQL"
    }
  ],
  lessons: [
    {
      id: "sql-1",
      title: "พีชคณิตเชิงสัมพันธ์และลำดับการประมวลผลคำสั่งจริง (SQL Execution Order)",
      description: "ทำความเข้าใจว่าทำไม SQL ถึงไม่ได้ทำงานตามลำดับที่เขียน จาก FROM สู่ WHERE, GROUP BY, HAVING, SELECT จนถึง ORDER BY และ LIMIT",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภาษา SQL และลำดับการประมวลผลจริง (Logical Query Processing)

ภาษา SQL (Structured Query Language) เป็นภาษาแบบ **Declarative** กล่าวคือเราเขียนบอก *ผลลัพธ์ที่ต้องการ (What)* ไม่ใช่ขั้นตอนการคำนวณทีละบรรทัด (How)

## 1. ลำดับที่เขียน (Lexical Order) vs ลำดับที่เครื่องรัน (Execution Order)
นักพัฒนามือใหม่มักสับสนว่าทำไมจึงไม่สามารถใช้ Alias ที่ประกาศใน \`SELECT\` ไปกรองใน \`WHERE\` ได้ สาเหตุเพราะ SQL Engine ประมวลผลตามลำดับตรรกะดังนี้:

\`\`\`
1. FROM       ──> ระบุตารางและทำ JOIN (เตรียม Virtual Table)
2. ON         ──> ประเมินเงื่อนไขการเชื่อมตาราง
3. JOIN       ──> นำตารางมารวมกัน
4. WHERE      ──> กรองแถวข้อมูลที่ไม่ต้องการออก
5. GROUP BY   ──> จัดกลุ่มแถวข้อมูลตามคีย์
6. HAVING     ──> กรองกลุ่มข้อมูลหลังจัดกลุ่มแล้ว
7. SELECT     ──> เลือกคอลัมน์, คำนวณนิพจน์, กำหนด Alias
8. DISTINCT   ──> ตัดแถวที่ซ้ำซ้อนออก
9. ORDER BY   ──> เรียงลำดับข้อมูล
10. LIMIT / OFFSET ──> ตัดเฉพาะจำนวนแถวที่ต้องการ
\`\`\`

## 2. ทำไมถึงใช้ Alias ใน WHERE ไม่ได้ แต่ใช้ใน ORDER BY ได้?
- \`WHERE\` รันในขั้นตอนที่ 4 ซึ่งเกิดขึ้น **ก่อน** \`SELECT\` (ขั้นตอนที่ 7) ดังนั้น SQL Engine จึงยังไม่รู้จักชื่อ Alias
- \`ORDER BY\` รันในขั้นตอนที่ 9 ซึ่งเกิดขึ้น **หลัง** \`SELECT\` ทำให้สามารถอ้างอิงชื่อ Alias ได้อย่างถูกต้อง

\`\`\`sql
-- ❌ ผิด: WHERE ยังไม่รู้จัก Alias 'annual_salary'
SELECT employee_name, salary * 12 AS annual_salary
FROM employees
WHERE annual_salary > 500000; -- Syntax Error!

-- ✅ ถูกต้อง: ใช้สูตรคำนวณใน WHERE หรือใช้ Subquery/CTE
SELECT employee_name, salary * 12 AS annual_salary
FROM employees
WHERE (salary * 12) > 500000
ORDER BY annual_salary DESC; -- ใช้ Alias ใน ORDER BY ได้สมบูรณ์
\`\`\``,
      codeExample: `-- การสาธิต SQL Logical Execution Order
-- 1. สร้างตารางตัวอย่าง
CREATE TEMP TABLE sales_records (
    id SERIAL PRIMARY KEY,
    branch_name VARCHAR(50),
    amount NUMERIC(10, 2),
    sale_date DATE
);

-- 2. จำลองข้อมูลยอดขาย
INSERT INTO sales_records (branch_name, amount, sale_date) VALUES
('Bangkok Central', 15000.00, '2024-01-15'),
('Bangkok Central', 25000.00, '2024-02-10'),
('Chiang Mai North', 8000.00, '2024-01-20'),
('Chiang Mai North', 12000.00, '2024-02-15'),
('Phuket South', 45000.00, '2024-01-18'),
('Phuket South', 50000.00, '2024-02-22');

-- 3. คำสั่ง SQL ที่แสดงการทำงานครบทุกขั้นตอน
SELECT 
    branch_name,
    COUNT(id) AS total_orders,
    SUM(amount) AS total_revenue,
    ROUND(AVG(amount), 2) AS avg_ticket_size
FROM sales_records
WHERE sale_date >= '2024-01-01'
GROUP BY branch_name
HAVING SUM(amount) > 20000.00
ORDER BY total_revenue DESC
LIMIT 2;`,
      challenge: "เขียนคำสั่ง SQL เพื่อหายอดรวมคะแนนของนักเรียนแต่ละห้อง โดยกรองเฉพาะนักเรียนที่คะแนนสอบวิชาคณิตศาสตร์เกิน 50 คะแนน และแสดงเฉพาะห้องที่มียอดคะแนนรวมเกิน 300 คะแนน",
      quiz: [
        {
          question: "ขั้นตอนใดใน SQL Logical Query Processing ที่ทำงานก่อนขั้นตอนอื่นๆ เสมอ?",
          options: ["FROM", "SELECT", "WHERE", "ORDER BY"],
          correctAnswer: 0,
          explanation: "ขั้นตอน FROM จะทำงานก่อนเสมอเพื่อระบุตารางและสร้างตารางเสมือน (Virtual Table) ก่อนที่จะนำไปกรองหรือจัดกลุ่มในขั้นตอนต่อไป"
        },
        {
          question: "ข้อใดอธิบายความแตกต่างระหว่าง WHERE และ HAVING ได้ถูกต้อง?",
          options: [
            "WHERE กรองแถวข้อมูลก่อนการทำ GROUP BY ส่วน HAVING กรองกลุ่มข้อมูลหลังการคำนวณ Aggregate แล้ว",
            "WHERE ใช้ได้เฉพาะกับตัวเลข ส่วน HAVING ใช้ได้กับข้อความ",
            "WHERE ทำงานช้ากว่า HAVING เสมอ",
            "ทั้งคู่ทำงานในขั้นตอนเดียวกัน สามารถใช้แทนกันได้ 100%"
          ],
          correctAnswer: 0,
          explanation: "WHERE ใช้กรองแถวข้อมูลเดี่ยวๆ ก่อนเข้าสู่การจัดกลุ่ม ส่วน HAVING ใช้ตรวจสอบเงื่อนไขของค่าผลรวม (Aggregates) หลังการทำ GROUP BY"
        },
        {
          question: "ทำไมเราจึงไม่สามารถนำ Alias ที่ตั้งไว้ใน SELECT ไปใช้ใน WHERE Clause ได้?",
          options: [
            "เพราะ WHERE ถูกประมวลผลในขั้นตอนที่ 4 ก่อนที่ SELECT ในขั้นตอนที่ 7 จะถูกประมวลผล",
            "เพราะภาษา SQL ไม่อนุญาตให้ใช้ตัวอักษรภาษาอังกฤษใน Alias",
            "เพราะ Alias มีไว้สำหรับแสดงผลใน HTML เท่านั้น",
            "เพราะ WHERE รับได้เฉพาะคอลัมน์ที่เป็น Primary Key เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "ลำดับการประมวลผลของ SQL คือ FROM -> WHERE -> GROUP BY -> HAVING -> SELECT ดังนั้นในจังหวะที่ WHERE ทำงาน SQL Engine ยังไม่ทราบค่า Alias ที่ตั้งไว้ใน SELECT"
        }
      ]
    },
    {
      id: "sql-2",
      title: "การเชื่อมโยงตารางขั้นสูง (Complex Joins) และ Correlated Subqueries",
      description: "ทำความเข้าใจความลึกซึ้งของ INNER, LEFT, RIGHT, FULL OUTER, CROSS และ SELF JOIN รวมถึงประสิทธิภาพของ Subqueries vs Joins",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# การเชื่อมโยงตารางขั้นสูง (Complex Joins)

ในฐานข้อมูลเชิงสัมพันธ์ ข้อมูลถูกแยกเก็บในหลายตารางตามหลักการ **Normalization** การดึงข้อมูลที่มีความเกี่ยวข้องกันจึงต้องอาศัยกลไก **JOIN**

## 1. ชนิดของ JOIN และแผนภาพเวนน์ (Venn Diagram)
- **INNER JOIN:** คืนค่าเฉพาะแถวที่มีคีย์ตรงกันทั้งสองฝั่ง (Intersection)
- **LEFT JOIN (LEFT OUTER JOIN):** คืนค่าข้อมูลทุกแถวจากตารางซ้าย แม้ว่าตารางขวาจะไม่มีข้อมูลที่ตรงกัน (ค่าฝั่งขวาจะเป็น \`NULL\`)
- **RIGHT JOIN:** คืนค่าข้อมูลทุกแถวจากตารางขวา
- **FULL OUTER JOIN:** คืนค่าข้อมูลจากทั้งสองตาราง หากฝั่งใดไม่มีคู่จะแสดงเป็น \`NULL\`
- **CROSS JOIN:** ผลคูณคาร์ทีเซียน (Cartesian Product) โดยนำแถวของตารางแรกจับคู่กับทุกแถวของตารางที่สอง (จำนวนแถว = M x N)

## 2. Self Join สำหรับข้อมูลแบบลำดับขั้น (Hierarchical Data)
การเชื่อมตารางเข้ากับตัวมันเอง เช่น ข้อมูลพนักงานและผู้จัดการ (Manager):
\`\`\`sql
SELECT 
    e.employee_name AS staff_name,
    m.employee_name AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
\`\`\`

## 3. Subqueries vs Joins
- **Scalar Subquery:** คืนค่าค่าเดียว (1 แถว 1 คอลัมน์) สามารถใส่ใน SELECT หรือ WHERE ได้
- **Correlated Subquery:** Subquery ที่อ้างอิงคอลัมน์จาก Outer Query ทำให้ต้องรันซ้ำทุกๆ แถวของ Outer Query มักส่งผลให้ประสิทธิภาพต่ำกว่าการใช้ JOIN`,
      codeExample: `-- การประยุกต์ใช้ Complex Joins และ Self Join
CREATE TEMP TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TEMP TABLE staff (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    mentor_id INT
);

INSERT INTO departments VALUES (1, 'Engineering'), (2, 'Design'), (3, 'Marketing');
INSERT INTO staff VALUES 
(101, 'Somchai', 1, NULL),
(102, 'Kanda', 1, 101),
(103, 'Wichai', 2, 101),
(104, 'Anong', NULL, NULL);

-- 1. LEFT JOIN ค้นหาพนักงานพร้อมชื่อแผนก (รวมพนักงานที่ยังไม่มีแผนก)
SELECT 
    s.emp_id,
    s.name,
    COALESCE(d.dept_name, 'Unassigned') AS department
FROM staff s
LEFT JOIN departments d ON s.dept_id = d.dept_id;

-- 2. SELF JOIN จับคู่พนักงานกับพี่เลี้ยง (Mentor)
SELECT 
    mentee.name AS employee,
    COALESCE(mentor.name, 'No Mentor (Senior)') AS mentor
FROM staff mentee
LEFT JOIN staff mentor ON mentee.mentor_id = mentor.emp_id;`,
      challenge: "เขียนคำสั่ง SQL เพื่อค้นหาลูกค้าทั้งหมดที่ไม่เคยสั่งซื้อสินค้าเลยแม้แต่ครั้งเดียว (ใช้วิธี LEFT JOIN ร่วมกับ WHERE ... IS NULL)",
      quiz: [
        {
          question: "หากต้องการดึงรายชื่อลูกค้าทุกคน แม้ว่าลูกค้ารายนั้นจะยังไม่เคยมีประวัติการสั่งซื้อเลย ควรใช้ JOIN ชนิดใดระหว่างตาราง customers และ orders?",
          options: ["LEFT JOIN (customers LEFT JOIN orders)", "INNER JOIN", "CROSS JOIN", "NATURAL JOIN"],
          correctAnswer: 0,
          explanation: "LEFT JOIN จะรักษาข้อมูลทุกแถวของตารางซ้าย (customers) ไว้เสมอ แม้ว่าจะไม่พบข้อมูลที่ตรงกันในตารางขวา (orders) โดยจะเติมค่า NULL ให้กับคอลัมน์ฝั่งขวา"
        },
        {
          question: "ผลลัพธ์ของ CROSS JOIN ระหว่างตารางที่มี 10 แถว กับตารางที่มี 5 แถว จะได้ข้อมูลทั้งหมดกี่แถว?",
          options: ["50 แถว (10 x 5)", "15 แถว (10 + 5)", "10 แถว", "5 แถว"],
          correctAnswer: 0,
          explanation: "CROSS JOIN คำนวณ Cartesian Product จับคู่ทุกแถวของตารางซ้ายกับตารางขวา ดังนั้นจำนวนแถวจึงเท่ากับ 10 x 5 = 50 แถว"
        },
        {
          question: "เหตุใด Correlated Subquery จึงมักทำงานช้ากว่า JOIN บนชุดข้อมูลขนาดใหญ่?",
          options: [
            "เพราะ Subquery ต้องถูกประมวลผลซ้ำใหม่สำหรับทุกๆ แถวของ Outer Query (O(N) executions)",
            "เพราะ Subquery บังคับให้เซิร์ฟเวอร์ต้องรีสตาร์ต",
            "เพราะ Subquery ไม่รองรับตัวเลข",
            "เพราะ Subquery ใช้ได้เฉพาะกับ SQLite เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "Correlated Subquery มีการอ้างอิงค่าจากแถวปัจจุบันของคิวรีหลัก ทำให้ตัวประมวลผลต้องรัน Subquery ใหม่ทีละแถว ซ้ำไปเรื่อยๆ จนครบข้อมูลทั้งหมด"
        }
      ]
    },
    {
      id: "sql-3",
      title: "Common Table Expressions (CTE) และ Recursive CTEs",
      description: "ปรับปรุงความอ่านง่ายด้วย WITH Clauses และเจาะลึก Recursive CTE สำหรับประมวลผลโครงสร้างลำดับชั้น (Tree / Graph Data)",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Common Table Expressions (CTE) และ Recursive Queries

**Common Table Expression (CTE)** ช่วยให้เราตั้งชื่อชุดผลลัพธ์ชั่วคราว (Temporary Result Set) ผ่านคำสั่ง \`WITH\` ทำให้อ่านง่ายกว่า Subqueries ซับซ้อน และที่สำคัญคือรองรับ **Recursive Queries**

## 1. Basic CTE (WITH Clause)
\`\`\`sql
WITH HighEarners AS (
    SELECT employee_id, name, department_id, salary
    FROM employees
    WHERE salary > 80000
),
DepartmentStats AS (
    SELECT department_id, AVG(salary) AS avg_dept_salary
    FROM employees
    GROUP BY department_id
)
SELECT h.name, h.salary, d.avg_dept_salary
FROM HighEarners h
JOIN DepartmentStats d ON h.department_id = d.department_id;
\`\`\`

## 2. Recursive CTE สำหรับข้อมูลแบบต้นไม้ (Hierarchical Tree)
Recursive CTE ประกอบด้วย 2 ส่วนที่เชื่อมกันด้วย \`UNION ALL\`:
1. **Anchor Member:** จุดเริ่มต้น (Root Node) เช่น หา CEO ที่ไม่มีหัวหน้า
2. **Recursive Member:** คำสั่งที่เรียก CTE ตัวมันเองซ้ำๆ เพื่อไล่ลงไปตามลำดับชั้นจนกระทั่งไม่มีข้อมูลส่งกลับมา

\`\`\`sql
WITH RECURSIVE OrgChart AS (
    -- 1. Anchor: เริ่มที่ผู้บริหารระดับสูงสุด (manager_id IS NULL)
    SELECT emp_id, name, manager_id, 1 AS level, CAST(name AS VARCHAR(255)) AS path
    FROM staff
    WHERE manager_id IS NULL

    UNION ALL

    -- 2. Recursive: ดึงลูกน้องของคนในระดับก่อนหน้า
    SELECT s.emp_id, s.name, s.manager_id, o.level + 1, CAST(o.path || ' -> ' || s.name AS VARCHAR(255))
    FROM staff s
    INNER JOIN OrgChart o ON s.manager_id = o.emp_id
)
SELECT level, path FROM OrgChart ORDER BY level, emp_id;
\`\`\``,
      codeExample: `-- การประยุกต์ใช้ Recursive CTE สำหรับหาลำดับสายบังคับบัญชา
CREATE TEMP TABLE employees_tree (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT
);

INSERT INTO employees_tree VALUES
(1, 'CEO: Somchai', NULL),
(2, 'CTO: Kanda', 1),
(3, 'CFO: Wichai', 1),
(4, 'Lead Dev: Anong', 2),
(5, 'Junior Dev: Prasert', 4),
(6, 'Accountant: Malee', 3);

-- รัน Recursive CTE เพื่อสร้างแผนผังองค์กร
WITH RECURSIVE Hierarchy AS (
    -- Anchor Member
    SELECT 
        id, 
        name, 
        manager_id, 
        1 AS depth,
        name AS hierarchy_path
    FROM employees_tree
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive Member
    SELECT 
        e.id, 
        e.name, 
        e.manager_id, 
        h.depth + 1,
        h.hierarchy_path || ' >> ' || e.name
    FROM employees_tree e
    JOIN Hierarchy h ON e.manager_id = h.id
)
SELECT 
    depth,
    hierarchy_path
FROM Hierarchy
ORDER BY depth, id;`,
      challenge: "สร้าง Recursive CTE เพื่อสร้างลำดับตัวเลข 1 ถึง 100 โดยไม่ต้องใช้ฟังก์ชัน generate_series",
      quiz: [
        {
          question: "Recursive CTE ประกอบด้วย 2 ส่วนประกอบหลักที่เชื่อมต่อกันด้วยคำสั่งใด?",
          options: ["UNION ALL", "INTERSECT", "CROSS JOIN", "EXCEPT"],
          correctAnswer: 0,
          explanation: "Recursive CTE เชื่อมระหว่าง Anchor Member (ส่วนฐานเริ่มต้น) และ Recursive Member (ส่วนวนซ้ำ) ด้วย UNION ALL เสมอ"
        },
        {
          question: "ข้อดีสำคัญของการใช้ CTE (WITH clause) เมื่อเทียบกับการเขียน Subquery ซ้อนกันหลายชั้นคือข้อใด?",
          options: [
            "โค้ดมีความเป็นระเบียบ อ่านง่าย สามารถอ้างอิง CTE ซ้ำได้หลายครั้งใน Query เดียวกัน",
            "ทำให้ฐานข้อมูลไม่ต้องสำรองข้อมูล",
            "ช่วยเพิ่มขนาด Hard Disk ของเซิร์ฟเวอร์",
            "บังคับให้ตารางต้องมี Primary Key เสมอ"
          ],
          correctAnswer: 0,
          explanation: "CTE ช่วยแยกตรรกะที่ซับซ้อนออกเป็นขั้นๆ ทำให้โค้ดอ่านง่าย สามารถนำไปอ้างอิงซ้ำได้ใน Query เดียวกัน และดูแลรักษาได้ง่ายกว่า Subquery ซ้อนลึก"
        },
        {
          question: "หาก Recursive CTE ไม่มีเงื่อนไขการหยุดการทำงาน (Termination Condition) จะเกิดอะไรขึ้น?",
          options: [
            "เกิด Infinite Loop จนกระทั่งชนขีดจำกัด max_recursion_depth ของระบบฐานข้อมูล",
            "ข้อมูลในฮาร์ดดิสก์จะถูกลบทันที",
            "ฐานข้อมูลจะแปลงตัวเองเป็น NoSQL",
            "คำสั่งจะทำงานเสร็จภายใน 1 มิลลิวินาที"
          ],
          correctAnswer: 0,
          explanation: "หาก Recursive member ไม่คืนค่าว่างในที่สุด จะเกิดการวนซ้ำไม่รู้จบจนฐานข้อมูลตัดการทำงานด้วยข้อผิดพลาด Max recursion depth exceeded"
        }
      ]
    },
    {
      id: "sql-4",
      title: "Window Functions ขั้นสูง (PARTITION BY, ROW_NUMBER, RANK, LAG, LEAD)",
      description: "คำนวณสถิติและเปรียบเทียบค่าระหว่างแถวโดยไม่ต้องยุบรวมแถวด้วย Window Functions เช่น Running Total, Ranking และ Period-over-Period",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# การคำนวณขั้นสูงด้วย Window Functions

**Window Functions** คือฟีเจอร์ระดับสูงที่เปลี่ยนโลกของการเขียน SQL โดยช่วยให้เราคำนวณค่า Aggregate หรือสถิติข้ามชุดแถว (Window) ได้ **โดยที่จำนวนแถวยังคงอยู่ครบถ้วนเท่าเดิม** (ไม่ถูกยุบเหมือน \`GROUP BY\`)

## 1. โครงสร้างคำสั่ง OVER (PARTITION BY ... ORDER BY ...)
\`\`\`sql
FUNCTION() OVER (
    PARTITION BY category_column  -- แบ่งหน้าต่างย่อย (เหมือน GROUP BY)
    ORDER BY sort_column          -- กำหนดลำดับในหน้าต่าง
    ROWS BETWEEN ...              -- กำหนดกรอบของแถว (Frame)
)
\`\`\`

## 2. ฟังก์ชันจัดอันดับ (Ranking Functions)
- **ROW_NUMBER():** กำหนดเลขลำดับ 1, 2, 3... แบบไม่ซ้ำกันแน่นอน
- **RANK():** จัดอันดับ หากคะแนนเท่ากันจะได้อันดับเดียวกัน แต่ลำดับถัดไปจะกระโดดข้าม (เช่น 1, 2, 2, 4)
- **DENSE_RANK():** จัดอันดับ หากคะแนนเท่ากันจะได้อันดับเดียวกัน และลำดับถัดไปไม่กระโดดข้าม (เช่น 1, 2, 2, 3)

## 3. ฟังก์ชันนำทางข้อมูล (Navigation Functions)
- **LAG(column, offset):** ดึงค่าจากแถวก่อนหน้า (เหมาะมากสำหรับหายอดขายเทียบกับเดือนที่แล้ว - MoM Growth)
- **LEAD(column, offset):** ดึงค่าจากแถวถัดไป
- **Running Total (ยอดรวมสะสม):** \`SUM(amount) OVER (PARTITION BY user_id ORDER BY order_date)\``,
      codeExample: `-- การประยุกต์ใช้ Window Functions วิเคราะห์แนวโน้มยอดขาย
CREATE TEMP TABLE monthly_sales (
    month_name VARCHAR(10),
    sales_rep VARCHAR(50),
    revenue NUMERIC(10, 2)
);

INSERT INTO monthly_sales VALUES
('Jan', 'Somchai', 100000),
('Jan', 'Kanda',   120000),
('Jan', 'Wichai',   95000),
('Feb', 'Somchai', 115000),
('Feb', 'Kanda',   110000),
('Feb', 'Wichai',  130000);

SELECT 
    month_name,
    sales_rep,
    revenue,
    -- 1. จัดอันดับพนักงานขายในแต่ละเดือน
    DENSE_RANK() OVER (PARTITION BY month_name ORDER BY revenue DESC) AS month_rank,
    
    -- 2. ดึงยอดขายของตนเองในเดือนก่อนหน้า (LAG)
    LAG(revenue) OVER (PARTITION BY sales_rep ORDER BY month_name) AS prev_month_revenue,
    
    -- 3. คำนวณยอดขายสะสมของแต่ละคน (Running Total)
    SUM(revenue) OVER (PARTITION BY sales_rep ORDER BY month_name) AS cumulative_revenue
FROM monthly_sales
ORDER BY sales_rep, month_name;`,
      challenge: "เขียนคำสั่ง SQL หาพนักงานที่มีเงินเดือนสูงสุด 2 อันดับแรกของแต่ละแผนก (ใช้ DENSE_RANK() ใน CTE แล้วกรอง WHERE rank <= 2)",
      quiz: [
        {
          question: "ความแตกต่างสำคัญที่สุดระหว่าง GROUP BY และ Window Function (OVER Clause) คืออะไร?",
          options: [
            "GROUP BY จะยุบรวมหลายแถวให้เหลือแถวเดียวต่อกลุ่ม แต่ Window Function คำนวณข้ามกลุ่มโดยยังคงจำนวนแถวไว้เท่าเดิม",
            "Window Function ใช้ได้เฉพาะกับตัวเลขเท่านั้น",
            "GROUP BY ทำงานเร็วกว่า Window Function เสมอ",
            "Window Function สามารถรันได้เฉพาะบน MySQL เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "GROUP BY จะ aggregate ข้อมูลและยุบแถวข้อมูลให้เหลือเพียง 1 แถวต่อกลุ่ม แต่ Window Function จะคงแถวเดิมไว้ทั้งหมดพร้อมทั้งแปะผลการคำนวณลงไปในแต่ละแถว"
        },
        {
          question: "หากมีคะแนนสอบเท่ากันในอันดับ 2 จำนวน 2 คน ฟังก์ชัน RANK() จะให้อันดับของคนที่ได้คะแนนถัดไปเป็นอันดับใด?",
          options: ["อันดับ 4 (ลำดับกระโดดข้าม: 1, 2, 2, 4)", "อันดับ 3 (1, 2, 2, 3)", "อันดับ 2.5", "อันดับ 1"],
          correctAnswer: 0,
          explanation: "ฟังก์ชัน RANK() จะข้ามลำดับเมื่อมีค่าซ้ำกัน (Tie) ดังนั้นเมื่อมีอันดับ 2 ซ้ำกันสองคน คนถัดไปจะได้อันดับ 4 (หากไม่ต้องการให้ข้ามลำดับต้องใช้ DENSE_RANK())"
        },
        {
          question: "ฟังก์ชันใดที่เหมาะที่สุดสำหรับการหายอดขายของเดือนก่อนหน้าเพื่อนำมาคำนวณอัตราการเติบโตเดือนต่อเดือน (Month-over-Month)?",
          options: ["LAG()", "LEAD()", "FIRST_VALUE()", "NTH_VALUE()"],
          correctAnswer: 0,
          explanation: "LAG(column) ช่วยดึงค่าของแถวก่อนหน้าตามลำดับที่ระบุไว้ใน ORDER BY จึงนิยมนำมาคำนวณการเปลี่ยนแปลงเปรียบเทียบกับช่วงเวลาก่อนหน้า"
        }
      ]
    },
    {
      id: "sql-5",
      title: "กลไก Indexing เชิงลึก, โครงสร้าง B-Tree และ Composite Indexes",
      description: "เรียนรู้ว่า Database หาข้อมูลเร็วได้อย่างไรผ่าน B-Tree Internals, Covering Indexes, Clustered vs Non-Clustered และ Index Leftmost Prefix Rule",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม Indexing และโครงสร้าง B-Tree

หากเปรียบตารางฐานข้อมูลเป็นหนังสือหนา 1,000 หน้า การทำ **Full Table Scan** คือการเปิดอ่านทีละหน้า ส่วน **Index** คือดัชนีท้ายเล่มที่ชี้ตรงไปยังหน้าที่ต้องการได้ในเสี้ยววินาที

## 1. โครงสร้าง Balanced Tree (B-Tree)
ดัชนีมาตรฐานของฐานข้อมูลเกือบทั้งหมดใช้โครงสร้างแบบ **B-Tree**:
- ความซับซ้อนในการค้นหาคือ **O(log N)**
- โครงสร้างประกอบด้วย Root Node, Internal Nodes และ Leaf Nodes
- Leaf Nodes เก็บ Key และ Pointer (TID หรือ Primary Key) ที่ชี้ไปยังแถวข้อมูลจริงบนฮาร์ดดิสก์ และถูกเชื่อมต่อกันเป็น Doubly Linked List ทำให้การค้นหาแบบช่วง (Range Scan เช่น BETWEEN หรือ >) ทำงานได้รวดเร็วมาก

## 2. Clustered vs Non-Clustered Index
- **Clustered Index (Index หลัก):** กำหนดลำดับการจัดเก็บบน Disk จริงๆ ตารางหนึ่งมีได้เพียงอันเดียว (มักเป็น Primary Key)
- **Non-Clustered Index (Secondary Index):** เก็บ Key แยกต่างหาก พร้อมตัวชี้ไปยัง Clustered Key

## 3. กฎ Leftmost Prefix ของ Composite Index (ดัชนีหลายคอลัมน์)
หากเราสร้าง Index \`(status, created_at, user_id)\`:
- ✅ \`WHERE status = 'PAID'\` -> ใช้ Index ได้
- ✅ \`WHERE status = 'PAID' AND created_at > '2024-01-01'\` -> ใช้ Index ได้
- ❌ \`WHERE created_at > '2024-01-01'\` -> **ใช้ Index ไม่ได้!** เพราะขาดคอลัมน์ซ้ายสุด (Leftmost Prefix Rule)

## 4. Covering Index (Index-Only Scan)
หากคอลัมน์ทั้งหมดที่อยู่ใน \`SELECT\` และ \`WHERE\` มีอยู่ใน Index ครบถ้วน SQL Engine จะดึงข้อมูลจากตัว Index ได้ทันทีโดยไม่ต้องกระโดดไปอ่านข้อมูลจริงบนตารางหลัก (ไม่ต้องทำ Table Lookup/Heap Fetch)`,
      codeExample: `-- การออกแบบ Indexing และการตรวจสอบ Leftmost Prefix Rule
CREATE TEMP TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_status VARCHAR(20),
    total_amount NUMERIC(10, 2),
    created_at TIMESTAMP
);

-- สร้าง Composite Index
CREATE INDEX idx_orders_status_date ON orders(order_status, created_at);

-- คำสั่งที่ใช้ Index ได้อย่างเต็มประสิทธิภาพ (Index Scan)
-- เพราะขึ้นต้นด้วย 'order_status' ตามกฎ Leftmost Prefix
EXPLAIN SELECT order_id, total_amount 
FROM orders 
WHERE order_status = 'COMPLETED' AND created_at >= '2024-01-01';

-- ข้อควรระวัง: การครอบฟังก์ชันบนคอลัมน์ Index จะทำให้ไม่สามารถใช้ Index ได้
-- ❌ DATE(created_at) = '2024-01-01' -> กลายเป็น Seq Scan
-- ✅ created_at >= '2024-01-01 00:00:00' AND created_at < '2024-01-02 00:00:00' -> ใช้ Index ได้`,
      challenge: "จงอธิบายว่าเหตุใดคำสั่ง WHERE UPPER(email) = 'TEST@GMAIL.COM' จึงไม่สามารถใช้งาน Index ปกติบนคอลัมน์ email ได้ และจะแก้ไขอย่างไรด้วย Expression Index",
      quiz: [
        {
          question: "เหตุใดการใส่ฟังก์ชันครอบคอลัมน์ใน WHERE เช่น WHERE YEAR(created_at) = 2024 จึงทำให้ SQL ทำงานช้าลง?",
          options: [
            "เพราะทำให้ SQL Engine ต้องรันฟังก์ชันกับทุกแถวในตาราง ไม่สามารถกระโดดค้นหาใน B-Tree Index ได้โดยตรง (SARGability สูญเสีย)",
            "เพราะฟังก์ชัน YEAR ทำงานได้เฉพาะกับภาษา C เท่านั้น",
            "เพราะคำสั่ง WHERE ห้ามใช้ฟังก์ชันเด็ดขาด",
            "เพราะฮาร์ดดิสก์จะหยุดทำงาน"
          ],
          correctAnswer: 0,
          explanation: "การใส่ฟังก์ชันครอบคอลัมน์ทำให้ Query กลายเป็น Non-SARGable (Search Argument Able) ส่งผลให้ตัว Query Planner ต้องอ่านข้อมูลทุกแถวมาประมวลผลฟังก์ชันแทนที่จะใช้ Index"
        },
        {
          question: "Covering Index หรือ Index-Only Scan มีประโยชน์สูงสุดอย่างไร?",
          options: [
            "สามารถคืนค่าผลลัพธ์ได้จากตัว Index ทันทีโดยไม่ต้องอ่านข้อมูลจากตารางหลัก (Heap) ลด I/O มหาศาล",
            "ลบข้อมูลที่ซ้ำกันทิ้งทันที",
            "เพิ่มขนาดหน่วยความจำ RAM ของเครื่องเซิร์ฟเวอร์",
            "แปลงตารางให้กลายเป็น View อัตโนมัติ"
          ],
          correctAnswer: 0,
          explanation: "เมื่อคอลัมน์ที่ต้องการทั้งหมดอยู่ในตัว Index แล้ว ฐานข้อมูลสามารถตอบคำถามได้จาก Leaf Page ของ Index ทันที ไม่ต้องเสียเวลา Lookup ไปยังตารางจริง (Table Access)"
        },
        {
          question: "หากสร้าง Index บนคอลัมน์ (A, B, C) คำสั่ง WHERE B = 10 AND C = 20 จะสามารถใช้ Index นี้ได้หรือไม่?",
          options: [
            "ใช้ไม่ได้อย่างสมบูรณ์ เพราะขาดคอลัมน์หน้าสุด 'A' ตามกฎ Leftmost Prefix Rule",
            "ใช้ได้เต็มประสิทธิภาพ 100%",
            "ใช้ได้เฉพาะบนฐานข้อมูล MySQL เท่านั้น",
            "ทำให้เกิด Syntax Error"
          ],
          correctAnswer: 0,
          explanation: "ตามกฎ Leftmost Prefix Rule ของ Composite Index B-Tree จะเรียงลำดับตามคอลัมน์แรกก่อน หากไม่มีเงื่อนไขของคอลัมน์แรก (A) จะไม่สามารถนำ Index ไปกระโดดหาข้อมูลได้"
        }
      ]
    },
    {
      id: "sql-6",
      title: "ทรานแซกชัน, คุณสมบัติ ACID และระดับการแยกตัว (MVCC & Isolation Levels)",
      description: "รักษาความสมบูรณ์ของข้อมูลด้วย Transactions: Atomicity, Consistency, Isolation, Durability พร้อมเจาะลึก Dirty Read, Non-Repeatable Read และ Phantom Read",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Transactions, ACID และ Multi-Version Concurrency Control (MVCC)

ในระบบการเงินและระบบที่มีการเข้าถึงข้อมูลพร้อมกันจำนวนมาก **Transaction** คือกลไกการันตีว่าข้อมูลจะถูกต้องแม่นยำ 100%

## 1. คุณสมบัติ 4 ประการของ ACID
- **A - Atomicity (ความแยกส่วนไม่ได้):** \"ทำทั้งหมด หรือไม่ทำเลย\" หากมีคำสั่งใดล้มเหลว คำสั่งก่อนหน้าทั้งหมดในบล็อกต้องถูก **ROLLBACK**
- **C - Consistency (ความสอดคล้อง):** ข้อมูลต้องไม่ขัดต่อกฎเกณฑ์ (Constraints, Foreign Keys)
- **I - Isolation (ความโดดเดี่ยว):** การทำงานพร้อมกันของทรานแซกชันหลายตัวต้องไม่รบกวนกัน
- **D - Durability (ความคงทนถาวร):** เมื่อคำสั่ง \`COMMIT\` สำเร็จ ข้อมูลจะต้องถูกบันทึกลงสื่อถาวร (Write-Ahead Log - WAL) ไม่สูญหายแม้ไฟดับ

## 2. ปัญหาความไม่สอดคล้องของการอ่านข้อมูลพร้อมกัน
1. **Dirty Read:** ทรานแซกชัน A อ่านข้อมูลที่ทรานแซกชัน B ยังไม่ได้ Commit (ถ้า B ทำการ Rollback ข้อมูลนั้นจะไม่เคยมีอยู่จริง)
2. **Non-Repeatable Read:** ทรานแซกชัน A อ่านข้อมูลแถวเดิม 2 ครั้ง แต่ได้ค่าไม่เท่ากันเพราะทรานแซกชัน B สั่ง \`UPDATE\` คั่นกลาง
3. **Phantom Read:** ทรานแซกชัน A สั่งนับจำนวนแถว 2 ครั้ง แต่ได้จำนวนแถวเพิ่มขึ้นเพราะทรานแซกชัน B สั่ง \`INSERT\` คั่นกลาง

## 3. Transaction Isolation Levels ตามมาตรฐาน ANSI SQL
| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read |
| :--- | :---: | :---: | :---: |
| **Read Uncommitted** | เกิดได้ | เกิดได้ | เกิดได้ |
| **Read Committed** (Default ส่วนใหญ่) | ❌ ป้องกัน | เกิดได้ | เกิดได้ |
| **Repeatable Read** | ❌ ป้องกัน | ❌ ป้องกัน | เกิดได้ (ในบาง Engine) |
| **Serializable** (เข้มงวดที่สุด) | ❌ ป้องกัน | ❌ ป้องกัน | ❌ ป้องกัน |`,
      codeExample: `-- การจำลอง Transaction การโอนเงินธนาคารแบบปลอดภัย
CREATE TEMP TABLE accounts (
    acc_id INT PRIMARY KEY,
    owner_name VARCHAR(50),
    balance NUMERIC(12, 2) CHECK (balance >= 0) -- Constraint ป้องกันเงินติดลบ
);

INSERT INTO accounts VALUES 
(1, 'Somchai', 5000.00),
(2, 'Kanda',   1200.00);

-- เริ่มต้น Transaction การโอนเงิน 1,500 บาท จาก Somchai ไป Kanda
BEGIN;

-- 1. หักเงินจากบัญชีต้นทาง พร้อมล็อกแถว (Row-level Locking)
UPDATE accounts 
SET balance = balance - 1500.00 
WHERE acc_id = 1;

-- 2. เพิ่มเงินเข้าบัญชีปลายทาง
UPDATE accounts 
SET balance = balance + 1500.00 
WHERE acc_id = 2;

-- ตรวจสอบความถูกต้องและ Commit
COMMIT;

SELECT * FROM accounts;`,
      challenge: "จงอธิบายกลไก Multi-Version Concurrency Control (MVCC) ใน PostgreSQL ว่าช่วยให้คำสั่ง SELECT อ่านข้อมูลได้โดยไม่ต้องล็อกและไม่ถูกบล็อกโดยคำสั่ง UPDATE ได้อย่างไร",
      quiz: [
        {
          question: "ปรากฏการณ์ Dirty Read เกิดขึ้นในสถานการณ์ใด?",
          options: [
            "เมื่อทรานแซกชันหนึ่งอ่านข้อมูลที่ถูกแก้ไขโดยอีกทรานแซกชันหนึ่งซึ่งยังไม่ได้ทำการ COMMIT",
            "เมื่อฮาร์ดดิสก์เกิด Bad Sector",
            "เมื่อลืมใส่ WHERE ในคำสั่ง DELETE",
            "เมื่อรันคำสั่ง SELECT พร้อมกันเกิน 100 คน"
          ],
          correctAnswer: 0,
          explanation: "Dirty Read คือการที่ Transaction A อ่านข้อมูลที่ Transaction B กำลังแก้ไขอยู่ แต่ B ยังไม่ได้ COMMIT หาก B สั่ง ROLLBACK ข้อมูลที่ A อ่านไปจะกลายเป็นข้อมูลขยะที่ไม่มีอยู่จริง"
        },
        {
          question: "ระดับ Transaction Isolation Level ใดที่ป้องกันทั้ง Dirty Read, Non-Repeatable Read และ Phantom Read ได้สมบูรณ์ที่สุด?",
          options: ["Serializable", "Repeatable Read", "Read Committed", "Read Uncommitted"],
          correctAnswer: 0,
          explanation: "Serializable คือระดับการแยกตัวที่เข้มงวดที่สุด โดยจำลองเสมือนว่าทรานแซกชันทำงานเรียงต่อกันทีละตัว ป้องกันปัญหาความไม่สอดคล้องทุกรูปแบบ"
        },
        {
          question: "กลไก Write-Ahead Logging (WAL) ในระบบฐานข้อมูลมีไว้เพื่อรับประกันคุณสมบัติข้อใดของ ACID?",
          options: ["Durability (ความคงทนถาวร)", "Atomicity", "Isolation", "Consistency"],
          correctAnswer: 0,
          explanation: "WAL จะบันทึกการเปลี่ยนแปลงลงใน Log File บนดิสก์ก่อนที่จะอัปเดตข้อมูลลง Data Page จริง เพื่อให้สามารถ Recovery ข้อมูลกลับมาได้เสมอแม้ไฟฟ้าดับทันที"
        }
      ]
    },
    {
      id: "sql-7",
      title: "Stored Procedures, User-Defined Functions (UDF) และ Triggers",
      description: "เขียน Procedural SQL (PL/pgSQL / T-SQL): ตัวแปร, Control Flow, การจัดการ Exceptions, Stored Procedures vs Functions และ Database Triggers สำหรับ Audit Log",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Stored Procedures, Functions และ Triggers

เมื่อระบบต้องการประมวลผลตรรกะที่ซับซ้อนภายในฐานข้อมูลโดยตรงเพื่อลด Round-trip ระหว่าง Web Server กับ Database เราจึงใช้ **Procedural SQL** (เช่น PL/pgSQL ใน PostgreSQL หรือ T-SQL ใน SQL Server)

## 1. Stored Procedure vs User-Defined Function (UDF)
- **Function (UDF):** ต้องมีค่าส่งกลับ (\`RETURNS\`) เสมอ, สามารถเรียกใช้ในคำสั่ง \`SELECT\` ได้, ไม่อนุญาตให้เปิด/ปิด Transaction ภายในตัวฟังก์ชัน
- **Stored Procedure:** เรียกใช้ผ่านคำสั่ง \`CALL procedure_name()\`, ไม่จำเป็นต้องคืนค่า, สามารถควบคุมทรานแซกชัน (\`COMMIT\` / \`ROLLBACK\`) ภายในตัวมันเองได้

## 2. Database Triggers
Trigger คือโค้ดที่ทำงานโดยอัตโนมัติเมื่อเกิดเหตุการณ์ (Events) เช่น \`BEFORE INSERT\`, \`AFTER UPDATE\`, หรือ \`AFTER DELETE\`
- นิยมใช้อย่างยิ่งสำหรับการทำ **Audit Trail** (บันทึกประวัติว่าใคร แก้ไขอะไร เมื่อไหร่)
- ภายใน Trigger จะมีตัวแปรพิเศษ:
  - \`OLD\`: เก็บค่าแถวก่อนแก้ไขหรือก่อนลบ
  - \`NEW\`: เก็บค่าแถวใหม่ที่กำลังจะเพิ่มหรืออัปเดต`,
      codeExample: `-- การสร้าง Function และ Trigger สำหรับบันทึกประวัติการเปลี่ยนแปลง (Audit Log)
CREATE TEMP TABLE user_accounts (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    balance NUMERIC(10, 2)
);

CREATE TEMP TABLE balance_audit_log (
    audit_id SERIAL PRIMARY KEY,
    user_id INT,
    old_balance NUMERIC(10, 2),
    new_balance NUMERIC(10, 2),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- สร้าง Trigger Function ใน PostgreSQL
CREATE OR REPLACE FUNCTION log_balance_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.balance != NEW.balance THEN
        INSERT INTO balance_audit_log (user_id, old_balance, new_balance)
        VALUES (OLD.user_id, OLD.balance, NEW.balance);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ผูก Trigger เข้ากับตาราง
CREATE TRIGGER trg_audit_balance
AFTER UPDATE ON user_accounts
FOR EACH ROW
EXECUTE FUNCTION log_balance_changes();

-- ทดสอบการทำงาน
INSERT INTO user_accounts (username, balance) VALUES ('Somchai', 2000.00);
UPDATE user_accounts SET balance = 2500.00 WHERE username = 'Somchai';

SELECT * FROM balance_audit_log;`,
      challenge: "สร้าง Trigger เพื่อป้องกันไม่ให้ผู้ใช้ลบข้อมูลในตาราง orders หากสถานะคำสั่งซื้อเป็น 'DELIVERED' (ให้โยนข้อผิดพลาด RAISE EXCEPTION)",
      quiz: [
        {
          question: "ความแตกต่างสำคัญระหว่าง Stored Procedure และ User-Defined Function (UDF) คือข้อใด?",
          options: [
            "Procedure สามารถควบคุม Transaction (COMMIT / ROLLBACK) ภายในตัวมันเองได้ แต่ Function ทำไม่ได้",
            "Function รันได้เฉพาะบน Windows เท่านั้น",
            "Procedure ไม่สามารถรับ Parameter ได้",
            "Function ไม่สามารถคำนวณตัวเลขได้"
          ],
          correctAnswer: 0,
          explanation: "Stored Procedure ออกแบบมาสำหรับงาน Business Process ที่สามารถสั่ง COMMIT หรือ ROLLBACK ภายในได้ แต่ Function ออกแบบมาสำหรับส่งค่ากลับและสามารถเรียกในคำสั่ง SELECT ได้"
        },
        {
          question: "ใน Trigger ที่ทำงานตอนเกิดเหตุการณ์ UPDATE ตัวแปร OLD และ NEW มีความหมายอย่างไร?",
          options: [
            "OLD เก็บค่าข้อมูลแถวก่อนการอัปเดต ส่วน NEW เก็บค่าข้อมูลใหม่ที่กำลังจะถูกบันทึก",
            "OLD คือชื่อตารางเก่า ส่วน NEW คือชื่อตารางใหม่",
            "OLD คือเวลาในอดีต ส่วน NEW คือเวลาปัจจุบัน",
            "ไม่มีความแตกต่างกัน"
          ],
          correctAnswer: 0,
          explanation: "ตัวแปรพิเศษ OLD เก็บสถานะของข้อมูลแถวนั้นก่อนถูกอัปเดต ส่วน NEW เก็บค่าใหม่ที่ถูกส่งเข้ามาอัปเดต"
        },
        {
          question: "เหตุใดจึงควรหลีกเลี่ยงการเขียน Business Logic ซับซ้อนจำนวนมากไว้ใน Triggers?",
          options: [
            "เพราะทำงานแบบซ่อนเร้น (Invisible Side-Effects) ตรวจสอบและดีบักได้ยาก และอาจทำให้ Performance ตกโดยไม่รู้ตัว",
            "เพราะ Trigger ทำให้ฮาร์ดดิสก์เต็มทันที",
            "เพราะ Trigger ไม่รองรับคำสั่ง SQL",
            "เพราะ Trigger ทำงานได้แค่เดือนละครั้ง"
          ],
          correctAnswer: 0,
          explanation: "Triggers ทำงานอยู่เบื้องหลังอย่างเงียบๆ ทำให้ยากต่อการติดตามข้อผิดพลาด และหากมีการกระตุ้น Trigger ต่อเนื่องเป็นลูกโซ่ (Cascading Triggers) จะทำให้ระบบช้าลงอย่างมาก"
        }
      ]
    },
    {
      id: "sql-8",
      title: "การปรับแต่งประสิทธิภาพและวิเคราะห์คิวรีด้วย EXPLAIN ANALYZE",
      description: "อ่าน Execution Plan ให้เป็น: Seq Scan vs Index Scan vs Bitmap Heap Scan, Nested Loop vs Hash Join, และการคำนวณ Cost เพื่อแก้ปัญหาคิวรีช้า",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การปรับแต่งประสิทธิภาพ (Query Tuning) ด้วย EXPLAIN ANALYZE

นักพัฒนา SQL ระดับสูงไม่ได้ตัดสินคำสั่งด้วยการที่มัน \"รันผ่านหรือไม่\" แต่ตัดสินด้วย **Execution Plan** และทรัพยากร CPU/Memory/Disk I/O ที่ใช้

## 1. คำสั่ง EXPLAIN vs EXPLAIN ANALYZE
- **EXPLAIN:** ให้ Cost-Based Optimizer (CBO) ประเมินแผนการทำงานและต้นทุน (Cost) โดย **ไม่ได้รันคำสั่งจริง**
- **EXPLAIN ANALYZE:** **รันคำสั่ง SQL จริง** พร้อมจับเวลาจริง (Actual Time) และจำนวนแถวที่เกิดขึ้นจริงเทียบกับที่ประเมิน

\`\`\`sql
EXPLAIN ANALYZE 
SELECT * FROM orders WHERE customer_id = 4500 AND status = 'SHIPPED';
\`\`\`

## 2. รูปแบบการอ่านข้อมูล (Scan Methods)
1. **Sequential Scan (Seq Scan):** อ่านข้อมูลตั้งแต่หน้าแรกจนถึงหน้าสุดท้าย เหมาะสำหรับตารางขนาดเล็ก หรือเมื่อผลลัพธ์ครอบคลุมข้อมูลส่วนใหญ่ของตาราง (> 20-30%)
2. **Index Scan:** ค้นหาตำแหน่งจาก B-Tree Index แล้วกระโดดไปอ่านแถวข้อมูลจริงทีละแถว เหมาะสำหรับการค้นหาแบบเฉพาะเจาะจง (Selective)
3. **Index Only Scan:** อ่านเฉพาะจาก B-Tree Index โดยไม่ต้องเปิดอ่านตารางจริงเลย (เร็วที่สุด)
4. **Bitmap Index Scan + Bitmap Heap Scan:** ค้นหาตำแหน่งจาก Index แล้วสร้าง Bitmap ในหน่วยความจำ จากนั้นเรียงลำดับตำแหน่ง Physical Block บน Disk แล้วอ่านพร้อมกันทีเดียว ลด Random I/O

## 3. รูปแบบการเชื่อมตาราง (Join Algorithms)
- **Nested Loop:** นำแต่ละแถวของตารางนอก วนลูปค้นหาในตารางใน (เหมาะเมื่อตารางหนึ่งมีขนาดเล็กและอีกตารางมี Index)
- **Hash Join:** สร้าง Hash Table ในหน่วยความจำจากตารางแรก แล้วนำตารางที่สองมาเทียบ (เหมาะสำหรับตารางขนาดใหญ่ที่ไม่มี Index)
- **Merge Join:** เรียงลำดับทั้งสองตารางตามคีย์การเชื่อม แล้วสแกนไปพร้อมๆ กัน (เร็วมากหากข้อมูลถูก Index เรียงลำดับไว้แล้ว)`,
      codeExample: `-- การวิเคราะห์ Execution Plan ด้วย EXPLAIN
CREATE TEMP TABLE customers_perf (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    country VARCHAR(50)
);

CREATE TEMP TABLE orders_perf (
    order_id INT PRIMARY KEY,
    customer_id INT,
    amount NUMERIC(10, 2)
);

-- ใส่ข้อมูลจำลอง
INSERT INTO customers_perf VALUES (1, 'Somchai', 'TH'), (2, 'John', 'US'), (3, 'Tanaka', 'JP');
INSERT INTO orders_perf VALUES (101, 1, 500), (102, 1, 1500), (103, 2, 800);

-- วิเคราะห์แผนการสืบค้นข้อมูล
EXPLAIN
SELECT 
    c.name,
    c.country,
    o.amount
FROM customers_perf c
JOIN orders_perf o ON c.id = o.customer_id
WHERE c.country = 'TH';`,
      challenge: "จงอธิบายความแตกต่างระหว่าง actual time และ cost ในผลลัพธ์ของ EXPLAIN ANALYZE ใน PostgreSQL",
      quiz: [
        {
          question: "เหตุใดในบางกรณีที่มี Index อยู่แล้ว แต่ Query Optimizer กลับเลือกทำ Sequential Scan (Seq Scan)?",
          options: [
            "เมื่อข้อมูลในตารางมีขนาดเล็กมาก หรือเงื่อนไขนั้นคืนค่าข้อมูลส่วนใหญ่ของตาราง ทำให้การอ่านเรียงแถวตามลำดับเร็วกว่า Random I/O",
            "เพราะ Index เกิดความเสียหาย",
            "เพราะคำสั่ง SQL มีข้อผิดพลาดทางไวยากรณ์",
            "เพราะเครื่องคอมพิวเตอร์ร้อนเกินไป"
          ],
          correctAnswer: 0,
          explanation: "Query Optimizer จะคำนวณต้นทุน หากตารางมีขนาดเล็ก (เช่น ไม่กี่ร้อยแถว) หรือเงื่อนไขกรองข้อมูลออกมามากกว่า 20-30% ของตาราง การอ่านแบบ Sequential Scan จะมีต้นทุนต่ำกว่าการกระโดดอ่าน Index สลับกับ Data Block"
        },
        {
          question: "คำสั่งใดใช้รันคำสั่ง SQL จริงและแสดงเวลาที่ใช้ประมวลผลจริงในแต่ละโหนดของ Execution Plan?",
          options: ["EXPLAIN ANALYZE", "EXPLAIN ESTIMATE", "PLAN SHOW", "CHECK QUERY"],
          correctAnswer: 0,
          explanation: "EXPLAIN ANALYZE จะสั่งให้ Database ทำการประมวลผลคำสั่งจริง และวัดเวลาจริง (Actual Time) พร้อมจำนวนแถวที่เกิดขึ้นจริงในแต่ละขั้นตอนของแผนการทำงาน"
        },
        {
          question: "Join Algorithm ชนิดใดที่เหมาะที่สุดเมื่อเชื่อมตารางขนาดเล็กมากๆ กับตารางขนาดใหญ่ที่มี Index อยู่บน Join Key?",
          options: ["Nested Loop Join", "Hash Join", "Merge Join", "Cartesian Join"],
          correctAnswer: 0,
          explanation: "Nested Loop Join เหมาะอย่างยิ่งเมื่อตารางตั้งต้นมีจำนวนแถวน้อย และอีกตารางหนึ่งมี Index ทำให้สามารถค้นหาแถวคู่ของมันได้ในระดับ O(log N) อย่างรวดเร็ว"
        }
      ]
    },
    {
      id: "sql-9",
      title: "Analytical SQL สมัยใหม่ (ROLLUP, CUBE, PIVOT) และ JSON / Semi-Structured Data",
      description: "สร้างรายงานสถิติแบบหลายมิติด้วย ROLLUP, CUBE, การแปลงแถวเป็นคอลัมน์ (Pivoting), และการจัดการข้อมูล JSON / JSONB ในฐานข้อมูล SQL ยุคใหม่",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Modern Analytical SQL และการจัดการ Semi-Structured JSON

ในยุคของ Big Data และ Analytics ภาษา SQL ได้พัฒนาขยายขอบเขตจากเพียงแค่ตารางธรรมดา สู่การประมวลผลข้อมูลสถิติหลายมิติ (OLAP) และการประมวลผลข้อมูลแบบ **Semi-Structured JSON**

## 1. ROLLUP และ CUBE สำหรับสร้างสรุปยอดขายหลายมิติ
- **GROUP BY ROLLUP (year, region):** สร้างผลรวมย่อยตามลำดับขั้น (Subtotals) เช่น ยอดรวมรายเขต, ยอดรวมรายปี, และยอดรวมสุทธิทั้งบริษัท (Grand Total)
- **GROUP BY CUBE (year, region):** สร้างผลรวมทุกมิติที่เป็นไปได้ทั้งหมด ($2^N$ combinations)

\`\`\`sql
SELECT 
    COALESCE(year::TEXT, 'ทุกปี') AS year,
    COALESCE(region, 'ทุกภูมิภาค') AS region,
    SUM(sales_amount) AS total_sales
FROM sales_data
GROUP BY ROLLUP (year, region)
ORDER BY year, region;
\`\`\`

## 2. การจัดการข้อมูล JSON และ JSONB ใน PostgreSQL
PostgreSQL มีชนิดข้อมูล **JSONB** (Binary JSON) ที่ถูกจัดเก็บแบบ Indexable และมีประสิทธิภาพสูง:
\`\`\`sql
-- สร้างตารางที่มีฟิลด์ JSONB
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    payload JSONB
);

-- ค้นหาข้อมูลข้างใน JSON ด้วย Operator -> และ ->>
SELECT 
    id, 
    payload->>'user_id' AS user_id,
    payload->'location'->>'city' AS city
FROM events
WHERE payload @> '{"status": "active"}'; -- ใช้ GIN Index ได้!
\`\`\`

## 3. การทำ GIN Index บนคอลัมน์ JSONB
\`\`\`sql
CREATE INDEX idx_events_payload ON events USING GIN (payload);
\`\`\`
ดัชนีแบบ **GIN (Generalized Inverted Index)** ช่วยให้การค้นหา Key-Value ภายใน JSONB ที่มีโครงสร้างยืดหยุ่น ทำงานได้รวดเร็วในระดับมิลลิวินาที`,
      codeExample: `-- การประยุกต์ใช้ JSONB และ GIN Indexing ใน PostgreSQL
CREATE TEMP TABLE user_logs (
    log_id SERIAL PRIMARY KEY,
    action_name VARCHAR(50),
    metadata JSONB
);

INSERT INTO user_logs (action_name, metadata) VALUES
('LOGIN', '{"device": "mobile", "os": "iOS", "version": "17.4", "ip": "192.168.1.10"}'),
('PURCHASE', '{"device": "desktop", "os": "macOS", "cart_items": 3, "total_thb": 4500}'),
('LOGIN', '{"device": "desktop", "os": "Windows", "browser": "Chrome", "ip": "192.168.1.15"}');

-- 1. ดึงข้อมูลจากฟิลด์ใน JSON ด้วย Operator ->> (คืนค่าเป็น Text)
SELECT 
    log_id,
    action_name,
    metadata->>'device' AS device_type,
    metadata->>'os' AS operating_system
FROM user_logs;

-- 2. ค้นหาแถวที่มี JSON ตรงตามรูปแบบด้วย Containment Operator (@>)
SELECT 
    log_id,
    action_name,
    metadata
FROM user_logs
WHERE metadata @> '{"device": "desktop"}';`,
      challenge: "เขียนคำสั่ง SQL ที่ใช้ GROUP BY ROLLUP เพื่อหายอดรวมคำสั่งซื้อแยกตามปี และแยกตามหมวดหมู่สินค้า พร้อมแสดงแถวผลรวมทั้งสิ้น (Grand Total)",
      quiz: [
        {
          question: "GROUP BY ROLLUP(A, B) จะคำนวณผลรวมย่อย (Subtotals) ออกมาในรูปแบบใดบ้าง?",
          options: [
            "(A, B), (A), และ () ผลรวมทั้งหมด Grand Total",
            "เฉพาะ (A, B) เท่านั้น",
            "เฉพาะ (A) และ (B) เท่านั้น",
            "ไม่มีการคำนวณผลรวมย่อย"
          ],
          correctAnswer: 0,
          explanation: "ROLLUP จะสร้างผลรวมตามลำดับชั้นจากซ้ายไปขวา ได้แก่: ผลรวมรายกลุ่มคู่ (A, B), ผลรวมย่อยของกลุ่มหลัก (A), และผลรวมทั้งหมดของทั้งตาราง ()"
        },
        {
          question: "ใน PostgreSQL ความแตกต่างระหว่างชนิดข้อมูล JSON และ JSONB คืออะไร?",
          options: [
            "JSON เก็บเป็นข้อความธรรมดา ส่วน JSONB แปลงเป็น Binary มีการตัดช่องว่าง เรียงคีย์ และรองรับการทำ Indexing แบบ GIN ได้อย่างรวดเร็ว",
            "JSONB เก็บข้อมูลได้เฉพาะตัวเลขเท่านั้น",
            "JSON ทำงานเร็วกว่า JSONB เสมอ",
            "ทั้งคู่เป็นชนิดข้อมูลเดียวกัน ไม่มีความแตกต่าง"
          ],
          correctAnswer: 0,
          explanation: "JSONB ถูกจัดเก็บในรูปแบบไบนารีที่ถูก parse ล่วงหน้าแล้ว ทำให้เขียนช้ากว่าเล็กน้อยตอนบันทึก แต่มีประสิทธิภาพในการอ่านและสืบค้นเร็วกว่ามาก รวมทั้งสามารถสร้าง GIN Index ได้"
        },
        {
          question: "เครื่องหมาย Operator ใดใน PostgreSQL ใช้สำหรับตรวจสอบว่าข้อมูล JSONB มี Key หรือ Object ที่ระบุครอบคลุมอยู่หรือไม่ (Containment)?",
          options: ["@>", "->", "->>", "##"],
          correctAnswer: 0,
          explanation: "Operator @> (Contains) ใช้ตรวจสอบว่า JSONB ฝั่งซ้ายครอบคลุมโครงสร้าง JSONB ฝั่งขวาหรือไม่ และเป็น Operator สำคัญที่สามารถใช้ประโยชน์จาก GIN Index ได้"
        }
      ]
    }
  ]
};
