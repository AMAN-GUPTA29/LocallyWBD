import React from "react";

const FeaturedSection = () => {
  return (
    <section className="section-featured-ag slidetrans-ag tochangesize-ag">
      <div className="container-ag tochangesize-ag">
        <h2 className="heading-featured-in-ag tochangesize-ag">As featured in</h2>
        <div className="logos-ag tochangesize-ag">
          <img
            className="logo-ag slidetrans-ag tochangesize-ag"
            src="../src/assets/images/img/logos/techcrunch.png"
            alt="Techcrunch logo"
          />
          <img
            className="logo-ag slidetransl-ag tochangesize-ag"
            src="../src/assets/images/img/logos/business-insider.png"
            alt="Business Insider logo"
          />
          <img
            className="logo-ag slidetrans-ag tochangesize-ag"
            src="../src/assets/images/img/logos/the-new-york-times.png"
            alt="The New York Times logo"
          />
          <img
            className="logo-ag slidetransl-ag tochangesize-ag"
            src="../src/assets/images/img/logos/forbes.png"
            alt="Forbes logo"
          />
          <img
            className="logo-ag slidetrans-ag tochangesize-ag"
            src="../src/assets/images/img/logos/usa-today.png"
            alt="USA Today logo"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
