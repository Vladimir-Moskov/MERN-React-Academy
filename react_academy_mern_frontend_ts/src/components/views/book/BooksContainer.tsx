import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getBooks } from "../../../actions";
import { AppState } from "../../../reducers";
import { actionIds } from '../../../constants/action-types';
import BooksComponent from "./BooksComponent";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: () => {
    dispatch(getBooks());
  },
  reloadData: () => {
    dispatch(getBooks());
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    books: state.books.books,
    isLoading: state.isLoading[actionIds.BOOKS_GET_DATA],
    error: state.error[actionIds.BOOKS_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksComponent);

