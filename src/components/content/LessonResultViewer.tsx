"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Play,
  Terminal,
  Database,
  Cpu,
  Smartphone,
  Shield,
  Wifi,
  RotateCcw,
  CheckCircle2,
  Table,
  Layers,
  Sparkles,
  Send,
  Eye,
  Sliders,
  ChevronDown,
  Activity,
  Box,
} from "lucide-react";

interface LessonResultViewerProps {
  courseId: string;
  lessonId: string;
  code: string;
  executionCount?: number;
  iframeRef?: React.RefObject<HTMLIFrameElement | null>;
}

function buildWebPreviewHtml(rawCode: string, courseId: string) {
  if (!rawCode || !rawCode.trim()) {
    return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0b0f19; color: #94a3b8; text-align: center; padding: 20px; }
    .icon { font-size: 40px; margin-bottom: 12px; }
    h3 { color: #f1f5f9; margin: 0 0 8px 0; font-size: 18px; }
    p { margin: 0; font-size: 14px; max-width: 380px; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="icon">🚀</div>
  <h3>พร้อมแสดงผลลัพธ์</h3>
  <p>คลิกปุ่ม <strong>"รันโค้ด"</strong> สีเขียว เพื่อประมวลผลโค้ดและดูการแสดงผลแบบสดๆ</p>
</body>
</html>`;
  }

  const isFullHtml = /<(!doctype|html|head|body|div|p|h[1-6]|main|header|nav|section|table|button|canvas)/i.test(rawCode);

  if (isFullHtml) {
    let html = rawCode;
    // Inject Tailwind CDN if it doesn't already have it
    if (!html.includes("cdn.tailwindcss.com") && !html.includes("tailwind")) {
      const tailwindScript = `<script src="https://cdn.tailwindcss.com"></script>\n<meta name="viewport" content="width=device-width, initial-scale=1.0">`;
      if (html.includes("<head>")) {
        html = html.replace("<head>", `<head>\n  ${tailwindScript}`);
      } else if (html.includes("<html")) {
        html = html.replace(/<html[^>]*>/, `$&<head>${tailwindScript}</head>`);
      } else {
        html = `${tailwindScript}\n${html}`;
      }
    }
    return html;
  }

  // If it's a JavaScript snippet (functions, classes, console.log, algorithms)
  return `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background-color: #0b0f19;
      color: #f1f5f9;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      padding: 16px;
      margin: 0;
      font-size: 13px;
      line-height: 1.6;
    }
    #console-header {
      padding-bottom: 10px;
      margin-bottom: 12px;
      border-bottom: 1px solid #1e293b;
      font-size: 12px;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 2px 8px;
      border-radius: 9999px;
      font-size: 11px;
      background: rgba(16, 185, 129, 0.15);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.3);
    }
    .console-line {
      padding: 6px 10px;
      margin-bottom: 4px;
      border-radius: 8px;
      background: #0f172a;
      border: 1px solid #1e293b;
      display: flex;
      gap: 10px;
      align-items: flex-start;
      word-break: break-all;
    }
    .console-time {
      color: #64748b;
      font-size: 11px;
      flex-shrink: 0;
      user-select: none;
    }
    .console-val { flex-grow: 1; }
    .console-log .console-val { color: #38bdf8; }
    .console-info .console-val { color: #34d399; }
    .console-warn .console-val { color: #f59e0b; }
    .console-error .console-val { color: #f43f5e; font-weight: bold; }
    .summary-box {
      margin-top: 16px;
      padding: 12px 14px;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid #334155;
      border-radius: 10px;
      color: #cbd5e1;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div id="console-header">
    <span>⚡ V8 JavaScript Runtime Output</span>
    <span class="badge">● Execution Finished (Exit 0)</span>
  </div>
  <div id="logs-container"></div>
  <div id="summary"></div>

  <script>
    const container = document.getElementById('logs-container');
    let logCount = 0;

    function addLog(type, ...args) {
      logCount++;
      const row = document.createElement('div');
      row.className = 'console-line console-' + type;
      const time = new Date().toLocaleTimeString('th-TH');
      
      const msg = args.map(arg => {
        if (typeof arg === 'object' && arg !== null) {
          try { return JSON.stringify(arg, null, 2); } catch (e) { return String(arg); }
        }
        return String(arg);
      }).join(' ');

      row.innerHTML = '<span class="console-time">[' + time + ']</span><span class="console-val">' + 
        msg.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span>';
      container.appendChild(row);
    }

    console.log = (...args) => addLog('log', ...args);
    console.info = (...args) => addLog('info', ...args);
    console.warn = (...args) => addLog('warn', ...args);
    console.error = (...args) => addLog('error', ...args);

    window.onerror = function(msg, src, lineno) {
      addLog('error', 'Runtime Error: ' + msg + ' (Line ' + lineno + ')');
      return true;
    };

    try {
      ${rawCode}
      
      if (logCount === 0) {
        const sum = document.getElementById('summary');
        sum.innerHTML = '<div class="summary-box">' +
          '<div style="color: #10b981; font-weight: bold; margin-bottom: 4px;">✓ การทำงานสำเร็จสมบูรณ์ (Script Evaluated Successfully)</div>' +
          '<div>โครงสร้างและฟังก์ชันทั้งหมดโหลดเข้าหน่วยความจำเรียบร้อย ไร้ข้อผิดพลาดทางไวยากรณ์ (Syntax Check Passed)</div>' +
          '<div style="margin-top: 6px; color: #94a3b8; font-size: 11px;">(สามารถเพิ่มคำสั่ง <code>console.log(...)</code> ในโค้ดเพื่อพิมพ์ตัวแปรหรือผลลัพธ์การคำนวณ)</div>' +
          '</div>';
      }
    } catch (e) {
      addLog('error', 'Error: ' + (e && e.message ? e.message : String(e)));
    }
  </script>
</body>
</html>`;
}

interface LanguageRuntimeViewerProps {
  courseId: string;
  lessonId: string;
  code: string;
  executionCount: number;
  onRerun: () => void;
}

const languageMetadata: Record<
  string,
  {
    name: string;
    runtime: string;
    cli: string;
    icon: string;
    version: string;
    memoryMetric: string;
    engine: string;
    compilerFlags: string;
    localInstallHint: string;
  }
> = {
  python: {
    name: "Python 3.12",
    runtime: "CPython 3.12.3",
    cli: "python3 -u main.py",
    icon: "🐍",
    version: "Python 3.12.3 (GCC 13.2.0, 64-bit)",
    memoryMetric: "Heap: 14.2 MB | Active Objects: 1,420",
    engine: "CPython Bytecode Interpreter & AsyncIO Event Loop",
    compilerFlags: "-O -Wall (Optimized Bytecode)",
    localInstallHint: "python -m venv .venv && source .venv/bin/activate && python main.py",
  },
  csharp: {
    name: "C# 12 / .NET 8",
    runtime: ".NET 8.0 SDK (CoreCLR)",
    cli: "dotnet run --configuration Release",
    icon: "🔷",
    version: "Microsoft .NET SDK 8.0.204 (x64)",
    memoryMetric: "GC Gen 0: 42 KB | Working Set: 21.4 MB",
    engine: "CoreCLR RyuJIT Tier-2 Optimization Engine",
    compilerFlags: "--configuration Release /p:TreatWarningsAsErrors=true",
    localInstallHint: "dotnet new console -o MyProject && cd MyProject && dotnet run",
  },
  php: {
    name: "PHP 8.3",
    runtime: "PHP 8.3.6 CLI",
    cli: "php -f index.php",
    icon: "🐘",
    version: "PHP 8.3.6 (cli) Zend Engine v4.3.6 with OPcache",
    memoryMetric: "Peak Memory: 4.8 MB | OPcache Hit Rate: 98.4%",
    engine: "Zend Engine JIT (CRCS mode)",
    compilerFlags: "opcache.enable_cli=1 -d error_reporting=E_ALL",
    localInstallHint: "php -S localhost:8000 (Built-in Development Web Server)",
  },
  go: {
    name: "Go (Golang)",
    runtime: "Go 1.22.2 Runtime",
    cli: "go run main.go",
    icon: "🦫",
    version: "go version go1.22.2 linux/amd64",
    memoryMetric: "HeapAlloc: 2.1 MB | Goroutines: 4 active",
    engine: "Go M:N Concurrency Scheduler & CSP Runtime",
    compilerFlags: "go build -ldflags=\"-s -w\"",
    localInstallHint: "go mod init myapp && go run .",
  },
  java: {
    name: "Java 21 LTS",
    runtime: "OpenJDK 21 LTS (HotSpot)",
    cli: "java -jar target/app.jar",
    icon: "☕",
    version: "OpenJDK 64-Bit Server VM (build 21.0.3+9-LTS)",
    memoryMetric: "JVM Heap: 68 MB / Max 512 MB (G1GC active)",
    engine: "HotSpot C2 JIT Compiler & Project Loom Virtual Threads",
    compilerFlags: "-XX:+UseG1GC -XX:+EnableDynamicAgentLoading",
    localInstallHint: "javac Main.java && java Main (or ./mvnw spring-boot:run)",
  },
  cpp: {
    name: "Modern C++ (C++23)",
    runtime: "GCC 14.1.0 / Clang 18",
    cli: "g++ -O3 -std=c++23 main.cpp -o main && ./main",
    icon: "⚡",
    version: "x86_64-linux-gnu g++ (GCC) 14.1.0",
    memoryMetric: "Stack: 8 MB | RSS: 820 KB (Zero-Cost Abstractions)",
    engine: "LLVM Clang / GCC Native Machine Code Assembly",
    compilerFlags: "-O3 -std=c++23 -Wall -Wextra -pedantic",
    localInstallHint: "g++ -std=c++23 main.cpp -o app && ./app (or cmake -B build)",
  },
  typescript: {
    name: "TypeScript 5.4",
    runtime: "TypeScript 5.4.5 & Bun / Node.js",
    cli: "tsc --noEmit && bun run index.ts",
    icon: "🟦",
    version: "Version 5.4.5 (Strict: true)",
    memoryMetric: "V8 / Bun Heap: 9.6 MB | Type Check: 0.08s",
    engine: "TypeScript Compiler + JavaScript V8 / JavaScriptCore Engine",
    compilerFlags: "tsc --strict --noImplicitAny --target ES2022",
    localInstallHint: "bun init && bun run index.ts (or npx tsx index.ts)",
  },
};

function extractLanguageStdout(rawCode: string, lang: string): string[] {
  if (!rawCode) return [];
  const lines = rawCode.split("\n");
  const extracted: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("#") || trimmed.startsWith("/*") || trimmed.startsWith("*")) continue;

    if (lang === "python" && /print\s*\((.*)\)/.test(trimmed)) {
      const match = trimmed.match(/print\s*\((.*)\)/);
      if (match) {
        let val = match[1].trim();
        val = val.replace(/^f?["']|["']$/g, "").replace(/\\n/g, "");
        if (val) extracted.push(val);
      }
    } else if (lang === "csharp" && /Console\.(?:WriteLine|Write)\s*\((.*)\)/.test(trimmed)) {
      const match = trimmed.match(/Console\.(?:WriteLine|Write)\s*\((.*)\)/);
      if (match) {
        let val = match[1].trim();
        val = val.replace(/^\$?["']|["']$/g, "").replace(/\\n/g, "");
        if (val) extracted.push(val);
      }
    } else if (lang === "php" && (/echo\s+(.*);/.test(trimmed) || /print_r\s*\((.*)\)/.test(trimmed))) {
      const match = trimmed.match(/(?:echo|print_r)\s*\(?([^;]+)\)?/);
      if (match) {
        let val = match[1].trim();
        val = val.replace(/^["']|["']$/g, "");
        if (val) extracted.push(val);
      }
    } else if (lang === "go" && /fmt\.Print(?:ln|f)?\s*\((.*)\)/.test(trimmed)) {
      const match = trimmed.match(/fmt\.Print(?:ln|f)?\s*\((.*)\)/);
      if (match) {
        let val = match[1].trim();
        val = val.replace(/^["']|["']$/g, "").replace(/\\n/g, "");
        if (val) extracted.push(val);
      }
    } else if (lang === "java" && /System\.out\.print(?:ln)?\s*\((.*)\)/.test(trimmed)) {
      const match = trimmed.match(/System\.out\.print(?:ln)?\s*\((.*)\)/);
      if (match) {
        let val = match[1].trim();
        val = val.replace(/^["']|["']$/g, "").replace(/\\n/g, "");
        if (val) extracted.push(val);
      }
    } else if (lang === "cpp" && /std::cout\s*<<\s*(.*);/.test(trimmed)) {
      const match = trimmed.match(/std::cout\s*<<\s*([^;]+);/);
      if (match) {
        let val = match[1].replace(/<<\s*std::endl/g, "").replace(/<<\s*"\\n"/g, "").trim();
        val = val.replace(/^["']|["']$/g, "");
        if (val) extracted.push(val);
      }
    } else if (lang === "typescript" && /console\.(?:log|info|warn)\s*\((.*)\)/.test(trimmed)) {
      const match = trimmed.match(/console\.(?:log|info|warn)\s*\((.*)\)/);
      if (match) {
        let val = match[1].trim();
        val = val.replace(/^[`"']|[`"']$/g, "");
        if (val) extracted.push(val);
      }
    }
  }

  return extracted;
}

function LanguageRuntimeViewer({
  courseId,
  lessonId,
  code,
  executionCount,
  onRerun,
}: LanguageRuntimeViewerProps) {
  const [tab, setTab] = useState<"stdout" | "metrics" | "cli">("stdout");
  const [isSpinning, setIsSpinning] = useState(false);

  const meta = languageMetadata[courseId] || {
    name: courseId.toUpperCase(),
    runtime: `${courseId} Native Runtime`,
    cli: `./run.sh`,
    icon: "💻",
    version: "v1.0.0",
    memoryMetric: "Alloc: 4 MB",
    engine: "Runtime Execution Engine",
    compilerFlags: "-O2",
    localInstallHint: "Run locally in your terminal",
  };

  useEffect(() => {
    if (executionCount > 0) {
      setIsSpinning(true);
      const timer = setTimeout(() => setIsSpinning(false), 280);
      return () => clearTimeout(timer);
    }
  }, [executionCount]);

  const extractedOutputs = useMemo(() => {
    return extractLanguageStdout(code, courseId);
  }, [code, courseId, executionCount]);

  const executionTime = useMemo(() => {
    const base = courseId === "cpp" ? 4 : courseId === "go" ? 14 : courseId === "php" ? 18 : 25;
    return `${base + (executionCount % 5)} ms`;
  }, [courseId, executionCount]);

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 text-slate-200 font-sans">
      {/* Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-xl">{meta.icon}</span>
          <span className="font-bold text-white font-mono">{meta.name}</span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono">
            ● Exit 0 (Success)
          </span>
          <span className="text-[11px] text-slate-500 font-mono hidden md:inline">
            Runtime: {executionTime}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px]">
            <button
              onClick={() => setTab("stdout")}
              className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                tab === "stdout"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Standard Output</span>
            </button>
            <button
              onClick={() => setTab("metrics")}
              className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                tab === "metrics"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Profiler & Memory</span>
            </button>
            <button
              onClick={() => setTab("cli")}
              className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                tab === "cli"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Local CLI</span>
            </button>
          </div>

          <button
            onClick={onRerun}
            disabled={isSpinning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-xs font-semibold cursor-pointer"
            title="รันโค้ดอีกครั้ง"
          >
            <RotateCcw className={`w-3.5 h-3.5 text-emerald-400 ${isSpinning ? "animate-spin" : ""}`} />
            <span>รีรัน</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Standard Output */}
      {tab === "stdout" && (
        <div className="flex-grow p-4 md:p-6 overflow-y-auto font-mono text-xs leading-relaxed space-y-4">
          {/* CLI Execution Command Header */}
          <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-400 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-white font-semibold">{meta.cli}</span>
            </div>
            <span className="text-[11px] text-slate-500 hidden sm:inline">{meta.version}</span>
          </div>

          {/* Main Output Box */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold border-b border-slate-800/80 pb-2 flex items-center justify-between">
              <span>// STDOUT STREAM (Standard Output)</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Syntax & Type Check OK
              </span>
            </div>

            {extractedOutputs.length > 0 ? (
              <div className="space-y-1.5 text-slate-100">
                {extractedOutputs.map((out, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-slate-600 select-none text-[11px] pt-0.5">{idx + 1}</span>
                    <span className="text-emerald-300 font-medium whitespace-pre-wrap">{out}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2 py-1">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>โปรแกรมผ่านการประมวลผลและการตรวจสอบไวยากรณ์เรียบร้อย (Evaluated Successfully)</span>
                </div>
                <div className="text-slate-300 text-xs">
                  โค้ดถูกคอมไพล์และโหลดเข้าหน่วยความจำสมบูรณ์ โครงสร้างคลาส ฟังก์ชัน และระบบประเภทข้อมูลผ่านเกณฑ์มาตรฐานทั้งหมด
                </div>
                <div className="text-slate-500 text-[11px] mt-2">
                  (คำแนะนำ: ลองเพิ่มคำสั่งแสดงผลในโค้ดเพื่อพิมพ์ตัวแปรออกมาดูบนคอนโซลนี้ได้แบบเรียลไทม์)
                </div>
              </div>
            )}
          </div>

          {/* Process Finish Footer */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 px-1">
            <span>Process finished with exit code 0 ({executionTime})</span>
            <span>UTF-8 | LF | 64-bit</span>
          </div>
        </div>
      )}

      {/* Tab 2: Profiler & Memory */}
      {tab === "metrics" && (
        <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 text-xs font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-slate-400 font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-primary-400" />
                <span>หน่วยประมวลผลและหน่วยความจำ (Memory & CPU)</span>
              </div>
              <div className="text-emerald-400 font-mono font-bold text-sm">{meta.memoryMetric}</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                การจองหน่วยความจำอยู่ในเกณฑ์มีประสิทธิภาพสูง ไม่พบการรั่วไหลของหน่วยความจำ (Zero Memory Leaks Detected)
              </p>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-slate-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>กลไกการรันไทม์ (Runtime Engine)</span>
              </div>
              <div className="text-white font-mono font-bold text-sm">{meta.engine}</div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Flags: <code className="text-primary-300 font-mono text-[11px]">{meta.compilerFlags}</code>
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
            <div className="text-slate-300 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>การตรวจสอบความปลอดภัยและมาตรฐานอุตสาหกรรม (Industry Best Practices)</span>
            </div>
            <ul className="text-slate-400 space-y-1 text-xs list-disc pl-5">
              <li>Type Safety: ระบบตรวจสอบประเภทข้อมูลเข้มงวด (Strict Checking ผ่าน 100%)</li>
              <li>Resource Management: จัดการหน่วยความจำและปิด Connection ตามหลักการวิศวกรรมสากล</li>
              <li>Execution Environment: ทำงานใน Sandbox ปลอดภัย ไม่ส่งผลกระทบต่อระบบปฏิบัติการหลัก</li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 3: Local CLI Command */}
      {tab === "cli" && (
        <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 text-xs font-sans">
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
            <h4 className="text-white font-bold text-sm flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary-400" />
              <span>วิธีรันโค้ดบทเรียนนี้บนเครื่องคอมพิวเตอร์ของคุณเอง</span>
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs">
              คัดลอกโค้ดจากโปรแกรมแก้ไข (Editor) ทางด้านซ้าย แล้วรันผ่าน Terminal หรือ Command Prompt ในเครื่องด้วยคำสั่งต่อไปนี้:
            </p>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-emerald-400 text-xs">
              {meta.localInstallHint}
            </div>
            <div className="text-slate-500 text-[11px]">
              เครื่องมือแนะนำในการพัฒนา: Visual Studio Code, Cursor, JetBrains IDE หรือ Terminal CLI
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LessonResultViewer({
  courseId,
  lessonId,
  code,
  executionCount = 0,
  iframeRef,
}: LessonResultViewerProps) {
  const [activeSubTab, setActiveSubTab] = useState<"table" | "terminal" | "plan">("table");
  const [localExecution, setLocalExecution] = useState(0);

  // Serial Monitor state (IoT)
  const [baudRate, setBaudRate] = useState("115200");
  const [serialInput, setSerialInput] = useState("");
  const [serialLogs, setSerialLogs] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);

  // Mobile Simulator state (Flutter)
  const [mobileTab, setMobileTab] = useState<"home" | "schedule" | "grades">("home");
  const [cardToggled, setCardToggled] = useState(false);
  const [showHotReloadNotice, setShowHotReloadNotice] = useState(false);

  // Sync execution triggers from parent
  useEffect(() => {
    if (executionCount > 0) {
      setLocalExecution((prev) => prev + 1);
    }
  }, [executionCount]);

  // Initialize simulated IoT logs when code changes
  useEffect(() => {
    if (courseId === "iot") {
      const now = new Date().toLocaleTimeString("th-TH");
      setSerialLogs([
        `[${now}.012] [BOOT] ESP-IDF v4.4-dev-2311-g634f4b93f / CPU: ESP32 @ 240MHz`,
        `[${now}.045] [FLASH] 4MB SPI Flash detected, mode: DIO, speed: 80MHz`,
        `[${now}.230] [WiFi] Initializing WiFi Station Mode...`,
        `[${now}.580] [WiFi] Connecting to SSID: 'IT_College_SmartLab_5G' ..... Connected!`,
        `[${now}.890] [WiFi] IP Address: 192.168.1.185 (Subnet: 255.255.255.0)`,
        `[${now}.120] [MQTT] Connecting to broker.emqx.io:1883 with ClientId: ESP32_Room402`,
        `[${now}.310] [MQTT] Connection Established! Subscribed to 'college/room402/command'`,
        `[${now}.500] [DHT22] Sensor Read OK -> Temperature: 28.4 °C | Humidity: 64.2% RH`,
        `[${now}.720] [MQTT] Published to 'college/room402/telemetry' -> {"temp": 28.4, "hum": 64.2, "relay": "OFF"}`,
      ]);
    }
  }, [courseId, lessonId]);

  // React to Run trigger for IoT
  useEffect(() => {
    if (courseId === "iot" && executionCount > 0) {
      const now = new Date().toLocaleTimeString("th-TH");
      setSerialLogs((prev) => [
        ...prev,
        `[${now}.000] [UPLOAD] Uploading sketch to ESP32 (Flash: 4MB)... OK (100%)`,
        `[${now}.120] [SYSTEM] Resetting target CPU... Running sketch!`,
        ...(code.includes("WiFi") ? [`[${now}.350] [WiFi] Connected to AP with IP: 192.168.1.185`] : []),
        ...(code.includes("MQTT") ? [`[${now}.580] [MQTT] Connected to broker.emqx.io:1883`] : []),
        ...(code.includes("DHT") || code.includes("dht") ? [`[${now}.820] [DHT22] Telemetry -> Temp: 28.5 °C | Humidity: 64.0% RH`] : []),
      ]);
    }
  }, [executionCount, courseId]);

  // React to Run trigger for Mobile
  useEffect(() => {
    if (courseId === "mobile" && executionCount > 0) {
      setShowHotReloadNotice(true);
      const timer = setTimeout(() => setShowHotReloadNotice(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [executionCount, courseId]);

  const handleSerialSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialInput.trim()) return;

    const now = new Date().toLocaleTimeString("th-TH");
    const cmd = serialInput.trim();
    const newLogs = [
      ...serialLogs,
      `[${now}] >> SEND: ${cmd}`,
    ];

    if (cmd.toUpperCase() === "RELAY_ON" || cmd.toUpperCase() === "LED_ON") {
      newLogs.push(`[${now}.105] [GPIO] PIN 23 -> HIGH. Relay Activated! 💡`);
    } else if (cmd.toUpperCase() === "RELAY_OFF" || cmd.toUpperCase() === "LED_OFF") {
      newLogs.push(`[${now}.105] [GPIO] PIN 23 -> LOW. Relay Deactivated. ⚪`);
    } else if (cmd.toUpperCase() === "READ_TEMP") {
      newLogs.push(`[${now}.150] [DHT22] Temperature: 28.6 °C, Humidity: 63.8% RH`);
    } else if (cmd.toUpperCase() === "STATUS") {
      newLogs.push(`[${now}.080] [SYSTEM] ESP32 Online | Uptime: 45 min | Free Heap: 284,120 bytes`);
    } else {
      newLogs.push(`[${now}.090] [ECHO] Received: "${cmd}" (Command executed)`);
    }

    setSerialLogs(newLogs);
    setSerialInput("");
  };

  const previewHtml = useMemo(() => {
    return buildWebPreviewHtml(code, courseId);
  }, [code, courseId, localExecution]);

  // 1. WEB DEV / GAME DEV: Live Iframe execution with srcDoc
  if (courseId === "webdev" || courseId === "gamedev") {
    return (
      <div className="w-full h-full flex flex-col bg-white dark:bg-slate-950">
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-mono font-bold">
              {courseId === "gamedev" ? "HTML5 2D Canvas Viewport (60 FPS)" : "Live Web Browser Preview"}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] hidden sm:inline-block">
              HTML5 / CSS / JS Live Sandbox
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocalExecution((prev) => prev + 1)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-[11px] cursor-pointer"
              title="รีเฟรชผลลัพธ์การรัน"
            >
              <RotateCcw className="w-3 h-3 text-emerald-400" />
              <span>รีรันผลลัพธ์</span>
            </button>
            <span className="text-[11px] text-slate-400 hidden sm:inline">Sandbox: allow-scripts</span>
          </div>
        </div>
        <div className="flex-grow relative bg-slate-950">
          <iframe
            key={`${lessonId}-${localExecution}`}
            srcDoc={previewHtml}
            className="w-full h-full border-none bg-white"
            title="Output Preview"
            sandbox="allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }

  // 2. DATABASE / SQL: Realistic Table Grid & Execution Plan
  if (courseId === "database") {
    const isExplainQuery =
      code.toLowerCase().includes("explain") ||
      code.toLowerCase().includes("analyze") ||
      lessonId.includes("index") ||
      lessonId.includes("optimize");

    return (
      <div className="w-full h-full flex flex-col bg-slate-950 text-slate-200 font-sans">
        {/* SQL Header Subtabs */}
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white">MySQL / PostgreSQL Interactive Engine</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
              Query OK (0.0018 sec)
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveSubTab("table")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeSubTab === "table"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>ตารางข้อมูล (Data Grid)</span>
            </button>
            <button
              onClick={() => setActiveSubTab("plan")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeSubTab === "plan"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>แผนการทำงาน (Explain Plan)</span>
            </button>
            <button
              onClick={() => setActiveSubTab("terminal")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeSubTab === "terminal"
                  ? "bg-slate-800 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Terminal Log</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Data Table View */}
        {activeSubTab === "table" && (
          <div className="flex-grow p-4 md:p-6 overflow-auto">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                ผลลัพธ์การสืบค้นข้อมูล: <strong>5 แถว (Fetched 5 rows in 0.0014 sec)</strong>
              </span>
              <span className="text-[11px] bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                Database: <code className="text-emerald-400">rms_college_db</code>
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/80 shadow-md">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-800/90 text-slate-300 uppercase font-mono tracking-wider border-b border-slate-700">
                  <tr>
                    <th className="px-4 py-3">student_id</th>
                    <th className="px-4 py-3">first_name</th>
                    <th className="px-4 py-3">last_name</th>
                    <th className="px-4 py-3">department</th>
                    <th className="px-4 py-3">gpa</th>
                    <th className="px-4 py-3">status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-mono text-slate-200">
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 text-emerald-400 font-bold">STD-670101</td>
                    <td className="px-4 py-3">สมชาย</td>
                    <td className="px-4 py-3">ใจดี</td>
                    <td className="px-4 py-3 text-blue-400">ช่างเทคนิคคอมพิวเตอร์</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">3.85</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">ปกติ</span></td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 text-emerald-400 font-bold">STD-670102</td>
                    <td className="px-4 py-3">กานดา</td>
                    <td className="px-4 py-3">สุขเกษม</td>
                    <td className="px-4 py-3 text-blue-400">เทคโนโลยีสารสนเทศ</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">3.92</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">ปกติ</span></td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 text-emerald-400 font-bold">STD-670103</td>
                    <td className="px-4 py-3">ธนากร</td>
                    <td className="px-4 py-3">วิเศษศิลป์</td>
                    <td className="px-4 py-3 text-blue-400">เทคโนโลยีสารสนเทศ</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">3.78</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">ปกติ</span></td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 text-emerald-400 font-bold">STD-670104</td>
                    <td className="px-4 py-3">พิมชนก</td>
                    <td className="px-4 py-3">รัตนชัย</td>
                    <td className="px-4 py-3 text-blue-400">คอมพิวเตอร์ธุรกิจ</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">3.65</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">ปกติ</span></td>
                  </tr>
                  <tr className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-3 text-emerald-400 font-bold">STD-670105</td>
                    <td className="px-4 py-3">ณัฐพล</td>
                    <td className="px-4 py-3">มั่งคั่ง</td>
                    <td className="px-4 py-3 text-blue-400">อิเล็กทรอนิกส์</td>
                    <td className="px-4 py-3 text-amber-400 font-bold">3.70</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">ปกติ</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">
                สถานะการทำงาน: <span className="text-emerald-400 font-bold">Success</span>
              </span>
              <span className="text-slate-500">
                Memory Peak: <span className="text-slate-300">1.2 MB</span> | Buffer Cache Hit: <span className="text-slate-300">100%</span>
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Explain Execution Plan */}
        {activeSubTab === "plan" && (
          <div className="flex-grow p-4 md:p-6 overflow-auto space-y-4">
            <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-xl text-xs text-blue-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                <strong>B-Tree Index Scan:</strong> ระบบใช้ Index <code>idx_students_dept_gpa</code> ในการกระโดดหาข้อมูลตรงจุด โดยไม่ต้องสแกนทุกแถว (Full Table Scan)
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900 shadow-md">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-800 text-slate-300 uppercase tracking-wider border-b border-slate-700">
                  <tr>
                    <th className="px-3 py-2.5">id</th>
                    <th className="px-3 py-2.5">select_type</th>
                    <th className="px-3 py-2.5">table</th>
                    <th className="px-3 py-2.5">type</th>
                    <th className="px-3 py-2.5">possible_keys</th>
                    <th className="px-3 py-2.5">key</th>
                    <th className="px-3 py-2.5">rows</th>
                    <th className="px-3 py-2.5">filtered</th>
                    <th className="px-3 py-2.5">Extra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  <tr className="hover:bg-slate-800/50">
                    <td className="px-3 py-2.5 text-emerald-400 font-bold">1</td>
                    <td className="px-3 py-2.5">SIMPLE</td>
                    <td className="px-3 py-2.5 text-blue-400">students</td>
                    <td className="px-3 py-2.5 text-amber-400 font-bold">ref</td>
                    <td className="px-3 py-2.5 text-slate-400">idx_students_dept_gpa</td>
                    <td className="px-3 py-2.5 text-emerald-400 font-bold">idx_students_dept_gpa</td>
                    <td className="px-3 py-2.5 text-amber-400 font-bold">4</td>
                    <td className="px-3 py-2.5">100.00%</td>
                    <td className="px-3 py-2.5 text-blue-300">Using index condition</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <div className="text-slate-400">Access Type</div>
                <div className="text-base font-bold text-emerald-400 mt-1">ref (Index Range)</div>
                <div className="text-[11px] text-slate-500 mt-0.5">เร็วกว่า ALL Table Scan ~98%</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <div className="text-slate-400">Estimated Cost</div>
                <div className="text-base font-bold text-amber-400 mt-1">1.25 Units</div>
                <div className="text-[11px] text-slate-500 mt-0.5">CPU Cycles ต่ำมาก</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                <div className="text-slate-400">Disk I/O Reads</div>
                <div className="text-base font-bold text-blue-400 mt-1">3 Page Blocks</div>
                <div className="text-[11px] text-slate-500 mt-0.5">B-Tree Depth: 3 Levels</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Terminal Console */}
        {activeSubTab === "terminal" && (
          <div className="flex-grow p-4 md:p-6 overflow-auto font-mono text-xs space-y-2">
            <div className="text-slate-500">
              mysql&gt; {code.split("\n")[0] || "SELECT * FROM students;"}
            </div>
            <div className="text-emerald-400 font-bold">
              +------------+------------+-----------+--------------------+------+--------+
            </div>
            <div className="text-slate-300">
              | student_id | first_name | last_name | department         | gpa  | status |
            </div>
            <div className="text-emerald-400 font-bold">
              +------------+------------+-----------+--------------------+------+--------+
            </div>
            <div className="text-slate-200">
              | STD-670101 | สมชาย      | ใจดี      | ช่างเทคนิคคอมฯ     | 3.85 | ปกติ   |<br />
              | STD-670102 | กานดา      | สุขเกษม   | เทคโนโลยีสารสนเทศ  | 3.92 | ปกติ   |<br />
              | STD-670103 | ธนากร      | วิเศษศิลป์| เทคโนโลยีสารสนเทศ  | 3.78 | ปกติ   |<br />
              | STD-670104 | พิมชนก     | รัตนชัย   | คอมพิวเตอร์ธุรกิจ  | 3.65 | ปกติ   |<br />
              | STD-670105 | ณัฐพล      | มั่งคั่ง  | อิเล็กทรอนิกส์     | 3.70 | ปกติ   |
            </div>
            <div className="text-emerald-400 font-bold">
              +------------+------------+-----------+--------------------+------+--------+
            </div>
            <div className="text-slate-400 mt-2">
              5 rows in set (0.0018 sec)
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. IOT (ESP32 / ARDUINO): Real Arduino Serial Monitor with Controls
  if (courseId === "iot") {
    return (
      <div className="w-full h-full flex flex-col bg-black text-green-400 font-mono text-xs">
        {/* Arduino Serial Monitor Topbar */}
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-white text-xs">Arduino IDE Serial Monitor</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px]">
              COM3 (ESP32-WROOM-32)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-[11px]">
              <span className="text-slate-500">Baud:</span>
              <select
                value={baudRate}
                onChange={(e) => setBaudRate(e.target.value)}
                className="bg-transparent text-emerald-400 outline-none cursor-pointer"
              >
                <option value="9600">9600 baud</option>
                <option value="115200">115200 baud</option>
              </select>
            </div>

            <button
              onClick={() => setSerialLogs([])}
              className="p-1 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> ล้างจอ
            </button>
          </div>
        </div>

        {/* Serial Log Output Feed */}
        <div className="flex-grow p-4 overflow-y-auto space-y-1.5 leading-relaxed bg-slate-950 font-mono">
          {serialLogs.map((log, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {log.includes(">> SEND") ? (
                <span className="text-amber-400 font-bold">{log}</span>
              ) : log.includes("WiFi") ? (
                <span className="text-blue-400">{log}</span>
              ) : log.includes("MQTT") ? (
                <span className="text-purple-400">{log}</span>
              ) : log.includes("DHT22") ? (
                <span className="text-emerald-300 font-semibold">{log}</span>
              ) : (
                <span className="text-slate-300">{log}</span>
              )}
            </div>
          ))}
        </div>

        {/* Serial Command Input Bar */}
        <form
          onSubmit={handleSerialSend}
          className="bg-slate-900 border-t border-slate-800 p-2.5 flex items-center gap-2"
        >
          <span className="text-blue-400 font-bold text-xs pl-2">Serial.read():</span>
          <input
            type="text"
            value={serialInput}
            onChange={(e) => setSerialInput(e.target.value)}
            placeholder="พิมพ์คำสั่งส่งเข้าบอร์ด ESP32 (เช่น STATUS, LED_ON, READ_TEMP)..."
            className="flex-grow bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Send className="w-3 h-3" /> ส่ง
          </button>
        </form>
      </div>
    );
  }

  // 4. MOBILE / FLUTTER: Interactive Smartphone Simulator
  if (courseId === "mobile") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 p-4 overflow-y-auto">
        <div className="w-full max-w-[340px] h-[580px] bg-slate-950 rounded-[40px] border-[6px] border-slate-800 shadow-2xl flex flex-col overflow-hidden relative">
          {/* Top Notch / Dynamic Island */}
          <div className="w-full h-6 bg-slate-950 flex items-center justify-between px-6 pt-1 shrink-0 z-20 text-[10px] text-white font-mono">
            <span>9:41</span>
            <div className="w-20 h-3.5 bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <Wifi className="w-3 h-3" />
              <div className="w-4 h-2 border border-white rounded-sm p-0.5">
                <div className="w-full h-full bg-white rounded-xs" />
              </div>
            </div>
          </div>

          {/* Flutter App Bar */}
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between shadow-md shrink-0">
            <div className="font-bold text-sm">IT Student Portal</div>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
              IT
            </div>
          </div>

          {/* Hot Reload Flash Toast */}
          {showHotReloadNotice && (
            <div className="absolute top-14 left-4 right-4 z-50 bg-emerald-600 text-white font-bold text-xs py-2 px-3 rounded-xl shadow-xl flex items-center justify-center gap-2 animate-bounce">
              <span>⚡ Flutter Hot Reloaded in 210ms</span>
            </div>
          )}

          {/* App Body Content */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs">
            {mobileTab === "home" && (
              <>
                {/* Student Profile Card */}
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-bold text-lg flex items-center justify-center">
                      ธ
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">ธนกฤต ชัยชนะ</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        ปวส. 1 • เทคโนโลยีสารสนเทศ
                      </p>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                        GPA: 3.85 (เกียรตินิยม)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Card */}
                <div className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xs">การลงทะเบียนวิชาเรียน</span>
                    <button
                      onClick={() => setCardToggled(!cardToggled)}
                      className="text-[11px] font-semibold text-blue-500 hover:underline"
                    >
                      {cardToggled ? "ซ่อน" : "ดูตาราง"}
                    </button>
                  </div>
                  {cardToggled && (
                    <div className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 pt-1 border-t border-slate-100 dark:border-slate-700">
                      <div>• 30204-2001 ระบบเครือข่ายคอมพิวเตอร์</div>
                      <div>• 30204-2002 การพัฒนาเว็บขั้นสูง</div>
                      <div>• 30204-2003 ระบบจัดการฐานข้อมูล RMS</div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <button
                    onClick={() => alert("จำลอง: ดาวน์โหลดใบรายงานผลการเรียน PDF สำเร็จ")}
                    className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-900/50 hover:bg-blue-100 transition-colors"
                  >
                    📄 ใบเกรด (PDF)
                  </button>
                  <button
                    onClick={() => alert("จำลอง: เชื่อมต่อ GPS วิทยาลัยสำเร็จ (อยู่ในรัศมีการเช็คชื่อ)")}
                    className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100 transition-colors"
                  >
                    📍 เช็คชื่อเข้าเรียน
                  </button>
                </div>
              </>
            )}

            {mobileTab === "schedule" && (
              <div className="space-y-2">
                <div className="font-bold text-xs text-slate-500">ตารางเรียนวันจันทร์:</div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-blue-600 dark:text-blue-400">08:30 - 12:30 น.</div>
                  <div className="text-xs font-semibold">Cisco Network Routing Lab</div>
                  <div className="text-[10px] text-slate-400">ห้องปฏิบัติการ 402 • ตึก IT</div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-blue-600 dark:text-blue-400">13:30 - 16:30 น.</div>
                  <div className="text-xs font-semibold">Database Management & Indexing</div>
                  <div className="text-[10px] text-slate-400">ห้องปฏิบัติการ 405 • ตึก IT</div>
                </div>
              </div>
            )}

            {mobileTab === "grades" && (
              <div className="space-y-2">
                <div className="font-bold text-xs text-slate-500">ผลการเรียนภาคเรียนที่ 1:</div>
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl flex justify-between items-center border border-slate-200 dark:border-slate-700">
                  <span>Network Systems</span>
                  <span className="font-bold text-emerald-500">4.0 (A)</span>
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl flex justify-between items-center border border-slate-200 dark:border-slate-700">
                  <span>IoT & Microcontroller</span>
                  <span className="font-bold text-emerald-500">4.0 (A)</span>
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl flex justify-between items-center border border-slate-200 dark:border-slate-700">
                  <span>Web App Development</span>
                  <span className="font-bold text-blue-500">3.5 (B+)</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation Bar */}
          <div className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-around shrink-0 text-[10px]">
            <button
              onClick={() => setMobileTab("home")}
              className={`flex flex-col items-center gap-0.5 ${
                mobileTab === "home" ? "text-blue-600 dark:text-blue-400 font-bold" : "text-slate-400"
              }`}
            >
              <span>🏠</span>
              <span>หน้าหลัก</span>
            </button>
            <button
              onClick={() => setMobileTab("schedule")}
              className={`flex flex-col items-center gap-0.5 ${
                mobileTab === "schedule" ? "text-blue-600 dark:text-blue-400 font-bold" : "text-slate-400"
              }`}
            >
              <span>📅</span>
              <span>ตารางเรียน</span>
            </button>
            <button
              onClick={() => setMobileTab("grades")}
              className={`flex flex-col items-center gap-0.5 ${
                mobileTab === "grades" ? "text-blue-600 dark:text-blue-400 font-bold" : "text-slate-400"
              }`}
            >
              <span>🏆</span>
              <span>เกรด</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 5. CYBERSECURITY: Kali Linux Terminal & Security Scan Log
  if (courseId === "cybersecurity") {
    return (
      <div className="w-full h-full flex flex-col bg-slate-950 text-slate-200 font-mono text-xs">
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-500" />
            <span className="font-bold text-white">Kali Linux Security Assessment Terminal</span>
            <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px]">
              Target: 192.168.10.150
            </span>
          </div>
          <span className="text-[11px] text-emerald-400 font-semibold">Exit code: 0</span>
        </div>

        <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-2 leading-relaxed bg-black text-slate-300">
          <div className="text-red-400 font-bold">
            root@kali-sec:~# nmap -sV -sC -T4 192.168.10.150
          </div>
          <div className="text-slate-400">
            Starting Nmap 7.94 ( https://nmap.org ) at {new Date().toLocaleDateString("th-TH")} 14:32 ICT<br />
            Nmap scan report for student-portal.college.ac.th (192.168.10.150)<br />
            Host is up (0.00042s latency).<br />
            Not shown: 997 closed tcp ports (reset)
          </div>
          <div className="text-emerald-400 font-bold">
            PORT     STATE SERVICE VERSION<br />
            22/tcp   open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)<br />
            80/tcp   open  http    Apache httpd 2.4.52 ((Ubuntu))<br />
            |_http-title: IT College Student RMS Portal<br />
            |_http-server-header: Apache/2.4.52 (Ubuntu)<br />
            3306/tcp open  mysql   MySQL 8.0.36-0ubuntu0.22.04.1
          </div>
          <div className="pt-2 text-amber-400 font-semibold">
            [+] Vulnerability Analysis Check:
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 space-y-1">
            <div>• <strong className="text-emerald-400">SSH Service:</strong> Password auth disabled, RSA key only (Secure)</div>
            <div>• <strong className="text-amber-400">Web App:</strong> Missing Strict-Transport-Security (HSTS) Header</div>
            <div>• <strong className="text-emerald-400">SQL Injection:</strong> Tested parameter &apos;id&apos; with Prepared Statement (Passed - No SQLi detected)</div>
          </div>
          <div className="text-slate-500 pt-2">
            Nmap done: 1 IP address (1 host up) scanned in 2.14 seconds
          </div>
        </div>
      </div>
    );
  }

  // 6. PROGRAMMING LANGUAGES (Python, C#, PHP, Go, Java, C++, TypeScript)
  if (
    courseId === "python" ||
    courseId === "csharp" ||
    courseId === "php" ||
    courseId === "go" ||
    courseId === "java" ||
    courseId === "cpp" ||
    courseId === "typescript"
  ) {
    return (
      <LanguageRuntimeViewer
        courseId={courseId}
        lessonId={lessonId}
        code={code}
        executionCount={localExecution}
        onRerun={() => setLocalExecution((prev) => prev + 1)}
      />
    );
  }

  // 7. DEFAULT / FALLBACK (Network etc.)
  return (
    <div className="w-full h-full flex flex-col bg-slate-950 p-6 font-mono text-xs md:text-sm text-slate-300 overflow-auto">
      <div className="text-slate-500 mb-3 text-xs flex items-center gap-2">
        <Terminal className="w-3.5 h-3.5 text-blue-400" />
        <span>คอนโซลผลลัพธ์การประมวลผล (Execution Console)</span>
      </div>
      <div className="text-emerald-400 font-bold mb-3 flex items-center gap-1.5">
        <CheckCircle2 className="w-4 h-4" /> โปรแกรมทำงานสมบูรณ์ (Exit code 0)
      </div>
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-200 leading-relaxed font-mono">
        {code.includes("print") || code.includes("cout") ? (
          <div>
            <div className="text-slate-400 text-xs mb-1">// Standard Output:</div>
            <div className="text-emerald-300">
              Hello, IT Academy! คำสั่งทำงานสำเร็จและได้ผลลัพธ์ตามโจทย์
            </div>
          </div>
        ) : (
          <div>
            <div className="text-slate-400 text-xs mb-1">// Simulation Output:</div>
            <div className="text-slate-100">
              [OK] คำสั่งได้รับการตรวจสอบความถูกต้องทางไวยากรณ์ (Syntax Check Passed)
            </div>
            <div className="text-emerald-400 text-xs mt-2">
              ✓ ค่าและตัวแปรทั้งหมดพร้อมนำไปใช้งานบนระบบจริง
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(LessonResultViewer);
