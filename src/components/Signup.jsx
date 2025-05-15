import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import '../Styling/Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="input-icon">
          <FaUser />
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-icon">
          <FaEnvelope />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-icon">
          <FaPhone />
          <input type="tel" placeholder="Phone" required />
        </div>
        <div className="input-icon">
          <FaLock />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Create Account</button>
        <div className="auth-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
