import React, { Component } from 'react';
import axios from '../../axios';
import './Blog.module.css';
import Header from '../Header/Header';
import Posts from './Posts/Posts';
import Post from './Posts/Post/Post';
import {Route} from 'react-router-dom';
import Container from '../Container/Container';
import FullPost from './FullPost/FullPost';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import Auxiliary from '../../hoc/Auxiliary';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
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

    postClickedHandler = (id) => {
        //this.setState({clickedPostId: id})
        this.props.history.push('/posts/' + id);
    }

    render (){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postClickedHandler(post.id)}
                />
                )
            })

        }

        return (
            <Container>
                <Header />
                <div>
                    <section className="Posts">
                        {posts}
                    </section>
                    <Route path={this.props.match.url + '/:id'} component={FullPost} />
                </div>
            </Container>
        )
    }
}

export default Blog;