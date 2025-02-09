import React from 'react'
import team from "./assets/team.png"
import eye from "./assets/eye.png"
import like from "./assets/love.png"

function TikTok() {

  const data = [
    { name: "Chiqmaydigan obunachi (kafolat 360 kun)", img: team, price: 35000, count: 1000 },
    { name: " Chiqmaydigan obunachi (kafolat 30 kun)", img: team, price: 37000, count: 1000 },
    { name: "Chiqmaydigan obunachi (kafolat 360 kun, tezkor)", img: team, price: 65000, count: 1000 },
  ]

  const data2 = [
    { name: " Video ko'rish", img: eye, price: 100, count: 1000 },
    { name: "Video ko'rish (Tezkor)", img: eye, price: 400, count: 1000 },
  ]

  const data3 = [
    { name: "Tezkor Yoqtirish", img: like, price: 5500, count: 1000 },
  ]

  return (
    <div className='TikTok'>
      <h1>TikTok obunachi</h1>

      <div className="games-carts">
        {data.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>narxi: {item.price} so'm</p>
            <p>soni: {item.count} ta</p>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>

      <h1>TikTok ko'rish</h1>

      <div className="games-carts">
        {data2.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>narxi: {item.price} so'm</p>
            <p>soni: {item.count} ta</p>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>

      <h1>TikTok Yoqtirish</h1>

      <div className="games-carts">
        {data3.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>narxi: {item.price} so'm</p>
            <p>soni: {item.count} ta</p>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TikTok