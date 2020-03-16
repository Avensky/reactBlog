import React from 'react';
import { NavLink } from 'react-router-dom'
import './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
      <ul className='NavItems'>
            <NavLink 
                  to="/posts/" 
                  exact 
                  ><NavItem>Blog</NavItem>
            </NavLink>
            <NavLink 
                  to={{
                        pathname: "/new-post", 
                        hash: '#submit', 
                        search: '?quick-submit=true' 
                  }}><NavItem>New Post</NavItem>
            </NavLink>
            <NavLink 
                  to="/" 
                  exact 
                  ><NavItem>About</NavItem>
            </NavLink>
            <NavLink 
                  to="/posts/" 
                  exact 
                  ><NavItem>Register</NavItem>
            </NavLink>
            <NavLink 
                  to="/posts/" 
                  exact 
                  ><NavItem>Login</NavItem>
            </NavLink>
      </ul>
)

export default navItems;