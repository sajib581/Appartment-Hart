import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className="header-img" src="https://i.ibb.co/ys7T9jg/Logo.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#"> <span className="highlight">Home</span> <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#"> <span className="highlight">About</span> <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#"> <span className="highlight">Services</span> <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#"> <span className="highlight">Concerns</span> <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#"> <span className="highlight">Event</span>  <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active mr-3">
                                <a className="nav-link" href="#"> <span className="highlight">Contact</span> <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active mr-3 mt-1">
                                <button className="login-btn">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;