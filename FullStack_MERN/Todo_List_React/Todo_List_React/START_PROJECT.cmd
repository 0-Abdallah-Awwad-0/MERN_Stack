@echo off
cd /d "%~dp0"

echo Installing project packages...
call npm install

if errorlevel 1 (
    echo.
    echo Installation failed.
    pause
    exit /b 1
)

echo.
echo Starting Todo List...
start "Todo List" cmd /k "cd /d \"%~dp0\" && npm run dev"

timeout /t 4 /nobreak > nul
start http://localhost:5173
