import axios from 'axios';

const imdb = axios.create({
  baseURL: 'https://imdb-api.com',
});

export default imdb;
