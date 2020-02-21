import axios from 'axios';

console.log(process.env.BASE_URL);

/* eslint-disable no-param-reassign */
/**
 * An axios proxy to attach the base url and authentication token
 */
const http = axios.create({
  baseURL: 'https://swapi.co/api/',
});

export default http;
