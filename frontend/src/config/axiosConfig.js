import axios from 'axios';

export default axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:4000/api/v1' : '/';
