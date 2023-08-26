const inputEl = document.querySelector('#name-input');
const spanEL = document.querySelector('#name-output');



inputEl.addEventListener('input', (event) => {
	
	if (inputEl.textContent === '') {
		spanEL.textContent = 'Anonymous';
	}
	
	spanEL.textContent = event.currentTarget.value;

})