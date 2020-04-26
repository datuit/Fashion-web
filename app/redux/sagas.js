import { all } from 'redux-saga/effects';
import authSaga from './authUser/saga';

export default function* rootSagas() {
  yield all([authSaga()]);
}
