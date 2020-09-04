import React from 'react';
import './Results.scss';
import defaultPoster from '../img/defaultPoster.jpg';
import { useSelector } from 'react-redux';
import { selectMovies, selectSearching } from '../slices/results';

const Results = () => {
  const searching = useSelector(selectSearching);
  const movies = useSelector(selectMovies) || [];

  return (
    <section className='Results'>
      {searching && (
        <span>Searching...</span>
      )}
      {!searching && !movies.length && (
        <span>No results found</span>
      )}
      {!searching && !!movies.length && (
        movies.map(movie => (
          <div className='movie' key={movie.imdbID}>
            <div className='poster' style={{ backgroundImage: `url(${(movie.Poster !== 'N/A' && movie.Poster) || defaultPoster})` }} />
            <div className='info'>
              <div className='title'>{movie.Title}</div>
              <div className='year'>{movie.Year}</div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default Results;