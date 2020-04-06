import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from '../../../../store/actions/index'
import './FullPost.css';
import classes from '../Posts/Post/Post.module.css';
import user from '../../../../assets/images/user.jpg'
class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props);
        if (this.props.id) {
            this.props.onFetchPostsById(this.props.id)
        }
 //       this.loadData();
//       if ( this.props.id ) {
//           if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
//               axios.get( '/posts/' + this.props.id )
//                   .then( response => {
//                       // console.log(response);
//                       this.setState( { loadedPost: response.data } );
//                   } );
//           }
//       }
    }

    componentDidUpdate() {
        console.log(this.props)
        this.props.onFetchPostsById(this.props.id)

//       this.loadData();
//       if ( this.props.id ) {
//           if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
//               axios.get( '/posts/' + this.props.id )
//                   .then( response => {
//                       console.log(response);
//                       this.setState( { loadedPost: response.data } );
//                   } );
//           }
//       }
    }

    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
 
        const clName = this.props.clName
        let assignedClasses = [classes.Post, classes.Card, clName]

        if ( this.state.loadedPost ) {
            post = (
                <article className={assignedClasses.join(' ')} onClick={this.state.loadedPost.clicked}>
                    <div className={classes.CardTitle}><h1>{this.state.loadedPost.title}</h1></div>
                    <div className={classes.CardDetails}><h2>By {this.state.loadedPost.author}</h2> <p>on 2019-12-07</p></div> 
                    <div className={classes.CardDescription}>
                        <p>{this.state.loadedPost.content}</p>
                    </div>
                    <figure className={classes.CardThumbnail}>
                        <img src={user} alt="user"/>
                    </figure>        
                </article>
            )
        }

//        if (this.props.match.params.id) {
//            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
//        }
//        
//        if (this.state.loadedPost) {
//            post = (
//                <div className="FullPost">
//                    <h1>{this.state.loadedPost.title}</h1>
//                    <p>{this.state.loadedPost.body}</p>
//                    <div className="Edit">
//                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
//                    </div>
//                </div>
//    
//            );
//
//        }
        return( 
            post
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.blog.posts,
        featuredPost: state.blog.featuredPost,
        fetchedPosts: state.blog.fetchedPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPostsById:  (id) => dispatch( actions.fetchPostsById(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);