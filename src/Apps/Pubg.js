import React, { useState } from 'react'
import uc from "./assets/uc.jpeg"
import axios from 'axios';


function Pubg() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleOrderClick = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Nusxalandi: ' + text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedItem || !paymentProof) {
      alert('Barcha maydonlarni to‘ldiring va chekni yuklang!');
      return;
    }
    const formData = new FormData();
    formData.append('chat_id', '@ucpro_books');
    formData.append('caption', `Buyurtma ma’lumotlari:\nMahsulot: ${selectedItem.name}\nNarxi: ${selectedItem.price} so'm\nSoni: ${selectedItem.count} ta`);
    formData.append('photo', paymentProof);
    try {
      await axios.post(`https://api.telegram.org/bot7921836882:AAGgfwYebM5JbRLvv0qsqs4cAgmOz6l_YnE/sendPhoto`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Buyurtma yuborildi!');
      setShowForm(false);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      alert("Ma'lumotlarni yuborishda xatolik yuz berdi");
    }
  };



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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>
          </div>
        ))}
      </div>

      {
        showForm && selectedItem && (
          <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
              <h2>Buyurtma berish</h2>
              <p>Mahsulot: {selectedItem.name}</p>
              <p>Narxi: {selectedItem.price} so'm</p>
              <p>UC soni: {selectedItem.count} ta</p>
              <p onClick={() => handleCopy('9860080186485357')} className="copy-text">
                To'lov uchun karta (Uzcard): 9860 0801 8648 5357
              </p>
              <p onClick={() => handleCopy('5189690066340779')} className="copy-text">
                To'lov uchun karta (Mastercard): 5189 6900 6634 0779
              </p>
              <span>To'lov chekini yuklang !!! <input type='file' onChange={(e) => setPaymentProof(e.target.files[0])} required /></span>
              <button type='submit'>Tasdiqlash</button>
            </form>
          </div>
        )
      }
    </div>


  )
}

export default Pubg