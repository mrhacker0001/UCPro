import React from 'react'
import dls from "./assets/dls.png"

function DreamLeagueSoccer() {

  const data = [
    { counttanga: 50000, img: dls, price: 115000, countolmos: 1800, collect: "5-6 kun" },
    { counttanga: 80000, img: dls, price: 185000, countolmos: 3000, collect: "9-10 kun" },
    { counttanga: 155000, img: dls, price: 335000, countolmos: 50000, collect: "15-20 kun" },
  ]

  return (
    <div className='DreamLeagueSoccer'>
      <h1>Dream League Soccer</h1>

      <div className="games-carts">
        {data.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>tanga: {item.counttanga} ta</p>
            <p>olmos: {item.countolmos} ta</p>
            <p>narxi: {item.price} so'm</p>
            <p>yig'ish muddat: {item.collect}</p>
            <button><span>buyurtma berish</span></button>
          </div>
        ))}
      </div>
    </div >
  )
}

export default DreamLeagueSoccer