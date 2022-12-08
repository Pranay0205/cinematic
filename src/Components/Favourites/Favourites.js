import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import classes from "./Favourites.module.css";

export default function Favourites(props) {
  return (
    <span className={classes.FavText}>
      Add as Favourites <FavoriteBorderIcon fontSize="12px" />
    </span>
  );
}
