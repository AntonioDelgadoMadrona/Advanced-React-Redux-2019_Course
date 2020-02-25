import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (composedComponent) = () => {

    const Authentication = props => {

        let Component = composedComponent;

        if (!props.authenticated) Component = <Redirect to="/" />

        return (
            <Component {...props} />
        )
    };

    const mapStateToProps = state => {
        return { authenticated: state.authenticated }
    };

    return connect(mapStateToProps)(Authentication);

};