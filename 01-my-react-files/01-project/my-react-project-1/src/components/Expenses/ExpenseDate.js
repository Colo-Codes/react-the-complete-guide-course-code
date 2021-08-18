import './ExpenseDate.css';

function ExpenseDate(mySubPropsObject) {
    const month = mySubPropsObject.mySubDate.toLocaleString('en-AU', { month: 'long' });
    const day = mySubPropsObject.mySubDate.toLocaleString('en-AU', { day: '2-digit' });
    const year = mySubPropsObject.mySubDate.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;