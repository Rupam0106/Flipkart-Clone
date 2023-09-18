import axios from 'axios';

axios.interceptors.request.use(
  req => {
    const user = localStorage.getItem('user');
    const token = user && JSON.parse(user).accessToken;
    if (token) {
      req.headers['authorization'] = token;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);
