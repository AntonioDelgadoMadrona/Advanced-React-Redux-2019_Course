import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const comment_box = () => {

    const [state, setState] = React.useState({
        comment: ''
    });

    const onHandleChange = event => {
        const { value, name } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.saveComment(state.comment);
        setState(prevState => ({
            ...prevState,
            comment: ''
        }))
    };

    return (
        <form onSubmit={handleSubmit} className="comment-box">
            <h4>Add a comment</h4>
            <textarea name="comment" value={state} onChange={onHandleChange} />
            <div>
                <button type="submit">Submit Commit</button>
            </div>
        </form>
    )
};

export default connect(null, actions)(comment_box);