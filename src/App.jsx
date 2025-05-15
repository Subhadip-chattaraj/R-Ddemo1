import React, { useState } from "react";
import "./App.css"
import { HashRouter as Router, Routes, Route, useLocation,Navigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar"
import ContactPage from "./components/Contact"
import AdminLogin from "./components/AdminLogin"
import Grants from "./components/Grants";
import RFMO from "./components/RFMO";
import Login from "./components/Login"
import SignUp from "./components/Signup"
import ForgotPassword from "./components/ForgotPassword"
import deaful from "./images/default.png"
import FAQ from "./components/FAQ";
import FeedbackForm from "./components/FeedhbackFrom";
import Footer from "./components/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(deaful);

  return (
    <Router>
      <Layout
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </Router>
  );
};

const Layout = ({ profileImage, setProfileImage, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="app-layout">
        <Navbar
          profileImage={profileImage}
          setProfileImage={setProfileImage}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      <Routes>
        <Route path="/" element={<MainPage/>} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<MainPage />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/rfmo" element={<RFMO />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/feed-back" element={<FeedbackForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
