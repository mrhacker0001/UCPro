import React from 'react'
import "./Apps.css"
import almaz from './assets/almaz.png'

function FreeFire() {

    const data = [
        { img: almaz, name: "almaz", price: 13000, count: 105 },
        { img: almaz, name: "almaz", price: 24000, count: 210 },
        { img: almaz, name: "almaz", price: 36000, count: 326 },
        { img: almaz, name: "almaz", price: 34000, count: 431 },
        { img: almaz, name: "almaz", price: 60000, count: 546 },
        { img: almaz, name: "almaz", price: 66000, count: 651 },
        { img: almaz, name: "almaz", price: 92000, count: 872 },
        { img: almaz, name: "almaz", price: 116000, count: 1113 },
        { img: almaz, name: "almaz", price: 166000, count: 1659 },
        { img: almaz, name: "almaz", price: 236000, count: 2400 },
        { img: almaz, name: "almaz", price: 352000, count: 3293 },
        { img: almaz, name: "almaz", price: 652000, count: 6160 },
        { img: almaz, name: "almaz", price: 892000, count: 8350 },
        { img: almaz, name: "1 Oylik vaucher", price: 136000, count: 2600 },
        { img: almaz, name: "1 Haftalik vaucher", price: 20000, count: 450 },
    ]

    return (
        <div className='FreeFire'>
            <h1>Free Fire</h1>

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

export default FreeFire