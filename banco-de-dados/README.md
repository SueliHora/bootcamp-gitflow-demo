# Módulo 3 — Banco de Dados Relacional e NoSQL

Ambiente conteinerizado com **PostgreSQL 15** e **MongoDB 7** acompanhado de scripts práticos de modelagem relacional, integridade referencial, consultas SQL avançadas, operações CRUD e consultas em documentos aninhados.

## Estrutura

```text
banco-de-dados/
├── README.md
├── docker-compose.yml      # Serviços db_postgres (5432) e db_mongo (27017)
├── exercicio-1/            # DDL, PK/FK, carga inicial e teste de integridade (exercicio-1.sql)
├── exercicio-2/            # Consultas com INNER JOIN, WHERE, ORDER BY e GROUP BY (exercicio-2.sql)
├── exercicio-3/            # Operações CRUD básicas no MongoDB (exercicio-3.js)
└── exercicio-4/            # Schema flexível, arrays e documentos aninhados no MongoDB (exercicio-4.js)
```

## Como Executar

### 1. Subir os bancos de dados

```bash
cd banco-de-dados
docker compose up -d
```

### 2. Executar os exercícios de PostgreSQL

```bash
docker exec -i db_postgres psql -U postgres -d orion_db < exercicio-1/exercicio-1.sql
docker exec -i db_postgres psql -U postgres -d orion_db < exercicio-2/exercicio-2.sql
```

### 3. Executar os exercícios de MongoDB

```bash
docker exec -i db_mongo mongosh < exercicio-3/exercicio-3.js
docker exec -i db_mongo mongosh < exercicio-4/exercicio-4.js
```
