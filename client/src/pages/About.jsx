import React from "react";
import Footer from "../components/customerviewComponent/Footer";
import NavPreLog from "../components/contactUsComponent/NavPreLog";
import _AbouBody from "../components/aboutComponent/_AbouBody";

export default () => {
    return (
        <div>
            <NavPreLog />
            <_AbouBody />
            <Footer />
        </div>
    )
}