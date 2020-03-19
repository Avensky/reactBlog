import React from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './Account.module.css';
import user from '../../../assets/images/user.jpg';
import '../Pages.module.css';

const account = () => {
    return(
    <Layout grid="new">
        <Header />
        <div className="Pages">
            <img src={user} />
            <img src=""></img>
            <h1>By Avensky</h1>
            <p>urielzacarias@gmail.com</p>
            <h1>Update account details</h1>
            <label>Username:</label>
            <input type="text" value="avensky" />
            <label>Email:</label>
            <input type="text" value="urielzacarias@gmail.com" />
            <p>Update profile picture</p>
            <button>Choose file</button>No file chosen
            <button className="btn" onClick={this.postDataHandler}>Add Post</button>

        </div>
    </Layout>
    )
}
export default account;