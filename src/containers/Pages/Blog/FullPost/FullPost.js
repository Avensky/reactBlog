import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from '../../../../store/actions/index'
import './FullPost.css';
import classes from '../Posts/Post/Post.module.css';
import user from '../../../../assets/images/user.jpg'
class FullPost extends Component {

//    componentDidMount () {
//    }

    componentDidUpdate() {
        console.log(this.props)
    }

    render () {
        let post = null;
        
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
 
        const clName = this.props.clName
        let assignedClasses = [classes.Post, classes.Card, clName]

        if ( this.props.fetchedPostsById ) {
            post = (
                <article className={assignedClasses.join(' ')} onClick={this.props.fetchedPostsById.clicked}>
                    <div className={classes.CardTitle}><h1>{this.props.fetchedPostsById.title}</h1></div>
                    <div className={classes.CardDetails}><h2>By {this.props.fetchedPostsById.author}</h2> <p>on 2019-12-07</p></div> 
                    <div className={classes.CardDescription}>
                        <p>{this.props.fetchedPostsById.content}</p>
                    </div>
                    <figure className={classes.CardThumbnail}>
                        <img src={user} alt="user"/>
                    </figure>
                    <div className="Edit">
                        <button onClick={this.props.clicked} className="Delete">Delete</button>
                    </div>        
                </article>
            )
        }

//        if (this.props.match.params.id) {
//            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
//        }

        return( 
            post
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
        onFetchPostsById:  (id) => dispatch( actions.fetchPostsById(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullPost);