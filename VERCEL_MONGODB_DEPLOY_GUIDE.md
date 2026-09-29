# 🚀 คู่มือการ Deploy IT Academy บน Vercel + MongoDB Atlas (ออนไลน์ 24 ชม. ฟรี 100%)

คู่มือนี้จะพาคุณติดตั้งระบบ **IT Academy** ขึ้นสู่คลาวด์จริงด้วย **Vercel** และเชื่อมต่อ **MongoDB Atlas (Free Tier)** เพื่อให้เว็บไซต์ออนไลน์ได้ตลอด 24 ชั่วโมง 365 วัน โดยที่คุณสามารถปิดคอมพิวเตอร์ของคุณได้เลยครับ

---

## 📌 ขั้นตอนมีเพียง 3 ขั้นตอนหลัก:

```mermaid
flowchart LR
    A["1. สมัคร MongoDB Atlas<br/>(เอา Connection String)"] --> B["2. เอาโค้ดขึ้น GitHub<br/>(Git Push)"]
    B --> C["3. กด Deploy บน Vercel<br/>(ใส่ MONGODB_URI)"]
    C --> D["🎉 เว็บออนไลน์ 24 ชม.<br/>https://it-academy.vercel.app"]
```

---

## 🟢 ขั้นตอนที่ 1: สร้างฐานข้อมูลฟรีบน MongoDB Atlas (ใช้เวลา 3 นาที)

1. เข้าเว็บไซต์ [https://cloud.mongodb.com](https://cloud.mongodb.com) แล้วกด **Sign Up** (แนะนำกดล็อกอินด้วย Google ได้เลย สะดวกและฟรี)
2. เมื่อเข้ามาที่หน้าสร้าง Database:
   * เลือกประเภทแพ็กเกจ: **M0 (Free)** (ฟรี 100% ตลอดชีพ)
   * เลือก Provider & Region: แนะนำ **AWS / Singapore (ap-southeast-1)** หรือ **GCP / Singapore** (จะเร็วที่สุดสำหรับผู้ใช้ในไทย)
   * กดปุ่ม **Create Deployment**
3. **ตั้งค่าความปลอดภัย (Security Quickstart):**
   * **Username & Password:** ตั้งชื่อผู้ใช้และรหัสผ่านฐานข้อมูล (เช่น User: `itadmin` Pass: `รหัสที่คุณตั้ง`) *(จดรหัสนี้ไว้)*
   * **Network Access (สำคัญมาก):** ในหัวข้อ "Where would you like to connect from?" ให้เลือกหรือเพิ่ม IP เป็น:
     * IP Address: `0.0.0.0/0` (Allow Access from Anywhere — จำเป็นเพื่อให้ Vercel สามารถเชื่อมต่อได้จากทุกที่)
   * กดปุ่ม **Finish and Close**
4. **คัดลอก Connection String:**
   * กดปุ่ม **Connect** ที่ Cluster ของคุณ
   * เลือกหัวข้อ **Drivers** (Node.js)
   * คุณจะได้ URL หน้าตาประมาณนี้:
     ```text
     mongodb+srv://itadmin:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
     ```
   * ให้แทนที่คำว่า `<password>` ด้วยรหัสผ่านจริงที่คุณตั้งไว้ในข้อ 3 (เช่น `mongodb+srv://itadmin:MyPass1234@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`)
   * **เก็บข้อความนี้ไว้ เพื่อนำไปใส่ใน Vercel ในขั้นตอนที่ 3 ครับ**

---

## 🟢 ขั้นตอนที่ 2: นำโค้ดขึ้น GitHub

1. เข้าเว็บ [GitHub.com](https://github.com) แล้วสร้าง **New Repository** ชื่อ `it-academy` (เลือกเป็น Private หรือ Public ก็ได้)
2. เปิด PowerShell หรือ Command Prompt ในโฟลเดอร์โปรเจกต์ `D:\IT Academy`:
   ```bash
   d:
   cd "D:\IT Academy"
   git init
   git add .
   git commit -m "feat: complete IT Academy with cloud db"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/it-academy.git
   git push -u origin main
   ```
   *(หมายเหตุ: หากเครื่องใหม่ยังไม่มี Git สามารถดาวน์โหลดโปรแกรม GitHub Desktop มาลากโฟลเดอร์ขึ้นได้ง่ายๆ เช่นกันครับ)*

---

## 🟢 ขั้นตอนที่ 3: Deploy บน Vercel (ขั้นตอนสุดท้าย)

1. เข้าเว็บไซต์ [https://vercel.com](https://vercel.com) แล้วกด **Sign Up / Log In ด้วย GitHub**
2. ที่หน้าแดชบอร์ด Vercel กดปุ่ม **"Add New..."** ➔ เลือก **"Project"**
3. มองหา Repository `it-academy` ที่คุณเพิ่ง Push ขึ้นไป แล้วกดปุ่ม **"Import"**
4. ในหน้าตั้งค่าก่อน Deploy ให้เลื่อนลงมาที่หัวข้อ **Environment Variables**:
   * **Key:** `MONGODB_URI`
   * **Value:** วาง Connection String จากขั้นตอนที่ 1 ลงไป (เช่น `mongodb+srv://itadmin:MyPass1234@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`)
   * กดปุ่ม **Add**
5. กดปุ่ม **"Deploy"** ได้ทันที!
6. รอประมาณ 1 นาที Vercel จะคอมไพล์ระบบและแสดงพลุฉลอง 🎉
   * คุณจะได้ลิงก์เว็บไซต์จริงทันที เช่น `https://it-academy-xxx.vercel.app`

---

## ✨ สิ่งที่จะเกิดขึ้นอัตโนมัติทันทีที่เว็บออนไลน์:

* **ระบบ Auto-Seed อัตโนมัติ:** เมื่อเว็บเริ่มทำงานครั้งแรก ระบบจะสร้าง Collection และใส่บัญชีแอดมินให้ทันที:
  * **ทางเข้าแอดมิน:** `https://your-domain.vercel.app/admin/login`
  * **ชื่อผู้ใช้:** `kitsvcadmin`
  * **รหัสผ่าน:** `kitsvc2570`
* **ข้อมูลไม่หาย 100%:** ทุกครั้งที่มีนักเรียนลงทะเบียน หรือยืนยันรหัส OTP ข้อมูลจะถูกบันทึกลงใน MongoDB Atlas บนคลาวด์อย่างปลอดภัย ถาวรตลอดชีพ
* **คุณสามารถปิดคอมพิวเตอร์ของคุณได้เลย:** เว็บไซต์จะเปิดทำงาน 24 ชั่วโมง ไม่มีวันดับครับ!
