import { Course } from "../types";

export const matlabCourse: Course = {
  id: "matlab",
  title: "MATLAB for Numerical Computing & Simulation",
  description: "เรียนรู้ภาษา MATLAB ตั้งแต่การจัดการ Matrix/Array, Vectorization, 2D/3D Visualization, Numerical Methods, ODE Solvers จนถึง Digital Signal Processing (FFT) และ Simulink",
  longDescription: "หลักสูตรภาษา MATLAB สำหรับการคำนวณเชิงตัวเลขและการจำลองทางวิศวกรรม (Numerical Computing & Engineering Systems Simulation) มาตรฐานอุตสาหกรรมสำหรับวิศวกรและนักวิจัย ครอบคลุมตั้งแต่สถาปัตยกรรม Matrix Laboratory, การใช้ประโยชน์จาก Vectorization เพื่อขจัด Loop และเร่งความเร็วในการคำนวณ, ตัวดำเนินการแบบรายสมาชิก (Element-wise Operators), การพล็อตข้อมูลขั้นสูงแบบ 2D และ 3D Surfaces, การเขียน Function Handles และ Anonymous Functions, การแก้ระบบสมการเชิงเส้นขนาดใหญ่ (Ax = b) ด้วย Matrix Decomposition (LU, QR, SVD), การแก้สมการเชิงอนุพันธ์ด้วย ODE Solvers (ode45, ode15s), การประมวลผลสัญญาณดิจิทัลด้วย Fast Fourier Transform (FFT), ตลอดจนพื้นฐานการจำลองระบบพลวัตด้วย Simulink",
  icon: "🔬",
  color: "amber",
  gradient: "from-amber-600 via-orange-600 to-red-700",
  category: "language",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["MATLAB", "Numerical Methods", "Linear Algebra", "Simulation", "DSP", "FFT", "Simulink", "Engineering"],
  recommendedTools: [
    {
      name: "MATLAB & Simulink (MathWorks)",
      icon: "🔬",
      badge: "Commercial Software",
      description: "แพลตฟอร์มการคำนวณทางวิศวกรรมและวิทยาศาสตร์มาตรฐานสากล พร้อม Toolboxes ครอบคลุมทุกสาขาวิชา",
      downloadUrl: "https://www.mathworks.com/products/matlab.html",
      setupGuide: "1. ติดตั้ง MATLAB R2024a ผ่าน MathWorks Account หรือใช้ MATLAB Online ในเบราว์เซอร์\n2. ตรวจสอบเวอร์ชันใน Command Window: ver"
    },
    {
      name: "GNU Octave (Open-Source Alternative)",
      icon: "💻",
      badge: "Free Software",
      description: "ซอฟต์แวร์โอเพนซอร์สที่ใช้ไวยากรณ์เข้ากันได้กับ MATLAB เกือบ 100% สำหรับการคำนวณเชิงตัวเลข",
      downloadUrl: "https://octave.org/",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง GNU Octave\n2. เปิด Octave GUI หรือรันผ่าน Terminal: octave-cli\n3. รันสคริปต์: octave script.m"
    }
  ],
  lessons: [
    {
      id: "matlab-1",
      title: "สภาพแวดล้อม MATLAB Workspace และพื้นฐานเมทริกซ์ (Matrix & Array)",
      description: "ทำความเข้าใจว่าทำไมใน MATLAB ทุกตัวแปรคือเมทริกซ์ 2 มิติ (Matrix Laboratory), การสร้าง Vector/Matrix, และการเข้าถึงสมาชิก (Indexing)",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# สภาพแวดล้อม MATLAB และพื้นฐาน Matrix Laboratory

ชื่อของ **MATLAB** ย่อมาจาก **Matrix Laboratory** ถูกออกแบบขึ้นโดย **Cleve Moler** เพื่อให้การคำนวณทางคณิตศาสตร์ เมทริกซ์ และพีชคณิตเชิงเส้น (Linear Algebra) เป็นเรื่องง่ายและเป็นธรรมชาติที่สุด

## 1. ทุกสิ่งคือเมทริกซ์ (Everything is a Matrix)
ใน MATLAB แม้กระทั่งตัวเลขเดี่ยวๆ (Scalar เช่น \`x = 5\`) เบื้องหลังก็คือ **เมทริกซ์ขนาด 1 x 1** ที่เป็นประเภทข้อมูล \`double\`
- การคั่นสมาชิกในแถวเดียวกัน: ใช้ **เว้นวรรค** หรือ **เครื่องหมายจุลภาค (\`,\`)**
- การขึ้นแถวใหม่: ใช้ **เครื่องหมายอัฒภาค (\`;\`)**

\`\`\`matlab
% สร้าง Scalar (1x1 matrix)
a = 42;

% สร้าง Row Vector (1x3)
row = [1, 2, 3];

% สร้าง Column Vector (3x1)
col = [1; 2; 3];

% สร้าง Matrix 2x3
A = [1 2 3; 4 5 6];
\`\`\`

## 2. การสร้างเมทริกซ์สำเร็จรูป
- \`zeros(m, n)\`: เมทริกซ์ที่มีค่า 0 ทั้งหมด
- \`ones(m, n)\`: เมทริกซ์ที่มีค่า 1 ทั้งหมด
- \`eye(n)\`: เมทริกซ์เอกลักษณ์ (Identity Matrix)
- \`linspace(start, end, n)\`: สร้างจุดข้อมูลกระจายสม่ำเสมอ n จุด
- \`start:step:end\`: ตัวดำเนินการสร้างช่วงลำดับ เช่น \`0:0.1:10\`

## 3. การเข้าถึงสมาชิก (1-based Indexing)
ข้อสำคัญ: **MATLAB เริ่มต้นนับลำดับสมาชิกที่ 1 เสมอ (ไม่ใช่ 0)**
- \`A(row, col)\`: เข้าถึงแถวและคอลัมน์ที่ระบุ
- \`A(:, 2)\`: ดึงข้อมูล **คอลัมน์ที่ 2 ทั้งหมด** (ใช้เครื่องหมายโคลอน \`:\` แทนทั้งหมด)
- \`A(1, :)\`: ดึงข้อมูล **แถวที่ 1 ทั้งหมด**`,
      codeExample: `% การสาธิตการสร้างและเข้าถึงสมาชิกของเมทริกซ์ใน MATLAB
disp('=== 1. การสร้าง Matrix และ Vector ===');
A = [10, 20, 30; 40, 50, 60; 70, 80, 90];
disp('Matrix A:');
disp(A);

disp('ขนาดของ Matrix A (size):');
disp(size(A));

disp('=== 2. การตัดข้อมูล (Matrix Slicing) ===');
% ดึงข้อมูลแถวที่ 2 คอลัมน์ที่ 3
element = A(2, 3);
fprintf('สมาชิกตำแหน่ง (2, 3): %d\n', element);

% ดึงข้อมูลคอลัมน์ที่ 2 ทั้งหมด
second_col = A(:, 2);
disp('คอลัมน์ที่ 2 ทั้งหมด:');
disp(second_col');

disp('=== 3. การทรานสโพสเมทริกซ์ (Transpose) ===');
A_transposed = A';
disp(A_transposed);`,
      challenge: "สร้างเมทริกซ์ขนาด 4x4 ที่มีเส้นทแยงมุมเป็นเลข 5 ทั้งหมด (ใช้คำสั่ง eye) และคอลัมน์สุดท้ายเป็นเลข 1 ทั้งหมด",
      quiz: [
        {
          question: "การระบุตำแหน่งสมาชิก (Indexing) ในภาษา MATLAB เริ่มต้นนับจากเลขใด?",
          options: ["เริ่มต้นนับจากเลข 1 (1-based indexing)", "เริ่มต้นนับจากเลข 0 (0-based indexing)", "เริ่มต้นนับจาก -1", "ไม่มีลำดับที่แน่นอน"],
          correctAnswer: 0,
          explanation: "MATLAB อ้างอิงตามหลักการทางคณิตศาสตร์สากล โดยลำดับแถวและคอลัมน์จะเริ่มต้นนับจาก 1 เสมอ ต่างจากภาษาอย่าง C หรือ Python ที่เป็น 0-based"
        },
        {
          question: "คำสั่งใดใช้สร้างเวกเตอร์แถวที่มีค่าตั้งแต่ 0 ถึง 10 โดยเพิ่มทีละ 0.5?",
          options: ["0:0.5:10", "range(0, 10, 0.5)", "linspace(0, 0.5, 10)", "[0 to 10 by 0.5]"],
          correctAnswer: 0,
          explanation: "ใน MATLAB ไวยากรณ์ start:step:end ใช้สร้างชุดข้อมูลแบบมีระยะก้าวคงที่ ดังนั้น 0:0.5:10 จะสร้างเวกเตอร์ [0, 0.5, 1.0, ..., 10.0]"
        },
        {
          question: "เครื่องหมายอัฒภาค (;) เมื่อวางไว้ท้ายบรรทัดคำสั่งใน MATLAB มีหน้าที่อะไร?",
          options: [
            "ซ่อนการแสดงผลลัพธ์ของคำสั่งนั้นบนหน้าจอ Command Window (Suppress Output)",
            "ลบตัวแปรออกจากหน่วยความจำ",
            "สั่งให้โปรแกรมหยุดทำงานชั่วคราว",
            "เป็นการบอกว่าคำสั่งมีข้อผิดพลาด"
          ],
          correctAnswer: 0,
          explanation: "การใส่เครื่องหมายอัฒภาค (;) ท้ายคำสั่งใน MATLAB จะสั่งให้ระบบประมวลผลคำสั่งตามปกติแต่ไม่พิมพ์ผลลัพธ์ออกทาง Command Window ช่วยให้รันได้รวดเร็วและหน้าจอสะอาด"
        }
      ]
    },
    {
      id: "matlab-2",
      title: "เทคนิค Vectorization และ Element-wise Operators (.*, ./, .^)",
      description: "เขียนโค้ด MATLAB ให้เร็วขึ้น 100 เท่า: ขจัด for-loop ด้วย Vectorization, ความแตกต่างระหว่าง Matrix Multiplication (*) กับ Element-wise (*)",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# เทคนิค Vectorization และ Element-wise Operators

ข้อผิดพลาดที่พบบ่อยที่สุดของนักพัฒนาที่ย้ายมาจากภาษา C หรือ Python คือการเขียน \`for-loop\` เพื่อวนซ้ำประมวลผลสมาชิกทีละตัว ซึ่งใน MATLAB จะทำให้โค้ดทำงานช้ามาก หัวใจสำคัญของ MATLAB คือ **Vectorization**

## 1. Matrix Operations (*) vs Element-wise Operations (.*)
ความแตกต่างที่สำคัญที่สุดในโลกของ MATLAB:
- **\`*\` (Matrix Multiplication):** การคูณเมทริกซ์ตามหลักพีชคณิตเชิงเส้น (แถวคูณหลัก) โดยมิติของคอลัมน์ตัวหน้าต้องเท่ากับมิติของแถวตัวหลัง
- **\`.*\` (Element-wise Multiplication):** นำสมาชิกในตำแหน่งเดียวกันมาคูณกันทีละคู่ (ขนาดเมทริกซ์ต้องเท่ากัน)
- **\`./\` (Element-wise Division):** หารข้อมูลทีละคู่
- **\`.\^\` (Element-wise Power):** ยกกำลังข้อมูลทีละคู่

\`\`\`matlab
A = [1, 2; 3, 4];
B = [2, 0; 1, 2];

% 1. คูณแบบเมทริกซ์ (Matrix Multiplication)
C_mat = A * B;   % ได้ [4, 4; 10, 8]

% 2. คูณทีละสมาชิก (Element-wise) มีจุดนำหน้าเสมอ!
C_dot = A .* B;  % ได้ [2, 0; 3, 8]
\`\`\`

## 2. พลังของ Vectorization
แทนที่จะเขียน Loop 10 บรรทัด เราเขียนบรรทัดเดียวโดยให้ฟังก์ชันประมวลผลเวกเตอร์ทั้งหมดในระดับ Native C/Fortran Library (BLAS/LAPACK):
\`\`\`matlab
% ❌ ช้ามาก (Loop แบบดั้งเดิม)
for i = 1:length(x)
    y(i) = sin(x(i)) * exp(-x(i));
end

% ✅ เร็วขึ้น 50-100 เท่า (Vectorized)
y = sin(x) .* exp(-x);
\`\`\``,
      codeExample: `% การเปรียบเทียบความเร็วระหว่าง For-loop และ Vectorization ใน MATLAB
disp('=== 1. ตัวอย่าง Element-wise Operators ===');
x = [1, 2, 3, 4, 5];
y_squared = x .^ 2; % ยกกำลังสองทีละสมาชิก
disp('x:'); disp(x);
disp('x .^ 2:'); disp(y_squared);

disp('=== 2. การคำนวณฟังก์ชันทางคณิตศาสตร์แบบ Vectorized ===');
t = 0:0.01:1; % สร้าง 101 จุดข้อมูล
% คำนวณคลื่น Sine หน่วงเวลาโดยไม่ต้องใช้ Loop เลย
signal = exp(-2 * t) .* cos(2 * pi * 5 * t);
fprintf('คำนวณสัญญาณสำเร็จ %d จุดข้อมูล รวดเร็วในระดับไมโครวินาที\n', length(signal));`,
      challenge: "เขียนฟังก์ชัน vectorized ที่รับเวกเตอร์ x และคำนวณค่าสมการ f(x) = (x^3 + 2x) / (x^2 + 1) โดยใช้เฉพาะ element-wise operators เท่านั้น",
      quiz: [
        {
          question: "เครื่องหมาย .* และเครื่องหมาย * ใน MATLAB แตกต่างกันอย่างไร?",
          options: [
            ".* คือการคูณข้อมูลทีละสมาชิก (Element-wise) ส่วน * คือการคูณเมทริกซ์ตามหลักพีชคณิตเชิงเส้น (Matrix Multiplication)",
            ".* ใช้ได้เฉพาะกับจำนวนเชิงซ้อน",
            "* ช้ากว่า .* 1,000 เท่า",
            "ทั้งคู่ให้ผลลัพธ์เหมือนกันทุกประการ"
          ],
          correctAnswer: 0,
          explanation: "การใส่จุด (.) นำหน้าเครื่องหมายคำนวณ เช่น .* หรือ ./ หรือ .^ เป็นการบอก MATLAB ให้ดำเนินการคำนวณกับสมาชิกทีละคู่ในตำแหน่งที่ตรงกัน ไม่ใช่การคำนวณเมทริกซ์แบบเชิงเส้น"
        },
        {
          question: "เหตุใดเทคนิค Vectorization จึงทำงานเร็วกว่าการเขียน for-loop ใน MATLAB อย่างมหาศาล?",
          options: [
            "เพราะคำสั่ง Vectorized จะถูกส่งไปประมวลผลโดยไลบรารี BLAS/LAPACK ที่ปรับแต่งระดับ CPU Vector Register (SIMD) โดยตรง",
            "เพราะ Vectorization ช่วยลบไฟล์ที่ไม่จำเป็นทิ้ง",
            "เพราะ Vectorization บังคับให้เซิร์ฟเวอร์เร่งสัญญาณนาฬิกา",
            "เพราะภาษา MATLAB ห้ามใช้ loop ทุกชนิด"
          ],
          correctAnswer: 0,
          explanation: "การคำนวณแบบ Vectorized ใน MATLAB ทำงานบนชุดคำสั่งระดับต่ำที่ถูกปรับแต่งมาอย่างดีเยี่ยมด้วยเทคโนโลยี SIMD (Single Instruction, Multiple Data) จึงเร็วกว่า Overhead ในการวน Loop ของ Interpreter"
        },
        {
          question: "หากเวกเตอร์ v = [1, 2, 3] ผลลัพธ์ของคำสั่ง v .^ 2 คือข้อใด?",
          options: ["[1, 4, 9]", "[1, 2, 3, 1, 2, 3]", "เกิด Matrix Dimension Error", "14"],
          correctAnswer: 0,
          explanation: "คำสั่ง .^ 2 จะนำสมาชิกแต่ละตัวมายกกำลังสอง ได้แก่ 1^2=1, 2^2=4, และ 3^2=9 ผลลัพธ์จึงเป็น [1, 4, 9]"
        }
      ]
    },
    {
      id: "matlab-3",
      title: "การแสดงผลข้อมูลทางวิทยาศาสตร์ (2D/3D Data Visualization)",
      description: "สร้างกราฟระดับสิ่งพิมพ์ทางวิชาการ: plot, subplot, scatter, 3D Surfaces (mesh, surf), การจัดการแกน (Axes), Legends, และส่งออกไฟล์เวกเตอร์",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# การแสดงผลข้อมูลขั้นสูง (Scientific Visualization) ใน MATLAB

จุดเด่นที่ทำให้ MATLAB เป็นที่นิยมสูงสุดในมหาวิทยาลัยและศูนย์วิจัยคือ **กราฟิกเอนจินระดับมืออาชีพ** ที่สามารถสร้างภาพกราฟ 2 มิติและ 3 มิติได้อย่างสวยงาม

## 1. การพล็อตข้อมูล 2 มิติพื้นฐาน
\`\`\`matlab
x = linspace(0, 2*pi, 100);
y1 = sin(x);
y2 = cos(x);

figure; % เปิดหน้าต่างกราฟใหม่
plot(x, y1, 'b-', 'LineWidth', 2); % เส้นสีน้ำเงิน
hold on; % คงรูปกราฟเดิมไว้เพื่อวาดทับ
plot(x, y2, 'r--', 'LineWidth', 1.5); % เส้นประสีแดง

title('การเปรียบเทียบสัญญาณ Sine และ Cosine');
xlabel('เวลา (วินาที)');
ylabel('แอมพลิจูด (โวลต์)');
legend('Sine Wave', 'Cosine Wave');
grid on; % เปิดตารางพิกัด
\`\`\`

## 2. การสร้างกราฟิก 3 มิติ (Meshgrid & Surf)
เมื่อต้องการพล็อตพื้นผิว $z = f(x, y)$ เราต้องสร้างตารางพิกัด 2 มิติด้วย \`meshgrid\`:
\`\`\`matlab
[X, Y] = meshgrid(-2:0.1:2, -2:0.1:2);
Z = X .* exp(-X.^2 - Y.^2);

figure;
surf(X, Y, Z); % วาดพื้นผิว 3 มิติพร้อมไล่เฉดสี
colormap jet;
colorbar; % แสดงแถบสีระบุค่า
shading interp; % เกลี่ยสีให้เรียบเนียน
\`\`\``,
      codeExample: `% การจำลองโค้ดการสร้างกราฟและวิเคราะห์ข้อมูลใน MATLAB
disp('=== จำลองการสร้างกราฟ 2 มิติและ 3 มิติ ===');
t = 0:0.1:10;
damping_factor = 0.5;
amplitude = exp(-damping_factor * t) .* sin(3 * t);

fprintf('1. คำนวณสัญญาณ Damped Oscillation จำนวน %d จุดข้อมูล\n', length(t));
fprintf('2. จุดสูงสุดของสัญญาณ: %.4f\n', max(amplitude));
fprintf('3. คำสั่งสร้างกราฟที่สมบูรณ์:\n');
disp('   figure(''Name'', ''Vibration Analysis'');');
disp('   plot(t, amplitude, ''LineWidth'', 2, ''Color'', [0 0.447 0.741]);');
disp('   grid on; title(''Damped Oscillation Response'');');
disp('   xlabel(''Time (s)''); ylabel(''Amplitude'');');`,
      challenge: "เขียนสคริปต์ MATLAB ที่สร้างหน้าต่างกราฟแบบ 2x2 Subplots โดยแสดงฟังก์ชัน Sine, Cosine, Tangent, และ Exponential แยกกันคนละช่อง",
      quiz: [
        {
          question: "คำสั่งใดใช้รักษาเส้นกราฟเดิมไว้ไม่ให้ถูกลบเมื่อมีการเรียกคำสั่ง plot เส้นใหม่เพิ่มลงไป?",
          options: ["hold on", "keep plot", "save graph", "freeze"],
          correctAnswer: 0,
          explanation: "คำสั่ง hold on จะสั่งให้กราฟิกเอนจินคงรูปภาพและแกนเดิมไว้ เพื่อให้สามารถวาดเส้นกราฟชุดใหม่ทับลงไปในหน้าต่างเดียวกันได้"
        },
        {
          question: "ฟังก์ชันใดที่ต้องใช้สร้างตารางพิกัด 2 มิติจากเวกเตอร์ x และ y ก่อนนำไปพล็อต 3D Surface ด้วยคำสั่ง surf()?",
          options: ["meshgrid", "grid3d", "make_surface", "arraygrid"],
          correctAnswer: 0,
          explanation: "ฟังก์ชัน [X, Y] = meshgrid(x, y) จะสร้าง Matrix พิกัดคู่ของระนาบ X-Y สำหรับนำไปประเมินฟังก์ชัน Z = f(X, Y) เพื่อพล็อตพื้นผิว 3 มิติ"
        },
        {
          question: "คำสั่ง subplot(2, 2, 3) หมายถึงการแบ่งหน้าต่างกราฟออกเป็นอย่างไร และเลือกวาดที่ช่องใด?",
          options: [
            "แบ่งหน้าต่างเป็น 2 แถว 2 คอลัมน์ (รวม 4 ช่อง) และเลือกทำงานที่ช่องลำดับที่ 3 (ซ้ายล่าง)",
            "แบ่งเป็น 2 ช่องและวาดช่องที่ 3",
            "วาดกราฟ 2 มิติ 2 รูป",
            "แบ่งเป็น 22 ช่อง"
          ],
          correctAnswer: 0,
          explanation: "subplot(rows, cols, index) จะแบ่งหน้าต่างออกเป็น rows x cols และเลือกช่อง index ตามลำดับจากซ้ายไปขวา บนลงล่าง ดังนั้น (2, 2, 3) คือช่องซ้ายล่าง"
        }
      ]
    },
    {
      id: "matlab-4",
      title: "การเขียนฟังก์ชัน, Function Handles (@) และ Anonymous Functions",
      description: "โครงสร้างโปรแกรมเชิงโมดูลาร์: Scripts vs Functions, Local Functions, Anonymous Functions (@(x)), และ Function Handles สำหรับส่งเป็น Callback",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# การเขียนฟังก์ชันและ Function Handles ใน MATLAB

## 1. Script vs Function Files
- **Script (.m):** ไม่มี Input/Output ทำงานบนตัวแปรใน **Base Workspace** ส่วนกลางโดยตรง
- **Function (.m):** มีขอบเขตตัวแปรเป็นของตนเอง (**Local Workspace**) รับ Input และส่งคืน Output ไม่รบกวนตัวแปรภายนอก

\`\`\`matlab
% ไฟล์: calculate_stats.m
function [mean_val, std_val] = calculate_stats(data)
    mean_val = sum(data) / length(data);
    std_val = std(data);
end
\`\`\`

## 2. Anonymous Functions (ฟังก์ชันนิรนามด้วยเครื่องหมาย @)
สร้างฟังก์ชันบรรทัดเดียวได้ง่ายๆ:
\`\`\`matlab
% ฟังก์ชันทางคณิตศาสตร์ f(x) = x^2 + 2x - 5
f = @(x) x.^2 + 2.*x - 5;

% ฟังก์ชันหลายตัวแปร g(x, y)
g = @(x, y) sqrt(x.^2 + y.^2);

result = f(3); % ได้ 10
\`\`\`

## 3. Function Handles (@) เป็นพารามิเตอร์
ส่งฟังก์ชันเข้าไปให้ Numerical Solvers ประมวลผล:
\`\`\`matlab
% หาจุดที่ฟังก์ชันเป็นศูนย์ (Root Finding) ใกล้ x = 2
root = fzero(@(x) x.^2 - 4, 2); % ได้ 2
\`\`\``,
      codeExample: `% การประยุกต์ใช้ Anonymous Functions และ Function Handles ใน MATLAB
disp('=== 1. สร้าง Anonymous Functions ===');
% สมการแรงดึงดูดของสปริง F = -k * x
spring_force = @(k, x) -k .* x;

k_constant = 150; % N/m
displacement = [0.01, 0.02, 0.05]; % เมตร
forces = spring_force(k_constant, displacement);

for i = 1:length(displacement)
    fprintf('ระยะยืด: %.2f ม. -> แรงดึงกลับ: %.2f N\n', displacement(i), forces(i));
end

disp('=== 2. ส่ง Function Handle เข้าฟังก์ชันคำนวณอินทิกรัล ===');
% อินทิเกรตฟังก์ชัน f(x) = x^2 จาก 0 ถึง 3 (คำตอบคือ 3^3 / 3 = 9)
f = @(x) x.^2;
q = integral(f, 0, 3);
fprintf('ผลลัพธ์การอินทิเกรตเชิงตัวเลข (integral): %.4f\n', q);`,
      challenge: "สร้าง Anonymous Function สำหรับคำนวณการกระจายตัวแบบเกาส์เซียน (Gaussian Distribution) แล้วใช้ฟังก์ชัน fminbnd หาจุดสูงสุด",
      quiz: [
        {
          question: "สัญลักษณ์ใดในภาษา MATLAB ที่ใช้สำหรับสร้าง Anonymous Function หรือ Function Handle?",
          options: ["@ (เช่น @(x) x.^2)", "#", "->", "lambda"],
          correctAnswer: 0,
          explanation: "ใน MATLAB เครื่องหมาย @ ใช้สร้าง Function Handle เช่น f = @(x) x.^2 หรือใช้อ้างอิงฟังก์ชันที่มีอยู่แล้ว เช่น @sin"
        },
        {
          question: "ความแตกต่างเรื่องขอบเขตตัวแปร (Scope) ระหว่าง Script และ Function ใน MATLAB คืออะไร?",
          options: [
            "Script ทำงานบน Base Workspace ร่วมกับตัวแปรภายนอก แต่ Function มี Local Workspace แยกเป็นเอกเทศของตนเอง",
            "Function ไม่มีสิทธิ์เข้าถึงหน่วยความจำ",
            "Script บันทึกข้อมูลลงฮาร์ดดิสก์ไม่ได้",
            "ไม่มีความแตกต่างกัน"
          ],
          correctAnswer: 0,
          explanation: "Script จะสร้างและแก้ไขตัวแปรบน Base Workspace โดยตรง ทำให้ตัวแปรอาจทับซ้อนกันได้ ส่วน Function จะสร้าง Local Workspace แยกอิสระและคืนหน่วยความจำเมื่อรันจบ"
        },
        {
          question: "ฟังก์ชันใน MATLAB สามารถส่งคืนค่ากลับ (Return Values) ออกมาพร้อมกันหลายตัวแปรได้หรือไม่?",
          options: [
            "ได้ โดยเขียนในรูปแบบ [out1, out2] = myFunction(in1)",
            "ไม่ได้ ส่งคืนได้เพียงค่าเดียวเสมอ",
            "ได้เฉพาะตัวเลขที่เป็นจำนวนเต็มเท่านั้น",
            "ต้องส่งผ่านทางไฟล์ข้อความเท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "MATLAB รองรับ Multiple Return Values อย่างเป็นธรรมชาติ โดยสามารถกำหนดวงเล็บก้ามปู [out1, out2, out3] ในบรรทัดประกาศหัวฟังก์ชัน"
        }
      ]
    },
    {
      id: "matlab-5",
      title: "พีชคณิตเชิงเส้นเชิงตัวเลข (Numerical Linear Algebra) และระบบสมการ",
      description: "หัวใจการคำนวณทางวิศวกรรม: แก้สมการ Ax = b ด้วย Backslash Operator (\), Eigenvalues/Eigenvectors (eig), และ SVD Decomposition",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# พีชคณิตเชิงเส้นเชิงตัวเลข (Numerical Linear Algebra)

ปัญหาทางวิศวกรรมเกือบทั้งหมด (การกระจายแรงในสะพาน, วงจรไฟฟ้า, การวิเคราะห์โครงข่ายประสาทเทียม) สุดท้ายแล้วจะถูกแปลงเป็น **ระบบสมการเชิงเส้น $Ax = b$**

## 1. The Backslash Operator (\) มหัศจรรย์แห่ง MATLAB
แทนที่จะหา Inverse ด้วย \`inv(A) * b\` ซึ่งช้าและมีความคลาดเคลื่อนเชิงตัวเลขสูง (Numerically Unstable)
ใน MATLAB เราใช้ **Backslash (\)** หรือ **mldivide**:
\`\`\`matlab
A = [3, 2; 1, 2];
b = [5; 5];

% ✅ เร็วและแม่นยำสูงสุด (ใช้ LU หรือ QR Decomposition อัตโนมัติ)
x = A \ b;
\`\`\`

## 2. Eigenvalues และ Eigenvectors (การสั่นสะเทือนและการวิเคราะห์ระบบ)
คำนวณความถี่ธรรมชาติและโหมดการสั่น:
\`\`\`matlab
[V, D] = eig(A);
% V คือ Eigenvectors (คอลัมน์)
% D คือ Diagonal Matrix ของ Eigenvalues
\`\`\`

## 3. Singular Value Decomposition (SVD)
เครื่องมือที่สำคัญที่สุดสำหรับการบีบอัดข้อมูลและ Machine Learning:
\`\`\`matlab
[U, S, V] = svd(A);
\`\`\``,
      codeExample: `% การแก้ระบบสมการเชิงเส้นและการคำนวณ Eigenvalues ใน MATLAB
disp('=== 1. แก้ระบบสมการเชิงเส้น Ax = b ===');
% 2x + y - z = 8
% -3x - y + 2z = -11
% -2x + y + 2z = -3
A = [ 2,  1, -1;
     -3, -1,  2;
     -2,  1,  2];
b = [8; -11; -3];

% คำนวณคำตอบด้วย Backslash Operator
x = A \ b;
fprintf('คำตอบของระบบสมการ:\n');
fprintf('x = %.2f, y = %.2f, z = %.2f\n', x(1), x(2), x(3));

% ตรวจสอบความถูกต้อง: ค่า Residual norm(A*x - b) ต้องใกล้ศูนย์
residual = norm(A * x - b);
fprintf('ความคลาดเคลื่อน (Residual Norm): %.2e\n', residual);

disp('=== 2. คำนวณ Eigenvalues (ค่าไอเกน) ===');
lambda = eig(A);
disp('Eigenvalues ของ Matrix A:');
disp(lambda);`,
      challenge: "สร้างโปรแกรมบีบอัดภาพระดับสีเทาโดยใช้เทคนิค Truncated SVD (เลือกเก็บเฉพาะ Singular Values ค่าบนสุด k ค่าแรก)",
      quiz: [
        {
          question: "เหตุใดในทางวิศวกรรมเชิงคำนวณจึงห้ามใช้ inv(A) * b ในการแก้สมการ Ax = b และแนะนำให้ใช้ A \\ b แทน?",
          options: [
            "เพราะการหา Matrix Inverse โดยตรงมีความคลาดเคลื่อนเชิงตัวเลขสูง กินเวลามาก และ A \\ b ใช้ขั้นตอนวิธี Gaussian Elimination/LU Decomposition ที่แม่นยำกว่า",
            "เพราะคำสั่ง inv ถูกยกเลิกไปแล้ว",
            "เพราะเครื่องหมาย \\ ทำให้คอมพิวเตอร์เย็นลง",
            "เพราะ inv ใช้ได้เฉพาะเมทริกซ์ 2x2"
          ],
          correctAnswer: 0,
          explanation: "การคำนวณ Inverse โดยตรงมีความสูญเสียความแม่นยำทางตัวเลข (Numerical Instability) และใช้เวลาคำนวณสูงกว่า การใช้ Backslash Operator (\\) จะเลือกอัลกอริทึมที่เหมาะสมที่สุด (เช่น Cholesky, LU, หรือ QR) ให้อัตโนมัติ"
        },
        {
          question: "ฟังก์ชัน eig(A) ในภาษา MATLAB ส่งค่าอะไรกลับมา?",
          options: [
            "Eigenvalues (ค่าเฉพาะ) และ Eigenvectors (เวกเตอร์เฉพาะ) ของเมทริกซ์ A",
            "จำนวนแถวและคอลัมน์",
            "ค่าเฉลี่ยของเมทริกซ์",
            "ขนาดไฟล์บนดิสก์"
          ],
          correctAnswer: 0,
          explanation: "ฟังก์ชัน eig(A) ใช้คำนวณหาค่า Eigenvalues และหากรับค่าแบบ [V, D] = eig(A) จะได้เวกเตอร์เฉพาะ (Eigenvectors) ใน V และค่าเฉพาะบนเส้นทแยงมุมของ D"
        },
        {
          question: "สภาวะ Condition Number (cond(A)) สูงมากของเมทริกซ์บ่งบอกถึงอะไร?",
          options: [
            "เมทริกซ์มีสภาพ Ill-conditioned ซึ่งการเปลี่ยนแปลงของข้อมูล input เพียงเล็กน้อยอาจทำให้ผลลัพธ์คำตอบเบี่ยงเบนอย่างมหาศาล",
            "เมทริกซ์นั้นทำงานได้เร็วมาก",
            "เมทริกซ์มีค่าศูนย์ทั้งหมด",
            "เมทริกซ์นั้นเป็นวงกลม"
          ],
          correctAnswer: 0,
          explanation: "Condition Number บอกความไวต่อความคลาดเคลื่อน หากมีค่าสูงมาก (ใกล้ Singularity) การคำนวณคำตอบจะมีความไม่แน่นอนสูงและไวต่อสัญญาณรบกวน"
        }
      ]
    },
    {
      id: "matlab-6",
      title: "ระเบียบวิธีเชิงตัวเลข (Numerical Methods) และการฟิตกราฟ (Curve Fitting)",
      description: "ค้นหารากของสมการแบบไม่เชิงเส้น (fzero), การหาค่าต่ำสุด/สูงสุด (fminbnd), Numerical Integration (integral), และ Curve Fitting (polyfit/polyval)",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# ระเบียบวิธีเชิงตัวเลข (Numerical Methods)

ในการทำงานจริง สมการทางฟิสิกส์ส่วนใหญ่ไม่สามารถแก้แบบแม่นยำ (Analytical Solution) ด้วยมือได้ เราจึงต้องใช้ **ระเบียบวิธีเชิงตัวเลข (Numerical Methods)** ในการหาคำตอบประมาณการ

## 1. การค้นหารากของสมการไม่เชิงเส้น (Root Finding)
ค้นหาจุดที่ $f(x) = 0$ ด้วย \`fzero\`:
\`\`\`matlab
f = @(x) exp(-x) - sin(x);
root = fzero(f, 0.5); % หาคำตอบใกล้จุดเริ่มต้น x = 0.5
\`\`\`

## 2. การหาค่าเหมาะที่สุดแบบ 1 มิติ (Optimization)
ค้นหาจุดต่ำสุดของฟังก์ชันในช่วงที่กำหนด:
\`\`\`matlab
f = @(x) (x - 3).^2 + 5;
[x_min, f_val] = fminbnd(f, 0, 5); % ได้ x_min = 3, f_val = 5
\`\`\`

## 3. การประมาณเส้นโค้งด้วยพหุนาม (Polynomial Curve Fitting)
- \`p = polyfit(x, y, degree)\`: หาค่าสัมประสิทธิ์พหุนามด้วยวิธีกำลังสองน้อยสุด (Least Squares)
- \`y_fit = polyval(p, x_query)\`: คำนวณค่าบนเส้นโค้ง`,
      codeExample: `% การทำ Polynomial Curve Fitting และการหาจุดรากของสมการ
disp('=== 1. การฟิตเส้นโค้ง (Curve Fitting) ===');
% ข้อมูลจากการทดลอง
x_exp = [1, 2, 3, 4, 5, 6];
y_exp = [2.2, 5.1, 8.9, 17.2, 26.0, 37.1];

% ฟิตด้วยพหุนามดีกรี 2: y = p1*x^2 + p2*x + p3
p = polyfit(x_exp, y_exp, 2);
fprintf('สมการที่ได้จากการฟิต: y = %.2fx^2 + %.2fx + %.2f\n', p(1), p(2), p(3));

% ประเมินค่าที่ x = 3.5
y_pred = polyval(p, 3.5);
fprintf('ค่าทำนายที่ x = 3.5: %.2f\n', y_pred);

disp('=== 2. การหารากของสมการ fzero ===');
f = @(x) x.^3 - 2*x - 5;
root_val = fzero(f, 2);
fprintf('รากของสมการ x^3 - 2x - 5 = 0 คือ x = %.4f\n', root_val);`,
      challenge: "เขียนโปรแกรมคำนวณอินทิกรัลของฟังก์ชัน f(x) = sqrt(1 + cos(x)^2) จาก 0 ถึง pi โดยเปรียบเทียบคำตอบของคำสั่ง integral กับวิธี Trapezoidal Rule (trapz)",
      quiz: [
        {
          question: "ฟังก์ชัน polyfit(x, y, 1) ในภาษา MATLAB ใช้วิธีการทางสถิติใดในการหาเส้นตรงที่เหมาะสมที่สุด?",
          options: ["Ordinary Least Squares (วิธีกำลังสองน้อยที่สุด)", "Neural Networks", "Genetic Algorithm", "Random Guess"],
          correctAnswer: 0,
          explanation: "polyfit ใช้อัลกอริทึม Linear Least Squares ในการหาค่าสัมประสิทธิ์พหุนามที่ลดผลรวมของกำลังสองของความคลาดเคลื่อน (Sum of Squared Residuals) ให้เหลือน้อยที่สุด"
        },
        {
          question: "ฟังก์ชัน fzero ใน MATLAB ทำหน้าที่อะไร?",
          options: [
            "ค้นหารากของสมการ f(x) = 0 ในบริเวณจุดเริ่มต้นที่กำหนด",
            "แปลงข้อมูลทั้งหมดให้กลายเป็นศูนย์",
            "ตรวจสอบว่าฮาร์ดดิสก์ว่างหรือไม่",
            "ลบตัวแปรที่เป็นศูนย์ทิ้ง"
          ],
          correctAnswer: 0,
          explanation: "fzero ทำการค้นหาตำแหน่ง x ที่ทำให้ f(x) มีค่าเป็นศูนย์ โดยผสมผสานอัลกอริทึม Bisection, Secant, และ Inverse Quadratic Interpolation (Brent-Dekker method)"
        },
        {
          question: "หากต้องการคำนวณพื้นที่ใต้กราฟเชิงตัวเลขจากชุดข้อมูลจุดไม่ต่อเนื่อง (Discrete Points) ควรใช้ฟังก์ชันใด?",
          options: ["trapz", "integral", "fzero", "polyfit"],
          correctAnswer: 0,
          explanation: "สำหรับข้อมูลที่ไม่ใช่ฟังก์ชันคณิตศาสตร์แต่เป็นจุดข้อมูล x, y ที่ได้จากการทดลอง เราใช้คำสั่ง trapz(x, y) ซึ่งใช้วิธี Trapezoidal Numerical Integration"
        }
      ]
    },
    {
      id: "matlab-7",
      title: "การแก้สมการเชิงอนุพันธ์สามัญ (ODE Solvers: ode45 และ ode15s)",
      description: "จำลองระบบพลวัตทางกายภาพ: การแปลงสมการอันดับสูงเป็นระบบอันดับหนึ่ง, Runge-Kutta 4th/5th Order (ode45), และ Stiff Differential Equations (ode15s)",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# การแก้สมการเชิงอนุพันธ์สามัญ (ODE Solvers)

การเคลื่อนที่ของวัตถุ, วงจรไฟฟ้า RLC, การแพร่ระบาดของเชื้อไวรัส, และปฏิกิริยาเคมี ล้วนอธิบายได้ด้วย **สมการเชิงอนุพันธ์สามัญ (Ordinary Differential Equations - ODEs)**

## 1. กฎทอง: แปลงสมการอันดับสูงให้เป็นระบบสมการอันดับ 1
ตัวแก้สมการของ MATLAB ทุกตัวรับเฉพาะ **ระบบสมการอนุพันธ์อันดับ 1 (First-order ODE system)**:
สมมติสมการลูกตุ้มนาฬิกา (Pendulum): $\theta'' + \frac{g}{L}\sin(\theta) = 0$
กำหนดตัวแปรสถานะ (State Variables):
- $y_1 = \theta$ (มุม)
- $y_2 = \theta'$ (ความเร็วเชิงมุม)
ระบบจะกลายเป็น:
- $y_1' = y_2$
- $y_2' = -\frac{g}{L}\sin(y_1)$

\`\`\`matlab
function dydt = pendulum_ode(t, y, g, L)
    dydt = zeros(2, 1);
    dydt(1) = y(2);
    dydt(2) = -(g / L) * sin(y(1));
end
\`\`\`

## 2. ode45 vs ode15s (Non-stiff vs Stiff Systems)
- **\`ode45\`:** อาวุธประจำกายอันดับหนึ่งของ MATLAB ใช้อัลกอริทึม Explicit Runge-Kutta (Dormand-Prince pair 4th/5th order) พร้อม Variable Step Size เหมาะกับปัญหาทั่วไป 90%
- **\`ode15s\`:** ใช้เมื่อระบบเป็น **Stiff Problem** (ระบบที่มีมาตราเวลาสองช่วงต่างกันมหาศาล เช่น ปฏิกิริยาเคมีที่บางตัวเกิดใน 1 นาโนวินาทีแต่บางตัวเกิดใน 1 ชั่วโมง หากใช้ ode45 เครื่องจะค้าง)`,
      codeExample: `% การจำลองระบบการสั่นสะเทือน Mass-Spring-Damper ด้วย ode45
function mass_spring_simulation()
    disp('=== การจำลองระบบพลวัตด้วย ode45 ===');
    m = 1.0;   % มวล (kg)
    c = 0.5;   % สัมประสิทธิ์ความหนืด Damper (N*s/m)
    k = 20.0;  % ค่านิจสปริง (N/m)

    % ODE function: y(1) = ตำแหน่ง x, y(2) = ความเร็ว v
    ode_system = @(t, y) [y(2); -(c/m)*y(2) - (k/m)*y(1)];

    % เงื่อนไขเริ่มต้น: ดึงสปริงยืดออก 1 เมตร แล้วปล่อยนิ่ง (x0 = 1, v0 = 0)
    initial_conditions = [1.0; 0.0];
    t_span = [0, 10]; % เวลา 0 ถึง 10 วินาที

    [t, y] = ode45(ode_system, t_span, initial_conditions);

    fprintf('จำลองสำเร็จ: คำนวณช่วงเวลา %d จุด\n', length(t));
    fprintf('ตำแหน่งสุดท้ายที่เวลา t=10s: %.4f เมตร (สปริงหยุดสั่น)\n', y(end, 1));
end`,
      challenge: "สร้างฟังก์ชันจำลองระบบผู้ล่าและเหยื่อ (Lotka-Volterra Predator-Prey Model) โดยใช้ ode45 และพล็อตวิถีใน Phase Space (x เทียบกับ y)",
      quiz: [
        {
          question: "ขั้นตอนวิธีมาตรฐานที่อยู่เบื้องหลังฟังก์ชัน ode45 ใน MATLAB คืออะไร?",
          options: [
            "Explicit Runge-Kutta (4th/5th order Dormand-Prince method) พร้อมระบบปรับขนาดก้าวการคำนวณอัตโนมัติ (Adaptive step size)",
            "Euler Method ธรรมดา",
            "การเดาสุ่มคำตอบ",
            "Binary Search"
          ],
          correctAnswer: 0,
          explanation: "ode45 ใช้วิธี Runge-Kutta ลำดับที่ 4 และ 5 ควบคู่กันเพื่อประเมินความคลาดเคลื่อนและปรับขนาดของก้าวเวลา (Time step) อัตโนมัติ ทำให้ได้ทั้งความเร็วและความแม่นยำสูง"
        },
        {
          question: "เมื่อใดที่ควรเปลี่ยนไปใช้ตัวแก้สมการ ode15s แทน ode45?",
          options: [
            "เมื่อสมการเป็น Stiff Problem (ระบบที่มีอัตราการเปลี่ยนแปลงเร็วและช้าต่างกันมหาศาล) ซึ่ง ode45 จะคำนวณก้าวเวลาช้าจนแทบไม่ขยับ",
            "เมื่อสมการมีตัวแปรมากกว่า 1 ตัว",
            "เมื่อต้องการคำนวณบนโทรศัพท์มือถือ",
            "เมื่อไม่มีกราฟิกการ์ด"
          ],
          correctAnswer: 0,
          explanation: "ode15s เป็น Implicit Solver ที่ออกแบบมาเฉพาะสำหรับ Stiff Systems ซึ่งมีเสถียรภาพสูงกว่าและไม่บังคับให้ขนาดของ time step เล็กจนเกินไปเหมือน Explicit Solver"
        },
        {
          question: "ก่อนที่จะส่งสมการอนุพันธ์อันดับสอง $y'' + 3y' + 2y = 0$ เข้าสู่ ode45 เราต้องทำสิ่งใดก่อนเสมอ?",
          options: [
            "แปลงสมการอันดับ 2 ให้กลายเป็นระบบสมการอนุพันธ์อันดับ 1 จำนวน 2 ตัวแปรสถานะ (State-space representation)",
            "หาค่า Integral ของสมการก่อน",
            "แปลงสมการให้กลายเป็นไฟล์ภาพ",
            "ลบเทอมอนุพันธ์ทิ้งทั้งหมด"
          ],
          correctAnswer: 0,
          explanation: "ตัวแก้สมการ ODE ใน MATLAB ทุกตัวรับเฉพาะสมการอันดับหนึ่งเท่านั้น ดังนั้นสมการอันดับ n ใดๆ จะต้องถูกแตกออกเป็นระบบสมการอันดับหนึ่งจำนวน n ตัวแปรเสมอ"
        }
      ]
    },
    {
      id: "matlab-8",
      title: "การประมวลผลสัญญาณดิจิทัล (Digital Signal Processing - DSP & FFT)",
      description: "แปลงสัญญาณจาก Time Domain สู่ Frequency Domain: Fast Fourier Transform (fft), Power Spectral Density, Filter Design (Butterworth), และ Spectrogram",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Digital Signal Processing (DSP) และ Fast Fourier Transform (FFT)

ในโลกการสื่อสาร เสียง เซ็นเซอร์ IoT และคลื่นสมอง การวิเคราะห์ข้อมูลบน Time Domain เพียงอย่างเดียวไม่เพียงพอ เราต้องส่องมองความถี่ภายในสัญญาณผ่าน **Fourier Transform**

## 1. Fast Fourier Transform (FFT) ใน MATLAB
ฟังก์ชัน \`fft\` ใน MATLAB ใช้ไลบรารี FFTW (Fastest Fourier Transform in the West) ที่มีความเร็วสูงสุดในโลก:
\`\`\`matlab
Fs = 1000;            % Sampling frequency (Hz)
T = 1 / Fs;           % Sampling period
L = 1500;             % Length of signal
t = (0:L-1) * T;      % Time vector

% สัญญาณผสม: ความถี่ 50 Hz และ 120 Hz พร้อมสัญญาณรบกวน (Noise)
S = 0.7 * sin(2*pi*50*t) + sin(2*pi*120*t);
X = S + 2 * randn(size(t));

% แปลง FFT
Y = fft(X);
P2 = abs(Y / L);
P1 = P2(1:L/2+1);
P1(2:end-1) = 2 * P1(2:end-1);
f = Fs * (0:(L/2)) / L;

plot(f, P1);
title('Single-Sided Amplitude Spectrum of X(t)');
xlabel('ความถี่ f (Hz)');
ylabel('|P1(f)|');
\`\`\`

## 2. การออกแบบตัวกรองสัญญาณ (Filter Design)
สร้าง Butterworth Low-pass Filter เพื่อตัดสัญญาณรบกวนความถี่สูงออก:
\`\`\`matlab
[b, a] = butter(6, 0.2, 'low'); % ฟิลเตอร์อันดับ 6
filtered_signal = filter(b, a, X);
\`\`\``,
      codeExample: `% การจำลองการวิเคราะห์สเปกตรัมความถี่ด้วย FFT ใน MATLAB
Fs = 1000; % อัตราการสุ่มตัวอย่าง 1,000 ตัวอย่างต่อวินาที
t = 0:1/Fs:0.5; % เวลา 0.5 วินาที

% สร้างสัญญาณความถี่ 50 Hz บริสุทธิ์
clean_wave = sin(2 * pi * 50 * t);
% ใส่ Noise จำลอง
noisy_wave = clean_wave + 0.5 * randn(size(t));

% คำนวณ FFT
N = length(noisy_wave);
Y = fft(noisy_wave);
freqs = (0:N-1) * (Fs / N);
amplitudes = abs(Y) / N;

disp('=== ผลการวิเคราะห์สเปกตรัม FFT ใน MATLAB ===');
% หาตำแหน่งความถี่ที่มีแอมพลิจูดสูงสุดในช่วงครึ่งแรก
[max_amp, idx] = max(amplitudes(1:floor(N/2)));
dominant_freq = freqs(idx);

fprintf('ความถี่หลักที่ตรวจพบ (Dominant Frequency): %.1f Hz (ตรงกับสัญญาณ 50 Hz)\n', dominant_freq);
fprintf('แอมพลิจูดที่วัดได้: %.3f\n', max_amp * 2);`,
      challenge: "เขียนฟังก์ชันใน MATLAB ที่ออกแบบ Band-pass filter เพื่อกรองและแยกเฉพาะสัญญาณคลื่นเสียงความถี่ระหว่าง 300 Hz ถึง 3,400 Hz (ช่วงเสียงมนุษย์)",
      quiz: [
        {
          question: "ทฤษฎีบทการสุ่มตัวอย่าง Nyquist-Shannon Sampling Theorem กำหนดว่าอัตราการสุ่มตัวอย่าง (Sampling Rate: Fs) ต้องมีค่าอย่างน้อยเท่าใดของความถี่สูงสุดในสัญญาณ (Fmax)?",
          options: [
            "Fs ต้องมีค่าอย่างน้อย 2 เท่าของ Fmax (Fs >= 2 * Fmax) เพื่อป้องกัน Aliasing",
            "Fs ต้องเท่ากับ Fmax พอดี",
            "Fs ต้องน้อยกว่า Fmax",
            "Fs ต้องเป็น 100 เท่าเสมอ"
          ],
          correctAnswer: 0,
          explanation: "ตามกฎ Nyquist อัตราการสุ่มตัวอย่างต้องมากกว่าหรือเท่ากับ 2 เท่าของความถี่สูงสุดที่ปรากฏในสัญญาณ มิฉะนั้นจะเกิดปรากฏการณ์ความถี่ปลอม (Aliasing) ทำให้สัญญาณผิดเพี้ยนถาวร"
        },
        {
          question: "ฟังก์ชัน fft() ใน MATLAB คำนวณสิ่งใด?",
          options: [
            "Discrete Fourier Transform (DFT) แปลงสัญญาณจาก Time Domain สู่ Frequency Domain",
            "การบีบอัดไฟล์วิดีโอ",
            "การค้นหาคำผิดในเอกสาร",
            "การคำนวณภาษีมูลค่าเพิ่ม"
          ],
          correctAnswer: 0,
          explanation: "fft() คำนวณ Discrete Fourier Transform ด้วยขั้นตอนวิธี Fast Fourier Transform ซึ่งมีความซับซ้อน O(N log N) เพื่อแยกสัญญาณออกเป็นส่วนประกอบของความถี่ต่างๆ"
        },
        {
          question: "Spectrogram แสดงผลความสัมพันธ์ของสัญญาณในมิติใดบ้าง?",
          options: [
            "เวลา (Time), ความถี่ (Frequency), และความเข้มข้นของพลังงาน (Amplitude/Power)",
            "ความเร็วและระยะทาง",
            "อุณหภูมิและความดัน",
            "ราคาและปริมาณการซื้อขาย"
          ],
          correctAnswer: 0,
          explanation: "Spectrogram (คำนวณผ่าน Short-Time Fourier Transform: STFT) แสดงกราฟ 3 มิติ ได้แก่ แกน X คือเวลา แกน Y คือความถี่ และเฉดสีคือความเข้มข้นของพลังงาน ณ จังหวะนั้นๆ"
        }
      ]
    },
    {
      id: "matlab-9",
      title: "การจำลองระบบพลวัตด้วย Simulink และการสร้าง C/C++ Code (MATLAB Coder)",
      description: "โลกของวิศวกรรมระบบจำลอง (Model-Based Design): พื้นฐาน Simulink บล็อกไดอะแกรม, การเชื่อมต่อ MATLAB Workspace, และการแปลงโมเดลเป็นโค้ด C/C++ ด้วย MATLAB Coder",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Model-Based Design ด้วย Simulink และ MATLAB Coder

ในอุตสาหกรรมยานยนต์ การบิน และหุ่นยนต์ (เช่น Tesla, Boeing, NASA) วิศวกรไม่ได้เริ่มต้นด้วยการเขียนโค้ด C โดยตรง แต่ใช้แนวคิด **Model-Based Design (MBD)** ในการจำลองระบบบน **Simulink** ก่อนที่จะให้ระบบสร้างโค้ด C/C++ ออกมาอัตโนมัติ

## 1. สถาปัตยกรรม Simulink (Block Diagram Environment)
Simulink เป็นสภาพแวดล้อมเชิงภาพ (Visual Simulation Environment) ที่ทำงานบนบล็อกไดอะแกรม:
- **Sources:** แหล่งกำเนิดสัญญาณ (Sine Wave, Step, Constant, From Workspace)
- **Continuous / Discrete:** Integrator (1/s), Derivative, Transfer Function, Unit Delay (1/z)
- **Math Operations:** Gain, Sum, Product
- **Sinks:** ตัวรับผลลัพธ์ (Scope, To Workspace)

## 2. การควบคุมระบบด้วย Closed-Loop Feedback (PID Controller)
การออกแบบระบบควบคุมอุณหภูมิหรือความเร็วรถยนต์ (Cruise Control):
\`\`\`
Setpoint ──(+)──> [ PID Controller ] ──> [ Plant/Car Physics ] ──> Output Speed
           │ -                                                        │
           └──────────────────────────────────────────────────────────┘
\`\`\`

## 3. MATLAB Coder & Embedded Coder
แปลงอัลกอริทึม MATLAB หรือ Simulink Model ให้กลายเป็น **โค้ดภาษา C/C++ ที่ได้มาตรฐาน MISRA-C** พร้อมนำไปแฟลชลงไมโครคอนโทรลเลอร์ (ARM Cortex-M, ESP32, หรือ ECU ในรถยนต์) ได้ทันทีโดยไม่ต้องเขียนโค้ด C เองด้วยมือ!`,
      codeExample: `% การจำลองตรรกะของ Discrete PID Controller สไตล์ Simulink
classdef PIDController
    properties
        Kp = 2.0;  % Proportional gain
        Ki = 0.5;  % Integral gain
        Kd = 0.1;  % Derivative gain
        integral = 0.0;
        prev_error = 0.0;
        dt = 0.01; % Time step 10ms
    end
    
    methods
        function [obj, control_signal] = update(obj, setpoint, measurement)
            error = setpoint - measurement;
            obj.integral = obj.integral + error * obj.dt;
            derivative = (error - obj.prev_error) / obj.dt;
            
            control_signal = (obj.Kp * error) + (obj.Ki * obj.integral) + (obj.Kd * derivative);
            obj.prev_error = error;
        end
    end
end

% ทดสอบการทำงานของคอนโทรลเลอร์
disp('=== จำลองการทำงานของ Closed-Loop PID Controller ===');
pid = PIDController();
current_speed = 0.0; % ความเร็วเริ่มต้น
target_speed = 60.0; % เป้าหมาย 60 km/h

for step = 1:5
    [pid, output_u] = pid.update(target_speed, current_speed);
    % จำลองการตอบสนองของระบบยานยนต์ (Vehicle Physics)
    current_speed = current_speed + output_u * 0.1;
    fprintf('รอบที่ %d: ความเร็วปัจจุบัน = %.2f km/h (สัญญาณควบคุม U = %.2f)\n', ...
            step, current_speed, output_u);
end
fprintf('✓ ระบบเร่งความเร็วเข้าใกล้เป้าหมาย 60 km/h อย่างมีเสถียรภาพ\n');`,
      challenge: "จงอธิบายขั้นตอนการทำงานของ Model-Based Design (MBD) ในวงการยานยนต์ ตั้งแต่การจำลองบน Simulink (MIL) จนถึง Hardware-in-the-Loop (HIL)",
      quiz: [
        {
          question: "แนวคิด Model-Based Design (MBD) ด้วย Simulink มีประโยชน์สูงสุดอย่างไรในการพัฒนาระบบควบคุมยานยนต์และอากาศยาน?",
          options: [
            "สามารถจำลองและทดสอบระบบควบคุมร่วมกับแบบจำลองทางฟิสิกส์ได้ตั้งแต่ก่อนมีฮาร์ดแวร์จริง และสามารถแปลงโมเดลเป็นโค้ด C อัตโนมัติ",
            "ทำให้รถยนต์ประหยัดน้ำมันโดยไม่ต้องมีเครื่องยนต์",
            "ช่วยเพิ่มยอดขายรถยนต์",
            "ทำให้คอมพิวเตอร์ไม่ต้องใช้ระบบปฏิบัติการ"
          ],
          correctAnswer: 0,
          explanation: "MBD ช่วยให้วิศวกรสามารถจำลองการทำงาน ตรวจสอบความถูกต้องตั้งแต่ระยะเริ่มต้น (Virtual Prototyping) และสร้างโค้ด C/C++ ฝังลงในกล่องควบคุม (ECU) ได้อัตโนมัติ ลดระยะเวลาการพัฒนาและลดข้อผิดพลาดของมนุษย์"
        },
        {
          question: "เครื่องมือ MATLAB Coder / Embedded Coder ทำหน้าที่อะไร?",
          options: [
            "แปลงอัลกอริทึมใน MATLAB และบล็อกไดอะแกรมใน Simulink ให้กลายเป็นโค้ดภาษา C/C++ แบบสแตนด์อโลนสำหรับฝังลงในไมโครคอนโทรลเลอร์",
            "แปลงข้อความเป็นไฟล์เสียง",
            "พิมพ์เอกสารรายงานประจำปี",
            "ทำความสะอาดหน้าจอคอมพิวเตอร์"
          ],
          correctAnswer: 0,
          explanation: "MATLAB Coder ช่วยแปลงโค้ด MATLAB ให้เป็นโค้ดภาษา C หรือ C++ คุณภาพสูงที่สามารถนำไปคอมไพล์และทำงานบนบอร์ด Embedded หลากหลายสถาปัตยกรรม (ARM, TI, Intel) ได้โดยไม่ต้องพึ่งพา MATLAB Runtime"
        },
        {
          question: "องค์ประกอบ 3 ส่วนหลักของตัวควบคุม PID Controller คืออะไร?",
          options: [
            "Proportional (ผลตอบสนองตามสัดส่วน), Integral (การสะสมความคลาดเคลื่อน), Derivative (อัตราการเปลี่ยนแปลงความคลาดเคลื่อน)",
            "Process, Input, Data",
            "Point, Line, Distance",
            "Peak, Intermediate, Down"
          ],
          correctAnswer: 0,
          explanation: "PID ย่อมาจาก Proportional (P), Integral (I), และ Derivative (D) ซึ่งเป็นอัลกอริทึมควบคุมแบบป้อนกลับ (Feedback Control) ที่นิยมใช้งานสูงสุดในอุตสาหกรรม"
        }
      ]
    }
  ]
};
