import './style.css'
import Navbar from '../navbar/Navbar'

const Reservations = () => {
  return (
    <div className='reservations'>
      <Navbar />
      <div className='content'>
        <div className='title'>RESERVATIONS</div>
        <div className='reservations-list'>
          <ul>
            <li>MOVIE</li>
            <li>STATUS</li>
            <li>AMOUNT</li>
            <li>DATE</li>
            <li>TIME</li>
            <li>ACTIONS</li>
          </ul>
          <div className='order-list'>
            <ul>
              <li>Avengers</li>
              <li>Payed</li>
              <li>2</li>
              <li>24-12-2021</li>
              <li>13:30</li>
              <li>X</li>
            </ul>
            <ul>
              <li>Avengers</li>
              <li>Reserved</li>
              <li>2</li>
              <li>24-12-2021</li>
              <li>13:30</li>
              <li>X</li>
            </ul>
            <ul>
              <li>Avengers</li>
              <li>Canceled</li>
              <li>2</li>
              <li>24-12-2021</li>
              <li>13:30</li>
              <li>X</li>
            </ul>
            <ul>
              <li>Avengers</li>
              <li>Arhied</li>
              <li>2</li>
              <li>24-12-2021</li>
              <li>13:30</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Reservations
