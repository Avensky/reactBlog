import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import authReducer from './store/reducers/auth';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    //must return request
    //edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use( response =>{
    console.log(response);
    //edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// axios.interceptors.request.eject(myInterceptor);
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducer, composeEnhancers)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
