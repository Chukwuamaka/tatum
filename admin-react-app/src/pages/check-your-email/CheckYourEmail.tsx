import { Link } from "react-router";

import "./CheckYourEmail.css";
import ImageTatumBankLogo from "../../assets/tatum-bank-logo.svg";
import ImageCheckEmailIcon from "../../assets/check-email-icon.svg";
import ImageArrowExternalIcon from "../../assets/arrow-external-icon.svg";
import ImageArrowLeftIcon from "../../assets/arrow-left-icon.svg";
import ImageNdicLogo from "../../assets/ndic-logo.png";
import ImageCbnLogo from "../../assets/cbn-logo.png";

function CheckYourEmail() {
  return (
    <main className="check-your-email page-shell">
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

        <div className="main-content">
          <div className="mail-check-icon">
            <img src={ImageCheckEmailIcon} width="96" height="96" />
          </div>

          <div className="copy">
            <h1 className="title">Check your email</h1>
            <p className="subtitle">
              We've sent a password reset link to your email address. Please
              follow the link in the email to reset your password.
            </p>
          </div>

          <div className="button-and-links">
            <a href="mailto:" className="primary-btn">
              Open Email App
              <img
                src={ImageArrowExternalIcon}
                alt="Open external link"
                width="12"
                height="12"
              />
            </a>
            <div className="links">
              <p>
                Didn't receive the email?
                <Link to="/" className="resend-link">
                  Resend link
                </Link>
              </p>
              <p>
                <Link to="/" className="back-to-login">
                  <img
                    src={ImageArrowLeftIcon}
                    alt="Back arrow icon"
                    width="10.5"
                    height="9"
                  />
                  Back to Log In
                </Link>
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

export default CheckYourEmail;
