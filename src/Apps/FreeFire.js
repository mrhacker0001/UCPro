import React, { useState } from 'react';
import './Apps.css';
import almaz from './assets/almaz.png';
import axios from 'axios';

function FreeFire() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [paymentProof, setPaymentProof] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [id, setId] = useState("");

    const data = [
        { img: almaz, name: "almaz", price: 13000, count: 105 },
        { img: almaz, name: "almaz", price: 24000, count: 210 },
        { img: almaz, name: "almaz", price: 36000, count: 326 },
        { img: almaz, name: "almaz", price: 34000, count: 431 },
        { img: almaz, name: "almaz", price: 60000, count: 546 },
        { img: almaz, name: "almaz", price: 66000, count: 651 },
        { img: almaz, name: "almaz", price: 92000, count: 872 },
        { img: almaz, name: "almaz", price: 116000, count: 1113 },
    ];

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
        formData.append('caption', `Buyurtma ma’lumotlari:\nMahsulot: ${selectedItem.name}\nNarxi: ${selectedItem.price} so'm\nSoni: ${selectedItem.count} ta\nID: ${id}\nFREE FIRE`);
        formData.append('photo', paymentProof);

        try {
            await axios.post(`https://api.telegram.org/bot7921836882:AAGgfwYebM5JbRLvv0qsqs4cAgmOz6l_YnE/sendPhoto`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Buyurtma yuborildi!');
            setShowForm(false);
            setId("");
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
            alert("Ma'lumotlarni yuborishda xatolik yuz berdi");
        }
    };

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
                        <button onClick={() => handleOrderClick(item)}>buyurtma berish</button>
                    </div>
                ))}
            </div>

            {showForm && selectedItem && (
                <div className='form-container'>
                    <form className='form' onSubmit={handleSubmit}>
                        <h2>Buyurtma berish</h2>
                        <p>Mahsulot: {selectedItem.name}</p>
                        <p>Narxi: {selectedItem.price} so'm</p>
                        <p>Almaz soni: {selectedItem.count} ta</p>
                        <p onClick={() => handleCopy('9860080186485357')} className="copy-text">
                            To'lov uchun karta (Uzcard): 9860 0801 8648 5357
                        </p>
                        <p onClick={() => handleCopy('5189690066340779')} className="copy-text">
                            To'lov uchun karta (Mastercard): 5189 6900 6634 0779
                        </p>
                        <input
                            type="number"
                            placeholder="ID kiriting"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            required
                            style={{ width: "70%", borderBottom: "1px solid #ffffff" }}
                        />
                        <span>To'lov chekini yuklang !!! <input type='file' onChange={(e) => setPaymentProof(e.target.files[0])} required /></span>
                        <button type='submit'>Tasdiqlash</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default FreeFire;
