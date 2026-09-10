console.log("Script Loaded");

const loginForm = document.getElementById("login-form");
const emailInput = loginForm.elements[0];
const passwordInput = loginForm.elements[1];
const buttonElement = loginForm.elements[2];

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

function updateButtonState() {
    const isEmailValid = isInputValid(emailInput.value, "email");
    const isPasswordValid = isInputValid(passwordInput.value, "password");

    if (isEmailValid && isPasswordValid) {
        buttonElement.disabled = false;
    } else {
        buttonElement.disabled = true;
    }
}

function validateInput (event) {
    console.log(event);
    // const formData = new FormData(loginForm);
    // const emailValue = formData.get("email");
    // const password = formData.get("password");
     const elements = event.currentTarget.elements;
    const emailValue = elements[0].value;
    const passwordValue = elements[1].value;
    const buttonElement = elements[2];
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
    const isEmailValid = isInputValid(emailValue, "email");
    const isPasswordValid = isInputValid(passwordValue, "password");
    const hasEmail = emailInput.value.trim().length > 0;
    const hasPassword = passwordInput.value.trim().length > 0;
    
   
    

    if(!isEmailValid && hasEmail) {
        const emailError = document.getElementById("email-error");
        emailError.classList.remove("hide");
        emailError.classList.add("show");
        buttonElement.disabled = true;
    } else {
        const emailError = document.getElementById("email-error");
        emailError.classList.remove("show");
        emailError.classList.add("hide");
    }




    if(!isPasswordValid && hasPassword) {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("hide");
        passwordError.classList.add("show");
        buttonElement.disabled = true;
    } else {
        const passwordError = document.getElementById("password-error");
        passwordError.classList.remove("show");
        passwordError.classList.add("hide");
    }

    if (isEmailValid && isPasswordValid) {
        return {
            email : emailValue,
            password : passwordValue,
        };
    }
}

const apiBaseUrl = "https://tatumconnect-backend.onrender.com/api/v1";

async function login(requestData) {
  try {
    const url = `${apiBaseUrl}/Auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}

function handleLogin(event) {
    event.preventDefault();
    const requestData = validateInput(event);
    
    if (requestData) login(requestData);
}


emailInput.addEventListener("input", updateButtonState);
passwordInput.addEventListener("input", updateButtonState);


loginForm.addEventListener("submit", handleLogin )
