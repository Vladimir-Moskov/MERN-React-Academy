import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { getAuthorDetails } from '../services/autor-services';
import  { getAuthorDetailsFailure, getAuthorDetailsRequest, getAuthorDetailsSuccess, AuthorDetailsAction } from '../actions';
import { actionIds } from '../constants/action-types';

function* onLoadAuthorDetails({ id }: AuthorDetailsAction) {
  try {
    yield put(getAuthorDetailsRequest());
    const { data } = yield call(getAuthorDetails, id);
    yield put(getAuthorDetailsSuccess(data.author));
  } catch (error) {
    let message: string;
    if(error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    else {
      message = error.response.data;
    }
    yield put(getAuthorDetailsFailure(`Error: ${message}, Status: ${error.response.status}`));
  }
}

function* watchOnLoadAuthorDetails() {
  yield takeEvery(actionIds.AUTHOR_DETAILS_GET_DATA, onLoadAuthorDetails);
}

export default function* authorDetailsSagas() {
  yield all([fork(watchOnLoadAuthorDetails)]);
}

