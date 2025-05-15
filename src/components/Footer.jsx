import { Link } from "react-router-dom";
import "../Styling/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/grants" className="footer-link">Grants</Link>
        <Link to="/rfmo" className="footer-link">RFMO</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
        <Link to="/faq" className="footer-link">FAQ</Link>
        <Link to="/feed-back" className="footer-link">Feedback</Link>
        <Link to="/login" className="footer-link">Login</Link>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Research Grant Portal. All rights reserved.
      </div>
    </footer>
  );
}
