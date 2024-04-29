import React from "react";

const Contact = ({ source }) => {
  return (
    <section id="contact" style={{ backgroundColor: '', padding: '4rem 0' }}>
      <div className="container text-center">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ color: '#718096' }}>Contact</h1>
          <h4 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Get In Touch With Me</h4>
          <p style={{ color: '#4a5568', marginBottom: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. rerum commodi corrupti, temporibus non quam.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
            <i className="ti-location-pin" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a5568' }}></i>
            <div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Location</h5>
              <p style={{ color: '#4a5568' }}>12345 Fake ST NoWhere AB Country</p>
            </div>
          </div>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
            <i className="ti-mobile" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a5568' }}></i>
            <div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Phone Number</h5>
              <p style={{ color: '#4a5568' }}>(123) 456-7890</p>
            </div>
          </div>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
            <i className="ti-email" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4a5568' }}></i>
            <div>
              <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Email Address</h5>
              <p style={{ color: '#4a5568' }}>info@website.com</p>
            </div>
          </div>
        </div>
      </div>

      <div id="map" style={{ marginTop: '2rem' }}>
        <iframe src={source} style={{ width: '100%', height: '400px', borderRadius: '0.5rem', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}></iframe>
      </div>
    </section>
  );
};

export default Contact;




