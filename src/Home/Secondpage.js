import React from "react";
import { motion } from "framer-motion";
import telegram from "./assets/telegram.jpeg";
import instagram from "./assets/instagram.jpeg";
import tiktok from "./assets/tiktok.jpeg";
import dreamleaguesoccer from "./assets/Dream League Soccer.jpeg";
import pubg from "./assets/PUBG Icon.jpeg";
import freefire from "./assets/Freefire.jpeg";
import callofduty from "./assets/callofduty.jpeg";

function Secondpage() {
    const data = [
        { id: 1, name: "Free Fire", img: freefire },
        { id: 2, name: "PUBG", img: pubg },
        { id: 3, name: "Telegram", img: telegram },
        { id: 4, name: "Instagram", img: instagram },
        { id: 5, name: "Dream League Soccer", img: dreamleaguesoccer },
        { id: 6, name: "TikTok", img: tiktok },
        { id: 7, name: "CALL OF DUTY", img: callofduty }
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
                        <div className="item" key={item.id}>
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
