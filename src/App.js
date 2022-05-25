import React, { useState } from "react";

import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const dummy_expenses = [
    { id: "e1", title: "Book", amount: 200, date: new Date(2022, 5, 15) },
    { id: "e2", title: "Laptop", amount: 900, date: new Date(2021, 2, 16) },
    { id: "e3", title: "Table", amount: 250, date: new Date(2020, 8, 14) },
    { id: "e4", title: "Grocery", amount: 150, date: new Date(2022, 5, 15) },
  ];
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
    // console.log(newExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
