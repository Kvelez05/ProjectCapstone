import navLogo from './Images/nav-logo.png'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
      <nav className='nav'>
        <div>
        <img src={navLogo} alt="Little Lemon Logo"/>
        </div>
        <div className='header-links'>
        <ul>
            <li className='nav-item1'>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li className='nav-item2'>
              <Link to="/" className="nav-item">About</Link>
            </li>
            <li className='nav-item3'>
              <Link to="/" className="nav-item">Menu</Link>
            </li>
            <li className='nav-item4'>
              <Link to="/booking-page" className="nav-item">Reservations</Link>
            </li>
            <li className='nav-item5'>
              <Link to="/" className="nav-item">Order Online</Link>
            </li>
            <li className='nav-item6'>
              <Link to="/" className="nav-item">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }