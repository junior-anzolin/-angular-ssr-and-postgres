# Angular Server Side and PostgreSQL

Projeto base para trabalhar com Angular Server Side e PostgreSQL.

### Executar projeto

- Git clone
- Execute o comando `npm install`
- Execute o comando `docker compose up -d`
- Execute o comando `npm run dev:ssr`

### Lista de APIs pré existentes

- GET `/api/user/get`

### Guia de desenvolvimento

O projeto foi preparado para trabalhar de forma modular, temos a seguinte estrutura de arquivos

- `src`: Projeto front end
- `server`: Projeto back end
  - `database`
    - `connection.ts`: Arquivo onde esta a configuração do banco de dados
    - `entities`: Pasta onde fica as entidades do TypeORM
      - `user.entity.ts`
  - `routes`: Pasta onde esta localizada os módulos de rotas
    - `index.ts`: Arquivo onde esta sendo inicializada as rotas
    - `user.routes.ts`: Arquivo modelo de como deve ser feita as rotas
  - `utils`
    - `routes.ts`: Modulo base para ser utilizado dentro dos arquivos de rotas
