import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    posts:[],
    featuredPost: [],
    loading: false,
}

const fetchPostsStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const fetchPostsSuccess = (state, action) => {
    return updateObject( state, {
        posts: action.posts,
        featuredPost: action.featuredPost,
        loading: false,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
        case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
        default: return state;     
    }
}

export default reducer;