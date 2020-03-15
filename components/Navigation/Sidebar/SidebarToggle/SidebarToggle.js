import React from 'react';
import './SidebarToggle.module.css'

const sidebarToggle = (props) => (
    <div onClick={props.clicked} className='SidebarToggle'>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sidebarToggle;