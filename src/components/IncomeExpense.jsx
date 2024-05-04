import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);
	const income = amounts.filter(item => item > 0).reduce((acc, elem) => (acc += elem), 0);
	const expense = amounts.filter(item => item < 0).reduce((acc, elem) => (acc += elem), 0);
  return (
    <div className="inc-exp">
      <div>
        <h4>Income</h4>
        <p className="plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
