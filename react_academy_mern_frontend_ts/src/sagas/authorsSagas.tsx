import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getAllAuthors } from '../services/autor-services';
import  { getAuthorsFailure, getAuthorsRequest, getAuthorsSuccess } from '../actions';
import { actionIds } from '../constants/action-types';
//import { BaseAction } from "../actions/BaseAction";

function* onLoadAuthors(/*{}: BaseAction*/) {
  try {
    yield put(getAuthorsRequest());
    const { data } = yield call(getAllAuthors);
    yield put(getAuthorsSuccess(data.authors));
  } catch (error) {
    yield put(getAuthorsFailure(`Error: ${error.response.data}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadAuthors() {
  yield takeEvery(actionIds.AUTHORS_GET_DATA, onLoadAuthors);
}

export default function* authorsSagas() {
  yield all([fork(watchOnLoadAuthors)]);
}

