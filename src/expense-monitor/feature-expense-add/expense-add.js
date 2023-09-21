import React from "react";
import "./expense-add.css";

import AddExpenseForm from "../add-form/add-expense-form";

export function ExpenseAdd(props) {
  const saveExpenseDataHandler = (expenseData) => {
    const updatedExpenseData = {
      id: Math.floor(Math.random() * 1000),
      ...expenseData,
    };
   props.onAddExpenses(updatedExpenseData);
  };

  return (
    <div className="form-card-container">
      <AddExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
