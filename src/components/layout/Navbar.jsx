import { FaWallet, FaCalendarAlt } from "react-icons/fa";

function Navbar() {

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <nav className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-700 text-white shadow-xl sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-4">

          <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow-lg hover:scale-110 transition">
            <FaWallet className="text-3xl" />
          </div>


          <div>

            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
              Expense Tracker
            </h1>

            <p className="text-purple-100 text-sm">
              Manage your money smarter
            </p>

          </div>

        </div>


        {/* Date Section */}

        <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl">

          <FaCalendarAlt className="text-xl"/>

          <div>
            <p className="text-xs text-purple-100">
              Today
            </p>

            <p className="text-sm font-semibold">
              {formattedDate}
            </p>

          </div>

        </div>


      </div>

    </nav>
  );
}

export default Navbar;