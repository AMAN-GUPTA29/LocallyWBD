import React from "react";
import '../customerRequestComponent/css/navbar.css'
import logo from '../customerRequestComponent/images/logo.png'

export default () => {
    return (
        <header className="headeer">
            <a href="/">
                <img className="loggo" alt="Startup logo" src={logo} />
            </a>

            <nav className="maiin-naav">
                <ul className="maiin-naav-lisst">
                    <li><a className="maiin-naav-linnk" href="/">Home</a></li>
                    <li><a className="maiin-naav-linnk" href="/about">About Us</a></li>
                    <li>
                        <a className="maiin-naav-linnk" href="/#testimonials">Testimonials</a>
                    </li>
                    <li><a className="maiin-naav-linnk" href="/contact">ContactUs</a></li>
                    <li><a className="maiin-naav-linnk naav-ctta" href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}