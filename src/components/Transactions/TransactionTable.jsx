import { FaTrash, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/calculations";
import { format } from "date-fns";

function TransactionTable({
  transactions,
  editTransaction,
  deleteTransaction,
}) {
 
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="sticky top-0 z-10">
          <tr className="bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white">
            <th className="px-5 py-4 text-left">Title</th>

            <th className="px-5 py-4 text-left">Amount</th>

            <th className="px-5 py-4 text-left">Category</th>

            <th className="px-5 py-4 text-left">Type</th>

            <th className="px-5 py-4 text-left">Date</th>

            <th className="px-5 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="6" className="px-5 py-4 align-middle">
                <div className="flex flex-col items-center py-10">
                  <p className="text-5xl mb-3">💸</p>

                  <h3 className="font-bold text-xl text-gray-700">
                    No Transactions Yet
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Add your transaction income or expense.
                  </p>
                </div>
              </td>
            </tr>
          ) : (
            transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b even:bg-pink-50 hover:bg-pink-100 transition duration-300"
              >
                <td className="px-5 py-4 align-middle">{item.title}</td>

                <td
                  className={`font-bold text-lg ${
                    item.type === "Income" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.type === "Income" ? "+" : "-"}
                  {formatCurrency(item.amount)}
                </td>

                <td>
                  <span className="bg-pink-100 text-purple-700 px-5 py-4 align-middle rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </td>

                <td className="px-5 py-4 align-middle">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                      item.type === "Income" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="px-5 py-4 align-middle text-gray-600">
                  {format(new Date(item.date), "dd MMM yyyy")}
                </td>

                <td className="px-5 py-4 align-middle">
                  <button
                    onClick={() => editTransaction(item)}
                    title="Edit"
                    className="mr-2 bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => deleteTransaction(item)}
                    title="Delete"
                    className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      category: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string,
    }),
  ).isRequired,
  editTransaction: PropTypes.func.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};

export default TransactionTable;
