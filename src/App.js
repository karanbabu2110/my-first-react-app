import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const  App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 298.67,
      date: new Date(2021, 12, 28),
    },
    { id: "e2", title: "Grocery", amount: 68.75, date: new Date(2022, 2, 15) },
    {
      id: "e3",
      title: "Shopping",
      amount: 354.05,
      date: new Date(2022, 4, 25),
    },
    {
      id: "e4",
      title: "Electronics",
      amount: 234,
      date: new Date(2022, 9, 20),
    },
  ];

  // return React.createElement('div', {className:"App"},
  //   React.createElement('p',{},"Hello"),
  //   React.createElement(Expenses,{items: expenses})
  //   );
  //Above is the code which gets created automatically by JSX.

  return (
    <div className="App">
    <NewExpense/>
    <Expenses items={expenses}></Expenses>
    </div>

  );
}

export default App;
