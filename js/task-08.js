const form = document.querySelector(".login-form")

form.addEventListener('submit', onFormSumbit);


function onFormSumbit(event) {
	event.preventDefault()

	const { password, email } = event.target.elements;

	
	const userData = {
		email: email.value,
		password: password.value
	};

	console.log(userData)
// console.log(event.target.elements)
	
	}





