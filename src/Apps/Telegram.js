import React, { useState, useEffect } from 'react'
import eye from "./assets/eye.png"
import team from "./assets/team.png"
import emoji from "./assets/emoji.png"
import user from "./assets/user (2).png"
import axios from 'axios';


function Telegram() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [accountLink, setAccountLink] = useState("");
  const [count, setCount] = useState(1000);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Foydalanuvchi login bo'lganini tekshirish
  const [showAuthModal, setShowAuthModal] = useState(false);

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

  const handleOrderClick = (item) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setSelectedItem(item);
    setShowForm(true);
  };


  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Nusxalandi: ' + text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedItem || !paymentProof || !accountLink || !count) {
      alert("Barcha maydonlarni to‘ldiring va chekni yuklang!");
      return;
    }

    const formData = new FormData();
    formData.append('chat_id', '@ucpro_books');
    formData.append(
      'caption',
      `📌 Buyurtma ma’lumotlari:\n\n` +
      `🔗 Akkaunt/Post: ${accountLink}\n` +
      `📢 Xizmat turi: ${selectedItem.name}\n` +
      `📊 Soni: ${count} ta\n` +
      `💰 Narxi: ${selectedItem.price} so'm\n` +
      `Telegram`


    );
    formData.append('photo', paymentProof);

    try {
      await axios.post(
        `https://api.telegram.org/bot7921836882:AAGgfwYebM5JbRLvv0qsqs4cAgmOz6l_YnE/sendPhoto`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert("Buyurtma yuborildi!");
      setShowForm(false);
      setAccountLink("");
      setCount("");
      setPaymentProof(null);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      alert("Ma'lumotlarni yuborishda xatolik yuz berdi");
    }
  };



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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

          </div>
        ))}
      </div>


      {showAuthModal && (
        <div className="form-container">
          <div className="form">
            <h2>Buyurtma berish uchun tizimga kiring</h2>
            <p>Iltimos, buyurtma berish uchun avval tizimga kiring yoki ro‘yxatdan o‘ting.</p>
            <button onClick={() => window.location.href = '/login'}>Login</button>
            <button onClick={() => window.location.href = '/register'}>Ro‘yxatdan o‘tish</button>
            <button onClick={() => setShowAuthModal(false)}>Bekor qilish</button>
          </div>
        </div>
      )}


      {showForm && selectedItem && (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Buyurtma berish</h2>
            <p>Xizmat turi: {selectedItem.name}</p>
            <p>Narxi: {Math.round((selectedItem.price / selectedItem.count) * count)} so'm</p>
            <input
              type="number"
              placeholder="Miqdor"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              required
              style={{ width: "70%", borderBottom: "1px solid #ffffff" }}
            />

            <input
              type="text"
              placeholder="Akkaunt yoki post havolasini kiriting"
              value={accountLink}
              onChange={(e) => setAccountLink(e.target.value)}
              required
              style={{ width: "70%", borderBottom: "1px solid #ffffff" }}
            />

            <p onClick={() => handleCopy("9860080186485357")} className="copy-text">
              To'lov uchun karta (Uzcard(F/T)): 9860 0801 8648 5357
            </p>


            <span>
              To'lov chekini yuklang !!!
              <input type="file" onChange={(e) => setPaymentProof(e.target.files[0])} required />
            </span>

            <button type="submit">Tasdiqlash</button>
          </form>
        </div>
      )}

    </div >
  )
}

export default Telegram