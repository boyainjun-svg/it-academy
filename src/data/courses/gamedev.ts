import { Course } from "../types";

export const gamedevCourse: Course = {
  id: "gamedev",
  title: "Game Development",
  description: "สร้างเกม 2D ด้วย HTML5 Canvas, JavaScript, Phaser และเครื่องมือสร้างเกมระดับโลกอย่าง Godot Engine",
  longDescription: "หลักสูตรพัฒนาเกมที่สอนตั้งแต่รากฐานของ Game Engine การคำนวณ Game Loop 60 FPS, เวกเตอร์คณิตศาสตร์ 2 มิติ, การเขียนแอนิเมชันจาก Sprite Sheet, ระบบฟิสิกส์แรงโน้มถ่วงและการตรวจจับการชน, ปัญญาประดิษฐ์ศัตรู (Enemy AI), ตลอดจนการแนะนำเอนจินเกมยอดนิยมอย่าง Godot 4 และการสร้างเกม Platformer เล่นได้ทันทีในเว็บ",
  icon: "🎮",
  color: "red",
  gradient: "from-red-500 to-rose-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["GameDev", "JavaScript", "HTML5 Canvas", "Phaser", "Godot Engine", "Physics", "AI"],
  recommendedTools: [
    {
      name: "Godot Engine 4",
      icon: "🤖",
      badge: "Open Source Game Engine",
      description: "เอนจินสร้างเกมโอเพนซอร์สยอดนิยมอันดับ 1 ของโลก ไฟล์เล็กกะทัดรัด (ไม่เกิน 100MB) มีระบบโหนด (Nodes) ที่ทรงพลัง รองรับทั้งเกม 2D และ 3D",
      downloadUrl: "https://godotengine.org/",
      setupGuide: "1. ดาวน์โหลด Godot Engine ตัว Standard (ไม่ต้องติดตั้ง แตกไฟล์แล้วเปิดได้เลย)\n2. สร้างโปรเจกต์ใหม่ เลือก Compatibility Renderer\n3. สร้าง 2D Scene และเขียนสคริปต์ด้วยภาษา GDScript ที่คล้าย Python"
    },
    {
      name: "Tiled Map Editor",
      icon: "🗺️",
      badge: "Tilemap Tool",
      description: "โปรแกรมออกแบบฉากและด่านเกมแบบ 2D Tilemap ที่นักพัฒนาเกมทั่วโลกเลือกใช้ สามารถ Export เป็นไฟล์ JSON นำเข้าเว็บหรือ Godot ได้ทันที",
      downloadUrl: "https://www.mapeditor.org/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Tiled Map Editor\n2. สร้าง Map ใหม่ กำหนดขนาดช่องพิกเซล (เช่น 16x16 หรือ 32x32)\n3. นำเข้าไฟล์ Tileset ภาพฉาก แล้วเริ่มระบายวาดบล็อกสิ่งกีดขวางลงบนฉาก"
    },
    {
      name: "Pixelorama / Aseprite",
      icon: "🎨",
      badge: "Pixel Art Studio",
      description: "โปรแกรมวาดภาพสไตล์ Pixel Art และทำแอนิเมชัน Sprite Sheet สำหรับตัวละครและเอฟเฟกต์ในเกม",
      downloadUrl: "https://orama-interactive.itch.io/pixelorama",
      setupGuide: "1. ดาวน์โหลด Pixelorama (ฟรี) หรือ Aseprite\n2. สร้างแคนวาสขนาด 32x32 หรือ 64x64 พิกเซล\n3. วาดตัวละครทีละเฟรม แล้ว Export เป็นแผ่นภาพ Sprite Sheet แนวนอน"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "game-1",
      title: "สถาปัตยกรรม Game Loop และการเรนเดอร์ภาพบน HTML5 Canvas",
      description: "ทำความเข้าใจวงรอบ Game Loop (Input, Update, Render), requestAnimationFrame และความแตกต่างระหว่าง 30 FPS vs 60 FPS",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# หัวใจของวิดีโอเกม: Game Loop

เกมคอมพิวเตอร์แตกต่างจากโปรแกรมทั่วไปตรงที่ **เกมไม่เคยหยุดนิ่ง** แม้ผู้เล่นจะไม่ได้กดปุ่มใดๆ น้ำในเกมยังคงไหล และศัตรูยังคงเคลื่อนไหว

## 3 ขั้นตอนหลักของ Game Loop ในทุกๆ เฟรม
1. **Process Input:** รับสัญญาณจากคีย์บอร์ด เมาส์ หรือจอยสติ๊ก
2. **Update State:** คำนวณตำแหน่งใหม่ ความเร็ว และการลดพลังชีวิต
3. **Render Graphics:** วาดภาพตัวละครและฉากลงบนหน้าจอใหม่ทั้งหมด

## ฟังก์ชัน \`requestAnimationFrame()\`
ในเบราว์เซอร์ เราไม่ใช้ \`setInterval()\` เพราะจะทำให้ภาพกระตุก แต่เราใช้ \`requestAnimationFrame()\` ซึ่งทำงานประสานกับ Refresh Rate ของหน้าจอ (ปกติคือ 60 Hz = 60 เฟรมต่อวินาที หรือ 16.6 มิลลิวินาทีต่อเฟรม)`,
      codeExample: {
        language: "html",
        code: `<!DOCTYPE html>
<html>
<body>
<canvas id="gameCanvas" width="480" height="320" style="background:#0f172a; border-radius:8px;"></canvas>
<script>
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  let x = 50;

  function gameLoop() {
    // 1. Clear Screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. Update
    x += 2;
    if (x > canvas.width) x = 0;

    // 3. Render
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(x, 140, 40, 40);

    requestAnimationFrame(gameLoop); // วนลูปต่อเนื่อง 60 FPS
  }

  gameLoop();
</script>
</body>
</html>`,
        description: "Game Loop พื้นฐานที่สุดบน HTML5 Canvas ที่ทำงานลื่นไหล 60 FPS"
      },
      quiz: [
        { id: "game-1-q1", question: "เหตุใดในการพัฒนาเกมบนเว็บจึงควรใช้ requestAnimationFrame แทน setInterval?", options: ["เพราะทำให้ตัวหนังสือใหญ่ขึ้น", "เพราะซิงค์ความเร็วตามอัตราการรีเฟรชของหน้าจอคอมพิวเตอร์ (60Hz) ทำให้ภาพนุ่มนวลและหยุดทำงานอัตโนมัติเมื่อย่อหน้าจอเพื่อประหยัดแบตเตอรี่", "เพราะใช้หน่วยความจำน้อยกว่า 100 เท่า", "ไม่มีข้อแตกต่าง"], correctAnswer: 1, explanation: "requestAnimationFrame ปรับความเร็วตามจอภาพ และหยุดประมวลผลเมื่อผู้ใช้สลับแท็บ ช่วยลดความร้อนและประหยัดพลังงาน" }
      ]
    },
    {
      id: "game-2",
      title: "เวกเตอร์ 2D, การเคลื่อนที่ และการควบคุมแป้นพิมพ์ (Keyboard Input)",
      description: "ทำความเข้าใจ Position, Velocity, Acceleration, การกดปุ่มลูกศร/WASD และการเคลื่อนที่อย่างราบรื่น",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# เวกเตอร์และการเคลื่อนที่ของตัวละคร

การระบุตำแหน่งของวัตถุในเกม 2 มิติ อิงตามระบบพิกัด $X$ (แนวนอน ซ้ายไปขวา) และ $Y$ (แนวตั้ง บนลงล่าง *สังเกตว่าค่า $Y$ ในคอมพิวเตอร์จะเพิ่มขึ้นเมื่อลงข้างล่าง*)

## สูตรฟิสิกส์การเคลื่อนที่พื้นฐาน
$$\\text{Position} = \\text{Position} + \\text{Velocity}$$
$$\\text{Velocity} = \\text{Velocity} + \\text{Acceleration}$$

## การจัดการแป้นพิมพ์ที่ถูกต้อง (Key State Map)
อย่าเคลื่อนที่ตัวละครใน Event \`keydown\` ตรงๆ เพราะการกดคีย์บอร์ดค้างจะเกิดจังหวะหน่วง (Keyboard repeat delay) วิธีที่ถูกต้องคือการใช้ Object จำสถานะว่าปุ่มใดกำลังถูกกดอยู่ (isPressed)`,
      codeExample: {
        language: "javascript",
        code: `const keys = {};

window.addEventListener('keydown', (e) => keys[e.code] = true);
window.addEventListener('keyup', (e) => keys[e.code] = false);

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 4;
  }

  update() {
    if (keys['ArrowRight'] || keys['KeyD']) this.x += this.speed;
    if (keys['ArrowLeft'] || keys['KeyA']) this.x -= this.speed;
    if (keys['ArrowUp'] || keys['KeyW']) this.y -= this.speed;
    if (keys['ArrowDown'] || keys['KeyS']) this.y += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(this.x, this.y, 30, 30);
  }
}`,
        description: "การควบคุมตัวละคร 8 ทิศทางอย่างนุ่มนวลด้วย Key State Object"
      },
      quiz: [
        { id: "game-2-q1", question: "ในระบบพิกัดของคอมพิวเตอร์กราฟิก (HTML5 Canvas) พิกัด (0,0) อยู่ที่ตำแหน่งใดของหน้าจอ?", options: ["กึ่งกลางหน้าจอ", "มุมล่างซ้าย", "มุมบนซ้าย", "มุมบนขวา"], correctAnswer: 2, explanation: "ระบบพิกัด 2D บนหน้าจอคอมพิวเตอร์ จุดกำเนิด (0,0) อยู่ที่มุมบนซ้ายสุดเสมอ โดยแกน Y พุ่งลงด้านล่าง" }
      ]
    },
    {
      id: "game-3",
      title: "Sprite Sheet, แอนิเมชัน และการจัดการไฟล์เสียง (Web Audio API)",
      description: "ตัดเฟรมภาพตัวละครจากแผ่น Sprite Sheet, คำนวณ Frame Rate แอนิเมชัน และเล่นเสียงเอฟเฟกต์กระโดด/เก็บเหรียญ",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การทำแอนิเมชัน 2D ด้วย Sprite Sheet

**Sprite Sheet** คือไฟล์ภาพขนาดใหญ่แผ่นเดียวที่รวมภาพแอ็กชันของตัวละครทุกๆ ท่าทางเข้าไว้ด้วยกัน การใช้ภาพแผ่นเดียวช่วยลดจำนวนครั้งในการโหลดไฟล์ผ่านเครือข่าย

## คำสั่ง \`ctx.drawImage()\` แบบตัดชิ้นส่วน (Cropping)
\`\`\`javascript
ctx.drawImage(
  image,
  sourceX, sourceY, sourceWidth, sourceHeight, // พิกัดตัดบนแผ่น Sprite
  destX, destY, destWidth, destHeight          // พิกัดที่จะนำไปวาดบนจอเกม
);
\`\`\``,
      codeExample: {
        language: "javascript",
        code: `class AnimatedSprite {
  constructor(img, frameWidth, frameHeight, totalFrames) {
    this.img = img;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.totalFrames = totalFrames;
    this.currentFrame = 0;
    this.timer = 0;
  }

  update() {
    this.timer++;
    if (this.timer % 6 === 0) { // สลับเฟรมทุกๆ 6 Tick (ประมาณ 10 เฟรม/วินาที)
      this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
    }
  }

  draw(ctx, x, y) {
    ctx.drawImage(
      this.img,
      this.currentFrame * this.frameWidth, 0, // ตำแหน่งตัดในแกน X
      this.frameWidth, this.frameHeight,
      x, y,
      this.frameWidth, this.frameHeight
    );
  }
}`,
        description: "การคำนวณสลับเฟรมแอนิเมชันจากแผ่น Sprite Sheet"
      },
      quiz: [
        { id: "game-3-q1", question: "เหตุใดนักพัฒนาเกมจึงนิยมรวมภาพตัวละครหลายๆ ท่าทางไว้ในไฟล์ภาพเดียวกัน (Sprite Sheet)?", options: ["ช่วยให้ภาพมีความคมชัดระดับ 4K", "ลดจำนวนคำขอ HTTP Request และช่วยให้การจัดการหน่วยความจำ GPU ทำงานได้รวดเร็วยิ่งขึ้น", "ทำให้ไฟล์มีสีสันสดใสขึ้น", "ไม่มีประโยชน์อะไร"], correctAnswer: 1, explanation: "Sprite Sheet ช่วยลดการโหลดไฟล์ภาพซ้ำซ้อน และ GPU สลับพื้นผิว (Texture Switch) ได้เร็วมาก" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "game-4",
      title: "ระบบฟิสิกส์ 2D: แรงโน้มถ่วง (Gravity) และการชน (AABB Collision)",
      description: "สร้างฟิสิกส์การกระโดด ตกจากที่สูง และการตรวจสอบการชนแบบกล่องสี่เหลี่ยม Axis-Aligned Bounding Box",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# ระบบฟิสิกส์และการตรวจจับการชน (Collision Detection)

เกมแนว Platformer (อย่าง Mario) ต้องอาศัยระบบฟิสิกส์จำลองแรงโน้มถ่วงและการตรวจสอบว่าตัวละครยืนอยู่บนพื้นหรือไม่

## 1. การจำลองแรงโน้มถ่วง (Gravity)
ในแต่ละเฟรม ค่าความเร็วในแนวตั้ง (\`vy\`) จะถูกบวกด้วยค่าคงที่แรงโน้มถ่วงเสมอ:
\`\`\`javascript
player.vy += GRAVITY;
player.y += player.vy;
\`\`\`

## 2. การตรวจจับการชน AABB (Axis-Aligned Bounding Box)
สี่เหลี่ยมสองรูป $A$ และ $B$ จะชนกัน ก็ต่อเมื่อเงื่อนไขทั้ง 4 ด้านซ้อนทับกันทั้งหมด:
- $A.\\text{right} > B.\\text{left}$
- $A.\\text{left} < B.\\text{right}$
- $A.\\text{bottom} > B.\\text{top}$
- $A.\\text{top} < B.\\text{bottom}$`,
      codeExample: {
        language: "javascript",
        code: `// ฟังก์ชันตรวจสอบการชนระหว่างสี่เหลี่ยม 2 รูป
function checkAABBCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// ตัวอย่างการแก้ปัญหาเมื่อเหยียบพื้น
function handleGroundCollision(player, platform) {
  if (checkAABBCollision(player, platform)) {
    // ถ้าผู้เล่นกำลังตกลงมา ให้วางเท้าไว้บนพื้นผิวบนสุดของแพลตฟอร์ม
    if (player.vy > 0 && (player.y + player.height - player.vy) <= platform.y) {
      player.y = platform.y - player.height;
      player.vy = 0;
      player.isGrounded = true;
    }
  }
}`,
        description: "อัลกอริทึม AABB Collision Detection และการจัดตำแหน่งเท้าเมื่อตกกระทบพื้น"
      },
      quiz: [
        { id: "game-4-q1", question: "AABB ย่อมาจากอะไรในวิชากราฟิกและเกมฟิสิกส์?", options: ["Auto Animation Bounding Box", "Axis-Aligned Bounding Box", "Advanced Action Binary Box", "Active Area Bounding Base"], correctAnswer: 1, explanation: "AABB คือ Axis-Aligned Bounding Box กล่องสี่เหลี่ยมที่ขนานกับแกนพิกัด X และ Y โดยไม่มีการหมุนเอียง" }
      ]
    },
    {
      id: "game-5",
      title: "การออกแบบฉากเกมด้วย Tilemap และกล้องติดตามตัวละคร (Camera)",
      description: "ทำความเข้าใจระบบพิกัดตาราง Grid Tile, การวาดฉากขนาดใหญ่ และการเลื่อนหน้าต่างมุมกล้อง (Camera Scroll)",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# การสร้างฉากเกมด้วยระบบ Tilemap

การวาดฉากเกมที่มีขนาดกว้างใหญ่หลายพันพิกเซล ไม่จำเป็นต้องวาดภาพขนาดใหญ่เตรียมไว้ แต่ใช้วิธีนำชิ้นส่วนบล็อกเล็กๆ (เช่น ดิน หญ้า อิฐ ขนาด 32x32) มาต่อกันเป็นตาราง Matrix 2 มิติ

## ระบบกล้องในเกม (2D Camera)
เมื่อตัวละครเดินทะลุขอบจอ เราจะใช้เทคนิค **Camera Translation**:
\`\`\`javascript
ctx.save();
ctx.translate(-camera.x, -camera.y);
// วาดทุกอย่างในโลกของเกมตามปกติ
ctx.restore();
\`\`\``,
      codeExample: {
        language: "javascript",
        code: `// เมทริกซ์แทนฉากเกม: 0 = อากาศว่างเปล่า, 1 = ดิน, 2 = หญ้า
const levelMap = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 0, 0, 0, 0],
  [2, 2, 1, 1, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1, 1, 1]
];

const TILE_SIZE = 32;

function renderTilemap(ctx, cameraX) {
  for (let row = 0; row < levelMap.length; row++) {
    for (let col = 0; col < levelMap[row].length; col++) {
      const tileType = levelMap[row][col];
      const posX = (col * TILE_SIZE) - cameraX;
      const posY = row * TILE_SIZE;

      if (tileType === 2) {
        ctx.fillStyle = '#22c55e'; // สีบล็อกหญ้า
        ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
      } else if (tileType === 1) {
        ctx.fillStyle = '#78350f'; // สีบล็อกดิน
        ctx.fillRect(posX, posY, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}`,
        description: "การอ่าน Array 2D เพื่อเรนเดอร์ฉากเกม Tilemap ตามพิกัดกล้อง"
      },
      quiz: [
        { id: "game-5-q1", question: "ในระบบ 2D Camera เมื่อตัวละครเดินไปทางขวา ค่า Camera.x ควรขยับอย่างไรเพื่อให้เห็นฉากทางขวา?", options: ["Camera.x ต้องเพิ่มขึ้น และนำค่าไปลบ (-Camera.x) ออกจากตำแหน่งวัตถุที่วาดบนจอ", "Camera.x ต้องเป็นศูนย์เสมอ", "Camera.x ต้องลดลงอย่างรวดเร็ว", "ไม่ต้องขยับ"], correctAnswer: 0, explanation: "การเลื่อนกล้องตามตัวละครไปข้างหน้า ทำได้โดยการเลื่อนโลกทั้งใบสวนทางกลับมาทางซ้ายด้วยการลบ Camera.x" }
      ]
    },
    {
      id: "game-6",
      title: "เครื่องจักรสถานะตัวละคร (Finite State Machine - FSM)",
      description: "จัดการพฤติกรรมตัวละครที่ซับซ้อน: ยืนนิ่ง (Idle), วิ่ง (Run), กระโดด (Jump), โจมตี (Attack) โดยไม่ให้ท่าทางตีกัน",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# การควบคุมสถานะตัวละครด้วย Finite State Machine (FSM)

เมื่อตัวละครมีท่าทางเยอะ ปัญหาที่พบบ่อยคือ บั๊กตัวละครโจมตีได้ขณะกำลังลอยอยู่กลางอากาศ หรือตัวละครวิ่งแต่ขาไม่ขยับ

## แนวคิดของ FSM
ตัวละครจะสามารถอยู่ใน **สถานะ (State) ได้เพียงสถานะเดียวเท่านั้น ณ เวลาใดเวลาหนึ่ง**
- **IDLE:** ยืนนิ่ง ถ้ากดปุ่มลูกศร $\\rightarrow$ เปลี่ยนเป็น RUN, ถ้ากด Space $\\rightarrow$ เปลี่ยนเป็น JUMP
- **JUMP:** ลอยตัวในอากาศ ห้ามเปลี่ยนเป็น RUN จนกว่าจะสัมผัสพื้น (isGrounded)`,
      codeExample: {
        language: "javascript",
        code: `const States = { IDLE: 'IDLE', RUN: 'RUN', JUMP: 'JUMP' };

class CharacterFSM {
  constructor() {
    this.currentState = States.IDLE;
  }

  handleInput(input, isGrounded) {
    switch (this.currentState) {
      case States.IDLE:
        if (input.jump && isGrounded) this.changeState(States.JUMP);
        else if (input.horizontal !== 0) this.changeState(States.RUN);
        break;

      case States.RUN:
        if (input.jump && isGrounded) this.changeState(States.JUMP);
        else if (input.horizontal === 0) this.changeState(States.IDLE);
        break;

      case States.JUMP:
        if (isGrounded) {
          this.changeState(input.horizontal !== 0 ? States.RUN : States.IDLE);
        }
        break;
    }
  }

  changeState(newState) {
    this.currentState = newState;
    console.log('เปลี่ยนสถานะเป็น:', newState);
  }
}`,
        description: "Finite State Machine อย่างง่ายสำหรับควบคุมสถานะท่าทางของตัวละครในเกม"
      },
      quiz: [
        { id: "game-6-q1", question: "ประโยชน์หลักของการนำ Finite State Machine (FSM) มาใช้ในการพัฒนาเกมคือข้อใด?", options: ["ทำให้เกมมีกราฟิก 3D สวยงามขึ้น", "ช่วยจัดระเบียบตรรกะพฤติกรรม ป้องกันไม่ให้สถานะที่ขัดแย้งกันเกิดขึ้นพร้อมกัน", "ช่วยลดขนาดไฟล์เสียง", "ไม่มีความจำเป็น"], correctAnswer: 1, explanation: "FSM ช่วยป้องกันบั๊กพฤติกรรมซ้อน เช่น การโจมตีหรือวิ่งขณะกำลังล้ม โดยบังคับให้ตัวละครเปลี่ยนสถานะตามกฎที่วางไว้เท่านั้น" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "game-7",
      title: "ปัญญาประดิษฐ์ในเกม (Enemy AI & A* Pathfinding)",
      description: "สร้างศัตรูเดินลาดตระเวน (Patrol), ตรวจจับสายตา (Line of Sight), และอัลกอริทึม A* คำนวณเส้นทางเดินอ้อมกำแพงมาหาผู้เล่น",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# ปัญญาประดิษฐ์สำหรับศัตรูในเกม (Game AI)

เกมจะสนุกและท้าทายขึ้นเมื่อศัตรูมีพฤติกรรมที่ตอบสนองต่อการกระทำของผู้เล่นอย่างชาญฉลาด

## 1. พฤติกรรมลาดตระเวน (Patrol & Chasing)
- **Patrol:** เดินกลับไปกลับมาระหว่างจุด A และจุด B
- **Line of Sight:** หากระยะห่างระหว่างศัตรูกับผู้เล่นน้อยกว่า 200 พิกเซล ให้เปลี่ยนเป็นโหมด **Chase (ไล่ล่า)**

## 2. อัลกอริทึม A* (A-Star Pathfinding)
เมื่อมีสิ่งกีดขวางกั้นระหว่างศัตรูกับผู้เล่น อัลกอริทึม $A^*$ จะคำนวณหาเส้นทางเดินที่ดีที่สุดโดยใช้ค่า $f(n) = g(n) + h(n)$
- $g(n)$: ต้นทุนระยะทางจริงจากจุดเริ่มต้นถึงโหนดปัจจุบัน
- $h(n)$: การคาดคะเนระยะทางที่เหลือ (Heuristic เช่น Manhattan Distance)`,
      codeExample: {
        language: "javascript",
        code: `class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1.5;
    this.detectionRadius = 150;
  }

  update(player) {
    // คำนวณระยะห่างแบบ Euclidean Distance
    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const distance = Math.hypot(dx, dy);

    if (distance < this.detectionRadius) {
      // เดินไล่ตามผู้เล่น
      this.x += (dx / distance) * this.speed;
      this.y += (dy / distance) * this.speed;
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#a855f7';
    ctx.fillRect(this.x, this.y, 28, 28);
  }
}`,
        description: "AI ศัตรูตรวจสอบระยะตรวจจับและเดินไล่ตามพิกัดของผู้เล่น"
      },
      quiz: [
        { id: "game-7-q1", question: "อัลกอริทึมใดเป็นที่นิยมสูงสุดในการคำนวณเส้นทางเดินอ้อมสิ่งกีดขวางในวิดีโอเกม?", options: ["Binary Search", "A* (A-Star) Pathfinding", "Quick Sort", "Bubble Sort"], correctAnswer: 1, explanation: "A* Pathfinding เป็นอัลกอริทึมมาตรฐานในอุตสาหกรรมเกมที่หาเส้นทางที่สั้นที่สุดได้อย่างรวดเร็วด้วยฟังก์ชัน Heuristic" }
      ]
    },
    {
      id: "game-8",
      title: "เริ่มต้นกับ Godot Engine 4: Nodes, Scenes และภาษา GDScript",
      description: "ทำความรู้จักเอนจินเกมโอเพนซอร์ส Godot 4, การสร้าง Scene, การผูก Script, และการเคลื่อนที่ตัวละครด้วย CharacterBody2D",
      duration: "70 นาที",
      level: "ขั้นสูง",
      content: `# การก้าวสู่เครื่องมือสร้างเกมระดับสากล: Godot Engine 4

**Godot 4** เป็น Game Engine ที่เติบโตเร็วที่สุดในปัจจุบัน เหมาะกับนักเรียนสาย IT เพราะเบา ฟรี 100% ไม่มีส่วนแบ่งรายได้ และมีสถาปัตยกรรม **Scene & Node** ที่เข้าใจง่าย

## แนวคิดโหนด (Nodes & Scene Tree)
- ทุกอย่างใน Godot คือ Node (เช่น \`Sprite2D\` แสดงภาพ, \`CollisionShape2D\` กำหนดขอบเขตการชน)
- รวมโหนดหลายๆ ตัวเข้าด้วยกันกลายเป็น **Scene** (เช่น Scene ผู้เล่น, Scene ศัตรู, Scene ด่าน 1)
- ภาษา **GDScript:** ภาษาที่คล้าย Python ออกแบบมาเพื่อเขียนควบคุมเกมโดยเฉพาะ`,
      codeExample: {
        language: "python",
        code: `# สคริปต์ควบคุมตัวละครบน Godot 4 (GDScript)
extends CharacterBody2D

const SPEED = 250.0
const JUMP_VELOCITY = -400.0

# รับค่าแรงโน้มถ่วงจาก Project Settings ของ Godot
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
    # เพิ่มแรงโน้มถ่วงเมื่อไม่ได้อยู่บนพื้น
    if not is_on_floor():
        velocity.y += gravity * delta

    # ตรวจจับการกดปุ่มกระโดด
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = JUMP_VELOCITY

    # รับทิศทางการกดลูกศร ซ้าย-ขวา
    var direction = Input.get_axis("ui_left", "ui_right")
    if direction:
        velocity.x = direction * SPEED
    else:
        velocity.x = move_toward(velocity.x, 0, SPEED)

    # ฟังก์ชันคำนวณการเคลื่อนที่และชนขอบอัตโนมัติของ Godot
    move_and_slide()`,
        description: "สคริปต์ GDScript บน Godot 4 สำหรับควบคุมการกระโดดและการเดินของ CharacterBody2D"
      },
      quiz: [
        { id: "game-8-q1", question: "ใน Godot Engine 4 คำสั่งใดทำหน้าที่คำนวณการเคลื่อนที่และการชนกำแพง/พื้นให้ตัวละครประเภท CharacterBody2D แบบอัตโนมัติ?", options: ["move_and_slide()", "physics_update()", "walk()", "collide()"], correctAnswer: 0, explanation: "move_and_slide() ใช้อัตราเร็ว velocity ปัจจุบันในการขยับตัวละครและลื่นไถลไปตามแนวระนาบของพื้นผิวที่ชนโดยอัตโนมัติ" }
      ],
      labGuide: {
        title: "แล็บสร้างตัวละครแรกบน Godot Engine 4",
        toolName: "Godot Engine 4",
        downloadUrl: "https://godotengine.org/",
        objective: "เปิดโปรแกรม Godot 4 สร้าง CharacterBody2D ใส่ Sprite2D และเขียนโค้ดเดิน-กระโดดด้วย GDScript",
        steps: [
          { title: "สร้างโปรเจกต์", detail: "เปิด Godot 4 เลือก New Project ตั้งชื่อว่า MyFirstPlatformer" },
          { title: "เพิ่มโหนด", detail: "สร้าง Root Node เป็น CharacterBody2D เพิ่มโหนดลูกเป็น Sprite2D (ลากภาพ icon.svg ใส่ Texture) และ CollisionShape2D (เลือก CapsuleShape2D)" },
          { title: "ผูกสคริปต์", detail: "คลิกขวาที่ CharacterBody2D เลือก Attach Script เลือกเทมเพลต CharacterBody2D: Basic Movement" },
          { title: "กดปุ่ม Play", detail: "กดปุ่ม F5 หรือปุ่ม Play ด้านขวาบน แล้วใช้ปุ่มลูกศรและ Spacebar เพื่อทดสอบควบคุม" }
        ],
        verification: "ตัวละครไอคอน Godot บนหน้าจอสามารถเดินซ้าย-ขวา และกระโดดได้ตามการกดปุ่ม"
      }
    },
    {
      id: "game-9",
      title: "โปรเจกต์ใหญ่: Full 2D Action Platformer Game",
      description: "ประกอบรวมทุกองค์ประกอบ: ด่าน Tilemap หลายชั้น, ตัวละครเก็บเหรียญ, กับดักหนาม, ระบบคะแนน และการต่อสู้กับบอส",
      duration: "90 นาที",
      level: "ขั้นสูง",
      content: `# สร้างเกม Action Platformer เต็มรูปแบบ

ในบทเรียนสุดท้ายนี้ เราจะผสานฟิสิกส์ การควบคุม แอนิเมชัน และเสียง เข้าด้วยกันเพื่อสร้างเกม Platformer ที่สมบูรณ์แบบ

## โครงสร้างองค์ประกอบของเกม
1. **Game Manager:** ดูแลชีวิต (Lives), คะแนน (Score), และการเปลี่ยนด่าน (Level Transition)
2. **Collectibles (เหรียญ/ไอเทม):** เมื่อตัวละครชน ให้เพิ่มคะแนนและเล่นเสียงกริ๊ง
3. **Hazard & Enemies:** หนามหรือเหวลึก เมื่อตกไปให้ตัวละครตายและ Respawn กลับจุดเซฟ
4. **Boss Fight:** บอสที่มี 2 เฟสการโจมตี (ยิงกระสุน และ พุ่งชน)`,
      codeExample: {
        language: "javascript",
        code: `// ระบบจัดการสถานะเกมรวม (Game Manager)
class GameManager {
  constructor() {
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
  }

  addScore(points) {
    this.score += points;
    document.getElementById('scoreDisplay').innerText = \`คะแนน: \${this.score}\`;
  }

  playerDied() {
    this.lives--;
    if (this.lives <= 0) {
      this.isGameOver = true;
      alert(\`Game Over! คะแนนรวมของคุณคือ: \${this.score}\`);
    } else {
      console.log(\`เหลือพลังชีวิต: \${this.lives}\`);
    }
  }
}`,
        description: "สถาปัตยกรรม GameManager ดูแลคะแนนและชีวิตของผู้เล่น"
      },
      quiz: [
        { id: "game-9-q1", question: "ในเกมแนว 2D Platformer สิ่งที่จำเป็นต้องมีเพื่อไม่ให้ผู้เล่นเริ่มใหม่ตั้งแต่ต้นฉากเมื่อพลาดตกเหวคือระบบใด?", options: ["Checkpoint / Respawn System", "Fast Forward System", "Auto Win", "Reboot OS"], correctAnswer: 0, explanation: "Checkpoint บันทึกพิกัดล่าสุดที่ปลอดภัย เมื่อผู้เล่นพลาดจะคืนชีพที่จุด Checkpoint แทนที่จะเริ่มใหม่หมด" }
      ]
    }
  ]
};
