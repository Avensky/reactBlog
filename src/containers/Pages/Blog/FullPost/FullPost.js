import React, { Component } from 'react';
//import axios from 'axios';
import {connect} from 'react-redux'
import Layout from '../../../Layout/Layout';
import Header from '../../../Layout/Header/Header';
import Archives from '../../../Archives/Archives';
import * as actions from '../../../../store/actions/index'
import Post from '../Posts/Post/Post';
import classes from './FullPost.module.css';
import myClasses from '../Posts/Post/Post.module.css';
//import user from '../../../../assets/images/user.jpg'
class FullPost extends Component {
    componentDidMount() {
    }

    deletePostHandler(id) {
        this.props.onDeletePost(id)
    }

    render () {
        let postsById = <p style={{textAlign: 'center'}}>Something went wrong!</p>

        if ( this.props.id ) {
            postsById= <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        
        if (!this.props.error) {
            postsById = ( 
                    <Post
                        key={this.props.fetchedPostsById.id} 
                        title={this.props.fetchedPostsById.title} 
                        author={this.props.fetchedPostsById.author}
                        content={this.props.fetchedPostsById.content}
                        lines={20}
                        clName={classes.FullPost}
                    /> 
            )
        }
            

//        if (this.props.match.params.id) {
//            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
//        }
        return( 
            <Layout grid="blog">
                <Header />
                <section className={myClasses.Blog}>
                    {postsById}
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
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);