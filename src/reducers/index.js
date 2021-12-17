import { FETCH_MOVIES } from '../actiontypes/'

export const initialState = {
  loading: true,
  data: [{}],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        loading: false,
        data: action.payload.results,
      }
    default:
      return state
  }
}
