import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FETCH_MOVIES_DETAILS } from '../../features/moviesSlice'
import { UPCOMING_MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'

const MoviesDetails = () => {
  const [showModal, setShowModal] = useState(false)
  useFetch(UPCOMING_MOVIE_API_URL, FETCH_MOVIES_DETAILS)
  const moviesData = useSelector((state) => state.movies)

  return (
    <div className='second-movies-list'>
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
          <div className='second-movies-details'>
            <div key={index}>
              <div className='second-movie-details-hidden'>
                <button
                  onClick={() => {
                    setShowModal(true)
                  }}
                  className='reserve-now-btn reserve-now-btn-second'
                >
                  Reserve now
                </button>
                {showModal ? (
                  <div className='modal-container'>
                    <div className='modal-content'>
                      <div className='modal-reservation-image'>
                        <h3>RESERVE YOUR PLACE</h3>
                        <img
                          src={`https://image.tmdb.org/t/p/w400/${result.poster_path}`}
                          alt='movie'
                        />
                      </div>
                      <div className='modal-reservation-details'>
                        <div>
                          <h4>NAME</h4>
                          <p>{result.title}</p>
                        </div>
                        <div>
                          <h4>Amount</h4> 1 -- 3 ------------ 20
                        </div>
                        <div>
                          <h4>DATE</h4> 24 - 12 - 2021
                        </div>
                        <div>
                          <h4>TIME</h4> 20:30
                        </div>
                        <button onClick={() => setShowModal(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w400/${result.poster_path}`}
                alt='movie'
              />
              <h2> {result.title} </h2>
              <p>{result.overview}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default MoviesDetails
