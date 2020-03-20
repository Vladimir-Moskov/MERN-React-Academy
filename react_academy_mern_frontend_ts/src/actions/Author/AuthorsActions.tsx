
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';


export function getAuthors(): BaseAction {
  return {
    type: actionIds.AUTHORS_GET_DATA,
  };
}

export function getAuthorsRequest(): BaseAction {
  return {
    type: actionIds.AUTHORS_GET_DATA_REQUEST
  };
}

export function getAuthorsSuccess(
  authors: any
): BaseAction {
  return {
    type: actionIds.AUTHORS_GET_DATA_SUCCESS,
    payload: authors
  };
}

export function getAuthorsFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.AUTHORS_GET_DATA_FAILURE,
    error
  };
}
