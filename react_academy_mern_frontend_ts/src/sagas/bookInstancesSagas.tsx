import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getAllBookInstances } from '../services/bookinstance-services';
import  { getBookInstancesFailure, getBookInstancesRequest, getBookInstancesSuccess } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadBookInstances() {
  try {
    yield put(getBookInstancesRequest());
    const { data } = yield call(getAllBookInstances);
    yield put(getBookInstancesSuccess(data.bookinstances));
  } catch (error) {
    yield put(getBookInstancesFailure(`Error: ${error.response.data}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadBookInstances() {
  yield takeEvery(actionIds.BOOK_INSTANCES_GET_DATA, onLoadBookInstances);
}

export default function* bookInstancesSagas() {
  yield all([fork(watchOnLoadBookInstances)]);
}

