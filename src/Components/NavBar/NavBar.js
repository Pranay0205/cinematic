import React, { Fragment } from "react";
// import classes from "./NavBar.module.css";
import { AppBar, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    cursor: "text",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "0%",
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function NavBar(props) {
  const onChangeHandler = (event) => {
    props.setSearchedMovie(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInput
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={props.MovieNameSearched}
              onChange={(event) => onChangeHandler(event)}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <div>
        <Offset />
        {props.children}
      </div>
    </Fragment>
  );
}
