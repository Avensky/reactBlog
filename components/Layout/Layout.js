import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Navbar from '../Navigation/Navbar/Navbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSidebar: false
    }

    sidebarClosedHandler = () => {
        this.setState({showSidebar: false})
    }
// best practice to set state in a clean way when it depends on a previous state
    sidebarToogleHandler = () => {
        this.setState(( prevState ) => {
            return {showSidebar: !prevState.showSidebar};
        });
    }

    render () {
        return (    
            <Auxiliary>
                <Navbar barToggleClicked={this.sidebarToogleHandler} />
                <Sidebar open={this.state.showSidebar} closed={this.sidebarClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;