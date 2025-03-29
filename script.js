let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(nextSlide, 3000);



const apiUrl = 'https://api.telegram.org/bot7773067913:AAEfKppiuGpyOci8U-T2GCYH_fVrLc_snYU/sendMessage';

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById('name');
    const telInput = document.getElementById('tel');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Foydalanuvchi ma'lumotlarini tekshirish
        if (!nameInput.value.trim() || !telInput.value.trim()) {
            alert("Iltimos, barcha maydonlarni to'ldiring! * Пожалуйста, заполните все поля!");
            return;
        }

        // Xabarni tayyorlash
        const params = {
            chat_id: '7146565839', // Sizning chat ID
            text: `📌 *Yangi ariza kelib tushdi!* \n\n👤 Ism:  *${nameInput.value}* \n📞 Telefon:  *${telInput.value}*`,
            parse_mode: 'Markdown'
        };

        // Telegram API orqali xabar yuborish
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Xabar muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz 😊 * Сообщение успешно отправлено! Мы скоро с вами свяжемся 😊');
                nameInput.value = '';
                telInput.value = '+998';
            } else {
                alert(`Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring! * Произошла ошибка. Пожалуйста, попробуйте еще раз!`);
            }
        })
        .catch(error => {
            console.error('Xatolik:', error);
            alert("Xabar yuborishda xatolik yuz berdi!");
        });
    });
});

const uzLangButton = document.querySelector('.lang button:first-child');
const ruLangButton = document.querySelector('.lang button:last-child');
const elementsToTranslate = {
    title: document.querySelector('h2'),
    description: document.querySelector('p'),
    namePlaceholder: document.getElementById('name'),
    phonePlaceholder: document.getElementById('tel'),
    submitButton: document.getElementById('submit'),
    note: document.querySelector('.note')
};

const translations = {
    uz: {
        title: "<span>INGLIZ TILI</span> ni o‘rganmoqchimisiz?",
        description: "U holda raqamingizni qoldiring va biz barcha savollaringizga javob beramiz.",
        namePlaceholder: "Ismingiz",
        phonePlaceholder: "+998 (__) __-__-__",
        submitButton: "Yuborish",
        note: "*Darslar Andijon shaharlarida offlayn olib boriladi.",
        successAlert: "Xabar muvaffaqiyatli yuborildi! Tez orada aynan siz bilan bog‘lanamiz😊",
        errorAlert: "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring!",
        emptyFieldsAlert: "Iltimos, barcha maydonlarni to‘ldiring!"
    },
    ru: {
        title: "хотите изучить <span>АНГЛИЙСКИЙ ЯЗЫК</span>?",
        description: "Оставьте свой номер, и мы ответим на все ваши вопросы.",
        namePlaceholder: "Ваше имя",
        phonePlaceholder: "+998 (__) __-__-__",
        submitButton: "Отправить",
        note: "*Занятия проводятся оффлайн в городе Андижан.",
        successAlert: "Сообщение успешно отправлено! Мы скоро с вами свяжемся 😊",
        errorAlert: "Произошла ошибка. Пожалуйста, попробуйте еще раз!",
        emptyFieldsAlert: "Пожалуйста, заполните все поля!"
    }
};

let currentLang = 'uz';

uzLangButton.addEventListener('click', () => changeLanguage('uz'));
ruLangButton.addEventListener('click', () => changeLanguage('ru'));

function changeLanguage(lang) {
    currentLang = lang;
    elementsToTranslate.title.innerHTML = translations[lang].title;
    elementsToTranslate.description.textContent = translations[lang].description;
    elementsToTranslate.namePlaceholder.placeholder = translations[lang].namePlaceholder;
    elementsToTranslate.phonePlaceholder.placeholder = translations[lang].phonePlaceholder;
    elementsToTranslate.submitButton.textContent = translations[lang].submitButton;
    elementsToTranslate.note.textContent = translations[lang].note;
}







// const apiUrl = 'https://api.telegram.org/bot7773067913:AAEfKppiuGpyOci8U-T2GCYH_fVrLc_snYU/sendMessage';


// const name = document.getElementById('name');
// const tel = document.getElementById('tel');
// const submit = document.getElementById('submit');


// // Submit tugmasi bosilganda ishlash
// submit.addEventListener('click', (event) => {
//     event.preventDefault();

//     // Foydalanuvchi ma'lumotlarini tayyorlash
//     const params = {
//         chat_id: '7146565839', // Bu sizning chat ID
//         text: `Ism: ${name.value} \nTelefon: ${tel.value}`
//     };

//     // Telegram API orqali xabar yuborish
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(params),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             if (data.ok) {
//                 alert('Xabar muvaffaqiyatli yuborildi! Tez orada aynan siz bilan boğlanamiz😊');
//             } else {
//                 alert(`Xatolik: ${data.description}`);
//             }
//         })
//         .catch(error => console.error('Xatolik:', error));

//     // Inputlarni tozalash
//     name.value = '';
//     tel.value = '';

// });
