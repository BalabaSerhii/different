const inputEl = document.querySelector('#font-size-control');



const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', () =>
{
	const inputValue = inputEl.value;
	spanEl.style.fontSize = `${inputValue}px`;
	console.log(inputValue)
})