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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilter={onFilterHandler} selectedYear={filteredYear} />
                <ExpenseItem myTitle={props.expenses[0].title} myAmount={props.expenses[0].amount} myDate={props.expenses[0].date}></ExpenseItem>
                <ExpenseItem myTitle={props.expenses[1].title} myAmount={props.expenses[1].amount} myDate={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem myTitle={props.expenses[2].title} myAmount={props.expenses[2].amount} myDate={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem myTitle={props.expenses[3].title} myAmount={props.expenses[3].amount} myDate={props.expenses[3].date}></ExpenseItem>
            </Card>
        </div >
    );
};

export default Expenses;