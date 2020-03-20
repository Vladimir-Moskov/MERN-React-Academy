
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';

export interface BookInstanceDetailsAction extends BaseAction {
  id: string;
}

export function getBookInstanceDetails(id: string): BookInstanceDetailsAction {
  return {
    type: actionIds.BOOK_INSTANCE_DETAILS_GET_DATA,
    id
  };
}

export function getBookInstanceDetailsRequest(): BaseAction {
  return {
    type: actionIds.BOOK_INSTANCE_DETAILS_GET_DATA_REQUEST
  };
}

export function getBookInstanceDetailsSuccess(
  details: any
): BaseAction {
  return {
    type: actionIds.BOOK_INSTANCE_DETAILS_GET_DATA_SUCCESS,
    payload: details
  };
}

export function getBookInstanceDetailsFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.BOOK_INSTANCE_DETAILS_GET_DATA_FAILURE,
    error
  };
}
