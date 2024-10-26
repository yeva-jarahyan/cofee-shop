window.addEventListener('load', () => {
    function updateCartCount() {
        // Получаем корзину из localStorage
        let addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];

        // Получаем элемент для отображения количества товаров
        const cartCountElement = document.getElementById("cart_count"); // qani apranq ka karzinayum
        if (cartCountElement) {
            cartCountElement.textContent = addedProducts.length; // Общее количество всех товаров
        }
    }
    updateCartCount()
})

let tesakner = document.createElement('div');
tesakner.classList.add('tesakner');
document.getElementById('category_div').append(tesakner)

const Category_buttons = [
    {
        category: 'ice-cream',
        title: 'Ice-creams'
    },
    {
        category: 'coffe',
        title: 'Coffe'
    },
    {
        category: 'chips',
        title: 'Chips'
    },
    {
        category: 'sendvich',
        title: 'Sandvich'
    },
    {
        category: 'juse',
        title: 'juse'
    },
    {
        category: 'all',
        title: 'all'
    }
];
//...............Create a Category Buttons.............................

Category_buttons.map((e) => {
    const Category_Btn = document.createElement('button');
    Category_Btn.setAttribute('data-category', `${e.category}`);
    Category_Btn.classList.add('Category_btn');
    //...................................
    Category_Btn.setAttribute('id', `${e.id}`); // mapi jamanak qani hat ka etqan id a sasrqum u set anum
    Category_Btn.innerText = e.title
    tesakner.append(Category_Btn);
})
let prod_baza = [
    {
        style: '--isNew:true',  // pitaknern en
        title: 'ICE-LATTE',
        category: 'coffe',    // sra categury-n u tesaki id-n petqa nuyny lini ?
        price: 6,
        img: 'https://b.zmtcdn.com/data/pictures/chains/3/56603/9b60e87fc9c1d60fbb4c2205ccdbd5ef.jpg',
        info: 'MacCoffee Original is 100% pure soluble coffee granules, made from a perfect combination of Central and South American Arabica beans, which have been roasted to perfection. It has an amazing aroma, rich in taste and an easy lingering finish.'
    },
    {
        style: '--isNew:true',
        title: 'MATCHA',
        category: 'coffe',
        price: 10,
        img: 'https://cdn.shopify.com/s/files/1/0590/2706/2950/files/Starbucks.Matcha0_480x480.png?v=1697473911',
        info: 'Matcha is a high-grade green tea ground into powdered form. The green tea powder is whisked into hot water, instead of steeped, to form a frothy drink. The meditative act of preparing, presenting, and sipping matcha is the backbone of the Japanese tea ceremony'
    },
    {
        style: '--isNew:true',
        title: 'BIG-SENDVICH',
        category: 'sendvich',
        price: 21,
        img: 'https://thebigmansworld.com/wp-content/uploads/2022/06/chopped-cheese3.jpg',
        info: 'Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. The bread is frequently coated with condiments such as mayonnaise or mustard to enhance its flavour and texture, but may be served plain ("dry").'
    },
    {
        style: '--isNew:true',
        title: 'ice-cooke',
        category: 'coffe',
        price: 5,
        img: 'https://www.yourhomebasedmom.com/wp-content/uploads/2020/06/cookies-and-cream-ice-cream-7.jpg',
        info: 'Potato chips (crisps) are very thin slices of potatoes (1–1.5mm) which have been deep-fried at around 180°C until they were dry and brittle, with a finished moisture concentration of 1.3–1.5% to ensure stability of crispness in the product.'
    },
    {
        style: '--isHot:true',
        title: 'potato-chips',
        category: 'chips',
        price: 5,
        img: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12711881_LXL1_20220908.jpg',
        info: 'Potato chips (crisps) are very thin slices of potatoes (1–1.5mm) which have been deep-fried at around 180°C until they were dry and brittle, with a finished moisture concentration of 1.3–1.5% to ensure stability of crispness in the product.'
    },
    {
        style: '--isHot:true',
        title: 'mokhito',
        category: 'juse',
        price: 5,
        img: 'https://kitchenontheavenue.com/wp-content/uploads/2023/10/virgin_mojito-06.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        style: '--isHot:true',
        title: 'mac-coffe',
        category: 'coffe',
        price: 4,
        img: 'https://www.forkinthekitchen.com/wp-content/uploads/2022/07/220629.iced_.latte_.vanilla-8882.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'ultra-matcha',
        category: 'coffe',
        price: 6,
        img: 'https://www.figjar.com/wp-content/uploads/2024/04/oat-milk-matcha-latte.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'something',
        category: 'juse',
        price: 6,
        img: 'https://besidethemountain.com/wp-content/uploads/2023/12/mango-smoothie-without-yogurt-14.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'matermelon fresh',
        category: 'juse',
        price: 6,
        img: 'https://www.eatingwell.com/thmb/d9os8qr1Qn89eyrnYmNIyM2e-MU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CreamyWatermelonSmoothie_03114_preview-672780aa7a53471cb0db422245da039c.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'strowBarry fresh',
        category: 'juse',
        price: 6,
        img: 'https://mocktail.net/wp-content/uploads/2022/08/Cranberry-Orange-Juice-Mocktail_2.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'matermelon fresh',
        category: 'juse',
        price: 6,
        img: 'https://www.eatingwell.com/thmb/d9os8qr1Qn89eyrnYmNIyM2e-MU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CreamyWatermelonSmoothie_03114_preview-672780aa7a53471cb0db422245da039c.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'latte',
        category: 'coffe',
        price: 6,
        img: 'https://www.sageappliances.com/content/dam/breville-brands/coffeehub/language-masters/en_uk/recipes/recipe-hero-stills/Recipes_Banner8_1200x1200_IcedLatte.jpeg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'matermelon fresh',
        category: 'juse',
        price: 6,
        img: 'https://www.eatingwell.com/thmb/d9os8qr1Qn89eyrnYmNIyM2e-MU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CreamyWatermelonSmoothie_03114_preview-672780aa7a53471cb0db422245da039c.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'pinaple juse',
        category: 'juse',
        price: 6,
        img: 'https://wearenotmartha.com/wp-content/uploads/pineapple-passionfruit-refresher-2-3-683x1024.jpg',
        info: 'fkdtff wfyug w ygyegdy yegd ygd lw dfft dlfw e jw  whvhvd qvsd hllwd hwv g xwlegcfgwcghdwe wge dwecd weghqecdghecdedfcecwegd  hgedcgq wed fcefd mecd wdfetud gwedvg g2d f 2fhdcf2 df2 d'
    },
    {
        title: 'ice-cream',
        category: 'ice-cream',
        price: 6,
        img: 'https://wheelofbaking.com/wp-content/uploads/chocolate-ice-cream-24.jpg',
        info: 'Ice cream may be served in dishes, eaten with a spoon, or licked from edible wafer ice cream cones held by the hands as finger food. Ice cream may be served with other desserts—such as cake or pie—or used as an ingredient in cold dishes—like ice cream floats, sundaes, milkshakes, and ice cream cakes—or in baked items such as Baked Alaska.'
    }

]

let allProd = document.getElementById('allProd');
prod_baza.map((e) => {
    let product_div = document.createElement('div');
    product_div.setAttribute('style', `${e.style}`)
    product_div.addEventListener('click', () => { // mi hatik apranqna
        localStorage.setItem('selectedProduct', JSON.stringify(e))  // selectedProduc- anunov  local artak a uxarvkum click arac producti AMBOXJ infon(bazayic(ka vor himnakan masum chi erevum))  vor karana productSdetalis ejum tpi
        location.href = "../productDetalis/productDetal.html"; // gnuma vor prod-i ej, vor  et 1 hatiki tvyaly sax ereva
    })
    product_div.classList.add('product_div');
    product_div.setAttribute('data-category', `${e.category}`)  // data bary partadira !!!
    let prod_img_div = document.createElement('div');
    prod_img_div.classList.add('prod_img_div')
    let img = document.createElement('img');
    img.src = e.img
    prod_img_div.append(img)
    let prod_info_div = document.createElement('div');
    let info_name = document.createElement('h3');
    info_name.innerText = e.title
    let info_price = document.createElement('span');
    let info_info = document.createElement('p')
    prod_info_div.classList.add('prod_info_div');
    prod_info_div.append(info_name, info_price, info_info)
    product_div.append(prod_img_div, prod_info_div)
    allProd.append(product_div);
    info_price.innerText = `${e.price}$`;
    let info_text = e.info.length >= 20 ? e.info.substring(0, 20) + '...' : e.info;  // substring -y krcatum a texty
    info_info.innerText = info_text
})
//....................
const buttons = document.querySelectorAll('.Category_btn')  // klor tesak
buttons.forEach(e => {
    e.addEventListener('click', () => {
        const category = e.getAttribute('data-category'); // getov stanuma prod-i categoryan 
        const products = document.querySelectorAll('.product_div');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        })
        e.classList.add('active');
        products.forEach(product => {
            if (category === 'all') { // button-i category-n
                product.style.display = 'flex';
            } else {
                product.getAttribute('data-category') === category ? product.style.display = 'flex' : product.style.display = 'none'
            }
        })

    })
})
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
        x.innerHTML = iconArray[ind % iconArray.length]; // Используем индекс для выбора иконки //  .. %-н мукфвфкстгьф зщйк ешмн уеу шкфтшс ьус емш утй ифофтгь
    }
    function text(x, ind) {
        x.innerHTML = textArray[ind % textArray.length]; // Используем индекс для выбора иконки // .. %-н мукфвфкстгьф зщйк ешмн уеу шкфтшс ьус емш утй ифофтгь
    }

    var width = window.innerWidth;
    if (width <= 768) {
        links.forEach((e, index) => {
            icon(e, index); // Передаем индекс
        });
    } else {
        links.forEach((e, index) => {
            text(e, index); // Передаем индекс
        });
    }
});
let lastScrollTop = 0; // Последняя позиция скролла

document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY; // Текущая позиция скролла

    if (scrollTop > lastScrollTop) {
        // Скролл вниз
        document.querySelector('header').style.top = '-30%'; // Прячем header при скролле вниз
        document.querySelector('header').classList.add('scrollHeader')
    } else if (scrollTop < lastScrollTop && scrollTop > 0) {
        // Скролл вверх, но не на самый верх страницы
        document.querySelector('header').style.top = '0'; // Показываем header при скролле вверх
    }
    if(scrollTop == 0){
        document.querySelector('header').classList.remove('scrollHeader')
    }

    lastScrollTop = scrollTop; // Обновляем последнюю позицию скролла
});



// Запуск для начального размера окна
window.dispatchEvent(new Event('resize'));


/// selectedProduct-y stanuma vor tpi productDetal-ejum . vor sxmum enq gna karzina addProduct anunov  (aranc s) gnuma lochalStorage u push linum mi hat mec der datark zangvacum vor localStoragum pahvaca addProducts(s-ov) anunov. heto stanalu enq et addProducts-y u tpenq korzinayi ejum