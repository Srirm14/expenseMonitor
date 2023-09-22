import React, { useState } from "react";
import ExpenseDate from "../feature-expense-date/expense-date";
import ExpenseFilter from "../feature-expense-filter/expense-filter";
import ExpenseChart from '../feature-expenses-chart/expenses-chart';

import Card from "../ui-elements/card";
import "./expense-item.css";

export function ExpenseItem(props) {
  const [filteredDate, setFilteredDate] = useState("Show All");

  const filteredExpense = props.myExpenses.filter((expenses) => {
    if (filteredDate !== "Show All") {
      return expenses.date.getFullYear().toString() === filteredDate;
    } else {
      return true;
    }
  });

  const dateFilterHandler = (selectedDate) => {
    setFilteredDate(selectedDate);
  };

  return (
    <Card>
      <ExpenseFilter
        selectedDate={filteredDate}
        onChangeDateFilter={dateFilterHandler}
      />
      <ExpenseChart myExpenses={props.myExpenses} />
      <div className="expense-item-wrapper">
        {filteredExpense.length ? (
          filteredExpense.map((expense, index) => (
            <div key={index} className={"expense-item-container"}>
              <div className={"expense-details"}>
                <ExpenseDate dateOfExpense={expense.date} />
              </div>
              <div className={"expense-details"}>
                <div className={"expense-title"}>{expense.title}</div>
              </div>
              <div className={"expense-details"}>
                <div className={"expense-amount"}>{expense.amount}</div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p> There are no expenses made on the selected year.</p>
          </div>
        )}
      </div>
    </Card>
  );
}
