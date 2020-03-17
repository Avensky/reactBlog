import React, { Component } from 'react';
import './Layout.module.css';
import Header from './Header/Header';

class Layout extends Component {
    state = {
    }
    render() {
        const assignedClasses = ['Layout'];        
        if (this.props.grid == "blog") {
            assignedClasses.push('blog')
        }

        if (this.props.grid == 'new'){
            assignedClasses.push('new')
        }

        return (    
            <div className={assignedClasses.join(' ')}>{this.props.children}</div>
        )

    }
}


export default Layout;