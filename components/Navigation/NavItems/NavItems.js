import React from 'react';
import './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
   <ul className={classes.NavItems}>
         <li><NavItem link="/" active>Home</NavItem></li>
         <li><NavItem link="/" >About</NavItem></li>
         <li><NavItem link="/" >Projects</NavItem></li>
         <li><NavItem link="/" >Blog</NavItem></li>
         <li><NavItem link="/" >Register</NavItem></li>
         <li><NavItem link="/" >Login</NavItem></li>
   </ul>
)

export default navItems;