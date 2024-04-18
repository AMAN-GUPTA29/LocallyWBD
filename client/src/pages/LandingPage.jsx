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
    
    </div>
  );
}

export default LandingPage;
