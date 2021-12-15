import './style.css'
import Navbar from '../navbar/Navbar'
import Poster from '../../assets/image6.png'
import Image from '../../assets/image9.png'

const Movies = () => {
  return (
    <div className='movies'>
      <Navbar />
      <div className='trending-title'>TRENDING</div>
      <div className='trending-container'>
        <div>
          <a href='/'>
            <img src={Poster} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} alt='poster' />
          </a>
        </div>
      </div>
      <div className='movies-list'>
        <div className='movies-details'>
          <a href='/'>
            <img src={Image} alt='poster' />
          </a>
          <h4>Pulp Fiction</h4>
          <p>
            Pulp Fiction is the story of three men — Jules, Vincent, and Butch —
            and the choices each of them makes regarding life and death, honor
            and disgrace, and the vagaries of chance. ... That's a lot of time
            and emotion to invest in a complex protagonist who exits the story
            off-camera
          </p>
        </div>
        <div className='movies-details'>
          <a href='/'>
            <img src={Image} alt='poster' />
          </a>
          <h4>Pulp Fiction</h4>
          <p>
            Pulp Fiction is the story of three men — Jules, Vincent, and Butch —
            and the choices each of them makes regarding life and death, honor
            and disgrace, and the vagaries of chance. ... That's a lot of time
            and emotion to invest in a complex protagonist who exits the story
            off-camera
          </p>
        </div>
        <div className='movies-details'>
          <a href='/'>
            <img src={Image} alt='poster' />
          </a>
          <h4>Pulp Fiction</h4>
          <p>
            Pulp Fiction is the story of three men — Jules, Vincent, and Butch —
            and the choices each of them makes regarding life and death, honor
            and disgrace, and the vagaries of chance. ... That's a lot of time
            and emotion to invest in a complex protagonist who exits the story
            off-camera
          </p>
        </div>
        <div className='movies-details'>
          <a href='/'>
            <img src={Image} alt='poster' />
          </a>
          <h4>Pulp Fiction</h4>
          <p>
            Pulp Fiction is the story of three men — Jules, Vincent, and Butch —
            and the choices each of them makes regarding life and death, honor
            and disgrace, and the vagaries of chance. ... That's a lot of time
            and emotion to invest in a complex protagonist who exits the story
            off-camera
          </p>
        </div>
        <div className='movies-details'>
          <a href='/'>
            <img src={Image} alt='poster' />
          </a>
          <h4>Pulp Fiction</h4>
          <p>
            Pulp Fiction is the story of three men — Jules, Vincent, and Butch —
            and the choices each of them makes regarding life and death, honor
            and disgrace, and the vagaries of chance. ... That's a lot of time
            and emotion to invest in a complex protagonist who exits the story
            off-camera
          </p>
        </div>
        <div className='movies-details'>
          <a href='/'>
            <img src={Image} alt='poster' />
          </a>
          <h4>Pulp Fiction</h4>
          <p>
            Pulp Fiction is the story of three men — Jules, Vincent, and Butch —
            and the choices each of them makes regarding life and death, honor
            and disgrace, and the vagaries of chance. ... That's a lot of time
            and emotion to invest in a complex protagonist who exits the story
            off-camera
          </p>
        </div>
      </div>
    </div>
  )
}
export default Movies
