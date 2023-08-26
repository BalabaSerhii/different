const inputEl = document.querySelector('#validation-input')
// console.log("~  inputEl:", inputEl.textContent.length)

const dataLengthAttribute = inputEl.getAttribute('data-length');
const lengthAsNumber = parseInt(dataLengthAttribute);





// inputEl.classList.add('valid')


// inputEl.addEventListener('blur',() => {
// 	if (inputEl.value.length < lengthAsNumber) {
// 		inputEl.classList.add('invalid')
// 		inputEl.classList.remove('valid')
// 	} else if (inputEl.value.length >= lengthAsNumber) {
// 		inputEl.classList.add('valid')
// 		inputEl.classList.remove('invalid')
// 	} else if (inputEl.value.length === 0){
// 		inputEl.classList.remove('invalid', 'valid')
// 	}

// })


// inputEl.addEventListener('blur', () => {
//   if (inputEl.value.length === 0) {
//     inputEl.classList.remove('valid', 'invalid'); // Убираем оба класса
//   } else if (inputEl.value.length < lengthAsNumber) {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   } else {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   }
// });
inputEl.addEventListener('blur', () => {
  const inputValueLength = inputEl.value.length;
  
  inputEl.classList.remove('valid', 'invalid');
  inputEl.classList.add(inputValueLength === 0 ? '' : inputValueLength < lengthAsNumber ? 'invalid' : 'valid');
});