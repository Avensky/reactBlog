import * as actionTypes from './actionTypes'
import axios from '../../axios';

export const newPostStart  = (id, postData) =>{
    return{
        type: actionTypes.NEW_POST_START,
        postId: id
    }
}

export const newPostFail = (error) => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        error: error
    }
}

export const newPostSuccess = () => {
    return {
        type: actionTypes.NEW_POST_SUCCESS
    }
}
    
export const newPost = (title, content, author) => {
    return dispatch => {
        const postData={title, content, author}

        dispatch(newPostStart())
        axios.post('/posts.json', postData)
            .then(response => {
                console.log(response);
//                dispatch(newPostSuccess(response.data.name, postData))
                //this.props.history.push('/posts');
                //this.setState( { submitted: true } )
        })
        .catch(error => {
            console.log(error);
            dispatch(newPostFail(error))
        })    
    }
}
