# 👥 Sistema de Cadastro de Usuários

Projeto desenvolvido para praticar o desenvolvimento Full-stack, integrando uma aplicação React moderna no Front-end com uma API Node.js/Express e Banco de Dados PostgreSQL no Back-end utilizando Prisma ORM. A aplicação permite o cadastro, listagem e remoção de usuários de forma dinâmica e em tempo real.

## 🛠️ Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## 📚 Conceitos praticados

- Consumo de APIs REST (Axios, requisições HTTP GET, POST e DELETE)
- Gerenciamento de estados com React (useState, useEffect)
- Manipulação de formulários e eventos no Front-end
- Construção de rotas e manipulação de JSON no Back-end com Express
- Conexão e mapeamento de banco de dados relacional com Prisma ORM
- Hospedagem e deploy de serviços (Render)

## 💻 Sobre o projeto

A proposta foi criar um sistema web completo de gestão de utilizadores. Através de uma interface limpa e estilizada com CSS personalizado, o utilizador consegue registar novos perfis informando nome, idade e e-mail, visualizar todos os registos cadastrados numa base de dados em nuvem e eliminá-los sempre que necessário através de um botão com ícone interativo.

## 🔍 Funcionalidades

- Registo de novos utilizadores com nome, idade e e-mail
- Listagem automática de todos os utilizadores guardados na base de dados
- Exclusão de registos de forma dinâmica com confirmação imediata na interface
- Comunicação assíncrona entre o Front-end em React e a API REST hospedada no Render
- Tratamento de CORS e integração com PostgreSQL via Prisma

## 🚀 Como executar

### Pré-requisitos
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- PostgreSQL

### 1. Clone o projeto

```bash
git clone [https://github.com/o-teu-utilizador/o-teu-repositorio.git](https://github.com/o-teu-utilizador/o-teu-repositorio.git)
cd o-teu-repositorio
```

### 2. Back-end
```bash
cd server
npm install
```
Crie o arquivo `.env` com sua conexão PostgreSQL:
```env
DATABASE_URL="sua_url_do_postgresql"
```
Depois:
```bash
npx prisma db push
npm run start
```

### 3. Front-end
Em outro terminal:
```bash
cd user-manager
npm install
npm run dev
```

### 4. Acesse
Abra no navegador:
```text
http://localhost:5173
```

💡 Mantenha o Back-end e o Front-end rodando ao mesmo tempo.
