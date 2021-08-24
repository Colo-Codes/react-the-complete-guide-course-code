import { useState } from 'react';

import styles from './UserNew.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserNew = props => {

    const [inputNameValue, setInputNameValue] = useState('');
    const [inputAgeValue, setInputAgeValue] = useState('');

    const inputChangeHandler = e => {
        e.target.type === 'text'
            ? setInputNameValue(e.target.value)
            : setInputAgeValue(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        if (inputNameValue.trim().length === 0 || inputAgeValue.trim().length === 0) {
            console.log('Input should not be empty');
            return;
        }
        if (+inputAgeValue < 1) {
            console.log('Age should be greater than 0');
            return;
        }

        setInputNameValue('');
        setInputAgeValue('');

        props.onAddNewUser({ name: inputNameValue, age: inputAgeValue, id: Math.round(Math.random() * 1000 + 1000).toString() });

    };

    return (
        <Card myClassName={styles['card-tweak']}>
            <form className={styles['form-flex']} onSubmit={submitHandler}>
                <h1>Add a new user to the list</h1>
                <label htmlFor="user-name">User name</label>
                <input id="user-name" type="text" onChange={inputChangeHandler} value={inputNameValue}></input>
                <label htmlFor="user-age">User age (in years)</label>
                <input id="user-age" type="number" onChange={inputChangeHandler} value={inputAgeValue}></input>
                <Button type="submit">Add new user</Button>
            </form>
        </Card>
    );
};

export default UserNew;