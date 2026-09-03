console.log("Script loaded");

function isInputValid(input, inputType) {
  switch (inputType) {
    case "email":
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/i;
      return emailRegex.test(input);
    case "password":
      return input.length >= 6;
  }
}

function handleInputChange(event) {
  const elements = event.currentTarget.elements;
  const emailValue = elements[0].value;
  const passwordValue = elements[1].value;
  const buttonElement = elements[2];

  const validEmail = isInputValid(emailValue, "email");
  const validPassword = isInputValid(passwordValue, "password");

  if (validEmail && validPassword) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
}

const validateInput = (event) => {
  event.preventDefault();
  console.log("Submit event fired!");
  // const formData = new FormData(event.target);
  // const emailValue = formData.get("email");
  // const passwordValue = formData.get("password");
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  const emailIsValid = isInputValid(emailValue, "email");
  const passwordIsValid = isInputValid(passwordValue, "password");

  // emailIsValid === false ===> !emailIsValid
  const emailErrorElement = document.getElementById("email-error");
  const passwordErrorElement = document.getElementById("password-error");

  if (!emailIsValid) {
    emailErrorElement.classList.remove("hide");
    emailErrorElement.classList.add("show");
  } else {
    emailErrorElement.classList.remove("show");
    emailErrorElement.classList.add("hide");
  }

  if (!passwordIsValid) {
    passwordErrorElement.classList.remove("hide");
    passwordErrorElement.classList.add("show");
  } else {
    passwordErrorElement.classList.remove("show");
    passwordErrorElement.classList.add("hide");
  }

  if (emailIsValid && passwordIsValid) return true;
};

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

function handleLogin() {
  const proceedToLogin = validateInput();
  if (proceedToLogin) login();
}

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLogin);
loginForm.addEventListener("input", handleInputChange);

// Arrow async function equivalent
const getSomething = async () => {};

// const authData = {
//   email: "example@tatumconnect.com",
//   password: "example234",
// };
