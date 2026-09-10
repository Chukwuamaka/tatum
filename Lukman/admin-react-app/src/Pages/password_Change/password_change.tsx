
import "./password_change.css";
import { Link } from "react-router";
import TatumLogo from "../../assets/tatumlogo.png";
import CbnLogo from "../../assets/cbnlogo.png";
import NdicLogo from "../../assets/NDIC.png";

function PasswordChanged() {
  return (
    <main className="page">
    <section className="welcome">
      <div className="welcome-text">
        <h1>Bank Simpler, Live<br />Smarter</h1>
        <p>No queues. No stress. Just seamless banking.</p>
        <div className="slides">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </div>
    </section>

    <section className="success" aria-labelledby="password-changed-title">
      <img className="logo" src={TatumLogo} alt="Tatum Bank logo" />
      <div className="message">
        <div className="check" aria-hidden="true">&#10003;</div>
        <h2 id="password-changed-title">Password Changed!</h2>
        <p>Your password has been successfully updated.<br />You can now log in with your new password.</p>
        <Link className="login-button" to="/">Back to Login</Link>
      </div>
      <div className="partners">
        <span>Licensed by CBN</span>
        <img src={CbnLogo} alt="CBN" />
        <span>INSURED BY NDIC</span>
        <img src={NdicLogo} alt="NDIC" />
      </div>
    </section>
  </main>

    );
}

export default PasswordChanged;
