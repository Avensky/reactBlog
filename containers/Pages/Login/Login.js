import React from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './Login.module.css';


const login = () => {
    return(
    <Layout grid="new">
        <Header />
        <div className="Login">
                <legend>Log in!</legend>
                <label>Email:</label>
                <input type="text" value="Enter Email" />
                <label>Password:</label>
                <input type="text" value="Enter Password" />
                <input type="checkbox"/> <p className="inline">Rembember Me</p>
                <button className="btn" onClick={this.postDataHandler}>Add Post</button>
                <p><a href="#">Forgot Password?</a></p>
                <div class="border-top pt-3"  />
                <p className="text-muted">Need An Account? <a href="#">Sign Up Now</a></p>
                <div class="border-top pt-3"  />
            </div>
    </Layout>
    )
}
export default login;