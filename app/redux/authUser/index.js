import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
} from 'Constants/actionTypes';

const initialState = {
  user: {
    userId: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
  },
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return { user: payload, loading: false };
    default:
      return state;
  }
};
