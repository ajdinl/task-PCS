import './style.css'
import UserAvatar from '../../assets/user_avatar.svg'
import PageLogo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href='/' className='logoandtitle'>
          <img className='logo' alt='logo' src={PageLogo} />
          <div className='page-title'>Moviegasam Cinema</div>
        </a>
        <ul>
          <li>
            <a href='/reservations'>RESERVATIONS</a>
          </li>
          <li>
            <a href='/account'>ACCOUNT</a>
          </li>
          <li>
            <a href='/movies'>MOVIES</a>
          </li>
        </ul>
        <div className='navbar-user'>
          <a href='/user'>
            <div>user@mail.com</div>
            <img className='user-avatar' src={UserAvatar} alt='useravatar' />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
