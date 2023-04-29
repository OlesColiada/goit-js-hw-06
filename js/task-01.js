
const categoriesList = document.querySelectorAll('#categories .item');

const categoriesItems = document.querySelectorAll('.item')
console.log("Number of categories:" , categoriesItems.length)

categoriesList.forEach(category => {
    const localTitle = category.querySelector('h2').textContent;
    const quantityOfLi = category.querySelectorAll('li').length;
    console.log(localTitle);
    console.log(quantityOfLi);
})