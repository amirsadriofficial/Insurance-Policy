import axios from 'axios';

const request = axios.create({
  baseURL: "https://front-end-task.bmbzr.ir",
  timeout: 5000,
});

// request.interceptors.request.use(
//   (config) => config,
//   () => {
//     // TODO: something...
//   },
// );

export default request;
