const elMinus = document.querySelector('.js-minus')
const elPlus = document.querySelector('.js-plus')
const elCounting = document.querySelector('.hero__quantity')

elPlus.addEventListener('click', function(){
    elCounting.textContent = + elCounting.textContent + 1
});

elMinus.addEventListener('click', function(){
    if(elCounting.textContent > 0){
        elCounting.textContent = + elCounting.textContent -1
    } else {
        elCounting.textContent = 0;
    }
});

