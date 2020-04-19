import axios from 'axios'
import * as actionTypes from './actionTypes'


export const fetchPostsSuccess = (fetchedPosts) => {
    return {
        type:  actionTypes.FETCH_POSTS_SUCCESS, 
        posts: fetchedPosts.slice(0, fetchedPosts.length-1).reverse(),
        featuredPost: fetchedPosts.slice(fetchedPosts.length - 1, fetchedPosts.length),
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
            console.log(result)
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

export const fetchPostsByIdSuccess = (fetchedPostsById) => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_ID_SUCCESS,
        fetchedPostsById: fetchedPostsById,
    }
}
export const fetchPostsByIdFail = (error) => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_ID_FAIL, 
        error: error
    }
}
export const fetchPostsByIdStart = () => {
    return {
        type:  actionTypes.FETCH_POSTS_BY_ID_START
    }
}
export const fetchPostsById = (id) => {
    return dispatch => {
        dispatch(fetchPostsByIdStart());
        axios.get( '/posts/' + id + '.json?print=pretty')
        .then( result => {
            console.log(result)
            const fetchedPostsById = result.data
//            const fetchedPostsById = []
//            for ( let key in Post ) {
//                fetchedPostsById.push( {
//                    ...result.data[key],
//                    id: key
//               } );
//           }
            dispatch(fetchPostsByIdSuccess(fetchedPostsById));
        })
        .catch( error => {
            dispatch(fetchPostsByIdFail(error));
        });
    };
}


export const deletePostSuccess = () => {
    return {
        type:  actionTypes.DELETE_POST_SUCCESS, 
    }
}
export const deletePostFail = (error) => {
    return {
        type:  actionTypes.DELETE_POST_FAIL, 
        error: error
    }
}
export const deletePostStart = () => {
    return {
        type:  actionTypes.DELETE_POST_START
    }
}

export const deletePost = (id) => {
    return dispatch => {
        dispatch(deletePostStart());
        axios.delete( '/posts/' + id + '.json')
        .then( result => {
            console.log(result)
            dispatch(deletePostSuccess());
        })
        .catch( error => {
            dispatch(deletePostFail(error));
        });
    };
}