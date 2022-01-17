import { useSelector } from 'react-redux'
import { FETCH_MOVIES } from '../../features/moviesSlice'
import { MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'
import Circle from '../../assets/circle.png'
import Popcorn from '../../assets/Popcorn_Icon.svg'

const Header = () => {
  useFetch(MOVIE_API_URL, FETCH_MOVIES)
  const moviesData = useSelector((state) => state.movies)
  return (
    <header>
      <div className='welcome-content'>
        {moviesData.loading ? (
          <div
            style={{
              position: 'absolute',
              left: '50%',
            }}
          >
            'Loading...'
          </div>
        ) : (
          moviesData.data.map((result, index) => (
            <a
              href={`https://www.themoviedb.org/movie/${result.id}`}
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w400/${result.poster_path}`}
                alt='movie'
              />
            </a>
          ))
        )}
      </div>
      <div className='welcome-content-bottom'>
        <img className='welcome-popcorn' src={Popcorn} alt='popcorn' />
        <div className='welcome-text'>
          Enjoy all time classics with smile and popcorn
        </div>
        <img className='welcome-button' src={Circle} alt='cicle' />
      </div>
    </header>
  )
}

export default Header
