import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id, "id");
  });
  return <div>MovieDetails</div>;
}

export default MovieDetails;
