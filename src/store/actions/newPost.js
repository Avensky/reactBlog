import * as actionTypes from './actionTypes'
import axios from '../../axios';

export const setNewPostRedirectPath  = (path) =>{
    return{
        type: actionTypes.SET_NEW_POST_REDIRECT_PATH,
        path: path
    }
}

export const newPostStart  = () =>{
    return{
        type: actionTypes.NEW_POST_START
    }
}

export const newPostFail = (error) => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        error: error
    }
}

export const newPostSuccess = (id, postData) => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        postId: id,
        postData: postData
    }
}
    
export const newPost = (title, content, author) => {
    return dispatch => {
        const postData={title, content, author}
        dispatch(newPostStart())
        axios.post('/posts.json', postData)
            .then(response => {
                console.log(response);
                dispatch(newPostSuccess(response.data.name, postData))
        })
        .catch(error => {
            console.log(error);
            dispatch(newPostFail(error))
        })    
    }
}

export const newPostInit = () => {
    return {
        type: actionTypes.NEW_POST_INIT
    }
}