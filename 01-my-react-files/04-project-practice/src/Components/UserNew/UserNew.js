import styles from './UserNew.module.css';

const UserNew = props => {
    return (
        <form className={styles['form-flex']}>
            <label>User name</label>
            <input type="text"></input>
            <label>User age</label>
            <input type="number"></input>
            <button type="submit">Add new user</button>
        </form>
    );
};

export default UserNew;