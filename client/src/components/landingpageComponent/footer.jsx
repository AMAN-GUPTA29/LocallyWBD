// import logo from "../../";
import "./footer.css";

const Footerland = () => {
  return (
    <div>
      <section>
        <div className="adjustnew"></div>
      </section>
      <section>
        <footer className="footeernew">
          <div className="wavesnew">
            <div className="wavenew" id="wave1"></div>
            <div className="wavenew" id="wave2"></div>
            <div className="wavenew" id="wave3"></div>
            <div className="wavenew" id="wave4"></div>
          </div>
          <div className="containeer griid griid--footeer sidemarg">
            <div className="loggo-col">
              <a href="#" className="footeer-logoo">
                {/* <img className="loggo" src={logo} alt="logo" /> */}
                <img
          className="logo-ag"
          alt="Startup logo"
          src="logo.png"
        />
              </a>

              <ul className="sociaal-links">
                <li>
                  <a className="footeer-link" href="#"></a>
                </li>
                <li>
                  <a className="footeer-link" href="#">
                    <ion-icon
                      class="sociaal-icon"
                      name="logo-facebook"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a className="footeer-link" href="#">
                    <ion-icon
                      class="sociaal-icon"
                      name="logo-twitter"
                    ></ion-icon>
                  </a>
                </li>
              </ul>

              <p className="copyrighht">
                Copyright &copy; <span className="year">2027</span> by Locally.
                Inc All rights reserved
              </p>
            </div>
            <div className="address-col">
              <p className="footeer-headinng">Contact us</p>
              <address className="contactts">
                <p className="addreess">
                  623 Harrison St., 2nd Floor, San Francisco, CA 94107
                </p>
                <p>
                  <a className="footeer-link" href="tel:415-201-6370">
                    415-201-6370
                  </a>
                  <br />
                  <a className="footeer-link" href="mailto:hello@amanfood.com">
                    hello@locally.com
                  </a>
                </p>
              </address>
            </div>
            <nav className="nav-col">
              <p className="footeer-headinng">Account</p>
              <ul className="footeer-nav">
                <li>
                  <a className="footeer-link" href="/adminLogin">
                    Admin Login
                  </a>
                </li>
                <li>
                  <a className="footeer-link" href="#">
                    Create account
                  </a>
                </li>
                <li>
                  <a className="footeer-link" href="#">
                    Sign in
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="nav-col">
              <p className="footeer-headinng">Company</p>
              <ul className="footeer-nav">
                <li>
                  <a className="footeer-link" href="#">
                    About Locally
                  </a>
                </li>
                <li>
                  <a className="footeer-link" href="#">
                    For Business
                  </a>
                </li>

                <li>
                  <a className="footeer-link" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="nav-col">
              <p className="footeer-headinng">Resources</p>
              <ul className="footeer-nav">
                <li>
                  <a className="footeer-link" href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="footeer-link" href="#">
                    Privacy & terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footerland;
