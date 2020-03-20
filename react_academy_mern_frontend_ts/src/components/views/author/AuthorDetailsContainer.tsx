import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";


import AuthorDetailsComponent  from "./AuthorDetailsComponent";
import { getAuthorDetails } from "../../../actions";
import { actionIds } from "../../../constants/action-types";
import { AppState } from "../../../reducers";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: (id: string) => {
    dispatch(getAuthorDetails(id));
  },
  reloadData: (id: string) => {
    dispatch(getAuthorDetails(id));
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    details: state.authors.details,
    isLoading: state.isLoading[actionIds.AUTHOR_DETAILS_GET_DATA],
    error: state.error[actionIds.AUTHOR_DETAILS_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetailsComponent);
