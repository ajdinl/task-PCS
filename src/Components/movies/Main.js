import { useSelector } from 'react-redux'
import { FETCH_MOVIES } from '../../features/moviesSlice'
import { TOP_MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'
import Modal from './Modal'

const Main = () => {
  useFetch(TOP_MOVIE_API_URL, FETCH_MOVIES)
  const moviesData = useSelector((state) => state.movies)

  return (
    <div>
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
              <div className='trending-movie-details'>
                <div className='trending-movie-title'>{result.title}</div>
                <div className='trending-movie-description'>
                  {result.overview}
                </div>
                <Modal result={result} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Main
