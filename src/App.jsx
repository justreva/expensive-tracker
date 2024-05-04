import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransactions } from "./components/AddTransactions";

import { GlobalProvider } from "./context/GlobalContext";



function App() {
  return (
    <GlobalProvider>
      <div className="tracker">
        <div className="tracker__content">
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransactions />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
