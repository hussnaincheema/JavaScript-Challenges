const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };
        const res = await fetch('https://icanhazdadjoke.com', config);
        const data = await res.json();
        console.log(data);
        
        joke.innerHTML = data.joke;
    } catch (error) {
        console.error('Error fetching the joke:', error);
        joke.innerHTML = "Oops! Couldn't fetch a joke.";
    } 
};

generateJoke();

jokeBtn.addEventListener('click', generateJoke)

