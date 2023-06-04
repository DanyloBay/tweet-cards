import { createSlice } from '@reduxjs/toolkit';

const followStatusSlice = createSlice({
  name: 'followStatus',
  initialState: {},
  reducers: {
    setFollowStatus: (state, action) => {
      state[action.payload.id] = action.payload.follow;
    },
  },
});

export const { setFollowStatus } = followStatusSlice.actions;
export const followStatusReducer = followStatusSlice.reducer;
