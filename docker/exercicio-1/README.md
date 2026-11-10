# Exercício 1 - Hello Container (Bootcamp Orion)

Aplicação básica em Node.js utilizando imagem leve Alpine, Dockerfile otimizado e orquestração via Docker Compose.

## Estrutura de Arquivos
- `Dockerfile`: Imagem enxuta baseada em `node:20-alpine` com diretório de trabalho `/app` e porta `3000` exposta.
- `docker-compose.yml`: Orquestração do serviço `api` mapeando a porta `3000:3000` e volume para desenvolvimento.
- `package.json`: Definição do projeto Node.js com a dependência `express`.
- `src/index.js`: Servidor Express com rota principal retornando `Hello from Docker!`.
- `.dockerignore`: Ignora `node_modules`, `.git` e `.env` no build da imagem Docker.

## Endpoints
- `GET /`: Retorna a mensagem `Hello from Docker!`

## Como Executar (Informativo)
Para rodar a aplicação via Docker Compose:
```bash
docker compose up --build
```
Acesse no navegador ou cliente HTTP: `http://localhost:3000`

