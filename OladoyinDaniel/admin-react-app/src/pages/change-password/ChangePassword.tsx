import TatumLogo from "../../assets/images/tatum_logo.svg"
import NDICLogo from "../../assets/images/ndic_logo.svg"
import CBNLogo from "../../assets/images/cbn_logo.svg"


function ChangePassword() {
    return (
        <div className="grandpa">
        <section className="hero2">
            <div className="hero-content">
                <h1 className="h-title">Bank Simpler Live, Smarter</h1>
                <p className="h-sub">No queues. No stress. Just seamless banking.</p>
                <div className="slider-indicators">
                    <span></span>
                    <span className="active"></span>
                    <span></span>
                </div>
            </div> 
        </section>

        {/* Right Side */}

        <section className="sized-box">
            <div className="login-container">
                <div>
                    <img src={TatumLogo} alt="Tatum Logo" className="tatum-logo"></img>
                </div>
                <div className="login-heading">
                    <h1>Change Password</h1>
                    <p>Please enter your new password below</p>
                </div>

                <form action="" className="login-form">
                    <div className="input-container">
                        <input type="text" placeholder="New Password"></input>
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Confirm Password"></input>
                    </div>
                    <div className="button">
                        <button>Reset Password</button>
                    </div>
                
                </form>

                {/* Account Links */}
                <div className="account-links">
                    <p>
                        New to Tatum Bank?
                        <a href="#">
                            Get Started
                        </a>
                    </p>
                    <p>
                        Have a Tatum Bank Account?
                        <a href="#">
                            Activate account number
                        </a>
                    </p>
                </div>

                {/*Footer*/}
                <footer>
                    <div className="footer-item">
                        <span>
                            Licensed by CBN
                        </span>
                        <img src={CBNLogo} width="27px" height="27px" alt="CBN logo"></img>
                    </div>

                    <div className="footer-item">
                        <span>
                            INSURED BY NDIC
                        </span>
                        <img src={NDICLogo} width="63px" height="28px" alt="NDIC logo"></img>
                    </div>
                </footer>

            </div>
            
        </section>
    </div>
    )
}

export default ChangePassword;