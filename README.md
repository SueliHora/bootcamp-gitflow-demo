# bootcamp-orion

Repositório de entregas práticas e demonstração de fluxo Gitflow do Bootcamp Orion.

## Estrutura do Repositório

### 1. Fundamentos de Gitflow (`src/`)

- Aplicação Node.js inicial utilizada na prática de fluxo de branches e convenção de commits.
- Função `multiplicar(valor1, valor2)`: realiza a multiplicação de dois valores (`src/index.js`).

### 2. Conteinerização com Docker (`docker/`)

- **[Exercício 1 — Hello Container](docker/exercicio-1/README.md):** Aplicação básica em Node.js (`node:20-alpine`) com Dockerfile otimizado e orquestração via Docker Compose.
- **[Exercício 2 — Stack API + Banco de Dados](docker/exercicio-2/README.md):** Stack multi-container com API Express e PostgreSQL, persistência via volume nomeado (`pgdata`), variáveis de ambiente e rotas `/health` e `/visitas`.
- **[Exercício 3 — Ambientes de Desenvolvimento e Produção](docker/exercicio-3/README.md):** Dockerfile multi-stage (`base`, `dev`, `prod`) separando live-reload com `nodemon` em desenvolvimento e imagem enxuta com usuário não-root (`node`) em produção.
- **[Exercício Extra — Stack Completa de 3 Serviços](docker/exercicio-extra/README.md):** Orquestração na rede `app-net` integrando API Node.js Express, PostgreSQL 16 com `healthcheck` (`pg_isready`) e interface web pgAdmin 4.

### 3. Banco de Dados Relacional e NoSQL (`banco-de-dados/`)

- **Ambiente Docker (`banco-de-dados/docker-compose.yml`):** Orquestração dos serviços `db_postgres` (PostgreSQL 15) e `db_mongo` (MongoDB 7) com volumes persistentes.
- **Exercício 1 (`banco-de-dados/exercicio-1/`):** Modelagem relacional com criação das tabelas `cursos` e `alunos`, Chave Primária, Chave Estrangeira e teste de integridade referencial.
- **Exercício 2 (`banco-de-dados/exercicio-2/`):** Consultas SQL com `INNER JOIN`, filtros (`WHERE`), ordenação (`ORDER BY`) e agregações (`GROUP BY`, `COUNT`).
- **Exercício 3 (`banco-de-dados/exercicio-3/`):** Operações CRUD básicas no MongoDB (`insertMany`, `find`, `updateOne`, `deleteOne`).
- **Exercício 4 (`banco-de-dados/exercicio-4/`):** Modelagem flexível no MongoDB com arrays, documentos aninhados (`comentarios` e `revisao`) e consultas avançadas.

## Branches

- `main`: branch principal de entrega consolidada
- `develop`: integração das features (branch padrão de desenvolvimento)
- `stage`: validação (QA/PO)
- `production`: código entregue ao utilizador final

## Fluxo

- Padrão: `feature/*` → `develop` → `stage` → `production`
- Urgente: `hotfix/*` → `production` e `develop`
- Bug em homologação: `bugfix/*` → `stage` e `develop`

## Padrão de commits

`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

## Exemplos de uso

### Módulo inicial (Node.js)

```bash
node src/index.js
```

### Módulo de Docker (exemplo no Exercício Extra)

```bash
cd docker/exercicio-extra
docker compose up --build -d
```

### Módulo de Banco de Dados (PostgreSQL e MongoDB)

```bash
cd banco-de-dados
docker compose up -d```
