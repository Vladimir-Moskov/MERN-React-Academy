import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getGenres } from "../../../actions";
import { AppState } from "../../../reducers";
import { actionIds } from '../../../constants/action-types';
import GenresComponent from "./GenresComponent";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: () => {
    dispatch(getGenres());
  },
  reloadData: () => {
    dispatch(getGenres());
  }
});

const mapStateToProps = (state: AppState) => {
  return {
    genres: state.genres.genres,
    isLoading: state.isLoading[actionIds.GENRES_GET_DATA],
    error: state.error[actionIds.GENRES_GET_DATA],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenresComponent);

