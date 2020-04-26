import Axios from 'axios';

export default (url, method = 'GET', data, headers = {}) =>
  Axios({
    url,
    method,
    data,
    headers,
  });
