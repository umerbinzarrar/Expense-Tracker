import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandeler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandeler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandeler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandeler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandeler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2024-01-01' max='2025-12-31' value={enteredDate} onChange={dateChangeHandeler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>


    );
}
export default ExpenseForm;