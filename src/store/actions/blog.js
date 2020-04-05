import axios from 'axios'
import * as actionTypes from './actionTypes'


export const fetchPostsSuccess = (featuredPost) => {
    return {
        type:  actionTypes.FETCH_POSTS_SUCCESS, 
        posts: featuredPost.slice(1, 5),
        featuredPost: featuredPost.slice(0, 1),
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