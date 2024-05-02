import React from "react";

const Header = () => {
  return (
    <header className="heaader-ag newhead-ag tochangesize-ag">
      <a href="/">
        <img
          className="logo-ag"
          alt="Startup logo"
          src="logo.png"
        />
      </a>

      <nav className="main-nav-ag tochangesize-ag">
        <ul className="main-nav-list-ag tochangesize-ag">
          <li>
            <a className="main-nav-link-ag tochangesize-ag" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link-ag tochangesize-ag" href="/about">
              AboutUs
            </a>
          </li>
          <li>
            <a className="main-nav-link-ag tochangesize-ag" href="/#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link-ag tochangesize-ag" href="/contact">
              ContactUs
            </a>
          </li>
          <li>
            <a className="main-nav-link-ag nav-cta-ag" href="/consumerlogin">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
