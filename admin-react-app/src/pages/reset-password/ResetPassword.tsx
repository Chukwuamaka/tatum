import { Link } from "react-router";

import "./ResetPassword.css";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import ImageNdicLogo from "../../assets/ndic-logo.png";
import ImageCbnLogo from "../../assets/cbn-logo.png";

function ResetPassword() {
  return (
    <main className="reset-password page-shell">
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
            <form className="form" action="#" method="post" noValidate>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email Address or Phone no
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email Address or Phone no"
                  autoComplete="username"
                />
              </div>

              <button type="submit" className="primary-btn">
                Send Reset Link
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
