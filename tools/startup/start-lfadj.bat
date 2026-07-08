@echo off
title LFADJ Startup System V5

cd /d E:\LFADJ\lfadj-website

echo LFADJ STARTING SYSTEM

node -v
if %errorlevel% neq 0 (
  echo Node.js not installed
  pause
  exit
)

call npm install
start cmd /k "npm run dev"

timeout /t 8

start http://localhost:3000/en
start http://localhost:3000/zh
start https://chat.openai.com

pause