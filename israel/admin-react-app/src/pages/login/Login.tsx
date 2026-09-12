import './Login.css';

import Logo from "../../assets/images/tatum-bank-logo.svg";
import UserIdIcon from "../../assets/images/userId-icon.png";
import EyeIcon from "../../assets/images/eye-icon.png";
import CBNLogo from "../../assets/images/cbn-logo.png";
import NDICLogo from "../../assets/images/ndic-logo.png";



export default function Login() {
  return (
    <div className="page-shell">
      <section className="hero-panel">
        <h1 className="hero-title">Bank Simpler, Live Smarter</h1>
        <p className="hero-subtitle">No queues. No stress. Just seamless banking</p>
        <div className="overlay"></div>
      </section>
      <section className="login-panel">
        <div className="login-container">
          <img
            src={Logo }
            alt="Tatum Bank Logo"
            className="tatum-logo"
          />

          <div className="form-container">
            <div className="form-header">
              <h2 className="form-heading">Log In to Tatum Bank</h2>
              <p className="form-subtitle">
                Please enter your Internet Banking details to continue
              </p>
            </div>
            <form id="login-form" className="login-form">
              <div>
                <div className="form-input">
                  <input
                    id="email"
                    name="userId"
                    type="text"
                    placeholder="Email Address or Phone no"
                    className=""
                    required
                  />
                  <img src={UserIdIcon} alt="user id icon" />
                </div>
                <div id="email-error" className="error-message hide">
                  <p>Your Email is incorrect.</p>
                </div>
              </div>
              <div>
                <div className="form-input">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className=""
                    required
                  />
                  <img src={EyeIcon} alt="eye icon" />
                </div>
                <div id="password-error" className="error-message hide">
                  <p>Your password is less than 6 characters.</p>
                </div>
              </div>

              <a href="/forgot-password" className="form-link">Forgot Password?</a>
              <button type="submit" className="login-button" disabled>Log In</button>
            </form>
          </div>

          <div className="form-links">
            <p className="">
              New to Tatum Bank?
              <a href="/register" className="form-link">Get Started</a>
            </p>
            <p className="">
              Have a Tatum Bank account?
              <a href="/activate" className="form-link">Activate account number</a>
            </p>
          </div>
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
  )
}
