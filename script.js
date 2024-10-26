
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
    const currentPage = window.location.pathname;
  
    // Получаем все ссылки в навигации
    const navLinks = document.querySelectorAll(".types ul li a");
  
    // Проходим по каждой ссылке и сравниваем с текущим путем
    navLinks.forEach((link) => {
      // Получаем путь ссылки (без домена)
      const linkPath = new URL(link.href).pathname; // en verevi hascen
  
      // Для отладки выводим значения в консоль
      console.log("Current Page Path: ", currentPage);
      console.log("Link Path: ", linkPath);
  
      // Сравниваем путь текущей страницы и путь ссылки
      if (currentPage === linkPath) {
        link.classList.add("active");
      }
    });
})
window.addEventListener('load', () => {
    function updateCartCount() {
        // Получаем корзину из localStorage
        let addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];

        // Получаем элемент для отображения количества товаров
        const cartCountElement = document.getElementById("cart_count");
        if (cartCountElement) {
            cartCountElement.textContent = addedProducts.length; // Общее количество всех товаров
        }
    }
    updateCartCount()
    
})


let mainContent = document.createElement('div');
mainContent.classList.add('mainContent');
let mainText = document.createElement('div');
mainText.classList.add('mainText');
let mainImg = document.createElement('div');
mainImg.classList.add('mainImg')
let imageArray = [
    './assets/1.png',
    './assets/4.png'
]
let realImg = document.createElement('img');
let ind = 0;
realImg.src = imageArray[ind]
mainImg.append(realImg)

function changeImg() {
    ind = (ind + 1) % imageArray.length;  // ind+1 vor misht zuyg tiv lini u ver verjinic heto ga arajimi vra
    realImg.src = imageArray[ind];
    mainImg.append(realImg)
}
setInterval(() => {
    changeImg()
}, 2000);

let firstText = document.createElement('p');
let lowText = document.createElement('span');
var links = document.querySelectorAll('.link');
console.log(links);

window.addEventListener('resize', () => {
    let iconArray = [
        `<i class="fa-solid fa-house-chimney"></i>`,
        `<i class="fa-solid fa-utensils"></i>`,
        `<i class="fa-solid fa-user"></i>`,
        `<i class="fa-solid fa-envelope"></i>`,
        `<i class="fa-solid fa-cart-shopping"></i>`
    ];

    let textArray = [
        'home',
        'menu',
        'user',
        'contact',
        '<i class="fa-solid fa-cart-shopping"></i>'
    ]

    function icon(x, ind) {
        x.innerHTML = iconArray[ind % iconArray.length]; // Используем индекс для выбора иконки // ind iconArray-i hamara x-y linkjsi .. %-н мукфвфкстгьф зщйк ешмн уеу шкфтшс ьус емш утй ифофтгь
    }
    function text(x, ind) {
        x.innerHTML = textArray[ind % textArray.length]; // Используем индекс для выбора иконки // ind iconArray-i hamara x-y linkjsi .. %-н мукфвфкстгьф зщйк ешмн уеу шкфтшс ьус емш утй ифофтгь
    }

    var width = window.innerWidth;
    if (width <= 768) {
        lowText.style.fontSize = `18px`;
        firstText.style.fontSize = `21px`;
        links.forEach((e, index) => {
            icon(e, index); // Передаем индекс
        });
    } else {
        lowText.style.fontSize = `24px`;
        firstText.style.fontSize = `29px`;
        firstText.style.fontWeight = 'lighter';
        lowText.style.fontWeight = 'lighter'
        links.forEach((e, index) => {
            text(e, index); // Передаем индекс
        });
    }
});

// Запуск для начального размера окна
window.dispatchEvent(new Event('resize'));


lowText.innerText = 'Starbucks is a coffeehouse chain known for its wide range of espresso - based drinks, cozy atmosphere, and commitment to high - quality coffee and ethical sourcing'
firstText.innerText = "IT'S NOT JUST A COFFE, IT'S A STARBUCKS !";
lowText.style.color = 'white';
firstText.style.color = 'white'
let mainText_menu_btn = document.createElement('button');
mainText_menu_btn.classList.add('mainText_menu_btn');
mainText_menu_btn.innerText = 'See Menu';
mainText_menu_btn.style.backgroundColor = 'white';
mainText_menu_btn.style.color = 'black'
mainText_menu_btn.addEventListener('click', () => {
    location.href = './menu.html'
})
mainText.append(firstText, lowText, mainText_menu_btn);
mainContent.append(mainText, mainImg)
document.querySelector('main').append(mainContent);