import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getBookInstanceDetails } from "../../../actions";
import { actionIds } from "../../../constants/action-types";
import { AppState } from "../../../reducers";
import BookInstanceDetailsComponent from "./BookInstanceDetailsComponent";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: (id: string) => {
    dispatch(getBookInstanceDetails(id));
  },
  reloadData: (id: string) => {
    dispatch(getBookInstanceDetails(id));
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    details: state.bookInstances.details,
    isLoading: state.isLoading[actionIds.BOOK_INSTANCE_DETAILS_GET_DATA],
    error: state.error[actionIds.BOOK_INSTANCE_DETAILS_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookInstanceDetailsComponent);
