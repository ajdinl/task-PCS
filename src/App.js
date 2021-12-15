import { useState, useEffect } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { AppContext } from './context'
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
  const [movies, setMovies] = useState([
    {
      id: 580489,
      poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
      release_date: '2021-09-30',
      title: 'Venom: Let There Be Carnage',
    },
  ])

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=e0aa150f7e2e49dc06af5df0dde75888&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
    return () => {}
  }, [])
  console.log(movies)
  return (
    <>
      <Router>
        <AppContext.Provider value={movies}>
          <Routes />
        </AppContext.Provider>
      </Router>
    </>
  )
}

export default App
