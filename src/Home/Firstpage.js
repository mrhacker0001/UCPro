import React from 'react'
import img from "./assets/ba2a00c4-a27a-4181-b460-345e52b55636.jpeg"
import "./Home.css"

function Firstpage() {
    return (
        <div className='Firstpage'>
            <img src={img} alt="" />
            <p>🚀 O‘yin va ijtimoiy tarmoqlarda o‘sish endi muammo emas!
                Saytimiz orqali Free Fire, PUBG, Telegram va boshqa platformalar uchun kerakli resurslarni osongina qo‘lga kiriting. Sizga faqat buyurtma berish kifoya, qolgani esa bizning zimmamizda!  Tezkor yetkazib berish, xavfsiz tranzaksiya va 100% kafolatlangan xizmat bilan sizning ishonchingizni qozonamiz!</p>
        </div>
    )
}

export default Firstpage