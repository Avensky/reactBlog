import React, { Component } from 'react';
import axios from '../../../axios';
import classes from './Blog.module.css';
import Header from '../../Layout/Header/Header';
import Archives from '../../Archives/Archives';
import Post from './Posts/Post/Post';
import {Route} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import Layout from '../../Layout/Layout';

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
            <Layout grid="blog">
                <Header />
                <section className={classes.Blog}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost} />
                <Archives />
            </Layout>
        )
    }
}

export default Blog;