import React, { Component } from 'react';
//import axios from '../../../axios';
import classes from './Blog.module.css';
import Header from '../../Layout/Header/Header';
import Archives from '../../Archives/Archives';
import Post from './Posts/Post/Post';
//import Posts from './Posts/Posts';
//import { Route } from 'react-router-dom';
import FullPost from './FullPost/FullPost';
import Layout from '../../Layout/Layout';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Blog extends Component {
    state = {
        selectedPostId: null
    }
    componentDidMount() {
        console.log(this.props)
        this.props.onFetchPosts()
    }


    postClickedHandler = (id) => {
        this.setState({selectedPostId: id})
        this.props.onFetchPostsById(id)
 //       this.props.history.push('blog/' + id);
    }

    deletePostHandler = (id) => {
        this.setState({selectedPostId: null})
        this.props.onDeletePost(id)
    }

    render (){
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        let featuredPost = null
        let selectedPost = null


        if (!this.props.error) {

            if (this.props.fetchedPostsById){
                featuredPost = null;
                selectedPost = (
                    <FullPost 
                        id={this.state.selectedPostId}
                        clicked={() => this.deletePostHandler(this.state.selectedPostId)}
                    />)
            }
            else {
                featuredPost = this.props.featuredPost.map( featured => {
                    return (
                        <Post
                        key={featured.id} 
                        title={featured.title} 
                        author={featured.author}
                        content={featured.content}
                        clName={classes.FeaturedPost}
                        clicked={() => this.postClickedHandler(featured.id)}/>
                    )
                })
            }
            
            posts = this.props.posts.map( post => {
                return (
                    <div className={classes.Posts}>
                        <Post
                            key={post.id} 
                            title={post.title} 
                            author={post.author}
                            content={post.content}
                            clicked={() => this.postClickedHandler(post.id)}
                        />
                    </div>
                )
            })
        }

        return (
            <Layout grid="blog">
                <Header />
                <section className={classes.Blog}>
                    {selectedPost}
                    {featuredPost}
                    {posts}
                </section>
                <Archives 
//                        key={archive.id} 
//                        title={archive.title} 
//                        author={archive.author}
//                        content={archive.content}
//                        clicked={() => this.postClickedHandler(archive.id)}
                    />
            </Layout>
        )
    }
}
const mapStateToProps = state => {
    return {
        posts: state.blog.posts,
        featuredPost: state.blog.featuredPost,
        fetchedPosts: state.blog.fetchedPosts,
        fetchedPostsById: state.blog.fetchedPostsById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts()),
        onFetchPostsById:  (id) => dispatch( actions.fetchPostsById(id)),
        onDeletePost: (id) => dispatch( actions.deletePost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Blog);