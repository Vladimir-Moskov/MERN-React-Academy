
import { BaseAction } from './../BaseAction';
import { BaseActionError } from './../BaseActionError';
import { actionIds } from '../../constants/action-types';


export function getBookInstances(): BaseAction {
  return {
    type: actionIds.BOOK_INSTANCES_GET_DATA,
  };
}

export function getBookInstancesRequest(): BaseAction {
  return {
    type: actionIds.BOOK_INSTANCES_GET_DATA_REQUEST
  };
}

export function getBookInstancesSuccess(
  bookInstances: any
): BaseAction {
  return {
    type: actionIds.BOOK_INSTANCES_GET_DATA_SUCCESS,
    payload: bookInstances
  };
}

export function getBookInstancesFailure(
  error: Error | string
): BaseActionError {
  return {
    type: actionIds.BOOK_INSTANCES_GET_DATA_FAILURE,
    error
  };
}
