import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    const saveExpenseHandler = (enteredData)=>{
        const expenseData = {
            ...enteredData
        };

        props.onAddExpense(expenseData)

    }



    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpense = {saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;