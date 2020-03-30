import React, { Component } from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom'

//import Blog from './containers/Blog/Blog';
import Content from './containers/Content';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Wrapper>
            <Content />
          </Wrapper>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
