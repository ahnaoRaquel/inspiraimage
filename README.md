# Inspiraimage

Este projeto é uma aplicação completa composta por um backend (API) e um frontend (UI), orquestrados via Docker para facilitar o desenvolvimento e implantação.

## 🚀 Tecnologias Utilizadas

### Backend (inspiraimageapi)
- **Java 17**
- **Spring Boot 4.0.1**
- **Spring Security** (com JWT para autenticação)
- **Spring Data JPA**
- **PostgreSQL** (Banco de dados relacional)
- **Maven** (Gerenciador de dependências)

### Frontend (inspiraimageui)
- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS** (Estilização)
- **Formik & Yup** (Gerenciamento e validação de formulários)

### Infraestrutura
- **Docker & Docker Compose**
- **pgAdmin 4** (Interface para gerenciamento do banco de dados)

## 🛠️ Como rodar a aplicação

Para subir todo o ecossistema da aplicação, você só precisa ter o Docker e o Docker Compose instalados em sua máquina.

1. Navegue até a pasta raiz do projeto onde se encontra o arquivo `docker-compose.yml`.
2. Execute o seguinte comando:

```bash
docker compose up --build
```

Este comando irá:
- Iniciar o banco de dados PostgreSQL.
- Iniciar o pgAdmin.
- Compilar e rodar o backend (Spring Boot).
- Compilar e rodar o frontend (Next.js).

## 🔌 Acessos e Portas

Após a inicialização bem-sucedida, você poderá acessar os serviços nos seguintes endereços:

- **Frontend (UI):** [http://localhost:3000](http://localhost:3000)
- **Backend (API):** [http://localhost:8080](http://localhost:8080)
- **pgAdmin:** [http://localhost:15432](http://localhost:15432)
  - **Email:** `admin@admin.com`
  - **Senha:** `admin`

## 📂 Estrutura do Projeto

- `/inspiraimageapi`: Código fonte do backend.
- `/inspiraimageui`: Código fonte do frontend.
- `/data`: Volume local para persistência de dados do PostgreSQL.
- `docker-compose.yml`: Arquivo de orquestração dos containers.