@echo off
setlocal enabledelayedexpansion

rem Caminho para o wget.exe dentro da pasta baixar_site
set WGET_PATH=wget.exe

rem Usar um script auxiliar para obter o URL do localStorage
call :get_site_from_js
set SITE=%RETURN_SITE%

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

rem Abrir a interface gráfica
mshta "index.html"

:get_site_from_js
for /f "tokens=*" %%i in ('mshta "javascript:window.external.setReturnValue(localStorage.getItem(\"site\"));close()"') do set RETURN_SITE=%%i
exit /b

endlocal
