import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const AddTransaction = ({ setTransactionArr }) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const [optionId, setOptionId] = useState("");
  //   const transactionObj = [{ id: nanoid(), type: "income", amount: 12 }];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const transactionObj = {
      id: nanoid(2),
      title: titleInput,
      amount: parseInt(amountInput),
      type: optionId,
    };

    setTransactionArr((prevValue) => [...prevValue, transactionObj]);
    setTitleInput("");
    setAmountInput("");
    setOptionId("");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div
          className="Add-control  flex flex-col  border-2 border-solid
        h-full border-black m-10 p-5"
        >
          <h1 className="font-bold text-2xl ">Add Transaction</h1>
          <label htmlFor="title">Title</label>
          <input
            className="w-1/2 mx-auto border-2"
            type="text"
            placeholder="Title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <label htmlFor="title">Amount</label>
          <input
            className="w-1/2 mx-auto border-2"
            type="number"
            placeholder="Title"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
          />
          <label htmlFor="title">Type</label>
          <select
            className="w-1/2 mx-auto border-2 "
            value={optionId}
            onChange={(e) => setOptionId(e.target.value)}
          >
            <option></option>
            <option>Income</option>
            <option>Expense</option>
          </select>
          <button
            className="bg-blue-500 w-1/4 mx-auto my-8 font-bold "
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
