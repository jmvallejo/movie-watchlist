import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    term: '',
    searching: false,
    movies: []
  },
  reducers: {
    fetchStart: (state, payload) => {
      state.term = payload;
      state.searching = true;
      state.movies = [];
    },
    fetchResponse: (state, action) => {
      state.searching = false;
      state.movies = action.payload;
    },
    fetchError: state => {
      state.searching = false;
      state.movies = [];
    }
  }
});

export const { fetchStart, fetchResponse, fetchError } = resultsSlice.actions;

const API_BASE = 'http://www.omdbapi.com?';
export const search = term => dispatch => {
  dispatch(fetchStart(term));
  const params = new URLSearchParams({
    apikey: 'b0a320b1',
    s: term
  });
  return fetch(API_BASE + params)
    .then(response => response.json())
    .then(({ Search }) => {
      const movies = Search || [];
      dispatch(fetchResponse(movies));
    })
    .catch(() => dispatch(fetchError()));
}

export const selectSearching = state => state.results.searching;
export const selectMovies = state => state.results.movies;

export default resultsSlice.reducer;