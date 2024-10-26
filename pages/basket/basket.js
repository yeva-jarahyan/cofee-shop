window.addEventListener("load", function () {
  document.body.classList.add("loaded");
  const currentPage = window.location.pathname;

  // Получаем все ссылки в навигации
  const navLinks = document.querySelectorAll("nav ul li a");

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


  //............................... 
  function updateCartCount() {
    // Получаем корзину из localStorage
    let addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || [];  // sra lockalStorage-ov productDetali ejic korzina  gnacac bolor apreanqneri zangvacna vercnum

    // Группируем товары по их названиям (или другому уникальному свойству)
    let groupedCart = addedProducts.reduce((acc, product) => { // acc found-i gtac anunna isk producty en marmni anunna vory petqa hamematvi
      let found = acc.find((item) => item.title === product.title); // reucy indexov a frum
      if (found) {
        found.quantity += 1; // Если товар уже в корзине, увеличиваем количество
      } else {
        acc.push({ ...product, quantity: 1 }); // Добавляем новый товар с количеством 1
      }
      return acc;
    }, []);// item=[0]{title:ice late},item=[1]{title:matcha}


    // Получаем элемент для отображения количества товаров
    const cartCountElement = document.getElementById("cart_count");
    if (cartCountElement) {
      cartCountElement.textContent = addedProducts.length; // Общее количество всех товаров
    }

    // Убираем предыдущую таблицу (если она есть)
    const existingCartBox = document.querySelector(".cart_box");
    if (existingCartBox) {
      existingCartBox.remove();
    }

    const container = document.createElement('div');
    container.classList.add('container');
    document.querySelector('main').append(container);


    // Создаем таблицу для отображения товаров
    const Cart_Box = document.createElement("table");
    Cart_Box.classList.add("cart_box");
    container.append(Cart_Box);

    if (groupedCart.length == '') {
      let noProduct_div = document.createElement('div');
      noProduct_div.classList.add('noProduct_div');
      noProduct_div.textContent = 'Product no found';
      Cart_Box.append(noProduct_div)

    } else {
      let summery_box = document.createElement('div');
      summery_box.classList.add('summery_box');
      let summery_text = document.createElement('h2');
      summery_box.append(summery_text);
      Cart_Box.append(summery_box);

      groupedCart.forEach((e, index) => {
        const cart_line = document.createElement("tr");

        // let checkInp = document.createElement('input');
        // checkInp.type = 'checkbox';
        // checkInp.setAttribute('id', 'check_' + index); // Уникальный id для чекбокса

        // Проверяем состояние чекбоксов в localStorage
        // let checkedProducts = JSON.parse(localStorage.getItem('checkedProducts')) || [];




        // // Проверяем, если этот элемент уже выбран и есть в checkedProducts
        // if (checkedProducts.includes(index)) {
        //   checkInp.checked = true;
        // } else {
        //   checkInp.checked = false;
        // }

        // Добавляем слушатель событий, чтобы обновить localStorage при изменении состояния чекбоксов
        // checkInp.addEventListener('change', (e) => {
        //   if (e.target.checked) {
        //     // Добавляем индекс в массив checkedProducts, если чекбокс выбран
        //     if (!checkedProducts.includes(index)) {
        //       checkedProducts.push(index);
        //     }
        //   } else {
        //     // Удаляем индекс из массива checkedProducts, если чекбокс снят
        //     checkedProducts = checkedProducts.filter(id => id !== index);
        //   }
        //   // Сохраняем обновленный массив в localStorage
        //   localStorage.setItem('checkedProducts', JSON.stringify(checkedProducts));
        // });

        // check_cage.appendChild(checkInp);
        // cart_line.appendChild(check_cage);

        // Добавляем информацию о товаре, например, название и цену
        // const productName = document.createElement('td');
        // productName.textContent = e.name;  // Например, название товара
        // cart_line.appendChild(productName);


        // Добавляем товарную строку в Cart_Box
        Cart_Box.appendChild(cart_line);

        // var totalSum = checkedProducts.reduce((sum, product) => {
        //   return sum += product.price * product.quantity;
        // }, 0); // var sum == 0;
        // summery_text.innerText = 'total sum: ' + totalSum
        // console.log("Общая сумма:", totalSum);
        // checkInp.onclick = () => {
        //   var checkedProducts = JSON.parse(localStorage.getItem('checkedProducts')) || [];

        //   if (checkInp.checked) {
        //     // Получаем объект для текущего продукта
        //     let currentProduct = e;

        //     // Добавляем текущий продукт в массив всех отмеченных продуктов
        //     checkedProducts.push(currentProduct);

        //     // Сохраняем обновленный массив продуктов в localStorage
        //     localStorage.setItem('checkedProducts', JSON.stringify(checkedProducts));

        //     // Подсчитываем общую сумму всех отмеченных продуктов
        //     var totalSum = checkedProducts.reduce((sum, product) => {
        //       return sum += product.price * product.quantity;
        //     }, 0); // var sum == 0;
        //     summery_text.innerText = 'total sum: ' + totalSum
        //     console.log("Общая сумма:", totalSum);
        //   } else {
        //     // Найдём продукт, который был добавлен, и удалим его из массива
        //     let currentProduct = e;
        //     let indexToRemove = checkedProducts.findIndex(product => product.id === currentProduct.id);

        //     if (indexToRemove !== -1) {
        //       // Удаляем элемент по индексу
        //       checkedProducts.splice(indexToRemove, 1);

        //       // Сохраняем обновленный массив в localStorage
        //       localStorage.setItem('checkedProducts', JSON.stringify(checkedProducts));
        //     }

        //     // Подсчитываем обновленную сумму
        //     var totalSum = checkedProducts.reduce((sum, product) => {
        //       return sum += product.price * product.quantity;
        //     }, 0);
        //     console.log("Обновленная сумма:", totalSum);
        //     summery_text.innerText = 'Total sum  ' + totalSum
        //   }

        // }

        // check_cage.append(checkInp);


        // Ячейка для изображения продукта
        const cart_cage_img = document.createElement("td");
        const cart_product_img = document.createElement("img");
        cart_product_img.src = e.img;
        cart_product_img.alt = e.title;
        cart_cage_img.appendChild(cart_product_img);

        // Ячейка для названия продукта
        const cart_cage_name = document.createElement("td");
        const cart_product_name = document.createElement("h3");
        cart_product_name.classList.add('cart_product_name')
        cart_product_name.textContent = e.title;
        cart_cage_name.appendChild(cart_product_name);

        // Ячейка для цены продукта (общая цена = цена за единицу * количество)
        const cart_cage_price = document.createElement("td");
        const cart_product_price = document.createElement("span");
        cart_product_price.classList.add('cart_product_prise')
        cart_product_price.textContent = `$${(e.price * e.quantity).toFixed(2)}`;
        cart_cage_price.appendChild(cart_product_price);
        // Ячейка для количества продукта
        const cart_cage_quantity = document.createElement("td");
        const cart_product_quantity = document.createElement("span");
        cart_product_quantity.classList.add('cart_product_quantity')
        cart_product_quantity.textContent = `QUANTITY: ${e.quantity}`;
        cart_cage_quantity.appendChild(cart_product_quantity);

        // Ячейка для кнопки "Order now"
        const delete_btn_cage = document.createElement("td");
        const delete_btn = document.createElement("button");
        delete_btn.classList.add('deleteBtn')
        delete_btn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        delete_btn_cage.appendChild(delete_btn);
        // zambyuxic jnjum enq
        delete_btn.addEventListener("click", () => {
          addedProducts.splice(index, 1); // Удаляем товар из корзины по индексу
          localStorage.setItem("addedProducts", JSON.stringify(addedProducts));
          location.reload(); // Обновляе
        });

        // Добавляем все ячейки в строку таблицы
        cart_line.append(
          cart_cage_img,
          cart_cage_name,
          cart_cage_price,
          cart_cage_quantity,
          delete_btn_cage
        );

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
            links.forEach((e, index) => {
              icon(e, index); // Передаем индекс
              cart_product_img.style.width = `55px`;
              cart_product_name.style.fontSize = `12px`
              cart_product_price.style.fontSize = `12px`
              cart_product_quantity.style.fontSize = `12px`
            });
          } else {
            links.forEach((e, index) => {
              text(e, index); // Передаем индекс
              cart_product_img.style.width = `90px`;
              cart_product_name.style.fontSize = `20px`;
              cart_product_price.style.fontSize = `20px`
              cart_product_quantity.style.fontSize = `20px`
            });
          }
        })
        window.dispatchEvent(new Event('resize'));
        // Добавляем строку в таблицу
        Cart_Box.append(cart_line);

      });
      const order_btn = document.createElement("button");
      order_btn.textContent = "ORDER NOW";;
      order_btn.classList.add('order_btn')
      Cart_Box.appendChild(order_btn);
    }


  }

  // Обновляем количество товаров в корзине при загрузке страницы
  updateCartCount();
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
});
