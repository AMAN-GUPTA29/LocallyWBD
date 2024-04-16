import React from "react";

const ServicesSection = () => {
  return (
    <section className="slidetrans-ag tochangesize-ag">
      <section className="section-how-ag tochangesize-ag" id="how">
        <div className="container-ag tochangesize-ag">
          <span className="subheading-ag ">Services</span>
          <h2 className="heading-secondary-ag">
            3 Types of Services provided by us...
          </h2>
        </div>

        <div className="notflex-ag conntainer-ag grid-ag grid--2-cols-ag grid--center-v-ag tochangesize-ag">
          {/* STEP 01 */}
          <div className="step-text-box-ag slidetrans-ag">
            <p className="step-number-ag">01</p>
            <h3 className="heading-tertiary-ag">
              Outdoor services provided by us
            </h3>
            <p className="step-description-ag">
              Experience the ease of connecting with trusted local auto drivers
              and mechanics through our platform. Whether you need a quick
              repair, a reliable ride, or automotive expertise, we've got your
              outdoor needs covered. Connect locally, support your community,
              and get back on the road with confidence.
            </p>
          </div>

          <div className="step-img-box-ag slidetrans1-ag">
            <img
              src="../src/assets/images/image/service3/outdoor.jpg"
              className="step-img-ag"
              alt="Outdoor services"
            />
          </div>

          {/* STEP 02 */}
          <div className="step-img-box-ag slidetrans1-ag">
            <img
              src="../src/assets/images/image/service3/indoor.jpg"
              className="step-img-ag"
              alt="Indoor services"
            />
          </div>
          <div className="step-text-box-ag slidetrans-ag">
            <p className="step-number-ag">02</p>
            <h3 className="heading-tertiary-ag">Indoor services provided by us</h3>
            <p className="step-description-ag">
              Experience the ease of connecting with trusted local service
              providers, from cleaning professionals to home maintenance experts
              and dedicated nannies. Our platform links you with skilled locals
              who understand your needs, making life simpler and your home
              happier. Support your community while ensuring the well-being of
              your household all with just a click.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="step-text-box-ag slidetrans-ag">
            <p className="step-number-ag">03</p>
            <h3 className="heading-tertiary-ag">
              Miscellaneous services provided by us
            </h3>
            <p className="step-description-ag">
              Unlock a world of convenience with our platform, connecting you to
              a wide range of local services, including your favorite
              restaurants, neighborhood shops, and much more. From delectable
              dining experiences to local retail therapy, we've got all your
              community needs covered. Embrace the local spirit and explore the
              heart of your neighborhood like never before right at your
              fingertips
            </p>
          </div>
          <div className="step-img-box-ag slidetrans1-ag">
            <img
              src="../src/assets/images/image/service3/miscellinious.jpg"
              className="step-img-ag"
              alt="Miscellaneous services"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
