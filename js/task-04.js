const btnMin = document.querySelector('[data-action="decrement"]')

const btnPlus = document.querySelector('[data-action="increment"]')

const counterValue = document.querySelector('#value')


// let count = 0;
// counterValue.textContent = count;


// btnPlus.addEventListener('click', () => {
// 	 count += 1;
// 	counterValue.textContent = count;
// })

// btnMin.addEventListener('click', () => {
// 	count -= 1;
// 	counterValue.textContent = count;
// })
// console.log("~  count:", count)
///////////////////////////////////////////////////////
let count = 0;

function updateCo() {
	counterValue.textContent = count;
}

btnMin.addEventListener('click', () => {
	count -= 1;
	updateCo();
})
btnPlus.addEventListener('click', () => {
	count += 1;
	updateCo();
})
