// Галерии за всички апартаменти, локация и начална страница
const galleries = {
    'greenhouse-floor': [
        "images/Етаж 1/хол_ет1.jpg",
        "images/Етаж 1/хол_ет1_2.jpg",
        "images/Етаж 1/хол_ет1_3.jpg",
        "images/Етаж 1/IMG_20231021_151917.jpg",
        "images/Етаж 1/viber_изображение_2024-06-28_08-56-45-505.jpg",
        "images/Етаж 1/viber_image_2025-06-13_09-08-42-469.jpg",
        "images/Етаж 1/viber_image_2025-06-13_09-09-23-880.jpg",
        "images/Етаж 1/IMG_20210615_130438.jpg",
        "images/Етаж 1/IMG_20220602_104110.jpg",
        "images/Етаж 1/IMG_20190519_150130.jpg",
        "images/Етаж 1/Сп2_ет2_5.jpg",
        "images/Етаж 1/viber_изображение_2022-07-28_15-49-48-792.jpg"
    ],
    'greenhouse-two': [
        "images/12/IMG_20231021_151917.jpg",
        "images/12/viber_изображение_2024-06-28_08-56-45-505.jpg",
        "images/12/хол_ет1.jpg",
        "images/12/хол_ет1_2.jpg",
        "images/12/хол_ет1_3.jpg",
        "images/12/Спалня ап2.jpg",
        "images/12/viber_изображение_2022-07-28_15-49-48-792.jpg",
        "images/12/IMG_20210615_130438.jpg",
        "images/12/IMG_20190519_150130.jpg"
    ],
    'greenhouse-double': [
        "images/11/viber_image_2025-06-13_09-08-42-469.jpg",
        "images/11/viber_image_2025-06-13_09-09-23-880.jpg",
        "images/11/Сп2_ет2_5.jpg",
        "images/11/IMG_20220602_104110.jpg",
        "images/11/viber_изображение_2022-07-28_15-49-48-792.jpg"
    ],
    'redhouse-floor': [
        "images/Етаж 2/Хол_ет2.jpg",
        "images/Етаж 2/Хол_ет2_1.jpg",
        "images/Етаж 2/Хол_ет2_2.jpg",
        "images/Етаж 2/Хол_ет2-3.jpg",
        "images/Етаж 2/Спалня ап.jpg",
        "images/Етаж 2/Спалня ап2.jpg",
        "images/Етаж 2/Сп2_ет2.jpg",
        "images/Етаж 2/Сп2_ет2_2.jpg",
        "images/Етаж 2/Сп2_ет2_3.jpg",
        "images/Етаж 2/Сп2_ет2_4.jpg",
        "images/Етаж 2/IMG_20210615_130438.jpg",
        "images/Етаж 2/IMG_20220602_104110.jpg",
        "images/Етаж 2/IMG_20190519_150130.jpg",
        "images/Етаж 2/Сп2_ет2_5.jpg",
        "images/Етаж 2/viber_изображение_2022-07-28_15-49-48-792.jpg"
    ],
    'redhouse-two': [
        "images/22/Хол_ет2.jpg",
        "images/22/Хол_ет2_1.jpg",
        "images/22/Хол_ет2_2.jpg",
        "images/22/Хол_ет2-3.jpg",
        "images/22/Спалня ап.jpg",
        "images/22/Спалня ап2.jpg",
        "images/22/IMG_20210615_130438.jpg",
        "images/22/IMG_20190519_150130.jpg"
    ],
    'redhouse-double': [
        "images/21/Сп2_ет2.jpg",
        "images/21/Спалня ап.jpg",
        "images/21/Сп2_ет2_4.jpg",
        "images/21/Сп2_ет2_5.jpg",
        "images/21/viber_изображение_2022-07-28_15-49-48-792.jpg"
    ],
    'panorama-two': [
        "images/Етаж 3/IMG_20230818_123617.jpg",
        "images/Етаж 3/IMG_20230818_123656.jpg",
        "images/Етаж 3/signal-2023-08-19-023051_002.jpeg",
        "images/Етаж 3/signal-2023-08-19-023051_003.jpeg",
        "images/Етаж 3/десен с 2 легла.jpg",
        "images/Етаж 3/IMG_20230818_124006.jpg",
        "images/Етаж 3/малка стая1.jpg",
        "images/Етаж 3/viber_изображение_2024-06-17_15-41-38-027.jpg",
        "images/Етаж 3/Сп2_ет2.jpg",
        "images/Етаж 3/Сп2_ет2_2.jpg",
        "images/Етаж 3/Сп2_ет2_3.jpg",
        "images/Етаж 3/Сп2_ет2_4.jpg",
        "images/Етаж 3/IMG_20190607_105938.jpg",
        "images/Етаж 3/IMG_20210701_130759.jpg",
        "images/Етаж 3/IMG_20210701_180543.jpg",
        "images/Етаж 3/IMG_20210701_180555.jpg",
        "images/Етаж 3/viber_изображение_2022-07-28_15-49-48-792.jpg",
        "images/Етаж 3/viber_изображение_2024-06-28_09-14-43-785.jpg"
    ],
    'panorama-three': [
        "images/32/signal-2023-08-19-023051_002.jpeg",
        "images/32/IMG_20230818_123617.jpg",
        "images/32/IMG_20230818_123656.jpg",
        "images/32/signal-2023-08-19-023051_003.jpeg",
        "images/32/десен с 2 легла.jpg",
        "images/32/viber_изображение_2024-06-28_09-14-43-785.jpg",
        "images/32/viber_изображение_2022-07-28_15-49-48-792.jpg",
        "images/32/IMG_20210701_180543.jpg",
        "images/32/IMG_20210701_180555.jpg",
        "images/32/IMG_20190607_105938.jpg",
        "images/32/IMG_20190519_150130.jpg"
    ],
    'panorama-double': [
        "images/31/Сп2_ет2_2.jpg",
        "images/31/IMG_20230818_124006.jpg",
        "images/31/малка стая1.jpg",
        "images/31/viber_изображение_2024-06-17_15-41-38-027.jpg",
        "images/31/Сп2_ет2.jpg",
        "images/31/Сп2_ет2_3.jpg",
        "images/31/Сп2_ет2_4.jpg",
        "images/31/IMG_20210701_130759.jpg",
        "images/31/viber_изображение_2022-07-28_15-49-48-792.jpg",
        "images/31/Сп2_ет2_5.jpg"
    ],
    'studio-three': [
        "images/Партер голямо/2.jpg",
        "images/Партер голямо/1.jpg",
        "images/Партер голямо/3.jpg",
        "images/Партер голямо/4.jpg",
        "images/Партер голямо/5.jpg",
        "images/Партер голямо/0-02-05-69baf356ecff0fcfbd77181ee8b4767e7abac373581a294dd0cbeb33fbf0a990_325d846615e079a1.jpg",
        "images/Партер голямо/viber_изображение_2024-08-01_12-45-17-727.jpg",
        "images/Партер голямо/viber_изображение_2024-08-01_12-45-17-749.jpg",
        "images/Партер голямо/viber_изображение_2024-08-01_12-45-17-837.jpg",
        "images/Партер голямо/viber_изображение_2024-08-01_12-45-18-037.jpg",
        "images/Партер голямо/6.jpg",
        "images/Партер голямо/7.jpg",
        "images/Партер голямо/IMG_20230525_142900.jpg",
        "images/Партер голямо/IMG_20230525_142926.jpg"
    ],
    'studio-two': [
        "images/Партер малко/IMG_20230629_175245.jpg",
        "images/Партер малко/IMG_20230709_103153.jpg",
        "images/Партер малко/viber_изображение_2024-06-28_09-01-50-951.jpg",
        "images/Партер малко/IMG_20230424_123816.jpg",
        "images/Партер малко/IMG_20230424_124406.jpg",
        "images/Партер малко/IMG_20230424_124415.jpg",
        "images/Партер малко/IMG_20230424_124444.jpg",
        "images/Партер малко/IMG_20230525_143138.jpg",
        "images/Партер малко/IMG_20230525_143518.jpg",
        "images/Партер малко/IMG_20160519_154511.jpg"
    ],
    // Галерии за локация
    'bus': [
        "viber_изображение_2022-07-28_15-50-43-373.jpg"
    ],
    'plane': [
        "1655734539020.jpg",
        "1655734539012.jpg",
        "viber_изображение_2022-07-28_15-50-43-373.jpg"
    ],
    // Галерия за началната страница
    'home': [
        "dvor1.jpg",
        "dvor2.jpg",
        "IMG_20230525_143158.jpg",
        "Фасада.jpg",
        "Фасада_1.jpg"
    ],
    // Обща галерия за двора и фасадата
    'common-areas': [
        { src: 'Фасада_1.jpg', alt: 'Фасада 1' },
        { src: '7.jpg', alt: 'Двор' },
        { src: 'dvor2.jpg', alt: 'Двор 2' },
        { src: 'viber_изображение_2024-06-28_09-00-03-679.jpg', alt: 'Външна зона 1' },
        { src: 'viber_изображение_2024-06-28_09-01-11-304.jpg', alt: 'Външна зона 2' }
    ]
};

// Текущи индекси и стартове за всяка галерия
const galleryState = {};
Object.keys(galleries).forEach(key => {
    galleryState[key] = { current: 0, thumbStart: 0 };
});

// Рендериране на миниатюри за всяка галерия
function renderGalleryThumbs(galleryKey) {
    const thumbsDiv = document.getElementById(getThumbsId(galleryKey));
    if (!thumbsDiv) return;
    thumbsDiv.innerHTML = '';
    const images = galleries[galleryKey];
    const state = galleryState[galleryKey];
    for (let i = 0; i < 3; i++) {
        let idx = (state.thumbStart + i) % images.length;
        let img = document.createElement('img');
        if (typeof images[idx] === 'string') {
            img.src = images[idx];
            img.alt = 'Снимка ' + (idx + 1);
        } else {
            img.src = images[idx].src;
            img.alt = images[idx].alt || '';
        }
        img.className = 'thumbnail' + (idx === state.current ? ' selected' : '');
        img.onclick = () => setMainGalleryImg(galleryKey, idx);
        thumbsDiv.appendChild(img);
    }
}

function setMainGalleryImg(galleryKey, idx) {
    galleryState[galleryKey].current = idx;
    const mainImgId = getMainImgId(galleryKey);
    if (mainImgId) {
        const mainImg = document.getElementById(mainImgId);
        if (mainImg) {
            const imgData = galleries[galleryKey][idx];
            if (typeof imgData === 'string') {
                mainImg.src = imgData;
                mainImg.alt = '';
            } else {
                mainImg.src = imgData.src;
                mainImg.alt = imgData.alt || '';
            }
        }
    }
    renderGalleryThumbs(galleryKey);
}

function scrollThumbnails(galleryKey, dir) {
    const state = galleryState[galleryKey];
    const images = galleries[galleryKey];
    state.thumbStart = (state.thumbStart + dir + images.length) % images.length;
    renderGalleryThumbs(galleryKey);
}

function openModalGallery(galleryKey, idx) {
    if (galleries[galleryKey]) {
        showModalImg(galleries[galleryKey], idx);
    }
}

function showModalImg(imgArr, idx) {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modal-img');
    modal.style.display = "flex";
    if (typeof imgArr[idx] === 'string') {
        modalImg.src = imgArr[idx];
        modalImg.alt = '';
    } else {
        modalImg.src = imgArr[idx].src;
        modalImg.alt = imgArr[idx].alt || '';
    }
    window.currentModalGallery = imgArr;
    window.currentModalIdx = idx;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function prevModalImg() {
    let arr = window.currentModalGallery;
    let idx = Number(window.currentModalIdx);
    idx = (idx - 1 + arr.length) % arr.length;
    showModalImg(arr, idx);
    window.currentModalIdx = idx;
}

function nextModalImg() {
    let arr = window.currentModalGallery;
    let idx = Number(window.currentModalIdx);
    idx = (idx + 1) % arr.length;
    showModalImg(arr, idx);
    window.currentModalIdx = idx;
}

// Скриване на падащи менюта при клик извън тях
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.classList.contains('burger-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => menu.classList.remove('show'));
    }
};

// Навигация с клавиатура за модал
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('modal');
    if (modal && (modal.style.display === 'flex' || modal.style.display === 'block')) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextModalImg();
        if (e.key === 'ArrowLeft') prevModalImg();
    }
});

// Показване на секции
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
    document.querySelectorAll('.dropdown-content').forEach(menu => menu.classList.remove('show'));

    // Инициализирай галерията при показване на секцията
    if (galleryState[sectionId] && galleries[sectionId]) {
        setMainGalleryImg(sectionId, galleryState[sectionId].current || 0);
        renderGalleryThumbs(sectionId);
    }
}

// Падащи менюта
function toggleDropdown(name) {
    document.querySelectorAll('.dropdown-content').forEach(menu => menu.classList.remove('show'));
    const dropdown = document.getElementById('dropdown-' + name);
    if (dropdown) dropdown.classList.toggle('show');
}

// Помощни функции за id-та
function getMainImgId(galleryKey) {
    switch (galleryKey) {
        case 'greenhouse-floor': return 'mainGreenhouseImg';
        case 'greenhouse-two': return 'mainGreenhouseTwoImg';
        case 'greenhouse-double': return 'mainGreenhouseDoubleImg';
        case 'redhouse-floor': return 'mainRedhouseFloorImg';
        case 'redhouse-two': return 'mainRedhouseTwoImg';
        case 'redhouse-double': return 'mainRedhouseDoubleImg';
        case 'panorama-floor': return 'mainPanoramaFloorImg';
        case 'panorama-two': return 'mainPanoramaTwoImg';
        case 'panorama-three': return 'mainPanoramaThreeImg';
        case 'panorama-double': return 'mainPanoramaDoubleImg';
        case 'studio-three': return 'mainStudioThreeImg';
        case 'studio-two': return 'mainStudioTwoImg';
        default: return null;
    }
}
function getThumbsId(galleryKey) {
    switch (galleryKey) {
        case 'greenhouse-floor': return 'greenhouseThumbs';
        case 'greenhouse-two': return 'greenhouseTwoThumbs';
        case 'greenhouse-double': return 'greenhouseDoubleThumbs';
        case 'redhouse-floor': return 'redhouseFloorThumbs';
        case 'redhouse-two': return 'redhouseTwoThumbs';
        case 'redhouse-double': return 'redhouseDoubleThumbs';
        case 'panorama-floor': return 'panoramaFloorThumbs';
        case 'panorama-two': return 'panoramaTwoThumbs';
        case 'panorama-three': return 'panoramaThreeThumbs';
        case 'panorama-double': return 'panoramaDoubleThumbs';
        case 'studio-three': return 'studioThreeThumbs';
        case 'studio-two': return 'studioTwoThumbs';
        default: return null;
    }
}

// Инициализация на всички галерии
document.addEventListener('DOMContentLoaded', function() {
    Object.keys(galleries).forEach(key => {
        if (getMainImgId(key) && galleries[key].length > 0) {
            setMainGalleryImg(key, 0);
            renderGalleryThumbs(key);
        }
    });
    applyTranslations();
});

// Падащи секции за локация
function showTravelInfo(type) {
    document.getElementById('travel-info-car').style.display = 'none';
    document.getElementById('travel-info-bus').style.display = 'none';
    document.getElementById('travel-info-plane').style.display = 'none';
    if (type === 'car') document.getElementById('travel-info-car').style.display = 'block';
    if (type === 'bus') document.getElementById('travel-info-bus').style.display = 'block';
    if (type === 'plane') document.getElementById('travel-info-plane').style.display = 'block';
}
function showTravelInfoVertical(type, btn) {
    // Скрий всички секции
    document.getElementById('travel-info-car').style.display = 'none';
    document.getElementById('travel-info-bus').style.display = 'none';
    document.getElementById('travel-info-plane').style.display = 'none';

    // Намери всички бутони и ги върни към нормален стил
    var allBtns = document.querySelectorAll('.how-btn-vertical');
    allBtns.forEach(function(b) {
        b.style.marginBottom = '12px';
    });

    // Покажи избраната секция под съответния бутон
    var sectionId = 'travel-info-' + type;
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        btn.parentNode.insertBefore(section, btn.nextSibling);
        btn.style.marginBottom = '0';
    }
}

// Секции за забавления
function showEntertainmentInfo(type, btn) {
    document.getElementById('entertainment-info-beach').style.display = 'none';
    document.getElementById('entertainment-info-shops').style.display = 'none';
    document.getElementById('entertainment-info-history').style.display = 'none';
    document.getElementById('entertainment-info-fun').style.display = 'none';

    // Премахни active клас от всички бутони
    var buttons = document.querySelectorAll('.how-btn-vertical');
    buttons.forEach(function(b) { b.classList.remove('active'); });

    // Определи кой елемент да покажеш
    var sectionId = 'entertainment-info-' + type;
    var section = document.getElementById(sectionId);

    // Премести секцията точно под бутона
    if (section && btn && btn.parentNode) {
        btn.parentNode.insertBefore(section, btn.nextSibling);
        section.style.display = 'block';
        btn.classList.add('active');
    }
}

// Преводи
const translations = {
    "bg": {
        "siteTitle": "Къща Поморини",
        "welcome": "Добре дошли в Къща Поморини!",
        "contacts": "Контакти"
        // ...добави всички текстове на български
    },
    "en": {
        "siteTitle": "Pomorini House",
        "welcome": "Welcome to Pomorini House!",
        "contacts": "Contacts"
        // ...добави всички текстове на английски
    }
};

let currentLang = "bg";

function toggleLanguage() {
    currentLang = currentLang === "bg" ? "en" : "bg";
    document.getElementById("lang-toggle").innerText = currentLang === "bg" ? "EN" : "BG";
    applyTranslations();
}

function applyTranslations() {
    document.querySelector(".site-title").innerText = translations[currentLang].siteTitle;
    document.querySelector("#home h2").innerText = translations[currentLang].welcome;
    document.querySelector("#contacts h2").innerText = translations[currentLang].contacts;
    // ...добави всички елементи, които искаш да се превеждат
}