import React from 'react'
import "./Apps.css"
import team from "./assets/team.png"
import eye from "./assets/eye.png"
import like from "./assets/love.png"



function Instagram() {


  const data = [
    { name: "Premium obunachi (kafolat 60 kun)", img: team, price: 5000, count: 1000 },
    { name: "Chiqmaydigan obunachilar ", img: team, price: 5000, count: 1000 },
    { name: "Tezkor obunachi (Chiqmaydigan) ", img: team, price: 21000, count: 1000 },
    { name: " Chiqmaydigan obunachi (Aralash)", img: team, price: 24000, count: 1000 },
    { name: "O'zbek obunachi (kafolat 360 kun)", img: team, price: 72000, count: 1000 },
  ]

  const data2 = [
    { name: "Ko'rish (Video + Reels + igtv)", img: eye, price: 2000, count: 1000 },
    { name: "Istoriya ko'rish (Tezkor)", img: eye, price: 2000, count: 1000 },
    { name: " Tezkor ko'rish ", img: eye, price: 3500, count: 1000 },
  ]

  const data3 = [
    { name: "Arzon Yoqtirish", img: like, price: 500, count: 1000 },
    { name: "Tezkor Yoqtirish", img: like, price: 1000, count: 1000 },
    { name: "🇷🇺 Yoqtirish(Rus)", img: like, price: 2000, count: 1000 },
    { name: "Yoqtirish(♻️90)", img: like, price: 3000, count: 1000 },

  ]
  return (
    <div className='Instagram'>
      <h1>Instagram obunachi</h1>

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

      <h1>Instagram ko'rish</h1>

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

      <h1>Instagram Like</h1>

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


    </div>
  )
}

export default Instagram