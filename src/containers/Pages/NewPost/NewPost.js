import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './NewPost.css';
import classes from '../Pages.module.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/posts')
        console.log(this.props);
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />
        }
        return (
            <Layout grid="new">
                <Header />
                <div className={classes.Pages}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input 
                    type="text" 
                    value={this.state.title} 
                    onChange={(event) => this.setState({title: event.target.value})} 
                    placeholder="Blog Title"    
                />
                <label>Content</label>
                <textarea
                    type="textarea"
                    rows="4" 
                    value={this.state.content} 
                    onChange={(event) => this.setState({content: event.target.value})} 
                />
                <label>Author</label>
                <select 
                    value={this.state.author} 
                    onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button 
                    className={classes.btn} 
                    onClick={this.postDataHandler}
                    >Add Post</button>
            </div>

            </Layout>
            
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onNewPost: (title, content, author) => dispatch(actions.newPost(title, content, author))
    }
}
export default connect(null, mapDispatchToProps)(NewPost);