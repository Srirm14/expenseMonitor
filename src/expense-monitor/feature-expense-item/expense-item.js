import React, { useState } from "react";
import ExpenseDate from "../feature-expense-date/expense-date";
import ExpenseFilter from "../feature-expense-filter/expense-filter";
import Card from "../ui-elements/card";
import "./expense-item.css";

export function ExpenseItem(props) {
  const [filteredDate, setFilteredDate] = useState("2020");

  const hiddenDates = ["2019", "2020", "2021", "2022", "2023"];

  const filteredHiddenDates = hiddenDates.filter(
    (date) => date !== filteredDate
  );

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
      <p>
        Data for year{" "}
        {filteredHiddenDates.length === 0
          ? filteredDate
          : filteredHiddenDates.slice(0, -1).join(", ") +
            " and " +
            filteredHiddenDates[filteredHiddenDates.length - 1]}{" "}
        are hidden.
      </p>
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
