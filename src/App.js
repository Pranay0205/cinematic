import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { deepPurple, red } from "@mui/material/colors";
import Home from "./Pages/Home/Home";
import { useState, useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: red[500],
    },
    typography: {
      fontFamily: "Righteous",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  },
});

function App() {
  const [searchedMovie, setSearchedMovie] = useState("");

  const [FavMovie, setFavMovies] = useState([]);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const url = `http://www.omdbapi.com/?apikey=cef39bac&s=${searchedMovie}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };

    getMovies().catch(console.error);
  }, [searchedMovie]);

  const AddFavMovie = (movie) => {
    let newFavMovieList = [...FavMovie];

    if (newFavMovieList.includes(movie)) {
      alert("Movie already added to Favourites");
    } else {
      newFavMovieList = [...FavMovie, movie];
    }

    setFavMovies(newFavMovieList);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar MovieNameSearched={searchedMovie} setSearchedMovie={setSearchedMovie}>
          <Routes>
            <Route element={<Home movies={movies} FavMovie={AddFavMovie} AddedFavMovies={FavMovie} />} path="/" />
          </Routes>
        </NavBar>
      </Router>
    </ThemeProvider>
  );
}

export default App;
