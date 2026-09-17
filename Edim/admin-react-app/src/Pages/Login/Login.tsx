import { useNavigate } from "react-router";
import {
  useState,
  type ChangeEventHandler,
  type SubmitEventHandler,
} from "react";

import "./Login.css";
import TatumLogo from "../../assets/logo-TatumBank2.svg";
import CBN from "../../assets/CBN.png";
import NDIC from "../../assets/NDIC.png";
import { initiateLogin } from "../../api-clients/auth";
import { storeSession } from "../../utils/session";
import Toast from "../../reusables/Toast";
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/i;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const buttonIsDisabled =
    !!emailErrorMessage || !email || !password || loading;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name: inputName, value: inputValue } = event.target;

    if (inputName === "email") {
      const emailIsValid = emailRegex.test(inputValue);
      const errorMessage = emailIsValid
        ? ""
        : "Your email address or phone number is incorrect.";
      setEmailErrorMessage(errorMessage);
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const responseData = await initiateLogin({ email, password });
      if (responseData.success) {
        const { accessToken, expiresIn, user } = responseData.data;
        storeSession(accessToken, expiresIn, user);
        navigate("/dashboard/users");
      } else {
        setToastMessage(responseData.message || "An error occurred");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page page-shell">
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
      <section className={"hero"}>
        <h1>Bank Simpler, Live Smarter</h1>
        <p>No queues, No Stress, Just seamless banking</p>
      </section>
      <section className={"login"}>
        <img className={"TatumLogo"} src={TatumLogo} alt={"Tatum Logo"} />

        <div>
          <div className={"logInText"}>
            <h2>Log In to Tatum Bank</h2>
            <p>Please enter your Internet Banking details to contine</p>
          </div>

          <form id={"login-form"} onSubmit={handleSubmit}>
            <div>
              <input
                className={"details"}
                type={"text"}
                name={"email"}
                placeholder={"Email Address or Phone no"}
                id={"email"}
                required
                onChange={handleInputChange}
              />
              <p className={"error hide"} id={"email-error"}>
                Your email is incorrect
              </p>
            </div>

            <div>
              <input
                className={"details"}
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                id={"password"}
                required
                onChange={handleInputChange}
              />
              <p className={"error hide"} id={"password-error"}>
                Your password is not up to 6 characters
              </p>
            </div>

            <a href={"#"} className={"forgotP"}>
              Forgot Password?
            </a>

            <input
              className={"buttonInp"}
              type={"submit"}
              value={"Log In"}
              disabled={buttonIsDisabled}
            />
          </form>

          <div className={"otherTexts"}>
            <div>
              <div className={"OTDetails"}>
                <p>New to Tatum Bank?</p>
                <a href={"#"}>Get Started</a>
              </div>
              <div className="OTDetails">
                <p>Have a Tatum Bank Account?</p>
                <a href={"#"}>Activate account number</a>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div>
            <p>
              Licensed by CBN
              <img src={CBN} />
            </p>
          </div>

          <div>
            <p>
              INSURED BY NDIC
              <img src={NDIC} />
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Login;
