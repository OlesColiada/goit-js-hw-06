function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Body element
const bodyBgColor = document.querySelector('body')

//Widget body element
const colorChangeBtn = document.querySelector('.widget button')

//Span element
const colorValue = document.querySelector('.widget span')

//Event Listener
colorChangeBtn.addEventListener('click', function changeBodyColor(){
let newColor = getRandomHexColor()
console.log(newColor)
bodyBgColor.style.backgroundColor = newColor;
colorValue.textContent = newColor;
})
