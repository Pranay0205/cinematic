import React from "react";
import Movies from "../../Components/Movies/Movies";
import classes from "./Home.module.css";
import FavouriteMovies from "./FavouriteMovies";
import { Typography } from "@mui/material";

export default function Home(props) {
  if (props.movies.length === 0) {
    return (
      <Typography component="h1" fontSize={100} sx={{ textAlign: "center", color: "white", fontWeight: 700 }}>
        Please Search Movie
      </Typography>
    );
  } else {
    return (
      <div className={classes.Home}>
        <Movies movies={props.movies} AddFavMovie={props.FavMovie} />
        {props.AddedFavMovies.length !== 0 ? <FavouriteMovies movies={props.AddedFavMovies} /> : null}
      </div>
    );
  }
}
