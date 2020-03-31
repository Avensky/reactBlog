import React from 'react';
import classes from'./NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
      <ul className={classes.NavItems}>
            <NavItem link='/home'>Home</NavItem>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/blog'>Blog</NavItem>
            {props.isLoggedIn  
                  ? <NavItem link='/newPost'>New Post</NavItem> 
                  : null}
            {props.isLoggedIn 
                  ? <NavItem link='/account'>Account</NavItem>
                  : <NavItem link='/register'>Register</NavItem>}
            {!props.isLoggedIn 
                  ? <NavItem link='/login'>Login</NavItem> 
                  : <NavItem link="/logout">Logout</NavItem>}
      </ul>
)

export default navItems;