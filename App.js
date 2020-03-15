import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Blog />  
          </Layout>    
      </BrowserRouter>
    );
  }
}

export default App;
