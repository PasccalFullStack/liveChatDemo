import axios from 'axios';

const axios_instance  = axios.create({
  baseURL: process.env.REACT_APP_LIVE_CHAT_API,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN,
  },
});
export default axios_instance;