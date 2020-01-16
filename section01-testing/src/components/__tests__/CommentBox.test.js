import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

// FOR TO HAVE THE COMPONENT MOUNTED
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
});

// UNMOUNT THE COMPONENT AFTER EVERY TEST
afterEach(() => {
    wrapped.unmount();
})

it('has a text area', () => {

    // IS TO VERIFY BEFORE TESTS
    // console.log(wrapped.find('textarea').length);
    // console.log(wrapped.find('button').length);

    expect(wrapped.find('textarea').length).toEqual(1); // CHECK IF THE COMPONENT HAS 1 TEXTAREA
    expect(wrapped.find('button').length).toEqual(1);   // CHECK IF THE COMPONENT HAS 2 BUTTONS
});

describe('the text area', () => {   // THE DESCRIBE IS FOR NEST SOME TESTS WITH COMMON FUNCTIONS

    // INSIDE BEFORE EACH, PUT THE COMMON FUNCTION
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'new comment', name: 'comment' } });  // FIND THE INPUT, CALL THE SIMULATE FUNCTION (RECEIVES TOW PARAMETERS, ACTION AND OBJECT)
        wrapped.update();   // IT FORCES THAT THE COMPONENT UPDATE (RERENDER)
    });

    // SIMULATE AN ONCHANGE EVENT
    it('has a textarea that users can type in', () => {
        // wrapped.find('textarea').simulate('change', { target: { value: 'new comment', name: 'comment' } });  // FIND THE INPUT, CALL THE SIMULATE FUNCTION (RECEIVES TOW PARAMETERS, ACTION AND OBJECT)
        // wrapped.update();   // IT FORCES THAT THE COMPONENT UPDATE (RERENDER)

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');  // CHECK IF HAS CHANGED
    });

    // SIMULATE AN SUBMIT EVENT
    it('when form is submitted, text area gets emptied', () => {
        // wrapped.find('textarea').simulate('change', { target: { value: 'new comment', name: 'comment' } });  // FIND THE INPUT, CALL THE SIMULATE FUNCTION (RECEIVES TOW PARAMETERS, ACTION AND OBJECT)
        // wrapped.update();   // IT FORCES THAT THE COMPONENT UPDATE (RERENDER)

        wrapped.find('form').simulate('submit');    // SIMULATE SUBMIT
        wrapped.update();   // UPDATE

        expect(wrapped.find('textarea').prop('value')).toEqual('');  // CHECK IF IS EMPTIED
    });

});


