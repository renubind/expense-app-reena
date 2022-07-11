import React from "react";

const TransactionCal = ({ incomeAmount, expenseAmount, balanceAmount }) => {
  return (
    <>
      <div className="transaction-cal flex flex-row justify-between items-center w-1/2 mx-auto my-5">
        <div className="bg-green-200 border-2 border-solid border-green-500 w-1/3 rounded-lg p-2">
          <p className="">Your Balance</p>
          <p className="">Rs {balanceAmount}</p>
        </div>

        <div className="bg-blue-200 border-2 border-solid border-blue-500 w-1/3 rounded-lg p-2">
          <p className="">Your Income</p>
          <p className="">Rs {incomeAmount}</p>
        </div>

        <div className="bg-purple-200 border-2 border-solid border-purple-500 w-1/3 rounded-lg p-2">
          <p className="">Your Expenses</p>
          <p className="">Rs {expenseAmount}</p>
        </div>
      </div>
    </>
  );
};

export default TransactionCal;
