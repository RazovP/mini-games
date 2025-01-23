// Задание 1

const header = document.querySelector('.one__title');
const toggleButton = document.querySelector('.one__btm');

let Hidden = false;

toggleButton.addEventListener('click', () => {
    if (Hidden) {
                header.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
    } else {
        
        header.style.display = 'none';
        toggleButton.textContent = 'Показать';
    }
    
    Hidden = !Hidden;
});

// Задание 2

const paragraph = document.querySelector('.two__txt');
const colorButton = document.querySelector('.two__btm');

colorButton.addEventListener('click', () => {
    paragraph.style.color = 'blue';
});

// Задание 3

const title3 = document.querySelector('.three__title');
const changeTextButton = document.querySelector('.three__btm');

changeTextButton.addEventListener('click', () => {
    title3.textContent = "Привет, мир!";
});

// Задание 4

const descriptionEl = document.querySelectorAll('.description');
const changeDescriptionsButton = document.querySelector('.four__btm');

changeDescriptionsButton.addEventListener('click', () => {
    descriptionEl.forEach(element => {
        element.textContent = 'Измененный текст';
    });
});

// Задание 5

const descriptionEl5 = document.querySelectorAll('.description5');

const changeDescriptionsButton5 = document.querySelector('.five__btm');

changeDescriptionsButton5.addEventListener('click', () => {
    descriptionEl5.forEach(element => {
        element.textContent = 'Новый текст';
    });
});

// Задание 6

const addElementButton = document.querySelector('.six__btm');

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

// Задание 7

const removeElementButton = document.querySelector('.seven__btm');

removeElementButton.addEventListener('click', () => {
    const firstDescriptionElement = document.querySelector('.description7');
    if (firstDescriptionElement) {
        firstDescriptionElement.remove();
    }
});