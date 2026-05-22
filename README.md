# AngularLandpageIfsuldestemg

# 🚀 Landing Page do TCC - Arquitetura de Microsserviços

Este repositório contém uma **Landing Page / Portfólio** desenvolvida para apresentação do Trabalho de Conclusão de Curso (TCC) em **Sistemas de Informação**. A página demonstra conceitos de engenharia de software, migração de monolito para microsserviços e aplica na prática:

- **HTML5 semântico**
- **Bootstrap 5** (grid, navbar, cards, sistema responsivo)
- **Angular 20** (standalone components, TypeScript tipado)
- **Sistema de filtros interativo** (backend/frontend) implementado em TypeScript

A página será útil para divulgação do projeto, apresentação para banca ou composição de portfólio profissional.

---

## 📋 Funcionalidades da Página

- **Navbar responsiva** com três seções: *Sobre o Projeto*, *Funcionalidades* e *Contato*.
- **Seção de apresentação**: título, subtítulo, descrição do TCC e uma ilustração SVG comparando arquitetura monolítica vs. microsserviços.
- **Cards dinâmicos** usando grid do Bootstrap (3 colunas no desktop, 2 em tablet, 1 em mobile).
- **Filtro em TypeScript** – botões para filtrar cards por:
  - Todos
  - Backend (tecnologias, testes, funcionalidades)
  - Frontend (Angular, interface)
- **Rodapé completo** com nome, semestre, curso, e-mail e links para GitHub/LinkedIn (fictícios ou reais).
- **Scroll suave** ao clicar nos links da navbar.

---

## 🛠️ Stack que serão utilizadas no Projeto (exibida na página)

| Tecnologia       | Versão      | Finalidade                         |
|-----------------|-------------|------------------------------------|
| Java             | 21+         | Backend dos microsserviços         |
| Spring Boot      | 3.x         | Framework REST e microsserviços    |
| Angular          | 19/20       | Frontend SPA (esta página)         |
| PostgreSQL       | 16+         | Banco de dados relacional          |
| Maven            | 3.9+        | Gerenciamento de dependências      |
| Docker / GitHub Actions | -    | CI/CD e containerização            |

> **Observação:** Esta landing page é apenas o frontend de apresentação. 

---

## 📦 Como Executar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Angular CLI](https://angular.io/cli) (versão 19)

```bash
npm install -g @angular/cli@20
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
