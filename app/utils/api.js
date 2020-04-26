import Axios from './axios';

export const checkTokenApi = token =>
  Axios('api/checktoken', 'POST', '', {
    'x-access-token': token,
  });

export const refreshTokenApi = refreshtoken =>
  Axios('api/refreshtoken', 'POST', { refreshtoken });
