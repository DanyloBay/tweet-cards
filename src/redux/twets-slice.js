import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: {
    [fetchTweets.pending]: handlePending,
    [fetchTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    },
    [fetchTweets.rejected]: handleRejected,
  },
});

export const tweetsReducer = tweetsSlice.reducer;
