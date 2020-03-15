import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
   <ul className={classes.NavItems}>
         <NavItem link="/" active>Home</NavItem>
         <NavItem link="/" >About</NavItem>
         <NavItem link="/" >Projects</NavItem>
         <NavItem link="/" >Blog</NavItem>
         <NavItem link="/" >Register</NavItem>
         <NavItem link="/" >Login</NavItem>
   </ul>
)

export default navItems;