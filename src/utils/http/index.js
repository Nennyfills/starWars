import axios from 'axios';

/**
 * An axios proxy to attach the base url and authentication token
 */
const http = axios.create({
  baseURL: 'https://swapi.co/api/',
});

export default http;
