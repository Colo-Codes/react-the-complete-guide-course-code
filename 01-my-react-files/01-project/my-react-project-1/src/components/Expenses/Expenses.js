import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Filter/ExpensesFilter';

function Expenses(props) {
    let [filteredYear, setFilteredYear] = useState('2020');

    const onFilterHandler = (year) => {
        setFilteredYear(year);
        console.log('Expenses.js ->', filteredYear);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilter={onFilterHandler} selectedYear={filteredYear} />
                {/* We can use expressions inside JSX containing JavaScript code as well as React code (custom elements and props) */}
                {filteredExpenses.map(expense => <ExpenseItem key={expense.id} myTitle={expense.title} myAmount={expense.amount} myDate={expense.date} />)}
                {/* <ExpenseItem myTitle={props.expenses[0].title} myAmount={props.expenses[0].amount} myDate={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem myTitle={props.expenses[1].title} myAmount={props.expenses[1].amount} myDate={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem myTitle={props.expenses[2].title} myAmount={props.expenses[2].amount} myDate={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem myTitle={props.expenses[3].title} myAmount={props.expenses[3].amount} myDate={props.expenses[3].date}></ExpenseItem> */}
            </Card>
        </div >
    );
};

export default Expenses;