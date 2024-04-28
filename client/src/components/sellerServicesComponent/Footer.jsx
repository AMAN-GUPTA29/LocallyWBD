import React from 'react'



const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
};


export const Footer = () => {
    return (
        <div style={footerStyle}>
            <p>&copy; 2023 Locally. All Rights Reserved.</p>
        </div>
    )
}
