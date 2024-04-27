import React from "react";
import About from "../components/sellerInfoDisplayComponent/_About";
import Footer from "../components/customerviewComponent/Footer";
import NavPostLog from "../components/customerviewComponent/NavPostLog";
import Header from "../components/sellerInfoDisplayComponent/_Header"
import Contact from "../components/sellerInfoDisplayComponent/_Contact"
import Service from "../components/sellerInfoDisplayComponent/_Service";
import '../components/customerRequestComponent/css/display.css'
import '../components/customerRequestComponent/css/steller.css'
import '../components/customerRequestComponent/css/footer-pranav.css'
import '../components/customerRequestComponent/css/themify-icons.css'

export default () => {
    return (
        <div>
            <NavPostLog />
            <Header url_id="1" name="Anmol" tag="Auto" like="2" dislike="11" />
            
            <About name="Anmol" tag="plumber" description="Very good plumber has had an experience of plumbing annd other minor jobs involved inn it since 15 years , has fixed many water spoilts and destroyed many households."/>
            <Service/>
            <Contact source="https://snazzymaps.com/embed/61257"/>
            <Footer />
        </div>
    )
}