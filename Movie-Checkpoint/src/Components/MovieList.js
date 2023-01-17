import React from 'react';

import MovieCard from './MovieCard/MovieCard';

const MovieList = ({ movieList, nameSearch, ratingSearch }) => {
  return (
    <div
      className="movie-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {movieList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
  );
};

export default MovieList;