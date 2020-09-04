export const ADD_MOVIE = 'watchlist/addmovie';
export const REMOVE_MOVIE = 'watchlist/removemovie';

export const addMovie = movie => ({
  type: ADD_MOVIE,
  payload: movie
});

export const removeMovie = id => ({
  type: REMOVE_MOVIE,
  payload: id
});