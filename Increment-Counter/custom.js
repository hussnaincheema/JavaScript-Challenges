const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const updations = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = updations / 200;

        if(c < updations) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = updations;
        }
    }

    updateCounter();
})