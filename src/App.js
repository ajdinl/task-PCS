import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { AppContext } from './context'
import { MOVIE_API_URL } from './Api'
import useFetch from './hooks/useFetch'
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
  const { state } = useFetch(MOVIE_API_URL)

  return (
    <>
      <Router>
        {state.loading ? (
          <div style={{ textAlign: 'center' }}>'Loading...'</div>
        ) : (
          <AppContext.Provider value={state.data}>
            <Routes />
          </AppContext.Provider>
        )}
      </Router>
    </>
  )
}

export default App
