import styles from './UserItem.module.css';

const UserItem = props => {

    const deleteUserHandler = () => {
        props.onDeleteUser(props.userData.id);
    }

    return (
        <li className={styles.item} onClick={deleteUserHandler}>{props.userData.name}, age {props.userData.age}</li>
    );
};

export default UserItem;