import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getBookDetails } from "../../../actions";
import { actionIds } from "../../../constants/action-types";
import { AppState } from "../../../reducers";
import BookDetailsComponent from "./BookDetailsComponent";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: (id: string) => {
    dispatch(getBookDetails(id));
  },
  reloadData: (id: string) => {
    dispatch(getBookDetails(id));
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    details: state.books.details,
    isLoading: state.isLoading[actionIds.BOOK_DETAILS_GET_DATA],
    error: state.error[actionIds.BOOK_DETAILS_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetailsComponent);
