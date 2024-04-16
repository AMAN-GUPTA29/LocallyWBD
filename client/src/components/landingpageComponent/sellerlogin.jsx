import React from "react";

const SellerLoginSection = () => {
  return (
    <section className="slidetrans-ag tochangesize-ag">
      <div className="seller-login-ag tochangesize-ag">
        <h2 className="heading-secondary-ag marghead-ag tochangesize-ag">
          Wanna become a service provider click below
        </h2>
        <div className="container-ag grid-ag grid--2-cols-ag grid--center-v-ag tochangesize-ag">
          <div>
            <p className="step-description-ag tochangesize-ag">
              {
                " Local service providers, seize the opportunity to thrive on our platform. Connect with a community hungry for local expertise. Whether it's home services, culinary delights, or professional assistance, we offer the tools and support for your local business to flourish. Join us today and together, we'll strengthen our community while boosting your business's success. Be part of something extraordinary—connect and grow your local presence now!"
              }
            </p>
          </div>
          <div className="padd-ag tochangesize-ag">
            <a
              href="/seller/login"
              className="btn-ag btn--full-ag margin-right-sm-ag margbutton-ag tochangesize-ag"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerLoginSection;
