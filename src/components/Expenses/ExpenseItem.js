import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
};
export default ExpenseItem;
