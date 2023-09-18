import React from "react";

export default function ExpenseDate(props) {
  const month = props.dateOfExpense.toLocaleString("en-US", { month: "long" });
  const day = props.dateOfExpense.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dateOfExpense.getFullYear();

  return (
    <div className="expense-date">
      <div className="month">{month}</div>
      <div className="date">{day}</div>
      <div className="year">{year}</div>
    </div>
  );
}
