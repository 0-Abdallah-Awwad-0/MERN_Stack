@echo off
title Team Manager
cd /d "%~dp0server"
if not exist node_modules (
  echo Installing server packages...
  call npm install
)
start "Team Manager Server" cmd /k npm run dev

cd /d "%~dp0client"
if not exist node_modules (
  echo Installing client packages...
  call npm install
)
start "Team Manager Client" cmd /k npm run dev

timeout /t 5 /nobreak >nul
start http://localhost:5173
exit
