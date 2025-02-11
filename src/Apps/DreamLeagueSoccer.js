import React, { useState } from 'react'
import dls from "./assets/dls.png"
import axios from 'axios';


function DreamLeagueSoccer() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const data = [
    { counttanga: 50000, img: dls, price: 115000, countolmos: 1800, collect: "5-6 kun" },
    { counttanga: 80000, img: dls, price: 185000, countolmos: 3000, collect: "9-10 kun" },
    { counttanga: 155000, img: dls, price: 335000, countolmos: 50000, collect: "15-20 kun" },
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
    if (!selectedItem || !paymentProof || !phoneNumber) {
      alert('Barcha maydonlarni to‘ldiring va chekni yuklang!');
      return;
    }

    const formData = new FormData();
    formData.append('chat_id', '@ucpro_books');
    formData.append(
      'caption',
      `📌 Buyurtma ma’lumotlari:\n\n` +
      `📱 Telefon: ${phoneNumber}\n` +
      `💎 Olmos: ${selectedItem.countolmos} ta\n` +
      `🪙 Tanga: ${selectedItem.counttanga} ta\n` +
      `💰 Narxi: ${selectedItem.price} so'm\n`+
      `Dream League Soccer`
    );
    formData.append('photo', paymentProof);

    try {
      await axios.post(
        `https://api.telegram.org/bot7921836882:AAGgfwYebM5JbRLvv0qsqs4cAgmOz6l_YnE/sendPhoto`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert('Buyurtma yuborildi!');
      setShowForm(false);
      setPhoneNumber(""); 
      setPaymentProof(null); 
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      alert("Ma'lumotlarni yuborishda xatolik yuz berdi");
    }
  };

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
            <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>

          </div>
        ))}
      </div>

      {
        showForm && selectedItem && (
          <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
              <h2>Buyurtma berish</h2>
              <p>Narxi: {selectedItem.price} so'm</p>
              <p>Tanga soni: {selectedItem.counttanga} ta</p>
              <p>Olmos soni: {selectedItem.countolmos} ta</p>

              <p onClick={() => handleCopy('9860080186485357')} className="copy-text">
                To'lov uchun karta (Uzcard(F/T)): 9860 0801 8648 5357
              </p>
              <input
                type="tel"
                placeholder="Telefon raqamingiz"
                className='phone'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <span>To'lov chekini yuklang !!! <input type='file' onChange={(e) => setPaymentProof(e.target.files[0])} required /></span>
              <button type='submit'>Tasdiqlash</button>
            </form>
          </div>
        )
      }
    </div >
  )
}

export default DreamLeagueSoccer