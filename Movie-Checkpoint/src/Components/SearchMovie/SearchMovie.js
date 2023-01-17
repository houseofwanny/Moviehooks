import React from 'react';

import Rate from '../Rate';

import './SearchMovie.css';

const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Movies"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;