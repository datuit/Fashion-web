import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import Cookie from 'js-cookie';
import Axios from 'Utils/axios';

import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from 'Constants/actionTypes';

import { loginUserSuccess } from './action';

const loginWithEmailPasswordAsync = async user =>
  Axios('api/user/login', 'POST', user);

function* loginWithUsernamePassword({ payload }) {
  const { user, history } = payload;
  try {
    const response = yield call(loginWithEmailPasswordAsync, user);
    const { data } = response;
    yield put(loginUserSuccess(data.user));
    Cookie.set('accessToken', data.token.accessToken);
    Cookie.set('refreshToken', data.token.refreshToken);
    history.push('/');
  } catch (error) {
    console.log('login error : ', error);
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithUsernamePassword);
}

export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
}
