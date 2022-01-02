import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://learn-notes-with-me.azurewebsites.net/api/'
    : 'http://localhost:3000/api/';

const instance = axios.create({
  baseURL,
});

export default instance;
