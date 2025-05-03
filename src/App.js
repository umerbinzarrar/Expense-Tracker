import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
const expenses = [
  {title:"Car Insurance", amount:250 , date: new Date(2025,1,5)},
  {title:"Shave", amount:25 , date: new Date(2025,1,15)},
  {title:"Burger", amount:150 , date: new Date(2025,3,26)},
  {title:"Fuel", amount:250 , date: new Date(2025,5,24)},
];

const addExpenseHandler = expense =>{
  console.log('in App.js');
  console.log(expense);
}

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenses = {expenses} ></Expenses>
    </div>
  );
}

export default App;
