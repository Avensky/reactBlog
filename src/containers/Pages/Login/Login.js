import React, { Component } from 'react';
import Layout from '../../Layout/Layout';
import classes from '../Pages.module.css';
import { checkValidity } from '../../../utility/utility'

class Login extends Component {
    state = {
    }

    login = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
    }

    inputChangeHandler = ( event ) => {
        console.log(event.target.value);
    }
    render () {
        return(
            <Layout grid="one">
                <form className={classes.Pages} method="post" onSubmit={this.login}>
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
                    <p className={classes.textMuted}>Need An Account? <a href="#">Sign Up Now</a></p>
                    <div className={classes.borderTop + classes.pt3}  />
                </form>
            </Layout>
            )
    }
}
export default Login;