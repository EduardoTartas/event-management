# 🗓️ Gerenciamento de Eventos

## ⚙️ Funcionalidades 

✅ **Gerenciamento de Eventos**  
- Criar, listar, buscar por ID, atualizar e excluir eventos.  

✅ **Gerenciamento de Usuários**  
- Criar, listar, buscar por ID, atualizar e excluir usuários.  

✅ **Registro de Logs**  
- Todas as ações realizadas nos eventos e usuários são registradas em um arquivo de logs.  

✅ **Validação de Dados**  
- Validação dos dados inseridos.  

✅ **Banco de Dados SQLite/Turso**  
- Armanezamento dos dados utilizando **SQLite** (inicialmente) e posteriormente migrado para **Turso** utilizando **Drizzle ORM**.  

## 🗂️ Branches do Projeto  

O repositório contém três branches principais, cada uma representando uma evolução no desenvolvimento:  

### 1️⃣ `main` 📂  
- Implementação inicial do projeto.  
- Funcionalidades básicas de gerenciamento de eventos e usuários utilizando SQLite.  
- Operações realizadas diretamente no banco de dados local.  

### 2️⃣ `part-2` 🖥️📜  
- Adicionada uma **interface interativa** para facilitar a navegação.  
- Navegação com **setas do teclado** e seleção com **Enter**.  
- Registro de logs aprimorado, agora salvo em um arquivo separado.  

### 3️⃣ `part-3` 🗄️🚀  
- Implementação da **ORM Drizzle**, tornando as interações com o banco mais estruturadas.  
- O banco de dados foi **migrado para o Turso**, permitindo acesso remoto e escalabilidade.  

---
## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

  ```
  git clone https:https://github.com/EduardoTartas/gerenciamento-de-usuarios.git
  ```
### 2. Instalar Dependências
Certifique-se de ter o Node.js e o npm instalados. Em seguida, instale as dependências do projeto executando:

  ```
  npm install
  ```

### 3️. Configurar as Credenciais do Banco de Dados  

O projeto utiliza um banco de dados hospedado no **Turso**. Para configurá-lo corretamente:  

1. **Crie um arquivo `.env` na raiz do projeto**.  
2. **Adicione as seguintes variáveis de ambiente**, substituindo pelos valores corretos:  

```env
DATABASE_URL="URL_DO_BANCO_DE_DADOS"
AUTH_TOKEN="TOKEN_DE_AUTENTICACAO"
```

### 4. Fazer o Build do Código
O código deve ser compilado antes de ser executado. Use o comando:

```
npm run build
```

### 5. Navegar para a Pasta de Distribuição
Após a compilação, vá para a pasta dist:

```
cd dist
```

### 6. Executar o Programa
Execute o programa com o comando:

```
npm run start
```
