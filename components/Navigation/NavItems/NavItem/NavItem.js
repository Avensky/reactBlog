import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavItem.module.css';

const navItem = (props) => (    
    <NavLink 
        to={props.link} 
        exact
        className={props.active ? 'active' : null} 
    >{props.children}</NavLink>
)



export default navItem;