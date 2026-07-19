# Expense Tracker

Expense Tracker is a responsive web application built using React, Vite, and Tailwind CSS. It helps users manage their daily income and expenses by allowing them to add, edit, delete, search, filter, and export transactions.

The application stores all data in the browser using Local Storage, so transactions remain available even after refreshing the page.

---

## Features

- Add new income and expense transactions
- Edit existing transactions
- Delete transactions with confirmation
- Search transactions by title
- Filter transactions by category
- Filter transactions by transaction type
- Filter transactions by month
- Dashboard with financial summary
- Monthly summary section
- Expense Pie Chart
- Income vs Expense Chart
- Export transactions to CSV
- Responsive user interface
- Local Storage support

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- Recharts
- React Icons
- UUID

---

## Folder Structure

```text
src
│
├── components
│   ├── dashboard
│   ├── layout
│   └── transactions
│
├── data
│   └── categories.js
│
├── utils
│   ├── calculations.js
│   └── exportCSV.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
```

### Open the project

```bash
cd expense-tracker
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## Project Usage

1. Add a new transaction.
2. Select whether it is Income or Expense.
3. Choose a category.
4. Select a date.
5. Save the transaction.
6. View updated summary cards and charts.
7. Search or filter transactions.
8. Edit or delete transactions whenever needed.
9. Export filtered transactions as a CSV file.

---

## Project Structure

The project is divided into reusable React components.

- Dashboard components display financial summaries and charts.
- Transaction components manage CRUD operations.
- Utility functions perform calculations and CSV export.
- Category data is stored separately for easy maintenance.

---

## Future Improvements

- User Authentication
- Backend Integration
- Database Support
- Budget Planning
- Dark Mode
- PDF Export
- Analytics Dashboard

---

## Author

Shreya Selote

