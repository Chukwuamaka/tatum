import Logo from "../../assets/images/tatum-bank-logo.svg";
import CheckmarkImage from "../../assets/images/checkmark.png";
import CBNLogo from "../../assets/images/cbn-logo.png";
import NDICLogo from "../../assets/images/ndic-logo.png";
import "./PasswordChanged.css";

const PasswordChanged = () => {
  return (
    <div className="page-shell">
      <section className="hero-panel">
        <h1 className="hero-title">Bank Simpler, Live Smarter</h1>
        <p className="hero-subtitle">No queues. No stress. Just seamless banking</p>
        <div className="overlay"></div>
      </section>
      <section className="password-changed-panel">
        <div className="logo-container">
          <img
            src={Logo}
            alt="Tatum Bank Logo"
            className="tatum-logo"
          />
        </div>
        <div className="password-changed-container">
          <div className="checkmark-container">
            <img
              src={CheckmarkImage}
              alt="checkmark-image"
              className="checkmark"
            />
          </div>
          <div className="password-changed-text">
            <h2>Password Changed</h2>
            <p>
              Your password has been successfully updated. You can now log in
              with your new password.
            </p>
          </div>

          <a href="/login" className="back-to-login-btn">
            Back to Login
          </a>
        </div>
        <footer className="footer">
          <p>
            Licensed by CBN
            <img
              src={CBNLogo}
              alt="CBN Logo"
              width="27"
              height="27"
            />
          </p>
          <p>
            INSURED BY NDIC
            <img
              src={NDICLogo}
              alt="NDIC Logo"
              width="63"
              height="28"
            />
          </p>
        </footer>
      </section>
    </div>
  );
}

export default PasswordChanged