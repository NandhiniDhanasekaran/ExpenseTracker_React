# 💰 Expense Tracker Application

A full-stack **Expense Tracker Application** built using **React, Spring Boot, and PostgreSQL**.

The application helps users manage personal expenses with CRUD operations, dashboard analytics, reports, filtering, and export functionality.

---

# 🚀 Project Overview

The Expense Tracker application allows users to:

- Create expenses
- View expenses
- Update expenses
- Delete expenses
- Track spending by category
- Analyze expenses using charts
- Generate reports
- Export expense data

This project demonstrates full-stack development using:

**React + Spring Boot + PostgreSQL**

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- Success and error messages
- Secure navigation flow


## 💵 Expense Management (CRUD)

Users can:

- Add new expenses
- View all expenses
- Edit existing expenses
- Delete expenses
- Track expenses by category


## 📊 Dashboard

The dashboard provides:

- Total Expenses summary
- Expense category overview
- Monthly expense visualization
- Recent transactions
- Expense statistics


Dashboard Components:

- Summary Cards
- Category Pie Chart
- Monthly Expense Chart
- Recent Expenses Table


## 📈 Reports

Reports provide detailed expense analysis:

- Filter expenses by date range
- Filter expenses by category
- Total expense calculation
- Average expense calculation
- Highest expense tracking


## 📄 Export Features

Users can export:

- Expense reports as PDF
- Expense data as Excel


## 🎨 User Interface

Application includes:

- Responsive Bootstrap design
- Professional dashboard cards
- Expense tables
- Charts
- Navigation menu
- User-friendly forms


---

# 🛠️ Technologies Used


## Frontend

- React.js
- Vite
- React Router
- Axios
- Bootstrap
- Recharts


## Backend

- Java
- Spring Boot
- Spring Data JPA
- REST APIs


## Database

- PostgreSQL


## Tools

- Git
- GitHub
- VS Code
- IntelliJ IDEA


---

# 🏗️ Application Architecture


```
React Frontend
      |
      |
    Axios
      |
      |
Spring Boot REST API
      |
      |
Spring Data JPA
      |
      |
PostgreSQL Database
```

---

# 📂 Project Structure


```
ExpenseTracker

│
├── expense_frontend
│
│   ├── src
│   │
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
│
└── expense_backend

    ├── Controller
    ├── Entity
    ├── Repository
    ├── Service
    └── ExpenseBackendApplication.java

```

---

# ▶️ How to Run the Application


## Frontend Setup


Clone repository:


```bash
git clone https://github.com/NandhiniDhanasekaran/ExpenseTracker_React.git
```


Navigate to frontend:


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


Frontend URL:


```
http://localhost:5175
```


---

# 🔗 Backend Setup


Spring Boot backend URL:


```
http://localhost:9243
```


Run Spring Boot application from IntelliJ IDEA.


---

# 🔌 REST API Endpoints


| Method | Endpoint | Description |
|---|---|---|
| GET | /api/expenses | Get all expenses |
| GET | /api/expenses/{id} | Get expense by ID |
| POST | /api/expenses | Create expense |
| PUT | /api/expenses/{id} | Update expense |
| DELETE | /api/expenses/{id} | Delete expense |


---


## 🗄️ Database

Database: PostgreSQL

Tables are created automatically using Spring Data JPA and Hibernate.

Main Entity:

- Expense

Features:

- Expense records
- Category tracking
- Date tracking
- Amount tracking


# 📸 Application Screenshot


<img width="1088" height="827" alt="Exportpdf png" src="https://github.com/user-attachments/assets/2bd60fc0-e336-4417-b54a-db8ce12698b9" />
<br><br>

<img width="1065" height="3147" alt="Reports png" src="https://github.com/user-attachments/assets/b42f9003-b73d-4661-836c-35289e128aa2" />
<br><br>


<img width="1065" height="3416" alt="Home png" src="https://github.com/user-attachments/assets/f5122de8-3a2d-475b-9a87-47b6495f73dd" />
<br><br>


<img width="1920" height="1080" alt="Register png" src="https://github.com/user-attachments/assets/f9ab5f69-3d28-4096-a442-63e95bdeb60a" />
<br><br>



---

# 👩‍💻 Author


## Nandhini Dhanasekaran

Full Stack Developer


### Skills

- React.js
- Java Spring Boot
- REST API
- C#
- ASP.NET MVC
- SQL Server
- PostgreSQL
- Git


---

# 📌 Future Enhancements


- JWT Authentication
- User-wise expense separation
- Pagination
- Search functionality
- Azure Deployment
- Docker Support
- Unit Testing


---

# ⭐ Project Highlights


This project demonstrates:


✅ Full Stack Development  
✅ React Component Architecture  
✅ Spring Boot REST API Development  
✅ PostgreSQL Database Integration  
✅ CRUD Operations  
✅ Dashboard Analytics  
✅ Charts and Reports  
✅ PDF and Excel Export  

