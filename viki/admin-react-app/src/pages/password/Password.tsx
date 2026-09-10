  import './Password.css'
  import Logo from "../../assets/logo- Tatum Bank 2.svg";
  import CBNLogo from "../../assets/cbn.png";
  import NDICLogo from "../../assets/ndic.png";
 function Password() {
  return (
    <div className="page-shell">
      <section className="hero-panel">
        <h1 className="hero-title">Bank Simpler, Live Smarter</h1>
        <p className="hero-subtitle">No queques.No stress.Just seemless banking.</p>
      </section>
      
      <section className="password-panel">
        <div className="password-card">
        <div className="password- form">
            <img src={Logo} 
            alt="Tatum Bank logo displaying the text Tatum Bank, shown in the password change form." 
            width="117px"
             height="49px"/>

             <div className="password-header">
                <h2>Change Password</h2>
                <p>Please enter your password below </p>
             </div>
             
             <form action="" method ="post" noValidate>
                <div className ="field">
                    <input 
                    name="user-id"
                    type="text"
                     placeholder="New Password"/>

                     <span className="field-icon field-icon--accent" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
                  </svg>
                </span>
                </div>

                <div className="field">
                    <input 
                    name="password"
                    type="password" 
                    placeholder="Confirm New Password" required />

                    <span className="field-icon field-icon--accent" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
                  </svg>
                </span>
                </div>
                 <button type="submit" className="btn-primary">Reset Password</button>
                 
              </form>
        </div>

        <div className="signin-links">
            <p>New to Tatum Bank? <a href="/register">Get Started</a></p>
            <p>
              Have a Tatum Bank account?<a href="/active-account"
                >Activate Account</a>
            </p>
          </div>
        </div>
        <footer className="login-footer">
          <p className="footer-item">
            Licenced by CBN
            <img
              src={CBNLogo}
              alt="CBN logo"
              width="45px"
              height="25px"
            />
          </p>
          <p className="footer-item">
            INSURED BY NDIC
            <img
              src={NDICLogo}
              alt="NDIC logo"
              width="45px"
              height="25px"
            />
          </p>
        </footer>
      </section>
    </div>
  )
}


export default Password;