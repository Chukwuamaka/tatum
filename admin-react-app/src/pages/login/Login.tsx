import { useState, type SubmitEventHandler } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import "./Login.css";
import { login } from "../../api/auth";
import { storeSession } from "../../utils/session";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import ImageEmailInputIcon from "../../assets/email-input-icon.svg";
import ImagePasswordInputIcon from "../../assets/password-input-icon.svg";
import ImageNdicLogo from "../../assets/ndic-logo.png";
import ImageCbnLogo from "../../assets/cbn-logo.png";
import Toast from "../../reusables/Toast";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await login({ email, password });

      if (!result.success || !result.data?.accessToken) {
        throw new Error(result.message || "Unable to log in.");
      }

      storeSession(
        result.data.accessToken,
        result.data.expiresIn,
        result.data.user,
      );
      navigate("/dashboard/customers");
    } catch (error) {
      const responseMessage =
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof error.response === "object" &&
        error.response !== null &&
        "data" in error.response &&
        typeof error.response.data === "object" &&
        error.response.data !== null &&
        "message" in error.response.data &&
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : null;

      setErrorMessage(
        responseMessage ||
          (error instanceof Error ? error.message : "Unable to log in."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page page-shell">
      {errorMessage && (
        <Toast message={errorMessage} onClose={() => setErrorMessage("")} />
      )}
      <section className="hero-panel">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bank Simpler, Live Smarter</h1>
          <p>No queues. No stress. Just seamless banking.</p>
          <div className="hero-dots" aria-hidden="true">
            <span className="hero-dot active"></span>
            <span className="hero-dot"></span>
            <span className="hero-dot"></span>
          </div>
        </div>
      </section>

      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-card">
          <div className="login-brand">
            <Link className="brand" to="/">
              <img
                className="brand-logo"
                src={ImageTatumBankLogo}
                alt="Tatum Bank logo"
              />
            </Link>
          </div>

          <div className="login-copy">
            <h1 id="login-title">Log In to Tatum Bank</h1>
            <p className="login-subtitle">
              Please enter your Internet Banking details to continue
            </p>
          </div>

          <form id="login-form" className="login-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">
              Email Address or Phone no
            </label>
            <div className="input-group">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email Address or Phone no"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <div className="input-icon">
                <img src={ImageEmailInputIcon} alt="Email icon" />
              </div>
              <p id="email-error" className="error-message hide">
                Your email is incorrect
              </p>
            </div>

            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <div className="input-group">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <div className="input-icon">
                <img src={ImagePasswordInputIcon} alt="Show password icon" />
              </div>
              <p id="password-error" className="error-message hide">
                Your password is not up to 6 characters
              </p>
            </div>

            <div className="form-link-row">
              <Link className="forgot-password-link" to="/reset-password">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="primary-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging In..." : "Log In"}
            </button>
          </form>

          <div className="login-links">
            <p>
              New to Tatum Bank? <a href="#">Get Started</a>
            </p>
            <p>
              Have a Tatum Bank Account?
              <a href="#">Activate account number</a>
            </p>
          </div>
        </div>

        <footer
          className="trust-row"
          aria-label="Licensed and insured partnerships"
        >
          <div className="trust-item">
            <span>Licensed by CBN</span>
            <img
              src={ImageCbnLogo}
              alt="CBN licensed badge"
              className="cbn-logo"
            />
          </div>
          <div className="trust-item">
            <span className="insured-by-ndic">Insured by ndic</span>
            <img src={ImageNdicLogo} alt="NDIC logo" className="ndic-logo" />
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Login;
