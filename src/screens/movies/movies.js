import './style.css'
import MoviesDetails from './MoviesDetails'
import { useSelector } from 'react-redux'
import { FETCH_MOVIES } from '../../features/moviesSlice'
import { TOP_MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'
import Navbar from '../navbar/Navbar'

const Movies = () => {
  useFetch(TOP_MOVIE_API_URL, FETCH_MOVIES)
  const moviesData = useSelector((state) => state.movies)

  return (
    <div className='movies'>
      <Navbar />
      <div className='trending-title'>TRENDING</div>

      <div className='trending-container'>
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
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w400/${result.poster_path}`}
                alt='movie'
              />
              <div className='movie-details'>
                <div className='movie-title'>{result.title}</div>
                <div className='movie-description'>{result.overview}</div>
                <button
                  onClick={() => {
                    alert('hello')
                  }}
                  className='reserve-now-btn'
                >
                  Reserve now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <MoviesDetails />
    </div>
  )
}
export default Movies
