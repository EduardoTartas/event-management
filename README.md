## 🚀 Como Executar o Projeto | Branch part-3

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

  ```
  git clone https://github.com/EduardoTartas/event-management.git
  ```
### 2. Mudar para a Branch `part-3`  

Para acessar a segunda versão do projeto, mude para a branch correta com o comando:  

```sh
git checkout part-3
```
### 3. Instalar Dependências
Certifique-se de ter o Node.js e o npm instalados. Em seguida, instale as dependências do projeto executando:

  ```
  npm install
  ```

### 4. Configurar as Credenciais do Banco de Dados  

O projeto utiliza um banco de dados hospedado no **Turso**. Para configurá-lo corretamente:  

1. **Crie um arquivo `.env` na raiz do projeto**.  
2. **Adicione as seguintes variáveis de ambiente**, substituindo pelos valores corretos:  

```env
DATABASE_URL="URL_DO_BANCO_DE_DADOS"
AUTH_TOKEN="TOKEN_DE_AUTENTICACAO"
```


### 5. Fazer o Build do Código
O código deve ser compilado antes de ser executado. Use o comando:

```
npm run build
```

### 6. Navegar para a Pasta de Distribuição
Após a compilação, vá para a pasta dist:

```
cd dist
```

### 7. Executar o Programa
Execute o programa com o comando:

```
npm run start
```
