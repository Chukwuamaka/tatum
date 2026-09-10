import "./password-changed.css";
import TatumLogo from "../../assets/logo- Tatum Bank 2.svg";
import CBN from "../../assets/CBN.png";
import NDIC from "../../assets/NDIC.png";
import CheckMarker from "../../assets/checkmark-icon.svg";

function PasswordChanged() {
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
              <a className="brand" href="#">
                <img
                  className="brand-logo"
                  src={TatumLogo}
                  alt="Tatum Bank logo"
                />
              </a>
            </div>

            <div className="main-content">
              <div className="icon-and-copy">
                <p className="icon-container">
                  <img
                    src={CheckMarker}
                    alt="Checkmark icon"
                    className="checkmark-icon"
                  />
                </p>
                <div className="copy">
                  <p className="main-copy">Password changed!</p>
                  <p className="sub-copy">
                    Your password has been successfully updated. You can now log
                    in with your new password.
                  </p>
                </div>
              </div>
              <a href="/" className="back-to-login-btn">
                Back to Login
              </a>
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

export default PasswordChanged;
