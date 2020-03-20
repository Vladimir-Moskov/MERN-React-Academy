import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getGenreDetails } from "../../../actions";
import { actionIds } from "../../../constants/action-types";
import { AppState } from "../../../reducers";
import GenreDetailsComponent from "./GenreDetailsComponent";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: (id: string) => {
    dispatch(getGenreDetails(id));
  },
  reloadData: (id: string) => {
    dispatch(getGenreDetails(id));
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    details: state.genres.details,
    isLoading: state.isLoading[actionIds.GENRE_DETAILS_GET_DATA],
    error: state.error[actionIds.GENRE_DETAILS_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreDetailsComponent);
