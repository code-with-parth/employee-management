# 📋 Employee Management System (Full Stack CRUD)

![React](https://img.shields.io/badge/Frontend-ReactJS-61DBFB?style=for-the-badge&logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Backend-NodeJS-3C873A?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Framework-ExpressJS-black?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/Database-MySQL-00618A?style=for-the-badge&logo=mysql&logoColor=white)

A **Full Stack Employee Management System** built using **React.js**, **Node.js + Express.js**, and **MySQL**.  
This project demonstrates a CRUD (Create, Read, Update, Delete) application with form validation, REST API integration, and responsive UI.

---

## ✨ Features

### 🔹 Frontend (React.js)
- Employee Dashboard
- Add, Edit, and Delete Employee records
- List view with table format
- Axios for API requests
- Basic form validation

### 🔹 Backend (Node.js + Express.js)
- REST API Endpoints:
  - `GET /employees` → All employees
  - `GET /employees/:id` → Single employee
  - `POST /employees` → Create employee
  - `PUT /employees/:id` → Update employee
  - `DELETE /employees/:id` → Delete employee
- MySQL database integration with `mysql2`
- Structured with Controllers & Routes
- Error handling for invalid requests

### 🔹 Database (MySQL)
**Table: `employees`**
| Column       | Type         | Attributes               |
|--------------|--------------|--------------------------|
| id           | INT          | PRIMARY KEY, AUTO_INCREMENT |
| name         | VARCHAR(255) | NOT NULL                 |
| email        | VARCHAR(255) | UNIQUE, NOT NULL         |
| designation  | VARCHAR(255) | NOT NULL                 |
| salary       | FLOAT        | NOT NULL                 |
| date_joined  | DATE         | NOT NULL                 |

---

## 🛠️ Tech Stack
**Frontend:** React.js, Axios, Bootstrap/Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MySQL  
**Other Tools:** Nodemon, CORS

---

## 📂 Project Structure
```
employee-management/
│
├── backend/          # Node.js + Express API
│   ├── controllers/  # Route handlers
│   ├── routes/       # API routes
│   ├── db.js         # Database connection
│   └── server.js     # Entry point
│
├── frontend/         # React app
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Pages
│   │   └── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/code-with-parth/employee-management.git
cd employee-management
```

---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_db
PORT=5000
```

Start backend server:
```bash
npm run dev
```

---

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

---

### 4️⃣ Database Setup (MySQL)
Run these SQL commands:
```sql
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    designation VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    date_joined DATE NOT NULL
);
```

---

## 🚀 Run the Application
- **Backend API:** http://localhost:5000  
- **Frontend UI:** http://localhost:3000

---

## 📜 License
This project is licensed under the **MIT License**.
