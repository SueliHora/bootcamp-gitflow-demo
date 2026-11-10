# bootcamp-gitflow-demo

Repositório de demonstração do fluxo Gitflow (projeto fictício).

## Branches

- `main`: branch inicial do repositório
- `develop`: integração das features (branch padrão)
- `stage`: validação (QA/PO)
- `production`: código entregue ao utilizador final

## Fluxo

- Padrão: `feature/*` → `develop` → `stage` → `production`
- Urgente: `hotfix/*` → `production` e `develop`
- Bug em homologação: `bugfix/*` → `stage` e `develop`

## Padrão de commits

`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

## Funções

- multiplicar(valor1, valor2): realiza a multiplicação de dois valores.

## Exemplo de uso

`node src/index.js`
