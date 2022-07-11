import "./App.css";
import { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import TransactionCal from "./components/TransactionCal";
import Header from "./components/Header";
function App() {
  const initialTransaction = [
    { optionId: "INCOME", displayText: "Income" },
    { optionId: "EXPENSE", displayText: "Expense" },
  ];
  const [transactionArr, setTransactionArr] = useState([]);

  const deleteHandler = (id) => {
    const newDeleted = transactionArr.filter((item) => id !== item.id);
    setTransactionArr(newDeleted);
  };

  const handlerTotalExpense = () => {
    let expenseAmount = 0;
    transactionArr.forEach((element) => {
      if (element.type === initialTransaction[1].displayText) {
        expenseAmount += element.amount;
      }
    });
    return expenseAmount;
  };

  const handlerTotalIncome = () => {
    let incomeAmount = 0;
    transactionArr.forEach((element) => {
      if (element.type === initialTransaction[0].displayText) {
        incomeAmount += element.amount;
      }
    });
    return incomeAmount;
  };

  const handlerTotalBalance = () => {
    let balanceAmount = 0;
    let incomeAmount = 0;
    let expenseAmount = 0;

    transactionArr.forEach((element) => {
      if (element.type === initialTransaction[0].displayText) {
        incomeAmount += element.amount;
      } else {
        expenseAmount += element.amount;
      }
    });
    balanceAmount = incomeAmount - expenseAmount;
    return balanceAmount;
  };

  const incomeAmount = handlerTotalIncome();
  const expenseAmount = handlerTotalExpense();
  const balanceAmount = handlerTotalBalance();

  return (
    <>
      <div className="App">
        <Header />
        <TransactionCal
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
          balanceAmount={balanceAmount}
        />
        <div className="flex w-1/2 justify-between items-center mx-auto">
          <AddTransaction setTransactionArr={setTransactionArr} />

          <ul>
            {transactionArr.map((item) => {
              return (
                <TransactionList
                  key={item.id}
                  transaction={item}
                  deleteHandler={deleteHandler}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
