import { Course } from "../types";

export const webdevCourse: Course = {
  id: "webdev",
  title: "Web Development",
  description: "สร้างเว็บไซต์ตั้งแต่พื้นฐาน HTML/CSS/JS จนถึง Full-Stack Next.js 14 และระบบ E-Commerce ร้านค้าออนไลน์",
  longDescription: "หลักสูตรพัฒนาเว็บไซต์ที่ครบถ้วนที่สุดสำหรับนักเรียนสาย IT เริ่มต้นตั้งแต่การวางโครงสร้างเว็บที่ถูกต้องตามมาตรฐาน W3C, การจัดเลย์เอาต์หน้าจอด้วย Modern CSS & Tailwind, การเขียนตรรกะโปรแกรมด้วย JavaScript สมัยใหม่ (ES6+), การสร้างคอมโพเนนต์ด้วย React, จนถึงการพัฒนา Full-Stack Web Application ด้วย Next.js 14 และการเชื่อมต่อฐานข้อมูล",
  icon: "🖥️",
  color: "orange",
  gradient: "from-orange-500 to-amber-600",
  totalLessons: 9,
  difficulty: "เริ่มต้น",
  tags: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Full-Stack"],
  recommendedTools: [
    {
      name: "Visual Studio Code (VS Code)",
      icon: "💻",
      badge: "Industry Standard IDE",
      description: "โปรแกรมแก้ไขโค้ดที่นักพัฒนาเว็บทั่วโลกนิยมที่สุด มีระบบ Extension ecosystem ขนาดใหญ่ แนะนำติดตั้งส่วนเสริม: Live Server, Prettier, Tailwind CSS IntelliSense, ES7+ React Snippets",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง VS Code\n2. ไปที่ Extensions (Ctrl+Shift+X) ค้นหาและติดตั้ง 'Live Server' และ 'Prettier - Code formatter'\n3. เปิด File > Open Folder เพื่อเริ่มเขียนโปรเจกต์"
    },
    {
      name: "Google Chrome DevTools",
      icon: "🔍",
      badge: "Built-in Browser Tool",
      description: "เครื่องมือดีบักเว็บไซต์ในตัวเบราว์เซอร์ ใช้ตรวจสอบ Element, แก้ไข CSS สดๆ, ดู Console log, ตรวจสอบ Network request และวัดประสิทธิภาพ Core Web Vitals (LCP, FID)",
      downloadUrl: "https://www.google.com/chrome/",
      setupGuide: "1. เปิดหน้าเว็บใน Chrome\n2. กดปุ่ม F12 หรือคลิกขวาเลือก 'Inspect (ตรวจสอบ)'\n3. ใช้แท็บ Elements เพื่อดู HTML/CSS, แท็บ Console เพื่อทดลองรัน JavaScript, และแท็บ Network เพื่อดูการเรียก API"
    },
    {
      name: "Node.js & npm",
      icon: "📦",
      badge: "Runtime Environment",
      description: "สภาพแวดล้อมรัน JavaScript นอกเบราว์เซอร์ พร้อมตัวจัดการแพ็กเกจ npm เพื่อติดตั้งเฟรมเวิร์กอย่าง React, Next.js, Vite และ Tailwind CSS",
      downloadUrl: "https://nodejs.org/",
      setupGuide: "1. ดาวน์โหลดเวอร์ชัน LTS จากเว็บไซต์อย่างเป็นทางการ\n2. ติดตั้งตามขั้นตอนจนเสร็จ\n3. เปิด Terminal ตรวจสอบด้วยคำสั่ง: node -v และ npm -v"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "web-1",
      title: "Semantic HTML5, โครงสร้างเว็บมาตรฐาน และ SEO เบื้องต้น",
      description: "เขียน HTML5 อย่างถูกต้องตามหลัก Semantic Web เพื่อรองรับ SEO และการเข้าถึง Accessibility",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# โครงสร้างเว็บมาตรฐานด้วย Semantic HTML5

การเขียน HTML ที่ดีไม่ใช่เพียงแค่การนำแท็ก \`<div>\` มาซ้อนกันไปเรื่อยๆ แต่เป็นการเลือกใช้แท็กที่มี **ความหมายเชิงบริบท (Semantic)** เพื่อให้ Web Browser, Search Engine (Google), และ Screen Reader สำหรับผู้พิการเข้าใจโครงสร้างของเนื้อหาได้อย่างแม่นยำ

## โครงสร้างหน้าเว็บหลัก (Semantic Layout)
- \`<header>\`: ส่วนหัวของเว็บไซต์หรือบทความ มักมีโลโก้และชื่อเว็บ
- \`<nav>\`: แถบเมนูนำทางหลัก (Navigation Links)
- \`<main>\`: เนื้อหาหลักที่มีเพียงหนึ่งเดียวในหน้านั้นๆ
- \`<article>\`: เนื้อหาที่มีความสมบูรณ์ในตัวเอง สามารถนำไปแชร์ต่อได้ (เช่น โพสต์ข่าว, สินค้า)
- \`<section>\`: ส่วนของเนื้อหาที่แบ่งเป็นตอนๆ ภายใต้หัวข้อเดียวกัน
- \`<aside>\`: ข้อมูลเสริมด้านข้าง เช่น ข่าวเด่น, ลิงก์ที่เกี่ยวข้อง
- \`<footer>\`: ส่วนล่างสุด ลิขสิทธิ์ ข้อมูลติดต่อ และลิงก์นโยบาย

## แท็กสำหรับ Search Engine Optimization (SEO)
- \`<title>\`: ชื่อหน้าเว็บที่แสดงบนแท็บบราวเซอร์และผลการค้นหาของ Google
- \`<meta name="description" content="...">\`: คำอธิบายย่อที่แสดงใต้ชื่อเว็บในหน้าค้นหา
- \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`: จำเป็นสำหรับ Responsive Web Design`,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>วิทยาลัยเทคนิค - สาขาวิชาเทคโนโลยีสารสนเทศ</title>
</head>
<body>
  <header>
    <h1>IT Academy College</h1>
    <nav>
      <ul>
        <li><a href="#about">เกี่ยวกับเรา</a></li>
        <li><a href="#courses">หลักสูตร</a></li>
        <li><a href="#contact">ติดต่อเรา</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2568</h2>
      <p>สาขาวิชาเทคโนโลยีสารสนเทศ มุ่งเน้นการลงมือปฏิบัติจริง ทั้งด้าน IoT, Network, และ Web Application</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2024 IT Academy. สงวนลิขสิทธิ์</p>
  </footer>
</body>
</html>`,
        description: "โครงสร้าง Semantic HTML5 ที่สมบูรณ์แบบและถูกต้องตามหลัก SEO"
      },
      quiz: [
        { id: "web-1-q1", question: "แท็ก Semantic HTML5 ใดเหมาะที่สุดสำหรับครอบลิงก์เมนูนำทางหลักของเว็บไซต์?", options: ["<menu>", "<nav>", "<links>", "<navbar>"], correctAnswer: 1, explanation: "<nav> (Navigation) ออกแบบมาสำหรับครอบกลุ่มลิงก์นำทางของเว็บไซต์โดยเฉพาะ" }
      ]
    },
    {
      id: "web-2",
      title: "Modern CSS3: Flexbox, CSS Grid และการออกแบบ Responsive",
      description: "จัดเลย์เอาต์หน้าจอด้วย Flexbox และ Grid แบบ 2 มิติ พร้อม Media Queries สำหรับมือถือและแท็บเล็ต",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# การจัดระเบียบหน้าเว็บด้วย Modern CSS3

หมดยุคของการใช้ \`float\` หรือ \`table\` ในการจัดหน้าเว็บ วันนี้นักพัฒนาใช้ **CSS Flexbox** และ **CSS Grid** ซึ่งทรงพลัง ยืดหยุ่น และทำงานได้ดีบนทุกขนาดหน้าจอ

## 1. CSS Flexbox (การจัดวางแบบ 1 มิติ)
เหมาะสำหรับการจัดเรียงสิ่งต่างๆ ในแนวเส้นตรงเส้นเดียว (แถวแนวนอน Row หรือ คอลัมน์แนวตั้ง Column) เช่น แถบ Navbar, แถวปุ่มกด, หรือการจัดสิ่งของให้อยู่ตรงกลางจอพอดี
- \`display: flex;\`
- \`justify-content: center | space-between | space-around;\` (แนวแกนหลัก)
- \`align-items: center;\` (แนวแกนตัด)
- \`gap: 1rem;\` (ระยะห่างระหว่างลูกๆ)

## 2. CSS Grid (การจัดวางแบบ 2 มิติ)
เหมาะสำหรับการวางโครงสร้างทั้งหน้าเว็บที่มีทั้งแถวและคอลัมน์ตัดกัน เช่น หน้ารายการสินค้า 3x3 ช่อง
- \`display: grid;\`
- \`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\` (ย่อ-ขยายคอลัมน์ตามความกว้างหน้าจออัตโนมัติ!)`,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html>
<head>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #0f172a;
    color: white;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
  }
  .card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    transition: transform 0.2s;
  }
  .card:hover { transform: translateY(-4px); }
</style>
</head>
<body style="background: #f8fafc;">
  <nav class="navbar">
    <h2>IT Store</h2>
    <div>หน้าแรก | สินค้า | ตะกร้า (0)</div>
  </nav>
  <div class="grid-container">
    <div class="card"><h3>บอร์ด Arduino UNO</h3><p>ราคา 350 บาท</p></div>
    <div class="card"><h3>บอร์ด ESP32 Wi-Fi</h3><p>ราคา 180 บาท</p></div>
    <div class="card"><h3>สาย LAN Cat6 10m</h3><p>ราคา 120 บาท</p></div>
    <div class="card"><h3>เซนเซอร์ DHT22</h3><p>ราคา 90 บาท</p></div>
  </div>
</body>
</html>`,
        description: "ตัวอย่างการผสมผสาน Flexbox ในส่วนของแถบเมนู และ Grid ในส่วนของการแสดงการ์ดสินค้า"
      },
      quiz: [
        { id: "web-2-q1", question: "หากต้องการจัดกล่องสี่เหลี่ยมให้อยู่ตรงกึ่งกลางหน้าจอพอดีทั้งแนวตั้งและแนวนอนด้วย Flexbox ต้องใช้คู่คำสั่งใด?", options: ["justify-content: center; align-items: center;", "text-align: center; vertical-align: middle;", "float: center; margin: auto;", "position: center;"], correctAnswer: 0, explanation: "ใน Flexbox การใช้ justify-content: center และ align-items: center ร่วมกันจะจัดวัตถุไว้กึ่งกลางพอดีทั้งสองแกน" }
      ]
    },
    {
      id: "web-3",
      title: "JavaScript Core: ตัวแปร ฟังก์ชัน Scope และ DOM Manipulation",
      description: "ทำความเข้าใจ let/const, Arrow Functions, Template Literals, และการโต้ตอบกับหน้าเว็บผ่าน DOM Events",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# พื้นฐาน JavaScript สำหรับงาน Frontend

JavaScript คือภาษาโปรแกรมมิ่งเดียวที่เว็บเบราว์เซอร์ประมวลผลได้ เป็นหัวใจสำคัญที่ทำให้หน้าเว็บตอบสนองต่อผู้ใช้งาน (Interactive)

## 1. การประกาศตัวแปร
- \`const\`: ประกาศค่าคงที่ ไม่สามารถกำหนดค่าใหม่ได้ (แนะนำให้ใช้เป็นค่าเริ่มต้นเสมอ)
- \`let\`: ประกาศตัวแปรที่สามารถเปลี่ยนค่าได้ภายหลัง และมี Block Scope
- *หลีกเลี่ยงการใช้ \`var\`* เนื่องจากมีปัญหาเรื่อง Hoisting และ Function Scope

## 2. ฟังก์ชันลูกศร (Arrow Function)
\`\`\`javascript
// ฟังก์ชันแบบดั้งเดิม
function add(a, b) { return a + b; }

// Arrow function (กระชับและสั้นกว่า)
const add = (a, b) => a + b;
\`\`\`

## 3. การควบคุม DOM (Document Object Model)
- \`document.querySelector('#id' หรือ '.class')\`: ค้นหา Element ในหน้าเว็บ
- \`element.addEventListener('click', () => { ... })\`: ดักจับเหตุการณ์การคลิก`,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html>
<body>
  <h2>รายการสินค้าของฉัน</h2>
  <input type="text" id="itemInput" placeholder="พิมพ์ชื่อสินค้า...">
  <button id="addBtn">เพิ่มสินค้า</button>
  <ul id="itemList" style="margin-top: 1rem;"></ul>

  <script>
    const input = document.querySelector('#itemInput');
    const addBtn = document.querySelector('#addBtn');
    const list = document.querySelector('#itemList');

    addBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (text === '') return;

      const li = document.createElement('li');
      li.innerHTML = \`\${text} <button style="color:red;" onclick="this.parentElement.remove()">ลบ</button>\`;
      list.appendChild(li);
      input.value = '';
    });
  </script>
</body>
</html>`,
        description: "โปรแกรมเพิ่มและลบรายการสินค้าแบบไดนามิกด้วย JavaScript DOM Manipulation"
      },
      quiz: [
        { id: "web-3-q1", question: "เหตุใดจึงควรใช้ const ในการประกาศตัวแปรมากกว่า var?", options: ["ทำให้โปรแกรมเร็วกว่า 10 เท่า", "ป้องกันการเขียนทับค่าโดยไม่ตั้งใจ และมี Block Scope ที่ชัดเจน", "ทำให้เปิดในมือถือได้", "const รองรับเฉพาะตัวเลขเท่านั้น"], correctAnswer: 1, explanation: "const ช่วยป้องกันบั๊กจากการถูก Re-assign ค่า และเคารพขอบเขตบล็อกคำสั่ง (Block Scope)" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "web-4",
      title: "Modern JavaScript (ES6+): Asynchronous, Promises และ Fetch API",
      description: "เรียนรู้ Event Loop, Promise, async/await, การเรียกดูข้อมูลจาก REST API และการจัดการข้อผิดพลาดด้วย try/catch",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การประมวลผลแบบอะซิงโครนัส (Asynchronous JavaScript)

JavaScript ทำงานแบบ **Single-threaded** หากเราดาวน์โหลดข้อมูลขนาดใหญ่โดยใช้วิธีซิงโครนัสปกติ หน้าเว็บจะค้างทันที ดังนั้นงานที่ต้องรอเวลา (เช่น เรียก API, รอโหลดรูป) จึงต้องใช้การทำงานแบบ Asynchronous

## วิวัฒนาการของการรอรับข้อมูล
1. **Callbacks:** โค้ดซ้อนกันหลายชั้นจนเกิด Callback Hell
2. **Promises:** ใช้ \`.then()\` และ \`.catch()\`
3. **Async / Await (มาตรฐานปัจจุบัน):** ทำให้โค้ด Asynchronous อ่านง่ายเหมือนโค้ด Synchronous ธรรมดา`,
      codeExample: {
        language: "javascript",
        code: `// การเรียกข้อมูลจาก REST API ด้วย async/await
async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=3');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log("ได้รับข้อมูลสินค้าทั้งหมด:", data.products);
    
    data.products.forEach(p => {
      console.log(\`สินค้า: \${p.title} | ราคา: \$\${p.price}\`);
    });
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error.message);
  }
}

fetchProducts();`,
        description: "การดึงข้อมูลจากอินเทอร์เน็ตด้วย Fetch API ร่วมกับ try/catch block"
      },
      quiz: [
        { id: "web-4-q1", question: "คำสั่ง await จะสามารถใช้งานได้เฉพาะภายในฟังก์ชันประเภทใดเท่านั้น?", options: ["ฟังก์ชันทั่วไป (Normal function)", "ฟังก์ชัน async", "ฟังก์ชัน constructor", "ฟังก์ชัน recursive"], correctAnswer: 1, explanation: "คำสำคัญ await ต้องอยู่ภายในฟังก์ชันที่ประกาศนำหน้าด้วย async เสมอ" }
      ]
    },
    {
      id: "web-5",
      title: "Tailwind CSS: สถาปัตยกรรม Utility-First สำหรับเว็บสมัยใหม่",
      description: "ตกแต่งหน้าเว็บระดับมืออาชีพโดยไม่ต้องเขียนไฟล์ CSS แยก ด้วยคลาส Utility, Dark mode, และ Responsive prefix",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# ปฏิวัติการเขียนสไตล์ด้วย Tailwind CSS

**Tailwind CSS** เป็น CSS Framework ยอดนิยมอันดับ 1 ของโลก ที่ใช้แนวคิด **Utility-First** แทนที่จะต้องคิดชื่อคลาสใหม่ เช่น \`.header-profile-box\` เราสามารถผสมคลาสขนาดเล็ก (Utilities) เข้าด้วยกันได้ทันที

## ข้อดีของ Tailwind CSS
- **ไม่ต้องสลับไฟล์:** แต่งสไตล์ใน JSX หรือ HTML ได้โดยตรง
- **ขนาดไฟล์เล็กมากเมื่อ Build:** ระบบ PurgeCSS จะลบคลาสที่ไม่ได้ใช้ออกทั้งหมด
- **Responsive ง่ายนิดเดียว:** ใช้ Prefix เช่น \`md:flex\`, \`lg:grid-cols-4\`
- **Dark Mode ในตัว:** เพียงใส่ \`dark:bg-slate-900 dark:text-white\``,
      codeExample: {
        language: "html",
        code: `<!-- การ์ดโปรไฟล์ที่สร้างด้วย Tailwind CSS พร้อม Dark Mode -->
<div class="max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 p-6 transition-all hover:scale-105">
  <div class="flex items-center space-x-4">
    <div class="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl">
      IT
    </div>
    <div>
      <h3 class="text-lg font-bold text-slate-900 dark:text-white">สมชาย สายโค้ด</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400">นักเรียนแผนกเทคโนโลยีสารสนเทศ</p>
    </div>
  </div>
  <div class="mt-4 flex gap-2">
    <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">Frontend</span>
    <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">React</span>
  </div>
</div>`,
        description: "ตัวอย่างการเขียน Tailwind CSS ที่รองรับทั้ง Dark Mode และเอฟเฟกต์แอนิเมชัน"
      },
      quiz: [
        { id: "web-5-q1", question: "ใน Tailwind CSS คลาสใดใช้สำหรับกำหนดให้กล่องแสดงผลเมื่อหน้าจอมีความกว้างระดับ Medium ขึ้นไป (แท็บเล็ต/คอมพิวเตอร์)?", options: ["tablet:flex", "media-md:flex", "md:flex", "@screen-md"], correctAnswer: 2, explanation: "Tailwind ใช้ Responsive Prefixes เช่น sm:, md:, lg:, xl: ในการคุมเงื่อนไขขนาดหน้าจอ" }
      ]
    },
    {
      id: "web-6",
      title: "การพัฒนาเว็บแอปพลิเคชันด้วย React.js (Components, State, Hooks)",
      description: "ทำความเข้าใจ Virtual DOM, Functional Components, useState, useEffect, และการจัดการแบบฟอร์ม",
      duration: "65 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม React.js สำหรับนักพัฒนา

React คือไลบรารียอดนิยมของ Meta สำหรับการสร้าง User Interface แบบ **Single Page Application (SPA)** โดยไม่ต้องรีเฟรชหน้าจอทั้งหน้า

## แนวคิดหลักของ React
1. **Component-Based:** แบ่งหน้าจอออกเป็นชิ้นส่วนย่อยๆ ที่นำกลับมาใช้ซ้ำได้ (Reusable)
2. **Declarative UI:** เราบอกว่า UI ควรมีหน้าตาอย่างไรตาม **State** เมื่อ State เปลี่ยน React จะอัปเดตหน้าจอให้เองผ่าน **Virtual DOM**
3. **Hooks สำคัญ:**
   - \`useState\`: เก็บและอัปเดตสถานะของคอมโพเนนต์
   - \`useEffect\`: ทำงาน Side Effect เช่น เรียก API เมื่อเปิดหน้าเว็บ หรือติดตามการเปลี่ยนค่า`,
      codeExample: {
        language: "javascript",
        code: `import React, { useState, useEffect } from 'react';

export default function ProductCounter() {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const PRICE_PER_ITEM = 250;

  // คำนวณราคารวมทุกครั้งที่ count เปลี่ยน
  useEffect(() => {
    setTotal(count * PRICE_PER_ITEM);
  }, [count]);

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">สั่งซื้อสาย LAN Cat6</h2>
      <p className="text-gray-400">ราคาชิ้นละ: {PRICE_PER_ITEM} บาท</p>
      
      <div className="flex items-center gap-4 my-4">
        <button 
          onClick={() => setCount(Math.max(1, count - 1))}
          className="px-3 py-1 bg-red-500 rounded font-bold"
        >-</button>
        <span className="text-2xl font-bold">{count}</span>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-green-500 rounded font-bold"
        >+</button>
      </div>
      
      <p className="text-xl font-bold text-teal-400">ราคาสุทธิ: {total} บาท</p>
    </div>
  );
}`,
        description: "คอมโพเนนต์ React คำนวณราคาสินค้าด้วย useState และ useEffect"
      },
      quiz: [
        { id: "web-6-q1", question: "ใน React เมื่อค่าของ State ที่กำหนดด้วย useState มีการเปลี่ยนแปลง จะเกิดอะไรขึ้น?", options: ["หน้าเว็บจะทำการ Reload ทั้งหน้า", "React จะทำการ Re-render คอมโพเนนต์นั้นและอัปเดตเฉพาะส่วนที่เปลี่ยนบนหน้าจอจริง", "ข้อมูลในฐานข้อมูลจะถูกลบ", "ไม่มีอะไรเกิดขึ้น"], correctAnswer: 1, explanation: "เมื่อ State เปลี่ยน React จะเปรียบเทียบ Virtual DOM และ Re-render เฉพาะ Element ที่เปลี่ยนไปอย่างมีประสิทธิภาพ" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "web-7",
      title: "Full-Stack Next.js 14: App Router, Server Components & Server Actions",
      description: "ก้าวสู่ Full-Stack ด้วย Next.js 14 App Router, Server-Side Rendering (SSR), Static Generation (SSG), และ Server Actions แทนการเขียน Express แยก",
      duration: "70 นาที",
      level: "ขั้นสูง",
      content: `# Next.js 14: เฟรมเวิร์ก Full-Stack มาตรฐานระดับโลก

Next.js 14 นำเสนอสถาปัตยกรรม **App Router** ซึ่งรวม Frontend และ Backend เข้าไว้ในโปรเจกต์เดียวกันอย่างไร้รอยต่อ

## 1. React Server Components (RSC)
โดยค่าเริ่มต้น ทุก Component ในโฟลเดอร์ \`app/\` จะเป็น **Server Component**
- โค้ดรันบนเซิร์ฟเวอร์เท่านั้น ไม่ถูกส่งลงมาให้ Client ดาวน์โหลด (ทำให้ไฟล์ JavaScript เบาและโหลดเร็วมาก)
- สามารถเชื่อมต่อฐานข้อมูลโดยตรงภายใน Component ได้อย่างปลอดภัยโดยไม่ต้องผ่าน REST API

## 2. Server Actions
ฟังก์ชันการทำงานฝั่ง Server ที่สามารถเรียกใช้ได้จาก Form ในหน้าเว็บโดยตรง ไม่ต้องเขียนไฟล์ API route แยก`,
      codeExample: {
        language: "javascript",
        code: `// src/app/actions.ts (Server Action)
"use server";

export async function addProductToDatabase(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));

  // เชื่อมต่อฐานข้อมูลโดยตรงที่นี่
  console.log(\`[SERVER] บันทึกสินค้าใหม่ลงฐานข้อมูล: \${name} ราคา \${price}\`);
  return { success: true, message: "บันทึกสำเร็จเรียบร้อยแล้ว!" };
}

// src/app/products/page.tsx (Server Component)
import { addProductToDatabase } from "../actions";

export default function AddProductPage() {
  return (
    <form action={addProductToDatabase} className="p-6 space-y-4 max-w-md">
      <input name="name" placeholder="ชื่อสินค้า" required className="border p-2 w-full" />
      <input name="price" type="number" placeholder="ราคา" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        บันทึกสินค้า
      </button>
    </form>
  );
}`,
        description: "การใช้ Server Actions ใน Next.js 14 เพื่อส่งข้อมูลฟอร์มตรงเข้าสู่เซิร์ฟเวอร์โดยไม่ต้องเขียน API แยก"
      },
      quiz: [
        { id: "web-7-q1", question: "ใน Next.js 14 App Router หากต้องการให้คอมโพเนนต์สามารถใช้ useState หรือ onClick ได้ ต้องใส่ Directive ใดไว้บนสุดของไฟล์?", options: ['"use client";', '"use server";', '"client-side";', '"use react";'], correctAnswer: 0, explanation: 'ใส่ "use client"; ที่บรรทัดแรกสุดเพื่อประกาศว่าคอมโพเนนต์นี้ต้องทำงานในฝั่ง Client Browser' }
      ]
    },
    {
      id: "web-8",
      title: "ระบบฐานข้อมูลและการยืนยันตัวตน (Authentication & Database ORM)",
      description: "เชื่อมต่อฐานข้อมูลด้วย Prisma ORM, จัดการ Hash รหัสผ่านด้วย bcrypt, และสร้างระบบล็อกอินด้วย JWT / NextAuth",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# การจัดการความปลอดภัยและฐานข้อมูลในเว็บแอปพลิเคชัน

เว็บระดับมืออาชีพต้องการระบบจัดเก็บข้อมูลที่มีความสัมพันธ์กัน และระบบยืนยันตัวตนที่รัดกุมตามมาตรฐานสากล

## 1. การใช้ ORM (Object-Relational Mapping)
แทนที่จะเขียนคำสั่ง SQL ดิบ เช่น \`SELECT * FROM users\` เราใช้ **Prisma ORM** เพื่อให้เขียนโค้ดเป็นภาษา TypeScript ที่มี Type-Safety และป้องกันช่องโหว่ SQL Injection อัตโนมัติ

## 2. หลักการเก็บรหัสผ่าน (Password Security)
- **ห้ามเก็บรหัสผ่านเป็นตัวอักษรธรรมดา (Plain text) เด็ดขาด!**
- ต้องทำการ Hash ผ่านอัลกอริทึมอย่าง **bcrypt** หรือ **Argon2** พร้อม Salt สุ่ม`,
      codeExample: {
        language: "javascript",
        code: `import bcrypt from 'bcryptjs';

// การ Hash รหัสผ่านก่อนบันทึกลงฐานข้อมูล
export async function registerUser(email, rawPassword) {
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(rawPassword, saltRounds);
  
  // บันทึกลงฐานข้อมูล (ตัวอย่าง)
  console.log("บันทึกผู้ใช้:", { email, passwordHash });
}

// การตรวจสอบรหัสผ่านตอนล็อกอิน
export async function verifyUser(inputPassword, storedHash) {
  const isMatch = await bcrypt.compare(inputPassword, storedHash);
  return isMatch; // คืนค่า true หรือ false
}`,
        description: "การเข้ารหัสแบบทางเดียว (Hashing) รหัสผ่านผู้ใช้งานอย่างปลอดภัยด้วย bcrypt"
      },
      quiz: [
        { id: "web-8-q1", question: "ทำไมจึงต้องใช้ฟังก์ชัน Hash แบบทางเดียว เช่น bcrypt ในการเก็บรหัสผ่านแทนการเข้ารหัสแบบสองทาง (AES)?", options: ["เพราะไฟล์มีขนาดเล็กกว่า", "เพราะไม่มีกุญแจให้ถอดรหัสกลับได้ แม้ฐานข้อมูลรั่วไหล คนร้ายก็ไม่ทราบรหัสผ่านจริง", "เพราะเขียนโค้ดสั้นกว่า", "เพราะทำงานได้เฉพาะบน Linux"], correctAnswer: 1, explanation: "Hashing เป็นฟังก์ชันทางเดียว ไม่สามารถถอดรหัสย้อนกลับได้ จึงปลอดภัยสูงสุดสำหรับรหัสผ่าน" }
      ]
    },
    {
      id: "web-9",
      title: "โปรเจกต์ใหญ่: Full-Stack E-Commerce & เว็บไซต์ประชาสัมพันธ์ขายของ",
      description: "สร้างร้านค้าออนไลน์ครบวงจร: หน้าแสดงสินค้า กรองหมวดหมู่ ตะกร้าสินค้าแบบเรียลไทม์ และระบบ Checkout จำลอง",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# สร้างระบบ E-Commerce ร้านค้าออนไลน์สำหรับโรงเรียนและธุรกิจ

ในโปรเจกต์สุดท้ายนี้ คุณจะได้รวมความรู้ทั้งหมด ตั้งแต่การออกแบบ UI ด้วย Tailwind, การจัดการ State ตะกร้าสินค้า, การเรียกข้อมูลสินค้า, ไปจนถึงขั้นตอนการสั่งซื้อสินค้า

## สถาปัตยกรรมระบบ E-Commerce
1. **Catalog & Search:** หน้ารายการสินค้า ค้นหา และกรองตามช่วงราคา
2. **Cart Context:** เก็บข้อมูลสินค้าที่เลือกลงใน \`localStorage\` เพื่อให้ข้อมูลไม่หายเมื่อรีเฟรชหน้าจอ
3. **Checkout Flow:** หน้ากรอกที่อยู่จัดส่งและจำลองการชำระเงินผ่าน PromptPay QR Code
4. **Admin Dashboard:** หน้าจัดการเพิ่ม/ลดสต็อกสินค้า`,
      codeExample: {
        language: "javascript",
        code: `// การสร้าง State จัดการตะกร้าสินค้า (Cart Context)
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);`,
        description: "สถาปัตยกรรม Cart Context สำหรับจัดการตะกร้าสินค้าทั่วทั้งแอปพลิเคชัน"
      },
      quiz: [
        { id: "web-9-q1", question: "เครื่องมือใดใน React ที่เหมาะสำหรับการแชร์ข้อมูลตะกร้าสินค้า (Cart) ให้ทุกหน้าเข้าถึงได้โดยไม่ต้องส่ง Props ต่อกันหลายชั้น?", options: ["React Context API", "HTML Table", "CSS Flexbox", "JavaScript Loop"], correctAnswer: 0, explanation: "React Context API (หรือ State Management อย่าง Zustand/Redux) ใช้สำหรับแชร์ข้อมูล Global State ให้ทุกคอมโพเนนต์เข้าถึงได้โดยตรง" }
      ]
    }
  ]
};
