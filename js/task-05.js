//призначаємо константи
const enteredText = document.querySelector('#name-input');
const newTextOutput = document.querySelector('#name-output');
newTextOutput.textContent = 'Anonymous';

//ставимо слухача подій
enteredText.addEventListener('input', (event) => {newTextOutput.textContent = event.currentTarget.value});

