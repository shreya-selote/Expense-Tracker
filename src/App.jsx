import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Layout/Navbar";
import Dashboard from "./components/Dashboard/dashboard";
import MonthlySummary from "./components/Dashboard/MonthlySummary";
import ExpensePieChart from "./components/Dashboard/ExpensePieChart";
import IncomeExpenseChart from "./components/Dashboard/IncomeExpenseChart";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionTable from "./components/Transactions/TransactionTable";
import SearchFilter from "./components/Transactions/SearchFilter";
import DeleteModel from "./components/Transactions/DeleteModel";
import { calculateSummary } from "./utils/calculations";
import { exportToCSV } from "./utils/exportCSV";

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [month, setMonth] = useState("");
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [deleteModelOpen, setDeleteModelOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);
  const formRef = useRef(null);

  function addTransaction(transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  function editTransaction(transaction) {
    setEditingTransaction(transaction);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function updateTransaction(updatedTransaction) {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );

    setEditingTransaction(null);
  }

  function deleteTransaction(transaction) {
    setTransactionToDelete(transaction);
    setDeleteModelOpen(true);
  }

  function confirmDelete() {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== transactionToDelete.id),
    );

    setDeleteModelOpen(false);
    setTransactionToDelete(null);
  }

  function closeDeleteModel() {
    setDeleteModelOpen(false);
    setTransactionToDelete(null);
  }

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setType("All");
    setMonth("");
  }

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const summary = calculateSummary(transactions);

  const filteredTransactions = transactions.filter((transaction) => {
    const titleMatch = transaction.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || transaction.category === category;

    const typeMatch = type === "All" || transaction.type === type;

    const monthMatch = !month || transaction.date.startsWith(month);

    return titleMatch && categoryMatch && typeMatch && monthMatch;
  });

  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6 space-y-8">
       
        <Dashboard summary={summary} />

        <MonthlySummary transactions={transactions} />

        <section ref={formRef} className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            {editingTransaction ? "Edit Transaction" : "Add Transaction"}
          </h2>

          <TransactionForm
            addTransaction={addTransaction}
            editingTransaction={editingTransaction}
            updateTransaction={updateTransaction}
          />
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <ExpensePieChart transactions={transactions} />
          <IncomeExpenseChart summary={summary} />
        </section>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
          month={month}
          setMonth={setMonth}
          clearFilters={clearFilters}
        />

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-purple-700">
              Transactions ({filteredTransactions.length} of{" "}
              {transactions.length})
            </h2>

            <button
              onClick={() => exportToCSV(filteredTransactions)}
              className="bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
            >
              📄 Export CSV
            </button>
          </div>

          <TransactionTable
            transactions={filteredTransactions}
            editTransaction={editTransaction}
            deleteTransaction={deleteTransaction}
          />
        </section>

        <DeleteModel
          isOpen={deleteModelOpen}
          onClose={closeDeleteModel}
          onConfirm={confirmDelete}
        />
      </main>
    </div>
  );
}

export default App;
