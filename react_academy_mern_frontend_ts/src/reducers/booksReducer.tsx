import { BaseAction } from "../actions/BaseAction";
import { actionIds } from "../constants/action-types";

export interface BooksState {
    books?: any;
    details?: any;
}

const initialState: BooksState = {
  books: [],
  details: null
};

export default function booksReducer(
  state: BooksState = initialState,
  action: BaseAction
): BooksState {
  switch (action.type) {
    case actionIds.BOOKS_GET_DATA_SUCCESS:
      return {
        books: action.payload
      };
    case actionIds.BOOK_DETAILS_GET_DATA_SUCCESS:
      return {
        details: action.payload
      };
    default:
      return state;
  }
}
