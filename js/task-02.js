const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newArray =[];
const ingredientsListUl = document.querySelector('#ingredients');

const newLiArray = ingredients.map(ingredient => {
  const newElem = document.createElement('li');
  newElem.textContent = `${ingredient}`;
  newElem.classList.add('item');
  newArray.push(newElem);
  return newElem;
})
ingredientsListUl.prepend(...newLiArray)

