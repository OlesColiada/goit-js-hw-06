const textPartField = document.querySelector('input')


const callbackBlur = () => {
    const enteredValueLength = textPartField.value.length
    enteredValueLength === parseInt(textPartField.dataset.length) ? textPartField.classList.add('valid'): textPartField.classList.add('invalid')}
textPartField.addEventListener('blur', callbackBlur)


