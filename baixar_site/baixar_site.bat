@echo off
setlocal enabledelayedexpansion

rem Caminho para o wget.exe dentro da pasta baixar_site
set WGET_PATH=wget.exe

rem Função para executar o wget com o URL inserido
:run_wget
set SITE=%1
if "%SITE%"=="" (
    echo URL não fornecido. Por favor, insira um URL.
    pause
    exit /b
)
rem Executar o wget com o URL inserido
%WGET_PATH% -r -k -l 7 -p -E -np %SITE%
pause
exit /b

rem Abrir a interface gráfica
mshta "input.html"

endlocal

