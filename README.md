# MSA Perfil Client
Projeto Client para o microservice MSA-igrejas

# 1. informações
Projeto Client para utilização das operações disponibilizadas pela API msa-igrejas.

Para saber quais operações e payloads assim como seus objetos de entrada e de saída, utilize o arquivo `swagger-igrejas.yml`.

# 2. Tecnologias

- [Git (Gitbash)](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## 2.1 Banco de dados
- N/A

## 2.2 Dependencias JavaScript
- Axios.js
- Nodemon.js
- ng-fwpa-core (Package do proprio projeto)

## 2.3Dependencias Microservice
    N/A

## 2.4 Auth
    Bearer Token (ng-msa-pa-token)

# 3. Instalação/Builder
Para trabalhar em ambinete de desenvolvimento, é necessário ter instalado os softwares relacionados no item 2 (Tecnologias), Utilize o Git para clonar o projeto do repositório, e os comando do NPM para executar a instalação dos módulos de dependências do Javascipt.

Para o trabalho de Implementação de código, vc pode utlizar o [VSCode](https://code.visualstudio.com/) com IDE de trabalho.

# 4. Outras informações

## 4.1 URLs:

## 4.2
- @author: Pablo Flanmarion
- email: pabloflanmarion@gmail.com

## 4.3 Modo de Usar:
Exemplo
~~~JavaScript
const igrejasClient = require("ng-msa-pa-igrejas-client");

igrejasClient
  .getAll(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInN5c3RlbSI6IlBFUkZJTCIsImlhdCI6MTYzMTA0MjYwNSwiZXhwIjoxNjMxMTI5MDA1fQ.8I7tlbHQwQcPpTzaZypQPiQBeFnW6_L8fXiTdTa7oYw",
    "administrador"
  )
  .then((res) => {
    console.log("Exemplo getAll Igrejas");
    console.log(res.data.perfil);
  })
  .catch((err) => {
    console.log(err);
  });
~~~
