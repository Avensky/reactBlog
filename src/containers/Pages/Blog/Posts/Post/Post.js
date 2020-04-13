import React from 'react';
import user from '../../../../../assets/images/user.jpg'
import classes from './Post.module.css';
import TextTruncate from 'react-text-truncate'; // recommend
//import { NavLink } from 'react-router-dom'

const post = (props) => (

    <article className={[
        classes.Post,
        classes.Card,
        props.clName
      ].join(' ')} onClick={props.clicked}>
        <div className={classes.CardTitle}><h1>{props.title}</h1></div>
        <div className={classes.CardDetails}><h2>By {props.author}</h2> <p>on 2019-12-07</p></div> 
        <div className={classes.CardDescription}>
        <TextTruncate
            line={4}
            element="span"
            truncateText="…"
            text={props.content}
            //textTruncateChild={<a href="#">Read on</a>}
        />
        </div>
        <figure className={classes.CardThumbnail}>
            <img src={user} alt="user"/>
        </figure> 
    </article>
    )


export default post;