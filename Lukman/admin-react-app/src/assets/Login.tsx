
import "./Login.css"
function Login(){
    return(
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

        <section className="login-panel" aria-labelledby="login-title">
          <div className="login-card">
            <div className="login-brand">
              <a className="brand" href="#">
                <img
                  className="brand-logo"
                  src="./tatumlogo.png"
                  alt="Tatum Bank logo"
                />
              </a>
            </div>

            <div className="login-copy">
              <h1 id="login-title">Log In to Tatum Bank</h1>
              <p className="login-subtitle">
                Please enter your Internet Banking details to continue
              </p>
            </div>

            <form id="login-form" className="login-form">
              <label className="sr-only" htmlFor="email">
                Email Address or Phone no
              </label>
              <div className="input-group">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email Address or Phone no"
                  autoComplete="username"
                />
                <p id="email-error" className="error-message hide">
                  Your email is incorrect
                </p>
              </div>

              <label className="sr-only" htmlFor="password">Password</label>
              <div className="input-group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <p id="password-error" className="error-message hide">
                  Your password is not up to 6 characters
                </p>
              </div>

              <div className="form-link-row">
                <a className="forgot-password-link" href="#">
                  Forgot Password?
                </a>
              </div>

              <button type="submit" className="primary-btn">Log In</button>
            </form>

            <div className="login-links">
              <p>New to Tatum Bank? <a href="#">Get Started</a></p>
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
              <img
                src="./cbnlogo.png"
                alt="CBN licensed badge"
                className="cbn-logo"
              />
            </div>
            <div className="trust-item">
              <span className="insured-by-ndic">Insured by ndic</span>
              <img
                src="./NDIC.png"
                alt="NDIC logo"
                className="ndic-logo"
              />
            </div>
          </footer>
        </section>
      </main>
    </div>
  

    )
}

export default Login;

