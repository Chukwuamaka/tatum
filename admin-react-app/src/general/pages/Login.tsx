import {
  useState,
  type ChangeEventHandler,
  type SubmitEventHandler,
} from "react";
import { useNavigate } from "react-router";

import "./Login.css";
import Logo from "../../assets/tatum-bank-logo.svg";
import CBNLogo from "../../assets/cbn.png";
import NDICLogo from "../../assets/ndic.png";
import { initiateLogin } from "../../api-clients/auth";
import Toast from "../../reusables/Toast";
import { storeSession } from "../../utils/session";

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
        navigate("/dashboard/profile");
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
          No queques.No stress.Just seemless banking.
        </p>
      </section>

      {/* <!-- login  --> */}
      <section className="login-panel">
        <div className="login-card">
          <div className="login-form">
            <img src={Logo} alt="Tatum bank logo" width="117px" height="49px" />

            <div className="login-header">
              <h2>Log in to Tatum Bank</h2>
              <p>Please enter your Internet Banking details to continue</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <input
                  name="email"
                  value={email}
                  type="text"
                  placeholder="Email Address or phone no"
                  required
                  onChange={handleInputChange}
                />
                <span
                  className="field-icon field-icon--accent"
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v20M4.9 5.6l14.2 12.8M4.9 18.4L19.1 5.6M2 12h20"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              {emailErrorMessage && (
                <div id="error-message" className="error-message show">
                  <p>{emailErrorMessage}</p>
                </div>
              )}
              <div className="field">
                <input
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  required
                  onChange={handleInputChange}
                />
                <span
                  className="field-icon field-icon--accent"
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      stroke-width="1.6"
                    />
                  </svg>
                </span>
              </div>
              <div id="password-error-message" className="error-message hide">
                <p>Your password is incorrect.</p>
              </div>
              <a className="forgot-password" href="/forgot-password">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="btn-primary"
                disabled={buttonIsDisabled}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>
          </div>

          <div className="signin-links">
            <p>
              New to Tatum Bank? <a href="/register">Get Started</a>
            </p>
            <p>
              Have a Tatum Bank account?
              <a href="/active-account">Activate Account</a>
            </p>
          </div>
        </div>
        <footer className="login-footer">
          <p className="footer-item">
            Licenced by CBN
            <img src={CBNLogo} alt="CBN logo" width="45px" height="25px" />
          </p>
          <p className="footer-item">
            INSURED BY NDIC
            <img src={NDICLogo} alt="NDIC logo" width="45px" height="25px" />
          </p>
        </footer>
      </section>
    </div>
  );
}
export default Login;
