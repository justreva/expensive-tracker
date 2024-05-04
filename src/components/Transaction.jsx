import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={
        transaction.amount < 0 ? "list__item_negative" : "list__item_positive"
      }
    >
      <div className="description">
        <h4>{transaction.text}</h4>
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>
      <div className="close-container">
        <button
          className="close"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
