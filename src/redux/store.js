import { configureStore } from '@reduxjs/toolkit';
import { tweetsReducer } from './twets-slice';
import { filtersReducer } from './filter-slice';
import { followStatusReducer } from './follow-status-slice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filters: filtersReducer,
    followStatus: followStatusReducer,
  },
});
