import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Signout = props => {

    React.useEffect(() => {
        props.signout();
    }, []);

    return (
        <div>
            Sorry to see you go
        </div>
    )
};

export default connect(null, actions)(Signout);
