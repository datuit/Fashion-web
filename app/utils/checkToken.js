/* eslint-disable no-console */
import Cookie from 'js-cookie';
import { checkTokenApi, refreshTokenApi } from './api';

const checkToken = async () => {
  const initialState = {};
  const accessToken = Cookie.get('accessToken');
  if (accessToken) {
    try {
      const response = await checkTokenApi(accessToken);
      const { user } = response.data;
      initialState.authUser = { user };
      return initialState;
    } catch (error) {
      if (error.response.status === 401) {
        const user = await refreshAccessToken();
        initialState.authUser = { user };
        return initialState;
      }
    }
  }
  return initialState;
};

export const refreshAccessToken = async () => {
  const refreshToken = Cookie.get('refreshToken');
  try {
    const response = await refreshTokenApi(refreshToken);
    Cookie.remove('accessToken');
    Cookie.set('accessToken', response.data.accessToken);
    return response.data.user;
  } catch (error) {
    console.log(error.response);
  }
};

export default checkToken;
