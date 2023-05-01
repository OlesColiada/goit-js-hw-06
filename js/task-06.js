const textPartField = document.querySelector('input')


    const callbackBlur = () => {
    //обнулили стилі рамки
    textPartField.classList.remove('valid')
    textPartField.classList.remove('invalid')
    
    //обрізали лишні пробіли
    let enteredValue = textPartField.value.trim();
    let enteredValueLength = enteredValue.length;
    
    //добавили потрібний клас
    enteredValueLength === parseInt(textPartField.dataset.length) ? textPartField.classList.add('valid'): textPartField.classList.add('invalid')}
    

    
    textPartField.addEventListener('blur', callbackBlur)
