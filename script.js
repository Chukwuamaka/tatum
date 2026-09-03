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



const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
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
  }
  else {
    emailErrorElement.classList.remove("show");
    emailErrorElement.classList.add("hide");
  }

  if (!passwordIsValid) {
    passwordErrorElement.classList.remove("hide");
    passwordErrorElement.classList.add("show");
  }
  else {
    passwordErrorElement.classList.remove("show");
    passwordErrorElement.classList.add("hide");
  }

});

const apiBaseUrl = "https://tatumconnect-backend.onrender.com";

async function login(requestData) {
  try {
    const url = `${apiBaseUrl}/api/v1/Auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestData),
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
}

login({ email: "aaa@aaa.com", password: "aaaaaa" });
