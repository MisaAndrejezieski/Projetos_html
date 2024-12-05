param (
    [string]$site
)

if (-not $site) {
    Write-Host "URL não fornecido. Por favor, insira um URL."
    exit
}

# Caminho para o wget.exe dentro da pasta baixar_site
$wgetPath = "D:\Projetos_html\baixar_site\wget.exe"

# Verificar se o wget.exe está presente
if (-not (Test-Path $wgetPath)) {
    Write-Host "wget.exe não encontrado no caminho especificado."
    exit
}

# Executar o wget com o URL fornecido
& $wgetPath -r -k -l 7 -p -E -np $site
