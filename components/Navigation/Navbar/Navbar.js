import React from 'react';
import classes from './Navbar.module.css'
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';

const navbar = (props) => (
    <header className={classes.Navbar}>
        <SidebarToggle clicked={props.sidebarToggleClicked}/>
        <Logo height="95%" />
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default navbar;