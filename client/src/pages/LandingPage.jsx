import "../components/landingpageComponent/LandingPage.css";
import { Fragment } from "react";
import Header from "../components/landingpageComponent/header";
import HeroSection from "../components/landingpageComponent/Hero";
import FeaturedSection from "../components/landingpageComponent/Company";
import CompanyInfoSection from "../components/landingpageComponent/Info";
import ServicesSection from "../components/landingpageComponent/Services";
import TestimonialsSection from "../components/landingpageComponent/rating";
import SellerLoginSection from "../components/landingpageComponent/sellerlogin";
// import Footer from "./../shay-component/Footer";
import Footerland from "../components/landingpageComponent/footer";

function LandingPage() {
  return (
    <div  className="toAll">
      <Fragment>
      {/* <header classNameName={styles.header}>
        <a href="/">
          <img classNameName={styles.logo} alt="Startup logo" src="images/logo.png" />
        </a>

        <nav classNameName={styles.mainNav}>
          <ul classNameName={styles.mainNavList}>
            <li><a classNameName={styles.mainNavLink} href="/">Home</a></li>
            <li><a classNameName={styles.mainNavLink} href="/about">About Us</a></li>
            <li><a classNameName={styles.mainNavLink} href="/#testimonials">Testimonials</a></li>
            <li><a classNameName={styles.mainNavLink} href="/contact">ContactUs</a></li>
            <li><a classNameName={${styles.mainNavLink} ${styles.navCta}} href="/login">Login</a></li>
          </ul>
        </nav>
      </header> */}
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="testy"></div>
      <FeaturedSection></FeaturedSection>
      <div className="testy"></div>
      <CompanyInfoSection> </CompanyInfoSection>
      <div className="testy"></div>
      <ServicesSection></ServicesSection>
      <div className="testy"></div>
      <TestimonialsSection></TestimonialsSection>
      <SellerLoginSection></SellerLoginSection>
      <Footerland />
    </Fragment>
    </div>
  );
}

export default LandingPage;
