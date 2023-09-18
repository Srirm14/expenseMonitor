import "./App.css";
import { ExpenseItem } from "./expense-monitor/feature-expense-item/expense-item";

function App() {
  const mockDataExpenses = [
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
  return(
    <div>
      My Expense List
       <ExpenseItem myExpenses={mockDataExpenses} />
    </div>
  );
}

export default App;
