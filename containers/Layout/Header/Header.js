import React from 'react';
import './Header.module.css';

const header = () => {
    return (
        <div className="Header">
            <div className="HeaderLeft">
                <h2>Blog Section - All Posts</h2>
            </div>
            <div className="HeaderRight">
                <div className="HeaderItem ">
                <a className="CardNewPost">+</a>
                <p className="CardNewPostTitle">Add a new post</p>
            </div>
        </div>
    </div>
    )
}

export default header;