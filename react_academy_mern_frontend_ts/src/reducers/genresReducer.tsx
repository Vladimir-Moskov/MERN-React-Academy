import { BaseAction } from "../actions/BaseAction";
import { actionIds } from "../constants/action-types";

export interface GenresState {
    genres?: any;
    details?: any;
}

const initialState: GenresState = {
  genres: [],
  details: null
};

export default function booksReducer(
  state: GenresState = initialState,
  action: BaseAction
): GenresState {
  switch (action.type) {
    case actionIds.GENRES_GET_DATA_SUCCESS:
      return {
        genres: action.payload
      };
    case actionIds.GENRE_DETAILS_GET_DATA_SUCCESS:
      return {
        details: action.payload
      };
    default:
      return state;
  }
}
