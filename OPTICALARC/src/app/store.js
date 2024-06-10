// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/AuthSlice';
import { apiSlice } from '../services/apiSlice';
import { authApi } from '../services/AuthApi';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]:apiSlice.reducer,
    [authApi.reducerPath]:authApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
});
export default store;