import React, { Component } from 'react';
//import axios from '../../../axios';
import classes from './Blog.module.css';
import Header from '../../Layout/Header/Header';
import Archives from '../../Archives/Archives';
import Post from './Posts/Post/Post';
import {Route} from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import Layout from '../../Layout/Layout';
import {connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props)
        this.props.onFetchPosts()
    }

    postClickedHandler = (id) => {
        //this.setState({clickedPostId: id})
        this.props.history.push('/posts/' + id);
    }

    render (){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.props.error) {
            posts = this.props.posts.map( post => {
                return (
                    <Post
//                    key={post.id} 
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
const mapStateToProps = state => {
    return {
        posts: state.blog.posts

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Blog);