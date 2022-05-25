import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenses) => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString(),
    };
    prop.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
