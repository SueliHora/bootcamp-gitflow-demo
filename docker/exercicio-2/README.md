# Exercício 2 - Stack API + Banco de Dados (Bootcamp Orion)

Stack multi-container composta por uma API Node.js e um banco de dados relacional PostgreSQL, com persistência de dados via volume nomeado e gerenciamento de configurações por variáveis de ambiente.

## Estrutura de Arquivos
- `Dockerfile`: Imagem Alpine com `node:20-alpine` expondo a porta `3000`.
- `docker-compose.yml`: Orquestração dos serviços `api` e `db`, definindo dependência de inicialização (`depends_on: - db`) e volume nomeado `pgdata`.
- `package.json`: Dependências da aplicação (`express` e driver `pg`).
- `src/index.js`: Endpoints da API, incluindo conexão com o PostgreSQL via pool de conexões.
- `.env`: Variáveis de ambiente locais com credenciais de banco e porta.
- `.env.example`: Modelo de variáveis de ambiente versionável.
- `.dockerignore`: Exclusão de arquivos desnecessários no build (`node_modules`, `.git`, `.env`).

## Endpoints
- `GET /`: Retorna `Hello from Docker!`
- `GET /health`: Retorna `{ "status": "ok" }`
- `GET /visitas`: Cria a tabela `visitas` (se não existir), insere um registro e retorna o total acumulado, demonstrando persistência dos dados no volume Docker.

## Como Executar (Informativo)
```bash
docker compose up --build
```
Para testar a persistência, reinicie os containers e verifique se o contador em `/visitas` continua incrementando.

