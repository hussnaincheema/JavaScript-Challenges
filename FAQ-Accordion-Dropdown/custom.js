const toggles = document.querySelectorAll('.faq_toggle');

toggles.forEach(toggle=>{
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})