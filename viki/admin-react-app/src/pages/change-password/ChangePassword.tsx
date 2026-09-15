import {
  useState,
  type ChangeEventHandler,
  type SubmitEventHandler,
} from "react";
import { useNavigate, useSearchParams } from "react-router";
import { initiateSetPassword } from "../../api-clients/auth";

import "./ChangePassword.css";
import Logo from "../../assets/tatum-bank-logo.svg";
import CBNLogo from "../../assets/cbn.png";
import NDICLogo from "../../assets/ndic.png";
import Toast from "../../reusables/Toast";

function ChangePassword() {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const token = queryParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonIsDisabled =
    !password ||
    !confirmPassword ||
    password !== confirmPassword ||
    isSubmitting;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    if (name === "password") setPassword(value);
    else setConfirmPassword(value);
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (!token) {
      setToastMessage("Token is missing!");
      return;
    }

    setIsSubmitting(true);
    const requestData = {
      password,
      confirmPassword,
      token,
    };
    try {
      const responseData = await initiateSetPassword(requestData);
      if (responseData.success) {
        navigate("/password-changed");
      } else {
        setToastMessage(responseData.message || "An error occurred");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="change-password-page page-shell">
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
      <section className="hero-panel">
        <h1 className="hero-title">Bank Simpler, Live Smarter</h1>
        <p className="hero-subtitle">
          No queques. No stress. Just seemless banking.
        </p>
      </section>

      <section className="password-panel">
        <div className="password-card">
          <div className="password- form">
            <img
              src={Logo}
              alt="Tatum Bank logo displaying the text Tatum Bank, shown in the password change form."
              width="117px"
              height="49px"
            />

            <div className="password-header">
              <h2>Change Password</h2>
              <p>Please enter your password below </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <input
                  name="password"
                  type="password"
                  value={password}
                  placeholder="New Password"
                  required
                  onChange={handleChange}
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

              <div className="field">
                <input
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm New Password"
                  required
                  onChange={handleChange}
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
              <button
                type="submit"
                className="btn-primary"
                disabled={buttonIsDisabled}
              >
                Reset Password
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

export default ChangePassword;
