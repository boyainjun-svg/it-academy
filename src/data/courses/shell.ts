import { Course } from "../types";

export const shellCourse: Course = {
  id: "shell",
  title: "Shell Scripting & Linux System Automation",
  description: "เขียนเชลล์สคริปต์ระดับโปรดักชันด้วย Bash & POSIX, Pipelines, Awk/Sed, Process Management, Cron/Systemd และ Automation CI/CD",
  longDescription: "หลักสูตรเจาะลึกการเขียน Shell Scripting และ Linux System Automation ตั้งแต่รากฐานระบบปฏิบัติการ Unix/Linux, สถาปัตยกรรม Kernel & Shell, ความแตกต่างระหว่าง POSIX sh, Bash, Zsh, การทำงานกับ Streams & File Descriptors (0, 1, 2), พลังแห่ง Text Processing ด้วย Regex, grep, sed และ awk, การควบคุมกระบวนการ (Process Management, Job Control, Signals & Traps), การเขียนสคริปต์เชิงป้องกัน (Defensive Shell Scripting: `set -euo pipefail`), การตั้งเวลางานด้วย Cron และ Systemd Timers, ตลอดจนการสร้าง Production Automation Pipelines และ CI/CD Shell Automation",
  icon: "🐚",
  color: "emerald",
  gradient: "from-emerald-700 via-teal-800 to-slate-900",
  category: "language",
  totalLessons: 9,
  difficulty: "เริ่มต้น",
  tags: ["Bash", "Shell", "Linux", "DevOps", "Automation", "Awk", "Sed", "Systemd"],
  recommendedTools: [
    {
      name: "Bash 5+ (Linux / macOS / WSL2 / Git Bash)",
      icon: "🐚",
      badge: "Shell Environment",
      description: "สภาพแวดล้อมรันเชลล์สคริปต์มาตรฐานบน Linux หรือ Windows Subsystem for Linux (WSL2)",
      downloadUrl: "https://ubuntu.com/wsl",
      setupGuide: "1. บน Windows แนะนำติดตั้ง WSL2 (wsl --install -d Ubuntu)\n2. หรือใช้ Git Bash ที่มาพร้อม Git for Windows\n3. ตรวจสอบเวอร์ชันใน Terminal: bash --version"
    },
    {
      name: "ShellCheck & VS Code Bash IDE",
      icon: "💻",
      badge: "Linter & IDE",
      description: "เครื่องมือตรวจจับบักและช่องโหว่ความปลอดภัยใน Shell Script ระดับ Static Analysis ที่ได้มาตรฐานสากล",
      downloadUrl: "https://www.shellcheck.net/",
      setupGuide: "1. ติดตั้ง ShellCheck (apt install shellcheck หรือ brew install shellcheck)\n2. ติดตั้งส่วนขยาย 'ShellCheck' และ 'Bash IDE' ใน VS Code"
    }
  ],
  lessons: [
    {
      id: "shell-1",
      title: "สถาปัตยกรรม Shell, POSIX vs Bash และการจัดการตัวแปร & Shell Expansions",
      description: "ทำความเข้าใจบทบาทของ Kernel และ Shell, Shebang (#!), ความต่างระหว่าง sh กับ bash, การประกาศตัวแปร และกลไก Parameter Expansion",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม Shell, POSIX vs Bash และการจัดการตัวแปร & Shell Expansions

Shell คือโปรแกรม Command-line Interpreter ที่ทำหน้าที่เป็นตัวกลางรับคำสั่งจากผู้ใช้งานหรือสคริปต์ แปลงเป็น System Calls แล้วส่งต่อไปยัง Linux/Unix Kernel เพื่อสั่งการฮาร์ดแวร์

---

## 1. Shell ทำงานอย่างไร และ Shebang (\`#!\`)
เมื่อเรารันสคริปต์ Kernel จะอ่าน 2 ไบต์แรกของไฟล์ที่เรียกว่า **Magic Number** (\`0x23 0x21\` หรือ \`#!\`) เพื่อค้นหาว่าต้องใช้ Interpreter ตัวใดในการประมวลผลไฟล์:

\`\`\`bash
#!/usr/bin/env bash
# ใช้ /usr/bin/env เพื่อค้นหาตำแหน่งไบนารี bash บนระบบปฏิบัติการต่างๆ ได้ยืดหยุ่นกว่าการฮาร์ดโค้ด /bin/bash
echo "Hello, Linux System Automation!"
\`\`\`

> **สิทธิ์การทำงาน (Execution Permissions):**  
> ก่อนสั่งรันไฟล์ \`.sh\` ต้องให้สิทธิ์ Execute ผ่านคำสั่ง:  
> \`chmod +x backup.sh\` แล้วรันด้วย \`./backup.sh\`

---

## 2. ความแตกต่างระหว่าง POSIX sh กับ Bash
- **POSIX sh (\`/bin/sh\`):** มาตรฐานกลางของ Unix shell มีคำสั่งและไวยากรณ์จำกัด แต่การันตีว่าทำงานได้บนทุกระบบ Unix-like (รวมถึง Alpine Linux ใน Docker Containers ที่ใช้ \`ash\` / \`dash\`)
- **Bash (Bourne Again Shell):** พัฒนาขึ้นโดยโครงการ GNU ต่อยอดจาก sh โดยเพิ่มฟีเจอร์ระดับสูง เช่น Arrays, Associative Arrays, Regular Expression Matching, String Manipulation, และ \`[[ ... ]]\`

---

## 3. ตัวแปรและการอ้างอิงค่า (Variables & Quoting)
ใน Bash การกำหนดค่าตัวแปร **ห้ามมีช่องว่างรอบเครื่องหมายเท่ากับ (=)** โดยเด็ดขาด:

\`\`\`bash
# ถูกต้อง
APP_NAME="PaymentGateway"
PORT=8080

# ผิด (Shell จะมองว่า APP_NAME เป็นคำสั่ง และ = เป็นพารามิเตอร์)
# APP_NAME = "PaymentGateway"

# การอ้างอิงค่าตัวแปร: ใช้ Double Quotes เสมอเพื่อป้องกัน Word Splitting และ Globbing
echo "Application running: \${APP_NAME} on port: \${PORT}"

# Single Quotes vs Double Quotes
# Single quotes ('...') จะปิดการแปลงค่าทุกอย่าง (Raw string literal)
# Double quotes ("...") จะยอมรับ Variable expansion และ Command substitution
echo 'Running on port: $PORT'  # แสดง: Running on port: $PORT
echo "Running on port: $PORT"  # แสดง: Running on port: 8080
\`\`\`

---

## 4. Parameter Expansion ที่ทรงพลัง
แทนที่จะต้องเรียกโปรแกรมภายนอกอย่าง \`cut\` หรือ \`basename\` เราสามารถใช้ Parameter Expansion ของ Bash ซึ่งทำงานเร็วกว่าหลายเท่าเพราะทำงานในหน่วยความจำของเชลล์โดยตรง:

\`\`\`bash
FILENAME="production_database_backup_2026.sql.gz"

# กำหนดค่าเริ่มต้นถ้าตัวแปรว่างอยู่ (Default Value)
ENV_NAME="\${APP_ENV:-development}"

# ตัดคำนำหน้าแบบสั้น (#) และแบบยาวที่สุด (##)
echo "\${FILENAME#*_}"   # ตัดถึง '_' ตัวแรก => database_backup_2026.sql.gz
echo "\${FILENAME##*.}"  # นามสกุลไฟล์สุดท้าย => gz

# ตัดคำลงท้ายแบบสั้น (%) และแบบยาวที่สุด (%%)
echo "\${FILENAME%.*}"   # ตัดนามสกุลสุดท้ายออก => production_database_backup_2026.sql
echo "\${FILENAME%%.*}"  # ตัดนามสกุลทั้งหมด => production_database_backup_2026

# ค้นหาและแทนที่ข้อความ (\${VAR/old/new})
echo "\${FILENAME/production/staging}"  # staging_database_backup_2026.sql.gz

# ความยาวของสตริง (\${#VAR})
echo "ความยาวชื่อไฟล์: \${#FILENAME}"
\`\`\`

---

## 5. Command Substitution และ Arithmetic Expansion
- **Command Substitution (\`$(...)\`):** นำผลลัพธ์ของคำสั่งมาเก็บลงในตัวแปร (แนะนำมากกว่าเครื่องหมาย backticks \`\`\`...)
- **Arithmetic Expansion (\`$((...))\`):** การคำนวณคณิตศาสตร์จำนวนเต็ม (Integer)

\`\`\`bash
CURRENT_DATE=$(date +%Y-%m-%d)
FREE_MEM_MB=$(free -m | awk '/Mem:/ {print $4}')

COUNT=10
TOTAL=$(( COUNT * 5 + 25 ))

echo "Date: $CURRENT_DATE | Free RAM: \${FREE_MEM_MB}MB | Total: $TOTAL"
\`\`\``,
      codeExample: `#!/usr/bin/env bash

# กำหนดตัวแปรระบบ
SERVICE_NAME="NotificationWorker"
RELEASE_VERSION="v2.4.1"
ARCHIVE_PATH="/var/deployments/releases/NotificationWorker_v2.4.1_linux_amd64.tar.gz"

# 1. Parameter Expansion สกัดชื่อไฟล์และนามสกุล
ARCHIVE_FILE="\${ARCHIVE_PATH##*/}"
TARGET_DIR="/opt/services/\${SERVICE_NAME}"

# 2. Command Substitution & Arithmetic Expansion
START_TIME=$(date +%s)
ACTIVE_CONTAINERS=14
TARGET_CONTAINERS=$(( ACTIVE_CONTAINERS * 2 ))

# 3. แสดงผลลัพธ์สรุปสถานะ
echo "=========================================="
echo "Deployment Profile: \${SERVICE_NAME}"
echo "Archive File      : \${ARCHIVE_FILE}"
echo "Target Directory  : \${TARGET_DIR}"
echo "Scale Target      : \${ACTIVE_CONTAINERS} -> \${TARGET_CONTAINERS} nodes"
echo "Timestamp (Epoch) : \${START_TIME}"
echo "=========================================="`,
      challenge: {
        description: "จงเขียนเชลล์สคริปต์ที่รับตัวแปร LOG_FILE แล้วใช้ Parameter Expansion สกัดชื่อไฟล์โดยตัดโฟลเดอร์นำหน้าออก และสกัดนามสกุลไฟล์ออกมาพิมพ์ผลลัพธ์",
        startingCode: `#!/usr/bin/env bash

LOG_FILE="/var/log/audit/nginx_access_2026.log"

# TODO: สกัดชื่อไฟล์ (ตัด path ทิ้ง)
FILE_NAME=""

# TODO: สกัดนามสกุลไฟล์
EXTENSION=""

echo "File: \${FILE_NAME}"
echo "Ext: \${EXTENSION}"`,
        solution: `#!/usr/bin/env bash

LOG_FILE="/var/log/audit/nginx_access_2026.log"

# สกัดชื่อไฟล์โดยตัดทุกอย่างจนถึง / ตัวสุดท้าย
FILE_NAME="\${LOG_FILE##*/}"

# สกัดนามสกุลไฟล์โดยตัดทุกอย่างจนถึง . ตัวสุดท้าย
EXTENSION="\${LOG_FILE##*.}"

echo "File: \${FILE_NAME}"
echo "Ext: \${EXTENSION}"`
      },
      quizzes: [
        {
          question: "Shebang บรรทัดแรกแบบใดที่แนะนำที่สุดเพื่อความยืดหยุ่นในการค้นหาไบนารีบนสภาพแวดล้อมที่ต่างกัน?",
          options: [
            "#!/bin/bash",
            "#!/usr/bin/env bash",
            "#!bash",
            "// bin/bash"
          ],
          correctOption: 1,
          explanation: "#!/usr/bin/env bash จะใช้คำสั่ง env ในการค้นหาตำแหน่ง binary ของ bash จาก PATH ของระบบ ทำให้ทำงานได้ข้ามระบบที่อาจติดตั้ง bash ไว้ที่ /bin, /usr/bin หรือ /usr/local/bin"
        },
        {
          question: "Parameter Expansion ในรูปแบบ \${VAR:-default} มีพฤติกรรมอย่างไร?",
          options: [
            "หาก VAR ว่างอยู่ จะให้ผลลัพธ์เป็น 'default' แต่ไม่เซ็ตค่าลงใน VAR เดิม",
            "ลบตัวแปร VAR ทิ้งออกจากหน่วยความจำ",
            "หาก VAR ไม่ว่าง จะสั่งพิมพ์ default ออกมาเสมอ",
            "โยนข้อผิดพลาด Fatal Error ทันทีถ้า VAR มีค่าเป็นตัวเลข"
          ],
          correctOption: 0,
          explanation: "\${VAR:-default} จะส่งคืนค่า 'default' หากตัวแปร VAR ว่างเปล่าหรือยังไม่ได้ประกาศค่า แต่จะไม่เปลี่ยนค่าของตัวแปร VAR นั้น (หากต้องการให้เซ็ตค่าลงตัวแปรด้วย ต้องใช้ \${VAR:=default})"
        },
        {
          question: "ทำไมถึงแนะนำให้ครอบตัวแปรด้วย Double Quotes เช่น \"$MY_VAR\" เมื่อเรียกใช้งาน?",
          options: [
            "เพื่อแปลงให้ตัวแปรกลายเป็น Boolean เสมอ",
            "เพื่อป้องกันปัญหา Word Splitting เมื่อในค่ามีช่องว่าง และป้องกัน Globbing",
            "เพราะ Bash บังคับให้สตริงทุกตัวต้องมี Quotes ไม่อย่างนั้นจะคอมไพล์ไม่ผ่าน",
            "เพื่อลดการใช้หน่วยความจำของ Process ลงครึ่งหนึ่ง"
          ],
          correctOption: 1,
          explanation: "หากไม่ใส่ Quotes เมื่อตัวแปรมีช่องว่าง (เช่น 'My Documents') Bash จะทำการ Word Splitting มองเป็นสองคำแยกกัน ซึ่งอาจทำให้คำสั่งเช่น rm -rf $MY_VAR ลบโฟลเดอร์ผิดพลาดอย่างร้ายแรง"
        }
      ]
    },
    {
      id: "shell-2",
      title: "โครงสร้างควบคุม, Exit Codes ($?), Conditionals ([ vs [[) และ Loops",
      description: "เรียนรู้ระบบ Exit Status 0-255, การทดสอบเงื่อนไขด้วย test / [ ] และ New Test [[ ]], คำสั่ง if-elif-else, case switch และลูป for/while",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# โครงสร้างควบคุม, Exit Codes ($?), Conditionals และ Loops

ในโลกของ Unix ทุกคำสั่งที่รันเสร็จสิ้นจะส่งคืนตัวเลขจำนวนเต็มที่เรียกว่า **Exit Status (หรือ Exit Code)** กลับมาเสมอ โดยมีค่าระหว่าง **0 ถึง 255**

---

## 1. ปรัชญา Exit Code (\`$?\`)
- **\`0\` (Zero):** หมายถึง คำสั่งทำงานสำเร็จโดยสมบูรณ์ (Success)
- **\`ไม่ใช่ 0\` (1 - 255):** หมายถึง เกิดข้อผิดพลาด (Failure/Error) เช่น:
  - \`1\`: General errors
  - \`2\`: Misuse of shell builtins
  - \`126\`: Command cannot execute (Permission denied)
  - \`127\`: Command not found
  - \`130\`: Script terminated by Control-C (\`SIGINT\`)

สามารถตรวจสอบ Exit Code ของคำสั่งล่าสุดได้จากตัวแปรพิเศษ \`$?\`

\`\`\`bash
ls /non_existing_directory
echo "Exit code: $?" # ได้ค่า 2 (No such file or directory)
\`\`\`

---

## 2. Conditionals: เปรียบเทียบ \`[\` vs \`[[\`
- **\`[ ... ]\` (test command):** เป็นมาตรฐาน POSIX sh แบบดั้งเดิม ต้องระวังเรื่อง Word splitting ต้องครอบตัวแปรด้วย quotes เสมอ
- **\`[[ ... ]]\` (Bash keyword):** เป็น New Test ของ Bash แนะนำให้ใช้เป็นค่าเริ่มต้น ปลอดภัยกว่า ไม่แตกคำเมื่อตัวแปรว่าง รองรับ Regular Expressions (\`=~\`) และ Pattern Wildcard (\`==\`)

### ตาราง Operator สำคัญในการทดสอบ:
| ตัวทดสอบ | ความหมาย |
|---|---|
| \`-f "$FILE"\` | มีไฟล์อยู่จริงและเป็น Regular file |
| \`-d "$DIR"\` | มีไดเรกทอรีอยู่จริง |
| \`-s "$FILE"\` | ไฟล์มีอยู่จริงและขนาดใหญ่กว่า 0 ไบต์ |
| \`-z "$STR"\` | สตริงมีความยาวเป็นศูนย์ (ว่างเปล่า) |
| \`-n "$STR"\` | สตริงไม่ว่างเปล่า |
| \`$A -eq $B\` | ตัวเลขเท่ากัน (\`-ne\`, \`-lt\`, \`-le\`, \`-gt\`, \`-ge\`) |
| \`"$A" == "$B"\` | ข้อความตรงกัน |
| \`"$A" =~ ^[0-9]+$\` | ตรงกับ Regular Expression (เฉพาะใน \`[[ ... ]]\`) |

\`\`\`bash
STATUS_CODE=200
USER_EMAIL="admin@enterprise.com"

if [[ "$STATUS_CODE" -eq 200 ]] && [[ "$USER_EMAIL" =~ ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$ ]]; then
  echo "Authorized API request from: $USER_EMAIL"
elif [[ "$STATUS_CODE" -ge 400 ]]; then
  echo "Client or Server Error occurred: $STATUS_CODE"
else
  echo "Unhandled status code: $STATUS_CODE"
fi
\`\`\`

---

## 3. Case Pattern Matching (Switch Case)
ใช้เมื่อมีเงื่อนไขหลายทางเลือก ช่วยให้อ่านง่ายกว่า if-elif ต่อกันยาวๆ:

\`\`\`bash
ACTION="\${1:-status}"

case "$ACTION" in
  start)
    echo "Starting cluster daemon..."
    ;;
  stop|halt)
    echo "Stopping cluster daemon gracefully..."
    ;;
  restart)
    echo "Restarting cluster..."
    ;;
  *)
    echo "Usage: $0 {start|stop|restart}" >&2
    exit 1
    ;;
esac
\`\`\`

---

## 4. Loops (for, while, until)

### For Loop ใน Bash:
\`\`\`bash
# วนลูปตามรายการ (Items)
for SERVER in app01 app02 db01; do
  echo "Checking node: $SERVER"
done

# วนลูปตัวเลขแบบ C-style
for ((i=1; i<=5; i++)); do
  echo "Step $i of 5"
done

# วนลูปไฟล์ด้วย Globbing (ปลอดภัย ไม่แตกคำ)
for CONF_FILE in /etc/nginx/conf.d/*.conf; do
  [[ -f "$CONF_FILE" ]] || continue
  echo "Testing config: $CONF_FILE"
done
\`\`\`

### While Loop อ่านข้อมูลทีละบรรทัด (Line-by-line reading):
การอ่านไฟล์ทีละบรรทัดด้วย \`while IFS= read -r line\` คือวิธีที่ถูกต้องและปลอดภัยที่สุดใน Bash:

\`\`\`bash
# IFS= ป้องกันการตัด Whitespace หน้าหลัง
# -r ป้องกันการตีความ Backslash (\) เป็น escape character
while IFS= read -r LINE || [[ -n "$LINE" ]]; do
  echo "Processing record: $LINE"
done < "servers.txt"
\`\`\``,
      codeExample: `#!/usr/bin/env bash

# จำลองรายการตรวจสอบเซิร์ฟเวอร์
SERVERS=("web-node-01" "api-worker-01" "redis-cache-01")

echo "Starting Health Check Sequence..."
TOTAL_CHECKS=\${#SERVERS[@]}
SUCCESS_COUNT=0

for NODE in "\${SERVERS[@]}"; do
  echo -n "Pinging \${NODE}... "
  
  # จำลองผลลัพธ์ผ่านตัวเลขสุ่ม
  PING_LATENCY=$(( (RANDOM % 50) + 10 ))
  
  if [[ "$PING_LATENCY" -lt 45 ]]; then
    echo "SUCCESS (Latency: \${PING_LATENCY}ms)"
    SUCCESS_COUNT=$(( SUCCESS_COUNT + 1 ))
  else
    echo "WARNING: HIGH LATENCY (\${PING_LATENCY}ms)" >&2
  fi
done

echo "----------------------------------------"
echo "Health check completed: \${SUCCESS_COUNT}/\${TOTAL_CHECKS} healthy"

if [[ "$SUCCESS_COUNT" -eq "$TOTAL_CHECKS" ]]; then
  echo "Status: ALL SYSTEMS OPERATIONAL"
  exit 0
else
  echo "Status: DEGRADED PERFORMANCE"
  exit 1
fi`,
      challenge: {
        description: "เขียนคำสั่ง if condition ด้วย [[ ... ]] เพื่อตรวจสอบว่าตัวแปร PORT เป็นตัวเลขล้วน และมีค่าอยู่ระหว่าง 1024 ถึง 65535 หรือไม่ หากใช่พิมพ์ 'Valid Port' มิฉะนั้นพิมพ์ 'Invalid Port'",
        startingCode: `#!/usr/bin/env bash

PORT="8080"

# TODO: ตรวจสอบว่า PORT เป็นตัวเลขล้วน และ 1024 <= PORT <= 65535
if [[ ... ]]; then
  echo "Valid Port"
else
  echo "Invalid Port"
fi`,
        solution: `#!/usr/bin/env bash

PORT="8080"

if [[ "$PORT" =~ ^[0-9]+$ ]] && [[ "$PORT" -ge 1024 ]] && [[ "$PORT" -le 65535 ]]; then
  echo "Valid Port"
else
  echo "Invalid Port"
fi`
      },
      quizzes: [
        {
          question: "Exit Code ค่าใดในระบบ Unix ที่บ่งบอกว่าคำสั่งทำงานสำเร็จโดยไม่มีข้อผิดพลาด?",
          options: [
            "1",
            "0",
            "-1",
            "200"
          ],
          correctOption: 1,
          explanation: "ในระบบ Unix/Linux Exit Code 0 คือ Success เสมอ ส่วนค่าตั้งแต่ 1 ถึง 255 แสดงถึงข้อผิดพลาดประเภทต่างๆ"
        },
        {
          question: "ทำไมคำสั่ง [[ ... ]] จึงได้รับความนิยมและปลอดภัยกว่า [ ... ] ในการเขียน Bash?",
          options: [
            "เพราะ [[ ... ]] รองรับ Regular Expression (=~), ป้องกัน word splitting เมื่อตัวแปรว่าง และไม่ต้อง escape เครื่องหมาย < >",
            "เพราะ [[ ... ]] รันเร็วกว่า 100 เท่าเนื่องจากรันบน GPU",
            "เพราะ [ ... ] ถูกยกเลิกไปแล้วใน Linux ทุกตัว",
            "เพราะ [[ ... ]] สามารถใช้เชื่อมต่อไปยังฐานข้อมูลได้โดยตรง"
          ],
          correctOption: 0,
          explanation: "[[ ... ]] เป็น Keyword ภายในของ Bash ที่ไม่ทำการ Word Splitting และ Pathname Expansion รองรับ RegEx matching (=~) และ Logic operators (&&, ||) โดยตรง"
        },
        {
          question: "รูปแบบ while loop ใดที่ถูกต้องที่สุดสำหรับการอ่านไฟล์ทีละบรรทัดโดยไม่ให้ Whitespace และ Backslash ผิดเพี้ยน?",
          options: [
            "for line in $(cat file.txt); do ... done",
            "while IFS= read -r line; do ... done < file.txt",
            "while read line; do ... done",
            "cat file.txt | while scan line; do ... done"
          ],
          correctOption: 1,
          explanation: "while IFS= read -r line; do ... done < file.txt เป็นสำนวนที่ดีที่สุด เพราะ IFS= ป้องกันการตัดช่องว่างหน้าหลัง และ -r ป้องกันการแปลผล backslash escapes"
        }
      ]
    },
    {
      id: "shell-3",
      title: "I/O Redirection, Streams และ File Descriptors (0, 1, 2)",
      description: "เจาะลึก Standard Streams: stdin, stdout, stderr, การรวม stream 2>&1, การทิ้งข้อมูล /dev/null, HereDocs (<<EOF), HereStrings และคำสั่ง tee",
      duration: "30 นาที",
      level: "ปานกลาง",
      content: `# I/O Redirection, Streams และ File Descriptors (0, 1, 2)

ในระบบปฏิบัติการ Unix **"Everything is a file"** และทุกๆ โปรเซสที่ทำงานจะเปิดช่องทางการสื่อสารมาตรฐาน 3 ช่องทางที่เรียกว่า **Standard File Descriptors (FD)**

---

## 1. ตาราง Standard Streams
| FD | ชื่อสตรีม | หน้าที่ | ปลายทางปริยาย (Default) |
|---|---|---|---|
| **\`0\`** | **stdin** (Standard Input) | รับข้อมูลนำเข้า | คีย์บอร์ด (Terminal Keyboard) |
| **\`1\`** | **stdout** (Standard Output) | ส่งผลลัพธ์การทำงานปกติ | หน้าจอคอนโซล (Terminal Screen) |
| **\`2\`** | **stderr** (Standard Error) | ส่งข้อความเตือนและข้อผิดพลาด | หน้าจอคอนโซล (Terminal Screen) |

---

## 2. กลไกการ Redirection
เราสามารถควบคุมให้ stdout และ stderr ไหลไปยังไฟล์หรืออุปกรณ์อื่นแทนที่จะแสดงบนหน้าจอ:

\`\`\`bash
# 1. เขียนทับ stdout ลงไฟล์ (Overwrite: >)
echo "Start migration" > deploy.log

# 2. เขียนต่อท้าย stdout ลงไฟล์ (Append: >>)
echo "Step completed" >> deploy.log

# 3. นำทาง stderr (FD 2) ไปยังไฟล์แยกต่างหาก
./build_service.sh 2> errors.log

# 4. รวม stderr เข้ากับ stdout (2>&1)
./build_service.sh > combined.log 2>&1

# ใน Bash ยุคใหม่ มีช็อตคัตสำหรับรวม stdout และ stderr:
./build_service.sh &> combined.log
\`\`\`

> **ลำดับการเขียนมีความสำคัญอย่างยิ่ง:**  
> \`> file.log 2>&1\` ถูกต้อง (เปิด file.log สำหรับ stdout ก่อน แล้วชี้ stderr ไปที่ stdout)  
> \`2>&1 > file.log\` ผิด! (stderr จะยังชี้ไปที่หน้าจอเดิมก่อนที่ stdout จะถูกเปลี่ยน)

---

## 3. The Black Hole: \`/dev/null\`
\`/dev/null\` คืออุปกรณ์พิเศษของ Unix ที่ทำหน้าที่เสมือนหลุมดำ ทุกอย่างที่เขียนลงไปจะหายไปทันที และเมื่ออ่านจากมันจะได้รับ EOF (End-of-File) ทันที นิยมใช้เพื่อระงับ Output ที่ไม่ต้องการ:

\`\`\`bash
# ปิดทั้งผลลัพธ์ปกติและข้อความ Error โดยสิ้นเชิง
grep -q "DATABASE_CONNECTED" /var/log/app.log >/dev/null 2>&1

if [[ $? -eq 0 ]]; then
  echo "Database connection verified!"
fi
\`\`\`

---

## 4. HereDoc (\`<<EOF\`) และ HereString (\`<<<\`)

### HereDoc (Multiline text insertion):
ใช้สร้างคอนฟิกไฟล์หรือส่งข้อความหลายบรรทัดโดยไม่ต้องพิมพ์ \`echo\` ซ้ำๆ:

\`\`\`bash
DB_HOST="db.prod.internal"
DB_PORT="5432"

cat <<EOF > /etc/app/database.conf
# Autogenerated by Shell Automation Script
host=\${DB_HOST}
port=\${DB_PORT}
timeout=30
EOF
\`\`\`

> หากใช้ \`<<'EOF'\` (มี Quotes ครอบ EOF) เชลล์จะไม่ทำการแทนที่ค่าตัวแปร (No Parameter Expansion) เหมาะกับการสร้าง Shell script ซ้อน Shell script

### HereString (\`<<<\`):
ส่งข้อความสตริงสั้นๆ เข้าสู่ stdin ของคำสั่งโดยตรงโดยไม่ต้องใช้ \`echo ... | command\`:

\`\`\`bash
# แทนที่จะเขียน: echo "$RAW_JSON" | jq .name
# ใช้ HereString ได้เร็วกว่า:
jq .name <<< "$RAW_JSON"
\`\`\`

---

## 5. คำสั่ง \`tee\`: แยกสตรีม 2 ทาง
คำสั่ง \`tee\` ทำหน้าที่เหมือนข้อต่อ 3 ทาง รับข้อมูลจาก stdin แล้วส่งต่อให้ทั้ง stdout (แสดงบนหน้าจอ) และเขียนลงไฟล์ไปพร้อมกัน:

\`\`\`bash
# แสดงผลบนจอและบันทึกลงไฟล์ไปพร้อมกัน
echo "Deploying update..." | tee -a deployment.log

# เขียนลงไฟล์ที่ต้องใช้สิทธิ์ sudo (แก้ปัญหา sudo echo ... > /etc/file ไม่ทำงาน)
echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf
\`\`\``,
      codeExample: `#!/usr/bin/env bash

LOG_FILE="/tmp/service_audit.log"
CONFIG_FILE="/tmp/runtime_env.conf"

echo "=== System Stream Redirection Demo ===" | tee "$LOG_FILE"

# 1. เขียนคอนฟิกไฟล์ด้วย HereDoc
cat <<EOF > "$CONFIG_FILE"
# Runtime Environment Configuration
ENVIRONMENT=production
MAX_WORKERS=8
METRICS_ENABLED=true
EOF

echo "[INFO] Generated configuration file at: $CONFIG_FILE" | tee -a "$LOG_FILE"

# 2. ทดสอบจำลองคำสั่งที่มี Error ไปยัง stderr
test_command() {
  echo "Standard output: Checking file system integrity"
  echo "Standard error: Warning disk usage at 82%" >&2
}

echo "Executing stream redirection test..."
# แยก stdout ลงไฟล์ปกติ และแยก stderr ลงไฟล์ error
test_command 1>> "$LOG_FILE" 2>> /tmp/service_audit.err

echo "Audit log completed successfully."`,
      challenge: {
        description: "เขียนคำสั่ง Shell บรรทัดเดียวที่รันสคริปต์ 'worker.sh' โดยให้ส่งทั้ง stdout และ stderr ไปเก็บไว้ในไฟล์ 'output.log' ทั้งหมด",
        startingCode: `#!/usr/bin/env bash

# TODO: รัน worker.sh และ redirect ทั้ง stdout/stderr ไปที่ output.log
`,
        solution: `#!/usr/bin/env bash

./worker.sh > output.log 2>&1`
      },
      quizzes: [
        {
          question: "File Descriptor หมายเลข 2 (FD 2) สื่อถึงสตรีมใดในระบบปฏิบัติการ Linux?",
          options: [
            "Standard Input (stdin)",
            "Standard Output (stdout)",
            "Standard Error (stderr)",
            "Network Socket"
          ],
          correctOption: 2,
          explanation: "0 = stdin, 1 = stdout, และ 2 = stderr"
        },
        {
          question: "การใช้ >/dev/null 2>&1 มีวัตถุประสงค์เพื่ออะไร?",
          options: [
            "เพื่อส่งผลลัพธ์ทั้งหมดไปยังเครื่องพิมพ์ของระบบ",
            "เพื่อซ่อนทั้งข้อความปกติ (stdout) และข้อความแจ้งเตือนความผิดพลาด (stderr) ไม่ให้แสดงผล",
            "เพื่อสร้างไฟล์ชื่อ dev/null ขึ้นในโฟลเดอร์ปัจจุบัน",
            "เพื่อบังคับให้คำสั่งรันด้วยสิทธิ์ root"
          ],
          correctOption: 1,
          explanation: ">/dev/null 2>&1 จะส่ง stdout ไปที่ /dev/null ซึ่งทิ้งข้อมูลไป และชี้ stderr ให้ตามไปที่เดียวกัน ทำให้ไม่มีข้อความใดๆ ปรากฏบนหน้าจอ"
        },
        {
          question: "คำสั่ง tee มีประโยชน์หลักอย่างไรในการทำงานกับ Streams?",
          options: [
            "ลบไฟล์ชั่วคราวทิ้งทันทีหลังรันเสร็จ",
            "รับข้อมูลจาก stdin แล้วส่งต่อให้ stdout (หน้าจอ) และเขียนลงไฟล์พร้อมๆ กัน",
            "บีบอัดไฟล์สตรีมให้มีขนาดเล็กลง 50%",
            "หยุดการทำงานของสคริปต์เพื่อรอให้ผู้ใช้กดปุ่ม Enter"
          ],
          correctOption: 1,
          explanation: "tee ทำหน้าที่เหมือนท่อแยกสองทาง รับข้อมูลจาก stdin แสดงผลออกทางหน้าจอ (stdout) และบันทึกลงไฟล์พร้อมกัน"
        }
      ]
    },
    {
      id: "shell-4",
      title: "มหาอำนาจการประมวลผลข้อความ: grep, sed, และ awk",
      description: "ฝึกฝนการใช้ 3 ทหารเสือแห่ง Unix ในการสืบค้น ค้นหา-แทนที่ และประมวลผลข้อมูล Log และตารางแบบ Stream Processing",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# มหาอำนาจการประมวลผลข้อความ: grep, sed, และ awk

ในงาน DevOps, SRE และ System Administration ข้อมูลส่วนใหญ่ถูกบันทึกในรูปของ Plain Text เช่น Logs, CSV, TSV และ Configuration Files เครื่องมือ 3 ชิ้นที่ทรงพลังที่สุดในการจัดการข้อมูลเหล่านี้คือ **grep**, **sed**, และ **awk**

---

## 1. grep: เครื่องมือนักสืบค้น (Global Regular Expression Print)
ใช้ค้นหาบรรทัดที่ตรงกับแพทเทิร์นที่กำหนด:

\`\`\`bash
# ค้นหาคำแบบไม่สนใจตัวพิมพ์เล็ก-ใหญ่ (-i) และแสดงเลขบรรทัด (-n)
grep -in "out of memory" /var/log/syslog

# ค้นหาแบบ Extended Regex (-E)
grep -E "(404|500|502)" access.log

# ค้นหาแบบ Recursive ในทุกโฟลเดอร์ย่อย (-r) พร้อมแสดงเฉพาะชื่อไฟล์ (-l)
grep -rl "AWS_SECRET_ACCESS_KEY" src/

# ค้นหาบรรทัดที่ไม่ตรงกับคำที่ระบุ (Invert match: -v)
grep -v "^#" /etc/nginx/nginx.conf | grep -v "^$" # กรอง Comment และบรรทัดว่างทิ้ง

# นับจำนวนบรรทัดที่พบ (-c)
grep -c "ERROR" app.log
\`\`\`

---

## 2. sed: สตรีมเอดิเตอร์ (Stream Editor)
ใช้ค้นหา แทนที่ แทรก หรือลบข้อความในสตรีมข้อมูลโดยไม่ต้องเปิดโปรแกรม Editor:

\`\`\`bash
# แทนที่คำแรกในแต่ละบรรทัด (s/old/new/)
sed 's/http/https/' urls.txt

# แทนที่ทุกจุดที่พบในบรรทัด (Global Flag: /g)
sed 's/127.0.0.1/10.0.0.1/g' config.env

# แก้ไขไฟล์โดยตรง ณ ตำแหน่งเดิม (In-place edit: -i)
# หมายเหตุ: บน macOS ต้องระบุ sed -i '' 's/.../.../'
sed -i 's/PORT=3000/PORT=8080/g' .env

# ลบบรรทัดที่ตรงกับคำว่า DEBUG ทิ้ง (/pattern/d)
sed '/DEBUG/d' app.log

# แสดงเฉพาะบรรทัดที่ 10 ถึง 20 (Print lines: -n ...p)
sed -n '10,20p' large_trace.log
\`\`\`

---

## 3. awk: ภาษาประมวลผลข้อมูลเชิงคอลัมน์ (Columnar Processing)
awk ไม่ใช่แค่คำสั่ง แต่เป็นภาษาโปรแกรมแบบย่อที่เก่งกาจเรื่องข้อมูลที่มีการแบ่งคอลัมน์ (Delimiter เช่น ช่องว่าง หรือ Tab)

### ตัวแปรภายในสำคัญของ awk:
- **\`$0\`**: ทั้งบรรทัด
- **\`$1, $2, ...\`**: คอลัมน์ที่ 1, 2, ...
- **\`NF\`**: Number of Fields (จำนวนคอลัมน์ในบรรทัดนั้น) โดย \`$NF\` คือคอลัมน์สุดท้าย
- **\`NR\`**: Number of Records (เลขที่บรรทัดปัจจุบัน)
- **\`FS\`**: Field Separator (ตัวแบ่งคอลัมน์ เช่น \`-F','\` สำหรับ CSV)

\`\`\`bash
# ดึงคอลัมน์ IP address ($1) และ Request URL ($7) จาก Nginx Access Log
awk '{print $1, $7}' /var/log/nginx/access.log

# กรองเฉพาะบรรทัดที่คอลัมน์ที่ 9 มี Status code เป็น 500 ขึ้นไป
awk '$9 >= 500 {print "Alert! IP: " $1 " Failed URL: " $7 " Status: " $9}' access.log

# ใช้บล็อก BEGIN (รันก่อนเริ่มอ่าน) และ END (รันหลังอ่านไฟล์จบ) เพื่อคำนวณผลรวม
awk '{sum += $5} END {print "Total Transfer Bytes: " sum}' access.log

# แยกข้อมูลด้วยเครื่องหมาย Colon (:) เช่นไฟล์ /etc/passwd
awk -F':' '{print "User: " $1 " Home: " $6}' /etc/passwd
\`\`\`

---

## 4. The Linux Processing Pipeline
เมื่อนำคำสั่งทั้งสามมาต่อท่อ (Pipes: \`|\`) ร่วมกับ \`sort\` และ \`uniq -c\` จะกลายเป็นเครื่องมือวิเคราะห์ระดับโปร:

\`\`\`bash
# หา Top 5 IP Address ที่ส่ง Request มายังเซิร์ฟเวอร์มากที่สุด
cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 5
\`\`\``,
      codeExample: `#!/usr/bin/env bash

# สร้างตัวอย่าง Web Server Access Log จำลอง
LOG_DATA="192.168.1.10 - [29/Sep/2026] \"GET /index.html\" 200 4520
10.0.0.52 - [29/Sep/2026] \"POST /api/checkout\" 500 120
192.168.1.10 - [29/Sep/2026] \"GET /style.css\" 200 1250
172.16.0.4 - [29/Sep/2026] \"GET /admin\" 403 89
10.0.0.52 - [29/Sep/2026] \"POST /api/checkout\" 500 120
192.168.1.10 - [29/Sep/2026] \"GET /api/v1/users\" 200 8920"

echo "=== 1. ใช้ grep กรองเฉพาะ HTTP 500 Internal Server Errors ==="
grep " 500 " <<< "$LOG_DATA"

echo ""
echo "=== 2. ใช้ sed เปลี่ยนหมายเลข IP 192.168.1.10 เป็น 'GATEWAY-NODE' ==="
sed 's/192.168.1.10/GATEWAY-NODE/g' <<< "$LOG_DATA"

echo ""
echo "=== 3. ใช้ awk คำนวณปริมาณ Bytes รวมของทุก Request ==="
awk '{total_bytes += $NF} END {print "Total Response Traffic: " total_bytes " bytes"}' <<< "$LOG_DATA"`,
      challenge: {
        description: "เขียนคำสั่ง awk บรรทัดเดียวในการอ่านไฟล์ CSV ที่คั่นด้วยจุลภาค (,) แล้วพิมพ์เฉพาะคอลัมน์ที่ 1 (Name) และคอลัมน์ที่ 3 (Salary) ออกมา",
        startingCode: `#!/usr/bin/env bash

CSV_DATA="John,Engineering,85000
Sarah,Marketing,72000
David,DevOps,95000"

# TODO: ใช้ awk โดยกำหนด Field Separator เป็น ',' และพิมพ์ $1 กับ $3
awk ... <<< "$CSV_DATA"`,
        solution: `#!/usr/bin/env bash

CSV_DATA="John,Engineering,85000
Sarah,Marketing,72000
David,DevOps,95000"

awk -F',' '{print $1, $3}' <<< "$CSV_DATA"`
      },
      quizzes: [
        {
          question: "แฟล็กใดของ grep ที่ใช้สำหรับค้นหาข้อความโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่ (Case-insensitive)?",
          options: [
            "-i",
            "-v",
            "-n",
            "-c"
          ],
          correctOption: 0,
          explanation: "แฟล็ก -i (ignore-case) ทำให้ grep ค้นหาทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ได้เหมือนกัน เช่น 'error' จะจับคู่กับ 'Error' และ 'ERROR'"
        },
        {
          question: "ในไวยากรณ์ของ awk ตัวแปร $NF มีความหมายว่าอย่างไร?",
          options: [
            "ชื่อของไฟล์ที่กำลังอ่านอยู่",
            "ค่าของข้อมูลในคอลัมน์สุดท้ายของบรรทัดนั้น",
            "จำนวนบรรทัดทั้งหมดที่นับได้จนถึงปัจจุบัน",
            "สัญลักษณ์บรรทัดใหม่ (Newline)"
          ],
          correctOption: 1,
          explanation: "NF ย่อมาจาก Number of Fields ดังนั้น $NF จึงหมายถึง Field หรือคอลัมน์ลำดับที่ NF ซึ่งก็คือคอลัมน์สุดท้ายของแต่ละบรรทัดนั่นเอง"
        },
        {
          question: "คำสั่ง sed -i 's/foo/bar/g' file.txt มีผลการทำงานอย่างไร?",
          options: [
            "แทนที่คำว่า foo ด้วย bar เฉพาะคำแรกของแต่ละบรรทัดและพิมพ์ออกหน้าจอ",
            "ลบคำว่า foo ทิ้งและสร้างไฟล์สำรองชื่อ file.txt.bak",
            "แทนที่ทุกจุดที่พบคำว่า foo ด้วยคำว่า bar และบันทึกทับลงในไฟล์ file.txt ทันทีโดยไม่ต้อง redirect",
            "ตรวจสอบว่ามีคำว่า foo อยู่ในไฟล์หรือไม่โดยส่งคืน Exit Code"
          ],
          correctOption: 2,
          explanation: "-i ย่อมาจาก In-place editing ทำให้แก้ไขและบันทึกผลลัพธ์ทับลงในไฟล์เดิมทันที และแฟล็ก /g ท้ายคำสั่งระบุให้แทนที่ทุกคำที่พบในบรรทัด"
        }
      ]
    },
    {
      id: "shell-5",
      title: "การเขียน Shell Functions, Variable Scoping (local), และ Positional Parameters",
      description: "ออกแบบสถาปัตยกรรมฟังก์ชันใน Shell, การป้องกันตัวแปรชนกันด้วย local, การอ่านพารามิเตอร์ $1-$9, $#, $@, $* และการ parse flags ด้วย getopts",
      duration: "35 นาที",
      level: "ปานกลาง",
      content: `# การเขียน Shell Functions, Variable Scoping (local), และ Positional Parameters

เมื่อสคริปต์มีความซับซ้อนมากขึ้น การเขียนคำสั่งแบบเส้นตรง (Linear script) จะทำให้อ่านยากและเกิดโค้ดซ้ำซ้อน การจัดโครงสร้างด้วย **Functions** และการจัดการ Scope ตัวแปรจึงเป็นหัวใจสำคัญของ Production Scripting

---

## 1. การประกาศฟังก์ชันและข้อควรระวังเรื่อง Scope
ใน Shell สคริปต์ ตัวแปรทุกตัวที่ประกาศขึ้นมาจะมีสถานะเป็น **Global Variable** โดยอัตโนมัติ แม้จะประกาศอยู่ภายในฟังก์ชันก็ตาม!

> **กฎเหล็ก:** ในฟังก์ชันของ Bash ต้องประกาศตัวแปรภายในด้วยคีย์เวิร์ด \`local\` เสมอ เพื่อป้องกันตัวแปรไปทับค่าของส่วนอื่นในโปรแกรม

\`\`\`bash
# รูปแบบการประกาศฟังก์ชันมาตรฐาน
calculate_checksum() {
  local target_file="$1"
  local algorithm="\${2:-sha256}"
  
  if [[ ! -f "$target_file" ]]; then
    echo "Error: File $target_file not found" >&2
    return 1 # ในฟังก์ชันใช้ return สำหรับส่ง Exit code (ห้ามใช้ exit เพราะจะปิดทั้งสคริปต์)
  fi
  
  local checksum
  checksum=$(openssl dgst -"$algorithm" "$target_file" | awk '{print $NF}')
  echo "$checksum"
  return 0
}
\`\`\`

---

## 2. Positional Parameters (ตัวแปรพารามิเตอร์)
เมื่อรันสคริปต์หรือเรียกฟังก์ชัน เชลล์จะส่งค่าอาร์กิวเมนต์ผ่านตัวแปรพิเศษดังนี้:

| ตัวแปร | ความหมาย |
|---|---|
| \`$0\` | ชื่อของไฟล์สคริปต์ที่กำลังรัน |
| \`$1 ... $9\` | พารามิเตอร์ลำดับที่ 1 ถึง 9 |
| \`\${10} ...\` | พารามิเตอร์ตั้งแต่ลำดับที่ 10 ขึ้นไป (ต้องมีปีกกาครอบ) |
| \`$#\` | จำนวนพารามิเตอร์ทั้งหมดที่ส่งเข้ามา |
| \`$@\` | รายการพารามิเตอร์ทั้งหมด แยกเป็นคำๆ (แนะนำเมื่อใช้ \`"$@"\`) |
| \`$*\` | รายการพารามิเตอร์ทั้งหมด รวมเป็นสตริงก้อนเดียว |
| \`shift\` | เลื่อนพารามิเตอร์ไปทางซ้าย 1 ตำแหน่ง (\`$2\` กลายเป็น \`$1\`) |

### ความแตกต่างระหว่าง \`"$@"\` กับ \`"$*"\`:
\`\`\`bash
# เมื่อส่งพารามิเตอร์: script.sh "Apple Pie" "Banana Bread"
# "$@" จะได้: ["Apple Pie", "Banana Bread"] (คงช่องว่างไว้ 2 อาร์กิวเมนต์)
# "$*" จะได้: ["Apple Pie Banana Bread"] (รวมเป็น 1 อาร์กิวเมนต์เดี่ยว)
for item in "$@"; do
  echo "Processing: $item"
done
\`\`\`

---

## 3. การแยกแยะ Flag และ Option ด้วย \`getopts\`
แทนที่จะเขียน if-else ตรวจสอบ \`$1\`, \`$2\` เอง Bash มี Built-in command ชื่อ \`getopts\` สำหรับจัดการ Command-line flags มาตรฐาน:

\`\`\`bash
#!/usr/bin/env bash

PORT=8080
VERBOSE=false

# : หน้า string หมายถึงโหมดเงียบ (silent error handling)
# ตัวอักษรที่มี : ตามหลัง (เช่น p:) หมายถึง flag นั้นต้องมีค่าตามมาด้วย (Argument)
while getopts "p:vh" OPTION; do
  case "$OPTION" in
    p)
      PORT="$OPTARG"
      ;;
    v)
      VERBOSE=true
      ;;
    h)
      echo "Usage: $0 [-p port] [-v] [-h]"
      exit 0
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

# เลื่อนพารามิเตอร์ที่ถูก parse โดย getopts ออกไป
shift $((OPTIND - 1))

echo "Server starting on port: $PORT (Verbose: $VERBOSE)"
echo "Remaining arguments: $@"
\`\`\``,
      codeExample: `#!/usr/bin/env bash

# ฟังก์ชันบันทึก Log พร้อม Timestamp และระดับความรุนแรง
log_event() {
  local level="$1"
  local message="$2"
  local timestamp
  timestamp=$(date +"%Y-%m-%d %H:%M:%S")

  case "$level" in
    INFO)
      echo "[\${timestamp}] [INFO]  \${message}"
      ;;
    WARN)
      echo "[\${timestamp}] [WARN]  \${message}" >&2
      ;;
    ERROR)
      echo "[\${timestamp}] [ERROR] \${message}" >&2
      ;;
    *)
      echo "[\${timestamp}] [DEBUG] \${message}"
      ;;
  esac
}

# ฟังก์ชันคำนวณพื้นที่และสถิติ
backup_directory() {
  local target_dir="$1"
  
  if [[ -z "$target_dir" ]]; then
    log_event "ERROR" "No target directory specified!"
    return 1
  fi
  
  log_event "INFO" "Starting backup process for \${target_dir}..."
  # จำลองการทำงาน
  log_event "INFO" "Compressing assets..."
  log_event "INFO" "Backup archive created successfully."
  return 0
}

# ทดสอบเรียกใช้งานฟังก์ชัน
log_event "INFO" "Application bootstrap initialized."
backup_directory "/var/www/production_app"`,
      challenge: {
        description: "เขียนฟังก์ชันชื่อ is_service_running ที่รับชื่อ service ($1) หากชื่อ service ว่างให้ return 2 แต่ถ้ามีชื่อ service ให้จำลองการส่งคืน 0 (สำเร็จ)",
        startingCode: `#!/usr/bin/env bash

# TODO: สร้างฟังก์ชัน is_service_running
is_service_running() {
  # รับตัวแปร local
  
  # ตรวจสอบว่าว่างหรือไม่
  
}

is_service_running "nginx"
echo "Status: $?"`,
        solution: `#!/usr/bin/env bash

is_service_running() {
  local service_name="$1"
  
  if [[ -z "$service_name" ]]; then
    return 2
  fi
  
  return 0
}

is_service_running "nginx"
echo "Status: $?"`
      },
      quizzes: [
        {
          question: "หากไม่ใส่คีย์เวิร์ด local หน้าการประกาศตัวแปรภายในฟังก์ชันของ Bash จะเกิดอะไรขึ้น?",
          options: [
            "Bash จะแจ้งเตือนข้อผิดพลาด Syntax Error ทันที",
            "ตัวแปรนั้นจะกลายเป็น Global Variable ที่อาจไปทับค่าตัวแปรอื่นนอกฟังก์ชันโดยไม่ตั้งใจ",
            "ตัวแปรจะถูกลบออกจากหน่วยความจำทันทีที่ออกจากบรรทัดนั้น",
            "ตัวแปรจะถูกแปลงเป็นค่าคงที่ (Read-only) โดยอัตโนมัติ"
          ],
          correctOption: 1,
          explanation: "ใน Shell script ตัวแปรทุกตัวเป็น Global โดยธรรมชาติหากไม่มีการประกาศด้วย local ซึ่งมักนำไปสู่ Side-effects และ Bug ร้ายแรงในสคริปต์ขนาดใหญ่"
        },
        {
          question: "ความแตกต่างที่สำคัญที่สุดระหว่าง \"$@\" และ \"$*\" คืออะไรเมื่อมี Double Quotes ครอบ?",
          options: [
            "\"$@\" แยกแต่ละพารามิเตอร์เป็นสมาชิกอิสระโดยคงช่องว่างไว้ ส่วน \"$*\" รวมทุกพารามิเตอร์เป็นสตริงเดี่ยวคั่นด้วย IFS",
            "\"$@\" ใช้สำหรับตัวเลขเท่านั้น ส่วน \"$*\" ใช้สำหรับข้อความ",
            "\"$*\" ปลอดภัยกว่าและเป็นมาตรฐานสากลกว่า \"$@\"",
            "ไม่มีความแตกต่างกัน สามารถใช้ทดแทนกันได้ 100%"
          ],
          correctOption: 0,
          explanation: "\"$@\" จะขยายค่าเป็นคำแยกกันตามที่ถูกส่งมา เช่น \"$1\" \"$2\" จึงเป็นวิธีที่ถูกต้องสำหรับการวนลูปส่งต่ออาร์กิวเมนต์ ส่วน \"$*\" จะนำพารามิเตอร์มารวมเป็นสตริงเดียว"
        },
        {
          question: "คำสั่ง shift ใน Shell Script ทำหน้าที่อะไร?",
          options: [
            "สลับตัวพิมพ์เล็กเป็นตัวพิมพ์ใหญ่ของข้อความ",
            "เลื่อนตำแหน่งของ Positional Parameters ไปทางซ้าย ทำให้ $2 กลายเป็น $1 และลดค่า $# ลง",
            "รีสตาร์ทสคริปต์ใหม่ตั้งแต่บรรทัดแรก",
            "เปลี่ยน Shell ปัจจุบันจาก bash เป็น zsh"
          ],
          correctOption: 1,
          explanation: "shift จะเลื่อนพารามิเตอร์ไปทางซ้าย 1 ตำแหน่ง (หรือตามจำนวนที่ระบุ เช่น shift 2) ทำให้คำสั่งอ่านพารามิเตอร์ถัดไปได้ง่ายขึ้น"
        }
      ]
    },
    {
      id: "shell-6",
      title: "Defensive Shell Scripting & Error Handling (set -euo pipefail)",
      description: "ยกระดับสคริปต์สู่เกรด Production ด้วย set -euo pipefail, การสร้างไฟล์ชั่วคราวอย่างปลอดภัยด้วย mktemp และการตรวจสอบด้วย ShellCheck",
      duration: "35 นาที",
      level: "ขั้นสูง",
      content: `# Defensive Shell Scripting & Error Handling

สคริปต์ Bash แบบดั้งเดิมมักทำงานต่อไปเรื่อยๆ แม้จะมีคำสั่งใดคำสั่งหนึ่งพัง (Fails silently) ซึ่งอาจก่อให้เกิดหายนะ เช่น คำสั่ง \`rm -rf /tmp/$SUBDIR\` หากตัวแปร \`SUBDIR\` ว่างเปล่า มันจะกลายเป็น \`rm -rf /tmp/\` ทันที!

แนวคิด **Defensive Shell Scripting** คือการวางกลไกป้องกันตั้งแต่ต้น

---

## 1. มนตราศักดิ์สิทธิ์: \`set -euo pipefail\`
สคริปต์สำหรับงาน Production และ CI/CD ควรเริ่มต้นด้วยคำสั่งนี้เสมอ:

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail
\`\`\`

### เจาะลึกความหมายของแต่ละตัวเลือก:
- **\`-e\` (errexit):** สั่งให้สคริปต์หยุดทำงาน (Exit) ทันทีหากมีคำสั่งใดส่งคืน Exit code ที่ไม่ใช่ 0
- **\`-u\` (nounset):** สั่งให้แจ้งข้อผิดพลาดและหยุดทำงานทันทีหากมีการเรียกใช้ตัวแปรที่ยังไม่ได้กำหนดค่า (Unset variables) ป้องกันบั๊กตัวแปรสะกดผิดหรือว่างเปล่า
- **\`-o pipefail\`:** โดยปกติใน Pipeline (\`cmd1 | cmd2 | cmd3\`) เชลล์จะสนใจเฉพาะ Exit code ของคำสั่งสุดท้าย (\`cmd3\`) แต่เมื่อเปิด \`pipefail\` หากคำสั่งใดในท่อล้มเหลว Pipeline ทั้งชุดจะถือว่าล้มเหลวทันที
- **\`-x\` (xtrace - ตัวเลือกเพิ่มเติมสำหรับการดีบัก):** แสดงคำสั่งทั้งหมดที่ถูกรันจริงพร้อมค่าตัวแปรที่ถูกขยายผลแล้วก่อนรันคำสั่งนั้น

---

## 2. การจัดการข้อยกเว้นเมื่อเปิดใช้งาน \`set -e\`
บางครั้งเราต้องการให้คำสั่งล้มเหลวได้โดยสคริปต์ไม่ดับ (เช่น การ ping หรือการ grep ที่อาจไม่พบบรรทัด):

\`\`\`bash
set -euo pipefail

# วิธีที่ 1: ใช้ short-circuit ด้วย || true
grep "pattern" myfile.txt || true

# วิธีที่ 2: ใช้เป็นเงื่อนไขใน if statement (if จะไม่ทริกเกอร์ errexit)
if grep -q "ERROR" server.log; then
  echo "Found errors!"
else
  echo "Log is clean."
fi
\`\`\`

---

## 3. การสร้างไฟล์ชั่วคราวอย่างปลอดภัยด้วย \`mktemp\`
การฮาร์ดโค้ดชื่อไฟล์ชั่วคราว เช่น \`/tmp/temp.txt\` เสี่ยงต่อปัญหา Race Condition และช่องโหว่ความปลอดภัยแบบ Symlink Attack ควรใช้ \`mktemp\`:

\`\`\`bash
# สร้างไฟล์ชั่วคราวที่มีสิทธิ์ 0600 (เฉพาะเจ้าของอ่านเขียนได้)
TEMP_FILE=$(mktemp /tmp/deploy_payload.XXXXXX)

# สร้างโฟลเดอร์ชั่วคราว
TEMP_DIR=$(mktemp -d /tmp/build_cache.XXXXXX)

echo "Temporary workspace: $TEMP_DIR"
\`\`\`

---

## 4. ปรัชญา ShellCheck
**ShellCheck** คือเครื่องมือ Static Analysis สำหรับ Shell Scripts ที่ดีที่สุดในโลก โดยจะตรวจหา:
- ลืมใส่ Double Quotes รอบตัวแปร
- การใช้คำสั่งที่ล้าสมัยหรือมีช่องโหว่
- คำสั่งที่ทำงานไม่ได้บน POSIX sh หากไฟล์ประกาศเป็น \`#!/bin/sh\`

\`\`\`bash
# ติดตั้งและรันตรวจสอบ
shellcheck my_automation_script.sh
\`\`\``,
      codeExample: `#!/usr/bin/env bash

# เปิดโหมดปลอดภัยสูงสุดสำหรับการรัน Production Automation
set -euo pipefail

echo "[START] Running enterprise data aggregation script..."

# 1. สร้างโฟลเดอร์ชั่วคราวอย่างปลอดภัย
WORK_DIR=$(mktemp -d /tmp/secure_data_worker.XXXXXX)
echo "[INFO] Created isolated sandbox at: \${WORK_DIR}"

# 2. ป้องกันตัวแปรว่าง: หากลืมกำหนด APP_ENV จะใช้ค่า 'staging'
ENVIRONMENT="\${APP_ENV:-staging}"
echo "[INFO] Active environment: \${ENVIRONMENT}"

# 3. สร้างฟังก์ชันการันตีการลบโฟลเดอร์ชั่วคราวเมื่อเสร็จสิ้น
cleanup() {
  echo "[CLEANUP] Removing sandbox directory: \${WORK_DIR}..."
  rm -rf "\${WORK_DIR}"
  echo "[FINISH] Script completed gracefully."
}

# ดักจับการปิดโปรแกรมทุกกรณีเพื่อทำความสะอาด
trap cleanup EXIT

# 4. ทดสอบ Pipeline กับ -o pipefail
# คำสั่งแรกสำเร็จ คำสั่งที่สองกรองข้อมูล
cat <<EOF > "\${WORK_DIR}/records.txt"
Order 1001: Success
Order 1002: Pending
Order 1003: Success
EOF

echo "[INFO] Processing valid transactions..."
grep "Success" "\${WORK_DIR}/records.txt" | wc -l`,
      challenge: {
        description: "เขียนคำสั่งเปิดโหมดปลอดภัยของ Bash (set -euo pipefail) ที่ต้นสคริปต์ และใช้ mktemp สร้างไฟล์ชั่วคราวเก็บไว้ในตัวแปร TMP_LOG",
        startingCode: `#!/usr/bin/env bash

# TODO: เปิดใช้งาน defensive flags
...

# TODO: สร้าง temp file ด้วย mktemp
TMP_LOG=...

echo "Temporary log ready: \${TMP_LOG}"`,
        solution: `#!/usr/bin/env bash

set -euo pipefail

TMP_LOG=$(mktemp /tmp/audit_log.XXXXXX)

echo "Temporary log ready: \${TMP_LOG}"`
      },
      quizzes: [
        {
          question: "ตัวเลือก -u (nounset) ในคำสั่ง set -euo pipefail มีหน้าที่อะไร?",
          options: [
            "ไม่อนุญาตให้พิมพ์อักขระ Unicode",
            "สั่งให้หยุดการทำงานทันทีหากมีการอ้างอิงถึงตัวแปรที่ยังไม่ได้ประกาศหรือกำหนดค่า",
            "ถอนการติดตั้งโปรแกรมที่ไม่จำเป็นโดยอัตโนมัติ",
            "กำหนดให้ตัวแปรทุกตัวเป็นตัวพิมพ์เล็กเสมอ"
          ],
          correctOption: 1,
          explanation: "-u หรือ nounset จะสั่งให้สคริปต์แครชและแจ้งข้อผิดพลาดทันทีหากมีการเรียกตัวแปรที่ไม่มีอยู่จริง ช่วยป้องกันปัญหาการพิมพ์ชื่อตัวแปรผิดหรือตัวแปรว่างเปล่า"
        },
        {
          question: "ทำไมถึงควรเปิดใช้งานตัวเลือก -o pipefail ในการเขียนสคริปต์?",
          options: [
            "เพื่อให้ Pipe ทำงานแบบมัลติเธรด",
            "เพื่อให้ Pipeline ส่งคืน Exit Code ล้มเหลวหากมีคำสั่งใดคำสั่งหนึ่งใน Pipeline พัง แทนที่จะดูแค่คำสั่งสุดท้าย",
            "เพื่อจำกัดความยาวของท่อไม่เกิน 1,024 ไบต์",
            "เพื่อเปลี่ยนสีของ Terminal เมื่อคำสั่งทำงานเสร็จ"
          ],
          correctOption: 1,
          explanation: "โดยปกติเชลล์จะคืนค่า Exit code ของคำสั่งสุดท้ายใน Pipe เท่านั้น เช่น failing_cmd | echo \"done\" จะได้ Exit code 0 แต่เมื่อเปิด -o pipefail จะตรวจจับได้ว่า failing_cmd ล้มเหลว"
        },
        {
          question: "คำสั่ง mktemp มีข้อได้เปรียบอย่างไรเมื่อเทียบกับการตั้งชื่อไฟล์ชั่วคราวคงที่ เช่น /tmp/temp.txt?",
          options: [
            "mktemp จะบันทึกข้อมูลลง RAM เสมอโดยไม่ลง Disk",
            "mktemp สุ่มชื่อไฟล์ที่ไม่ซ้ำกัน ตั้งสิทธิ์ปลอดภัย (0600) ป้องกัน Race Condition และ Symlink attacks",
            "mktemp ทำให้สามารถแชร์ไฟล์ข้าม Network ได้ทันที",
            "mktemp บีบอัดไฟล์ด้วยอัลกอริทึม Gzip โดยอัตโนมัติ"
          ],
          correctOption: 1,
          explanation: "mktemp ช่วยสร้างชื่อไฟล์สุ่มที่ไม่ซ้ำ ป้องกันไม่ให้โปรเซสอื่นมาเขียนทับหรือโจมตีผ่าน Symlink ในไดเรกทอรี /tmp ส่วนกลางของระบบ"
        }
      ]
    },
    {
      id: "shell-7",
      title: "Process Management, Background Jobs, Signals และ trap",
      description: "ควบคุมกระบวนการในระบบปฏิบัติการ: Background jobs (&), Job control (fg, bg), Signals (SIGTERM, SIGINT), และการเก็บกวาด Resource ด้วย trap",
      duration: "35 นาที",
      level: "ขั้นสูง",
      content: `# Process Management, Background Jobs, Signals และ trap

การจัดการโปรเซส (Process Management) คือหัวใจหลักของ Linux Engineer ที่ต้องควบคุมการทำงานพร้อมกัน (Concurrency), การสื่อสารข้ามโปรเซสด้วย Signals, และการคืนทรัพยากรระบบอย่างปลอดภัย

---

## 1. Process Identifiers & Background Execution
- **PID (\`$$\`):** Process ID ของสคริปต์ปัจจุบัน
- **Background PID (\`$!\`):** Process ID ของโปรเซสล่าสุดที่สั่งรันเบื้องหลังด้วยเครื่องหมาย \`&\`

\`\`\`bash
# รันงานหนักในเบื้องหลัง (Background Job)
./generate_large_report.sh &
JOB_PID=$!

echo "Report generator started in background with PID: $JOB_PID"

# รอจนกว่าโปรเซสเบื้องหลังจะทำงานเสร็จสิ้น
wait "$JOB_PID"
echo "Report generation finished with exit status: $?"
\`\`\`

---

## 2. Unix Signals ที่สำคัญ
สัญญาณ (Signals) คือการส่งข้อความขัดจังหวะแบบ Asynchronous ไปยังโปรเซส:

| สัญญาณ | หมายเลข | ความหมาย |
|---|---|---|
| **SIGHUP** | \`1\` | Hangup (การปิด Terminal หรือสั่ง Reload Configuration) |
| **SIGINT** | \`2\` | Interrupt (เกิดจากการกด \`Ctrl+C\` บนหน้าจอ) |
| **SIGKILL** | \`9\` | บังคับปิดทันทีโดย Kernel (โปรเซสไม่สามารถดักจับหรือปฏิเสธได้) |
| **SIGTERM** | \`15\` | สัญญาณขอให้ปิดอย่างสุภาพ (Graceful Shutdown) |
| **EXIT** | \`0\` | Pseudo-signal ของ Bash ที่ส่งเมื่อสคริปต์ปิดตัวลงทุกกรณี |

\`\`\`bash
# ส่งคำสั่งขอให้โปรเซสปิดตัวลงอย่างสุภาพ
kill -15 4812

# บังคับยุติการทำงานเมื่อโปรเซสค้างไม่ตอบสนอง
kill -9 4812
\`\`\`

---

## 3. The Graceful Cleanup: คำสั่ง \`trap\`
คำสั่ง \`trap\` ใช้สำหรับดักจับสัญญาณที่ถูกส่งมายังสคริปต์ แล้วสั่งให้รันคำสั่งหรือฟังก์ชันทำความสะอาด (Cleanup routine) ก่อนที่โปรเซสจะตาย

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

LOCK_FILE="/var/run/my_etl_job.lock"
TEMP_CACHE=$(mktemp -d /tmp/etl_cache.XXXXXX)

# ตรวจสอบ Lock file เพื่อป้องกันการรันสคริปต์ซ้ำซ้อน (Mutual Exclusion)
if [[ -f "$LOCK_FILE" ]]; then
  echo "Error: Another instance is already running! (PID: $(cat "$LOCK_FILE"))" >&2
  exit 1
fi

echo "$$" > "$LOCK_FILE"

# ฟังก์ชันทำความสะอาด
cleanup() {
  local exit_code=$?
  echo "Cleaning up locks and temporary directories..."
  rm -f "$LOCK_FILE"
  rm -rf "$TEMP_CACHE"
  echo "Cleanup completed. Exiting with code: $exit_code"
}

# ดักจับทั้งการปิดปกติ (EXIT), Ctrl+C (SIGINT), และ SIGTERM
trap cleanup EXIT SIGINT SIGTERM

echo "ETL Pipeline processing..."
sleep 5
echo "ETL Pipeline completed successfully."
\`\`\``,
      codeExample: `#!/usr/bin/env bash
set -euo pipefail

echo "=========================================="
echo "Worker Orchestrator (PID: $$)"
echo "=========================================="

TEMP_METRICS=$(mktemp /tmp/worker_metrics.XXXXXX)

# ฟังก์ชันจัดการเมื่อได้รับสัญญาณขัดจังหวะหรือจบการทำงาน
on_terminate() {
  echo ""
  echo "[TRAP] Interruption or Termination detected!"
  echo "[TRAP] Purging temporary metrics: \${TEMP_METRICS}"
  rm -f "\${TEMP_METRICS}"
  echo "[TRAP] Graceful exit routine finished."
}

# ผูกฟังก์ชัน on_terminate เข้ากับสัญญาณ EXIT, SIGINT, SIGTERM
trap on_terminate EXIT SIGINT SIGTERM

echo "Starting async data workers..."

# จำลองรันโปรเซสขนาน 2 ตัวใน Background
( sleep 2; echo "Worker Alpha finished" ) &
PID_ALPHA=$!

( sleep 3; echo "Worker Beta finished" ) &
PID_BETA=$!

echo "Waiting for Worker Alpha (PID: $PID_ALPHA) and Beta (PID: $PID_BETA)..."
wait "$PID_ALPHA"
wait "$PID_BETA"

echo "All asynchronous workers completed successfully!"`,
      challenge: {
        description: "เขียนคำสั่ง trap เพื่อเรียกฟังก์ชัน cleanup เมื่อเกิดสัญญาณ SIGINT หรือ SIGTERM",
        startingCode: `#!/usr/bin/env bash

cleanup() {
  echo "Terminating gracefully..."
  exit 0
}

# TODO: ใช้คำสั่ง trap ผูก cleanup กับ SIGINT และ SIGTERM
`,
        solution: `#!/usr/bin/env bash

cleanup() {
  echo "Terminating gracefully..."
  exit 0
}

trap cleanup SIGINT SIGTERM`
      },
      quizzes: [
        {
          question: "ตัวแปรพิเศษ $! ใน Bash เก็บค่าของอะไร?",
          options: [
            "Process ID (PID) ของโปรเซสล่าสุดที่สั่งรันใน Background (&)",
            "จำนวนการเรียกคำสั่งผิดพลาดทั้งหมดในสคริปต์",
            "Process ID ของ Shell ตัวแม่ (Parent PID)",
            "ค่าความเร็ว CPU ล่าสุดของระบบ"
          ],
          correctOption: 0,
          explanation: "$! จะเก็บ PID ของ Background process ล่าสุดที่เพิ่งสั่งรัน นิยมใช้ร่วมกับคำสั่ง wait $! เพื่อรอให้งานเบื้องหลังนั้นเสร็จสิ้น"
        },
        {
          question: "สัญญาณ Unix หมายเลข 9 (SIGKILL) แตกต่างจาก SIGTERM อย่างไร?",
          options: [
            "SIGKILL ปิดเฉพาะการเชื่อมต่อเครือข่าย แต่โปรเซสยังทำงานต่อไปได้",
            "SIGKILL ถูกจัดการโดย Kernel โดยตรง โปรเซสไม่สามารถดักจับ (trap) หรือขอผัดผ่อนได้ จึงถูกฆ่าทิ้งทันที",
            "SIGTERM ทำงานเร็วกว่า SIGKILL เสมอ",
            "SIGKILL จะถามความยินยอมจากผู้ใช้งานผ่าน Terminal เสมอ"
          ],
          correctOption: 1,
          explanation: "SIGKILL (9) ไม่สามารถดักจับหรือเพิกเฉยได้โดยโปรเซสใดๆ Kernel จะทำลายโปรเซสนั้นทันที จึงควรใช้เป็นทางเลือกสุดท้ายเมื่อ SIGTERM (15) ไม่ตอบสนอง"
        },
        {
          question: "การใช้ trap handler EXIT ใน Bash มีประโยชน์เด่นอย่างไร?",
          options: [
            "จะทำงานเฉพาะเมื่อสคริปต์เกิดข้อผิดพลาดเท่านั้น",
            "จะทำงานเสมอเมื่อสคริปต์จบการทำงาน ไม่ว่าจะจบตามปกติ หรือจบเพราะคำสั่ง exit หรือตายด้วยคำสั่ง set -e",
            "ช่วยเพิ่มความเร็วในการรันสคริปต์ขึ้น 200%",
            "ป้องกันไม่ให้ผู้ใช้สามารถกดปิดหน้าต่าง Terminal ได้"
          ],
          correctOption: 1,
          explanation: "สัญญาณ EXIT ของ Bash คือ Pseudo-signal ที่จะถูกเรียกทำงานเสมอเมื่อสคริปต์สิ้นสุดลง ไม่ว่าจะด้วย exit 0, exit 1 หรือเกิด error จาก set -e จึงเหมาะที่สุดสำหรับการลบไฟล์ชั่วคราวและปลดล็อค"
        }
      ]
    },
    {
      id: "shell-8",
      title: "System Automation: การตั้งเวลางานด้วย Cron, Systemd Timers และ Log Rotation",
      description: "ทำความเข้าใจ Crontab syntax, กับดักเรื่อง Environment Variables บน Cron, การสร้าง Systemd Service & Timer Unit ยุคใหม่ และการบริหาร Logrotate",
      duration: "40 นาที",
      level: "ขั้นสูง",
      content: `# System Automation: การตั้งเวลางานด้วย Cron, Systemd Timers และ Log Rotation

ระบบเซิร์ฟเวอร์ในโปรดักชันต้องสามารถทำงานแบบอัตโนมัติตามตารางเวลาโดยไม่ต้องมีมนุษย์คอยสั่งการ เช่น การสำรองฐานข้อมูล, การต่ออายุ SSL Certificate, และการเคลียร์ดิสก์

---

## 1. Crontab: ตัวจัดตารางเวลาคลาสสิกของ Unix
คำสั่ง \`crontab -e\` ใช้เปิดไฟล์แก้ไขตารางงานของผู้ใช้งานปัจจุบัน:

\`\`\`text
* * * * *  คำสั่งที่ต้องการให้รัน
│ │ │ │ │
│ │ │ │ └─── วันในสัปดาห์ (0 - 6) (0 = วันอาทิตย์)
│ │ │ └───── เดือน (1 - 12)
│ │ └─────── วันของเดือน (1 - 31)
│ └───────── ชั่วโมง (0 - 23)
└─────────── นาที (0 - 59)
\`\`\`

### ตัวอย่าง Cron Expressions ยอดนิยม:
- \`0 2 * * *\`: รันทุกวัน เวลา 02:00 น.
- \`*/15 * * * *\`: รันทุกๆ 15 นาที
- \`0 0 1 * *\`: รันเที่ยงคืนวันแรกของทุกเดือน
- \`0 9-18 * * 1-5\`: รันทุกต้นชั่วโมง ตั้งแต่ 9 โมงเช้าถึง 6 โมงเย็น ในวันทำงาน (จันทร์-ศุกร์)

### กับดักมฤตยูของ Cron ที่ทุกคนต้องเจอ:
> **สภาพแวดล้อมที่จำกัด (Minimal Environment):**  
> Cron ไม่ได้โหลด \`~/.bashrc\` หรือ \`~/.profile\` ทำให้ \`$PATH\` มีจำกัดมาก (มักมีแค่ \`/usr/bin:/bin\`) คำสั่งหรือสคริปต์ที่รันผ่านหน้าจอสำเร็จมักจะพังเมื่อรันบน Cron!  
> **วิธีแก้:**  
> 1. ระบุ Absolute Path เสมอ เช่น \`/usr/local/bin/docker\` แทน \`docker\`  
> 2. ประกาศ PATH ไว้ที่หัวไฟล์ Crontab หรือโหลด environment ในสคริปต์

\`\`\`cron
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
0 3 * * * /opt/scripts/backup_postgres.sh >> /var/log/cron_backup.log 2>&1
\`\`\`

---

## 2. ทางเลือกยุคใหม่: Systemd Timers
ในระบบ Linux ยุคใหม่ (Ubuntu, RHEL, Debian) **Systemd Timers** ได้รับความนิยมมากกว่า Cron สำหรับงาน Enterprise เพราะ:
- มีการบันทึก Log ลงใน \`journalctl\` โดยตรง
- สามารถจัดการ Dependencies, Resource Limits (CPU/Memory cgroups), และ Restart policy ได้
- รองรับเงื่อนไขสุ่มเวลาเพื่อกระจายโหลด (\`RandomizedDelaySec\`)

### การสร้าง Systemd Timer ต้องใช้ 2 ไฟล์คู่กัน:
1. **Service Unit (\`/etc/systemd/system/db-backup.service\`):** ระบุคำสั่งที่จะรัน
\`\`\`ini
[Unit]
Description=Nightly Database Backup Task
After=network.target

[Service]
Type=oneshot
User=postgres
ExecStart=/usr/local/bin/backup_database.sh
\`\`\`

2. **Timer Unit (\`/etc/systemd/system/db-backup.timer\`):** ระบุเวลาที่จะสั่งให้ Service ทำงาน
\`\`\`ini
[Unit]
Description=Trigger Nightly Database Backup

[Timer]
OnCalendar=*-*-* 02:30:00
Persistent=true
RandomizedDelaySec=300

[Install]
WantedBy=timers.target
\`\`\`

เปิดใช้งาน:  
\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl enable --now db-backup.timer
\`\`\`

---

## 3. การจัดการพื้นที่ดิสก์ด้วย Logrotate
เพื่อป้องกันไม่ให้ไฟล์ Log ขยายตัวจนกินพื้นที่ Harddisk เต็ม เซิร์ฟเวอร์ใช้ **logrotate** ในการตัดแบ่ง บีบอัด และลบไฟล์เก่าทิ้งอัตโนมัติ:

\`\`\`text
# /etc/logrotate.d/myapp
/var/log/myapp/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        systemctl reload myapp-worker > /dev/null 2>&1 || true
    endscript
}
\`\`\``,
      codeExample: `#!/usr/bin/env bash
set -euo pipefail

# สคริปต์ตัวอย่างสำหรับงาน System Maintenance ประจำวัน
SCRIPT_NAME="DiskCleanupAutomation"
REPORT_DIR="/var/log/maintenance"
REPORT_FILE="\${REPORT_DIR}/cleanup_\$(date +%Y%m%d).log"

echo "[INFO] Initializing \${SCRIPT_NAME} at \$(date)"

# ตรวจสอบสิทธิ์การทำงาน
if [[ "$EUID" -ne 0 ]]; then
  echo "[WARNING] Running as non-root user. Some operations may fail."
fi

# จำลองการตรวจสอบพื้นที่ดิสก์ก่อนล้าง
CURRENT_USAGE=$(df -h / | awk 'NR==2 {print $5}')
echo "[METRIC] Current Root Partition Disk Usage: \${CURRENT_USAGE}"

# จำลองคำสั่งกวาดล้างแคชและแพ็กเกจขยะ
echo "[ACTION] Rotating temporary core dumps..."
echo "[ACTION] Purging orphaned application caches older than 7 days..."

echo "[SUCCESS] Maintenance cycle completed successfully."`,
      challenge: {
        description: "เขียน Cron expression ที่กำหนดให้รันสคริปต์ทุกวันอาทิตย์ เวลา 04:30 น.",
        startingCode: `# นาที ชั่วโมง วันที่ เดือน วันในสัปดาห์
# TODO: เขียน Cron expression สำหรับ ทุกวันอาทิตย์ เวลา 04:30 น.
CRON_EXPR=""
`,
        solution: `# นาที ชั่วโมง วันที่ เดือน วันในสัปดาห์
CRON_EXPR="30 4 * * 0"`
      },
      quizzes: [
        {
          question: "เหตุผลที่พบบ่อยที่สุดที่ทำให้สคริปต์ที่รันผ่าน Terminal สำเร็จ แต่รันผ่าน Cron แล้วล้มเหลวคืออะไร?",
          options: [
            "Cron ทำงานบนเคอร์เนลคนละตัวกับหน้าจอ",
            "Cron มี Environment Variables (เช่น $PATH) ที่จำกัดมากและไม่ได้โหลดโปรไฟล์ของผู้ใช้",
            "Cron ไม่อนุญาตให้ใช้ไฟล์นามสกุล .sh",
            "Cron ทำงานได้เฉพาะในโหมด Sleep ของคอมพิวเตอร์เท่านั้น"
          ],
          correctOption: 1,
          explanation: "Cron รันในสภาพแวดล้อมจำกัด (Minimal non-interactive shell) ทำให้ค่า $PATH มักไม่มีโฟลเดอร์คำสั่งที่ผู้ใช้ติดตั้งไว้ จึงจำเป็นต้องประกาศ PATH หรือใช้ Absolute Path เสมอ"
        },
        {
          question: "Systemd Timer มีข้อได้เปรียบที่เหนือกว่า Crontab ในข้อใด?",
          options: [
            "สามารถดู Log ย้อนหลังผ่าน journalctl และกำหนดข้อจำกัด CPU/RAM ได้",
            "ทำให้คอมพิวเตอร์ไม่ต้องต่อไฟก็ทำงานได้",
            "ไม่จำเป็นต้องมีความรู้เรื่องคำสั่ง Linux เลย",
            "รันโปรแกรมได้เฉพาะภาษา Python เท่านั้น"
          ],
          correctOption: 0,
          explanation: "Systemd Timer ทำงานร่วมกับ Systemd Eco-system ได้อย่างสมบูรณ์แบบ ทั้งการดู Log รวมผ่าน journalctl, การจัดการ cgroups เพื่อจำกัด RAM/CPU และการตั้งค่า Retry Policy เมื่อล้มเหลว"
        },
        {
          question: "คำสั่ง crontab 0 */2 * * * my_script.sh มีความหมายว่าอย่างไร?",
          options: [
            "รันทุก 2 วันเวลาเที่ยงคืน",
            "รันทุก 2 ชั่วโมง ณ นาทีที่ 0 (เช่น 00:00, 02:00, 04:00, ...)",
            "รันเฉพาะ 2 นาทีแรกของชั่วโมง",
            "รันทุกวันอาทิตย์เดือนที่ 2"
          ],
          correctOption: 1,
          explanation: "0 ในช่องนาที และ */2 ในช่องชั่วโมง หมายถึงการสั่งรันทุกๆ 2 ชั่วโมง ณ นาทีที่ 0 ของชั่วโมงนั้นๆ"
        }
      ]
    },
    {
      id: "shell-9",
      title: "Production DevOps Scripting, Container Entrypoints และ CI/CD Automation",
      description: "สร้าง Docker Container Entrypoint สคริปต์ด้วยคำสั่ง exec, การเขียน Shell ใน CI/CD Pipelines (GitHub Actions/GitLab) และการทำ Healthcheck",
      duration: "40 นาที",
      level: "ขั้นสูง",
      content: `# Production DevOps Scripting, Container Entrypoints และ CI/CD Automation

ในยุคของ Cloud Native, Kubernetes และ Continuous Integration/Continuous Deployment (CI/CD) เชลล์สคริปต์ทำหน้าที่เป็น **กาวเชื่อมต่อ (The Essential Glue)** ระหว่างเครื่องมือต่างๆ

---

## 1. การเขียน Docker Container Entrypoint Script
หน้าที่ของ Entrypoint Script ใน Dockerfile คือการเตรียมพร้อมสภาพแวดล้อม (เช่น Migrate database หรือโหลด Configuration) ก่อนที่จะส่งมอบการทำงานให้กับ Application หลัก

### กฎทองคำของ Container: คำสั่ง \`exec\`
ใน Docker Container โปรเซสหลักจะต้องเป็น **PID 1** เสมอเพื่อให้สามารถรับสัญญาณ \`SIGTERM\` จาก Docker Daemon/Kubernetes ได้เมื่อต้องการปิด Container (Graceful Termination)

> หากรันคำสั่งโดยตรง เช่น \`python app.py\` เชลล์จะยังคงเป็น PID 1 และจะไม่ส่งต่อ Signal ไปยัง Python ส่งผลให้แอปถูกบังคับตัดไฟ (\`SIGKILL\`) หลังจากรอ 10 วินาที!  
> **วิธีแก้:** ต้องใช้คำสั่ง \`exec "$@"\` เพื่อให้โปรเซสของแอปพลิเคชันเข้าแทนที่ตัวเชลล์โดยสิ้นเชิง

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

echo "==> [Container Bootstrap] Running database migrations..."
python manage.py migrate --noinput

echo "==> [Container Bootstrap] Collecting static assets..."
python manage.py collectstatic --noinput

echo "==> [Container Bootstrap] Launching application server..."
# แทนที่ Shell Process ปัจจุบันด้วยคำสั่งที่ส่งมาจาก Docker CMD
exec "$@"
\`\`\`

---

## 2. การสร้าง Health Check Script สำหรับ Docker & Kubernetes
Kubernetes และ Docker จำเป็นต้องตรวจสอบความพร้อมในการทำงานของ Container ผ่าน Liveness และ Readiness Probes:

\`\`\`bash
#!/usr/bin/env bash
set -eo pipefail

HOST="127.0.0.1"
PORT="\${APP_PORT:-8080}"
HEALTH_ENDPOINT="http://\${HOST}:\${PORT}/healthz"

# ทดสอบส่ง HTTP Request ด้วย curl
# --fail: ส่งคืน Exit code ไม่ใช่ 0 เมื่อเจอ HTTP Status 4xx หรือ 5xx
# --silent: ไม่แสดง progress bar
# --max-time: กำหนด timeout 2 วินาที
RESPONSE=$(curl --fail --silent --max-time 2 "$HEALTH_ENDPOINT")

if [[ $? -eq 0 ]]; then
  echo "Health check PASSED: $RESPONSE"
  exit 0
else
  echo "Health check FAILED! Service not responding on $HEALTH_ENDPOINT" >&2
  exit 1
fi
\`\`\`

---

## 3. Shell Scripting ใน CI/CD Pipelines (GitHub Actions)
การเขียนสคริปต์ใน CI/CD ต้องออกแบบให้ตรวจสอบง่ายและส่งข้อมูลข้าม Step ได้:

\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

# สร้าง Semantic Version แบบไดนามิก
GIT_SHA=$(git rev-parse --short HEAD)
BUILD_TAG="v1.0.0-\${GIT_SHA}"

echo "Calculated Docker Image Tag: \${BUILD_TAG}"

# ส่งค่าตัวแปรออกไปยัง GitHub Actions Step Output
if [[ -n "\${GITHUB_OUTPUT:-}" ]]; then
  echo "image_tag=\${BUILD_TAG}" >> "$GITHUB_OUTPUT"
fi
\`\`\`

---

## 4. สรุป Checklist สำหรับ Shell Script เกรด Production
1. **Shebang ชัดเจน:** \`#!/usr/bin/env bash\`
2. **Defensive Flags:** \`set -euo pipefail\`
3. **ครอบตัวแปรทุกครั้ง:** \`"$VAR"\`
4. **ฟังก์ชันใช้ local:** ประกาศตัวแปรเฉพาะที่เสมอ
5. **ทำความสะอาดด้วย trap:** ลบ temporary files และ locks เมื่อออกจากสคริปต์
6. **ใช้ mktemp:** สำหรับไฟล์ชั่วคราวทั้งหมด
7. **ผ่านการตรวจ ShellCheck:** ต้องไม่มีข้อผิดพลาดแจ้งเตือน`,
      codeExample: `#!/usr/bin/env bash
set -euo pipefail

echo "=========================================="
echo "Production Container Entrypoint Initializer"
echo "=========================================="

APP_ENV="\${NODE_ENV:-production}"
DB_READY=false

echo "[1/3] Validating configuration for environment: \${APP_ENV}"

# จำลองการวน Loop ตรวจสอบว่าฐานข้อมูลพร้อมทำงานหรือไม่ (Polling loop)
echo -n "[2/3] Waiting for database connectivity"
for i in {1..5}; do
  echo -n "."
  sleep 0.5
done
echo " CONNECTED!"

echo "[3/3] Executing bootstrap sequence complete."

# จำลองการส่งไม้ต่อให้คำสั่งหลักด้วย exec
echo "Passing control to main process..."
if [[ "$#" -gt 0 ]]; then
  echo "Executing: $@"
  # ใน Production จริงจะใช้: exec "$@"
else
  echo "No arguments provided. Ready for commands."
fi`,
      challenge: {
        description: "เขียนคำสั่ง exec ในบรรทัดสุดท้ายของ Entrypoint script เพื่อส่งต่อคำสั่งทั้งหมดที่ส่งเข้ามาในสคริปต์ (\"$@\") ให้กลายเป็น PID 1 แทนที่ Shell",
        startingCode: `#!/usr/bin/env bash
set -euo pipefail

echo "Pre-flight checks passed."

# TODO: ส่งไม้ต่อให้คำสั่งทั้งหมดด้วย exec
`,
        solution: `#!/usr/bin/env bash
set -euo pipefail

echo "Pre-flight checks passed."

exec "$@"`
      },
      quizzes: [
        {
          question: "ทำไมคำสั่ง exec \"$@\" จึงมีความสำคัญสูงสุดในตอนท้ายของ Docker Entrypoint Script?",
          options: [
            "เพื่อล้างแคชของ Docker ทิ้งทันที",
            "เพื่อให้โปรเซสของ Application เข้าแทนที่ Shell และได้รับ Process ID เป็น PID 1 สามารถรับสัญญาณ SIGTERM จาก Docker ได้",
            "เพื่อส่งสคริปต์ไปคอมไพล์เป็นภาษา C ก่อนทำงาน",
            "เพื่อเพิ่มความเร็วในการเชื่อมต่ออินเทอร์เน็ตของ Container"
          ],
          correctOption: 1,
          explanation: "คำสั่ง exec จะแทนที่โปรเซสเชลล์ปัจจุบันด้วยโปรเซสเป้าหมาย ทำให้แอปพลิเคชันกลายเป็น PID 1 ใน Container และรับสัญญาณ SIGTERM สำหรับ Graceful Shutdown ได้อย่างถูกต้อง"
        },
        {
          question: "แฟล็กใดของคำสั่ง curl ที่ทำให้ curl ส่งคืน Exit code ข้อผิดพลาดเมื่อ Server ตอบกลับด้วย HTTP 4xx หรือ 5xx?",
          options: [
            "--silent (-s)",
            "--fail (-f)",
            "--output (-o)",
            "--location (-L)"
          ],
          correctOption: 1,
          explanation: "--fail หรือ -f จะทำให้ curl ส่งคืน Exit status ที่ไม่ใช่ 0 เมื่อเซิร์ฟเวอร์ตอบกลับมาเป็น Error (เช่น 404, 500) ซึ่งจำเป็นอย่างยิ่งในการเขียน Health Check Script"
        },
        {
          question: "ข้อใดเป็น Best Practice ที่ถูกต้องที่สุดในการเขียน Shell Script สำหรับ Production?",
          options: [
            "ใช้คำสั่ง set -euo pipefail, ครอบตัวแปรด้วย Double Quotes, ใช้ local ในฟังก์ชัน และทำความสะอาดด้วย trap",
            "ปิดการแจ้งเตือน Error ทั้งหมดด้วย 2>/dev/null",
            "เขียนสคริปต์ทุกอย่างไว้ในบรรทัดเดียวเสมอเพื่อประหยัดเนื้อที่",
            "ใช้สิทธิ์ root เสมอในทุกคำสั่ง"
          ],
          correctOption: 0,
          explanation: "การใช้ set -euo pipefail, การครอบตัวแปรเพื่อกัน word splitting, การใช้ local ป้องกันตัวแปรชนกัน และการใช้ trap ทำความสะอาด คือชุดระเบียบปฏิบัติมาตรฐานของวิศวกรซอฟต์แวร์ระดับโลก"
        }
      ]
    }
  ]
};
