import { useEffect, useReducer } from 'react'
import { FETCH_MOVIES } from '../actiontypes'
import { reducer, initialState } from '../reducers'

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch({ type: FETCH_MOVIES, payload: result }))
    return () => {}
  }, [url])
  return { state }
}

export default useFetch
