import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(myPropsObject) {
    return (
        <Card className="expense-item">
            <ExpenseDate mySubDate={myPropsObject.myDate} />
            <div className="expense-item__description">
                <h2>{myPropsObject.myTitle}</h2>
                <div className="expense-item__price">{`$${myPropsObject.myAmount}`}</div>
            </div>
        </Card>);
}

export default ExpenseItem;