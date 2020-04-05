import React, { Component } from 'react';
//import axios from '../../../axios';
import classes from './Blog.module.css';
import Header from '../../Layout/Header/Header';
import Archives from '../../Archives/Archives';
import Post from './Posts/Post/Post';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import Layout from '../../Layout/Layout';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Blog extends Component {
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
        let featuredPost = <p style={{textAlign: 'center'}}>Something went wrong!</p> 
        if (!this.props.error) {
            featuredPost = this.props.featuredPost.map( featured => {
                return (
                    <Post
                    key={featured.id} 
                    title={featured.title} 
                    author={featured.author}
                    content={featured.content}
                    clName="FeaturedPost"
                    clicked={() => this.postClickedHandler(featured.id)}/>
                )
            })
            posts = this.props.posts.map( post => {
                return (
                    <Post
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    content={post.content}
//                    clName={"Post"}
                    clicked={() => this.postClickedHandler(post.id)}/>
                )
            })
        }

        return (
            <Layout grid="blog">
                <Header />
                <section className={classes.Blog}>
                    {featuredPost}
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
        posts: state.blog.posts,
        featuredPost: state.blog.featuredPost,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Blog);