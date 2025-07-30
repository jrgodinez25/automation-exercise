@echo off
setlocal EnableDelayedExpansion

:: Set the current directory
set "CUR_DIR=%cd%"

echo.
echo ====================================
echo Project Directory: !CUR_DIR!
echo Installing Cypress via npm
echo ====================================

:: Install Cypress as a dev dependency in the current directory
npm install cypress --save-dev

endlocal
pause
