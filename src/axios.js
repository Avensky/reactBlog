import axios from 'axios';
//creating axios instance
const instance = axios.create({
    baseURL: 'https://myblog-97a03.firebaseio.com'
});

export default instance;