import { useState } from 'react'
import { useSelector } from 'react-redux'
import { FETCH_MOVIES } from '../../features/moviesSlice'
import { TOP_MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'

const Main = () => {
  const [showModal, setShowModal] = useState(false)
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
              <div className='trending-movie-details'>
                <div className='trending-movie-title'>{result.title}</div>
                <div className='trending-movie-description'>
                  {result.overview}
                </div>
                <button
                  onClick={() => {
                    setShowModal(true)
                  }}
                  className='reserve-now-btn'
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
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Main
