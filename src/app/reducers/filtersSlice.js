import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    ratings: [1, 10],
    years: [1960, 2023],
    sortByRelease: 'new',
    genre: '',
  },
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterRatings: (state, action) => {
      state.filters.ratings = action.payload
    },
    setFilterYears: (state, action) => {
      state.filters.years = action.payload
    },
    setSortByRelease: (state, action) => {
      state.filters.sortByRelease = action.payload
    },
    setFilterGenre: (state, action) => {
      state.filters.genre = action.payload
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    },
  },
})

export const {
  setFilterRatings,
  setFilterYears,
  setFilterGenre,
  setSortByRelease,
  resetFilters,
} = filtersSlice.actions

export const selectFilters = (state) => state.filters.filters

export const filtersReducer = filtersSlice.reducer
