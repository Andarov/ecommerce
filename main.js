// Modal
const elHeaderCartLink = document.querySelector('.header__cart-link');
const elCardModal = document.querySelector('.header__cart-modal');

elHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault ();

    elCardModal.classList.toggle("header__cart-modal--open");
})

// Modal o'zgarishi
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

// Product sanalishi
const elMinus = document.querySelector('.js-minus');
const elPlus = document.querySelector('.js-plus');
const elCounting = document.querySelector('.hero__quantity');

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

// Rasm o'zgarishi
const elsChangingImg = document.querySelectorAll(".js-img");

elsChangingImg.forEach(function (item) {
    item.addEventListener("click", function () {
        document.querySelector(".hero__main-img").src = item.children[0].src;
    })
})

elsChangingImg.forEach(function (item) {
    item.addEventListener("click", function () {
        // Faolliknki olish
        elsChangingImg.forEach(function (elChangingImg) {
            elChangingImg.classList.remove("hero__images--active")
        })

        // Faollik qo'shish
        item.classList.add("hero__images--active")
    })
})

// Buttonlar ezilganda rasmlar o'zgarishi
const elControllerPrev = document.querySelector(".js-controller-prev")
const elControllerNext = document.querySelector(".js-controller-next")

// Next bosilganda rasm o'zgarishi
if (elControllerNext) {
    elControllerNext.addEventListener("click", function () {
        const elActiveItem = document.querySelector(".hero__images--active");
        elActiveItem.classList.remove("hero__images--active");


        let controllerNext;

        const elMainImg = document.querySelector(".hero__img-list");

        if (elActiveItem.nextElementSibling === null) {
            controllerNext = elMainImg.children[0];
        } else {
            controllerNext = elActiveItem.nextElementSibling
        }

        controllerNext.classList.add("hero__images--active");

        document.querySelector(".hero__main-img").src = controllerNext.children[0].src;
        

    })
}

// Prev bosilganda rasm o'zgarishi
if (elControllerPrev) {
    elControllerPrev.addEventListener("click", function () {
        const elActiveItem = document.querySelector(".hero__images--active");
        elActiveItem.classList.remove("hero__images--active");


        let elControllerPrev;

        const elMainImg = document.querySelector(".hero__img-list");

        if (elActiveItem.previousElementSibling === null) {
            elControllerPrev = elMainImg.children[0];
        } else {
            elControllerPrev = elActiveItem.previousElementSibling;
        }

        elControllerPrev.classList.add("hero__images--active");

        document.querySelector(".hero__main-img").src = elControllerPrev.children[0].src;
        

    })
}