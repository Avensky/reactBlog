import axios from '../../axios';

export const newPost = (title, content, author) => {
    return dispatch => {
        const blogData = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', blogData)
            .then(response => {
                console.log(response);
                this.props.history.push('/posts');
                //this.setState( { submitted: true } )
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