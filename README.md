<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="src/assets//svg/avanti-logo.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Logo do Projeto"/>

# GITHUB-SEARCH-AVANTI

<em></em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/amaralltx/github-search-avanti?style=default&logo=git&logoColor=white&color=0080ff" alt="último-commit">
<img src="https://img.shields.io/github/languages/top/amaralltx/github-search-avanti?style=default&color=0080ff" alt="linguagem-principal">
<img src="https://img.shields.io/github/languages/count/amaralltx/github-search-avanti?style=default&color=0080ff" alt="quantidade-linguagens">

</div>
<br>

---

## Índice

- [Índice](#índice)
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
    - [Índice do Projeto](#índice-do-projeto)
- [Primeiros Passos](#primeiros-passos)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação](#instalação)
    - [Uso](#uso)

---

## Visão Geral

O projeto **GitHub Search Avanti** é uma aplicação feita para a Avanti Innovation Class, cujo objetivo era desenvolver uma aplicação em React que permita ao usuário buscar perfis no GitHub e exibir, de forma visualmente atraente e fiel ao layout definido no Figma, as principais informações de cada usuário (nome, foto de perfil e bio). A interface deve incluir:

   - Um campo de busca para digitar o nome de usuário do GitHub.

   - Consumo da API pública do GitHub para obter os dados do perfil.

   - Tratamento de erros, exibindo mensagem amigável caso o perfil não seja encontrado.

   - Estilização conforme o design do Figma, a qual foi realizada utilizando Tailwindcss.

   - (Opcional) Melhorias de experiência, como indicadores de carregamento e efeitos visuais.

---

## Estrutura do Projeto

```sh
└── github-search-avanti/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── assets
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   ├── components
    │   │   └── Loading
    │   │       └── LoadingSpinner.jsx
    │   └── main.jsx
    └── vite.config.js
```

### Índice do Projeto
                                    
## Primeiros Passos

### Pré-requisitos

Este projeto requer as seguintes dependências:

- **Linguagem de Programação:** JavaScript
- **Gerenciador de Pacotes:** Npm, Yarn

### Instalação

Construa o projeto **GitHub Search Avanti** a partir do código-fonte e instale as dependências:

1. **Clone o repositório:**

    ```sh
    ❯ git clone https://github.com/amaralltx/github-search-avanti
    ```

2. **Navegue até o diretório do projeto:**

    ```sh
    ❯ cd github-search-avanti
    ```

3. **Instale as dependências:**

    **Usando [npm](https://www.npmjs.com/):**

    ```sh
    ❯ npm install
    ```

    **Usando [yarn](https://yarnpkg.com/):**

    ```sh
    ❯ yarn install
    ```

### Uso

Execute o projeto com:

**Usando [npm](https://www.npmjs.com/):**
```sh
npm start
```
**Usando [yarn](https://yarnpkg.com/):**
```sh
yarn start
```

[voltar-ao-topo]: https://img.shields.io/badge/-VOLTAR_AO_TOPO-151515?style=flat-square

---
