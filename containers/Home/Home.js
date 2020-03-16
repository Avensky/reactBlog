import React from 'react';
import {Route} from 'react-router-dom';
import './Home.module.css';
import Auxiliary from '../../hoc/Auxiliary';

const home = () => {
    return (
        <Auxiliary>
            <div className="VideoWrapper">
                <h1>Hello, I'm <span className="highlight">Uriel Zacarias</span></h1>
                <h2>full stack web developer</h2>
            </div>
        </Auxiliary>
    )
}


export default home;