"use client";

import React, { useState } from "react";
import { Maximize2, X, ZoomIn, Info, CheckCircle2 } from "lucide-react";

interface DiagramProps {
  type: string;
  caption?: string;
}

function LessonDiagram({ type, caption }: DiagramProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const renderSvg = () => {
    switch (type) {
      // 1. B-TREE INDEX (DATABASE)
      case "btree":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 380" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <defs>
                <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>
                <linearGradient id="targetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
                </marker>
                <marker id="arrowActive" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
                </marker>
              </defs>

              <rect width="800" height="380" rx="16" fill="url(#bgGrad)" stroke="#334155" strokeWidth="2" />

              <text x="400" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                โครงสร้าง B-Tree Index (การค้นหาข้อมูลแบบ O(log N) ในฐานข้อมูล)
              </text>
              <text x="400" y="52" textAnchor="middle" fill="#94a3b8" fontSize="12">
                ตัวอย่าง: ค้นหานักศึกษาที่มี GPA &gt;= 3.75 ด้วย B-Tree Index
              </text>

              {/* LEVEL 1: ROOT NODE */}
              <g transform="translate(320, 75)">
                <rect width="160" height="50" rx="8" fill="url(#nodeGrad)" stroke="#60a5fa" strokeWidth="1.5" />
                <text x="80" y="22" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Root Node</text>
                <line x1="80" y1="28" x2="80" y2="50" stroke="#93c5fd" strokeWidth="1.5" />
                <text x="40" y="42" textAnchor="middle" fill="#bfdbfe" fontSize="11" fontWeight="bold">&lt; 3.00</text>
                <text x="120" y="42" textAnchor="middle" fill="#bfdbfe" fontSize="11" fontWeight="bold">&gt;= 3.00</text>
              </g>

              {/* CONNECTING LINES TO LEVEL 2 */}
              <line x1="360" y1="125" x2="220" y2="175" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="440" y1="125" x2="580" y2="175" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowActive)" />

              {/* LEVEL 2: INTERNAL NODES */}
              <g transform="translate(140, 175)">
                <rect width="160" height="45" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                <text x="80" y="20" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">Branch Node (ต่ำกว่า 3.00)</text>
                <text x="80" y="37" textAnchor="middle" fill="#94a3b8" fontSize="10">[1.50 | 2.50]</text>
              </g>

              <g transform="translate(500, 175)">
                <rect width="160" height="45" rx="8" fill="url(#targetGrad)" stroke="#fbbf24" strokeWidth="2" />
                <text x="80" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Branch Node (&gt;= 3.00) ✓</text>
                <text x="80" y="37" textAnchor="middle" fill="#fef3c7" fontSize="10">[3.50 | 3.80]</text>
              </g>

              {/* CONNECTING LINES TO LEVEL 3 (LEAF) */}
              <line x1="530" y1="220" x2="430" y2="270" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <line x1="580" y1="220" x2="580" y2="270" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowActive)" />
              <line x1="630" y1="220" x2="710" y2="270" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />

              {/* LEVEL 3: LEAF NODES (Contain Record Pointers) */}
              <g transform="translate(60, 270)">
                <rect width="140" height="50" rx="8" fill="url(#leafGrad)" stroke="#34d399" strokeWidth="1.5" />
                <text x="70" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Leaf: [1.00..1.99]</text>
                <text x="70" y="38" textAnchor="middle" fill="#a7f3d0" fontSize="9">Pointer -&gt; Disk 0x01</text>
              </g>

              <g transform="translate(220, 270)">
                <rect width="140" height="50" rx="8" fill="url(#leafGrad)" stroke="#34d399" strokeWidth="1.5" />
                <text x="70" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Leaf: [2.00..2.99]</text>
                <text x="70" y="38" textAnchor="middle" fill="#a7f3d0" fontSize="9">Pointer -&gt; Disk 0x02</text>
              </g>

              <g transform="translate(370, 270)">
                <rect width="130" height="50" rx="8" fill="url(#leafGrad)" stroke="#34d399" strokeWidth="1.5" />
                <text x="65" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Leaf: [3.00..3.49]</text>
                <text x="65" y="38" textAnchor="middle" fill="#a7f3d0" fontSize="9">Pointer -&gt; Disk 0x03</text>
              </g>

              <g transform="translate(515, 270)">
                <rect width="135" height="50" rx="8" fill="url(#targetGrad)" stroke="#fef08a" strokeWidth="2.5" />
                <text x="67" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">🎯 Leaf: [3.50..3.79]</text>
                <text x="67" y="38" textAnchor="middle" fill="#fffbeb" fontSize="9" fontWeight="bold">Pointer -&gt; Disk 0x04</text>
              </g>

              <g transform="translate(660, 270)">
                <rect width="125" height="50" rx="8" fill="url(#leafGrad)" stroke="#34d399" strokeWidth="1.5" />
                <text x="62" y="20" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Leaf: [3.80..4.00]</text>
                <text x="62" y="38" textAnchor="middle" fill="#a7f3d0" fontSize="9">Pointer -&gt; Disk 0x05</text>
              </g>

              {/* Linked list between leaves */}
              <path d="M 200 295 L 220 295" stroke="#34d399" strokeWidth="2" strokeDasharray="3,3" />
              <path d="M 360 295 L 370 295" stroke="#34d399" strokeWidth="2" strokeDasharray="3,3" />
              <path d="M 500 295 L 515 295" stroke="#34d399" strokeWidth="2" strokeDasharray="3,3" />
              <path d="M 650 295 L 660 295" stroke="#34d399" strokeWidth="2" strokeDasharray="3,3" />

              {/* Footer Stat */}
              <rect x="180" y="338" width="440" height="26" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="400" y="355" textAnchor="middle" fill="#38bdf8" fontSize="11">
                ⚡ เปรียบเทียบ: ข้อมูล 1,000,000 แถว B-Tree อ่านเพียง 3-4 ครั้ง (Full Scan อ่าน 1,000,000 ครั้ง)
              </text>
            </svg>
          </div>
        );

      // 2. OSI 7 LAYERS (NETWORK)
      case "osi":
        const layers = [
          { num: 7, name: "Application (การประยุกต์)", pdu: "Data", proto: "HTTP, HTTPS, DNS, DHCP, SSH", color: "#ec4899" },
          { num: 6, name: "Presentation (การนำเสนอ)", pdu: "Data", proto: "SSL/TLS, JPEG, ASCII, JSON", color: "#d946ef" },
          { num: 5, name: "Session (การควบคุมเซสชัน)", pdu: "Data", proto: "NetBIOS, RPC, Sockets", color: "#a855f7" },
          { num: 4, name: "Transport (การขนส่ง)", pdu: "Segment", proto: "TCP (Reliable), UDP (Fast), Ports", color: "#6366f1" },
          { num: 3, name: "Network (เครือข่าย)", pdu: "Packet", proto: "IPv4, IPv6, ICMP, OSPF, Router", color: "#3b82f6" },
          { num: 2, name: "Data Link (การเชื่อมต่อข้อมูล)", pdu: "Frame", proto: "Ethernet 802.3, MAC Address, Switch", color: "#06b6d4" },
          { num: 1, name: "Physical (กายภาพ)", pdu: "Bits", proto: "สาย UTP Cat6, Fiber Optic, Hub", color: "#10b981" },
        ];

        return (
          <div className="w-full py-2">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg max-w-3xl mx-auto">
              <div className="text-center mb-4">
                <h4 className="text-base font-bold text-white">แบบจำลอง OSI 7 Layers vs TCP/IP Architecture</h4>
                <p className="text-xs text-slate-400 mt-1">โครงสร้างมาตรฐานการสื่อสารระบบเครือข่ายคอมพิวเตอร์ระดับสากล</p>
              </div>

              <div className="space-y-2">
                {layers.map((l) => (
                  <div
                    key={l.num}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border transition-transform hover:scale-[1.01]"
                    style={{ backgroundColor: `${l.color}15`, borderColor: `${l.color}40` }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-lg text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm"
                        style={{ backgroundColor: l.color }}
                      >
                        L{l.num}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">{l.name}</div>
                        <div className="text-xs text-slate-300 font-mono mt-0.5">{l.proto}</div>
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0 flex items-center gap-2">
                      <span className="text-[11px] px-2.5 py-1 rounded-md bg-black/40 text-slate-200 border border-white/10 font-mono">
                        PDU: <strong className="text-amber-400">{l.pdu}</strong>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      // 3. ENTERPRISE CAMPUS NETWORK (NETWORK)
      case "campus-network":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 420" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="420" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                ผังโครงสร้างระบบเครือข่ายวิทยาลัย (Campus Network Topology 3-Tier)
              </text>
              <text x="400" y="52" textAnchor="middle" fill="#94a3b8" fontSize="12">
                Core Layer ➔ Distribution Layer ➔ Access Layer + VLANs
              </text>

              {/* ISP Cloud */}
              <g transform="translate(340, 70)">
                <ellipse cx="60" cy="25" rx="55" ry="22" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,4" />
                <text x="60" y="30" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">🌐 Internet / UniNet</text>
              </g>

              {/* Edge Firewall / Gateway */}
              <line x1="400" y1="95" x2="400" y2="125" stroke="#38bdf8" strokeWidth="2" />
              <g transform="translate(330, 125)">
                <rect width="140" height="40" rx="8" fill="#dc2626" stroke="#f87171" strokeWidth="1.5" />
                <text x="70" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">🔥 Edge Firewall / NAT</text>
              </g>

              {/* Core Switch */}
              <line x1="400" y1="165" x2="400" y2="195" stroke="#ef4444" strokeWidth="2" />
              <g transform="translate(310, 195)">
                <rect width="180" height="45" rx="8" fill="#2563eb" stroke="#60a5fa" strokeWidth="2" />
                <text x="90" y="22" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Core Switch (Cisco 3850)</text>
                <text x="90" y="38" textAnchor="middle" fill="#bfdbfe" fontSize="10">High Speed 10G Backbone</text>
              </g>

              {/* Distribution Layer Links */}
              <line x1="330" y1="240" x2="200" y2="280" stroke="#60a5fa" strokeWidth="2" />
              <line x1="470" y1="240" x2="600" y2="280" stroke="#60a5fa" strokeWidth="2" />

              {/* Distribution Switches */}
              <g transform="translate(110, 280)">
                <rect width="180" height="45" rx="8" fill="#4f46e5" stroke="#818cf8" strokeWidth="1.5" />
                <text x="90" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Dist. Switch: ตึกวิทยบริการ</text>
                <text x="90" y="36" textAnchor="middle" fill="#c7d2fe" fontSize="10">L3 Routing / OSPF</text>
              </g>

              <g transform="translate(510, 280)">
                <rect width="180" height="45" rx="8" fill="#4f46e5" stroke="#818cf8" strokeWidth="1.5" />
                <text x="90" y="20" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">Dist. Switch: ตึกแผนก IT</text>
                <text x="90" y="36" textAnchor="middle" fill="#c7d2fe" fontSize="10">L3 Routing / OSPF</text>
              </g>

              {/* Access Links */}
              <line x1="200" y1="325" x2="140" y2="365" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="200" y1="325" x2="260" y2="365" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="600" y1="325" x2="540" y2="365" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="600" y1="325" x2="660" y2="365" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Access Endpoints */}
              <g transform="translate(70, 365)">
                <rect width="130" height="38" rx="6" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1" />
                <text x="65" y="18" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">VLAN 10: ครู/อาจารย์</text>
                <text x="65" y="32" textAnchor="middle" fill="#99f6e4" fontSize="9">192.168.10.0/24</text>
              </g>

              <g transform="translate(210, 365)">
                <rect width="130" height="38" rx="6" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" />
                <text x="65" y="18" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">VLAN 20: WiFi นักศึกษา</text>
                <text x="65" y="32" textAnchor="middle" fill="#bae6fd" fontSize="9">192.168.20.0/23</text>
              </g>

              <g transform="translate(470, 365)">
                <rect width="130" height="38" rx="6" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />
                <text x="65" y="18" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">VLAN 30: Lab คอมพิวเตอร์</text>
                <text x="65" y="32" textAnchor="middle" fill="#fde68a" fontSize="9">192.168.30.0/24</text>
              </g>

              <g transform="translate(610, 365)">
                <rect width="130" height="38" rx="6" fill="#be185d" stroke="#f472b6" strokeWidth="1" />
                <text x="65" y="18" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">VLAN 99: RMS Server</text>
                <text x="65" y="32" textAnchor="middle" fill="#fbcfe8" fontSize="9">192.168.99.0/24</text>
              </g>
            </svg>
          </div>
        );

      // 4. MQTT IOT ARCHITECTURE (IOT)
      case "mqtt":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 360" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="360" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                สถาปัตยกรรม MQTT สำหรับระบบ Smart Campus IoT
              </text>
              <text x="400" y="52" textAnchor="middle" fill="#94a3b8" fontSize="12">
                Publish / Subscribe Pattern ผ่าน MQTT Broker ความเร็วสูงและใช้ Bandwidth ต่ำ
              </text>

              {/* Publisher (ESP32) */}
              <g transform="translate(60, 110)">
                <rect width="190" height="150" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                <rect x="15" y="15" width="160" height="30" rx="6" fill="#2563eb" />
                <text x="95" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">📡 ESP32 Publisher</text>
                <text x="95" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">DHT22 Temp & Humidity</text>
                <text x="95" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">PIR Motion Sensor</text>
                <rect x="25" y="105" width="140" height="30" rx="6" fill="#0f172a" stroke="#334155" />
                <text x="95" y="125" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">Publish: college/lab/temp</text>
              </g>

              {/* Arrow to Broker */}
              <line x1="250" y1="185" x2="330" y2="185" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
              <text x="290" y="175" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">PUB</text>

              {/* MQTT Broker (Central) */}
              <g transform="translate(330, 95)">
                <rect width="160" height="180" rx="16" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2.5" />
                <rect x="20" y="15" width="120" height="35" rx="8" fill="#4f46e5" />
                <text x="80" y="38" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">☁️ MQTT Broker</text>
                <text x="80" y="75" textAnchor="middle" fill="#c7d2fe" fontSize="10">EMQX / Mosquitto</text>
                <text x="80" y="95" textAnchor="middle" fill="#a5b4fc" fontSize="10">Port 1883 / 8883 (TLS)</text>
                <line x1="20" y1="110" x2="140" y2="110" stroke="#3730a3" strokeWidth="1" />
                <text x="80" y="130" textAnchor="middle" fill="#94a3b8" fontSize="9">Topic Filtering:</text>
                <text x="80" y="150" textAnchor="middle" fill="#fde047" fontSize="10" fontFamily="monospace">college/+/telemetry</text>
                <text x="80" y="165" textAnchor="middle" fill="#4ade80" fontSize="9">QoS 0, 1, 2 Supported</text>
              </g>

              {/* Arrow from Broker to Subscribers */}
              <line x1="490" y1="150" x2="570" y2="130" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="530" y="130" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">SUB</text>

              <line x1="490" y1="210" x2="570" y2="230" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="530" y="235" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">SUB</text>

              {/* Subscribers */}
              <g transform="translate(570, 85)">
                <rect width="170" height="90" rx="10" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
                <text x="85" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">📊 Web Dashboard</text>
                <text x="85" y="45" textAnchor="middle" fill="#a7f3d0" fontSize="10">Next.js WebSockets</text>
                <text x="85" y="65" textAnchor="middle" fill="#d1fae5" fontSize="9">แสดงกราฟอุณหภูมิห้องเซิร์ฟเวอร์</text>
              </g>

              <g transform="translate(570, 195)">
                <rect width="170" height="90" rx="10" fill="#78350f" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="85" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">📱 Mobile Application</text>
                <text x="85" y="45" textAnchor="middle" fill="#fef08a" fontSize="10">Flutter Push Notification</text>
                <text x="85" y="65" textAnchor="middle" fill="#fef3c7" fontSize="9">แจ้งเตือนไฟไหม้/อุณหภูมิเกิน</text>
              </g>

              <rect x="180" y="315" width="440" height="26" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="400" y="332" textAnchor="middle" fill="#38bdf8" fontSize="11">
                💡 ข้อดี: ใช้ทรัพยากรน้อยมาก แพ็กเกจขนาดเล็กเพียง 2 ไบต์ เหมาะกับบอร์ด ESP32 ที่ใช้แบตเตอรี่
              </text>
            </svg>
          </div>
        );

      // 5. ESP32 PINOUT & WIRING (IOT)
      case "esp32-pinout":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 380" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="380" rx="16" fill="#090d16" stroke="#334155" strokeWidth="2" />
              <text x="400" y="30" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                แผนผังการต่อวงจร ESP32 DevKit V1 กับเซนเซอร์ DHT22 และ Relay Module
              </text>
              <text x="400" y="48" textAnchor="middle" fill="#94a3b8" fontSize="12">
                GPIO Pinout, 3.3V Power Supply, Ground และ Pull-up Resistor 10kΩ
              </text>

              {/* ESP32 Board Graphic */}
              <g transform="translate(280, 80)">
                <rect width="240" height="220" rx="12" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                {/* Chip Metal Shield */}
                <rect x="50" y="30" width="140" height="100" rx="6" fill="#64748b" stroke="#94a3b8" strokeWidth="1" />
                <text x="120" y="80" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="bold">ESP-WROOM-32</text>
                <text x="120" y="100" textAnchor="middle" fill="#1e293b" fontSize="10">WiFi + Bluetooth BLE</text>
                {/* MicroUSB Port */}
                <rect x="95" y="200" width="50" height="20" rx="3" fill="#334155" />
                <text x="120" y="215" textAnchor="middle" fill="#94a3b8" fontSize="9">USB</text>

                {/* Left Pins */}
                <text x="10" y="40" fill="#ef4444" fontSize="9" fontWeight="bold">3V3</text>
                <text x="10" y="60" fill="#94a3b8" fontSize="9">EN</text>
                <text x="10" y="80" fill="#94a3b8" fontSize="9">VP</text>
                <text x="10" y="100" fill="#94a3b8" fontSize="9">VN</text>
                <text x="10" y="120" fill="#3b82f6" fontSize="9" fontWeight="bold">D4 (GPIO4)</text>
                <text x="10" y="140" fill="#94a3b8" fontSize="9">D16</text>
                <text x="10" y="160" fill="#94a3b8" fontSize="9">D17</text>
                <text x="10" y="180" fill="#64748b" fontSize="9" fontWeight="bold">GND</text>

                {/* Right Pins */}
                <text x="195" y="40" fill="#64748b" fontSize="9" fontWeight="bold">GND</text>
                <text x="195" y="60" fill="#3b82f6" fontSize="9" fontWeight="bold">D23 (GPIO23)</text>
                <text x="195" y="80" fill="#94a3b8" fontSize="9">D22 (SCL)</text>
                <text x="195" y="100" fill="#94a3b8" fontSize="9">D21 (SDA)</text>
                <text x="195" y="120" fill="#94a3b8" fontSize="9">TX0</text>
                <text x="195" y="140" fill="#94a3b8" fontSize="9">RX0</text>
                <text x="195" y="160" fill="#ef4444" fontSize="9" fontWeight="bold">VIN (5V)</text>
              </g>

              {/* Sensor 1: DHT22 (Left) */}
              <g transform="translate(60, 110)">
                <rect width="140" height="150" rx="8" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <rect x="25" y="20" width="90" height="50" rx="4" fill="#0369a1" stroke="#bae6fd" />
                <text x="70" y="45" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">DHT22 Sensor</text>
                <text x="70" y="60" textAnchor="middle" fill="#e0f2fe" fontSize="9">Temp & Humidity</text>
                <text x="70" y="100" textAnchor="middle" fill="#ffffff" fontSize="10">Pin 1: VCC (3.3V)</text>
                <text x="70" y="118" textAnchor="middle" fill="#fde047" fontSize="10">Pin 2: DATA ➔ D4</text>
                <text x="70" y="136" textAnchor="middle" fill="#ffffff" fontSize="10">Pin 4: GND</text>
              </g>

              {/* Wire: DHT22 DATA to GPIO 4 */}
              <path d="M 200 228 L 240 228 L 240 200 L 280 200" stroke="#facc15" strokeWidth="2" fill="none" />
              {/* Wire: 3V3 to DHT22 VCC */}
              <path d="M 280 120 L 250 120 L 250 190 L 200 190" stroke="#ef4444" strokeWidth="2" fill="none" />
              {/* Wire: GND */}
              <path d="M 280 260 L 230 260 L 230 246 L 200 246" stroke="#475569" strokeWidth="2" fill="none" />

              {/* Actuator 2: Relay Module 5V (Right) */}
              <g transform="translate(600, 110)">
                <rect width="140" height="150" rx="8" fill="#15803d" stroke="#4ade80" strokeWidth="2" />
                <rect x="20" y="20" width="100" height="45" rx="4" fill="#166534" stroke="#86efac" />
                <text x="70" y="45" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Relay Module</text>
                <text x="70" y="58" textAnchor="middle" fill="#dcfce7" fontSize="9">ควบคุมพัดลม / ปั๊มน้ำ</text>
                <text x="70" y="98" textAnchor="middle" fill="#ffffff" fontSize="10">VCC ➔ 5V (VIN)</text>
                <text x="70" y="116" textAnchor="middle" fill="#38bdf8" fontSize="10">IN ➔ GPIO 23</text>
                <text x="70" y="134" textAnchor="middle" fill="#ffffff" fontSize="10">GND ➔ GND</text>
              </g>

              {/* Wire: GPIO 23 to Relay IN */}
              <path d="M 520 140 L 560 140 L 560 226 L 600 226" stroke="#38bdf8" strokeWidth="2" fill="none" />
              {/* Wire: VIN to Relay VCC */}
              <path d="M 520 240 L 580 240 L 580 208 L 600 208" stroke="#dc2626" strokeWidth="2" fill="none" />

              <rect x="160" y="325" width="480" height="28" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="400" y="343" textAnchor="middle" fill="#4ade80" fontSize="11">
                ✓ คำแนะนำ: เซนเซอร์ DHT22 ต้องต่อ Pull-up Resistor 10kΩ ระหว่างขา VCC และ DATA เพื่อสัญญาณเสถียร
              </text>
            </svg>
          </div>
        );

      // 6. CIA TRIAD (CYBERSECURITY)
      case "cia":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 360" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="360" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="32" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                สามเหลี่ยมความมั่นคงปลอดภัยไซเบอร์ (The CIA Triad)
              </text>
              <text x="400" y="52" textAnchor="middle" fill="#94a3b8" fontSize="12">
                เสาหลัก 3 ประการในการรักษาความปลอดภัยของข้อมูลและระบบสารสนเทศ
              </text>

              {/* Pillar 1: Confidentiality */}
              <g transform="translate(60, 90)">
                <rect width="200" height="210" rx="12" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
                <rect x="20" y="20" width="160" height="40" rx="8" fill="#4f46e5" />
                <text x="100" y="45" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">🔒 Confidentiality</text>
                <text x="100" y="85" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontWeight="bold">การรักษาความลับ</text>
                <text x="100" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">ข้อมูลเข้าถึงได้เฉพาะ</text>
                <text x="100" y="132" textAnchor="middle" fill="#94a3b8" fontSize="10">ผู้มีสิทธิ์เท่านั้น</text>
                <rect x="20" y="150" width="160" height="45" rx="6" fill="#0f172a" stroke="#3730a3" />
                <text x="100" y="170" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="bold">กลไกป้องกัน:</text>
                <text x="100" y="185" textAnchor="middle" fill="#a5b4fc" fontSize="9">AES-256, TLS/SSL, MFA, ACL</text>
              </g>

              {/* Pillar 2: Integrity */}
              <g transform="translate(300, 90)">
                <rect width="200" height="210" rx="12" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
                <rect x="20" y="20" width="160" height="40" rx="8" fill="#059669" />
                <text x="100" y="45" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">🛡️ Integrity</text>
                <text x="100" y="85" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold">ความถูกต้องครบถ้วน</text>
                <text x="100" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">ข้อมูลต้องไม่ถูกแก้ไขหรือ</text>
                <text x="100" y="132" textAnchor="middle" fill="#94a3b8" fontSize="10">ปลอมแปลงโดยมิชอบ</text>
                <rect x="20" y="150" width="160" height="45" rx="6" fill="#0f172a" stroke="#065f46" />
                <text x="100" y="170" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">กลไกป้องกัน:</text>
                <text x="100" y="185" textAnchor="middle" fill="#6ee7b7" fontSize="9">SHA-256 Hashing, Digital Sig</text>
              </g>

              {/* Pillar 3: Availability */}
              <g transform="translate(540, 90)">
                <rect width="200" height="210" rx="12" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
                <rect x="20" y="20" width="160" height="40" rx="8" fill="#d97706" />
                <text x="100" y="45" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">⚡ Availability</text>
                <text x="100" y="85" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">ความพร้อมใช้งาน</text>
                <text x="100" y="115" textAnchor="middle" fill="#94a3b8" fontSize="10">ระบบต้องพร้อมให้บริการ</text>
                <text x="100" y="132" textAnchor="middle" fill="#94a3b8" fontSize="10">ตลอด 24/7 ไม่ล่ม</text>
                <rect x="20" y="150" width="160" height="45" rx="6" fill="#0f172a" stroke="#78350f" />
                <text x="100" y="170" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">กลไกป้องกัน:</text>
                <text x="100" y="185" textAnchor="middle" fill="#fde68a" fontSize="9">DDoS Defense, Backup, RAID</text>
              </g>

              <rect x="180" y="318" width="440" height="24" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="400" y="334" textAnchor="middle" fill="#38bdf8" fontSize="11">
                🔒 หากด้านใดด้านหนึ่งบกพร่อง ความปลอดภัยขององค์กรจะตกอยู่ในความเสี่ยงทันที
              </text>
            </svg>
          </div>
        );

      // 7. SQL INJECTION (CYBERSECURITY)
      case "sqli":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 370" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="370" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="30" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                กลไกการโจมตี SQL Injection และวิธีป้องกันด้วย Prepared Statements
              </text>
              <text x="400" y="48" textAnchor="middle" fill="#94a3b8" fontSize="12">
                เปรียบเทียบระหว่าง Vulnerable String Concatenation กับ Parametrized Query
              </text>

              {/* Vulnerable Flow */}
              <g transform="translate(50, 75)">
                <rect width="330" height="235" rx="10" fill="#450a0a" stroke="#dc2626" strokeWidth="2" />
                <rect x="15" y="15" width="300" height="30" rx="6" fill="#b91c1c" />
                <text x="165" y="35" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">❌ โค้ดที่อันตราย (Vulnerable Code)</text>

                <text x="25" y="70" fill="#fca5a5" fontSize="10">1. ผู้ใช้กรอกในช่อง Username:</text>
                <rect x="25" y="80" width="280" height="30" rx="4" fill="#18181b" stroke="#7f1d1d" />
                <text x="35" y="100" fill="#f87171" fontSize="11" fontFamily="monospace">admin&apos; OR &apos;1&apos;=&apos;1</text>

                <text x="25" y="130" fill="#fca5a5" fontSize="10">2. คำสั่ง SQL ที่เซิร์ฟเวอร์นำไปรัน (Syntax โดนแก้):</text>
                <rect x="25" y="140" width="280" height="45" rx="4" fill="#18181b" stroke="#7f1d1d" />
                <text x="35" y="158" fill="#fca5a5" fontSize="9" fontFamily="monospace">SELECT * FROM users WHERE user=</text>
                <text x="35" y="174" fill="#f87171" fontSize="10" fontFamily="monospace" fontWeight="bold">&apos;admin&apos; OR &apos;1&apos;=&apos;1&apos;;</text>

                <rect x="25" y="195" width="280" height="25" rx="4" fill="#7f1d1d" />
                <text x="165" y="212" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">💀 ผลลัพธ์: ล็อกอินผ่านโดยไม่ต้องรู้รหัสผ่าน!</text>
              </g>

              {/* Secure Flow */}
              <g transform="translate(420, 75)">
                <rect width="330" height="235" rx="10" fill="#052e16" stroke="#16a34a" strokeWidth="2" />
                <rect x="15" y="15" width="300" height="30" rx="6" fill="#15803d" />
                <text x="165" y="35" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">✓ โค้ดที่ปลอดภัย (Prepared Statement)</text>

                <text x="25" y="70" fill="#86efac" fontSize="10">1. ใช้ Parameterized Placeholders (?):</text>
                <rect x="25" y="80" width="280" height="30" rx="4" fill="#18181b" stroke="#14532d" />
                <text x="35" y="100" fill="#4ade80" fontSize="10" fontFamily="monospace">SELECT * FROM users WHERE user = ?</text>

                <text x="25" y="130" fill="#86efac" fontSize="10">2. ฐานข้อมูลตีความค่า Input เป็นเพียง Literal String:</text>
                <rect x="25" y="140" width="280" height="45" rx="4" fill="#18181b" stroke="#14532d" />
                <text x="35" y="158" fill="#a7f3d0" fontSize="9" fontFamily="monospace">Database Compiler treats input as:</text>
                <text x="35" y="174" fill="#34d399" fontSize="9" fontFamily="monospace">&quot;admin&apos; OR &apos;1&apos;=&apos;1&quot; (Raw data only)</text>

                <rect x="25" y="195" width="280" height="25" rx="4" fill="#14532d" />
                <text x="165" y="212" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">🛡️ ผลลัพธ์: ปลอดภัย 100% Syntax ไม่ถูกเจาะ</text>
              </g>

              <rect x="180" y="325" width="440" height="26" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="400" y="342" textAnchor="middle" fill="#38bdf8" fontSize="11">
                ⭐ กฎเหล็ก: ห้ามนำ String จากผู้ใช้มา Concatenate (+) ใส่ SQL Query เด็ดขาด
              </text>
            </svg>
          </div>
        );

      // 8. ENTITY RELATIONSHIP DIAGRAM (DATABASE RMS)
      case "er":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 370" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="370" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="30" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                แผนภาพความสัมพันธ์ข้อมูล (ER Diagram - Student RMS)
              </text>
              <text x="400" y="48" textAnchor="middle" fill="#94a3b8" fontSize="12">
                ระบบจัดการข้อมูลนักศึกษา ผลการเรียน และการลงทะเบียน (1:N Relationships)
              </text>

              {/* Table 1: Students */}
              <g transform="translate(60, 90)">
                <rect width="190" height="200" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                <rect width="190" height="35" rx="8" fill="#2563eb" />
                <text x="95" y="22" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">📊 students</text>
                <text x="15" y="55" fill="#facc15" fontSize="11" fontWeight="bold">🔑 student_id (PK)</text>
                <text x="15" y="78" fill="#cbd5e1" fontSize="10">first_name VARCHAR(100)</text>
                <text x="15" y="98" fill="#cbd5e1" fontSize="10">last_name VARCHAR(100)</text>
                <text x="15" y="118" fill="#60a5fa" fontSize="10">dept_id (FK) INT</text>
                <text x="15" y="138" fill="#cbd5e1" fontSize="10">gpa DECIMAL(3,2)</text>
                <text x="15" y="158" fill="#cbd5e1" fontSize="10">status ENUM(&apos;normal&apos;)</text>
                <text x="15" y="178" fill="#94a3b8" fontSize="9">created_at TIMESTAMP</text>
              </g>

              {/* Table 2: Enrollments (Junction Table) */}
              <g transform="translate(310, 90)">
                <rect width="180" height="180" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
                <rect width="180" height="35" rx="8" fill="#7c3aed" />
                <text x="90" y="22" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">📝 enrollments</text>
                <text x="15" y="55" fill="#facc15" fontSize="11" fontWeight="bold">🔑 enrollment_id (PK)</text>
                <text x="15" y="78" fill="#60a5fa" fontSize="10">student_id (FK) INT</text>
                <text x="15" y="98" fill="#34d399" fontSize="10">course_id (FK) INT</text>
                <text x="15" y="118" fill="#cbd5e1" fontSize="10">semester VARCHAR(10)</text>
                <text x="15" y="138" fill="#cbd5e1" fontSize="10">grade VARCHAR(2)</text>
                <text x="15" y="158" fill="#94a3b8" fontSize="9">registered_at DATE</text>
              </g>

              {/* Table 3: Courses */}
              <g transform="translate(550, 90)">
                <rect width="190" height="180" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                <rect width="190" height="35" rx="8" fill="#059669" />
                <text x="95" y="22" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">📚 courses</text>
                <text x="15" y="55" fill="#facc15" fontSize="11" fontWeight="bold">🔑 course_id (PK)</text>
                <text x="15" y="78" fill="#cbd5e1" fontSize="10">course_code VARCHAR(10)</text>
                <text x="15" y="98" fill="#cbd5e1" fontSize="10">title VARCHAR(200)</text>
                <text x="15" y="118" fill="#cbd5e1" fontSize="10">credits INT</text>
                <text x="15" y="138" fill="#cbd5e1" fontSize="10">category VARCHAR(50)</text>
                <text x="15" y="158" fill="#94a3b8" fontSize="9">syllabus_url TEXT</text>
              </g>

              {/* Connectors */}
              <line x1="250" y1="140" x2="310" y2="140" stroke="#60a5fa" strokeWidth="2.5" />
              <circle cx="250" cy="140" r="4" fill="#60a5fa" />
              <text x="280" y="132" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">1 : N</text>

              <line x1="490" y1="140" x2="550" y2="140" stroke="#34d399" strokeWidth="2.5" />
              <circle cx="550" cy="140" r="4" fill="#34d399" />
              <text x="520" y="132" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">N : 1</text>

              <rect x="180" y="315" width="440" height="26" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="400" y="332" textAnchor="middle" fill="#38bdf8" fontSize="11">
                💡 Foreign Key (FK) ช่วยรักษาความถูกต้องของข้อมูล (Referential Integrity) ไม่ให้มีข้อมูลลอย
              </text>
            </svg>
          </div>
        );

      // 9. FLUTTER WIDGET TREE (MOBILE)
      case "flutter":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 360" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="360" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="30" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                โครงสร้าง Flutter Widget Tree Architecture (&quot;Everything is a Widget&quot;)
              </text>
              <text x="400" y="48" textAnchor="middle" fill="#94a3b8" fontSize="12">
                การซ้อนทับแบบลำดับชั้น (Hierarchical Composition) เพื่อสร้าง UI บนมือถือ iOS และ Android
              </text>

              {/* Root MaterialApp */}
              <g transform="translate(320, 75)">
                <rect width="160" height="40" rx="8" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <text x="80" y="25" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">MaterialApp</text>
              </g>

              {/* Scaffold */}
              <line x1="400" y1="115" x2="400" y2="145" stroke="#38bdf8" strokeWidth="2" />
              <g transform="translate(320, 145)">
                <rect width="160" height="40" rx="8" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
                <text x="80" y="25" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Scaffold</text>
              </g>

              {/* Branch to AppBar and Body */}
              <line x1="360" y1="185" x2="220" y2="215" stroke="#94a3b8" strokeWidth="2" />
              <line x1="440" y1="185" x2="580" y2="215" stroke="#94a3b8" strokeWidth="2" />

              {/* AppBar */}
              <g transform="translate(140, 215)">
                <rect width="160" height="40" rx="8" fill="#4338ca" stroke="#818cf8" strokeWidth="1.5" />
                <text x="80" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">AppBar (title: Text)</text>
              </g>

              {/* Body: Column */}
              <g transform="translate(500, 215)">
                <rect width="160" height="40" rx="8" fill="#4338ca" stroke="#818cf8" strokeWidth="1.5" />
                <text x="80" y="25" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">body: Column</text>
              </g>

              {/* Children of Column */}
              <line x1="530" y1="255" x2="440" y2="285" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="580" y1="255" x2="580" y2="285" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="630" y1="255" x2="710" y2="285" stroke="#94a3b8" strokeWidth="1.5" />

              <g transform="translate(370, 285)">
                <rect width="130" height="35" rx="6" fill="#15803d" stroke="#4ade80" strokeWidth="1" />
                <text x="65" y="22" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">Card (Profile)</text>
              </g>

              <g transform="translate(515, 285)">
                <rect width="130" height="35" rx="6" fill="#15803d" stroke="#4ade80" strokeWidth="1" />
                <text x="65" y="22" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">ListView.builder</text>
              </g>

              <g transform="translate(660, 285)">
                <rect width="120" height="35" rx="6" fill="#b45309" stroke="#fbbf24" strokeWidth="1" />
                <text x="60" y="22" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">ElevatedButton</text>
              </g>

              <text x="400" y="342" textAnchor="middle" fill="#38bdf8" fontSize="11">
                ⭐ เมื่อ State มีการเปลี่ยนแปลง Flutter จะทำการ Rebuild เฉพาะ Sub-tree ที่จำเป็นด้วย Diffing Algorithm
              </text>
            </svg>
          </div>
        );

      // 10. GAME LOOP 60FPS (GAMEDEV)
      case "gameloop":
        return (
          <div className="w-full overflow-x-auto py-2">
            <svg viewBox="0 0 800 350" className="w-full max-w-3xl mx-auto drop-shadow-md">
              <rect width="800" height="350" rx="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <text x="400" y="30" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">
                วงรอบการทำงานของเกมเอนจิน (60 FPS Game Loop Engine)
              </text>
              <text x="400" y="48" textAnchor="middle" fill="#94a3b8" fontSize="12">
                1 Frame ทำงานภายใน 16.6 Milliseconds (Input ➔ Physics ➔ Collision ➔ Render)
              </text>

              {/* Loop Step 1: Input */}
              <g transform="translate(60, 110)">
                <rect width="150" height="120" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <rect x="15" y="15" width="120" height="30" rx="6" fill="#0284c7" />
                <text x="75" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">🎮 1. User Input</text>
                <text x="75" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">Keyboard, Mouse,</text>
                <text x="75" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">Gamepad, Touch</text>
                <text x="75" y="105" textAnchor="middle" fill="#38bdf8" fontSize="9">keys[&apos;Space&apos;] = true</text>
              </g>

              {/* Step 2: Update Physics */}
              <line x1="210" y1="170" x2="250" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <g transform="translate(250, 110)">
                <rect width="150" height="120" rx="12" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
                <rect x="15" y="15" width="120" height="30" rx="6" fill="#4f46e5" />
                <text x="75" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">⚡ 2. Update Physics</text>
                <text x="75" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">Velocity, Gravity,</text>
                <text x="75" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">AI Patrolling, State</text>
                <text x="75" y="105" textAnchor="middle" fill="#818cf8" fontSize="9">vy += gravity * dt</text>
              </g>

              {/* Step 3: Collision */}
              <line x1="400" y1="170" x2="440" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <g transform="translate(440, 110)">
                <rect width="150" height="120" rx="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                <rect x="15" y="15" width="120" height="30" rx="6" fill="#d97706" />
                <text x="75" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">💥 3. Collisions</text>
                <text x="75" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">AABB Bounding Box,</text>
                <text x="75" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">Tilemap Collision</text>
                <text x="75" y="105" textAnchor="middle" fill="#fbbf24" fontSize="9">checkHit(player, enemy)</text>
              </g>

              {/* Step 4: Render */}
              <line x1="590" y1="170" x2="630" y2="170" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <g transform="translate(630, 110)">
                <rect width="140" height="120" rx="12" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                <rect x="15" y="15" width="110" height="30" rx="6" fill="#059669" />
                <text x="70" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">🎨 4. Render</text>
                <text x="70" y="70" textAnchor="middle" fill="#94a3b8" fontSize="10">ctx.clearRect(),</text>
                <text x="70" y="88" textAnchor="middle" fill="#94a3b8" fontSize="10">Sprite Batching</text>
                <text x="70" y="105" textAnchor="middle" fill="#34d399" fontSize="9">Draw Canvas 60 FPS</text>
              </g>

              {/* Return arrow */}
              <path d="M 700 230 L 700 270 L 135 270 L 135 230" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow)" />
              <text x="400" y="265" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                requestAnimationFrame(gameLoop) ➔ ทำงานซ้ำทุกๆ 16.6ms
              </text>

              <rect x="180" y="305" width="440" height="26" rx="6" fill="#0f172a" stroke="#334155" />
              <text x="400" y="322" textAnchor="middle" fill="#e2e8f0" fontSize="11">
                ⏱️ Delta Time (dt): ช่วยให้การเคลื่อนที่ของตัวละครคงที่แม้เครื่องช้าหรือเร็ว
              </text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  const svgContent = renderSvg();
  if (!svgContent) return null;

  return (
    <div className="my-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900/60 p-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            🖼️ ภาพประกอบเนื้อหาการสอน (Interactive Diagram)
          </span>
        </div>
        <button
          onClick={() => setIsFullscreen(true)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-950/40 border border-blue-800/60 transition-colors cursor-pointer"
          title="ขยายภาพเต็มจอ"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>ขยายเต็มจอ</span>
        </button>
      </div>

      {/* Embedded View */}
      {svgContent}

      {caption && (
        <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-start gap-2 text-xs text-slate-400">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <span>{caption}</span>
        </div>
      )}

      {/* Fullscreen Modal View */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col p-4 md:p-8 animate-in fade-in duration-200">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div className="text-white font-bold text-sm md:text-base flex items-center gap-2">
              <ZoomIn className="w-5 h-5 text-blue-400" />
              ภาพประกอบการสอนความละเอียดสูง (High Resolution Diagram)
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-grow flex items-center justify-center overflow-auto p-4">
            <div className="w-full max-w-5xl">
              {renderSvg()}
            </div>
          </div>
          {caption && (
            <div className="text-center text-xs text-slate-400 pt-3 border-t border-slate-800">
              {caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default React.memo(LessonDiagram);
