import { Course } from "../types";

export const iotCourse: Course = {
  id: "iot",
  title: "Internet of Things (IoT)",
  description: "เรียนรู้ระบบสมองกลฝังตัว Arduino, ESP32, Raspberry Pi และสร้างระบบ Smart Home & AI on Edge",
  longDescription: "หลักสูตร IoT ที่เข้มข้นที่สุด ครอบคลุมตั้งแต่วงจรอิเล็กทรอนิกส์พื้นฐาน การเขียนโปรแกรมบอร์ด Arduino UNO, การเชื่อมต่อไร้สาย WiFi/Bluetooth บน ESP32, การใช้บอร์ดคอมพิวเตอร์ขนาดจิ๋ว Raspberry Pi พร้อม Linux และ Python, ตลอดจนโปรโตคอลระดับอุตสาหกรรมอย่าง MQTT และการออกแบบระบบ Smart Home อัจฉริยะ",
  icon: "🌐",
  color: "green",
  gradient: "from-green-500 to-emerald-600",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["IoT", "Arduino", "ESP32", "Raspberry Pi", "MicroPython", "MQTT", "Smart Home"],
  recommendedTools: [
    {
      name: "Arduino IDE 2.x",
      icon: "⚡",
      badge: "Industry Standard",
      description: "โปรแกรมเขียนโค้ดและอัปโหลดโปรแกรมลงบอร์ด Arduino, ESP8266 และ ESP32 มีระบบ Auto-complete และ Serial Plotter กราฟ",
      downloadUrl: "https://www.arduino.cc/en/software",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง Arduino IDE 2.x\n2. เปิด File > Preferences เพิ่ม Board Manager URL ของ ESP32\n3. ติดตั้ง ESP32 Board package ผ่าน Boards Manager\n4. เสียบสาย USB เลือกรุ่นบอร์ดและพอร์ต COM ให้ตรง"
    },
    {
      name: "Thonny IDE",
      icon: "🐍",
      badge: "แนะนำสำหรับ Python",
      description: "IDE ขนาดกะทัดรัด เหมาะอย่างยิ่งสำหรับการเขียน MicroPython ลงบน ESP32 และ Raspberry Pi Pico",
      downloadUrl: "https://thonny.org/",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Thonny IDE\n2. ไปที่ Tools > Options > Interpreter\n3. เลือก MicroPython (ESP32) และเลือก COM Port\n4. เขียนโค้ด Python และกดปุ่ม Run ได้ทันที"
    },
    {
      name: "Raspberry Pi Imager",
      icon: "🍓",
      badge: "Official Tool",
      description: "โปรแกรมเขียนระบบปฏิบัติการ Raspberry Pi OS ลงบน MicroSD Card อย่างง่ายดาย พร้อมตั้งค่า WiFi และ SSH ล่วงหน้า",
      downloadUrl: "https://www.raspberrypi.com/software/",
      setupGuide: "1. ติดตั้ง Raspberry Pi Imager\n2. เลือกบอร์ด (เช่น Raspberry Pi 4 หรือ 5)\n3. เลือกระบบปฏิบัติการ Raspberry Pi OS (64-bit)\n4. กดปุ่มเฟืองเพื่อเปิด SSH และตั้งรหัสผ่านล่วงหน้า แล้วกด Write ลงการ์ด"
    },
    {
      name: "Wokwi Simulator",
      icon: "🧪",
      badge: "Online Simulator",
      description: "โปรแกรมจำลองวงจรและโค้ด Arduino, ESP32, เซนเซอร์ต่างๆ บนเว็บเบราว์เซอร์ ใช้งานได้ฟรีโดยไม่ต้องมีอุปกรณ์จริง",
      downloadUrl: "https://wokwi.com/",
      setupGuide: "1. เข้าเว็บไซต์ wokwi.com\n2. เลือกบอร์ด ESP32 หรือ Arduino UNO\n3. ลากวางเซนเซอร์ หลอดไฟ จอแสดงผล และต่อสายไฟได้ทันที\n4. เขียนโค้ดและกดปุ่ม Play เพื่อทดสอบการทำงาน"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "iot-1",
      title: "พื้นฐาน IoT และวงจรอิเล็กทรอนิกส์สำหรับนักพัฒนา",
      description: "ทำความเข้าใจสถาปัตยกรรม IoT กฎของโอห์ม สัญญาณ Digital vs Analog และการอ่านค่าไฟฟ้า",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# พื้นฐาน Internet of Things (IoT) และวงจรอิเล็กทรอนิกส์

Internet of Things (IoT) คือโครงข่ายการสื่อสารที่เชื่อมโยงอุปกรณ์กายภาพ (Physical Devices) เข้ากับโลกอินเทอร์เน็ต เพื่อให้สามารถเก็บรวบรวมข้อมูล วิเคราะห์ ประมวลผล และสั่งการอัตโนมัติได้แบบเรียลไทม์

## สถาปัตยกรรม 4 เลเยอร์ของระบบ IoT (4-Tier Architecture)
1. **Perception Layer (เลเยอร์การรับรู้):** เซนเซอร์ (Sensors) เช่น วัดอุณหภูมิ แสง ความชื้น และแอคทูเอเตอร์ (Actuators) เช่น รีเลย์ มอเตอร์
2. **Network Layer (เลเยอร์เครือข่าย):** การส่งข้อมูลผ่าน Wi-Fi, Bluetooth BLE, LoRaWAN, Zigbee, หรือ 4G/5G
3. **Middleware / Processing Layer (เลเยอร์ประมวลผล):** IoT Broker (MQTT), Edge Computing, หรือ Cloud Platform
4. **Application Layer (เลเยอร์ประยุกต์ใช้งาน):** Web Dashboard, Mobile App, ระบบแจ้งเตือน LINE Notify หรือ Automation

## พื้นฐานไฟฟ้าที่โปรแกรมเมอร์ต้องรู้
- **แรงดันไฟฟ้า (Voltage - V):** แรงดันขับเคลื่อนกระแสไฟ (ไมโครคอนโทรลเลอร์ใช้ 3.3V หรือ 5V)
- **กระแสไฟฟ้า (Current - I):** ปริมาณประจุไฟฟ้าที่ไหล (หน่วย แอมแปร์ A หรือ มิลลิแอมป์ mA)
- **ความต้านทาน (Resistance - R):** ตัวต้านทาน (Resistor) ป้องกันไม่ให้อุปกรณ์ เช่น หลอด LED ได้รับกระแสไฟเกินจนขาด
- **กฎของโอห์ม (Ohm's Law):** $V = I \\times R$`,
      codeExample: {
        language: "cpp",
        code: `// การคำนวณค่าตัวต้านทานสำหรับ LED
// แหล่งจ่ายไฟ Vcc = 5V, แรงดันตกคร่อม LED = 2V, กระแสที่ต้องการ I = 15mA (0.015A)
// R = (Vcc - Vled) / I
// R = (5 - 2) / 0.015 = 200 Ohm (เลือกใช้ตัวต้านทานมาตรฐาน 220 Ohm)`,
        description: "สูตรคำนวณตัวต้านทานจำกัดกระแสสำหรับหลอด LED"
      },
      challenge: {
        id: "iot-chal-1",
        title: "เขียนคำนวณกฎของโอห์ม",
        description: "เขียนฟังก์ชัน C++ คำนวณหาแรงดันไฟฟ้า V เมื่อกำหนด I (กระแสไฟ) และ R (ความต้านทาน)",
        initialCode: `#include <iostream>

double calculateVoltage(double current, double resistance) {
  // เติมสูตร V = I * R ตรงนี้
  return 0.0;
}

int main() {
  std::cout << "Voltage: " << calculateVoltage(0.5, 10.0) << " V" << std::endl;
  return 0;
}`,
        expectedOutput: "Voltage: 5 V",
        hint: "คืนค่า current * resistance",
        language: "cpp"
      },
      quiz: [
        { id: "iot-1-q1", question: "ตามกฎของโอห์ม หากต้องการหาแรงดัน (V) ต้องใช้สูตรใด?", options: ["V = I / R", "V = I * R", "V = R / I", "V = I + R"], correctAnswer: 1, explanation: "กฎของโอห์มคือ V = I * R (แรงดัน = กระแส * ความต้านทาน)" },
        { id: "iot-1-q2", question: "บอร์ด ESP32 ทำงานที่ระดับแรงดันลอจิกเท่าใด?", options: ["1.8V", "3.3V", "5.0V", "12V"], correctAnswer: 1, explanation: "ESP32 ทำงานที่ระดับแรงดันลอจิก 3.3V การป้อน 5V เข้าขา GPIO ตรงๆ อาจทำให้ชิปเสียหายได้" },
        { id: "iot-1-q3", question: "อุปกรณ์ประเภทใดทำหน้าที่เปลี่ยนพลังงานไฟฟ้าเป็นการกระทำทางกล เช่น การหมุน?", options: ["Sensor", "Actuator", "Resistor", "Capacitor"], correctAnswer: 1, explanation: "Actuator (เช่น เซอร์โวมอเตอร์, โซลินอยด์วาล์ว, รีเลย์) ทำหน้าที่แปลงสัญญาณสั่งการเป็นการกระทำทางกายภาพ" }
      ],
      labGuide: {
        title: "แล็บทดลองต่อวงจร LED แรกบน Wokwi",
        toolName: "Wokwi Simulator",
        downloadUrl: "https://wokwi.com/",
        objective: "ต่อวงจรหลอด LED พร้อมตัวต้านทาน 220 Ohm กับบอร์ด Arduino Uno และเขียนคำสั่งเปิด-ปิดไฟ",
        steps: [
          { title: "เปิดโปรเจกต์ใหม่", detail: "เข้าไปที่ Wokwi.com แล้วเลือก Start from scratch > Arduino Uno" },
          { title: "วางอุปกรณ์", detail: "กดปุ่ม + เพิ่ม LED และ Resistor (กำหนดค่า 220 โอห์ม)" },
          { title: "ต่อสายไฟ", detail: "ต่อขา Anode (ขางอ) ของ LED เข้ากับขา D13 ผ่านตัวต้านทาน และต่อ Cathode (ขาตรง) ลงขา GND" },
          { title: "รันโค้ด", detail: "กดปุ่ม Play เพื่อสังเกตการณ์กะพริบของหลอด LED" }
        ],
        verification: "หลอด LED สีแดงบนหน้าจอต้องกะพริบเปิด 1 วินาที และดับ 1 วินาทีอย่างต่อเนื่อง"
      }
    },
    {
      id: "iot-2",
      title: "การเขียนโปรแกรมควบคุม Arduino UNO และ GPIO",
      description: "เจาะลึกฟังก์ชัน pinMode, digitalWrite, digitalRead, analogRead และ Serial Monitor",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# การควบคุมบอร์ด Arduino UNO ผ่านคำสั่งพื้นฐาน

ไมโครคอนโทรลเลอร์ Arduino รับ-ส่งข้อมูลผ่านขา **GPIO (General Purpose Input/Output)**

## ฟังก์ชันแกนหลัก 2 ฟังก์ชัน
- \`setup()\`: รันครั้งเดียวเมื่อเริ่มต้นจ่ายไฟหรือกดปุ่ม Reset เหมาะกับการกำหนดโหมดของขาและการเปิด Serial Port
- \`loop()\`: ทำงานวนซ้ำตลอดเวลาตามความถี่สัญญาณนาฬิกา

## คำสั่งควบคุมพอร์ตอินพุต/เอาต์พุต
1. \`pinMode(pin, mode)\`: กำหนดโหมดขาเป็น \`INPUT\`, \`OUTPUT\` หรือ \`INPUT_PULLUP\`
2. \`digitalWrite(pin, HIGH/LOW)\`: จ่ายแรงดัน 5V (HIGH) หรือ 0V (LOW)
3. \`digitalRead(pin)\`: อ่านสถานะสวิตช์ คืนค่า 1 (HIGH) หรือ 0 (LOW)
4. \`analogRead(pin)\`: แปลงสัญญาณอนาล็อก (0-5V) เป็นตัวเลขดิจิทัล 10-bit (ค่า 0 ถึง 1023) ด้วย ADC
5. \`analogWrite(pin, value)\`: สร้างสัญญาณ PWM (Pulse Width Modulation) ค่า 0-255 เพื่อหรี่ไฟหรือคุมความเร็วมอเตอร์`,
      codeExample: {
        language: "cpp",
        code: `const int BUTTON_PIN = 2; // ขาสวิตช์ปุ่มกด
const int LED_PIN = 13;    // ขาหลอดไฟ LED

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  // ใช้ INPUT_PULLUP เพื่อให้ขามีสถานะ HIGH ตลอดเวลาเมื่อยังไม่กดปุ่ม
  pinMode(BUTTON_PIN, INPUT_PULLUP);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);
  
  if (buttonState == LOW) { // เมื่อกดปุ่ม ขาจะถูกดึงลงกราวด์ (LOW)
    digitalWrite(LED_PIN, HIGH);
    Serial.println("ปุ่มถูกกด: เปิดไฟ LED");
  } else {
    digitalWrite(LED_PIN, LOW);
  }
  delay(50); // Debounce delay เล็กน้อย
}`,
        description: "การอ่านค่าสวิตช์ปุ่มกดด้วยวงจร Pull-up ภายในไมโครคอนโทรลเลอร์"
      },
      quiz: [
        { id: "iot-2-q1", question: "Arduino Uno แปลงค่า Analog เป็นดิจิทัลได้ความละเอียดกี่บิต?", options: ["8-bit (0-255)", "10-bit (0-1023)", "12-bit (0-4095)", "16-bit"], correctAnswer: 1, explanation: "ADC บน Arduino Uno เป็นแบบ 10-bit ทำให้ค่าที่อ่านได้มีช่วงตั้งแต่ 0 ถึง 1023" },
        { id: "iot-2-q2", question: "ทำไมจึงนิยมใช้โหมด INPUT_PULLUP กับปุ่มกด?", options: ["ทำให้ไฟสว่างขึ้น", "ไม่ต้องต่อตัวต้านทานภายนอกเพิ่มเติม", "ลดการกินไฟ", "ทำให้กดปุ่มได้เร็วขึ้น"], correctAnswer: 1, explanation: "INPUT_PULLUP เปิดใช้งานตัวต้านทาน Pull-up ภายในชิป ช่วยประหยัดอุปกรณ์ไม่ต้องต่อ R 10k ภายนอก" }
      ],
      labGuide: {
        title: "แล็บสร้างไฟทางเดินเปิด-ปิดอัตโนมัติด้วยเซนเซอร์แสง LDR",
        toolName: "Arduino IDE 2.x",
        downloadUrl: "https://www.arduino.cc/en/software",
        objective: "ต่อเซนเซอร์วัดแสง LDR เข้ากับขา A0 และเขียนเงื่อนไขเปิดไฟ LED เมื่อความสว่างน้อยกว่าเกณฑ์",
        steps: [
          { title: "ต่อวงจร LDR Divider", detail: "ต่อ LDR ขาหนึ่งเข้า 5V และอีกขาเข้า A0 พร้อมต่อตัวต้านทาน 10k Ohm จาก A0 ลง GND" },
          { title: "อ่านค่าผ่าน Serial Monitor", detail: "เขียนคำสั่ง analogRead(A0) และ Serial.println เพื่อสังเกตค่าแสงในห้องมืดและสว่าง" },
          { title: "เขียนเงื่อนไขควบคุม", detail: "หากค่าเซนเซอร์ < 400 ให้สั่ง digitalWrite(LED_PIN, HIGH)" }
        ],
        verification: "เมื่อเอามือมาบังเซนเซอร์ LDR หลอดไฟ LED จะต้องสว่างขึ้นโดยอัตโนมัติ"
      }
    },
    {
      id: "iot-3",
      title: "การประมวลผลเซนเซอร์วัดสภาพแวดล้อม (DHT22, Ultrasonic, PIR)",
      description: "ต่อใช้งานเซนเซอร์วัดอุณหภูมิและความชื้น DHT22, วัดระยะทาง Ultrasonic HC-SR04 และตรวจจับความเคลื่อนไหว PIR",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# การใช้งานเซนเซอร์ยอดนิยมในงาน IoT

เซนเซอร์วัดสภาพแวดล้อมเป็นหัวใจหลักในการส่งข้อมูลจากโลกความจริงขึ้นสู่ระบบ Cloud

## 1. เซนเซอร์ DHT22 (Temperature & Humidity)
- วัดอุณหภูมิได้ตั้งแต่ -40°C ถึง 80°C (ความแม่นยำ ±0.5°C)
- วัดความชื้นสัมพัทธ์ได้ 0-100% RH
- สื่อสารผ่านโปรโตคอล Single-bus แบบกำหนดเวลาบิต (Bit timing)

## 2. เซนเซอร์วัดระยะ Ultrasonic HC-SR04
- ปล่อยคลื่นเสียงความถี่ 40 kHz ออกไป (Trigger) และจับเวลาจนกว่าคลื่นจะสะท้อนกลับมา (Echo)
- สูตรคำนวณระยะทาง: $\\text{ระยะทาง (cm)} = \\frac{\\text{เวลา (Microseconds)} \\times 0.0343}{2}$

## 3. เซนเซอร์ตรวจจับการเคลื่อนไหว PIR (Passive Infrared)
- ตรวจจับการเปลี่ยนแปลงของรังสีอินฟราเรดจากความร้อนของร่างกายมนุษย์หรือสัตว์
- สัญญาณส่งออกเป็นแบบ Digital HIGH/LOW`,
      codeExample: {
        language: "cpp",
        code: `#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
  Serial.println("เริ่มต้นการอ่านค่า DHT22...");
}

void loop() {
  delay(2000); // DHT22 อ่านค่าได้เร็วสุดทุกๆ 2 วินาที
  
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature(); // เซลเซียส
  
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("เกิดข้อผิดพลาดในการอ่านค่าจากเซนเซอร์!");
    return;
  }
  
  Serial.print("ความชื้น: ");
  Serial.print(humidity);
  Serial.print("% | อุณหภูมิ: ");
  Serial.print(temperature);
  Serial.println("°C");
}`,
        description: "โค้ดอ่านค่าอุณหภูมิและความชื้นสัมพัทธ์ด้วยเซนเซอร์ DHT22"
      },
      quiz: [
        { id: "iot-3-q1", question: "เซนเซอร์ HC-SR04 คำนวณระยะทางโดยอาศัยคลื่นประเภทใด?", options: ["คลื่นวิทยุ (RF)", "คลื่นเสียงความถี่สูง (Ultrasonic)", "คลื่นอินฟราเรด (IR)", "คลื่นแม่เหล็กไฟฟ้า"], correctAnswer: 1, explanation: "HC-SR04 ส่งคลื่นเสียงความถี่สูง 40 kHz และจับเวลาการเดินทางของเสียงที่สะท้อนกลับมา" }
      ]
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "iot-4",
      title: "ก้าวสู่ ESP32: Dual-Core, Wi-Fi Station & Web Server",
      description: "ทำความรู้จักชิป ESP32 การเชื่อมต่อ Wi-Fi และการสร้างเว็บเซิร์ฟเวอร์ควบคุมอุปกรณ์ผ่านบราวเซอร์",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# เจาะลึกชิป ESP32: พลังแห่ง IoT สมัยใหม่

**ESP32** พัฒนาโดย Espressif Systems เป็นชิปไมโครคอนโทรลเลอร์ที่ได้รับความนิยมสูงสุดในวงการ IoT ทั่วโลก ด้วยคุณสมบัติที่เหนือกว่าบอร์ดรุ่นเก่าอย่างมหาศาล

## สเปกสำคัญของ ESP32
- **CPU:** Dual-core Xtensa 32-bit LX6 ความเร็วสูงสุด 240 MHz
- **Wireless:** Wi-Fi 802.11 b/g/n (2.4 GHz) + Bluetooth v4.2 BR/EDR และ BLE
- **หน่วยความจำ:** 520 KB SRAM และ Flash Memory 4MB-16MB
- **ความละเอียด ADC:** 12-bit (อ่านค่าได้ 0 - 4095)
- **ระบบปฏิบัติการ:** รองรับ FreeRTOS ภายในตัว สามารถรันสองคอร์พร้อมกันได้

## โหมดการทำงานของ Wi-Fi บน ESP32
1. **Station Mode (STA):** บอร์ดเชื่อมต่อไปยัง Wi-Fi Router ในบ้าน ได้รับ IP Address จาก Router
2. **Access Point Mode (AP):** บอร์ดปล่อยสัญญาณ Wi-Fi ออกมาเอง อุปกรณ์อื่นสามารถต่อเข้ามาหาบอร์ดได้โดยตรง`,
      codeExample: {
        language: "cpp",
        code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "MyHome_WiFi";
const char* password = "Password1234";

WebServer server(80);
const int LED_PIN = 2;
bool ledState = false;

void handleRoot() {
  String html = "<html><body style='font-family:sans-serif;text-align:center;'>";
  html += "<h1>ESP32 Web Server</h1>";
  html += "<p>สถานะไฟ LED: " + String(ledState ? "เปิด (ON)" : "ปิด (OFF)") + "</p>";
  html += "<a href='/toggle'><button style='padding:15px 30px;font-size:20px;'>สลับสถานะไฟ</button></a>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void handleToggle() {
  ledState = !ledState;
  digitalWrite(LED_PIN, ledState ? HIGH : LOW);
  server.sendHeader("Location", "/");
  server.send(303);
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nเชื่อมต่อ Wi-Fi สำเร็จ! เข้าใช้งานที่ IP:");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.on("/toggle", handleToggle);
  server.begin();
}

void loop() {
  server.handleClient();
}`,
        description: "สร้าง Web Server บน ESP32 เพื่อควบคุมไฟ LED ผ่าน Browser มือถือหรือคอมพิวเตอร์"
      },
      quiz: [
        { id: "iot-4-q1", question: "ESP32 มีหน่วยประมวลผล (Core) กี่แกน?", options: ["Single-core (1)", "Dual-core (2)", "Quad-core (4)", "Octa-core (8)"], correctAnswer: 1, explanation: "ESP32 มาพร้อมซีพียู Dual-core Xtensa 32-bit LX6 สามารถแยกงานประมวลผลและเน็ตเวิร์กออกจากกันได้" },
        { id: "iot-4-q2", question: "โหมด Station (STA) ของ ESP32 แตกต่างจาก Access Point (AP) อย่างไร?", options: ["STA ปล่อย Wi-Fi เอง, AP ต่อเข้า Router", "STA ต่อเข้ากับ Router ภายนอก, AP เป็นผู้ปล่อยสัญญาณ Wi-Fi เอง", "STA ใช้ Bluetooth เท่านั้น", "ทั้งสองโหมดเหมือนกันทุกประการ"], correctAnswer: 1, explanation: "Station Mode คือการที่ ESP32 ทำตัวเหมือนมือถือต่อเข้ากับเร้าเตอร์บ้าน" }
      ],
      labGuide: {
        title: "แล็บทำ Web Server สวิตช์ไฟอัจฉริยะบน ESP32",
        toolName: "Arduino IDE 2.x",
        downloadUrl: "https://www.arduino.cc/en/software",
        objective: "คอมไพล์โค้ด Web Server ลงบอร์ด ESP32 และเปิดหน้าเว็บผ่านมือถือที่ต่อ Wi-Fi วงเดียวกันเพื่อสั่งงาน",
        steps: [
          { title: "เลือกบอร์ด", detail: "ใน Arduino IDE เลือก Tools > Board > ESP32 Dev Module" },
          { title: "ใส่ชื่อและรหัสผ่าน Wi-Fi", detail: "แก้ไขค่า ssid และ password ให้ตรงกับ Wi-Fi ที่ใช้งาน" },
          { title: "อัปโหลดและดู IP", detail: "กดปุ่ม Upload เปิด Serial Monitor ที่ Baudrate 115200 เพื่อดู IP Address ที่ได้รับ" },
          { title: "ทดสอบเปิดเว็บ", detail: "พิมพ์ IP Address ลงในบราวเซอร์มือถือหรือคอมพิวเตอร์ แล้วกดปุ่มสลับไฟ" }
        ],
        verification: "หน้าเว็บแสดงปุ่มควบคุม และเมื่อกดปุ่ม หลอดไฟ LED ขา 2 บนบอร์ดจะเปิด-ปิดตามคำสั่งทันที"
      }
    },
    {
      id: "iot-5",
      title: "โปรโตคอล MQTT สำหรับอุตสาหกรรม IoT และ HiveMQ / EMQX",
      description: "ทำความเข้าใจ Publish/Subscribe, QoS ระดับ 0, 1, 2, การรักษาการเชื่อมต่อ KeepAlive และการใช้งาน PubSubClient",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# ทำความเข้าใจโปรโตคอล MQTT (Message Queuing Telemetry Transport)

MQTT เป็นโปรโตคอลระดับมาตรฐานสากล (ISO/IEC 20922) สำหรับการส่งผ่านข้อมูลในระบบ IoT ที่ได้รับการยอมรับว่าประหยัดพลังงาน แบนด์วิดท์ต่ำ และมีความเร็วสูงมากเมื่อเทียบกับ HTTP REST API

## ทำไม MQTT จึงดีกว่า HTTP สำหรับ IoT?
- **ขนาด Packet เล็กมาก:** Header ของ MQTT เริ่มต้นเพียง 2 Bytes ขณะที่ HTTP Header มักเกิน 200-800 Bytes
- **สถาปัตยกรรมแบบ Pub/Sub:** อุปกรณ์ผู้ส่ง (Publisher) ไม่จำเป็นต้องรู้ว่าใครเป็นผู้รับ (Subscriber) ขอเพียงรู้ **Topic** เดียวกัน
- **รองรับการเชื่อมต่อแบบ Persistent (KeepAlive):** อุปกรณ์เชื่อมต่อค้างไว้กับ Broker เมื่อมีข้อมูลเข้ามาจะถูก Push ลงมาทันทีโดยไม่ต้อง Poll

## คุณภาพการบริการ (Quality of Service - QoS)
1. **QoS 0 (At most once):** ส่งครั้งเดียว ไม่รับประกันว่าถึงหรือไม่ (เร็วที่สุด เหมาะกับเซนเซอร์สภาพอากาศ)
2. **QoS 1 (At least once):** รับประกันว่าถึงอย่างน้อยหนึ่งครั้ง มีการส่งซ้ำจนกว่าจะมี Acknowledgment
3. **QoS 2 (Exactly once):** รับประกันว่าถึงพอดีหนึ่งครั้ง ไม่มีการเบิ้ล (ปลอดภัยสูงสุด เหมาะกับคำสั่งซื้อหรือระบบเปิดประตูดิจิทัล)`,
      codeExample: {
        language: "cpp",
        code: `#include <WiFi.h>
#include <PubSubClient.h>

const char* mqtt_server = "broker.emqx.io";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

void callback(char* topic, byte* payload, unsigned int length) {
  String message = "";
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.print("ได้รับคำสั่งใน Topic [");
  Serial.print(topic);
  Serial.print("]: ");
  Serial.println(message);
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("กำลังเชื่อมต่อไปยัง MQTT Broker...");
    String clientId = "ESP32Client-" + String(random(0xffff), HEX);
    if (client.connect(clientId.c_str())) {
      Serial.println("สำเร็จ!");
      client.subscribe("itacademy/command/relay1");
    } else {
      delay(3000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop(); // ดูแลการรับข้อมูลและการส่ง Ping KeepAlive
}`,
        description: "การเชื่อมต่อไปยัง Public MQTT Broker และ Subscribe รับคำสั่งควบคุม"
      },
      quiz: [
        { id: "iot-5-q1", question: "ระดับ QoS ใดใน MQTT ที่รับประกันว่าข้อความจะส่งถึงแน่นอน และไม่ซ้ำซ้อนกันเลยแม้แต่ครั้งเดียว?", options: ["QoS 0", "QoS 1", "QoS 2", "QoS 3"], correctAnswer: 2, explanation: "QoS 2 (Exactly Once) ใช้การยืนยันข้อความแบบ 4-way handshake เพื่อรับประกันว่าข้อความส่งถึงพอดี 1 ครั้ง" }
      ]
    },
    {
      id: "iot-6",
      title: "การเขียน MicroPython บน ESP32 และ Raspberry Pi Pico",
      description: "เรียนรู้ไวยากรณ์ MicroPython การควบคุมพอร์ต I/O, I2C, SPI และการจัดการไฟล์ภายใน Flash Memory",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# การพัฒนา IoT ด้วย MicroPython

MicroPython คือการนำภาษา Python 3 มารวมเข้ากับโค้ดระดับล่างที่มีขนาดกะทัดรัด ปรับแต่งมาเพื่อรันบนไมโครคอนโทรลเลอร์ที่มีหน่วยความจำจำกัดได้อย่างมีประสิทธิภาพ

## จุดเด่นของ MicroPython
- **เขียนง่าย พัฒนาไว:** โค้ดสั้น กระชับ เข้าใจง่าย ไม่ต้องรอคอมไพล์นานเหมือน C/C++
- **REPL (Read-Eval-Print Loop):** ทดสอบคำสั่งและดูผลลัพธ์ผ่าน Terminal ได้แบบบรรทัดต่อบรรทัด
- **ไฟล์โครงสร้าง:**
  - \`boot.py\`: สคริปต์ที่รันตอนเริ่มต้นเครื่อง มักใช้ต่อ Wi-Fi
  - \`main.py\`: สคริปต์หลักที่รันต่อจาก boot.py`,
      codeExample: {
        language: "python",
        code: `import machine
import time
import network

# กำหนดขา LED (ขา 2)
led = machine.Pin(2, machine.Pin.OUT)

# ฟังก์ชันต่อ Wi-Fi
def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('กำลังเชื่อมต่อ Wi-Fi...')
        wlan.connect('MyWiFi', 'Password123')
        while not wlan.isconnected():
            time.sleep(0.5)
    print('เชื่อมต่อสำเร็จ IP:', wlan.ifconfig()[0])

connect_wifi()

# กะพริบไฟ LED 5 ครั้ง
for _ in range(5):
    led.value(1) # เปิดไฟ
    time.sleep(0.5)
    led.value(0) # ปิดไฟ
    time.sleep(0.5)`,
        description: "สคริปต์ MicroPython ในการต่อ Wi-Fi และสั่งการขา GPIO"
      },
      quiz: [
        { id: "iot-6-q1", question: "ใน MicroPython ไฟล์ใดจะถูกประมวลผลเป็นไฟล์แรกสุดเมื่อเริ่มจ่ายไฟ?", options: ["index.py", "main.py", "boot.py", "setup.py"], correctAnswer: 2, explanation: "เมื่อไมโครคอนโทรลเลอร์บูต MicroPython จะรันไฟล์ boot.py ก่อนเสมอ แล้วจึงตามด้วย main.py" }
      ]
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "iot-7",
      title: "Raspberry Pi & Linux: ระบบ Edge Gateway และ GPIO ควบคุมด้วย Python",
      description: "การติดตั้ง Raspberry Pi OS (Headless), การเชื่อมต่อผ่าน SSH, การเขียนไลบรารี RPi.GPIO และการส่งข้อมูลสู่ Database",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# Raspberry Pi ในฐานะ Edge IoT Gateway

แตกต่างจากไมโครคอนโทรลเลอร์ (Arduino/ESP32) ที่ทำงานเฉพาะทาง **Raspberry Pi** คือ Single-board Computer (SBC) ที่มีระบบปฏิบัติการ Linux เต็มรูปแบบ สามารถรันฐานข้อมูล เว็บเซิร์ฟเวอร์ และโมเดล Machine Learning ในตัวได้

## สถาปัตยกรรม Edge Computing
แทนที่จะส่งข้อมูลเซนเซอร์ดิบปริมาณมหาศาลขึ้น Cloud ตลอดเวลา เราสามารถใช้ Raspberry Pi ทำหน้าที่:
1. **Aggregator:** รวบรวมข้อมูลจากเซนเซอร์ ESP32 ในพื้นที่ผ่าน Bluetooth/Zigbee/MQTT
2. **Data Filtering:** กรองสัญญาณรบกวนและข้อมูลที่ผิดปกติออก
3. **Local Database:** บันทึกข้อมูลลง SQLite หรือ InfluxDB สำรองไว้เมื่อเน็ตหลุด
4. **Edge AI:** รันคอมพิวเตอร์วิทัศน์ (OpenCV) ตรวจจับสิ่งผิดปกติก่อนแจ้งเตือนขึ้นคลาวด์`,
      codeExample: {
        language: "python",
        code: `import RPi.GPIO as GPIO
import time
import sqlite3

# ตั้งค่าโหมดขาตามหมายเลข BCM
GPIO.setmode(GPIO.BCM)
SENSOR_PIN = 17
GPIO.setup(SENSOR_PIN, GPIO.IN)

# เชื่อมต่อ SQLite Database ภายในเครื่อง
conn = sqlite3.connect('/home/pi/iot_data.db')
cursor = conn.cursor()
cursor.execute('''CREATE TABLE IF NOT EXISTS sensor_logs 
                  (timestamp DATETIME DEFAULT CURRENT_TIMESTAMP, state INTEGER)''')
conn.commit()

try:
    print("เริ่มบันทึกข้อมูลเซนเซอร์บน Edge Gateway...")
    while True:
        state = GPIO.input(SENSOR_PIN)
        cursor.execute("INSERT INTO sensor_logs (state) VALUES (?)", (state,))
        conn.commit()
        time.sleep(5)
except KeyboardInterrupt:
    GPIO.cleanup()
    conn.close()`,
        description: "บันทึกข้อมูลจากขา GPIO ของ Raspberry Pi ลงฐานข้อมูล SQLite ในระบบ Linux"
      },
      quiz: [
        { id: "iot-7-q1", question: "ข้อใดคือความแตกต่างหลักระหว่าง Raspberry Pi และ Arduino?", options: ["Raspberry Pi ใช้ไฟน้อยกว่า", "Raspberry Pi เป็นคอมพิวเตอร์รัน OS (Linux) ขณะที่ Arduino เป็นไมโครคอนโทรลเลอร์", "Arduino ประมวลผลภาพได้เร็วกว่า", "ไม่มีข้อแตกต่าง"], correctAnswer: 1, explanation: "Raspberry Pi เป็นคอมพิวเตอร์บอร์ดเดี่ยวที่มี OS และ RAM หลาย GB จึงทำงานซับซ้อน มัลติทาสก์ และรันฐานข้อมูลได้" }
      ],
      labGuide: {
        title: "แล็บติดตั้ง Raspberry Pi แบบ Headless (ไม่ต่อจอ) ผ่าน SSH",
        toolName: "Raspberry Pi Imager",
        downloadUrl: "https://www.raspberrypi.com/software/",
        objective: "เขียนระบบปฏิบัติการลง MicroSD พร้อมคอนฟิก Wi-Fi และเชื่อมต่อผ่าน Command Line ด้วย SSH",
        steps: [
          { title: "เปิดโปรแกรม Imager", detail: "เลือก OS เป็น Raspberry Pi OS (64-bit)" },
          { title: "ตั้งค่า OS Customisation", detail: "กำหนด Username, Password, ชื่อ Wi-Fi และติ๊กเปิด Enable SSH" },
          { title: "เขียนลงการ์ด", detail: "กด Write แล้วนำการ์ดไปเสียบเข้าบอร์ด Raspberry Pi รอ 2 นาทีให้บูตเสร็จ" },
          { title: "เชื่อมต่อผ่าน SSH", detail: "เปิด Terminal หรือ PowerShell พิมพ์ ssh <username>@raspberrypi.local แล้วใส่รหัสผ่าน" }
        ],
        verification: "หน้าจอ Terminal สามารถล็อกอินเข้าสู่ Command Prompt ของ Linux (เช่น pi@raspberrypi:~$ ) ได้สำเร็จ"
      }
    },
    {
      id: "iot-8",
      title: "ระบบ FreeRTOS บน ESP32: Real-time Multi-Tasking และ Queue",
      description: "การสร้างโปรแกรมแบบ Real-time ขนานสองคอร์ (Core 0 & Core 1) ด้วย xTaskCreatePinnedToCore และการสื่อสารระหว่างทาสก์ด้วย Queue",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# Real-Time Operating System (FreeRTOS) บน ESP32

เมื่อระบบ IoT มีความซับซ้อน เช่น ต้องอ่านเซนเซอร์ความเร็วสูง พร้อมกับคำนวณกราฟ และส่งข้อมูล Wi-Fi/MQTT การเขียนโปรแกรมแบบปกติที่มีคำสั่ง \`delay()\` จะทำให้ระบบสะดุดและเกิดปัญหา Latency

## การแก้ปัญหาด้วย FreeRTOS
ESP32 รองรับ FreeRTOS ตั้งแต่กำเนิด ทำให้เราสามารถสร้าง **Tasks (เธรดงานอิสระ)** ที่แบ่งลำดับความสำคัญ (Priority) และกำหนดให้รันบนซีพียูคนละคอร์ได้
- **Core 0:** มักใช้จัดการงานเครือข่าย Wi-Fi, Bluetooth และ MQTT Stack
- **Core 1:** ใช้ประมวลผลเซนเซอร์ รันอัลกอริทึม และควบคุมมอเตอร์
- **Queue:** ท่อส่งข้อมูลที่ปลอดภัยระหว่างสองเธรด (Thread-safe FIFO)`,
      codeExample: {
        language: "cpp",
        code: `#include <Arduino.h>

QueueHandle_t sensorQueue;

// Task 1: อ่านเซนเซอร์ทุกๆ 100ms รันบน Core 1
void TaskSensor(void *pvParameters) {
  int counter = 0;
  for (;;) {
    counter++;
    // ส่งข้อมูลเข้าคิว
    xQueueSend(sensorQueue, &counter, portMAX_DELAY);
    vTaskDelay(100 / portTICK_PERIOD_MS); // หน่วงเวลาแบบไม่บล็อกซีพียู
  }
}

// Task 2: รับข้อมูลจากคิวไปส่งเน็ต รันบน Core 0
void TaskNetwork(void *pvParameters) {
  int receivedValue;
  for (;;) {
    if (xQueueReceive(sensorQueue, &receivedValue, portMAX_DELAY)) {
      Serial.print("[Core ");
      Serial.print(xPortGetCoreID());
      Serial.print("] ส่งข้อมูลผ่านเน็ต: ");
      Serial.println(receivedValue);
    }
  }
}

void setup() {
  Serial.begin(115200);
  sensorQueue = xQueueCreate(10, sizeof(int));

  // สร้าง Task รันแยกคนละ Core
  xTaskCreatePinnedToCore(TaskSensor, "SensorTask", 2048, NULL, 1, NULL, 1);
  xTaskCreatePinnedToCore(TaskNetwork, "NetworkTask", 4096, NULL, 1, NULL, 0);
}

void loop() {
  // loop หลักว่างได้ เพราะ FreeRTOS ดูแลให้หมด
  vTaskDelay(1000 / portTICK_PERIOD_MS);
}`,
        description: "ตัวอย่างการแยกงานประมวลผลเซนเซอร์และงานส่งเน็ตเวิร์กออกเป็นสองคอร์ด้วย FreeRTOS"
      },
      quiz: [
        { id: "iot-8-q1", question: "ใน FreeRTOS คำสั่งใดใช้หน่วงเวลาโดยไม่ทำให้ซีพียูบล็อกการทำงานของทาสก์อื่น?", options: ["delay()", "delayMicroseconds()", "vTaskDelay()", "sleep()"], correctAnswer: 2, explanation: "vTaskDelay() จะคืนเวลาซีพียูให้ทาสก์อื่นที่มี Priority เท่ากันหรือต่ำกว่าได้ทำงานในระหว่างที่รอ" }
      ]
    },
    {
      id: "iot-9",
      title: "โปรเจกต์ใหญ่: Full-Stack Smart Home ด้วย Home Assistant & ESPHome",
      description: "ออกแบบระบบบ้านอัจฉริยะครบวงจร ควบคุมไฟ ปลั๊ก วัดคุณภาพอากาศ สตรีมกล้อง ESP32-CAM และต่อยอดสั่งงานด้วยเสียง Siri/Google Assistant",
      duration: "75 นาที",
      level: "ขั้นสูง",
      content: `# ออกแบบระบบ Smart Home ระดับโปรดักชันด้วย Home Assistant

ระบบ Smart Home ที่แท้จริงต้องทำงานแบบ Local ไม่พึ่งพาเซิร์ฟเวอร์ภายนอก เพื่อความเป็นส่วนตัวและความเร็วสูงสุด

## โครงสร้างระบบสถาปัตยกรรม
1. **Home Assistant Core:** ติดตั้งบน Raspberry Pi หรือ Mini PC ทำหน้าที่เป็นสมองกลศูนย์กลาง
2. **ESPHome Firmware:** เฟิร์มแวร์ที่เปลี่ยนบอร์ด ESP32 ให้กลายเป็นอุปกรณ์ Smart Home อัตโนมัติโดยแทบไม่ต้องเขียนโค้ด C++ เอง
3. **Zigbee / Wi-Fi Mesh:** เชื่อมต่อเซนเซอร์ประตู สวิตช์ไฟ และเซนเซอร์ควัน
4. **Automation Rules:** ตัวอย่างเช่น 'เมื่อพระอาทิตย์ตกดิน และตรวจพบว่ามีคนอยู่ในห้อง ให้เปิดไฟ Warm Light ที่ระดับความสว่าง 60%'`,
      codeExample: {
        language: "yaml",
        code: `# ตัวอย่างการคอนฟิกอุปกรณ์ ESP32 ด้วย ESPHome
esphome:
  name: living-room-node

esp32:
  board: esp32dev
  framework:
    type: arduino

wifi:
  ssid: "MyHome_IoT"
  password: "SecretPassword"

# เชื่อมต่อกับ Home Assistant อัตโนมัติผ่าน Native API
api:

sensor:
  - platform: dht
    pin: GPIO4
    temperature:
      name: "ห้องนั่งเล่น - อุณหภูมิ"
    humidity:
      name: "ห้องนั่งเล่น - ความชื้น"
    model: DHT22
    update_interval: 10s

switch:
  - platform: gpio
    pin: GPIO16
    name: "สวิตช์ไฟเพดาน"
    id: ceiling_light`,
        description: "ไฟล์ YAML กำหนดค่าอุปกรณ์อัจฉริยะสำหรับ ESPHome เชื่อมต่อกับ Home Assistant"
      },
      quiz: [
        { id: "iot-9-q1", question: "จุดเด่นหลักของระบบ Home Assistant เมื่อเทียบกับระบบ Cloud ของผู้ผลิตทั่วไปคืออะไร?", options: ["ต้องจ่ายค่าบริการรายเดือน", "ประมวลผลแบบ Local ในบ้าน ไม่พึ่งพา Cloud ปลอดภัยและไม่หลุดแม้อินเทอร์เน็ตล่ม", "ใช้งานได้กับยี่ห้อเดียวเท่านั้น", "ตั้งค่าไม่ได้เลย"], correctAnswer: 1, explanation: "Home Assistant รันในบ้านของคุณ ข้อมูลทั้งหมดอยู่ในเครื่อง ไม่ถูกส่งไปต่างประเทศ และสั่งการได้แม้อินเทอร์เน็ตภายนอกจะขาดหาย" }
      ]
    }
  ]
};
