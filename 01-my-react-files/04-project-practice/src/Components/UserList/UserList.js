import UserItem from "./UserItem";

import styles from './UserList.module.css';

const UserList = props => {

    console.log(props);

    //key={props.id} onDelete={props.onDeleteItem}

    return (
        <ul className={styles['user-list-flex']}>
            <p>Click on a name to delete it</p>
            {props.listOfUsers.map(user => <UserItem key={props.id} userData={user} onDeleteUser={props.onDeleteUser} />)}
        </ul>
    );
};


export default UserList;