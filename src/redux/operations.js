import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://647cbe27c0bae2880ad11f9c.mockapi.io';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
