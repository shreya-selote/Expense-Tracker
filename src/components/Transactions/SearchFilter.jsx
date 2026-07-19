import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import categories from "../../data/categories";

function SearchFilter({
  search,
  setSearch,

  category,
  setCategory,

  type,
  setType,

  month,
  setMonth,

  clearFilters,
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section
      className="
        bg-white
        rounded-3xl
        shadow-lg
        p-6
        border
        border-purple-100
      "
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className="
            flex-1
            relative
          "
        >
          <FaSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-purple-500
            "
          />

          <input
            type="text"
            placeholder="Search transaction..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-12
              pr-4
              py-3
              rounded-xl
              border
              border-purple-200
              focus:ring-2
              focus:ring-purple-500
              outline-none
            "
          />
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-600
            to-purple-700
            text-white
            font-semibold
            hover:scale-105
            transition
          "
        >
          <FaFilter />

          {showFilters ? "Hide Filters" : "Filters"}
        </button>
      </div>

      {showFilters && (
        <div
          className="
              grid
              md:grid-cols-4
              gap-4
              mt-6
              pt-6
              border-t
              border-purple-100
            "
        >
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
                rounded-xl
                border
                border-purple-200
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-purple-500
              "
          >
            <option value="All">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="
                rounded-xl
                border
                border-purple-200
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-purple-500
              "
          >
            <option value="All">All Types</option>

            <option value="Income">Income</option>

            <option value="Expense">Expense</option>
          </select>

          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="
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

          <button
            onClick={clearFilters}
            className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-pink-100
                text-purple-700
                font-semibold
                hover:bg-pink-200
                transition
              "
          >
            <FaTimes />
            Clear
          </button>
        </div>
      )}
    </section>
  );
}

SearchFilter.propTypes = {
  search: PropTypes.string.isRequired,

  setSearch: PropTypes.func.isRequired,

  category: PropTypes.string.isRequired,

  setCategory: PropTypes.func.isRequired,

  type: PropTypes.string.isRequired,

  setType: PropTypes.func.isRequired,

  month: PropTypes.string.isRequired,

  setMonth: PropTypes.func.isRequired,

  clearFilters: PropTypes.func.isRequired,
};

export default SearchFilter;
