import React from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './Register.module.css';

const register = () => {
    return(
        <Layout grid="new">
            <Header />
            <div className="Register">
                <h1>Register Today!</h1>
                <p>Please fill in this form to create an account.</p>
                <label>Usermame:</label>
                <input type="text" value="Enter Username" />
                <label>Email:</label>
                <input type="text" value="Enter Email" />
                <label>Password:</label>
                <input type="text" value="Enter Password" />
                <label>Confirm Password:</label>
                <input type="text" value="Confirm Password" />
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button className="btn" onClick={this.postDataHandler}>Add Post</button>
                <small class="text-muted"><p>Already Have An Account? <a class="" href="{{ url_for('login') }}">Sign In</a></p></small>
            </div>
        </Layout>
    )
}

export default register;