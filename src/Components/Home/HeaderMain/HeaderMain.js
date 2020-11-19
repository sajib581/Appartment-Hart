import React from 'react';
import { useHistory } from 'react-router-dom';
import './HeaderMain.css'

const HeaderMain = () => {
    const history = useHistory()
    const location = history.location.pathname
    return (
        <div className="headerMain">
            <div className="header-function">
                {
                    location == '/' ? <div>
                        <h2>FIND YOUR HOUSE RENT</h2>
                        <div className="row">
                            <div className="col-md-8">
                                <input type="text" className="form-control mr-5" placeholder="Search ..." id="findHouse"></input>
                            </div>
                            <div className="col-md-4">
                                <button className="login-btn">Find Now</button>
                            </div>
                        </div> 
                    </div> : <h1 className="text-center">Apartment</h1>
                }
            </div>
        </div>
    );
};

export default HeaderMain;

