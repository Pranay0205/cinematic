import { Card, CardMedia, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import classes from "./MoviesCard.module.css";
import Grid from "@mui/material/Grid";
import Favourites from "../Favourites/Favourites";

export default function MoviesCard(props) {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item>
        <Grid container justifyContent="center" spacing={6}>
          {props.movies.map((movie) => (
            <Grid key={movie.imdbID} item>
              <Card sx={{ maxWidth: 160, maxHeight: 300 }} className={classes.imageCard}>
                <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
                <CardContent className={classes.CustomContent}>
                  <Typography gutterBottom component="div" className={classes.Title}>
                    {movie.Title}
                  </Typography>
                  <Typography component="div" className={classes.overlay} onClick={() => props.AddFavMovie(movie)}>
                    <Favourites />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
