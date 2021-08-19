import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const mySaveExpenseDataHandler = (myEnteredExpenseData) => {
        const expenseData = { ...myEnteredExpenseData, id: Math.random().toString() };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onMySaveExpenseData={mySaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;