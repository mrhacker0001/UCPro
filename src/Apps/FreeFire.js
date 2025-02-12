import React, { useState, useEffect } from 'react';
import './Apps.css';
import almaz from './assets/almaz.png';
import axios from 'axios';

function FreeFire() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [paymentProof, setPaymentProof] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [id, setId] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Foydalanuvchi login bo'lganini tekshirish
    const [showAuthModal, setShowAuthModal] = useState(false);

    const data = [
        { img: almaz, name: "almaz", price: 13000, discount: 11999, count: " 105(180)" },
        { img: almaz, name: "almaz", price: 24000, discount: 22999, count: " 210(285)" },
        { img: almaz, name: "almaz", price: 36000, discount: 34999, count: " 326(559)" },
        { img: almaz, name: "almaz", price: 46000, discount: 44999, count: " 431(664)" },
        { img: almaz, name: "almaz", price: 56000, discount: 54999, count: " 546(936)" },
        { img: almaz, name: "almaz", price: 66000, discount: 64999, count: " 651(1086)" },
        { img: almaz, name: "almaz", price: 92000, discount: 89999, count: " 872(1264)" },
        { img: almaz, name: "almaz", price: 116000, discount: 109999, count: "1113(1908)" },
        { img: almaz, name: "almaz", price: 166000, discount: 164999, count: "1659(2454)" },
        { img: almaz, name: "almaz", price: 222000, discount: 219999, count: "2180(2854)" },
        { img: almaz, name: "almaz", price: 352000, discount: 349999, count: "3293(3967)" },
        { img: almaz, name: "almaz", price: 452000, discount: 449999, count: "4360(5034)" },
        { img: almaz, name: "almaz", price: 552000, discount: 549999, count: "6160(10360)" },
        { img: almaz, name: "almaz", price: 892000, discount: 889999, count: "8350(12540)" },
    ];


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

    useEffect(() => {
        const user = localStorage.getItem("user"); // LocalStorage'dan user ma'lumotini olish
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <div className='FreeFire'>
            <h1>Free Fire</h1>
            <br />
            <p className='bonus'>bonuslar faqat birinchi marta beriladi</p>
            <div className="games-carts">
                {data.map((item, index) => (
                    <div className="game-cart" key={index}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                        <span>narxi: <s>{item.price} </s> so'm</span>
                        <span>chegirmada: {item.discount} so'm</span>
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
                <div className='form-container'>
                    <form className='form' onSubmit={handleSubmit}>
                        <h2>Buyurtma berish</h2>
                        <p>Mahsulot: {selectedItem.name}</p>
                        <p>Narxi: {selectedItem.price} so'm</p>
                        <p>Almaz soni: {selectedItem.count} ta</p>
                        <p onClick={() => handleCopy('9860080186485357')} className="copy-text">
                            To'lov uchun karta (Uzcard (F/T)): <br /> 9860 0801 8648 5357
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
