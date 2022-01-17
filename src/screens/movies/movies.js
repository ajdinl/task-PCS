import './style.css'
import Main from '../../Components/movies/Main'
import MoviesDetails from '../../Components/movies/MoviesDetails'
import Navbar from '../../Components/navbar/Navbar'

const Movies = () => {
  return (
    <div className='movies'>
      <Navbar />
      <Main />
      <MoviesDetails />
    </div>
  )
}
export default Movies
