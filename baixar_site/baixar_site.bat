@echo off
setlocal enabledelayedexpansion

rem Caminho para o wget.exe dentro da pasta baixar_site
set WGET_PATH=wget.exe

rem Ler o URL do arquivo site_url.txt
set /p SITE=<site_url.txt

rem Verificar se o URL foi fornecido
if "%SITE%"=="" (
    echo URL não fornecido. Por favor, insira um URL.
    pause
    exit /b
)

rem Executar o wget com o URL inserido
%WGET_PATH% -r -k -l 7 -p -E -np %SITE%
pause
exit /b

endlocal
