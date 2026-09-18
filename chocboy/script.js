console.log("Script Loaded");

const loginForm = document.getElementById("login-form");

function isInputValid(input, inputType) {
    if (inputType === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    }
    if (inputType === "password") {
        return input.length >= 6;
    }
    return false;
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(loginForm);
    const emailValue = formData.get("email");
    const password = formData.get("password");
    console.log("Email:", emailValue);
    console.log("Password:", password);
    const isEmailValid = isInputValid(emailValue, "email");
    const isPasswordValid = isInputValid(password, "password");

    if(!isEmailValid) {
        const emailError = document.getElementById("email-error");
        emailError.classList.remove("hide");
        emailError.classList.add("show");
    }

    if(!isPasswordValid) {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hide");
        passwordError.classList.add("show");
    }
})
