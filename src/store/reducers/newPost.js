import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../../utility/utility';

const initialState = {
    title: '',
    body: '',
    author: '',
    token: null,
    userId: null,
    error: null,
    loading: false,
    loginRedirectPath: '/'
};

const postData = {
    title: this.state.title,
    body: this.state.content,
    author: this.state.author
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
