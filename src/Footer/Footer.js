import React from 'react'
import "./Footer.css"
import logo from "../Navbar/assets/UCPro.png"
import telegram from "./assets/telegram (3).png"
import instagram from "./assets/instagram (3).png"
import contact from "./assets/contact-mail (1).png"

function Footer() {
    return (
        <div className='Footer'>
            <img src={logo} alt="" />

            <div className="games">
                <h1>Onlayn O'yinlar</h1>
                <b>PUBG</b>
                <b>Free Fire</b>
                <b>Call of Duty</b>
                <b>Dream League Soccer</b>
            </div>

            <div className="apps">
                <h1>Ilovalar</h1>
                <b>Instagram</b>
                <b>Telegram</b>
                <b>Tik Tok</b>
                <b>You Tube</b>
            </div>

            <div className="contact-apps">
                <button> <a href="tel:+998882530067"><img src={contact} alt="" /></a> </button>
                <button> <a href="https://t.me/UCPro_official"> <img src={telegram} alt="" /></a></button>
                <button> <a href="https://www.instagram.com/ucpro_official/"> <img src={instagram} alt="" /></a></button>
            </div>
        </div>
    )
}

export default Footer