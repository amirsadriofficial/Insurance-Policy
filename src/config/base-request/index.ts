import axios from 'axios';

const request = axios.create({
  baseURL: "https://front-end-task.bmbzr.ir",
  timeout: 5000,
  withCredentials: true
});

export default request;
