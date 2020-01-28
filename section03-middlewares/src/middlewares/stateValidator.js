import tv4 from 'tv4';
import stateSchema from './stateSchema'; 

export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    // CHECK IF THE STATE HAS THE CORRECT SCHEMA
    let isValid = tv4.validate(getState(), stateSchema);

    if(!isValid) console.error('Ohh something went twrong!')
};