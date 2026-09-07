import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";

import "./ResetPassword.css";
import { startPasswordReset } from "../../api/auth";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import ImageNdicLogo from "../../assets/ndic-logo.png";
import ImageCbnLogo from "../../assets/cbn-logo.png";
import Toast from "../../reusables/Toast";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await startPasswordReset({ email });

      if (!result.success) {
        throw new Error(result.message || "Unable to send reset link.");
      }

      sessionStorage.setItem("tatum.resetEmail", email);
      navigate("/check-your-email");
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
          (error instanceof Error
            ? error.message
            : "Unable to send reset link."),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="reset-password page-shell">
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

      <section className="right-panel">
        <div className="brand">
          <Link to="/">
            <img
              className="brand-logo"
              src={ImageTatumBankLogo}
              alt="Tatum Bank logo"
            />
          </Link>
        </div>

        <div className="form-area">
          <div className="copy">
            <h1 className="title">Reset Your Password</h1>
            <p className="subtitle">
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </p>
          </div>

          <div>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="username"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="primary-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
            <div className="links">
              <p>
                Remember your password? <Link to="/">Back to Login</Link>
              </p>
            </div>
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
    </main>
  );
}

export default ResetPassword;
