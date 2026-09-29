import { Course } from "../types";

export const webdevCourse: Course = {
  id: "webdev",
  title: "Modern Web Development & Full-Stack Next.js 14",
  description: "พัฒนาเว็บแอปพลิเคชันระดับมืออาชีพตั้งแต่พื้นฐาน W3C Semantic HTML5, CSS Grid/Flexbox, JavaScript V8 Engine, React 18 จนถึง Full-Stack Next.js 14 และ Core Web Vitals",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ (Modern Web Engineering) ที่ครอบคลุมรอบด้าน ตั้งแต่การวางโครงสร้างมาร์กอัปตามมาตรฐานสากล W3C และหลักการเข้าถึงของผู้พิการ (WCAG 2.2 Accessibility), การจัดเลย์เอาต์หน้าจอด้วย CSS Box Model, Flexbox และ Grid แบบ 2 มิติ, สถาปัตยกรรมการทำงานของ JavaScript V8 Engine (Call Stack, Event Loop, Microtask vs Macrotask), การพัฒนา Reactive UI ด้วย React 18 (Fiber Reconciler, Hooks, Memoization), การก้าวสู่สถาปัตยกรรม Full-Stack ด้วย Next.js 14 App Router, React Server Components (RSC), Server Actions, การรักษาความปลอดภัยและการยืนยันตัวตนด้วย HttpOnly Cookies และ Prisma ORM, จนถึงการปรับแต่งประสิทธิภาพระดับโลกให้ผ่านเกณฑ์ Google Core Web Vitals (LCP, INP, CLS)",
  icon: "🖥️",
  color: "orange",
  gradient: "from-orange-500 to-amber-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["WebDev", "HTML5", "CSS3", "JavaScript", "React 18", "Next.js 14", "Tailwind CSS", "Full-Stack"],
  recommendedTools: [
    {
      name: "Visual Studio Code (VS Code)",
      icon: "💻",
      badge: "Industry Standard IDE",
      description: "สภาพแวดล้อมการพัฒนาเว็บยอดนิยมอันดับ 1 ของโลก รองรับ TypeScript, ระบบ Auto-complete, และส่วนขยายที่แนะนำ: Tailwind CSS IntelliSense, ESLint, Prettier, Error Lens",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง VS Code\n2. กด Ctrl+Shift+X เปิดแท็บ Extensions ติดตั้ง: 'Tailwind CSS IntelliSense', 'ESLint', 'Prettier'\n3. ไปที่ Settings เปิด 'Format On Save' เพื่อให้จัดระเบียบโค้ดอัตโนมัติทุกครั้งที่กดบันทึก"
    },
    {
      name: "Google Chrome DevTools",
      icon: "🔍",
      badge: "Built-in Performance Suite",
      description: "ชุดเครื่องมือวิเคราะห์และดีบั๊กในตัวเบราว์เซอร์ ใช้ตรวจสอบ DOM Elements, แก้ไข CSS สด, วัดประสิทธิภาพ Core Web Vitals (LCP/INP) และจำลองเครือข่ายความเร็วต่ำ",
      downloadUrl: "https://www.google.com/chrome/",
      setupGuide: "1. เปิดหน้าเว็บใน Chrome\n2. กดปุ่ม F12 หรือคลิกขวาเลือก 'Inspect (ตรวจสอบ)'\n3. ใช้แท็บ Elements เพื่อดู DOM/CSS, แท็บ Console สำหรับรันคำสั่ง JS, แท็บ Network เพื่อดูการเรียก API และแท็บ Lighthouse สำหรับประเมินคะแนน SEO และ Accessibility"
    },
    {
      name: "Node.js (LTS Version)",
      icon: "📦",
      badge: "JavaScript Runtime",
      description: "สภาพแวดล้อมรันไทม์ JavaScript ฝั่งเซิร์ฟเวอร์ที่ขับเคลื่อนด้วยเครื่องยนต์ V8 พร้อมตัวจัดการแพ็กเกจ npm เพื่อติดตั้งเฟรมเวิร์กสมัยใหม่อย่าง Next.js 14, React 18, Vite",
      downloadUrl: "https://nodejs.org/",
      setupGuide: "1. ดาวน์โหลดเวอร์ชัน Long-Term Support (LTS)\n2. ติดตั้งตามขั้นตอนมาตรฐาน\n3. เปิด Terminal ตรวจสอบความถูกต้องด้วยคำสั่ง: node -v และ npm -v"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "web-1",
      title: "Semantic HTML5, โครงสร้างเว็บมาตรฐาน W3C, การเข้าถึง Accessibility (a11y) และ SEO",
      description: "ทำความเข้าใจ DOM Tree, การเลือกใช้แท็ก Semantic เพื่อ Search Engine Optimization (SEO), มาตรฐานการเข้าถึงสำหรับผู้พิการ WCAG 2.2 AA, ARIA Roles, และการวางโครงสร้าง Open Graph Meta Tags",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมโครงสร้างเว็บมาตรฐาน W3C และ Semantic HTML5

การสร้างเว็บแอปพลิเคชันที่มีคุณภาพไม่ได้เริ่มต้นที่เฟรมเวิร์ก แต่เริ่มต้นที่ **HyperText Markup Language (HTML5)** ที่มีโครงสร้างถูกต้องตามมาตรฐานสากลของ **W3C (World Wide Web Consortium)** และ **WHATWG Living Standard**

---

## 1. ปัญหาของ "Div Soup" และคุณค่าของ Semantic Elements

ในยุคก่อน นักพัฒนามักใช้แท็ก \`<div class="header">\`, \`<div class="nav">\`, \`<div class="content">\` ซ้อนกันหลายสิบชั้น ซึ่งเบราว์เซอร์และบ็อตค้นหาจะมองเห็นเป็นเพียงกล่องสี่เหลี่ยมว่างเปล่าที่ไร้ความหมาย
**Semantic HTML5** ถูกออกแบบมาเพื่อแก้ปัญหานี้ โดยทุกแท็กจะสื่อสาร **ความหมายเชิงบริบท (Contextual Meaning)** ของข้อมูลโดยตรง:

\`\`\`
┌───────────────────────────────────────────────────────────┐
│ <header> : ส่วนหัวของหน้าเว็บ, โลโก้, ชื่อสถาบัน            │
│   ┌─────────────────────────────────────────────────────┐ │
│   │ <nav> : แถบเมนูนำทางหลักของเว็บไซต์ (Navigation Links)│ │
│   └─────────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────┤
│ <main> : เนื้อหาหลักที่มีเพียงหนึ่งเดียวในแต่ละหน้า         │
│   ┌─────────────────────────────────────────────────────┐ │
│   │ <article> : บทความ/ข่าวสารที่มีความสมบูรณ์ในตัวเอง   │ │
│   │   <section> : ส่วนย่อยของเนื้อหา แบ่งตามหัวข้อย่อย    │ │
│   │   <figure> : รูปภาพประกอบพร้อมคำอธิบาย <figcaption> │ │
│   └─────────────────────────────────────────────────────┘ │
│   ┌─────────────────────────────────────────────────────┐ │
│   │ <aside> : ข้อมูลเสริมแถบข้าง เช่น ข่าวเด่น, ลิงก์ด่วน│ │
│   └─────────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────┤
│ <footer> : ส่วนล่างสุด ลิขสิทธิ์ ข้อมูลติดต่อ นโยบาย PDPA │
└───────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. การเข้าถึงสำหรับผู้พิการ (Web Accessibility - a11y & WCAG 2.2)

มาตรฐาน **Web Content Accessibility Guidelines (WCAG 2.2 Level AA)** กำหนดให้เว็บไซต์ต้องสามารถใช้งานได้โดยทุกคน รวมถึงผู้บกพร่องทางการมองเห็นที่ใช้ **Screen Reader (เช่น NVDA, VoiceOver)**:
1. **รูปภาพต้องมีคำอธิบาย (Alternative Text):** \`<img src="..." alt="แผนผังโครงสร้างระบบคอมพิวเตอร์">\` หากเป็นภาพตกแต่งที่ไม่มีความหมาย ให้ใส่ \`alt=""\` เพื่อให้ Screen Reader ข้ามไป
2. **ปุ่มกดและลิงก์ที่มีความหมาย:** หลีกเลี่ยงปุ่มที่มีแต่ไอคอนโดยไม่มีข้อความ หากมีแต่ไอคอนต้องใส่ \`aria-label="ค้นหาหลักสูตร"\` เสมอ
3. **ลำดับ Heading ตามลำดับชั้น:** มี \`<h1>\` เพียง 1 จุดต่อหน้า และตามด้วย \`<h2>\`, \`<h3>\` ตามลำดับอย่างเคร่งครัด ห้ามกระโดดข้ามจาก h1 ไป h4
4. **ความเปรียบต่างของสี (Color Contrast Ratio):** ตัวอักษรปกติกับพื้นหลังต้องมีอัตราส่วนความเปรียบต่างอย่างน้อย **4.5 : 1**

---

## 3. การวางโครงสร้างสำหรับ Search Engine Optimization (SEO) & Social Graph

เพื่อให้เว็บไซต์ติดอันดับหน้าแรกของ Google และแสดงภาพตัวอย่างที่สวยงามเมื่อแชร์ลิงก์ลง LINE หรือ Facebook ต้องกำหนดแท็กใน \`<head>\`:
- \`<meta name="description" content="...">\`: บทคัดย่อความยาว 150-160 ตัวอักษร
- \`<link rel="canonical" href="...">\`: ป้องกันปัญหาเนื้อหาซ้ำซ้อน (Duplicate Content Penalty)
- **Open Graph Protocol (\`og:\`):** ควบคุมภาพปก (\`og:image\`), ชื่อเรื่อง (\`og:title\`), และคำบรรยาย (\`og:description\`)
- **JSON-LD Structured Data:** โครงสร้างข้อมูลแบบ Schema.org ช่วยให้ Google แสดงผลเป็น Rich Snippets เช่น ดาวรีวิว ราคาคอร์สเรียน`,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>สาขาวิชาเทคโนโลยีสารสนเทศ | IT Academy</title>
  <meta name="description" content="หลักสูตรวิชาชีพเทคโนโลยีสารสนเทศ เรียนรู้ระบบเครือข่าย คอมพิวเตอร์ IoT และการพัฒนาเว็บแอปพลิเคชันระดับสากล">
  <link rel="canonical" href="https://itacademy.ac.th/courses">

  <!-- Open Graph Meta Tags สำหรับการแชร์บน Social Media -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://itacademy.ac.th/courses">
  <meta property="og:title" content="หลักสูตรเทคโนโลยีสารสนเทศ IT Academy">
  <meta property="og:description" content="สร้างทักษะดิจิทัลระดับมืออาชีพ พร้อมปฏิบัติงานจริงในภาคอุตสาหกรรม">
  <meta property="og:image" content="https://itacademy.ac.th/assets/og-cover.jpg">

  <!-- โครงสร้างข้อมูล JSON-LD สำหรับ Google Search Rich Results -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IT Academy",
    "url": "https://itacademy.ac.th",
    "description": "สถาบันการศึกษาเฉพาะทางด้านวิศวกรรมเทคโนโลยีสารสนเทศ"
  }
  </script>
</head>
<body class="bg-gray-50 text-gray-900">
  <!-- ปุ่มข้ามไปยังเนื้อหาหลักสำหรับผู้ใช้คีย์บอร์ด (Skip to main content) -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:p-4 focus:bg-blue-600 focus:text-white">
    ข้ามไปยังเนื้อหาหลัก
  </a>

  <header role="banner" class="border-b bg-white">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-700">IT Academy</h1>
      <nav role="navigation" aria-label="เมนูหลัก">
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:text-blue-600">หน้าแรก</a></li>
          <li><a href="/courses" aria-current="page" class="font-bold text-blue-600">หลักสูตร</a></li>
          <li><a href="/contact" class="hover:text-blue-600">ติดต่อสอบถาม</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main-content" role="main" class="max-w-7xl mx-auto px-4 py-8">
    <article>
      <header>
        <h2 class="text-3xl font-extrabold mb-2">หลักสูตรเทคโนโลยีสารสนเทศ (ปวส.) 2568</h2>
        <p class="text-sm text-gray-500">เผยแพร่เมื่อ: <time datetime="2026-09-29">29 กันยายน 2569</time></p>
      </header>
      
      <section class="mt-6 prose">
        <h3>คำอธิบายหลักสูตร</h3>
        <p>มุ่งเน้นการพัฒนากำลังคนให้มีความเชี่ยวชาญด้านระบบโครงสร้างพื้นฐานคลาวด์ การบริหารจัดการฐานข้อมูลขนาดใหญ่ และการเขียนโปรแกรมเชิงวัตถุ</p>
      </section>

      <figure class="my-6">
        <img src="/assets/lab-room.jpg" alt="ห้องปฏิบัติการคอมพิวเตอร์พร้อมอุปกรณ์เครือข่าย Cisco และเซิร์ฟเวอร์จำลอง" class="rounded-lg shadow">
        <figcaption class="text-center text-sm text-gray-500 mt-2">ภาพที่ 1: บรรยากาศการเรียนการสอนในห้องปฏิบัติการเครือข่าย</figcaption>
      </figure>
    </article>
  </main>

  <footer role="contentinfo" class="bg-gray-900 text-gray-400 py-6 mt-12">
    <div class="max-w-7xl mx-auto px-4 text-center text-sm">
      <p>&copy; 2026 IT Academy. สงวนลิขสิทธิ์ตาม พ.ร.บ. ลิขสิทธิ์</p>
    </div>
  </footer>
</body>
</html>`,
        description: "มาร์กอัป HTML5 ระดับมาตรฐานสากล ครบถ้วนทั้ง Semantic, SEO Metadata, JSON-LD, และ Accessibility ARIA"
      },
      quiz: [
        {
          id: "web-1-q1",
          question: "ตามมาตรฐาน WCAG 2.2 Level AA อัตราส่วนความเปรียบต่างของสี (Color Contrast Ratio) ขั้นต่ำระหว่างตัวอักษรขนาดปกติและพื้นหลังต้องมีค่าอย่างน้อยเท่าใด?",
          options: [
            "2.5 : 1",
            "3.0 : 1",
            "4.5 : 1",
            "7.0 : 1"
          ],
          correctAnswer: 2,
          explanation: "WCAG 2.2 กำหนดให้ตัวอักษรขนาดปกติ (ต่ำกว่า 18pt หรือ 14pt ตัวหนา) ต้องมี Contrast Ratio อย่างน้อย 4.5:1 ต่อสีพื้นหลัง เพื่อให้ผู้ที่มีสายตาเลือนรางสามารถอ่านเนื้อหาได้อย่างชัดเจน"
        },
        {
          id: "web-1-q2",
          question: "แท็กใดในโครงสร้าง HTML5 ที่ควรมีเพียงหนึ่งเดียวในแต่ละหน้าเว็บ เพื่อระบุใจความหลักของหน้า?",
          options: [
            "<section>",
            "<main>",
            "<article>",
            "<header>"
          ],
          correctAnswer: 1,
          explanation: "ตามข้อกำหนดของ W3C ในเอกสารหนึ่งฉบับต้องมีแท็ก <main> ได้เพียงจุดเดียวเท่านั้น เพื่อเป็นจุดอ้างอิงให้ Screen Reader และ Search Engine ทราบว่าเนื้อหาหลักเริ่มต้นตรงนี้"
        }
      ],
      labGuide: {
        title: "แล็บตรวจสอบความสมบูรณ์ของ Semantic และ Accessibility ด้วย Chrome DevTools Lighthouse",
        toolName: "Google Chrome Lighthouse",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "ตรวจสอบคุณภาพหน้าเว็บด้วยเครื่องมือ Lighthouse วิเคราะห์คะแนน Accessibility, SEO และความถูกต้องตามมาตรฐาน W3C",
        steps: [
          {
            title: "เปิดหน้าเว็บที่ต้องการตรวจสอบ",
            detail: "เปิดหน้าเว็บ HTML5 ของคุณในเบราว์เซอร์ Google Chrome กด F12 เพื่อเปิด DevTools"
          },
          {
            title: "เลือกแท็บ Lighthouse",
            detail: "คลิกเลือกแท็บ 'Lighthouse' ที่แถบเครื่องมือด้านบน เลือก Categories: Accessibility, Best Practices, SEO"
          },
          {
            title: "กดปุ่มประเมินผล",
            detail: "คลิกปุ่ม 'Analyze page load' และรอให้ระบบตรวจสอบ Element ทุกตัวบนหน้าเว็บ"
          },
          {
            title: "วิเคราะห์ข้อบกพร่องและแก้ไข",
            detail: "อ่านรายงานผลในหัวข้อ Accessibility ตรวจสอบว่ามีแท็ก img ที่ขาด alt หรือปุ่มที่ขาด aria-label หรือไม่"
          }
        ],
        verification: "คะแนนในหมวด Accessibility และ SEO บนหน้ารายงาน Lighthouse จะต้องได้คะแนน 100/100 คะแนนเต็ม พร้อมเครื่องหมายถูกสีเขียวทุกรายการ"
      }
    },

    {
      id: "web-2",
      title: "Modern CSS3: Box Model, Flexbox, CSS Grid 2 มิติ และการออกแบบ Responsive ขั้นสูง",
      description: "ทำความเข้าใจ CSS Box Model (box-sizing: border-box), พลังของ Flexbox (Main vs Cross Axis), การจัดผัง 2 มิติด้วย CSS Grid (repeat, auto-fit, minmax), Fluid Typography ด้วย clamp() และ Media Queries เชิงกลยุทธ์",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมการจัดเลย์เอาต์หน้าเว็บด้วย Modern CSS3

การจัดเลย์เอาต์เว็บยุคใหม่ไม่ได้พึ่งพาการใช้ \`float\` หรือการเซ็ตพิกเซลแบบตายตัวอีกต่อไป แต่ใช้ระบบคำนวณที่ยืดหยุ่นและเป็นพลวัต (Dynamic Layout Engine) ซึ่งประกอบด้วย **Box Model**, **Flexbox (1 มิติ)** และ **CSS Grid (2 มิติ)**

---

## 1. เจาะลึก CSS Box Model และคำสั่งกู้ชาติ \`box-sizing: border-box\`

ในโมเดลดั้งเดิม (\`content-box\`):
$$\\text{ความกว้างรวม} = \\text{width} + \\text{padding-left} + \\text{padding-right} + \\text{border-left} + \\text{border-right}$$
หากกำหนด \`width: 100%\` แล้วเพิ่ม \`padding: 20px\` กล่องจะล้นทะลุจอทันที (Horizontal Overflow)

**แนวทางปฏิบัติสากล:** ต้องรีเซ็ตทั้งเอกสารเป็น \`box-sizing: border-box\`:
\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
\`\`\`
เมื่อใช้ \`border-box\` ค่า \`width\` จะครอบคลุมทั้งเนื้อหา, padding และ border รวมกัน ทำให้การคำนวณขนาดหน้าจอมีความแม่นยำ 100%

---

## 2. CSS Flexbox (การจัดวางในแนวแกน 1 มิติ)

Flexbox จัดการการเรียงลำดับ การขยาย และการกระจายพื้นที่ว่างของไอเท็มตาม **แกนหลัก (Main Axis)** และ **แกนตัด (Cross Axis)**

\`\`\`
                     [ Main Axis (แนวนอนเมื่อ flex-direction: row) ]
            ────────────────────────────────────────────────────────────────►
       ┌─   ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
Cross  │    │  Item 1       │     │  Item 2       │     │  Item 3       │
Axis   │    │               │     │               │     │               │
       ▼    └───────────────┘     └───────────────┘     └───────────────┘
\`\`\`

- **การจัดแกนหลัก (Justify Content):** \`flex-start\`, \`center\`, \`space-between\`, \`space-evenly\`
- **การจัดแกนตัด (Align Items):** \`stretch\`, \`center\`, \`baseline\`
- **สูตรการขยายตัว (Flex-Grow / Flex-Shrink):**
  - \`flex: 1 1 0px;\` (เติบโตเท่ากัน, หดตัวได้เท่ากัน, เริ่มต้นจากศูนย์)

---

## 3. CSS Grid (การจัดวาง 2 มิติระดับสถาปัตยกรรม)

CSS Grid ควบคุมทั้งแถว (Rows) และคอลัมน์ (Columns) ไปพร้อมๆ กัน เหมาะกับการจัดผังทั้งหน้าจอ

### สูตรมหัศจรรย์ Responsive Grid โดยไม่ต้องเขียน Media Queries แม้แต่บรรทัดเดียว!
\`\`\`css
.responsive-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`
- \`auto-fit\`: คำนวณจำนวนคอลัมน์อัตโนมัติตามความกว้างหน้าจอที่มีอยู่
- \`minmax(280px, 1fr)\`: กล่องแต่ละกล่องจะมีความกว้างอย่างน้อย $280\\text{ px}$ แต่หากมีพื้นที่เหลือจะขยายตัวกินพื้นที่เท่าๆ กัน (\`1fr\` = 1 Fraction Unit)

---

## 4. Fluid Typography ด้วยฟังก์ชัน \`clamp()\`

แทนที่จะต้องมาคอยเปลี่ยนขนาดตัวอักษรทีละ Breakpoint ใน Media Query เราสามารถใช้ฟังก์ชันคณิตศาสตร์:
\`\`\`css
/* font-size: clamp(ขนาดเล็กสุด, ขนาดแปรผันตามหน้าจอ, ขนาดใหญ่สุด) */
h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
}
\`\`\``,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modern CSS Grid & Flexbox Showcase</title>
<style>
  /* 1. Global Box-sizing Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    background-color: #0f172a;
    color: #f8fafc;
    padding: 2rem;
    line-height: 1.6;
  }

  /* 2. Fluid Typography */
  h1 {
    font-size: clamp(1.8rem, 3vw + 1rem, 3rem);
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* 3. Pure CSS Grid แบบ Responsive อัตโนมัติ (ไร้ Media Query) */
  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* 4. Card Component จัดโครงร่างภายในด้วย Flexbox */
  .course-card {
    background-color: #1e293b;
    border: 1px solid #334155;
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* ดันปุ่มกดลงด้านล่างสุดเสมอ */
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s;
  }

  .course-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    border-color: #38bdf8;
  }

  .badge-row {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .badge {
    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .btn-enroll {
    margin-top: 1.5rem;
    width: 100%;
    padding: 0.75rem;
    background: #0284c7;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-enroll:hover {
    background: #0369a1;
  }
</style>
</head>
<body>
  <h1>คลังหลักสูตรวิศวกรรมไอที 2026</h1>

  <div class="catalog-grid">
    <div class="course-card">
      <div>
        <div class="badge-row"><span class="badge">Networking</span><span class="badge">Cisco</span></div>
        <h2>CCNA Enterprise Infrastructure</h2>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem;">
          เรียนรู้การกำหนดค่าเร้าเตอร์และสวิตช์ระดับองค์กร, OSPF, VLANs, และระบบความปลอดภัย ACLs
        </p>
      </div>
      <button class="btn-enroll">ลงทะเบียนเรียน</button>
    </div>

    <div class="course-card">
      <div>
        <div class="badge-row"><span class="badge">IoT</span><span class="badge">FreeRTOS</span></div>
        <h2>ESP32 Embedded Systems</h2>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem;">
          สถาปัตยกรรม Dual-core, โปรโตคอล MQTT สำหรับโรงงาน, และการเชื่อมต่อ Home Assistant
        </p>
      </div>
      <button class="btn-enroll">ลงทะเบียนเรียน</button>
    </div>

    <div class="course-card">
      <div>
        <div class="badge-row"><span class="badge">Full-Stack</span><span class="badge">Next.js</span></div>
        <h2>Next.js 14 Web Architecture</h2>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 0.5rem;">
          สร้างเว็บแอปพลิเคชันด้วย Server Components, Prisma ORM, และการปรับแต่ง Core Web Vitals
        </p>
      </div>
      <button class="btn-enroll">ลงทะเบียนเรียน</button>
    </div>
  </div>
</body>
</html>`,
        description: "สถาปัตยกรรม CSS ยุคใหม่ ผสาน CSS Grid 2 มิติแบบ auto-fit เข้ากับ Flexbox ภายในคอมโพเนนต์"
      },
      quiz: [
        {
          id: "web-2-q1",
          question: "คำสั่ง CSS Grid ใดต่อไปนี้สามารถสร้างคอลัมน์ Responsive อัตโนมัติ โดยแต่ละคอลัมน์มีความกว้างไม่น้อยกว่า 300px และขยายเท่าๆ กันเต็มพื้นที่หน้าจอโดยไม่ต้องพึ่งพา Media Queries?",
          options: [
            "grid-template-columns: repeat(3, 1fr);",
            "grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));",
            "grid-template-columns: auto auto auto;",
            "grid-template-columns: 100% / 3;"
          ],
          correctAnswer: 1,
          explanation: "การใช้ repeat(auto-fit, minmax(300px, 1fr)) สั่งให้บราวเซอร์คำนวณจำนวนคอลัมน์อัตโนมัติตามขนาดจอ โดยตรึงขั้นต่ำไว้ที่ 300px และแบ่งพื้นที่ว่างที่เหลือเท่าๆ กัน (1fr) เกิดความยืดหยุ่นสมบูรณ์แบบ"
        },
        {
          id: "web-2-q2",
          question: "เหตุใดนักพัฒนาเว็บระดับสากลจึงกำหนดกฎ box-sizing: border-box ให้กับทุก Element เป็นค่าเริ่มต้นเสมอ?",
          options: [
            "เพื่อให้ตัวอักษรคมชัดขึ้น",
            "เพื่อให้ขนาดความกว้าง (width) ที่กำหนด ครอบคลุมทั้ง padding และ border รวมไว้ด้วยกัน ป้องกันปัญหา Layout ทะลุจอเมื่อเพิ่ม padding",
            "เพื่อเปิดใช้งานโหมด 3 มิติบนการ์ดจอ",
            "เพื่อรองรับเฉพาะเบราว์เซอร์บนมือถือ"
          ],
          correctAnswer: 1,
          explanation: "ในโหมดเดิม (content-box) การเพิ่ม padding หรือ border จะบวกขนาดกล่องเพิ่มเข้าไป ทำให้ความกว้างจริงเกิน 100% เกิดการล้นจอ แต่ border-box จะรวม padding เข้าไปในความกว้างที่กำหนดทันที"
        }
      ],
      labGuide: {
        title: "แล็บสร้าง Responsive Card Grid ด้วย CSS Grid และ Flexbox",
        toolName: "VS Code & Live Server",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "เขียนสไตล์ชีต CSS สร้างการ์ดแสดงผลสินค้าที่ปรับจำนวนคอลัมน์อัตโนมัติจาก 3 คอลัมน์บนจอคอมพิวเตอร์เป็น 1 คอลัมน์บนจอมือถือ พร้อมปุ่มกดที่ตรึงอยู่ด้านล่างสม่ำเสมอ",
        steps: [
          {
            title: "สร้างไฟล์ index.html",
            detail: "คัดลอกโค้ด HTML/CSS จากตัวอย่างในบทเรียนลงในไฟล์ index.html"
          },
          {
            title: "เปิดดูผ่าน Live Server",
            detail: "คลิกขวาที่ไฟล์ เลือก 'Open with Live Server' เพื่อเปิดหน้าเว็บบนเบราว์เซอร์"
          },
          {
            title: "ทดสอบการย่อ-ขยายหน้าจอ",
            detail: "ทดลองย่อหน้าต่างเบราว์เซอร์ให้แคบลง สังเกตว่าการ์ดจะปรับจำนวนคอลัมน์จาก 3 -> 2 -> 1 โดยอัตโนมัติอย่างราบรื่น"
          },
          {
            title: "ตรวจสอบการทำงานของ Flexbox ในการ์ด",
            detail: "ลองเพิ่มข้อความในคอร์สแรกให้ยาวขึ้น 3 บรรทัด สังเกตว่าปุ่ม 'ลงทะเบียนเรียน' ของการ์ดทุกใบยังคงอยู่ระนาบล่างสุดเท่ากันทั้งหมดเสมอด้วย justify-content: space-between"
          }
        ],
        verification: "หน้าเว็บต้องแสดงผลการ์ดสินค้าอย่างสวยงาม ไม่เกิดแถบเลื่อนแนวนอน (Horizontal Scrollbar) เมื่อย่อหน้าจอเล็กลง และจัดเรียงคอลัมน์อย่างยืดหยุ่นในทุกขนาดจอ"
      }
    },

    {
      id: "web-3",
      title: "JavaScript Core: เครื่องยนต์ Google V8, Scope Chain, Closures และ Event Delegation",
      description: "ทำความเข้าใจสถาปัตยกรรม V8 Engine (Ignition Interpreter & TurboFan Compiler), Execution Context, ความแตกต่างลึกซึ้งระหว่าง var/let/const (Temporal Dead Zone), Closures กับการจัดการหน่วยความจำ และ Event Delegation Pattern",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมภายในของภาษา JavaScript และ Google V8 Engine

JavaScript ไม่ใช่ภาษาอินเทอร์พรีเตอร์ธรรมดา แต่ทำงานผ่านเครื่องยนต์ประสิทธิภาพสูง เช่น **Google V8 (ใน Chrome และ Node.js)** ซึ่งแปลงโค้ดภาษาระดับสูงให้กลายเป็น Machine Code ที่ซีพียูประมวลผลได้โดยตรงผ่านเทคนิค **Just-In-Time (JIT) Compilation**

---

## 1. วงจรการทำงานภายในเครื่องยนต์ Google V8

\`\`\`
Source Code (JavaScript)
          │
          ▼
   [ Parser ] ───► สร้าง Abstract Syntax Tree (AST)
          │
          ▼
 [ Ignition Interpreter ] ───► สร้าง Bytecode รันทันที
          │
          ▼ (เก็บสถิติโค้ดที่ถูกเรียกใช้งานบ่อยๆ - Hot Functions)
  [ TurboFan JIT Compiler ] ───► คอมไพล์เป็น Highly-Optimized Machine Code
\`\`\`

---

## 2. Execution Context, Scope Chain และ Temporal Dead Zone (TDZ)

เมื่อ JavaScript เริ่มทำงาน จะสร้าง **Global Execution Context** ขึ้นมา ซึ่งประกอบด้วย 2 เฟส:
1. **Creation Phase:** จัดสรรพื้นที่หน่วยความจำสำหรับตัวแปรและฟังก์ชัน (**Hoisting**)
   - \`var\`: ถูกยกขึ้นไปและกำหนดค่าเริ่มต้นให้เป็น \`undefined\`
   - \`let\` และ \`const\`: ถูกยกขึ้นไปเช่นกัน แต่จะถูกขังไว้ใน **Temporal Dead Zone (TDZ)** จนกว่าจะถึงบรรทัดที่ประกาศตัวแปรจริง หากเรียกใช้ก่อนจะเกิด \`ReferenceError\` ทันที
2. **Execution Phase:** รันคำสั่งทีละบรรทัดจากบนลงล่าง

---

## 3. เจาะลึก Closures: พลังและความเสี่ยงเรื่อง Memory Leaks

**Closure** คือความสามารถของฟังก์ชันลูกในการ "จดจำและเข้าถึงตัวแปรในขอบเขตของฟังก์ชันแม่ (Lexical Scope)" แม้ว่าฟังก์ชันแม่จะทำงานเสร็จสิ้นและหลุดออกจาก Call Stack ไปแล้วก็ตาม!

\`\`\`javascript
function createStudentCounter(initialValue) {
  let count = initialValue; // ตัวแปรนี้จะถูกปิดล้อมไว้ใน Closure Scope

  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counterA = createStudentCounter(10);
console.log(counterA.increment()); // 11
console.log(counterA.getCount());  // 11 (ไม่มีใครภายนอกแก้ count ตรงๆ ได้)
\`\`\`
- **ประโยชน์:** การทำ Data Encapsulation (ซ่อนตัวแปรส่วนตัว ไม่ให้ใครเขียนทับจากภายนอก)
- **ข้อควรระวัง:** หาก Closure อ้างอิงถึง DOM Element หรืออาร์เรย์ขนาดใหญ่แล้วไม่ได้เคลียร์ค่า ตัวแปรนั้นจะไม่ถูก Garbage Collector ล้างทิ้ง อาจนำไปสู่ปัญหา **Memory Leak**

---

## 4. สถาปัตยกรรม Event Delegation (เทคนิคจัดการ Event ระดับสูง)

เมื่อเรามีรายการสินค้าหรือนักศึกษา 1,000 แถว การผูก \`addEventListener('click')\` ให้กับทุกปุ่ม 1,000 ครั้ง จะทำให้เปลืองแรมอย่างมหาศาล
**Event Delegation** ใช้ประโยชน์จากปรากฏการณ์ **Event Bubbling** (เหตุการณ์คลิกจะลอยจากลูกขึ้นมาหาพ่อเสมอ):
- ผูก Event Listener ไว้ที่ **Parent Container เพียงจุดเดียว**
- ใช้ \`e.target.closest()\` ตรวจสอบว่าสิ่งที่ถูกคลิกคือปุ่มใด`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรม Event Delegation ร่วมกับ State Management ด้วย Closures
// ประสิทธิภาพสูง: รองรับข้อมูลนับหมื่นแถวโดยผูก Listener เพียงจุดเดียว
// =================================================================

// 1. โมดูลจัดการคลังสินค้าแบบ Encapsulated State (ใช้ Closure)
const createInventoryStore = () => {
  let items = [
    { id: 1, name: "สายแลน Cat6 UTP", stock: 15 },
    { id: 2, name: "บอร์ด ESP32 DevKit", stock: 8 },
    { id: 3, name: "เซนเซอร์วัดอุณหภูมิ DHT22", stock: 20 }
  ];

  return {
    getItems: () => [...items], // คืนค่าแบบ Shallow Copy ป้องกันการแก้ไขตรง
    reduceStock: (id) => {
      const target = items.find(item => item.id === id);
      if (target && target.stock > 0) {
        target.stock--;
        return { success: true, updatedItem: target };
      }
      return { success: false, message: "สินค้าหมดสต็อก!" };
    }
  };
};

const store = createInventoryStore();

// 2. ฟังก์ชันเรนเดอร์เนื้อหาลงใน DOM
function renderInventory() {
  const container = document.querySelector('#inventory-table');
  container.innerHTML = store.getItems().map(item => \`
    <tr data-id="\${item.id}" class="border-b">
      <td class="p-3">\${item.name}</td>
      <td class="p-3 font-mono stock-count">\${item.stock} ชิ้น</td>
      <td class="p-3">
        <button class="btn-dispatch bg-blue-600 text-white px-3 py-1 rounded \${item.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
          เบิกจ่ายพัสดุ
        </button>
      </td>
    </tr>
  \`).join('');
}

// 3. การผูก Event แบบ Delegation บน Table Parent เพียงจุดเดียว (Zero Memory Waste)
document.querySelector('#inventory-table').addEventListener('click', (e) => {
  // ตรวจจับว่าคลิกถูกปุ่ม .btn-dispatch หรือไม่
  const button = e.target.closest('.btn-dispatch');
  if (!button) return; // หากคลิกที่อื่นในตาราง ให้ข้ามไป

  // หา Element แถว <tr> ที่ครอบปุ่มนี้อยู่
  const row = button.closest('tr');
  const itemId = Number(row.dataset.id);

  const result = store.reduceStock(itemId);
  if (result.success) {
    // อัปเดตเฉพาะช่องตัวเลขใน DOM โดยไม่ต้องเรนเดอร์ตารางใหม่ทั้งตาราง
    row.querySelector('.stock-count').textContent = \`\${result.updatedItem.stock} ชิ้น\`;
    if (result.updatedItem.stock === 0) {
      button.classList.add('opacity-50', 'cursor-not-allowed');
    }
    console.log(\`[DISPATCH] เบิกสินค้า ID \${itemId} สำเร็จ\`);
  } else {
    alert(result.message);
  }
});`,
        description: "การประยุกต์ใช้ Closure ป้องกันตัวแปร State ภายใน ผสานกับ Event Delegation ลดภาระหน่วยความจำของเบราว์เซอร์"
      },
      quiz: [
        {
          id: "web-3-q1",
          question: "ปรากฏการณ์ Temporal Dead Zone (TDZ) ในภาษา JavaScript เกิดขึ้นกับตัวแปรประเภทใด และมีพฤติกรรมอย่างไร?",
          options: [
            "เกิดกับ var โดยตัวแปรจะมีค่าเป็น null เสมอ",
            "เกิดกับ let และ const โดยตัวแปรจะถูกจองพื้นที่ไว้แต่ห้ามเข้าถึงเด็ดขาดก่อนถึงบรรทัดที่ประกาศตัวแปรจริง หากฝ่าฝืนจะเกิด ReferenceError",
            "เกิดเมื่อคอมพิวเตอร์เชื่อมต่ออินเทอร์เน็ตไม่ได้",
            "เกิดกับฟังก์ชันลูกศรเท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "แม้ว่า let และ const จะถูก Hoisting ใน Creation Phase แต่ตัวแปรจะถูกล็อคไว้ในสภาวะ TDZ การพยายามอ่านหรือเขียนค่าก่อนบรรทัดประกาศจะส่งผลให้โปรแกรมโยนข้อผิดพลาด ReferenceError ทันที"
        },
        {
          id: "web-3-q2",
          question: "ข้อใดคือประโยชน์หลักของการใช้รูปแบบสถาปัตยกรรม Event Delegation ในการจัดการ DOM?",
          options: [
            "ช่วยให้ตัวหนังสือเปลี่ยนเป็นสีฟ้าอัตโนมัติ",
            "ผูก Event Listener ไว้ที่ Element แม่เพียงตัวเดียว เพื่อดักฟัง Event จากลูกๆ ทุกตัวผ่าน Event Bubbling ช่วยประหยัดหน่วยความจำ RAM อย่างมหาศาล",
            "ทำให้คำนวณเลขทศนิยมได้แม่นยำขึ้น",
            "ป้องกันการถูกแฮกผ่าน SQL Injection"
          ],
          correctAnswer: 1,
          explanation: "Event Delegation ใช้ประโยชน์จาก Event Bubbling ทำให้ไม่ต้องสร้าง Function Handler นับพันตัวสำหรับทุกไอเท็ม แต่ผูกตัวเดียวที่ Container แม่ ส่งผลให้ประสิทธิภาพหน่วยความจำและ CPU ดีขึ้นอย่างก้าวกระโดด"
        }
      ],
      labGuide: {
        title: "แล็บพิสูจน์ Scope Chain และการทำงานของ Closure ผ่าน Chrome DevTools",
        toolName: "Google Chrome DevTools Console & Sources",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "เขียนฟังก์ชัน Closure ตั้งจุด Breakpoint ในแท็บ Sources ของ DevTools และตรวจสอบขอบเขต Scope (Local, Closure, Global) ขณะโปรแกรมหยุดทำงาน",
        steps: [
          {
            title: "สร้างสคริปต์ Closure",
            detail: "เปิด Chrome กด F12 ไปที่แท็บ Sources คลิกสร้าง Snippet ใหม่ ใส่โค้ดสร้าง createStudentCounter จากบทเรียน"
          },
          {
            title: "วางจุด Breakpoint",
            detail: "คลิกที่หมายเลขบรรทัด return ++count เพื่อตั้งจุดหยุดโปรแกรม (Breakpoint)"
          },
          {
            title: "เรียกใช้งานฟังก์ชัน",
            detail: "ในแท็บ Console พิมพ์คำสั่ง counterA.increment() แล้วกด Enter"
          },
          {
            title: "ตรวจสอบหน้าต่าง Scope",
            detail: "เมื่อโค้ดหยุดที่ Breakpoint ให้มองแถบด้านขวาหัวข้อ 'Scope' สังเกตบล็อก 'Closure (createStudentCounter)' จะมองเห็นตัวแปร count คงอยู่"
          }
        ],
        verification: "ในแท็บ Sources ช่อง Scope Panel ต้องปรากฏหัวข้อ 'Closure' ที่บันทึกตัวแปร count พร้อมค่าตัวเลขอย่างชัดเจน แม้ฟังก์ชันภายนอกจะรันจบไปแล้ว"
      }
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "web-4",
      title: "Modern JavaScript (ES6+): กลไก Event Loop, Microtasks, Promises และ Fetch API พร้อม AbortController",
      description: "ผ่าโครงสร้างการประมวลผล Asynchronous: Call Stack, Web APIs, Microtask Queue vs Macrotask Queue, สถานะของ Promises, ไวยากรณ์ async/await และการยกเลิกคำขอเครือข่ายด้วย AbortController",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม Asynchronous และ Event Loop ใน JavaScript

JavaScript ถูกออกแบบมาให้ทำงานแบบ **Single-threaded (มี Call Stack เพียงแกนเดียว)** แต่ทำไมจึงสามารถดาวน์โหลดไฟล์ขนาดใหญ่ เล่นวิดีโอ และรับส่งข้อมูลเครือข่ายพร้อมกันได้โดยที่หน้าเว็บไม่ค้าง? คำตอบคือ **Event Loop Concurrency Model**

---

## 1. ลำดับความสำคัญของ Event Loop: Microtasks vs Macrotasks

\`\`\`
                                  [ Call Stack ]
                            (รันโค้ด Synchronous จนว่าง)
                                        │
                                        ▼
                  ┌───────────────────────────────────────────┐
                  │ 1. Microtask Queue (ความสำคัญสูงสุด!)     │
                  │    - Promise.then / catch / finally       │
                  │    - queueMicrotask()                     │
                  │    - MutationObserver                     │
                  │    * รันจนกว่าคิวจะเกลี้ยงทั้งหมด!        │
                  └─────────────────────┬─────────────────────┘
                                        │ (เมื่อ Microtask ว่าง)
                                        ▼
                  ┌───────────────────────────────────────────┐
                  │ 2. RequestAnimationFrame (ก่อนวาดหน้าจอ)  │
                  └─────────────────────┬─────────────────────┘
                                        │
                                        ▼
                  ┌───────────────────────────────────────────┐
                  │ 3. Macrotask / Task Queue (ความสำคัญปกติ) │
                  │    - setTimeout / setInterval             │
                  │    - Event คลิก / แป้นพิมพ์                │
                  │    - I/O เครือข่าย                        │
                  │    * ดึงมารันทีละ 1 ทาสก์ แล้ววนกลับไปเช็ค │
                  │      Microtask ใหม่เสมอ!                  │
                  └───────────────────────────────────────────┘
\`\`\`

---

## 2. วงจรชีวิตของ Promise (Promise Lifecycle)

\`\`\`
                    ┌─────────────────────────┐
                    │    Pending (กำลังรอ)     │
                    └────────────┬────────────┘
               ┌─────────────────┴─────────────────┐
               ▼                                   ▼
┌─────────────────────────────┐     ┌─────────────────────────────┐
│    Fulfilled (สำเร็จ)       │     │     Rejected (ล้มเหลว)      │
│  ส่งต่อเข้า .then(result)   │     │  ส่งต่อเข้า .catch(error)   │
└─────────────────────────────┘     └─────────────────────────────┘
\`\`\`

---

## 3. การควบคุมคำขอเครือข่ายระดับโปรดักชันด้วย \`AbortController\`

ในการดึงข้อมูลจากอินเทอร์เน็ตด้วย \`fetch()\` หากผู้ใช้เปลี่ยนหน้า หรือพิมพ์ค้นหาคำใหม่ในช่องค้นหาอย่างรวดเร็ว (Typeahead Search) คำขอเก่าที่กำลังวิ่งอยู่จะกลายเป็นขยะ (Zombie Request) และอาจเกิดปัญหา **Race Condition** (ผลการค้นหาเก่าวิ่งกลับมาทับผลการค้นหาใหม่)
เราต้องใช้ **\`AbortController\`** หรือ **\`AbortSignal.timeout(ms)\`** เพื่อตัดการเชื่อมต่อทันที`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// คลาส HTTP Client ระดับวิศวกรรม: รองรับ Timeout และ AbortController
// ป้องกัน Race Condition และการเกิด Memory Leak เมื่อเปลี่ยนหน้า
// =================================================================

class SecureApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.currentController = null;
  }

  // ฟังก์ชันค้นหาข้อมูลแบบตัดคำขอเก่าอัตโนมัติ (Cancel Previous Pending Requests)
  async searchStudents(query) {
    // 1. ถ้ายกเลิกคำขอเดิมที่ยังโหลดไม่เสร็จ
    if (this.currentController) {
      this.currentController.abort();
      console.log("[NETWORK] สั่งยกเลิกคำขอเก่าที่ยังค้างอยู่เรียบร้อย");
    }

    // 2. สร้าง AbortController ตัวใหม่สำหรับคำขอนี้
    this.currentController = new AbortController();
    const { signal } = this.currentController;

    try {
      // 3. ตั้งเวลา Timeout สูงสุด 5 วินาทีด้วย AbortSignal.any (รวมสัญญาณยกเลิกเข้าด้วยกัน)
      const timeoutSignal = AbortSignal.timeout(5000);
      const combinedSignal = AbortSignal.any([signal, timeoutSignal]);

      console.log(\`[NETWORK] กำลังสืบค้นข้อมูลสำหรับคำค้น: "\${query}"...\`);
      const response = await fetch(\`\${this.baseUrl}/api/students?q=\${encodeURIComponent(query)}\`, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        signal: combinedSignal
      });

      if (!response.ok) {
        throw new Error(\`HTTP Status ผิดพลาด: \${response.status}\`);
      }

      const data = await response.json();
      return { success: true, data };

    } catch (err) {
      if (err.name === 'AbortError') {
        console.warn("[NETWORK] คำขอนี้ถูกยกเลิกโดยผู้ใช้หรือการพิมพ์ใหม่ (Abort)");
        return { success: false, aborted: true };
      } else if (err.name === 'TimeoutError') {
        console.error("[NETWORK] เซิร์ฟเวอร์ตอบสนองช้าเกินกว่า 5 วินาที (Timeout)");
        return { success: false, timeout: true };
      } else {
        console.error("[NETWORK] เกิดข้อผิดพลาดของระบบเครือข่าย:", err.message);
        return { success: false, error: err.message };
      }
    } finally {
      this.currentController = null;
    }
  }
}

// ตัวอย่างการใช้งานจริง
const api = new SecureApiClient('https://itacademy.ac.th');
// จำลองการพิมพ์ค้นหารัวๆ: คำขอแรกจะถูก Abort ทันทีที่คำขอที่สองถูกยิง
api.searchStudents('สมชาย');
api.searchStudents('สมชาย สายโค้ด');`,
        description: "สถาปัตยกรรม HTTP Client พร้อมการจัดการ Timeout และการยกเลิกคำขอด้วย AbortController"
      },
      quiz: [
        {
          id: "web-4-q1",
          question: "พิจารณาโค้ดต่อไปนี้: console.log('A'); setTimeout(() => console.log('B'), 0); Promise.resolve().then(() => console.log('C')); console.log('D'); ลำดับการพิมพ์ข้อความออกสู่หน้าจอที่ถูกต้องคือข้อใด?",
          options: [
            "A -> B -> C -> D",
            "A -> D -> B -> C",
            "A -> D -> C -> B",
            "A -> C -> D -> B"
          ],
          correctAnswer: 2,
          explanation: "ลำดับการทำงาน: 1. รันโค้ดซิงโครนัสใน Call Stack ก่อน ('A' และ 'D') 2. รัน Microtask Queue ที่เกิดจาก Promise.then() ('C') 3. รัน Macrotask Queue จาก setTimeout() ('B') ดังนั้นผลลัพธ์จึงเป็น A -> D -> C -> B เสมอ"
        },
        {
          id: "web-4-q2",
          question: "เครื่องมือ AbortController มีประโยชน์สำคัญอย่างไรในการส่งคำขอ HTTP ผ่าน Fetch API?",
          options: [
            "ช่วยเพิ่มความเร็วในการดาวน์โหลดไฟล์ 2 เท่า",
            "ใช้สำหรับยกเลิกคำขอเครือข่ายที่กำลังทำงานอยู่กลางอากาศ เช่น เมื่อผู้ใช้พิมพ์คำค้นหาใหม่ หรือปิดหน้าจอไปแล้ว เพื่อป้องกันปัญหา Race Condition",
            "ใช้สำหรับแปลงข้อมูลจากภาษาไทยเป็นภาษาอังกฤษ",
            "ใช้สำรองข้อมูลลงฮาร์ดดิสก์"
          ],
          correctAnswer: 1,
          explanation: "AbortController อนุญาตให้นักพัฒนาส่งสัญญาณยกเลิก (Abort Signal) ไปยังตัวรับส่งเครือข่ายของเบราว์เซอร์ เพื่อหยุดการดาวน์โหลดข้อมูลที่ไม่จำเป็นแล้ว ป้องกันหน่วยความจำรั่วไหลและผลการค้นหาย้อนกลับมาแสดงผลผิดเวลา"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบลำดับคิวของ Event Loop ใน Chrome Console",
        toolName: "Chrome DevTools Console",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "พิสูจน์ลำดับการทำงานระหว่าง Synchronous Code, Microtask Queue (Promises) และ Macrotask Queue (setTimeout) ผ่านการทดลองสด",
        steps: [
          {
            title: "เปิด Console ใน DevTools",
            detail: "เปิด Google Chrome กดปุ่ม F12 และคลิกไปที่แท็บ Console"
          },
          {
            title: "พิมพ์ชุดคำสั่งทดสอบ Event Loop",
            detail: "พิมพ์คำสั่ง: console.log('1: Sync'); setTimeout(() => console.log('4: Macrotask'), 0); Promise.resolve().then(() => console.log('3: Microtask')); console.log('2: Sync');"
          },
          {
            title: "กด Enter สังเกตผลลัพธ์",
            detail: "สังเกตลำดับของตัวเลขที่ปรากฏใน Console"
          },
          {
            title: "วิเคราะห์สาเหตุ",
            detail: "ทำความเข้าใจว่าทำไมเลข 3 (Promise) จึงแซงหน้าเลข 4 (setTimeout 0ms) เสมอ"
          }
        ],
        verification: "ข้อความบน Console ต้องเรียงลำดับเป็น: '1: Sync' ตามด้วย '2: Sync' ตามด้วย '3: Microtask' และปิดท้ายด้วย '4: Macrotask' อย่างแม่นยำ 100%"
      }
    },

    {
      id: "web-5",
      title: "Tailwind CSS: สถาปัตยกรรม Utility-First, JIT Compiler และการสร้าง Design System",
      description: "ผ่าแนวคิด Utility-First, การทำงานของ Tailwind Just-In-Time (JIT) Engine, การสร้าง Design Tokens (Colors, Typography, Spacing), การออกแบบ Dark Mode ด้วย Class Strategy และการลดขนาด CSS เหลือต่ำกว่า 15KB",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม Tailwind CSS และแนวคิด Utility-First

**Tailwind CSS** เป็น CSS Framework ที่ปฏิวัติวงการพัฒนาเว็บแอปพลิเคชันทั่วโลก โดยเปลี่ยนจากการเขียนคลาส Semantic ขนาดใหญ่ (\`.user-profile-card-container\`) มาเป็นการผสมผสานคลาสอรรถประโยชน์ขนาดเล็ก (**Utility Classes**) ที่ทำงานเดี่ยวๆ เข้าด้วยกัน

---

## 1. ทำไม Utility-First จึงชนะสถาปัตยกรรม CSS แบบเดิม?

| ปัญหาของ CSS แบบเดิม (BEM / Semantic CSS) | การแก้ปัญหาของ Tailwind CSS |
|---|---|
| **ต้องเสียเวลาคิดชื่อคลาสใหม่ตลอดเวลา** (\`header__nav--active\`) | ใช้คลาสตามคุณสมบัติจริง (\`flex\`, \`items-center\`, \`bg-blue-600\`) |
| **ขนาดไฟล์ CSS โตขึ้นเรื่อยๆ** เมื่อโปรเจกต์ใหญ่ขึ้น (CSS Bloat) | **ขนาดไฟล์ CSS คงที่ (Flat-line)** เพราะคลาสถูกนำกลับมาใช้ซ้ำทั้งหมด |
| **ความขัดแย้งของ CSS Specificity** (การเขียนทับกันมั่ว) | คลาส Utility อยู่ในเลเยอร์เดียวกัน ไม่มีปัญหาแย่งชิงความสำคัญ |
| **กลัวการลบโค้ด CSS** เพราะไม่รู้ว่ากระทบหน้าอื่นหรือไม่ | ลบเฉพาะใน HTML/JSX หน้านั้นๆ ได้อย่างมั่นใจ ปลอดภัย 100% |

---

## 2. การทำงานของ Tailwind Just-In-Time (JIT) Engine

ในเวอร์ชันก่อนหน้า Tailwind ต้องสร้างไฟล์ CSS ขนาดใหญ่หลายสิบเมกะไบต์ที่มีคลาสทุกตัวเตรียมไว้
ในเวอร์ชันปัจจุบัน **JIT Engine** จะทำการสแกนไฟล์เทมเพลต (\`.html\`, \`.tsx\`, \`.jsx\`) แบบเรียลไทม์ และ **สร้างเฉพาะ CSS คลาสที่มีการเรียกใช้จริงเท่านั้น!**
- รองรับค่าอิสระ (Arbitrary Values): เช่น \`w-[347px]\`, \`bg-[#1da1f2]\`, \`top-[calc(100%-20px)]\`
- เมื่อทำคำสั่ง \`npm run build\` ระบบจะสร้างไฟล์ CSS ปลายทางที่มีขนาดกะทัดรัดเพียง **$10\\text{ KB} - 20\\text{ KB}$** เท่านั้น

---

## 3. การออกแบบระบบ Dark Mode ด้วย Class Strategy

การทำ Dark Mode มี 2 กลยุทธ์:
1. \`media\`: เปลี่ยนตามธีมของระบบปฏิบัติการ (Windows/macOS)
2. \`class\` **(แนะนำสูงสุด):** ควบคุมผ่านการเติมคลาส \`dark\` ลงในแท็ก \`<html>\` ทำให้นักพัฒนาสามารถสร้างปุ่มสลับธีม (Theme Toggle) ให้ผู้ใช้เลือกได้อย่างอิสระ

\`\`\`html
<!-- ตัวอย่างการเขียน Dark Mode ใน Tailwind -->
<div class="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
  เนื้อหาจะสลับสีพื้นหลังและตัวหนังสืออัตโนมัติเมื่อมีคลาส .dark ในแท็ก <html>
</div>
\`\`\``,
      codeExample: {
        language: "javascript",
        code: `// tailwind.config.js
// การกำหนด Design System และธีมมาตรฐานระดับองค์กร
/** @type {import('tailwindcss').Config} */
module.exports = {
  // บังคับใช้คลาส .dark ในการสลับธีม
  darkMode: 'class',
  
  // สแกนเฉพาะไฟล์ที่ใช้งานจริงเพื่อการ Compile ขนาดจิ๋ว
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        slate: {
          850: '#151f32', // เพิ่มสเปกตรัมสีเข้มพิเศษสำหรับ Dark UI
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(14, 165, 233, 0.5)',
      }
    },
  },
  plugins: [],
};`,
        description: "ไฟล์คอนฟิก tailwind.config.js กำหนด Design System Tokens, Dark Mode, และ Custom Colors"
      },
      quiz: [
        {
          id: "web-5-q1",
          question: "เหตุใดระบบ Just-In-Time (JIT) Engine ของ Tailwind CSS จึงทำให้เว็บไซต์โหลดเร็วกว่าการใช้ CSS Framework แบบดั้งเดิมอย่างเห็นได้ชัด?",
          options: [
            "เพราะบีบอัดรูปภาพให้อัตโนมัติ",
            "เพราะสแกนไฟล์ต้นฉบับและสร้างเฉพาะคลาส CSS ที่มีการเรียกใช้จริงในหน้าเว็บเท่านั้น ส่งผลให้ไฟล์ CSS สุดท้ายในโปรดักชันมีขนาดเล็กมากเพียง 10-20 KB",
            "เพราะทำให้เบราว์เซอร์ไม่ต้องอ่านโค้ด HTML",
            "เพราะเปลี่ยนโค้ด CSS เป็นภาษา C++"
          ],
          correctAnswer: 1,
          explanation: "Tailwind JIT สแกนซอร์สโค้ดและสร้าง CSS rules เฉพาะที่ถูกใช้งานจริงเท่านั้น คลาสที่ไม่ถูกเรียกใช้จะไม่ถูกรวมเข้ามาในไฟล์ CSS ปลายทาง ทำให้การส่งผ่านเครือข่ายใช้เวลาน้อยมาก"
        },
        {
          id: "web-5-q2",
          question: "หากต้องการให้ปุ่มใน Tailwind CSS มีสีฟ้าบนจอมือถือ แต่เปลี่ยนเป็นสีเขียวเมื่อเปิดบนหน้าจอคอมพิวเตอร์ (ขนาดหน้าจอระดับ Desktop - lg) ต้องเขียนคลาสอย่างไร?",
          options: [
            "bg-blue-600 screen-lg:bg-green-600",
            "bg-blue-600 lg:bg-green-600",
            "mobile:bg-blue-600 desktop:bg-green-600",
            "bg-blue-600 @media(lg){ bg-green-600 }"
          ],
          correctAnswer: 1,
          explanation: "Tailwind CSS ใช้หลักการ Mobile-First Responsive โดยคลาสที่ไม่มี Prefix (bg-blue-600) จะมีผลกับทุกขนาดหน้าจอ และคลาสที่มี Prefix เช่น lg:bg-green-600 จะทำงานเมื่อหน้าจอมีความกว้างถึง Breakpoint lg (1024px ขึ้นไป)"
        }
      ],
      labGuide: {
        title: "แล็บติดตั้ง Tailwind CSS และสร้างปุ่ม Toggle สลับ Dark Mode",
        toolName: "VS Code & Tailwind CLI",
        downloadUrl: "https://tailwindcss.com/docs/installation",
        objective: "คอนฟิก darkMode: 'class' ใน Tailwind CSS และเขียน JavaScript สลับคลาส 'dark' บนแท็ก document.documentElement",
        steps: [
          {
            title: "สร้างโครงสร้างโปรเจกต์",
            detail: "เปิดเทอร์มินัล รันคำสั่ง npm init -y และ npm install -D tailwindcss จากนั้นรัน npx tailwindcss init เพื่อสร้างไฟล์คอนฟิก"
          },
          {
            title: "ตั้งค่า darkMode ในคอนฟิก",
            detail: "เปิด tailwind.config.js ใส่บรรทัด darkMode: 'class'"
          },
          {
            title: "สร้างหน้าเว็บที่มีปุ่มสลับธีม",
            detail: "สร้างไฟล์ index.html ใส่การ์ดที่มีคลาส bg-white dark:bg-slate-900 และสร้างปุ่ม <button id='theme-btn'>"
          },
          {
            title: "เขียนสคริปต์สลับคลาส",
            detail: "เพิ่มโค้ด JS: document.getElementById('theme-btn').addEventListener('click', () => document.documentElement.classList.toggle('dark'))"
          }
        ],
        verification: "เมื่อคลิกที่ปุ่มสลับธีม สีพื้นหลังและตัวหนังสือของการ์ดจะสลับระหว่างธีมสว่างและธีมมืดอย่างราบรื่นทันที"
      }
    },

    {
      id: "web-6",
      title: "การพัฒนาเว็บแอปพลิเคชันด้วย React 18: สถาปัตยกรรม Fiber Reconciler, Hooks และการเพิ่มประสิทธิภาพ",
      description: "ผ่าโครงสร้าง React 18 Fiber Architecture, การคำนวณ Virtual DOM Diffing, วงจรชีวิตของ Hooks (useState, useEffect, useMemo, useCallback, useRef), Automatic Batching, และเทคนิคการป้องกัน Re-render ไร้สาระ",
      duration: "65 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมภายใน React 18 และกลไก Fiber Reconciler

**React** คือไลบรารีส่วนต่อประสานผู้ใช้ (UI Library) ที่พัฒนาโดย Meta ซึ่งขับเคลื่อนเว็บไซต์ชั้นนำระดับโลก กลไกหัวใจของ React ไม่ใช่การแตะต้อง DOM จริงโดยตรง แต่เป็นการคำนวณผ่าน **Fiber Reconciler Tree**

---

## 1. การทำงานของ Virtual DOM และ Fiber Architecture

\`\`\`
State มีการเปลี่ยนแปลง (setState)
               │
               ▼
[ 1. Render Phase (เบา, หยุดพักได้) ]
  - React สร้าง Virtual DOM Tree จำลองชุดใหม่ขึ้นมา
  - Fiber Engine เปรียบเทียบความแตกต่าง (Diffing Algorithm)
  - จัดลำดับความสำคัญของงาน (Priority Lanes เช่น ข้อมูลผู้ใช้สำคัญกว่าแอนิเมชัน)
               │
               ▼
[ 2. Commit Phase (เร็ว, ไม่มีการหยุดพัก) ]
  - React นำเฉพาะจุดที่แตกต่าง (Mutations) ไปแก้ไขลงบน Real DOM ในบราวเซอร์
  - เรียกใช้งาน Layout Effects และ Effects
\`\`\`

---

## 2. เจาะลึกกฎเหล็กของ React Hooks

1. **ห้ามเรียกใช้ Hook ภายในเงื่อนไข (if/else), ลูป (for/while), หรือฟังก์ชันซ้อนฟังก์ชัน:** เพราะ React จดจำสถานะของ Hook ด้วย **ลำดับการเรียก (Call Order Array)** หากลำดับเพี้ยน สถานะของคอมโพเนนต์จะผิดพลาดทันที
2. **การทำความเข้าใจ \`useEffect\` Dependency Array:**
   - \`[]\` (อาเรย์ว่าง): รันครั้งเดียวเมื่อคอมโพเนนต์ Mount เข้าสู่หน้าจอ และรัน Cleanup เมื่อ Unmount
   - \`[dep1, dep2]\`: รันทุกครั้งที่ตัวแปร \`dep1\` หรือ \`dep2\` เปลี่ยนค่า
   - *ห้ามลืมใส่ Cleanup Function:* สำหรับงานที่เปิด Event Listener หรือ Interval ไว้ เพื่อป้องกัน Memory Leak!

---

## 3. การปรับแต่งประสิทธิภาพเพื่อป้องกัน Re-render พร่ำเพรื่อ (Optimization)

คอมโพเนนต์ลูกจะทำการ Re-render อัตโนมัติทุกครั้งที่คอมโพเนนต์แม่เกิดการ Re-render หากเรามีตารางขนาดใหญ่ จะทำให้เกิดอาการ **กระตุก (Lag/Stutter)**

| เครื่องมือเพิ่มประสิทธิภาพ | กลไกการทำงาน | กรณีที่ควรเลือกใช้งาน |
|---|---|---|
| **\`React.memo()\`** | จดจำคอมโพเนนต์ไว้ หาก Props ไม่เปลี่ยน จะข้ามการ Re-render ทันที | คอมโพเนนต์ลูกที่มีขนาดใหญ่และ Props คงที่ |
| **\`useMemo()\`** | แคชผลลัพธ์ของการคำนวณที่หนักหน่วง (Expensive Calculation) | การกรอง (Filter), การเรียงลำดับ (Sort) ข้อมูลนับพันแถว |
| **\`useCallback()\`** | แคชตัวฟังก์ชันเดิมไว้ ไม่สร้างฟังก์ชันใหม่ขึ้นมาในหน่วยความจำทุกรอบ | เมื่อต้องส่งฟังก์ชันเป็น Props ลงไปให้คอมโพเนนต์ลูกที่ครอบด้วย \`React.memo\` |
| **\`useRef()\`** | บันทึกค่าที่ต้องการจำ แต่ **ไม่ต้องการให้คอมโพเนนต์ Re-render เมื่อค่าเปลี่ยน** | เก็บตัวจับเวลา Timer ID, การเข้าถึง DOM Node ตรงๆ |`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// คอมโพเนนต์ React 18 ระดับวิศวกรรม: ปรับแต่ง Re-render ประสิทธิภาพสูง
// เทคโนโลยี: React.memo, useMemo, useCallback, useRef
// =================================================================

import React, { useState, useMemo, useCallback, useRef } from 'react';

// 1. คอมโพเนนต์ลูกที่ครอบด้วย React.memo เพื่อข้ามการ Re-render หาก Props ไม่เปลี่ยน
const StudentRow = React.memo(({ student, onSelect }) => {
  console.log(\`[RENDER] คอมโพเนนต์แถวนักศึกษา ID: \${student.id}\`);
  return (
    <tr className="border-b hover:bg-slate-800">
      <td className="p-3">{student.id}</td>
      <td className="p-3 font-semibold">{student.name}</td>
      <td className="p-3">{student.gpa.toFixed(2)}</td>
      <td className="p-3">
        <button
          onClick={() => onSelect(student.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
        >
          ดูรายละเอียด
        </button>
      </td>
    </tr>
  );
});

StudentRow.displayName = 'StudentRow';

export default function StudentDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMinGpa, setFilterMinGpa] = useState(0);
  
  // จำลองฐานข้อมูลนักศึกษา 1,000 คน
  const [students] = useState([
    { id: 101, name: "สมชาย สายโค้ด", gpa: 3.85 },
    { id: 102, name: "สมหญิง นิ่งสงบ", gpa: 3.40 },
    { id: 103, name: "ก้องเกียรติ เน็ตเวิร์ก", gpa: 2.75 },
    { id: 104, name: "วิศรุต สมองกล", gpa: 3.95 },
  ]);

  // ตัวแปร useRef เก็บจำนวนครั้งที่คอมโพเนนต์แม่ถูก Render โดยไม่ทำให้เกิด Re-render ซ้ำ
  const renderCounter = useRef(0);
  renderCounter.current++;

  // 2. useMemo แคชผลลัพธ์การกรองข้อมูล จะคำนวณใหม่ต่อเมื่อ searchTerm หรือ filterMinGpa เปลี่ยนเท่านั้น
  const filteredStudents = useMemo(() => {
    console.log("[CALCULATION] กำลังกรองข้อมูลนักศึกษาด้วย useMemo...");
    return students.filter(s => 
      s.name.includes(searchTerm) && s.gpa >= filterMinGpa
    );
  }, [students, searchTerm, filterMinGpa]);

  // 3. useCallback แคชฟังก์ชันส่งลงลูก เพื่อให้ Referential Equality คงเดิม (ไม่สร้างฟังก์ชันใหม่)
  const handleSelectStudent = useCallback((id) => {
    console.log(\`[ACTION] ผู้ใช้เลือกดูรายละเอียดนักศึกษา ID: \${id}\`);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">ทำเนียบนักศึกษาเทคโนโลยีสารสนเทศ</h2>
        <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400">
          Render ครั้งที่: {renderCounter.current}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="ค้นหาชื่อนักศึกษา..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-800 border border-slate-700 p-2.5 rounded-lg text-white"
        />
        <select
          value={filterMinGpa}
          onChange={(e) => setFilterMinGpa(Number(e.target.value))}
          className="bg-slate-800 border border-slate-700 p-2.5 rounded-lg text-white"
        >
          <option value="0">เกรดเฉลี่ยทั้งหมด</option>
          <option value="3.0">เกรดเฉลี่ย 3.00 ขึ้นไป</option>
          <option value="3.5">เกรดเฉลี่ย 3.50 ขึ้นไป</option>
        </select>
      </div>

      <table className="w-full text-left">
        <thead className="bg-slate-800 text-slate-400 uppercase text-xs">
          <tr>
            <th className="p-3">รหัส</th>
            <th className="p-3">ชื่อ-สกุล</th>
            <th className="p-3">เกรด (GPA)</th>
            <th className="p-3">การกระทำ</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <StudentRow
              key={student.id}
              student={student}
              onSelect={handleSelectStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
        description: "สถาปัตยกรรมคอมโพเนนต์ React 18 พร้อมการใช้งาน useMemo, useCallback และ React.memo ป้องกัน Re-render 100%"
      },
      quiz: [
        {
          id: "web-6-q1",
          question: "ใน React Hook เหตุใดจึงต้องใช้ useCallback ครอบฟังก์ชันที่ส่งเป็น Props ลงไปให้คอมโพเนนต์ลูกที่ถูกครอบด้วย React.memo?",
          options: [
            "เพื่อให้ฟังก์ชันรันเร็วขึ้น 10 เท่า",
            "เพราะในการ Re-render แต่ละรอบ ฟังก์ชันปกติจะถูกสร้างขึ้นใหม่ในหน่วยความจำเสมอ ทำให้ค่าอ้างอิง (Referential Equality) เปลี่ยนไป ส่งผลให้ React.memo คิดว่า Props เปลี่ยนและ Re-render ลูกโดยไม่จำเป็น",
            "เพื่อบันทึกฟังก์ชันลงฐานข้อมูล",
            "เพื่อป้องกันการคลิกเบิ้ล"
          ],
          correctAnswer: 1,
          explanation: "ในภาษา JavaScript ออบเจกต์และฟังก์ชันจะถูกเปรียบเทียบด้วย Memory Reference การสร้างฟังก์ชันใหม่ในทุกรอบ Render จะทำให้ลูกเข้าใจว่าได้รับ Props ตัวใหม่เสมอ การใช้ useCallback จะช่วยตรึงการอ้างอิงเดิมไว้ตราบใดที่ Dependencies ไม่เปลี่ยน"
        },
        {
          id: "web-6-q2",
          question: "หากต้องการเก็บค่าตัวแปรหนึ่งไว้ในคอมโพเนนต์ React โดยต้องการให้ค่านั้นคงอยู่ข้ามรอบ Render แต่ **ไม่ต้องการให้คอมโพเนนต์ Re-render เมื่อค่านั้นเปลี่ยนแปลง** ควรเลือกใช้ Hook ใด?",
          options: [
            "useState",
            "useReducer",
            "useRef",
            "useEffect"
          ],
          correctAnswer: 2,
          explanation: "useRef ให้บริการ Plain JavaScript Object ที่มีคุณสมบัติ .current สามารถอ่านและเขียนค่าได้ตลอดเวลาโดยไม่มีผลกระทบต่อวงจรการ Re-render ของคอมโพเนนต์ เหมาะกับการเก็บ Timer ID หรือสถานะเบื้องหลัง"
        }
      ],
      labGuide: {
        title: "แล็บตรวจสอบการ Re-render ของ React คอมโพเนนต์ด้วย React Developer Tools Profiler",
        toolName: "React Developer Tools Extension",
        downloadUrl: "https://react.dev/learn/react-developer-tools",
        objective: "ติดตั้ง React DevTools บนเบราว์เซอร์ เปิดใช้งานตัวเลือก 'Highlight updates when components render' และสังเกตการ Re-render ที่ลดลงเมื่อใส่ React.memo",
        steps: [
          {
            title: "ติดตั้งส่วนเสริม React DevTools",
            detail: "ติดตั้ง Extension 'React Developer Tools' ลงใน Google Chrome หรือ Edge"
          },
          {
            title: "เปิดการเน้นสี Component Render",
            detail: "กด F12 ไปที่แท็บ Components คลิกไอคอนฟันเฟือง Settings ติ๊กเลือก 'Highlight updates when components render'"
          },
          {
            title: "ทดสอบพิมพ์ในช่องค้นหา",
            detail: "เปิดโปรเจกต์ React ทดลองพิมพ์ข้อความในช่อง Input สังเกตเส้นขอบกระพริบสีเขียวบนหน้าจอ"
          },
          {
            title: "เปรียบเทียบผลลัพธ์",
            detail: "สังเกตว่าเมื่อใช้ React.memo และ useCallback ร่วมกัน จะมีเพียงช่อง Input และตารางที่เปลี่ยนค่าเท่านั้นที่ถูกเรนเดอร์ใหม่ ส่วนคอมโพเนนต์แถวอื่นจะไม่ถูกเรนเดอร์ซ้ำซ้อน"
          }
        ],
        verification: "ในหน้าจอแสดงผล ขณะพิมพ์ค้นหาชื่อ แถวนักศึกษาที่มีข้อมูลคงเดิมจะต้องไม่มีกรอบสีเขียวกระพริบขึ้นมา ซึ่งพิสูจน์ได้ว่าข้ามการ Re-render สำเร็จสมบูรณ์"
      }
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "web-7",
      title: "Full-Stack Next.js 14: App Router, React Server Components (RSC) และ Server Actions",
      description: "ทำความเข้าใจสถาปัตยกรรม App Router, ความแตกต่างอย่างสิ้นเชิงระหว่าง Server Components กับ Client Components ('use client'), การแคชข้อมูลและการ Revalidate (ISR), Server Actions แทน Express API, และ Streaming SSR ด้วย Suspense",
      duration: "70 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Full-Stack ยุคใหม่ด้วย Next.js 14 App Router

**Next.js 14** พัฒนาโดย Vercel เป็นเฟรมเวิร์กมาตรฐานอันดับหนึ่งสำหรับการสร้างเว็บแอปพลิเคชันระดับองค์กร โดยผสาน Frontend และ Backend เข้าไว้ในโปรเจกต์เดียวกันผ่านสถาปัตยกรรม **React Server Components (RSC)**

---

## 1. เปรียบเทียบสถาปัตยกรรม: Server Components vs Client Components

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│ 1. React Server Components (RSC - ค่าเริ่มต้นของ App Router)  │
│    - รันบนเซิร์ฟเวอร์ Node.js เท่านั้น (Zero Client JS Bundle) │
│    - เชื่อมต่อฐานข้อมูล (Database/Prisma) หรืออ่านไฟล์ได้โดยตรง   │
│    - เก็บรหัสผ่านลับและ API Keys ได้อย่างปลอดภัย 100%       │
│    - ไม่สามารถใช้ Hooks (useState, useEffect) หรือ onClick ได้   │
└──────────────────────────────┬──────────────────────────────┘
                               │ (ส่งเฉพาะ HTML + RSC Payload ลงมา)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Client Components (ต้องใส่ "use client"; บนสุดของไฟล์)     │
│    - รันบนเบราว์เซอร์ของไคลเอนต์ (ดาวน์โหลด JS เพิ่มเติม)   │
│    - ใช้งาน Event Listeners (onClick, onChange, onSubmit)    │
│    - ใช้งาน React Hooks (useState, useEffect, useReducer)    │
│    - ใช้งาน Browser APIs (localStorage, geolocation, window)│
└─────────────────────────────────────────────────────────────┘
\`\`\`

---

## 2. การสตรีมมิ่งข้อมูล (Streaming SSR) ด้วย React Suspense

ในอดีต (SSR รุ่นเก่า) หน้าเว็บทั้งหน้าจะติดค้างรอจนกว่าข้อมูลฐานข้อมูลที่ช้าที่สุดจะโหลดเสร็จ
ใน Next.js 14 เราสามารถใช้ **\`<Suspense fallback={<Skeleton />}>\`** เพื่อส่งโครงหน้าเว็บส่วนที่พร้อมออกไปให้ผู้ใช้เห็นทันที และสตรีมชิ้นส่วนที่ช้าตามลงมาทีหลังผ่าน HTTP Chunked Transfer Encoding

\`\`\`tsx
export default function DashboardPage() {
  return (
    <div>
      <h1>แดชบอร์ดระบบ</h1>
      {/* สตรีมมิ่งส่วนที่โหลดช้าแยกต่างหาก */}
      <Suspense fallback={<p>กำลังโหลดสถิตินักศึกษา...</p>}>
        <SlowStatisticsSection />
      </Suspense>
    </div>
  );
}
\`\`\`

---

## 3. ปฏิวัติ Backend ด้วย Next.js Server Actions (\`"use server"\`)

หมดยุคของการสร้างไฟล์ \`pages/api/submit.js\`, เขียนคำสั่ง \`fetch('/api/submit')\`, และจัดการสถานะ Loading ด้วยตัวเอง
**Server Actions** ช่วยให้นักพัฒนาเขียนฟังก์ชันฝั่ง Server และผูกเข้ากับฟอร์ม HTML ได้โดยตรง:
- รองรับการทำงานแม้ปิด JavaScript บนเบราว์เซอร์ (Progressive Enhancement)
- มีระบบ CSRF Protection ในตัว
- สั่งอัปเดตข้อมูลบนหน้าจอทันทีด้วย \`revalidatePath('/courses')\``,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// ตัวอย่าง Next.js 14 App Router: Server Action ร่วมกับ Server Component
// แฟ้มที่ 1: src/app/actions/courseActions.ts (Server Action)
// =================================================================
"use server";

import { revalidatePath } from "next/cache";

// ฟังก์ชัน Server Action สำหรับเพิ่มหลักสูตรใหม่
export async function createCourseAction(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const price = Number(formData.get("price"));

  // 1. ตรวจสอบความถูกต้องของข้อมูล (Server-side Validation)
  if (!title || title.trim().length < 5) {
    return { success: false, error: "ชื่อหลักสูตรต้องมีความยาวอย่างน้อย 5 ตัวอักษร" };
  }

  try {
    // 2. จำลองการเชื่อมต่อฐานข้อมูลโดยตรงบนเซิร์ฟเวอร์
    console.log(\`[DB] บันทึกหลักสูตรใหม่: "\${title}" ราคา \${price} บาท\`);
    
    // 3. ล้างแคชหน้า /courses เพื่อให้ผู้ใช้ทุกคนเห็นข้อมูลใหม่ทันที
    revalidatePath("/courses");

    return { success: true, message: "สร้างหลักสูตรใหม่สำเร็จเรียบร้อย!" };
  } catch (err) {
    return { success: false, error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  }
}

// =================================================================
// แฟ้มที่ 2: src/app/courses/new/page.tsx (Client Form Component)
// =================================================================
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createCourseAction } from "../../actions/courseActions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
    >
      {pending ? "กำลังบันทึกข้อมูล..." : "สร้างหลักสูตร"}
    </button>
  );
}

export default function NewCoursePage() {
  const [state, formAction] = useFormState(createCourseAction, null);

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-xl mt-10">
      <h2 className="text-xl font-bold mb-4">เพิ่มหลักสูตรใหม่ (Next.js 14)</h2>

      {state?.error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded mb-4 text-sm">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-300 p-3 rounded mb-4 text-sm">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-slate-300">ชื่อหลักสูตร</label>
          <input
            name="title"
            type="text"
            required
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-300">ราคา (บาท)</label>
          <input
            name="price"
            type="number"
            required
            className="w-full bg-slate-800 border border-slate-700 p-2 rounded text-white"
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}`,
        description: "สถาปัตยกรรม Next.js 14 ผสาน Client Form Component เข้ากับ Server Actions และ useFormStatus"
      },
      quiz: [
        {
          id: "web-7-q1",
          question: "ใน Next.js 14 App Router คอมโพเนนต์ใดที่สามารถเข้าถึงฐานข้อมูลหรืออ่านไฟล์บนเซิร์ฟเวอร์ได้โดยตรง โดยที่โค้ดและข้อมูลลับจะไม่ถูกส่งลงมายังเบราว์เซอร์ของไคลเอนต์?",
          options: [
            "Client Components ที่มี directive \"use client\";",
            "React Server Components (RSC) ซึ่งเป็นค่าเริ่มต้นของทุกคอมโพเนนต์",
            "Service Worker",
            "Redux Store"
          ],
          correctAnswer: 1,
          explanation: "React Server Components (RSC) จะประมวลผลบนเซิร์ฟเวอร์ 100% และส่งเฉพาะผลลัพธ์โครงสร้าง HTML และ JSON Payload ลงมายังเบราว์เซอร์ โค้ดฐานข้อมูลและกุญแจลับจึงปลอดภัยอย่างสมบูรณ์และไม่เปลืองขนาด JavaScript Bundle"
        },
        {
          id: "web-7-q2",
          question: "คำสั่ง revalidatePath() ใน Next.js Server Actions มีหน้าที่สำคัญอย่างไร?",
          options: [
            "สั่งรีสตาร์ตเครื่องเซิร์ฟเวอร์",
            "สั่งล้างแคชของเส้นทาง URL ที่ระบุ เพื่อให้ Next.js โหลดข้อมูลใหม่จากฐานข้อมูลและส่งหน้าเว็บเวอร์ชันล่าสุดให้ผู้ใช้ทันที",
            "เปลี่ยนชื่อโดเมนของเว็บไซต์",
            "ลบรูปภาพทั้งหมดในโฟลเดอร์ public"
          ],
          correctAnswer: 1,
          explanation: "Next.js มีระบบ Aggressive Caching เพื่อความเร็วระดับมิลลิวินาที คำสั่ง revalidatePath('/courses') จะสั่งทำลายแคชเก่าของเส้นทางนั้นทิ้ง ทำให้ผู้ใช้งานทุกคนมองเห็นข้อมูลใหม่ที่เพิ่งถูกเพิ่มเข้าไปในทันที"
        }
      ],
      labGuide: {
        title: "แล็บสร้างฟอร์มบันทึกข้อมูลด้วย Next.js 14 Server Actions และ useFormState",
        toolName: "Node.js & Next.js 14",
        downloadUrl: "https://nextjs.org/",
        objective: "สร้าง Server Action บันทึกข้อมูล ตรวจสอบ Error ฝั่งเซิร์ฟเวอร์ และแสดงสถานะ Pending ผ่าน useFormStatus โดยไม่ต้องเขียน REST API แยก",
        steps: [
          {
            title: "สร้างโปรเจกต์ Next.js",
            detail: "เปิดเทอร์มินัล รันคำสั่ง npx create-next-app@latest it-academy-demo --typescript --tailwind --app"
          },
          {
            title: "สร้างไฟล์ Server Action",
            detail: "สร้างโฟลเดอร์ src/app/actions และสร้างไฟล์ courseActions.ts ใส่ directive \"use server\"; ที่บรรทัดแรก"
          },
          {
            title: "สร้างฟอร์มในหน้า Page",
            detail: "สร้างไฟล์ src/app/courses/new/page.tsx ใส่ directive \"use client\"; และเชื่อมต่อฟอร์มเข้ากับ Server Action"
          },
          {
            title: "ทดสอบการทำงานของระบบ",
            detail: "รัน npm run dev เปิดบราวเซอร์ไปที่ http://localhost:3000/courses/new ทดลองส่งฟอร์มเพื่อดูการทำงานแบบอะซิงโครนัส"
          }
        ],
        verification: "เมื่อกรอกข้อมูลและกดปุ่ม 'สร้างหลักสูตร' ปุ่มจะแสดงสถานะ 'กำลังบันทึกข้อมูล...' และแสดงกล่องข้อความสีเขียวแจ้งเตือนว่าบันทึกสำเร็จโดยหน้าเว็บไม่มีการกระพริบรีโหลดทั้งหน้า"
      }
    },

    {
      id: "web-8",
      title: "สถาปัตยกรรมความปลอดภัยและการยืนยันตัวตน: HttpOnly JWT, Password Hashing และ Prisma ORM",
      description: "ทำความเข้าใจ Stateless JWT vs Stateful Database Sessions, โครงสร้าง Access Token & Refresh Token Rotation, การจัดเก็บ Cookie อย่างปลอดภัย (HttpOnly, Secure, SameSite), การป้องกัน SQLi ด้วย Prisma ORM และการบริหารความสัมพันธ์ข้อมูล (Relations)",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรมความมั่นคงปลอดภัยและการจัดการฐานข้อมูลในเว็บแอปพลิเคชัน

ระบบเว็บระดับโปรดักชันต้องการการบริหารจัดการข้อมูลที่มีความสัมพันธ์กัน (Relational Data) ควบคู่ไปกับระบบพิสูจน์ตัวตน (Authentication) และการควบคุมสิทธิ์ (Authorization) ที่ไม่ตกเป็นเหยื่อของการโจมตีทางไซเบอร์

---

## 1. เปรียบเทียบที่เก็บ Session Token: LocalStorage vs HttpOnly Cookie

> [!CAUTION]
> **กับดักความปลอดภัยยอดนิยม:**
> นักพัฒนาจำนวนมากนิยมเก็บ JWT Token ไว้ใน \`localStorage\` หรือ \`sessionStorage\` เพราะเขียนโค้ดง่าย แต่ **\`localStorage\` สามารถถูกโค้ด JavaScript ใดๆ บนหน้าเว็บอ่านได้ 100%!**
> หากเว็บมีช่องโหว่ XSS (Cross-Site Scripting) แม้แต่จุดเดียว แฮกเกอร์จะขโมย Token ออกไปสวมรอยเป็นผู้ใช้ได้ทันที

### แนวทางมาตรฐานระดับสากล (OWASP Recommended):
ต้องเก็บ Session Token ไว้ใน **HTTP Cookie ที่มีแฟล็กความปลอดภัยครบ 3 ประการ**:
\`\`\`http
Set-Cookie: auth_token=jwt_string_here; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=86400
\`\`\`
1. **\`HttpOnly\`:** ป้องกันไม่ให้ JavaScript (รวมถึง document.cookie) เข้าถึงโทเคนได้โดยเด็ดขาด ตัดความเสี่ยงเรื่อง XSS ขโมยโทเคนทิ้ง 100%
2. **\`Secure\`:** ส่งผ่านการเชื่อมต่อที่เข้ารหัสลับ HTTPS เท่านั้น ป้องกันการดักฟังแพ็กเก็ต (Sniffing)
3. **\`SameSite=Lax / Strict\`:** บล็อกการส่งคุกกี้ข้ามโดเมนแปลกปลอม ป้องกันการโจมตีแบบ CSRF

---

## 2. การจัดการฐานข้อมูลแบบ Type-Safe ด้วย Prisma ORM

แทนที่จะเขียนคำสั่ง SQL ดิบซึ่งเสี่ยงต่อการสะกดชื่อคอลัมน์ผิดและช่องโหว่ SQL Injection เราใช้ **Prisma ORM** ซึ่งแปลง Schema ให้กลายเป็น Type Definition ใน TypeScript โดยอัตโนมัติ

\`\`\`prisma
// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String   // บันทึกเฉพาะ Password Hash (Argon2id หรือ bcrypt)
  name      String
  role      String   @default("student")
  createdAt DateTime @default(now())
  orders    Order[]
}

model Order {
  id        String   @id @default(uuid())
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
  total     Decimal  @db.Decimal(10, 2)
  status    String   @default("pending")
  createdAt DateTime @default(now())
}
\`\`\``,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรม Authentication API ใน Next.js 14 Route Handler
// ตรวจสอบรหัสผ่านด้วย bcrypt และบันทึก Token ลงใน HttpOnly Cookie
// แฟ้ม: src/app/api/auth/login/route.ts
// =================================================================

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose"; // ไลบรารี JWT ที่รองรับ Edge Runtime
import { cookies } from "next/headers";

// คีย์ลับสำหรับการลงลายมือชื่อดิจิทัล JWT (ต้องเก็บใน Environment Variable)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "SUPER_SECRET_KEY_IT_ACADEMY_2026_CHANGE_ME"
);

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // 1. ตรวจสอบข้อมูลเบื้องต้น
    if (!email || !password) {
      return NextResponse.json({ error: "กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน" }, { status: 400 });
    }

    // 2. ดึงข้อมูลผู้ใช้จากฐานข้อมูล (ตัวอย่างการค้นหา)
    // const user = await prisma.user.findUnique({ where: { email } });
    const mockUser = {
      id: 101,
      email: "somchai@itacademy.ac.th",
      passwordHash: "$2b$10$w8TKnq6f6rP0lG2I4y0Kue1e5lYq2tUjQ4qJ5pZ8x7c1b2c3d4e5f", // Hash ของคำว่า "Password123"
      name: "สมชาย สายโค้ด",
      role: "student"
    };

    if (email !== mockUser.email) {
      return NextResponse.json({ error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" }, { status: 401 });
    }

    // 3. ตรวจสอบความถูกต้องของรหัสผ่านด้วย bcrypt.compare
    const isPasswordValid = await bcrypt.compare(password, mockUser.passwordHash);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" }, { status: 401 });
    }

    // 4. สร้าง Signed JWT Token อายุ 2 ชั่วโมง
    const token = await new SignJWT({
      sub: String(mockUser.id),
      email: mockUser.email,
      role: mockUser.role,
      name: mockUser.name
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(JWT_SECRET);

    // 5. บันทึกลงใน HttpOnly Cookie อย่างปลอดภัย
    const cookieStore = cookies();
    cookieStore.set("auth_session", token, {
      httpOnly: true, // ✅ ห้าม JavaScript เข้าถึงเด็ดขาด ป้องกัน XSS
      secure: process.env.NODE_ENV === "production", // บังคับ HTTPS ใน Production
      sameSite: "lax", // ป้องกันการโจมตี CSRF
      path: "/",
      maxAge: 7200 // 2 ชั่วโมง (วินาที)
    });

    return NextResponse.json({
      success: true,
      message: "เข้าสู่ระบบสำเร็จเรียบร้อย",
      user: { id: mockUser.id, name: mockUser.name, email: mockUser.email, role: mockUser.role }
    });

  } catch (err: any) {
    return NextResponse.json({ error: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์" }, { status: 500 });
  }
}`,
        description: "สถาปัตยกรรม Next.js Route Handler จัดการ Login ด้วย bcrypt และการตั้งค่าคุกกี้ HttpOnly"
      },
      quiz: [
        {
          id: "web-8-q1",
          question: "เหตุใดมาตรฐานความมั่นคงปลอดภัยสากล (OWASP) จึงแนะนำให้จัดเก็บ Authentication Token ไว้ในคุกกี้ที่มีแฟล็ก HttpOnly แทนที่จะเก็บไว้ใน localStorage ของเบราว์เซอร์?",
          options: [
            "เพราะคุกกี้เก็บข้อมูลได้มากกว่า localStorage 100 เท่า",
            "เพราะ localStorage สามารถถูกโค้ด JavaScript ใดๆ บนหน้าเว็บอ่านได้ หากเว็บมีช่องโหว่ XSS แฮกเกอร์จะขโมยโทเคนไปได้ทันที ส่วน HttpOnly คุกกี้จะถูกบล็อกไม่ให้ JavaScript เข้าถึงได้เลย",
            "เพราะ localStorage ใช้งานไม่ได้บนโทรศัพท์มือถือ",
            "เพราะคุกกี้ไม่มีวันหมดอายุ"
          ],
          correctAnswer: 1,
          explanation: "localStorage ถูกเข้าถึงได้โดยตรงผ่าน window.localStorage หากผู้โจมตีฝังโค้ด XSS ได้สำเร็จจะสามารถส่งโทเคนออกไปยังเซิร์ฟเวอร์ภายนอกได้ทันที ในขณะที่ HttpOnly คุกกี้จะถูกจัดการโดยเบราว์เซอร์ในระดับเครือข่ายเท่านั้น โค้ด JavaScript ในหน้าเว็บจึงไม่สามารถอ่านค่าได้"
        },
        {
          id: "web-8-q2",
          question: "ใน Prisma ORM การใช้คำสั่งค้นหาข้อมูล เช่น prisma.user.findUnique({ where: { email } }) ช่วยป้องกันช่องโหว่ทางความปลอดภัยใดโดยอัตโนมัติ?",
          options: [
            "Cross-Site Scripting (XSS)",
            "SQL Injection (SQLi)",
            "Denial of Service (DDoS)",
            "DNS Spoofing"
          ],
          correctAnswer: 1,
          explanation: "Prisma ORM ใช้ Parameterized Queries ภายในตัวในการส่งคำสั่งไปยังฐานข้อมูล ข้อมูลอินพุตของผู้ใช้จะถูกแยกขาดจากโครงสร้างคำสั่ง SQL อย่างสิ้นเชิง ทำให้ผู้โจมตีไม่สามารถทำ SQL Injection ได้"
        }
      ],
      labGuide: {
        title: "แล็บการตรวจสอบคุกกี้ความปลอดภัย HttpOnly บน Chrome DevTools",
        toolName: "Google Chrome Application Panel",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "ทดสอบยิง API Login ตรวจสอบการตั้งค่าคุกกี้ในแท็บ Application ของ Chrome DevTools และทดลองใช้ JavaScript พยายามอ่านค่าเพื่อพิสูจน์ความปลอดภัย",
        steps: [
          {
            title: "เปิด DevTools ไปที่แท็บ Application",
            detail: "กด F12 ใน Google Chrome เลือกแท็บ 'Application' เมนูด้านซ้ายเลือก Storage > Cookies > คลิกเลือกโดเมนของคุณ"
          },
          {
            title: "ตรวจสอบคุณสมบัติของ auth_session",
            detail: "ค้นหาชื่อคุกกี้ auth_session และสังเกตคอลัมน์ 'HttpOnly', 'Secure', และ 'SameSite'"
          },
          {
            title: "ทดลองแฮกอ่านค่าผ่าน Console",
            detail: "สลับไปที่แท็บ Console พิมพ์คำสั่ง: document.cookie แล้วกด Enter"
          },
          {
            title: "วิเคราะห์ผลลัพธ์ความปลอดภัย",
            detail: "สังเกตว่าผลลัพธ์ของ document.cookie จะมองไม่เห็น auth_session เลยแม้แต่น้อย"
          }
        ],
        verification: "ในตารางคุกกี้แถว auth_session ต้องมีเครื่องหมายถูกในคอลัมน์ HttpOnly และคำสั่ง document.cookie ใน Console จะต้องไม่สามารถแสดงค่าโทเคนลับออกมาได้"
      }
    },

    {
      id: "web-9",
      title: "โปรเจกต์จบ: Full-Stack E-Commerce & การปรับแต่งประสิทธิภาพ Core Web Vitals (LCP, INP, CLS)",
      description: "ออกแบบระบบร้านค้าออนไลน์อุปกรณ์ไอทีครบวงจร: สถาปัตยกรรมตะกร้าสินค้าด้วย Zustand/Context, หน้ารายการสินค้าแบบ Responsive, ระบบ Checkout จำลอง, และการปรับแต่งประสิทธิภาพระดับโปรดักชันให้ผ่านเกณฑ์ Google Core Web Vitals",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# ออกแบบระบบร้านค้าออนไลน์ Full-Stack และการพิชิตเกณฑ์ Core Web Vitals

ในโปรเจกต์สุดท้ายนี้ คุณจะได้รวบรวมองค์ความรู้ทั้งหมดมาสร้างระบบร้านค้าอุปกรณ์ไอที **(IT Academy Hardware Store)** ที่รองรับการสั่งซื้อสินค้า ตะกร้าสินค้าแบบเรียลไทม์ และได้รับการปรับแต่งประสิทธิภาพจนได้คะแนน **Google Core Web Vitals สีเขียว 100/100**

---

## 1. เกณฑ์มาตรฐานประสิทธิภาพเว็บระดับโลก: Google Core Web Vitals

Google ใช้เมตริก Core Web Vitals เป็นหนึ่งในปัจจัยหลักในการจัดอันดับผลการค้นหา (SEO Ranking Factor):

\`\`\`
1. Largest Contentful Paint (LCP - ความเร็วในการแสดงเนื้อหาชิ้นใหญ่สุด)
   - วัดเวลาตั้งแต่เริ่มโหลดจนกระทั่งภาพ Hero หรือหัวข้อใหญ่สุดปรากฏบนจอ
   - เกณฑ์มาตรฐาน: ต้องเร็วกว่า 2.5 วินาที (Good <= 2.5s)
   - เทคนิคปรับแต่ง: ใช้ Next.js <Image priority>, แปลงภาพเป็น WebP/AVIF, และทำ Preload Critical Fonts

2. Interaction to Next Paint (INP - ความไวในการตอบสนองต่อการสัมผัส/คลิก)
   - วัดการดีเลย์ของ UI เมื่อผู้ใช้คลิกปุ่ม สลับแท็บ หรือพิมพ์ข้อความ
   - เกณฑ์มาตรฐาน: ต้องเร็วกว่า 200 มิลลิวินาที (Good <= 200ms)
   - เทคนิคปรับแต่ง: ลดงานใน Main Thread, หลีกเลี่ยง Long Tasks (>50ms), ใช้ useTransition

3. Cumulative Layout Shift (CLS - ความนิ่งของหน้าจอ ปราศจากอาการหน้ากระตุก)
   - วัดระยะการกระโดดของเนื้อหาขณะโหลด (เช่น รูปโหลดช้าแล้วดันข้อความเลื่อนลงมากะทันหัน)
   - เกณฑ์มาตรฐาน: ต้องน้อยกว่า 0.1 (Good <= 0.1)
   - เทคนิคปรับแต่ง: กำหนดขนาด width/height ให้กับภาพและแบนเนอร์เสมอ หรือใช้ aspect-ratio
\`\`\`

---

## 2. สถาปัตยกรรมระบบร้านค้าออนไลน์ (E-Commerce Architecture)

\`\`\`
[ หน้าร้าน Catalog & Search ] ── (Next.js 14 Server Component + Streaming SSR)
             │
             ▼
[ ตะกร้าสินค้า Global State ] ── (Zustand Store + LocalStorage Sync แบบ Non-blocking)
             │
             ▼
[ หน้าสรุปคำสั่งซื้อ Checkout ] ── (Server Actions ตรวจสอบสต็อกในฐานข้อมูลแบบ Transaction)
             │
             ▼
[ ระบบชำระเงินจำลอง PromptPay ] ── (สร้าง dynamic QR Code พร้อมระบบ Polling ตรวจสอบยอดเงิน)
\`\`\``,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรม Global State จัดการตะกร้าสินค้าด้วย Zustand
// รองรับ LocalStorage Persistence และการคำนวณราคาสุทธิแบบอัตโนมัติ
// แฟ้ม: src/store/useCartStore.ts
// =================================================================

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // เพิ่มสินค้าลงตะกร้า (ถ้ามีอยู่แล้วให้บวกจำนวนเพิ่ม)
      addItem: (product) => {
        set((state) => {
          const existingIndex = state.items.findIndex(item => item.id === product.id);
          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            updatedItems[existingIndex].quantity += 1;
            return { items: updatedItems };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      },

      // ลบสินค้าออกจากตะกร้า
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },

      // ปรับเพิ่ม/ลดจำนวนสินค้า
      updateQuantity: (id, delta) => {
        set((state) => {
          const updatedItems = state.items
            .map(item => {
              if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : null;
              }
              return item;
            })
            .filter(Boolean) as CartItem[];
          return { items: updatedItems };
        });
      },

      clearCart: () => set({ items: [] }),

      // เมตริกคำนวณจำนวนชิ้นทั้งหมด
      totalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      // เมตริกคำนวณราคารวมทั้งหมด
      totalPrice: () => {
        return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'itacademy_cart_storage', // คีย์จัดเก็บใน LocalStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);`,
        description: "สโตร์ตะกร้าสินค้า Global State ด้วย Zustand พร้อมระบบบันทึกสถานะลง LocalStorage อัตโนมัติ"
      },
      quiz: [
        {
          id: "web-9-q1",
          question: "เมตริก Largest Contentful Paint (LCP) ในเกณฑ์ Google Core Web Vitals วัดสิ่งใด และเกณฑ์คะแนนที่ดี (Good) ต้องเร็วกว่ากี่วินาที?",
          options: [
            "วัดเวลาการดาวน์โหลดไฟล์ CSS ทั้งหมด ต้องเร็วกว่า 10 วินาที",
            "วัดเวลาตั้งแต่เริ่มโหลดหน้าเว็บ จนกระทั่งองค์ประกอบเนื้อหาที่มีขนาดใหญ่ที่สุด (เช่น ภาพ Hero หรือหัวข้อใหญ่) ปรากฏบนจออย่างสมบูรณ์ โดยต้องเร็วกว่า 2.5 วินาที",
            "วัดความดังของเสียงในวิดีโอ",
            "วัดจำนวนคนที่เข้าชมเว็บไซต์พร้อมกัน"
          ],
          correctAnswer: 1,
          explanation: "LCP เป็นตัวชี้วัดความรู้สึกในการรับรู้ความเร็วของผู้ใช้งาน (Perceived Loading Speed) โดยองค์ประกอบหลักที่ใหญ่ที่สุดในหน้าจอต้องแสดงผลเสร็จสิ้นภายใน 2.5 วินาทีแรก"
        },
        {
          id: "web-9-q2",
          question: "เพื่อป้องกันปัญหา Cumulative Layout Shift (CLS) ซึ่งทำให้หน้าจอกระตุกเลื่อนตำแหน่งกะทันหันขณะโหลดภาพ นักพัฒนาเว็บควรปฏิบัติตามแนวทางใด?",
          options: [
            "ไม่ต้องใส่รูปภาพในเว็บไซต์เลย",
            "กำหนดแอตทริบิวต์ width และ height หรือใช้ CSS aspect-ratio ให้กับแท็กรูปภาพเสมอ เพื่อให้เบราว์เซอร์สามารถจองพื้นที่ว่างไว้ล่วงหน้าก่อนที่ภาพจริงจะโหลดเสร็จ",
            "ปิดการใช้งานอินเทอร์เน็ตของเซิร์ฟเวอร์",
            "ใช้เฉพาะรูปภาพขาวดำเท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "เมื่อภาพไม่มีการระบุสัดส่วนขนาดไว้ล่วงหน้า เบราว์เซอร์จะไม่ทราบขนาดของภาพจนกว่าจะดาวน์โหลดเสร็จ เมื่อภาพปรากฏจะดันข้อความด้านล่างตกฮวบลงมา (Layout Shift) การกำหนด width/height หรือ aspect-ratio จะช่วยจองพื้นที่ (Placeholder) ไว้ก่อน ป้องกัน CLS ได้ 100%"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบตะกร้าสินค้าและทดสอบคะแนน Core Web Vitals บน Lighthouse",
        toolName: "Google Chrome Lighthouse & React DevTools",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "ประกอบร่างคอมโพเนนต์ตะกร้าสินค้า เชื่อมต่อ Zustand Store และรันการตรวจสอบคะแนน Performance บน Google Chrome Lighthouse ให้ได้ระดับคะแนนสีเขียว",
        steps: [
          {
            title: "สร้างไฟล์ Store",
            detail: "ติดตั้ง Zustand (npm install zustand) และสร้างไฟล์ src/store/useCartStore.ts จากตัวอย่างในบทเรียน"
          },
          {
            title: "สร้างหน้า Catalog และ Drawer ตะกร้าสินค้า",
            detail: "เชื่อมต่อปุ่ม 'เพิ่มลงตะกร้า' เข้ากับฟังก์ชัน addItem() และแสดงตัวเลขแจ้งเตือนจำนวนสินค้าบนแถบ Navbar"
          },
          {
            title: "ปรับแต่งขนาดรูปภาพ",
            detail: "กำหนดความกว้างและความสูงที่แน่นอนให้กับรูปภาพสินค้าทุกรูป เพื่อกำจัดคะแนน Layout Shift (CLS) ให้เหลือ 0"
          },
          {
            title: "รันการทดสอบด้วย Lighthouse",
            detail: "เปิดแท็บ Lighthouse ใน Chrome DevTools เลือก Device: Mobile กดปุ่ม Analyze page load เพื่อสังเกตค่า LCP, INP, CLS"
          }
        ],
        verification: "ในหน้ารายงาน Lighthouse ค่า Performance ต้องแสดงผลคะแนนในแถบสีเขียว (90-100 คะแนน) ค่า LCP ต่ำกว่า 2.5s, ค่า CLS เท่ากับ 0 และระบบตะกร้าสินค้าสามารถเพิ่ม ลด และคงอยู่ได้เมื่อทำการรีเฟรชหน้าจอ"
      }
    }
  ]
};
