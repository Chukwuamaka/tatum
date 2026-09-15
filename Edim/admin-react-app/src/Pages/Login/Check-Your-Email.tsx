import TatumLogo from "../../assets/logo- Tatum Bank 2.svg";
import CBN from "../../assets/CBN.png";
import NDIC from "../../assets/NDIC.png";
import CheckEmail from "../../assets/check-email-icon.svg";
import ArrorInternal from "../../assets/arrow-external-icon.svg";
import ArrowLeft from "../../assets/arrow-left-icon.svg";
import "./check-your-email.css";

function CheckYourEmail() {
  return (
    <>
      <div className="page-shell">
        <main className="hero-layout">
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
              <a href="#">
                <img
                  className="brand-logo"
                  src={TatumLogo}
                  alt="Tatum Bank logo"
                />
              </a>
            </div>

            <div className="main-content">
              <div className="mail-check-icon">
                <img src={CheckEmail} width="96" height="96" />
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
                    src={ArrorInternal}
                    alt="Open external link"
                    width="12"
                    height="12"
                  />
                </a>
                <div className="links">
                  <p>
                    Didn't receive the email?
                    <a href="/" className="resend-link">
                      Resend link
                    </a>
                  </p>
                  <p>
                    <a href="/" className="back-to-login">
                      <img
                        src={ArrowLeft}
                        alt="Back arrow icon"
                        width="10.5"
                        height="9"
                      />
                      Back to Log In
                    </a>
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
                <img src={CBN} alt="CBN licensed badge" className="cbn-logo" />
              </div>
              <div className="trust-item">
                <span className="insured-by-ndic">Insured by ndic</span>
                <img src={NDIC} alt="NDIC logo" className="ndic-logo" />
              </div>
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}

export default CheckYourEmail;
