import React from 'react';
import classes from'./NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
      <ul className={classes.NavItems}>
            <NavItem link='/home'>Home</NavItem>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/blog'>Blog</NavItem>
            <NavItem link='/new-post'>New Post</NavItem>
            <NavItem link='/account'>Account</NavItem>
            <NavItem link='/register'>Register</NavItem>
            <NavItem link='/login'>Login</NavItem>
      </ul>
)

export default navItems;