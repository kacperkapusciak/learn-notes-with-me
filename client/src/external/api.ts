import axios from 'axios';

const baseURL = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://learn-notes-with-me.azurewebsites.net/api/';
    case 'test':
      return 'https://learn-notes-with-me-staging.azurewebsites.net/api/';
    case 'development':
      return 'http://localhost:3000/api/';
  }
};

export const api = axios.create({
  baseURL: baseURL(),
});
