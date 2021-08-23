import styles from './UserNew.module.css';
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserNew = props => {

    const [inputValue, setInputValue] = useState('');

    let state = { name: '', age: '' };

    const inputChangeHandler = e => {
        e.target.type === 'text'
            ? state.name += e.target.value
            : state.age += e.target.value;
    };

    const submitHandler = e => {
        e.preventDefault();

        // setInputValue('');

        console.log(e.target.type);

        props.addNewUser({ name: state.name, age: state.age, id: Math.random().toString() });

    };

    return (
        <Card myClassName={styles['card-tweak']}>
            <form className={styles['form-flex']} onSubmit={submitHandler}>
                <h1>Add a new user to the list</h1>
                <label htmlFor="user-name">User name</label>
                <input id="user-name" type="text" onChange={inputChangeHandler} value={state.name}></input>
                <label htmlFor="user-age">User age (in years)</label>
                <input id="user-age" type="number" onChange={inputChangeHandler}></input>
                <Button type="submit" value="Add new user" />
            </form>
        </Card>
    );
};

export default UserNew;