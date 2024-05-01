import React from "react";
import "./backchange.css";

const HeroSection = () => {
  return (
    <section className="section-hero-ag slidetrans-ag tochangesize-ag backimagechange-ag">
      <div className="hero-ag tochangesize-ag">
        <div className="hero-white-ag tochangesize-ag">
          <div className="hero-text-box-ag tochangesize-ag">
            <h1 className="heading-primary-ag heading-main-ag tochangesize-ag head-small-size">
              Get things done with our trusted local professionals
            </h1>
            <p className="hero-description-ag discription-main-ag tochangesize-ag">
              Discover and connect with local businesses effortlessly on
              Locally. Strengthen your community by supporting and exploring
              neighborhood gems. Your local journey starts here.
            </p>

            <div className="butt-main-ag tochangesize-ag">
              <a
                href="/login"
                className="btn-ag btn--full-ag margin-right-sm-ag tochangesize-ag"
              >
                Get started
              </a>

              <a href="#how" className="btn-ag btn--outline-ag tochangesize-ag">
                Learn more &darr;
              </a>
            </div>
          </div>
          <div className="delivered-meals-ag ">
            <div className="delivered-imgs-ag ">
              <img
                src="../src/assets/images/img/customers/customer-1.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-2.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-3.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-4.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-5.jpg"
                alt="Customer photo"
              />
              <img
                src="../src/assets/images/img/customers/customer-6.jpg"
                alt="Customer photo"
              />
            </div>
            <p className="delivered-text-ag ">
              <span>250,000+</span> Happy Customers
            </p>
          </div>
        </div>
        <div className="hero-img-box-ag ">
          <picture>
            <source
              srcSet="../src/assets/images/img/hero.webp"
              type="images/image/webp"
            />
            <source
              srcSet="../src/assets/images/img/hero-min.png"
              type="images/image/png"
            />

            {/* <img
              src="img/hero-min.png"
              className="hero-img-ag"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            /> */}
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
