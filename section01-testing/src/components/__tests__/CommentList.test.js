import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {

    // DEFINE THE INITIAL STATE FOR TO PASS IT TO ROOT COMPONENT
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    // MOUNT THE COMPONENT PASSING THE INITIAL STATE
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

// CHECKS IF COMPONENT HAS TO LI ELEMENTS
it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

// CHECKS IF THE RENDER THE TEXT CONTAINS THE NEXT STRINGS
it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});