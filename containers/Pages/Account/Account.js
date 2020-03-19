import React from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Layout/Header/Header';
import './Account.module.css';
import user from '../../../assets/images/user.jpg';
import '../Pages.module.css';

const account = () => {
    return(
    <Layout grid="one">
        <div className="Pages Account">
            <img src={user} />
            <h1>By Avensky</h1>
            <small>urielzacarias@gmail.com</small>
            <h2>Update account details</h2>
            <label>Username:</label>
            <input type="text" defaultValue="avensky" />
            <label>Email:</label>
            <input type="text" defaultValue="urielzacarias@gmail.com" />
            <p>Update profile picture</p>
            <input className="picure" type="file" />
            <button className="btn">Add Post</button>

        </div>
    </Layout>
    )
}
export default account;