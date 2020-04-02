import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../../utility/utility';

const initialState = {
};

const newPost = () => {

}

const reducer = ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case actionTypes.NEW_POST: return newPost(state, action);
        default:
            return state;
    }
};

export default reducer;
