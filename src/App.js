import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { MOVIE_API_URL } from './Api'
import { FETCH_POPULAR_MOVIES } from './features/moviesSlice'
import { useSelector } from 'react-redux'
import useFetch from './hooks/useFetch'
import HomePage from './screens/homePage/homePage'
import Movies from './screens/movies/movies'
import Reservations from './screens/reservations/reservations'

const App = () => {
  const Routes = () => {
    return useRoutes([
      { path: '', element: <HomePage /> },
      { path: 'movies', element: <Movies /> },
      { path: 'reservations', element: <Reservations /> },
    ])
  }
  useFetch(MOVIE_API_URL, FETCH_POPULAR_MOVIES)
  const moviesData = useSelector((state) => state.movies)

  return (
    <>
      <Router>
        {moviesData.loading ? (
          <div style={{ textAlign: 'center' }}>'Loading...'</div>
        ) : (
          <Routes />
        )}
      </Router>
    </>
  )
}

export default App
