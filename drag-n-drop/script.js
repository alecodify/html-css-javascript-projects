const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', handleDragStart);
fill.addEventListener('dragend', handleDragEnd);

empties.forEach(empty => {
    empty.addEventListener('dragover', handleDragOver);
    empty.addEventListener('dragenter', handleDragEnter);
    empty.addEventListener('dragleave', handleDragLeave);
    empty.addEventListener('drop', handleDragDrop);
});

function handleDragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisible'), 0);
}

function handleDragEnd() {
    this.classList.remove('hold', 'invisible');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function handleDragLeave() {
    this.classList.remove('hovered');
}

function handleDragDrop() {
    this.classList.remove('hovered');
    this.append(fill);
}
