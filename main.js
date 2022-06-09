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
        document.querySelector(".hero__main-img").src = item.children[0].src
    })
})

console.log(document.querySelector(".hero__main-img").src)