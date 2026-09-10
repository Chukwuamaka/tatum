  import './change-pass.css'
  import CBNLogo from "../../assets/cbn.png";
  import NDICLogo from "../../assets/ndic.png";
  import TatumBankLogo from "../../assets/logo- Tatum Bank 2.svg";
  

function ChangePass() {
  return (
     <div className="page-shell">
    
      <section className="hero-panel">
        <h1 className="hero-title">Bank Simpler, Live Smarter</h1>
        <p className="hero-subtitle">No queques.No stress.Just seemless banking.</p>
      </section>
    
       <section className="changed-panel">
  <div className="changed-card">
    <img
      src={TatumBankLogo}
      alt="Tatum bank logo"
      width="117px"
      height="49px"
      className="logo"
    />
 

    <div className="changed-center">
        <span className="success-icon-wrap">
        <span className="success-icon">✓</span>
        </span>
    
      <div className="changed-header">
        <h2>Password Changed!</h2>
        <p>Your password has been successfully updated.</p>
        <p>You can now log in with your new password.</p>
      </div>

      <button type="submit" className="btn-primary">Back to Login</button>
    </div>

    <footer className="changed-footer">
      <p className="footer-item">
        Licenced by CBN
        <img src={CBNLogo} alt="CBN logo" width="45px" height="25px" />
      </p>
      <p className="footer-item">
        INSURED BY NDIC
        <img src={NDICLogo} alt="NDIC logo" width="45px" height="25px" />
      </p>
    </footer>
  </div>
</section>
    </div>
  )
}
export default ChangePass;