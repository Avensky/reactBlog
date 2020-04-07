import React, { Component } from 'react';
//import axios from 'axios';
import {connect} from 'react-redux'
import Layout from '../../../Layout/Layout';
import Header from '../../../Layout/Header/Header';
import Archives from '../../../Archives/Archives';
import * as actions from '../../../../store/actions/index'
import myClasses from './FullPost.module.css';
import classes from '../Posts/Post/Post.module.css';
import user from '../../../../assets/images/user.jpg'
class FullPost extends Component {

    deletePostHandler(id) {
        this.props.onDeletePost(id)
    }

    render () {
        let post = null;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        
        if ( this.props.fetchedPostsById ) {
//            const clName = this.props.clName
            let assignedClasses = [classes.Post, classes.Card, myClasses.FullPost]

            post = (
                    <article className={assignedClasses.join(' ')} >
                        <div className={classes.CardTitle}><h1>{this.props.fetchedPostsById.title}</h1></div>
                        <div className={classes.CardDetails}><h2>By {this.props.fetchedPostsById.author}</h2> <p>on 2019-12-07</p></div> 
                        <div className={classes.CardDescription}><p>{this.props.fetchedPostsById.content}</p></div>
                        <figure className={classes.CardThumbnail}>
                            <img src={user} alt="user"/>
                        </figure>
                        <div className={myClasses.Edit}>
                            <button 
                                //clicked={this.props.onDeletePost(this.props.id)}
                            >Update</button>
                            <button 
                                //delPost = {this.deletePostHandler(this.props.fetchedPostsById.id)}
                                className={myClasses.Delete}
                            >Delete</button>
                        </div>      
                    </article>
            )
        }

//        if (this.props.match.params.id) {
//            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
//        }
        return( 
            <Layout grid="blog">
                <Header />
                <section className={classes.Blog}>
                    {post}
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
        fetchedPostsById: state.blog.fetchedPostsById
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPostsById:  (id) => dispatch( actions.fetchPostsById(id)),
        onDeletePost: (id) => dispatch( actions.deletePost(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);