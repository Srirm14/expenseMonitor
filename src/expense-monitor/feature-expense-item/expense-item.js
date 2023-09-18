import React from "react";
import ExpenseDate from "../feature-expense-date/expense-date";
import styles from "./expense-item.css"; // Import the CSS module

export function ExpenseItem(props) {
  return (
    <div className={styles["expense-item-container"]}>
      {props.myExpenses.map((expense) => (
        <div key={expense.id} className={styles["expense-details"]}>
          <ExpenseDate dateOfExpense={expense.date} />
          <div className={styles["expense-title"]}>{expense.title}</div>
          <div className={styles["expense-amount"]}>{expense.amount}</div>
        </div>
      ))}
    </div>
  );
}
