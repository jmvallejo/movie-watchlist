import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../slices/results';
import watchlistReducer from '../reducers/watchlist';

export default configureStore({
  reducer: {
    results: resultsReducer,
    watchlist: watchlistReducer
  }
});
