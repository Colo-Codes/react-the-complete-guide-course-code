import { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
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
                {/* {filteredExpenses.length === 0
                    ? <p>No expenses found.</p>
                    : filteredExpenses.map(expense => <ExpenseItem key={expense.id} myTitle={expense.title} myAmount={expense.amount} myDate={expense.date} />)} */}
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} myTitle={expense.title} myAmount={expense.amount} myDate={expense.date} />)} */}
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div >
    );
};

export default Expenses;