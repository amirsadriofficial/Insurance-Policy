import axios from 'axios';

const request = axios.create({
  baseURL: "https://front-end-task.bmbzr.ir",
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(config => {
  // DESC: Remove the x-token header for solve bad requests(400)
  if (config.headers['x-token']) {
    delete config.headers['x-token'];
  }
  return config;
});

export default request;
