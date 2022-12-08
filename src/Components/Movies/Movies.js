import React, { Fragment } from "react";
import MoviesCard from "../Card/MoviesCard";

export default function Movies(props) {
  return (
    <Fragment>
      <MoviesCard movies={props.movies} AddFavMovie={props.AddFavMovie}></MoviesCard>
    </Fragment>
  );
}
