import axios from 'axios'
import * as actionTypes from './actionTypes'


export const fetchPostsSuccess = (posts) => {
    return {
        type:  actionTypes.FETCH_POSTS_SUCCESS, 
        posts: posts
    }
}
export const fetchPostsFail = (error) => {
    return {
        type:  actionTypes.FETCH_POSTS_FAIL, 
        error: error
    }
}
export const fetchPostsStart = () => {
    return {
        type:  actionTypes.FETCH_POSTS_START
    }
}
export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        axios.get( '/posts.json')
        .then( result => {
            const fetchedPosts = [];
                for ( let key in result.data ) {
                    fetchedPosts.push( {
                        ...result.data[key],
                        id: key
                    } );
                }
                dispatch(fetchPostsSuccess(fetchedPosts));
            } )
            .catch( error => {
                dispatch(fetchPostsFail(error));
            } );
    };
}