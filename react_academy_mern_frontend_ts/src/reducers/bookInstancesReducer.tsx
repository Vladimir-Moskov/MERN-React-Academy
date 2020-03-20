import { BaseAction } from "../actions/BaseAction";
import { actionIds } from "../constants/action-types";

export interface BookInstancesState {
    bookInstances?: any;
    details?: any;
}

const initialState: BookInstancesState = {
  bookInstances: [],
  details: null
};

export default function bookInstancesReducer(
  state: BookInstancesState = initialState,
  action: BaseAction
): BookInstancesState {
  switch (action.type) {
    case actionIds.BOOK_INSTANCES_GET_DATA_SUCCESS:
      return {
        bookInstances: action.payload
      };
    case actionIds.BOOK_INSTANCE_DETAILS_GET_DATA_SUCCESS:
      return {
        details: action.payload
      };
    default:
      return state;
  }
}
