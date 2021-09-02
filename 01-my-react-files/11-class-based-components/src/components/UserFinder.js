import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: '',
        };
    }

    // Whenever the component renders for the first time the componentDidMount() method will be called
    componentDidMount() {
        // Example: send HTTP request...
        this.setState({ filteredUsers: DUMMY_USERS });
    }

    // Whenever the component is re-evaluated (e.g. due to a state change), the componentDidUpdate() method will be called
    componentDidUpdate(prevProps, prevState) {
        // Checking if a specific state changed
        if (prevState.searchTerm !== this.state.searchTerm) {
            // Triggering another state change
            this.setState({ filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)) });
        }
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
};

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

export default UserFinder;