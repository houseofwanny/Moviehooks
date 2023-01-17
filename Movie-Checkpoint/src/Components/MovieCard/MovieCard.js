import React from 'react';
import {Link} from 'react-router-dom'
import Rate from '../Rate';

import './MovieCard.css';

const MovieCard = ({
  movie: { name, date, rating, image, type, description },
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
        </div>
        <div className="card_right__button">
          <Link className='link-txt' to={'/description/${e1.id}'}>WATCH TRAILER</Link>

          
        </div>
      </div>
    </div>
  );
};

export default MovieCard;