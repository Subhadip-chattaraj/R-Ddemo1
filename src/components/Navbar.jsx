import React, { useState, useEffect } from "react";
import "../Styling/Navbar.css";
import pic from "../images/subha.jpg"
import {Link,useNavigate} from "react-router-dom";

const Navbar = ({ profileImage, setProfileImage, isLoggedIn, setIsLoggedIn }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const login = () => {
    setIsLoggedIn(true);
  };
  useEffect(() => {
    const user = {
      name: "Subha",
      email: "subha@example.com",
      image: pic // Replace with actual image
    };

    //const loggedIn = isLoggedIn; // Replace with real login logic
    if (isLoggedIn) {
      setIsLoggedIn(true);
      setProfileImage(user.image);
    }
  }, [isLoggedIn]);

  return (
    <>
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Profile</h2>
        </div>
        <div className="sidebar-content">
          {isLoggedIn ? (
            <>
              <p>
                <strong>Name:</strong> Subha
              </p>
              <p>
                <strong>Email:</strong> subha@example.com
              </p>
              <button className="log-btn">Logout</button>
            </>
          ) : (
            <>
              <p>Please log in to view profile details.</p>
              <Link to="/login" ><button className="log-btn">LogoIn</button></Link>
            </>
          )}
        </div>
      </aside>

      <header className="top-navbar">
        <div className="navbar-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-icon"
            onClick={toggleSidebar}
          />

          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`nav-links ${navOpen ? "open" : ""}`}>
            <Link to="/home">HOME</Link>
            <Link to="/grants">GRANTS</Link>
            <Link to="/rfmo">RFMO</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/admin">ADMIN</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
