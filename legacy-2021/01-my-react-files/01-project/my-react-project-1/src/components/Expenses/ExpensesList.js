import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = props => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }
    return (
        <ul className="expenses-list">
            {props.expenses.map(expense => <ExpenseItem key={expense.id} myTitle={expense.title} myAmount={expense.amount} myDate={expense.date} />)}
        </ul>
    );
};

export default ExpensesList;