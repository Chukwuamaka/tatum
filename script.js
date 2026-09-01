console.log("Script loaded");

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
