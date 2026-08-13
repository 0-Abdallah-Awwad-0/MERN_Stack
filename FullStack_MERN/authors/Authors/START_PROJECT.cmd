@echo off
title Authors
cd /d "%~dp0server"
if not exist node_modules (
  echo Installing server packages...
  call npm install
)
start "Authors Server" cmd /k npm run dev

cd /d "%~dp0client"
if not exist node_modules (
  echo Installing client packages...
  call npm install
)
start "Authors Client" cmd /k npm run dev

timeout /t 5 /nobreak >nul
start http://localhost:5173
exit
