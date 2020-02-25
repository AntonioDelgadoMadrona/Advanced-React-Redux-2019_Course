import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../actions';

const Header = props => {

    const { authenticated, authenticate } = props;

    const authButton = () => {
        if (authenticated) {
            return <button onClick={() => authenticate(false)}>Sign Out</button>
        }
        return <button onClick={() => authenticate(true)}>Sign In</button>
    };

    return (
        <nav className="nav navbar-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resources">Resources</Link>
                </li>
                <li className="nav-item">
                    {authButton()}
                </li>
            </ul>
        </nav>
    )
};

const mapStateToProps = state => {
    return {
        authenticated: state.authenticated
    }
};

const mapDispatchToProps = {
    authenticate
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);