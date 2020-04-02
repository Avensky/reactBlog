import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './NewPost.css';
import classes from '../Pages.module.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';
// import axios from '../../../axios';

class NewPost extends Component {
    state = {
        postForm:{
            title: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            },
            content: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            },
            author: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            }
        },
        submitted: false,
        error: null
    }

    newPostHandler = (event) => {
        event.preventDefault();
        this.props.onNewPost(
            this.state.postForm.title.value, 
            this.state.postForm.content.value, 
            this.state.postForm.author.value 
        );
    }

    
    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.postForm,
            [controlName]: {
                ...this.state.postForm[controlName],
                value: event.target.value,
//                valid: this.checkValidity( event.target.value, this.state.postForm[controlName].validation ),
                touched: true
            }
        };
        this.setState( { postForm: updatedControls } );
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let form = (
            <form className={classes.Pages} onSubmit={this.newPostHandler}>
                <legend>Add a Post</legend>
                {errorMessage}
                <label>Title</label>
                <input 
                    type="text" 
                    onChange={(event) => this.inputChangedHandler( event, "title")}
                    placeholder="Blog Title"    
                />
                <label>Content</label>
                <textarea
                    type="textarea"
                    rows="4" 
                    onChange={(event) => this.inputChangedHandler( event, "content")}
                />
                <label>Author</label>
                <input 
                    type="text" 
                    onChange={(event) => this.inputChangedHandler( event, "author")}
                />
                <button 
                    className={classes.btn} 
                    >Add Post
                </button>
            </form>
        )
        return (
            <Layout grid="new">
                <Header />
                {redirect}
                {errorMessage}
                {form}
            </Layout>
            
        );
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.token !== null,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNewPost: (title, content, author) => dispatch(actions.newPost(title, content, author))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);