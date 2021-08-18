import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(myPropsObject) {

    const [title, setTitle] = useState(myPropsObject.myTitle);

    const clickHandler = () => {
        console.log('Button clicked!');
        setTitle('Title updated!');
        console.log(title); // The update function doesn’t update the value right away
    };

    return (
        <Card className="expense-item">
            <ExpenseDate mySubDate={myPropsObject.myDate} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{`$${myPropsObject.myAmount}`}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>);
}

export default ExpenseItem;