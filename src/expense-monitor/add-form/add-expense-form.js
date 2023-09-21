import React, { useState } from "react";
import "./add-expense-form.css";

export default function AddExpenseForm( props) {
  const [title, setTitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setDate] = useState("");

  const titleUpdation = (event) => {
    setTitle(event.target.value);
  };
  const amountUpdation = (event) => {
    setamount(event.target.value);
  };
  const dateUpdation = (event) => {
    setDate(event.target.value);
  };

  const myExpensesUpdation = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
   props.onSaveExpenseData(expenseData);


  };
  return (
    <div className="input-container">
      <form onSubmit={myExpensesUpdation}>
        <input
          type="text"
          id="expenseTitle"
          name="expenseTitle"
          placeholder="Expense Title"
          value={title}
          onChange={titleUpdation}
        />
        <input
          type="text"
          id="expenseAmount"
          name="expenseAmount"
          placeholder="Expense Amount"
          value={amount}
          onChange={amountUpdation}
        />
        <input
          type="date"
          id="dateOfExpense"
          name="dateOfExpense"
          min="2020-01-01"
          max="2024-01-31"
          placeholder="Date of Expense"
          value={date}
          onChange={dateUpdation}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}
