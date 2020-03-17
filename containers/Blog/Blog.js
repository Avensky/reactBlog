import React from 'react';
import './Blog.module.css';
import Header from '../Header/Header';
import Posts from './Posts/Posts';
import {Route} from 'react-router-dom';
import Container from '../Container/Container';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
import Auxiliary from '../../hoc/Auxiliary';

const Blog = () => {
    return (
        <Container>
            <Header />
            <div></div>
        </Container>
    )
}

export default Blog;