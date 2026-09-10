
import NDICLogo from "../../assets/images/ndic_logo.svg"
import CBNLogo from "../../assets/images/cbn_logo.svg"
import TatumLogo from "../../assets/images/tatum_logo.svg"

function Login() {
    return (
        <div className="grandpa">

        {/* Hero Section  */}
        <section className="hero">

            <div className="hero-content">

                <h1 className="h-title">
                    Bank Simpler, Live Smarter
                </h1>

                <p className="h-sub">
                    No queues. No stress. Just seamless banking.
                </p>

                <div className="slider-indicators">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        </section>


        {/* Login Section */}
        <section className="sized-box">

            <div className="login-container">

                {/* Tatum Bank Logo */}
                <img
                    src={TatumLogo}
                    className="tatum-logo"
                    width="117px"
                    height="49px"
                    alt="Tatum Bank Logo"
                ></img>


                {/* Login Content */}
                <div className="login-content">

                    <div className="login-heading">

                        <h2>
                            Log In to Tatum Bank
                        </h2>

                        <p>
                            Please enter your Internet Banking details to continue
                        </p>

                    </div>


                    {/* Login Form */}
                    <form action="" id = "login-form" className="login-form">

                        {/* Email / Phone */}
                        <div className="input-container">

                            <input
                                type="text"
                                placeholder="Email Address or Phone no"
                                required
                            ></input>

                            <span className="input-icon">
                                ✣
                            </span>
                            <p id="email-error" className="error">Email not correct</p>
                        </div>
                        


                        {/* Password */}
                        <div className="input-container">

                            <input
                                type="password"
                                placeholder="Password"
                                required
                            ></input>
                            <p id="password-error" className="error">Password is not correct</p>

                            <span className="eye-icon"></span>

                        </div>


                        {/* Forgot Password */}
                        <div className="forgot-password">

                            <a href="changePassword.html">
                                Forgot Password?
                            </a>

                        </div>


                        {/* Login Button */}
                        <button type="submit">
                            Log In
                        </button>

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

                </div>


                {/* Footer */}
                <footer>

                    <div className="footer-item">

                        <span>
                            Licensed by CBN
                        </span>

                        <img
                            src={CBNLogo}
                            width="27px"
                            height="27px"
                            alt="CBN logo"
                        ></img>

                    </div>


                    <div className="footer-item">

                        <span>
                            INSURED BY NDIC
                        </span>

                        <img
                            src={NDICLogo}
                            width="63px"
                            height="28px"
                            alt="NDIC logo"
                        ></img>

                    </div>

                </footer>
            </div>
        </section>

    </div>
    )
}

export default Login