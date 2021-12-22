import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: true,
    data: [{}],
  },
  reducers: {
    FETCH_POPULAR_MOVIES: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
  },
})

export const moviesReducer = moviesSlice.reducer
export const { FETCH_POPULAR_MOVIES } = moviesSlice.actions
