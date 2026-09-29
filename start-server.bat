@echo off
title IT Academy Production Server
echo ========================================================
echo               IT ACADEMY LOCAL SERVER
echo ========================================================
echo.
cd /d "%~dp0"
echo Starting IT Academy on http://localhost:3000 ...
echo Press Ctrl+C in this window if you want to stop the server.
echo.
timeout /t 2 /nobreak >nul
start http://localhost:3000
npm run start
pause
