import React from 'react';
import user from '../../../../../assets/images/user.jpg'
import classes from './Post.module.css';

const post = (props) => {
    let assignedClasses = [classes.Post]
    return (
        <article className={assignedClasses.join(' ')} onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
            <img src={user} alt="user"/>
        </article>)
}

export default post;