import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import './Sidebar.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sidebar = (props) => {
    let attachedClasses = ['Sidebar', 'Close'];
    if (props.open) {
        attachedClasses = ['Sidebar', 'Open'];
    }
    return (
        <Auxiliary>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%" />
            <nav>
                <NavItems />
            </nav>
        </div>
        </Auxiliary>
    );
}

export default sidebar;