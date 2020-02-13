import React from 'react';
import { connect } from 'react-redux';

const comment_list = props => {

    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);

    return (
        <div>
            <ul className="comment-list">
                {list}
            </ul>

        </div>
    )
};

const mapStateToProps = state => {
    return { comments: state.comments }
};

export default connect(mapStateToProps, null)(comment_list);
