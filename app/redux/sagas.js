import { all } from 'redux-saga/effects';
import authSaga from './authUser/saga';
import cartSaga from './cart/saga';

export default function* rootSagas() {
  yield all([authSaga(), cartSaga()]);
}
