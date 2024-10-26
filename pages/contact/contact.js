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

let mainPlatform = document.createElement('div');
mainPlatform.classList.add('mainPlatform');
let contactBody = document.getElementById('contact_body');
let text_div = document.createElement('div');
text_div.classList.add('contact_text_div');
let contact_text = document.createElement('h1');
contact_text.innerText = 'Get  In  Tuch  With  Us';
contact_text.style.color = 'white';
let contact_second_text = document.createElement('h4');
contact_second_text.classList.add('contact_second_text')
contact_second_text.innerText = 'attention: we will know from who this meassage is, because you are going to fill all information about you'
contact_text.classList.add('contact_text');
contact_second_text.style.color = 'white';
let contact_inps_div = document.createElement('div');
contact_inps_div.classList.add('contact_inps_div');
let name_mail_div = document.createElement('div');
name_mail_div.classList.add('name_mail_div');
let form = document.createElement('form')
let userName_inp = document.createElement('input');
userName_inp.classList.add('userName');
userName_inp.placeholder = 'userName';
let mail_inp = document.createElement('input');
mail_inp.classList.add('mail_inp');
mail_inp.placeholder = 'user mail';
name_mail_div.append(userName_inp, mail_inp);
text_div.append(contact_text, contact_second_text);
let massage_div = document.createElement('div');
massage_div.classList.add('massage_div');
let massage = document.createElement('textarea');
massage.classList.add('textArea');
massage_div.append(massage)
massage.placeholder = 'your massage to us';
let sendDiv = document.createElement('div');
sendDiv.classList.add('sendDiv');
let sendBtn = document.createElement('button');
sendBtn.classList.add('sendBtn');
let send_text = document.createElement('p');
send_text.innerText = 'SEND';
sendBtn.append(send_text)
form.append(name_mail_div, massage_div, sendDiv)
sendDiv.append(sendBtn)
contact_inps_div.append(form)
mainPlatform.append(text_div, contact_inps_div);
contactBody.append(mainPlatform);

var links = document.querySelectorAll('.link')


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
      links.forEach((e, index) => {
          icon(e, index); // Передаем индекс
      });
  } else {
      links.forEach((e, index) => {
          text(e, index); // Передаем индекс
      });
  }
});

// Запуск для начального размера окна
window.dispatchEvent(new Event('resize'));
