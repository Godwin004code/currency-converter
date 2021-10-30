const head = document.querySelector('header')
const btns = document.querySelector('.btns')

btns.addEventListener('click', function() {
    head.classList.toggle('active')
})