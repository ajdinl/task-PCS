import './style.css'
import { useSelector } from 'react-redux'
import { FETCH_MOVIES_DETAILS } from '../../features/moviesSlice'
import { UPCOMING_MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'

const MoviesDetails = () => {
  useFetch(UPCOMING_MOVIE_API_URL, FETCH_MOVIES_DETAILS)
  const moviesData = useSelector((state) => state.movies)

  return (
    <div className='movies-list'>
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
        moviesData.details.map((result, index) => (
          <>
            <div className='movies-details'>
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${result.poster_path}`}
                  alt='movie'
                />

                <h2> {result.title} </h2>
                <p>{result.overview}</p>
                <div className='movie-details-second'>
                  <button
                    onClick={() => {
                      alert('hello')
                    }}
                    className='reserve-now-btn btn-second'
                  >
                    Reserve now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  )
}

export default MoviesDetails
