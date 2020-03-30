import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect, BrowserRouter } from 'react-router-dom'
import Blog from './containers/Pages/Blog/Blog';
import Posts from './containers/Pages/Blog/Posts/Posts';
import Home from './containers/Pages/Home/Home';
import Projects from './containers/Pages/Account/Account';
import About from './containers/Pages/About/About';
import Login from './containers/Pages/Login/Login';
import Account from './containers/Pages/Account/Account';
import Register from './containers/Pages/Register/Register';
import asyncComponent from './hoc/asyncComponent';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/home" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/projects" component={Projects} />
        
        <Route path="/login" component={Login} />
        
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />                
      </Switch>
    );
    return (
      <BrowserRouter>
          <Wrapper>
            {routes}
          </Wrapper>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
