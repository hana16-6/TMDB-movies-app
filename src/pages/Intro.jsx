import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../redux/movies/moviesAction";
function Intro({ fetchMovies }) {
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <button>call api</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movieData: state.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Intro);
