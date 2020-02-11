import React from 'react';
import requireAuth from './requireAuth';

const Feature = props => {
    return (
        <div>This is the feature!</div>
    )
};

export default requireAuth(Feature);