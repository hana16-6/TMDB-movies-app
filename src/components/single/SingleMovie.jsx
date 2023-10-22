import React from "react";
import { Link } from "react-router-dom";

function SingleMovie({ movie }) {
  return (
    <div
      className="card border-0 p-0 nice-shadow movie_card col-md-4 col-lg-2 mx-2 my-3 rounded"
      key={movie.id}
    >
      <div className="card_img">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="card-body rounded-bottom p-2 ">
        <h6 className="card-title">
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          <p className="text-muted py-2">{movie.release_date}</p>
        </h6>
      </div>
    </div>
  );
}

export default SingleMovie;
