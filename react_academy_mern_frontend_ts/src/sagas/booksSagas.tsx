import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getAllBooks } from '../services/book-services';
import  { getBooksFailure, getBooksRequest, getBooksSuccess } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadBooks() {
  try {
    yield put(getBooksRequest());
    const { data } = yield call(getAllBooks);
    yield put(getBooksSuccess(data.books));
  } catch (error) {
    yield put(getBooksFailure(`Error: ${error.response.data}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadBooks() {
  yield takeEvery(actionIds.BOOKS_GET_DATA, onLoadBooks);
}

export default function* booksSagas() {
  yield all([fork(watchOnLoadBooks)]);
}

