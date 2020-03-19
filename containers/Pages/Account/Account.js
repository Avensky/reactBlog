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
        <div className="Pages Account">
            <img src={user} />
            <h1>By Avensky</h1>
            <small>urielzacarias@gmail.com</small>
            <h2>Update account details</h2>
            <label>Username:</label>
            <input type="text" value="avensky" />
            <label>Email:</label>
            <input type="text" value="urielzacarias@gmail.com" />
            <p>Update profile picture</p>
            <input name="picure" type="file" />
            <button className="btn" onClick={this.postDataHandler}>Add Post</button>

        </div>
    </Layout>
    )
}
export default account;