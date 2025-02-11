import React, { useState, useEffect } from 'react'
import team from "./assets/team.png"
import eye from "./assets/eye.png"
import like from "./assets/love.png"
import axios from 'axios';


function TikTok() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [accountLink, setAccountLink] = useState("");
  const [count, setCount] = useState(1000);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Foydalanuvchi login bo'lganini tekshirish
  const [showAuthModal, setShowAuthModal] = useState(false);

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
      `Tik Tok`

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
    <div className='TikTok'>
      <h1>TikTok obunachi</h1>

      <div className="games-carts">
        {data.map((item, index) => (
          <div className="game-cart" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>narxi: {item.price} so'm</p>
            <p>soni: {item.count} ta</p>
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

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

    </div>
  )
}

export default TikTok