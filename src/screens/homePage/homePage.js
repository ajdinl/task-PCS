import './style.css'
import Navbar from '../navbar/Navbar'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Circle from '../../assets/circle.png'
import Popcorn from '../../assets/Popcorn_Icon.svg'
import TapeIcon from '../../assets/Moovies_Icon.svg'
import TicketIcon from '../../assets/entypo_ticket.svg'
import CinemaIcon from '../../assets/noto-v1_cinema.svg'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className='welcome-content'>
          <div>
            <a href='/'>
              <img src={Image1} style={{ height: '540px' }} alt='movie' />
            </a>
          </div>
          <div>
            <a href='/'>
              <img
                src={Image2}
                style={{ width: '400px', height: '540px' }}
                alt='movie'
              />
            </a>
          </div>
          <div>
            <a href='/'>
              <img
                src={Image3}
                style={{ width: '400px', height: '540px' }}
                alt='movie'
              />
            </a>
          </div>
          <div>
            <a href='/'>
              <img
                src={Image4}
                style={{
                  height: '540px',
                }}
                alt='movie'
              />
            </a>
          </div>
        </div>
        <div className='welcome-content-bottom'>
          <img
            className='welcome-popcorn'
            src={Popcorn}
            alt='popcorn'
            width={414}
            height={543}
          />
          <div className='welcome-text'>
            Enjoy all time classics with smile and popcorn
          </div>
          <img
            className='welcome-button'
            src={Circle}
            alt='cicle'
            width={150}
            height={150}
          />
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
