# Exercício Extra - Stack Completa de 3 Serviços (Bootcamp Orion)

Aplicação completa de nível profissional orquestrada com Docker Compose, composta por 3 serviços interdependentes:
1. **API Node.js Express** (localizada em `api/`) customizada com rotas `/health` e `/visitas`.
2. **Banco de Dados PostgreSQL 16** com `healthcheck` ativo via `pg_isready` e volume para persistência dos dados.
3. **Interface Web pgAdmin 4** para administração gráfica do banco de dados na porta 8080.

## Estrutura
- `api/`: Subdiretório contendo o código fonte, Dockerfile, package.json e .dockerignore da API.
- `docker-compose.yml`: Orquestração dos 3 serviços na rede `app-net`.
- `.env` e `.env.example`: Variáveis de ambiente (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `PGADMIN_EMAIL`, `PGADMIN_PASS`).
- `README.md`: Instruções de uso.

## Endpoints
- `GET http://localhost:3000/`: Hello from Docker!
- `GET http://localhost:3000/health`: Retorna `{"status":"ok"}`
- `GET http://localhost:3000/visitas`: Insere e contabiliza visitas no PostgreSQL

## pgAdmin (Porta 8080)
- Acesse `http://localhost:8080` com as credenciais do `.env`.
