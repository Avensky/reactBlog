import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../../components/Navigation/Navbar/Navbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSidebar: false
    }

    sidebarClosedHandler = () => {
        this.setState({showSidebar: false})
    }

    sidebarToggleHandler = () => {
        this.setState(( prevState ) => {
            return {showSidebar: !prevState.showSidebar};
        });
    }

    render() {
        let assignedClasses = [classes.Layout];        
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
            <Auxiliary>
                <Navbar
                    isLogged={this.props.isLoggedIn}
                    sidebarToggleClicked={this.sidebarToggleHandler}
                />
                <Sidebar
                    isLogged={this.props.isLoggedIn}
                    open={this.state.showSidebar}
                    closed={this.sidebarClosedHandler}
                />
                <main className={assignedClasses.join(' ')}>
                    {this.props.children}
                </main>
            </Auxiliary>  
        )

    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.token !== null
    };
};

export default connect( mapStateToProps )(Layout);