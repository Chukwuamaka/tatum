import Logo from "../../assets/images/tatum-bank-logo.svg";
import EyeIcon from "../../assets/images/eye-icon.png";
import CBNLogo from "../../assets/images/cbn-logo.png";
import NDICLogo from "../../assets/images/ndic-logo.png";
import "./ChangePassword.css";

const ChangePassword = () => {
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
            src={Logo}
            alt="Tatum Bank Logo"
            className="tatum-logo"
          />

          <div className="form-container">
            <div className="form-header">
              <h2 className="form-heading">Change Password</h2>
              <p className="form-subtitle">Please enter your new password below</p>
            </div>
            <form action="" className="login-form">
              <div className="form-input">
                <input
                  name="password"
                  type="password"
                  placeholder="New Password"
                  className=""
                  required
                />
                <img src={EyeIcon} alt="eye icon" />
              </div>
              <div className="form-input">
                <input
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                  className=""
                  required
                />
                <img src={EyeIcon} alt="eye icon" />
              </div>

              <button type="submit" className="reset-password-btn">
                Reset Password
              </button>
            </form>
          </div>

          <div className="form-links">
            <p className="">
              New to Tatum Bank?
              <a href="/register" className="form-link">
                Get Started
              </a>
            </p>
            <p className="">
              Have a Tatum Bank account?
              <a href="/activate" className="form-link">
                Activate account number
              </a>
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
  );
};

export default ChangePassword;
