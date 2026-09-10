function isInputValid (input, inputType) {
    switch (inputType) {
        case "email":
            return regex
        case "password":
            return input.length >= 6;
    }
}

const emailElement = document.getElementById('email').value;
const passwordElement = document.getElementById("password").value;

const validateInput = (event) => {
    event.preventDefault();
    console.log("bla");

    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const emailIsValid = isInputValid(emailValue, "email");
    const passwordIsValid = isInputValid(passwordValue, "password");

    const emailErrorElement = document.getElementById("email-error");
}

function handleInputChange (event) {
    const elements = event.currentTarget.elements;
    const emailValue = elements[0].value;
    const passwordValue = elements[1].value;
    const buttonElement = elements[2];

    if (emailValue && passwordValue.length >=6) {
        buttonElement.disabled = false;
    } else {
        buttonElement.disabled = true;
    }
}

const loginForm = document. getElementById("login-form");
loginForm.addEventListener("submit", validateInput);
loginForm.addEventListener("input", handleInputChange);