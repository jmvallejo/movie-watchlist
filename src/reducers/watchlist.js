import { ADD_MOVIE, REMOVE_MOVIE } from "../actions/watchlist";

export const INITIAL_STATE = {};

const watchlist = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MOVIE: {
      const movie = payload;
      return {
        ...state,
        [movie.imdbID]: movie
      };
    }
    case REMOVE_MOVIE: {
      const id = payload;
      const newState = { ...state };
      delete(newState[id]);
      return newState;
    }
    default:
      return state;
  }
}

export default watchlist;