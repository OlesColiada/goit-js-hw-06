
const categoriesList = document.body.firstElementChild.nextElementSibling.children
console.log("Number of categories:" , categoriesList.length)
console.log('')

const newArrayChildren = [...categoriesList]
newArrayChildren.forEach(category => {
    const localTitle = category.querySelector('h2').textContent;
    const quantityOfLi = category.querySelectorAll('li').length;
    console.log('Category:', localTitle);
    console.log('Elements:',quantityOfLi);
    console.log('')

})



