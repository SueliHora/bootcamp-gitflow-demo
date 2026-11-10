# Exercício 3 - Ambientes de Desenvolvimento e Produção (Bootcamp Orion)

Projeto configurado com múltiplos ambientes, separando as necessidades de desenvolvimento (live-reload com nodemon, mapeamento de código em volume) e produção (imagem otimizada multi-stage, remoção de devDependencies, usuário sem privilégios de root `node`).

## Estrutura de Arquivos
- `Dockerfile`: Dockerfile multi-stage contendo os alvos `base`, `dev` e `prod`.
- `Dockerfile.dev`: Dockerfile dedicado para ambiente de desenvolvimento.
- `Dockerfile.prod`: Dockerfile dedicado para ambiente de produção otimizado com multi-stage build.
- `docker-compose.dev.yml`: Compose para desenvolvimento (monta volume `./src:/app/src`, usa target `dev`, volume de banco `pgdata_dev`).
- `docker-compose.prod.yml`: Compose para produção (usa target `prod`, `restart: unless-stopped`, volume de banco `pgdata_prod`).
- `docker-compose.yml`: Compose padrão apontando para o ambiente de desenvolvimento.
- `package.json`: Dependências (`express`, `pg`) e devDependencies (`nodemon`).
- `src/index.js`: API com suporte a variáveis de ambiente e identificação de `NODE_ENV`.
- `.env` e `.env.example`: Configurações de porta e banco de dados.
- `.dockerignore`: Exclusão de arquivos voláteis.

## Como Executar (Informativo)

### Ambiente de Desenvolvimento (Live-reload)
```bash
docker compose -f docker-compose.dev.yml up --build
```
Altere arquivos em `src/` e observe o nodemon reiniciar o servidor automaticamente dentro do container sem necessidade de rebuild.

### Ambiente de Produção (Otimizado)
```bash
docker compose -f docker-compose.prod.yml up --build -d
```
Gera imagem enxuta e segura, sem código extra ou dependências de build.

