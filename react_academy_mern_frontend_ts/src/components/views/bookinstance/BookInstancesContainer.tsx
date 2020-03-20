import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getBookInstances } from "../../../actions";
import { AppState } from "../../../reducers";
import { actionIds } from '../../../constants/action-types';
import BookInstancesComponent from "./BookInstancesComponent";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: () => {
    dispatch(getBookInstances());
  },
  reloadData: () => {
    dispatch(getBookInstances());
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    bookInstances: state.bookInstances.bookInstances,
    isLoading: state.isLoading[actionIds.BOOK_INSTANCES_GET_DATA],
    error: state.error[actionIds.BOOK_INSTANCES_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookInstancesComponent);

