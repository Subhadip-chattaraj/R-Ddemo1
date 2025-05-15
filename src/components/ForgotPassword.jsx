import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import '../Styling/Auth.css';

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form>
        <div className="input-icon">
          <FaEnvelope />
          <input type="email" placeholder="Enter your email" required />
        </div>
        <button type="submit">Send OTP</button>
        <div className="auth-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
