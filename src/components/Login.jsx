import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Auth.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <div className="input-icon">
          <FaUser/>
          <input type="text" placeholder="Username or Email" required />
        </div>
        <div className="input-icon">
          <FaLock />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
