import React from 'react'
import "./HelpCentre.css"

function HelpCentre() {
    return (
        <div className='HelpCentre'>
            <h1>Xush kelibsiz! Sizda savol bormi? Biz yordam berishga tayyormiz!
                Quyida eng ko‘p beriladigan savollarga javoblarni topishingiz mumkin. Agar savolingizga javob topa olmasangiz, biz bilan bog‘laning!</h1>

            <b> Qanday qilib UC yoki Almaz sotib olsam bo‘ladi?
                <span>Siz kerakli xizmatni tanlab, to‘lovni amalga oshirishingiz kifoya. To‘lov qabul qilingandan keyin buyurtmangiz tezda yetkazib beriladi.</span>
            </b>
            <b>Xizmat qancha vaqt ichida yetkazib beriladi? <span>
                Odatda 5-30 daqiqa ichida, ba’zan esa 1 soatgacha davom etishi mumkin. Agar buyurtmangizni uzoq kutayotgan bo‘lsangiz, biz bilan bog‘laning!</span></b>
            <b>To‘lov qanday usullar orqali amalga oshiriladi? <span>Biz Payme, Click, Uzcard, Visa, Mastercard va boshqa to‘lov tizimlarini qo‘llab-quvvatlaymiz.</span></b>
            <b>Buyurtmam yetib kelmasa nima qilishim kerak? <span>Agar buyurtmangiz belgilangan vaqtda yetib kelmasa, biz bilan bog‘laning va buyurtma raqamingizni taqdim qiling.</span></b>
            <b>Xavfsizlik kafolatlanganmi? <span>Ha, biz faqat ishonchli hamkorlar bilan ishlaymiz va barcha tranzaksiyalar xavfsiz tarzda amalga oshiriladi.</span></b>
            <b> Obunachilar qo‘shish xizmati qanday ishlaydi? <span>Telegram, Instagram yoki TikTok sahifangizga obunachilar qo‘shish uchun, bizga profilingiz havolasini yuboring va kerakli paketni tanlang.</span></b>
            <b>Pulni qaytarib olishim mumkinmi? <span>Agar buyurtmangiz bajarilmasa, to‘lovingiz 100% qaytariladi.</span></b>

            <div className="btn-cards">
                <button><a href="tel:+998882530067"> Telefon chaqiruv orqali bog'lanish</a></button>
                    <button><a href="https://t.me/UCPro_official">Telegram orqali bog'lanish</a></button>
            </div>
        </div>
    )
}

export default HelpCentre