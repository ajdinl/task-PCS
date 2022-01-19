import { useState } from 'react'

const Modal = ({ result }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
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
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
