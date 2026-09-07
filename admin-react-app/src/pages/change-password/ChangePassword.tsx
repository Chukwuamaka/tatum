import { Link } from "react-router";

import "./ChangePassword.css";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import ImagePasswordInputIcon from "../../assets/password-input-icon.svg";
import ImageNdicLogo from "../../assets/ndic-logo.png";
import ImageCbnLogo from "../../assets/cbn-logo.png";

function ChangePassword() {
  return (
    <div className="change-password page-shell">
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
        <div className="form-area">
          <div className="brand">
            <Link className="brand" to="/">
              <img
                className="brand-logo"
                src={ImageTatumBankLogo}
                alt="Tatum Bank logo"
              />
            </Link>
          </div>

          <div className="copy">
            <h1 id="title">Change Password</h1>
            <p className="subtitle">Please enter your new password below</p>
          </div>

          <form className="form" action="#" method="post" noValidate>
            <label className="sr-only" htmlFor="password">
              New Password
            </label>
            <div className="input-group">
              <input
                id="new-password"
                name="new-password"
                type="password"
                placeholder="New Password"
                autoComplete="current-password"
              />
              <div className="input-icon">
                <img src={ImagePasswordInputIcon} alt="Show password icon" />
              </div>
            </div>

            <label className="sr-only" htmlFor="password">
              Confirm New Password
            </label>
            <div className="input-group">
              <input
                id="confirm-new-password"
                name="confirm-new-password"
                type="password"
                placeholder="Confirm New Password"
                autoComplete="current-password"
              />
              <div className="input-icon">
                <img src={ImagePasswordInputIcon} alt="Show password icon" />
              </div>
            </div>

            <div className="form-link-row">
              <Link className="forgot-password-link" to="/reset-password">
                Reset Password
              </Link>
            </div>

            <button type="submit" className="primary-btn">
              Log In
            </button>
          </form>

          <div className="links">
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

export default ChangePassword;
