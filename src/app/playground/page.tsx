"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-slate-950 text-gray-500">
      กำลังโหลด Editor...
    </div>
  ),
});

const LANGUAGES = [
  { id: "html", name: "HTML/CSS/JS (Web & Games)" },
  { id: "cisco", name: "Cisco IOS CLI (Network)" },
  { id: "cpp", name: "C/C++ & Arduino (IoT)" },
  { id: "python", name: "Python (Cybersecurity & AI)" },
  { id: "sql", name: "SQL (Database & RMS)" },
  { id: "dart", name: "Dart (Mobile Apps)" },
  { id: "javascript", name: "JavaScript" },
];

const TEMPLATES: Record<string, string> = {
  html: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 2rem 3rem;
      border-radius: 1rem;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      text-align: center;
    }
    h1 { margin-bottom: 0.5rem; }
    button {
      margin-top: 1rem;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 0.5rem;
      background: white;
      color: #764ba2;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div class="card">
    <h1>สวัสดี IT Academy! 🚀</h1>
    <p>ลองแก้ไขโค้ดแล้วกดรันดู</p>
    <button onclick="alert('ยินดีต้อนรับสู่ Playground!')">คลิกฉันสิ</button>
  </div>
</body>
</html>`,
  python: `# ตัวอย่างโค้ด Python
def greet(name):
    print(f"สวัสดี, {name}! 🐍")

# วนลูป 5 ครั้ง
for i in range(1, 6):
    print(f"รอบที่ {i}")

greet("IT Academy")
print("เรียน Python สนุกนะ!")`,
  javascript: `// ตัวอย่างโค้ด JavaScript
const students = ['สมชาย', 'สมหญิง', 'สมศักดิ์', 'สมใจ'];

console.log("📋 รายชื่อนักเรียน:");
students.forEach((name, index) => {
  console.log(\`  \${index + 1}. \${name}\`);
});

const total = students.length;
console.log(\`\\nรวมทั้งหมด: \${total} คน\`);

// ทดลอง Array methods
const filtered = students.filter(s => s.includes('สม'));
console.log(\`คนที่ชื่อขึ้นต้นด้วย "สม": \${filtered.length} คน\`);`,
  sql: `-- ตัวอย่างการสร้างฐานข้อมูลระบบนักเรียน
CREATE TABLE Students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    grade VARCHAR(10),
    gpa DECIMAL(3,2)
);

-- เพิ่มข้อมูลนักเรียน
INSERT INTO Students (name, age, grade, gpa) VALUES
('สมชาย รักเรียน', 18, 'ม.6/1', 3.75),
('สมหญิง ใจดี', 17, 'ม.5/2', 3.90),
('สมศักดิ์ เก่งมาก', 18, 'ม.6/3', 3.50);

-- ค้นหานักเรียนที่ GPA มากกว่า 3.5
SELECT name, grade, gpa
FROM Students
WHERE gpa > 3.5
ORDER BY gpa DESC;`,
  cisco: `! ตัวอย่างการคอนฟิก Cisco 2911 Router และ VLAN
enable
configure terminal
hostname BKK-Core-Router
enable secret CiscoSecurePass@2024

! ตั้งค่าพอร์ต GigabitEthernet 0/0
interface gigabitEthernet 0/0
 description Connection to Distribution Switch
 ip address 192.168.10.1 255.255.255.0
 no shutdown
exit

! ตั้งค่า OSPF Routing Protocol
router ospf 1
 router-id 1.1.1.1
 network 192.168.10.0 0.0.0.255 area 0
exit

do show ip interface brief`,
  cpp: `// ตัวอย่างโค้ด C++ / Arduino สำหรับ ESP32 IoT
#include <iostream>

void setup() {
    std::cout << "🚀 เริ่มต้นการทำงานบอร์ด ESP32..." << std::endl;
    std::cout << "Wi-Fi: เชื่อมต่อสำเร็จ (IP: 192.168.1.150)" << std::endl;
}

void loop() {
    for (int i = 1; i <= 3; i++) {
        std::cout << "อ่านค่าเซนเซอร์รอบที่ " << i << ": อุณหภูมิ = 28.5°C, ความชื้น = 65%" << std::endl;
    }
}

int main() {
    setup();
    loop();
    std::cout << "✓ ทำงานครบถ้วนสมบูรณ์!" << std::endl;
    return 0;
}`,
  dart: `void main() {
  print('สวัสดี จาก Dart! 🎯');

  // List operations
  List<String> courses = ['IoT', 'Network', 'Web Dev', 'Mobile', 'Game Dev'];

  print('\\nหลักสูตรทั้งหมด:');
  for (var i = 0; i < courses.length; i++) {
    print('  \${i + 1}. \${courses[i]}');
  }

  // Map
  var student = {
    'name': 'สมชาย',
    'age': 18,
    'gpa': 3.75,
  };

  print('\\nข้อมูลนักเรียน: \$student');
}`,
};

export default function PlaygroundPage() {
  const [language, setLanguage] = useState("html");
  const [code, setCode] = useState(TEMPLATES["html"]);
  const [output, setOutput] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(14);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setCode(TEMPLATES[language]);
    setOutput("");
  }, [language]);

  const handleRun = () => {
    if (language === "html") {
      if (iframeRef.current) {
        iframeRef.current.srcdoc = code;
      }
    } else {
      setOutput("กำลังรันโค้ด...\n\n");
      setTimeout(() => {
        let simOutput = "";
        if (language === "python") {
          simOutput = "รอบที่ 1\nรอบที่ 2\nรอบที่ 3\nรอบที่ 4\nรอบที่ 5\nสวัสดี, IT Academy! 🐍\nเรียน Python สนุกนะ!";
        } else if (language === "javascript") {
          simOutput = "📋 รายชื่อนักเรียน:\n  1. สมชาย\n  2. สมหญิง\n  3. สมศักดิ์\n  4. สมใจ\n\nรวมทั้งหมด: 4 คน\nคนที่ชื่อขึ้นต้นด้วย \"สม\": 4 คน";
        } else if (language === "sql") {
          simOutput = "Query executed successfully.\n\n| name              | grade  | gpa  |\n|-------------------|--------|------|\n| สมหญิง ใจดี       | ม.5/2  | 3.90 |\n| สมชาย รักเรียน    | ม.6/1  | 3.75 |";
        } else if (language === "cpp") {
          simOutput = "สวัสดี จาก C++! 🔧\nผลรวมของ 1 ถึง 10 คือ: 55\nยินดีต้อนรับสู่ IT Academy!";
        } else if (language === "cisco") {
          simOutput = `Cisco IOS Software, 2900 Software, Version 15.1(4)M4
BKK-Core-Router(config)# interface gigabitEthernet 0/0
BKK-Core-Router(config-if)# ip address 192.168.10.1 255.255.255.0
%LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up
%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to up
BKK-Core-Router(config-if)# router ospf 1
BKK-Core-Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
%OSPF-5-ADJCHG: Process 1, Nbr 2.2.2.2 on GigabitEthernet0/0 from LOADING to FULL, Done

Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     192.168.10.1    YES manual up                    up      
GigabitEthernet0/1     unassigned      YES unset  administratively down down    
Vlan1                  unassigned      YES unset  administratively down down    

[OK] Configuration committed successfully to NVRAM!`;
        } else if (language === "dart") {
          simOutput = "สวัสดี จาก Dart! 🎯\n\nหลักสูตรทั้งหมด:\n  1. IoT\n  2. Network\n  3. Web Dev\n  4. Mobile\n  5. Game Dev\n\nข้อมูลนักเรียน: {name: สมชาย, age: 18, gpa: 3.75}";
        }
        setOutput("===== ผลลัพธ์ (Simulated) =====\n\n" + simOutput);
      }, 800);
    }
  };

  const handleReset = () => {
    setCode(TEMPLATES[language]);
    setOutput("");
    if (language === "html" && iframeRef.current) {
      iframeRef.current.srcdoc = "";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getFileExtension = () => {
    const map: Record<string, string> = {
      html: "html",
      javascript: "js",
      python: "py",
      sql: "sql",
      cpp: "cpp",
      cisco: "ios",
      dart: "dart",
    };
    return map[language] || language;
  };

  return (
    <div className="flex flex-col h-screen bg-dark-950 text-white overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-dark-900 border-b border-white/10 gap-4 mt-16">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-primary-400" />
            <h1 className="font-semibold text-lg hidden sm:block">
              Code Playground
            </h1>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-dark-800 border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary-500"
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>

          <button
            onClick={() =>
              setEditorTheme(editorTheme === "vs-dark" ? "light" : "vs-dark")
            }
            className="p-2 hover:bg-dark-800 rounded-lg transition-colors text-gray-400 hover:text-white"
            title="สลับธีม"
          >
            {editorTheme === "vs-dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <div className="hidden sm:flex items-center gap-2 bg-dark-800 rounded-lg px-2 py-1">
            <span className="text-xs text-gray-400">ขนาด</span>
            <input
              type="range"
              min="10"
              max="24"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-20 accent-primary-500"
            />
            <span className="text-xs w-4">{fontSize}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 bg-dark-800 hover:bg-dark-700 rounded-lg text-sm transition-colors text-gray-300"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {isCopied ? "คัดลอกแล้ว" : "คัดลอก"}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-1.5 bg-dark-800 hover:bg-dark-700 rounded-lg text-sm transition-colors text-gray-300"
          >
            <RotateCcw className="w-4 h-4" />
            รีเซ็ต
          </button>
          <button
            onClick={handleRun}
            className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary-500/20"
          >
            <Play className="w-4 h-4" />
            รันโค้ด
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Editor */}
        <div className="flex-1 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-white/10 relative">
          <div className="absolute top-0 right-0 z-10 p-2 pointer-events-none">
            <span className="bg-dark-800/80 backdrop-blur text-xs px-2 py-1 rounded text-gray-400 font-mono pointer-events-auto">
              main.{getFileExtension()}
            </span>
          </div>
          <MonacoEditor
            height="100%"
            language={
              language === "html"
                ? "html"
                : language === "cpp"
                ? "cpp"
                : language === "cisco"
                ? "shell"
                : language
            }
            theme={editorTheme}
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: fontSize,
              minimap: { enabled: false },
              padding: { top: 16 },
              scrollBeyondLastLine: false,
              fontFamily: '"JetBrains Mono", monospace',
              automaticLayout: true,
              wordWrap: "on",
              lineNumbersMinChars: 3,
              renderWhitespace: "none",
              folding: false,
              glyphMargin: false,
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              renderLineHighlight: "none",
              contextmenu: false,
              quickSuggestions: false,
              suggest: { showWords: false },
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
            }}
          />
        </div>

        {/* Output */}
        <div className="flex-1 lg:w-1/2 flex flex-col h-1/2 lg:h-full">
          <div className="bg-dark-900 border-b border-white/10 px-4 py-2 flex items-center justify-between text-sm text-gray-400">
            <span>ผลลัพธ์ (Output)</span>
          </div>
          <div className="flex-1 overflow-hidden relative bg-[#1e1e1e]">
            {language === "html" ? (
              <iframe
                ref={iframeRef}
                title="preview"
                className="w-full h-full border-none bg-white"
                sandbox="allow-scripts"
              />
            ) : (
              <div className="w-full h-full p-4 font-mono text-sm overflow-auto text-gray-300 whitespace-pre-wrap">
                {output || (
                  <span className="text-gray-600 italic">
                    กด &apos;รันโค้ด&apos; เพื่อดูผลลัพธ์
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
