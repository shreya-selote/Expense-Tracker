import PropTypes from "prop-types";
import SummaryCards from "./SummaryCards";

function Dashboard({ summary }) {
  return (
    <section>
      <SummaryCards summary={summary} />
    </section>
  );
}

Dashboard.propTypes = {
  summary: PropTypes.shape({
    income: PropTypes.number.isRequired,
    expenses: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    totalTransactions: PropTypes.number.isRequired,
  }).isRequired,
};

export default Dashboard;