import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom'
import './Content.module.css';
import Blog from './Pages/Blog/Blog';
import Posts from './Pages/Blog/Posts/Posts';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import asyncComponent from '../hoc/asyncComponent';
import Auxiliary from '../hoc/Auxiliary';

const AsyncNewPost = asyncComponent(() => {
    return import('./Pages/Blog/NewPost/NewPost');
});

class Content extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <Auxiliary className='Content'>
                {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
                <Route path="/" render={()=> <h1>Home 2</h1>} /> */}
                <Switch>
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null} 
                    <Route path="/home" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" exact component={Home} />
                    {/* 
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route render={() => <h1>Not found</h1>} />
                    */}
                    
                    {/*<Redirect from="/" to="/posts" />*/}                
                </Switch>
            </Auxiliary>
        );
    }
}

export default Content;