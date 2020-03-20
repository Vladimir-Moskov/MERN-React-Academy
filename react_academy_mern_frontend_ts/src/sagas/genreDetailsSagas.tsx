import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getGenreDetails } from '../services/genre-services';
import  { getGenreDetailsFailure, getGenreDetailsRequest, getGenreDetailsSuccess, GenreDetailsAction } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadGenreDetails({ id }: GenreDetailsAction) {
  try {
    yield put(getGenreDetailsRequest());
    const { data } = yield call(getGenreDetails, id);
    yield put(getGenreDetailsSuccess(data.genre));
  } catch (error) {
    let message: string;
    if(error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    else {
      message = error.response.data;
    }
    yield put(getGenreDetailsFailure(`Error: ${message}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadGenreDetails() {
  yield takeEvery(actionIds.GENRE_DETAILS_GET_DATA, onLoadGenreDetails);
}

export default function* genreDetailsSagas() {
  yield all([fork(watchOnLoadGenreDetails)]);
}

