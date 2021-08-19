import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = event => {
        // setEnteredTitle(event.target.value);

        // setUserInput({
        //     enteredTitle: event.target.value,
        //     enteredAmount: userInput.enteredAmount,
        //     enteredDate: userInput.enteredDate
        // });

        setUserInput({
            ...userInput,
            enteredTitle: event.target.value // Overwriting the enteredTitle property
        });

        console.log(userInput);
    };

    const amountChangeHandler = event => {
        // setEnteredAmount(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
        console.log(userInput);
    };

    const dateChangeHandler = event => {
        // setEnteredDate(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
        console.log(userInput);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;