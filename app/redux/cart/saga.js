import { all, fork, put, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';

import { ADD_CART, CHANGE_CART, REMOVE_CART } from 'Constants/actionTypes';

import { addCartSuccess, changeCartSuccess, removeCartSuccess } from './action';

function* addCartWithProduct({ payload }) {
  const product = payload;
  const cart = JSON.parse(localStorage.getItem('cart'));
  const productIndex = _.findIndex(
    cart,
    o => o.productId === product.productId,
  );
  if (productIndex === -1) {
    cart.push(product);
  } else {
    _.update(
      cart[productIndex],
      'productQuantity',
      n => n + product.productQuantity,
    );
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  yield put(addCartSuccess(cart));
}
function* changeCartWithProduct({ payload }) {
  const product = payload;
  const cart = JSON.parse(localStorage.getItem('cart'));
  const productIndex = _.findIndex(
    cart,
    o => o.productId === product.productId,
  );
  cart[productIndex] = product;
  localStorage.setItem('cart', JSON.stringify(cart));
  yield put(changeCartSuccess(cart));
}

function* removeCartWithProduct({ payload }) {
  const productId = payload;

  const cart = JSON.parse(localStorage.getItem('cart'));
  _.remove(cart, n => n.productId === productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  yield put(removeCartSuccess(cart));
}

export function* watchChangeCart() {
  yield takeEvery(CHANGE_CART, changeCartWithProduct);
}

export function* watchAddCart() {
  yield takeEvery(ADD_CART, addCartWithProduct);
}

export function* watchRemoveCart() {
  yield takeEvery(REMOVE_CART, removeCartWithProduct);
}

export default function* rootSaga() {
  yield all([fork(watchAddCart), fork(watchChangeCart), fork(watchRemoveCart)]);
}
