import "./reset-password.css";
import TatumLogo from "../../assets/logo- Tatum Bank 2.svg";
import CBN from "../../assets/CBN.png";
import NDIC from "../../assets/NDIC.png";

function ResetPassword() {
  return (
    <>
      <main className="page-shell">
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

          <div className="form-area">
            <div className="copy">
              <h1 className="title">Reset Your Password</h1>
              <p className="subtitle">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </p>
            </div>

            <div>
              <form className="form" action="#" method="post" noValidate={true}>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email Address or Phone no
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email Address or Phone no"
                    autoComplete="username"
                  />
                </div>

                <button type="submit" className="primary-btn">
                  Send Reset Link
                </button>
              </form>
              <div className="links">
                <p>
                  Remember your password? <a href="/">Back to Login</a>
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
    </>
  );
}

export default ResetPassword;
