const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");



   
   const btnAddd = document.querySelector('.btnAdd')
const btnRem = document.querySelector('.btnRem')
let isListAdded = false;

btnAddd.addEventListener('click', () => {
  const ddd = ingredients.forEach(ingredient => {
  const test = document.createElement('li');
test.textContent = `${ingredient}`;
ingredientsEl.append(test)
})
})



btnRem.addEventListener('click', () => {

  ingredientsEl.innerHTML = '';
  
})