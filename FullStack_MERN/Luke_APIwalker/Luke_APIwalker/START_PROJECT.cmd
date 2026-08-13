@echo off
cd /d %~dp0
if not exist node_modules (
    echo Installing packages...
    call npm install
)
start "Luke APIwalker" cmd /k "npm run dev"
timeout /t 3 /nobreak > nul
start http://localhost:5173
