import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {

    const ComposedComponent = props => {

        // Our component just got rendered
        React.useEffect(() => {
            shouldNavigateAway();
        }, []);

        const shouldNavigateAway = () => {
            if (!props.auth) {
                props.history.push('/');
            }
        }
        return <ChildComponent {...props} />;
    }

    const mapStateToProps = state => {
        return { auth: state.auth.authenticated };
    }

    return connect(mapStateToProps)(ComposedComponent);
};