import * as actionTypes from './actionTypes'
import axios from '../../axios';

export const newPostStart  = (id, postData) =>{
    return{
        type: actionTypes.NEW_POST_START,
        postId: id,
        postData: postData
    
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
    
export const newPost = (postData , token) => {
    return dispatch => {
        dispatch(newPostStart())
        axios.post('/posts.json?auth=' + token, postData)
            .then(response => {
                console.log(response);
                dispatch(newPostSuccess())
                //this.props.history.push('/posts');
                //this.setState( { submitted: true } )
        })
        .catch(error => {
            console.log(error);
            dispatch(newPostFail(error))
        })    
    }
}

export const post = (post) => {
    console.log(this.props);
    axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts});
            //console.log(response)
        })
        .catch(error => {
            console.log(error)
            //this.setState({error: true})
        })
}