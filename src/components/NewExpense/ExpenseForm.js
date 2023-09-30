import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = () => {

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
//   const titleChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredTitle: event.target.value,
//       };
//     });
//   };
//   const amountChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredAmount: event.target.value,
//       };
//     });
//   };
//   const dateChangeHandler = (event) => {
//     setUserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredDate: event.target.value,
//       };
//     });
//   };
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

function titleChangeHandler(event) {
  setEnteredTitle(event.target.value);
}
function amountChangeHandler(event) {
  setEnteredAmount(event.target.value);
}
function dateChangeHandler(event) {
  setEnteredDate(event.target.value);
}
  return (
    <form>
      <div class="new-expense__controls">
        <div class="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div class="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div class="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2023-09-30"
            onChange={dateChangeHandler}
          />
        </div>
        <div class="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
