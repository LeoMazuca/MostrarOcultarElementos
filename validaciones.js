const form = document.getElementById("modal-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const showError = (input, message)=>{
	const inputParent = input.parentElement;
	inputParent.className = "modal-formDiv error";
	const small = inputParent.querySelector("small");
	small.innerText = message;
}

const showSucces = (input)=>{
	const inputParent = input.parentElement;
	inputParent.className = "modal-formDiv ok";
}

const checkInputs = (array) => {
	array.forEach((item) => {
		if (item.value === "") {
			showError(item, `${item.id} Is Required`);
		}else {
			showSucces(item);
		}
	})
}

const checkInputsLenght = (input, min, max) => {
	if (input.value.length < min || input.value.length > max) {
		showError(input, `${input.id} must be between ${min} and ${max}`);
	}else {
		showSucces(input);
	}
}

const checkPaswords = (input, input2) => {
	if (input.value !== input2.value) {
		showError(input2, `Paswords Must Cointided`);
	}
}
form.addEventListener("submit", (e)=>{
	e.preventDefault();
	let inputArr = [username, email, password, password2];
	checkInputs(inputArr);
	checkInputsLenght(username, 5, 10);
	checkInputsLenght(password, 5, 15);
	checkPaswords(password, password2);
})