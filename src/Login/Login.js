import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPhone = localStorage.getItem('phone');

        if (savedEmail && savedPhone) {
            setEmail(savedEmail);
            setPhone(savedPhone);
        }
    }, []);

    const handleLogin = () => {
        const savedEmail = localStorage.getItem('email');
        const savedPhone = localStorage.getItem('phone');
        const savedPassword = localStorage.getItem('password');

        if (email === savedEmail && phone === savedPhone && password === savedPassword) {
            alert('Tizimga muvaffaqiyatli kirdingiz!');
            navigate('/'); // Bosh sahifaga yo‘naltirish
        } else {
            alert('Xatolik! Email, telefon yoki parol noto‘g‘ri.');
        }
    };

    return (
        <div className='Register'>
            <div className="register-card">
                <h1>Kirish <span>Davom etish uchun profilingizga kiring</span></h1>

                <div className="inputs">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="tel"
                        placeholder="Telefon raqam"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Parol"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="reg">
                    <button onClick={handleLogin}>Kirish</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
