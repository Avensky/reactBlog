import React from 'react';
import './Logo.module.css';
import myLogo from '../../assets/images/myLogo.png';

const logo = (props) => (
<div className='Logo' style={{height: props.height}}>
    <img src={myLogo}  alt="MyLogo" />
</div>
)

export default logo;