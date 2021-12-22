import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
