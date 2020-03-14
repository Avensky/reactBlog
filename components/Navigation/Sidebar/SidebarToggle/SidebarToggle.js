import React from 'react';
import './SidebarToggle.css'

const sidebarToggle = (props) => (
    <div onClick={props.clicked} className={classes.SidebarToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sidebarToggle;