import React from 'react'
import './Navbar.css'
import logo from './assets/UCPro.png'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <div className='Navbar'>
      <img src={logo} alt="" />
      <div className="texts">
        <NavLink to='/'><span>Bosh sahifa</span></NavLink>
        <NavLink to='/News'><span>Yangiliklar</span></NavLink>
        <NavLink to='/HelpCentre'><span>Yordam markazi</span></NavLink>
        <NavLink to='/Apps'><span>Ilovalar</span></NavLink>
      </div>

      <div className="nav-btns">
        <button>Ro'yxatdan o'tish</button>
        <button>Kirish</button>
      </div>
    </div>
  )
}

export default Navbar