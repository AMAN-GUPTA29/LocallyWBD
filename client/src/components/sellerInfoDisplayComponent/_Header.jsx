import React from "react";

const Header = ({ url_id, name, tag, like, dislike }) => {
  return (
    <header id="home" style={{ backgroundColor: '#000000', padding: '4rem 0' }}>
      <div className="container mx-auto flex items-center justify-center"> {/* Updated */}
        <div className="text-center"> {/* Updated */}
          <h6 style={{ color: '#718096' }}>Hello, I'm</h6>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffffff' }}>{name}</h1>
          <p style={{ color: '#ffffff' }}>{tag}</p>
          <p style={{ color: '#ffffff' }}>Likes: {like}</p>
          <p style={{ color: '#ffffff' }}>Dislikes: {dislike}</p>

          <div style={{ marginTop: '1.5rem' }}>
            <button style={{ backgroundColor: '#4299e1', color: '#ffffff', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: 'bold', cursor: 'pointer' }}>HIRE ME</button>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}> {/* Updated */}
            <a style={{ marginRight: '1rem' }} href="javascript:void(0)">
              <i className="ti-facebook" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
            <a style={{ marginRight: '1rem' }} href="javascript:void(0)">
              <i className="ti-google" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
            <a style={{ marginRight: '1rem' }} href="javascript:void(0)">
              <i className="ti-github" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
            <a href="javascript:void(0)">
              <i className="ti-twitter" style={{ fontSize: '2rem', color: '#ffffff', transition: 'color 0.3s ease' }}></i>
            </a>
          </div>
        </div>
        <div className="img-holder">
          <img src="/images/man.svg" alt="" style={{ maxWidth: '100%' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
