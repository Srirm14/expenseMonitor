import "./App.css";
import { useState } from "react";
import { ExpenseItem } from "./expense-monitor/feature-expense-item/expense-item";
import { ExpenseAdd } from "./expense-monitor/feature-expense-add/expense-add";
function App() {
  const initialexpenseState = [
    {
      id: 1,
      title: "Hostel Rent",
      amount: "10000 INR",
      date: new Date(2023, 6, 14),
    },
    {
      id: 2,
      title: "Mess Fees",
      amount: "5000 INR",
      date: new Date(2023, 6, 18),
    },
    {
      id: 3,
      title: "Petrol",
      amount: "3000 INR",
      date: new Date(2023, 6, 20),
    },
  ];
  const [expenseData, setExpenseData] = useState(initialexpenseState);

  const addedExpenseHandler = (addedExpenses) => {
    setExpenseData((prevState)=>{
      return [...prevState,addedExpenses];
    });
    console.log(expenseData);
  };

  return (
    <div className="app-bg-standard">
      My Expense List
      <div className="expense-add">
        <ExpenseAdd onAddExpenses={addedExpenseHandler} />
      </div>
      <ExpenseItem myExpenses={expenseData} />
    </div>
  );
}

export default App;
