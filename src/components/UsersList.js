import React, {Component} from "react";
import PropTypes from "prop-types";
import {User} from "./User";

export class UsersList extends Component {
    static propTypes = {
        users: PropTypes.array
    };

    render() {
        const {users} = this.props;
        return (
            <div className='UsersList columns'>
                {
                    users.map(user => {
                        return (
                            <div key={user['login']['uuid']} className='UsersList-item column is-half is-12-mobile'>
                                <User
                                    cell={user.cell}
                                    dob={user.dob}
                                    email={user.email}
                                    gender={user.gender}
                                    id={user.id}
                                    location={user.location}
                                    name={user.name}
                                    nat={user.nat}
                                    phone={user.phone}
                                    picture={user.picture}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
