import React from 'react'
import uc from "./assets/uc.jpeg"

function Pubg() {

  const data = [
    { name: "UC", img: uc, price: 14000, count: 60 },
    { name: "UC", img: uc, price: 27000, count: 120 },
    { name: "UC", img: uc, price: 40000, count: 180 },
    { name: "UC", img: uc, price: 63000, count: 325 },
    { name: "UC", img: uc, price: 120000, count: 660 },
    { name: "UC", img: uc, price: 132000, count: 720 },
    { name: "UC", img: uc, price: 182000, count: 985 },
    { name: "UC", img: uc, price: 240000, count: 1320 },
    { name: "UC", img: uc, price: 302000, count: 1800 },
    { name: "UC", img: uc, price: 602000, count: 3850 },
    { name: "UC", img: uc, price: 1162000, count: 8100 },
  ]

  return (
    <div className='Pubg' >
      <h1>Pubg</h1>

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
    </div>
  )
}

export default Pubg