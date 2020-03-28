import React, { Component } from 'react';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
    }
    render() {
        const assignedClasses = [classes.Layout];        
        if (this.props.grid === "blog") {
            assignedClasses.push(classes.blog)
        }

        if (this.props.grid === 'new'){
            assignedClasses.push(classes.new)
        }

        if (this.props.grid === 'one'){
            assignedClasses.push(classes.one)
        }

        return (    
            <div className={assignedClasses.join(' ')}>{this.props.children}</div>
        )

    }
}


export default Layout;