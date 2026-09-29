import { Course } from "../types";

export const rubyCourse: Course = {
  id: "ruby",
  title: "Ruby & Modern Object-Oriented Software Design",
  description: "เรียนรู้ภาษา Ruby ตั้งแต่หลักการ Everything is an Object, Blocks/Procs/Lambdas, Metaprogramming, สถาปัตยกรรม Gem จนถึง Ruby on Rails และ Active Record",
  longDescription: "หลักสูตรวิศวกรรมซอฟต์แวร์ด้วยภาษา Ruby ยุคใหม่ (Modern Ruby Engineering) มุ่งเน้นความสุขของนักพัฒนา (Developer Happiness) และความยืดหยุ่นระดับสูงสุด ครอบคลุมตั้งแต่ปรัชญาของ Yukihiro Matsumoto (Matz), ความแตกต่างลึกซึ้งระหว่าง String และ Symbol, โมเดล Object และ Module Mixins โดยไร้ปัญหา Multiple Inheritance, การประมวลผลข้อมูลผ่าน Enumerable, การทำงานกับ Blocks, Procs และ Lambdas, ศาสตร์การเขียนโค้ดขั้นสูงอย่าง Metaprogramming และ Dynamic Method Definition, การรับส่งงานด้วย Fibers และ Threads, การสร้างเว็บแอปพลิเคชันระดับโลกด้วย Ruby on Rails 7, การเขียนแบบจำลองฐานข้อมูล Active Record, จนถึงการทดสอบซอฟต์แวร์ด้วย RSpec (Behavior-Driven Development)",
  icon: "💎",
  color: "red",
  gradient: "from-rose-600 via-red-600 to-amber-700",
  category: "language",
  totalLessons: 9,
  difficulty: "เริ่มต้น",
  tags: ["Ruby", "Ruby on Rails", "OOP", "Metaprogramming", "ActiveRecord", "RSpec", "Backend", "Web"],
  recommendedTools: [
    {
      name: "Ruby 3.3+ (rbenv / asdf)",
      icon: "💎",
      badge: "Ruby Runtime",
      description: "เครื่องมือรันภาษา Ruby พร้อมตัวจัดการเวอร์ชัน rbenv และ Just-In-Time Compiler (YJIT) เพื่อความเร็วสูงสุด",
      downloadUrl: "https://www.ruby-lang.org/",
      setupGuide: "1. ติดตั้ง rbenv หรือ RubyInstaller (Windows)\n2. ติดตั้งเวอร์ชันล่าสุด: rbenv install 3.3.0 && rbenv global 3.3.0\n3. ตรวจสอบใน Terminal: ruby -v และ gem -v"
    },
    {
      name: "VS Code with Ruby LSP / RubyMine",
      icon: "💻",
      badge: "Ruby IDE",
      description: "สภาพแวดล้อมการเขียนโค้ดที่รองรับ Auto-complete, Type hints, RuboCop Linter และ Debugger",
      downloadUrl: "https://code.visualstudio.com/",
      setupGuide: "1. ติดตั้งส่วนขยาย 'Ruby LSP' โดย Shopify ใน VS Code\n2. ติดตั้ง gem แนะนำ: gem install rubocop solargraph debug"
    }
  ],
  lessons: [
    {
      id: "ruby-1",
      title: "ปรัชญาภาษา Ruby, ไวยากรณ์พื้นฐาน และ Everything is an Object",
      description: "ทำความเข้าใจว่าทำไมทุกสิ่งใน Ruby คืออ็อบเจกต์, ความแตกต่างระหว่าง String กับ Symbol, การอนุมานประเภทข้อมูล และโครงสร้างพื้นฐาน",
      duration: "30 นาที",
      level: "เริ่มต้น",
      content: `# ปรัชญาภาษา Ruby และแนวคิด Everything is an Object

ภาษา Ruby ถูกสร้างขึ้นในปี 1995 โดย **Yukihiro Matsumoto (Matz)** ด้วยปรัชญาที่เน้นให้โปรแกรมเมอร์มีความสุข (Developer Happiness) และเขียนโค้ดที่เป็นธรรมชาติเหมือนภาษามนุษย์

## 1. Everything is an Object (ทุกสิ่งคืออ็อบเจกต์)
ในภาษาอื่นๆ เช่น Java หรือ C มี Primitive Types (เช่น int, boolean) ที่แยกจากคลาส แต่ใน Ruby แม้แต่ตัวเลข ค่าความจริง หรือฟังก์ชัน ล้วนเป็น Object ของคลาสใดคลาสหนึ่งทั้งสิ้น:
\`\`\`ruby
5.class        # => Integer
5.times { puts "Hello Ruby" }
(-10).abs      # => 10
true.class     # => TrueClass
nil.class      # => NilClass
\`\`\`

## 2. String vs Symbol
จุดเด่นสำคัญของ Ruby ที่นักพัฒนาต้องเข้าใจอย่างถ่องแท้:
- **String (สตริง):** เป็น Mutable Object (สามารถแก้ไขค่าได้) ทุกครั้งที่ประกาศสตริงใหม่ Ruby จะจองหน่วยความจำ (Object ID) ใหม่เสมอ
- **Symbol (สัญลักษณ์):** เป็น Immutable Object (ไม่สามารถแก้ไขได้) เขียนนำหน้าด้วยเครื่องหมายโคลอน เช่น \`:status\`, \`:user_id\` โดย Symbol ที่ชื่อเหมือนกันจะชี้ไปยัง Object ID เดิมในตารางสัญลักษณ์ (Symbol Table) เสมอ ทำให้ประหยัดหน่วยความจำและเปรียบเทียบค่าได้เร็วกว่า String อย่างมหาศาล

\`\`\`ruby
# ทดสอบ String
str1 = "ruby"
str2 = "ruby"
puts str1.object_id == str2.object_id # => false (คนละตำแหน่งใน RAM)

# ทดสอบ Symbol
sym1 = :ruby
sym2 = :ruby
puts sym1.object_id == sym2.object_id # => true (ตำแหน่งเดียวกัน 100%)
\`\`\`

## 3. String Interpolation และโครงสร้างพื้นฐาน
\`\`\`ruby
user_name = "Somchai"
current_year = 2024
birth_year = 2000

# String interpolation ใช้ #{...} ต้องใช้ Double Quotes เสมอ
greeting = "ยินดีต้อนรับคุณ #{user_name} อายุ #{current_year - birth_year} ปี"
puts greeting
\`\`\``,
      codeExample: `# พื้นฐานภาษา Ruby: Everything is an Object & Symbol Performance
puts "=== 1. Everything is an Object ==="
puts "คลาสของเลข 42: #{42.class}"
puts "คลาสของสตริง 'IT Academy': #{'IT Academy'.class}"
puts "คลาสของ nil: #{nil.class}"

puts "\n=== 2. String vs Symbol Memory Comparison ==="
string_a = "active"
string_b = "active"
puts "String A object_id: #{string_a.object_id}"
puts "String B object_id: #{string_b.object_id}"
puts "String A == B? #{string_a == string_b}"
puts "String object_id เหมือนกันหรือไม่? #{string_a.object_id == string_b.object_id}"

symbol_a = :active
symbol_b = :active
puts "Symbol A object_id: #{symbol_a.object_id}"
puts "Symbol B object_id: #{symbol_b.object_id}"
puts "Symbol object_id เหมือนกันหรือไม่? #{symbol_a.object_id == symbol_b.object_id}"

puts "\n=== 3. การใช้งาน Method Chaining ==="
result = "  bangkok metropolitan  ".strip.split.map(&:capitalize).join(" ")
puts "ผลลัพธ์ Method Chaining: #{result}"`,
      challenge: "จงสร้างโปรแกรมรับสตริง 'ruby programming language' แล้วแปลงเป็นตัวพิมพ์ใหญ่เฉพาะอักษรตัวแรกของแต่ละคำ (Title Case) พร้อมทั้งสร้าง Hash ที่เก็บ Symbol :status => :active และพิมพ์ค่าออกมา",
      quiz: [
        {
          question: "ข้อใดอธิบายความแตกต่างระหว่าง String และ Symbol ในภาษา Ruby ได้ถูกต้องที่สุด?",
          options: [
            "Symbol แก้ไขค่าไม่ได้ (Immutable) และใช้ Object ID เดียวกันในหน่วยความจำเสมอหากชื่อเหมือนกัน",
            "String ประหยัดหน่วยความจำมากกว่า Symbol",
            "Symbol สามารถแก้ไขค่าได้ (Mutable) เสมอ",
            "String ใน Ruby ไม่ใช่อ็อบเจกต์ แต่เป็น Primitive Type"
          ],
          correctAnswer: 0,
          explanation: "Symbol ใน Ruby เป็น Immutable และถูกเก็บในตารางสัญลักษณ์ส่วนกลาง ทำให้ Symbol ที่มีชื่อเดียวกันจะแชร์ Object ID เดียวกันเสมอ จึงประหยัดหน่วยความจำและทำงานได้เร็วกว่า String"
        },
        {
          question: "การทำ String Interpolation ใน Ruby ต้องใช้เครื่องหมายใดครอบสตริง?",
          options: [
            "Double Quotes (อัญประกาศคู่ เช่น \"#{val}\")",
            "Single Quotes (อัญประกาศเดี่ยว เช่น '#{val}')",
            "Backticks (อัญประกาศย้อนกลับ เช่น `#{val}`)",
            "Angle Brackets (เช่น <#{val}>)"
          ],
          correctAnswer: 0,
          explanation: "ใน Ruby สตริงที่เขียนด้วย Double Quotes (\") เท่านั้นที่จะประมวลผล String Interpolation #{...} ส่วน Single Quotes จะแสดงผลตัวอักษรตามจริงโดยไม่ประมวลผล"
        },
        {
          question: "ผลลัพธ์ของคำสั่ง 10.even? ในภาษา Ruby คืออะไร?",
          options: [
            "true",
            "false",
            "เกิด SyntaxError เพราะตัวเลขไม่สามารถเรียกใช้ Method ได้",
            "10"
          ],
          correctAnswer: 0,
          explanation: "เนื่องจากเลข 10 เป็นอินสแตนซ์ของคลาส Integer ซึ่งมี Method .even? สำหรับตรวจสอบจำนวนคู่ ผลลัพธ์จึงเป็นค่า boolean true"
        }
      ]
    },
    {
      id: "ruby-2",
      title: "โครงสร้างข้อมูล Array, Hash, Symbols และ Enumerable Module",
      description: "จัดการชุดข้อมูลด้วย Array และ Hash พร้อมเรียนรู้พลังของ Enumerable Module เช่น map, select, reject, reduce, และ group_by",
      duration: "35 นาที",
      level: "เริ่มต้น",
      content: `# โครงสร้างข้อมูลและพลังของ Enumerable Module

Ruby โดดเด่นด้านการจัดการ Collections ผ่าน **Enumerable Module** ซึ่งมีฟังก์ชันระดับสูงที่ช่วยให้เขียนโค้ดสั้น กระชับ และอ่านเข้าใจง่าย

## 1. Array ในภาษา Ruby
Array ใน Ruby สามารถเก็บข้อมูลต่างประเภทกันได้ และมีฟังก์ชันช่วยเหลือมากมาย:
\`\`\`ruby
scores = [85, 92, 78, 64, 95]
scores << 88              # ใส่ข้อมูลต่อท้าย (เหมือน .push)
scores.first              # 85
scores.last               # 88
scores.sample             # สุ่มค่า 1 ค่า
scores.uniq               # ลบค่าที่ซ้ำกัน
\`\`\`

## 2. Hash ในภาษา Ruby (Key-Value)
การประกาศ Hash สมัยใหม่ นิยมใช้ Symbol เป็น Key:
\`\`\`ruby
# ไวยากรณ์สมัยใหม่ (Ruby 1.9+)
student = {
  id: "STD-001",
  name: "Kanda",
  gpa: 3.85,
  skills: [:ruby, :sql, :git]
}

puts student[:name]   # "Kanda"
puts student.dig(:skills, 0) # :ruby (ปลอดภัยจาก NoMethodError)
\`\`\`

## 3. Enumerable: หัวใจของการแปลงข้อมูล
\`\`\`ruby
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map: แปลงค่าทีละตัว
squares = numbers.map { |n| n ** 2 }

# select (filter): เลือกเฉพาะค่าที่ตรงเงื่อนไข
evens = numbers.select { |n| n.even? }

# reject: ตัดค่าที่ตรงเงื่อนไขออก
odds = numbers.reject { |n| n.even? }

# reduce / inject: ยุบรวมค่าเป็นหนึ่งเดียว
sum = numbers.reduce(0) { |acc, n| acc + n }
# หรือเขียนย่อ: numbers.sum หรือ numbers.reduce(:+)
\`\`\``,
      codeExample: `# การประมวลผลข้อมูลด้วย Enumerable ในภาษา Ruby
students = [
  { name: "Somchai", score: 85, department: "Computer" },
  { name: "Wichai", score: 58, department: "Electronics" },
  { name: "Kanda", score: 92, department: "Computer" },
  { name: "Anong", score: 74, department: "Accounting" },
  { name: "Prasert", score: 45, department: "Computer" }
]

puts "=== 1. คัดกรองนักศึกษาที่สอบผ่าน (คะแนน >= 60) ==="
passed_students = students.select { |s| s[:score] >= 60 }
passed_students.each do |s|
  puts "✓ #{s[:name]} (แผนก #{s[:department]}): #{s[:score]} คะแนน"
end

puts "\n=== 2. คำนวณคะแนนเฉลี่ยรวม ==="
total_score = students.map { |s| s[:score] }.sum
avg_score = total_score.to_f / students.size
puts "คะแนนรวม: #{total_score} | คะแนนเฉลี่ย: #{avg_score.round(2)}"

puts "\n=== 3. การจัดกลุ่มข้อมูลตามแผนก (group_by) ==="
by_department = students.group_by { |s| s[:department] }
by_department.each do |dept, list|
  puts "[#{dept}] จำนวน #{list.size} คน: #{list.map { |s| s[:name] }.join(', ')}"
end`,
      challenge: "สร้าง Hash รายการสินค้าที่มีราคา แล้วใช้ .select เพื่อเลือกสินค้าที่มีราคาเกิน 100 บาท จากนั้นใช้ .reduce เพื่อคำนวณยอดรวมราคาสินค้าเหล่านั้น",
      quiz: [
        {
          question: "หากต้องการแปลงข้อมูลทุกตัวใน Array โดยคืนค่า Array ใหม่ที่มีขนาดเท่าเดิม ควรใช้ Method ใดของ Enumerable?",
          options: [".map (หรือ .collect)", ".select", ".each", ".reduce"],
          correctAnswer: 0,
          explanation: ".map (หรือ .collect) ทำหน้าที่แปลงข้อมูลในแต่ละรอบและคืนค่าเป็น Array ใหม่ที่มีขนาดเท่าเดิมเสมอ"
        },
        {
          question: "สัญลักษณ์ย่อ &:even? ในคำสั่ง numbers.select(&:even?) มีความหมายเทียบเท่ากับข้อใด?",
          options: [
            "numbers.select { |n| n.even? }",
            "numbers.select.even?",
            "numbers.even?.select",
            "numbers.select { even? }"
          ],
          correctAnswer: 0,
          explanation: "สัญลักษณ์ &:method_name เป็นการแปลง Symbol ไปเป็น Proc (to_proc) ซึ่งเรียกใช้งาน method นั้นบนแต่ละ Element ใน Array"
        },
        {
          question: "การเข้าถึง Key ที่ซ้อนกันใน Hash หลายชั้นอย่างปลอดภัยเพื่อป้องกัน NoMethodError บนค่า nil ควรใช้คำสั่งใด?",
          options: [
            ".dig(:key1, :key2)",
            ".get_safe(:key1, :key2)",
            ".fetch_all(:key1, :key2)",
            ".pluck(:key1, :key2)"
          ],
          correctAnswer: 0,
          explanation: "Method .dig(...) ช่วยดึงค่าจาก Hash ที่ซ้อนกันหลายชั้นอย่างปลอดภัย หากคีย์ชั้นใดเป็น nil จะคืนค่า nil ทันทีโดยไม่เกิด NoMethodError"
        }
      ]
    },
    {
      id: "ruby-3",
      title: "การเขียนโปรแกรมเชิงวัตถุ (OOP), Modules, Mixins และ Ancestors Chain",
      description: "สร้าง Class, Constructor (initialize), Encapsulation (attr_accessor), และการใช้ Module แบบ Mixin (include vs prepend vs extend)",
      duration: "40 นาที",
      level: "เริ่มต้น",
      content: `# สถาปัตยกรรม OOP และ Mixin ในภาษา Ruby

Ruby เป็นภาษา Object-Oriented บริสุทธิ์ โดยไม่มีแนวคิดเรื่อง Multiple Inheritance แต่แก้ไขปัญหานี้ด้วย **Modules** และ **Mixins**

## 1. การสร้าง Class และ Instance Variables
ใน Ruby:
- ตัวแปรที่ขึ้นต้นด้วย \`@\` คือ **Instance Variable**
- ตัวแปรที่ขึ้นต้นด้วย \`@@\` คือ **Class Variable**
- Method \`initialize\` คือ Constructor ทำงานอัตโนมัติเมื่อสั่ง \`.new\`

\`\`\`ruby
class Account
  # สร้าง Getter และ Setter อัตโนมัติ
  attr_accessor :name
  attr_reader :balance   # อ่านได้อย่างเดียว

  def initialize(name, initial_deposit = 0)
    @name = name
    @balance = initial_deposit
  end

  def deposit(amount)
    raise ArgumentError, "ยอดเงินต้องมากกว่า 0" if amount <= 0
    @balance += amount
  end
end
\`\`\`

## 2. Module และ Mixin Architecture
Module ใน Ruby ทำหน้าที่ 2 อย่าง:
1. **Namespace:** ป้องกันการตั้งชื่อคลาสซ้ำกัน เช่น \`PaymentGateway::Stripe\`
2. **Mixin:** แบ่งปัน Method ข้ามคลาสโดยไม่ต้องสืบทอด (Inheritance)

### ความแตกต่างระหว่าง include, extend และ prepend:
- \`include\`: แทรก Method ของโมดูลเข้าไปเป็น **Instance Method** (แทรกอยู่เหนือ Class ใน Ancestors Chain)
- \`extend\`: แทรก Method ของโมดูลเข้าไปเป็น **Class Method**
- \`prepend\`: แทรก Method ของโมดูลเข้าไปอยู่ **หน้า Class** ใน Ancestors Chain (สามารถดักฟังก์ชันเดิมแล้วเรียก \`super\` ได้)

\`\`\`ruby
module Loggable
  def log(msg)
    puts "[LOG #{Time.now.strftime('%H:%M:%S')}]: #{msg}"
  end
end

class Order
  include Loggable  # ทำให้ Order instance เรียกใช้งาน .log ได้
end

Order.new.log("สร้างคำสั่งซื้อสำเร็จ")
\`\`\``,
      codeExample: `# การประยุกต์ใช้ OOP, Encapsulation และ Mixins ใน Ruby
module Identifiable
  def generate_uuid
    "ID-#{object_id}-#{rand(1000..9999)}"
  end
end

module Printable
  def print_summary
    puts "--- สรุปข้อมูลวัตถุ #{self.class} ---"
    instance_variables.each do |var|
      val = instance_variable_get(var)
      puts "#{var}: #{val}"
    end
  end
end

class Employee
  include Identifiable
  include Printable

  attr_accessor :name, :role
  attr_reader :salary

  def initialize(name, role, salary)
    @id = generate_uuid
    @name = name
    @role = role
    @salary = salary
  end

  def raise_salary(percent)
    raise "เปอร์เซ็นต์ต้องเป็นบวก" if percent <= 0
    increment = @salary * (percent / 100.0)
    @salary += increment
    puts "ปรับเงินเดือนคุณ #{@name} ขึ้น #{percent}% เป็น #{@salary.round(2)} บาท"
  end
end

emp = Employee.new("Somchai Dev", "Senior Backend Engineer", 65000)
emp.raise_salary(10)
emp.print_summary

puts "\nAncestors Chain ของ Employee:"
puts Employee.ancestors.join(" -> ")`,
      challenge: "สร้างโมดูล Trackable ที่มี method timestamp_log และนำไป include ในคลาส Device พร้อมสร้าง instance เพื่อทดสอบการเรียกใช้งาน",
      quiz: [
        {
          question: "คำสั่งใดใน Ruby ที่สร้างทั้ง Getter และ Setter สำหรับ Instance Variable อัตโนมัติ?",
          options: ["attr_accessor", "attr_reader", "attr_writer", "attr_property"],
          correctAnswer: 0,
          explanation: "attr_accessor จะสร้างทั้ง getter และ setter สำหรับตัวแปร instance นั้นๆ โดยอัตโนมัติ"
        },
        {
          question: "หากต้องการนำ Method ใน Module เข้ามาใช้งานเป็น Class Method ของคลาสนั้น จะต้องใช้คำสั่งใด?",
          options: ["extend", "include", "prepend", "inherit"],
          correctAnswer: 0,
          explanation: "extend จะนำ Method ในโมดูลเข้ามาเป็น Class Method (สามารถเรียก ClassName.method ได้โดยตรง)"
        },
        {
          question: "Ancestors Chain ในภาษา Ruby หมายถึงอะไร?",
          options: [
            "ลำดับลำดับชั้นที่ Ruby ค้นหา Method เมื่อมีการเรียกใช้งาน (Method Lookup Path)",
            "ประวัติการ commit ของไฟล์ Ruby ใน Git",
            "โครงสร้างการเชื่อมต่อฐานข้อมูล",
            "การคำนวณ Garbage Collection ในหน่วยความจำ"
          ],
          correctAnswer: 0,
          explanation: "Ancestors Chain คือลำดับที่ Ruby ใช้ค้นหา Method ว่าถูกนิยามไว้ที่ตัวคลาสเอง โมดูลที่แทรกไว้ หรือคลาสแม่ จนไปถึง BasicObject"
        }
      ]
    },
    {
      id: "ruby-4",
      title: "ฟังก์ชันระดับสูง Blocks, Procs, Lambdas และ Closures",
      description: "เจาะลึกความแตกต่างระหว่าง Block (&block), Proc และ Lambda, คำสั่ง yield, และการทำ Closure ในภาษา Ruby",
      duration: "35 นาที",
      level: "ปานกลาง",
      content: `# Blocks, Procs, Lambdas และ Closures

หัวใจความยืดหยุ่นของภาษา Ruby อยู่ที่การส่งชิ้นส่วนโค้ด (Block of Code) เป็นอาร์กิวเมนต์เข้าไปใน Method ได้อย่างง่ายดาย

## 1. Block และคำสั่ง \`yield\`
Block คือโค้ดที่อยู่ใน \`do...end\` หรือ \`{...}\` ซึ่งส่งเข้าไปใน Method และเรียกใช้งานผ่านคำสั่ง \`yield\`:
\`\`\`ruby
def benchmark
  start_time = Time.now
  yield # โค้ดในบล็อกจะถูกรันตรงนี้
  duration = Time.now - start_time
  puts "เวลาที่ใช้ประมวลผล: #{duration.round(4)} วินาที"
end

benchmark do
  1_000_000.times { 2 * 2 }
end
\`\`\`

## 2. Proc vs Lambda
ทั้ง Proc และ Lambda คือ Object ของคลาส \`Proc\` แต่มีข้อแตกต่างสำคัญ 2 ประการ:
1. **การตรวจสอบ Arguments:**
   - **Proc:** ไม่เข้มงวดเรื่องจำนวน Parameter (ถ้าส่งไม่ครบจะเป็น nil, ส่งเกินจะถูกละเว้น)
   - **Lambda:** เข้มงวดเรื่องจำนวน Parameter เหมือน Method ปกติ (ถ้าส่งไม่ครบจะเกิด ArgumentError)
2. **พฤติกรรมของคำสั่ง \`return\`:**
   - **Proc:** คำสั่ง \`return\` จะออกจาก Method แม่ที่ครอบมันอยู่ทันที
   - **Lambda:** คำสั่ง \`return\` จะคืนค่าเฉพาะใน Lambda นั้น แล้วรันโค้ดใน Method แม่ต่อไปตามปกติ

\`\`\`ruby
# การประกาศ Proc
my_proc = Proc.new { |x, y| puts "Proc: #{x}, #{y}" }
my_proc.call(10) # ทำงานได้ y เป็น nil

# การประกาศ Lambda
my_lambda = ->(x, y) { puts "Lambda: #{x}, #{y}" }
# my_lambda.call(10) # ArgumentError: wrong number of arguments
my_lambda.call(10, 20)
\`\`\``,
      codeExample: `# ความแตกต่างระหว่าง Proc, Lambda และการใช้ yield ใน Ruby
puts "=== 1. การใช้งาน yield ร่วมกับ block_given? ==="
def execute_task(name)
  puts "กำลังเริ่มต้นงาน: #{name}"
  if block_given?
    result = yield(name)
    puts "ผลลัพธ์จาก Block: #{result}"
  else
    puts "ไม่มี Block ส่งเข้ามา"
  end
  puts "เสร็จสิ้นงาน: #{name}"
end

execute_task("ประมวลผลข้อมูล") { |task| "#{task.upcase} (SUCCESS)" }

puts "\n=== 2. Proc vs Lambda Return Behavior ==="
def test_proc_return
  p = Proc.new { return "ออกจาก Method ด้วย Proc" }
  p.call
  "โค้ดนี้จะไม่ถูกรันเลย"
end

def test_lambda_return
  l = -> { return "ค่าจาก Lambda" }
  val = l.call
  "Method ทำงานต่อสำเร็จ ได้รับ: #{val}"
end

puts test_proc_return
puts test_lambda_return`,
      challenge: "เขียนฟังก์ชัน custom_retry(times) ที่ใช้ yield เพื่อรันโค้ดใน block หากเกิดข้อผิดพลาดให้ทำการลองใหม่ตามจำนวนรอบที่ระบุ",
      quiz: [
        {
          question: "คำสั่งใดใช้ตรวจสอบว่า Method มีการส่ง Block เข้ามาหรือไม่ก่อนเรียกใช้ yield?",
          options: ["block_given?", "has_block?", "yield_ready?", "block_exists?"],
          correctAnswer: 0,
          explanation: "block_given? เป็น Method ในตัวของ Ruby ที่คืนค่า boolean ว่ามี block ส่งมาด้วยหรือไม่เพื่อป้องกัน LocalJumpError"
        },
        {
          question: "ข้อใดอธิบายพฤติกรรมของคำสั่ง return ใน Lambda ได้ถูกต้อง?",
          options: [
            "คำสั่ง return ใน Lambda จะคืนค่าเฉพาะใน Lambda แล้วส่งการทำงานกลับไปรันต่อใน Method แม่",
            "คำสั่ง return ใน Lambda จะหยุดการทำงานของ Method แม่ทันที",
            "Lambda ไม่อนุญาตให้มีคำสั่ง return",
            "Lambda จะหยุดโปรแกรมทั้งระบบ"
          ],
          correctAnswer: 0,
          explanation: "Lambda มีพฤติกรรมเหมือน Method ทั่วไป คำสั่ง return ในตัวมันจึงเพียงแค่ส่งค่ากลับออกมาให้ผู้เรียก ไม่ได้บังคับให้ออกจาก Method แม่เหมือน Proc"
        },
        {
          question: "สัญลักษณ์ ->(x) { x * 2 } ในภาษา Ruby คืออะไร?",
          options: ["Stabby Lambda syntax", "Hash Arrow", "Pointer syntax", "Bitwise Operator"],
          correctAnswer: 0,
          explanation: "->(args) { ... } เรียกว่า Stabby Lambda Syntax ซึ่งเป็นไวยากรณ์กระชับในการสร้าง Lambda Object ใน Ruby ยุคใหม่"
        }
      ]
    },
    {
      id: "ruby-5",
      title: "Metaprogramming, Method Missing และ Dynamic Dispatch",
      description: "ศาสตร์ขั้นสูงของการเขียนโปรแกรมที่เขียนตัวเองได้ด้วย send, define_method, method_missing และ const_get",
      duration: "45 นาที",
      level: "ปานกลาง",
      content: `# Metaprogramming และ Dynamic Dispatch ในภาษา Ruby

**Metaprogramming** คือความสามารถของภาษา Ruby ในการดัดแปลง สร้าง หรือเปลี่ยนแปลงคลาสและ Method ขณะที่โปรแกรมกำลังทำงาน (Runtime) ซึ่งเป็นรากฐานที่ทำให้ Ruby on Rails มีความยืดหยุ่นสูง

## 1. Dynamic Dispatch ด้วย \`send\`
เมื่อเราไม่ทราบชื่อ Method ล่วงหน้าจนกระทั่ง Runtime:
\`\`\`ruby
class Calculator
  def add(a, b); a + b; end
  def multiply(a, b); a * b; end
end

calc = Calculator.new
operation = :add
result = calc.send(operation, 10, 20) # 30
\`\`\`

## 2. Dynamic Method Definition ด้วย \`define_method\`
ลดการเขียนโค้ดซ้ำซาก (DRY Principle):
\`\`\`ruby
class UserRole
  ROLES = [:admin, :moderator, :editor, :viewer]

  ROLES.each do |role_name|
    define_method("#{role_name}?") do
      @current_role == role_name
    end
  end
end
\`\`\`

## 3. Ghost Methods ด้วย \`method_missing\`
เมื่อเรียกใช้งาน Method ที่ไม่มีอยู่จริง Ruby จะวิ่งเข้าสู่ \`method_missing\` เสมอ:
\`\`\`ruby
class DynamicConfig
  def initialize(data = {})
    @data = data
  end

  def method_missing(name, *args)
    if @data.key?(name)
      @data[name]
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    @data.key?(name) || super
  end
end
\`\`\``,
      codeExample: `# Metaprogramming ในการสร้าง Dynamic API Wrapper
class FlexibleReport
  def initialize(data)
    @data = data
  end

  # ดักจับ method ที่ชื่อ find_by_...
  def method_missing(method_name, *args, &block)
    method_str = method_name.to_s
    if method_str.start_with?("find_by_")
      attribute = method_str.sub("find_by_", "").to_sym
      target_value = args.first
      puts "[Ghost Method]: กำลังค้นหาข้อมูลจากฟิลด์ :#{attribute} ด้วยค่า '#{target_value}'"
      @data.find { |item| item[attribute] == target_value }
    else
      super
    end
  end

  def respond_to_missing?(method_name, include_private = false)
    method_name.to_s.start_with?("find_by_") || super
  end
end

users = [
  { id: 1, email: "somchai@gmail.com", role: :admin },
  { id: 2, email: "kanda@gmail.com", role: :developer }
]

report = FlexibleReport.new(users)
found_user = report.find_by_email("kanda@gmail.com")
puts "ผลการค้นหา: #{found_user}"`,
      challenge: "สร้างคลาส Entity ที่ใช้ define_method เพื่อสร้าง Getter/Setter สำหรับรายการ attributes ที่ส่งเข้ามาเป็น Array ในตอน initialize",
      quiz: [
        {
          question: "การใช้ method_missing ควรทำควบคู่กับ Method ใดเสมอเพื่อให้ Object ตรวจสอบสถานะการมีอยู่ของ Method ได้ถูกต้อง?",
          options: ["respond_to_missing?", "method_defined?", "check_missing?", "has_method?"],
          correctAnswer: 0,
          explanation: "เมื่อ override method_missing ควร override respond_to_missing? ควบคู่ไปด้วยเสมอ เพื่อให้คำสั่ง obj.respond_to?(:method) ตอบสนองได้อย่างถูกต้อง"
        },
        {
          question: "Method .send(:method_name, args) แตกต่างจากการเรียก method ปกติอย่างไร?",
          options: [
            "สามารถเรียก Private Method ได้ และสามารถส่งชื่อ Method แบบไดนามิกเป็น Symbol/String ได้",
            "ทำงานช้ากว่าแบบปกติ 1,000 เท่า",
            "ใช้ได้เฉพาะกับคลาสที่เป็น Network เท่านั้น",
            "ไม่สามารถส่งอาร์กิวเมนต์ได้"
          ],
          correctAnswer: 0,
          explanation: ".send สามารถรับชื่อ method ในรูปแบบ Symbol หรือ String ขณะ runtime และยังสามารถ bypass การป้องกันเพื่อเรียก private method ได้ (หากต้องการป้องกัน private method ให้ใช้ public_send)"
        },
        {
          question: "ข้อดีหลักของ define_method ในภาษา Ruby คืออะไร?",
          options: [
            "ช่วยสร้าง Method จำนวนมากที่มีโครงสร้างคล้ายกันได้แบบไดนามิกระหว่างรันไทม์ ลดโค้ดซ้ำซ้อน",
            "เพิ่มความเร็วในการคอมไพล์เป็น C",
            "บังคับให้โปรแกรมใช้หน่วยความจำน้อยลง",
            "แปลงโค้ดให้กลายเป็น Static Types"
          ],
          correctAnswer: 0,
          explanation: "define_method ช่วยให้นักพัฒนาสร้าง method ขึ้นมาได้อัตโนมัติตามข้อมูลหรือลิสต์ที่กำหนดไว้ ทำให้โค้ด DRY (Don't Repeat Yourself) อย่างมาก"
        }
      ]
    },
    {
      id: "ruby-6",
      title: "การจัดการ Gem, Bundler และ Concurrency ด้วย Threads และ Fibers",
      description: "ทำความเข้าใจระบบ RubyGems, Gemfile, Bundler, การทำงานร่วมกับ Global VM Lock (GVL) และ Coroutine ด้วย Fibers",
      duration: "40 นาที",
      level: "ปานกลาง",
      content: `# Gem Ecosystem, Bundler และ Concurrency ใน Ruby

ระบบจัดการแพ็กเกจของ Ruby เรียกว่า **RubyGems** และมีเครื่องมือควบคุม Dependency คือ **Bundler** ควบคู่กับโมเดลการประมวลผลพร้อมกันยุคใหม่

## 1. Gemfile และ Bundler
\`\`\`ruby
# Gemfile
source "https://rubygems.org"

gem "puma", "~> 6.4"
gem "faraday", "~> 2.8"
gem "pg", "~> 1.5"

group :development, :test do
  gem "rspec", "~> 3.12"
  gem "rubocop", require: false
end
\`\`\`
คำสั่งสำคัญ:
- \`bundle install\`: ติดตั้ง gems และสร้าง \`Gemfile.lock\` เพื่อการันตีเวอร์ชันที่ตรงกันทั้งทีม
- \`bundle exec <command>\`: รันคำสั่งภายใต้ Context ของ Gem versions ในโปรเจกต์

## 2. Ruby Concurrency: Threads vs Fibers vs Ractors
- **Threads:** เป็น Native OS Threads แต่ใน CRuby (MRI) มี **Global VM Lock (GVL)** ทำให้ Ruby Bytecode ถูกประมวลผลได้ครั้งละ 1 Thread เหมาะอย่างยิ่งสำหรับงาน I/O-bound (เช่น รอเรียก API หรือสืบค้นฐานข้อมูล)
- **Fibers:** เป็น Light-weight Cooperative Concurrency (Coroutines) ที่เราควบคุมจังหวะการสลับการทำงานด้วย \`Fiber.yield\` และ \`resume\` ประหยัด RAM สูงมาก
- **Ractors (Ruby 3+):** โมเดล Actor-based Concurrency แท้จริงที่แชร์หน่วยความจำแบบ Isolate ปราศจาก GVL`,
      codeExample: `# การจำลอง Multi-threading สำหรับงาน I/O Concurrent ในภาษา Ruby
urls = [
  "https://api.github.com/users",
  "https://api.github.com/repos",
  "https://api.github.com/events"
]

puts "=== เริ่มต้นดึงข้อมูลพร้อมกันด้วย Ruby Threads ==="
threads = []
results = []
mutex = Mutex.new

urls.each_with_index do |url, idx|
  threads << Thread.new do
    start = Time.now
    # จำลอง I/O Network Latency
    sleep(0.05 * (idx + 1))
    data = "{ status: 200, url: '#{url}' }"
    
    # ใช้ Mutex ล็อกการเข้าถึง Array ส่วนกลาง
    mutex.synchronize do
      results << { url: url, time: (Time.now - start).round(4) }
    end
  end
end

# รอให้ทุก Thread ทำงานเสร็จ
threads.each(&:join)

puts "ผลลัพธ์การประมวลผลแบบขนาน:"
results.each do |r|
  puts "URL: #{r[:url]} ใช้เวลา #{r[:time]} วินาที"
end`,
      challenge: "สร้าง Fiber ตัวนับจำนวน (Counter) ที่คืนค่าเลข 1 ถึง 10 ออกมาทีละค่าทุกครั้งที่ถูกเรียกใช้งานด้วยคำสั่ง .resume",
      quiz: [
        {
          question: "Global VM Lock (GVL) ใน CRuby ส่งผลต่อการทำงานของ Thread อย่างไร?",
          options: [
            "ทำให้รัน Ruby Bytecode ได้ครั้งละ 1 Thread แต่จะปล่อยล็อกเมื่อเจองานประเภท I/O (เช่น Network/Disk)",
            "ป้องกันไม่ให้สร้าง Thread ได้เกิน 10 Threads",
            "ห้ามไม่ให้ใช้งานฐานข้อมูล",
            "ปิดการทำงานของระบบ Garbage Collection"
          ],
          correctAnswer: 0,
          explanation: "GVL ใน CRuby ยอมให้รัน Bytecode ได้ทีละ Thread เพื่อความปลอดภัยของหน่วยความจำ แต่จะปล่อยล็อกทันทีเมื่อ Thread รอ I/O ทำให้ Thread เหมาะกับงาน I/O-bound อย่างยิ่ง"
        },
        {
          question: "ไฟล์ใดที่ Bundler ใช้บันทึกเวอร์ชันที่แท้จริงของ Gems ทั้งหมดเพื่อการันตีความเข้ากันได้บน Production?",
          options: ["Gemfile.lock", "gems.json", "package-lock.json", "Gem.spec"],
          correctAnswer: 0,
          explanation: "Gemfile.lock คือไฟล์ที่บันทึกเวอร์ชันและ dependency tree ที่แท้จริงจากการรัน bundle install เพื่อให้ทุกเครื่องมีสภาพแวดล้อมตรงกัน 100%"
        },
        {
          question: "ความแตกต่างสำคัญระหว่าง Thread และ Fiber ในภาษา Ruby คืออะไร?",
          options: [
            "Thread สลับการทำงานโดย OS (Preemptive) ส่วน Fiber สลับการทำงานโดยโปรแกรมเมอร์สั่ง yield/resume (Cooperative)",
            "Fiber กินหน่วยความจำมากกว่า Thread 1,000 เท่า",
            "Thread ไม่สามารถรันใน Ruby ได้",
            "Fiber รันได้เฉพาะบนเครื่องเซิร์ฟเวอร์เท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "Thread เป็น Preemptive ถูกควบคุมโดย OS Scheduler ส่วน Fiber เป็น Cooperative Coroutine ที่เบามากและสลับการทำงานตามคำสั่งของโปรแกรมเมอร์"
        }
      ]
    },
    {
      id: "ruby-7",
      title: "สถาปัตยกรรม Ruby on Rails (MVC), Routing และ Controller Design",
      description: "เริ่มต้นก้าวสู่ Web Framework ระดับโลก Rails 7: โครงสร้าง Model-View-Controller, RESTful Routes, Strong Parameters และ Middleware",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# สถาปัตยกรรม Ruby on Rails (The Rails Way)

**Ruby on Rails (RoR)** คือเว็บเฟรมเวิร์กยอดนิยมระดับโลกที่เป็นขุมพลังเบื้องหลัง GitHub, Shopify, Airbnb, GitLab และ Basecamp ด้วยหลักการ **Convention over Configuration (CoC)**

## 1. โครงสร้าง Model-View-Controller (MVC)
\`\`\`
Browser Request ──> Router (config/routes.rb)
                          │
                          ▼
                     Controller (app/controllers/)
                     ┌────┴────┐
                     ▼         ▼
                   Model      View (HTML / JSON)
               (app/models)  (app/views)
\`\`\`

## 2. RESTful Routing (config/routes.rb)
Rails สร้างเส้นทางตามมาตรฐาน RESTful อัตโนมัติด้วยคำสั่งเดียว:
\`\`\`ruby
Rails.application.routes.draw do
  resources :articles do
    resources :comments, only: [:create, :destroy]
  end
  root "articles#index"
end
\`\`\`
คำสั่ง \`resources :articles\` จะสร้าง 7 Action routes ทันที:
1. \`GET /articles\` -> \`index\`
2. \`GET /articles/new\` -> \`new\`
3. \`POST /articles\` -> \`create\`
4. \`GET /articles/:id\` -> \`show\`
5. \`GET /articles/:id/edit\` -> \`edit\`
6. \`PATCH/PUT /articles/:id\` -> \`update\`
7. \`DELETE /articles/:id\` -> \`destroy\`

## 3. Strong Parameters ใน Controller
ป้องกันช่องโหว่ Mass Assignment:
\`\`\`ruby
class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :content, :published)
  end
end
\`\`\``,
      codeExample: `# ตัวอย่างสถาปัตยกรรม Controller & Router สไตล์ Rails 7
class MockRequest
  attr_reader :params, :method, :path
  def initialize(method, path, params = {})
    @method = method
    @path = path
    @params = params
  end
end

class BaseController
  attr_reader :request
  def initialize(request)
    @request = request
  end

  def render_json(data, status = 200)
    puts "[HTTP #{status}] Response Headers: Content-Type: application/json"
    puts "Body: #{data.inspect}"
  end
end

class ProductsController < BaseController
  def index
    products = [
      { id: 101, name: "Mechanical Keyboard", price: 3500 },
      { id: 102, name: "Wireless Mouse", price: 1800 }
    ]
    render_json({ success: true, count: products.size, data: products }, 200)
  end

  def create
    permitted = safe_params
    render_json({ success: true, message: "สร้างสินค้าสำเร็จ", product: permitted }, 201)
  end

  private

  def safe_params
    # เลียนแบบ Strong Parameters
    raw = @request.params[:product] || {}
    { name: raw[:name], price: raw[:price] }
  end
end

puts "=== จำลองการทำงานของ Rails Router & Controller ==="
req = MockRequest.new("POST", "/products", { product: { name: "Ultra Monitor 4K", price: 14500, hacker_role: "admin" } })
controller = ProductsController.new(req)
controller.create`,
      challenge: "จงอธิบายว่าทำไม Rails จึงใช้หลักการ Convention over Configuration และ Strong Parameters ช่วยป้องกันภัยคุกคามประเภทใด",
      quiz: [
        {
          question: "Convention over Configuration (CoC) ใน Ruby on Rails หมายถึงอะไร?",
          options: [
            "การกำหนดข้อตกลงในการตั้งชื่อโครงสร้างโฟลเดอร์ คลาส และตาราง เพื่อลดความจำเป็นในการเขียนไฟล์ Config ซ้ำซาก",
            "การบังคับให้โปรแกรมเมอร์ทุกคนเขียนโค้ดบรรทัดเดียวกัน",
            "การไม่ให้ใช้ฐานข้อมูลประเภท SQL",
            "การบังคับให้ใช้ภาษาอังกฤษเท่านั้น"
          ],
          correctAnswer: 0,
          explanation: "CoC ทำให้ Rails รู้ว่า Model ชื่อ Article จะเชื่อมกับตาราง 'articles' และ ArticlesController โดยไม่ต้องเขียนไฟล์ Config เชื่อมต่อเอง"
        },
        {
          question: "Strong Parameters ใน Rails Controller ถูกออกแบบมาเพื่อป้องกันช่องโหว่ความปลอดภัยใด?",
          options: [
            "Mass Assignment Vulnerability (การแอบยัด Parameter ต้องห้าม เช่น admin: true เข้ามา)",
            "SQL Injection",
            "Cross-Site Scripting (XSS)",
            "DDoS Attack"
          ],
          correctAnswer: 0,
          explanation: "Strong Parameters บังคับให้นักพัฒนา whitelist เฉพาะคีย์ที่อนุญาตให้เขียนลงฐานข้อมูล ป้องกันไม่ให้ผู้ใช้แอบส่งฟิลด์อ่อนไหวเข้ามาแก้ไข"
        },
        {
          question: "คำสั่ง resources :users ในไฟล์ config/routes.rb จะสร้างเส้นทาง (Routes) ตามมาตรฐาน RESTful กี่เส้นทาง?",
          options: ["7 เส้นทาง", "4 เส้นทาง", "1 เส้นทาง", "10 เส้นทาง"],
          correctAnswer: 0,
          explanation: "resources จะสร้าง 7 RESTful action routes มาตรฐาน (index, new, create, show, edit, update, destroy)"
        }
      ]
    },
    {
      id: "ruby-8",
      title: "Active Record ORM ขั้นสูง, Associations และ Query Optimization",
      description: "เชี่ยวชาญ Active Record: การทำความสัมพันธ์ (has_many, belongs_to), Validations, Scopes, และการแก้ปัญหา N+1 Query ด้วย includes",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Active Record ORM ขั้นสูงและการแก้ปัญหา N+1 Query

**Active Record** คือ Object-Relational Mapping (ORM) ที่เป็นหัวใจของ Rails โดยแปลงแถวข้อมูลในฐานข้อมูลให้กลายเป็น Ruby Objects พร้อมความสามารถในการตรวจสอบความถูกต้องและความสัมพันธ์

## 1. Associations และ Validations
\`\`\`ruby
class Author < ApplicationRecord
  has_many :books, dependent: :destroy
  validates :email, presence: true, uniqueness: true
end

class Book < ApplicationRecord
  belongs_to :author
  validates :title, presence: true, length: { minimum: 3 }
  validates :price, numericality: { greater_than_or_equal_to: 0 }

  # Scopes: บันทึกเงื่อนไขที่ใช้บ่อย
  scope :published, -> { where(published: true) }
  scope :expensive, -> { where("price > ?", 1000) }
end
\`\`\`

## 2. การแก้ปัญหา N+1 Query ปัญหาคลาสสิกของ ORM
ปัญหา N+1 เกิดขึ้นเมื่อเราดึงข้อมูล Author N คน แล้วใน Loop มีการเรียก \`author.books\` ทำให้ Rails ยิงคำถามไปยัง Database เพิ่มอีก N ครั้ง (รวมเป็น 1 + N ครั้ง):
\`\`\`ruby
# ❌ ทำให้เกิด N+1 Query (Database โหลดหนักมาก)
authors = Author.limit(10)
authors.each { |a| puts a.books.count }

# ✅ แก้ไขด้วย Eager Loading (.includes / .preload / .eager_load)
# ยิง Query เพียง 2 ครั้งเสมอ ไม่ว่าข้อมูลจะมีกี่พันแถว
authors = Author.includes(:books).limit(10)
authors.each { |a| puts a.books.size }
\`\`\``,
      codeExample: `# ตัวอย่างการจำลอง Active Record Query Interface และการแก้ปัญหา N+1
class MockActiveRecordRelation
  def initialize(model_name)
    @model = model_name
    @queries = []
  end

  def where(condition)
    @queries << "WHERE #{condition}"
    self
  end

  def includes(association)
    @queries << "EAGER_LOAD(:#{association})"
    self
  end

  def to_sql
    "SELECT * FROM #{@model.downcase}s #{@queries.join(' ')}"
  end
end

puts "=== จำลองการสร้าง SQL Query ของ Active Record ==="
query = MockActiveRecordRelation.new("User")
  .where("active = true")
  .where("role = 'engineer'")
  .includes(:profile)

puts "Generated Plan: #{query.to_sql}"
puts "ข้อดีของ .includes: รัน 2 คำสั่ง SQL แทนการวนลูปยิง Query นับร้อยครั้ง"`,
      challenge: "จงอธิบายความแตกต่างระหว่าง .includes, .preload และ .eager_load ใน Active Record",
      quiz: [
        {
          question: "ปัญหา N+1 Query ใน ORM ส่งผลเสียอย่างไรมากที่สุด?",
          options: [
            "ทำให้เกิดการส่งคำสั่ง SQL ไปยัง Database ถี่เกินความจำเป็น ทำให้ระบบช้าและ Database ทำงานหนัก",
            "ทำให้หน่วยความจำ RAM เสียหายถาวร",
            "ทำให้ข้อมูลในตารางถูกลบทันที",
            "ทำให้เว็บเบราว์เซอร์ไม่สามารถเปิดเว็บได้"
          ],
          correctAnswer: 0,
          explanation: "N+1 Query ทำให้เกิด round-trip ไปยังฐานข้อมูลจำนวนมากเกินความจำเป็น เช่น ข้อมูล 100 แถวต้องยิง SQL ถึง 101 ครั้ง แทนที่จะยิงเพียง 2 ครั้งด้วย Eager Loading"
        },
        {
          question: "Method ใดใน Active Record ที่ใช้สำหรับทำ Eager Loading เพื่อแก้ปัญหา N+1 Query?",
          options: ["includes", "joins", "pluck", "select"],
          correctAnswer: 0,
          explanation: "includes จะตัดสินใจดึงข้อมูลแบบ Eager Load (ใช้ 2 queries หรือ LEFT OUTER JOIN) เพื่อโหลดข้อมูลความสัมพันธ์มารอไว้ล่วงหน้า"
        },
        {
          question: "ตัวเลือก dependent: :destroy ในการกำหนด has_many มีความหมายอย่างไร?",
          options: [
            "เมื่อลบข้อมูลในตารางหลัก ข้อมูลลูกในตารางที่เชื่อมกันจะถูกลบตามไปด้วยอัตโนมัติ",
            "ป้องกันไม่ให้ลบข้อมูลในตารางหลัก",
            "ลบตารางออกจากฐานข้อมูล",
            "เปลี่ยนค่า foreign key ให้เป็น null"
          ],
          correctAnswer: 0,
          explanation: "dependent: :destroy จะสั่งให้ทำลายและลบข้อมูลลูกที่มีความสัมพันธ์ผูกอยู่ด้วยเมื่ออ็อบเจกต์หลักถูกลบ เพื่อไม่ให้เกิดข้อมูลกำพร้า (Orphan records)"
        }
      ]
    },
    {
      id: "ruby-9",
      title: "Test-Driven Development (TDD) ด้วย RSpec, FactoryBot และ Memory Profiling",
      description: "เขียน Automated Test ระดับมืออาชีพด้วย RSpec, การจัดเตรียม Test Data ด้วย FactoryBot, และการวิเคราะห์ Memory Leak ใน Ruby",
      duration: "45 นาที",
      level: "ขั้นสูง",
      content: `# Behavior-Driven Development (BDD) ด้วย RSpec

ในวงการ Ruby การเขียนชุดทดสอบอัตโนมัติ (Automated Testing) ถือเป็นวัฒนธรรมหลักที่ขาดไม่ได้ โดยเครื่องมือที่นิยมสูงสุดคือ **RSpec**

## 1. โครงสร้าง RSpec (Describe, Context, It)
RSpec ถูกออกแบบให้อ่านง่ายเหมือนภาษามนุษย์:
\`\`\`ruby
RSpec.describe BankAccount do
  let(:account) { BankAccount.new(initial_balance: 1000) }

  describe "#withdraw" do
    context "เมื่อยอดเงินในบัญชีเพียงพอ" do
      it "หักยอดเงินและคืนค่ายอดเงินคงเหลือใหม่อย่างถูกต้อง" do
        expect { account.withdraw(400) }.to change { account.balance }.from(1000).to(600)
      end
    end

    context "เมื่อยอดเงินไม่เพียงพอ" do
      it "จะโยนข้อผิดพลาด InsufficientFundsError" do
        expect { account.withdraw(1500) }.to raise_error(InsufficientFundsError)
      end
    end
  end
end
\`\`\`

## 2. Matchers สำคัญใน RSpec
- \`expect(actual).to eq(expected)\` (เปรียบเทียบค่า)
- \`expect(actual).to be_truthy / be_falsey\`
- \`expect(actual).to include(item)\`
- \`expect { block }.to change { value }.by(1)\`
- \`expect { block }.to raise_error(ErrorClass)\`

## 3. FactoryBot สำหรับสร้าง Mock Data
แทนการเขียน Fixtures ที่ดูแลยาก:
\`\`\`ruby
FactoryBot.define do
  factory :user do
    name { "Somchai Jaidee" }
    sequence(:email) { |n| "user#{n}@itacademy.com" }
    role { :engineer }
  end
end

# ใน Test:
user = create(:user)
\`\`\``,
      codeExample: `# ตัวอย่างการจำลอง RSpec Test Runner ในภาษา Ruby
class SimpleExpectation
  def initialize(actual)
    @actual = actual
  end

  def to_equal(expected)
    if @actual == expected
      puts "  ✓ [PASS] ค่า '#{@actual}' ตรงกับ '#{expected}' ตามคาดหวัง"
    else
      raise "  ✗ [FAIL] คาดหวัง '#{expected}' แต่ได้ค่า '#{@actual}'"
    end
  end
end

def describe(subject_name)
  puts "\n[RSpec Suite]: #{subject_name}"
  yield
end

def it(spec_name)
  puts "• Spec: #{spec_name}"
  yield
end

def expect(val)
  SimpleExpectation.new(val)
end

# รัน Test Suite
describe "ระบบคำนวณส่วนลดสินค้า (DiscountCalculator)" do
  it "คำนวณส่วนลด 10% สำหรับยอดซื้อเกิน 1,000 บาท" do
    price = 1200
    discount = price * 0.10
    final_price = price - discount
    expect(final_price).to_equal(1080.0)
  end

  it "ไม่ให้ส่วนลดสำหรับยอดซื้อต่ำกว่า 1,000 บาท" do
    price = 800
    final_price = price
    expect(final_price).to_equal(800)
  end
end`,
      challenge: "สร้าง RSpec Test จำลองที่ทดสอบว่าการโอนเงินระหว่าง 2 บัญชี ต้องทำให้ยอดเงินบัญชีต้นทางลดลงและบัญชีปลายทางเพิ่มขึ้นด้วยจำนวนเท่ากัน",
      quiz: [
        {
          question: "คำสั่ง let(:user) { User.create(...) } ใน RSpec มีพฤติกรรมอย่างไร?",
          options: [
            "เป็น Lazy Evaluation จะถูกประมวลผลเมื่อมีการเรียกใช้งานตัวแปร user ครั้งแรกในแต่ละ it block",
            "รันทันทีก่อนเริ่ม test เสมอ",
            "แชร์ค่า user ข้ามระหว่าง it block ทุกตัว",
            "เป็นคำสั่งลบข้อมูล user"
          ],
          correctAnswer: 0,
          explanation: "let(...) ใน RSpec เป็น Lazy Evaluation จะทำงานเมื่อถูกเรียกครั้งแรก และ cache ค่าไว้ตลอดการทดสอบใน it block นั้นๆ (หากต้องการให้ทำงานทันทีก่อนเริ่มให้ใช้ let!)"
        },
        {
          question: "เครื่องมือใดนิยมนำมาใช้แทน Fixtures ใน Rails เพื่อสร้างข้อมูลจำลองสำหรับการทดสอบอย่างยืดหยุ่น?",
          options: ["FactoryBot", "ActiveRecord Faker", "TestCreator", "DataBuilder"],
          correctAnswer: 0,
          explanation: "FactoryBot เป็น gem มาตรฐานในวงการ Rails สำหรับสร้าง test objects จำลองได้อย่างยืดหยุ่นและอ่านเข้าใจง่าย"
        },
        {
          question: "คำสั่ง describe และ context ใน RSpec แตกต่างกันอย่างไรตามข้อตกลงสากล?",
          options: [
            "describe ใช้อธิบายคลาสหรือ Method ส่วน context ใช้อธิบายเงื่อนไขหรือสภาวะแวดล้อมเฉพาะกรณี",
            "describe ใช้เฉพาะตอนเกิด Error เท่านั้น",
            "context ใช้ได้เฉพาะกับ Controller",
            "ทั้งคู่เป็นคำสั่งเดียวกันและไม่มีความแตกต่างในการจัดโครงสร้าง"
          ],
          correctAnswer: 0,
          explanation: "ตามข้อตกลง RSpec: describe ใช้ระบุสิ่งที่กำลังจะทดสอบ (เช่น Class หรือ #method) ส่วน context ใช้ระบุเงื่อนไขเฉพาะ (เช่น 'when user is logged in')"
        }
      ]
    }
  ]
};
