import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
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

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value // Overwriting the enteredTitle property
        // });

        // As react schedules the state updates, we need to make sure we are working with the latest state.
        // This is why we should use the following code, using the prevState as input for the new state:
        setUserInput(prevState => {
            return { ...prevState, enteredTitle: event.target.value }
        });
        // console.log(userInput);
    };

    const amountChangeHandler = event => {
        setUserInput(prevState => {
            return { ...prevState, enteredAmount: event.target.value }
        });
        // console.log(userInput);
    };

    const dateChangeHandler = event => {
        setUserInput(prevState => {
            return { ...prevState, enteredDate: new Date(event.target.value) }
        });
        // console.log(userInput);
    };

    const submitHandler = event => {
        event.preventDefault();

        let expenseData = {
            title: '',
            amount: '',
            date: ''
        };
        ({ enteredTitle: expenseData.title, enteredAmount: expenseData.amount, enteredDate: expenseData.date } = { ...userInput });

        console.log(expenseData);

        props.onMySaveExpenseData(expenseData); // This is coming rom the NewExpense component

        props.onFormClick('submitted');

        setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
    };

    const cancelClickHandler = () => {
        props.onFormClick('canceled');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={cancelClickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;