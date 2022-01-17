import TapeIcon from '../../assets/Moovies_Icon.svg'
import TicketIcon from '../../assets/entypo_ticket.svg'
import CinemaIcon from '../../assets/noto-v1_cinema.svg'

const Main = () => {
  return (
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
      <div className='background'></div>
    </main>
  )
}

export default Main
