import React from "react";
import 'animate.css';
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const FeaturedSection = () => {
  return (
    <section className="section-featured-ag slidetrans-ag tochangesize-ag">
      <div className="container-ag tochangesize-ag">
        <h2 className="heading-featured-in-ag tochangesize-ag">As featured in</h2>
        <div className="logos-ag tochangesize-ag">
          <AnimatedOnScroll animationIn="animate__animated animate__swing">
            {
              <img
              className="logo-ag slidetrans-ag tochangesize-ag animate__animated animate__shakeX"
              src="../src/assets/images/img/logos/techcrunch.png"
              alt="Techcrunch logo"
            />
            }
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__swing">
            {
          <img
            className="logo-ag slidetransl-ag tochangesize-ag"
            src="../src/assets/images/img/logos/business-insider.png"
            alt="Business Insider logo"
          />
            }
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animationIn="animate__animated animate__shakeX">{

            <img
            className="logo-ag slidetrans-ag tochangesize-ag"
            src="../src/assets/images/img/logos/the-new-york-times.png"
            alt="The New York Times logo"
            />

            }
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animationIn="animate__animated animate__swing">
            
            {
               <img
               className="logo-ag slidetransl-ag tochangesize-ag"
              src="../src/assets/images/img/logos/forbes.png"
              alt="Forbes logo"
              />
              }
          
          
          </AnimatedOnScroll>
          {/* <AnimatedOnScroll animationIn="animate__animated animate__shakeX"> */}
            
            {
             <img
             className="logo-ag slidetrans-ag tochangesize-ag"
             src="../src/assets/images/img/logos/usa-today.png"
             alt="USA Today logo"
           />
            }
          
          
          {/* </AnimatedOnScroll> */}
        
         

          
         
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
