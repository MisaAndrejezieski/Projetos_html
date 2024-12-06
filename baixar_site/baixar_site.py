import subprocess
import os

def main():
    # Caminho para o wget.exe dentro da pasta baixar_site
    wget_path = 'wget.exe'
    
    # Verificar se o wget.exe está presente
    if not os.path.exists(wget_path):
        print("wget.exe não encontrado no caminho especificado.")
        return
    
    # Ler o URL do arquivo site_url.txt
    try:
        with open('site_url.txt', 'r', encoding='utf-8') as file:
            site = file.readline().strip()
    except FileNotFoundError:
        print("Arquivo site_url.txt não encontrado.")
        return
    
    # Verificar se o URL foi fornecido
    if not site:
        print("URL não fornecido. Por favor, insira um URL.")
        return
    
    # Executar o wget com o URL inserido
    try:
        subprocess.run([wget_path, '-r', '-k', '-l', '7', '-p', '-E', '-np', site], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Erro ao executar o wget: {e}")

if __name__ == "__main__":
    main()
