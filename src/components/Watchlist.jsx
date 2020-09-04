import React from 'react';
import './Watchlist.scss';
import defaultPoster from '../img/defaultPoster.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovies } from '../selectors/watchlist';
import { removeMovie } from '../actions/watchlist';

const Watchlist = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  return (
    <section className='Watchlist'>
      <h1>My watch list</h1>
      <section className='movies'>
        {Object.values(movies).map(movie => (
          <div className='movie' key={movie.imdbID} onClick={() => dispatch(removeMovie(movie.imdbID))} title={`Remove ${movie.Title}`}>
            <div className='poster' style={{ backgroundImage: `url(${(movie.Poster !== 'N/A' && movie.Poster) || defaultPoster})` }} />
            <div className='info'>
              <div className='title'>{movie.Title}</div>
              <div className='year'>{movie.Year}</div>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Watchlist;
