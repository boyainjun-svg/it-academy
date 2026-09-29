import { Course } from "../types";

export const iotCourse: Course = {
  id: "iot",
  title: "Internet of Things (IoT) & Embedded Systems",
  description: "เรียนรู้ระบบสมองกลฝังตัว สถาปัตยกรรมไมโครคอนโทรลเลอร์ ESP32, Arduino, Raspberry Pi, FreeRTOS และระบบ Smart Automation ระดับอุตสาหกรรม",
  longDescription: "หลักสูตรวิศวกรรมอินเทอร์เน็ตของสรรพสิ่ง (Internet of Things) และระบบสมองกลฝังตัวที่เข้มข้นที่สุด ครอบคลุมตั้งแต่วงจรอิเล็กทรอนิกส์กายภาพ ทฤษฎีวงจรไฟฟ้า กฎของโอห์มและเคิร์ชฮอฟฟ์ สถาปัตยกรรมรีจิสเตอร์ของ ATmega328P และ Espressif ESP32 Dual-Core สัญญาณแอนะล็อกและดิจิทัล โปรโตคอลการสื่อสารฮาร์ดแวร์ (UART, I2C, SPI) โปรโตคอล IoT ระดับอุตสาหกรรม (MQTT v3.1.1/v5.0, HTTP REST, WebSockets) การประมวลผลระบบปฏิบัติการเวลาจริง (FreeRTOS) บนชิปสองแกน การพัฒนา Edge Gateway บน Raspberry Pi ด้วย Linux และโปรเจกต์ Smart Greenhouse & Home Assistant ระดับโปรดักชัน",
  icon: "🌐",
  color: "green",
  gradient: "from-green-500 to-emerald-600",
  category: "core",
  totalLessons: 9,
  difficulty: "ปานกลาง",
  tags: ["IoT", "ESP32", "Arduino", "FreeRTOS", "MQTT", "Raspberry Pi", "MicroPython", "Embedded C++"],
  recommendedTools: [
    {
      name: "Arduino IDE 2.3+",
      icon: "⚡",
      badge: "Industry Standard",
      description: "สภาพแวดล้อมการพัฒนาโปรแกรมไมโครคอนโทรลเลอร์มาตรฐาน รองรับบอร์ดตระกูล AVR, ESP8266, ESP32 พร้อม Serial Plotter วิเคราะห์สัญญาณกราฟิกแบบเรียลไทม์",
      downloadUrl: "https://www.arduino.cc/en/software",
      setupGuide: "1. ดาวน์โหลดติดตั้ง Arduino IDE 2.x\n2. ไปที่ File > Preferences เพิ่ม Board Manager URL: https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json\n3. เปิด Tools > Board > Boards Manager ค้นหา 'esp32' โดย Espressif Systems และกด Install\n4. เสียบสาย USB และเลือกพอร์ต COM ให้ตรงกับชิป USB-to-UART (เช่น CP2102 หรือ CH340)"
    },
    {
      name: "Wokwi Simulator",
      icon: "🧪",
      badge: "Cloud Simulator",
      description: "ระบบจำลองการทำงานของฮาร์ดแวร์ ESP32, Arduino, จอแสดงผล OLED, รีเลย์ และเซนเซอร์ต่างๆ บนเบราว์เซอร์อย่างแม่นยำ รองรับการต่อวงจรและเขียน C++ / MicroPython ได้ทันที",
      downloadUrl: "https://wokwi.com/",
      setupGuide: "1. เข้าสู่เว็บไซต์ https://wokwi.com\n2. เลือกแพลตฟอร์ม ESP32 หรือ Arduino UNO\n3. กดปุ่ม '+' เพื่อเพิ่มชิ้นส่วนอิเล็กทรอนิกส์ เช่น LED, Resistor, DHT22, I2C LCD\n4. ลากสายเชื่อมต่อระหว่างขา GPIO และกดปุ่ม Start Simulation เพื่อทดสอบเฟิร์มแวร์"
    },
    {
      name: "Thonny IDE",
      icon: "🐍",
      badge: "MicroPython IDE",
      description: "Integrated Development Environment น้ำหนักเบา ออกแบบมาเพื่อการเขียน MicroPython และ CircuitPython บน ESP32 และ Raspberry Pi Pico พร้อม Interactive REPL",
      downloadUrl: "https://thonny.org/",
      setupGuide: "1. ดาวน์โหลดและติดตั้ง Thonny IDE จาก thonny.org\n2. เสียบ ESP32 เข้ากับคอมพิวเตอร์\n3. เปิด Tools > Options > แท็บ Interpreter\n4. เลือก 'MicroPython (ESP32)' และเลือกพอร์ต COM ของบอร์ด\n5. หน้าต่าง REPL ด้านล่างจะแสดง Prompt '>>>' พร้อมรับคำสั่ง Python"
    },
    {
      name: "Raspberry Pi Imager",
      icon: "🍓",
      badge: "Official OS Flasher",
      description: "โปรแกรมเขียนระบบปฏิบัติการ Raspberry Pi OS (Debian Linux) ลง MicroSD Card พร้อมระบบตั้งค่าระบบล่วงหน้า (Headless Pre-configuration) เช่น WiFi, User, SSH",
      downloadUrl: "https://www.raspberrypi.com/software/",
      setupGuide: "1. ติดตั้งและเปิดโปรแกรม Raspberry Pi Imager\n2. เลือก Device (เช่น Raspberry Pi 4 หรือ Pi 5)\n3. เลือก Operating System: 'Raspberry Pi OS (64-bit)'\n4. เลือก Storage: การ์ด MicroSD ของคุณ\n5. กด Edit Settings เพื่อตั้ง Hostname, Username, Password, ข้อมูล Wi-Fi และเปิด Enable SSH\n6. กด Write และรอจนกว่ากระบวนการ Verify จะเสร็จสมบูรณ์"
    }
  ],
  lessons: [
    // ---------------- ระดับเริ่มต้น (Beginner) ----------------
    {
      id: "iot-1",
      title: "พื้นฐาน IoT สถาปัตยกรรมระบบ และทฤษฎีวงจรอิเล็กทรอนิกส์สำหรับนักพัฒนา",
      description: "เจาะลึกสถาปัตยกรรม IoT 4 เลเยอร์, กฎของโอห์มและเคิร์ชฮอฟฟ์, การคำนวณตัวต้านทานจำกัดกระแส, วงจรแบ่งแรงดัน (Voltage Divider) และการปรับระดับแรงดันตรรกะ 3.3V vs 5V",
      duration: "45 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม Internet of Things และทฤษฎีวงจรไฟฟ้ากายภาพ

**Internet of Things (IoT)** คือการผสานระบบคอมพิวเตอร์และเครือข่ายเข้ากับอุปกรณ์ทางกายภาพ (Physical World) เพื่อเก็บรวบรวมข้อมูล แปลงปรากฏการณ์ธรรมชาติเป็นข้อมูลดิจิทัล (Telemetries) และสั่งการกลับไปยังอุปกรณ์กลไก (Actuation) แบบอัตโนมัติ

---

## 1. สถาปัตยกรรม 4 เลเยอร์ของระบบ IoT สากล (4-Tier IoT Architecture)

\`\`\`
[ เลเยอร์ที่ 4: Application Layer ] 
  -> Web Dashboard, Mobile App, Line/Telegram Bot, ระบบแจ้งเตือน, Grafana
         ▲ 
         │ (HTTPS / WebSockets / WSS / gRPC)
         ▼
[ เลเยอร์ที่ 3: Middleware & Cloud Processing Layer ]
  -> IoT Broker (MQTT Cluster - EMQX/HiveMQ), Time-Series Database (InfluxDB), Rule Engine
         ▲ 
         │ (MQTT over TLS / CoAP / HTTP REST)
         ▼
[ เลเยอร์ที่ 2: Network & Edge Gateway Layer ]
  -> Wi-Fi (802.11 b/g/n), Bluetooth Low Energy (BLE 5.0), LoRaWAN, Cellular (NB-IoT/4G), Edge SBC (Raspberry Pi)
         ▲ 
         │ (GPIO, I2C, SPI, UART, RS-485 Modbus)
         ▼
[ เลเยอร์ที่ 1: Perception & Physical Layer ]
  -> Sensors (อุณหภูมิ, แรงดัน, แสง), Actuators (รีเลย์, โซลินอยด์วาล์ว, เซอร์โวมอเตอร์), Microcontrollers (ESP32, STM32)
\`\`\`

---

## 2. ทฤษฎีไฟฟ้าพื้นฐานที่วิศวกรซอฟต์แวร์ฝังตัวต้องรู้

### 2.1 ปริมาณทางไฟฟ้าหลัก 3 ประการ
1. **แรงดันไฟฟ้า (Voltage - $V$):** ความต่างศักย์ไฟฟ้าระหว่างจุดสองจุด มีหน่วยเป็น **โวลต์ (Volt: V)** ไมโครคอนโทรลเลอร์ยุคใหม่ทำงานที่ $3.3\\text{ V}$ (ESP32, STM32, ARM) ขณะที่บอร์ดรุ่นคลาสสิกทำงานที่ $5.0\\text{ V}$ (Arduino UNO/ATmega328P)
2. **กระแสไฟฟ้า (Current - $I$):** ปริมาณประจุไฟฟ้าที่ไหลผ่านหน้าตัดตัวนำต่อหน่วยเวลา มีหน่วยเป็น **แอมแปร์ (Ampere: A)** หรือมิลลิแอมป์ ($1\\text{ mA} = 0.001\\text{ A}$) ขา GPIO ทั่วไปของ ESP32 จ่ายกระแสได้สูงสุดเพียง $12\\text{ mA} - 20\\text{ mA}$ เท่านั้น
3. **ความต้านทาน (Resistance - $R$):** คุณสมบัติขัดขวางการไหลของกระแสไฟฟ้า มีหน่วยเป็น **โอห์ม (Ohm: $\\Omega$)**

### 2.2 กฎของโอห์ม (Ohm's Law)
$$V = I \\times R \\quad \\iff \\quad I = \\frac{V}{R} \\quad \\iff \\quad R = \\frac{V}{I}$$

### 2.3 การคำนวณตัวต้านทานจำกัดกระแสสำหรับไดโอดเปล่งแสง (LED Current Limiting Resistor)
หลอด LED เป็นอุปกรณ์สารกึ่งตัวนำที่มีคุณลักษณะ Non-linear หากต่อตรงเข้ากับแหล่งจ่ายไฟโดยไม่มีตัวต้านทานจำกัดกระแส จะเกิดสภาวะ **Thermal Runaway** ดึงกระแสเกินพิกัดจนหลอดขาดและขา GPIO พังเสียหายทันที

สูตรการคำนวณ:
$$R = \\frac{V_{CC} - V_{F}}{I_{F}}$$
- $V_{CC}$: แรงดันแหล่งจ่ายไฟของไมโครคอนโทรลเลอร์ (เช่น $3.3\\text{ V}$ หรือ $5.0\\text{ V}$)
- $V_{F}$ (Forward Voltage): แรงดันตกคร่อมรอยต่อ PN ของ LED (สีแดง/เหลือง $\\approx 1.8\\text{ V} - 2.0\\text{ V}$, สีเขียว/น้ำเงิน/ขาว $\\approx 3.0\\text{ V} - 3.2\\text{ V}$)
- $I_{F}$ (Forward Current): กระแสที่ต้องการให้ไหลผ่านหลอด (ปกติใช้ $10\\text{ mA} - 15\\text{ mA} = 0.010\\text{ A} - 0.015\\text{ A}$)

**ตัวอย่าง:** ใช้แหล่งจ่ายไฟ $5\\text{ V}$ ขับ LED สีแดง ($V_F = 2.0\\text{ V}$) ที่กระแส $15\\text{ mA}$ ($0.015\\text{ A}$)
$$R = \\frac{5.0 - 2.0}{0.015} = \\frac{3.0}{0.015} = 200\\;\\Omega \\implies \\text{เลือกใช้ตัวต้านทานมาตรฐานค่า } 220\\;\\Omega$$

---

## 3. วงจรแบ่งแรงดัน (Voltage Divider Circuit)

ไมโครคอนโทรลเลอร์ ESP32 ไม่สามารถรับแรงดันแอนะล็อกเกิน $3.3\\text{ V}$ ได้ หากเราต้องการอ่านค่าจากเซนเซอร์อุตสาหกรรมหรือแบตเตอรี่รถยนต์ ($12\\text{ V}$) ต้องใช้วงจรแบ่งแรงดันลดระดับลงมาเสมอ

\`\`\`
       Vin (เช่น 12V หรือ 5V)
        │
       ┌┴┐
       │ │ R1
       └┬┘
        ├─── Vout (ส่งเข้าขา ADC ของ ESP32 <= 3.3V)
       ┌┴┐
       │ │ R2
       └┬┘
        │
       GND (0V)
\`\`\`

สูตรคำนวณแรงดันขาออก:
$$V_{out} = V_{in} \\times \\left( \\frac{R_2}{R_1 + R_2} \\right)$$

> [!CAUTION]
> **ข้อควรระวังเรื่องระดับแรงดัน 5V กับ ESP32 (Logic Level Hazard):**
> ขา GPIO ของ ESP32 **ไม่ใช่ 5V Tolerant** การนำสัญญาณ $5\\text{ V}$ จากเซนเซอร์รุ่นเก่าเข้าขา ESP32 โดยตรงจะทำให้ทรานซิสเตอร์ภายในชิปทะลุและเสียหายถาวร ต้องใช้วงจร **Bi-Directional Logic Level Shifter** หรือใช้วงจรแบ่งแรงดัน $R_1=10\\text{k}\\Omega, R_2=20\\text{k}\\Omega$ เสมอ!

---

## 4. ตัวต้านทาน Pull-up และ Pull-down กับปัญหาสภาวะลอย (Floating State)

เมื่อขาอินพุตดิจิทัลไม่ได้ต่อเข้ากับสัญญาณใดๆ (เช่น สวิตช์เปิดวงจรอยู่) ขาอินพุตจะทำตัวเป็นเสาอากาศรับคลื่นแม่เหล็กไฟฟ้ารอบข้าง ทำให้ค่าที่อ่านได้สลับไปมาระหว่าง 0 กับ 1 อย่างไร้ระเบียบ (Floating State)

| ชนิดวงจร | พฤติกรรมเมื่อไม่กดสวิตช์ | พฤติกรรมเมื่อกดสวิตช์ | ข้อแนะนำในการต่อใช้งาน |
|---|---|---|---|
| **Pull-up Circuit** | ขาอินพุตถูกดึงขึ้นเป็น **HIGH (3.3V/5V)** ตลอดเวลา | ขาอินพุตถูกลัดวงจรลงกราวด์ กลายเป็น **LOW (0V)** | **แนะนำสูงสุด (Active-LOW)** นิยมใช้โหมด \`INPUT_PULLUP\` ที่มีในไมโครคอนโทรลเลอร์ภายในชิป |
| **Pull-down Circuit** | ขาอินพุตถูกดึงลงเป็น **LOW (0V)** ตลอดเวลา | สวิตช์จ่ายไฟเข้าขา กลายเป็น **HIGH (3.3V/5V)** | นิยมใช้ในวงจรตรวจจับสัญญาณไฟเลี้ยงจากภายนอก (Active-HIGH) |`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// โปรแกรมสาธิตการอ่านค่าสวิตช์แบบ Active-LOW ด้วย Internal Pull-up
// แพลตฟอร์ม: Arduino UNO / ESP32 (ทำงานข้ามแพลตฟอร์มได้)
// =================================================================

#include <Arduino.h>

const uint8_t BUTTON_PIN = 2; // ขาสวิตช์ปุ่มกด (Active-LOW)
const uint8_t LED_PIN = 13;    // ขาควบคุมหลอดไฟ LED

void setup() {
  // เปิด Serial Monitor เพื่อดีบั๊กที่ Baudrate สูงเพื่อลดเวลา Blocking
  Serial.begin(115200);
  
  // กำหนดโหมดขา LED เป็น OUTPUT
  pinMode(LED_PIN, OUTPUT);
  
  // เปิดใช้งานตัวต้านทาน Pull-Up ภายในชิป (ประมาณ 20k - 50k Ohm)
  // ทำให้ขานี้มีสถานะ HIGH (Logic 1) ในสภาวะปกติโดยไม่ต้องต่อตัวต้านทานภายนอก
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  
  digitalWrite(LED_PIN, LOW); // เริ่มต้นปิดไฟ LED
  Serial.println(F("[SYSTEM] ระบบเริ่มต้นการตรวจสอบสัญญาณดิจิทัล..."));
}

void loop() {
  // อ่านค่าทางดิจิทัลจากสวิตช์
  // เมื่อกดปุ่ม ขาจะลัดวงจรลง GND ทำให้อ่านได้ค่า LOW (0)
  int buttonState = digitalRead(BUTTON_PIN);
  
  if (buttonState == LOW) {
    // ปุ่มถูกกด (Active State)
    digitalWrite(LED_PIN, HIGH);
    Serial.println(F("-> สวิตช์ถูกกด: สั่งจ่ายกระแสขับ LED = HIGH"));
  } else {
    // ปล่อยปุ่ม (สภาวะปกติผ่าน Pull-up)
    digitalWrite(LED_PIN, LOW);
  }
  
  // หน่วงเวลาเล็กน้อยสำหรับทดสอบเบื้องต้น
  delay(50);
}`,
        description: "การอ่านค่าอินพุตดิจิทัลด้วย Internal Pull-up ป้องกันปัญหา Floating State ทางอิเล็กทรอนิกส์"
      },
      quiz: [
        {
          id: "iot-1-q1",
          question: "หากต้องการขับหลอด LED สีแดง (VF = 2.0V, ต้องการกระแส 15mA) ด้วยบอร์ด Arduino UNO (VCC = 5.0V) ควรเลือกใช้ตัวต้านทานจำกัดกระแสค่ามาตรฐานเท่าใด?",
          options: [
            "100 โอห์ม",
            "220 โอห์ม",
            "1,000 โอห์ม (1k)",
            "10,000 โอห์ม (10k)"
          ],
          correctAnswer: 1,
          explanation: "จากสูตร R = (Vcc - VF) / IF = (5.0 - 2.0) / 0.015 = 200 โอห์ม ค่าตัวต้านทานมาตรฐานในท้องตลาดที่ใกล้เคียงและปลอดภัยที่สุดคือ 220 โอห์ม"
        },
        {
          id: "iot-1-q2",
          question: "เพราะเหตุใดจึงห้ามป้อนสัญญาณตรรกะระดับ 5V จากเซนเซอร์เข้าสู่ขา GPIO ของไมโครคอนโทรลเลอร์ ESP32 โดยตรง?",
          options: [
            "เพราะ ESP32 จะประมวลผลข้อมูลช้าลง",
            "เพราะ ESP32 ทำงานที่แรงดัน 3.3V และขา GPIO ไม่ใช่ 5V Tolerant แรงดันที่เกินจะทำลายทรานซิสเตอร์ภายในชิปอย่างถาวร",
            "เพราะ ESP32 จะรีเซ็ตค่า Wi-Fi กลับเป็นค่าโรงงาน",
            "เพราะจะทำให้สัญญาณ Wi-Fi หลุดจากการรบกวนคลื่นวิทยุ"
          ],
          correctAnswer: 1,
          explanation: "วงจรภายใน ESP32 ถูกผลิตด้วยกระบวนการ 40nm Silicon ที่ทนแรงดันได้สูงสุดประมาณ 3.6V เท่านั้น สัญญาณ 5V จะทำให้สารกึ่งตัวนำทะลุ (Breakdown) เกิดไฟฟ้าลัดวงจรภายในชิปทันที"
        },
        {
          id: "iot-1-q3",
          question: "ปรากฏการณ์ 'Floating Pin' เกิดจากสาเหตุใด และแก้ไขได้อย่างไรในเชิงวิศวกรรม?",
          options: [
            "เกิดจากตัวเก็บประจุรั่วไหล แก้ไขโดยการเปลี่ยนบอร์ดใหม่",
            "เกิดจากขาอินพุตไม่ได้ต่อกับแหล่งแรงดันหรือกราวด์ ทำให้จับสัญญาณรบกวนรอบตัว แก้ไขโดยต่อตัวต้านทาน Pull-up หรือ Pull-down",
            "เกิดจากการเขียนคำสั่ง delay() นานเกินไป แก้ไขโดยใช้ FreeRTOS",
            "เกิดจากความร้อนของชิปสะสมเกินพิกัด แก้ไขโดยติดฮีตซิงก์"
          ],
          correctAnswer: 1,
          explanation: "เมื่อขาอินพุตเปิดวงจร Impedance จะสูงมากจนทำตัวเป็นเสาอากาศเหนี่ยวนำคลื่นสนามแม่เหล็กไฟฟ้า การต่อ Pull-up (หรือ Pull-down) จะช่วยตรึงระดับแรงดันให้อยู่ในสถานะที่แน่นอนตลอดเวลา"
        }
      ],
      labGuide: {
        title: "แล็บปฏิบัติการจำลองวงจร LED และปุ่มกด Active-LOW บน Wokwi Simulator",
        toolName: "Wokwi Simulator",
        downloadUrl: "https://wokwi.com/",
        objective: "ต่อวงจรหลอด LED พร้อมตัวต้านทานจำกัดกระแส 220 โอห์ม และสวิตช์ปุ่มกดบนบอร์ด Arduino UNO หรือ ESP32 พร้อมพิสูจน์การทำงานของวงจร Pull-up",
        steps: [
          {
            title: "สร้างโปรเจกต์ใหม่",
            detail: "เปิดเว็บเบราว์เซอร์เข้าไปที่ https://wokwi.com แล้วเลือกสร้างโปรเจกต์ 'ESP32' หรือ 'Arduino Uno'"
          },
          {
            title: "วางอุปกรณ์ลงบนผังวงจร",
            detail: "กดปุ่มเครื่องหมาย '+' เพื่อเพิ่มชิ้นส่วน: 1. หลอดไฟ LED (สีแดง), 2. ตัวต้านทาน (Resistor กำหนดค่า 220 โอห์ม), 3. สวิตช์ปุ่มกด (Pushbutton)"
          },
          {
            title: "ต่อสายไฟตามหลักการป้องกันกระแสเกิน",
            detail: "ลากสายไฟจากขา GPIO 13 ของบอร์ด เข้าขาหนึ่งของตัวต้านทาน 220 โอห์ม, อีกขาของตัวต้านทานต่อเข้าขา Anode (ขางอ) ของ LED, และต่อขา Cathode (ขาตรง) ของ LED ลงที่พิน GND ของบอร์ด"
          },
          {
            title: "ต่อสายไฟปุ่มกดแบบ Active-LOW",
            detail: "ต่อขาหนึ่งของ Pushbutton เข้ากับขา GPIO 2 และต่อขาตรงข้ามของ Pushbutton เข้ากับขา GND ของบอร์ด (ใช้ประโยชน์จาก Internal Pull-up)"
          },
          {
            title: "อัปโหลดและเริ่มจำลองการทำงาน",
            detail: "คัดลอกโค้ด C++ จากบทเรียนวางลงในแท็บ sketch.ino แล้วกดปุ่ม 'Start Simulation' (ปุ่ม Play สีเขียว)"
          }
        ],
        verification: "ในสภาวะปกติหลอด LED ต้องดับสนิท และเมื่อใช้เมาส์คลิกค้างที่ปุ่มกด Pushbutton หลอด LED สีแดงจะต้องสว่างขึ้นทันที พร้อมข้อความใน Serial Monitor แจ้งสถานะอย่างแม่นยำ"
      }
    },

    {
      id: "iot-2",
      title: "การเขียนโปรแกรมควบคุมไมโครคอนโทรลเลอร์ สถาปัตยกรรมรีจิสเตอร์ และการขัดจังหวะ (Interrupts)",
      description: "ทำความเข้าใจโครงสร้าง CPU 8-bit ATmega328P, การจัดการพอร์ตระดับรีจิสเตอร์ (DDR, PORT, PIN) เปรียบเทียบกับคำสั่ง Arduino API, การประมวลผลแบบ Non-blocking ด้วย millis() และการจัดการ Hardware Interrupts",
      duration: "55 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมรีจิสเตอร์ การจัดการเวลาแบบ Non-blocking และฮาร์ดแวร์อินเทอร์รัปต์

เมื่อต้องการพัฒนาระบบสมองกลฝังตัวระดับอุตสาหกรรม การใช้คำสั่งพื้นฐานอย่าง \`digitalWrite()\` หรือการหยุดรอด้วย \`delay()\` ถือเป็นข้อผิดพลาดร้ายแรง เพราะทำให้ระบบหยุดประมวลผล (Blocking) ไม่สามารถตอบสนองต่อเซนเซอร์ฉุกเฉินได้ทันเวลา

---

## 1. เปรียบเทียบการสั่งงานผ่าน Arduino Core API vs Direct Port Manipulation

ในชิปไมโครคอนโทรลเลอร์ เช่น ATmega328P ขา GPIO จะถูกจัดกลุ่มเป็นพอร์ต 8-bit ได้แก่ **PORTB**, **PORTC**, และ **PORTD** โดยมีรีจิสเตอร์ควบคุม 3 ตัวในแต่ละพอร์ต:
1. **DDRx (Data Direction Register):** กำหนดทิศทางขา ($1 = \\text{OUTPUT}, 0 = \\text{INPUT}$)
2. **PORTx (Port Data Register):** สั่งจ่ายสัญญาณออก ($1 = \\text{HIGH}, 0 = \\text{LOW}$) หรือเปิด Pull-up เมื่ออยู่ในโหมด INPUT
3. **PINx (Port Input Pins Register):** อ่านสถานะทางไฟฟ้าจริงที่ขากายภาพ (Read-only)

\`\`\`
เปรียบเทียบคำสั่งเปิด-ปิดไฟ:
- Arduino API: digitalWrite(13, HIGH); 
  -> ใช้เวลาประมาณ 50 Clock Cycles (ประมาณ 3.125 ไมโครวินาทีบนคริสตัล 16MHz) 
  -> มีการตรวจสอบ Pin Mapping, Timer PWM Disable, Array Lookup
- Direct Register: PORTB |= (1 << PB5); 
  -> ใช้เวลาเพียง 1 Clock Cycle (0.0625 ไมโครวินาที) 
  -> เร็วกว่าเดิมถึง 50 เท่า!
\`\`\`

---

## 2. การจัดการเวลาแบบ Non-Blocking ด้วยฟังก์ชัน \`millis()\`

คำสั่ง \`delay(ms)\` จะบังคับให้ซีพียูรันคำสั่ง \`NOP\` (No Operation) วนลูปอยู่กับที่ ทำให้ไม่สามารถรับสัญญาณปุ่มกด ตรวจจับควัน หรือสื่อสารเครือข่ายได้
แนวทางที่ถูกต้องคือการใช้เทคนิค **Finite State Machine (FSM)** ร่วมกับฟังก์ชันนับเวลา \`millis()\` ซึ่งคืนค่าเป็นจำนวนมิลลิวินาทีนับตั้งแต่เปิดเครื่อง (ตัวแปรชนิด \`unsigned long\` ป้องกันปัญหา Overflow ได้นานถึง 49.7 วัน)

\`\`\`
แนวคิดการจับเวลาแบบ Non-Blocking:
[เวลาปัจจุบัน millis()] - [เวลาที่บันทึกไว้ครั้งก่อน previousMillis] >= [ช่วงเวลา interval]
  ├─ ถ้าจริง -> ทำงานอัปเดตสถานะ แล้วอัปเดต previousMillis = millis()
  └─ ถ้าเท็จ -> ข้ามไปทำงานอื่นได้ทันทีโดยไม่หยุดรอ
\`\`\`

---

## 3. ฮาร์ดแวร์อินเทอร์รัปต์ (Hardware Interrupts) และคำสำคัญ \`volatile\`

**Interrupt** คือกลไกของฮาร์ดแวร์ที่บังคับให้ซีพียูหยุดการทำงานในลูปปกติชั่วคราว เพื่อกระโดดไปประมวลผลฟังก์ชันเร่งด่วนที่เรียกว่า **Interrupt Service Routine (ISR)** ทันทีที่เกิดเหตุการณ์สัญญาณไฟฟ้าเปลี่ยนแปลง

\`\`\`
Main Program Loop() ───► [ทำงานปกติ] ───► [ทำงานปกติ] ───► [ทำงานปกติ]
                                │ (สัญญาณปุ่มกด/เซนเซอร์กระตุ้นขา INT)
                                ▼
                       ┌─────────────────────────┐
                       │  กระโดดเข้าสู่ ISR()     │ ◄── ต้องสั้นที่สุด ห้าม delay()
                       └─────────────────────────┘
                                │ (ประมวลผลเสร็จสิ้น)
                                ▼
Main Program Loop() ◄─── [กลับมาทำงานต่อจากจุดเดิม]
\`\`\`

### กฎเหล็ก 4 ข้อในการเขียน ISR (Interrupt Service Routine):
1. **ISR ต้องทำงานสั้นและเร็วที่สุด:** ห้ามมีลูปยาว ห้ามคำนวณคณิตศาสตร์ซับซ้อน
2. **ห้ามเรียกใช้คำสั่ง \`delay()\` หรือ \`millis()\` ที่ต้องพึ่งพา Timer Interrupt:** เพราะในขณะที่อยู่ใน ISR ตัวนับเวลาจะถูกหยุดการอัปเดต
3. **หลีกเลี่ยงการใช้ \`Serial.print()\`:** เพราะ Serial ต้องใช้บัฟเฟอร์แบบ Interrupt-driven อาจทำให้เกิด Deadlock ได้
4. **ตัวแปรส่วนกลางที่แชร์ระหว่าง ISR และ main loop ต้องประกาศด้วยคีย์เวิร์ด \`volatile\` เสมอ:** เพื่อแจ้งให้คอมไพเลอร์รู้ว่าตัวแปรนี้อาจถูกเปลี่ยนแปลงค่าได้ตลอดเวลาจากภายนอกลูป ป้องกันไม่ให้คอมไพเลอร์ Optimize ค่าตัวแปรไปเก็บไว้ในแคชรีจิสเตอร์`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// สถาปัตยกรรม Non-blocking + Hardware Interrupt และ ISR
// รองรับ Arduino UNO (ขา INT0 อยู่ที่ Pin 2) และ ESP32
// =================================================================

#include <Arduino.h>

const uint8_t LED_PIN = 13;
const uint8_t INTERRUPT_PIN = 2; // ขารับอินเทอร์รัปต์ภายนอก

// ตัวแปรที่แชร์ระหว่าง ISR และ main loop ต้องใช้ volatile เสมอ
volatile bool emergencyTriggered = false;
volatile uint32_t triggerCount = 0;

// ตัวแปรจัดการเวลาแบบ Non-blocking
uint32_t previousBlinkMillis = 0;
const uint32_t BLINK_INTERVAL = 500; // กะพริบทุกๆ 500 ms
bool ledState = false;

// -------------------------------------------------------------
// Interrupt Service Routine (ISR) - ทำงานทันทีเมื่อมีสัญญาณ FALLING
// -------------------------------------------------------------
#if defined(ESP32)
void IRAM_ATTR handleEmergencyISR() { // บน ESP32 ฟังก์ชัน ISR ควรอยู่ใน IRAM
#else
void handleEmergencyISR() {
#endif
  emergencyTriggered = true;
  triggerCount++;
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  pinMode(INTERRUPT_PIN, INPUT_PULLUP);

  // ผูกสัญญาณ Interrupt เข้ากับฟังก์ชัน ISR
  // FALLING: สัญญาณเปลี่ยนจาก HIGH เป็น LOW (เมื่อกดปุ่มลงกราวด์)
  attachInterrupt(digitalPinToInterrupt(INTERRUPT_PIN), handleEmergencyISR, FALLING);

  Serial.println(F("[CORE] ระบบ Non-blocking และ Hardware Interrupt พร้อมทำงาน"));
}

void loop() {
  uint32_t currentMillis = millis();

  // 1. งานที่ 1: กะพริบไฟ LED ปกติโดยไม่หยุดชะงักระบบ (Non-blocking)
  if (currentMillis - previousBlinkMillis >= BLINK_INTERVAL) {
    previousBlinkMillis = currentMillis;
    ledState = !ledState;
    digitalWrite(LED_PIN, ledState ? HIGH : LOW);
  }

  // 2. งานที่ 2: ตรวจจับและจัดการแฟล็กจาก Interrupt Service Routine
  if (emergencyTriggered) {
    // ปิดอินเทอร์รัปต์ชั่วคราวเพื่ออ่าน/เขียนตัวแปรแชร์อย่างปลอดภัย (Atomic operation)
    noInterrupts();
    emergencyTriggered = false;
    uint32_t currentCount = triggerCount;
    interrupts();

    Serial.print(F("[ALERT] ตรวจพบสัญญาณอินเทอร์รัปต์ฉุกเฉิน! ครั้งที่: "));
    Serial.println(currentCount);
  }

  // ซีพียูสามารถประมวลผลงานอื่นต่อไปได้อย่างราบรื่น
}`,
        description: "สถาปัตยกรรมการจัดการเวลาระดับอาชีพโดยใช้ millis() ผสานกับ Hardware Interrupts และ volatile flag"
      },
      quiz: [
        {
          id: "iot-2-q1",
          question: "เหตุใดตัวแปรที่ถูกแก้ไขค่าภายในฟังก์ชัน Interrupt Service Routine (ISR) จึงต้องประกาศด้วยคีย์เวิร์ด volatile เสมอ?",
          options: [
            "เพื่อให้ตัวแปรนั้นประหยัดพื้นที่ในหน่วยความจำแฟลช",
            "เพื่อแจ้งให้คอมไพเลอร์ทราบว่าค่าของตัวแปรนี้สามารถเปลี่ยนแปลงได้ตลอดเวลา ป้องกันไม่ให้คอมไพเลอร์ Optimize ไปค้างไว้ใน CPU Register",
            "เพื่อให้ตัวแปรนั้นเข้ารหัสข้อมูลก่อนส่งออกทาง Serial",
            "เพื่อทำให้ค่าของตัวแปรไม่สูญหายเมื่อตัดไฟ"
          ],
          correctAnswer: 1,
          explanation: "หากไม่ใส่ volatile ตัวคอมไพเลอร์ GCC จะมองว่าตัวแปรนี้ไม่เคยถูกเปลี่ยนค่าในลูป main() และจะแคชค่าเดิมไว้ในรีจิสเตอร์ ทำให้ลูปหลักไม่เห็นค่าใหม่ที่ ISR เปลี่ยนแปลง"
        },
        {
          id: "iot-2-q2",
          question: "ข้อใดคือข้อห้ามที่สำคัญที่สุดในการเขียนโค้ดภายในฟังก์ชัน Interrupt Service Routine (ISR)?",
          options: [
            "ห้ามใช้ตัวแปรประเภท int",
            "ห้ามเรียกคำสั่ง delay() หรือคำสั่ง Blocking ที่ต้องพึ่งพา Timer Interrupt อื่น",
            "ห้ามส่งข้อมูลออกขา GPIO",
            "ห้ามตั้งชื่อฟังก์ชันขึ้นต้นด้วยตัวพิมพ์ใหญ่"
          ],
          correctAnswer: 1,
          explanation: "ในขณะที่ไมโครคอนโทรลเลอร์กำลังประมวลผล ISR อินเทอร์รัปต์ตัวอื่นมักจะถูกปิดกั้น การเรียก delay() ซึ่งอาศัยการนับเวลาของ SysTick/Timer Interrupt จะทำให้ระบบค้าง (Hang/Deadlock) ทันที"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบไฟสัญญาณเตือนภัยแบบ Non-blocking และปุ่มฉุกเฉิน E-Stop",
        toolName: "Arduino IDE 2.x",
        downloadUrl: "https://www.arduino.cc/en/software",
        objective: "เขียนเฟิร์มแวร์ควบคุมไฟกะพริบอัตโนมัติด้วย millis() ควบคู่กับการตรวจจับปุ่มฉุกเฉินผ่าน Hardware Interrupt ทันทีโดยไม่มีอาการกระตุกหรือดีเลย์",
        steps: [
          {
            title: "เตรียมวงจรฮาร์ดแวร์",
            detail: "ต่อ LED เข้าที่ขา GPIO 13 (หรือใช้ Onboard LED) และต่อปุ่มกดฉุกเฉิน (Pushbutton) เข้ากับขา Digital Pin 2 และต่ออีกขาลง GND"
          },
          {
            title: "คอนฟิกอินเทอร์รัปต์ใน setup()",
            detail: "ใช้คำสั่ง pinMode(2, INPUT_PULLUP) และ attachInterrupt(digitalPinToInterrupt(2), handleEmergencyISR, FALLING)"
          },
          {
            title: "รันลูปหลักแบบ Non-blocking",
            detail: "ตรวจสอบผลต่าง millis() - previousMillis >= 500 ms เพื่อสลับสถานะ LED"
          },
          {
            title: "ทดสอบการขัดจังหวะทันที",
            detail: "เปิด Serial Monitor ที่ Baudrate 115200 สังเกตไฟกะพริบ จากนั้นลองกดปุ่มฉุกเฉินรัวๆ"
          }
        ],
        verification: "ไฟ LED ยังคงกะพริบด้วยจังหวะคงที่สม่ำเสมออย่างสมบูรณ์ และทุกครั้งที่กดปุ่มฉุกเฉิน ข้อมูลแจ้งเตือนฉุกเฉินจะปรากฏขึ้นบน Serial Monitor ในเสี้ยววินาทีโดยที่ไฟ LED ไม่มีอาการกระตุกหรือหยุดนิ่งแม้แต่น้อย"
      }
    },

    {
      id: "iot-3",
      title: "โปรโตคอลการสื่อสารเซนเซอร์ระดับฮาร์ดแวร์ (Single-Wire, I2C, SPI) และการปรับเทียบข้อมูล",
      description: "เปรียบเทียบมาตรฐานการสื่อสารระหว่างชิป: Single-wire (DHT22), I2C (Inter-Integrated Circuit 2 สาย) และ SPI (Serial Peripheral Interface 4 สายความเร็วสูง), การคำนวณ CRC และการกรองสัญญาณรบกวน",
      duration: "50 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรมโปรโตคอลการสื่อสารเซนเซอร์: Single-Wire, I2C และ SPI

ในการพัฒนาระบบ IoT ทางกายภาพ เซนเซอร์และชิปขยายขาไม่ได้ส่งข้อมูลแบบแรงดันธรรมดาเสมอไป แต่สื่อสารผ่านโปรโตคอลอนุกรมระดับดิจิทัล (Digital Serial Protocols) ซึ่งมีความเร็ว ความซับซ้อน และข้อจำกัดทางกายภาพที่แตกต่างกัน

---

## 1. ตารางเปรียบเทียบโปรโตคอลการเชื่อมต่อฮาร์ดแวร์ยอดนิยม

| คุณสมบัติ | Single-Wire (เช่น DHT22 / DS18B20) | I2C (Inter-Integrated Circuit) | SPI (Serial Peripheral Interface) |
|---|---|---|---|
| **จำนวนสายสัญญาณ** | 1 เส้น (Data) + VCC/GND | 2 เส้น (SDA, SCL) + VCC/GND | 4 เส้น (MOSI, MISO, SCK, CS/SS) |
| **สถาปัตยกรรม** | Master / Multi-drop | Master / Multi-Slave (ระบุด้วย 7-bit Address) | Master / Multi-Slave (ระบุด้วยสายชิปซีเลกต์ CS) |
| **ความเร็วในการส่งข้อมูล** | ต่ำมาก (ประมาณ $1 - 16\\text{ kbps}$) | มาตรฐาน $100\\text{ kHz}$, Fast $400\\text{ kHz}$, High $3.4\\text{ MHz}$ | สูงมาก ($10\\text{ MHz} - 80\\text{ MHz}+$) |
| **โหมดการส่งข้อมูล** | Half-Duplex (สลับกันพูด) | Half-Duplex (สื่อสารสองทิศทางสลับกัน) | Full-Duplex (ส่งและรับพร้อมกันได้ในรอบ Clock เดียวกัน) |
| **ความต้องการตัวต้านทาน** | ต้องต่อ Pull-up $4.7\\text{k}\\Omega - 10\\text{k}\\Omega$ | **ต้องมี Pull-up บน SDA และ SCL** ($4.7\\text{k}\\Omega$) | ไม่ต้องใช้ Pull-up (Push-Pull Drivers) |
| **อุปกรณ์ตัวอย่าง** | DHT11/22, DS18B20 1-Wire | BME280, OLED SSD1306, RTC DS3231, MPU6050 | จอแสดงผล TFT LCD, SD Card Module, LoRa SX1278 |

---

## 2. เจาะลึกโปรโตคอล I2C (Inter-Integrated Circuit)

I2C พัฒนาโดย Philips Semiconductor (NXP) ใช้สายสัญญาณเพียง 2 เส้น:
- **SDA (Serial Data):** สายส่งข้อมูลดิจิทัลแบบสองทิศทาง
- **SCL (Serial Clock):** สายสัญญาณนาฬิกากำหนดจังหวะควบคุมโดย Master

\`\`\`
   VCC (3.3V)
    │     │
   [R]   [R]   Pull-up Resistors (4.7k)
    │     │
    ├─── SCL ────────────────┬───────────────────┬────────
    │                        │ SCL               │ SCL
    │                   ┌────┴─────┐        ┌────┴─────┐
    └─── SDA ───────────┤   Slave  │   ┌────┤   Slave  │
                        │  BME280  │   │    │  OLED    │
                        │  (0x76)  │   │    │  (0x3C)  │
                        └────┬─────┘   │    └────┬─────┘
                             │ SDA     │         │ SDA
                             └─────────┴─────────┘
\`\`\`

### ลำดับการสื่อสารเฟรม I2C (I2C Frame Sequence):
1. **START Condition:** สาย SDA ตกจาก HIGH เป็น LOW ในขณะที่ SCL ยังคงเป็น HIGH
2. **Slave Address (7 บิต):** ส่งรหัสที่อยู่ของอุปกรณ์เป้าหมาย (เช่น \`0x3C\` สำหรับจอ OLED)
3. **Read/Write Bit (1 บิต):** $0 = \\text{Write}$ (มาสเตอร์ส่งข้อมูล), $1 = \\text{Read}$ (มาสเตอร์ขอรับข้อมูล)
4. **ACK / NACK (1 บิต):** อุปกรณ์ Slave ดึงสาย SDA ลง LOW เพื่อตอบรับว่าได้รับแล้ว (Acknowledge)
5. **Data Bytes (8 บิต):** ข้อมูลจริง พร้อมบิต ACK ทุกๆ ไบต์
6. **STOP Condition:** สาย SDA เปลี่ยนจาก LOW เป็น HIGH ในขณะที่ SCL เป็น HIGH

---

## 3. การคำนวณเซนเซอร์วัดระยะทางอัลตราโซนิก (HC-SR04) และการชดเชยอุณหภูมิ

เซนเซอร์อัลตราโซนิก HC-SR04 ส่งคลื่นเสียงความถี่ $40\\text{ kHz}$ ออกไปทางทรานสดิวเซอร์ตัวส่ง (Trigger) แล้วจับเวลาที่คลื่นสะท้อนกลับมาเข้าตัวรับ (Echo)
ความเร็วของเสียงในอากาศแปรผันตรงกับอุณหภูมิแวดล้อมตามสูตร:
$$v = 331.3 + (0.606 \\times T) \\quad \\text{เมตรต่อวินาที}$$
โดยที่ $T$ คืออุณหภูมิในหน่วยองศาเซลเซียส (°C)

สูตรคำนวณระยะทางที่แท้จริง:
$$\\text{Distance (cm)} = \\frac{\\text{Echo Time (}\\mu\\text{s)} \\times v \\times 100}{2 \\times 1,000,000}$$`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การสแกนบัส I2C เพื่อค้นหาที่อยู่ฮาร์ดแวร์ (I2C Bus Scanner)
// และการเชื่อมต่อเซนเซอร์ BME280 / OLED ผ่าน I2C Wire Library
// =================================================================

#include <Arduino.h>
#include <Wire.h>

void scanI2CDevices() {
  byte error, address;
  int nDevices = 0;

  Serial.println(F("\\n[I2C] กำลังเริ่มต้นตรวจสอบอุปกรณ์บนบัส I2C..."));
  Serial.println(F("     0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F"));

  for (address = 1; address < 127; address++) {
    // การเริ่มต้นส่งสัญญาณไปยัง Address เป้าหมายเพื่อรอรับบิต ACK
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0) {
      Serial.print(F("[FOUND] ตรวจพบอุปกรณ์ที่ Address: 0x"));
      if (address < 16) Serial.print(F("0"));
      Serial.print(address, HEX);

      // ตัวอย่างการระบุประเภทอุปกรณ์ยอดนิยมตามมาตรฐานผู้ผลิต
      if (address == 0x3C || address == 0x3D) Serial.println(F(" (จอแสดงผล OLED SSD1306)"));
      else if (address == 0x76 || address == 0x77) Serial.println(F(" (เซนเซอร์สภาพอากาศ BME280/BMP280)"));
      else if (address == 0x68) Serial.println(F(" (ไจโรสโคป/RTC DS3231/MPU6050)"));
      else Serial.println();

      nDevices++;
    } else if (error == 4) {
      Serial.print(F("[ERROR] เกิดข้อผิดพลาดที่ไม่รู้จักที่ Address: 0x"));
      if (address < 16) Serial.print(F("0"));
      Serial.println(address, HEX);
    }
  }

  if (nDevices == 0) {
    Serial.println(F("[WARNING] ไม่พบอุปกรณ์ I2C ใดๆ! โปรดตรวจสอบสาย SDA, SCL และตัวต้านทาน Pull-up"));
  } else {
    Serial.println(F("[SUCCESS] การสแกนเสร็จสิ้นสมบูรณ์"));
  }
}

void setup() {
  Serial.begin(115200);
  
  // กำหนดขา I2C บน ESP32 (ค่าเริ่มต้นคือ SDA=21, SCL=22) หรือ Arduino UNO (A4, A5)
  #if defined(ESP32)
  Wire.begin(21, 22);
  #else
  Wire.begin();
  #endif

  scanI2CDevices();
}

void loop() {
  // สแกนซ้ำทุก 10 วินาที
  delay(10000);
  scanI2CDevices();
}`,
        description: "สคริปต์วิศวกรรม I2C Scanner ตรวจสอบหาที่อยู่ Address ทางกายภาพของเซนเซอร์และจอแสดงผลบนบัส"
      },
      quiz: [
        {
          id: "iot-3-q1",
          question: "เหตุใดบัส I2C จึงต้องการตัวต้านทาน Pull-up (ปกติค่า 4.7k Ohm) บนสาย SDA และ SCL เสมอ?",
          options: [
            "เพื่อแปลงแรงดันจากไฟฟ้ากระแสสลับเป็นกระแสตรง",
            "เพราะเอาต์พุตของอุปกรณ์ I2C เป็นแบบ Open-Drain/Open-Collector ซึ่งดึงแรงดันลงกราวด์ได้อย่างเดียว จึงต้องมีตัวต้านทานดึงสายกลับขึ้น HIGH ในสภาวะ Idle",
            "เพื่อป้องกันกระแสไฟไหลย้อนกลับเข้าพอร์ต USB",
            "เพื่อเพิ่มความเร็วในการส่งข้อมูลให้เทียบเท่ากับ SPI"
          ],
          correctAnswer: 1,
          explanation: "มาตรฐาน I2C ใช้วงจร Open-Drain เพื่อให้อุปกรณ์หลายตัวสามารถแชร์สายร่วมกันได้โดยไม่เกิดไฟช็อตชนกัน (Bus Contention) สายสัญญาณจะลอยและกลับสู่สภาวะตรรกะ HIGH ได้ต่อเมื่อมีตัวต้านทาน Pull-up ดึงขึ้นไปหา VCC"
        },
        {
          id: "iot-3-q2",
          question: "หากต้องการแสดงผลข้อมูลกราฟิกความเร็วสูง (เช่น แสดงภาพเคลื่อนไหวบนจอสี TFT LCD 60 FPS) ควรเลือกใช้โปรโตคอลใดเพราะเหตุใด?",
          options: [
            "Single-Wire เพราะมีสายเพียงเส้นเดียวไม่เปลืองสาย",
            "I2C เพราะเขียนโค้ดง่ายที่สุด",
            "SPI เพราะส่งข้อมูลแบบ Full-Duplex ด้วยสัญญาณนาฬิกาความเร็วสูงระดับหลายสิบ MHz (Megahertz)",
            "UART เพราะใช้คำสั่ง Serial.print() ได้ทันที"
          ],
          correctAnswer: 2,
          explanation: "SPI มีอัตราส่งผ่านข้อมูล (Throughput) สูงที่สุดในกลุ่มบัสระดับบอร์ด โดยทั่วไปทำความเร็วได้ตั้งแต่ 10MHz ถึง 80MHz จึงเหมาะกับจอภาพสีและการ์ดหน่วยความจำ SD Card"
        }
      ],
      labGuide: {
        title: "แล็บสแกนที่อยู่และเชื่อมต่อจอแสดงผล OLED SSD1306 ผ่าน I2C",
        toolName: "Wokwi Simulator",
        downloadUrl: "https://wokwi.com/",
        objective: "ต่อจอแสดงผลกราฟิก OLED 128x64 พิกเซลเข้ากับบอร์ด ESP32 ผ่านบัส I2C (SDA=21, SCL=22) และเขียนโปรแกรมแสดงผลตัวเลขอุณหภูมิและกราฟแท่ง",
        steps: [
          {
            title: "เพิ่มชิ้นส่วนใน Wokwi",
            detail: "เปิด Wokwi เลือกบอร์ด ESP32 แล้วกด '+' เพิ่ม 'OLED I2C 128x64 (SSD1306)'"
          },
          {
            title: "เชื่อมต่อสายสัญญาณ I2C",
            detail: "ต่อขา VCC ของ OLED เข้าที่ 3.3V, ขา GND เข้า GND, ขา SCL เข้าที่ GPIO 22, และขา SDA เข้าที่ GPIO 21"
          },
          {
            title: "ติดตั้งไลบรารี Adafruit_SSD1306",
            detail: "ในแท็บ Library Manager บน Wokwi เพิ่มชื่อไลบรารี: Adafruit SSD1306 และ Adafruit GFX Library"
          },
          {
            title: "คอมไพล์และทดสอบ",
            detail: "เขียนโค้ดเริ่มต้น display.begin(SSD1306_SWITCHCAPVCC, 0x3C) สั่งวาดข้อความและกด Start Simulation"
          }
        ],
        verification: "จอ OLED บนหน้าจอจำลองต้องแสดงผลข้อความ 'IT ACADEMY - I2C OK' และมีกราฟจำลองค่าเซนเซอร์อัปเดตแบบเรียลไทม์อย่างชัดเจน"
      }
    },

    // ---------------- ระดับปานกลาง (Intermediate) ----------------
    {
      id: "iot-4",
      title: "เจาะลึกสถาปัตยกรรม Espressif ESP32: Dual-Core, Strapping Pins, Wi-Fi Station & Web Server",
      description: "วิเคราะห์โครงสร้างภายใน ESP32 Xtensa LX6 Dual-Core 240MHz, หน่วยความจำ SRAM/Flash, ขาควบคุมการบูต (Strapping Pins), ข้อจำกัดของ ADC2 กับ Wi-Fi, โหมดประหยัดพลังงาน Deep Sleep และการสร้าง Asynchronous Web Server",
      duration: "60 นาที",
      level: "ปานกลาง",
      content: `# เจาะลึกสถาปัตยกรรมฮาร์ดแวร์ Espressif ESP32

**ESP32** ผลิตโดย Espressif Systems ถือเป็นมาตรฐานหลักของวงการวิศวกรรม IoT ระดับสากล ด้วยการผสานสมรรถนะการคำนวณขั้นสูงเข้ากับโมดูลวิทยุไร้สาย Wi-Fi และ Bluetooth ในต้นทุนระดับไม่กี่ดอลลาร์

---

## 1. ข้อมูลทางเทคนิคสถาปัตยกรรม (ESP32 Technical Specification)

- **หน่วยประมวลผล (Processor):** Xtensa Dual-Core 32-bit LX6 ไมโครโปรเซสเซอร์ ความเร็วสัญญาณนาฬิกา $160\\text{ MHz}$ หรือ $240\\text{ MHz}$ (สมรรถนะคำนวณสูงถึง 600 DMIPS)
  - **Core 0 (PRO_CPU - Protocol CPU):** โดยระบบ FreeRTOS จะใช้คอร์นี้จัดการสแตกเน็ตเวิร์ก Wi-Fi, Bluetooth และ TCP/IP
  - **Core 1 (APP_CPU - Application CPU):** จัดการโค้ดเฟิร์มแวร์หลักของนักพัฒนา เช่น ลูปคำนวณ กราฟิก และการอ่านเซนเซอร์
- **หน่วยความจำภายใน (Memory):**
  - $520\\text{ KB}$ Internal SRAM (จัดสรรเป็น Data/Instruction RAM)
  - $448\\text{ KB}$ ROM (สำหรับฟังก์ชันการบูตและฟังก์ชันพื้นฐาน)
  - ภายนอกชิป: Flash Memory ขนาด $4\\text{MB} - 16\\text{MB}$ สื่อสารผ่านบัส SPI ความเร็วสูง
  - ออปชันเสริม: $4\\text{MB} - 8\\text{MB}$ External PSRAM (Pseudo-Static RAM) สำหรับงานภาพถ่ายกล้อง ESP32-CAM
- **ระบบเครือข่ายไร้สาย (RF Transceiver):**
  - Wi-Fi 802.11 b/g/n ย่านความถี่ $2.4\\text{ GHz}$ (ความเร็วสูงสุด 150 Mbps)
  - Bluetooth v4.2 BR/EDR และ Bluetooth Low Energy (BLE)

---

## 2. ขาควบคุมการบูตระบบ (Strapping Pins) และกับดักที่พบบ่อย

ก่อนที่ ESP32 จะบูตเข้าสู่โปรแกรมปกติ ตัว ROM Bootloader จะตรวจสอบระดับแรงดันลอจิกของขา **Strapping Pins** ขาเหล่านี้จึงมีพฤติกรรมพิเศษที่ต้องระวังในการต่อวงจร:

| หมายเลขพิน | สภาวะที่ต้องการตอนบูต | ผลกระทบหากต่อวงจรภายนอกผิดพลาด |
|---|---|---|
| **GPIO 0** | **HIGH (เข้า SPI Flash Boot)** | หากถูกดึงลง **LOW** ในขณะรีเซ็ต ESP32 จะเข้าสู่ **Download Bootloader (โหมดรอแฟลชโปรแกรม)** ทำให้โปรแกรมไม่ยอมรัน |
| **GPIO 2** | **LOW หรือไม่ต่อ (Floating)** | เชื่อมกับหลอด LED สีน้ำเงินบนบอร์ด DevKit หากดึงเป็น HIGH บางรุ่นอาจบูตไม่ขึ้น |
| **GPIO 12 (MTDI)** | **LOW** | กำหนดแรงดันไฟเลี้ยง Flash Memory ($3.3\\text{ V}$ vs $1.8\\text{ V}$) หากต่อดึงขึ้น HIGH ชิปอาจอ่าน Flash ผิดพลาดและบูตลูปวน |
| **GPIO 15** | **HIGH** | ควบคุมข้อความเอาต์พุต Debug ทาง UART0 ตอนเปิดเครื่อง |

> [!WARNING]
> **ข้อจำกัดวิกฤตของ ADC2 กับโมดูล Wi-Fi (ADC2 Wi-Fi Conflict):**
> ภายในชิป ESP32 มีวงจรแปลงแอนะล็อกเป็นดิจิทัล 2 ชุด คือ **ADC1 (GPIO 32 - 39)** และ **ADC2 (GPIO 0, 2, 4, 12-15, 25-27)**
> วงจร **ADC2 ถูกแชร์ใช้งานร่วมกับไดรเวอร์ Wi-Fi** ดังนั้น ทันทีที่มีการเรียกคำสั่ง \`WiFi.begin()\` วงจร ADC2 จะถูกบล็อก ไม่สามารถอ่านค่าแอนะล็อกได้อีกต่อไป!
> **แนวทางปฏิบัติ:** หากต้องการอ่านค่าเซนเซอร์แอนะล็อกในขณะที่เปิดใช้งาน Wi-Fi ต้องต่อเข้ากับขาในกลุ่ม **ADC1 (GPIO 32, 33, 34, 35, 36, 39)** เท่านั้น! ขา GPIO 34-39 เป็นขารับอินพุตได้อย่างเดียว (Input-only pins ไม่มีตัวต้านทาน Pull-up/Pull-down ภายใน)

---

## 3. สถาปัตยกรรม Web Server: Synchronous vs Asynchronous

ในการควบคุมอุปกรณ์ IoT ผ่านเบราว์เซอร์ การใช้ \`WebServer.h\` ปกติจะเป็นแบบ **Synchronous (Blocking)** หากหน้าเว็บมีไฟล์รูปภาพขนาดใหญ่และเบราว์เซอร์ส่งรีเควสต์มาพร้อมกันหลายไฟล์ บอร์ดอาจเกิดอาการค้างหรือ Watchdog Reset
แนวทางระดับโปรดักชันจะใช้ **ESPAsyncWebServer** ซึ่งทำงานบนสถาปัตยกรรม Non-blocking Event-driven รองรับหลายการเชื่อมต่อพร้อมกันอย่างมีเสถียรภาพ`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การสร้าง RESTful Web Server ควบคุมอุปกรณ์บน ESP32
// โหมด Wi-Fi Station (STA) พร้อมส่งคืนข้อมูลสถานะแบบ JSON
// =================================================================

#include <WiFi.h>
#include <WebServer.h>

// คอนฟิกการเชื่อมต่อเครือข่าย Wi-Fi
const char* WIFI_SSID = "Office_WiFi_2.4G";
const char* WIFI_PASS = "EngineeringPass2026";

WebServer server(80); // เปิดบริการ Web Server บนพอร์ตมาตรฐาน 80
const uint8_t RELAY_PIN = 23; // ขาควบคุมรีเลย์
bool relayState = false;

// ฟังก์ชันส่งหน้าควบคุมหลัก (HTML Dashboard)
void handleRoot() {
  String html = "<!DOCTYPE html><html><head><meta charset='utf-8'>";
  html += "<meta name='viewport' content='width=device-width, initial-scale=1'>";
  html += "<title>ESP32 Industrial Controller</title>";
  html += "<style>body{font-family:sans-serif;text-align:center;padding:20px;background:#f0f2f5;}";
  html += ".card{background:white;padding:30px;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);display:inline-block;}";
  html += ".btn{padding:12px 28px;font-size:18px;border:none;border-radius:8px;cursor:pointer;color:white;margin-top:15px;}";
  html += ".on{background:#10b981;} .off{background:#ef4444;}</style></head><body>";
  html += "<div class='card'><h2>สวิตช์ควบคุมรีเลย์ ESP32</h2>";
  html += "<p>สถานะปัจจุบัน: <b>" + String(relayState ? "เปิดใช้งาน (ON)" : "ปิดใช้งาน (OFF)") + "</b></p>";
  html += "<a href='/toggle'><button class='btn " + String(relayState ? "off" : "on") + "'>";
  html += relayState ? "กดเพื่อปิดไฟ" : "กดเพื่อเปิดไฟ";
  html += "</button></a></div></body></html>";

  server.send(200, "text/html", html);
}

// ฟังก์ชัน REST API ส่งคืนสถานะในรูปแบบ JSON สำหรับ Mobile App / Frontend
void handleApiStatus() {
  String json = "{";
  json += "\\"device\\":\\"ESP32_Core\\",";
  json += "\\"relay\\":" + String(relayState ? "true" : "false") + ",";
  json += "\\"uptime_ms\\":" + String(millis()) + ",";
  json += "\\"rssi\\":" + String(WiFi.RSSI());
  json += "}";
  server.send(200, "application/json", json);
}

// ฟังก์ชันสลับสถานะรีเลย์
void handleToggle() {
  relayState = !relayState;
  digitalWrite(RELAY_PIN, relayState ? HIGH : LOW);
  server.sendHeader("Location", "/");
  server.send(303); // Redirect กลับหน้าแรก
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);

  // ตั้งค่าโหมด Wi-Fi Station
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASS);

  Serial.print(F("[WIFI] กำลังเชื่อมต่อไปยังเครือข่าย"));
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(F("."));
  }
  
  Serial.println(F("\\n[WIFI] เชื่อมต่อสำเร็จ!"));
  Serial.print(F("[WIFI] IP Address ที่ได้รับ: http://"));
  Serial.println(WiFi.localIP());

  // ลงทะเบียนเส้นทาง URL Endpoints
  server.on("/", HTTP_GET, handleRoot);
  server.on("/toggle", HTTP_GET, handleToggle);
  server.on("/api/status", HTTP_GET, handleApiStatus);

  server.begin();
  Serial.println(F("[HTTP] Web Server เริ่มต้นการทำงานบนพอร์ต 80"));
}

void loop() {
  server.handleClient(); // จัดการคำขอ HTTP ที่เข้ามาแบบ Synchronous
} // end loop`,
        description: "สคริปต์ ESP32 Web Server โหมด Station ให้บริการหน้าเว็บ HTML Responsive พร้อม REST API JSON"
      },
      quiz: [
        {
          id: "iot-4-q1",
          question: "หากต้องการอ่านสัญญาณแอนะล็อกในขณะที่เปิดใช้งาน Wi-Fi บน ESP32 ทำไมจึงต้องใช้ขาในกลุ่ม ADC1 (GPIO 32-39) เท่านั้น?",
          options: [
            "เพราะขา ADC1 อ่านได้เร็วกว่า ADC2 สองเท่า",
            "เพราะวงจรภายในของ ADC2 ถูกแชร์ใช้งานร่วมกับโมดูล Wi-Fi การเปิดใช้งาน Wi-Fi จะบล็อกไม่ให้ไดรเวอร์ ADC2 ทำงาน",
            "เพราะขา ADC2 ไม่มีวงจรกราวด์ภายใน",
            "เพราะขา ADC1 รับแรงดันได้สูงสุด 12V"
          ],
          correctAnswer: 1,
          explanation: "ตามเอกสาร Espressif Technical Reference Manual ฮาร์ดแวร์ ADC2 มีวงจรแปลงสัญญาณร่วมกับตัวรับส่งสัญญาณ Wi-Fi SAR ADC เมื่อเปิด Wi-Fi แล้ว ระบบจะสงวนการใช้ ADC2 ให้กับงานสอบเทียบสัญญาณวิทยุทันที"
        },
        {
          id: "iot-4-q2",
          question: "หากขา GPIO 0 ของ ESP32 ถูกดึงลงสถานะ LOW ในขณะจ่ายไฟเปิดเครื่องหรือกดปุ่ม Reset จะเกิดอะไรขึ้น?",
          options: [
            "บอร์ดจะเข้าสู่โหมดประหยัดพลังงาน Deep Sleep",
            "ชิปจะเข้าสู่ UART Download Bootloader เพื่อรอรับการแฟลชโปรแกรมใหม่ ทำให้โปรแกรมเดิมไม่ทำงาน",
            "ชิปจะเพิ่มความเร็วสัญญาณนาฬิกาเป็น 240MHz",
            "ชิปจะทำการฟอร์แมตหน่วยความจำ Flash ทันที"
          ],
          correctAnswer: 1,
          explanation: "GPIO 0 เป็น Strapping Pin หลักในการเลือกระหว่าง SPI Flash Boot (HIGH) กับ UART Download Bootloader (LOW) เพื่อให้อัปโหลดโปรแกรมได้ บอร์ดพัฒนาทั่วไปจึงมีวงจรสลับขานี้อัตโนมัติผ่านพิน DTR/RTS ของชิป USB"
        }
      ],
      labGuide: {
        title: "แล็บสร้าง Smart Switch ควบคุมรีเลย์ผ่าน Wi-Fi Web Server",
        toolName: "Wokwi Simulator",
        downloadUrl: "https://wokwi.com/",
        objective: "เขียนเฟิร์มแวร์เชื่อมต่อ Wi-Fi และเปิดบริการ Web Server เพื่อควบคุมหลอดไฟจำลองผ่านเว็บเบราว์เซอร์ พร้อมมอนิเตอร์ IP Address ทาง Serial",
        steps: [
          {
            title: "สร้างวงจรบน Wokwi",
            detail: "เปิด Wokwi เลือกบอร์ด ESP32 เพิ่มหลอด LED และตัวต้านทาน 220 โอห์มเข้าที่ขา GPIO 23"
          },
          {
            title: "คอนฟิก Wi-Fi จำลองของ Wokwi",
            detail: "ใน Wokwi ให้กำหนด SSID เป็น 'Wokwi-GUEST' และ password เป็นช่องว่าง \"\" (ไม่ต้องใส่รหัสผ่าน)"
          },
          {
            title: "อัปโหลดโค้ด Web Server",
            detail: "วางโค้ด C++ จากตัวอย่างบทเรียนลงใน sketch.ino และกดปุ่ม Start Simulation"
          },
          {
            title: "ทดสอบการสั่งงานข้ามเครือข่าย",
            detail: "สังเกต Serial Monitor จะมีข้อความแจ้ง URL เช่น http://10.0.1.xxx หรือ Wokwi จะมีปุ่มเสมือนให้คลิกเปิดหน้า Web Browser ในตัวจำลอง"
          }
        ],
        verification: "หน้าเว็บแสดงปุ่มควบคุม เมื่อคลิกที่ปุ่ม 'กดเพื่อเปิดไฟ' สถานะบนหน้าเว็บจะเปลี่ยนเป็น 'เปิดใช้งาน (ON)' และหลอด LED ขา 23 สว่างขึ้นทันที พร้อมตรวจสอบ endpoint /api/status คืนค่า JSON ถูกต้อง"
      }
    },

    {
      id: "iot-5",
      title: "โปรโตคอล MQTT สำหรับอุตสาหกรรม IoT และสถาปัตยกรรม Publish/Subscribe",
      description: "ทำความเข้าใจมาตรฐาน OASIS MQTT v3.1.1/v5.0, โครงสร้างลำดับชั้นของ Topic และ Wildcards, คุณภาพการส่งมอบข้อมูล (QoS 0, 1, 2), กลไก KeepAlive, Last Will and Testament (LWT) และการเชื่อมต่อคลัสเตอร์ EMQX",
      duration: "55 นาที",
      level: "ปานกลาง",
      content: `# สถาปัตยกรรมโปรโตคอล MQTT สำหรับระบบ IoT อุตสาหกรรม

**MQTT (Message Queuing Telemetry Transport)** เป็นโปรโตคอลการสื่อสารระดับสากล (ISO/IEC 20922) ที่ออกแบบมาเพื่อการรับส่งข้อมูลทางไกลบนเครือข่ายที่มีแบนด์วิดท์จำกัดและอุปกรณ์ที่ใช้พลังงานต่ำ เป็นหัวใจสำคัญของแพลตฟอร์ม Smart Factory, Smart City และ Home Assistant

---

## 1. เปรียบเทียบสถาปัตยกรรม: HTTP Client-Server vs MQTT Publish-Subscribe

\`\`\`
[ สถาปัตยกรรม HTTP REST: Client-Server (Polling) ]
  ESP32 (Client) ──── HTTP GET (Headers 500-800 Bytes) ────► Cloud Server
  ESP32 (Client) ◄─── HTTP 200 OK Response ───────────────── Cloud Server
  * ปัญหา: ต้องสร้าง TCP Handshake ใหม่ตลอดเวลา, เปลืองดาต้า, Server สั่งงานกลับหา Client หลัง NAT ไม่ได้!

[ สถาปัตยกรรม MQTT: Publish / Subscribe (Event-Driven) ]
  Publishers                          MQTT Broker (EMQX / HiveMQ)              Subscribers
  ┌──────────────┐                       ┌─────────────────────┐               ┌────────────────┐
  │ เซนเซอร์ ESP32│ ── Publish: temp ───► │                     │ ── Push ────► │ Mobile App     │
  └──────────────┘                       │ จัดการเส้นทางข้อมูล  │               └────────────────┘
  ┌──────────────┐                       │ ตาม Topic           │               ┌────────────────┐
  │ เซนเซอร์ ESP32│ ── Publish: hum ────► │ (Header เพียง 2 B)  │ ── Push ────► │ InfluxDB / Web │
  └──────────────┘                       └─────────────────────┘               └────────────────┘
\`\`\`

---

## 2. โครงสร้าง Topic และ Wildcards ในระบบ MQTT

Topic ใน MQTT มีลักษณะเป็นลำดับชั้น คล้ายกับเส้นทางโฟลเดอร์ คั่นด้วยเครื่องหมาย Slash (\`/\`)
**ตัวอย่างการตั้งชื่อตามมาตรฐาน:**
\`factory1/buildingA/floor2/machine04/telemetry/temperature\`

### ตัวอักขระ Wildcards สำหรับการ Subscribe ข้อมูล:
1. **Single-Level Wildcard (\`+\`):** แทนที่ 1 ลำดับชั้น
   - \`factory1/buildingA/+/machine04/telemetry/temperature\`
   - ดักฟังข้อมูลอุณหภูมิของเครื่อง machine04 จาก **ทุกชั้น** ในอาคาร A
2. **Multi-Level Wildcard (\`#\`):** แทนที่ทุกลำดับชั้นที่ตามหลังมาทั้งหมด (ต้องอยู่ท้ายสุดเสมอ)
   - \`factory1/buildingA/#\`
   - รับข้อความทั้งหมดที่เกิดขึ้นภายใต้อาคาร A ทุกชนิดเซนเซอร์

---

## 3. ระดับคุณภาพการให้บริการ (Quality of Service - QoS Levels)

\`\`\`
[ QoS 0: At most once (ส่งครั้งเดียว ดีที่สุดเท่าที่ทำได้) ]
  Sender ───────── PUBLISH ─────────► Receiver
  (ไม่มีการยืนยัน ข้อความอาจสูญหายได้ เหมาะกับข้อมูลเซนเซอร์สภาพอากาศที่ส่งถี่)

[ QoS 1: At least once (ถึงอย่างน้อยหนึ่งครั้ง มีการยืนยัน) ]
  Sender ───────── PUBLISH ─────────► Receiver
  Sender ◄──────── PUBACK  ────────── Receiver
  (หาก PUBACK ไม่กลับมาจะส่งซ้ำ ข้อความอาจซ้ำซ้อนได้)

[ QoS 2: Exactly once (ถึงแน่นอนและครั้งเดียวเท่านั้น - 4-Way Handshake) ]
  Sender ───────── PUBLISH ─────────► Receiver
  Sender ◄──────── PUBREC  ────────── Receiver
  Sender ───────── PUBREL  ─────────► Receiver
  Sender ◄──────── PUBCOMP ────────── Receiver
  (ปลอดภัยสูงสุด ป้องกันข้อมูลซ้ำ 100% เหมาะกับการเงินหรือสั่งเปิดประตู)
\`\`\`

---

## 4. คุณสมบัติขั้นสูงของ MQTT: Retain และ Last Will and Testament (LWT)

- **Retained Message:** สั่งให้ Broker เก็บบันทึกข้อความล่าสุดของ Topic นั้นไว้บนหน่วยความจำ เมื่อมี Subscriber รายใหม่เชื่อมต่อเข้ามา จะได้รับสถานะล่าสุดทันทีโดยไม่ต้องรอให้อุปกรณ์ส่งข้อมูลรอบถัดไป
- **Last Will and Testament (LWT):** ในขั้นตอนการเชื่อมต่อ Client จะฝาก "พินัยกรรม" ไว้กับ Broker หากอุปกรณ์ตัดการเชื่อมต่อแบบกะทันหัน (เน็ตหลุด, ไฟดับ) Broker จะส่งข้อความแจ้งเตือน (เช่น \`status = "offline"\`) ไปยัง Topic ที่กำหนดไว้แทนทันที`,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// การเชื่อมต่อ MQTT ระดับอุตสาหกรรมด้วย PubSubClient
// รองรับ LWT (พินัยกรรม), Retain Message, และ Auto-Reconnect
// =================================================================

#include <WiFi.h>
#include <PubSubClient.h>

const char* WIFI_SSID = "IoT_Factory_Network";
const char* WIFI_PASS = "IndustrialKey99";

// กำหนด MQTT Broker (ตัวอย่างใช้ Public Test Broker ของ EMQX)
const char* MQTT_BROKER = "broker.emqx.io";
const int MQTT_PORT = 1883;

// หัวข้อ Topic มาตรฐาน
const char* TOPIC_TELEMETRY = "itacademy/lab/esp32_node1/telemetry";
const char* TOPIC_COMMAND   = "itacademy/lab/esp32_node1/command/#";
const char* TOPIC_STATUS    = "itacademy/lab/esp32_node1/status";

WiFiClient espClient;
PubSubClient mqttClient(espClient);

uint32_t lastPublishMillis = 0;
const uint32_t PUBLISH_INTERVAL = 5000; // ส่งข้อมูลทุกๆ 5 วินาที

// ฟังก์ชัน Callback เมื่อได้รับข้อความจาก Topic ที่ Subscribe ไว้
void mqttCallback(char* topic, byte* payload, unsigned int length) {
  String message = "";
  for (unsigned int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.print(F("[MQTT RECV] จาก Topic: "));
  Serial.print(topic);
  Serial.print(F(" | ข้อความ: "));
  Serial.println(message);

  // ควบคุมอุปกรณ์ตามคำสั่ง
  if (String(topic) == "itacademy/lab/esp32_node1/command/relay") {
    if (message == "ON") {
      digitalWrite(2, HIGH);
      Serial.println(F("-> สั่งเปิดรีเลย์สำเร็จ"));
    } else if (message == "OFF") {
      digitalWrite(2, LOW);
      Serial.println(F("-> สั่งปิดรีเลย์สำเร็จ"));
    }
  }
}

// ฟังก์ชันเชื่อมต่อ Broker พร้อมคอนฟิก Last Will and Testament (LWT)
void reconnectMQTT() {
  while (!mqttClient.connected()) {
    Serial.print(F("[MQTT] กำลังเชื่อมต่อไปยัง Broker..."));
    String clientId = "ESP32_Device_" + String(WiFi.macAddress());

    // กำหนด LWT: หากขาดการเชื่อมต่อ ให้ Broker ส่ง "offline" (Retain = true, QoS = 1)
    if (mqttClient.connect(clientId.c_str(), 
                           TOPIC_STATUS, 1, true, "offline")) {
      Serial.println(F(" สำเร็จ!"));
      
      // เมื่อต่อสำเร็จ ส่งสถานะ "online" ทันทีแบบ Retained Message
      mqttClient.publish(TOPIC_STATUS, "online", true);

      // Subscribe รับคำสั่งควบคุม
      mqttClient.subscribe(TOPIC_COMMAND, 1);
    } else {
      Serial.print(F(" ล้มเหลว, รหัส rc="));
      Serial.print(mqttClient.state());
      Serial.println(F(" จะลองใหม่ในอีก 4 วินาที..."));
      delay(4000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(2, OUTPUT); // ขาไฟสถานะ

  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(F("."));
  }
  Serial.println(F("\\n[WIFI] เชื่อมต่อสำเร็จ"));

  mqttClient.setServer(MQTT_BROKER, MQTT_PORT);
  mqttClient.setCallback(mqttCallback);
}

void loop() {
  if (!mqttClient.connected()) {
    reconnectMQTT();
  }
  mqttClient.loop(); // จำเป็นอย่างยิ่งในการรักษาสัญญาณ KeepAlive Ping และประมวลผล Callback

  uint32_t currentMillis = millis();
  if (currentMillis - lastPublishMillis >= PUBLISH_INTERVAL) {
    lastPublishMillis = currentMillis;

    // จำลองการอ่านค่าเซนเซอร์
    float temperature = 28.5 + (random(-10, 10) / 10.0);
    float humidity = 65.0 + (random(-20, 20) / 10.0);

    // สร้างเพย์โหลด JSON
    String payload = "{";
    payload += "\\"temperature\\":" + String(temperature, 1) + ",";
    payload += "\\"humidity\\":" + String(humidity, 1) + ",";
    payload += "\\"rssi\\":" + String(WiFi.RSSI());
    payload += "}";

    // ส่งข้อมูล Telemetry แบบ QoS 0
    mqttClient.publish(TOPIC_TELEMETRY, payload.c_str());
    Serial.print(F("[MQTT PUB] ส่งข้อมูล: "));
    Serial.println(payload);
  }
}`,
        description: "สคริปต์ MQTT Client ระดับโปรดักชันพร้อม LWT อัจฉริยะ, Retain Status, และการ Subscribe ควบคุมอุปกรณ์"
      },
      quiz: [
        {
          id: "iot-5-q1",
          question: "หากต้องการติดตามอุณหภูมิของอุปกรณ์เซนเซอร์ทุกตัวในทุกสายการผลิตของโรงงาน ควรใช้ Topic Filter ใดในการ Subscribe?",
          options: [
            "factory/line1/sensor/temperature",
            "factory/+/+/temperature",
            "factory/#/temperature",
            "factory/+"
          ],
          correctAnswer: 1,
          explanation: "เครื่องหมาย '+' แทนที่ 1 ระดับชั้น ดังนั้น 'factory/+/+/temperature' จะดักฟังข้อมูลที่ตำแหน่ง factory/<ชื่อไลน์ใดๆ>/<ชื่อเซนเซอร์ใดๆ>/temperature ได้อย่างถูกต้อง"
        },
        {
          id: "iot-5-q2",
          question: "กลไก Last Will and Testament (LWT) ใน MQTT มีบทบาทสำคัญอย่างไรต่อความน่าเชื่อถือของระบบ?",
          options: [
            "ช่วยเพิ่มความเร็วในการส่งข้อมูลผ่านดาวเทียม",
            "ทำให้ Broker แจ้งสถานะออฟไลน์ของอุปกรณ์ให้ระบบทราบทันที เมื่ออุปกรณ์หลุดจากการเชื่อมต่ออย่างผิดปกติ เช่น ไฟดับหรือสายหลุด",
            "ทำการรีบูตชิป ESP32 อัตโนมัติเมื่อเกิดข้อผิดพลาด",
            "บีบอัดข้อมูลแบบ Gzip ก่อนส่งออกสู่อินเทอร์เน็ต"
          ],
          correctAnswer: 1,
          explanation: "LWT ถูกตั้งค่าไว้ล่วงหน้าตอน Handshake หากการเชื่อมต่อ TCP ขาดลงโดยไม่มีคำสั่ง DISCONNECT ปกติ Broker จะเผยแพร่ข้อความพินัยกรรมนี้ทันที ทำให้ Dashboard ทราบว่าอุปกรณ์ดับไปแล้ว"
        }
      ],
      labGuide: {
        title: "แล็บทดสอบระบบ Telemetry และการสั่งการระยะไกลผ่าน EMQX Public Broker",
        toolName: "Wokwi Simulator & MQTTX Client",
        downloadUrl: "https://mqttx.app/",
        objective: "เชื่อมต่อ ESP32 เข้ากับ EMQX MQTT Broker ส่งข้อมูลอุณหภูมิจำลองทุก 5 วินาที และใช้โปรแกรม MQTTX บนคอมพิวเตอร์ Publish คำสั่งเพื่อควบคุมไฟ LED",
        steps: [
          {
            title: "รันโค้ดบน Wokwi",
            detail: "เปิด Wokwi ESP32 ใส่โค้ด MQTT จากบทเรียน (เชื่อมต่อ broker.emqx.io พอร์ต 1883) และกดปุ่ม Play"
          },
          {
            title: "เปิดโปรแกรม MQTTX บนคอมพิวเตอร์",
            detail: "สร้างการเชื่อมต่อใหม่ (New Connection) ไปยัง Host: broker.emqx.io พอร์ต: 1883"
          },
          {
            title: "Subscribe รับค่าเซนเซอร์",
            detail: "กดปุ่ม New Subscription ระบุ Topic: 'itacademy/lab/esp32_node1/telemetry' แล้วสังเกตข้อมูล JSON ที่ส่งมาจาก ESP32"
          },
          {
            title: "Publish คำสั่งควบคุมไฟ",
            detail: "ส่งข้อความ 'ON' หรือ 'OFF' ไปที่ Topic: 'itacademy/lab/esp32_node1/command/relay'"
          }
        ],
        verification: "ในหน้าต่างโปรแกรม MQTTX จะได้รับข้อมูลอุณหภูมิที่อัปเดตทุก 5 วินาที และเมื่อกดส่งคำสั่ง 'ON' ข้อความตอบรับบน Serial Monitor ของ ESP32 จะระบุว่าสั่งเปิดรีเลย์สำเร็จทันที"
      }
    },

    {
      id: "iot-6",
      title: "การพัฒนาเฟิร์มแวร์ด้วย MicroPython บน ESP32 และ Raspberry Pi Pico",
      description: "ทำความเข้าใจสถาปัตยกรรม MicroPython Virtual Machine (VM), การบริหารหน่วยความจำและ Garbage Collector, การใช้งานโมดูล machine, และการทำงานแบบ Coroutine ขนานด้วย uasyncio",
      duration: "50 นาที",
      level: "ปานกลาง",
      content: `# การพัฒนาสมองกลฝังตัวด้วยภาษา MicroPython

**MicroPython** เป็นการพัฒนาซอฟต์แวร์ภาษา Python 3 แบบเต็มประสิทธิภาพที่ถูกคอมไพล์และปรับแต่งใหม่เพื่อทำงานบนไมโครคอนโทรลเลอร์ที่มีหน่วยความจำขนาดเล็กระดับกิโลไบต์ (RAM $\\ge 256\\text{ KB}$) ช่วยให้วิศวกรสามารถเขียนโค้ด ทดสอบแบบอินเทอร์แอคทีฟผ่าน REPL และสร้างระบบต้นแบบได้อย่างรวดเร็วกว่า C/C++ หลายเท่าตัว

---

## 1. วงจรชีวิตและโครงสร้างไฟล์ของ MicroPython

เมื่อไมโครคอนโทรลเลอร์ ESP32 จ่ายไฟเข้าบอร์ด ระบบ MicroPython จะเริ่มประมวลผลไฟล์ภายใน Flash Memory ตามลำดับอย่างเคร่งครัด:

\`\`\`
[ จ่ายไฟ / รีเซ็ตไมโครคอนโทรลเลอร์ ]
               │
               ▼
┌───────────────────────────────┐
│     boot.py (รันครั้งแรก)      │ ──► กำหนดค่าคอนฟิกระดับต่ำ, เชื่อมต่อ Wi-Fi, ตั้งค่าตัวแปรระบบ
└──────────────┬────────────────┘
               │ (สำเร็จ)
               ▼
┌───────────────────────────────┐
│     main.py (รันอัตโนมัติ)     │ ──► โค้ดโปรแกรมหลักของระบบ IoT, วงจรลูปการทำงาน, การอ่านเซนเซอร์
└──────────────┬────────────────┘
               │ (เมื่อโปรแกรมจบ หรือกด Ctrl+C)
               ▼
┌───────────────────────────────┐
│     MicroPython REPL Prompt   │ ──► พร้อมรับคำสั่งสดผ่าน Serial Terminal: '>>> '
└───────────────────────────────┘
\`\`\`

---

## 2. โมดูลฮาร์ดแวร์พื้นฐาน (\`machine\` Module)

MicroPython จัดการฮาร์ดแวร์ผ่านโมดูลมาตรฐานชื่อ \`machine\`:
- \`machine.Pin\`: จัดการขาอินพุต/เอาต์พุตดิจิทัล, ตัวต้านทาน Pull-up/Pull-down
- \`machine.ADC\`: แปลงสัญญาณแอนะล็อก ปรับอัตราขยายลดทอน (Attenuation เช่น \`ATTN_11DB\` รองรับช่วงแรงดัน $0 - 3.3\\text{ V}$)
- \`machine.PWM\`: สร้างสัญญาณการมอดูเลตความกว้างพัลส์สำหรับหรี่ไฟหรือขับเซอร์โว
- \`machine.I2C\` / \`machine.SoftI2C\`: สื่อสารบัส I2C ระดับฮาร์ดแวร์และซอฟต์แวร์

---

## 3. มัลติทาสก์แบบอะซิงโครนัสด้วย \`uasyncio\`

เนื่องจากไมโครคอนโทรลเลอร์มีทรัพยากรจำกัด การสร้างเธรด (Thread) จำนวนมากอาจทำให้แรมหมด (Memory Allocation Error) MicroPython จึงเตรียมโมดูล \`uasyncio\` ซึ่งเป็นกลไก **Cooperative Multitasking** โดยใช้ Event Loop และคีย์เวิร์ด \`async / await\` คล้ายกับ Node.js หรือ Python สมัยใหม่`,
      codeExample: {
        language: "python",
        code: `# =================================================================
# สคริปต์ MicroPython พัฒนาระบบ Multitasking ด้วย uasyncio บน ESP32
# กะพริบไฟ LED พร้อมอ่านค่า ADC และบริการเว็บเซิร์ฟเวอร์แบบอะซิงโครนัส
# =================================================================

import machine
import uasyncio as asyncio
import time
import gc

# 1. กำหนดฮาร์ดแวร์
led = machine.Pin(2, machine.Pin.OUT)
adc_pin = machine.Pin(34) # ขา ADC1 รองรับการอ่านพร้อม Wi-Fi
adc = machine.ADC(adc_pin)
adc.atten(machine.ADC.ATTN_11DB) # กำหนดช่วงวัดแรงดันสูงสุด 3.3V

# 2. Coroutine ที่ 1: กะพริบไฟแสดงสถานะระบบ (Heartbeat LED)
async def heartbeat_task():
    while True:
        led.value(1)
        await asyncio.sleep_ms(100) # คืนเวลาซีพียูให้ทาสก์อื่นทำงาน
        led.value(0)
        await asyncio.sleep_ms(900)

# 3. Coroutine ที่ 2: อ่านเซนเซอร์แอนะล็อกและจัดการขยะในหน่วยความจำ
async def sensor_monitor_task():
    while True:
        raw_val = adc.read() # อ่านค่า 0 - 4095 (12-bit)
        voltage = (raw_val / 4095.0) * 3.3
        print(f"[SENSOR] ค่าดิบ ADC: {raw_val} | แรงดัน: {voltage:.2f} V")
        
        # จัดการเคลียร์แรมเป็นระยะ ป้องกันปัญหา RAM Fragmentation
        gc.collect()
        print(f"[SYSTEM] แรมว่างคงเหลือ: {gc.mem_free()} Bytes")
        
        await asyncio.sleep(3) # ทำงานทุก 3 วินาที

# 4. ฟังก์ชันหลักในการรัน Event Loop
async def main():
    print("[SYSTEM] เริ่มต้นระบบ MicroPython uasyncio Multi-tasking...")
    # รันสองทาสก์พร้อมกันใน Event Loop เดียวกัน
    task1 = asyncio.create_task(heartbeat_task())
    task2 = asyncio.create_task(sensor_monitor_task())
    
    await asyncio.gather(task1, task2)

# จุดเริ่มต้นโปรแกรม
try:
    asyncio.run(main())
except KeyboardInterrupt:
    print("[SYSTEM] หยุดการทำงานโดยผู้ใช้")`,
        description: "สคริปต์ MicroPython แสดงการใช้ uasyncio รันงานคู่ขนานพร้อมการบริหารหน่วยความจำด้วย gc.collect()"
      },
      quiz: [
        {
          id: "iot-6-q1",
          question: "ในสถาปัตยกรรม MicroPython ไฟล์ใดจะถูกระบบรันเป็นลำดับแรกสุดเมื่อเริ่มจ่ายไฟให้ไมโครคอนโทรลเลอร์?",
          options: [
            "main.py",
            "index.py",
            "boot.py",
            "config.json"
          ],
          correctAnswer: 2,
          explanation: "MicroPython ออกแบบให้รันไฟล์ boot.py ก่อนเสมอ เพื่อเตรียมพร้อมระดับฮาร์ดแวร์และการเชื่อมต่อเน็ตเวิร์กเบื้องต้น จากนั้นจึงส่งต่อให้ main.py รันแอปพลิเคชันหลัก"
        },
        {
          id: "iot-6-q2",
          question: "เหตุใดในระบบสมองกลฝังตัว MicroPython จึงแนะนำให้เรียกคำสั่ง gc.collect() เป็นระยะ?",
          options: [
            "เพื่อลบไฟล์ที่ไม่ใช้งานใน Flash Memory ออก",
            "เพื่อกระตุ้น Garbage Collector ให้คืนพื้นที่หน่วยความจำแรมที่ไม่ได้ใช้งาน ป้องกันการเกิด RAM Fragmentation และ Memory Allocation Failed",
            "เพื่อทำให้ซีพียูโอเวอร์คล็อกความเร็วสูงขึ้น",
            "เพื่อลดอุณหภูมิของบอร์ดลงทันที"
          ],
          correctAnswer: 1,
          explanation: "ไมโครคอนโทรลเลอร์มีหน่วยความจำ RAM จำกัดมาก (ไม่กี่ร้อย KB) การจัดสรรตัวแปรบ่อยๆ จะทำให้เกิดช่องว่างกระจัดกระจาย (Fragmentation) การเรียก gc.collect() จะช่วยรวมและคืนพื้นที่ว่างให้พร้อมใช้งาน"
        }
      ],
      labGuide: {
        title: "แล็บการเขียนโปรแกรม MicroPython และทดสอบผ่าน REPL ด้วย Thonny IDE",
        toolName: "Thonny IDE",
        downloadUrl: "https://thonny.org/",
        objective: "เชื่อมต่อ Thonny IDE เข้ากับบอร์ด ESP32 ที่ติดตั้ง MicroPython Firmware ทดสอบสั่งงานขา GPIO สดผ่าน REPL และบันทึกไฟล์ main.py ลง Flash",
        steps: [
          {
            title: "เปิด Thonny และตั้งค่าคอนฟิก",
            detail: "เปิดโปรแกรม Thonny เลือก Tools > Options > Interpreter เลือก MicroPython (ESP32) และเลือก COM Port ให้ตรงกับบอร์ด"
          },
          {
            title: "ทดสอบคำสั่งสดบน REPL",
            detail: "พิมพ์คำสั่งในช่อง Prompt ด้านล่าง: import machine; pin = machine.Pin(2, machine.Pin.OUT); pin.value(1) เพื่อดูไฟติดทันที"
          },
          {
            title: "เขียนสคริปต์ไฟล์ main.py",
            detail: "สร้างไฟล์ใหม่ คัดลอกโค้ด uasyncio จากบทเรียนวางลงไป แล้วกด Save เลือกบันทึกลงใน 'MicroPython device' โดยตั้งชื่อไฟล์ว่า main.py"
          },
          {
            title: "ทดสอบการทำงานอัตโนมัติ",
            detail: "กดปุ่ม Stop/Restart หรือกดปุ่ม Reset กายภาพบนบอร์ด ESP32 เพื่อสังเกตการณ์บูตและรันโปรแกรมอัตโนมัติ"
          }
        ],
        verification: "ไฟ LED บนบอร์ดต้องกะพริบเป็นจังหวะตามโค้ด และหน้าต่าง REPL ของ Thonny ต้องพิมพ์ค่าแรงดันเซนเซอร์และสถานะแรมว่างคงเหลือออกมาอย่างต่อเนื่อง"
      }
    },

    // ---------------- ระดับขั้นสูง (Advanced) ----------------
    {
      id: "iot-7",
      title: "Raspberry Pi & Linux: ระบบ Edge Gateway, ไดรเวอร์ libgpiod และฐานข้อมูล Time-Series",
      description: "ทำความเข้าใจสถาปัตยกรรม Single-Board Computer (SBC), การติดตั้งระบบแบบ Headless ผ่าน SSH, การควบคุม GPIO ผ่านเคอร์เนล Linux ด้วย libgpiod และ gpiozero, การจัดเก็บข้อมูลเซนเซอร์ลง SQLite / InfluxDB และการสร้าง Systemd Service ทำงาน 24/7",
      duration: "65 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Edge Gateway: Raspberry Pi และระบบปฏิบัติการ Linux

ในระบบ IoT ขนาดใหญ่ ไมโครคอนโทรลเลอร์ขนาดเล็กไม่สามารถประมวลผลข้อมูลที่มีความซับซ้อนสูงหรือจัดเก็บประวัติย้อนหลังได้ **Raspberry Pi** ซึ่งเป็นคอมพิวเตอร์บอร์ดเดี่ยว (Single-Board Computer - SBC) สถาปัตยกรรม ARM Cortex จึงถูกนำมาใช้ทำหน้าที่เป็น **Edge IoT Gateway** ศูนย์กลาง

---

## 1. เปรียบเทียบ Microcontroller (ESP32) vs Single-Board Computer (Raspberry Pi)

| หัวข้อเปรียบเทียบ | ไมโครคอนโทรลเลอร์ (ESP32) | คอมพิวเตอร์บอร์ดเดี่ยว (Raspberry Pi 4 / 5) |
|---|---|---|
| **ระบบปฏิบัติการ** | Bare-metal หรือ Real-Time OS (FreeRTOS) | Linux เต็มรูปแบบ (Raspberry Pi OS 64-bit / Debian) |
| **ความเร็วและการประมวลผล** | Dual-core $240\\text{ MHz}$ | Quad-core ARM Cortex-A76 สูงถึง $2.4\\text{ GHz}$ |
| **หน่วยความจำ RAM** | $520\\text{ KB}$ SRAM | $2\\text{GB}, 4\\text{GB}, 8\\text{GB}$ LPDDR4X |
| **การตอบสนองฮาร์ดแวร์** | Real-time แน่นอน (ระดับไมโครวินาที) | Non-deterministic (มีเคอร์เนลสลับทาสก์ อาจมี Latency) |
| **การกินพลังงาน** | ต่ำมาก ($10\\mu\\text{A}$ ใน Deep Sleep ถึง $150\\text{mA}$) | ปานกลาง ($3\\text{W} - 12\\text{W}$) ต้องการไฟ $5\\text{V 3A - 5A}$ |
| **บทบาทหลักในสถาปัตยกรรม** | โหนดเซนเซอร์ภาคสนาม (Sensor Node / Actuator) | **Edge Gateway**, Data Aggregator, Local AI Inference |

---

## 2. การควบคุม GPIO บน Linux ยุคใหม่: จาก Sysfs สู่ \`libgpiod\`

ในอดีต การควบคุมขา GPIO บน Linux อาศัยการเขียนไฟล์ลงในพาธ \`/sys/class/gpio\` (Sysfs Interface) ซึ่งถูกประกาศยกเลิก (Deprecated) ใน Linux Kernel 4.8 เป็นต้นมา เนื่องจากไม่มีระบบรักษาความปลอดภัย ขาดการตรวจสอบการใช้งานขาทับซ้อน และทำงานช้า
เคอร์เนลยุคใหม่ใช้ **Character Device API (\`/dev/gpiochipX\`)** ผ่านไลบรารี **\`libgpiod\`** หรือไลบรารีระดับสูงใน Python เช่น **\`gpiozero\`**

\`\`\`
แอปพลิเคชัน Python (gpiozero)
         │
         ▼
ไลบรารี C (libgpiod)
         │
         ▼
Linux Kernel Character Device (/dev/gpiochip0)
         │
         ▼
ฮาร์ดแวร์ GPIO บนชิป Broadcom BCM2711/BCM2712
\`\`\`

---

## 3. การสร้าง Linux Systemd Service เพื่อให้โปรแกรม IoT ทำงาน 24/7

เพื่อให้อุปกรณ์ Edge Gateway ทำงานได้จริงในโรงงาน โปรแกรม Python ต้องเริ่มทำงานอัตโนมัติทันทีที่บูตเครื่อง และต้องฟื้นตัวอัตโนมัติหากโปรแกรมแครช (Auto-restart) โดยใช้ **Systemd Daemon**

สร้างไฟล์บริการ \`/etc/systemd/system/iot-gateway.service\`:
\`\`\`ini
[Unit]
Description=Industrial IoT Edge Gateway Service
After=network.target

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/iot-system
ExecStart=/usr/bin/python3 /home/pi/iot-system/gateway.py
Restart=always
RestartSec=5
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
\`\`\`
คำสั่งควบคุมบริการ:
- \`sudo systemctl daemon-reload\`
- \`sudo systemctl enable iot-gateway.service\` (เปิดใช้งานตอนบูต)
- \`sudo systemctl start iot-gateway.service\` (เริ่มรันทันที)
- \`systemctl status iot-gateway.service\` (ตรวจสอบสถานะ)`,
      codeExample: {
        language: "python",
        code: `#!/usr/bin/env python3
# =================================================================
# บริการ Edge Gateway บน Raspberry Pi: รวมข้อมูลและบันทึกฐานข้อมูล
# เทคโนโลยี: Python 3, gpiozero, SQLite3, MQTT Client
# =================================================================

import time
import sqlite3
import json
import logging
from gpiozero import Button, LED
import paho.mqtt.client as mqtt

# ตั้งค่า Logging ระบบ
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')

DB_PATH = "/home/pi/iot-system/telemetry.db"

# 1. จัดการฐานข้อมูล Local SQLite สำหรับบันทึกข้อมูลยามเน็ตหลุด (Store and Forward)
def init_database():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS sensor_telemetry (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            node_id TEXT NOT NULL,
            temperature REAL,
            humidity REAL,
            is_synced INTEGER DEFAULT 0
        )
    ''')
    conn.commit()
    conn.close()
    logging.info("[DATABASE] เริ่มต้นโครงสร้างฐานข้อมูล SQLite เรียบร้อย")

def save_telemetry(node_id, temp, hum):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO sensor_telemetry (node_id, temperature, humidity)
        VALUES (?, ?, ?)
    ''', (node_id, temp, hum))
    conn.commit()
    conn.close()
    logging.info(f"[DATABASE] บันทึกข้อมูลสำเร็จ: {node_id} -> {temp}°C, {hum}%")

# 2. คอนฟิกการทำงานของฮาร์ดแวร์ GPIO ผ่าน gpiozero (libgpiod)
status_led = LED(17) # ขา GPIO 17
e_stop_btn = Button(27, pull_up=True) # ขา GPIO 27

def on_emergency_press():
    logging.warning("[SAFETY] ตรวจพบการกดปุ่มหยุดฉุกเฉิน (E-Stop) ที่หน้าตู้ Gateway!")
    status_led.blink(on_time=0.1, off_time=0.1)

e_stop_btn.when_pressed = on_emergency_press

# 3. คอนฟิก MQTT Receiver จาก ESP32 Nodes
def on_message(client, userdata, msg):
    try:
        payload = json.loads(msg.payload.decode('utf-8'))
        logging.info(f"[MQTT] ได้รับข้อมูลจากโหนด: {msg.topic}")
        save_telemetry("ESP32_NODE1", payload.get("temperature"), payload.get("humidity"))
    except Exception as e:
        logging.error(f"[ERROR] ประมวลผล JSON ล้มเหลว: {e}")

def main():
    init_database()
    status_led.on()

    client = mqtt.Client()
    client.on_message = on_message
    
    try:
        client.connect("localhost", 1883, 60)
        client.subscribe("itacademy/lab/+/telemetry")
        logging.info("[GATEWAY] Edge Gateway เริ่มต้นทำงานเต็มรูปแบบ...")
        client.loop_forever()
    except KeyboardInterrupt:
        logging.info("[GATEWAY] ยุติการทำงาน")
    finally:
        status_led.off()

if __name__ == "__main__":
    main()`,
        description: "สคริปต์ Edge Gateway ระดับอุตสาหกรรม บันทึกข้อมูลเซนเซอร์ลง SQLite พร้อมรองรับการหยุดฉุกเฉินด้วย gpiozero"
      },
      quiz: [
        {
          id: "iot-7-q1",
          question: "เหตุใดในระบบ IoT อุตสาหกรรมจึงมักวางคอมพิวเตอร์ Edge Gateway (เช่น Raspberry Pi) ไว้คั่นกลางระหว่างเซนเซอร์ภาคสนามกับ Cloud?",
          options: [
            "เพื่อแปลงให้สัญญาณวิทยุกลายเป็นสัญญาณดาวเทียม",
            "เพื่อทำหน้าที่กรองข้อมูล ประมวลผลขั้นต้น จัดเก็บข้อมูลสำรองยามอินเทอร์เน็ตล่ม (Store-and-Forward) และลดภาระทราฟฟิกขึ้น Cloud",
            "เพราะไมโครคอนโทรลเลอร์ไม่สามารถต่อสายไฟได้",
            "เพราะคลาวด์ไม่รองรับโปรโตคอล MQTT"
          ],
          correctAnswer: 1,
          explanation: "Edge Computing ช่วยเพิ่มเสถียรภาพสูงสุด หากลิงก์อินเทอร์เน็ตขาด บอร์ด Edge จะเก็บบันทึกข้อมูลลงฐานข้อมูลในพื้นที่ไว้ก่อน และเมื่อสัญญาณเน็ตกลับมาจะทำการ Re-sync ข้อมูลขึ้นคลาวด์โดยไม่มีข้อมูลสูญหาย"
        },
        {
          id: "iot-7-q2",
          question: "คำสั่งใดของ Linux Systemd ใช้สำหรับกำหนดให้เซอร์วิสเริ่มทำงานอัตโนมัติทุกครั้งเมื่อเปิดเครื่อง?",
          options: [
            "sudo systemctl start <service>",
            "sudo systemctl enable <service>",
            "sudo systemctl reload <service>",
            "sudo systemctl status <service>"
          ],
          correctAnswer: 1,
          explanation: "คำสั่ง 'systemctl enable' จะสร้าง Symbolic Link ในไดเรกทอรี /etc/systemd/system/multi-user.target.wants/ ทำให้ระบบโหลดเซอร์วิสขึ้นมาทำงานอัตโนมัติตอนบูตระบบ (ส่วน 'start' ใช้รันทันทีเพียงครั้งเดียว)"
        }
      ],
      labGuide: {
        title: "แล็บติดตั้ง Raspberry Pi OS แบบ Headless และเปิดใช้งาน SSH",
        toolName: "Raspberry Pi Imager",
        downloadUrl: "https://www.raspberrypi.com/software/",
        objective: "เขียนอิมเมจระบบปฏิบัติการลง MicroSD พร้อมคอนฟิกบัญชีผู้ใช้ เครือข่ายไร้สาย และบริการ SSH ล่วงหน้า จากนั้นเชื่อมต่อควบคุมทางไกลผ่าน Command Prompt / Terminal",
        steps: [
          {
            title: "เปิด Raspberry Pi Imager",
            detail: "เลือก Operating System: 'Raspberry Pi OS (64-bit)' และเลือกการ์ด MicroSD เป้าหมาย"
          },
          {
            title: "ตั้งค่าคอนฟิกขั้นสูง (OS Customisation)",
            detail: "คลิก 'Edit Settings': กำหนด Hostname เป็น 'raspberrypi.local', สร้างชื่อบัญชีผู้ใช้และรหัสผ่าน, ใส่ข้อมูลชื่อ Wi-Fi (SSID/Password) และติ๊กเปิด 'Enable SSH' โดยเลือก Use password authentication"
          },
          {
            title: "เขียนข้อมูลลง MicroSD",
            detail: "กดปุ่ม Write รอจนเขียนและตรวจสอบความถูกต้อง (Verify) เสร็จสิ้น นำการ์ดไปเสียบเข้าบอร์ด Raspberry Pi และจ่ายไฟ"
          },
          {
            title: "เชื่อมต่อผ่านรีโมตเทอร์มินัล",
            detail: "เปิด PowerShell บน Windows หรือ Terminal บน macOS/Linux พิมพ์คำสั่ง: ssh <username>@raspberrypi.local แล้วใส่รหัสผ่านที่ตั้งไว้"
          }
        ],
        verification: "หน้าจอเทอร์มินัลสามารถล็อกอินเข้าสู่ Linux Bash Shell ของ Raspberry Pi ได้สำเร็จ (เช่น pi@raspberrypi:~$) และพิมพ์คำสั่ง 'uname -a' เพื่อดูข้อมูลเคอร์เนล Linux ได้อย่างสมบูรณ์"
      }
    },

    {
      id: "iot-8",
      title: "ระบบปฏิบัติการเวลาจริง (FreeRTOS) บน ESP32: Real-time Multi-Tasking, Queues และ Mutex",
      description: "ทำความเข้าใจ Real-Time Operating System, สถาปัตยกรรม Preemptive Scheduler, การสร้างและกำหนด Core Affinity ด้วย xTaskCreatePinnedToCore, การสื่อสารระหว่างทาสก์ด้วย Queue (Thread-Safe FIFO) และการแก้ปัญหา Race Condition ด้วย Mutex",
      duration: "60 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรมระบบปฏิบัติการเวลาจริง (FreeRTOS) บน ESP32

ในการพัฒนาเฟิร์มแวร์ระดับมืออาชีพ หากปล่อยให้โปรแกรมทำงานวนอยู่ใน \`void loop()\` ฟังก์ชันเดียว จะเกิดปัญหาเรื่อง **Timing Jitter** และ **Latency** การใช้งาน **FreeRTOS (Real-Time Operating System)** ช่วยให้นักพัฒนาสามารถแบ่งโปรแกรมออกเป็นงานย่อยๆ (Tasks) ที่มีความสำคัญต่างกัน และรันขนานกันบนซีพียู 2 คอร์ได้อย่างสมบูรณ์

---

## 1. สถานะของ Task ใน FreeRTOS (Task State Machine)

\`\`\`
                 ┌───────────────┐
                 │    BLOCKED    │ ◄── รอ Event / รอคิว / vTaskDelay()
                 └───────▲───────┘
                         │
     เมื่อถึงเวลา / Event เข้ามา   │ หมดเวลา / ถูกบล็อก
                         │
┌─────────────┐  คัดเลือกโดย   ┌──┴────────────┐  ถูกแย่งเวลา   ┌───────────────┐
│   RUNNING   │ ◄──────────── │     READY     │ ─────────────► │   SUSPENDED   │
│ (กำลังรันบน  │   Scheduler   │ (พร้อมทำงาน)  │ (vTaskSuspend) │ (พักการทำงาน) │
│ CPU Core)   │ ────────────► │               │                │               │
└─────────────┘  คืนเวลา       └───────────────┘                └───────────────┘
\`\`\`

---

## 2. การแยกงานสองแกนด้วย \`xTaskCreatePinnedToCore()\`

ESP32 มีหน่วยประมวลผล 2 คอร์ ได้แก่ Core 0 และ Core 1 เราสามารถตรึงงานให้รันบนคอร์ที่ต้องการได้:

\`\`\`c
BaseType_t xTaskCreatePinnedToCore(
    TaskFunction_t pvTaskCode,   // ชื่อฟังก์ชันของ Task
    const char * const pcName,   // ชื่อ Task สำหรับดีบั๊ก
    const uint32_t usStackDepth, // ขนาด Stack (Bytes/Words) เช่น 4096
    void * const pvParameters,   // พารามิเตอร์ส่งเข้า Task
    UBaseType_t uxPriority,      // ลำดับความสำคัญ (ตัวเลขยิ่งสูง Priority ยิ่งมาก)
    TaskHandle_t * const pxCreatedTask, // ตัวแปร Handle สำหรับควบคุม Task
    const BaseType_t xCoreID     // ตรึงลง Core: 0 (PRO_CPU) หรือ 1 (APP_CPU)
);
\`\`\`

---

## 3. การสื่อสารและซิงโครไนซ์ระหว่างเธรด: Queue และ Mutex

### 3.1 FreeRTOS Queue (Thread-Safe FIFO Buffer)
การส่งข้อมูลข้ามระหว่างสอง Task หรือข้ามคอร์ ห้ามใช้ตัวแปรส่วนกลาง (Global Variable) ธรรมดาเด็ดขาด เพราะอาจเกิดการอ่านเขียนทับกันกลางคัน (Race Condition / Data Corruption)
**Queue** ทำหน้าที่เป็นท่อลำเลียงข้อมูลแบบ First-In First-Out ที่มีระบบจัดการ Lock ภายในตัวอย่างปลอดภัย

### 3.2 Mutex (Mutual Exclusion) และการป้องกันปัญหา Priority Inversion
เมื่อหลาย Task จำเป็นต้องใช้งานทรัพยากรร่วมกันชิ้นเดียว (เช่น ส่งข้อมูลออกทางพอร์ต Serial เดียวกัน หรือเขียนไฟล์ลง SD Card เดียวกัน) ต้องใช้ **Mutex** เพื่อแย่งสิทธิ์ในการครอบครองทรัพยากร:
\`\`\`c
if (xSemaphoreTake(xMutex, portMAX_DELAY) == pdTRUE) {
    // ----------------- เข้าสู่ Critical Section -----------------
    Serial.println("กำลังส่งข้อมูลสำคัญ ห้ามทาสก์อื่นแทรกแซง");
    // -----------------------------------------------------------
    xSemaphoreGive(xMutex); // คืนสิทธิ์การใช้งาน
}
\`\`\``,
      codeExample: {
        language: "cpp",
        code: `// =================================================================
// สถาปัตยกรรม FreeRTOS Dual-Core บน ESP32
// Core 1: อ่านเซนเซอร์ความถี่สูง (Fast Sensor Task)
// Core 0: ประมวลผลและส่งข้อมูลเครือข่าย (Network Processing Task)
// การสื่อสาร: FreeRTOS Queue + Mutex ป้องกัน Serial Concurrency
// =================================================================

#include <Arduino.h>

// โครงสร้างข้อมูลส่งผ่านคิว
struct SensorData {
  uint32_t sampleId;
  float temperature;
  float pressure;
};

// ตัวแปร Handle สำหรับควบคุม FreeRTOS Primitives
QueueHandle_t telemetryQueue;
SemaphoreHandle_t serialMutex;

// -------------------------------------------------------------
// Task 1: รันบน Core 1 (ความสำคัญ Priority 2) - อ่านค่าเซนเซอร์
// -------------------------------------------------------------
void TaskSensorAcquisition(void *pvParameters) {
  uint32_t counter = 0;
  SensorData sample;

  for (;;) {
    counter++;
    sample.sampleId = counter;
    sample.temperature = 25.0 + (float)(random(0, 100)) / 10.0;
    sample.pressure = 1013.25 + (float)(random(-50, 50)) / 10.0;

    // ส่งข้อมูลเข้าคิว (รอไม่เกิน 50 Ticks หากคิวเต็ม)
    if (xQueueSend(telemetryQueue, &sample, (TickType_t)50) != pdPASS) {
      if (xSemaphoreTake(serialMutex, portMAX_DELAY) == pdTRUE) {
        Serial.println(F("[WARNING] Queue เต็ม! ไม่สามารถส่งข้อมูลตัวอย่างได้"));
        xSemaphoreGive(serialMutex);
      }
    }

    // หน่วงเวลาแบบ Non-blocking คืนสิทธิ์ให้ Scheduler (อ่านทุก 500ms)
    vTaskDelay(pdMS_TO_TICKS(500));
  }
}

// -------------------------------------------------------------
// Task 2: รันบน Core 0 (ความสำคัญ Priority 1) - งานเน็ตเวิร์ก
// -------------------------------------------------------------
void TaskNetworkTransmission(void *pvParameters) {
  SensorData receivedSample;

  for (;;) {
    // รอรับข้อมูลจากคิวแบบ Block จนกว่าจะมีข้อมูลเข้ามา
    if (xQueueReceive(telemetryQueue, &receivedSample, portMAX_DELAY) == pdPASS) {
      // ครอบครอง Mutex ก่อนเริ่มเขียนออก Serial
      if (xSemaphoreTake(serialMutex, portMAX_DELAY) == pdTRUE) {
        Serial.print(F("[Core "));
        Serial.print(xPortGetCoreID());
        Serial.print(F("] ส่งผ่านเครือข่าย -> ID: "));
        Serial.print(receivedSample.sampleId);
        Serial.print(F(" | อุณหภูมิ: "));
        Serial.print(receivedSample.temperature, 2);
        Serial.print(F(" C | แรงดัน: "));
        Serial.println(receivedSample.pressure, 2);
        
        xSemaphoreGive(serialMutex); // ปล่อย Mutex คืน
      }
    }
  }
}

void setup() {
  Serial.begin(115200);
  
  // 1. สร้าง Mutex สำหรับควบคุม Serial Port
  serialMutex = xSemaphoreCreateMutex();

  // 2. สร้าง Queue รองรับข้อมูลได้ 10 ชิ้นตามขนาด SensorData
  telemetryQueue = xQueueCreate(10, sizeof(SensorData));

  if (telemetryQueue == NULL || serialMutex == NULL) {
    Serial.println(F("[ERROR] สร้าง FreeRTOS Object ล้มเหลว! RAM ไม่เพียงพอ"));
    while (1);
  }

  // 3. สร้างและตรึง Task ลงแกน CPU ที่ต้องการ
  xTaskCreatePinnedToCore(
    TaskSensorAcquisition,   // ฟังก์ชันเป้าหมาย
    "SensorTask",            // ชื่อ Task
    4096,                    // ขนาด Stack (Bytes)
    NULL,                    // พารามิเตอร์
    2,                       // Priority สูง
    NULL,                    // Task Handle
    1                        // Core 1 (APP_CPU)
  );

  xTaskCreatePinnedToCore(
    TaskNetworkTransmission, // ฟังก์ชันเป้าหมาย
    "NetworkTask",           // ชื่อ Task
    4096,                    // ขนาด Stack (Bytes)
    NULL,                    // พารามิเตอร์
    1,                       // Priority ปกติ
    NULL,                    // Task Handle
    0                        // Core 0 (PRO_CPU)
  );

  Serial.println(F("[RTOS] เริ่มต้นระบบ FreeRTOS Dual-Core สำเร็จสมบูรณ์"));
}

void loop() {
  // ใน FreeRTOS ลูปหลักสามารถปล่อยว่างหรือหน่วงเวลาระยะยาวได้
  // เพราะงานทั้งหมดถูกจัดการผ่าน Tasks อิสระบนทั้งสองคอร์แล้ว
  vTaskDelay(pdMS_TO_TICKS(1000));
}`,
        description: "สถาปัตยกรรม FreeRTOS Dual-Core แยกงานอ่านเซนเซอร์และงานส่งเน็ตเวิร์กออกจากกันอย่างสมบูรณ์แบบ"
      },
      quiz: [
        {
          id: "iot-8-q1",
          question: "ในระบบ FreeRTOS เหตุใดจึงต้องใช้คำสั่ง vTaskDelay(pdMS_TO_TICKS(ms)) แทนการใช้ delay(ms) ปกติ?",
          options: [
            "เพราะ vTaskDelay จะทำให้ซีพียูเย็นลง 50%",
            "เพราะ vTaskDelay จะเปลี่ยนสถานะของ Task เป็น BLOCKED เพื่อสละเวลาซีพียูให้ทาสก์อื่นที่มีความสำคัญเท่ากันหรือต่ำกว่าได้ทำงานในระหว่างที่รอ",
            "เพราะคำสั่ง delay() ธรรมดาจะทำให้ไมโครคอนโทรลเลอร์รีเซ็ตทันที",
            "เพราะ vTaskDelay ประหยัดพลังงานแบตเตอรี่ได้ 100%"
          ],
          correctAnswer: 1,
          explanation: "การใช้ delay() แบบเดิมจะวนลูป NOP กินเวลาซีพียูโดยเปล่าประโยชน์ ส่วน vTaskDelay() จะแจ้งเตือนตัวจัดตารางงาน (Scheduler) ให้นำ Task อื่นในคิว READY ขึ้นมาประมวลผลทันที เกิดประสิทธิภาพสูงสุด"
        },
        {
          id: "iot-8-q2",
          question: "เมื่อสอง Task ที่รันอยู่คนละ Core บน ESP32 ต้องการส่งข้อมูลหากันอย่างปลอดภัย ควรเลือกใช้โครงสร้างข้อมูลใด?",
          options: [
            "ตัวแปรส่วนกลาง Global Variable ธรรมดา",
            "FreeRTOS Queue (Thread-Safe FIFO)",
            "การเขียนลง Flash Memory ชั่วคราว",
            "การส่งผ่านพอร์ต Serial"
          ],
          correctAnswer: 1,
          explanation: "FreeRTOS Queue มีระบบจัดการ Memory Synchronization และ Spinlock ภายในชิป ป้องกันปัญหา Race Condition ที่คอร์หนึ่งกำลังเขียนในขณะที่อีกคอร์หนึ่งกำลังอ่านข้อมูลได้อย่างสมบูรณ์แบบ"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบมัลติทาสก์ขนานสองแกน (Core 0 & Core 1) ด้วย FreeRTOS",
        toolName: "Arduino IDE 2.x หรือ Wokwi Simulator",
        downloadUrl: "https://wokwi.com/",
        objective: "เขียนเฟิร์มแวร์ ESP32 แบ่งงานออกเป็น 2 Tasks สื่อสารกันผ่าน FreeRTOS Queue และพิสูจน์การทำงานข้ามคอร์ผ่านฟังก์ชัน xPortGetCoreID()",
        steps: [
          {
            title: "เปิดโปรเจกต์ ESP32",
            detail: "เปิด Wokwi Simulator หรือ Arduino IDE เลือกบอร์ด ESP32 Dev Module"
          },
          {
            title: "สร้างโครงสร้าง Queue และ Mutex",
            detail: "เขียนคำสั่ง xQueueCreate และ xSemaphoreCreateMutex ใน setup() เพื่อเตรียมพื้นที่สื่อสาร"
          },
          {
            title: "สร้าง Task พร้อม Core Affinity",
            detail: "เรียกใช้ xTaskCreatePinnedToCore โดยกำหนดให้ Task เซนเซอร์อยู่ Core 1 และ Task ส่งข้อมูลอยู่ Core 0"
          },
          {
            title: "มอนิเตอร์ผลลัพธ์ผ่าน Serial",
            detail: "เปิด Serial Monitor ที่ Baudrate 115200 เพื่อสังเกตการณ์พิมพ์ข้อความจากคอร์ประมวลผล"
          }
        ],
        verification: "ข้อความบน Serial Monitor ต้องแสดงผลว่า [Core 0] รับข้อมูลตัวอย่างจาก [Core 1] ได้อย่างต่อเนื่อง สม่ำเสมอ โดยไม่มีข้อความกระตุกหรือข้อความขาดท่อนอันเกิดจากการแย่งชิงพอร์ต Serial"
      }
    },

    {
      id: "iot-9",
      title: "โปรเจกต์จบ: Full-Stack Smart Greenhouse & Home Automation ด้วย Home Assistant, ESPHome และการแยกวงจรแรงดันสูง",
      description: "ออกแบบระบบโรงเรือนเกษตรอัจฉริยะและบ้านอัตโนมัติระดับโปรดักชัน: การเชื่อมต่อเซนเซอร์ความชื้นในดินแบบเก็บประจุ (Capacitive), การแยกกราวด์วงจรรีเลย์ 220V ด้วย Optocoupler, การเขียนคอนฟิก ESPHome YAML และการสร้าง Automation Engine บน Home Assistant",
      duration: "75 นาที",
      level: "ขั้นสูง",
      content: `# ออกแบบระบบ Smart Greenhouse และ Home Automation ระดับวิศวกรรม

การสร้างระบบควบคุมสภาพแวดล้อมอัตโนมัติ (เช่น โรงเรือนอัจฉริยะ หรือระบบ Smart Home) ต้องผสานความรู้ด้านความปลอดภัยทางไฟฟ้าแรงดันสูง การอ่านค่าเซนเซอร์ที่แม่นยำ และระบบบริหารจัดการศูนย์กลางที่ทำงานแบบ **Local Control 100% ไม่พึ่งพาคลาวด์ภายนอก**

---

## 1. สถาปัตยกรรมระบบโรงเรือนอัจฉริยะ (Smart Agriculture Architecture)

\`\`\`
[ สภาพแวดล้อมกายภาพ (Physical World) ]
  - ดิน / พืช: เซนเซอร์วัดความชื้นในดิน Capacitive Soil Sensor (อนาล็อก)
  - อากาศ: เซนเซอร์ SHT31 / BME280 (I2C)
  - แสง: เซนเซอร์ BH1750 Ambient Light (I2C)
                     │
                     ▼
[ หน่วยประมวลผลภาคสนาม (Edge Controller Node) ]
  - บอร์ด ESP32 (เฟิร์มแวร์ ESPHome / C++)
  - หน้าจอ Local OLED 128x64 แจ้งเตือนสถานะ
  - ระบบตัดตอนฉุกเฉินระดับฮาร์ดแวร์ (Hardware Failsafe Watchdog)
                     │
                     ▼ (วงจรแยกสัญญาณ Galvanic Isolation)
[ ภาคขับโหลดแรงดันสูง (High-Voltage Actuation 220VAC) ]
  - โมดูลรีเลย์แบบมี **Optocoupler Isolation**
  - วงจรป้องกันแรงดันไฟย้อนกลับ (Flyback Diode / RC Snubber)
  - โซลินอยด์วาล์วน้ำ 12VDC, ปั๊มน้ำ 220VAC, พัดลมระบายอากาศ, หลอดไฟ Grow Light
                     │
                     ▼ (Wi-Fi 802.11 b/g/n / MQTT / Native API)
[ ศูนย์กลางควบคุมและการตัดสินใจ (Central Automation Brain) ]
  - **Home Assistant OS** บน Raspberry Pi 4 / Mini PC
  - ฐานข้อมูลประวัติ Time-series (InfluxDB)
  - แดชบอร์ดมอนิเตอร์บนมือถือและแท็บเล็ต
\`\`\`

---

## 2. ความปลอดภัยทางไฟฟ้าและวงจรแยกกราวด์ (Galvanic Isolation)

เมื่อไมโครคอนโทรลเลอร์ ($3.3\\text{ V}$) ควบคุมโหลดไฟฟ้าเหนี่ยวนำแรงดันสูง เช่น มอเตอร์ปั๊มน้ำ ($220\\text{ VAC}$) เมื่อปิดสวิตช์ขดลวดจะเกิดแรงดันไฟฟ้าเหนี่ยวนำย้อนกลับขนาดมหาศาล (Back EMF หลายร้อยโวลต์) ซึ่งสามารถกระชากกลับมาทำลายชิปไมโครคอนโทรลเลอร์ได้ทันที

\`\`\`
ไมโครคอนโทรลเลอร์ (3.3V)                โมดูลรีเลย์แยกกราวด์             โหลดไฟฟ้าแรงดันสูง (220VAC)
┌──────────────────────┐             ┌─────────────────────┐          ┌───────────────────────┐
│                      │             │    Optocoupler      │          │                       │
│ GPIO Control Pin ────┼────────────►│ [LED] ── (แสง) ──►  │          │   Line (220VAC)       │
│                      │             │         [Phototrans]│ ── แม่เหล็ก ──┤ ─── Relay Common (COM) │
│                      │             │ (ไม่มีการเชื่อมต่อ    │   ดึงดูดหน้า │ ─── Normally Open(NO) │
│ GND (3.3V System) ───┼────────────►│  ทางไฟฟ้าตรงๆ)      │   สัมผัส   │            │          │
└──────────────────────┘             └─────────────────────┘          │            ▼          │
                                                                      │      ปั๊มน้ำ 220V     │
                                                                      │            │          │
                                                                      │   Neutral ─┴──────────┤
                                                                      └───────────────────────┘
\`\`\`

> [!IMPORTANT]
> **หลักความปลอดภัยในการต่อรีเลย์อุตสาหกรรม:**
> 1. ต้องถอดจั๊มเปอร์ **VCC-JDVCC** เพื่อแยกแหล่งจ่ายไฟของรีเลย์ ($5\\text{V}$) ออกจากบอร์ดไมโครคอนโทรลเลอร์อย่างเด็ดขาด
> 2. โหลดประเภทขดลวด (Inductive Load) เช่น วาล์วน้ำ ต้องต่อ **Flyback Diode** (เช่น 1N4007) คร่อมขั้วไฟตรง หรือต่อ **RC Snubber Circuit** คร่อมหน้าสัมผัส AC เพื่อดับประกายไฟ (Arcing)

---

## 3. การเปรียบเทียบเซนเซอร์ความชื้นในดิน: Resistive vs Capacitive

- **Resistive Soil Sensor (แบบเข็มต้านทานรุ่นเก่า):** ใช้ขั้วโลหะเปลือยสองข้างปล่อยกระแสไฟฟ้าผ่านดิน เกิดปฏิกิริยาเคมีไฟฟ้ากัดกร่อน (Electrolysis) ส่งผลให้ขั้วผุกร่อนและพังภายในไม่กี่สัปดาห์
- **Capacitive Soil Moisture Sensor (แบบเก็บประจุ V1.2):** เคลือบสารป้องกันหน้าสัมผัสโลหะ วัดความชื้นจากค่าคงที่ไดอิเล็กทริกของดินโดยไม่มีกระแสไฟฟ้าไหลตรง ไม่เกิดการกัดกร่อน มีอายุการใช้งานยาวนานนับปี`,
      codeExample: {
        language: "yaml",
        code: `# =================================================================
# ไฟล์คอนฟิก ESPHome สำหรับโหนด Smart Greenhouse
# จัดการเซนเซอร์ความชื้นในดิน, เซนเซอร์สภาพอากาศ และรีเลย์ปั๊มน้ำ
# ทำงานอัตโนมัติและเชื่อมต่อ Home Assistant แบบ Native API
# =================================================================

esphome:
  name: smart-greenhouse-node
  friendly_name: "ระบบโรงเรือนเกษตรอัจฉริยะ"

esp32:
  board: esp32dev
  framework:
    type: arduino

# การเชื่อมต่อเครือข่าย Wi-Fi พร้อมระบบกู้คืนอัตโนมัติ
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "Greenhouse-Fallback-AP"
    password: "SetupPassword123"

captive_portal:

# เปิดบริการ Native API สำหรับเชื่อมต่อ Home Assistant แบบความเร็วสูง
api:
  encryption:
    key: !secret api_encryption_key

# บริการอัปเดตเฟิร์มแวร์ผ่านสัญญาณไร้สาย (Over-The-Air)
ota:
  password: !secret ota_password

# -------------------------------------------------------------
# 1. หมวดเซนเซอร์ (Sensors)
# -------------------------------------------------------------
sensor:
  # เซนเซอร์วัดอุณหภูมิและความชื้นอากาศ DHT22
  - platform: dht
    pin: GPIO4
    temperature:
      name: "อุณหภูมิในโรงเรือน"
      id: greenhouse_temp
    humidity:
      name: "ความชื้นสัมพัทธ์ในอากาศ"
      id: greenhouse_hum
    model: DHT22
    update_interval: 15s

  # เซนเซอร์วัดความชื้นในดิน Capacitive (ADC1 ขา GPIO 34)
  - platform: adc
    pin: GPIO34
    name: "ความชื้นในดิน"
    id: soil_moisture
    update_interval: 10s
    unit_of_measurement: "%"
    attenuation: 11db
    # ปรับเทียบค่าแรงดันแอนะล็อกเป็นเปอร์เซ็นต์ (Calibration Mapping)
    filters:
      - calibrate_linear:
          - 2.85 -> 0.0   # แรงดันเมื่ออยู่ในอากาศแห้งสนิท = 0%
          - 1.35 -> 100.0 # แรงดันเมื่อจุ่มลงในน้ำเต็มที่ = 100%
      - clamp_min: 0.0
      - clamp_max: 100.0

# -------------------------------------------------------------
# 2. หมวดอุปกรณ์สวิตช์และรีเลย์ (Switches & Actuators)
# -------------------------------------------------------------
switch:
  # สวิตช์ควบคุมรีเลย์ปั๊มน้ำรดน้ำอัตโนมัติ
  - platform: gpio
    pin:
      number: GPIO16
      inverted: true # สำหรับโมดูลรีเลย์แบบ Active-LOW
    name: "ปั๊มน้ำรดน้ำแปลงเพาะปลูก"
    id: water_pump_relay
    icon: "mdi:water-pump"
    # กลไกความปลอดภัยระดับฮาร์ดแวร์: ป้องกันน้ำท่วมโรงเรือนหากคำสั่งค้าง
    # บังคับตัดการทำงานอัตโนมัติเมื่อเปิดต่อเนื่องเกิน 3 นาที
    on_turn_on:
      - delay: 180s
      - switch.turn_off: water_pump_relay

# -------------------------------------------------------------
# 3. ตรรกะควบคุมอัตโนมัติในพื้นที่ (Local Automation Rule)
# แม้สัญญาณ Wi-Fi จะขาดหาย บอร์ด ESP32 ยังคงรดน้ำเองได้อัตโนมัติ
# -------------------------------------------------------------
interval:
  - interval: 60s
    then:
      - if:
          condition:
            lambda: 'return id(soil_moisture).state < 30.0;' # ถ้าความชื้นต่ำกว่า 30%
          then:
            - if:
                condition:
                  switch.is_off: water_pump_relay
                then:
                  - logger.log: "ความชื้นในดินต่ำเกินเกณฑ์! กำลังสั่งเปิดปั๊มน้ำอัตโนมัติ..."
                  - switch.turn_on: water_pump_relay`,
        description: "สคริปต์คอนฟิก ESPHome ระดับโปรดักชันพร้อมระบบปรับเทียบเซนเซอร์และกลไกตัดน้ำฉุกเฉินระดับฮาร์ดแวร์"
      },
      quiz: [
        {
          id: "iot-9-q1",
          question: "เหตุใดเซนเซอร์วัดความชื้นในดินแบบเก็บประจุ (Capacitive Moisture Sensor) จึงทนทานและมีอายุการใช้งานยาวนานกว่าแบบความต้านทาน (Resistive Sensor)?",
          options: [
            "เพราะทำจากทองคำแท้",
            "เพราะไม่มีกระแสไฟฟ้าไหลผ่านหน้าสัมผัสเนื้อดินโดยตรง จึงไม่เกิดปฏิกิริยาเคมีไฟฟ้ากัดกร่อนโลหะ (Electrolysis)",
            "เพราะใช้พลังงานแสงอาทิตย์ในตัว",
            "เพราะเชื่อมต่อด้วยสัญญาณดาวเทียม"
          ],
          correctAnswer: 1,
          explanation: "เซนเซอร์แบบ Resistive จะปล่อยกระแส DC วิ่งผ่านดินทำให้ขั้วทองแดงผุกร่อนอย่างรวดเร็ว ส่วนแบบ Capacitive จะหุ้มฉนวนป้องกันรอยต่อ และวัดการเปลี่ยนแปลงของค่าความจุทางไฟฟ้า (Capacitance) แทน"
        },
        {
          id: "iot-9-q2",
          question: "ในการต่อบอร์ดไมโครคอนโทรลเลอร์เข้ากับโมดูลรีเลย์ที่ควบคุมปั๊มน้ำ 220VAC ชิ้นส่วนใดทำหน้าที่แยกวงจรไฟฟ้าแรงต่ำออกจากแรงดันสูงอย่างสมบูรณ์?",
          options: [
            "ตัวต้านทาน 220 โอห์ม",
            "ออปโต้คัปเปลอร์ (Optocoupler / Phototransistor) ที่ส่งผ่านสัญญาณด้วยลำแสง",
            "คาปาซิเตอร์ฟิลเตอร์",
            "คริสตัลออสซิลเลเตอร์"
          ],
          correctAnswer: 1,
          explanation: "Optocoupler ภายในโมดูลรีเลย์ใช้ไดโอดเปล่งแสงยิงไปยังโฟโต้ทรานซิสเตอร์ โดยไม่มีการเชื่อมต่อของสายไฟหรือเนื้อโลหะระหว่างฝั่งไมโครคอนโทรลเลอร์กับฝั่งรีเลย์ จึงป้องกันไฟกระชาก 220V ข้ามมาทำลายบอร์ดได้อย่างปลอดภัย"
        }
      ],
      labGuide: {
        title: "แล็บสร้างระบบโรงเรือนอัตโนมัติด้วย ESPHome และ Home Assistant",
        toolName: "Home Assistant & ESPHome Dashboard",
        downloadUrl: "https://www.home-assistant.io/",
        objective: "คอมไพล์เฟิร์มแวร์ ESPHome ขึ้นสู่บอร์ด ESP32 ปรับเทียบสเกลเซนเซอร์ความชื้นในดิน และสร้าง Automation Dashboard แสดงกราฟอุณหภูมิและความชื้นแบบเรียลไทม์",
        steps: [
          {
            title: "ติดตั้ง ESPHome Dashboard",
            detail: "เปิด Home Assistant ไปที่เมนู Settings > Add-ons > ค้นหาและติดตั้ง 'ESPHome'"
          },
          {
            title: "สร้าง Device Node ใหม่",
            detail: "กดปุ่ม '+ New Device' ตั้งชื่อว่า 'smart-greenhouse-node' เลือกบอร์ดเป็น ESP32"
          },
          {
            title: "แก้ไขไฟล์ YAML",
            detail: "คัดลอกคอนฟิกจากตัวอย่างบทเรียน ใส่ชื่อ Wi-Fi และรหัสผ่านที่ถูกต้อง จากนั้นกดปุ่ม 'Install' (สามารถแฟลชผ่านสาย USB หรือ OTA ไร้สาย)"
          },
          {
            title: "ทดสอบและปรับเทียบค่าความชื้น",
            detail: "อ่านค่าแรงดันในอากาศแห้งและในแก้วน้ำ เพื่อนำค่าแรงดันจริงมาใส่ในฟิลเตอร์ calibrate_linear"
          },
          {
            title: "สร้างแดชบอร์ดบน Home Assistant",
            detail: "เพิ่มการ์ด Lovelace Gauge สำหรับความชื้นในดิน และเพิ่มปุ่ม Switch สำหรับสั่งรดน้ำด้วยตนเอง"
          }
        ],
        verification: "หน้าจอแดชบอร์ด Home Assistant บนสมาร์ตโฟนแสดงค่าอุณหภูมิ ความชื้นในดินเป็นเกจเปอร์เซ็นต์แบบเรียลไทม์ และเมื่อจำลองค่าความชื้นต่ำกว่า 30% สวิตช์ปั๊มน้ำจะเปิดทำงานเองทันที และตัดการทำงานเมื่อครบเวลาที่กำหนด"
      }
    }
  ]
};
