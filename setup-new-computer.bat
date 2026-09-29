@echo off
title IT Academy - Setup For New Computer
echo ========================================================
echo       IT ACADEMY - SETUP FOR NEW COMPUTER
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/3] ตรวจสอบการติดตั้ง Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] ไม่พบโปรแกรม Node.js ในเครื่องนี้!
    echo กรุณาดาวน์โหลดและติดตั้ง Node.js (เวอร์ชัน LTS) จาก:
    echo https://nodejs.org
    echo.
    echo เมื่อติดตั้งเสร็จแล้ว ให้เปิดไฟล์นี้ใหม่อีกครั้ง
    echo.
    pause
    exit /b 1
)

echo [OK] ตรวจพบ Node.js เรียบร้อย:
node -v
npm -v
echo.

echo [2/3] กำลังติดตั้ง Dependencies ทั้งหมด (npm install)...
call npm install

echo.
echo [3/3] กำลัง Build ระบบเพื่อเตรียมพร้อมใช้งาน (npm run build)...
call npm run build

echo.
echo ========================================================
echo [SUCCESS] ติดตั้งและเตรียมระบบเสร็จสิ้นสมบูรณ์!
echo คุณสามารถดับเบิ้ลคลิกไฟล์ "start-server.bat" เพื่อเปิดเว็บได้ทันที
echo ========================================================
echo.
pause
