import { Course } from "../types";

export const gamedevCourse: Course = {
  id: "gamedev",
  title: "Game Development & Engine Architecture",
  description: "สร้างเกม 2D ระดับมืออาชีพด้วย HTML5 Canvas, เวกเตอร์คณิตศาสตร์, ฟิสิกส์ AABB, Game Programming Patterns, A* Pathfinding และ Godot Engine 4",
  longDescription: "หลักสูตรวิศวกรรมการพัฒนาเกม (Game Engine & Systems Engineering) ที่เจาะลึกรากฐานทางคณิตศาสตร์ ฟิสิกส์ และสถาปัตยกรรมซอฟต์แวร์เกมอย่างแท้จริง ครอบคลุมตั้งแต่สถาปัตยกรรม Game Loop แบบ Fixed-Timestep Accumulator, เวกเตอร์คณิตศาสตร์ 2 มิติ (Vector Math, Normalization, Dot Product), การจำลองฟิสิกส์การเคลื่อนที่และแรงโน้มถ่วง, การตรวจจับและแก้ปัญหาการชน AABB Collision พร้อมป้องกันปัญหา Tunneling, การสร้างแอนิเมชัน Sprite Sheet ร่วมกับการสังเคราะห์เสียงด้วย Web Audio API, การออกแบบฉาก Tilemap และกล้อง 2D แบบ Parallax Scrolling, การควบคุมตรรกะตัวละครด้วย Finite State Machine (FSM) ผสานกลไก Coyote Time, ปัญญาประดิษฐ์ในเกม (Enemy AI & A* Pathfinding), ตลอดจนสถาปัตยกรรมเอนจินเกมระดับสากลอย่าง Godot Engine 4 (Nodes, Scene Tree, Signals, GDScript 2.0) และการส่งออกเกมขึ้นสู่ WebGL",
  icon: "🎮",
  color: "red",
  gradient: "from-red-500 to-rose-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["GameDev", "GameEngine", "JavaScript", "HTML5 Canvas", "Godot 4", "Physics", "A* AI", "GDScript"],
  recommendedTools: [
    {
      name: "Godot Engine 4.x",
      icon: "🤖",
      badge: "Industry Open-Source Engine",
      description: "เอนจินเกมระดับโลกที่เติบโตเร็วที่สุด ไฟล์มีขนาดเบามาก (ไม่ถึง 100MB) ไม่มีค่าลิขสิทธิ์ มีระบบ Scene & Node ที่ทรงพลัง และภาษา GDScript 2.0 สไตล์ Python",
      downloadUrl: "https://godotengine.org/",
      setupGuide: "1. ดาวน์โหลด Godot Engine ตัว Standard จากเว็บไซต์ทางการ\n2. แตกไฟล์ ZIP และเปิดใช้งานโปรแกรมได้ทันทีโดยไม่ต้องติดตั้ง\n3. สร้างโปรเจกต์ใหม่ เลือก Renderer เป็น Forward+ (สำหรับคอมพิวเตอร์) หรือ Compatibility (สำหรับเว็บและมือถือ)"
    },
    {
      name: "Tiled Map Editor",
      icon: "🗺️",
      badge: "Tilemap Design Tool",
      description: "โปรแกรมออกแบบฉากเกม 2D และดันเจี้ยนมาตรฐานอุตสาหกรรม สามารถส่งออกข้อมูลฉากเป็น JSON นำเข้าเว็บแอปพลิเคชันหรือ Godot Engine ได้อย่างไร้รอยต่อ",
      downloadUrl: "https://www.mapeditor.org/",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง Tiled Map Editor\n2. สร้าง Map ใหม่ กำหนดขนาดไทล์ (เช่น 16x16 หรือ 32x32 พิกเซล)\n3. นำเข้าไฟล์ภาพ Tileset แล้ววาดเลเยอร์พื้นดิน สิ่งกีดขวาง และตำแหน่งเกิดของศัตรู\n4. Export ข้อมูลฉากเป็นไฟล์ .json"
    },
    {
      name: "Pixelorama / Aseprite",
      icon: "🎨",
      badge: "Pixel Art & Animation",
      description: "เครื่องมือวาดภาพศิลปะพิกเซล (Pixel Art) และทำแอนิเมชัน Sprite Sheet แบบ Frame-by-Frame พร้อมระบบ Layers และการส่งออกตารางแผ่นภาพแอนิเมชัน",
      downloadUrl: "https://orama-interactive.itch.io/pixelorama",
      setupGuide: "1. เปิดโปรแกรม Pixelorama (โอเพนซอร์สฟรี)\n2. สร้าง Canvas ใหม่ขนาด 32x32 หรือ 48x48 พิกเซล\n3. วาดภาพตัวละครทีละเฟรมในไทม์ไลน์ (เช่น ท่ายืน Idle, ท่าวิ่ง Run)\n4. เลือกเมนู File > Export Sprite Sheet เป็นแผ่นภาพ PNG แนวนอน"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "game-1",
      title: "สถาปัตยกรรม Game Loop, การคำนวณ Delta Time (Δt) และการเรนเดอร์ภาพบน HTML5 Canvas",
      description: "ทำความเข้าใจสถาปัตยกรรม Game Loop (Input, Update, Render), ปัญหา Framerate-dependent, การแก้ปัญหาด้วย Fixed-Timestep Accumulator, และการวาดภาพบน HTML5 Canvas 60 FPS",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมวงรอบการทำงานของเกม (Game Loop Architecture)

โปรแกรมทั่วไปจะหยุดนิ่งเพื่อรอรับคำสั่งจากผู้ใช้ (Event-driven) แต่วิดีโอเกม **ไม่เคยหยุดนิ่ง** แม้ผู้เล่นจะปล่อยมือจากจอยสติ๊ก น้ำในแม่น้ำยังคงไหล ศัตรูยังคงเดินลาดตระเวน และฟิสิกส์แรงโน้มถ่วงยังคงคำนวณอยู่ตลอดเวลา กลไกที่ขับเคลื่อนความต่อเนื่องนี้เรียกว่า **Game Loop**

---

## 1. สามขั้นตอนหลักของ Game Loop

\`\`\`
            ┌───────────────────────────────────────────┐
            │  1. Process Input                         │
            │     - รับเหตุการณ์จากคีย์บอร์ด, เมาส์, จอยสติ๊ก  │
            └─────────────────────┬─────────────────────┘
                                  │
                                  ▼
            ┌───────────────────────────────────────────┐
            │  2. Update State (Game Simulation)        │
            │     - คำนวณฟิสิกส์, ตำแหน่งเวกเตอร์, เช็กการชน │
            │     - อัปเดต AI ศัตรู, หักลบค่าพลังชีวิต (HP)   │
            └─────────────────────┬─────────────────────┘
                                  │
                                  ▼
            ┌───────────────────────────────────────────┐
            │  3. Render Graphics                       │
            │     - วาดฉากหลัง, สไปรต์ตัวละคร, เอฟเฟกต์แสง  │
            │     - วาดหน้าจอ UI, หลอดเลือด, คะแนนบน Canvas │
            └─────────────────────┬─────────────────────┘
                                  │
                                  └─── วนกลับขึ้นไปทำซ้ำตลอดเวลา
\`\`\`

---

## 2. ปัญหามหันตภัย Framerate-Dependent และการคำนวณ Delta Time ($\\Delta t$)

> [!CAUTION]
> **กับดักที่มือใหม่มักทำผิดพลาด:**
> \`player.x += 5; // เคลื่อนที่ 5 พิกเซลในทุกรอบเฟรม\`
> หากเขียนโค้ดแบบนี้:
> - บนคอมพิวเตอร์จอเก่า (60 Hz): ตัวละครเคลื่อนที่ $5 \\times 60 = 300\\text{ พิกเซลต่อวินาที}$
> - บนมือถือเกมมิ่งจอใหม่ (120 Hz): ตัวละครจะวิ่งเร็วเป็นสองเท่าคือ $5 \\times 120 = 600\\text{ พิกเซลต่อวินาที}$!

### การแก้ปัญหาด้วย Delta Time ($\\Delta t$):
Delta Time คือระยะเวลาจริงที่เกิดขึ้นระหว่างเฟรมก่อนหน้าจนถึงเฟรมปัจจุบัน (มีหน่วยเป็นวินาที เช่น ที่ $60\\text{ FPS}$ ค่า $\\Delta t \\approx 0.0166\\text{ วินาที}$)
$$\\text{Position}_{\\text{new}} = \\text{Position}_{\\text{old}} + (\\text{Velocity} \\times \\Delta t)$$
ทำให้ตัวละครเคลื่อนที่ด้วยความเร็วที่คงที่สม่ำเสมอตลอดเวลา ไม่ว่าหน้าจอคอมพิวเตอร์จะรันที่กี่เฟรมเรตก็ตาม

---

## 3. สถาปัตยกรรม Fixed Timestep with Accumulator (ตามมาตรฐาน Glenn Fiedler)

ในการจำลองระบบฟิสิกส์ (เช่น การกระโดด หรือการชน) หากค่า $\\Delta t$ แกว่งไปมา จะทำให้ผลลัพธ์ทางฟิสิกส์ไม่แน่นอน (Non-deterministic)
สถาปัตยกรรมระดับเอนจินสากลจึงแยก **Physics Update (ตรึงเวลาคงที่ เช่น $1/60$ วินาที)** ออกจาก **Render (วาดภาพให้เร็วที่สุดเท่าที่หน้าจอทำได้)** โดยใช้ตัวสะสมเวลา (**Accumulator**):

\`\`\`javascript
accumulator += frameTime;
while (accumulator >= FIXED_DELTA_TIME) {
  physicsUpdate(FIXED_DELTA_TIME); // คำนวณฟิสิกส์ด้วยค่าคงที่แน่นอนเสมอ
  accumulator -= FIXED_DELTA_TIME;
}
render(interpolationAlpha); // วาดภาพและทำนายการเคลื่อนที่ระหว่างเฟรม
\`\`\``,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fixed-Timestep Game Loop Engine</title>
<style>
  body {
    margin: 0;
    background-color: #020617;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: monospace;
  }
  canvas {
    background: #0f172a;
    border: 2px solid #38bdf8;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(56, 189, 248, 0.2);
  }
</style>
</head>
<body>
  <h1>IT ACADEMY - GAME ENGINE CORE</h1>
  <canvas id="gameCanvas" width="640" height="360"></canvas>
  <p id="statsDisplay" style="margin-top: 10px;">FPS: 0 | Delta: 0 ms</p>

<script>
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const statsDisplay = document.getElementById("statsDisplay");

  // ตัวแปรสถาปัตยกรรม Fixed-Timestep
  const FIXED_DELTA = 1 / 60; // ตรึงเวลาฟิสิกส์ไว้ที่ 60 Hz คงที่ (16.66 ms)
  let lastTime = performance.now();
  let accumulator = 0.0;
  let fps = 0;
  let framesThisSecond = 0;
  let lastFpsUpdate = performance.now();

  // วัตถุในเกม (Game Entity)
  const player = {
    x: 50,
    y: 180,
    radius: 20,
    speed: 250 // ความเร็ว 250 พิกเซลต่อวินาที
  };

  // 1. ตรรกะฟิสิกส์คำนวณด้วยค่าคงที่แน่นอน (Deterministic Physics Update)
  function update(dt) {
    player.x += player.speed * dt;
    // เมื่อชนขอบจอ ให้เด้งกลับ
    if (player.x + player.radius > canvas.width || player.x - player.radius < 0) {
      player.speed = -player.speed;
    }
  }

  // 2. การวาดกราฟิกลงสู่หน้าจอ (Render Function)
  function render() {
    // ล้างหน้าจอเฟรมเก่า (Clear Screen)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // วาดพื้นหลังจำลอง
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }

    // วาดตัวละครผู้เล่น
    ctx.fillStyle = "#38bdf8";
    ctx.shadowColor = "#38bdf8";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0; // รีเซ็ตเงา
  }

  // 3. วงรอบ Game Loop หลักที่ขับเคลื่อนด้วย requestAnimationFrame
  function mainLoop(currentTime) {
    const frameTime = Math.min((currentTime - lastTime) / 1000, 0.25); // ป้องกัน Spiral of Death
    lastTime = currentTime;
    accumulator += frameTime;

    // คำนวณฟิสิกส์จนกว่าจะตามเวลาจริงทัน
    while (accumulator >= FIXED_DELTA) {
      update(FIXED_DELTA);
      accumulator -= FIXED_DELTA;
    }

    render();

    // คำนวณและแสดงสถิติ FPS
    framesThisSecond++;
    if (currentTime - lastFpsUpdate >= 1000) {
      fps = framesThisSecond;
      framesThisSecond = 0;
      lastFpsUpdate = currentTime;
      statsDisplay.innerText = \`FPS: \${fps} | FrameTime: \${(frameTime * 1000).toFixed(1)} ms | Speed: \${Math.abs(player.speed)} px/s\`;
    }

    requestAnimationFrame(mainLoop);
  }

  // เริ่มต้นรัน Game Loop
  requestAnimationFrame(mainLoop);
</script>
</body>
</html>`,
        description: "สถาปัตยกรรม Fixed-Timestep Game Loop ระดับมืออาชีพ ป้องกันปัญหา Framerate-dependent อย่างสมบูรณ์"
      },
      quiz: [
        {
          id: "game-1-q1",
          question: "เหตุใดในการพัฒนาเกมจึงต้องนำค่า Delta Time (Δt) มาคูณกับความเร็วของวัตถุเสมอ เช่น x = x + (speed * dt)?",
          options: [
            "เพื่อให้เกมกินไฟน้อยลง",
            "เพื่อให้การเคลื่อนที่ของวัตถุในเกมมีความเร็วคงที่สม่ำเสมอในทุกเครื่อง ไม่ขึ้นอยู่กับว่าหน้าจอนั้นจะรันที่ 30 FPS, 60 FPS หรือ 144 FPS",
            "เพื่อให้ภาพในเกมเปลี่ยนเป็นระบบ 3 มิติ",
            "เพื่อป้องกันไม่ให้ผู้เล่นโกงเกม"
          ],
          correctAnswer: 1,
          explanation: "หากไม่คูณด้วย Delta Time วัตถุจะเคลื่อนที่ตามจำนวนรอบของเฟรมเรต ทำให้เครื่องที่สเปกแรงจอ 144Hz ตัวละครจะวิ่งเร็วกว่าเครื่อง 60Hz การคูณ Delta Time (เวลาในหน่วยวินาทีต่อเฟรม) จะแปลงหน่วยความเร็วเป็น 'พิกเซลต่อวินาที' เสมอ"
        },
        {
          id: "game-1-q2",
          question: "ในสถาปัตยกรรม Fixed-Timestep Accumulator หากเกิดสภาวะเครื่องกระตุกอย่างหนัก (Frame Drop) เหตุใดจึงต้องจำกัดค่า frameTime สูงสุดไว้ (Clamp) เช่น ไม่เกิน 0.25 วินาที?",
          options: [
            "เพื่อป้องกันปรากฏการณ์ Spiral of Death ที่เกมพยายามคำนวณฟิสิกส์ย้อนหลังมากเกินไปจนทำให้เครื่องยิ่งค้างหนักขึ้นเรื่อยๆ",
            "เพื่อปิดโปรแกรมทิ้งทันที",
            "เพื่อลบข้อมูลคะแนนของผู้เล่น",
            "เพื่อประหยัดหน่วยความจำในการ์ดจอ"
          ],
          correctAnswer: 0,
          explanation: "หากเครื่องค้างไป 2 วินาที แล้วไม่จำกัดเวลา ตัวลูป while จะต้องรันการคำนวณฟิสิกส์ย้อนหลังนับร้อยรอบ ซึ่งกินเวลาจนเฟรมถัดไปยิ่งช้าลง เกิดเป็นวงจรอุบาทว์ (Spiral of Death) การ Clamp เวลาจะช่วยตัดตอนและยอมให้เกมข้ามเวลาไปเพื่อรักษาเสถียรภาพ"
        }
      ],
      labGuide: {
        title: "แล็บสร้าง Fixed-Timestep Game Loop บนเบราว์เซอร์",
        toolName: "HTML5 Canvas & Chrome DevTools",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "เขียนโค้ด Game Loop ด้วย requestAnimationFrame ตรวจสอบการนับค่า FPS และทดลองปรับแต่งความเร็วของวัตถุโดยอิสระจากเฟรมเรต",
        steps: [
          {
            title: "สร้างไฟล์ gameloop.html",
            detail: "คัดลอกโค้ดตัวอย่างในบทเรียน บันทึกเป็นไฟล์ gameloop.html"
          },
          {
            title: "เปิดดูผลลัพธ์บนเบราว์เซอร์",
            detail: "ดับเบิลคลิกเปิดไฟล์ด้วย Google Chrome หรือเปิดผ่าน VS Code Live Server"
          },
          {
            title: "จำลองการดร็อปเฟรมเรต",
            detail: "เปิด Chrome DevTools (F12) ไปที่แท็บ Rendering ติ๊กเลือก 'Frame Rendering Stats' เพื่อดูกราฟ FPS สด"
          },
          {
            title: "ทดสอบการลดความเร็ว CPU",
            detail: "ในแท็บ Performance ปรับ CPU Throttling เป็น 4x หรือ 6x slowdown และสังเกตว่าลูกบอลยังคงวิ่งด้วยความเร็วต่อวินาทีเท่าเดิมอย่างน่าทึ่ง"
          }
        ],
        verification: "ลูกบอลสีฟ้าต้องเคลื่อนที่ไป-กลับชนขอบจออย่างราบรื่น สถิติ FPS แสดงค่าสม่ำเสมอ และไม่มีอาการกระโดดข้ามพิกัดแม้จะมีการหน่วง CPU"
      }
    },

    {
      id: "game-2",
      title: "เวกเตอร์คณิตศาสตร์ 2 มิติ (2D Vectors), การเคลื่อนที่เชิงฟิสิกส์ และการควบคุมแป้นพิมพ์",
      description: "ทำความเข้าใจเวกเตอร์ 2D, การบวก-ลบเวกเตอร์, ขนาดและการทำให้เป็นเวกเตอร์หนึ่งหน่วย (Normalization), ปัญหาบั๊กเดินทแยงมุมเร็วเกินจริง (Diagonal Speed Bug), Dot Product และระบบจัดการอินพุตแบบไร้ความหน่วง",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# เวกเตอร์คณิตศาสตร์สำหรับวิศวกรรมเกม 2 มิติ

การระบุตำแหน่ง ความเร็ว และแรงกระทำในโลกของเกม ไม่สามารถใช้เพียงตัวเลขธรรมดาได้ แต่ต้องใช้ **เวกเตอร์ (Vector)** ซึ่งบ่งบอกทั้ง **ขนาด (Magnitude)** และ **ทิศทาง (Direction)**

---

## 1. พีชคณิตเวกเตอร์ 2 มิติ (2D Vector Math)

เวกเตอร์ $\\vec{v} = (x, y)$ ประกอบด้วยพิกัดบนแกน $X$ และแกน $Y$
- **การบวกเวกเตอร์ (Vector Addition):** ตำแหน่งใหม่เกิดจากตำแหน่งเดิมบวกด้วยความเร็ว
  $$\\vec{p}_{new} = \\vec{p} + \\vec{v}$$
- **ขนาดของเวกเตอร์ (Magnitude / Length):** คำนวณจากทฤษฎีบทพีทาโกรัส
  $$||\\vec{v}|| = \\sqrt{x^2 + y^2}$$
- **เวกเตอร์หนึ่งหน่วย (Unit Vector / Normalization):** เวกเตอร์ที่มีทิศทางเดิมแต่มีขนาดยาวเท่ากับ $1$
  $$\\hat{v} = \\frac{\\vec{v}}{||\\vec{v}||} = \\left( \\frac{x}{\\sqrt{x^2+y^2}}, \\frac{y}{\\sqrt{x^2+y^2}} \\right)$$

---

## 2. บั๊กคลาสสิก: การเดินทแยงมุมเร็วเกินจริง (The Diagonal Movement Bug)

เมื่อผู้เล่นกดปุ่ม 'ขวา' ($\\vec{v}_x = 1$) พร้อมกับปุ่ม 'ลง' ($\\vec{v}_y = 1$):
- ขนาดความเร็วทแยงมุมคือ: $\\sqrt{1^2 + 1^2} = \\sqrt{2} \\approx 1.414$
- ส่งผลให้ **ตัวละครวิ่งเฉียงเร็วขึ้นถึง 41.4% เสมอ!**

\`\`\`
       [ กดเดินไปทางขวาอย่างเดียว ] ────────► ความเร็ว = 1.00
       
       [ กดเดินลงล่างอย่างเดียว ]   ────────► ความเร็ว = 1.00
       
       [ กดเดินทแยงมุมพร้อมกัน ]   ───┐
                                      └───► ความเร็ว = 1.414 (บั๊ก!)
       * แก้ไขด้วยการ Normalization เวกเตอร์อินพุต ให้ความเร็วยาวเท่ากับ 1.00 เสมอ!
\`\`\`

---

## 3. ดอทโปรดักต์ (Dot Product) กับการตรวจสอบทัศนวิสัย

ผลคูณเชิงสเกลาร์ (Dot Product) ระหว่างเวกเตอร์สองตัว:
$$\\vec{a} \\cdot \\vec{b} = (a_x \\times b_x) + (a_y \\times b_y) = ||\\vec{a}|| \\cdot ||\\vec{b}|| \\cdot \\cos(\\theta)$$
- **$\\vec{a} \\cdot \\vec{b} > 0$:** เวกเตอร์ทั้งสองชี้ไปในทิศทางเดียวกัน (ศัตรูกำลังหันหน้าเข้าหาผู้เล่น)
- **$\\vec{a} \\cdot \\vec{b} = 0$:** เวกเตอร์ทั้งสองตั้งฉากกัน $90^\\circ$
- **$\\vec{a} \\cdot \\vec{b} < 0$:** เวกเตอร์ทั้งสองชี้ไปในทิศทางตรงกันข้าม (ผู้เล่นอยู่ข้างหลังศัตรู)`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// คลาส Vector2D ระดับวิศวกรรมเกม ผสานระบบการควบคุมตัวละคร 8 ทิศทาง
// แก้ไขบั๊กการเดินทแยงมุมด้วยการทำ Normalization อย่างถูกต้อง
// =================================================================

class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // บวกเวกเตอร์
  add(v) {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  // ลบเวกเตอร์
  sub(v) {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  // คูณด้วยสเกลาร์ (Scalar Multiplication)
  scale(n) {
    return new Vector2(this.x * n, this.y * n);
  }

  // หาขนาดความยาวของเวกเตอร์ (Magnitude)
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  // ปรับให้มีขนาดยาว 1 หน่วย (Normalize)
  normalize() {
    const mag = this.magnitude();
    if (mag > 0.00001) {
      return new Vector2(this.x / mag, this.y / mag);
    }
    return new Vector2(0, 0); // ป้องกัน Division by Zero
  }

  // ดอทโปรดักต์ (Dot Product)
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }
}

// -------------------------------------------------------------
// ระบบจัดการอินพุตแป้นพิมพ์แบบ State Map (ป้องกันคีย์บอร์ดดีเลย์)
// -------------------------------------------------------------
class InputHandler {
  constructor() {
    this.keys = {};
    window.addEventListener('keydown', (e) => this.keys[e.code] = true);
    window.addEventListener('keyup', (e) => this.keys[e.code] = false);
  }

  // ดึงเวกเตอร์ทิศทางการเคลื่อนที่ที่ผ่านการ Normalize แล้ว
  getMovementDirection() {
    let dx = 0;
    let dy = 0;

    if (this.keys['KeyD'] || this.keys['ArrowRight']) dx += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft'])  dx -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown'])  dy += 1;
    if (this.keys['KeyW'] || this.keys['ArrowUp'])    dy -= 1;

    const rawInput = new Vector2(dx, dy);
    // ✅ ทำการ Normalize เวกเตอร์เสมอเพื่อป้องกันบั๊กเดินทแยงเร็ว 1.414x
    return rawInput.normalize();
  }
}

// -------------------------------------------------------------
// คลาสตัวละครผู้เล่นพร้อมระบบความเฉื่อยและแรงเสียดทาน (Friction)
// -------------------------------------------------------------
class PlayerEntity {
  constructor(x, y) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(0, 0);
    this.acceleration = 1200; // อัตราเร่ง (พิกเซล/วินาที^2)
    this.friction = 0.88;      // แรงเสียดทานหน่วงตัวละคร
    this.maxSpeed = 220;       // ความเร็วสูงสุด
  }

  update(input, dt) {
    const direction = input.getMovementDirection();

    // 1. เพิ่มความเร็วตามทิศทางที่กด
    if (direction.magnitude() > 0) {
      this.velocity = this.velocity.add(direction.scale(this.acceleration * dt));
    }

    // 2. ใช้แรงเสียดทานหน่วงการเคลื่อนที่เมื่อปล่อยปุ่ม
    this.velocity = this.velocity.scale(this.friction);

    // 3. จำกัดความเร็วไม่ให้เกิน Max Speed
    if (this.velocity.magnitude() > this.maxSpeed) {
      this.velocity = this.velocity.normalize().scale(this.maxSpeed);
    }

    // 4. อัปเดตตำแหน่งจริง: p = p + (v * dt)
    this.position = this.position.add(this.velocity.scale(dt));
  }
}`,
        description: "คลาส Vector2 และ PlayerEntity พร้อมระบบฟิสิกส์แรงเสียดทานและการ Normalize ป้องกันบั๊กเดินทแยงมุม"
      },
      quiz: [
        {
          id: "game-2-q1",
          question: "หากผู้เล่นกดปุ่มเดินไปทางขวา (X = 1) และกดปุ่มเดินลงล่าง (Y = 1) พร้อมกัน หากไม่มีการ Normalization เวกเตอร์อินพุต ตัวละครจะเคลื่อนที่เร็วกว่าการเดินทิศทางเดียวปกติประมาณกี่เปอร์เซ็นต์?",
          options: [
            "เร็วเท่าเดิม (0%)",
            "เร็วขึ้น 20%",
            "เร็วขึ้นประมาณ 41.4% (ตามขนาดเวกเตอร์ที่ยาวเท่ากับรูท 2 หรือ 1.414)",
            "เร็วขึ้น 100%"
          ],
          correctAnswer: 2,
          explanation: "ตามทฤษฎีพีทาโกรัส ขนาดความยาวของเวกเตอร์ (1, 1) คือ sqrt(1^2 + 1^2) = sqrt(2) ≈ 1.414 เท่า หรือเร็วขึ้น 41.4% การ Normalize เวกเตอร์ให้กลับมามีความยาว 1.00 หน่วย จะช่วยกำจัดบั๊กนี้ได้อย่างสมบูรณ์"
        },
        {
          id: "game-2-q2",
          question: "การคำนวณ Dot Product ระหว่างเวกเตอร์ทิศทางการมองของศัตรู กับเวกเตอร์ที่ชี้ไปยังตัวผู้เล่น หากได้ผลลัพธ์เป็นค่าติดลบ (Dot Product < 0) บ่งบอกสิ่งใดในระบบเกม?",
          options: [
            "ผู้เล่นกำลังยืนอยู่ตรงหน้าศัตรูพอดี",
            "ผู้เล่นกำลังยืนอยู่ด้านหลังมุมมองของศัตรู (อยู่นอกระยะการมองเห็น)",
            "ตัวละครทั้งสองตัวกำลังชนกัน",
            "เกมเกิดข้อผิดพลาดในการคำนวณ"
          ],
          correctAnswer: 1,
          explanation: "เมื่อมุมระหว่างเวกเตอร์สองตัวมีค่ามากกว่า 90 องศา (มุมป้าน) ค่า cos(θ) จะติดลบ ส่งผลให้ Dot Product ติดลบด้วย ซึ่งบ่งชี้ว่าผู้เล่นยืนอยู่ด้านหลังของศัตรู จึงไม่ถูกตรวจจับ"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบคณิตศาสตร์เวกเตอร์และการควบคุมตัวละคร 8 ทิศทาง",
        toolName: "VS Code & HTML5 Canvas",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "นำคลาส Vector2 และ PlayerEntity ไปเรนเดอร์บนแคนวาส และทดสอบการเคลื่อนที่แบบ 8 ทิศทางพร้อมสังเกตเวกเตอร์ความเร็ว",
        steps: [
          {
            title: "สร้างโปรเจกต์แคนวาส",
            detail: "สร้างไฟล์ index.html นำคลาส Vector2, InputHandler, และ PlayerEntity ไปวางในแท็ก <script>"
          },
          {
            title: "สร้างฟังก์ชันวาดตัวละคร",
            detail: "เขียนคำสั่ง ctx.fillRect(player.position.x, player.position.y, 30, 30) และวาดเส้นเวกเตอร์ความเร็วชี้ออกจากตัวละคร"
          },
          {
            title: "ทดลองเคลื่อนที่ 8 ทิศทาง",
            detail: "กดปุ่ม W, A, S, D สังเกตการเร่งความเร็ว และลองกด W+D พร้อมกัน"
          },
          {
            title: "ทดสอบการเบรก (Friction)",
            detail: "เมื่อปล่อยปุ่มกด สังเกตว่าตัวละครจะไม่หยุดนิ่งในทันที แต่จะลื่นไถลชะลอความเร็วลงตามสัมประสิทธิ์แรงเสียดทานอย่างเป็นธรรมชาติ"
          }
        ],
        verification: "ตัวละครเคลื่อนที่ได้นุ่มนวลทั้ง 8 ทิศทาง การเดินทแยงมุมมีความเร็วคงที่เท่ากับการเดินแนวตรง และเมื่อปล่อยมือตัวละครจะค่อยๆ ชะลอความเร็วจนหยุดสนิท"
      }
    },

    {
      id: "game-3",
      title: "การจัดการภาพกราฟิก Sprite Sheet, แอนิเมชัน และการสังเคราะห์เสียงด้วย Web Audio API",
      description: "ทำความเข้าใจ Texture Atlas, การคำนวณตัดชิ้นส่วนภาพด้วย drawImage (Source vs Destination Rect), สถาปัตยกรรม Web Audio API AudioNode Graph, และการสังเคราะห์เสียงเอฟเฟกต์ 8-bit ด้วย Oscillator โดยไม่ต้องพึ่งพาไฟล์ภายนอก",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การจัดการภาพกราฟิก Sprite Sheet และการสังเคราะห์เสียง

เกมคอมพิวเตอร์ที่สมบูรณ์แบบต้องผสานงานภาพที่ลื่นไหลเข้ากับเสียงประกอบที่ตอบสนองต่อการกระทำของผู้เล่นในเสี้ยววินาที

---

## 1. การตัดและคำนวณเฟรมบน Sprite Sheet

**Sprite Sheet** คือภาพขนาดใหญ่แผ่นเดียวที่รวมภาพแอ็กชันของตัวละครทุกเฟรมไว้ เพื่อลดเวลาการสลับพื้นผิว (Texture Switch Overhead) บน GPU

\`\`\`
แผ่นภาพ Sprite Sheet รวม (เช่น กว้าง 192px, สูง 48px, มี 4 เฟรมๆ ละ 48px):
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  Frame 0     │  Frame 1     │  Frame 2     │  Frame 3     │
│  (0, 0)      │  (48, 0)     │  (96, 0)     │  (144, 0)    │
└──────────────┴──────────────┴──────────────┴──────────────┘
\`\`\`

ไวยากรณ์คำสั่ง 9 พารามิเตอร์ของ \`ctx.drawImage()\`:
\`\`\`javascript
ctx.drawImage(
  imageSource,
  sx, sy, sWidth, sHeight, // 1. พิกัดและขนาดของกรอบที่ตัดบน Sprite Sheet
  dx, dy, dWidth, dHeight  // 2. พิกัดและขนาดที่จะนำไปวาดบนหน้าจอแคนวาส
);
\`\`\`
สูตรคำนวณพิกัดการตัดในแนวนอน:
$$s_x = \\text{currentFrameIndex} \\times \\text{frameWidth}$$

---

## 2. การสังเคราะห์เสียงระดับโปรแกรมมิ่งด้วย Web Audio API

การโหลดไฟล์เสียง \`.mp3\` หรือ \`.wav\` จำนวนมากทำให้เกมโหลดช้าและกินแบนด์วิดท์
**Web Audio API** ช่วยให้เราสามารถสร้างเสียงสังเคราะห์ (Chiptune Sound Synthesizer) ขึ้นมาสดๆ ผ่านการคำนวณทางคณิตศาสตร์ด้วย **AudioNode Graph**:

\`\`\`
┌─────────────────────────────────┐
│ OscillatorNode (กำเนิดคลื่นเสียง)│ ──► [คลื่นสี่เหลี่ยม Square Wave / คลื่นฟันปลา Sawtooth]
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ GainNode (ควบคุมระดับความดัง)   │ ──► [ทำเสียงค่อยๆ จางหาย Fade-out (ADSR Envelope)]
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│ AudioContext.destination        │ ──► [ส่งออกไปยังลำโพง / หูฟังของผู้เล่น]
└─────────────────────────────────┘
\`\`\``,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// คลาสสังเคราะห์เสียงเอฟเฟกต์เกมด้วย Web Audio API แบบไม่พึ่งพาไฟล์ภายนอก
// สร้างเสียงกระโดด (Jump), เก็บเหรียญ (Coin), และระเบิด (Explosion)
// =================================================================

class SoundFXEngine {
  constructor() {
    // สร้าง AudioContext ตามมาตรฐาน W3C
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  // ปลดล็อก AudioContext เมื่อผู้ใช้คลิกหน้าจอครั้งแรก (Browser Autoplay Policy)
  unlockAudio() {
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 1. เสียงกระโดด (Jump Sound: ความถี่เลื่อนขึ้นอย่างรวดเร็ว 150Hz -> 600Hz)
  playJumpSound() {
    this.unlockAudio();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square'; // คลื่นสี่เหลี่ยมสไตล์เรโทร 8-bit
    const now = this.ctx.currentTime;

    // กวาดความถี่เสียงจากต่ำไปสูง
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);

    // กำหนดความดังและตัดเสียงให้สั้น
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.15);
  }

  // 2. เสียงเก็บเหรียญ (Coin Sound: โน้ตสองชั้นความถี่สูง B5 -> E6)
  playCoinSound() {
    this.unlockAudio();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const now = this.ctx.currentTime;

    osc.frequency.setValueAtTime(987.77, now); // โน้ต B5
    osc.frequency.setValueAtTime(1318.51, now + 0.08); // โน้ต E6

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }
}

// ตัวอย่างการเรียกใช้งาน
const audio = new SoundFXEngine();
// audio.playJumpSound();
// audio.playCoinSound();`,
        description: "เอนจินสังเคราะห์เสียงประกอบเกม 8-bit ด้วย Web Audio API กำเนิดคลื่นเสียง Oscillator และปรับแต่ง Envelope"
      },
      quiz: [
        {
          id: "game-3-q1",
          question: "เหตุใดในเบราว์เซอร์ยุคปัจจุบัน เสียงในเกมจึงไม่สามารถเล่นได้ทันทีเมื่อเปิดหน้าเว็บ จนกว่าผู้เล่นจะคลิกเมาส์หรือกดปุ่มบนหน้าจอก่อนหนึ่งครั้ง?",
          options: [
            "เพราะการ์ดเสียงของคอมพิวเตอร์ยังไม่พร้อม",
            "เป็นไปตามมาตรการ Browser Autoplay Policy เพื่อป้องกันไม่ให้เว็บไซต์ส่งเสียงรบกวนผู้ใช้โดยไม่ได้รับอนุญาต Web Audio API จะอยู่ในสถานะ suspended จนกว่าจะมี User Gesture เกิดขึ้น",
            "เพราะโค้ด JavaScript ทำงานผิดพลาด",
            "เพราะเบราว์เซอร์ต้องการประหยัดอินเทอร์เน็ต"
          ],
          correctAnswer: 1,
          explanation: "เบราว์เซอร์มาตรฐานสากล (Chrome, Safari, Edge) มีนโยบาย Autoplay Policy ที่เข้มงวด โดยสั่งระงับ AudioContext ไว้จนกว่าจะเกิดการสัมผัสหรือคลิกของผู้ใช้งาน (User Gesture) เพื่อป้องกันเสียงโฆษณาดังแทรกขึ้นมา"
        },
        {
          id: "game-3-q2",
          question: "ในการตัดภาพเฟรมแอนิเมชันจาก Sprite Sheet แนวนอน หากแต่ละเฟรมมีความกว้าง 64 พิกเซล และปัจจุบันต้องการวาดเฟรมที่ 3 (Index = 2) พิกัด Source X (sx) ที่ต้องส่งให้ฟังก์ชัน drawImage มีค่าเท่าใด?",
          options: [
            "0 พิกเซล",
            "64 พิกเซล",
            "128 พิกเซล (คำนวณจาก index 2 * 64)",
            "192 พิกเซล"
          ],
          correctAnswer: 2,
          explanation: "การคำนวณพิกัดแกน X บนแผ่นภาพคำนวณจาก index * frameWidth ดังนั้นเฟรมที่ 3 (Index เริ่มต้นที่ 0 ได้แก่ 0, 1, 2) จะมีพิกัดตัดเริ่มต้นที่ 2 * 64 = 128 พิกเซล"
        }
      ],
      labGuide: {
        title: "แล็บสร้างเครื่องสังเคราะห์เสียงเอฟเฟกต์เกมเรโทรด้วย Web Audio API",
        toolName: "Chrome DevTools Console",
        downloadUrl: "https://www.google.com/chrome/",
        objective: "เขียนสคริปต์ SoundFXEngine บนเบราว์เซอร์ ผูกปุ่มกดเข้ากับคำสั่งสังเคราะห์เสียง และทดลองปรับแต่งความถี่คลื่นเสียง",
        steps: [
          {
            title: "เปิด Console บนเบราว์เซอร์",
            detail: "เปิด Google Chrome กดปุ่ม F12 เลือกแท็บ Console"
          },
          {
            title: "วางคลาส SoundFXEngine",
            detail: "คัดลอกโค้ดตัวอย่างสังเคราะห์เสียงจากบทเรียนวางลงใน Console แล้วกด Enter"
          },
          {
            title: "ทดสอบเสียงกระโดด",
            detail: "พิมพ์คำสั่ง: audio.playJumpSound() และฟังเสียงเอฟเฟกต์สไตล์ 8-bit ที่ถูกสร้างขึ้นสดๆ"
          },
          {
            title: "ทดลองสร้างคลื่นเสียงแบบอื่น",
            detail: "ทดลองเปลี่ยน osc.type เป็น 'sawtooth' หรือปรับความถี่เริ่มต้นเป็น 800Hz แล้วฟังความแตกต่างของเนื้อเสียง"
          }
        ],
        verification: "ลำโพงคอมพิวเตอร์ต้องส่งเสียงเอฟเฟกต์กระโดดและเสียงเก็บเหรียญสไตล์เกมคลาสสิกออกมาอย่างชัดเจน โดยไม่ต้องดาวน์โหลดไฟล์เสียงจากภายนอกแม้แต่ไฟล์เดียว"
      }
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "game-4",
      title: "ระบบฟิสิกส์ 2D: แรงโน้มถ่วง, การชนแบบ AABB และการแก้ปัญหาการทะลุทะลวง (Tunneling)",
      description: "จำลองฟิสิกส์การกระโดดด้วย Semi-implicit Euler, การตรวจจับการชนแบบ Axis-Aligned Bounding Box (AABB), การคำนวณ Minimum Translation Vector (MTV) เพื่อดันตัวละครออกจากกำแพง และการป้องกันการตกทะลุพื้น",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# ระบบฟิสิกส์ 2D และการตรวจจับการชนระดับเอนจินเกม

ในเกมแนว Action Platformer ระบบฟิสิกส์และการชนคือตัวตัดสินความรู้สึกในการเล่น (**Game Feel**) หากตัวละครกระโดดแล้วติดขอบ หรือตกทะลุพื้น จะทำลายความน่าเชื่อถือของเกมทันที

---

## 1. การจำลองแรงโน้มถ่วงและการบูรณาการความเร็ว (Semi-Implicit Euler)

การเคลื่อนที่ของตัวละครภายใต้แรงโน้มถ่วงคำนวณผ่าน 2 สมการ:
1. ปรับปรุงความเร็วในแนวตั้งด้วยแรงโน้มถ่วง:
   $$v_{y(new)} = v_y + (g \\times \\Delta t)$$
2. ปรับปรุงตำแหน่งด้วยความเร็วใหม่:
   $$y_{new} = y + (v_{y(new)} \\times \\Delta t)$$
*(การใช้ความเร็วใหม่ $v_{y(new)}$ มาคำนวณตำแหน่งทันที เรียกว่า **Semi-Implicit Euler Integration** ซึ่งมีความเสถียรทางพลังงานสูงกว่า Explicit Euler ทั่วไป)*

---

## 2. ทฤษฎีการชนแบบ Axis-Aligned Bounding Box (AABB)

กล่องสองกล่อง $A$ และ $B$ จะเกิดการซ้อนทับกัน (Overlap) ก็ต่อเมื่อทั้ง 4 เงื่อนไขเป็นจริงพร้อมกัน:

\`\`\`
         A.x + A.w > B.x   (ขอบขวาของ A เลยขอบซ้ายของ B)
  และ    A.x < B.x + B.w   (ขอบซ้ายของ A ยังไม่พ้นขอบขวาของ B)
  และ    A.y + A.h > B.y   (ขอบล่างของ A เลยขอบบนของ B)
  และ    A.y < B.y + B.h   (ขอบบนของ A ยังไม่พ้นขอบล่างของ B)
\`\`\`

---

## 3. การแก้ปัญหาการทับซ้อน (Collision Resolution & Separation)

การรู้ว่า "ชนกัน" ยังไม่เพียงพอ ระบบฟิสิกส์ต้องตอบคำถามว่า **"ต้องดันตัวละครถอยกลับไปทางไหน และเป็นระยะทางเท่าใด?"**
เราใช้เทคนิค **Minimum Translation Vector (MTV)**:
- คำนวณระยะการจมลงไปในแต่ละแกน (Overlap X และ Overlap Y)
- **ดันตัวละครกลับในแกนที่มีระยะจมน้อยที่สุดเสมอ!**
  - ถ้าจมในแกน $Y$ น้อยกว่าแกน $X$ $\\implies$ แสดงว่าเป็นการเหยียบพื้น หรือหัวชนเพดาน (ปรับความเร็ว $v_y = 0$)
  - ถ้าจมในแกน $X$ น้อยกว่าแกน $Y$ $\\implies$ แสดงว่าเป็นการชนกำแพงด้านข้าง (ปรับความเร็ว $v_x = 0$)

---

## 4. ปัญหาการตกทะลุวัตถุ (The Tunneling Problem)

เมื่อวัตถุเคลื่อนที่เร็วมาก (เช่น กระสุนปืน หรือตัวละครตกเหวด้วยความเร็วสูง) ในเฟรมที่ 1 วัตถุอยู่หน้ากำแพง แต่พอถึงเฟรมที่ 2 วัตถุข้ามไปอยู่หลังกำแพงแล้ว! ระบบตรวจจับ AABB แบบปกติจะมองว่า "ไม่เคยชนกันเลย"
**วิธีแก้ปัญหา:**
1. **Sub-stepping:** แบ่งการคำนวณเฟรมใหญ่ $1/60$ วินาที ออกเป็นลูปย่อยๆ เช่น 4 รอบย่อย ($1/240$ วินาทีต่อรอบ)
2. **Raycasting / Swept AABB:** ลากเส้นเชื่อมระหว่างจุดเดิมกับจุดใหม่เพื่อดูว่าเส้นตัดผ่านวัตถุหรือไม่`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรมตัวละคร 2D Platformer พร้อม AABB Collision Resolution
// ป้องกันการทะลุพื้น และมีระบบแยกแยะการชนพื้น vs กำแพงอย่างแม่นยำ
// =================================================================

class PlatformerPhysics {
  constructor() {
    this.gravity = 980; // แรงโน้มถ่วง 980 พิกเซล/วินาที^2
  }

  // ฟังก์ชันตรวจสอบและแก้ไขการชนระหว่างผู้เล่นกับแท่นพื้น
  resolveCollision(player, platform) {
    // 1. ตรวจสอบการซ้อนทับแบบ AABB
    const overlapX = Math.min(player.x + player.w, platform.x + platform.w) - 
                     Math.max(player.x, platform.x);
    const overlapY = Math.min(player.y + player.h, platform.y + platform.h) - 
                     Math.max(player.y, platform.y);

    // หากมีการทับซ้อนกันทั้งสองแกน แสดงว่าเกิดการชนจริง
    if (overlapX > 0 && overlapY > 0) {
      // 2. ดันตัวละครกลับในแกนที่มีระยะทับซ้อนน้อยที่สุด (Minimum Translation Vector)
      if (overlapX < overlapY) {
        // ชนกำแพงด้านข้าง (แกน X)
        if (player.x < platform.x) {
          player.x -= overlapX; // ชนกำแพงฝั่งซ้าย ดันกลับไปทางซ้าย
        } else {
          player.x += overlapX; // ชนกำแพงฝั่งขวา ดันกลับไปทางขวา
        }
        player.vx = 0;
      } else {
        // ชนพื้นหรือเพดาน (แกน Y)
        if (player.y < platform.y) {
          // ตัวละครกำลังตกลงมาเหยียบพื้นผิวบนสุด
          player.y -= overlapY;
          player.vy = 0;
          player.isGrounded = true; // ยืนยันว่าสัมผัสพื้นอย่างมั่นคง
        } else {
          // ตัวละครกระโดดหัวชนเพดานด้านล่าง
          player.y += overlapY;
          player.vy = 0;
        }
      }
    }
  }
}`,
        description: "อัลกอริทึม AABB Collision Resolution โดยใช้หลักการ Minimum Translation Vector (MTV) ดันวัตถุกลับอย่างถูกต้อง"
      },
      quiz: [
        {
          id: "game-4-q1",
          question: "ในการแก้ปัญหาการชนกันของวัตถุสี่เหลี่ยม AABB ทำไมระบบฟิสิกส์จึงต้องเลือกผลักวัตถุกลับในแกนที่มีระยะการทับซ้อน (Overlap) น้อยที่สุดเสมอ?",
          options: [
            "เพื่อให้วัตถุเคลื่อนที่เร็วขึ้น",
            "เพราะแกนที่มีระยะทับซ้อนน้อยที่สุดคือทิศทางที่วัตถุเพิ่งทะลุเข้าไปล่าสุด การผลักกลับในแกนนั้นจะคืนตำแหน่งวัตถุสู่ผิวด้านนอกได้อย่างเป็นธรรมชาติและแม่นยำที่สุด",
            "เพราะกฎหมายคอมพิวเตอร์บังคับไว้",
            "เพื่อลบวัตถุนั้นออกจากจอ"
          ],
          correctAnswer: 1,
          explanation: "หลักการ Minimum Translation Vector (MTV) ถือว่าทิศทางที่จมเข้าไปน้อยที่สุดคือระนาบการชนจริง (เช่น เดินตกมาจากข้างบน จะจมในแกน Y น้อยกว่าแกน X) การดันกลับในแกนที่จมน้อยสุดจึงเป็นการวางตัวละครไว้บนพื้นอย่างสมบูรณ์"
        },
        {
          id: "game-4-q2",
          question: "ปรากฏการณ์ 'The Tunneling Problem' ในเกมฟิสิกส์เกิดขึ้นจากสาเหตุใด?",
          options: [
            "ตัวละครเดินมุดเข้าไปในถ้ำ",
            "วัตถุเคลื่อนที่ด้วยความเร็วสูงมากจนในเฟรมถัดไปพิกัดกระโดดข้ามสิ่งกีดขวางไปอยู่อีกฝั่ง ทำให้ระบบตรวจจับแบบ Discrete ตรวจไม่พบการชนเลย",
            "ภาพในเกมมืดเกินไป",
            "อินเทอร์เน็ตหลุด"
          ],
          correctAnswer: 1,
          explanation: "Tunneling หรือ Bullet-through-paper เกิดขึ้นเมื่อความเร็วคูณกับ Delta Time มีค่ามากกว่าความหนาของกำแพง ทำให้วัตถุกระโดดข้ามสิ่งกีดขวางในเสี้ยวเฟรมโดยไม่มีจังหวะที่กล่องทับซ้อนกัน แก้ไขได้ด้วยการทำ Continuous Collision Detection (CCD) หรือ Sub-stepping"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบระบบกระโดดและตรวจจับการชน AABB Platformer",
        toolName: "VS Code & HTML5 Canvas",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "สร้างตัวละครที่กระโดดได้ มีแรงโน้มถ่วงดึงลง และสามารถยืนบนบล็อกแท่นลอยได้อย่างมั่นคงโดยไม่ตกทะลุ",
        steps: [
          {
            title: "สร้างแท่นพื้นทดสอบ",
            detail: "กำหนดอาเรย์ของบล็อกพื้น เช่น platforms = [{x: 0, y: 300, w: 600, h: 40}, {x: 200, y: 220, w: 120, h: 20}]"
          },
          {
            title: "ผูกคำสั่งปุ่มกระโดด",
            detail: "เมื่อกด Spacebar และ player.isGrounded === true ให้กำหนด player.vy = -450 (พุ่งขึ้น)"
          },
          {
            title: "รันการตรวจสอบการชนใน Game Loop",
            detail: "ในแต่ละรอบ ให้เพิ่มแรงโน้มถ่วง player.vy += gravity * dt แล้ววนลูปเรียก resolveCollision() กับทุกแท่นพื้น"
          },
          {
            title: "ทดสอบกระโดดขึ้นแท่นลอย",
            detail: "ทดลองกระโดดขึ้นไปยืนบนแท่นลอย และทดลองกระโดดชนขอบล่างของแท่นเพื่อดูว่าหัวชนเพดานแล้วตกลงมาหรือไม่"
          }
        ],
        verification: "ตัวละครสามารถกระโดดขึ้นไปยืนบนแท่นลอยได้อย่างนิ่งสนิท เมื่ออยู่บนพื้นสามารถกดกระโดดได้ และเมื่อปล่อยตกจากที่สูงตัวละครจะต้องหยุดอยู่บนพื้นผิวโดยไม่ทะลุลงไปด้านล่าง"
      }
    },

    {
      id: "game-5",
      title: "การออกแบบฉากเกมด้วย Tilemap, กล้อง 2D (Viewports & Parallax Scrolling)",
      description: "ทำความเข้าใจสถาปัตยกรรม Tilemap Grid, การทำ Viewport Culling ลดภาระการวาดฉากลง 90%, ระบบกล้อง 2D Camera Follow แบบ Smooth Lerp, และเทคนิค Parallax Scrolling สร้างมิติความลึก",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การออกแบบฉากเกมด้วย Tilemap และระบบกล้อง 2D Camera

เกมที่มีฉากกว้างใหญ่หลายหมื่นพิกเซล (เช่น Hollow Knight หรือ Mario) ไม่สามารถใช้ภาพขนาดใหญ่ไฟล์เดียวได้เพราะจะทำให้แรม GPU ล้น
สถาปัตยกรรมระดับสากลใช้ **ระบบแผ่นกระเบื้อง (Tilemap Architecture)** ผสานกับ **ระบบตัดทอนการวาด (Viewport Culling)**

---

## 1. โครงสร้างข้อมูลตารางไทล์ (Tilemap Matrix & Flattened Array)

ฉากเกมถูกจัดเก็บเป็นตารางตัวเลข 2 มิติ โดยตัวเลขแต่ละตัวจะอ้างอิงไปยังรหัส ID ของพื้นผิวบน Tileset:
\`\`\`javascript
// เมทริกซ์แทนฉากเกม: 0 = ว่างเปล่า, 1 = ก้อนหิน, 2 = ดิน, 3 = หญ้า
const levelGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 3, 0, 0, 0],
  [3, 3, 3, 2, 2, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2]
];
\`\`\`

---

## 2. การเพิ่มประสิทธิภาพด้วย Viewport Culling (ลด Draw Calls)

หากฉากเกมมีความกว้าง $10,000\\text{ พิกเซล}$ (มีกระเบื้องนับแสนชิ้น) การสั่ง \`ctx.drawImage()\` ทุกชิ้นจะทำให้เกมกระตุกเหลือ $5\\text{ FPS}$
**Viewport Culling:**
- คำนวณหาว่าขอบซ้าย-ขวา-บน-ล่างของหน้าจอกำลังทับซ้อนอยู่กับแถวและคอลัมน์ใดในตาราง
- **สั่งวาดเฉพาะบล็อกที่มองเห็นบนหน้าจอจริงเท่านั้น (Visible Range)!**

$$startCol = \\max\\left(0, \\lfloor \\frac{camera.x}{tileSize} \\rfloor\\right)$$
$$endCol = \\min\\left(totalCols, \\lceil \\frac{camera.x + screenWidth}{tileSize} \\rceil\\right)$$

---

## 3. มิติความลึกด้วยภาพพื้นหลังซ้อนหลายชั้น (Parallax Scrolling)

การทำให้เกม 2 มิติดูมีมิติความลึกเสมือน 3 มิติ ทำได้โดยการแบ่งภาพพื้นหลังออกเป็นหลายเลเยอร์ และเลื่อนด้วยความเร็วที่ต่างกันตามระยะสายตา:
- **เลเยอร์ภูเขาไกลสุด:** เคลื่อนที่ช้ามาก (ความเร็วเพียง $0.1 \\times \\text{Camera Velocity}$)
- **เลเยอร์ต้นไม้ระยะกลาง:** เคลื่อนที่ปานกลาง ($0.4 \\times \\text{Camera Velocity}$)
- **เลเยอร์ฉากหน้าที่ผู้เล่นเดิน:** เคลื่อนที่ด้วยความเร็วปกติ ($1.0 \\times \\text{Camera Velocity}$)`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรมระบบกล้อง 2D Camera Follow พร้อม Smooth Lerp
// และระบบเรนเดอร์ Tilemap ที่ผ่านการทำ Viewport Culling ประสิทธิภาพสูง
// =================================================================

class Camera2D {
  constructor(screenWidth, screenHeight) {
    this.x = 0;
    this.y = 0;
    this.width = screenWidth;
    this.height = screenHeight;
    this.smoothFactor = 0.08; // อัตราความนุ่มนวลในการเลื่อนตาม (Lerp Alpha)
  }

  // เลื่อนกล้องติดตามเป้าหมายอย่างนุ่มนวล (Linear Interpolation)
  follow(targetX, targetY, mapWidth, mapHeight) {
    // ตำแหน่งที่กล้องต้องการไป (จัดให้ผู้เล่นอยู่ตรงกลางจอพอดี)
    const desiredX = targetX - (this.width / 2);
    const desiredY = targetY - (this.height / 2);

    // เลื่อนตามด้วยสูตร Lerp: Current = Current + (Target - Current) * Alpha
    this.x += (desiredX - this.x) * this.smoothFactor;
    this.y += (desiredY - this.y) * this.smoothFactor;

    // จำกัดไม่ให้กล้องเลื่อนหลุดออกนอกขอบของแผนที่ (Clamping)
    this.x = Math.max(0, Math.min(this.x, mapWidth - this.width));
    this.y = Math.max(0, Math.min(this.y, mapHeight - this.height));
  }
}

// ฟังก์ชันเรนเดอร์ฉากแบบ Viewport Culling (วาดเฉพาะกระเบื้องที่มองเห็นบนจอ)
function renderCulledTilemap(ctx, camera, mapData, tileSize) {
  const startCol = Math.floor(camera.x / tileSize);
  const endCol = Math.min(mapData[0].length, Math.ceil((camera.x + camera.width) / tileSize) + 1);
  const startRow = Math.floor(camera.y / tileSize);
  const endRow = Math.min(mapData.length, Math.ceil((camera.y + camera.height) / tileSize) + 1);

  ctx.save();
  // ขยับพิกัดแคนวาสสวนทางกับกล้อง
  ctx.translate(-Math.floor(camera.x), -Math.floor(camera.y));

  for (let r = startRow; r < endRow; r++) {
    for (let c = startCol; c < endCol; c++) {
      const tileId = mapData[r][c];
      if (tileId !== 0) {
        const posX = c * tileSize;
        const posY = r * tileSize;

        ctx.fillStyle = tileId === 1 ? '#22c55e' : '#78350f';
        ctx.fillRect(posX, posY, tileSize, tileSize);
      }
    }
  }

  ctx.restore();
}`,
        description: "ระบบกล้อง 2D Smooth Lerp และการเรนเดอร์กระเบื้องแบบ Viewport Culling ลดภาระเครื่อง 90%"
      },
      quiz: [
        {
          id: "game-5-q1",
          question: "เทคนิค 'Viewport Culling' ในการพัฒนาฉากเกมแบบ Tilemap มีประโยชน์หลักเพื่อสิ่งใด?",
          options: [
            "ทำให้สีกระเบื้องสดใสขึ้น",
            "คำนวณและวาดเฉพาะกระเบื้องที่กำลังปรากฏอยู่ภายในกรอบของหน้าจอกล้องเท่านั้น ข้ามการวาดกระเบื้องที่อยู่นอกจอทิ้งทั้งหมดเพื่อประหยัด CPU และ GPU",
            "ลบไฟล์ที่ไม่ได้ใช้งานในฮาร์ดดิสก์",
            "ทำให้เกมต่ออินเทอร์เน็ตได้เร็วขึ้น"
          ],
          correctAnswer: 1,
          explanation: "หากแผนที่มีขนาดใหญ่แต่ไม่ทำ Viewport Culling เอนจินจะต้องส่งคำสั่งวาดภาพกระเบื้องนับหมื่นชิ้นในทุกเฟรม การคำนวณขอบเขตหน้าจอแล้ววาดเฉพาะแถว/คอลัมน์ที่มองเห็นจริง จะลดจำนวน Draw Calls ลงเหลือเพียงไม่กี่ร้อยชิ้น ทำให้เกมลื่นไหล 60 FPS ตลอดเวลา"
        },
        {
          id: "game-5-q2",
          question: "หลักการทำ Parallax Scrolling ในเกม 2 มิติ ใช้แนวคิดใดในการสร้างมิติความลึกให้แก่ผู้เล่น?",
          options: [
            "เลื่อนฉากทุกเลเยอร์ด้วยความเร็วเท่ากันทั้งหมด",
            "เลื่อนเลเยอร์ฉากหลังที่อยู่ไกลที่สุดด้วยความเร็วที่ช้ากว่าเลเยอร์ฉากหน้าที่อยู่ใกล้สายตา เพื่อจำลองปรากฏการณ์การรับรู้ความลึกของดวงตามนุษย์",
            "ใช้แว่นตา 3 มิติสีแดง-น้ำเงิน",
            "หมุนหน้าจอกลับหัว"
          ],
          correctAnswer: 1,
          explanation: "ในโลกความจริง เมื่อเรามองออกไปนอกหน้าต่างรถ สิ่งที่อยู่ไกล (เช่น ภูเขา หรือดวงจันทร์) จะดูเหมือนเคลื่อนที่ช้ามาก ส่วนเสาไฟริมถนนจะวิ่งผ่านไปอย่างรวดเร็ว การปรับสปีดเลเยอร์ฉากหลังให้ช้าลงจะสร้างมิติความลึกได้อย่างสมจริง"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบกล้อง 2D Camera และฉาก Parallax Scrolling",
        toolName: "HTML5 Canvas Sandbox",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "สร้างหน้าจอเกมขนาดกว้าง 2,000 พิกเซล เขียนกล้อง 2D ติดตามตัวละครด้วยสูตร Lerp และทดสอบฉากหลัง Parallax",
        steps: [
          {
            title: "เตรียมแผนที่ขนาดกว้าง",
            detail: "สร้างอาเรย์ Tilemap กว้าง 100 คอลัมน์ (ความกว้างรวม 3,200 พิกเซล)"
          },
          {
            title: "สร้างอินสแตนซ์ของ Camera2D",
            detail: "สร้างกล้องขนาด 640x360 พิกเซล และเรียกใช้คำสั่ง camera.follow(player.x, player.y, 3200, 360) ในทุกเฟรม"
          },
          {
            title: "เพิ่มเลเยอร์ Parallax Background",
            detail: "วาดภาพภูเขาด้านหลังโดยคูณตำแหน่ง X ด้วย 0.2: ctx.drawImage(mountainImg, -camera.x * 0.2, 0)"
          },
          {
            title: "ทดสอบการวิ่งข้ามฉาก",
            detail: "บังคับตัวละครวิ่งไปข้างหน้า สังเกตความนุ่มนวลของการเลื่อนกล้องตามตัวละครและการเคลื่อนที่ของฉากหลัง"
          }
        ],
        verification: "กล้องเลื่อนติดตามตัวละครได้อย่างนุ่มนวลโดยไม่มีอาการกระตุก ตัวละครไม่หลุดออกนอกกรอบจอ และฉากหลังเคลื่อนที่ด้วยความเร็วที่ช้ากว่าฉากหน้า เกิดมิติความลึกอย่างสวยงาม"
      }
    },

    {
      id: "game-6",
      title: "สถาปัตยกรรม Finite State Machine (FSM) และการควบคุมวงจรชีวิตตัวละคร",
      description: "ทำความเข้าใจปัญหา State Explosion จากการใช้ Boolean Flags, การประยุกต์ใช้ State Pattern, การเปลี่ยนผ่านสถานะอย่างปลอดภัย (Idle, Run, Jump, Fall, Attack), และเทคนิค Game Feel ยอดนิยม: Coyote Time และ Jump Buffering",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรม Finite State Machine (FSM) ในระบบเกม

ในการพัฒนาตัวละคร เมื่อเกมมีความซับซ้อนมากขึ้น นักพัฒนามักเริ่มประกาศตัวแปรแฟล็ก:
\`bool isJumping;\`, \`bool isAttacking;\`, \`bool isDucking;\`, \`bool isHurt;\`
เมื่อตัวละครมีแฟล็ก 10 ตัว จะเกิดสภาวะสถานะที่เป็นไปได้ถึง $2^{10} = 1,024$ สถานะ! นำไปสู่บั๊กยอดฮิต เช่น ตัวละครฟันดาบได้ขณะกำลังนอนเจ็บ หรือกระโดดได้ในขณะกำลังลอยตัวกลางอากาศ

---

## 1. หลักการของ Finite State Machine (FSM)

\`\`\`
                          ┌──────────────────────────┐
                          │       IDLE (ยืนนิ่ง)      │
                          └──────┬────────────▲──────┘
         กดปุ่มทิศทาง (Input != 0)│            │ ปล่อยปุ่มเดิน (Input == 0)
                                 ▼            │
                          ┌───────────────────┴──────┐
                          │        RUN (วิ่ง)        │
                          └──────┬────────────▲──────┘
             กดปุ่ม Space (Jump) │            │ สัมผัสพื้น (isGrounded)
                                 ▼            │
                          ┌───────────────────┴──────┐
                          │       JUMP (กระโดด)      │
                          └──────┬───────────────────┘
             ความเร็ว vy > 0     │
                                 ▼
                          ┌──────────────────────────┐
                          │       FALL (ตกจากที่สูง)  │
                          └──────────────────────────┘
\`\`\`

- ตัวละครจะอยู่ใน **สถานะเดียวเท่านั้น** ณ เสี้ยววินาทีใดๆ
- การสลับสถานะต้องผ่าน **เงื่อนไขการเปลี่ยนผ่าน (Transition Rules)** ที่กำหนดไว้อย่างชัดเจน

---

## 2. ยกระดับ Game Feel ด้วย Coyote Time และ Jump Buffering

เกม Platformer ระดับตำนานอย่าง *Celeste* หรือ *Super Mario* ให้ความรู้สึกในการควบคุมที่คมและไม่หงุดหงิด เพราะใช้เทคนิคจิตวิทยาฟิสิกส์:

### 2.1 Coyote Time (เวลาโคโยตี้ตามการ์ตูน Road Runner)
เมื่อตัวละครวิ่งหลุดออกจากขอบหน้าผา ตัวละครจะไม่ร่วงตกทันที แต่เกมจะให้ **โควตาเวลาผ่อนปรนประมาณ 0.1 - 0.15 วินาที** ที่ผู้เล่นยังคงสามารถกดปุ่มกระโดดได้เสมือนว่ายังยืนอยู่บนพื้น!

### 2.2 Jump Buffering (การจดจำปุ่มกระโดดล่วงหน้า)
หากผู้เล่นกดปุ่มกระโดดก่อนที่เท้าจะตกถึงพื้นเพียงเสี้ยววินาที (ประมาณ 100ms) แทนที่คำสั่งจะสูญเปล่า ระบบจะเก็บคำขอนี้ไว้ในบัฟเฟอร์ และสั่งให้ตัวละครกระโดดขึ้นทันทีในเฟรมแรกที่เท้าสัมผัสพื้น`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรม Finite State Machine ระดับวิศวกรรมเกม
// ผสานกลไก Coyote Time และ Jump Buffering เพื่อ Game Feel ที่สมบูรณ์แบบ
// =================================================================

class CharacterControllerFSM {
  constructor() {
    this.currentState = 'IDLE';

    // ตัวแปรเสริม Game Feel
    this.coyoteTime = 0.12;       // โควตาเวลาผ่อนปรน 120 ms หลังวิ่งหลุดหน้าผา
    this.coyoteTimer = 0.0;
    this.jumpBufferTime = 0.10;   // โควตารับคำสั่งกระโดดล่วงหน้า 100 ms
    this.jumpBufferTimer = 0.0;
  }

  update(input, isGrounded, dt) {
    // 1. บริหารจัดการ Coyote Timer
    if (isGrounded) {
      this.coyoteTimer = this.coyoteTime; // รีเซ็ตเวลาเต็มเมื่ออยู่บนพื้น
    } else {
      this.coyoteTimer -= dt; // นับถอยหลังเมื่อลอยอยู่กลางอากาศ
    }

    // 2. บริหารจัดการ Jump Buffer Timer
    if (input.jumpPressed) {
      this.jumpBufferTimer = this.jumpBufferTime; // จดจำว่าผู้เล่นต้องการกระโดด
    } else {
      this.jumpBufferTimer -= dt;
    }

    // 3. ตรรกะการกระโดดที่ผ่อนปรน (Responsive Jump Trigger)
    const canJump = this.coyoteTimer > 0 && this.jumpBufferTimer > 0;

    // 4. State Machine Execution
    switch (this.currentState) {
      case 'IDLE':
        if (canJump) {
          this.executeJump();
        } else if (input.horizontal !== 0) {
          this.transitionTo('RUN');
        } else if (!isGrounded && this.coyoteTimer <= 0) {
          this.transitionTo('FALL');
        }
        break;

      case 'RUN':
        if (canJump) {
          this.executeJump();
        } else if (input.horizontal === 0) {
          this.transitionTo('IDLE');
        } else if (!isGrounded && this.coyoteTimer <= 0) {
          this.transitionTo('FALL');
        }
        break;

      case 'JUMP':
      case 'FALL':
        if (isGrounded) {
          this.transitionTo(input.horizontal !== 0 ? 'RUN' : 'IDLE');
        }
        break;
    }
  }

  executeJump() {
    this.coyoteTimer = 0;       // ใช้สิทธิ์กระโดดไปแล้ว ล้างค่าทิ้ง
    this.jumpBufferTimer = 0;   // ล้างบัฟเฟอร์กระโดด
    this.transitionTo('JUMP');
    console.log('[ACTION] กระโดดสำเร็จด้วยการตอบสนองขั้นสูง!');
  }

  transitionTo(newState) {
    if (this.currentState !== newState) {
      console.log(\`[FSM] เปลี่ยนสถานะ: \${this.currentState} -> \${newState}\`);
      this.currentState = newState;
    }
  }
}`,
        description: "สถาปัตยกรรม State Machine ควบคุมตัวละคร ผสานเทคนิค Coyote Time และ Jump Buffering ระดับมืออาชีพ"
      },
      quiz: [
        {
          id: "game-6-q1",
          question: "เทคนิค 'Coyote Time' ในเกมแนว 2D Platformer มีหน้าที่สำคัญอย่างไรต่อประสบการณ์ของผู้เล่น (Game Feel)?",
          options: [
            "ทำให้ตัวละครวิ่งเร็วขึ้น 2 เท่าเมื่อเก็บไอคอนหมาป่า",
            "ให้ช่วงเวลาผ่อนปรนสั้นๆ (เช่น 0.1 วินาที) หลังจากตัวละครเพิ่งวิ่งหลุดพ้นจากขอบหน้าผา เพื่อให้ผู้เล่นยังคงสามารถกดกระโดดได้เสมือนว่ายังอยู่บนพื้น ป้องกันความรู้สึกหงุดหงิดจากการกดปุ่มช้าไปเพียงเสี้ยววินาที",
            "ทำให้ตัวละครตกเหวแล้วไม่ตาย",
            "เพิ่มคะแนนคูณสองเมื่อสังหารศัตรู"
          ],
          correctAnswer: 1,
          explanation: "ดวงตาและสมองของมนุษย์มี Input-Reaction Lag เล็กน้อย ผู้เล่นมักกดกระโดดในจังหวะที่ตัวละครเพิ่งพ้นขอบผาไปเพียงเสี้ยววินาที หากไม่มี Coyote Time ตัวละครจะร่วงตกเหวทันทีทำให้รู้สึกว่าเกมโกง การมีช่วงผ่อนปรน 100ms จะทำให้การควบคุมรู้สึก 'คมและตอบสนองดั่งใจ'"
        },
        {
          id: "game-6-q2",
          question: "การใช้สถาปัตยกรรม Finite State Machine (FSM) ช่วยกำจัดข้อผิดพลาดประเภทใดในโค้ดตัวละครของเกม?",
          options: [
            "กำจัดบั๊กหน่วยความจำรั่วไหลใน Node.js",
            "กำจัดบั๊กพฤติกรรมตีกันอันเกิดจากการใช้ตัวแปร Boolean หลายๆ ตัวซ้อนกัน เช่น ป้องกันไม่ให้ตัวละครทำการโจมตีหรือวิ่งได้ในขณะที่กำลังนอนเจ็บอยู่บนพื้น",
            "กำจัดสัญญาณรบกวนในสายเคเบิล",
            "ป้องกันไม่ให้เกมโดนสแกนพอร์ต"
          ],
          correctAnswer: 1,
          explanation: "FSM บังคับให้ตัวละครมีได้เพียง 1 สถานะในเวลาเดียวกัน และกำหนดเงื่อนไขการเปลี่ยนผ่านอย่างชัดเจน จึงกำจัดกรณีขัดแย้งของแอนิเมชันและตรรกะที่ซ้ำซ้อนกันได้อย่างเด็ดขาด"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบกลไก Coyote Time และ Jump Buffering",
        toolName: "VS Code & Console",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "ทดสอบเขียนสคริปต์ CharacterControllerFSM จำลองการกดปุ่มกระโดดขณะวิ่งหลุดหน้าผา และสังเกตการตอบรับของฟังก์ชัน executeJump",
        steps: [
          {
            title: "สร้างอินสแตนซ์ของ FSM",
            detail: "สร้างออบเจกต์ fsm = new CharacterControllerFSM()"
          },
          {
            title: "จำลองการยืนบนพื้นและวิ่งไปข้างหน้า",
            detail: "รัน fsm.update({horizontal: 1, jumpPressed: false}, true, 0.016) สังเกตสถานะเปลี่ยนเป็น RUN"
          },
          {
            title: "จำลองการวิ่งหลุดขอบผา",
            detail: "ส่งค่า isGrounded = false เป็นเวลา 0.05 วินาที (ยังอยู่ในโควตา Coyote Time)"
          },
          {
            title: "ทดลองกดกระโดดกลางอากาศในโควตา",
            detail: "ส่งค่า jumpPressed = true สังเกตข้อความยืนยันว่ากระโดดสำเร็จอย่างมหัศจรรย์"
          }
        ],
        verification: "ใน Console ต้องพิมพ์ข้อความ '[ACTION] กระโดดสำเร็จด้วยการตอบสนองขั้นสูง!' แม้ว่าสถานะ isGrounded จะเป็นเท็จไปแล้ว 0.05 วินาที ซึ่งพิสูจน์การทำงานของ Coyote Time ได้อย่างสมบูรณ์"
      }
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "game-7",
      title: "ปัญญาประดิษฐ์ในเกม (Game AI): ระบบลาดตระเวน, สายตาตรวจจับ และอัลกอริทึม A* Pathfinding",
      description: "ทำความเข้าใจปัญญาประดิษฐ์ศัตรู: พฤติกรรมลาดตระเวน (Patrol State), การตรวจจับสายตา (Line of Sight Raycasting), และเจาะลึกอัลกอริทึมค้นหาเส้นทางเดินที่ดีที่สุด A* (A-Star Pathfinding) พร้อมฟังก์ชันฮิวริสติกส์",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# ปัญญาประดิษฐ์ในวิดีโอเกม: พฤติกรรมศัตรูและอัลกอริทึม A*

เกมที่มีคุณค่าต้องมีศัตรูที่มีพฤติกรรมสมจริง ไม่เดินชนกำแพงอย่างไร้จุดหมาย และสามารถค้นหาเส้นทางเดินลัดเลาะตามซอกซอนเพื่อไล่ล่าผู้เล่นได้อย่างชาญฉลาด

---

## 1. ลำดับชั้นพฤติกรรมของ AI ศัตรู (Behavior Hierarchy)

\`\`\`
[ 1. Patrol State (ลาดตระเวน) ]
  - เดินไปมาระหว่าง Waypoint จุด A และ จุด B
  - คอยตรวจสอบระยะห่างและ Line of Sight กับผู้เล่น
         │ (พบผู้เล่นในระยะสายตา)
         ▼
[ 2. Alert / Investigate State (ระแวดระวัง) ]
  - เครื่องหมาย '!' ปรากฏบนหัว หันหน้ามองตรงไปยังตำแหน่งที่ได้ยินเสียง
         │ (ยืนยันตำแหน่งผู้เล่น)
         ▼
[ 3. Chase / Hunt State (ไล่ล่าด้วย A* Pathfinding) ]
  - คำนวณเส้นทางเดินอ้อมกล่องและสิ่งกีดขวางที่สั้นที่สุด
  - วิ่งเข้าหาผู้เล่นด้วยความเร็วสูงสุด
         │ (ผู้เล่นหนีพ้นระยะ / คลาดสายตานานเกิน 5 วินาที)
         ▼
[ 4. Return State ] ──► เดินกลับไปยังจุดลาดตระเวนเดิม
\`\`\`

---

## 2. เจาะลึกอัลกอริทึมค้นหาเส้นทาง A* (A-Star Pathfinding Algorithm)

$A^*$ เป็นอัลกอริทึมหาเส้นทางที่ได้รับความนิยมสูงสุดในอุตสาหกรรมเกม โดยผสานความแม่นยำของ Dijkstra เข้ากับความเร็วของ Greedy Best-First Search ผ่านสมการต้นทุน:

$$f(n) = g(n) + h(n)$$
- **$g(n)$ (Exact Cost):** ต้นทุนระยะทางจริงที่เดินผ่านมาแล้วจากจุดเริ่มต้นถึงโหนด $n$
- **$h(n)$ (Heuristic Estimate):** การคาดคะเนระยะทางที่เหลือจากโหนด $n$ ไปยังเป้าหมายปลายทาง
  - ในตาราง Grid นิยมใช้ **Manhattan Distance**: $h = |x_1 - x_2| + |y_1 - y_2|$
- **$f(n)$ (Total Estimated Cost):** ต้นทุนรวมที่คาดหวัง อัลกอริทึมจะเลือกสำรวจโหนดที่มีค่า $f(n)$ ต่ำที่สุดเสมอผ่านโครงสร้างข้อมูล **Priority Queue / Min-Heap**`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// การทำงานของอัลกอริทึม A* Pathfinding บนตาราง Grid ฉากเกม 2 มิติ
// คำนวณหาเส้นทางเดินที่สั้นที่สุดและอ้อมสิ่งกีดขวางอย่างมีประสิทธิภาพ
// =================================================================

class Node {
  constructor(x, y, isWall) {
    this.x = x;
    this.y = y;
    this.isWall = isWall;
    this.g = 0; // ต้นทุนจากจุดเริ่มต้น
    this.h = 0; // ฮิวริสติกส์ระยะคาดคะเนถึงเป้าหมาย
    this.f = 0; // f = g + h
    this.parent = null;
  }
}

function aStarPathfinding(gridMap, startCoord, endCoord) {
  const rows = gridMap.length;
  const cols = gridMap[0].length;

  // แปลงตารางเป็น Node Matrix
  const grid = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => new Node(c, r, gridMap[r][c] === 1))
  );

  const startNode = grid[startCoord.y][startCoord.x];
  const endNode = grid[endCoord.y][endCoord.x];

  const openSet = [startNode];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // 1. หาโหนดใน OpenSet ที่มีค่า f ต่ำที่สุด
    let lowestIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIndex].f) {
        lowestIndex = i;
      }
    }
    const current = openSet.splice(lowestIndex, 1)[0];

    // 2. ถ้าถึงเป้าหมายแล้ว ให้ย้อนรอยเส้นทางกลับ (Reconstruct Path)
    if (current === endNode) {
      const path = [];
      let temp = current;
      while (temp) {
        path.push({ x: temp.x, y: temp.y });
        temp = temp.parent;
      }
      return path.reverse(); // คืนเส้นทางจากจุดเริ่มต้นไปหาจุดจบ
    }

    closedSet.add(current);

    // 3. สำรวจเพื่อนบ้าน 4 ทิศ (บน, ล่าง, ซ้าย, ขวา)
    const neighbors = [
      { x: current.x, y: current.y - 1 },
      { x: current.x, y: current.y + 1 },
      { x: current.x - 1, y: current.y },
      { x: current.x + 1, y: current.y }
    ];

    for (const neighborCoord of neighbors) {
      const { x, y } = neighborCoord;
      if (x < 0 || x >= cols || y < 0 || y >= rows) continue; // หลุดขอบแผนที่

      const neighbor = grid[y][x];
      if (neighbor.isWall || closedSet.has(neighbor)) continue; // ชนกำแพงหรือเคยตรวจแล้ว

      const tentativeG = current.g + 1; // เดิน 1 ช่องมีต้นทุนเท่ากับ 1

      let newPathFound = false;
      if (!openSet.includes(neighbor)) {
        newPathFound = true;
        // คำนวณฮิวริสติกส์ Manhattan Distance
        neighbor.h = Math.abs(neighbor.x - endNode.x) + Math.abs(neighbor.y - endNode.y);
        openSet.push(neighbor);
      } else if (tentativeG < neighbor.g) {
        newPathFound = true;
      }

      if (newPathFound) {
        neighbor.parent = current;
        neighbor.g = tentativeG;
        neighbor.f = neighbor.g + neighbor.h;
      }
    }
  }

  return []; // ไม่พบเส้นทางที่เป็นไปได้ (มีกำแพงปิดกั้นสมบูรณ์)
}`,
        description: "สคริปต์อัลกอริทึม A* Pathfinding คำนวณเส้นทางเดินที่ดีที่สุดบนแผนที่แบบตาราง Grid"
      },
      quiz: [
        {
          id: "game-7-q1",
          question: "ในอัลกอริทึม A* Pathfinding ค่าฟังก์ชัน f(n) = g(n) + h(n) สัญลักษณ์ h(n) หมายถึงสิ่งใดและมีบทบาทอย่างไร?",
          options: [
            "หมายถึงพลังชีวิตของมอนสเตอร์",
            "หมายถึง Heuristic Estimate หรือระยะทางที่คาดคะเนจากโหนดปัจจุบันไปยังจุดหมายปลายทาง ช่วยชี้นำทิศทางการค้นหาให้มุ่งตรงไปยังเป้าหมายอย่างรวดเร็วแทนที่จะสุ่มค้นหาไปทั่ว",
            "หมายถึงความสูงของภูเขา",
            "หมายถึงค่าความเร็วของเน็ตเวิร์ก"
          ],
          correctAnswer: 1,
          explanation: "ค่า Heuristic h(n) เช่น การวัดระยะทางแบบแมนฮัตตันหรือยูคลิด ทำหน้าที่เสมือนเข็มทิศคอยดึงให้อัลกอริทึมเลือกเดินในทิศทางที่น่าจะใกล้เป้าหมายที่สุดก่อน ช่วยประหยัดเวลาการคำนวณได้อย่างมหาศาล"
        },
        {
          id: "game-7-q2",
          question: "เทคนิค Line of Sight (Raycasting) นิยมใช้ตรวจสอบสิ่งใดในระบบปัญญาประดิษฐ์ของศัตรู?",
          options: [
            "ตรวจสอบว่าคอมพิวเตอร์เปิดจออยู่หรือไม่",
            "ตรวจสอบว่ามีสิ่งกีดขวางหรือกำแพงทึบบดบังระหว่างสายตาของศัตรูกับตัวละครของผู้เล่นหรือไม่",
            "ตรวจสอบคะแนนสะสม",
            "ตรวจสอบเวอร์ชันของบราวเซอร์"
          ],
          correctAnswer: 1,
          explanation: "Line of Sight ยิงลำแสงสมมุติ (Ray) จากตำแหน่งตาของศัตรูไปยังผู้เล่น หากลำแสงชนกำแพงก่อนถึงตัวผู้เล่น แสดงว่าผู้เล่นกำลังแอบอยู่หลังกำแพง ศัตรูจะไม่สามารถมองเห็นได้"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบ A* Pathfinding เดินทะลุผ่านเขาวงกต",
        toolName: "JavaScript Console & Canvas",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "สร้างตารางเมทริกซ์ 10x10 วางสิ่งกีดขวางกำแพง และเรียกใช้ฟังก์ชัน aStarPathfinding เพื่อหาเส้นทางเดินจาก (0,0) ไปยัง (9,9)",
        steps: [
          {
            title: "สร้างตารางแผนที่พร้อมกำแพง",
            detail: "กำหนดตัวแปร map = [[0,0,1,0...], [0,1,1,0...]] โดยใส่เลข 1 แทนกำแพงขวางกลางฉาก"
          },
          {
            title: "รันอัลกอริทึม",
            detail: "เรียกคำสั่ง path = aStarPathfinding(map, {x:0, y:0}, {x:9, y:9})"
          },
          {
            title: "แสดงผลเส้นทาง",
            detail: "วนลูปพิมพ์พิกัดผลลัพธ์ใน Console สังเกตว่าพิกัดจะเลี้ยวอ้อมบล็อกเลข 1 อย่างชาญฉลาด"
          },
          {
            title: "ทดสอบกรณีปิดตาย",
            detail: "ล้อมกำแพงรอบเป้าหมายให้สนิทและรันซ้ำ สังเกตว่าฟังก์ชันคืนค่าอาเรย์ว่าง [] ถูกต้อง"
          }
        ],
        verification: "อัลกอริทึมต้องส่งคืนรายการพิกัดเส้นทางที่เชื่อมโยงจากจุดเริ่มต้นไปยังเป้าหมาย โดยไม่มีพิกัดใดที่ตรงกับตำแหน่งกำแพง (ค่า 1) เลยแม้แต่จุดเดียว"
      }
    },

    {
      id: "game-8",
      title: "สถาปัตยกรรมเอนจินเกมระดับสากล: Godot Engine 4 (Nodes, Scene Tree และ GDScript 2.0)",
      description: "ทำความเข้าใจปรัชญาของ Godot Engine (Everything is a Node, Composition over Inheritance), วงจรชีวิตโหนด (_ready, _physics_process), ระบบสื่อสารไร้การยึดติดด้วย Signals, และการควบคุมตัวละคร 2D ด้วย CharacterBody2D",
      duration: "70 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Godot Engine 4 สำหรับวิศวกรเกมยุคใหม่

**Godot Engine 4** ได้รับการยอมรับว่าเป็นหนึ่งในเอนจินเกมที่ทรงพลังและมีสถาปัตยกรรมที่สะอาดที่สุดในโลก มีขนาดตัวโปรแกรมที่กะทัดรัด (ไม่เกิน $100\\text{ MB}$) เป็น **โอเพนซอร์ส 100% ภายใต้สัญญาอนุญาต MIT (ไม่มีส่วนแบ่งรายได้หรือค่าธรรมเนียมใดๆ ทั้งสิ้น)**

---

## 1. ปรัชญาโครงสร้างของ Godot: Nodes และ Scene Tree

ใน Godot ทุกอย่างคือ **Node (โหนด)** และการรวมกลุ่มของโหนดจะกลายเป็น **Scene (ฉาก)**:

\`\`\`
Scene: Player.tscn (ตัวละครผู้เล่น)
 └─ CharacterBody2D (Root Node จัดการฟิสิกส์และการชน)
     ├─ AnimatedSprite2D (แสดงผลภาพกราฟิกแอนิเมชัน)
     ├─ CollisionShape2D (กำหนดกรอบแคปซูลการชนทางกายภาพ)
     ├─ Camera2D (กล้องติดตามผู้เล่น)
     └─ AudioStreamPlayer2D (เล่นเสียงฝีเท้าและเสียงกระโดด)
\`\`\`

- **Composition over Inheritance:** แทนที่จะเขียนคลาสสืบทอดที่ซับซ้อน เราประกอบ Scene ย่อยๆ เข้าด้วยกัน (เช่น สร้าง Scene ปืน, Scene กระสุน แล้วนำมาแปะเป็นโหนดลูกใน Scene ตัวละคร)

---

## 2. วงจรชีวิตของโหนดในภาษา GDScript 2.0

ภาษา **GDScript** ถูกออกแบบมาเพื่อการพัฒนาเกมโดยเฉพาะ ไวยากรณ์กระชับคล้าย Python แต่รันได้เร็วและผูกติดกับ C++ Core ภายในเอนจินโดยตรง:
1. **\`_init()\`:** ถูกเรียกเมื่อออบเจกต์ถูกสร้างขึ้นในหน่วยความจำ (Constructor)
2. **\`_ready()\`:** ถูกเรียกครั้งเดียวเมื่อโหนดและโหนดลูกทั้งหมดถูกโหลดเข้าสู่ **Scene Tree** เรียบร้อยแล้ว เหมาะสำหรับการค้นหาพาดพิงโหนดอื่น
3. **\`_process(delta)\`:** รันในทุกๆ เฟรมการแสดงผล เหมาะกับงานกราฟิกและแอนิเมชัน
4. **\`_physics_process(delta)\`:** รันตามความถี่ฟิสิกส์คงที่แน่นอน (**Fixed Timestep ปกติคือ 60 Hz**) **ต้องคำนวณการเคลื่อนที่และการชนในฟังก์ชันนี้เสมอ!**

---

## 3. สถาปัตยกรรม Signals: การสื่อสารแบบหลวม (Loose Coupling)

เพื่อไม่ให้โค้ดผูกติดกันจนแก้ยาก Godot ใช้รูปแบบ **Observer Pattern** ผ่านระบบ **Signals**:
- เมื่อผู้เล่นโดนหนาม: โหนดตัวละครจะยิงสัญญาณ \`signal health_changed(new_hp)\` ออกมา
- หน้าจอ UI (หลอดเลือด) จะคอยดักฟัง (Connect) สัญญาณนี้ แล้วปรับลดแถบพลังชีวิตลง โดยที่ตัวละครไม่จำเป็นต้องรู้จักว่าหน้าจอ UI เขียนอย่างไร!`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# สคริปต์ควบคุมตัวละคร CharacterBody2D บน Godot Engine 4 (GDScript 2.0)
# รองรับ Static Typing, การกระโดดตามฟิสิกส์, และการยิง Signals แจ้งเตือน UI
# แฟ้ม: res://scripts/player_controller.gd
# =================================================================

extends CharacterBody2D

# 1. กำหนด Signals สื่อสารกับระบบอื่นแบบ Loose Coupling
signal health_changed(current_hp: int, max_hp: int)
signal player_died()

# 2. ตัวแปรปรับแต่งได้ผ่าน Inspector ของ Godot (@export)
@export_group("Movement Parameters")
@export var move_speed: float = 280.0
@export var jump_velocity: float = -420.0
@export var acceleration: float = 1200.0
@export var friction: float = 1000.0

@export_group("Combat")
@export var max_health: int = 100
var current_health: int

# ดึงค่าแรงโน้มถ่วงมาตรฐานจาก Project Settings ของเอนจิน
var gravity: float = ProjectSettings.get_setting("physics/2d/default_gravity")

# อ้างอิงโหนดลูกล่วงหน้าด้วย @onready
@onready var sprite: AnimatedSprite2D = $AnimatedSprite2D

func _ready() -> void:
    current_health = max_health
    # ส่งสัญญาณเริ่มต้นให้หลอดเลือด UI ทราบสถานะ
    health_changed.emit(current_health, max_health)

func _physics_process(delta: float) -> void:
    # 1. จัดการแรงโน้มถ่วง (Gravity) เมื่อลอยอยู่กลางอากาศ
    if not is_on_floor():
        velocity.y += gravity * delta

    # 2. จัดการการกระโดด (Jump Input)
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = jump_velocity

    # 3. จัดการการเคลื่อนที่แนวนอน (Horizontal Movement)
    var direction: float = Input.get_axis("ui_left", "ui_right")
    
    if direction != 0.0:
        # เร่งความเร็วตามทิศทาง
        velocity.x = move_toward(velocity.x, direction * move_speed, acceleration * delta)
        # พลิกหน้าตัวละครซ้าย-ขวา
        sprite.flip_h = direction < 0.0
        if is_on_floor():
            sprite.play("run")
    else:
        # ชะลอความเร็วด้วยแรงเสียดทานเมื่อปล่อยปุ่ม
        velocity.x = move_toward(velocity.x, 0.0, friction * delta)
        if is_on_floor():
            sprite.play("idle")

    if not is_on_floor():
        sprite.play("jump" if velocity.y < 0.0 else "fall")

    # 4. ฟังก์ชันเทพของ Godot: คำนวณการเดินและไถลไปตามระนาบพื้นผิวอัตโนมัติ!
    move_and_slide()

# ฟังก์ชันรับความเสียหายเมื่อถูกศัตรูโจมตี
func take_damage(amount: int) -> void:
    current_health = max(0, current_health - amount)
    health_changed.emit(current_health, max_health)
    
    if current_health <= 0:
        player_died.emit()
        queue_free() # ทำลายโหนดตัวละครทิ้งอย่างปลอดภัย`,
        description: "สคริปต์ GDScript 2.0 บน Godot 4 ครบถ้วนทั้ง Static Typing, ฟิสิกส์ move_and_slide(), และการใช้งาน Signals"
      },
      quiz: [
        {
          id: "game-8-q1",
          question: "ใน Godot Engine 4 เพราะเหตุใดการเขียนโค้ดคำนวณการเคลื่อนที่และฟิสิกส์ จึงต้องเขียนไว้ในฟังก์ชัน _physics_process(delta) แทนที่จะเขียนใน _process(delta)?",
          options: [
            "เพราะ _process มีไว้สำหรับเล่นเสียงเท่านั้น",
            "เพราะ _physics_process รันด้วยความถี่คงที่แน่นอนตามรอบของ Physics Tick (ปกติคือ 60 Hz) ทำให้การคำนวณการชนและแรงโน้มถ่วงมีความเสถียรและแม่นยำ ไม่ขึ้นกับอัตราการรีเฟรชหน้าจอ",
            "เพราะ _physics_process เขียนสั้นกว่า",
            "ไม่มีข้อแตกต่าง สามารถใช้แทนกันได้เสมอ"
          ],
          correctAnswer: 1,
          explanation: "_process(delta) รันตาม Frame Rate ของการแสดงผลหน้าจอซึ่งอาจแกว่งไปมา ส่วน _physics_process(delta) รันตาม Fixed Timestep ของ Physics Engine การคำนวณความเร็วและการชนใน _physics_process จึงรับประกันความถูกต้องและไม่เกิดบั๊กฟิสิกส์เพี้ยน"
        },
        {
          id: "game-8-q2",
          question: "ระบบ Signals ใน Godot Engine มีบทบาทสำคัญในการออกแบบสถาปัตยกรรมของเกมอย่างไร?",
          options: [
            "ช่วยเพิ่มความแรงของสัญญาณ Wi-Fi ในเครื่อง",
            "ช่วยให้โหนดต่างๆ สามารถสื่อสารและส่งข้อมูลข้ามหากันได้แบบ 'Loose Coupling' โดยที่โหนดผู้ส่งสัญญาณไม่จำเป็นต้องรู้จักหรือพึ่งพาโค้ดของโหนดผู้รับสัญญาณโดยตรง",
            "ใช้สำหรับการต่อสายไฟในเกม",
            "ใช้บังคับให้ตัวละครเดินหน้าเท่านั้น"
          ],
          correctAnswer: 1,
          explanation: "Signals ใช้หลักการ Observer Pattern โหนดผู้ส่งเพียงแค่ emit() สัญญาณออกมา โหนดอื่น เช่น หลอดเลือด UI หรือระบบเก็บสถิติ สามารถมาผูกดักฟัง (Connect) ได้อย่างอิสระ ทำให้โค้ดเป็นอิสระต่อกัน (Decoupled) แก้ไขง่าย ไม่พังตามกัน"
        }
      ],
      labGuide: {
        title: "แล็บสร้างตัวละคร 2D พร้อมระบบฟิสิกส์บน Godot Engine 4",
        toolName: "Godot Engine 4.x Standard",
        downloadUrl: "https://godotengine.org/",
        objective: "เปิดโปรแกรม Godot 4 สร้าง Scene ตัวละครประเภท CharacterBody2D ใส่ CollisionShape2D และรันการเคลื่อนที่ด้วย GDScript",
        steps: [
          {
            title: "สร้าง Scene ตัวละครใหม่",
            detail: "เปิด Godot 4 กดปุ่ม + สร้าง Scene ใหม่ เลือก Root Node เป็น 'CharacterBody2D' และตั้งชื่อว่า Player"
          },
          {
            title: "เพิ่มโหนดลูกทางกายภาพ",
            detail: "คลิกขวาที่ Player เลือก Add Child Node เพิ่ม 'Sprite2D' (ลากรูปภาพ icon.svg ใส่ช่อง Texture) และเพิ่ม 'CollisionShape2D' (เลือก Shape เป็น CircleShape2D หรือ RectangleShape2D)"
          },
          {
            title: "ผูกสคริปต์ GDScript",
            detail: "คลิกขวาที่โหนด Player เลือก 'Attach Script' เลือก Template: 'CharacterBody2D: Basic Movement' แล้วกด Create"
          },
          {
            title: "ทดสอบรัน Scene",
            detail: "กดปุ่ม F6 (Run Current Scene) ใช้ปุ่มลูกศรซ้าย-ขวา และกดปุ่ม Spacebar เพื่อทดสอบการกระโดด"
          }
        ],
        verification: "หน้าต่างเกมของ Godot 4 จะเปิดขึ้นมา ตัวละครไอคอนจะตกลงมาตามแรงโน้มถ่วง และผู้ใช้สามารถใช้ปุ่มลูกศรบังคับเดินและกระโดดได้อย่างราบรื่น 60 FPS"
      }
    },

    {
      id: "game-9",
      title: "โปรเจกต์จบ: Full 2D Action Platformer Game และการส่งออกสู่ WebGL / WebAssembly",
      description: "รวมทุกองค์ประกอบสู่เกมแอ็กชันสมบูรณ์แบบ: ระบบด่านหลายชั้น, การจัดการกระสุนและเอฟเฟกต์ด้วย Object Pooling ป้องกัน Garbage Collection ค้าง, ระบบคะแนนและบันทึกสถิติลง LocalStorage, และการส่งออกเกมขึ้นสู่ WebGL เพื่อเล่นบนเบราว์เซอร์",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# การประกอบร่างเกม 2D Action Platformer และการส่งออกสู่ WebGL

ในโปรเจกต์สุดท้ายนี้ คุณจะได้นำองค์ความรู้ทั้งหมด ทั้งสถาปัตยกรรม Game Loop, เวกเตอร์คณิตศาสตร์, ฟิสิกส์การชน AABB, FSM ตัวละคร, AI ศัตรู และเสียงสังเคราะห์ มารวมเข้าด้วยกันเพื่อสร้างเกม **2D Cyber Platformer** ที่สมบูรณ์แบบพร้อมเผยแพร่สู่ผู้เล่นทั่วโลก

---

## 1. การเพิ่มประสิทธิภาพระดับสูงด้วย Object Pooling Pattern

> [!IMPORTANT]
> **ปัญหาเฟรมเรตตกจาก Garbage Collector (GC Spikes):**
> หากผู้เล่นยิงกระสุนปืนกล 50 นัดต่อวินาที และเราใช้คำสั่ง \`new Bullet()\` ตลอดเวลา เมื่อกระสุนชนกำแพงและถูกทำลาย ตัวเบราว์เซอร์จะต้องเปิดรอบ Garbage Collection เพื่อกวาดล้างแรม ส่งผลให้หน้าจอเกม **กระตุกสะดุดทุกๆ ไม่กี่วินาที**

### สถาปัตยกรรม Object Pool:
- สร้างออบเจกต์กระสุนเตรียมไว้ล่วงหน้า เช่น 100 นัดตั้งแต่เริ่มเปิดเกม
- เมื่อต้องการยิง: ดึงกระสุนที่ "ไม่ได้ใช้งาน" ออกมาเปิดสถานะ \`active = true\`
- เมื่อกระสุนชนเป้าหมาย: เพียงแค่ตั้งค่า \`active = false\` และนำกลับเข้าคลัง โดย **ไม่มีการสร้างหรือทำลายออบเจกต์ทิ้งเลยแม้แต่ชิ้นเดียว!**

---

## 2. ขั้นตอนการส่งออกเกมขึ้นสู่เว็บเบราว์เซอร์ (WebGL / WebAssembly)

เกมยุคใหม่ทั้งใน HTML5 Canvas หรือส่งออกจาก Godot Engine จะถูกคอมไพล์เป็น **WebAssembly (WASM)** ร่วมกับ **WebGL 2.0 Canvas**:
- ทำงานด้วยความเร็วใกล้เคียงกับ Native C++
- รันได้บนทุกอุปกรณ์โดยไม่ต้องให้ผู้เล่นดาวน์โหลดหรือติดตั้งโปรแกรมใดๆ
- สามารถเผยแพร่ขึ้นสู่แพลตฟอร์มเกมอินดี้ระดับโลก เช่น **Itch.io** หรือเว็บไซต์สถานศึกษาได้ทันที`,
      codeExample: {
        language: "javascript",
        code: `// =================================================================
// สถาปัตยกรรม Object Pool สำหรับระบบกระสุนปืนในเกมแอ็กชัน 2D
// กำจัดขยะในหน่วยความจำ RAM 100% ป้องกันอาการสะดุดจาก Garbage Collector
// =================================================================

class Bullet {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.active = false; // สถานะว่ากำลังใช้งานอยู่หรือไม่
    this.damage = 25;
    this.lifespan = 0;
  }

  // เรียกใช้กระสุนซ้ำ (Re-spawn)
  spawn(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.active = true;
    this.lifespan = 2.0; // มีอายุลอยอยู่ในอากาศ 2 วินาที
  }

  update(dt) {
    if (!this.active) return;

    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.lifespan -= dt;

    if (this.lifespan <= 0) {
      this.active = false; // ปิดสถานะเพื่อคืนกลับเข้าคลัง Pool
    }
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.fillStyle = "#facc15"; // สีกระสุนสีเหลืองเรืองแสง
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }
}

class BulletPoolManager {
  constructor(poolSize = 60) {
    // จองหน่วยความจำล่วงหน้าเพียงครั้งเดียวตั้งแต่เริ่มเกม
    this.pool = Array.from({ length: poolSize }, () => new Bullet());
  }

  // ขอยืมกระสุนที่ว่างอยู่ไปยิง
  fireBullet(x, y, vx, vy) {
    const bullet = this.pool.find(b => !b.active);
    if (bullet) {
      bullet.spawn(x, y, vx, vy);
      return bullet;
    }
    // หากกระสุนเต็มคลัง ให้ข้ามไป (Drop) เพื่อรักษาเฟรมเรต
    return null;
  }

  update(dt) {
    for (const bullet of this.pool) {
      bullet.update(dt);
    }
  }

  draw(ctx) {
    for (const bullet of this.pool) {
      bullet.draw(ctx);
    }
  }
}

// ตัวอย่างการใช้งานจริงใน Game Loop
const bulletManager = new BulletPoolManager(50);
// เมื่อผู้เล่นกดปุ่มยิง:
// bulletManager.fireBullet(player.x, player.y, 500, 0);`,
        description: "สถาปัตยกรรม Bullet Object Pool สำหรับระบบเกมประสิทธิภาพสูง ป้องกันปัญหา Garbage Collection Spike"
      },
      quiz: [
        {
          id: "game-9-q1",
          question: "เหตุใดในเกมประเภทยิงปืนที่มีการสร้างกระสุนหรือเอฟเฟกต์จำนวนมาก จึงจำเป็นต้องใช้รูปแบบสถาปัตยกรรม Object Pooling แทนการสร้างออบเจกต์ใหม่ด้วยคำสั่ง 'new' เสมอ?",
          options: [
            "เพราะทำให้กระสุนยิงได้แรงขึ้น 2 เท่า",
            "เพื่อป้องกันไม่ให้หน่วยความจำ RAM เต็มและลดภาระของตัวเก็บขยะ (Garbage Collector) ที่มักทำให้เกมเกิดอาการสะดุดกระตุก (Framerate Drop / Lag Spikes) เป็นระยะ",
            "เพราะเบราว์เซอร์ไม่อนุญาตให้ใช้คำสั่ง new ในลูป",
            "เพื่อป้องกันการถูกขโมยโค้ดเกม"
          ],
          correctAnswer: 1,
          explanation: "การสร้างและทำลายออบเจกต์นับร้อยชิ้นในทุกวินาทีจะทำให้ขยะในหน่วยความจำพุ่งสูงอย่างรวดเร็ว เมื่อ Garbage Collector เริ่มกระบวนการกวาดล้าง จะต้องหยุดการทำงานของเอนจินเกมชั่วคราว ทำให้เฟรมเรตตก การ Reuse ออบเจกต์เดิมใน Pool จะรักษาหน่วยความจำให้นิ่งสนิท"
        },
        {
          id: "game-9-q2",
          question: "เทคโนโลยี WebAssembly (WASM) ช่วยยกระดับการเล่นเกมบนเว็บเบราว์เซอร์ได้อย่างไรเมื่อเทียบกับ JavaScript ธรรมดา?",
          options: [
            "อนุญาตให้เกมคอมไพล์โค้ดจากภาษาประสิทธิภาพสูงอย่าง C++ หรือ Rust ให้กลายเป็นรหัสไบนารีที่รันบนเบราว์เซอร์ด้วยความเร็วใกล้เคียงกับ Native Application",
            "ทำให้เกมไม่ต้องการการ์ดจอ",
            "เปลี่ยนหน้าจอคอมพิวเตอร์ให้กลายเป็นจอสัมผัส",
            "เล่นเกมได้โดยไม่ต้องเปิดเบราว์เซอร์"
          ],
          correctAnswer: 0,
          explanation: "WebAssembly คือมาตรฐานไบนารีโค้ดระดับต่ำที่รันบนเบราว์เซอร์ด้วยความเร็วสูงมาก เอนจินอย่าง Godot และ Unity ใช้ WASM ในการแปลงโค้ดเอนจิน C++ ให้ทำงานบนเว็บเบราว์เซอร์ได้อย่างลื่นไหลเทียบเท่าแอปบนเครื่อง"
        }
      ],
      labGuide: {
        title: "แล็บสร้าง Object Pool สำหรับระบบยิงกระสุนบน Canvas",
        toolName: "VS Code & Live Server",
        downloadUrl: "https://code.visualstudio.com/",
        objective: "ทดสอบสร้างคลาส BulletPoolManager เชื่อมโยงกับการคลิกเมาส์ และสังเกตการหมุนเวียนใช้งานกระสุนซ้ำโดยที่จำนวนออบเจกต์ในหน่วยความจำไม่เพิ่มขึ้น",
        steps: [
          {
            title: "สร้างไฟล์เกมยิงเป้า",
            detail: "สร้างไฟล์ shooter.html นำโค้ด Bullet และ BulletPoolManager ไปวางในแท็ก <script>"
          },
          {
            title: "ผูก Event คลิกเมาส์",
            detail: "เพิ่มคำสั่ง canvas.addEventListener('mousedown', (e) => bulletManager.fireBullet(50, 180, 600, 0))"
          },
          {
            title: "อัปเดตและวาดใน Game Loop",
            detail: "ในฟังก์ชัน update เรียก bulletManager.update(dt) และใน render เรียก bulletManager.draw(ctx)"
          },
          {
            title: "ทดสอบคลิกยิงรัวๆ",
            detail: "คลิกเมาส์รัวๆ และเปิดดู Memory Panel ใน Chrome DevTools เพื่อสังเกตว่ากราฟหน่วยความจำ Heap นิ่งสนิท ไม่พุ่งสูงขึ้น"
          }
        ],
        verification: "กระสุนสามารถยิงออกไปทางขวาได้อย่างรวดเร็วและต่อเนื่อง และเมื่อกระสุนลอยพ้นจอไปแล้ว สามารถกดยิงชุดใหม่ได้ทันทีโดยที่ออบเจกต์ในคลังถูกนำกลับมาใช้ใหม่อย่างสมบูรณ์แบบ"
      }
    }
  ]
};
