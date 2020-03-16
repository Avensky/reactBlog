import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

//import Blog from './containers/Blog/Blog';
import Content from './containers/Content';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Content />  
          </Layout>    
      </BrowserRouter>
    );
  }
}

export default App;
