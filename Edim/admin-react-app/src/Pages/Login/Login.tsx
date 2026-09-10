import "./Login.css";
import TatumLogo from "../../assets/logo- Tatum Bank 2.svg";
import CBN from "../../assets/CBN.png";
import NDIC from "../../assets/NDIC.png";

function Login() {
  return (
    <div className={"page-shell"}>
      <section className={"hero"}>
        <h1>Bank Simpler, Live Smarter</h1>
        <p>No queues, No Stress, Just seamless banking</p>
      </section>
      <section className={"login"}>
        <img className={"TatumLogo"} src={TatumLogo} alt={"Tatum Logo"} />

        <div>
          <div className={"logInText"}>
            <h2>Log In to Tatum Bank</h2>
            <p>Please enter your Internet Banking details to contine</p>
          </div>

          <form id={"login-form"}>
            <div>
              <input
                className={"details"}
                type={"text"}
                name={"userId"}
                placeholder={"Email Address or Phone no"}
                id={"email"}
                required
              />
              <p className={"error hide"} id={"email-error"}>
                Your email is incorrect
              </p>
            </div>

            <div>
              <input
                className={"details"}
                type={"password"}
                name={"password"}
                placeholder={"Password"}
                id={"password"}
                required
              />
              <p className={"error hide"} id={"password-error"}>
                Your password is not up to 6 characters
              </p>
            </div>

            <a href={"#"} className={"forgotP"}>
              Forgot Password?
            </a>

            <input
              className={"buttonInp"}
              type={"submit"}
              value={"Log In"}
              disabled
            />
          </form>

          <div className={"otherTexts"}>
            <div>
              <div className={"OTDetails"}>
                <p>New to Tatum Bank?</p>
                <a href={"#"}>Get Started</a>
              </div>
              <div className="OTDetails">
                <p>Have a Tatum Bank Account?</p>
                <a href={"#"}>Activate account number</a>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div>
            <p>
              Licensed by CBN
              <img src={CBN} />
            </p>
          </div>

          <div>
            <p>
              INSURED BY NDIC
              <img src={NDIC} />
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Login;
