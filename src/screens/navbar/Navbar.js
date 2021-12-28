import './style.css'
import { Link } from 'react-router-dom'
import UserAvatar from '../../assets/user_avatar.svg'
import PageLogo from '../../assets/logo.svg'

const Navbar = () => {
  function logout(e) {
    localStorage.removeItem('token')
  }

  return (
    <div>
      <nav>
        <Link to='/' className='logoandtitle'>
          <img className='logo' alt='logo' src={PageLogo} />
          <div className='page-title'>Moviegasam Cinema</div>
        </Link>
        <ul>
          <li>
            <Link to='/reservations'>RESERVATIONS</Link>
          </li>
          <li>
            <Link to='/account'>ACCOUNT</Link>
          </li>
          <li>
            <Link to='/movies'>MOVIES</Link>
          </li>
        </ul>
        <div className='navbar-user'>
          <a href='/user'>
            <div>user@mail.com</div>
            <img className='user-avatar' src={UserAvatar} alt='useravatar' />
          </a>
          <button className='btn-logout' onClick={() => logout()}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
