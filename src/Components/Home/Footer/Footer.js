import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-flex">
                    <img src="https://i.ibb.co/fr4Gzt4/map-marker-alt-solid-1.png" alt=""/>
                        <p className="ml-3">
                            H#340 (4th Floor), Road #24, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                            Phone: 018XXXXXXXX <br />
                            E-mail: info@company.com
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h5>Company</h5>
                    About <br />
                    Site Map <br />
                    Support Center <br />
                    Terms Conditions <br />
                    Submit Listing <br />
                    </div>
                    <div className="col-md-2">
                        <h5>Quick Links</h5>
                        Quick Links
                        Rentals
                        Sales
                        Contact
                        Terms Conditions
                        Our blog
                    </div>
                    <div className="col-md-3">
                        <h5>About us</h5>
                        We are the top real estate  <br/>
                        agency in Sydney, with agents <br/>
                        available to answer any <br/>
                        question 24/7.
                        <div className="d-flex footer-img mt-3" >
                            <img className="mr-3" src="https://i.ibb.co/2ZbgP2x/Vector.png" alt=""/>
                            <img className="mr-3" src="https://i.ibb.co/jR0VcSs/Vector-1.png" alt=""/>
                            <img className="mr-3" src="https://i.ibb.co/ZXcqGLz/Vector-2.png" alt=""/>
                            <img className="mr-3" src="https://i.ibb.co/RH67L9k/Vector-3.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;