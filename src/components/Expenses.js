import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })



    return (

        <div>
            <Card className="expenses">

                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses = {filteredExpenses} />
                <ExpensesList items = {filteredExpenses}/>


            </Card>

        </div>

    );

}
export default Expenses;