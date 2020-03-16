import React from 'react';
import './Background.module.css';
import myVid from '../../../assets/videos/myVid.mp4';

const background = () => {
    return (
    <div className="videoWrapper">
        <video src={myVid} autoplay="true" muted loop="true"></video>
    </div>)
}

export default background;