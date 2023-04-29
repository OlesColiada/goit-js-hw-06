function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Input Field
const inputField = document.querySelector('input[type="number"]')

//Create Btn
const createBtn = document.querySelector('button[data-create]')

//Destroy Btn
const destroyBtn = document.querySelector('button[data-destroy]')

//Div-box
const divBox = document.querySelector('#boxes')

//Event listener на кнопку create. При кліку на Create створюється задана к-ть дівів 
createBtn.addEventListener('click', function(){
  const numberOfCreate = inputField.value;
  let counterElSize = 20;

  for(let i=0; i < numberOfCreate; i += 1){
  const newDiv = document.createElement('div')
  counterElSize += 10;
  let elBgColor = getRandomHexColor()
  newDiv.style.width = counterElSize + "px";
  newDiv.style.height = counterElSize + "px";
  newDiv.style.backgroundColor = elBgColor;
  divBox.append(newDiv)
  console.log(divBox)}
})

//Event listener на кнопку Destroy.
destroyBtn.addEventListener('click', function destroyBoxes(){
  divBox.innerHTML = "";
})