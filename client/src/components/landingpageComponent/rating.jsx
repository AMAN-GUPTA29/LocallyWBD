import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import 'animate.css';

const TestimonialsSection = () => {
  return (
    <section
      className="section-testimonials-ag partsec2-ag slidetrans-ag tochangesize-ag"
      id="testimonials-ag"
    >
      <div className="part11-ag tochangesize-ag">
        <div className="testimonials-container-ag tochangesize-ag">
          <span className="subheading-ag tochangesize-ag">Testimonials</span>
          <h2 className="heading-secondary-ag tochangesize-ag">
            Once you try it, you cant go back
          </h2>

          <div className="testimonials-ag tochangesize-ag">
          <AnimatedOnScroll animationIn="animate__animated animate__backInLeft">
            <div className="testi-background-ag slidetrans-ag ">
              <figure className="testimonial-ag ">
                <img
                  className="testimonial-img-ag"
                  alt="Photo of customer Dave Bryson"
                  src="../src/assets/images/img/customers/dave.jpg"
                />
                <blockquote className="testimonial-text-ag testimoniallandeval">
                  {
                    "Exceptional service! The team was punctual and efficient. Our home looks amazing. Highly recommend this locally."
                  }
                </blockquote>
                <p className="testimonial-name-ag">&mdash; Dave Bryson</p>
              </figure>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="animate__animated animate__backInLeft">
            <div className="testi-background-ag slidetrans-ag">
              <figure className="testimonial-ag">
                <img
                  className="testimonial-img-ag"
                  alt="Photo of customer Ben Hadley"
                  src="../src/assets/images/img/customers/ben.jpg"
                />
                <blockquote className="testimonial-text-ag">
                  {
                    "Quick response and professional work. The technician fixed our issue swiftly. We're thrilled with the service!"
                  }
                </blockquote>
                <p className="testimonial-name-ag">&mdash; Ben Hadley</p>
              </figure>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="animate__animated animate__backInLeft">
            <div className="testi-background-ag slidetrans-ag">
              <figure className="testimonial-ag">
                <img
                  className="testimonial-img-ag"
                  alt="Photo of customer Steve Miller"
                  src="../src/assets/images/img/customers/steve.jpg"
                />
                <blockquote className="testimonial-text-ag">
                  {
                    "Reliable childcare support. Our nanny is wonderful and trustworthy."
                  }
                </blockquote>
                <p className="testimonial-name-ag">&mdash; Steve Miller</p>
              </figure>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="animate__animated animate__backInLeft">
            <div className="testi-background-ag slidetrans-ag">
              <figure className="testimonial-ag">
                <img
                  className="testimonial-img-ag"
                  alt="Photo of customer Hannah Smith"
                  src="../src/assets/images/img/customers/hannah.jpg"
                />
                <blockquote className="testimonial-text-ag">
                  {
                    "Great local eats! The restaurant offers delicious dishes and warm ambiance."
                  }
                </blockquote>
                <p className="testimonial-name-ag">&mdash; Hannah Smith</p>
              </figure>
            </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
      <div className="part22-ag tochangesize-ag">
      <AnimatedOnScroll animationIn="animate__animated animate__backInRight">
        <div className="gallery-ag tochangesize-ag">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15].map((index) => (
            
            <figure
              className="gallery-item-ag slidetrans-ag tochangesize-ag"
              key={index}
            >
              <img
                src={`../src/assets/images/image/allservice/${index}.jpg`}
                alt={`Photo of beautifully arranged food ${index}`}
              />
            </figure>
          ))}
        </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;
