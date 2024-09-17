const search = document.querySelector('.container');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})