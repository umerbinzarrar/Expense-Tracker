import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";


const dumm_expenses = [
  {id: 'u1', title:"Burger", amount:150 , date: new Date(2025,3,26)},
  {id: 'u2', title:"Shave", amount:25 , date: new Date(2025,1,15)},
  {id: 'u3', title:"Fuel", amount:250 , date: new Date(2025,5,24)},
  {id: 'u4', title:"Car Insurance", amount:250 , date: new Date(2025,1,5)},
];
function App() {

const [expenses, setExpenses] = useState(dumm_expenses);

const addExpenseHandler = expense =>{
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
  // expenses.push(expense);
  // console.log('in App.js');
  // console.log(expense);
};

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenses = {expenses} ></Expenses>
    </div>
  );
}

export default App;
