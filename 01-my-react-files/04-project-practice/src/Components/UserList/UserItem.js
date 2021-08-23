import styles from './UserItem.module.css';

const UserItem = props => {
    return (
        <li className={styles.item}>{props.userData}</li>
    );
};

export default UserItem;