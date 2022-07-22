import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/metricks-white.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className="link">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div>metricks</div>
        </div>
      </Link>
      <ul className="right-nav">
        <Link to="/about" style={{textDecoration: 'none'}}>
          <li style={{ color: location.pathname === '/about' && '#FF00F7' }}>
            About
          </li>
        </Link>
        <li>Blog</li>
        <li>
          <button>Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
