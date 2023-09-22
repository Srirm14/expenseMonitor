import "./App.css";
import { useState } from "react";
import { ExpenseItem } from "./expense-monitor/feature-expense-item/expense-item";
import { ExpenseAdd } from "./expense-monitor/feature-expense-add/expense-add";
import ExpenseMonitorList from './expense-monitor/expense-monitor-list';


function App() {
  const initialexpenseState = [
    {
      id: 1,
      title: "Hostel Rent",
      amount: "10000 INR",
      date: new Date(2020, 9, 14),
    },
    {
      id: 2,
      title: "Mess Fees",
      amount: "5000 INR",
      date: new Date(2021, 3, 18),
    },
    {
      id: 3,
      title: "Petrol",
      amount: "3000 INR",
      date: new Date(2022, 6, 20),
    },
    {
      id: 4,
      title: "eggs",
      amount: "300 INR",
      date: new Date(2022, 6, 20),
    },
    {
      id: 5,
      title: "shoes",
      amount: "800 INR",
      date: new Date(2023, 1, 20),
    },
  ];
  const [expenseData, setExpenseData] = useState(initialexpenseState);

  const addedExpenseHandler = (addedExpenses) => {
    setExpenseData((prevState) => {
      return [...prevState, addedExpenses];
    });
    console.log(expenseData);
  };

  return (
    <ExpenseMonitorList>
      <div className="app-bg-standard">
        <div class="header">Expense List</div>
        <div className="expense-add">
          <ExpenseAdd onAddExpenses={addedExpenseHandler} />
        </div>
        <ExpenseItem myExpenses={expenseData} />
      </div>
    </ExpenseMonitorList>
  );
}

export default App;
