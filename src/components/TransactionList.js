import React from "react";

const TransactionList = ({ transaction, deleteHandler }) => {
  const { id, title, amount, type } = transaction;
  return (
    <>
      <div className="border-2 border-black  mx-auto p-2 ">
        <h1>History</h1>
        <div className="Add-control font-bold  flex justify-between  border-2 border-solid border-black">
          <p>Title</p>
          <p>Amount</p>
          <p>Type</p>
        </div>
        <div className="Add-control  font-bold  flex justify-between border-2 border-solid border-black ">
          <p className="mx-10">{title}</p>
          <p>{amount}</p>
          <p>{type}</p>

          <button
            className="bg-red-600 font-bold "
            type="submit"
            onClick={() => deleteHandler(id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
