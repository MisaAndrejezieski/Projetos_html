import subprocess

# Caminho para o wget.exe dentro da pasta baixar_site
WGET_PATH = 'wget.exe'

# Ler o URL do arquivo site_url.txt
try:
    with open('site_url.txt', 'r') as file:
        SITE = file.readline().strip()
except FileNotFoundError:
    print("Arquivo site_url.txt não encontrado.")
    exit()

# Verificar se o URL foi fornecido
if not SITE:
    print("URL não fornecido. Por favor, insira um URL.")
    exit()

# Executar o wget com o URL inserido
command = [WGET_PATH, '-r', '-k', '-l', '7', '-p', '-E', '-np', SITE]
try:
    subprocess.run(command, check=True)
except subprocess.CalledProcessError as e:
    print(f"Erro ao executar o wget: {e}")