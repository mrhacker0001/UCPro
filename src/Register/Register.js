import React, { useState, useEffect } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        phone: '+998',
        password: '',
    });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');
        const savedPhone = localStorage.getItem('phone');
        const savedPassword = localStorage.getItem('password');

        if (savedName && savedEmail && savedPhone && savedPassword) {
            setFormdata({
                name: savedName,
                email: savedEmail,
                phone: savedPhone,
                password: savedPassword,
            });
            setRememberMe(true);
        }
    }, []);

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    const saveUserToLocalStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!formdata.name || !formdata.email || !formdata.phone || !formdata.password) {
            alert('Barcha maydonlarni to‘ldiring!');
            return;
        }

        if (rememberMe) {
            saveUserToLocalStorage(formdata);
        } else {
            localStorage.removeItem('user');
        }

        try {
            const token = '7528698543:AAEgQhGRDYmX2nUl3gb3J37XhFhUu7mOfdM';
            const chatId = '@ucpro_users';

            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: chatId,
                text: `Ism: ${formdata.name}\nEmail: ${formdata.email}\nTelefon raqam: ${formdata.phone}\nParol: ${formdata.password}`,
            });

            alert('Ro‘yxatdan o‘tish muvaffaqiyatli!');
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
            alert("Ma'lumotlarni yuborishda xatolik yuz berdi");
        }
    };


    return (
        <div className='Register'>
            <div className="register-card">
                <h1>Ro'yxatdan o'tish<span>Davom etish uchun ro'yxatdan o'ting!</span></h1>

                <form className="inputs" onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ism"
                        value={formdata.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formdata.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Telefon raqam"
                        value={formdata.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Parol"
                        value={formdata.password}
                        onChange={handleChange}
                    />

                    <div className="reg">
                        <button type="submit">Ro‘yxatdan o‘tish</button>
                        <span>
                            <input
                                type="checkbox"
                                name="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            /> Remember me
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
