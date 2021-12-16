import { useEffect, useReducer } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { MOVIE_API_URL } from './Api'
import { FETCH_MOVIES } from './actiontypes/'
import { AppContext } from './context'
import { moviesReducer, initialState } from './reducers'
import HomePage from './screens/homePage/homePage'
import Movies from './screens/movies/movies'
import Reservations from './screens/reservations/reservations'
const Routes = () => {
  return useRoutes([
    { path: '', element: <HomePage /> },
    { path: 'movies', element: <Movies /> },
    { path: 'reservations', element: <Reservations /> },
  ])
}

const App = () => {
  const [state, dispatch] = useReducer(moviesReducer, initialState)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((result) => dispatch({ type: FETCH_MOVIES, payload: result }))
    return () => {}
  }, [])

  return (
    <>
      <Router>
        {state.loading ? (
          <div style={{ textAlign: 'center' }}>'Loading...'</div>
        ) : (
          <AppContext.Provider value={state.movies}>
            <Routes />
          </AppContext.Provider>
        )}
      </Router>
    </>
  )
}

export default App
