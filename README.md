# 🔒 Next.js JWT & Cookie Authentication


<h2 align="center">
  🔧 <b>Tech Stack</b> ⚙️
</h2>

<p align="center">
  <a href="https://nextjs.org/" target="_blank">
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.1.7-000000?logo=next.js&logoColor=white&style=for-the-badge">
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white&style=for-the-badge">
  </a>
  


  <a href="https://tailwindcss.com/" target="_blank">
    <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind%20CSS-3.4.1-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge">
  </a>


  <a href="https://jotai.org/" target="_blank">
    <img alt="Jotai" src="https://img.shields.io/badge/Jotai-2.12.2-646CFF?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJTMi42MjcgMjQgMTIgMjRzMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMHpNNC4zIDUuMzA3bDcuMDUgNy4wNTRMNy4wNSAxNC4zN2wtMi43NS0yLjc1TDAgMTJsNi4xOTUgNi4xOTUgMi43NS0yLjc1IDIuNyAyLjc1TDEyIDI0bDYuMTk1LTYuMTk1LTIuNzUtMi43NS0yLjc1IDIuNzUtNC4zLTQuM0wxOS43IDUuMzA3IDEyIDIuNzVsLTcuNyAyLjU1N3oiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==&logoColor=white&style=for-the-badge">
  </a>

  <a href="https://jwt.io/" target="_blank">
    <img alt="JWT" src="https://img.shields.io/badge/JWT-9.0.2-8A2BE2?logo=jsonwebtokens&logoColor=white&style=for-the-badge">
  </a>
</p>

This project demonstrates a simple user authentication system using **Next.js 15** with **JWT (JSON Web Token)** for **authentication** and cookies for session management. It includes basic functionality for user registration, login, and protected routes. 

## Key Features ✨

- 🔐 JWT Authentication with HttpOnly Cookies
- 🛡️ Protected Routes using Middleware
- 📦 State Management with React Context
- 📱 Responsive UI with Tailwind CSS
- 📑 Form Validation & Server Actions
- 🔄 CRUD Operations with API Routes
- 🧩 Modular Component Architecture
- ✅ Full TypeScript Support

## Project Structure 📂
```
┏━━ 📁 nextjs-jwt-cookie-authentication/
┃
┣━ 📄 .env.example                # Environment variables template
┣━ 📁 public/                     # Static assets
┗━ 📁 src/                        # Source code
   │
   ├─ 📄 middleware.ts            🔐 Authentication middleware
   │
   ├─ 📁 actions/                 ⚡ Server actions
   │  ├─ 📄 formActions.ts        📋 Form handling logic
   │  ├─ 📄 isLogin.ts            🔒 Authentication check
   │  └─ 📄 postActions.ts        📮 Post-related operations
   │
   ├─ 📁 app/                     🏠 Application core
   │  │
   │  ├─ 📁 api/                  🌐 API endpoints
   │  │  └─ 📁 auth/              🔑 Authentication routes
   │  │     ├─ 📁 login/          🔓 Login endpoint
   │  │     │  └─ 📄 route.ts
   │  │     └─ 📁 signup/         📝 Registration endpoint
   │  │        └─ 📄 route.ts
   │  │
   │  ├─ 📁 context/              🧠 Application state
   │  │  └─ 📄 CoockiesProvider.tsx 🍪 Cookie management
   │  │
   │  ├─ 📁 posts/                📚 Post management
   │  │  └─ 📁 [id]/              #️⃣ Dynamic post routes
   │  │     └─ 📄 page.tsx
   │  │
   │  └─ 📁 users/                👥 User management
   │
   └─ 📁 components/              🧩 Reusable UI components
      ├─ 📁 Buttons/              🕹️ Interactive elements
      │  └─ 📄 LikeButton.tsx     ❤️ Like button component
      │
      ├─ 📁 Header/               🔖 Navigation header
      │  └─ 📄 Header.tsx
      │
      └─ 📁 Footer/               🦶 Page footer
         └─ 📄 index.tsx
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AbbasRostami/NextJS-JWT-Cookie-Authentication.git
cd NextJS-JWT-Cookie-Authentication
```

### 2️⃣ Install dependencies

```
yarn install  # or npm install
```

### 3️⃣ Set your JWT_SECRET in the .env file:
Create a **.env.local** file and copy the values from **.env.example**, then update them with your credentials.
```bash
# Create environment file
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the project
```
yarn dev  # or npm run dev
```

Application will be running at: http://localhost:3000


## 🏗️ Core Architecture

### 🔄 Authentication Flow
```mermaid
sequenceDiagram
    participant User
    participant Server
    participant Middleware
    participant Context

    User->>Server: Submit Credentials
    Server->>Server: Validate Credentials
    Server-->>User: Generate JWT
    Server->>User: Set HttpOnly Cookie
    User->>Middleware: Request Protected Route
    Middleware->>Server: Validate Token
    Server-->>Middleware: Validation Result
    Middleware->>Context: Update Auth State
    Context-->>User: Grant Access
```

## 🧩 Key Components

### 🍪 `CoockiesProvider.tsx`
**Core Responsibilities**:
- 🔄 State Management for authentication cookies
- 🛡️ Context Provider for global auth access
- 🔒 Secure cookie operations (get/set/remove)

### 🚧 `middleware.ts`
**Security Features**:
- 🔐 Route protection & access control
- ✅ JWT validation & token verification
- 👮 Role-based authorization system

---

## 📡 API Endpoints

| Endpoint            |  Method  |            Description          |
|---------------------|----------|---------------------------------|
| `/api/auth/login`   |  `POST`  | User login with JWT issuance    |
| `/api/auth/signup`  |  `POST`  | New user registration           |



## 🔐 Protected Routes

Some routes (**/posts**, **/users**) are **protected** and require authentication. Middleware in **middleware.ts** handles access control.

## 📜 License

This project is open-source and available under the **MIT License**.

---

**Happy Coding!** 🚀  
**Developed with ❤️ by [Abbas Rostami](https://github.com/AbbasRostami)**  

[![GitHub Stars](https://img.shields.io/github/stars/AbbasRostami/NextJS-JWT-Cookie-Authentication?style=for-the-badge&logo=github&label=Stars)](https://github.com/AbbasRostami/NextJS-JWT-Cookie-Authentication/stargazers)
