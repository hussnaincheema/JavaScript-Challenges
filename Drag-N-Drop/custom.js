const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', (e) => dragStart(e.target));
fill.addEventListener('dragend', (e) => dragEnd(e.target));

empties.forEach((empty) => {
    empty.addEventListener('dragover', (e) => dragOver(e));
    empty.addEventListener('dragenter', (e) => dragEnter(e.target));
    empty.addEventListener('dragleave', (e) => dragLeave(e.target));
    empty.addEventListener('drop', (e) => dragDrop(e.target));
});

const dragStart = (element) => {
    element.classList.add('hold');
    setTimeout(() => element.classList.add('invisible'), 0);
};

const dragEnd = (element) => {
    element.className = 'fill';
};

const dragOver = (e) => {
    e.preventDefault();
};

const dragEnter = (element) => {
    element.classList.add('hovered');
};

const dragLeave = (element) => {
    element.className = 'empty';
};

const dragDrop = (element) => {
    element.className = 'empty';
    element.append(fill);
};
