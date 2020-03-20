
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';


export function getBooks(): BaseAction {
  return {
    type: actionIds.BOOKS_GET_DATA,
  };
}

export function getBooksRequest(): BaseAction {
  return {
    type: actionIds.BOOKS_GET_DATA_REQUEST
  };
}

export function getBooksSuccess(
  books: any
): BaseAction {
  return {
    type: actionIds.BOOKS_GET_DATA_SUCCESS,
    payload: books
  };
}

export function getBooksFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.BOOKS_GET_DATA_FAILURE,
    error
  };
}
