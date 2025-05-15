import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/Auth.css';
import { FaUser, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  return (
    <div className="auth-container">
      <h2>Admin Login</h2>
      <form>
        <div className="input-icon">
          <FaUser />
          <input type="text" placeholder="Username or Email" required />
        </div>
        <div className="input-icon">
          <FaLock />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
        <div className="auth-links">
            <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
