import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: false,
    data: [{}],
    details: [{}],
  },
  reducers: {
    FETCH_MOVIES: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    FETCH_MOVIES_DETAILS: (state, action) => {
      state.loading = false
      state.details = action.payload.splice(0, 6)
    },
  },
})

export const moviesReducer = moviesSlice.reducer
export const { FETCH_MOVIES, FETCH_MOVIES_DETAILS } = moviesSlice.actions
