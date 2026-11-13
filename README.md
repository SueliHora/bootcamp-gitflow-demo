# bootcamp-orion

Repositório de entregas práticas do Bootcamp Orion, estruturado seguindo o fluxo **Gitflow** e **Conventional Commits**.

## Conteúdo do Repositório

| Pasta | Conteúdo | Documentação |
| :--- | :--- | :--- |
| `src/` | Fundamentos de Git, Gitflow e aplicação base em Node.js | [src/README.md](src/README.md) |
| `docker/` | Conteinerização com Dockerfile, multi-stage build e Docker Compose | [docker/README.md](docker/README.md) |
| `banco-de-dados/` | Modelagem relacional, consultas SQL (PostgreSQL) e NoSQL (MongoDB) | [banco-de-dados/README.md](banco-de-dados/README.md) |

## Modelo de Branches

- `main`: branch principal de produção (código consolidado e aprovado)
- `develop`: branch de integração das funcionalidades em desenvolvimento
- `stage`: ambiente de validação (QA/PO)
- `production`: código entregue ao usuário final
- `feature/*`: novas entregas ou melhorias, criadas a partir de `develop` e integradas de volta em `develop`
- `hotfix/*`: correções urgentes, criadas a partir de `main` e integradas em `main` e `develop`
- `bugfix/*`: correções de homologação, integradas em `stage` e `develop`

## Fluxo de Trabalho (Gitflow)

1. Criar uma branch isolada (`feature/*`) a partir de `develop` para cada entrega.
2. Realizar commits seguindo o padrão semântico e enviar para o repositório remoto.
3. Abrir Pull Request apontando para `develop` solicitando revisão das mentoras.
4. Após aprovação e merge em `develop`, consolidar a entrega em `main`.

## Padrão de Commits (Conventional Commits)

Formato: `tipo: descrição curta` ou `tipo(escopo): descrição curta`

- `feat`: nova funcionalidade ou entrega de exercício
- `fix`: correção de bug
- `docs`: alterações exclusivas de documentação
- `style`: ajustes de formatação sem alteração de lógica
- `refactor`: refatoração de código sem alterar comportamento
- `perf`: melhorias de desempenho
- `test`: adição ou ajuste de testes
- `build`: alterações de build ou dependências
- `ci`: configurações de integração contínua
- `chore`: tarefas de manutenção e configuração de ambiente
- `revert`: reversão de commit anterior