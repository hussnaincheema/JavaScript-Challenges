const questions = [
    {
        question: "Which is largest animal in the World?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest Continent in the World?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is largest desert in the World?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest country in the World?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Siri Lanka", correct: false},
        ]
    }
];

const questionEl = document.getElementById("question");
const answerButtons = document.querySelector(".answer_buttons");
const nextButton = document.querySelector(".next_btn");

let currentQuesIdx = 0;
let score = 0;

const startQuiz = () => {
    currentQuesIdx = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuesIdx];
    let questionNo = currentQuesIdx + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

const resetState = () => {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

const showScore = () => {
    resetState();
    questionEl.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Start Quiz Again";
    nextButton.style.display = "block";
}

const handleNextButton = () => {
    currentQuesIdx++;
    if(currentQuesIdx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuesIdx < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();