import React, { Component } from 'react';
import user from '../../../../../assets/images/user.jpg'
import classes from './Post.module.css';
import TextTruncate from 'react-text-truncate'; // recommend

class post extends Component {
    render () {
        const clName = this.props.clName
        let assignedClasses = [classes.Post, classes.Card, clName]
        return (
            <article className={assignedClasses.join(' ')} onClick={this.props.clicked}>
                <div className={classes.CardTitle}><h1>{this.props.title}</h1></div>
                <div className={classes.CardDetails}><h2>By {this.props.author}</h2> <p>on 2019-12-07</p></div> 
                <div className={classes.CardDescription}>
                <TextTruncate
                    line={4}
                    element="span"
                    truncateText="…"
                    text={this.props.content}
                    //textTruncateChild={<a href="#">Read on</a>}
                />
                </div>
                <figure className={classes.CardThumbnail}>
                    <img src={user} alt="user"/>
                </figure>
                
            </article>
        )
    }
}

export default post;