import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-content.ingresso.com/v0',
});

export default api;
