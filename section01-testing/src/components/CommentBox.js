import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = props => {

    const initialState = {
        comment: '',
    };

    const [state, setState] = React.useState(initialState);

    const handleChange = e => {
        const { value, name } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.saveComment(state.comment);

        setState(initialState);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea name="comment" value={state.comment} onChange={handleChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button onClick={actions.fetchComments}>Fetch Comments</button>
        </React.Fragment>
    )
};

export default connect(null, actions)(CommentBox);