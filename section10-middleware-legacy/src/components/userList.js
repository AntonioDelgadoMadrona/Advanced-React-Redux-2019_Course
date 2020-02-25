import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const userList = () => {

    useEffect(() => {
        const users = [
            { name: 'Toni' },
            { name: 'Michel' },
            { name: 'Juan' },
        ];
        props.fetchUser(users);
    }, []);

    const renderUser = () => {
        return (
            <div className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Cheese Factory</p>
                <a className="btn btn-primary">Email</a>
            </div>
        )
    };

    return (
        <div>
            {props.users.map(renderUser)}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = {
    fetchUser: actions.fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(userList);
