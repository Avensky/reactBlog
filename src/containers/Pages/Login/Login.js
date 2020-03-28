import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
import classes from '../Pages.module.css';
import { checkValidity } from '../../../utility/utility'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index';

class Login extends Component {
    state = {
        controls: {
            email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                }
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        },
        isSignup: true
    }

    loginHandler = ( event ) => {
        event.preventDefault();
        this.props.onLogin( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
    }

    switchModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    inputChangeHandler = ( event ) => {
        console.log(event.target.value);
    }
    render () {
        return(
            <Layout grid="one">
                <form className={classes.Pages} method="post" onSubmit={this.loginHandler}>
                    <legend>Log in!</legend>
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.inputChangeHandler}
                        value={this.state.email}
                        placeholder="Enter Email"
                    />

                    <label>Password:</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.inputChangeHandler}
                        value={this.state.password}
                        placeholder="Enter Password"
                    />
                    <input type="checkbox"/> <p className={classes.inline}>Rembember Me</p>
                    <button className={classes.btn}>Login</button>
                    <p><a href="#">Forgot Password?</a></p>
                    <div className={classes.borderTop + classes.pt3}  />

                    <button 
                        onClick={this.switchModeHandler}>SWITCH TO {this.state.isSignup ? 'LOGIN' : 'SIGN UP'}
                    </button>

                    <div className={classes.borderTop + classes.pt3}  />
                </form> 
            </Layout>
            )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password, isSignup) => dispatch(actions.login(email,password,isSignup))
    }
}

export default connect (null, mapDispatchToProps)(Login);