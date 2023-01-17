import React, { useState } from 'react';

import { moviesData } from './Components/MoviesData';
import SearchMovie from './Components/SearchMovie/SearchMovie';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';

import './App.css';

function App() {
  const [movieList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...movieList, newMovie]);
  };

  return (
    <div className="App">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MovieList
        movieList={movieList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
    </div>
  );
}

export default App;
