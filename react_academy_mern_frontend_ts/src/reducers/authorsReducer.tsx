import { BaseAction } from "../actions/BaseAction";
import { actionIds } from "../constants/action-types";

export interface AuthorsState {
    authors?: any;
    details?: any;
}

const initialState: AuthorsState = {
  authors: [],
  details: null
};

export default function authorsReducer(
  state: AuthorsState = initialState,
  action: BaseAction
): AuthorsState {

  switch (action.type) {
    case actionIds.AUTHORS_GET_DATA_SUCCESS:
      return {
        authors: action.payload
      };
    case actionIds.AUTHOR_DETAILS_GET_DATA_SUCCESS:
      return {
        details: action.payload
      };
    default:
      return state;
  }
}
