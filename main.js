const elHeaderCartLink = document.querySelector('.header__cart-link');
const elCardModal = document.querySelector('.header__cart-modal');

elHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault ();

    elCardModal.classList.toggle("header__cart-modal--open");
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