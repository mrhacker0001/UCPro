import React from 'react'
import "./Apps.css"
import telegram from "./assets/telegram.jpeg";
import instagram from "./assets/instagram.jpeg";
import tiktok from "./assets/tiktok.jpeg";
import dreamleaguesoccer from "./assets/Dream League Soccer.jpeg";
import pubg from "./assets/PUBG Icon.jpeg";
import freefire from "./assets/Freefire.jpeg";
import callofduty from "./assets/callofduty.jpeg";
import { NavLink } from 'react-router-dom';

function Apps() {


    const data = [
        { name: "Free Fire", img: freefire, link: "FreeFire" },
        { name: "PUBG", img: pubg, link: "Pubg" },
        { name: "Telegram", img: telegram, link: "Telegram" },
        { name: "Instagram", img: instagram, link: "Instagram" },
        { name: "Dream League Soccer", img: dreamleaguesoccer, link: "DreamLeagueSoccer" },
        { name: "TikTok", img: tiktok, link: "TikTok" },
        { name: "CALL OF DUTY", img: callofduty, link: "CallOfDuty" },
    ]

    return (
        <div className='Apps'>
            <h1>Ilovalar</h1>
            <div className="game-cards">
                {data.map((item, index) => (
                    <div className="game-card" key={index}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <button><NavLink to={`/Apps/${item.link}`}><span>buyurtma berish</span></NavLink></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Apps