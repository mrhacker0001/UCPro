import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './assets/UCPro.png';
import profileIcon from './assets/profile-user (1).png'; // Profil ikonkasi uchun rasm
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import telegram from "../Footer/assets/telegram (3).png"
import instagram from "../Footer/assets/instagram (3).png"
import contact from "../Footer/assets/contact-mail (1).png"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    if (savedEmail && savedPhone) {
      setIsLoggedIn(true);
    }
  }, []);

  return (

    <>
      <div className='Navbar'>
        <img src={logo} alt="Logo" onClick={() => navigate('/')} />

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


      <div className="navbar-media">
        <img src={logo} alt="" onClick={() => navigate('/')} />

        <div className="nav-btns-media">
          {isLoggedIn ? (
            <img
              src={profileIcon}
              alt="Profil"
              onClick={() => navigate('/Profile')}
            />
          ) : (
            <>
              <button onClick={() => navigate('/Register')}>Ro'yxatdan o'tish</button>
              <button onClick={() => navigate('/Login')}>Kirish</button>
            </>
          )}
          <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} className='icon' />
          </button>
        </div>
        <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
          <img src={logo} alt="" />

          <NavLink to='/'><span>Bosh sahifa</span></NavLink>
          <NavLink to='/News'><span>Yangiliklar</span></NavLink>
          <NavLink to='/HelpCentre'><span>Yordam markazi</span></NavLink>
          <NavLink to='/Apps'><span>Ilovalar</span></NavLink>

          <div className="contact-apps-media">
            <button> <a href="tel:+998882530067"><img src={contact} alt="" /></a> </button>
            <button> <a href="https://t.me/UCPro_official"> <img src={telegram} alt="" /></a></button>
            <button> <a href="https://www.instagram.com/ucpro_official/"> <img src={instagram} alt="" /></a></button>
          </div>

        </div>

      </div>
    </>
  );
}

export default Navbar;
