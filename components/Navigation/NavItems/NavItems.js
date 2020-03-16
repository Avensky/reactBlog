import React from 'react';
import './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = () => (
      <ul className='NavItems'>
            <li className='NavItem'>
                  <NavItem link='/home'>Home</NavItem>
            </li>
            <li className='NavItem'>
                  <NavItem link='/posts'>Blog</NavItem>
            </li>
            <li className='NavItem'>
                  <NavItem link='/new-post'>New Post</NavItem>
            </li>
            <li className='NavItem'>
                  <NavItem link='/projects'>Projects</NavItem>
            </li>
            <li className='NavItem'>
                  <NavItem link='/about'>About</NavItem>
            </li>
            <li className='NavItem'>
                  <NavItem link='/login'>Login</NavItem>
            </li>
      </ul>
)

export default navItems;