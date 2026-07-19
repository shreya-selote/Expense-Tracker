import { useEffect, useState } from "react";
import categories from "../../data/categories";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

import { FaMoneyBillWave, FaCalendarAlt, FaPen, FaList } from "react-icons/fa";

const initialForm = {
  title: "",
  amount: "",
  type: "",
  category: "",
  date: "",
  notes: "",
};

function TransactionForm({
  addTransaction,
  editingTransaction,
  updateTransaction,
}) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingTransaction) {
      setFormData(editingTransaction);
    }
  }, [editingTransaction]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.type ||
      !formData.category ||
      !formData.date
    ) {
      alert("Please fill all required fields.");

      return;
    }

    if (editingTransaction) {
      updateTransaction(formData);
    } else {
      addTransaction({
        id: uuid(),
        ...formData,
      });
    }

    setFormData(initialForm);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="flex items-center gap-2 font-semibold mb-2">
          <FaPen className="text-purple-600" />
          Transaction Title *
        </label>

        <input
          type="text"
          name="title"
          placeholder="Example: Grocery shopping"
          value={formData.title}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-purple-200
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-purple-500
            transition
          "
        />
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-2">
          <FaMoneyBillWave className="text-purple-600" />
          Amount *
        </label>

        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-purple-200
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-purple-500
          "
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="flex items-center gap-2 font-semibold mb-2">
            <FaList className="text-purple-600" />
            Transaction Type *
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-purple-200
              px-4
              py-3
              bg-white
              focus:ring-2
              focus:ring-purple-500
              outline-none
            "
          >
            <option value="">Select Type</option>

            <option value="Income">Income</option>

            <option value="Expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2">
            Category *
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="
              w-full
              rounded-xl
              border
              border-purple-200
              px-4
              py-3
              bg-white
              focus:ring-2
              focus:ring-purple-500
              outline-none
            "
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-2">
          <FaCalendarAlt className="text-purple-600" />
          Date *
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-purple-200
            px-4
            py-3
            focus:ring-2
            focus:ring-purple-500
            outline-none
          "
        />
      </div>

      <div>
        <label className="font-semibold mb-2 block">Notes (Optional)</label>

        <textarea
          rows="3"
          name="notes"
          placeholder="Add notes..."
          value={formData.notes}
          onChange={handleChange}
          className="
            w-full
            rounded-xl
            border
            border-purple-200
            px-4
            py-3
            resize-none
            focus:ring-2
            focus:ring-purple-500
            outline-none
          "
        />
      </div>

      <button
        type="submit"
        className="
          w-full
          bg-gradient-to-r
          from-fuchsia-600
          to-purple-700
          text-white
          py-3
          rounded-xl
          font-bold
          text-lg
          shadow-lg
          hover:scale-[1.02]
          hover:shadow-xl
          transition
        "
      >
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}

TransactionForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,

  updateTransaction: PropTypes.func.isRequired,

  editingTransaction: PropTypes.object,
};

export default TransactionForm;
