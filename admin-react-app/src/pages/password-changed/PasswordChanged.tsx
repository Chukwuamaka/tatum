import { Link } from "react-router";

import "./PasswordChanged.css";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import ImageCheckmarkIcon from "../../assets/checkmark-icon.svg";
import ImageNdicLogo from "../../assets/ndic-logo.png";
import ImageCbnLogo from "../../assets/cbn-logo.png";

function PasswordChanged() {
  return (
    <div className="password-changed page-shell">
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
          <Link className="brand" to="/">
            <img
              className="brand-logo"
              src={ImageTatumBankLogo}
              alt="Tatum Bank logo"
            />
          </Link>
        </div>

        <div className="main-content">
          <div className="icon-and-copy">
            <p className="icon-container">
              <img
                src={ImageCheckmarkIcon}
                alt="Checkmark icon"
                className="checkmark-icon"
              />
            </p>
            <div className="copy">
              <p className="main-copy">Password changed!</p>
              <p className="sub-copy">
                Your password has been successfully updated. You can now log in
                with your new password.
              </p>
            </div>
          </div>
          <Link to="/" className="back-to-login-btn">
            Back to Login
          </Link>
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

export default PasswordChanged;
