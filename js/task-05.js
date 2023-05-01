//призначаємо константи
const enteredText = document.querySelector('#name-input');
const newTextOutput = document.querySelector('#name-output');

//ставимо слухачів подій
enteredText.addEventListener('input', function(){
    newTextOutput.textContent.length === 0 ? newTextOutput.textContent = 'Anonymous' : newTextOutput.textContent =enteredText.value});

enteredText.addEventListener('keyup', function(){
    if(enteredText.value === '') {newTextOutput.textContent = 'Anonymous'}
})  