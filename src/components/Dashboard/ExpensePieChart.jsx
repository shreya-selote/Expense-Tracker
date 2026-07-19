import PropTypes from "prop-types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ExpensePieChart({ transactions }) {
  const expenseTransactions = transactions.filter(
    (item) => item.type === "Expense"
  );

  const categoryData = [];

  expenseTransactions.forEach((transaction) => {
    const existing = categoryData.find(
      (item) => item.name === transaction.category
    );

    if (existing) {
      existing.value += Number(transaction.amount);
    } else {
      categoryData.push({
        name: transaction.category,
        value: Number(transaction.amount),
      });
    }
  });

  const COLORS = [
    "#ff3c9d",
    "#6d2fff",
    "#b2b3e4",
    "#A855F7",
    "#fc85c3",
    "#C084FC",
    "#7b4dc9",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 border border-pink-100 h-[420px]">
      <h2 className="text-xl font-bold text-purple-700 mb-4">
        Expenses by Category
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

ExpensePieChart.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default ExpensePieChart;