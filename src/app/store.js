import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from './reducers/filtersSlice'
import { apiSlice } from '../api/apiSlice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
})
