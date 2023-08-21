const inputEl = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');



inputEl.addEventListener('input', (event) => {
	
	spanEL.textContent = event.currentTarget.value;
})