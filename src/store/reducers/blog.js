import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utility/utility';

const initialState = {
    posts:[],
    featuredPost: [],
    fetchedPosts: [],
    fetchedPostsById: [],
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
        fetchedPosts: action.fetchedPosts,
    })
}

const fetchPostsByIdStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsByIdFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const fetchPostsByIdSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsById: action.fetchedPostsById,
        loading: false,
    })
}

const deletePostStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
}

const deletePostFail = (state, action) => {
    return updateObject( state, {
        loading: false
    })
}
const deletePostSuccess = (state, action) => {
    return updateObject( state, {
        fetchedPostsById: null,
        loading: false,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
        case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_START: return fetchPostsByIdStart(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_FAIL: return fetchPostsByIdFail(state, action);
        case actionTypes.FETCH_POSTS_BY_ID_SUCCESS: return fetchPostsByIdSuccess(state, action);
        case actionTypes.DELETE_POST_START: return deletePostStart(state, action);
        case actionTypes.DELETE_POST_FAIL: return deletePostFail(state, action);
        case actionTypes.DELETE_POST_SUCCESS: return deletePostSuccess(state, action);
        default: return state;     
    }
}

export default reducer;