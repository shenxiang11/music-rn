import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neteasecloudmusicapi.sweetsmartstrongshen.cc',
});

export default instance;
