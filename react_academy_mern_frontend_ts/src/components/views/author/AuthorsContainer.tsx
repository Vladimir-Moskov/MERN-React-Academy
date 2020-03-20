import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import AuthorsComponent from "./AuthorsComponent";
import { getAuthors } from "../../../actions";
import { AppState } from "../../../reducers";
import { actionIds } from '../../../constants/action-types';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: () => {
    dispatch(getAuthors());
  },
  reloadData: () => {
    dispatch(getAuthors());
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    authors: state.authors.authors,
    isLoading: state.isLoading[actionIds.AUTHORS_GET_DATA],
    error: state.error[actionIds.AUTHORS_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsComponent);

