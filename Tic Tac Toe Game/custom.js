const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
const msgContainer = document.querySelector('.msg_container');
const message = document.querySelector('#msg');
const newGameButton = document.querySelector('#new_btn');


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    message.innerText = "";
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0 === true){
            box.innerText = "0";
            turn0 = false;
            box.disabled = true;
        } else{
            box.innerText = "X";
            turn0 = true;
            box.disabled = true;
        }

        checkWinner();
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = '';
    }
}

const showWinner = (winner) => {
    message.innerText = `Congartulations, ${winner} is Winner`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if(pos1Value != '' && pos2Value != '' && pos3Value != ''){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log("winner is", pos1Value);
                showWinner(pos1Value);
            }
        }
    }
}

newGameButton.addEventListener('click', resetGame); 
resetBtn.addEventListener('click', resetGame); 
