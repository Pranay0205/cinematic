import React from "react";
import Movies from "../../Components/Movies/Movies";
import { Typography } from "@mui/material";
import classes from "./Home.module.css";

export default function FavouriteMovies(props) {
  return (
    <div>
      <Typography variant="h2" className={classes.FavTitle}>
        Favourites
      </Typography>
      <Movies movies={props.movies} />
    </div>
  );
}
