// Form Validation

const email = document.getElementById('emailInput');
const emailError = document.querySelector('#emailInput + span.error');
const country = document.getElementById('countryInput');
const countryError = document.querySelector('#countryInput + span.error');
const zipcode = document.getElementById('zipInput');
const zipError = document.querySelector('#zipInput + span.error');
const password = document.getElementById('passwordInput');
const passwordError = document.querySelector('#passwordInput + span.error');
const passwordConfirm = document.getElementById('passwordConfirmInput');
const passwordConfirmError = document.querySelector('#passwordConfirmInput + span.error');
const form = document.getElementsByTagName('form')[0];

email.addEventListener('input', function (event) {
	if (email.validity.valid) {
		emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error';
	} else {
		showEmailError();
	}
});

country.addEventListener('input', function (event) {
	if (country.validity.valid) {
		countryError.textContent = ''; // Reset the content of the message
    countryError.className = 'error';
	} else {
		showCountryError();
	}
});

zipcode.addEventListener('input', function (event) {
	if (zipcode.validity.valid) {
		zipError.textContent = ''; // Reset the content of the message
    zipError.className = 'error';
	} else {
		showZipError();
	}
});

password.addEventListener('input', function (event) {
	if (password.validity.valid) {
		passwordError.textContent = ''; // Reset the content of the message
    passwordError.className = 'error';
	} else {
		showPasswordError();
	}
});

form.addEventListener('submit', function (event) {
  if(!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  } else if (!country.validity.valid ) {
		showCountryError();
    event.preventDefault();
	} else if (!zipcode.validity.valid) {
		showZipError();
    event.preventDefault();
	} else if (!password.validity.valid) {
		showPasswordError();
    event.preventDefault();
	}
});

function showEmailError() {
  if(email.validity.valueMissing) {
  	emailError.textContent = 'You need to enter a valid email';
  } else if (email.validity.typeMismatch) {
    email.textContent = "I am expecting an e-mail address";
	} else if(email.validity.tooShort) {
    emailError.textContent = 'The title needs to be 8 characters or longer';
  }
emailError.className = 'error active';
}

function showCountryError() {
  if(country.validity.valueMissing) {
  	countryError.textContent = 'You need to enter a country.';
  } else if(country.validity.tooShort) {
    countryError.textContent = 'The country needs to be 3 characters or longer';
  }
countryError.className = 'error active';
}

function showZipError() {
  if(zipcode.validity.valueMissing) {
  	zipError.textContent = 'You need to enter a valid zipcode.';
  } else if(zipcode.validity.patternMismatch) {
    zipError.textContent = 'Entered value needs to be a number.';
  } else if(zipcode.validity.tooShort) {
    zipError.textContent = `The zipcode needs to be 5 characters long`;
  }
zipError.className = 'error active';
}

function showPasswordError() {
  if(password.validity.valueMissing) {
  	passwordError.textContent = "You need to enter a password";
  } else if(password.validity.patternMismatch) {
    passwordError.textContent = "Please enter a password with Uppercase, Lowercase, and number";
  } else if (password.validity.tooShort) {
		passwordError.textContent = "Password needs to be atleast 8 characters long."
	}
passwordError.className = 'error active';
}

passwordConfirm.addEventListener('input', confirmPassword);

function confirmPassword() {
	if (password.value != passwordConfirm.value) {
		passwordConfirmError.textContent = "Password doesn't match";
	} else {
		passwordConfirmError.textContent = '';
	}
}

password.onchange = confirmPassword;
passwordConfirm.onkeyup = confirmPassword;