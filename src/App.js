
import ExpenseItem from './components/ExpenseItem';
function App() {
    const expenses = [
      {id: 'e1', title:'Car Insurance', amount: 298.67, date: new Date(2021,12,28)},
      {id: 'e2', title:'Grocery', amount: 68.75, date: new Date(2022,2,15)},
      {id: 'e3', title:'Shopping', amount: 354.05, date: new Date(2022,4,25)},
      {id: 'e4', title:'Electronics', amount: 234, date: new Date(2022,9,20)}
    ]
  return (
    <div className="App">
    <p>Hello</p>
    <ExpenseItem expense={expenses[0]}></ExpenseItem>
    <ExpenseItem expense={expenses[1]}></ExpenseItem>
    <ExpenseItem expense={expenses[2]}></ExpenseItem>
    <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </div>

  );
}

export default App;
