import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getBookInstanceDetails } from '../services/bookinstance-services';
import  { getBookInstanceDetailsFailure, getBookInstanceDetailsRequest, getBookInstanceDetailsSuccess, BookInstanceDetailsAction } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadBookInstanceDetails({ id }: BookInstanceDetailsAction) {
  try {
    yield put(getBookInstanceDetailsRequest());
    const { data } = yield call(getBookInstanceDetails, id);
    yield put(getBookInstanceDetailsSuccess(data.bookinstance));
  } catch (error) {
    let message: string;
    if(error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    else {
      message = error.response.data;
    }
    yield put(getBookInstanceDetailsFailure(`Error: ${message}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadBookInstanceDetails() {
  yield takeEvery(actionIds.BOOK_INSTANCE_DETAILS_GET_DATA, onLoadBookInstanceDetails);
}

export default function* bookInstancesDetailsSagas() {
  yield all([fork(watchOnLoadBookInstanceDetails)]);
}

