import { FETCH_MOVIES } from '../actiontypes/'

export const initialState = {
  loading: true,
  movies: [{}],
}

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        loading: false,
        movies: action.payload.results,
      }
    default:
      return state
  }
}
