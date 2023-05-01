const fontSizeControl = document.querySelector('#font-size-control')
const spanFontSize = document.querySelector('#text')
fontSizeControl.value = 16;


const setFontSize = () => spanFontSize.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', setFontSize)