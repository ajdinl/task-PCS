import './style.css'
import { useSelector } from 'react-redux'
import { FETCH_MOVIES } from '../../features/moviesSlice'
import { MOVIE_API_URL } from '../../Api'
import useFetch from '../../hooks/useFetch'
import Navbar from '../navbar/Navbar'
import Circle from '../../assets/circle.png'
import Popcorn from '../../assets/Popcorn_Icon.svg'
import TapeIcon from '../../assets/Moovies_Icon.svg'
import TicketIcon from '../../assets/entypo_ticket.svg'
import CinemaIcon from '../../assets/noto-v1_cinema.svg'

const HomePage = () => {
  useFetch(MOVIE_API_URL, FETCH_MOVIES)
  const moviesData = useSelector((state) => state.movies)

  return (
    <div>
      <Navbar />
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
      <main>
        <div className='top-content'>
          <div className='top-text'>
            Explore movies we offer and <br></br> choose one for your evening.
          </div>
          <img
            className='top-icon'
            src={TapeIcon}
            alt='tapeicon'
            width={560}
            height={620}
          />
        </div>
        <div className='mid-content'>
          <img
            className='mid-icon'
            src={TicketIcon}
            alt='ticketicon'
            width={425}
            height={425}
          />
          <div className='mid-text'>
            Quicke and easy ticker <br></br> purches and reservation.
          </div>
        </div>
        <div className='bottom-content'>
          <div className='bottom-text'>
            Whatch it it time of your <br></br> choosing on the BIG SCREEN
          </div>
          <img
            className='bottom-icon'
            src={CinemaIcon}
            alt='cinemaicon'
            width={450}
            height={450}
          />
        </div>
      </main>
      <div className='background'></div>
      <footer>
        <div className='footer-text-content'>
          <div className='footer-title'>REGISTER NOW</div>
          <div className='footer-text'>
            Enter into world of <br></br> entertainment and enjoye your{' '}
            <br></br> favorite movies on your terms.
          </div>
        </div>
        <button className='footer-button'>SIGN IN</button>
      </footer>
    </div>
  )
}
export default HomePage
