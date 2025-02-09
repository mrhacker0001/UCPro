import React from 'react'
import eye from "./assets/eye.png"
import team from "./assets/team.png"
import emoji from "./assets/emoji.png"
import user from "./assets/user (2).png"

function Telegram() {

  const data = [
    { name: "Arzon ko'rish", img: eye, price: 100, count: 1000 },
    { name: " 🇺🇸 AQSH ko'rish", img: eye, price: 400, count: 1000 },
    { name: "Oxirgi 5ta post uchun ko'rish (Tezkor)", img: eye, price: 482, count: 1000 },
    { name: " Oxirgi 20ta post uchun ko'rish (Tezkor)", img: eye, price: 1600, count: 1000 },
    { name: " Oxirgi 50ta post uchun ko'rish (Tezkor)", img: eye, price: 5000, count: 1000 },
    { name: " Oxirgi 100ta post uchun ko'rish (Tezkor)", img: eye, price: 8000, count: 1000 },
    { name: "🇺🇿 O'zbek ko'rish", img: eye, price: 900, count: 1000 },
    { name: "🇷🇺 Rus ko'rish ", img: eye, price: 900, count: 1000 },
    { name: " Hikoya ko'rish", img: eye, price: 2000, count: 1000 },
    { name: " 🇺🇿 O'zbek Premium ko'rish", img: eye, price: 17000, count: 1000 },
    { name: " 🇺🇸 AQSH Premium ko'rish ", img: eye, price: 17000, count: 1000 },
  ]

  const data2 = [
    { name: " Tezkor obunachi", img: team, price: 7000, count: 1000 },
    { name: "Faol obunachi(Haqiqiy va Jonli)", img: team, price: 17000, count: 1000 },
    { name: "Rus obunachi", img: team, price: 20000, count: 1000 },
    { name: "Chiqmaydigan obunachi (10%)", img: team, price: 22000, count: 1000 },
    { name: "Chiqmaydigan Tezkor obunachi (5%)", img: team, price: 23000, count: 1000 },
    { name: "🇺🇿 Guruh uchun O'zbek obunachi ", img: team, price: 57000, count: 1000 },
    { name: "🇺🇿 Guruh uchun O'zbek obunachi (Ayol) ", img: team, price: 57000, count: 1000 },
    { name: "🇺🇿 Guruh uchun O'zbek obunachi (Erkak)", img: team, price: 57000, count: 1000 },
    { name: "🇺🇿 Guruh uchun O'zbek obunachi (Jonli)", img: team, price: 82000, count: 1000 },
  ]

  const data3 = [
    { name: "Reaksiya (👍 ❤️ 🔥 🎉 😁)", img: emoji, price: 2000, count: 1000 },
    { name: " Reaksiya (👎 😱 💩 😢 🤮) ", img: emoji, price: 2000, count: 1000 },
    { name: "Reaksiya (👌 😍 ❤️‍🔥 🤡 👍 🐳) ", img: emoji, price: 2000, count: 1000 },
    { name: "Reaksiya (💯) ", img: emoji, price: 2000, count: 1000 },
    { name: " Reaksiya (🤣) ", img: emoji, price: 2000, count: 1000 },
    { name: " Reaksiya (🎉) ", img: emoji, price: 2000, count: 1000 },
  ]

  const data4 = [
    { name: "Premium obunachi (kafolat 14 kun)", img: user, price: 100000, count: 1000 },
    { name: "Premium obunachi (kafolat 30 kun)", img: user, price: 135000, count: 1000 },
    { name: "Premium obunachi (kafolat 45 kun)", img: user, price: 245000, count: 1000 },
    { name: "Premium obunachi (kafolat 90 kun)", img: user, price: 425000, count: 1000 },
    { name: "Premium obunachi (kafolat 90 kun)", img: user, price: 425000, count: 1000 },
  ]
  return (
    <div className='Telegram'>
      <h1>Telegram ko'rish</h1>
      <div className="games-carts">
        {data.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <span>narxi: {item.price} so'm</span>
            <span>soni: {item.count} ta</span>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>

      <h1>Telegram obunachi</h1>

      <div className="games-carts">
        {data2.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <span>narxi: {item.price} so'm</span>
            <span>soni: {item.count} ta</span>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>

      <h1>Telegram reaksiya</h1>

      <div className="games-carts">
        {data3.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <span>narxi: {item.price} so'm</span>
            <span>soni: {item.count} ta</span>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>

      <h1>Premium obunachi</h1>

      <div className="games-carts">
        {data4.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <span>narxi: {item.price} so'm</span>
            <span>soni: {item.count} ta</span>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>

    </div >
  )
}

export default Telegram