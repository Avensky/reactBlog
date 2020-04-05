import React from 'react';
import user from '../../../../../assets/images/user.jpg'
import classes from './Post.module.css';

const post = (props) => {
    let assignedClasses = [classes.Post, classes.Card, props.clName]
    return (
        <article className={assignedClasses.join(' ')} onClick={props.clicked}>
            <div className={classes.CardTitle}><h1>{props.title}</h1></div>
            <div className={classes.CardAuthor}><h2>{props.author}</h2></div> 
            <div className={classes.CardDescription}><h3>{props.content}</h3></div>
            <figure className={classes.CardThumbnail}>
                <img src={user} alt="user"/>
            </figure>
            
        </article>)
}

export default post;