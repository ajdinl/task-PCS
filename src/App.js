import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  function handleLogin(e) {
    e.preventDefault()
    const form = e.target
    const user = {
      email: form[0].value,
      password: form[1].value,
    }
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token)
      })
  }
  useEffect(() => {
    fetch('/isUserAuth', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => (data.isLoggedIn ? setIsUserLoggedIn(true) : null))
  }, [])
  return (
    <>
      {isUserLoggedIn ? (
        <Routes />
      ) : (
        <form
          style={{ width: '50%', margin: '0 auto' }}
          onSubmit={(e) => handleLogin(e)}
        >
          <input type='email' required />
          <input type='password' required />
          <input type='submit' value='Submit' />
        </form>
      )}
    </>
  )
}

export default App
