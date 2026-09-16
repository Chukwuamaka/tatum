
import "./Change_password.css";
import TatumLogo from "../../assets/tatumlogo.png";
import CbnLogo from "../../assets/cbnlogo.png";
import NdicLogo from "../../assets/NDIC.png";
import heroImage from "../../assets/vibrant-Smile.png";
import { Link } from "react-router";

function ChangePassword() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="change-password-page page-shell">
      <main className="hero-layout">
        <section className="hero-panel" aria-label="Banking banner">
          <div className="hero-overlay" />
          <img
            src={heroImage}
            alt="Smiling woman using a tablet"
            style={{ display: "none" }}
          />
          <div className="hero-content">
            <h1>Bank Simpler, Live Smarter</h1>
            <p>No queues. No stress. Just seamless banking.</p>
            <div className="hero-dots" aria-hidden="true">
              <span className="hero-dot"></span>
              <span className="hero-dot active"></span>
              <span className="hero-dot"></span>
            </div>
          </div>
        </section>

        <section className="login-panel" aria-labelledby="change-password-title">
          <div className="login-card">
            <div className="login-brand">
              <a className="brand" href="#">
                <img className="brand-logo" src={TatumLogo} alt="Tatum Bank logo" />
              </a>
            </div>

            <div className="login-copy">
              <h1 id="change-password-title">Change Password</h1>
              <p className="login-subtitle">Please enter your new password below</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="password" name="newPassword" placeholder="New Password" required />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  required
                />
              </div>

              <button type="submit" className="primary-btn">Reset Password</button>
            </form>

            <div className="login-links">
              <p>
                New to Tatum Bank? <Link to="/">Get Started</Link>
              </p>
              <p>
                Have a Tatum Bank Account? <Link to="/">Activate account number</Link>
              </p>
            </div>
          </div>

          <footer className="trust-row" aria-label="Trusted financial partners">
            <div className="trust-item">
              <span>Licensed by CBN</span>
              <img src={CbnLogo} alt="CBN licensed badge" className="cbn-logo" />
            </div>
            <div className="trust-item">
              <span className="insured-by-ndic">Insured by ndic</span>
              <img src={NdicLogo} alt="NDIC logo" className="ndic-logo" />
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default ChangePassword;

