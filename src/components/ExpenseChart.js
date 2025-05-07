import React from "react";
import Chart from "./Chart/Chart"
function ExpenseChart(props) {
    const datapoints = [
        {label: 'jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'jun', value: 0},
        {label: 'jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        datapoints[expenseMonth].value += expense.amount;
    }

    return <Chart datapoints = {datapoints}/>
}

export default ExpenseChart;