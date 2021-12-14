import './style.css'
import Navbar from '../navbar/Navbar'
import Poster from '../../assets/image6.png'

const Movies = () => {
  return (
    <div className='movies'>
      <Navbar />
      <div className='trending-container'>
        <div>
          <a href='/'>
            <img src={Poster} width={260} height={400} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} width={260} height={400} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} width={260} height={400} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} width={260} height={400} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} width={260} height={400} alt='poster' />
          </a>
        </div>
        <div>
          <a href='/'>
            <img src={Poster} width={260} height={400} alt='poster' />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Movies
