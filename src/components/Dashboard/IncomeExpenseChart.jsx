import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function IncomeExpenseChart({ summary }) {
  const data = [
    {
      name: "Income",
      Amount: summary.income,
    },
    {
      name: "Expense",
      Amount: summary.expenses,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-pink-100 h-[420px]">
      <h2 className="text-xl font-bold text-purple-700 mb-4">
        Income vs Expenses
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="Amount"
            fill="#A855F7"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

IncomeExpenseChart.propTypes = {
  summary: PropTypes.shape({
    income: PropTypes.number.isRequired,
    expenses: PropTypes.number.isRequired,
  }).isRequired,
};

export default IncomeExpenseChart;