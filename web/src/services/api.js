import axios from 'axios';

const { REACT_APP_API_BASE_URL: baseURL } = process.env;

const api = axios.create({
  baseURL,
});

export default api;
