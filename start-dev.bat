@echo off
title IT Academy Development Server
echo ========================================================
echo       IT ACADEMY DEVELOPMENT SERVER (HOT RELOAD)
echo ========================================================
echo.
cd /d "%~dp0"
echo Starting IT Academy Development Mode on http://localhost:3000 ...
timeout /t 2 /nobreak >nul
start http://localhost:3000
npm run dev
pause
