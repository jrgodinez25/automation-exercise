@echo off
setlocal EnableDelayedExpansion

echo.
echo =============================================
echo Installing NVM (silent) and Node.js (silent)
echo =============================================

:: Set versions and URLs
set NVM_VERSION=1.1.11
set NODE_VERSION=18.18.2
set NVM_INSTALLER=nvm-setup.exe
set NODE_INSTALLER=node-v%NODE_VERSION%-x64.msi
set NVM_URL=https://github.com/coreybutler/nvm-windows/releases/download/%NVM_VERSION%/%NVM_INSTALLER%
set NODE_URL=https://nodejs.org/dist/v%NODE_VERSION%/%NODE_INSTALLER%

:: Define installation paths
set NVM_HOME=C:\Program Files\nvm
set NODE_HOME=C:\Program Files\nodejs

:: Step 1: Download NVM
echo [1/4] Downloading NVM v%NVM_VERSION%...
curl -L -o %NVM_INSTALLER% %NVM_URL%
if not exist %NVM_INSTALLER% (
    echo [ERROR] Failed to download NVM installer.
    pause
    exit /b 1
)

:: Step 2: Install NVM silently
echo [2/4] Installing NVM silently...
start /wait "" %NVM_INSTALLER% /SILENT
del /q %NVM_INSTALLER%

:: Step 3: Download Node.js MSI
echo [3/4] Downloading Node.js v%NODE_VERSION%...
curl -L -o %NODE_INSTALLER% %NODE_URL%
if not exist %NODE_INSTALLER% (
    echo [ERROR] Failed to download Node.js installer.
    pause
    exit /b 1
)

:: Step 4: Install Node.js silently
echo [4/4] Installing Node.js silently...
start /wait msiexec /i %NODE_INSTALLER% /quiet /norestart
del /q %NODE_INSTALLER%

:: Step 5: Add environment variables to SYSTEM registry (persistent)
echo [INFO] Updating system environment variables...

:: Add NVM vars
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v NVM_HOME /d "%NVM_HOME%" /f
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v NVM_SYMLINK /d "%NODE_HOME%" /f

:: Update PATH with NVM and Node
for /f "tokens=2*" %%a in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path ^| find "REG_"') do set OLD_PATH=%%b

echo [INFO] Appending NVM and Node.js paths to system PATH...
set NEW_PATH=%NVM_HOME%;%NODE_HOME%;%OLD_PATH%
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path /d "%NEW_PATH%" /f

:: Step 6: Apply changes to current session (TEMPORARY for script)
echo [INFO] Updating current session PATH...
set PATH=%NVM_HOME%;%NODE_HOME%;%PATH%

:: Confirm everything works
echo.
echo [INFO] Confirming installation:
where nvm
where node
node -v
npm -v

echo.
echo [✅ DONE] NVM and Node.js installed silently and are ready to use.
pause
exit /b
