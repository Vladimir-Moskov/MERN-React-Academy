
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';

export interface AuthorDetailsAction extends BaseAction {
  id: string;
}

export function getAuthorDetails(id: string): AuthorDetailsAction {
  return {
    type: actionIds.AUTHOR_DETAILS_GET_DATA,
    id
  };
}

export function getAuthorDetailsRequest(): BaseAction {
  return {
    type: actionIds.AUTHOR_DETAILS_GET_DATA_REQUEST
  };
}

export function getAuthorDetailsSuccess(
  details: any
): BaseAction {
  return {
    type: actionIds.AUTHOR_DETAILS_GET_DATA_SUCCESS,
    payload: details
  };
}

export function getAuthorDetailsFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.AUTHOR_DETAILS_GET_DATA_FAILURE,
    error
  };
}
