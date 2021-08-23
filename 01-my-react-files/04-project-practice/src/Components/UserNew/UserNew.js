import styles from './UserNew.module.css';

const UserNew = props => {

    let name, age;

    const nameChangeHandler = e => {
        name = e.target.value
    };

    const ageChangeHandler = e => {
        age = e.target.value
    };

    const submitHandler = e => {
        e.preventDefault();
        props.addNewUser({ name: name, age: age, id: Math.random().toString() });
    };

    return (
        <form className={styles['form-flex']} onSubmit={submitHandler}>
            <label>User name</label>
            <input type="text" onChange={nameChangeHandler}></input>
            <label>User age</label>
            <input type="number" onChange={ageChangeHandler}></input>
            <button type="submit">Add new user</button>
        </form>
    );
};

export default UserNew;