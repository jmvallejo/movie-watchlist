import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../slices/results';

export default configureStore({
  reducer: {
    results: resultsReducer
  }
});
