import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          Triv
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contacts">Contact</a></li>
        </ul>
        <div className="button">
          <button className="sign-up">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;