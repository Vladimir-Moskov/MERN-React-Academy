
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';

export interface GenreDetailsAction extends BaseAction {
  id: string;
}

export function getGenreDetails(id: string): GenreDetailsAction {
  return {
    type: actionIds.GENRE_DETAILS_GET_DATA,
    id
  };
}

export function getGenreDetailsRequest(): BaseAction {
  return {
    type: actionIds.GENRE_DETAILS_GET_DATA_REQUEST
  };
}

export function getGenreDetailsSuccess(
  details: any
): BaseAction {
  return {
    type: actionIds.GENRE_DETAILS_GET_DATA_SUCCESS,
    payload: details
  };
}

export function getGenreDetailsFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.GENRE_DETAILS_GET_DATA_FAILURE,
    error
  };
}
