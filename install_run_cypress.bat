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

:: Check if the install was successful
IF %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================
    echo Cypress installed successfully!
    echo Opening Cypress Test Runner...
    echo ====================================
    npx cypress open
) ELSE (
    echo.
    echo ====================================
    echo Cypress installation failed.
    echo Please check for errors above.
    echo ====================================
)

endlocal
pause
