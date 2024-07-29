import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [newExpenseState, setState] = useState('button');

    const mySaveExpenseDataHandler = (myEnteredExpenseData) => {
        const expenseData = { ...myEnteredExpenseData, id: Math.random().toString() };
        props.onAddExpense(expenseData);
    };

    // Initial state: render "Add new expense" button
    // On click: render form
    //      On click on "add expense" button on form -> render "Add new expense" button
    //      On lick on "cancel" button on form -> render "Add new expense" button

    const newExpenseClickHandler = () => {
        setState('form');
    };

    const formClickHandler = (buttonClicked) => {
        if (buttonClicked)
            setState('button');
    };

    let newExpenseRender;

    if (newExpenseState === 'button') {
        newExpenseRender = <button onClick={newExpenseClickHandler}>Add New Expense</button>;
    } else {
        newExpenseRender = <ExpenseForm onMySaveExpenseData={mySaveExpenseDataHandler} onFormClick={formClickHandler} />;
    }

    return (
        <div className="new-expense">
            {newExpenseRender}
        </div>
    );
}

export default NewExpense;