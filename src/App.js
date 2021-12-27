import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
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
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App
