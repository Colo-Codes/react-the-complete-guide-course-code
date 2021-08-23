import UserItem from "./UserItem";

import styles from './UserList.module.css';

const UserList = props => {

    console.log(props);

    return (
        <ul className={styles['user-list-flex']}>
            <UserItem userData={props.userData} />
        </ul>
    );
};


export default UserList;