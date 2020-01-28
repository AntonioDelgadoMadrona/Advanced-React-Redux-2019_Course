import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

    const ComposedComponent = (props) => {

        useEffect(() => {
            shouldNavigateAway();
        }, [props.isLoggedIn]);
        
        const shouldNavigateAway = () => {
            if (!props.isLoggedIn) props.history.push('/');        
        };

        return <ChildComponent {...props} />
    };

    const mapStateToPros = state => {
        const { auth } = state;
        return {
            isLoggedIn: auth
        }
    };

    return connect(mapStateToPros, null)(ComposedComponent);
};