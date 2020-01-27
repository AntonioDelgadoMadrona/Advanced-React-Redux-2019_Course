import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

// DEFINE THE ACTION
describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();
        // CHECK IF THE ACTION TYPE IS SAVE_COMMENT
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const action = saveComment('New Comment');
        // CHECKS IF THE ACTION PAYLOAD IS 'New Comment'
        expect(action.payload).toEqual('New Comment');
    });
});

// describe('fetchComment', () => {
//     it('has the correct type', () => {

//     });

//     it('has the correct payload', () => {

//     });
// });