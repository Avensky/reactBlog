import React from 'react';
import './Layout.module.css';
import Header from './Header/Header';

const Layout = (props) => (
    <div className='Layout'>{props.children}</div>)

export default Layout;