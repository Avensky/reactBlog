import axios from 'axios'
import * as actionTypes from './actionTypes'


export const fetchPostsSuccess = (fetchedPosts) => {
    return {
        type:  actionTypes.FETCH_POSTS_SUCCESS, 
        posts: fetchedPosts.slice(1, 5),
        featuredPost: fetchedPosts.slice(0, 1),
        fetchedPosts: fetchedPosts,
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
            const posts = result.data
            const fetchedPosts = []
                for ( let key in posts ) {
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