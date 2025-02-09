import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './assets/UCPro.png';
import profileIcon from './assets/profile-user (1).png'; // Profil ikonkasi uchun rasm
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Foydalanuvchi tizimga kirganligini tekshirish
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    if (savedEmail && savedPhone) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className='Navbar'>
      <img src={logo} alt="Logo" />

      <div className="texts">
        <NavLink to='/'><span>Bosh sahifa</span></NavLink>
        <NavLink to='/News'><span>Yangiliklar</span></NavLink>
        <NavLink to='/HelpCentre'><span>Yordam markazi</span></NavLink>
        <NavLink to='/Apps'><span>Ilovalar</span></NavLink>
      </div>

      <div className="nav-btns">
        {isLoggedIn ? (
          <img
            src={profileIcon}
            alt="Profil"
            className="profile-icon"
            onClick={() => navigate('/Profile')}
          />
        ) : (
          <>
            <button onClick={() => navigate('/Register')}>Ro'yxatdan o'tish</button>
            <button onClick={() => navigate('/Login')}>Kirish</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
