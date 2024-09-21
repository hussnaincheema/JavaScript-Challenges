const passwordInput = document.querySelector("#password");
const button = document.querySelector(".btn");
const copyIcon = document.querySelector(".copy_icon");
const copyPassMsg = document.querySelector(".copyPassword h4");
const copyPassContainer = document.querySelector(".copyPassword");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + numbers + symbols;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordInput.value = password;
}

const copyPassword = () => {
    const password = passwordInput.value;
    if(password){
        navigator.clipboard.writeText(password)
        .then(() => {
            copyPassMsg.innerHTML = "Password copied to clipboard!";
            copyPassMsg.style.color = "black";
            copyPassContainer.style.display = "block";  
            setTimeout(() => {
                copyPassContainer.style.display = "none"; 
            }, 3000);
        }).catch((err) => {
            copyPassMsg.innerHTML = "Failed to copy password.";
            copyPassMsg.style.color = "red";
            copyPassContainer.style.display = "block";  
            console.error("Error copying password: ", err);
            setTimeout(() => {
                copyPassContainer.style.display = "none"; 
            }, 3000);
        });
    } else{
        copyPassMsg.innerHTML = "No Password to copy";
        copyPassMsg.style.color = "red";
        copyPassContainer.style.display = "block"; 
        setTimeout(() => {
            copyPassContainer.style.display = "none"; 
        }, 3000);
    }
}
 
button.addEventListener("click", createPassword);

copyIcon.addEventListener("click", copyPassword);
