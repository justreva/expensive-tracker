import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddTransactions = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  function submitTransaction(e){
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  return (
    <div className="transactions-form">
      <h3>Add Transactions</h3>
      <form onSubmit={e => submitTransaction(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
						onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className="add" type="submit">Add Transactions</button>
      </form>
    </div>
  );
};
