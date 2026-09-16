import {
  useState,
  type ChangeEventHandler,
  type SubmitEventHandler,
} from "react";
import { useNavigate } from "react-router";

import { initiateLogin } from "../../api-clients/auth";
import Toast from "../../reusables/Toast";
import { storeSession } from "../../utils/session";

import "./Login.css";

import Logo from "../../assets/images/tatum-bank-logo.svg";
import UserIdIcon from "../../assets/images/userId-icon.png";
import EyeIcon from "../../assets/images/eye-icon.png";
import CBNLogo from "../../assets/images/cbn-logo.png";
import NDICLogo from "../../assets/images/ndic-logo.png";

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/i;

export default function Login() {
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
        navigate("/dashboard/transactions");
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
      {/* <!-- hero --> */}
      <section className="hero-panel">
        <h1 className="hero-title">Bank Simpler, Live Smarter</h1>
        <p className="hero-subtitle">
          No queues. No stress. Just seamless banking
        </p>
        <div className="overlay"></div>
      </section>
      <section className="login-panel">
        <div className="login-container">
          <img src={Logo} alt="Tatum Bank Logo" className="tatum-logo" />

          <div className="form-container">
            <div className="form-header">
              <h2 className="form-heading">Log In to Tatum Bank</h2>
              <p className="form-subtitle">
                Please enter your Internet Banking details to continue
              </p>
            </div>
            <form
              id="login-form"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="form-input">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Email Address or Phone no"
                    onChange={handleInputChange}
                    required
                  />
                  <img src={UserIdIcon} alt="user id icon" />
                </div>
                {emailErrorMessage && (
                  <div id="error-message" className="error-message show">
                    <p>{emailErrorMessage}</p>
                  </div>
                )}
              </div>
              <div>
                <div className="form-input">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                  <img src={EyeIcon} alt="eye icon" />
                </div>
                <div id="password-error" className="error-message hide">
                  <p>Your password is less than 6 characters.</p>
                </div>
              </div>

              <a href="/forgot-password" className="form-link">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="login-button"
                disabled={buttonIsDisabled}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>
          </div>

          <div className="form-links">
            <p className="">
              New to Tatum Bank?
              <a href="/register" className="form-link">
                Get Started
              </a>
            </p>
            <p className="">
              Have a Tatum Bank account?
              <a href="/activate" className="form-link">
                Activate account number
              </a>
            </p>
          </div>
        </div>
        <footer className="footer">
          <p>
            Licensed by CBN
            <img src={CBNLogo} alt="CBN Logo" width="27" height="27" />
          </p>
          <p>
            INSURED BY NDIC
            <img src={NDICLogo} alt="NDIC Logo" width="63" height="28" />
          </p>
        </footer>
      </section>
    </div>
  );
}
