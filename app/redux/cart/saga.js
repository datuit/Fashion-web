import { all, fork, put, call, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';

import {
  ADD_CART,
  CHANGE_CART,
  CHANGE_CART_SUCCESS,
  REMOVE_CART,
  REMOVE_CART_SUCCESS,
} from 'Constants/actionTypes';

import { addCartSuccess, changeCartSuccess, removeCartSuccess } from './action';

function* addCartWithProduct({ payload }) {
  const product = payload;
  const cart = JSON.parse(localStorage.getItem('cart'));
  const productIndex = _.findIndex(cart, o => {
    return o.productId === product.productId;
  });
  if (productIndex === -1) {
    cart.push(product);
  } else {
    _.update(cart[productIndex], 'productQuantity', n => {
      return n + product.productQuantity;
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  yield put(addCartSuccess(cart));
}

const RegisterWithEmailPasswordAsync = async user =>
  Axios('api/user/register', 'POST', user);

function* RegisterWithUsernamePassword({ payload }) {
  const { user, history } = payload;
  try {
    const response = yield call(RegisterWithEmailPasswordAsync, user);
    const { data } = response;
    yield put(registerUserSuccess(data.user));
    Cookie.set('accessToken', data.token.accessToken);
    Cookie.set('refreshToken', data.token.refreshToken);
    history.push('/');
  } catch (error) {
    console.log('login error : ', error);
  }
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, RegisterWithUsernamePassword);
}

export function* watchAddCart() {
  yield takeEvery(ADD_CART, addCartWithProduct);
}

export default function* rootSaga() {
  yield all([fork(watchAddCart)]);
}
