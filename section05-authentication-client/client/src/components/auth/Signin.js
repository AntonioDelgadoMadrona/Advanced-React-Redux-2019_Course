import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';

const Signin = props => {

    const { handleSubmit, signin, errorMessage } = props;

    const onSubmit = formProps => {
        signin(formProps, () => {
            props.history.push('/feature');
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <fieldset>
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <div>{errorMessage}</div>
            <button type="submit">Sign In!</button>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Signin);