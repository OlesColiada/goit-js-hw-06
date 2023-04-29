const fontSizeControl = document.querySelector('#font-size-control')
const spanFontSize = document.querySelector('#text')

const setFontSize = () => spanFontSize.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', setFontSize)