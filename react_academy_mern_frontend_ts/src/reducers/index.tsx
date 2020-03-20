import { combineReducers } from "redux";
import authorsReducer from "./authorsReducer";
import booksReduser from "./booksReducer";
import genresReducer from "./genresReducer";
import bookInstancesReducer from "./bookInstancesReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReduser,
  genres: genresReducer,
  bookInstances: bookInstancesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
