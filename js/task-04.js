//знаходито спан
const counterValue = document.querySelector('span')
counterValue.textContent =  0;

// вибираємо кнопки і присвоюємо в константи
const btnDecr = document.querySelector('[data-action="decrement"]')
const btnIncr = document.querySelector('[data-action="increment"]')

//пишемо хендлери
const decrFunction = () => counterValue.textContent = Number(counterValue.textContent) + 1;
const incrFunction =() => counterValue.textContent = Number(counterValue.textContent) - 1;

//ставимо слухачі подій
btnDecr.addEventListener('click', incrFunction)
btnIncr.addEventListener('click', decrFunction)
