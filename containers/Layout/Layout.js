import React, { Component } from 'react';
import './Layout.module.css';

class Layout extends Component {
    state = {
    }
    render() {
        const assignedClasses = ['Layout'];        
        if (this.props.grid === "blog") {
            assignedClasses.push('blog')
        }

        if (this.props.grid === 'new'){
            assignedClasses.push('new')
        }

        if (this.props.grid === 'one'){
            assignedClasses.push('one')
        }

        return (    
            <div className={assignedClasses.join(' ')}>{this.props.children}</div>
        )

    }
}


export default Layout;