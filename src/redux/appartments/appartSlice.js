import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { fetchAppartments } from './operations';

const appartmentSlice = createSlice({
  name: 'appartments',
  initialState: {
    appartments: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAppartments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppartments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.appartments = action.payload;
      })
      .addCase(fetchAppartments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
const persistConfig = {
  key: 'apparts',
  storage,
};

export const appartReducer = persistReducer(
  persistConfig,
  appartmentSlice.reducer
);
