import Card from "../UI/Card";
import UserItem from "./UserItem";

import styles from './UserList.module.css';

const UserList = props => {
    // console.log(props);
    return (
        <Card>
            <ul className={styles['user-list-flex']}>
                <p>Click on a name to delete it</p>
                {props.listOfUsers.map(user => <UserItem key={user.id} userData={user} onDeleteUser={props.onDeleteUser} />)}
            </ul>
        </Card>
    );
};


export default UserList;