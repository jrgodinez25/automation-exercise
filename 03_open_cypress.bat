@echo off
setlocal EnableDelayedExpansion

:: Set the current directory
set "CUR_DIR=%cd%"

echo.
echo ====================================
echo Project Directory: !CUR_DIR!
echo Installing Cypress via npm
echo ====================================

:: Open or Run Cypress in the current directory
npx cypress open


endlocal
pause
