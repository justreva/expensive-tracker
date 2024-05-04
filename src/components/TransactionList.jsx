import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (

    <div className="history">
      <h3>Transactions History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  );
};
