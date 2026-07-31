# Expense Tracker Application

A full-stack Expense Tracker application built to manage personal expenses with a modern dashboard, reports, authentication, and CRUD functionality.

## 🚀 Project Overview

The Expense Tracker allows users to create, update, delete, and view expenses. It provides a dashboard with expense summaries, charts, recent transactions, and detailed reports with export options.

This project demonstrates full-stack development using React, Spring Boot, and PostgreSQL.

---

## ✨ Features

### Authentication

* User Registration
* User Login
* Professional success and error messages
* Secure user navigation

### Expense Management (CRUD)

* Create new expenses
* View all expenses
* Update existing expenses
* Delete expenses
* Category-based expense tracking

### Dashboard

* Total Expenses summary
* Expense categories overview
* Monthly expense visualization
* Recent expenses display

### Reports

* Filter expenses by:

  * Date range
  * Category
* Total amount calculation
* Average expense calculation
* Highest expense tracking

### Export Features

* Export expense reports as PDF
* Export expense data as Excel

### User Interface

* Responsive Bootstrap design
* Professional cards and tables
* Navigation menu
* User-friendly forms

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* React Router
* Axios
* Bootstrap
* Recharts

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs

### Database

* PostgreSQL

### Tools

* Git
* GitHub
* VS Code
* IntelliJ IDEA

---

## 📂 Project Structure

```
expense_frontend
│
├── src
│   ├── Components
│   │   ├── Navbar.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── RecentExpenses.jsx
│   │   ├── CategoryPieChart.jsx
│   │   └── MonthlyChart.jsx
│   │
│   ├── Pages
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CreateExpense.jsx
│   │   ├── EditExpense.jsx
│   │   ├── DeleteExpense.jsx
│   │   └── Reports.jsx
│   │
│   └── Services
│       └── ExpenseService.js
│
└── package.json
```

---

## ▶️ How to Run the Frontend

Clone the repository:

```bash
git clone https://github.com/NandhiniDhanasekaran/ExpenseTracker_React.git
```

Navigate to the project:

```bash
cd ExpenseTracker_React/expense_frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Application runs on:

```
http://localhost:5175
```

---

## 🔗 Backend API

Backend is developed using Spring Boot.

Backend URL:

```
http://localhost:9243
```

---

## 📸 Screenshots

Add screenshots here:

* Login Page
* Dashboard
* Expense Grid
* Reports Page

---

## 👩‍💻 Author

**Nandhini Dhanasekaran**

Full Stack Developer

Skills:

* React
* Java Spring Boot
* C#
* ASP.NET MVC
* SQL
* PostgreSQL

---

## 📌 Future Enhancements

* JWT Authentication
* User-wise expense separation
* Pagination
* Search functionality
* Deployment using Azure
