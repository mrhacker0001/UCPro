import React from "react";
import { motion } from "framer-motion";
import telegram from "./assets/telegram.jpeg";
import instagram from "./assets/instagram.jpeg";
import tiktok from "./assets/tiktok.jpeg";
import dreamleaguesoccer from "./assets/Dream League Soccer.jpeg";
import pubg from "./assets/PUBG Icon.jpeg";
import freefire from "./assets/Freefire.jpeg";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Secondpage() {

    const navigate = useNavigate();

    const data = [
        { id: 1, name: "Free Fire", img: freefire, link: "/Apps/FreeFire" },
        { id: 2, name: "PUBG", img: pubg, link: "/Apps/Pubg" },
        { id: 3, name: "Telegram", img: telegram, link: "/Apps/Telegram" },
        { id: 4, name: "Instagram", img: instagram, link: "/Apps/Instagram" },
        { id: 5, name: "Dream League Soccer", img: dreamleaguesoccer, link: "/Apps/DreamLeagueSoccer" },
        { id: 6, name: "TikTok", img: tiktok, link: "/Apps/TikTok" },
    ];

    return (
        <div className="Secondpage">
            <h1>Popular Games</h1>
            <div className="animation-container">
                <motion.div
                    className="animation"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity,
                    }}
                >
                    {data.map((item) => (
                        <div className="item" key={item.id} onClick={() => navigate(item.link)}>
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Secondpage;
