import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getAllGenres } from '../services/genre-services';
import  { getGenresFailure, getGenresRequest, getGenresSuccess } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadGenres() {
  try {
    yield put(getGenresRequest());
    const { data } = yield call(getAllGenres);
    yield put(getGenresSuccess(data.genres));
  } catch (error) {
    yield put(getGenresFailure(`Error: ${error.response.data}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadGenres() {
  yield takeEvery(actionIds.GENRES_GET_DATA, onLoadGenres);
}

export default function* genresSagas() {
  yield all([fork(watchOnLoadGenres)]);
}

