import React from 'react';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';
import * as actions from 'actions';

const App = props => {

    const renderButton = () => {
        if (props.isLoggedIn) {
            return (
                <button onClick={() => props.changeAuth(false)}>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button  onClick={() => props.changeAuth(true)}>
                    Sign In
                </button>
            )
        }
    };

    const renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a Comment</Link>
                </li>
                <li>
                    {renderButton()}
                </li>
            </ul>
        )
    };

    return (
        <React.Fragment>
            {renderHeader()}
            <Route exact path="/post" component={CommentBox} />
            <Route exact path="/" component={CommentList} />
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    const { auth } = state;
    return {
        isLoggedIn: auth
    }
};

const mapDispatchToProps = {
    changeAuth: actions.changeAuth
};

export default connect(mapStateToProps, mapDispatchToProps)(App);