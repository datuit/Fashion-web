import {
  ADD_CART,
  ADD_CART_SUCCESS,
  CHANGE_CART,
  CHANGE_CART_SUCCESS,
  REMOVE_CART,
  REMOVE_CART_SUCCESS,
} from 'Constants/actionTypes';

export const addCart = product => ({
  type: ADD_CART,
  payload: product,
});

export const addCartSuccess = cart => ({
  type: ADD_CART_SUCCESS,
  payload: cart,
});

export const changeCart = product => ({
  type: CHANGE_CART,
  payload: product,
});
export const changeCartSuccess = product => ({
  type: CHANGE_CART_SUCCESS,
  payload: product,
});

export const removeCart = productId => ({
  type: REMOVE_CART,
  payload: productId,
});

export const removeCartSuccess = productId => ({
  type: REMOVE_CART_SUCCESS,
  payload: productId,
});
