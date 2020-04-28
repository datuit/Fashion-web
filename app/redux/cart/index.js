import cogoToast from 'cogo-toast';
import {
  ADD_CART,
  ADD_CART_SUCCESS,
  CHANGE_CART,
  CHANGE_CART_SUCCESS,
  REMOVE_CART,
  REMOVE_CART_SUCCESS,
} from 'Constants/actionTypes';

const data = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    return cart;
  }
  localStorage.setItem('cart', JSON.stringify([]));
  return [];
};

const initialState = data();

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case ADD_CART_SUCCESS:
      cogoToast.success('Add product to cart successfully', {
        position: 'bottom-left',
      });
      return payload;
    case CHANGE_CART_SUCCESS:
      return payload;
    case REMOVE_CART_SUCCESS:
      cogoToast.success('Successfully deleted the product', {
        position: 'bottom-left',
      });
      return payload;
    default:
      return state;
  }
};
