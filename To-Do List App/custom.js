const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list_container');
const addButton = document.querySelector('.btn');
const enterSomethingModal = document.querySelector('.enterSomething');
const todoApp = document.querySelector('.todo_app');
const okButton = document.getElementById('ok_button');


const addTask = () => {
    if(inputBox.value === ''){
        enterSomethingModal.style.display = 'block';
        todoApp.style.display = 'none';
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "\u00d7";
        li.appendChild(deleteSpan);

        let updateSpan = document.createElement("span");
        updateSpan.innerHTML = "\u270E"; 
        updateSpan.classList.add('update-icon');
        li.appendChild(updateSpan);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        if (e.target.innerHTML === "\u00d7") {
            e.target.parentElement.remove();
            saveData();
        }
        if (e.target.innerHTML === "\u270E") {
            let li = e.target.parentElement;
            let currentText = li.firstChild.textContent;

            let updatedText = prompt("Update your task:");

            if (updatedText && updatedText.trim() !== "") {
                li.firstChild.textContent = updatedText;
                saveData();
            }
        }
    }
});

okButton.addEventListener('click', () => {
    enterSomethingModal.style.display = 'none';
    todoApp.style.display = 'block';
});

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();

addButton.addEventListener('click', addTask);
