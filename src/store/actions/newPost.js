import * as actionTypes from './actionTypes'
import axios from '../../axios';

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

export const newPostSuccess = (orderData) => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        orderData: orderData
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
                //this.props.history.push('/posts');
                //this.setState( { submitted: true } )
        })
        .catch(error => {
            console.log(error);
            dispatch(newPostFail(error))
        })    
    }
}
