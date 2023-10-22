import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/movies/moviesSlice";
import { RowOfPlaceholderCard } from "../bootstrap/Placeholder";
import SingleMovie from "../single/SingleMovie";
import { useParams } from "react-router-dom";

/**
 * The function `PopularMovies` is a React component that renders a list of movies based on the state
 * of the `moviesReducer` and displays a loading placeholder if the movies are still loading.
 * @returns JSX elements. If the `loading` state is true, it returns a `RowOfPlaceholderCard`
 * component. If the `movies` array has items, it returns a list of `SingleMovie` components, each with
 * a unique key and the corresponding movie object passed as a prop.
 */
function MoviesList() {
  const dispatch = useDispatch();
  const params = useParams();
  const { loading, movies } = useSelector((store) => store.moviesReducer);
  useEffect(() => {
    dispatch(getMovies({ type: params.typeId, id: params.id }));
    console.log(params, "params");
  }, [params]);
  if (loading) {
    return <RowOfPlaceholderCard />;
  } else if (movies.length > 0) {
    return (
      <>
        <div className="movies_list">
          <div className="movie_card_content row justify-content-center align-items-stretch">
            {movies.map((movie, i) => (
              <SingleMovie key={i} movie={movie} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default MoviesList;
