import axios from 'axios';

const movieAPi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
movieAPi.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default movieAPi;