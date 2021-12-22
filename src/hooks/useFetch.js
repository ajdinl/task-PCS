import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useFetch = (url, action) => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(action(result.results)))
  }, [action, dispatch, url])
}

export default useFetch
