import React from 'react';
import classes from './Navbar.module.css'
//import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';

const navbar = (props) => (
    <header>
        <SidebarToggle clicked={props.sidebarToggleClicked}/>
        <nav className={classes.Navbar}>
            <NavItems />
        </nav>
    </header>
);

export default navbar;