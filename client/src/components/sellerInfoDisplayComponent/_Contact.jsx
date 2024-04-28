import React from "react";
export default ({source}) => {
    return (
    
        <section id="contact" className="position-relative section">
        <div className="container text-center">
            <h6 className="subtitle">Contact</h6>
            <h6 className="section-title mb-4">Get In Touch With Me</h6>
            <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
                <br/> rerum commodi corrupti, temporibus non quam.</p>

          
                <div className="contact-infos">
                    <div className="item">
                        <i className="ti-location-pin"></i>
                        <div className="">
                            <h5>Location</h5>
                            <p> 12345 Fake ST NoWhere AB Country</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="ti-mobile"></i>
                        <div>
                            <h5>Phone Number</h5>
                            <p>(123) 456-7890</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="ti-email"></i>
                        <div className="mb-0">
                            <h5>Email Address</h5>
                            <p>info@website.com</p>
                        </div>
                    </div>
                </div>
            </div>
        
         <div id="map">
            <iframe src={source}></iframe>
        </div> 
    </section >
    

    )
}