import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-e62b3.firebaseio.com/'
});

export default instance;