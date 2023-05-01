
const categoriesList = document.body.firstElementChild.nextElementSibling.children
console.log("Number of categories:" , categoriesList.length)
console.log('')

const newArrayChildren = [...categoriesList]
console.log(newArrayChildren)
newArrayChildren.forEach(category => {
    const localTitle = category.firstElementChild.textContent;
    const quantityOfLi = category.lastElementChild.children.length;
    console.log('Category:', localTitle);
    console.log('Elements:',quantityOfLi);
    console.log('')

})



