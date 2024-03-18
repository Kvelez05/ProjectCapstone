import verticalLogo from "../src/Images/footer-logo.png"
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img src={verticalLogo} alt="Vertical Lemon Logo" width="150"/>
      </div>
      <div className="footer-links">
      <div>
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/">Reservations</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li><Link to="/">Address</Link></li>
          <li><Link to="/">Phone Number</Link></li>
          <li><Link to="/">Email</Link></li>
        </ul>
      </div>
      <div>
        <h2>Social Media Links</h2>
        <ul>
          <li><Link to="/">Instagram</Link></li>
          <li><Link to="/">LinkedIn</Link></li>
          <li><Link to="/">Pinterest</Link></li>
        </ul>
      </div>
      </div>
    </footer>
  );
}