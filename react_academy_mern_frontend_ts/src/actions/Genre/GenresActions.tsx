
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';


export function getGenres(): BaseAction {
  return {
    type: actionIds.GENRES_GET_DATA,
  };
}

export function getGenresRequest(): BaseAction {
  return {
    type: actionIds.GENRES_GET_DATA_REQUEST
  };
}

export function getGenresSuccess(
  genres: any
): BaseAction {
  return {
    type: actionIds.GENRES_GET_DATA_SUCCESS,
    payload: genres
  };
}

export function getGenresFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.GENRES_GET_DATA_FAILURE,
    error
  };
}
