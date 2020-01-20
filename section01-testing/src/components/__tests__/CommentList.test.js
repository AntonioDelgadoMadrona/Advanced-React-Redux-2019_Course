import React from 'react';
import { mount } from 'react-redux';

import CommentList from '../CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    )
});

it('creates one LI per comment', () => {

});