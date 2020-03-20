
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';

export interface BookDetailsAction extends BaseAction {
  id: string;
}

export function getBookDetails(id: string): BookDetailsAction {
  return {
    type: actionIds.BOOK_DETAILS_GET_DATA,
    id
  };
}

export function getBookDetailsRequest(): BaseAction {
  return {
    type: actionIds.BOOK_DETAILS_GET_DATA_REQUEST
  };
}

export function getBookDetailsSuccess(
  details: any
): BaseAction {
  return {
    type: actionIds.BOOK_DETAILS_GET_DATA_SUCCESS,
    payload: details
  };
}

export function getBookDetailsFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.BOOK_DETAILS_GET_DATA_FAILURE,
    error
  };
}
