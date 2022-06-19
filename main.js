const elHeaderCartLink = document.querySelector('.header__cart-link');
const elCardModal = document.querySelector('.header__cart-modal');

elHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault ();

    elCardModal.classList.toggle("header__cart-modal--open");
})

const elShoppingCartBin = document.querySelector('.shopping-cart__bin');
const elShoppingCartEmpty = document.querySelector('.shopping-cart__empty');
const elShoppingCartList = document.querySelector('.shopping-cart__list');
const elCartCounter = document.querySelector('.cart__counter');

elShoppingCartBin.addEventListener("click", function (evt) {
    evt.preventDefault ();

    elShoppingCartList.classList.add("shopping-cart__list--none");
    elShoppingCartEmpty.classList.add("shopping-cart__empty--block");
    elCartCounter.classList.add("cart__counter--none");
})


const elMinus = document.querySelector('.js-minus');
const elPlus = document.querySelector('.js-plus');
const elCounting = document.querySelector('.hero__quantity');
const elsChangingImg = document.querySelectorAll(".js-img");

elPlus.addEventListener('click', function(){
    elCounting.textContent = + elCounting.textContent + 1
});

elMinus.addEventListener('click', function(){
    if(elCounting.textContent > 0){
        elCounting.textContent = + elCounting.textContent -1;
    } else {
        elCounting.textContent = 0;
    }
});

elsChangingImg.forEach(function (item) {
    item.addEventListener("click", function () {
        document.querySelector(".hero__main-img").src = item.children[0].src;
        document.querySelector(".hero__main-img").srcset = item.children[0].srcset;
    })
})