import {
    FETCH_USERS
} from './types';

export function fetchUser(users){
    return {
        type: FETCH_USERS,
        payload: users
    }
};