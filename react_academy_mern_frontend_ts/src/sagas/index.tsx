import { all, fork } from 'redux-saga/effects';
import  authorsSagas from './authorsSagas';
import  authorDetailsSagas from './authorDetailsSagas';
import  booksSagas from './booksSagas';
import  bookDetailsSagas from './bookDetailsSagas';
import  genresSagas from './genresSagas';
import  genreDetailsSagas from './genreDetailsSagas';
import  bookInstancesSagas from './bookInstancesSagas';
import  bookInstanceDetailsSagas from './bookInstanceDetailsSagas';

export const rootSaga = function* root() {
  yield all([
    fork(authorsSagas), 
    fork(authorDetailsSagas), 
    fork(booksSagas), 
    fork(bookDetailsSagas),
    fork(genresSagas), 
    fork(genreDetailsSagas),
    fork(bookInstancesSagas), 
    fork(bookInstanceDetailsSagas),
  ]);
};