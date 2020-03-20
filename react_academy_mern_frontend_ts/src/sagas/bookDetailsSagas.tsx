import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getBookDetails } from '../services/book-services';
import  { getBookDetailsFailure, getBookDetailsRequest, getBookDetailsSuccess, BookDetailsAction } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadBookDetails({ id }: BookDetailsAction) {
  try {
    yield put(getBookDetailsRequest());
    const { data } = yield call(getBookDetails, id);
    yield put(getBookDetailsSuccess(data.book));
  } catch (error) {
    let message: string;
    if(error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    else {
      message = error.response.data;
    }
    yield put(getBookDetailsFailure(`Error: ${message}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadBookDetails() {
  yield takeEvery(actionIds.BOOK_DETAILS_GET_DATA, onLoadBookDetails);
}

export default function* bookDetailsSagas() {
  yield all([fork(watchOnLoadBookDetails)]);
}

