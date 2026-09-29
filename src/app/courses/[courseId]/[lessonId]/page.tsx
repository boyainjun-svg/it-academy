"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { getCourse, getLesson } from "@/data/courses";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Code,
  Play,
  Terminal,
  Lightbulb,
  Copy,
  Check,
  Wrench,
  Download,
  ExternalLink,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";
import { markLessonComplete, getUser, User } from "@/lib/progress";
import LessonDiagram from "@/components/content/LessonDiagram";
import LessonResultViewer from "@/components/content/LessonResultViewer";
import AuthRequiredModal from "@/components/auth/AuthRequiredModal";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full bg-slate-950 text-slate-400 font-mono text-sm gap-2">
      <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <span>กำลังโหลด Code Editor...</span>
    </div>
  ),
});

function renderContent(content: string, courseId?: string, lessonId?: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  let hasDiagram = false;

  const getDefaultDiagram = () => {
    if (courseId === "database") {
      if (lessonId?.includes("index") || lessonId?.includes("optimiz") || lessonId?.includes("query")) {
        return { type: "btree", caption: "ผังโครงสร้าง B-Tree Index และการชี้ตำแหน่ง Record Blocks บน Disk" };
      }
      return { type: "er", caption: "แผนภาพความสัมพันธ์ข้อมูล (ER Diagram) และคีย์หลัก PK / คีย์นอก FK" };
    }
    if (courseId === "network") {
      if (lessonId?.includes("osi") || lessonId?.includes("tcp") || lessonId?.includes("intro")) {
        return { type: "osi", caption: "แบบจำลองการสื่อสาร OSI 7 Layers และ Protocol Data Units (PDU)" };
      }
      return { type: "campus-network", caption: "สถาปัตยกรรมเครือข่ายวิทยาลัย 3-Tier Campus Network และการแบ่ง VLANs" };
    }
    if (courseId === "iot") {
      if (lessonId?.includes("mqtt") || lessonId?.includes("broker") || lessonId?.includes("cloud")) {
        return { type: "mqtt", caption: "สถาปัตยกรรม Publish / Subscribe ผ่าน MQTT Broker และอุปกรณ์ IoT" };
      }
      return { type: "esp32-pinout", caption: "ผังการต่อวงจรบอร์ด ESP32 กับเซนเซอร์ DHT22 และโมดูลรีเลย์ 5V" };
    }
    if (courseId === "cybersecurity") {
      if (lessonId?.includes("sqli") || lessonId?.includes("owasp") || lessonId?.includes("injection")) {
        return { type: "sqli", caption: "กลไกการโจมตี SQL Injection และการป้องกันด้วย Prepared Statement" };
      }
      return { type: "cia", caption: "สามเหลี่ยมความมั่นคงปลอดภัยสารสนเทศ (CIA Triad): Confidentiality, Integrity, Availability" };
    }
    if (courseId === "mobile") {
      return { type: "flutter", caption: "โครงสร้างลำดับชั้นของวิดเจ็ต (Flutter Widget Tree Composition)" };
    }
    if (courseId === "gamedev") {
      return { type: "gameloop", caption: "วงรอบการประมวลผลของเกมเอนจิน (60 FPS Game Loop Engine)" };
    }
    return null;
  };

  function renderFormattedText(text: string, keyPrefix: string | number) {
    const tokenRegex = /(\*\*.*?\*\*|`.*?`|\*.*?\*)/g;
    const parts = text.split(tokenRegex);

    return parts.map((part, idx) => {
      if (!part) return null;
      const k = `${keyPrefix}-${idx}`;
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return (
          <strong key={k} className="font-bold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
        return (
          <code
            key={k}
            className="px-1.5 py-0.5 mx-0.5 rounded font-mono text-xs font-semibold bg-slate-100 dark:bg-dark-800 text-primary-600 dark:text-primary-300 border border-slate-200 dark:border-dark-700 inline-block"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return (
          <em key={k} className="italic text-slate-700 dark:text-slate-300">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("```diagram")) {
      hasDiagram = true;
      const diagramType = line.replace("```diagram:", "").replace("```diagram", "").trim();
      const captionLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        if (lines[i].trim()) captionLines.push(lines[i]);
        i++;
      }
      elements.push(
        <LessonDiagram
          key={key++}
          type={diagramType || "btree"}
          caption={captionLines.join(" ")}
        />
      );
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={key++}
          className="text-lg font-bold mt-6 mb-2 text-slate-900 dark:text-white"
        >
          {renderFormattedText(line.replace("#### ", ""), `h4-${key}`)}
        </h4>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-xl font-bold mt-7 mb-3 text-slate-900 dark:text-white"
        >
          {renderFormattedText(line.replace("### ", ""), `h3-${key}`)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-extrabold mt-9 mb-4 text-slate-900 dark:text-white"
        >
          {renderFormattedText(line.replace("## ", ""), `h2-${key}`)}
        </h2>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={key++}
          className="text-3xl font-black mt-8 mb-4 text-slate-900 dark:text-white"
        >
          {renderFormattedText(line.replace("# ", ""), `h1-${key}`)}
        </h1>
      );
    } else if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div
          key={key++}
          className="bg-slate-900 text-slate-50 p-4 rounded-2xl my-4 overflow-x-auto text-sm font-mono border border-slate-800 shadow-md"
        >
          <pre>{codeLines.join("\n")}</pre>
        </div>
      );
    } else if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i].trim());
        i++;
      }
      i--;

      const headerRow = tableRows[0];
      const dataRows = tableRows.slice(1).filter((r) => !r.includes("---"));

      const parseCells = (row: string) =>
        row
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());

      const headerCells = parseCells(headerRow);

      elements.push(
        <div
          key={key++}
          className="my-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-slate-100 dark:bg-dark-800 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
              <tr>
                {headerCells.map((cell, idx) => (
                  <th
                    key={idx}
                    className="py-3 px-4 border-b border-slate-200 dark:border-slate-800"
                  >
                    {renderFormattedText(cell, `th-${idx}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-dark-900/60 text-slate-700 dark:text-slate-200">
              {dataRows.map((row, rIdx) => {
                const cells = parseCells(row);
                return (
                  <tr
                    key={rIdx}
                    className="hover:bg-slate-50 dark:hover:bg-dark-800/40 transition-colors"
                  >
                    {cells.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className="py-3 px-4 leading-relaxed"
                      >
                        {renderFormattedText(cell, `td-${rIdx}-${cIdx}`)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else if (line.trim() === "---") {
      elements.push(
        <hr
          key={key++}
          className="my-8 border-slate-200 dark:border-slate-800"
        />
      );
    } else if (line.startsWith("> ") || line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && (lines[i].startsWith("> ") || lines[i].startsWith(">"))) {
        quoteLines.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      i--;
      elements.push(
        <blockquote
          key={key++}
          className="border-l-4 border-primary-500 bg-primary-50/60 dark:bg-primary-950/20 p-4 rounded-r-2xl my-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
        >
          {quoteLines.map((q, idx) => (
            <p key={idx} className={idx > 0 ? "mt-2" : ""}>
              {renderFormattedText(q, `quote-${idx}`)}
            </p>
          ))}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      i--;
      elements.push(
        <ul
          key={key++}
          className="list-disc pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300 text-base"
        >
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderFormattedText(item, `ul-${idx}`)}
            </li>
          ))}
        </ul>
      );
    } else if (line.match(/^\d+\. /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      i--;
      elements.push(
        <ol
          key={key++}
          className="list-decimal pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300 text-base"
        >
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderFormattedText(item, `ol-${idx}`)}
            </li>
          ))}
        </ol>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={key++}
          className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base"
        >
          {renderFormattedText(line, `p-${key}`)}
        </p>
      );
    }
    i++;
  }

  if (!hasDiagram) {
    const def = getDefaultDiagram();
    if (def) {
      const insertIdx = elements.length > 2 ? 2 : elements.length;
      elements.splice(
        insertIdx,
        0,
        <LessonDiagram key="auto-diagram" type={def.type} caption={def.caption} />
      );
    }
  }

  return elements;
}

export default function LessonPage({
  params: routeParams,
}: {
  params?: { courseId: string; lessonId: string };
}) {
  const hookParams = useParams() || {};
  const courseId = (routeParams?.courseId || hookParams.courseId || "") as string;
  const lessonId = (routeParams?.lessonId || hookParams.lessonId || "") as string;

  const router = useRouter();
  const course = getCourse(courseId);
  const lesson = getLesson(courseId, lessonId);

  const [activeTab, setActiveTab] = useState<
    "code" | "lab" | "cisco" | "example" | "result"
  >("code");
  const [code, setCode] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [copied, setCopied] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [executionCount, setExecutionCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const user = getUser();
    setCurrentUser(user);
    setIsAuthChecked(true);
  }, []);

  // Cisco Simulator Terminal state
  const isCiscoCourse = courseId === "network";
  const [ciscoHistory, setCiscoHistory] = useState<string[]>([
    "Cisco IOS Software, 2900 Software (C2900-UNIVERSALK9-M), Version 15.1(4)M4",
    "Technical Support: http://www.cisco.com/techsupport",
    "Copyright (c) 1986-2024 by Cisco Systems, Inc.",
    "",
    "กดพิมพ์คำสั่ง เช่น 'enable', 'show ip int brief', 'configure terminal' หรือ '?'",
    "",
  ]);
  const [ciscoInput, setCiscoInput] = useState("");
  const [ciscoPrompt, setCiscoPrompt] = useState("Router>");
  const [ciscoHostname, setCiscoHostname] = useState("Router");
  const [ciscoMode, setCiscoMode] = useState<"user" | "priv" | "config" | "if">("user");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Resizable & Collapsible Right Panel state
  const [rightPanelWidth, setRightPanelWidth] = useState<number>(50); // percentage: 20 - 85
  const [isPanelCollapsed, setIsPanelCollapsed] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);

    try {
      const savedWidth = localStorage.getItem("it_academy_panel_width");
      if (savedWidth) {
        const val = parseFloat(savedWidth);
        if (!isNaN(val) && val >= 20 && val <= 85) {
          setRightPanelWidth(val);
        }
      }
      const savedCollapsed = localStorage.getItem("it_academy_panel_collapsed");
      if (savedCollapsed === "true") {
        setIsPanelCollapsed(true);
      }
    } catch (e) {}

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsPanelCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("it_academy_panel_collapsed", String(next));
      } catch (e) {}
      return next;
    });
  };

  const setPresetWidth = (width: number) => {
    setIsPanelCollapsed(false);
    setRightPanelWidth(width);
    try {
      localStorage.setItem("it_academy_panel_width", String(width));
      localStorage.setItem("it_academy_panel_collapsed", "false");
    } catch (e) {}
  };

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1024) return;
      const rightWidthPx = windowWidth - e.clientX;
      let newPercent = (rightWidthPx / windowWidth) * 100;

      if (newPercent < 15) {
        setIsPanelCollapsed(true);
        return;
      } else {
        setIsPanelCollapsed(false);
      }

      if (newPercent > 85) newPercent = 85;
      if (newPercent < 20) newPercent = 20;

      setRightPanelWidth(newPercent);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const windowWidth = window.innerWidth;
      if (windowWidth < 1024) return;
      const rightWidthPx = windowWidth - e.touches[0].clientX;
      let newPercent = (rightWidthPx / windowWidth) * 100;
      if (newPercent < 15) {
        setIsPanelCollapsed(true);
        return;
      } else {
        setIsPanelCollapsed(false);
      }
      if (newPercent > 85) newPercent = 85;
      if (newPercent < 20) newPercent = 20;
      setRightPanelWidth(newPercent);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      try {
        localStorage.setItem("it_academy_panel_width", String(rightPanelWidth));
      } catch (e) {}
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, rightPanelWidth]);


  useEffect(() => {
    if (lesson) {
      if (typeof lesson.challenge === "object" && lesson.challenge?.initialCode) {
        setCode(lesson.challenge.initialCode);
      } else if (typeof lesson.challenge === "object" && lesson.challenge?.startingCode) {
        setCode(lesson.challenge.startingCode);
      } else if (typeof lesson.codeExample === "string") {
        setCode(lesson.codeExample);
      } else if (lesson.codeExample?.code) {
        setCode(lesson.codeExample.code);
      }
      setQuizAnswers({});
      setShowQuizResults(false);
      setShowHint(false);

      // Default tab: if lesson has a labGuide and is network/iot, suggest lab or code
      if (lesson.labGuide) {
        setActiveTab("lab");
      } else {
        setActiveTab("code");
      }
    }
  }, [lesson]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ciscoHistory]);

  const renderedContent = useMemo(() => {
    if (!lesson) return null;
    return renderContent(lesson.content, courseId, lessonId);
  }, [lesson?.content, courseId, lessonId]);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-dark-950 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">404</h1>
          <p className="dark:text-gray-400 text-gray-600 mb-8">ไม่พบบทเรียนที่ต้องการ</p>
          <Link href={`/courses/${courseId}`} className="text-primary-500 hover:underline">
            กลับไปหน้าหลักสูตร
          </Link>
        </div>
      </div>
    );
  }

  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  const handleComplete = () => {
    markLessonComplete(courseId, lessonId);

    if (nextLesson) {
      router.push(`/courses/${courseId}/${nextLesson.id}`);
    } else {
      router.push(`/courses/${courseId}`);
    }
  };

  const runCode = () => {
    setIsRunning(true);
    setActiveTab("result");
    setExecutionCount((prev) => prev + 1);
    setTimeout(() => {
      setIsRunning(false);
    }, 350);
  };

  const copyCode = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Cisco CLI command interpreter
  const handleCiscoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = ciscoInput.trim();
    if (!cmd) return;

    const newHistory = [...ciscoHistory, `${ciscoPrompt} ${cmd}`];
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "enable" || lowerCmd === "en") {
      setCiscoMode("priv");
      setCiscoPrompt(`${ciscoHostname}#`);
    } else if (
      lowerCmd === "configure terminal" ||
      lowerCmd === "conf t" ||
      lowerCmd === "config t"
    ) {
      if (ciscoMode === "user") {
        newHistory.push("% Privileged command required. Type 'enable' first.");
      } else {
        setCiscoMode("config");
        setCiscoPrompt(`${ciscoHostname}(config)#`);
      }
    } else if (lowerCmd.startsWith("hostname ")) {
      if (ciscoMode === "config") {
        const name = cmd.split(" ")[1] || "Router";
        setCiscoHostname(name);
        setCiscoPrompt(`${name}(config)#`);
      } else {
        newHistory.push("% Command not allowed in this mode.");
      }
    } else if (
      lowerCmd.startsWith("interface ") ||
      lowerCmd.startsWith("int ")
    ) {
      if (ciscoMode === "config") {
        const ifName = cmd.split(" ")[1] || "g0/0";
        setCiscoMode("if");
        setCiscoPrompt(`${ciscoHostname}(config-if)#`);
        newHistory.push(`% Entered Interface ${ifName} configuration.`);
      } else {
        newHistory.push("% Must be in global configuration mode.");
      }
    } else if (lowerCmd.startsWith("ip address ") || lowerCmd.startsWith("ip addr ")) {
      if (ciscoMode === "if") {
        newHistory.push(`% IP Address assigned to interface.`);
      } else {
        newHistory.push("% Command must be executed in interface mode.");
      }
    } else if (lowerCmd === "no shutdown" || lowerCmd === "no shut") {
      if (ciscoMode === "if") {
        newHistory.push(
          `%LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up`,
          `%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to up`
        );
      } else {
        newHistory.push("% Must be in interface configuration mode.");
      }
    } else if (lowerCmd === "exit") {
      if (ciscoMode === "if") {
        setCiscoMode("config");
        setCiscoPrompt(`${ciscoHostname}(config)#`);
      } else if (ciscoMode === "config") {
        setCiscoMode("priv");
        setCiscoPrompt(`${ciscoHostname}#`);
      } else if (ciscoMode === "priv") {
        setCiscoMode("user");
        setCiscoPrompt(`${ciscoHostname}>`);
      }
    } else if (lowerCmd === "end" || lowerCmd === "disable") {
      setCiscoMode("priv");
      setCiscoPrompt(`${ciscoHostname}#`);
    } else if (
      lowerCmd === "show ip interface brief" ||
      lowerCmd === "sh ip int br" ||
      lowerCmd === "do show ip int br"
    ) {
      newHistory.push(
        "Interface              IP-Address      OK? Method Status                Protocol",
        "GigabitEthernet0/0     192.168.1.1     YES manual up                    up      ",
        "GigabitEthernet0/1     unassigned      YES unset  administratively down down    ",
        "Vlan1                  unassigned      YES unset  administratively down down    "
      );
    } else if (lowerCmd.startsWith("vlan ")) {
      if (ciscoMode === "config") {
        const vlanId = cmd.split(" ")[1];
        newHistory.push(`% Created VLAN ${vlanId} in database.`);
      }
    } else if (lowerCmd.startsWith("ping ")) {
      const target = cmd.split(" ")[1];
      newHistory.push(
        `Type escape sequence to abort.`,
        `Sending 5, 100-byte ICMP Echos to ${target}, timeout is 2 seconds:`,
        `!!!!!`,
        `Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms`
      );
    } else if (lowerCmd === "clear") {
      setCiscoHistory([]);
      setCiscoInput("");
      return;
    } else if (lowerCmd === "?") {
      newHistory.push(
        "Available commands in simulator:",
        "  enable              Enter privileged EXEC mode",
        "  configure terminal  Enter global configuration mode",
        "  hostname <name>     Set system network name",
        "  interface <name>    Select an interface to configure (e.g. g0/0)",
        "  ip address <ip> <mask> Set interface IP address",
        "  no shutdown         Turn on interface",
        "  show ip int brief   Display summary of IP interface status",
        "  vlan <id>           Configure virtual LAN",
        "  ping <ip>           Send ICMP echo request",
        "  exit / end          Exit current configuration mode",
        "  clear               Clear terminal screen"
      );
    } else {
      newHistory.push(
        `% Unknown command or incomplete syntax: "${cmd}". Type '?' for help.`
      );
    }

    setCiscoHistory(newHistory);
    setCiscoInput("");
  };

  const effectiveQuiz = useMemo(() => {
    if (!lesson) return [];
    const list = lesson.quiz || lesson.quizzes || [];
    return list.map((q, idx) => ({
      id: q.id || `${lesson.id}-q${idx + 1}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer ?? q.correctOption ?? 0,
      explanation: q.explanation,
    }));
  }, [lesson]);

  const editorLanguage = useMemo(() => {
    if (typeof lesson?.codeExample === "object" && lesson?.codeExample?.language) {
      if (lesson.codeExample.language === "bash") return "shell";
      return lesson.codeExample.language;
    }
    const map: Record<string, string> = {
      cpp: "cpp",
      python: "python",
      csharp: "csharp",
      php: "php",
      go: "go",
      java: "java",
      typescript: "typescript",
      ruby: "ruby",
      sql: "sql",
      database: "sql",
      kotlin: "kotlin",
      rust: "rust",
      scala: "scala",
      dart: "dart",
      matlab: "matlab",
      shell: "shell",
      webdev: "html",
      gamedev: "javascript",
    };
    return map[courseId] || "javascript";
  }, [lesson, courseId]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 dark:bg-dark-950 overflow-hidden">
      {/* Left Panel: Content (Dynamic Resizable Width) */}
      <div
        style={
          isDesktop
            ? { width: isPanelCollapsed ? "100%" : `${100 - rightPanelWidth}%` }
            : undefined
        }
        className={`w-full flex flex-col h-auto lg:h-screen border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900 z-10 ${
          isDragging ? "" : "transition-[width] duration-150"
        }`}
      >
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 shrink-0 mt-16 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md">
          <Link
            href={`/courses/${courseId}`}
            className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1 text-primary-500" />
            {course.title}
          </Link>
          <div className="flex items-center gap-2">
            {isPanelCollapsed && (
              <button
                onClick={toggleCollapse}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm shadow-primary-600/20"
                title="เปิดหน้าต่างปฏิบัติการ (Code Editor & Lab Guide)"
              >
                <Code className="w-3.5 h-3.5" />
                เปิดหน้าต่างปฏิบัติการ
              </button>
            )}
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                lesson.level === "เริ่มต้น"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
                  : lesson.level === "ปานกลาง"
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400"
                  : "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400"
              }`}
            >
              ระดับ{lesson.level}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              บทที่ {lessonIndex + 1}/{course.lessons.length}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8 hide-scrollbar">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 leading-snug">
              {lesson.title}
            </h1>
            <p className="text-base text-primary-600 dark:text-primary-400 font-medium mb-6">
              {lesson.description}
            </p>

            {/* Markdown Lesson Content */}
            <div className="mb-10 text-slate-700 dark:text-slate-300">
              {renderedContent}
            </div>

            {/* Quiz Section */}
            {effectiveQuiz.length > 0 && (
              <div className="bg-slate-50 dark:bg-dark-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/80 mb-10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  แบบทดสอบตรวจสอบความเข้าใจ
                </h3>
                <div className="space-y-6">
                  {effectiveQuiz.map((q, qIdx) => (
                    <div key={q.id}>
                      <p className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                        {qIdx + 1}. {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = quizAnswers[q.id] === optIdx;
                          const isCorrect = showQuizResults && optIdx === q.correctAnswer;
                          const isWrong =
                            showQuizResults && isSelected && optIdx !== q.correctAnswer;

                          return (
                            <button
                              key={optIdx}
                              onClick={() =>
                                !showQuizResults &&
                                setQuizAnswers((prev) => ({
                                  ...prev,
                                  [q.id]: optIdx,
                                }))
                              }
                              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm font-medium ${
                                isCorrect
                                  ? "border-green-500 bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300"
                                  : isWrong
                                  ? "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300"
                                  : isSelected
                                  ? "border-primary-500 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300"
                                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-900 hover:border-primary-400 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {showQuizResults && (
                        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-dark-700 p-3 rounded-xl">
                          💡 <strong>เฉลย:</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {!showQuizResults && (
                  <button
                    onClick={() => setShowQuizResults(true)}
                    className="mt-6 px-6 py-2.5 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors font-bold text-sm shadow-md shadow-primary-500/20"
                  >
                    ตรวจคำตอบ
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-between shrink-0 bg-white/90 dark:bg-dark-900/90 backdrop-blur-md">
          {prevLesson ? (
            <Link
              href={`/courses/${courseId}/${prevLesson.id}`}
              className="flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              บทก่อนหน้า
            </Link>
          ) : (
            <div></div>
          )}

          <button
            onClick={handleComplete}
            className="flex items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-sm hover:from-primary-500 hover:to-primary-400 transition-all shadow-md shadow-primary-500/20"
          >
            {nextLesson ? "บทเรียนถัดไป" : "จบหลักสูตรนี้"}
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Draggable Vertical Splitter Divider */}
      {!isPanelCollapsed && (
        <div
          onMouseDown={startDragging}
          onTouchStart={startDragging}
          onDoubleClick={() => setPresetWidth(50)}
          className={`hidden lg:flex w-2.5 hover:w-3.5 bg-slate-200 hover:bg-primary-500 dark:bg-slate-800/80 dark:hover:bg-primary-500 cursor-col-resize transition-all items-center justify-center relative select-none z-30 lg:mt-16 shrink-0 ${
            isDragging ? "bg-primary-500 w-3.5 ring-2 ring-primary-400/50" : ""
          }`}
          title="ลากเมาส์ซ้าย-ขวา เพื่อปรับขนาดหน้าต่างตามต้องการ (ดับเบิลคลิกเพื่อคืนค่า 50%)"
        >
          <div className="h-12 w-1 rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-white transition-colors" />
        </div>
      )}

      {/* Right Panel: Interactive Practice & Desktop Lab Window (Dynamic Resizable) */}
      <div
        style={
          isDesktop
            ? { width: isPanelCollapsed ? "0%" : `${rightPanelWidth}%` }
            : undefined
        }
        className={`w-full h-[55vh] lg:h-screen flex flex-col bg-slate-950 lg:mt-16 overflow-hidden ${
          isPanelCollapsed ? "hidden lg:hidden" : "flex"
        } ${isDragging ? "" : "transition-[width] duration-150"}`}
      >
        {/* Practice Navigation Tabs */}
        <div className="flex bg-slate-900 border-b border-slate-800 shrink-0 overflow-x-auto hide-scrollbar">
          {/* Lab Guide Tab (If available) */}
          {lesson.labGuide && (
            <button
              onClick={() => setActiveTab("lab")}
              className={`flex items-center px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === "lab"
                  ? "bg-slate-800 text-primary-300 border-t-2 border-primary-500 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60 border-t-2 border-transparent"
              }`}
            >
              <Wrench className="w-4 h-4 mr-1.5 text-amber-400" />
              ทำบนโปรแกรมจริง ({lesson.labGuide.toolName})
            </button>
          )}

          {/* Cisco CLI Simulator Tab (For Network course) */}
          {isCiscoCourse && (
            <button
              onClick={() => setActiveTab("cisco")}
              className={`flex items-center px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-colors ${
                activeTab === "cisco"
                  ? "bg-slate-800 text-primary-300 border-t-2 border-primary-500 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60 border-t-2 border-transparent"
              }`}
            >
              <Terminal className="w-4 h-4 mr-1.5 text-blue-400" />
              Cisco IOS Terminal
            </button>
          )}

          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === "code"
                ? "bg-slate-800 text-primary-300 border-t-2 border-primary-500 shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-800/60 border-t-2 border-transparent"
            }`}
          >
            <Code className="w-4 h-4 mr-1.5 text-emerald-400" />
            เขียนโค้ดในเว็บ
          </button>

          <button
            onClick={() => setActiveTab("example")}
            className={`flex items-center px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === "example"
                ? "bg-slate-800 text-primary-300 border-t-2 border-primary-500 shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-800/60 border-t-2 border-transparent"
            }`}
          >
            <Terminal className="w-4 h-4 mr-1.5 text-purple-400" />
            โค้ดตัวอย่าง
          </button>

          <button
            onClick={() => setActiveTab("result")}
            className={`flex items-center px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap transition-colors ${
              activeTab === "result"
                ? "bg-slate-800 text-primary-300 border-t-2 border-primary-500 shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-800/60 border-t-2 border-transparent"
            }`}
          >
            <Play className="w-4 h-4 mr-1.5 text-green-400" />
            ผลลัพธ์
          </button>

          {/* Quick Actions & Resize Controls */}
          <div className="ml-auto flex items-center gap-1.5 pr-3">
            <button
              onClick={() => copyCode(code)}
              className="flex items-center px-2 py-1 text-xs text-slate-400 hover:text-white rounded transition-colors"
              title="คัดลอกโค้ด"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={runCode}
              disabled={isRunning}
              className="flex items-center px-3 py-1.5 text-xs font-bold bg-green-600 hover:bg-green-500 active:scale-95 text-white rounded-lg transition-all shadow-sm disabled:opacity-75 cursor-pointer"
            >
              {isRunning ? (
                <>
                  <span className="w-3 h-3 mr-1.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  กำลังรัน...
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 mr-1 fill-white" />
                  รันโค้ด
                </>
              )}
            </button>

            {/* Presets & Expand / Collapse Controls */}
            <div className="hidden lg:flex items-center gap-1 border-l border-slate-800 pl-2 ml-1">
              <button
                onClick={() => setPresetWidth(30)}
                className={`px-1.5 py-0.5 text-[11px] rounded font-medium transition-colors ${
                  Math.round(rightPanelWidth) === 30
                    ? "bg-primary-600 text-white font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
                title="ย่อขนาดเหลือ 30% (เน้นอ่านเนื้อหา)"
              >
                30%
              </button>
              <button
                onClick={() => setPresetWidth(50)}
                className={`px-1.5 py-0.5 text-[11px] rounded font-medium transition-colors ${
                  Math.round(rightPanelWidth) === 50
                    ? "bg-primary-600 text-white font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
                title="ขนาดปกติ 50% (ครึ่งต่อครึ่ง)"
              >
                50%
              </button>
              <button
                onClick={() => setPresetWidth(70)}
                className={`px-1.5 py-0.5 text-[11px] rounded font-medium transition-colors ${
                  Math.round(rightPanelWidth) === 70
                    ? "bg-primary-600 text-white font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
                title="ขยายขนาดเป็น 70% (เน้นทำแล็บและเขียนโค้ด)"
              >
                70%
              </button>
              <button
                onClick={() => setPresetWidth(rightPanelWidth >= 85 ? 50 : 88)}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title={rightPanelWidth >= 85 ? "คืนค่าขนาด 50%" : "ขยายเต็มจอ (88%)"}
              >
                {rightPanelWidth >= 85 ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                onClick={toggleCollapse}
                className="p-1 text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 rounded transition-colors"
                title="ปิด / ซ่อนหน้าต่างนี้ (กดเพื่อปิด)"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="flex-grow relative overflow-hidden bg-slate-950">
          {/* TAB 1: DESKTOP LAB GUIDE (สำหรับโปรแกรมเฉพาะ เช่น Cisco Packet Tracer, Arduino IDE, Burp Suite) */}
          {lesson.labGuide && (
            <div
              className={`absolute inset-0 p-6 overflow-y-auto text-slate-300 font-sans space-y-6 ${
                activeTab === "lab" ? "block" : "hidden"
              }`}
            >
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      🛠️ ห้องแล็บโปรแกรมจริง
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">
                      {lesson.labGuide.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      <strong>โปรแกรมที่ใช้:</strong> {lesson.labGuide.toolName}
                    </p>
                  </div>
                  {lesson.labGuide.downloadUrl && (
                    <a
                      href={lesson.labGuide.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs transition-colors shrink-0 shadow-md"
                    >
                      <Download className="w-3.5 h-3.5 mr-1.5" />
                      เปิดเว็บ {lesson.labGuide.toolName}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    🎯 วัตถุประสงค์การทดลอง
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {lesson.labGuide.objective}
                  </p>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div>
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-400" />
                  ขั้นตอนการปฏิบัติการทีละขั้น (Step-by-Step)
                </h4>
                <div className="space-y-4">
                  {lesson.labGuide.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary-950 text-primary-400 border border-primary-800 text-xs font-bold flex items-center justify-center shrink-0">
                          {sIdx + 1}
                        </span>
                        <h5 className="font-bold text-white text-sm">
                          {step.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-300 pl-8 leading-relaxed">
                        {step.detail}
                      </p>
                      {step.codeOrCommand && (
                        <div className="pl-8 pt-1">
                          <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl font-mono text-xs text-emerald-400 flex justify-between items-center">
                            <code>{step.codeOrCommand}</code>
                            <button
                              onClick={() => copyCode(step.codeOrCommand!)}
                              className="text-slate-400 hover:text-white p-1"
                              title="คัดลอกคำสั่ง"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification */}
              <div className="bg-green-950/30 border border-green-800/60 p-4 rounded-2xl">
                <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  เกณฑ์การตรวจสอบผลลัพธ์ว่าผ่าน (Verification)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lesson.labGuide.verification}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CISCO IOS TERMINAL SIMULATOR (สำหรับ Network) */}
          {isCiscoCourse && (
            <div
              className={`absolute inset-0 flex flex-col bg-black text-green-400 font-mono text-xs md:text-sm ${
                activeTab === "cisco" ? "block" : "hidden"
              }`}
            >
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  Cisco IOS CLI Simulator (Packet Tracer Mode)
                </span>
                <button
                  onClick={() => setCiscoHistory([])}
                  className="hover:text-white flex items-center gap-1 text-[11px]"
                >
                  <RotateCcw className="w-3 h-3" /> ล้างจอ
                </button>
              </div>

              {/* Terminal Logs */}
              <div className="flex-grow p-4 overflow-y-auto space-y-1">
                {ciscoHistory.map((line, lIdx) => (
                  <div key={lIdx} className="whitespace-pre-wrap leading-relaxed">
                    {line}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input Form */}
              <form
                onSubmit={handleCiscoSubmit}
                className="bg-slate-950 border-t border-slate-800 p-3 flex items-center gap-2"
              >
                <span className="text-blue-400 font-bold shrink-0">
                  {ciscoPrompt}
                </span>
                <input
                  type="text"
                  value={ciscoInput}
                  onChange={(e) => setCiscoInput(e.target.value)}
                  placeholder="พิมพ์คำสั่ง Cisco IOS... (พิมพ์ ? เพื่อดูคำสั่งทั้งหมด)"
                  className="bg-transparent border-none outline-none text-green-300 w-full font-mono text-xs md:text-sm"
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* TAB 3: WEB CODE EDITOR (Monaco) */}
          <div
            className={`absolute inset-0 flex flex-col ${
              activeTab === "code" ? "block" : "hidden"
            }`}
          >
            {lesson.challenge && (
              <div className="bg-slate-900 p-4 shrink-0 border-b border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
                      <span className="text-amber-400">🎯 โจทย์ท้าทาย:</span>
                      {typeof lesson.challenge === "object" ? lesson.challenge.title || "ฝึกปฏิบัติจริง" : "ฝึกปฏิบัติจริง"}
                    </h4>
                    <p className="text-slate-400 text-xs">
                      {typeof lesson.challenge === "string" ? lesson.challenge : lesson.challenge.description}
                    </p>
                  </div>
                  {typeof lesson.challenge === "object" && lesson.challenge.hint && (
                    <button
                      onClick={() => setShowHint(!showHint)}
                      className="text-primary-400 hover:text-primary-300 p-1 flex items-center text-xs gap-1 font-semibold"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      คำใบ้
                    </button>
                  )}
                </div>
                {showHint && typeof lesson.challenge === "object" && lesson.challenge.hint && (
                  <div className="mt-2 p-2.5 bg-primary-950/50 border border-primary-800/80 rounded-xl text-xs text-primary-200">
                    <strong>💡 Hint:</strong> {lesson.challenge.hint}
                  </div>
                )}
              </div>
            )}
            <div className="flex-grow relative">
              <MonacoEditor
                language={editorLanguage}
                value={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
                loading={
                  <div className="flex flex-col items-center justify-center h-full bg-slate-950 text-slate-400 font-mono text-sm gap-2">
                    <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                    <span>กำลังโหลด Code Editor...</span>
                  </div>
                }
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: '"JetBrains Mono", monospace',
                  padding: { top: 16 },
                  scrollBeyondLastLine: false,
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
          </div>

          {/* TAB 4: CODE EXAMPLE */}
          <div
            className={`absolute inset-0 p-6 overflow-auto font-mono text-sm ${
              activeTab === "example" ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-slate-400 font-bold uppercase">
                ภาษา: {typeof lesson.codeExample === "object" ? lesson.codeExample?.language : courseId}
              </span>
              <button
                onClick={() =>
                  copyCode(
                    typeof lesson.codeExample === "string"
                      ? lesson.codeExample
                      : lesson.codeExample?.code || ""
                  )
                }
                className="flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300"
              >
                <Copy className="w-3.5 h-3.5" /> คัดลอกโค้ด
              </button>
            </div>
            <pre className="text-slate-200 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 whitespace-pre-wrap">
              {typeof lesson.codeExample === "string"
                ? lesson.codeExample
                : lesson.codeExample?.code || "ไม่มีโค้ดตัวอย่างในบทเรียนนี้"}
            </pre>
            {typeof lesson.codeExample === "object" && lesson.codeExample?.description && (
              <p className="mt-4 text-xs text-slate-400 border-t border-slate-800 pt-3">
                📝 <strong>คำอธิบาย:</strong> {lesson.codeExample.description}
              </p>
            )}
          </div>

          {/* TAB 5: RESULT / PREVIEW */}
          <div
            className={`absolute inset-0 ${
              activeTab === "result" ? "block" : "hidden"
            }`}
          >
            <LessonResultViewer
              courseId={courseId}
              lessonId={lessonId}
              code={code}
              executionCount={executionCount}
              iframeRef={iframeRef}
            />
          </div>
        </div>
      </div>

      <AuthRequiredModal
        isOpen={isAuthChecked && !currentUser}
        courseTitle={course?.title}
        redirectUrl={`/courses/${courseId}/${lessonId}`}
      />

      {/* Floating Restore Button when Panel is Collapsed */}
      {isPanelCollapsed && (
        <button
          onClick={toggleCollapse}
          className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-bold py-4 px-2.5 rounded-l-2xl shadow-2xl flex-col items-center gap-2 border-l border-y border-primary-400/60 group transition-all animate-pulse hover:animate-none"
          title="เปิดหน้าต่างปฏิบัติการ (Code Editor & Lab Guide)"
        >
          <Code className="w-5 h-5 text-primary-200 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold [writing-mode:vertical-rl] tracking-wider py-1 select-none">
            เปิดหน้าต่างปฏิบัติการ
          </span>
          <ChevronLeft className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Fullscreen drag overlay to prevent iframe / Monaco mouse capture */}
      {isDragging && (
        <div className="fixed inset-0 z-50 cursor-col-resize select-none bg-transparent" />
      )}
    </div>
  );
}
