// import "./Login.css";
import TatumLogo from "../../assets/logo- Tatum Bank 2.svg";
import CBN from "../../assets/CBN.png";
import NDIC from "../../assets/NDIC.png";
import PasswordInput from "../../assets/password-input-icon.svg";
import "./change-password.css";

function ChangePassword() {
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
            <div className="form-area">
              <div className="brand">
                <a className="brand" href="#">
                  <img
                    className="brand-logo"
                    src={TatumLogo}
                    alt="Tatum Bank logo"
                  />
                </a>
              </div>

              <div className="copy">
                <h1 id="title">Change Password</h1>
                <p className="subtitle">Please enter your new password below</p>
              </div>

              <form className="form" action="#" method="post" noValidate={true}>
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
                    <img src={PasswordInput} alt="Show password icon" />
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
                    <img src={PasswordInput} alt="Show password icon" />
                  </div>
                </div>

                <div className="form-link-row">
                  <a className="forgot-password-link" href="/forgot-password">
                    Reset Password
                  </a>
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

export default ChangePassword;
