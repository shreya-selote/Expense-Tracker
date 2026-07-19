import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/calculations";
import { FaArrowTrendUp, FaArrowTrendDown, FaPiggyBank } from "react-icons/fa6";

function MonthlySummary({ transactions }) {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthlyTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);

    return (
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear
    );
  });

  const monthlyIncome = monthlyTransactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const monthlyExpense = monthlyTransactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const monthlySavings = monthlyIncome - monthlyExpense;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-pink-100">

      <h2 className="text-2xl font-bold text-purple-700 mb-6">
        Monthly Summary
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="bg-green-50 rounded-2xl p-5 text-center">
          <FaArrowTrendUp className="text-green-600 text-3xl mx-auto mb-3" />

          <h3 className="text-gray-600 font-medium">
            Monthly Income
          </h3>

          <p className="text-2xl font-bold text-green-700 mt-2">
            {formatCurrency(monthlyIncome)}
          </p>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 text-center">
          <FaArrowTrendDown className="text-red-600 text-3xl mx-auto mb-3" />

          <h3 className="text-gray-600 font-medium">
            Monthly Expenses
          </h3>

          <p className="text-2xl font-bold text-red-700 mt-2">
            {formatCurrency(monthlyExpense)}
          </p>
        </div>

        <div className="bg-purple-50 rounded-2xl p-5 text-center">
          <FaPiggyBank className="text-purple-700 text-3xl mx-auto mb-3" />

          <h3 className="text-gray-600 font-medium">
            Monthly Savings
          </h3>

          <p className="text-2xl font-bold text-purple-700 mt-2">
            {formatCurrency(monthlySavings)}
          </p>
        </div>

      </div>

    </div>
  );
}

MonthlySummary.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default MonthlySummary;