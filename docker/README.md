# Módulo 2 — Conteinerização com Docker

Exercícios práticos de criação de imagens otimizadas com Alpine Linux, persistência de dados com volumes nomeados, variáveis de ambiente, builds multi-stage (`dev` e `prod`) e orquestração multi-container com Docker Compose.

## Estrutura

```text
docker/
├── README.md
├── exercicio-1/        # Hello Container (Node.js + Alpine)
├── exercicio-2/        # Stack API Node.js + PostgreSQL com volume
├── exercicio-3/        # Multi-stage build (Desenvolvimento vs. Produção)
└── exercicio-extra/    # Stack completa (API + PostgreSQL 16 + pgAdmin 4)
```

## Índice de Exercícios

| Exercício | Descrição | Documentação |
| :--- | :--- | :--- |
| **Exercício 1** | API Express em imagem `node:20-alpine` orquestrada via Docker Compose | [exercicio-1/README.md](exercicio-1/README.md) |
| **Exercício 2** | Integração API + PostgreSQL com persistência em volume (`pgdata`) e rota `/visitas` | [exercicio-2/README.md](exercicio-2/README.md) |
| **Exercício 3** | Ambientes separados com live-reload (`nodemon`) em `dev` e usuário não-root (`node`) em `prod` | [exercicio-3/README.md](exercicio-3/README.md) |
| **Exercício Extra** | Orquestração de 3 serviços na rede `app-net` com `healthcheck` e interface pgAdmin 4 | [exercicio-extra/README.md](exercicio-extra/README.md) |

## Exemplo de Execução (Exercício Extra)

```bash
cd docker/exercicio-extra
docker compose up --build -d
```

- **API:** `http://localhost:3000/health`
- **pgAdmin 4:** `http://localhost:8080`