@echo off
cd /d "%~dp0"
if not exist node_modules (
    echo Installing packages...
    call npm install
)
echo Starting Faker API...
call npm run dev
pause
