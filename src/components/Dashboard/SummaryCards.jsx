import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/calculations";

import {
  FaArrowUp,
  FaArrowDown,
  FaWallet,
  FaReceipt,
} from "react-icons/fa";


function SummaryCards({ summary }) {


  const cards = [

    {
      title: "Total Income",
      value: formatCurrency(summary.income),
      icon: <FaArrowUp />,
      bg: "from-green-400 to-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },


    {
      title: "Total Expenses",
      value: formatCurrency(summary.expenses),
      icon: <FaArrowDown />,
      bg: "from-red-400 to-red-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },


    {
      title: "Current Balance",
      value: formatCurrency(summary.balance),
      icon: <FaWallet />,
      bg: "from-purple-500 to-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },


    {
      title: "Transactions",
      value: summary.totalTransactions,
      icon: <FaReceipt />,
      bg: "from-pink-400 to-pink-600",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },

  ];



  return (

    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6
    ">


      {cards.map((card)=>(


        <div
          key={card.title}
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            border
            border-purple-100
          "
        >


          <div className="flex justify-between items-center">


            <div>

              <p className="
                text-gray-500
                font-medium
                text-sm
              ">
                {card.title}
              </p>


              <h2 className="
                text-2xl
                font-extrabold
                text-gray-800
                mt-3
              ">
                {card.value}
              </h2>


            </div>



            <div
              className={`
                ${card.iconBg}
                ${card.iconColor}
                p-4
                rounded-2xl
                text-xl
              `}
            >
              {card.icon}
            </div>


          </div>



          <div
            className={`
              mt-6
              h-2
              rounded-full
              bg-gradient-to-r
              ${card.bg}
            `}
          />


        </div>


      ))}


    </div>

  );
}



SummaryCards.propTypes = {

  summary: PropTypes.shape({

    income: PropTypes.number.isRequired,

    expenses: PropTypes.number.isRequired,

    balance: PropTypes.number.isRequired,

    totalTransactions: PropTypes.number.isRequired,

  }).isRequired,

};


export default SummaryCards;