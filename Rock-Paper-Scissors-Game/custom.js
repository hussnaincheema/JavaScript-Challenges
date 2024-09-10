let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const paraText = document.getElementById("msg");
const userScorePara = document.getElementById("user_score");
const compScorePara = document.getElementById("comp_score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    paraText.innerText = "Game Was Draw. Play Again.";
    paraText.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        paraText.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        paraText.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        paraText.innerText = `You Lost. ${compChoice} beats your ${userChoice}`;
        paraText.style.backgroundColor = "red";
    }
}

const playGame = () => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})