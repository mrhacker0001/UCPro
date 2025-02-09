import React, { useState, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../Apps/assets/eye.png';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [isAvatarUploaded, setIsAvatarUploaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem('name') || 'Noma’lum');
        setEmail(localStorage.getItem('email') || 'Noma’lum');
        setPhone(localStorage.getItem('phone') || 'Noma’lum');
        setPassword(localStorage.getItem('password') || '*****');

        const savedAvatar = localStorage.getItem('avatar');
        if (savedAvatar) {
            setAvatar(savedAvatar);
            setIsAvatarUploaded(true);
        }
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageDataUrl = reader.result;
                setAvatar(imageDataUrl);
                localStorage.setItem('avatar', imageDataUrl);
                setIsAvatarUploaded(true); 
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('phone');
        localStorage.removeItem('password');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className='Profile'>
            <h1>Profil</h1>
            <div className="profile-card">
                <img src={avatar} alt="Avatar" className='avatar' />

                {!isAvatarUploaded && (
                    <input type="file" accept="image/*" onChange={handleAvatarChange} />
                )}

                <div className="informs">
                    <b>Ismingiz: <span>{name}</span></b>
                    <b>Emailingiz: <span>{email}</span></b>
                    <b>Telefon raqamingiz: <span>{phone}</span></b>
                    <b>Parolingiz: <span>{password}</span></b>
                </div>

                <button className="logout-btn" onClick={handleLogout}>Chiqish</button>
            </div>
        </div>
    );
}

export default Profile;
